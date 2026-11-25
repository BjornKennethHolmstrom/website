# Part III — Failure modes of adaptive governance

The following five mechanisms are diagnostic hypotheses [H/IP], not an exhaustive taxonomy or five experimentally established failures.

## 3.1 Exploration starvation

A policy can suppress exposure to informative events while continuing to track a target. Test whether the missing distinctions change feasible decisions, and whether another admissible policy would recover them. Self-concealment is a separate hypothesis: compare the system's stated or predicted performance with an independently measured outcome on the same task. The legacy simulation did not implement that comparison.

## 3.2 Model lock-in

Parameter updates within a fixed model cannot necessarily repair misspecification. Retained alternatives, residual checks and independent model review can be useful. A regime that fits one observation record may not predict interventions. Distinguish inadequate evidence from a model class that cannot express the alternative. See corrected VI and the policy-dependent exposure discussion in the series; neither novelty nor pluralism guarantees better models.

## 3.3 Exploitation lock-in

An institution may know a feasible policy in principle but lack authority, resources or a practicable transition. This is different from not knowing the response. In the simplified plant \(x_{t+1}=Ax_t+\mu Bu_t+w_t\), intended-input observations cannot distinguish \(B\) from \(\mu\) separately without additional information. For example, \(B=I,\mu=0.3\) and \(B=0.3I,\mu=1\) yield the same intended-input dynamics with other quantities held fixed. The simulation measures error against physical parameters, so it does not cleanly isolate learning from actuation. Paper IX and the corrected Paper XXIII motivate measuring actual transition constraints, not inferring them from a scalar estimate.

## 3.4 Learning-induced oscillation

Adaptation and control can interact adversely: a delayed estimate may change a gain after the environment has changed again. This requires analysis of the actual closed loop, estimator and update schedule. Neither a high exploration amplitude nor rapid institutional change is by itself a proof of instability. Stability of a frozen model does not guarantee stability of a time-varying feedback system.

## 3.5 Forgetting without adequate replacement

Institutional records can become stale or be lost. Retaining them and updating them are different operations. A knowledge-stock balance can be posed as a separate model with defined acquisition and loss processes; the original ratio of drift variance to a difference of learning and forgetting rates is not derived from the RLS recursion and is withdrawn. Appendix A.3 gives an inverse-information bound, not a bound on actual tracking error or a measure of institutional competence.
