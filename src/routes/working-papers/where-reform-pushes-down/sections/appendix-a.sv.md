## Appendix A. Allokeringslemmat

Låt `Ω_a` vara den nåbara mängden med normaliserat basmått `μ_a`, och `f : Ω_a → [0,∞)` responsprofilen. En strategisk aktör med budget `E` allokerar tätheten `D = E·q`, `q ≥ 0`, `∫ q dμ_a = 1`, under ett koncentrationstak `q ≤ c` (`c ≥ 1`); dess förlust är `J_strat = E ∫ f q dμ_a`. Då gäller

> `sup { ∫ f q dμ_a : 0 ≤ q ≤ c, ∫ q dμ_a = 1 } = CVaR_{1−1/c}(f ; μ_a)`,

medelvärdet av `f` över dess högst värderade `1/c`-måttsandel. Ekvivalent är detta den sämsta-fall-förväntningen av `f` över alla sannolikhetsmått vars täthet med avseende på `μ_a` är begränsad av `c` — riskenveloppsrepresentationen (dualiteten) för betingat värde-vid-risk / expected shortfall, ett distributionsrobust sämsta fall över en sannolikhetskvotsbegränsad tvetydighetsmängd. Optimeraren är bang-bang: täthet `c` på den översta `1/c`-andelen av `f`, noll någon annanstans, med en fraktionell gränscell. Beviset är standard (Rockafellar–Uryasev); vi importerar det. Ändpunkter: `c = 1` tvingar `q ≡ 1`, värdet `E_{μ_a}[f]`; `c → ∞` ger `ess sup f`.

Två kvalifikationer följer med lemmat. Det är **statiskt** — förlusten är linjär i den allokerade tätheten, utan någon tidsmässig, kausal eller övergångskostnad — och det förutsätter **upptäckt**, eftersom supremumet endast uppnås av ett `q` som har stöd på den verkliga övre svansen av `f`. Under ett icke-likformigt basmått `q₀` (en färgad miljö) gäller det identiska påståendet med `μ_a` ersatt av det `q₀`-viktade måttet och taket avläst relativt `q₀`; den strategiska premien mäts då mot `q₀`-baslinjen snarare än den likformiga.

---

