export const governanceSimulatorTranslations = {
  en: {
    governanceSimulator: {
      meta: {
        title: 'Governance Simulator | Björn Kenneth Holmström',
        description: 'Watch two governance architectures respond to the same crisis in real time. An interactive simulation.'
      },
      hero: {
        title: 'Two Systems, One Crisis',
        subtitle: 'Watch governance architectures respond to identical shocks — not as an argument, but as a demonstration.'
      },
      intro: {
        p1: 'When a supply chain breaks or a powerful actor captures a decision center, the response depends not on intentions but on architecture. A centralized system routes everything through a single point. A polycentric system senses locally, acts immediately, and limits the blast radius of failure.',
        p2: 'The difference is structural. This simulation makes it visible.'
      },
      controls: {
        scenario: 'Scenario',
        scenarios: {
          supplyChain: 'Supply chain disruption',
          supplyChainDesc: 'A fertilizer/food cascade — mirrors real geopolitical shocks. Tests resource routing and local substitution.',
          capture: 'Governance capture',
          captureDesc: 'A powerful actor captures the decision center. In a centralized system this corrupts the entire network. In a polycentric system, damage stays local.'
        },
        speed: 'Speed',
        slow: 'Slow',
        fast: 'Fast',
        run: 'Run simulation',
        pause: 'Pause',
        resume: 'Resume',
        reset: 'Reset'
      },
      systems: {
        westphalian: {
          label: 'Westphalian',
          description: 'Centralized nation-state model'
        },
        polycentric: {
          label: 'Polycentric',
          description: 'GGF / BAZ distributed model'
        }
      },
      legend: {
        healthy: 'Stable',
        stressed: 'Stressed',
        critical: 'Critical',
        captured: 'Captured',
        resourceFlow: 'Resource flow',
        informationFlow: 'Information flow',
        corruptSignal: 'Corrupt signal',
        blocked: 'Blocked'
      },
      metrics: {
        title: 'Live metrics',
        systemStability: 'System stability',
        nodesInCrisis: 'Nodes in crisis',
        affectedNodes: 'Affected nodes',
        responseLatency: 'Response latency',
        captureRadius: 'Capture radius',
        collateralDamage: 'Collateral disruption',
        steps: 'steps',
        node: 'node'
      },
      phases: {
        steady: 'Steady state',
        shock: 'Shock arrives',
        response: 'Response',
        cascade: 'Cascade or adapt',
        recovery: 'Recovery'
      },
      annotations: {
        crisisHit: 'Crisis hits',
        centralBottleneck: 'Central bottleneck',
        uniformPolicy: 'Uniform policy disrupts healthy nodes',
        localResponse: 'Local response activates',
        containment: 'Crisis contained at source',
        centerCaptured: 'Center captured — corrupt signals spreading',
        corruptSignals: 'Bad policy broadcast to all nodes',
        systemDegraded: 'System-wide degradation',
        localCaptured: 'One node captured — damage local',
        isolatedDamage: 'Damage isolated to 1 node',
        systemIntact: 'Rest of system intact'
      },
      insight: {
        title: 'What you just saw',
        latency: {
          heading: 'Latency is structural, not political',
          body: 'The centralized system is slow because information must travel to the center before decisions can travel back out. This is physics, not failure of will. The polycentric system acts at the speed of local knowledge.'
        },
        collateral: {
          heading: 'Uniform response creates collateral damage',
          body: 'When the center sees a national average, it responds to a number that describes no place in particular. Healthy nodes are disrupted by policy designed for crisis nodes. Subsidiarity is not an ideological preference — it is the engineering consequence of this problem.'
        },
        capture: {
          heading: 'Single points of failure concentrate risk',
          body: 'Capturing the center captures the whole system. A corrupted center sends bad signals everywhere — not slowly, but immediately, through every channel the center controls. In a polycentric architecture, a captured node degrades locally. The rest of the network continues.'
        }
      },
      technicalNote: {
        title: 'Technical note',
        body: 'This simulation implements a state-space model: x(t+1) = A·x(t) + B·u(t−τ) + d(t). Supply chain scenario: crisis nodes receive a one-time shock; centralized system responds to the national mean with high latency. Capture scenario: the captured node inverts its control gain, pushing the system away from equilibrium rather than toward it. The gain ceiling for the centralized system is structurally constrained by its latency — a consequence of control theory, not a parameter choice. See the full Python simulation series for the mathematical proof.'
      }
    }
  },
  sv: {
    governanceSimulator: {
      meta: {
        title: 'Styrningssimulator | Björn Kenneth Holmström',
        description: 'Se två styrningsarkitekturer reagera på samma kris i realtid. En interaktiv simulation.'
      },
      hero: {
        title: 'Två system, en kris',
        subtitle: 'Se hur styrningsarkitekturer svarar på identiska chocker — inte som ett argument, utan som en demonstration.'
      },
      intro: {
        p1: 'När en leveranskedja brister eller en maktaktör kapar ett beslutscenter beror svaret inte på intentioner utan på arkitektur. Ett centraliserat system leder allt genom en enda punkt. Ett polycentriskt system känner av lokalt, agerar omedelbart och begränsar skaderadien vid fel.',
        p2: 'Skillnaden är strukturell. Den här simulationen gör den synlig.'
      },
      controls: {
        scenario: 'Scenario',
        scenarios: {
          supplyChain: 'Leveranskedjestörning',
          supplyChainDesc: 'En gödselmedels-/livsmedelskedja — speglar verkliga geopolitiska chocker. Testar resursflöden och lokal substitution.',
          capture: 'Styrningskapning',
          captureDesc: 'En maktaktör kapar beslutscentret. I ett centraliserat system korrumperas hela nätverket. I ett polycentriskt system begränsas skadan lokalt.'
        },
        speed: 'Hastighet',
        slow: 'Långsam',
        fast: 'Snabb',
        run: 'Kör simulation',
        pause: 'Pausa',
        resume: 'Återuppta',
        reset: 'Återställ'
      },
      systems: {
        westphalian: {
          label: 'Westfalisk',
          description: 'Centraliserad nationalstatsmodell'
        },
        polycentric: {
          label: 'Polycentrisk',
          description: 'GGF / BAZ distribuerad modell'
        }
      },
      legend: {
        healthy: 'Stabil',
        stressed: 'Stressad',
        critical: 'Kritisk',
        captured: 'Kapad',
        resourceFlow: 'Resursflöde',
        informationFlow: 'Informationsflöde',
        corruptSignal: 'Korrumperad signal',
        blocked: 'Blockerad'
      },
      metrics: {
        title: 'Livemätvärden',
        systemStability: 'Systemstabilitet',
        nodesInCrisis: 'Noder i kris',
        affectedNodes: 'Påverkade noder',
        responseLatency: 'Svarstid',
        captureRadius: 'Kapningsradie',
        collateralDamage: 'Sidostörningar',
        steps: 'steg',
        node: 'nod'
      },
      phases: {
        steady: 'Stabilt läge',
        shock: 'Chocken anländer',
        response: 'Svar',
        cascade: 'Kaskad eller anpassning',
        recovery: 'Återhämtning'
      },
      annotations: {
        crisisHit: 'Krisen slår till',
        centralBottleneck: 'Central flaskhals',
        uniformPolicy: 'Enhetlig policy stör friska noder',
        localResponse: 'Lokalt svar aktiveras',
        containment: 'Krisen begränsad till källan',
        centerCaptured: 'Centrum kapat — korrumperade signaler sprids',
        corruptSignals: 'Felaktig policy sänds till alla noder',
        systemDegraded: 'Systemomfattande degradering',
        localCaptured: 'En nod kapad — skadan lokal',
        isolatedDamage: 'Skadan isolerad till 1 nod',
        systemIntact: 'Resten av systemet intakt'
      },
      insight: {
        title: 'Vad du just såg',
        latency: {
          heading: 'Latens är strukturell, inte politisk',
          body: 'Det centraliserade systemet är långsamt eftersom information måste färdas till centrum innan beslut kan färdas tillbaka ut. Det är fysik, inte bristande vilja. Det polycentriska systemet agerar med lokal kunskaps hastighet.'
        },
        collateral: {
          heading: 'Enhetligt svar orsakar sidoskador',
          body: 'När centrum ser ett nationellt genomsnitt svarar det på ett tal som inte beskriver någon plats i synnerhet. Friska noder störs av policy utformad för krisnoder. Subsidiaritet är inte en ideologisk preferens — det är den ingenjörsmässiga konsekvensen av detta problem.'
        },
        capture: {
          heading: 'Enstaka felkällor koncentrerar risk',
          body: 'Att kapa centrum innebär att kapa hela systemet. Ett korrumperat centrum sänder felaktiga signaler överallt — inte långsamt, utan omedelbart, genom varje kanal centret kontrollerar. I en polycentrisk arkitektur degraderas en kapad nod lokalt. Resten av nätverket fortsätter.'
        }
      },
      technicalNote: {
        title: 'Teknisk not',
        body: 'Den här simulationen implementerar en tillståndsrymdmodell: x(t+1) = A·x(t) + B·u(t−τ) + d(t). Leveranskedjescenario: krisnoder får ett engångschock; det centraliserade systemet svarar på nationellt medelvärde med hög latens. Kapningsscenario: den kapade noden inverterar sin reglervärde och driver systemet bort från jämvikt istället för mot den. Se hela Python-simulationsserien för det matematiska beviset.'
      }
    }
  }
};
