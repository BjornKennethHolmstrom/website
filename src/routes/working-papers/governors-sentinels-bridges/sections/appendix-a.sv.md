### Appendix A — Modellzoo, ström och rollmått

**Historisk specifikation.** Sju GRU-prediktorer med ett lager på 256-dimensionella bildrutor: `normal_h8`, `normal_h16`, `compressed_h2`, `wind_h8`, `damped_h8`, `blur_h8`, `velocity_aux_h8`. Hastighetshjälphuvudet har vikt 0,1. Fyra regimer: normal, vind (konstant acceleration), dämpad (hastighetsfaktor 0,6 vid väggkontakt), oskärpa (3 gånger 3 boxkärna). Varje modell tränas på 500 sekvenser om 200 steg, tolv samplade fönster per sekvens, Adam med inlärningshastighet 0,001, högst 20 epoker, tålamod 4. Ström: sex segment om 500 steg, normal/vind/dämpad/oskärpa/normal/vind. Prognosförskjutningar 5, 10, 20 relativt föregående bildruta. Gemensam ström inom varje zoo.

**Implementationsbegränsningar.** Vikter konstrueras före `torch.manual_seed(seed*100+len(name))`; lika långa namn delar frön (`normal_h8`/`damped_h8`, `wind_h8`/`blur_h8`). Python-hashbaserade frön och cachehistorik tillför proveniensrisker. Valideringsförluster är regimspecifika och hjälpförlusten skiljer sig. Se §3 för mognad och persistens; sluten granskning sker var 500:e steg över 30 ursprung, adaptiv använder 50 stegs rullande återblick inklusive aktuellt ursprung (51 ursprung), 5 procents marginal och fem stegs persistens. Oraklet använder minsta enmodellsförlust per ursprung; full pluralism medelvärdesbildar prediktioner.

**Nominell vaktpost.** Centrerat fönster 20, marginal 10 procent av aktiv förlust, horisont 50, minsta nominella framförhållning 10; felförhöjning över dubbla regimens inledande fönstermedian. Täckning räknar unika episoder, falsklarm kandidattidpunkter; aktiva kandidater utesluts. Tids- och matchningsbegränsningar i §4. **Bro:** RMS-avstånd mellan förlustvektorer och oviktad mellancentralitet vid första sammanhängande tröskel; tillgänglig kod registrerar artikulation för hela strömmen, inte flaggor per regim (rad 532).

| Prediktion | Historisk rapport [HR] | Korrigerad status |
|---|---|---|
| P1 | Adaptiv deljämförelse 20/20 två gånger; sluten sämst 2/20; full ordning 1/20 | FAIL registrerat nollvillkor; icke-kausal offlinekontrast |
| P2 | 17/20; poolat rho 0,481 | Nominella kriterier rapporterat uppfyllda; kausal tolkning hålls öppen |
| P3 | 11/20; medel +2 episoder | FAIL |
| P4 | 20/20; rapporterad artikulation 19/20 | Fullständigt registrerat kriterium overifierat; funktionellt påstående dras tillbaka |

Alla antal är historiska rapporter. Ursprunglig registrering och kod bevaras; korrigeringsvittnena är inte registrerade experiment. Namngivna roller, regimgeometri och illustrationer av precision/recall var explorativa; inga historiska arrayer återfanns för verifiering.
