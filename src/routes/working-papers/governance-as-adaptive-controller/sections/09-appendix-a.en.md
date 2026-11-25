# Appendix A — Formal derivations

## A.1 Belief-state formulation [M]

Let \(K(dx',d\theta'\mid x,\theta,u)\) be a Markov transition and \(O(dy'\mid x',\theta',u)\) an observation kernel. First predict the joint distribution using \(K\), then update it using \(O\). In a density notation the predictive likelihood of \(y'\) is

\[
p(y'\mid b,u)=\int O(y'\mid x',\theta',u)K(dx',d\theta'\mid x,\theta,u)b(dx,d\theta).
\]

The joint updated belief divides the predicted density multiplied by the likelihood by this normalizer. This integrates latent state rather than treating its point estimate as observed. With the costs and terminal condition of §2.2, this yields the belief-state decision recursion. An action's informational effect is included in the expectation over \(Y_{t+1}\); a positive information gain is not necessarily positive net decision value. No general certainty-equivalent-plus-dither optimality follows.

## A.2 Persistent excitation and identifiability [M]

In unconstrained noiseless regression, \(Y=\Phi\theta\), the parameter is unique iff the design matrix has full column rank. A least-squares minimizer exists even in the rank-deficient case but need not be unique. Consider \(x_{t+1}=ax_t+bu_t\), \(u_t=1\), \(x_0=0\), \(x_1=2\), \(x_2=3\). Then

\[
\Phi=\begin{pmatrix}0&1\\2&1\end{pmatrix},\quad \det(\Phi^\top\Phi)=4,\quad (a,b)=(0.5,2).
\]

Constant input has sufficed because the transient excites the joint regressor. For the scalar regressor \(\phi_t=t^{-1/2}\), \(\sum_{t=1}^T\phi_t^2\) diverges as \(T\) grows while every fixed-length late window sum tends to zero. Cumulative information growth therefore does not require a uniform window bound. Statistical consistency still needs assumptions on noise, feedback and the observation process.

For \(y_t=\theta u_t+\epsilon_t\) with independent Gaussian errors of known variance \(\sigma^2\), a feasible predetermined nonzero input at fixed reference gives information \(u_t^2/\sigma^2\). Under predetermined inputs the information sums over time. Hence external reference variation is not universally necessary. Whether probing is affordable, safe or useful is a separate decision.

## A.3 Forgetting and inverse information [M]

For \(0<\lambda_f<1\) and \(P_0\succ0\), the RLS recursion is

\[
P_t=\lambda_f^{-1}\left(P_{t-1}-\frac{P_{t-1}\phi_t\phi_t^\top P_{t-1}}{\lambda_f+\phi_t^\top P_{t-1}\phi_t}\right).
\]

The matrix inversion lemma gives, with \(R_t=P_t^{-1}\),

\[
R_t=\lambda_f R_{t-1}+\phi_t\phi_t^\top=\lambda_f^t R_0+\sum_{i=1}^t\lambda_f^{t-i}\phi_i\phi_i^\top.
\]

If all length-\(L\) windows have Gram matrix at least \(\alpha I\) with \(\alpha>0\), then for \(t\ge L\),

\[
R_t\succeq\lambda_f^{L-1}\alpha I,\qquad P_t\preceq (\lambda_f^{L-1}\alpha)^{-1}I.
\]

For constant scalar \(\phi=1\), \(R_t\) tends to \(1/(1-\lambda_f)\) and \(P_t\) to \(1-\lambda_f\). The drift covariance \(W\) does not explicitly enter this inverse-information update (though drift can change the regressors). The old formula \(\operatorname{tr}(P_\infty)\approx\operatorname{tr}(W)/(r_l-r_f)\) and its divergence rule are withdrawn. For constant expected regressor Gram matrix \(G\), the mean weighted information matrix tends to \(G/(1-\lambda_f)\); inversion and expectation do not commute. The actual parameter-error covariance under noise, drift, feedback and filter mismatch is a different quantity.

For weights \(w_k=\lambda_f^k\) on an infinite history:

| Quantity | Expression | At 0.99 |
|---|---|---:|
| Half-life | \(\log(1/2)/\log\lambda_f\) | 68.97 |
| E-folding time | \(-1/\log\lambda_f\) | 99.50 |
| Weight sum | \(1/(1-\lambda_f)\) | 100 |
| Kish effective sample size | \((1+\lambda_f)/(1-\lambda_f)\) | 199 |

The weight sum approximates e-folding time near one. Kish ESS is a property of weights, not a general information bound. None is a direct institutional-memory measure.

## A.4 Rank deficiency of the operational record and the probe design criterion [M]

For the static model of §6.9 let \(m=(1-p)\lambda(1-e)>0\). In coordinates \((\log\lambda,\log(1-e))\) the score direction of the Poisson likelihood is \((1,1)\), so its Fisher information is

\[
\mathcal I_{\mathrm{reg}}=m\begin{pmatrix}1&1\\1&1\end{pmatrix}.
\]

An independent probe with known effectiveness adds \(\operatorname{diag}(h,0)\) with \(h=p\lambda(1-e_{\mathrm{probe}})\). The joint determinant is \(mh>0\) for \(0<p<1\) and \(e_{\mathrm{probe}}<1\), given positive threat and residual effectiveness. At \(p=1\) the operational channel disappears and joint rank is one again if the probe coefficient is positive. A designed reduction is not necessarily a known coefficient in reality.

Nonidentifiability does not imply inability to decide: at \(p=0\), an exactly known residual product 0.1 and an independent bound \(0\le e\le0.5\) imply \(\lambda\le0.2\), below a safety threshold of 1, even though the parameters are not jointly identified. Finite-data decisions must account for uncertainty in the product and any other evidence.

For a separate scalar Gaussian approximation in log threat with random-walk innovation variance \(q>0\) and constant per-step information \(I>0\), the posterior variance update is

\[
P_{t+1}=\left(\frac{1}{P_t+q}+I\right)^{-1}.
\]

At the positive fixed point \(IP(P+q)=q\), hence

\[
P_\infty=\frac{\sqrt{q^2+4q/I}-q}{2}.
\]

Suppose the posterior mean is exactly \(\log\lambda_{\mathrm{low}}\) and the posterior is Gaussian, with safety margin \(\Delta=\log(\lambda_{\mathrm{safe}}/\lambda_{\mathrm{low}})>0\) and one-sided quantile \(z_\alpha>0\). Set \(v=(\Delta/z_\alpha)^2\). The criterion \(P_\infty\le v\) holds iff \(I\ge q/[v(v+q)]\). With \(I=p\kappa\), \(\kappa=\lambda_{\mathrm{low}}(1-e_{\mathrm{probe}})>0\),

\[
p_{\mathrm{exact}}=\frac{q}{\kappa v(v+q)},\qquad p_{\mathrm{approx}}=\frac{q}{\kappa v^2}=\frac{qz_\alpha^4}{\kappa\Delta^4}.
\]

The approximation is valid for \(q\ll v\) and its ratio to the exact threshold is \(1+q/v>1\). It is an upper bound on the idealized steady-variance design threshold, not a lower bound. A value outside the admissible interval of exposure fractions is not a feasible design. For the legacy values \(\lambda_{\mathrm{low}}=0.2\), \(\lambda_{\mathrm{safe}}=1\), \(e_{\mathrm{probe}}=0.5\), \(\alpha=0.05\):

| Drift standard deviation | Approximation | Exact scalar threshold |
|---|---:|---:|
| 0.03 | 0.00982 | 0.00981 |
| 0.06 | 0.03927 | 0.03913 |
| 0.12 | 0.15710 | 0.15477 |

This is a conditional variance design calculation, not a first-passage result. The posterior mean may fluctuate and cross a decision boundary at other variances. The grid filter of the historical simulation differs from this approximation. No general direction of bound for that filter, unknown probe efficacy, multiple threat classes or real regulators is established.
