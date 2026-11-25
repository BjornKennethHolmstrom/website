# §3 — Deskriptiv geometri: avgränsade negativa resultat

## 3.1 Skala och form

[TR] Medianer för hela panelen (20 zoon) ges nedan. Kolumnen för de första tre tas med enbart för att spåra den ursprungliga prosaavvikelsen.

| Statistik | Första 3 | Alla 20 |
|---|---:|---:|
| Pearsonreferens från delade urval | 0,866 | 0,874 |
| Pearson mellan regimer | 0,850 | 0,844 |
| Medianunderskott | 0,075 | 0,049 |
| Skalspridning (max/min medel) | 1,561 | 1,721 |
| Frobeniuskvot | 1,870 | 1,341 |

De första tre matchar flera ursprungligen publicerade värden; hela panelen ligger till grund för de historiska kriterierna. Pearson detekterar den specificerade formförändringen i 2/20 och Frobenius i 5/20; endera statistiken i 6/20, under 16/20. **H_warp FAIL.** Data visar skalvariation utan att uppfylla det specificerade kriteriet för stor omformning. Frobeniuskvoten för första tre överstiger 1,5, så ursprungliga påståendet att båda statistikerna överensstämde i den citerade panelen saknade stöd. Ingetdera misslyckandet visar forminvarians.

[E] Kvadratrötter av lagrade kvadrerade matriser eliminerar detekterade brott mot triangelolikheten (median 2,7 procent av ordnade tripplar före rotutdragning). H_warp blir 7/20, median Frobeniuskvot 1,340 och medianunderskott 0,056. Utfallet oförändrat. Detta är inte ett nytt registrerat test.

## 3.2 Anslutningströskeln är MST-flaskhalsen [R]

För en komplett oriktad viktad graf är första tröskeln $b$ där grafen blir sammanhängande lika med största kantvikten i varje minimalt uppspännande träd (MST). Appendix A bevisar detta med ett snittargument. Inget metrikantagande behövs. En flaskhals härleds ur matrisen, är inte en oberoende topologiobservation, men beror på arrangemang såväl som skala: avstånden (1,1,2) och (4/3,4/3,4/3) har samma medel 4/3 och trösklarna 1 respektive 4/3. Tidigare angivet överskjutande på 0,5–3,8 procent i svepet kan inte härledas till någon av de två tillgängliga skripten och dras tillbaka.

## 3.3 Brorankningar beror på tröskeln

[TR] I test 2 passerade antagningskriteriet: alla 20 zoon har icke-degenererad brostruktur i minst två regimer vid registrerad marginal. Vid kvadrerad marginal 1,25 misslyckas H_bridge (2/20, gräns 16); median rangkorrelation mellan regimer är 0,653 [0,546; 0,698]. Vid marginal 1,5 är den 0,548 [0,471; 0,695]. Vid exakta tröskeln är den 0,447 [0,312; 0,653], med 13/20 som uppfyller kriteriet för regimberoende. Vid 1,25 RMS-marginal (1,5625 i kvadrerade enheter) ger den explorativa omräkningen 5/20 och mediankorrelation 0,652 [E]. Olika marginalkonventioner definierar olika grafer; resultaten etablerar inte regiminvarianta broidentiteter. XIX använder en förlustgraf för hela strömmen vid dess första sammanhängande tröskel och kan inte räknas om med denna separata panel. Ingen av studierna mäter förmedling.

## 3.4 Stressvepet

[TR] Test 3 ger H_transition FAIL: 1/20 uppfyller specificerat test för upprepbart komponentsprång, under 16/20. Genomsnittlig absolut komponentförändring per svepsteg är 0,242 (första tre 0,306). Avståndsgränsen vid 40:e percentilen håller antalet kanter vid 9 av 21 i varje lagrad sveprad. Därmed är cykelrangen lika med antalet komponenter plus 2; detta är inte oberoende bekräftelser. Inget kvalificerande upprepbart språng påvisades i svepet, inte ett bevis för jämnhet eller frånvaro av övergångar under andra grafer eller stressbanor. Underliggande prediktionsarrayer för test 3 återfanns inte.

## 3.5 Vad misslyckandena betyder

Alla tre registrerade misslyckanden förblir misslyckanden. Evidensen gäller ändliga samplade regimer, gränser och kriterier. Den utesluter inte deskriptiv geometri, andra grafkonstruktioner eller funktionella nätverk. RMS-omräkningen gäller enbart test 1–2, inte test 3 eller ruttväglängder.
