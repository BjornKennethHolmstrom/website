# Del II — Formellt ramverk: Legitimitet som emergent kopplingstillstånd

Serien *Governance as Engineering* har från sin första rapport använt reglerteorins tillståndsrymdformalism för att modellera styrsystem. Ett system beskrivs av en tillståndsvektor **x**(t), en aktueringsmatris **B** som bestämmer hur styrsignaler påverkar tillståndet, och en observationsmatris **C** som bestämmer vad regulatorn kan uppfatta. Teknisk rapport I till XII har behandlat **B** och **C** som arkitektoniska primitiver — egenskaper hos den institutionella designen som konstruktören väljer och som försämras genom identifierbara strukturella mekanismer: latens, aggregering, projektion, brus.

Detta papper introducerar en parameter som inte väljs av konstruktören. Den uppstår ur interaktionen mellan styrningsarkitekturen och den befolkning den styr, och den modulerar samtidigt både **B** och **C**. Den parametern är legitimitet, betecknad L(t) ∈ [0,1]. Det formella greppet är att behandla L(t) inte som en extern kontext utan som en endogen tillståndsvariabel i reglerslingan — en som kopplar samman de två kanaler som serien hittills har behandlat separat.

## 2.1 Den standardmässiga tillståndsrymdmodellen med en legitimitets-parameter

Seriens baslinjemodell är det diskreta linjära systemet:

**x**(t+1) = **A**·**x**(t) + **B**·**u**(t) + **w**(t)  
**y**(t)   = **C**·**x**(t) + **v**(t)

där **x**(t) ∈ ℝⁿ är det styrda systemets sanna tillstånd, **u**(t) ∈ ℝᵐ är styrsignalen, **w**(t) är processbrus med kovarians **W**, **y**(t) är den observerade signalen, och **v**(t) är mätbrus med kovarians **V**.

I teknisk rapport I till XII behandlas matriserna **A**, **B** och **C**, samt bruskovarianserna **W** och **V**, som arkitektoniska parametrar. De kan försämras av strukturella felsätt — latens, aggregering, projektion, gränsmissanpassning — men försämringarna är själva egenskaper hos den institutionella designen. En konstruktör som förkortar representationskedjan (teknisk rapport III) förbättrar **C**; en konstruktör som minskar delegationsdjupet (teknisk rapport XI) förbättrar **B**.

Legitimitet verkar annorlunda. Den är inte en egenskap hos den institutionella designen. Den är en egenskap hos den styrda befolkningens villighet att samarbeta med den designen. Och den påverkar båda kanalerna samtidigt.

**Aktiverings-legitimitet (L_B).** När en regulator utfärdar ett direktiv **u**(t), är den faktiska styrsignal som når systemet inte **u**(t) utan **u**_eff(t) = L_B(t) · **u**(t), där L_B(t) ∈ [0,1] är den andel av befolkningen som efterlever direktivet. En skattereform tillkännages; L_B är andelen skattebetalare som faktiskt betalar enligt den nya skattesatsen. En folkhälsoorder utfärdas; L_B är andelen som följer den. En reglering utfärdas; L_B är andelen reglerade enheter som implementerar den utan rättstvist, fördröjning eller undandragande. Den effektiva aktueringsmatrisen är:

**B**_eff(t) = L_B(t) · **B**

När L_B = 1 verkställs regulatorns direktiv fullständigt. När L_B = 0,5 har hälften av aktiveringskapaciteten gått förlorad — inte genom något misslyckande i det institutionella maskineriet, utan därför att maskineriets kommandon inte åtlyds. Distinktionen är betydelsefull för diagnos: ett styrningsmisslyckande som tycks vara ett aktiveringsunderskott kan i själva verket vara ett legitimitetsunderskott, och den lämpliga responsen är inte att omforma aktiveringskedjan utan att återuppbygga den tillit som den är beroende av.

**Observations-legitimitet (L_C).** När regulatorn samlar in information om systemets tillstånd — genom enkäter, administrativa data, regulatoriska inlagor eller sensornätverk — beror den informationens korrekthet på de styrdas villighet att rapportera ärligt. En statistikmyndighet undersöker företagsaktivitet; L_C är sannolikheten att en respondent rapporterar korrekt snarare än strategiskt. En regulatorisk inspektör besöker en anläggning; L_C är sannolikheten att operatören redovisar överträdelser snarare än döljer dem. En medborgare besvarar en statlig konsultation; L_C är sannolikheten att svaret återspeglar medborgarens genuina preferens snarare än vad medborgaren tror att regeringen vill höra.

Mätbrusets kovarians **V**(t) är inte fix. Den är en avtagande funktion av L_C(t). Den enklaste parameteriseringen, och den som detta papper antar för analytisk tydlighet, är:

**V**(t) = **V**₀ / L_C(t)

där **V**₀ är baslinjekovariansen för bruset när legitimiteten är perfekt (L_C = 1). När L_C = 0,5 är mätbruset fördubblat. När L_C → 0 divergerar mätbruset mot oändligheten — observationskanalen är inte bara försämrad; den är förstörd. Regulatorn mottar inte längre information om systemets sanna tillstånd. Den mottar brus.

Observationsekvationen blir:

**y**(t) = **C**·**x**(t) + **v**(t), **v**(t) ~ 𝒩(**0**, **V**₀ / L_C(t))

De två legitimitets-parametrarna, L_B och L_C, är begreppsligt distinkta. En befolkning kan efterleva direktiv medan den ljuger om resultaten (hög L_B, låg L_C: den auktoritära illusionen). En befolkning kan rapportera ärligt medan den vägrar att efterleva direktiv (låg L_B, hög L_C: protestdemokratin). I det allmänna fallet är de separata variabler. Men de är positivt korrelerade genom ett gemensamt beroende av underliggande tillit: en regering som är betrodd att använda makt väl tenderar att både åtlydas och få sanningen berättad för sig; en regering som är misstrodd tenderar att möta både icke-efterlevnad och strategisk rapportering. För mycket av den analys som följer arbetar pappret med ett sammansatt L(t), och behandlar L_B ≈ L_C som en rimlig approximation för system där legitimiteten är brett fördelad över domäner. Den flerdimensionella utvidgningen, där olika institutioner åtnjuter olika legitimitetsnivåer, noteras som en riktning för framtida arbete och förändrar inte kärndynamiken.

## 2.2 Legitimitetsdynamik som en endogen schemaläggningsvariabel

Legitimitet är inte fix. Den utvecklas som svar på regulatorns prestanda och beteende. Dynamiken kan formaliseras som:

L(t+1) = clip( L(t) + ΔL(t), 0, 1 )

där ΔL(t) är förändringen i legitimitet driven av tre primära mekanismer:

**Leveransgapet.** Den mest direkta drivkraften bakom legitimitet är gapet mellan vad regulatorn lovar och vad den levererar. Medborgare formar förväntningar om utfall — ekonomisk tillväxt, tjänstekvalitet, offentlig säkerhet — och uppdaterar sin tillit baserat på avvikelsen mellan förväntan och verklighet. Formellt:

ΔL_leverans(t) = −α · ‖**x**(t) − **x**_utlovat(t)‖²

där **x**_utlovat är det tillstånd som regulatorn åtog sig att uppnå, och α fångar befolkningens känslighet för leveransmisslyckanden. Den kvadratiska formen återspeglar den empiriska regelbundenheten att stora misslyckanden skadar legitimiteten oproportionerligt — ett missat budgetmål med 5 % är mer än fem gånger så skadligt som ett miss med 1 %.

**Transparenssignalen.** Legitimitet handlar inte bara om utfall. Den handlar också om process. En regulator som verkar transparent — publicerar sina data, förklarar sina beslut, erkänner sina misstag — genererar en positiv transparenssignal som delvis kompenserar för leveransmisslyckanden. Formellt:

ΔL_transparens(t) = +β · T(t)

där T(t) ∈ [0,1] är regulatorns valda transparensnivå, och β fångar befolkningens lyhördhet för öppenhet. Transparenskanalen är den mekanism genom vilken regulatorn kan investera i framtida legitimitet, även till kostnaden av att avslöja obekväma sanningar i nuet.

**Svekskostnaden.** Den mest skadliga händelsen för legitimitet är inte misslyckande utan svek. När de styrda upptäcker att regulatorn systematiskt har manipulerat information — undertryckt ofördelaktig statistik, bestraffat ärlig rapportering, konstruerat ett narrativ som avviker från observerbar verklighet — är legitimitetsstraffet katastrofalt. Formellt:

ΔL_svek(t) = −γ · D(t)

där D(t) är en indikator (eller ett kontinuerligt mått) på avslöjat svek, och γ är svekskänsligheten. Avgörande är att γ inte är en konstant. Den är väsentligt större för *lånad* legitimitet än för *byggd* legitimitet, en distinktion som formaliseras i Avsnitt 2.4.

Den fullständiga legitimitetsdynamiken är:

L(t+1) = clip( L(t) − α · ‖**x**(t) − **x**_utlovat(t)‖² + β · T(t) − γ · D(t) + δ, 0, 1 )

där δ är en liten exogen drifterm som fångar den långsamma, sekulära ackumulationen eller urholkningen av institutionell tillit som inträffar oberoende av en enskild regerings prestanda.

**Hysteresasymmetri.** Dynamiken ovan behandlar leveransgapet symmetriskt: ett positivt gap (överleverans) ökar L i samma takt som ett negativt gap (underleverans) minskar det. Detta är empiriskt falskt. Förtroende förstörs snabbare än det återuppbyggs. För att fånga detta görs känslighetsparametern α tillståndsberoende:

α = α_nedgång om Δ_fel² > 0 (prestanda som försämras)  
α = α_återhämtning om Δ_fel² ≤ 0 (prestanda som förbättras)

med α_nedgång ≫ α_återhämtning. En regering som underlevererar under en period förlorar L snabbt; en regering som överlevererar under en period vinner L långsamt. Asymmetrin är inte ett psykologiskt antagande; det är en empirisk regelbundenhet med djupa evolutionära rötter — organismer som uppdaterade positiva förväntningar lika snabbt som negativa skulle vara sårbara för exploatering. Oavsett dess ursprung är konsekvensen för styrning den hysteresloop som dokumenteras i Avsnitt 2.3: vägen från hög L till låg L är kort; vägen tillbaka är lång.

Regulatorn måste nu hantera ett system där dess egen effektivitetsparameter L(t) är en funktion av dess prestanda och transparens. Detta är ett *ickelinjärt tillståndsberoende återkopplingssystem*: schemaläggningsvariabeln L(t) är sluten-slinga och felberoende. Den formella analysen av sådana system bygger på de absoluta stabilitetskriterierna — Popovkriteriet och Cirkelkriteriet — som avgör om en sektorbegränsad ickelinjäritet i återkopplingsvägen bevarar eller förstör systemstabiliteten. Legitimitetsfällan, som introduceras härnäst, är just det tillstånd under vilket kopplingsickelinjäriteten lämnar den stabila sektorn.

## 2.3 Kalmanfiltret och kollapsen av observations-legitimitet

Observations-legitimitetsparametern L_C styr bruskovariansen **V**(t) = **V**₀ / L_C(t). När L_C faller stiger mätbruset. Detta har en precis och allvarlig konsekvens för regulatorns förmåga att uppskatta systemets sanna tillstånd.

En väldesignad regulator använder inte råa observationer **y**(t) direkt. Den passerar dem genom en tillståndsskattare — i det optimala fallet, ett Kalmanfilter — som kombinerar den brusiga mätningen med en förutsägelse från den interna modellen för att producera en minimumvarians-skattning **x̂**(t) av det sanna tillståndet. Kalmanförstärkningen **K**_k avgör hur mycket vikt skattaren ger åt nya mätningar relativt den modellbaserade förutsägelsen:

**K**_k = **P**_k **C**ᵀ ( **C** **P**_k **C**ᵀ + **R** )⁻¹

där **P**_k är felkovariansen för tillståndsskattningen och **R** = **V**₀ / L_C är mätbruskovariansen.

När L_C → 0, **R** → ∞. När **R** → ∞, Kalmanförstärkningen **K**_k → 0. En Kalmanförstärkning på noll innebär att skattaren ignorerar nya mätningar helt. Den uppdaterar sin tillståndsskattning rent genom att prop agera den interna modellen framåt via dynamikmatrisen **A**:

**x̂**(t+1) = **A**·**x̂**(t) + **B**·**u**(t)

Regulatorn opererar nu i öppen slinga. Den svarar inte på världen. Den svarar på sin egen modell av världen, projicerad framåt utan korrigering. Varje avvikelse mellan modellen och verkligheten ackumuleras osedd. Regulatorns dashboard visar det tillstånd som modellen förutsäger, inte det tillstånd som existerar.

Detta är den formella mekanismen för *dashboard-isolering* — det tillstånd där ett styrsystems interna bild av sin egen prestanda avviker systematiskt från observerbar verklighet. Mekanismen kräver inte konspiration, propaganda eller medvetet svek, även om dessa kan accelerera den. Den kräver endast att L_C faller tillräckligt lågt för att Kalmanförstärkningen ska närma sig noll. Vid den punkten blir den arkitektur som var utformad för att upprätthålla situationsmedvetenhet en maskin för att upprätthålla situationsokunnighet. Regulatorn är inte bara oinformerad. Den är felinformerad av sin egen modell, och felet ackumuleras i en takt som bestäms av gapet mellan **A** och den sanna systemdynamiken.

De praktiska styrningsyttringarna av dashboard-isolering är bekanta från seriens landfall. Sovjetiska Gosplans sena ekonomiska statistik, som visade tillväxt medan ekonomin stagnerade. Den kinesiska befordringsturneringens systematiskt optimistiska lokala rapportering. Den ryska maktvertikalens progressiva förlust av kontakt med slagfältsverkligheten. I varje fall var observationskanalen inte bara försämrad av arkitektur. Den förstördes av kollapsen av L_C till den punkt där det blev individuellt irrationellt för de agenter som innehade sanningen att rapportera den.

## 2.4 Legitimitetsfällan som en sektorbegränsad ickelinjäritet

Kopplingen mellan L, aktuering och observation skapar möjligheten till en självförstärkande kollaps. När L faller försvagas aktiveringen. Utfallen försämras. Leveransgapet vidgas. L faller ytterligare. Samtidigt döljer det stigande observationsbruset det sanna tillståndet, vilket gör regulatorns interventioner alltmer felkalibrerade. Regulatorn, blind för sin egen blindhet, fördubblar sina ansträngningar — tillämpar interventioner som är för stora eller för små, vid fel tidpunkt, på fel plats — och den resulterande försämringen urholkar L ytterligare.

Detta är *legitimitetsfällan*: en positiv-återkopplingsspiral där den parameter som gör styrning effektiv progressivt förstörs av den ineffektivitet som dess egen förstörelse producerar. Formellt är det en bifurkation i den ickelinjära systemdynamiken. När L är över en kritisk tröskel L_krit, har systemet ett enda stabilt jämviktsläge vid hög prestanda och hög legitimitet. När L faller under L_krit försvinner högprestandajämviktsläget eller blir onåbart, och systemet dras in i en låg-L, lågprestanda-attraktor från vilken återhämtning kräver antingen extern intervention eller en uthållig period av förhållanden — blygsamma mål, maximal transparens, konsekvent leverans — som den utarmade aktiveringskapaciteten gör svåra att uppnå.

Fällans locus kan karakteriseras med hjälp av de absoluta stabilitetskriterierna för system med sektorbegränsade ickelinjäriteter. Legitimitetsdynamiken utgör ett ickelinjärt återkopplingselement i slingan. När sektorgränserna för det elementet — bestämda av α, β, γ och hysteresasymmetrin — är kompatibla med styrningsarkitekturens linjära dynamik, är systemet absolut stabilt: det konvergerar till ett hög-L-jämviktsläge oavsett initialvillkor. När sektorgränserna överträds blir systemet betingat stabilt eller instabilt: det existerar en region av tillståndsrymden från vilken det divergerar mot låg-L-attraktorn.

Styrningstolkningen är direkt. En väldesignad arkitektur med måttlig leveranskänslighet (α), hög transparensresponsivitet (β) och låg svekskänslighet (γ) är absolut stabil i legitimitetsdimensionen. Den kan absorbera chocker mot L — en skandal, en recession, ett policymisslyckande — och återhämta sig. En arkitektur med hög leveranskänslighet, låg transparens eller hög svekskänslighet är betingat stabil. Den kan upprätthålla hög L under gynnsamma förhållanden, men en tillräckligt stor chock kan pressa den under L_krit, varefter systemets egen dynamik driver det djupare in i fällan snarare än tillbaka mot återhämtning.

Distinktionen mellan byggd och lånad legitimitet, som introduceras i nästa avsnitt, är just en parameterisering av dessa sektorgränser.

## 2.5 Lånad kontra byggd legitimitet

All legitimitet är inte strukturellt identisk. Samma observerade L kan vila på fundamentalt olika grunder, och dessa grunder bestämmer systemets motståndskraft mot chocker.

**Byggd legitimitet** uppstår ur konsekvent, transparent leverans över långa perioder. Befolkningen litar på regulatorn därför att regulatorn upprepade gånger har demonstrerat att den gör vad den säger, rapporterar ärligt om vad den gjorde och korrigerar sina misstag när de inträffar. Parametrarna för byggd legitimitet är:

- **α** (leveranskänslighet): måttlig. Enskilda misslyckanden förstås som undantag, inte som avslöjanden av systemisk inkompetens.
- **γ** (svekskänslighet): låg. Eftersom regulatorn har en lång historik av transparens är ett enskilt avslöjande av svek mer sannolikt att tolkas som en avvikelse än som bevis på systematisk oärlighet.
- **δ** (exogen persistens): hög. Byggd legitimitet avklingar långsamt även i frånvaro av positiv förstärkning, eftersom den är inbäddad i institutionellt minne och kulturella normer snarare än i den sittande regeringens prestanda.

Byggd legitimitet fungerar som en strukturell stabilisator. Den dämpar återkopplingsslingan mellan leveransmisslyckande och L-urholkning, vilket ger regulatorn tid att korrigera kursen innan fällan sluter sig.

**Lånad legitimitet** uppstår ur narrativ, karisma, fiendekonstruktion eller tillfällig framgång. Befolkningen litar på regulatorn inte på grund av en konsekvent historik utan på grund av en övertygande berättelse om regulatorns identitet, intentioner eller fiender. Parametrarna för lånad legitimitet är:

- **α** (leveranskänslighet): hög. Eftersom regulatorns legitimitet vilar på narrativet snarare än på demonstrerad kompetens, är ett leveransmisslyckande som motsäger narrativet oproportionerligt skadligt — det underminerar den berättelse på vilken hela tillitsrelationen vilar.
- **γ** (svekskänslighet): mycket hög. När lånad legitimitet punkteras av avslöjat svek är kollapsen katastrofal. Befolkningen drar slutsatsen inte bara att regulatorn gjorde ett misstag, utan att narrativet var bedrägligt från början. Svekskostnaden är inte proportionell mot sveket; den är proportionell mot gapet mellan narrativet och den avslöjade verkligheten.
- **δ** (exogen persistens): låg. Lånad legitimitet är inte inbäddad i institutioner eller kulturella normer. Den är knuten till specifika ledare, narrativ eller omständigheter, och den förångas snabbt när dessa stöd avlägsnas.

Den lånad-legitimitet-arkitekturen är strukturellt spröd. Den kan upprätthålla hög L under långa perioder under gynnsamma förhållanden — narrativet håller, ekonomin växer, fienderna förblir hotfulla. Men den är utsökt sårbar för chocker som genombryter narrativet. När genombrottet inträffar avtar L inte gradvis. Det kollapsar, och kollapsen förstärks av just de mekanismer — transparensundertryckning, narrativ kontroll — som arkitekturen använde för att upprätthålla lånad legitimitet från första början.

Sovjetunionen på 1980-talet är det kanoniska exemplet. Årtionden av lånad legitimitet — narrativet om historisk oundviklighet, konstruktionen av yttre fiender, undertryckandet av ekonomiska data — upprätthöll hög skenbar L tills glasnost och den ackumulerande tyngden av observerbart misslyckande genomböt narrativet. Kollapsen, när den kom, var inte en gradvis nedgång i tillit utan en nära-omedelbar förångning av den legitimitet på vilken hela arkitekturen var beroende. Arkitekturen misslyckades inte därför att dess institutioner var tekniskt oförmögna. Den misslyckades därför att den legitimitet som multiplicerade deras effektivitet var lånad, och skulden utkrävdes.

## 2.6 Förstärkningsschemaläggning: Att anpassa styrningen till legitimitetsnivån

En rationell regulator bör inte tillämpa samma styrstrategi oavsett sin egen legitimitetsnivå. Den optimala strategin beror på L, eftersom L bestämmer den effektiva aktiverings- och observationskapacitet som finns tillgänglig.

**Hög-L-regimen (L > L_hög).** Regulatorn kan eftersträva ambitiösa mål med hög förstärkning. Aktiveringen är tillförlitlig; observationen är korrekt; återkopplingsslingan är tät. Stora, transformativa reformer är genomförbara eftersom regulatorn kan räkna med efterlevnad och ärlig rapportering. Den primära styrningsutmaningen i denna regim är att upprätthålla de förhållanden — leverans, transparens — som håller L högt.

**Måttlig-L-regimen (L_krit < L < L_hög).** Regulatorn bör minska sin förstärkning och investera i transparens. Ambitiösa mål bär risken för ett leveransgap som pressar L mot fälltröskeln. Regulatorn bör eftersträva inkrementella, reversibla handlingar som demonstrerar tillförlitlighet utan att satsa legitimitet på utfall den inte kan garantera. Transparensinvestering — att publicera data, erkänna misstag, konsultera berörda befolkningar — bygger L till kostnaden av att avslöja obekväma sanningar på kort sikt.

**Låg-L-regimen (L < L_krit).** Regulatorn befinner sig i eller närmar sig legitimitetsfällan. Ambitiös handling är kontraproduktiv: den utarmade aktiveringskapaciteten gör leveransmisslyckande sannolikt, och det förstärkta observationsbruset gör felkalibrering oundviklig. Regulatorn bör operera i ett *legitimitetsåteruppbyggnadsläge*: minimala mål, maximal transparens och små, synliga, levererade åtaganden som ackumulerar en historik av tillförlitlighet. Målet är inte att lösa systemets substantiella problem direkt — regulatorn saknar den effektiva kapaciteten för det — utan att återuppbygga det L som all framtida kapacitet är beroende av.

Detta är den strukturella motsvarigheten till "att förtjäna tillbaka förtroendet." Det är inte en moralisk föreskrift. Det är en styrstrategi, härledd från dynamiken i LPV-systemet. En regulator som ignorerar sitt eget L och eftersträvar ambitiösa mål från låg-L-regimen är matematiskt sannolik att förstöra vad som återstår av dess legitimitet, eftersom den styrinsats den tillämpar kommer att absorberas av just den parameter den ignorerar.

**Legitimitetssensorer.** Förstärkningsschemaläggning på L kräver att regulatorn observerar L direkt. Detta innebär att övervaka tillitsundersökningar, efterlevnadsgrader, rapporteringslatens, deltagandemått och divergensen mellan officiella och oberoende datakällor. En regulator som inte mäter sin egen legitimitet opererar i öppen slinga på den parameter som schemalägger dess egen effektivitet. Designimplikationerna utvecklas i Del VI.

## 2.7 Relation till arkitektoniska primitiver

Legitimitet är inte en primitiv i seriens mening. Konstruktören kan inte välja L. Men konstruktören kan välja den arkitektur som över tid genererar eller urholkar L. Relationen mellan de arkitektoniska primitiverna i teknisk rapport I–XII och det emergenta kopplingstillståndet L är papprets centrala strukturella insikt.

Ett styrsystem med låg latens (teknisk rapport I), korta representationskedjor (teknisk rapport III), hög observationsdimensionalitet (teknisk rapport VI), välmatchade gränser (teknisk rapport XII) och skyddad observatörsmångfald (teknisk rapport X) kommer att *tendera* att generera hög L. Det levererar utfall tillförlitligt, eftersom dess reglerslinga är tät. Det rapporterar ärligt, eftersom dess observationskanaler är diversifierade och skyddade. Den styrda befolkningen lär sig över tid att efterlevnad belönas och ärlighet är säker.

Ett styrsystem som bryter mot dessa primitiver kommer att *tendera* att generera låg L. Dess leverans är inkonsekvent eftersom dess reglerslinga är långsam och dess aktivering är försvagad. Dess rapportering är förvrängd eftersom dess observationskanaler är smala och manipulerbara. Den styrda befolkningen lär sig över tid att efterlevnad är fruktlös och ärlighet är farlig.

Men relationen är stokastisk, vägberoende och underkastad hysteres. Ett system med förbättrande arkitektur kan möta låg L under en utsträckt period, eftersom befolkningens tillit har utarmats av den föregående perioden av dysfunktion och återhämtar sig långsammare än arkitekturen förbättras. Ett system med försämrande arkitektur kan åtnjuta hög L under en period, eftersom lånad legitimitet upprätthåller tilliten bortom den punkt där den underliggande arkitekturen skulle rättfärdiga det — tills lånet tar slut.

De arkitektoniska primitiverna skapar förutsättningarna för legitimitet. De garanterar den inte. Och när L väl är etablerat, återkopplar det på primitivernas effektivitet med multiplikativ kraft. Detta är anledningen till att legitimitet bäst förstås inte som en tolfte primitiv utan som seriens första endogena kopplingstillstånd: den variabel som uppstår ur interaktionen mellan arkitektur och samhälle, och som avgör om arkitekturen fungerar.
