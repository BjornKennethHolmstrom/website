# Appendix B: Kod och reproduktion

## Källkod

v5-simulatorn utökar serien från v4:s flerskaliga stabilitetsdemonstration till den informationsteoretiska domänen, och modellerar signaltroheten i preferensöverföring genom representationskedjor. Den är implementerad i Python med hjälp av NumPy och Matplotlib.

Den fullständiga källkoden finns tillgänglig på:

**[github.com/BjornKennethHolmstrom/gae-governance-simulator](https://github.com/BjornKennethHolmstrom/gae-governance-simulator)**

Förvaret innehåller nu fem simulatorversioner:

| Fil | Rapport | Beskrivning |
| --- | --- | --- |
| `gae-simulator-v2.py` | Rapport I | Skalär återkopplingsmodell med en nod |
| `gae-simulator-v3.py` | Rapport I | Vektormodell med tio noder, lokaliserad chock |
| `gae-simulator-v3-unadjusted.py` | Rapport I | v3 med instabil förstärkning — instabilitetsdemonstration |
| `gae-simulator-v4.py` | Rapport II | Flerskalig störning, jämförelse av tre arkitekturer |
| `gae-simulator-v5.py` | Rapport III | Representationskedjans observerbarhet, fyra arkitekturer |

## Att reproducera resultaten

```bash
git clone https://github.com/BjornKennethHolmstrom/gae-governance-simulator
cd gae-governance-simulator
pip install numpy matplotlib
python gae-simulator-v5.py

```

Simuleringen har ett frö (seed) för reproducerbarhet (`numpy.random.default_rng(seed=13)`). Standardparametrarna reproducerar exakt figur 1 och den kvantitativa sammanfattningstabellen i del II.

## Viktiga arkitektoniska skillnader från v4

v5 är en strukturell avvikelse från v3/v4, vilka modellerade tillståndsrymdens återkopplingsdynamik. v5 modellerar informationsöverföring genom en försämringskedja (degradation chain) — en annan formalism anpassad för observerbarhetsfrågan.

**Preferenstillståndsrymd.** Istället för ett skalärt stabilitetsvärde per nod, har var och en av de 60 medborgargrupperna en P=4-dimensionell preferensvektor i [−1, +1]. Preferenserna utvecklas över tid med genuina skifthändelser injicerade vid specifika tidpunkter.

**Försämring lager för lager.** Funktionen `pass_through_layers` implementerar modellen för aggregering-plus-brus: för varje lager minskar aggregering av gruppgenomsnitt antalet representativa enheter med förhållandet r, varefter gaussiskt brus adderas. Policylagret observerar det slutliga resultatet. Ingen återkopplingsloop — detta är en ren framåtöverföringsmodell (forward-transmission) för informationsförsämring.

**Analytisk SNR-kurva.** Funktionen `variance_survival_curve` beräknar SNR analytiskt med hjälp av formeln i appendix A, oberoende av simuleringen. Detta separerar det matematiska resultatet från de specifika parametervalen för de fyra arkitekturerna.

**Spatialt representationsfel.** Värmekartspanelerna (heatmap panels) rekonstruerar vad varje arkitekturs policylager "ser" genom att sända den slutliga aggregerade signalen tillbaka till medborgargruppsupplösning och subtrahera de sanna preferenserna. Detta gör den spatiala informationsförstörelsen visuellt explicit.

## Att modifiera parametrarna

**Antal lager och parametrar** (`ARCHITECTURES` dict): Den mest lärorika variationen är att lägga till ett sjätte lager till arkitektur B eller ta bort ett lager från arkitektur A, för att observera hur SNR och spårningsfelet förändras. Lagertuplerna (r, σ, τ) kan varieras oberoende av varandra.

**Brusstruktur:** Att sätta alla σ-värden till noll producerar fallet med enbart aggregering — demonstrerar att informationsförlust sker även med perfekt representation på varje lager, enbart från aggregeringssteget. Att sätta r = 1 för alla lager (ingen aggregering) med varierande brus visar försämringskurvan för enbart brus.

**Magnitud för genuina skiften:** Att öka skiftets magnitud vid t=40 och t=80 (i funktionen `generate_preferences`) gör den genuina signalen starkare, vilket tillfälligt höjer det effektiva SNR-värdet. Även med stora skiften kan arkitektur A vanligtvis inte upptäcka dem över sitt brusgolv.

**Policyresponsivitet K_policy:** Att öka denna över 0,5 får arkitektur A att oscillera kraftigare (den förstärker sin brusdrivna signal). Att minska den får alla arkitekturer att svara långsammare på genuina skiften. Värdet 0,30 är valt för att visa en måttlig responsivitet — varken så snabb att den destabiliserar A eller så långsam att den hindrar D från att följa skiftena tydligt.

## Att utöka modellen

De mest värdefulla utökningarna från författarnas perspektiv:

**Empirisk bruskalibrering:** Att anpassa brusparametrarna till verkliga data för korrelationen mellan opinionsundersökningar och policy skulle göra SNR-uppskattningarna empiriskt förankrade snarare än illustrativa. Valstudier, experiment med deliberativa opinionsundersökningar och litteraturen om gapet mellan preferenser och policy tillhandahåller relevanta data.

**Modeller för strategiskt brus:** Att ersätta gaussiskt brus med strukturerat brus som matchar kända skevheter i medieutbud (media selection biases) och dynamik i partipositionering skulle producera en mer realistisk modell av representationskedjan. Det kvalitativa resultatet skulle vara detsamma; den kvantitativa tröskeln skulle kunna förskjutas.

**Hybridarkitekturer:** Att modellera ett trelagerssystem där beslut i dimension 2 kringgår lagren 2–3 och hanteras genom direkt deltagande skulle demonstrera komplementariteten mellan observerbarhets- och fraktalitetsresultaten — olika beslut dirigeras genom lämpligt antal lager.

## Att bidra

Förvaret har öppen källkod under MIT-licens. Utökningar, empiriska tillämpningar och kritik välkomnas via GitHub.
