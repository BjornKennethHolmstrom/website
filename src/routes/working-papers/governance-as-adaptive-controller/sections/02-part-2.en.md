# Part II — Formal framework: dual control and identification

## 2.1 Actions and information

Dual control, associated with Feldbaum’s classical formulation, is the motivation for this distinction. The original paper’s claim of a universal optimal decomposition into a certainty-equivalent action and an exploration term is withdrawn.

Consider a partially observed system with latent state \(x_t\), uncertain parameter \(\theta_t\), action \(u_t\) and observation \(y_t\). A transition kernel and observation kernel specify how \(u_t\) can change both the physical outcome and subsequent evidence. A control action with both effects has a dual effect. A possible information gain does not alone imply that the action is worth its cost, or even admissible.

## 2.2 The belief-state decision problem

Let \(h_t\) contain the available observations through \(y_t\) and past actions. Under a specified Markov model, the joint posterior \(b_t(dx,d\theta)=P(dx_t,d\theta_t\mid h_t)\) is a sufficient belief state. A point estimate of \(x_t\) together with a marginal belief about \(\theta_t\) need not retain their dependence. For finite horizon and additive stage costs, a belief-state Bellman equation is

\[
V_t(b)=\inf_{u\in U_t(b)}\{\bar c_t(b,u)+\mathbb E[V_{t+1}(\mathcal B(b,u,Y_{t+1}))\mid b,u]\}.
\]

Here \(\mathcal B\) is the joint predict-and-update operation, and \(U_t(b)\) includes relevant feasibility and safety constraints. A terminal cost supplies the boundary condition. Solving this problem may yield experimentation, passive learning or no additional probing. The certainty-equivalent controller with fixed random dither in Part IV is not a solution of this Bellman equation.

## 2.3 Exploration starvation as a conditional failure mode

The policy chosen for immediate performance can avoid histories that would distinguish rival models. If those distinctions are consequential and no other feasible evidence is available, future decisions can deteriorate. A controller may also receive naturally informative data or obtain the required evidence through feedback or deliberate experiments. The exploration-starvation hypothesis requires a comparison of attainable information under actual alternative policies, not merely a count of observations or a measure of input variance.

## 2.4 Identification and excitation

For noiseless linear regression \(y_t=\phi_t^\top\theta\), finite-data uniqueness requires full column rank of the stacked regressor matrix. In noisy settings information accumulation and suitable noise/exogeneity conditions matter. Uniform persistent excitation is a stronger condition, for example

\[
\sum_{i=t-L+1}^{t}\phi_i\phi_i^\top\succeq\alpha I,\qquad \alpha>0.
\]

It concerns the joint regressor rather than the reference or the control input alone. Appendix A.2 gives counterexamples to the original universal necessity claim. Tracking drifting parameters requires recent information at a rate and accuracy appropriate to the drift; neither finite rank nor persistent excitation alone guarantees the performance of an arbitrary estimator. These distinctions apply to the assumed observation model and do not turn institutional learning into a linear regression by analogy.
