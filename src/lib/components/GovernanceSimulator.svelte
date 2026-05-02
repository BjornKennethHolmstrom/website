<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  export let t: any;
  export let lang: string = 'en';

  // --- Topology ---
  const N = 9;
  const T_MAX = 130;
  const T_CRISIS = 25;

  // Node layout (3x3):
  // 0 1 2
  // 3 4 5
  // 6 7 8
  // Node 4 = center (Westphalian authority)
  const NODE_POS: [number,number][] = [
    [80, 60],  [180, 60],  [280, 60],
    [80, 140], [180, 140], [280, 140],
    [80, 220], [180, 220], [280, 220]
  ];

  function neighbours(i: number): number[] {
    const row = Math.floor(i / 3), col = i % 3;
    const r: number[] = [];
    if (row > 0) r.push(i - 3);
    if (row < 2) r.push(i + 3);
    if (col > 0) r.push(i - 1);
    if (col < 2) r.push(i + 1);
    return r;
  }

  function couple(x: number[], beta: number): number[] {
    return x.map((xi, i) =>
      beta * neighbours(i).reduce((acc, j) => acc + (x[j] - xi), 0)
    );
  }

  function clamp(v: number) { return Math.max(0, Math.min(150, v)); }

  // --- Seeded RNG ---
  function makeRng(seed: number) {
    let s = seed;
    return {
      randn() {
        s = (s * 16807) % 2147483647; const u = (s - 1) / 2147483646;
        s = (s * 16807) % 2147483647; const v = (s - 1) / 2147483646;
        return Math.sqrt(-2 * Math.log(u + 1e-9)) * Math.cos(2 * Math.PI * v);
      }
    };
  }

  function nodeColor(value: number): string {
    const v = Math.max(0, Math.min(100, ((value - 40) / 70) * 100));
    if (v > 70) return 'healthy';
    if (v > 35) return 'stressed';
    return 'critical';
  }

  // ================================================================
  // SCENARIO DEFINITIONS
  // ================================================================
  type Scenario = 'supplyChain' | 'capture' | 'disinfo' | 'ecological';
  let scenario: Scenario = 'supplyChain';

  // Supply chain params
  const SC = {
    CRISIS_NODES: [1, 6],
    TAU_A: 14, SIGMA_A: 6.0, K_A: 0.28,
    TAU_B: 2,  SIGMA_B: 0.4, K_B: 0.75,
    A_SYS: 0.95, X_REF: 100, CRISIS_MAG: -42, BETA: 0.025
  };

  // Capture params
  // Center node (4) is captured in A → inverted gain → all nodes degrade
  // One peripheral node (3) is captured in B → degradation stays local
  const CAP = {
    CAPTURE_NODE_A: 4,
    CAPTURE_NODE_B: 3,
    CORRUPT_GAIN: -0.45,
    TAU_A: 10, SIGMA_A: 3.0, K_A: 0.35,
    TAU_B: 2,  SIGMA_B: 0.4, K_B: 0.70,
    A_SYS: 0.96, X_REF: 100, BETA: 0.02
  };


  // Disinformation params
  // A: false signal inflates perceived mean → controller pushes nodes toward
  //    wrong target (X_FALSE=115). Weak gain stays below oscillation threshold.
  //    Nodes settle at wrong equilibrium ~80 instead of 100. Visible misallocation.
  // B: 3 scattered nodes nudged briefly, strong peer coupling corrects them.
  const DIS = {
    AFFECTED_NODES_B: [2, 3, 7],
    TAU_A: 12, SIGMA_A: 2.0, K_A: 0.32,
    TAU_B: 2,  SIGMA_B: 0.4, K_B: 0.72,
    A_SYS: 0.95, X_REF: 100, BETA: 0.018,
    X_FALSE: 115,   // false signal: controller thinks mean is 115 (too high)
    K_FALSE: 0.06,  // well below stability ceiling for tau=12 — no oscillation
    FALSE_NUDGE: -6.0,
  };

  // Ecological threshold params
  // Slow-building pressure per node (carrying capacity declining)
  // A: sees national average — misses local threshold breaches until cascade
  // B: each node monitors own threshold — acts before local collapse
  const ECO = {
    DECAY_RATE: 0.12,    // capacity loss per step post-crisis (applied per node)
    THRESHOLD: 55,       // below this = collapse cascade (rapid further decay)
    COLLAPSE_ACCEL: 0.08,// extra decay per step once below threshold
    TAU_A: 13, SIGMA_A: 7.0, K_A: 0.28,
    TAU_B: 2,  SIGMA_B: 0.5, K_B: 0.72,
    A_SYS: 0.95, X_REF: 100, BETA: 0.022,
    // Pressure starts hitting different nodes at different times
    PRESSURE_NODES: [    // [nodeIndex, startStep] — staggered local pressures
      [2, 25], [5, 28], [0, 32], [7, 35], [3, 40], [6, 44], [1, 50], [8, 54], [4, 60]
    ]
  };

  // ================================================================
  // RUNTIME STATE
  // ================================================================
  let step = 0;
  let running = false;
  let finished = false;
  let speed = 120;
  let intervalId: any = null;

  let simA: number[][] = [];
  let simB: number[][] = [];

  let nodesA: number[] = Array(N).fill(100);
  let nodesB: number[] = Array(N).fill(100);

  let stabilityA = tweened(100, { duration: 300, easing: cubicOut });
  let stabilityB = tweened(100, { duration: 300, easing: cubicOut });
  let affectedA = 0;
  let affectedB = 0;

  let pulses: any[] = [];
  let pulseId = 0;

  // ================================================================
  // PHASE
  // ================================================================
  $: phase = step < T_CRISIS ? 'steady'
    : step < T_CRISIS + 6 ? 'shock'
    : step < T_CRISIS + 22 ? 'response'
    : step < T_CRISIS + 55 ? 'cascade'
    : 'recovery';

  // ================================================================
  // PRECOMPUTE
  // ================================================================
  function precomputeSupplyChain() {
    const rng = makeRng(42);
    const { CRISIS_NODES, TAU_A, SIGMA_A, K_A, TAU_B, SIGMA_B, K_B,
            A_SYS, X_REF, CRISIS_MAG, BETA } = SC;
    const drift = X_REF * (1 - A_SYS);

    const xA: number[][] = [Array(N).fill(X_REF)];
    const xB: number[][] = [Array(N).fill(X_REF)];
    const uA: number[][] = [Array(N).fill(0)];
    const uB: number[][] = [Array(N).fill(0)];
    const yA: number[][] = [Array(N).fill(X_REF)];
    const yB: number[][] = [Array(N).fill(X_REF)];

    for (let tt = 1; tt < T_MAX - 1; tt++) {
      const d = Array(N).fill(0);
      if (tt === T_CRISIS) CRISIS_NODES.forEach(n => { d[n] = CRISIS_MAG; });

      const yAt = xA[tt-1].map(x => x + rng.randn() * SIGMA_A);
      const yBt = xB[tt-1].map(x => x + rng.randn() * SIGMA_B);
      yA.push(yAt); yB.push(yBt);

      const meanErr = X_REF - yAt.reduce((a,b) => a+b, 0) / N;
      uA.push(Array(N).fill(K_A * meanErr));
      uB.push(yBt.map(y => K_B * (X_REF - y)));

      const actA = tt >= TAU_A ? uA[tt - TAU_A] : Array(N).fill(0);
      const actB = tt >= TAU_B ? uB[tt - TAU_B] : Array(N).fill(0);
      const cA = couple(xA[tt-1], BETA);
      const cB = couple(xB[tt-1], BETA);

      xA.push(xA[tt-1].map((x,i) => clamp(A_SYS*x + cA[i] + actA[i] + d[i] + drift)));
      xB.push(xB[tt-1].map((x,i) => clamp(A_SYS*x + cB[i] + actB[i] + d[i] + drift)));
    }
    simA = xA; simB = xB;
  }

  function precomputeCapture() {
    const rng = makeRng(77);
    const { CAPTURE_NODE_B, TAU_A, SIGMA_A, K_A, TAU_B, SIGMA_B, K_B,
            A_SYS, X_REF, BETA } = CAP;
    const drift = X_REF * (1 - A_SYS);

    // Corrupted controller drives nodes toward X_CORRUPT (40) instead of X_REF (100).
    // Inverting error only works if system is off-equilibrium — at rest it has no effect.
    // Targeting a wrong equilibrium creates sustained pull regardless of current state.
    const X_CORRUPT = 40;
    const K_CORRUPT = 0.55;

    const xA: number[][] = [Array(N).fill(X_REF)];
    const xB: number[][] = [Array(N).fill(X_REF)];
    const uA: number[][] = [Array(N).fill(0)];
    const uB: number[][] = [Array(N).fill(0)];
    const yA: number[][] = [Array(N).fill(X_REF)];
    const yB: number[][] = [Array(N).fill(X_REF)];

    for (let tt = 1; tt < T_MAX - 1; tt++) {
      const captured = tt >= T_CRISIS;

      // Architecture A: captured center steers all nodes toward X_CORRUPT
      const yAt = xA[tt-1].map(x => x + rng.randn() * SIGMA_A);
      yA.push(yAt);
      if (captured) {
        const meanObs = yAt.reduce((a,b) => a+b, 0) / N;
        const corruptSignal = K_CORRUPT * (X_CORRUPT - meanObs);
        uA.push(Array(N).fill(corruptSignal));
      } else {
        const meanErr = X_REF - yAt.reduce((a,b) => a+b, 0) / N;
        uA.push(Array(N).fill(K_A * meanErr));
      }

      // Architecture B: one peripheral node corrupt, rest act correctly per-node
      const yBt = xB[tt-1].map(x => x + rng.randn() * SIGMA_B);
      yB.push(yBt);
      uB.push(yBt.map((y, i) => {
        if (captured && i === CAPTURE_NODE_B) return K_CORRUPT * (X_CORRUPT - y);
        return K_B * (X_REF - y);
      }));

      const actA = tt >= TAU_A ? uA[tt - TAU_A] : Array(N).fill(0);
      const actB = tt >= TAU_B ? uB[tt - TAU_B] : Array(N).fill(0);
      const cA = couple(xA[tt-1], BETA);
      const cB = couple(xB[tt-1], BETA);

      xA.push(xA[tt-1].map((x,i) => clamp(A_SYS*x + cA[i] + actA[i] + drift)));
      xB.push(xB[tt-1].map((x,i) => clamp(A_SYS*x + cB[i] + actB[i] + drift)));
    }
    simA = xA; simB = xB;
  }

  function precomputeDisinfo() {
    const rng = makeRng(55);
    const { AFFECTED_NODES_B, TAU_A, SIGMA_A, K_A, TAU_B, SIGMA_B, K_B,
            A_SYS, X_REF, BETA, X_FALSE, FALSE_NUDGE, K_FALSE } = DIS;
    const drift = X_REF * (1 - A_SYS);

    // B: affected nodes misled for 30 steps, then peer coupling corrects them
    const DISINFO_DURATION_B = 30;
    const BETA_B_DIS = 0.09; // stronger peer coupling in B

    const xA: number[][] = [Array(N).fill(X_REF)];
    const xB: number[][] = [Array(N).fill(X_REF)];
    const uA: number[][] = [Array(N).fill(0)];
    const uB: number[][] = [Array(N).fill(0)];
    const yA: number[][] = [Array(N).fill(X_REF)];
    const yB: number[][] = [Array(N).fill(X_REF)];

    for (let tt = 1; tt < T_MAX - 1; tt++) {
      const disinfo = tt >= T_CRISIS;
      const disinfoActiveB = disinfo && (tt - T_CRISIS) < DISINFO_DURATION_B;

      // Architecture A: false signal replaces the observed mean with X_FALSE.
      // Controller uses full gain K_A but acts on wrong data — drives all nodes
      // toward X_FALSE (115) instead of X_REF (100). Nodes overshoot upward,
      // then natural decay pulls them back, creating sustained oscillation around
      // the wrong target. The single channel has no way to detect the lie.
      const yAt = xA[tt-1].map(x => x + rng.randn() * SIGMA_A);
      yA.push(yAt);
      if (disinfo) {
        // Channel is compromised: controller sees X_FALSE as the system mean
        const perceivedErr = X_REF - X_FALSE; // always negative: -15
        uA.push(Array(N).fill(K_A * perceivedErr));
      } else {
        const meanErr = X_REF - yAt.reduce((a,b) => a+b, 0) / N;
        uA.push(Array(N).fill(K_A * meanErr));
      }

      // Architecture B: 3 scattered nodes receive false nudge for DISINFO_DURATION_B steps.
      // Strong peer coupling pulls them back. After window, full recovery.
      const yBt = xB[tt-1].map(x => x + rng.randn() * SIGMA_B);
      yB.push(yBt);
      uB.push(yBt.map((y, i) => {
        if (disinfoActiveB && AFFECTED_NODES_B.includes(i)) {
          return K_FALSE * (X_REF - y) + FALSE_NUDGE;
        }
        return K_B * (X_REF - y);
      }));

      const actA = tt >= TAU_A ? uA[tt - TAU_A] : Array(N).fill(0);
      const actB = tt >= TAU_B ? uB[tt - TAU_B] : Array(N).fill(0);
      const cA = couple(xA[tt-1], BETA);
      const cB = couple(xB[tt-1], BETA_B_DIS);

      xA.push(xA[tt-1].map((x,i) => clamp(A_SYS*x + cA[i] + actA[i] + drift)));
      xB.push(xB[tt-1].map((x,i) => clamp(A_SYS*x + cB[i] + actB[i] + drift)));
    }
    simA = xA; simB = xB;
  }

  function precomputeEcological() {
    const rng = makeRng(33);
    const { DECAY_RATE, THRESHOLD, COLLAPSE_ACCEL, TAU_A, SIGMA_A, K_A,
            TAU_B, SIGMA_B, K_B, A_SYS, X_REF, BETA, PRESSURE_NODES } = ECO;
    const drift = X_REF * (1 - A_SYS);

    // Build pressure schedule: pressureStart[i] = step at which node i starts degrading
    const pressureStart: number[] = Array(N).fill(999);
    PRESSURE_NODES.forEach(([node, start]) => { pressureStart[node] = start; });

    const xA: number[][] = [Array(N).fill(X_REF)];
    const xB: number[][] = [Array(N).fill(X_REF)];
    const uA: number[][] = [Array(N).fill(0)];
    const uB: number[][] = [Array(N).fill(0)];
    const yA: number[][] = [Array(N).fill(X_REF)];
    const yB: number[][] = [Array(N).fill(X_REF)];

    for (let tt = 1; tt < T_MAX - 1; tt++) {
      // Ecological pressure: per-node carrying capacity declining from pressureStart
      const pressure = Array(N).fill(0).map((_, i) => {
        if (tt < pressureStart[i]) return 0;
        const stepsUnder = tt - pressureStart[i];
        // Extra collapse acceleration if already below threshold
        const collapse = xA[tt-1][i] < THRESHOLD ? COLLAPSE_ACCEL * stepsUnder : 0;
        return -(DECAY_RATE + collapse) * stepsUnder * 0.15;
      });
      const pressureB = Array(N).fill(0).map((_, i) => {
        if (tt < pressureStart[i]) return 0;
        const stepsUnder = tt - pressureStart[i];
        const collapse = xB[tt-1][i] < THRESHOLD ? COLLAPSE_ACCEL * stepsUnder : 0;
        return -(DECAY_RATE + collapse) * stepsUnder * 0.15;
      });

      // Architecture A: sees national average — misses local threshold approach
      const yAt = xA[tt-1].map((x,i) => x + rng.randn() * SIGMA_A + pressure[i]);
      yA.push(yAt);
      // Controller responds to national mean — local crises diluted
      const meanErr = X_REF - yAt.reduce((a,b) => a+b, 0) / N;
      uA.push(Array(N).fill(K_A * meanErr));

      // Architecture B: each node monitors its own state including local pressure
      const yBt = xB[tt-1].map((x,i) => x + rng.randn() * SIGMA_B + pressureB[i]);
      yB.push(yBt);
      // Each node responds to its own observed pressure — catches threshold approach early
      uB.push(yBt.map(y => K_B * (X_REF - y)));

      const actA = tt >= TAU_A ? uA[tt - TAU_A] : Array(N).fill(0);
      const actB = tt >= TAU_B ? uB[tt - TAU_B] : Array(N).fill(0);
      const cA = couple(xA[tt-1], BETA);
      const cB = couple(xB[tt-1], BETA);

      xA.push(xA[tt-1].map((x,i) => clamp(A_SYS*x + cA[i] + actA[i] + pressure[i]*0.5 + drift)));
      xB.push(xB[tt-1].map((x,i) => clamp(A_SYS*x + cB[i] + actB[i] + pressureB[i]*0.5 + drift)));
    }
    simA = xA; simB = xB;
  }

  function precompute() {
    if (scenario === 'supplyChain') precomputeSupplyChain();
    else if (scenario === 'capture') precomputeCapture();
    else if (scenario === 'disinfo') precomputeDisinfo();
    else precomputeEcological();
  }

  // ================================================================
  // FLOW ANIMATIONS
  // ================================================================
  function spawnPulse(from: number, to: number, system: 'A'|'B', type: string) {
    pulses = [...pulses, { id: pulseId++, from, to, system, type, progress: 0 }];
  }

  function tickPulses() {
    pulses = pulses.map(p => ({ ...p, progress: p.progress + 0.055 }))
                   .filter(p => p.progress < 1);
  }

  function emitFlows() {
    if (step % 3 !== 0) return;

    if (scenario === 'supplyChain') {
      if (step < T_CRISIS) {
        if (Math.random() < 0.3) spawnPulse(Math.floor(Math.random()*9), 4, 'A', 'info');
      } else if (step < T_CRISIS + SC.TAU_A) {
        SC.CRISIS_NODES.forEach(n => { if (Math.random() < 0.7) spawnPulse(n, 4, 'A', 'info'); });
      } else {
        if (Math.random() < 0.45) spawnPulse(4, Math.floor(Math.random()*9), 'A', 'resource');
      }
      if (step >= T_CRISIS && step < T_CRISIS + 28) {
        SC.CRISIS_NODES.forEach(n =>
          neighbours(n).forEach(nb => { if (Math.random() < 0.35) spawnPulse(n, nb, 'B', 'resource'); })
        );
      }

    } else if (scenario === 'capture') {
      // Capture scenario
      const captured = step >= T_CRISIS;
      if (!captured) {
        if (Math.random() < 0.3) spawnPulse(Math.floor(Math.random()*9), 4, 'A', 'info');
        if (Math.random() < 0.3) {
          const n = Math.floor(Math.random()*9);
          neighbours(n).forEach(nb => { if (Math.random() < 0.3) spawnPulse(n, nb, 'B', 'info'); });
        }
      } else {
        // A: center emits corrupt purple signals to all
        if (Math.random() < 0.55) spawnPulse(4, Math.floor(Math.random()*9), 'A', 'corrupt');
        // B: captured node emits corrupt to neighbours only
        if (Math.random() < 0.45)
          neighbours(CAP.CAPTURE_NODE_B).forEach(nb => {
            if (Math.random() < 0.5) spawnPulse(CAP.CAPTURE_NODE_B, nb, 'B', 'corrupt-local');
          });
        // B: healthy nodes continue peer exchange
        if (Math.random() < 0.4) {
          const healthy = [0,1,2,4,5,6,7,8];
          const n = healthy[Math.floor(Math.random()*healthy.length)];
          neighbours(n).forEach(nb => { if (Math.random() < 0.3) spawnPulse(n, nb, 'B', 'resource'); });
        }
      }

    } else if (scenario === 'disinfo') {
      const active = step >= T_CRISIS;
      if (!active) {
        if (Math.random() < 0.3) spawnPulse(Math.floor(Math.random()*9), 4, 'A', 'info');
        if (Math.random() < 0.3) { const n = Math.floor(Math.random()*9); neighbours(n).forEach(nb => { if (Math.random() < 0.3) spawnPulse(n, nb, 'B', 'info'); }); }
      } else {
        // A: corrupt info signal into center
        if (Math.random() < 0.5) spawnPulse(Math.floor(Math.random()*9), 4, 'A', 'corrupt');
        if (Math.random() < 0.45) spawnPulse(4, Math.floor(Math.random()*9), 'A', 'corrupt');
        // B: affected nodes receive false signal, healthy nodes share cross-checks
        DIS.AFFECTED_NODES_B.forEach(n => { if (Math.random() < 0.4) spawnPulse(n, neighbours(n)[0] ?? 4, 'B', 'corrupt-local'); });
        if (Math.random() < 0.4) { const healthy = [0,2,3,5,6,8]; const n = healthy[Math.floor(Math.random()*healthy.length)]; neighbours(n).forEach(nb => { if (Math.random() < 0.35) spawnPulse(n, nb, 'B', 'info'); }); }
      }

    } else if (scenario === 'ecological') {
      if (step % 4 === 0) {
        // A: slow trickle of info to center
        if (Math.random() < 0.35) spawnPulse(Math.floor(Math.random()*9), 4, 'A', 'info');
        if (step >= T_CRISIS) {
          // Distress signals from affected nodes
          ECO.PRESSURE_NODES.filter(([, start]) => step >= start).forEach(([node]) => {
            if (Math.random() < 0.5) spawnPulse(node as number, 4, 'A', 'resource');
          });
          // B: local nodes signal neighbours immediately when pressure detected
          ECO.PRESSURE_NODES.filter(([, start]) => step >= start).forEach(([node]) => {
            neighbours(node as number).forEach(nb => { if (Math.random() < 0.4) spawnPulse(node as number, nb, 'B', 'resource'); });
          });
        }
      }
    }
  }

  // ================================================================
  // TICK
  // ================================================================
  function tick() {
    if (step >= T_MAX - 2) {
      clearInterval(intervalId); running = false; finished = true; return;
    }
    step++;
    nodesA = simA[step] || nodesA;
    nodesB = simB[step] || nodesB;

    const avgA = nodesA.reduce((a,b) => a+b, 0) / N;
    const avgB = nodesB.reduce((a,b) => a+b, 0) / N;
    stabilityA.set(Math.round(Math.max(0, Math.min(100, ((avgA - 40) / 70) * 100))));
    stabilityB.set(Math.round(Math.max(0, Math.min(100, ((avgB - 40) / 70) * 100))));
    affectedA = nodesA.filter(v => v < 80).length;
    affectedB = nodesB.filter(v => v < 80).length;

    emitFlows();
    tickPulses();
  }

  // ================================================================
  // CONTROLS
  // ================================================================
  function run() {
    if (!simA.length) precompute();
    running = true;
    intervalId = setInterval(tick, speed);
  }
  function pause() { running = false; clearInterval(intervalId); }
  function resume() { running = true; intervalId = setInterval(tick, speed); }
  function reset() {
    clearInterval(intervalId);
    running = false; finished = false; step = 0;
    nodesA = Array(N).fill(100); nodesB = Array(N).fill(100);
    stabilityA.set(100); stabilityB.set(100);
    affectedA = 0; affectedB = 0; pulses = [];
  }
  function switchScenario(s: Scenario) {
    reset(); scenario = s; simA = []; simB = []; precompute();
  }
  function setSpeed(v: number) {
    speed = v;
    if (running) { clearInterval(intervalId); intervalId = setInterval(tick, speed); }
  }

  // ================================================================
  // PULSE POSITIONS
  // ================================================================
  function getPulseXY(p: any) {
    const [fx, fy] = NODE_POS[p.from], [tx, ty] = NODE_POS[p.to];
    return { x: fx + (tx-fx)*p.progress, y: fy + (ty-fy)*p.progress };
  }

  // ================================================================
  // REACTIVE ANNOTATIONS
  // ================================================================
  $: captureActive = scenario === 'capture' && step >= T_CRISIS;
  $: isCaptureScenario = scenario === 'capture';
  $: isDisinfoScenario = scenario === 'disinfo';
  $: isEcoScenario = scenario === 'ecological';
  $: disinfoActive = isDisinfoScenario && step >= T_CRISIS;
  $: crisisIcon = scenario === 'capture' ? '☠' : scenario === 'ecological' ? '🌿' : scenario === 'disinfo' ? '📡' : '⚡';

  $: annotationA = (() => {
    if (scenario === 'supplyChain') {
      if (step >= T_CRISIS && step < T_CRISIS + 6)   return { text: t.annotations.crisisHit, cls: '' };
      if (step >= T_CRISIS + 6 && step < T_CRISIS + SC.TAU_A) return { text: t.annotations.centralBottleneck, cls: 'warn' };
      if (step >= T_CRISIS + SC.TAU_A && step < T_CRISIS + SC.TAU_A + 18) return { text: t.annotations.uniformPolicy, cls: 'warn' };
    } else if (scenario === 'capture') {
      if (step >= T_CRISIS && step < T_CRISIS + 6)   return { text: t.annotations.centerCaptured, cls: 'warn' };
      if (step >= T_CRISIS + 6 && step < T_CRISIS + 35) return { text: t.annotations.corruptSignals, cls: 'warn' };
      if (step >= T_CRISIS + 35) return { text: t.annotations.systemDegraded, cls: 'warn' };
    } else if (scenario === 'disinfo') {
      if (step >= T_CRISIS && step < T_CRISIS + 8)   return { text: t.annotations.falseSignalInjected, cls: 'warn' };
      if (step >= T_CRISIS + 8 && step < T_CRISIS + 30) return { text: t.annotations.controllerMisled, cls: 'warn' };
      if (step >= T_CRISIS + 30) return { text: t.annotations.systemOscillates, cls: 'warn' };
    } else if (scenario === 'ecological') {
      if (step >= T_CRISIS && step < T_CRISIS + 15)  return { text: t.annotations.localPressure, cls: '' };
      if (step >= T_CRISIS + 15 && step < T_CRISIS + 40) return { text: t.annotations.averageMasksCollapse, cls: 'warn' };
      if (step >= T_CRISIS + 40) return { text: t.annotations.cascadeUnderway, cls: 'warn' };
    }
    return null;
  })();

  $: annotationB = (() => {
    if (scenario === 'supplyChain') {
      if (step >= T_CRISIS && step < T_CRISIS + 6)   return { text: t.annotations.crisisHit, cls: '' };
      if (step >= T_CRISIS + SC.TAU_B && step < T_CRISIS + SC.TAU_B + 10) return { text: t.annotations.localResponse, cls: 'good' };
      if (step >= T_CRISIS + 15 && step < T_CRISIS + 35) return { text: t.annotations.containment, cls: 'good' };
    } else if (scenario === 'capture') {
      if (step >= T_CRISIS && step < T_CRISIS + 6)   return { text: t.annotations.localCaptured, cls: '' };
      if (step >= T_CRISIS + 6 && step < T_CRISIS + 22) return { text: t.annotations.isolatedDamage, cls: 'warn' };
      if (step >= T_CRISIS + 22) return { text: t.annotations.systemIntact, cls: 'good' };
    } else if (scenario === 'disinfo') {
      if (step >= T_CRISIS && step < T_CRISIS + 8)   return { text: t.annotations.someNodesMisled, cls: '' };
      if (step >= T_CRISIS + 8 && step < T_CRISIS + 25) return { text: t.annotations.peersCorrect, cls: 'good' };
      if (step >= T_CRISIS + 25) return { text: t.annotations.disinfoContained, cls: 'good' };
    } else if (scenario === 'ecological') {
      if (step >= T_CRISIS && step < T_CRISIS + 8)   return { text: t.annotations.localPressure, cls: '' };
      if (step >= T_CRISIS + 8 && step < T_CRISIS + 25) return { text: t.annotations.earlyWarning, cls: 'good' };
      if (step >= T_CRISIS + 25) return { text: t.annotations.thresholdDefended, cls: 'good' };
    }
    return null;
  })();

  onMount(() => precompute());
  onDestroy(() => clearInterval(intervalId));
</script>

<div class="sim-wrap">

  <!-- Scenario tabs -->
  <div class="scenario-tabs">
    <button class="scenario-tab" class:active={scenario === 'supplyChain'}
      on:click={() => switchScenario('supplyChain')}>
      📦 {t.controls.scenarios.supplyChain}
    </button>
    <button class="scenario-tab" class:active={scenario === 'capture'}
      on:click={() => switchScenario('capture')}>
      ☠ {t.controls.scenarios.capture}
    </button>
    <button class="scenario-tab" class:active={scenario === 'disinfo'}
      on:click={() => switchScenario('disinfo')}>
      📡 {t.controls.scenarios.disinfo}
    </button>
    <button class="scenario-tab" class:active={scenario === 'ecological'}
      on:click={() => switchScenario('ecological')}>
      🌿 {t.controls.scenarios.ecological}
    </button>
  </div>

  <!-- Scenario description -->
  <p class="scenario-desc">
    {scenario === 'supplyChain' ? t.controls.scenarios.supplyChainDesc
    : scenario === 'capture' ? t.controls.scenarios.captureDesc
    : scenario === 'disinfo' ? t.controls.scenarios.disinfoDesc
    : t.controls.scenarios.ecologicalDesc}
  </p>

  <!-- Controls row -->
  <div class="controls">
    <div class="speed-control">
      <span class="label-text">{t.controls.speed}</span>
      <input type="range" min="40" max="280" step="20"
        value={280 - speed + 40}
        on:input={e => setSpeed(280 - parseInt(e.currentTarget.value) + 40)}
        class="speed-slider" />
    </div>
    <div class="btn-row">
      {#if !running && step === 0}
        <button class="btn btn-primary" on:click={run}>{t.controls.run}</button>
      {:else if running}
        <button class="btn btn-secondary" on:click={pause}>{t.controls.pause}</button>
      {:else if !running && !finished}
        <button class="btn btn-secondary" on:click={resume}>{t.controls.resume}</button>
      {/if}
      {#if step > 0}
        <button class="btn btn-ghost" on:click={reset}>{t.controls.reset}</button>
      {/if}
    </div>
  </div>

  <!-- Phase bar -->
  <div class="phase-bar">
    {#each ['steady','shock','response','cascade','recovery'] as ph}
      <div class="phase-step" class:active={phase === ph}>{t.phases[ph]}</div>
    {/each}
  </div>

  <!-- Simulation panels -->
  <div class="panels">

    <!-- Westphalian -->
    <div class="panel">
      <div class="panel-header westphalian">
        <span class="system-label">{t.systems.westphalian.label}</span>
        <span class="system-desc">{t.systems.westphalian.description}</span>
      </div>
      <svg viewBox="0 0 360 290" class="network-svg">
        <!-- Hierarchy spokes -->
        {#each [0,1,2,3,5,6,7,8] as i}
          <line x1={NODE_POS[i][0]} y1={NODE_POS[i][1]}
                x2={NODE_POS[4][0]} y2={NODE_POS[4][1]}
                class="edge-hierarchy" opacity={captureActive ? 0.5 : 0.15} />
        {/each}
        <!-- Grid edges -->
        {#each Array(N) as _, i}
          {#each neighbours(i) as j}
            {#if j > i}
              <line x1={NODE_POS[i][0]} y1={NODE_POS[i][1]}
                    x2={NODE_POS[j][0]} y2={NODE_POS[j][1]} class="edge" />
            {/if}
          {/each}
        {/each}
        <!-- Pulses -->
        {#each pulses.filter(p => p.system === 'A') as p (p.id)}
          {@const pos = getPulseXY(p)}
          <circle cx={pos.x} cy={pos.y} r={p.type === 'corrupt' ? 6 : 4}
            class="pulse-{p.type}" opacity={1 - p.progress * 0.7} />
        {/each}
        <!-- Nodes -->
        {#each nodesA as val, i}
          {@const isCenter = i === 4}
          {@const isCaptured = isCaptureScenario && isCenter && captureActive}
          {@const color = isCaptured ? 'captured' : nodeColor(val)}
          <g>
            {#if isCaptured}
              <circle cx={NODE_POS[i][0]} cy={NODE_POS[i][1]} r={32}
                fill="none" stroke="#7c3aed" stroke-width="2"
                class="capture-ring" />
            {/if}
            <circle cx={NODE_POS[i][0]} cy={NODE_POS[i][1]}
              r={isCenter ? 26 : 20}
              class="node node-{color}" class:node-center={isCenter} />
            <text x={NODE_POS[i][0]} y={NODE_POS[i][1]+1}
              class={isCenter ? 'node-label-center' : 'node-label'}>
              {isCaptured ? '☠' : Math.round(val)}
            </text>
          </g>
        {/each}
        {#if annotationA}
          <text x="180" y="275" class="annotation-text {annotationA.cls}">{annotationA.text}</text>
        {/if}
      </svg>
      <div class="metric-bar">
        <div class="metric-bar-label">{t.metrics.systemStability}</div>
        <div class="bar-track">
          <div class="bar-fill westphalian-fill" style="width:{$stabilityA}%"></div>
        </div>
        <div class="metric-bar-value">{Math.round($stabilityA)}%</div>
      </div>
      <div class="metric-row-small">
        <span>{t.metrics.affectedNodes}: <strong class:warn-text={affectedA > 0}>{affectedA}/{N}</strong></span>
        <span>
          {isCaptureScenario ? t.metrics.captureRadius : t.metrics.responseLatency}:
          <strong>
            {isCaptureScenario ? 'N' : scenario === 'supplyChain' ? SC.TAU_A : scenario === 'disinfo' ? DIS.TAU_A : ECO.TAU_A}
            {isCaptureScenario ? '' : t.metrics.steps}
          </strong>
        </span>
      </div>
    </div>

    <!-- Polycentric -->
    <div class="panel">
      <div class="panel-header polycentric">
        <span class="system-label">{t.systems.polycentric.label}</span>
        <span class="system-desc">{t.systems.polycentric.description}</span>
      </div>
      <svg viewBox="0 0 360 290" class="network-svg">
        <!-- Peer edges -->
        {#each Array(N) as _, i}
          {#each neighbours(i) as j}
            {#if j > i}
              <line x1={NODE_POS[i][0]} y1={NODE_POS[i][1]}
                    x2={NODE_POS[j][0]} y2={NODE_POS[j][1]} class="edge-poly" />
            {/if}
          {/each}
        {/each}
        <!-- Pulses -->
        {#each pulses.filter(p => p.system === 'B') as p (p.id)}
          {@const pos = getPulseXY(p)}
          <circle cx={pos.x} cy={pos.y} r={5}
            class="pulse-{p.type}" opacity={1 - p.progress * 0.7} />
        {/each}
        <!-- Nodes -->
        {#each nodesB as val, i}
          {@const isCaptured = isCaptureScenario && i === CAP.CAPTURE_NODE_B && captureActive}
          {@const color = isCaptured ? 'captured' : nodeColor(val)}
          <g>
            {#if isCaptured}
              <circle cx={NODE_POS[i][0]} cy={NODE_POS[i][1]} r={26}
                fill="none" stroke="#7c3aed" stroke-width="2"
                class="capture-ring" />
            {/if}
            <circle cx={NODE_POS[i][0]} cy={NODE_POS[i][1]} r={20}
              class="node node-{color}" />
            <text x={NODE_POS[i][0]} y={NODE_POS[i][1]+1} class="node-label">
              {isCaptured ? '☠' : Math.round(val)}
            </text>
          </g>
        {/each}
        {#if annotationB}
          <text x="180" y="275" class="annotation-text {annotationB.cls}">{annotationB.text}</text>
        {/if}
      </svg>
      <div class="metric-bar">
        <div class="metric-bar-label">{t.metrics.systemStability}</div>
        <div class="bar-track">
          <div class="bar-fill polycentric-fill" style="width:{$stabilityB}%"></div>
        </div>
        <div class="metric-bar-value">{Math.round($stabilityB)}%</div>
      </div>
      <div class="metric-row-small">
        <span>{t.metrics.affectedNodes}: <strong class:warn-text={affectedB > 0}>{affectedB}/{N}</strong></span>
        <span>
          {isCaptureScenario ? t.metrics.captureRadius : t.metrics.responseLatency}:
          <strong>
            {isCaptureScenario ? '1' : scenario === 'supplyChain' ? SC.TAU_B : scenario === 'disinfo' ? DIS.TAU_B : ECO.TAU_B}
            {isCaptureScenario ? t.metrics.node : t.metrics.steps}
          </strong>
        </span>
      </div>
    </div>

  </div>

  <!-- Timeline -->
  <div class="step-indicator">
    <div class="step-bar-track">
      <div class="step-bar-fill" style="width:{(step/(T_MAX-2))*100}%"></div>
      {#if step > 0}
        <div class="crisis-marker" style="left:{(T_CRISIS/(T_MAX-2))*100}%"></div>
      {/if}
    </div>
    <div class="step-labels">
      <span>t=0</span>
      <span class="crisis-label">{crisisIcon} t={T_CRISIS}</span>
      <span>t={T_MAX}</span>
    </div>
  </div>

  <!-- Legend -->
  <div class="legend">
    <div class="legend-item"><span class="dot healthy-dot"></span>{t.legend.healthy}</div>
    <div class="legend-item"><span class="dot stressed-dot"></span>{t.legend.stressed}</div>
    <div class="legend-item"><span class="dot critical-dot"></span>{t.legend.critical}</div>
    {#if isCaptureScenario}
      <div class="legend-item"><span class="dot captured-dot"></span>{t.legend.captured}</div>
      <div class="legend-item"><span class="pulse-dot corrupt-dot"></span>{t.legend.corruptSignal}</div>
    {:else if isDisinfoScenario}
      <div class="legend-item"><span class="pulse-dot info-dot"></span>{t.legend.informationFlow}</div>
      <div class="legend-item"><span class="pulse-dot corrupt-dot"></span>{t.legend.falseSignal}</div>
    {:else if isEcoScenario}
      <div class="legend-item"><span class="pulse-dot res-dot"></span>{t.legend.resourceFlow}</div>
      <div class="legend-item"><span class="pulse-dot info-dot"></span>{t.legend.distressSignal}</div>
    {:else}
      <div class="legend-item"><span class="pulse-dot info-dot"></span>{t.legend.informationFlow}</div>
      <div class="legend-item"><span class="pulse-dot res-dot"></span>{t.legend.resourceFlow}</div>
    {/if}
  </div>

</div>

<style>
  .sim-wrap { font-family: inherit; width: 100%; }

  .scenario-tabs {
    display: flex; margin-bottom: 0.6rem;
    border: 1px solid var(--color-separator, #e2e8f0);
    border-radius: 0.6rem; overflow: hidden;
  }
  .scenario-tab {
    flex: 1; padding: 0.55rem 0.75rem; font-size: 0.82rem; font-weight: 500;
    cursor: pointer; border: none; text-align: center;
    background: var(--color-card-bg, #f8fafc);
    color: var(--color-card-text, #64748b);
    border-right: 1px solid var(--color-separator, #e2e8f0);
    transition: all 0.15s;
  }
  .scenario-tab:last-child { border-right: none; }
  .scenario-tab.active { background: var(--color-page-accent, #d97706); color: white; font-weight: 600; }
  .scenario-tab:not(.active):hover { opacity: 0.75; }

  .scenario-desc {
    font-size: 0.8rem; color: var(--color-card-text, #64748b);
    opacity: 0.75; margin: 0 0 0.75rem; line-height: 1.5; padding: 0 0.2rem;
  }

  .controls {
    display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;
    margin-bottom: 0.75rem; padding: 0.65rem 1rem;
    background: var(--color-card-bg, #f8fafc);
    border: 1px solid var(--color-separator, #e2e8f0); border-radius: 0.65rem;
  }
  .label-text {
    font-size: 0.7rem; font-weight: 600; text-transform: uppercase;
    letter-spacing: 0.08em; color: var(--color-card-text, #64748b);
    opacity: 0.6; margin-right: 0.4rem;
  }
  .speed-control { display: flex; align-items: center; gap: 0.5rem; }
  .speed-slider { width: 80px; }
  .btn-row { display: flex; gap: 0.5rem; margin-left: auto; }
  .btn {
    padding: 0.4rem 1rem; border-radius: 0.5rem; font-size: 0.85rem;
    font-weight: 500; cursor: pointer; border: none; transition: all 0.15s;
  }
  .btn-primary { background: var(--color-page-accent, #d97706); color: white; }
  .btn-primary:hover { opacity: 0.88; }
  .btn-secondary { background: var(--color-separator, #e2e8f0); color: var(--color-card-text, #1e293b); }
  .btn-secondary:hover { opacity: 0.8; }
  .btn-ghost {
    background: transparent; color: var(--color-card-text, #64748b);
    border: 1px solid var(--color-separator, #e2e8f0);
  }
  .btn-ghost:hover { background: var(--color-separator, #e2e8f0); }

  .phase-bar {
    display: flex; margin-bottom: 0.75rem;
    border-radius: 0.5rem; overflow: hidden;
    border: 1px solid var(--color-separator, #e2e8f0);
  }
  .phase-step {
    flex: 1; text-align: center; font-size: 0.62rem; font-weight: 500;
    padding: 0.3rem 0.1rem; text-transform: uppercase; letter-spacing: 0.03em;
    color: var(--color-card-text, #94a3b8);
    background: var(--color-card-bg, #f8fafc);
    border-right: 1px solid var(--color-separator, #e2e8f0);
    transition: all 0.25s;
  }
  .phase-step:last-child { border-right: none; }
  .phase-step.active { background: var(--color-page-accent, #d97706); color: white; font-weight: 600; }

  .panels { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 0.75rem; }
  @media (max-width: 600px) { .panels { grid-template-columns: 1fr; } }

  .panel {
    border: 1px solid var(--color-separator, #e2e8f0);
    border-radius: 0.75rem; overflow: hidden;
    background: var(--color-card-bg, #fff);
  }
  .panel-header { display: flex; flex-direction: column; padding: 0.6rem 1rem; }
  .westphalian { background: rgba(220,38,38,0.07); border-bottom: 2px solid rgba(220,38,38,0.2); }
  .polycentric  { background: rgba(22,163,74,0.07);  border-bottom: 2px solid rgba(22,163,74,0.2); }
  .system-label { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }
  .westphalian .system-label { color: #dc2626; }
  .polycentric  .system-label { color: #16a34a; }
  .system-desc  { font-size: 0.68rem; color: var(--color-card-text, #64748b); opacity: 0.7; }

  .network-svg { width: 100%; height: auto; display: block; padding: 0.4rem; }

  .edge           { stroke: var(--color-separator, #cbd5e1); stroke-width: 1; fill: none; }
  .edge-hierarchy { stroke: #dc2626; stroke-width: 1; stroke-dasharray: 4 3; fill: none; }
  .edge-poly      { stroke: #16a34a; stroke-width: 1.2; fill: none; opacity: 0.3; }

  .node           { transition: fill 0.35s; }
  .node-healthy   { fill: #22c55e; }
  .node-stressed  { fill: #f59e0b; }
  .node-critical  { fill: #ef4444; }
  .node-captured  { fill: #7c3aed; }
  .node-center    { stroke: #dc2626; stroke-width: 2.5; }

  .capture-ring { animation: capture-pulse 1.1s ease-in-out infinite; }
  @keyframes capture-pulse {
    0%, 100% { opacity: 0.2; }
    50%       { opacity: 0.65; }
  }

  .node-label        { fill: white; font-size: 9px; font-weight: 600; text-anchor: middle; dominant-baseline: central; pointer-events: none; }
  .node-label-center { fill: white; font-size: 11px; font-weight: 700; text-anchor: middle; dominant-baseline: central; pointer-events: none; }

  .pulse-info          { fill: #3b82f6; }
  .pulse-resource      { fill: #f97316; }
  .pulse-corrupt       { fill: #7c3aed; }
  .pulse-corrupt-local { fill: #a855f7; }

  .annotation-text      { fill: var(--color-card-text, #475569); font-size: 9px; text-anchor: middle; dominant-baseline: central; }
  .annotation-text.warn { fill: #dc2626; font-weight: 600; }
  .annotation-text.good { fill: #16a34a; font-weight: 600; }

  .metric-bar { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; border-top: 1px solid var(--color-separator, #e2e8f0); }
  .metric-bar-label { font-size: 0.7rem; color: var(--color-card-text, #64748b); width: 100px; flex-shrink: 0; }
  .bar-track { flex: 1; height: 8px; background: var(--color-separator, #e2e8f0); border-radius: 4px; overflow: hidden; }
  .bar-fill { height: 100%; border-radius: 4px; transition: width 0.3s ease; }
  .westphalian-fill { background: #dc2626; }
  .polycentric-fill  { background: #16a34a; }
  .metric-bar-value  { font-size: 0.8rem; font-weight: 600; color: var(--color-card-text, #1e293b); width: 36px; text-align: right; }
  .metric-row-small  { display: flex; justify-content: space-between; padding: 0.3rem 1rem 0.6rem; font-size: 0.7rem; color: var(--color-card-text, #64748b); gap: 0.5rem; }
  .warn-text { color: #dc2626; }

  .step-indicator { margin-bottom: 0.65rem; }
  .step-bar-track { position: relative; height: 6px; background: var(--color-separator, #e2e8f0); border-radius: 3px; overflow: visible; margin-bottom: 0.2rem; }
  .step-bar-fill  { height: 100%; background: var(--color-page-accent, #d97706); border-radius: 3px; transition: width 0.1s linear; }
  .crisis-marker  { position: absolute; top: -4px; width: 2px; height: 14px; background: #ef4444; border-radius: 1px; transform: translateX(-50%); }
  .step-labels    { display: flex; justify-content: space-between; font-size: 0.65rem; color: var(--color-card-text, #94a3b8); }
  .crisis-label   { color: #ef4444; font-weight: 600; }

  .legend       { display: flex; flex-wrap: wrap; gap: 0.65rem; padding: 0.4rem 0; font-size: 0.72rem; color: var(--color-card-text, #64748b); }
  .legend-item  { display: flex; align-items: center; gap: 0.3rem; }
  .dot          { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
  .healthy-dot  { background: #22c55e; }
  .stressed-dot { background: #f59e0b; }
  .critical-dot { background: #ef4444; }
  .captured-dot { background: #7c3aed; }
  .pulse-dot    { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
  .info-dot     { background: #3b82f6; }
  .res-dot      { background: #f97316; }
  .corrupt-dot  { background: #7c3aed; }
</style>
