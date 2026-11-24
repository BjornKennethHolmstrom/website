### Part II — The Optimization Turn: Objectives, Observations and Policies

#### 2.1 Distinct Components, Conditional Coupling

Let $x_t$ denote the state, $y_t$ an observation drawn from an observation model, $h_t$ the available history, $u_t$ an admissible action and $\pi$ a policy mapping available information to actions. The objective $J(\pi)$ evaluates the resulting trajectory. A causal model predicts the consequences of actions. None of these definitions identifies the objective with the observation model.

Consider a binary condition with two possible states, equally likely, and two actions. A scalar payoff is one if the action matches the condition and zero otherwise. Without an informative signal, the best expected payoff is $1/2$; with a perfect signal it is one. The objective has not changed. Conversely, adding another objective term need not give the controller another signal.

A special architecture can explicitly select sensors according to its objective, for instance by funding only indicators that appear in a dashboard. In that case priorities may change sensing capacity. This is a modeling premise or an empirical hypothesis about allocation, not an identity.

#### 2.2 Dimensionality, Information and Decision Value

An objective may be a scalar utility over many attributes, a vector of objectives, or a constrained decision problem. Counting its terms is not equivalent to counting independent observations or measuring their information content. Rank is meaningful for a specified linear map, not as a general count of values. A scalar encoding may preserve several discrete distinctions, and a vector of highly redundant indicators may preserve very little. Even adequate observations can be wasted by a poor policy. In dynamic settings the history of observations and interventions may identify states not directly measured (Appendix A).

Short time horizons and high discounting can make future consequences less influential in decisions. These are features of evaluation and planning; they are not themselves a reduction in sensor bandwidth.

#### 2.3 Requisite Variety for Specified Tasks

The original rank inequality survives under the assumptions of Appendix A. In a noiseless static additive model, with linear disturbance space $D$, tolerated subspace $L$ and observation matrix $C$, successful regulation requires

$$\operatorname{rank}(C|_D)\geq\dim D-\dim(D\cap L)\geq\dim D-\dim L.$$

This is a necessary condition, not sufficient in general: the observed directions must align with consequential disturbances. With sufficiently unrestricted correction the stronger condition $D\cap\ker C\subseteq L$ is necessary and sufficient. What deviations are tolerated and what actions are permissible must be specified. Mathematics does not decide which social values are legitimate.

#### 2.4 Goodhart, Ashby and Policy-Dependent Exposure

The corrected Paper XX distinguishes proxy–target reversal from a collapsed distinction. A proxy may collapse a consequential distinction without any strict adverse ordering on the feasible set; it then creates a tie hazard. An adverse ordering allows harm, but does not prove that optimization follows that path. Neither property is identical to a sensing failure.

A plausible conditional chain is: objectives and incentives influence policy; policy changes exposure to states and interventions; exposure changes available evidence; evidence affects learning and later decisions. This chain can operate with fixed sensors. It can also operate through changing sensor budgets, but that further step requires evidence. Exposure is not sufficient for learning if the observation likelihood or model class cannot discriminate the alternatives. Better objectives are not a universal remedy: instrumental ecological protection, standing buffers, independent audits or improved inference may suffice under particular conditions.

If two hypotheses induce identical distributions over accessible histories under a specified policy, no test based on those histories distinguishes them better than the prior alone. Another feasible policy may induce different distributions. This is policy-relative identifiability, not evidence that any particular objective causes the loss. Appendix C does not test this learning mechanism.

#### 2.5 Related Work

Ashby (1956) and Conant and Ashby (1970) provide cybernetic context. Goodhart (1975), Manheim and Garrabrant (2018), and Skalse et al. (2022) address metric and proxy problems; Zhuang and Hadfield-Menell (2020) analyze omitted attributes under explicit resource constraints. Paper XIV discusses dual control and persistent excitation. Paper XXIV explores policy-dependent exposure in a specific learned-observer model. Paper XXVII investigates decision-relevant alignment within a solved control problem. These are related mechanisms, not evidence for a universal collapse law.

Systemic Optimization WP1 (§§2.2, 5.1–5.3) provides a further model-specific illustration: without an upstream wetland the retention mechanism does not affect transitions; the reported zero log Bayes factor is limited to the evaluated observation likelihood, not every possible history or likelihood. Its seven exposure traps concern the stationary passive operator. Probing can expose retention without moving the posterior reliably. The package contrast is explicitly bundled (§2.4). This supports distinguishing exposure from inference, not identifying objectives with observation or assuming that a broadened objective restores sight.

---
