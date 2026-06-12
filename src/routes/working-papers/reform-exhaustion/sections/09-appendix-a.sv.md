# Appendix A — Härledningar

## A.0 Notation och stående antaganden

Anläggning: x_{t+1} = A x_t + B u_t, x ∈ ℝ^N, u ∈ ℝ^m, med A Schur-stabilt (spektralradie ρ(A) < 1). För härledningarna tar vi B = I och N = m; det allmänna fallet ersätter Π med BΠ genomgående utan att ändra strukturen i något resultat. Delegationskedja: lager i = 1, …, n; lager i tillämpar den linjära översättningen P_i ∈ ℝ^{m×m} med singulärvärden σ_{i1} ≥ … ≥ σ_{im}, alla ≤ 1 (kontraktionsantagandet); sammansatt Π_n = P_n ⋯ P_1; kumulativ fördröjning T = Σ τ_i (fördröjningar går in i latensresultaten i §3.1 via teknisk rapport I:s apparat och undertrycks här); lagerbrus w_i med noll-medelvärde, kovarians σ_w² I, oberoende mellan lager (Begränsning 4 i §8.1 noterar kostnaden för oberoende).

## A.1 Minimalenergistyrning **[Standard]**

Nåbarhet över horisont H från x_0 = 0:

  x_H = Σ_{k=0}^{H−1} A^k Π u_{H−1−k} = L 𝐮,

där L = [A^{H−1}Π, …, AΠ, Π] och 𝐮 staplar insignalerna. Energi E(𝐮) = Σ_t ‖u_t‖² = ‖𝐮‖².

Minimera ‖𝐮‖² under bivillkoret L𝐮 = x_f. Den minsta-norm-lösningen ligger i range(Lᵀ): sätt 𝐮 = Lᵀλ. Då x_f = LLᵀλ = W_H λ med

  **W_H = Σ_{k=0}^{H−1} A^k Π Πᵀ (Aᵀ)^k**  (nåbarhetsgramianen),

så λ = W_H^{−1} x_f på range(W_H), och

  **E_min(x_f) = 𝐮ᵀ𝐮 = λᵀ L Lᵀ λ = x_fᵀ W_H^{−1} x_f.**

Om x_f ∉ range(W_H) når ingen insignal det: E_min = ∞. För ρ(A) < 1 och H → ∞, W_H ↑ W som löser den diskreta Lyapunovekvationen W = AWAᵀ + ΠΠᵀ.

**Anmärkning A.1.1 (uthållna utfall).** Ett policyutfall är naturligare som ett *hållet* tillstånd än som ett besökt. Att hålla x_f mot stabil dynamik kräver stationär insignal u_ss med x_f = Ax_f + Πu_ss, dvs. u_ss = Π^†(I − A)x_f (när lösbart), med effekt per period

  ‖u_ss‖² = ‖Π^†(I − A)x_f‖² ≥ ‖(I − A)x_f‖² / σ_max(Π)², och längs en riktning överförd med sammansatt förstärkning g: ‖u_ss‖² = ‖(I − A)x_f‖²/g².

Den uthållna-effekt-versionen av energilagen skalar därför som g^{−2} precis som den transienta versionen gör. Styrningstolkningen i §2.3 är inte beroende av den transienta formuleringen.

## A.2 Energilagen: E_min mot djup

**A.2.1 Linjerad kedja (exakt).** Antag att lagren delar singulärriktningar: P_i = U S_i Uᵀ i en gemensam ortonormerad bas U. Då är Π_n = U(ΠS_i)Uᵀ och de sammansatta singulärvärdena multipliceras exakt: g_j = Π_i σ_{ij}. Med A = aI:

  W = Σ_k a^{2k} Π Πᵀ = (1 − a²)^{−1} ΠΠᵀ,  E_min längs riktning j = (1 − a²) g_j^{−2} ‖x_f‖².

Enhetlig förstärkning per lager γ på riktning j ger **E_min ∝ γ^{−2n}**: exponentiellt i djupet, baslinjeformen i §2.3.

**A.2.2 Slumpmässiga orienteringar.** Med oberoende slumpmässiga rotationer mellan lager är Π_n en produkt av oberoende likafördelade slumpmatriser. Enligt Furstenberg–Kesten / Oseledets-teorin existerar gränserna λ_j = lim (1/n) ln σ_j(Π_n) (Lyapunovspektrumet), och för en generisk fix riktning v gäller (1/n) ln ‖Π_n v‖ → λ_1. Tillväxten av E_min med n är därför exponentiell, med takten satt av den relevanta exponenten. För prototypens ensemble (singulärvärden oberoende likafördelade på [0,7, 1,0], Haar-rotationer) är spektrumets *summa* exakt beräkningsbar: Σ_j λ_j = E[ln|det P|] = m·E[ln σ] med E[ln σ] = −0,1677, så den *genomsnittliga* exponenten är E[ln σ] och den förutsagda medianenergitillväxtfaktorn per lager är exp(−2E[ln σ]) = 1,399.

**Numeriskt fynd:** prototypens uppmätta medianfaktor är 1,40 (Del V, Simulering A), vilket matchar den genomsnittliga exponentförutsägelsen.

**A.2.3 Spridningstillväxt.** Kvartilavståndet för E_min(n)/E_min(0) vidgas med n (Del V: [1,30, 1,53] vid n = 1; [8,84, 13,96] vid n = 7). Konsistent med variansen hos ändliga-n-produkter kring deras Lyapunovgräns; ingen takt är härledd. Flaggat som ett möjligt resultat om den fullständiga simuleringen bekräftar robusthet.

## A.3 Geometrilemmat

Lager med enhetsrepertoarbrist modelleras som ortogonala projektioner P_i = I − v_iv_iᵀ, ‖v_i‖ = 1 (blind fläck v_i). Tre kärngeometrier.

**A.3.1 Oberoende (ömsesidigt ortogonala) blinda fläckar.** Påstående: om {v_1, …, v_n} är ortonormala, då är Π_n = I − Σ_{i=1}^n v_iv_iᵀ, den ortogonala projektionen på span{v_i}^⊥; följaktligen rank(Π_n) = m − n, med singulärvärden 1 (multiplicitet m − n) och 0 (multiplicitet n).

*Bevis.* Induktion. n = 1 är definitionen. Antag Π_{n−1} = I − Σ_{i`<`n} v_iv_iᵀ. Då
P_nΠ_{n−1} = (I − v_nv_nᵀ)(I − Σ_{i`<`n} v_iv_iᵀ) = I − Σ_{i≤n} v_iv_iᵀ + v_n Σ_{i`<`n}(v_nᵀv_i)v_iᵀ, och den sista termen försvinner genom ortonormalitet. ∎

Detta är den additiva annihilationens väg till §2.4:s tröskel: ett direktiv med en komponent i span{v_i} förlorar den direkt, och kedjans nåbara mängd har kodimension n.

**A.3.2 Identiska blinda fläckar.** v_i = v för alla i: P är idempotent (P² = P), så Π_n = P för varje n ≥ 1. Rang m − 1, alla nollskilda singulärvärden lika med 1, vid varje djup. En dimension förlorad en gång; djup kostnadsfritt därefter — den homogeniserade regimen i §2.1 och §7.3.

**A.3.3 Generiska blinda fläckar.** v_i oberoende likafördelade på sfären.

*(i) Hård rang bevaras* 

*(ii) Ren överföring förlorar exakt en dimension per lager* 

*Bevis.* (≥) På ∩v_i^⊥ verkar varje P_i som identiteten, så Π_n gör det. (≤) Om ‖Π_n x‖ = ‖x‖, måste, eftersom varje P_i är en kontraktion, varje mellanliggande bild bevara norm: ‖P_1x‖ = ‖x‖ tvingar x ⊥ v_1, följaktligen P_1x = x; iteration ger x ⊥ v_i för alla i. Snittet av n generiska hyperplan har dimension m − n n.s. ∎

Detta är invarianten i §2.1 — *en rent överförd dimension förlorad per bristfälligt lager* — nu ett teorem snarare än en numerisk observation, och den gäller i både A.3.1 och A.3.3, vilket är anledningen till att prototypens rena dimensionsantal sammanfaller för de två regimerna medan deras ranger divergerar.

*(iii) De försämrade dimensionernas förstärkningar kollapsar geometriskt* 

*(iv) Interpolation*: kärnor med ställbar korrelation mellan A.3.2- och A.3.3-polerna (t.ex. v_i ∝ v̄ + κ ε_i). Den fullständiga simuleringen sveper κ; inga analytiska resultat påstås. Själva idealiseringen med ortogonal projektion (gentemot sneda översättningar med d_i = 1) är också en idealisering: för allmänna kontraktiva P_i blir multiplicitetspåståendet i (ii) approximativt (singulärvärden nära 1 snarare än lika med 1), vilket är vad prototypens tröskelräkning vid σ ≥ 0,99 mäter.

**Styrningsnot.** A.3.1–A.3.3 fastställer tillsammans §2.1:s enhetliga lag på den angivna nivån: *antalet* försämrade dimensioner är geometrioberoende; *formen* på kostnaden — kodimension kontra energi — är geometriberoende.

## A.4 Den dubbelriktade noden

Placera en institution på nivå j i observationskedjan och nivå n − j i aktueringskedjan. Uppåt: centrums skattning är x̂ = Θ_upp x + η, där Θ_upp komponerar aggregeringsavbildningarna i teknisk rapport III:s kedja och η dess ackumulerade brus. Centrum beräknar direktivet v = K(x̂) = KΘ_upp x + Kη. Nedåt: noden levererar u = Π_ned v + Dδ, δ lokal diskretion. Den levererade handlingen är därför

  u = Π_ned K Θ_upp x + Π_ned K η + Dδ:

tillståndet går in i aktiveringen **genom produkten Π_ned K Θ_upp** — de två kedjornas försvagningar komponerar multiplikativt på kalibreringsvägen, innan något brus räknas. Nodens friktionsrapport (den avvikelse den observerar lokalt) färdas uppåt genom samma Θ_upp, så korrigeringsslingans förstärkning försvagas av *kvadraten* på den uppåtgående kanalens brist längs rapportens dimensioner: en gång fördärvande direktivets kalibrering, en gång tystande klagomålet om den. Fällan i §7.4 är den regim där det levererade felet är persistent och lokalt synligt medan centrums mottagna friktionssignal ligger under dess detektionströskel.

**Förmodan A.4.1 (superadditivitet).** Låt prestanda J bero på förkortningsparametrarna s_upp, s_ned (lager borttagna från varje kedja vid noden). Då är ∂²J/∂s_upp∂s_ned > 0 över operationsområdet: att korta båda kedjorna vid en nod ger mer än summan av att korta var och en för sig, eftersom varje kedjas kvarvarande försvagning multiplicerar den andras på kalibreringsvägen ovan. Test: fullständig simulering, tvåkedsmodell; förutsägelsens empiriska skugga är teknisk rapport VII:s fynd att skyddade experimentutrymmen — dubbelkorta noder — är det konvergerande första steget i livskraftig reform. Huruvida inom-nod-sammansättningen bäst modelleras som produkten ovan eller inkluderar additiva vägar är en del av vad simuleringen måste avgöra; detta appendix påstår uppställningen, inte teoremet.

---

## A.5 Statussammanställning för granskning

| Resultat | Status |
|---|---|
| E_min = x_fᵀW^{−1}x_f; Lyapunovgräns | Standard |
| Uthållen-effekt-version, samma Π-beroende | Bevisad (Anmärkning A.1.1) |
| Linjerad kedjas exponentiella lag γ^{−2n} | Bevisad |
| Slumpkedjas exponentiella tillväxt (någon takt) | Standard (Oseledets) |
| Mediantakt = genomsnittlig exponent exp(−2E[ln σ]) | Numeriskt (⊳ Granskare 3) |
| Spridningstillväxt med djup | Numeriskt |
| Ortogonala kärnor: rang m − n, additiv annihilation | Bevisad |
| Identiska kärnor: idempotens, en förlust | Bevisad |
| Generiska kärnor: rang m − 1 n.s. | Bevisad |
| Rena dimensioner = m − n n.s. (§2.1-invarianten) | Bevisad |
| σ_min geometriskt avtagande och dess takt | Numeriskt (⊳ Granskare 4) |
| Korrelationsinterpolation | Öppen |
| Dubbelriktad sammansättning Π_ned K Θ_upp | Angiven (uppställning) |
| Superadditivitetsförmodan | Öppen |
