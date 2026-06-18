### Appendix B — Simuleringsspecifikation

Detta appendix specificerar simuleringen i Del V i sin helhet, tillräcklig för oberoende reimplementering. Alla experiment är deterministiska givet fröet; skriptet är `gae-simulator-v17-adaptation-bottleneck.py`, frö 20260618, med omvandlingseffektiviteterna fixerade vid \(\rho_{SL}=0,6, \rho_{LE}=0,5\) genomgående. Effektivitetsvärdena är illustrativa: resultaten är strukturella i \(\rho_{SL}, \rho_{LE} < 1\), och deras magnituder sätter allvarlighetsgraden hos en flaskhals, inte dess existens.

## B.1 Slingmodellen

De dynamiska experimenten (B och D) kör den rekursiva slingan som en diskret-tids kö. Vid varje steg, med aktuella eftersläpningar \(B_I, B_N, B_R\):

\[
\begin{aligned}
\text{(Avkänna}\to\text{Lära)}\quad
& \alpha_L = \rho_{SL}\, r_S, \quad
  p_L = \min(B_I + \alpha_L,\, r_L), \quad
  B_I \leftarrow \max(0,\, B_I + \alpha_L - r_L); \\
\text{(Lära}\to\text{Verkställa)}\quad
& \alpha_E = \rho_{LE}\, p_L, \quad
  p_E = \min(B_N + \alpha_E,\, r_E), \quad
  B_N \leftarrow \max(0,\, B_N + \alpha_E - r_E); \\
\text{(Verkställa}\to\text{Avkänna)}\quad
& w = g\, p_E + d, \quad
  B_R \leftarrow \max(0,\, B_R + w - r_S).
\end{aligned}
\]

Här är \(p_L, p_E\) det per-steg bearbetade (realiserade) lärandet och verkställandet; de stationära värdena reproducerar \(\tilde r_L, \tilde r_E\) från (A.1). Standardstörningen är \(d = 0,05\) och standardamplifieringen \(g = 1\) om inte en regim sätter annat.

## B.2 De fyra experimenten

**A — Allokeringsoptimum.** Med total \(R = 1\), maximerar en rutnätssökning över simplexet \(r_S + r_L + r_E = R\) (steg \(0,002\)) \(T_{\text{eff}}\) från (A.2) och jämförs med det analytiska optimumet i Proposition A.2. Noll‑marginal‑avkastning‑egenskapen i Teorem A.1 kontrolleras genom att addera \(0,2\) till det icke‑bindande avkänningssteget från en verkställandebindande allokering och bekräfta att \(T_{\text{eff}}\) är oförändrad. En endimensionell skärning genom optimum plottas (`xv_A_allocation.png`).

**B — De tre eftersläpningarna.** Tre regimer körs i 400 steg, var och en svältande ett steg i förhållande till dess uppströms tillförsel: *avkänning > lärande* (\(r_S=0,60, r_L=0,10, r_E=0,40\)); *lärande > verkställande* (\(r_S=0,60, r_L=0,50, r_E=0,05\)); *värld > åter‑observation* (\(r_S=0,60, r_L=0,50, r_E=0,40, g=4\)). Den dominanta eftersläpningens tillväxtlutning (slutvärde / steg) registreras; de andra två förblir vid noll (`xv_B_backlogs.png`).

**C — Slutningsfördröjnings‑sänkning.** Vid det balanserade optimumet från A, sveps slutningsfördröjningen \(\tau\) över \([0,12]\) (40 punkter). Den fullbordade cykeltakten mäts från slingan och jämförs med den slutna formen (A.6); den maximala absoluta residualen registreras (`xv_C_closure_delay.png`).

**D — Effektivt och självförblindande.** En kontrollant följer ett mål som glider vid \(r_{\text{miljö}}=0,02\) med korrigeringsförstärkning \(0,5\), avkänningskapacitet \(r_S=0,10\) helt konsumerad av att följa målet, och verkställande som genererar oobserverade konsekvenser vid \(w = 0,12 > r_S\). Spårningsfelet på den åter‑observerade komponenten och verklighets‑eftersläpningen \(B_R\) registreras över 600 steg (`xv_D_self_blinding.png`).

## B.3 Parametertabell

| Symbol | Betydelse | Värde(n) |
|---|---|---|
| \(\rho_{SL}\) | avkänning→lärande omvandlingseffektivitet | 0,6 |
| \(\rho_{LE}\) | lärande→verkställande omvandlingseffektivitet | 0,5 |
| \(R\) | total kapacitet (Experiment A) | 1,0 |
| \(d\) | exogen störningstakt (standard) | 0,05 |
| \(g\) | konsekvensamplifiering (standard; B regim 3) | 1,0; 4,0 |
| \(\tau\) | slutningsfördröjning (Experiment C svep) | 0–12 |
| \(r_{\text{miljö}}\) | målglidningstakt (Experiment D) | 0,02 |
| frö | RNG‑frö | 20260618 |

## B.4 Verifierade resultat

| Experiment | Storhet | Resultat |
|---|---|---|
| A | analytiskt optimum \((r_S^\*, r_L^\*, r_E^\*)\) | (0,526, 0,316, 0,158) |
| A | rutnätssökning argmax | (0,526, 0,316, 0,158) |
| A | \(T_{\text{eff}}^\*\) vid balans vs. lika tredjedelar | 0,158 vs. 0,100 (58% högre) |
| A | marginalavkastning till icke‑bindande steg | 0,000 |
| B | eftersläpningslutningar (information / innovation / verklighet) | 0,26 / 0,13 / 0,17, övriga 0 |
| B | max endogen \(w/r_S\) vid \(g=1, d=0\) | \(\rho_{SL}\rho_{LE} = 0,30 < 1\) |
| C | max \(\lvert\)uppmätt \(- T_{\text{rå}}/(1+\tau T_{\text{rå}})\rvert\) | \(\sim 3\times10^{-17}\) |
| C | halveringsfördröjning för genomströmning | \(\tau = 1/T_{\text{rå}} = 6,33\) |
| D | medel spårningsfel (åter‑observerad komponent) | 0,020 (platt) |
| D | verklighets‑eftersläpningstillväxt | 0,020 / steg, till 12,0 vid 600 steg |

Simuleringarna bekräftar den interna konsistensen i Del II och tillhandahåller de två storheter som brödtexten sköt upp — det balanserade optimumet i A.3 och slutningsfördröjningsformen (A.6). De fastställer ingenting om något verkligt styrsystem; varje takt, effektivitet, amplifiering, glidning och fördröjning är stipulerad, och §2.4:s erkännande att inget fältinstrument erbjuds står i full kraft.

---
