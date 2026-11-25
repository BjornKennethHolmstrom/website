# Appendix B — Simuleringsspecifikation

## B.1 Process [I]

\[
x_{t+1}=A_tx_t+B_t\mu u_t+w_t,\qquad y_{t+1}=x_{t+1}+v_{t+1}.
\]

De två diagonalelementen i \(A_t\) och fyra elementen i \(B_t\) är sex driftande parametrar, initialiserade nära \(A_0=0.95I_2\), \(B_0=I_2\) med oberoende perturbationer med standardavvikelse 0,01. Process- och observationsbrusets kovarianser är \(0.01I_2\) och \(0.05I_2\). Parameterslumppromenadens innovationer har som standard standardavvikelse 0,002 (varians 0,000004). Dessa brusstorheter är inte utbytbara. LQR:s tillstånds- och insignalkostnadsmatriser är \(Q=I_2\) och \(R=0.1I_2\).

## B.2 Regulator [I]

Vid varje steg löses den diskreta Riccatiekvationen för den skattade processen, \(u_t=-K_t\hat x_t+\eta_t\) bildas och den effektiva insignalen \(\mu u_t\) appliceras. Koden använder nollförstärkning som reserv om Riccatilösaren ger det hanterade linjära algebrafelmeddelandet. Ditherkomponenterna är oberoende gaussiska dragningar med standardavvikelse \(\sigma_\eta\), inte varians. Filtret använder fast \(A_0,B_0\) och avsedd \(u_t\). För varje tillståndsdimension \(d\) är RLS-regressorn \(\phi_{t,d}=(\hat x_{t,d},u_{t,0},u_{t,1})^\top\) och responsen motsvarande komponent i \(y_{t+1}\). Varje rad har en tre gånger tre-matris \(P\) initialiserad till \(10I_3\). Skattade tillståndsregressorer, återkoppling och drift komplicerar konsistens; detta är inte den brusfria regressionen med fullständigt observerat tillstånd i A.2.

## B.3 Scenarier [I]

| Scenario | Dither-SD | Drift-SD | Glömskefaktor | Verkställighet |
|---|---:|---:|---:|---:|
| 1 Måttlig dither | 0,05 | 0,002 | 0,99 | 1 |
| 2 Ingen avsiktlig dither | 0 | 0,002 | 0,99 | 1 |
| 3 Krisutlösare | 0 eller 0,5 | 0,002 | 0,99 | 1 |
| 4 Hög dither | 0,5 | 0,002 | 0,99 | 1 |
| 5 Drift och glömska | 0,05 | 0,005 | 0,90 | 1 |
| 6 Dämpning | 0,05 | 0,002 | 0,99 | 0,3 |

Scenario 3 utlöser en utforskningsperiod på 20 steg när simulatorns sanna tillståndsnorm överskrider 2,0 medan den är inaktiv. Scenario 6:s fysiska och effektiva insignalens förstärkningar kan inte särskiljas enbart från dynamiken med avsedd insignal.

## B.4 Parametersvep

Det äldre skriptet varierar dither och drift, glömska och drift samt verkställighetseffektivitet. Det använder 30 körningar per svepcell för följningsvärmekartorna. Utfallen är inte skattningar av en nettolärandetakt, och ingen tröskel eller landplacering härleds från dem här.

## B.5 Utfallsmått

Följningsmåttet tar medelvärdet av det sanna tillståndets euklidiska norm. Parameterfelet tar medelvärdet av de två radfelsnormerna mot fysiska parametrar och sedan medelvärdet över tid. Det är inte den kvadratiska LQR-kostnaden eller en skattning av posteriorosäkerhet. Fältet för självdöljande är hårdkodat till noll, inte observerat. Krisräkning finns i koden men ingår inte i den genererade sammanfattnings-CSV:n.

## B.6 Fasta parametrar och omkörning

Den avsedda sammanfattningen använder 100 frön per scenario, med 50 uppvärmningssteg och 500 efterföljande steg. Auditens omkörning använder tre sammanfattningsfrön per scenario med kod och måttdefinitioner bevarade. Ursprunglig CSV, fullständiga banor och regulatorns bildfiler återfanns inte. Båda ursprungliga simuleringsskripten bevaras oförändrade; se korrigeringsarkivet, inklusive audit v0.2 `scripts/check_witnesses.py`, `results/witnesses.json`, `scripts/check_additions.py` och `results/additions.json`. Kontrollerna använder de medföljande källfunktionerna och exakta modellberäkningar, inte en omkörning av hela svepet.

Det separata upphörandeskriptet använder 150 körningar per cell och en horisont på 300 år, logaritmiskt medelvärdesåtergående sanning (koefficient 0,95), sann effektivitet 0,97, ett slumppromenadsfilter med 200 rutnätsvärden för logaritmerat hot och 20 för effektivitet, samt en prior centrerad vid hot 10. Scenariocentren är 0,2 och 2. Avvecklingsregeln använder posterior sannolikhet minst 0,95 för hot högst 1. Ursprungliga figurer finns endast i arkivet; etiketten 30 år i avvägningsfiguren är fel. Den rapporterade kontrollen med känd effektivitet medföljde inte. Ingen fullständig omkörning av upphörandesimuleringen utfördes.

## B.7 Simuleringsutfall [HR]

Ursprunglig tabell B.1 behålls nedan med korrigerade scenarionamn. Talen är historiskt rapporterade medianer och kvartilavstånd för körningarnas fel (100 körningar per scenario), inte oberoende reproducerad statistik. Del IV ger den separat betecknade explorativa diagnostiken med tre frön.

| Scenario | Följningsmedian | Följnings-IQR | Parametermedian | Parameter-IQR |
|---|---:|---|---:|---|
| 1 Måttlig dither | 0,211 | 0,206–0,216 | 0,486 | 0,436–0,553 |
| 2 Ingen avsiktlig dither | 0,204 | 0,199–0,210 | 1,640 | 1,293–2,148 |
| 3 Krisutlösare | 0,201 | 0,197–0,209 | 1,765 | 1,339–2,059 |
| 4 Hög dither | 0,658 | 0,646–0,672 | 0,075 | 0,067–0,084 |
| 5 Drift och glömska | 0,245 | 0,232–0,255 | 1,298 | 1,221–1,395 |
| 6 Dämpning | 0,248 | 0,232–0,263 | 0,691 | 0,648–0,777 |

De historiska medianerna visar inte oundviklig försämring utan dither. Scenariot med hög dither har mindre parameterfel till priset av större följningsfel. Koden ger ingen direkt mätning av den föreslagna självdöljandemekanismen.
