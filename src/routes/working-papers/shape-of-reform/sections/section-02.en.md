# §2 — The space, and the two quantities that must not be confused

## 2.1 The construction

The substrate is the one Papers 0 and XIX used: a bouncing dot in a bounded box, rendered to a small pixel grid, its dynamics varied by *regime* — ordinary, windy, damped, blurred. A **controller** is a bounded recurrent predictor trained to forecast the dot's future positions under one regime. Being bounded, it cannot represent the world exhaustively; it must commit to a finite set of task-relevant distinctions and discard the rest. That commitment is its **factorization** (Paper 0), and the space of factorizations — realized, concretely, as a zoo of trained controllers — is the object of this paper.

A zoo is seven controllers spanning four regimes and a small range of capacities. Twenty independently retrained zoos supply the distributions on which every registered claim below is read; the series' standing commitment to distributions rather than single trajectories is what converts a suggestive single number into an estimate with a spread, and it is what several of XIX's exploratory figures lacked.

## 2.2 Behavioral distance — the map `[R]`

Write $M_A$ for a trained controller — a *model* — and $R_B$ for a *regime*, a task defined by an environment. The notation is deliberate and load-bearing: the paper's central claim (§4.4) turns on the fact that its two quantities have different types, and encoding the type in the notation keeps that fact visible on every line rather than only where it is argued. Behavioral distance relates two models; reform cost, in §2.3, relates a model to a regime.

The distance between two controllers $M_A$ and $M_B$ is the root-mean-square difference of their prediction-error series on a shared evaluation stream:

$$d_{\mathrm{beh}}(M_A, M_B) = \mathrm{RMS}_t\big( e_A(t) - e_B(t) \big)$$

where $e_X(t)$ is controller X's prediction error at step t. Two controllers are close when they are wrong in the same way at the same time, far when they are not. This quantity is **symmetric by construction** — $d_{\mathrm{beh}}(M_A, M_B) = d_{\mathrm{beh}}(M_B, M_A)$ — it satisfies the triangle inequality, and it is a genuine metric on the set of models. It is the "map" Paper XIX built, and nothing in this paper impugns it. What the paper impugns is the assumption — never stated by XIX, but implicit in calling the object a *geometry* — that this metric is the structure that matters.

## 2.3 Transition cost — the travel `[R within the model]`

The second quantity did not exist before this paper, and it is where the difficulty lay. To reform model $M_A$ toward regime $R_B$ is to retrain $M_A$ until it is a competent controller for $R_B$. The **cost** is the excess error paid along the way — the integral, over a fixed retraining budget, of how far $M_A$'s error on $R_B$'s task exceeds a reference floor:

$$C(M_A \Rightarrow R_B) = \int_0^{\text{budget}} \max\big(0,\ \ell_t - \ell_{\text{floor}}\big)\, dt$$

The double arrow, and the model-to-regime typing, are not decoration: $C$ takes a model on the left and a regime on the right, and there is no reading of it as a distance between two points of one space. That is the fact §4.4 rests on.

Everything turns on the floor, and getting the floor right took three tries (Appendix B). The floor must be **capacity-matched and converged**: a freshly built controller of $M_A$'s *own architecture*, trained to convergence on $R_B$. Measured against anything else — against the target model's own converged loss, as the first version did — the "cost" is contaminated by the capacity difference between source and target, and its most striking feature (a large asymmetry) turns out to be an artifact of that contamination rather than a property of reform. The corrected quantity answers a clean question: *how much worse is it to reform an existing controller into a fit for $R_B$ than to build a new one, of the same capacity, for $R_B$ directly?*

**Cost is relative to an adaptation process, not just to source and target.** $C$ is not a property of $M_A$ and $R_B$ alone. It depends on the optimizer, the learning rate, the retraining budget, the data order, the initialization, the architecture, the loss, and the reference floor. Where the distinction matters we write $C_{U,T,L}(M_A \Rightarrow R_B)$ — cost under update rule $U$, budget $T$, loss $L$ — and hold that apparatus fixed throughout the paper's runs. This is not a caveat to be discharged; it is part of what the object *is* (§5), and it matters for the governance reading, where "reform cost" depends on the implementation technology available.

Note three features that will matter.

**It is directed.** $C(M_A \Rightarrow R_B)$ and $C(M_B \Rightarrow R_A)$ are different measurements and need not agree. §4.2 shows they systematically do not.

**Its endpoints are of different kinds.** The quantity runs from a *model* ($M_A$, a specific trained controller) to a *regime* ($R_B$, a task). This is not a pedantic distinction; it is why the triangle inequality is not merely violated but not statable (§4.4), and it is the deepest reason the reform process is not a metric geometry.

**It can be negative** — positive transfer — when the reformed controller beats a purpose-built one because it carried something useful across. The signed variant of the cost captures this, and it is a quantity the series did not previously have a way to see.

## 2.4 The distinction is the whole paper

Behavioral distance $d_{\mathrm{beh}}(M_A, M_B)$ is a symmetric metric between models. Reform cost $C(M_A \Rightarrow R_B)$ is a directed, non-composing quantity from a model to a regime. **The map is not the travel.**

Paper XIX built the map and could not have noticed the difference, because in its architecture travel was free — the adaptive controller selected an active model each step at no cost, so there was no such thing as an expensive move through factorization space. A map with no travel on it can display any amount of apparent geometric structure while saying nothing about what it costs to get anywhere, and §3 is in effect the demonstration that XIX's map, examined on its own terms, says less than it appeared to. §4 is the demonstration that the travel, once priced, says something XIX's map could not have — and something that does not reduce to a distance at all.

The rest of the paper is the consequence of keeping these two quantities apart: the failures of §3 are failures of the *map*, and the results of §4 are properties of the *travel*, and the reason the paper reads as "three failures and three results" rather than as one confused verdict is that these are two different objects that Paper XIX's promise had run together.

---

