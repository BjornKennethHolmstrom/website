## Appendix D: Tidigare simulator och kontrollerad återkörning

### D.1 Faktisk implementation [I]

Det oförändrade skriptet använder fem tillstånd H, R, M, C och L (hälsa, relationer, mening, karriär och fritid), start- och referensvärden 70, 300 lagrade observationer, retentionsfaktor 0.95, insatskoefficient 0.3 och gaussiska störningar med standardavvikelser 1.5, 1.2, 1.0, 1.8 och 0.8. Båda regulatorerna får fullständiga brusiga tillståndsvektorer, med observationsbrusets standardavvikelser 0.3 gånger störningarnas standardavvikelser. 1D-policyn använder bara C; ND använder H, R och C, inte fritid. Råa teckenbärande proportionella fel använder förstärkning 0.05 och normaliseras till absolut insats 10 när de är skilda från noll. I 1D blir detta reglering enbart efter tecken; i ND bestämmer relativa fel fördelningen. Gemensam positiv förstärkning försvinner. Ingen optimerad målfunktion, inlärd sensor eller föränderlig representation finns.

Endast 1D belastas av ett omedelbart teckenbärande hälsoavdrag 0.12 gånger karriärhandlingen, som skriver över lagrat tillstånd före nästa uppdatering; negativ handling tillgodoräknar hälsa. Båda systemen innehåller linjär korskoppling, en hälsostyrd karriärretentionsterm under 70% av baslinjen, ett fritidstillskott som beror på hälsan och ett nollgolv. Ingen multiplikativ relation-till-mening-funktion finns. Ingen uttrycklig vilopolicy eller ökande insats som svar på kris finns. Därmed skiljer sig både policy och systemdynamik. Ursprungligt frö 42 används sekventiellt, inte som parade oberoende körningar. Ursprungligt skript och PNG är arkivartefakter; deras rubriker och kommentarer är inte de reviderade vetenskapliga anspråken.

### D.2 Återkörd historisk körning [I/E]

| Statistik | 1D | ND |
|---|---:|---:|
| Sammanvägt tillståndsmedelvärde sista 50 | 67.19 | 68.72 |
| Andel observationer med något tillstånd under 14 | 0.11 | 0.00 |
| Karriärmedelvärde (alla observationer) | 37.65 | 70.04 |
| Total absolut insats | 2990 | 2990 |
| Lägsta hälsa | 36.22 | 61.02 |

Sammanfattningen stämmer med originalfigurens avrundade sammanvägda medelvärden. I motsats till den tidigare redogörelsen kollapsar inte 1D-relationer mot 45: minimum är 61.42, medelvärdet sista 50 är 94.53. Meningens medelvärde sista 50 är 105.56, karriärminimum 6.66; 25 karriärhandlingar är negativa. ND:s oföljda fritid har medelvärde 51.40 sista 50. Det tidigare hälsopåståendet 15–20 är felaktigt. Tillståndsenheterna är artificiella; observationsandelen är inte en klinisk krisfrekvens. Det plottade antalet oföljda koordinater (4 eller 2) är konstant, inte det dolda gapet. Ingen föreställningsnoggrannhet eller välbefinnande mäts.

### D.3 Diagnostik med matchade frön [E]

Granskningen återanvänder originalfunktionerna, flyttar enbart det teckenbärande hälsoavdraget utanför den regulatorspecifika grenen och slår på eller av det för båda armarna. Åtta frön 42–49 använder gemensamma slumpdragningar per frö och villkor. Detta är en post hoc-känslighetskontroll vid originalparametrarna, inte en förhandsregistrerad kausal studie.

| Policy | Avdrag | Genomsnittlig flaggad andel | Karriärmedelvärde | Sammanvägt medel sista 50 |
|---|---|---:|---:|---:|
| 1D | Av | 0.000833 | 61.303 | 61.7 |
| 1D | På | 0.080417 | 41.332 | 65.7 |
| ND | Av | 0 | 70.078 | 68.5 |
| ND | På | 0 | 70.035 | 68.5 |

1D:s sammanvägda mått stiger när avdraget försämrar karriärutfallen: negativ karriärkoppling till R och M bidrar till denna omkastning. Måttet kan inte tolkas som välbefinnande. Att ta bort avdraget minskar den flaggade andelen kraftigt; återstående karriärskillnad är cirka 8.8 poäng. Den oföljda hälsokoordinaten, negativa C-till-H-kopplingen och hälsostyrda karriärdynamiken är delar av den modellinterna förklaringen, inte separat identifierade kausala effekter. I den tidigare asymmetriska jämförelsen med matchade frön rapporterar den oberoende granskaren 1D-andelar från 0.04 till 0.12 i varje frö mot noll för ND, så kontrasten är inte enbart en artefakt av olika slumpströmmar. Detta är inte evidens om människor eller en allmän effekt av måldimensionalitet. Andra parametrar, reglerlagar och utfall är oprövade. Den ursprungliga återkörningen och den faktoriella ablationen dokumenteras i den accepterade granskningen. Den separata jämförelsen med matchade frön och ursprunglig dynamik kommer från den oberoende korrektionsgranskarens återkörning; dess reproduktionsskript och utdata per frö arkiveras med korrektion v0.2, inte i den ursprungliga granskningen.
