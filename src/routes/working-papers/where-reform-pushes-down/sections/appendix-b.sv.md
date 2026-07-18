## Appendix B. Modell, simulatorer och reproducerbarhet

**Process och regulatorer.** Kontinuerlig-tid-process `P(s) = 1/((s+1)(s+2))` — stabil, minimum-fas, relativt gradtal två. Analyssteget (§2–§4) använder en resonant regulator `K(s) = kp + δ·s/(s² + (ωm/Q)s + ωm²)`, `kp = 0,5`, `ωm = 3`, `Q = 2`, där `δ` är proxy-förstärkningsparametern och `Ω_m` en omgivning av `ωm`. Syntessteget (§5) diskretiserar `P` med nollte ordningens hållning vid `Ts = 0,1` och parametriserar stabiliserande regulatorer med en FIR Youla-parameter `Q(z)` av längd 8, så att `S = 1 − PQ` är affin i koefficienterna; tak `EQ` (ansträngning) och `TP` (topp för komplementär känslighet). Frö 20260716 genomgående. Simulatorer: `paper_xxv_simulator_bode_adversary.py` (§2–§4), `paper_xxv_simulator_bode_synthesis.py` (§5).

**Bode-ankare (R0).** Integralen är analytiskt noll (Freudenberg–Looze, relativt gradtal två). Höggfrekvensutvecklingen `log|S| = 1/(2ω²) + 693/(8ω⁴) + O(ω⁻⁶)` ger ett trunkerat värde `B_S(0,W) = −kp/W − 231/(8W³) + O(W⁻⁵)`; residualen efter den ledande svansen matchar nästa analytiska koefficient:

| `W` | `B_S + kp/W` | `−28,875/W³` |
|---|---|---|
| 100 | −2,888e−5 | −2,888e−5 |
| 300 | −1,069e−6 | −1,069e−6 |
| 1000 | −2,888e−8 | −2,887e−8 |
| 3000 | −1,070e−9 | −1,069e−9 |

**Funktional icke-identifierbarhet (§3).** Två profiler på ett band med enhetsmått: `(|S|² = 4` på måttet `0,25`, `1` på `0,75)` och `(|S|² = 2` på `0,5`, `1` på `0,5)`. Båda har tillgänglig positiv log-area `A_+ = 0,1733`; under `c = 2` är deras strategiska förluster `2,50` och `2,00`. Dessa är godtyckliga mätbara profiler, inte uppnåeliga känslighetsfunktioner.

**Uppnåelighetssvepning (§5).** Minsta tillgängliga CVaR erhålls genom multistart SLSQP över FIR-koefficienterna på ett 400-punkters rutnät (konvext program, ocertifierad lösare); den riskblinda referensen är den proxy-giriga regulatorn (minsta övervakad-band-kostnad). Två jämförelser spelar roll. *Matchad* — utvärdering av de riskblinda och riskmedvetna optimumen vid den proxy-giriga regulatorns egen undertryckning — ger ett gap som försvinner till numerisk precision i alla nio cellerna, så vid maximalt uppnåelig undertryckning sammanfaller de två designerna:

| `c` | `TP` | girig undertryckning | girig CVaR | matchat gap |
|---|---|---|---|---|
| 1,5 | 1,5 | 0,727 | 1,137 | 3,5e−7 |
| 2,0 | 1,5 | 0,727 | 1,181 | 6,8e−7 |
| 5,0 | 1,5 | 0,727 | 1,352 | 2,2e−6 |
| 1,5 | 2,0 | 0,785 | 1,151 | 2,9e−7 |
| 2,0 | 2,0 | 0,785 | 1,199 | 5,1e−7 |
| 5,0 | 2,0 | 0,785 | 1,399 | 2,1e−6 |
| 1,5 | 3,0 | 0,870 | 1,197 | 6,0e−7 |
| 2,0 | 3,0 | 0,870 | 1,261 | 9,1e−7 |
| 5,0 | 3,0 | 0,870 | 1,554 | 2,6e−6 |

Den genuina robusthetseffekten framträder endast i jämförelsen vid *fast undertryckning*: vid undertryckning 0,72 faller den minsta uppnåeliga CVaR när tillåtelsen för komplementär känslighet `TP` luckras upp.

| `c` | `TP = 1,5` | `TP = 2,0` | `TP = 3,0` |
|---|---|---|---|
| 1,5 | 1,128 | 1,102 | 1,080 |
| 2,0 | 1,167 | 1,131 | 1,108 |
| 5,0 | 1,317 | 1,244 | 1,217 |

Värdefunktionsgolvet är monotont i undertryckning i alla nio cellerna (icke-avtagande till följd av konstruktionen; strikt här). En tidigare version av detta appendix rapporterade ett "matchat gap" som jämförde regulatorer vid olika undertryckningsnivåer; den jämförelsen var felmatchad och dess läsning "robusthet återöppnar gapet" har dragits tillbaka.

**Verifikation.** Strategisk förlust beräknas på två oberoende sätt — en operationell girig vattenfyllnadsallokerare och den analytiska CVaR-formeln — och överensstämmer till `~1e−14`; detta kontrollerar diskretiseringen, eftersom teoremet är importerat.
