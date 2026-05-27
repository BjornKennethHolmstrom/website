# ARCHITECTURE: The Goodhart Collapse Explorable

## What this simulates

This explorable instantiates the **Goodhart‑Ashby Synthesis** from Paper VI of the Governance as Engineering series. It models a governance controller (the player) that optimises for a single observed dimension (Wealth, W) while a causally coupled hidden dimension (Environmental Integrity, E) degrades silently. The controller's own optimisation destroys the system it is trying to govern.

## Why it is built this way

**Client‑side only.** The simulation runs entirely in the browser. No server, no latency, no deployment complexity. The visceral recognition—watching the dashboard stay green while the system collapses—requires instant feedback that a network round‑trip would destroy.

**Hidden variables by design.** The player initially sees only W. The `Reveal Hidden Dimensions` button lets them peek behind the dashboard, but only when they choose to—or when collapse forces it. This recreates the structural condition of competent blindness: the institution is rational *given what it can perceive*, and what it cannot perceive destroys it.

**Adjustable parameters.** The player can tune the observation channel (noise on W), the environmental dynamics, and the controller gain. This makes the Goodhart Collapse a laboratory, not a lecture—players can discover for themselves that adding noise, reducing gain, or expanding the observation channel changes the trajectory.

## What this is NOT

This is not a predictive model of any real economy. It is a minimal dynamical demonstration of a structural constraint: a low‑dimensional observation channel applied to a coupled system will eventually produce collapse along the excluded dimension. The simplicity is the point.

## Relationship to the larger simulation project

This explorable is the first of five focused demonstrations. Each demonstrates one mechanism from the Governance as Engineering framework. Together they form the educational layer of the project. The Python research engine (for formal dynamics) and the policy laboratory (for institutional stress‑testing) are later phases.

## Next explorables

1. The Averaging Problem
2. The Immune Absorption Cycle
3. The Coordination Failure Tax
4. The Bypass Trap

## License

MIT
