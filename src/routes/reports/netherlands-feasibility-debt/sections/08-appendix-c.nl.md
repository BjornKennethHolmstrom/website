## Bijlage C: De verbinding met Governance as Engineering

### C.1 De architectonische basis

Dit rapport put uit de reeks Governance as Engineering, die bestuursinstellingen modelleert als terugkoppelingsregelsystemen met behulp van regeltechniek, informatietheorie en cybernetica. Deze bijlage vat de delen samen die de diagnose onderbouwen en onderscheidt wat de papers vaststellen van wat dit rapport afleidt.

Net als bij het Bhutan-rapport erft dit rapport geen eerdere schatting uit het meetprogramma van de reeks. Nederland behoorde niet tot de landen die in Paper VIII werden gepilot, en er is geen Variety Gap-cijfer voor beschikbaar.

### C.2 De papers in het kort

**Paper II — Fractaliteit als stabiliteit** toont aan dat een regelaar die op één tijdschaal werkt, storingen die op zeer verschillende tijdschalen aankomen niet kan stabiliseren. Haalbaarheidsschuld is in de kern een tijdschaalprobleem: toezeggingen gedaan op politieke tijdschalen tegen capaciteit die op veel langere tijdschalen wordt gebouwd, hersteld of wetgegeven.

**Paper XIII — Legitimiteit** behandelt legitimiteit als een operationele versterkingsparameter. De Nederlandse landelijke transitie is een geval waarin die parameter laag genoeg daalde dat een technisch coherent programma niet kon worden volgehouden. Waar het aflossen van haalbaarheidsschuld permanente verliezen vereist, wordt legitimiteit deel van de beperkingsset.

### C.3 Recursieve haalbaarheid en model predictive control

Het centrale formele idee van het rapport komt uit de optimalisatie en de regeltechniek. In model predictive control kiest een regelaar acties door te optimaliseren over een voorspelde toekomstige horizon, onderworpen aan beperkingen op de toestand van het systeem. Een bekende moeilijkheid is dat een regelaar een actie kan kiezen die nu aan elke beperking voldoet, maar het systeem in een toestand brengt van waaruit bij de volgende stap geen haalbare actie bestaat. De eigenschap die garandeert dat dit niet kan gebeuren, heet **recursieve haalbaarheid**: elke gekozen actie laat ten minste één haalbare voortzetting over.

Haalbaarheidsschuld is een schending van recursieve haalbaarheid in het bestuur. De drie vormen die in dit rapport worden gedocumenteerd, komen overeen met drie manieren om haar te schenden:

- **geleende toekomstige capaciteit** behandelt voorspelde toekomstige speelruimte als huidige capaciteit, waardoor de schijnbare haalbare verzameling groter wordt dan de werkelijke;
- **niet-veiliggestelde uitvoeringscapaciteit** verifieert haalbaarheid op één moment zonder haar over de horizon veilig te stellen, zodat de haalbare verzameling krimpt voordat de actie is voltooid;
- **geanticipeerde legalisatie** opereert buiten de huidige beperkingsset in de verwachting dat de beperkingsset zelf later zal opschuiven om de gekozen toestand te omvatten.

De vier-treden ladder—observeren, voorspellen, voorwaardelijk behouden, hervalideren en vrijgeven—komt overeen met toenemende sterktes van haalbaarheidsgarantie. De vrijgevingstrede weerspiegelt een afweging die bekend is in beperkte optimalisatie: het aanscherpen van beperkingen om toekomstige haalbaarheid te garanderen vermindert de prestaties die nu haalbaar zijn. Het optimale niveau van behoud balanceert het risico van toekomstige onhaalbaarheid tegen de kosten van huidige uitsluiting.

### C.4 Wat Nederland aan het raamwerk toevoegt

De reeks heeft tot nu toe tekorten gediagnosticeerd in uitvoering, integratie, feedback, synchronisatie en kalibratie; plafonds van doorvoer en continuïteit; de compressie van doelstellingen; en de koppeling van doelstellingen aan actuatoren. Nederland voegt een temporele faalwijze toe: een systeem waarvan de individuele beslissingen elk haalbaar kunnen zijn, terwijl de opeenvolging van zijn toezeggingen dat niet is. Dat suggereert een kandidaat voor toekomstig formeel werk: een paper over recursieve haalbaarheid in het bestuur, die modelleert hoe toezeggingshorizonten, doorlooptijden van capaciteit en handhavingsmechanismen op elkaar inwerken, en onder welke voorwaarden een bestuurssysteem kan garanderen dat zijn toezeggingen uitvoerbaar blijven.

---

