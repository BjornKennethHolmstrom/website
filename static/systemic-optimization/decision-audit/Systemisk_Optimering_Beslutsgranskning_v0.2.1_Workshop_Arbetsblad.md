# Systemisk optimering — Beslutsgranskning v0.2.1

**WORKSHOPARBETSBLAD · UTKAST v0.2.1 · 7 NOVEMBER 2026**  
**Status:** Utforskande beslutsstöd, **inte validerat**. Verktyget ger ingen riskpoäng, optimerar inte en policy och visar inte att ett beslut i verkligheten är säkert eller korrekt.

**Syfte.** Undersök om ett beslut påverkas negativt av sina mål, kausala antaganden eller av vilken evidens den egna policyn gör tillgänglig. Jämför genomförbara åtgärder och deras oavsiktliga konsekvenser.

**Nytt i v0.2.1.** Ett genomarbetat exempel på selektiv evidens i Q3, uttryckliga kombinerade åtgärdspaket, ett 45-minutersupplägg, möjligheten att omformulera beslutet och en frivillig uppföljning på en sida. **Frys versionen för pilottestning efter denna revidering.**

## Så genomförs workshopen — kort eller fullständig

| Fas | Kort · 45 min | Full · 85 min | Resultat från workshopen |
|:--|--:|--:|:--|
| 0. Formulera beslut och roller | 5 | 8 | Beslut, ansvarig, berörda och tecken på misslyckande |
| 1. Beslutets känslighet | 7 | 10 | Vilket rimligt antagande kan ändra åtgärden? |
| 2. Fyra frågor (Q3 obligatorisk) | 20 | 35 | Mål, modell, blindfläckar och möjligheter till lärande |
| 3. Matris för åtgärdspaket och samspel | 8 | 20 | Jämförbara alternativ, observerbarhet och kostnader |
| 4. Besluts- och uppföljningsprotokoll | 5 | 12 | Åtgärd eller omformulering, ansvar, skyddsåtgärder, omprövning |

**Tidsfördelning i fas 2:** Kort: Q1 3 min · Q2 3 min · **Q3 10 min** · Q4 4 min. Full: **minst 15 min för Q3**. Q3 får aldrig hoppas över. Markera det som är okänt om tiden tar slut.

**Facilitering:** Fas 1 börjar med tre minuters tyst, enskild reflektion. Q3 börjar också med tre tysta minuter. Utse en person som ska utmana antaganden: *”Anta att den här övertygelsen är fel. Vad kan vår policy ändå dölja?”* Dokumentera meningsskiljaktigheter, även beslutsansvarigs invändningar. Frånvarande berörda personer har inte därmed samtyckt.

**Evidensnyckel:** **[O]** observerat · **[M]** modellskattning · **[H]** hypotes · **[U]** okänt. Endast i exemplen: **[C]** konfirmatoriskt · **[D]** förhandsbestämt deskriptivt · **[E]** explorativt · **[S]** modellstrukturellt · **[IP]** tolkning. Ingen av dessa beteckningar innebär i sig validering i verkliga miljöer.

## Fas 0 · Beslutskort

| Fråga | Workshopanteckningar |
|:--|:--|
| Beslut / organisation / datum | __________________________________________ |
| Beslutsansvarig, deltagare och utsedd utmanare | __________________________________________ |
| Vad måste göras, senast när och med vilken tidshorisont? | __________________________________________ |
| Genomförbara alternativ, inklusive **behåll nuvarande policy** | __________________________________________ |
| Vilka utfall innebär framgång? | __________________________________________ |
| Vems intressen, skador och rättigheter räknas (och vilka saknas)? | __________________________________________ |
| Hur skulle vi märka att beslutet var felaktigt? | __________________________________________ |
| Begränsningar: juridik, etik, budget, kapacitet, möjlighet att ångra | __________________________________________ |
| Grundantaganden och skäl för dagens inriktning | __________________________________________ |

**Workshopprincip:** Jämför hela **åtgärdspaket** i samma rimliga tänkbara världar och med flera relevanta utfallskriterier. Ett paket som ändrar både modellen och målet visar inte den isolerade kausala effekten av någon av ändringarna.

\newpage

# Fas 1 · Spelar osäkerheten roll för beslutet?

**Enskilt, före diskussion:** Under vilka rimliga antaganden skulle du välja en annan åtgärd?

| Scenario / ifrågasatt antagande | Föredragen genomförbar åtgärd | Evidens [O/M/H/U] och motivering |
|:--|:--|:--|
| Bästa nuvarande bedömning | __________________ | __________________ |
| Starkaste trovärdiga alternativ | __________________ | __________________ |
| Utmanarens alternativ / utifrånperspektiv | __________________ | __________________ |
| Frivilligt: scenario som mest skulle ändra vår uppfattning | __________________ | __________________ |

**Beslutsgrind:** ☐ Samma åtgärd i prövade scenarier  ☐ Olika åtgärder  ☐ Går ännu inte att avgöra

**Vad skulle konkret få oss att ändra beslut?** ___________________________________________________

**Minsta användbara känslighetskontroll:** ______________________________________________________

*Exempel:* Pröva beslutet med en omstridd parameter vid en rimlig yttergräns. Fråga också om någon skulle handla annorlunda om ett centralt antagande visade sig vara falskt. **Går det inte att avgöra?** Återvänd till fas 0 och precisera beslut, alternativ och framgångskriterier så att de går att jämföra.

**Obligatorisk spärr:** Resultatet ”samma åtgärd” kan motivera att **Q4 i fas 2 kortas**, men **aldrig att Q3 hoppas över**. De scenarier gruppen föreställer sig kan själva utelämna blindfläcken. ”Ingen blindfläck identifierad” är **inte bevis för att den saknas**.

# Fas 2 · Fyra diagnostiska frågor

## Q1 · Värderar vi rätt utfall?

- Vad belönas, bestraffas, utelämnas eller behandlas bara som ett indirekt mått? Vem har valt målet?
- Vems intressen, fördelningseffekter, ekosystem, långsiktiga konsekvenser eller framtida mål saknas?
- Om vi ändrar vad som värderas, **vilken åtgärd förändras** och vad kostar det även om dagens antaganden är riktiga?

**Saknat kriterium / berörd part:** ______________________________________________________________

**Alternativt kriterium, målkonflikt och evidensstatus:** _____________________________________________

## Q2 · Är orsakssambandsmodellen tillräcklig för beslutet?

- **Tänk om två antaganden är fel samtidigt?** Kan betydelsen av en utelämnad mekanism ändras eller vändas vid parameterfel, störningar eller ytterligare en saknad mekanism?
- Vilken mekanism, växelverkan, fördröjning, återkoppling, parameter eller extern effekt kan saknas eller vara fel?
- Skilj på att **anta** att en mekanism finns, att **observera** evidens för den och att **validera** modellen.

**Viktigaste osäkerheten:** __________________________________________________________________

**Vilken åtgärd ändras mellan modellerna? Vad skulle kunna motbevisa vår förklaring?** _________________

\newpage

# Fas 2 · Diagnostiska frågor (fortsättning)

## Q3 · Vad hindrar vår egen policy oss från att se?

**Obligatorisk även om fas 1 gav ”samma åtgärd”.** Alla skriver först en egen reflektion i tre minuter. Utmanaren antar att en central övertygelse är falsk och frågar: **Vad väljer vår policy in i vårt evidensunderlag – och vad väljer den bort?**

**Ifyllt fiktivt exempel (gäller inte någon verklig långivare):**

| Övertygelse / regel för uteslutning | Åtgärd | Uteslutet fall eller tillstånd | Motbevis som inte går att observera |
|:--|:--|:--|:--|
| Sökande med låga poäng skulle inte betala tillbaka | Avslå lånet | Avslagna sökande med lån från just denna långivare | Hur de hade återbetalat *om långivaren beviljat lånet* |

**Ert beslut:**

| Nuvarande övertygelse / uteslutningsregel | Åtgärd som följer | Fall, tillstånd eller grupp som inte möts | Motbevis som inte går att observera |
|:--|:--|:--|:--|
| ______________ | ______________ | ______________ | ______________ |
| ______________ | ______________ | ______________ | ______________ |

- Kan policyn ge **samma observationer** oavsett om övertygelsen är sann eller falsk? Vilket kontrafaktiskt utfall saknas?
- Observerar vi endast utvalda personer, tillåtna interventioner eller tillstånd som våra handlingar låter uppstå?
- Kan oberoende mätningar eller säkra jämförelser hjälpa utan att ändra hur människor behandlas? **Att exponera en mekanism är inte samma sak som att få evidens.**

**Bedömning av blindfläck:** ☐ Ingen identifierad (inte bevis)  ☐ Rimlig men oprövad  ☐ Påvisad under angivna villkor

**Evidens som hålls utanför / möjlig källa som kan utmana oss:** _____________________________________

**Vem bär risk eller kostnad om blindfläcken öppnas? (obligatoriskt):** _________________________________

**Samtycke, laglighet, tillsyn, säkrare alternativ eller skäl att avstå:** ________________________________

## Q4 · Kan genomförbart lärande förbättra beslutet *i tid*?

1. **Exponering:** När möter vi först den misstänkta mekanismen, gruppen eller situationen?
2. **Evidens:** När förutsäger konkurrerande hypoteser för första gången **olika observerbara utfall**? Exponering garanterar inte identifierbarhet.
3. **Tolkning och handling:** Vem kan tolka evidensen, när kan det ske och hur mycket tid återstår för att ändra kurs?
4. **Alternativ till inferens:** Kan en enkel tillståndsberoende regel – *”om vi ser X, gör Y”* – ge större delen av nyttan utan att identifiera orsaksmekanismen?
5. **Beslutskonsekvens:** **Vad skulle vi göra annorlunda om vi visste svaret?** Om svaret inte ändrar åtgärden kan lärandet ha litet beslutsvärde.
6. **Nettovärde:** Jämfört med att fortsätta eller gardera sig, överstiger nyttan av ett **genomförbart** lärförfarande förseningar, pengar, risk och bördor för andra? Jämför inte enbart med ett allvetande orakel.

| Föreslagen prövning / sensor / regel | Första exponering → första urskiljbara evidens | Tidigaste möjliga åtgärdsändring | Kostnad, riskbärare, skyddsåtgärder |
|:--|:--|:--|:--|
| ______________ | ______________ | ______________ | ______________ |

**Observation som ändrar beslutet (”om X, gör Y”):** _______________________________________________

**Räcker en enklare regel eller en robust policy?** _________________________________________________

*Exempel på föreslagen regel, inte ett testat resultat:* ”Om våtmarksbeståndet faller under gränsen X, återställ; annars avvakta.” Jämför resultat och kostnader med planer som kräver inferens.

\newpage

# Fas 3 · Jämför åtgärder **och** hur de påverkar varandra

Använd **en enda matris** för både åtgärder och deras samspel. Varje rad ska avse ett *verkligt genomförbart åtgärdspaket*, inte ett isolerat förslag. De namngivna alternativen är **komponenter som kan kombineras**. Ange kombinationen i raden **Kombinerat paket** och anta inte att effekterna kan summeras. Använd samma rimliga tänkbara världar, tidshorisonter och utfallskriterier. Märk varje påstående **[O/M/H/U]**; skriv **[U]** i stället för påhittad precision. Om två komponenter ändras går ingen av effekterna att isolera utan ytterligare jämförelser.

**Beslutsmål, gemensamma mått och jämförelsealternativ:** __________________________________________

| Åtgärd / paket | Om nuvarande antaganden stämmer | Om ett viktigt alternativ stämmer | Vilken evidens möjliggörs eller döljs? | Kostnad, risk, möjlighet att ångra, andra kriterier |
|:--|:--|:--|:--|:--|
| **Behåll** nuvarande policy | ________ | ________ | ________ | ________ |
| **Ändra mål** / begränsningar | ________ | ________ | ________ | ________ |
| **Revidera modell** / antaganden | ________ | ________ | ________ | ________ |
| **Pröva / observera** för att skapa användbar evidens | ________ | ________ | ________ | ________ |
| **Gardera** / flexibel eller återkallelig plan | ________ | ________ | ________ | ________ |
| **Kombinerat paket** – ange komponenterna | ________ | ________ | ________ | ________ |

**Kontrollera återkopplingsslingan:** **Värderingar och föreställningar → handlingar → erfaren verklighet → observationer → uppdaterade föreställningar → senare handlingar.**

- Om **Q1** ändras, vilka handlingar ändras – och därmed vilka observationer i **Q3**?
- Om **Q2** ändras, kan den valda policyn då dölja evidens som talar emot den nya modellen?
- Kan skydd av viktiga utfall **minska beslutsvärdet av lärande**, även om exponering blir enklare?
- Försämrar en till synes mer välinformerad åtgärd ett förbisett utfall eller flyttar bördor till personer som inte deltar?

**Viktigaste kopplingen eller oavsiktliga effekten:** _______________________________________________

**Mest försvarbara åtgärd i de undersökta tänkbara världarna:** _____________________________________

**Vilket skydd ger garderingen, och vad kostar den när ursprungsmodellen är rätt?** _____________________

**Vilka rader är inte direkt jämförbara (mål, tid, antaganden, evidens)?** ____________________________

*Exempel:* Ett paket med ändrade mål och grundalternativet kan inte rangordnas med olika poängskalor utan en överenskommelse om kriteriernas vikt. Prövning och gardering kan också gälla olika tidshorisonter.

\newpage

# Fas 4 · Beslut, ansvar och lärande

**Välj raden i fas 3 som beskriver åtgärden (eller alternativet att omformulera beslutet):**

☐ **Behåll**  ☐ **Ändra mål**  ☐ **Revidera modell**  ☐ **Pröva / observera**  ☐ **Gardera**  ☐ **Kombinerat paket**

**Valt paket / exakt nästa åtgärd:** ______________________________________________________________

**Varför denna åtgärd med både nuvarande och alternativa antaganden?** ______________________________

**Vilka utfall eller grupper kan drabbas negativt? Vilka skyddsåtgärder gäller?** ______________________

**Viktigaste kvarstående antagande som är osäkert:** ______________________________________________

**Minsta värdefulla evidensprövning – eller skäl att sluta undersöka:** _______________________________

**Ansvarig, tidsfrist och datum för uppföljning:** __________________________________________________

**Utlösande villkor för omprövning, stopp eller falsifiering (om X, gör Y):** ___________________________

**Invändning / berört perspektiv som saknas:** ___________________________________________________

**Vems syn skulle kunna ändra beslutet mest, och varför saknas den?** _______________________________

**Om beslutsansvarig avvisar en slutsats, ange skälet:** ____________________________________________

## Evidensförteckning

| Påstående som är viktigt för beslutet | [O/M/H/U] | Källa, begränsning, ansvarig för nästa kontroll |
|:--|:--|:--|
| _______________________ | ______ | ______________________________ |
| _______________________ | ______ | ______________________________ |
| _______________________ | ______ | ______________________________ |

## Två minuters pilotutvärdering (även om beslutet inte ändrades)

- **Upptäcktes något viktigt som inte övervägts tidigare?** ☐ Ja ☐ Nej ☐ Osäker
- **Ändrades åtgärden eller planen för informationsinhämtning?** ☐ Ja ☐ Nej ☐ För tidigt
- **Faktisk tidsåtgång:** __________ minuter. **Vad skulle ni stryka?** ______________________________
- **Mest hjälpsamma fråga / mest förvirrande eller överflödiga fråga:** ______________________________
- **Innebär den föreslagna prövningen risk för någon, nu eller senare?** ____________________________

**Avslut:** ☐ Anta preliminär åtgärd  ☐ Sök särskild evidens  ☐ **Omformulera beslutet**  ☐ Avstå: mer analys är inte värd kostnaden

**Viktigt:** Ett ifyllt arbetsblad är en **dokumentation av resonemanget, inte en beslutsregel**. Det innebär inte oberoende validering, ersätter inte berördas delaktighet och bevisar inte att problemformuleringen är tillräcklig.

\newpage

# Bilaga A · Genomarbetat exempel: A2:s syntetiska översvämningshantering

**Illustrativ tillämpning, inte bedömning av ett verkligt avrinningsområde och inte validering av detta verktyg.** Källor: Working Paper 1 v0.2, avsnitt 4–7, bilaga B (T5) och dess evidensbilaga. [Manuskript i forskningsarkivet](https://github.com/BjornKennethHolmstrom/systemic-optimization/blob/main/papers/wp1/manuscript.md).

## Beslut, scenarier och konfirmatoriskt resultat för två paket

Tre kommuner fördelar översvämningsåtgärder över **11 perioder**. En fysisk retentionsmekanism **R** kan finnas eller saknas. Planeraren kan inkludera eller utelämna R i modellen. Det konventionella målet **U1** och det ekologiska målet **F1-eco** värderar utfall på olika sätt.

| Konfirmatoriskt paket | Modellantagande | Mål |
|:--|:--|:--|
| **REP** | Anta att R finns | Minimera konventionell U1 |
| **COMP** | Utelämna R | Optimera F1-eco |

**[C/M]** I **40 oberoende dragna syntetiska världar**, med en deklarerad hypotetisk 50/50-viktning av R närvarande/frånvarande: **REP − COMP = −1,112 U1** (95-procentigt konfidensintervall **−1,737 till −0,487**). Negativt värde gynnar REP enligt U1. Intervallets halva bredd, cirka **0,625**, **missade** målet **0,50**. COMP gav bättre våtmarksutfall. Eftersom både modell och mål skiljer sig är detta en *paketjämförelse*, inte en isolerad skattning av effekten av att lägga till R.

## Ifyllda diagnostiska frågor

**Q1 · Värderingar.** **[C/M]** U1 och våtmarkskriterierna gynnar olika aspekter av strategierna. Granskningen behöver behålla båda utfallen i stället för att påstå att någon av strategierna är bäst överlag.

**Q2 · Modell.** **[E/M]** Betydelsen av en utelämnad mekanism ändras vid parameterfel och andra modellantaganden. REP:s observerade genomsnittliga U1-fördel försvann nästan i ett scenario med fel i planeringsparametrarna. Att anta R är inte evidens för att R finns.

**Q3 · Blindfläckar.** **[S/M]** Utan uppströms våtmark har modeller med och utan retention identiska övergångar under de angivna oexponerade förhållandena. Den prövade likelihoodmodellen ger då ingen evidens i form av en Bayesfaktor. **[E/M]** I utvecklingsvärld d05 ökade utelämnandet av R den sanna U1-kostnaden med **2,36**, medan policyn utan R aldrig nådde tillstånd där R exponerades. I de undersökta utvecklings- och stresstestvärldarna hittades **sju exakta exponeringsfällor i sex världar**. Det är modellresultat, inte mätningar i verkliga avrinningsområden.

**Q4 · Lärande.** **[E/M]** I d05 gav en planerad prövning sannolikheter för exponering av retention på **0,77 / 0,95 / 0,99** vid beslutstidpunkterna 1 / 2 / 3, men sannolikheterna att den posteriora fördelningen ändrats var **0 / 0 / 0,15**. **Exponering är inte samma sak som urskiljbar evidens.** Den exakta, genomförbara läraren nådde som mest kvoten **0,107 (10,7 %) i huvudvarianten** och **0,179 (17,9 %) i känslighetsvarianten**, relativt **marginalen för oraklet X\* med fast prövning jämfört med den begränsade menyn av fasta policyer B_extended**. Det förhandsangivna kriteriet uppfylldes inte. Nästan hela den skenbara lärvinsten kom från *tillståndsberoende val av fortsättning*, inte från uppdaterade posteriorer. X\* är bundet till den angivna prövningen; det är **jämförelsemenyn** som betecknas som begränsad.

\newpage

# Bilaga A · Översvämningsfallet: matris för åtgärder och samspel

Raderna är **inte** en gemensam konfirmatorisk jämförelse mellan fem strategier. Evidensmarkeringarna måste följa med respektive observation.

| Åtgärd | Utfall / pris när antaganden skiljer sig | Effekt på observerbarheten | Status / begränsning |
|:--|:--|:--|:--|
| **Behåll:** utelämna R | I d05 ökade den sanna U1-kostnaden med 2,36 när R spelade roll | Kan innebära fortsatt noll exponering | **[E/M]** utvald värld |
| **Ändra mål:** COMP (F1-eco, utan R) | Bättre våtmarksutfall; kostnad enligt konventionell U1 | **[IP]** Våtmarksinvestering skulle kunna exponera R som bieffekt; detta **testades inte som en lärandeintervention** | **[C/M]** paketjämförelse; **[IP]** lärandeeffekt |
| **Revidera modell:** REP (anta R, U1) | Lägre genomsnittlig U1 än COMP under konfirmatoriska villkor; mindre stabil fördel vid parameterfel | **[IP]** Kan minska drivkraften att lära sig om R i detta beslut; inte testat som en komplett återkopplingsslinga | **[C/M]** paketresultat; **[E/M]** parameterfel; **[IP]** lärandeeffekt |
| **Pröva / observera** | Kostnader, fördröjningar och små posteriora vinster i studerade världar | Exponerar mekanismen innan evidens blir tillgänglig | **[E/M]** utvalda världar; **alternativ sensor ej testad** |
| **Gardera:** MIX(R,q) | Likaviktat genomsnitt U1 **6,465–6,638**, lägre än rena F0-planer **6,924** (anta R) och **6,967** (utelämna R); våtmarksunderskott mellan de rena planernas | Effekten på lärande ej fastställd | **[E/M]** heuristik, *världsmedelvärden*, inte optimerad planering med sannolikhetsfördelning över modeller |

**Jämförelseförbehåll.** MIX utvärderades explorativt som en blandmodellheuristik i varje steg, inte som konfirmatorisk studiearm eller optimal adaptiv planering med osäkerhet över modeller. Den publicerade tabellen T5 jämför MIX med **rena F0-strategier**, inte med alla tänkbara strategier. Våtmarksunderskottet låg mellan dessa F0-strategiers. Att REP hade lägre medel-U1 än COMP i den konfirmatoriska jämförelsen betyder alltså inte att REP var studiens bästa strategi enligt U1.

**Samspel [IP].** Värderingar påverkar investeringar i våtmark → investeringarna avgör om R kan påverka observerbara övergångar → evidens kan uppdatera föreställningar → uppdaterade föreställningar kan påverka senare beslut. **WP1 bekräftade inte hela denna slinga som en enda intervention.**

**Preliminär slutsats av granskningen.** Exemplet motiverar jämförelser mellan flera mål, tydliga tester av exponering och **tid till informativ evidens** samt jämförelser av genomförbart lärande med enklare tillståndsberoende och garderande regler. Det **pekar inte ut någon universellt bäst översvämningspolicy**.

**Statusnyckel.** [C] konfirmatoriskt (precisionmålet missades) · [E] explorativt / jämförelse i utvecklingsvärldar · [S] exakt egenskap hos den angivna modellen · [M] modellbaserat · [IP] tolkning, inte direkt testad.

\newpage

# Bilaga B · Hypotetisk överföring: urval vid långivning

**Helt fiktivt undervisningsexempel.** Ingen verklig långivare, datamängd, statistisk effekt eller interventionsutfall påstås här. Exemplet illustrerar selektiv återkoppling och är **inte** en rekommendation att experimentera med lånesökande utan skyddsåtgärder.

## Beslutskort och beslutets känslighet

En organisation använder en modell för att bevilja eller avslå låneansökningar. Den registrerar återbetalning endast för lån som faktiskt beviljas. Organisationen ska besluta om den vill behålla sin gräns, revidera kreditprövningen, förbättra mätningen eller använda en lärandestrategi med lämpliga skydd.

**Beslutsgrind:** Om de oobserverade, potentiella återbetalningsutfallen för avslagna sökande skulle ändra vilken beviljandepolicy som föredras, är det saknade kontrafaktiska utfallet beslutsrelevant. Om alla rimliga modeller stödjer samma åtgärd kan lärande ha begränsat värde – men **Q3 är fortfarande obligatorisk**.

## De fyra frågorna

- **Q1 — Mål:** Bedömer organisationen bara kreditförlustrisk och omedelbar intäkt, eller också rättvisa, tillgång till lån, långsiktigt välbefinnande och sökandes kostnader? Legitima kriterier och juridiska begränsningar ska anges, inte gissas.
- **Q2 — Modell:** Kan riskprognoserna vara felaktiga för sökande som sällan beviljas lån? Kan konjunktur, urvalseffekter eller omätta faktorer ändra slutsatsen?
- **Q3 — Observerbarhet:** För avslagna sökande observeras inte direkt det kontrafaktiska utfallet *”återbetalning om just denna långivare hade beviljat lånet”*. Enbart data om beviljade lån kan förstärka tilltron till urvalsregeln. Externa kredituppgifter kan belysa vissa frågor men identifierar inte automatiskt detta lånespecifika kontrafaktiska utfall.
- **Q4 — Lärande:** Överväg lagliga och säkrare alternativ, till exempel samtyckesbaserad datainsamling, extern validering, naturliga experiment eller noggrant övervakade försök. Fråga när konkurrerande modeller förutsäger **olika observerbara utfall**, vem som bär kreditrisken och om en enklare villkorad beslutsregel räcker. Slumpmässigt beviljande ska **inte** antas vara etiskt eller lämpligt.

## Skiss över åtgärder och samspel

| Åtgärd | Möjlig nytta | Saknad evidens / risk |
|:--|:--|:--|
| Behåll nuvarande gräns | Kontinuitet i verksamheten | Selektivt observerade utfall kan bestå |
| Revidera mål | Gör utelämnade utfall synliga i överläggningen | Kan ändra vilka som beviljas lån och därmed vilka utfall som observeras |
| Revidera modell | Kan förbättra rangordning med tillgänglig evidens | Avslöjar inte i sig återbetalning för avslagna sökande om de hade fått lån |
| Observera / utvärdera säkert | Kan förbättra beslutsrelevant evidens | Integritet, rättvisa, ekonomiska risker och krav på samtycke och tillsyn |
| Robust / återkallelig gardering | Kan begränsa sårbarheten inför osäkra prognoser | Kan minska värdet av mer lärande och ha en kostnad |

**Workshopfrågor:** Vilka människor och utfall väljs in i underlaget för träning och utvärdering? Vilka antaganden kan organisationen kontrollera utan att ändra behandlingen av sökande? Vilken extern tillsyn krävs före en intervention? Vilka ska delta när godtagbara utfall definieras? Var brister analogin med A2? (En viktig skillnad är att ekonomiska utfall berör mänskliga val, lagstiftning och potentiell skada, medan våtmarker i A2 är syntetiska tillståndsvariabler.)

## Ändringar i v0.2.1 och plan för utvärdering

Ändringar från v0.2: kort och fullständigt workshopupplägg, konkret Q3-exempel på selektiv evidens och tyst Q3-reflektion, fält för riskbärare och skyddsåtgärder, kombinerade åtgärdspaket, exempel på modellkänslighet, möjlighet att omformulera beslutet samt en separat uppföljning. Sifferuppgifter om F0-C/MIX och oraklet är oförändrade från v0.2.

**Det behövs fortfarande evidens för användbarheten:** Pröva denna frysta v0.2.1 mot gruppens vanliga beslutsprocess. Anteckna vilka viktiga frågor som *för första gången* upptäcktes, vilka som missades, vilka bördor som uppstod, faktisk tid, vad som bör tas bort och om beslut ändrades. En trevlig workshop är inte bevis för bättre beslut.

\newpage

# Frivilligt komplement · Uppföljning av blindfläckar efter beslutet

**Använd när policyn har tillämpats tillräckligt länge för att ge meningsfulla observationer.** Detta är en dokumentation av lärande på en sida, inte evidens för att granskningen förbättrade utfallet. **Härled inte oobserverade kontrafaktiska utfall från selektivt observerade fall.**

| Fråga för uppföljning | Anteckningar |
|:--|:--|
| Beslut, åtgärdspaket, startdatum, granskare, datum för uppföljning | __________________________________________ |
| Förväntade utfall / mätbara prognoser vid beslutstillfället | __________________________________________ |
| Faktiskt observerade utfall; evidensstatus [O/M/H/U] | __________________________________________ |
| Vilka berördes, vilka tillfrågades och vilka oförutsedda bördor eller skador uppstod? | __________________________________________ |
| Vad valde policyn **in** i den observerade datan? | __________________________________________ |
| Vilka grupper, tillstånd eller utfall hindrade den oss fortfarande från att se? | __________________________________________ |
| Vilka antaganden ifrågasattes, och vad är fortfarande inte identifierbart? | __________________________________________ |
| Kom evidensen i tid för att ändra åtgärden? Om inte, varför? | __________________________________________ |

**Gjorde åtgärden beslutet mer robust, eller bara osäkerheten svårare att se?** _________________________

**Vad lärde vi oss av utfall, jämfört med vad vi härledde ur modeller eller analogier?** _________________

**Vilken osäkerhet är fortfarande beslutsrelevant? Skulle ett svar ändra åtgärden?** ___________________

**Säkraste genomförbara nästa steg:** ☐ Behåll ☐ Ändra mål ☐ Revidera modell ☐ Sök evidens ☐ Gardera/kombinera ☐ Omformulera ☐ Sluta undersöka

**Åtgärd, ansvarig, skyddsåtgärd, utlösande villkor och nästa uppföljning:** ___________________________

**Invändning / berört perspektiv som behöver inhämtas före nästa beslut:** ___________________________

**Återhållsamhet vid uppföljning:** Om en trovärdig kontrafaktisk jämförelse saknas ska osäkerheten dokumenteras. En policy kan framstå som framgångsrik just därför att den hindrar observationer som skulle utmana den. Uppföljningen kan synliggöra **den risken**, men **inte bevisa de dolda utfallen**.
