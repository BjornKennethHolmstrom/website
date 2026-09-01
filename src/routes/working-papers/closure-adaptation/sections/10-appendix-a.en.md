## Appendix A. Simulation and Reproducibility Notes

This appendix records the numerical procedures used to produce all results in the paper. It is intended to allow independent replication within the stated model envelope.

### A.1 Integration

All simulations use Euler integration with a fixed step size \(dt = 0.05\). For deterministic runs, the ordinary differential equations in Section 2.3 are integrated directly. For stochastic runs, the boundary drive uses the modified felt uncertainty \(F + \sigma \xi(t)\), where \(\xi(t)\) is Gaussian white noise with unit variance, and the integration follows the standard Euler–Maruyama scheme.

At each step, all state variables are clipped to the interval \([0,1]\). This clipping is an explicit part of the model definition, not a numerical convenience, because the variables are bounded by construction.

Different experiments use different integration horizons:

- Phase diagram runs: \(t_{\text{end}} = 180\)
- Hysteresis sweeps: \(t_{\text{end}} = 200\) per step, with a 250-step pre-equilibration at the initial parameter value
- Stochastic sweeps: \(t_{\text{end}} = 200\)
- Two-population runs: \(t_{\text{end}} = 500\)
- Intervention runs: \(t_{\text{end}} = 400\), with a 300-step pre-equilibration at the base stakes value

### A.2 Initial conditions

Two reference initial conditions are used throughout.

**Open start:**

\[
U=0.2,\quad B=0.02,\quad T=0.95,\quad E=0.90,\quad P=0.9
\]

**Closed start:**

\[
U=0.8,\quad B=0.90,\quad T=0.02,\quad E=0.05,\quad P=0.1
\]

In the intervention experiments, the system is first equilibrated at the base stakes value \(s=1.5\) from the open start until an attractor is reached. The resulting state is used as the initial condition for the shock experiment.

### A.3 Classification thresholds

Final states are classified according to the boundary strength \(B\), averaged over the last 200 time steps of a run. The thresholds are:

- **Open:** \(B_{\text{final}} < 0.20\)
- **Closed:** \(B_{\text{final}} > 0.55\)
- **Intermediate:** \(0.20 \le B_{\text{final}} \le 0.55\)
- **Oscillatory:** standard deviation of \(B\) over the same tail \(> 0.05\)

For stochastic runs, a run is counted as closed if its final boundary strength \(B\) exceeds \(0.5\). This convention is consistent with the deterministic classification and is used only for binary outcome counting.

### A.4 Stochastic seed policy

For Monte Carlo sweeps, each run uses a distinct random seed. Runs are indexed by \(r\), and the seed is:

\[
\text{seed}(r) = \text{base\_seed} + 1000 \, r
\]

with \(\text{base\_seed} = 42\). This deterministic seed formula allows exact reproduction of all stochastic trajectories reported in the paper. For the stochastic sweep in Section 5, \(r = 0,\ldots,29\) for each parameter pair.

### A.5 Parameter values

All parameter values are listed in the table in Section 2.4. The slow permeability adaptation rate is \(\rho_P = 0.02\) unless otherwise stated. In the phase diagram sweep, \(\rho_P\) is varied across \(\{0.01, 0.02, 0.05, 0.10\}\). In the stochastic sweep, \(\theta = 0.196\) and \(\rho_P = 0.02\) are held fixed.

### A.6 Two-population model

The two-population model in Section 6 is obtained by duplicating the single-population equations for \(B,T,E,P\) and coupling the two copies through the shared uncertainty variable \(U\). The equations are stated in Section 6.1 and are not repeated here. Initial conditions for the polarization and cascade experiments are given in Sections 6.2 and 6.3.

### A.7 Code and data availability

The Python scripts and CSV files used to produce all figures and tables are available from the author. A repository identifier will be added in the final version. The full phase diagram and stochastic sweep data are provided as supplementary material.
