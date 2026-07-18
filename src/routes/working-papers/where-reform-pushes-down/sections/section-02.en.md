## 2. The imported allocation law

Fix a scalar response profile `f(ω) = |S(jω)|² ≥ 0` over a frequency variable `ω`, where `S` is the sensitivity function of a feedback loop to be specified in Section 3. A disturbance environment allocates energy across frequency; realized loss is the energy-weighted response,

    J(D) = ∫ f(ω) D(ω) dω,

where `D` is a disturbance spectral density. A *passive* environment spreads a fixed budget uniformly over the reachable band; a *strategic* environment allocates the same budget to do as much damage as it can, subject to how concentrated it is permitted to be.

We model the strategic actor by three parameters. Its budget is a total energy `E`. Its reach is a set `Ω_a` — the frequencies at which it can place disturbance at all. Its concentration is a factor `c ≥ 1` bounding the density it may place at any single frequency to `c` times the uniform density over `Ω_a`; `c = 1` forces the strategic actor to be indistinguishable from the passive one, and `c → ∞` permits it to place all of its budget at a single frequency. Writing `μ_a` for the normalized (uniform) measure on `Ω_a`, the strategic actor solves

    J_strat = E · sup { ∫ f q dμ_a : 0 ≤ q ≤ c, ∫ q dμ_a = 1 }.

The optimal `q` fills the highest-`f` frequencies it can reach up to the density cap, exhausting the budget on the worst reachable `1/c` fraction of the band. The value of this program is exactly the conditional value-at-risk of `f` at level `α = 1 − 1/c`:

    J_strat / E = CVaR_{1−1/c}( f ; μ_a on Ω_a ),          [imported]

the mean of `f` over its worst `1/c`-measure fraction. The passive loss is the ordinary mean, `J_pass / E = E_{μ_a}[f]`, and the strategic premium is the difference,

    G / E = CVaR_{1−1/c}(f) − E_{μ_a}[f] = M · U,

where `M = E_{μ_a}[f]` is the accessible mean level and `U = CVaR/M − 1 ≥ 0` is a scale-invariant index of upper-tail heterogeneity. The concentration parameter interpolates two classical endpoints: at `c = 1` the strategic loss is the accessible mean, a band-limited `H₂`-type quantity; as `c → ∞` it is the accessible essential supremum, the finite-frequency `H∞` gain.

This law is imported, not derived here. The supremum above is the risk-envelope (dual) representation of CVaR / expected shortfall: the worst-case expectation of `f` over all measures whose density with respect to the base measure is bounded by `1/α`. It is equivalently a distributionally-robust worst case over a likelihood-ratio-bounded ambiguity set. We therefore label it an *imported allocation lemma* (Rockafellar–Uryasev) and claim no novelty for it **[R, imported]**. Two qualifications travel with it. It is a *static* lemma: loss is linear in the allocated density and there is no temporal, causal, or transition cost to moving pressure between frequencies. And it silently presumes *discovery* — the value `CVaR` is attained only by an actor that knows where `f` is large and can therefore locate the upper tail; an actor with only noisy knowledge of `f` realizes strictly less, interpolating back toward the passive mean. We return to both qualifications in Section 4.

A note on verification, since the series treats it as a matter of discipline. The accompanying simulator computes `J_strat` two independent ways — an operational greedy water-filling allocator, and the analytic CVaR formula above — and confirms they agree to the order of `10⁻¹⁴`. This checks the discretization, not the theorem; the theorem is imported and the identity is exact.

---
