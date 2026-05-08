## Appendix D: Simuleringsarkitektur — Självstabilitetssimulatorn

Detta appendix skisserar en simuleringsmodell som gör själv‑variationsgapet och Goodhart–Ashby-syntesen för självet konkret synliga. Modellen utvidgar logiken från Styrningsstabilitetssimulatorn (Artikel I) och värdefunktionskollapsdemonstrationen (Appendix C i *The Variety Gap*) till domänen för ett individuellt liv.

### D.1 Systembeskrivning

Simuleringen modellerar en person som ett dynamiskt system med **N** interna tillståndsdimensioner, där var och en representerar en kausalt relevant aspekt av välmående:

- **H(t)** : fysisk hälsa (energi, immunfunktion, frånvaro av sjukdom)
- **R(t)** : relationell integritet (djup och autenticitet i nära relationer)
- **M(t)** : existentiell mening (känsla av syfte, koherens, riktning)
- **K(t)** : karriär / bidrag (produktivt engagemang, erkännande, tillväxt)
- **Å(t)** : återhämtning / rekreation (vila, lek, estetisk erfarenhet)

Ytterligare dimensioner kan läggas till eller tas bort. Dimensionerna är kopplade: att försumma hälsa reducerar karriärprestation över tid; att försumma relationer reducerar mening; och så vidare. Självets sanna tillstånd vid tidpunkten *t* är vektorn **x(t)** = [H(t), R(t), M(t), K(t), Å(t)]ᵀ.

Systemet utvecklas enligt:

**x(t+1) = A · x(t) + B · u(t) + d(t) + drift**

där:
- **A** fångar naturligt förfall och tvärdimensionell koppling (t.ex. hälsa förfaller långsamt utan uppmärksamhet; mening förfaller om relationer är dåliga).
- **B** översätter investeringar av tid, energi och uppmärksamhet (**u**) till förändringar i varje dimension.
- **d(t)** är störningar — externa chocker (sjukdom, förlust, konflikt) och interna fluktuationer (humör, energi).
- **drift** upprätthåller jämvikt i frånvaro av störning och styrning.

### D.2 Värderingsarkitekturer (Styrenheter)

Simuleringen jämför två personliga värderingsarkitekturer som endast skiljer sig åt i sin **dimensionalitet**, inte i sin ansträngning eller kompetens.

**Arkitektur 1D (Enkelmått)**
- Personens värdefunktion följer endast en dimension — till exempel karriärframgång: **J₁ = K(t)**.
- Observationskanalen **C_själv** projicerar det fulla självtillståndet på karriäraxeln; alla andra dimensioner är oobserverade. Personen uppmärksammar endast signaler om prestation, erkännande och avancemang.
- Styrlag: **u(t) = K_först · (K_mål − K_obs(t))**, där **K_först** är en förstärkning och **K_obs** är den brusiga observationen av karriär. Personen investerar ansträngning närhelst karriärprestationen ligger under målet, utan medvetenhet om kostnaderna för andra dimensioner.

**Arkitektur ND (Flermått)**
- Personens värdefunktion följer *n* dimensioner simultant, där *n* är justerbart av användaren (t.ex. *n* = 3: karriär, hälsa, relationer).
- Observationskanalen inkluderar dessa dimensioner, med visst brus. Personen uppmärksammar en rikare uppsättning signaler.
- Styrlag: **uᵢ(t) = K_förstᵢ · (xᵢ_mål − xᵢ_obs(t))** för varje följd dimension *i*. Ansträngning allokeras för att sluta gap i varje dimension som uppfattas som bristfällig.

Båda styrenheterna har tillgång till samma totala ansträngningsbudget per tidssteg; den enda skillnaden är dimensionaliteten i deras värderingsarkitektur och den resulterande allokeringen av uppmärksamhet och handling.

### D.3 Koppling och kollapsmekanismen

Den kritiska strukturella egenskapen är **tvärdimensionell koppling**. Hälsa påverkar karriärproduktivitet; relationer påverkar mening; mening påverkar motivation att upprätthålla hälsa. Simuleringen implementerar en enkel linjär koppling:

- Karriärutflöde vid tidpunkten *t* beror på **K(t) · f(H(t))**, där *f* är en monotont ökande funktion som reducerar produktiviteten när hälsan är låg.
- Mening beror på **M(t) · g(R(t))**, där *g* fångar bidraget från relationellt djup till en känsla av syfte.

1D-styrenheten, blind för hälsa och relationer, lyckas initialt: karriärinvestering ger karriäravkastning. Men när hälsa och relationer tyst förfaller (eftersom ingen ansträngning allokeras till dem) börjar kopplingstermerna degradera karriärprestationen. Styrenheten responderar genom att *öka* karriärinvesteringen — den enda spak den känner till — vilket ytterligare accelererar förfallet av de exkluderade dimensionerna. Detta är Goodhart–Ashby-mekanismen: det smala måttet förstör de betingelser på vilka dess egen framgång beror.

Så småningom kollapsar karriärprestationen trots maximal ansträngning, eftersom de underliggande hälso- och relationsdimensionerna har fallit under kritiska trösklar. Kollapsen framstår som plötslig och oförklarlig för 1D-styrenheten, som saknar kategorier i vilka den kan uppfatta orsakerna.

ND-styrenheten, som observerar hälsa och relationer vid sidan av karriär, modererar sin investering innan de exkluderade dimensionerna når farliga nivåer. Karriärprestationen växer långsammare men kollapsar inte. Systemet når en stabil, flerdimensionell jämvikt.

### D.4 Användarjusterbara parametrar

Simuleringen är utformad som ett interaktivt verktyg för att utforska själv‑variationsgapet. Nyckelparametrar som användaren kan justera inkluderar:

- **Antal följda dimensioner (n)** : från 1 (smal) till N (full).
- **Förstärkning (K_först)** : intensiteten i korrigerande ansträngning. Hög förstärkning med låg dimensionalitet accelererar kollaps.
- **Kopplingsstyrka** : hur starkt exkluderade dimensioner återverkar på det följda måttet. Starkare koppling producerar snabbare kollaps för smala arkitekturer.
- **Störningsnivå** : frekvensen och magnituden av externa chocker. Högre störningsnivåer kräver högre dimensionalitet för att upprätthålla stabilitet.
- **Initialtillstånd** : startvärden för varje dimension, vilket möjliggör utforskning av olika livskonfigurationer.

### D.5 Förväntade utdata

Simuleringen producerar tidsserieplottar som visar:

1. **Banor för alla N dimensioner** under varje arkitektur, där kollapsen av icke‑följda dimensioner och den slutliga kollapsen av det följda måttet i 1D-fallet är tydligt synliga.
2. **Själv‑variationsgapet G_själv över tid**, beräknat som skillnaden mellan den effektiva dimensionaliteten i störningsmiljön och dimensionaliteten i den aktiva värderingsarkitekturen.
3. **En "krisdetektor"** som flaggar när någon dimension faller under en kritisk tröskel.
4. **En sammanfattande jämförelse** av genomsnittligt välmående, krisfrekvens och total förbrukad ansträngning under varje arkitektur.

### D.6 Relevans för variationsgapet

Denna simulering är en direkt instansiering av själv‑variationsgap-modellen:

- 1D-styrenheten har **dim(V_själv) = 1**; störningsrummet har **dim(D_själv) = N** (plus kopplingar). **G_själv** är stort.
- De exkluderade dimensionerna (hälsa, relationer, mening) är kausalt kopplade till det följda måttet (karriär). Att optimera proxyn utan att övervaka de exkluderade dimensionerna förstör så småningom korrelationen.
- Kollapsen följer Goodhart–Ashby-dynamiken: det smala måttet optimerar bort sin egen informella grundval.
- ND-styrenheten, med en högre **dim(V_själv)**, hanterar **G_själv** och undviker kollaps.

Simuleringen gör själv‑variationsgapets abstrakta mekanik gripbar. Den tillåter användare att se, i förenklad form, hur ett liv som styrs av ett enda mått oundvikligen destabiliseras — och hur en expansion av dimensionaliteten i vad man värderar kan återställa stabilitet.

### D.7 Reproducerbarhet

En referensimplementation av Självstabilitetssimulatorn finns tillgänglig i det medföljande repositoriet (se "Simulation Code" i det kompletterande materialet). Simuleringen använder standard Python med NumPy och Matplotlib; inga specialiserade paket krävs. Användare kan köra simuleringen, justera parametrar genom ett enkelt gränssnitt och generera de figurer som beskrivs ovan.

**Figur D.1: Själv‑variationsgapets kollaps i ett femdimensionellt personligt system**

![Figur D.1](/whitepapers/images/self-variety-gap/self-stability-simulator.png)

1D-styrenheten (som endast följer karriär) applicerar initialt maximal ansträngning på karriäravancemang. Denna ansträngning dränerar direkt hälsan genom överarbete (fysiologisk kostnad för varaktig högprestation). När hälsan faller under 70% av baslinjen går karriärproduktiviteten in i exponentiell nedgång — samma ansträngning ger progressivt mindre utflöde. Styrenheten, oförmögen att uppfatta hälsa, responderar genom att öka ansträngningen ytterligare, vilket accelererar hälsoutarmningen. Detta skapar återkommande högkonjunktur-lågkonjunkturcykler synliga i karriärbanan (mittersta panelen): korta återhämtningar när ackumulerad vila tillåter tillfällig hälsoåterställning, följda av djupare krascher när styrenheten omedelbart återutarmar den återvunna kapaciteten.

Hälsan stabiliseras nära kollaps (~15–20), relationer förfaller till ~45, och karriär oscillerar mellan 10 och 70 trots kontinuerlig maximal ansträngning. Systemet går in i ett kroniskt kristillstånd med krisandel = 0,1. Personen arbetar så hårt som möjligt men uppnår progressivt sämre utfall — det kanoniska utbrändhetsmönstret.

ND-styrenheten (som följer hälsa, relationer, karriär och återhämtning) distribuerar ansträngning över dimensioner. Genom att upprätthålla hälsa över 70%-tröskeln undviker den att utlösa karriärstraffet helt och hållet. Alla följda dimensioner stabiliseras nära baslinjen med låg varians. Karriärprestationen är stadig vid ~70 — lägre än 1D:s toppar men utan de katastrofala dalarna. Krisandel = 0,0.

Den sammanfattande jämförelsen (nederst till vänster) visar nästan identiskt genomsnittligt välmående (67,2 vs 68,7) eftersom 1D:s korta toppar kompenserar för dess djupa dalar vid medelvärdesbildning. Men den *levda erfarenheten* skiljer sig radikalt: ND tillhandahåller stabil, förutsägbar funktion; 1D producerar kronisk instabilitet och återkommande kriser. De identiska ansträngningsbudgetarna (nederst till höger) demonstrerar att detta är arkitektoniskt misslyckande, inte motivationsbrist.

Detta är den personliga Goodhart–Ashby-syntesen: en värderingsarkitektur med dim(V_själv)=1 kan inte upprätthålla stabilitet när den exkluderade dimensionen (hälsa) är kausalt kopplad till det följda måttet (karriär). Den smala optimeringen förstör sin egen informella och fysiologiska grundval.
