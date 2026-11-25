# §2 — The space, and the two quantities that must not be confused

## 2.1 The construction

As in Papers 0 and XIX, recurrent predictors forecast a bouncing dot rendered on a pixel grid in normal, windy, damped and blurred regimes. The roster comprises seven models with different hidden capacities, training regimes and one velocity auxiliary head. The geometry panel contains twenty zoos, with seeds 1000+z and six training epochs, not XIX's twenty zoos. The cost panel contains ten seeds. A trained predictor is an artifact, not direct evidence about its internal factorization.

## 2.2 Behavioral dissimilarity — the map [R]

For prediction vectors $p_A,p_B$ on a shared stream of $N$ scalar entries, the implemented XXIII measure is

$$q_p(A,B)=\frac{\|p_A-p_B\|_2^2}{N},\qquad d_p(A,B)=\sqrt{q_p(A,B)}.$$

The squared measure $q_p$ is symmetric and nonnegative, but for predictions 0, 1 and 2 its three distances are 1, 1 and 4, violating the triangle inequality. The RMS root $d_p$ is a pseudometric on trained artifacts and a metric on distinct prediction profiles. XIX instead uses RMS differences between loss profiles $e_A,e_B$. Opposite predictions can share the same loss against target zero. Neither dissimilarity establishes an internal representation equivalence or a translation path. Strictly increasing transformations preserve pairwise ranks and the exact first connected graph; they do not generally preserve shape correlations, relative slack or path sums.

## 2.3 Transition cost — a fixed-budget proxy [TR]

For a model state $m$, target regime $r$ and update budget $T$, the implemented v4 cost is

$$C_T(m,r)=20\sum_{k=0}^{39}\max(0,\ell_{20k}^{\mathrm{train}}-f_r),\qquad T=800.$$

Here $f_r$ is the best recorded validation loss of a reference of the source architecture trained on $r$, not a proved optimum. The signed variant omits clipping. The first sampled crossing of $1.05 f_r$ is recorded, or marked censored if none occurs. The sum covers a fixed budget regardless of crossing; it is not time or cost until successful completion. Training-set evaluation against a validation reference mixes samples; below-reference signed scores do not demonstrate positive transfer against a matched held-out benchmark. Reference stopping and sensitivity are reported in §4 and Appendix B.

Cost depends on update rule, optimizer, data order, architecture, stochastic context, task, budget and reference. Denote the update by $U(m,r,T;\omega)$, with stochastic context $\omega$. A model–regime cost is not a distance between two trained endpoints.

## 2.4 The map and the travel

A dissimilarity describes behavior on a selected stream. Adaptation changes a model using particular data and operations. Even an exact metric on behavioral profiles need not predict this cost. Conversely a predictive correlation may exist without identifying a path geometry. XIX switches among already trained predictors; it does not measure retraining costs. XXIII compares those distinct quantities without treating one as a direct substitute for the other.
