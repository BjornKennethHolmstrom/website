## Appendix A. The allocation lemma

Let `Ω_a` be the reachable set with normalized base measure `μ_a`, and `f : Ω_a → [0,∞)` the response profile. A strategic actor with budget `E` allocates density `D = E·q`, `q ≥ 0`, `∫ q dμ_a = 1`, under a concentration cap `q ≤ c` (`c ≥ 1`); its loss is `J_strat = E ∫ f q dμ_a`. Then

> `sup { ∫ f q dμ_a : 0 ≤ q ≤ c, ∫ q dμ_a = 1 } = CVaR_{1−1/c}(f ; μ_a)`,

the mean of `f` over its highest-valued `1/c`-measure fraction. Equivalently this is the worst-case expectation of `f` over all probability measures whose density with respect to `μ_a` is bounded by `c` — the risk-envelope (dual) representation of conditional value-at-risk / expected shortfall, a distributionally-robust worst case over a likelihood-ratio-bounded ambiguity set. The optimizer is bang-bang: density `c` on the top `1/c`-fraction of `f`, zero elsewhere, with a fractional boundary cell. The proof is standard (Rockafellar–Uryasev); we import it. Endpoints: `c = 1` forces `q ≡ 1`, value `E_{μ_a}[f]`; `c → ∞` gives `ess sup f`.

Two qualifications travel with the lemma. It is **static** — loss is linear in the allocated density, with no temporal, causal, or transition cost — and it presumes **discovery**, since the supremum is attained only by a `q` supported on the true upper tail of `f`. Under a non-uniform base measure `q₀` (a colored environment) the identical statement holds with `μ_a` replaced by the `q₀`-weighted measure and the cap read relative to `q₀`; the strategic premium is then measured against the `q₀`-baseline rather than the uniform one.

---

