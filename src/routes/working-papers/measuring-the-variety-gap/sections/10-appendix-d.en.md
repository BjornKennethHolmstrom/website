## Appendix D: Mathematical audit of the legacy index

### D.1 Legacy expressions (withdrawn)

For positive \(V_e,V_o,\sigma,p,1-\beta\), the historical unweighted and weighted products were
\[G_u=\frac{V_e}{V_o}\frac{e^{\tau/12+\omega/0.20}}{\sigma p(1-\beta)},\qquad G_w=\left(\frac{V_e}{V_o}\right)^{1.5}\frac{e^{\tau/12+0.5\omega/0.20}}{\sigma^{1.5}p^{1.5}(1-\beta)^{0.5}}.\]
These are retained solely to explain the audit. The weights and reference scales are assumptions, not consequences of Paper V. If \(p=0\), the formula is singular regardless of adequacy. The additive version D.3 had seven terms and counted both \(1-p\) and \(\rho=1-p\); its advertised bounded nonnegative range also needs constraints on ratios and normalizers. Under the complement, nonconstant p and rho have correlation −1; independently eliciting them or assuming positive correlation is inconsistent. Raising one factor to a power does not establish justified weighting.

### D.2 Changes and uncertainty

With fixed weights and references, the actual derivative is
\[\frac{\dot G_w}{G_w}=1.5\left(\frac{\dot V_e}{V_e}-\frac{\dot V_o}{V_o}-\frac{\dot\sigma}{\sigma}-\frac{\dot p}{p}\right)+\frac{\dot\tau}{12}+\frac{0.5\dot\omega}{0.20}+\frac{0.5\dot\beta}{1-\beta}.\]
At fixed positive factors and equal dimension counts, changing latency from 12 to 24 multiplies the product by e while the dimensional difference is unchanged. [M] No equation links this product or its threshold to SNR = 1. The earlier distributions conflict: §5.4 uses normal oscillation and lognormal bypass, D.6 lognormal oscillation and beta bypass. A lognormal log-mean equal to a raw point estimate has median exponential in that point. A beta mode and two quantiles need not be jointly achievable with two parameters. Truncation and dependence affect the result. The reported intervals have no verified sampling interpretation; an interval conditional on an elicited distribution is not established frequentist coverage or calibrated posterior uncertainty.

### D.3 Conditional sampling model

If independent repeated observations have common per-sample noise variance \(s_0^2\), the sample mean of n such observations has variance \(s_0^2/n\). With a fixed number of equally costly samples allocated in fractions w, this gives inverse allocation scaling for channels with positive counts. This requires independence and unchanged per-sample variance; shared errors, changing exposure and alternative histories invalidate the simplification. Noise variance is not the legacy fidelity parameter sigma. The model is a possible scheduling diagnostic, not a law of institutional attention.
