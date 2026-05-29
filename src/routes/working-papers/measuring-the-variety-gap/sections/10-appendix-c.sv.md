## Appendix C: Datakällor och tillgänglighetsmatris

Denna appendix ger en strukturerad översikt över de datakällor som kan användas för att skatta de åtta parametrarna i Varietetsgap-ramverket, samt en bedömning av tillgängligheten och tillförlitligheten hos dessa källor för olika kategorier av styrsystem. Den är utformad för att hjälpa analytiker att avgöra, innan en skattningsövning påbörjas, vilka parametrar som kan skattas med rimlig tillförlitlighet för ett givet system, vilka som kräver expertelicitering eller proxy-metoder, och vilka som sannolikt är så databegränsade att endast kvalitativa bedömningar är möjliga.

### C.1 Primära datakällor per parameter

Tabell C.1 kartlägger varje parameter till dess primära internationella datakällor, dessa källors täckning (i termer av antalet styrsystem för vilka data finns tillgänglig) samt en bedömning av datatillförlitligheten för system med olika nivåer av statistisk kapacitet.

| Parameter | Primära internationella källor | Täckning | Tillförlitlighet (högkapacitetssystem) | Tillförlitlighet (lågkapacitetssystem) | Anmärkningar |
|-----------|--------------------------------|----------|----------------------------------------|----------------------------------------|--------------|
| V_o (Observationsdimensionalitet) | Världsbankens indikatorer för statistisk kapacitet; Open Data Barometer; Global Data Barometer; nationella statistikmyndigheters kataloger | 140+ länder (Världsbanken); 100+ (Open Data Barometer) | Hög | Låg till måttlig | Antal indikatorer finns tillgängligt för de flesta system; oberoendebedömning kräver statistisk kapacitet som varierar kraftigt |
| V_e (Störningsdimensionalitet) | IMF:s Artikel IV-rapporter; Världsbankens Systematic Country Diagnostics; nationella riskregister; databaser över krisutvärderingar | Begränsad – ingen standardiserad internationell databas finns | Måttlig (expertbedömning krävs) | Låg (betydande underräkning sannolik) | Ingen enskild källa; skattning kräver syntes av flera kvalitativa bedömningar |
| τ (Responslatens) | OECD:s Regulatory Policy Outlook; Comparative Agendas Project; nationella lagstiftningsdatabaser | OECD-länder (38); begränsad täckning i övrigt | Hög | Låg | Bäst data finns för OECD-demokratier; minimal standardiserad data för andra system |
| σ (Signalens trohet) | WGI (Voice & Accountability, Government Effectiveness); V-Dem (mediefrihet, civilsamhälle, rättsligt oberoende); Freedom House; RSF:s pressfrihetsindex; INTOSAI:s bedömningar av revisionsoberoende | 190+ länder (WGI); 170+ (V-Dem); 190+ (Freedom House); 180+ (RSF) | Hög | Måttlig (index fångar synliga dimensioner; Mätparadoxen kan vara aktiv) | Den mest heltäckande parametern; dock kan indexen missa osynlig signalförsämring |
| Immunpermeabilitet | OECD:s Regulatory Policy Indicators; V-Dem (lagstiftande begränsningar av exekutiven); nationella lagstiftningsdatabaser; akademisk policyutvärderingslitteratur | OECD (38); V-Dem (170+); akademisk täckning varierar | Måttlig | Låg (reformimplementeringsdata är ofta frånvarande eller otillförlitlig) | Skattning kräver kodning av reformutfall, vilket är arbetsintensivt och kräver domänexpertis |
| Oscillationsamplitud | IMF:s International Financial Statistics; Världsbankens World Development Indicators; nationalräkenskaper; styrräntehistorik | 190+ länder (IMF, Världsbanken) | Hög | Hög | Den mest tillförlitligt mätbara parametern; långa tidsserier finns för de flesta system |
| Förbikopplingstäthet | ILO:s skattningar av den informella ekonomin; satellitdata över nattljus (NOAA/NASA); rapporter från den privata säkerhetsindustrin; transaktionsvolymer för kryptovalutor | 100+ länder (ILO); satellitdata global; privata säkerhetsdata begränsad | Måttlig (satellitdata är av hög kvalitet; informell ekonomi-skattningar är grova) | Låg (den informella ekonomin är systematiskt undermätt; privata säkerhetsdata är sällsynta) | Mörka data-proxyvariabler är mer tillförlitliga än formella skattningar för system med stora förbikopplingssektorer |
| Symbolisk-till-strukturell kvot | Samma som Immunpermeabilitet | Samma som Immunpermeabilitet | Måttlig | Låg | Härleds direkt från immunpermeabilitetsskattningen |

### C.2 Datatillgänglighet per kategori av styrsystem

Kvaliteten och fullständigheten hos tillgängliga data varierar systematiskt mellan kategorier av styrsystem. Tabell C.2 ger en sammanfattande bedömning av datatillgängligheten för fyra breda kategorier samt vägledning om vilka parametrar som kan skattas med rimlig tillförlitlighet för varje kategori.

| Systemkategori | Exempel | Parametrar som kan skattas tillförlitligt | Parametrar som kräver expertelicitering eller proxy-metoder | Parametrar som sannolikt är databegränsade | Risk för Mätparadoxen |
|----------------|----------|-------------------------------------------|-------------------------------------------------------------|---------------------------------------------|------------------------|
| Högkapacitetsdemokratier i OECD | Kanada, Sverige, Tyskland, Finland | τ, σ, Oscillationsamplitud, V_o (med PCA) | V_e, Immunpermeabilitet, Symbolisk-till-strukturell kvot, Förbikopplingstäthet | Inga – alla parametrar kan skattas med minst måttlig tillförlitlighet | Låg till måttlig (även högtransparenta system har blinda fläckar) |
| Utvecklingsdemokratier | Indien, Brasilien, Sydafrika | τ (partiell), σ, Oscillationsamplitud | V_o, V_e, Immunpermeabilitet, Symbolisk-till-strukturell kvot, Förbikopplingstäthet | Förbikopplingstäthet (formella data underskattar den informella sektorn) | Måttlig (datakvaliteten varierar mellan domäner; politiska påtryckningar på statistikmyndigheter kan förekomma) |
| Auktoritära system | Kina, Ryssland, Saudiarabien | Oscillationsamplitud (med reservationer) | V_o, V_e, τ (partiell), σ (endast övre gräns), Immunpermeabilitet (endast övre gräns) | Förbikopplingstäthet (undertryckt), Symbolisk-till-strukturell kvot (reformdata är otillförlitlig) | Hög till mycket hög (Mätparadoxen är sannolikt aktiv; parameterskattningar är systematiskt undre gränser) |
| Sköra eller konfliktdrabbade stater | Nigeria, Somalia, Afghanistan | Oscillationsamplitud (begränsad) | Alla övriga parametrar kräver omfattande expertelicitering | De flesta parametrar – formell datainfrastruktur är allvarligt försämrad eller frånvarande | Mycket hög (avsaknaden av data är i sig en diagnostisk signal) |

### C.3 Vägledning för databegränsad skattning

För styrsystem där Mätparadoxen är aktiv eller där datainfrastrukturen är allvarligt försämrad bör skattningsstrategin skifta från primär mätning till triangulering över flera imperfekta källor. Följande hierarki av skattningsmetoder rekommenderas, i fallande tillförlitlighetsordning:

1. **Data från internationella organisationer med oberoende verifiering.** Där Världsbanken, IMF eller FN-organ upprätthåller dataserier för styrsystemet, och där dessa serier kan korsvalideras mot oberoende källor (satellitdata, akademisk forskning, civilsamhällesövervakning), tillhandahåller de internationella data den mest tillförlitliga utgångspunkten.

2. **Expertelicitering med strukturerade osäkerhetspromptar.** Där formella data saknas, är otillförlitliga eller misstänks vara manipulerade, kan strukturerad expertelicitering – där domänspecialister ombeds att tillhandahålla parameterskattningar med uttryckliga konfidensintervall – generera skattningar som är mer tillförlitliga än någon enskild tillgänglig datakälla. Eliciteringsprotokollet bör specificera: minsta antal oberoende experter; förfarandet för att aggregera deras bedömningar; samt de kalibreringsövningar som gör det möjligt att bedöma experternas prognosprecision över tid.

3. **Mörka data-proxyvariabler.** För parametrar som är systematiskt osynliga för formell mätning – förbikopplingstäthet, immunpermeabilitet i auktoritära system, V_e för framväxande störningsdimensioner – bör mörka data-proxyvariabler användas som komplement eller ersättning. Satellitnattljusets divergens från officiell BNP, privata säkerhetskvoter, transaktionsvolymer för digitala valutor och mätetalsavgångstakter tillhandahåller signaler som inte är beroende av styrsystemets egen statistiska infrastruktur.

4. **Jämförande riktmärkning.** Där direkt skattning är omöjlig kan styrsystemets parametrar avgränsas genom jämförelse med jämförbara system – sådana med liknande ekonomiska strukturer, politiska system eller historiska banor, för vilka data är mer tillgänglig. Riktmärkningsmetoden genererar ingen punktskattning men ger ett plausibelt intervall, och den bör rapporteras med ett uttryckligt erkännande av de antaganden som jämförelsen vilar på.

5. **Endast kvalitativ bedömning.** För vissa parametrar i vissa system kan ingen kvantitativ skattning genereras som skulle uppfylla ens minimala tillförlitlighetsstandarder. I dessa fall bör parametern rapporteras kvalitativt – "allvarligt försämrad", "sannolikt under observerbarhetströskeln", "riktningen på den systematiska avvikelsen är mot underskattning" – snarare än att tilldelas ett numeriskt värde som skulle förmedla falsk precision. Den kvalitativa bedömningen är i sig ett diagnostiskt utfall, och den bör rapporteras tillsammans med de kvantitativa skattningarna för de parametrar som kan mätas.

### C.4 Datakällor per parameter: Detaljerade referenser

**V_o (Observationsdimensionalitet)**
- Världsbankens indikatorer för statistisk kapacitet: https://datatopics.worldbank.org/statisticalcapacity/
- Open Data Barometer: https://opendatabarometer.org/
- Global Data Barometer: https://globaldatabarometer.org/
- Nationella statistikmyndigheters webbplatser (landsspecifika)

**V_e (Störningsdimensionalitet)**
- IMF:s Artikel IV-konsultationsrapporter: https://www.imf.org/en/publications/areers
- Världsbankens Systematic Country Diagnostics: https://openknowledge.worldbank.org/
- Nationella riskregister (landsspecifika)
- INFORM Risk Index: https://drmkc.jrc.ec.europa.eu/inform-index

**τ (Responslatens)**
- OECD:s Regulatory Policy Outlook: https://www.oecd.org/regreform/regulatory-policy/
- Comparative Agendas Project: https://www.comparativeagendas.net/
- Nationella lagstiftningsdatabaser (landsspecifika)

**σ (Signalens trohet)**
- Worldwide Governance Indicators: https://www.worldbank.org/en/publication/worldwide-governance-indicators
- V-Dem Institute: https://v-dem.net/
- Freedom House: https://freedomhouse.org/
- Reportrar utan gränsers pressfrihetsindex: https://rsf.org/en/index
- INTOSAI (revisionsoberoende): https://www.intosai.org/

**Immunpermeabilitet och Symbolisk-till-strukturell kvot**
- OECD:s Regulatory Policy Indicators: https://www.oecd.org/regreform/regulatory-policy/
- V-Dem (lagstiftande begränsningar av exekutiven): https://v-dem.net/
- Akademiska databaser för policyutvärdering (t.ex. Campbell Collaboration, 3ie Impact Evaluation Repository)

**Oscillationsamplitud**
- IMF:s International Financial Statistics: https://data.imf.org/ifs
- Världsbankens World Development Indicators: https://datatopics.worldbank.org/world-development-indicators/
- Nationalräkenskaper (landsspecifika)

**Förbikopplingstäthet**
- ILO:s skattningar av den informella ekonomin: https://www.ilo.org/
- NOAA/VIIRS satellitdata över nattljus: https://eogdata.mines.edu/products/vnl/
- Rapporter från den privata säkerhetsindustrin (t.ex. årsrapporter från Providence, G4S, Securitas)
- Data över transaktionsvolymer för kryptovalutor (t.ex. Chainalysis, CoinMetrics)

### C.5 Databegränsningar och Mätparadoxen

Den mest betydande databegränsningen är inte avsaknaden av specifika datakällor för specifika parametrar, utan den strukturella försämringen av datakvaliteten som åtföljer själva det styrningsmisslyckande som ramverket existerar för att diagnostisera. Detta är Mätparadoxen, utförligt beskriven i avsnitt 4. Analytiker som tillämpar detta ramverk bör genomföra en Mätparadox-bedömning innan parameterskattningen påbörjas, med hjälp av följande diagnostiska frågor:

1. **Mätetalsavgång:** Har styrsystemet tagit bort, omdefinierat eller begränsat tillgången till några av sina offentligt rapporterade resultatmått under de senaste fem åren? Om så är fallet, vilka dimensioner täckte de borttagna mätetalen, och i vilket politiskt sammanhang togs de bort?

2. **Proxydivergens:** Peka olika datakällor för samma parameter i olika riktningar – exempelvis, antyder internationella transparensindex öppenhet medan mörka data-proxyvariabler antyder signalförsämring?

3. **Statistikmyndighetens oberoende:** Är styrsystemets nationella statistikmyndighet rättsligt och praktiskt oberoende av politiska påtryckningar? Har det förekommit dokumenterade fall av politisk inblandning i datainsamling, metodologi eller publicering?

4. **Civilsamhällets övervakningskapacitet:** Producerar oberoende civilsamhällesorganisationer, akademiska institutioner eller medier i styrsystemet styrningsdata som kan korsvalideras mot officiella källor? Kan dessa organisationer verka utan trakasserier eller restriktioner?

Om svaret på fråga 1 är ja, eller om svaren på frågorna 2–4 indikerar betydande begränsningar av oberoende dataproduktion, är Mätparadoxen sannolikt aktiv. Alla parameterskattningar bör behandlas som undre gränser för styrningsmisslyckandets verkliga allvar, och osäkerhetsbanden på det sammansatta Varietetsgapindexet bör breddas i enlighet med detta. Analytikern bör också rapportera de ledande indikatorer som beskrivs i avsnitt 6.5 – mätetalsavgångstakt, proxydivergenstakt och reformframgångsbana – som kompletterande diagnostisk information som inte är beroende av innehållet i de potentiellt försämrade data.

Mätparadoxen kan inte lösas genom bättre data inom det nuvarande mätramverket. Det är ett strukturellt drag hos det fenomen som mäts. Ramverkets mest ärliga svar är att benämna den, att specificera riktningen på den resulterande systematiska avvikelsen och att tillhandahålla partiella lösningar – metoden censur-som-signal, diagnostiken för proxydivergens, den uttryckliga rapporteringen av undre-gräns-skattningar – som låter analytikern arbeta inom paradoxen snarare än att låtsas att den inte existerar. Paradoxen är inte en begränsning hos ramverket. Den är ett faktum om världen, och ramverket är mer användbart för att erkänna det än för att ignorera det.
