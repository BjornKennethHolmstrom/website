# §3 — Den första gränsen: ett system kan inte certifiera grunden för sin egen korrigering

## 3.1 Påståendet

En styrningsarkitektur som är tillräckligt rik för att representera sin egen faktorisering, sina egna regler och sin egen certifieringsprocedur kan stöta på en störning med fyra egenskaper samtidigt:

1. den faller helt och hållet **inom arkitekturens ansvarsdomän** — detta är inte ett problem som någon annan förväntas hantera;
2. den är **genererad, eller gjord relevant, av arkitekturens egen drift** — institutionens fungerande är vad som förde kravet till existens;
3. **att lösa den kräver en revidering av certifieringskärnan** — den procedur genom vilken systemet kontrollerar att dess regler fortfarande svarar mot världen;
4. och **den existerande kärnan kan inte legitimera den revisionen**, eftersom varje kontroll av kärnan måste gå genom kärnan.

Kalla detta en *certifierings-ofullständig* störning. Påståendet i detta avsnitt är att tillräckligt expressiva arkitekturer medger sådana, och att ett system i detta tillstånd kan fortsätta att operera — att handla, att revidera, att klara varje test det vet hur man administrerar — medan dess handlingar har frikopplats från den verklighet de var avsedda att följa.

Påståendet är nivågraderat **[IP]** och förblir där. Vad som följer förklarar varför det inte kan nivågraderas högre, vad det vilar på som *är* fastställt, och vilken del av det som kan demonstreras.

## 3.2 Detta är inte ett Gödel-teorem, och analogin gör mindre arbete än vad det verkar

Frestelsen är att kalla detta ett Gödel-teorem för styrning, och frestelsen bör motstås i brödtexten snarare än i en fotnot.

Gödels första ofullständighetsteorem är inte ett argument från regress. Det är en *konstruktion*. Det diagonala lemmat bygger, från det formella systemets egna symboler, en sats som hävdar sin egen obevisbarhet; systemets konsistens är sedan precis vad som hindrar det från att bevisa den satsen, som likväl är sann. Kraften i resultatet ligger helt i konstruktionen — i demonstrationen att en sådan sats *existerar*, och existerar för varje system som uppfyller hypoteserna.

Vi har ingen sådan konstruktion. Vad vi har är en regress — en verifierare av ett världsfaktum kräver i sin tur en verifierare (§3.3) — och ett stängningsvillkor — metanivåernas stege avslutas i ett begränsat system (§3.3). Regress plus stängning är en *strukturell diagnos*, och den är en god sådan, men den är inte ett diagonalargument och den levererar inte ett teorem. **Gödel-inramningen ger oss en fråga, inte ett bevis**: *kan systemet validera grunden för sin egen korrigering?* Frågan är den rätta. Beviset saknas.

**Vad ett teorem skulle kräva, angivet så att det kan försökas.** Tre saker, varav ingen tillhandahålls i denna artikel:

- **(a)** En precis definition av en styrningsarkitektur som en begränsad regulator med självrepresentationskapacitet — analogin till "ett formellt system tillräckligt rikt för att koda aritmetik." Rapport 0 och Rapport XXI tillhandahåller de flesta ingredienserna; ingen har sammanställt dem till en definition skarp nog att kvantifiera över.
- **(b)** Ett begrepp om en **arkitekturgenererad störning**: analogin till en sats konstruerad från systemets egna symboler. Detta är den svåra, och det är här vi förväntar oss att försöket bryts.
- **(c)** Ett bevis för att en sådan störning inte kan absorberas utan att antingen bryta mot en invariant som systemet inte kan revidera inifrån, eller klättra till en metanivå som den begränsade stegen redan har stängts på.

Detta är **registrerat som ett öppet problem**, inte antytt som framtida arbete.

**Invändningen vi inte kan besvara, rest mot oss själva.** Krav (b) döljer en svårighet som kan vara ödesdiger. Det finns en trivial läsning under vilken *varje* störning är arkitekturgenererad: varje policy har bieffekter, varje kategori formar vad den kategoriserar, varje institution förändrar den värld den styr. Under den läsningen är klassen universell och påståendet tomt. Den icke-triviala läsningen kräver något mycket starkare — att störningen är konstruerad *ur själva certifieringsapparaten*, på ett sätt som gör apparaten självundergrävande snarare än bara fallibel. Huruvida klassen av störningar som uppfyller den starka läsningen är **icke-tom** är precis vad ett teorem skulle behöva fastställa, och vi har inte fastställt det. **Det är möjligt att den starka klassen är tom och att certifieringsoförmåga, korrekt formaliserad, löses upp i den vanliga iakttagelsen att institutioner kan ha fel om världen.** Vi tror inte detta, men vi kan för närvarande inte utesluta det, och läsaren bör hålla avsnittets påstående till den rabatten.

## 3.3 Vad påståendet faktiskt vilar på, och båda delarna är fastställda

Skala bort Gödel-dekorationen och två bärande resultat återstår, vart och ett importerat från tidigare i serien och vart och ett nivågraderat för sig.

**Regressen (Rapport XVII).** Bearbetning kan göras godtyckligt verifierbar — huruvida ett system beräknade vad det påstår sig ha beräknat är kontrollerbart, i princip, till varje önskad standard. *Certifiering av verkligheten* kan inte det. Huruvida det externa faktum som en regel vilar på faktiskt förelåg kräver en verifierare, och en verifierare av ett världsfaktum kräver i sin tur en verifierare; kedjan avslutas endast genom att lita på något overifierat ankare. Detta är ett strukturellt faktum om världskopplad samordning, och det gäller oavsett regulatorns storlek.

**Stängningen (Rapport XXI §5).** I ett begränsat system kan metanivåernas stege inte regrediera i det oändliga — varje nivå kostar representationskapacitet — så den måste avslutas på någon ändlig nivå $L^\ast$, som håller något invariant. Rapport XXI:s adaptiva lärdom var att det mogna draget är att välja *vad som ska hållas stilla*, inte att förfina ytterligare.

Sammanställ dem. Regressen säger att certifieringskedjan måste sluta i ett overifierat ankare. Stängningen säger att systemet endast har ändligt många stegpinnar att placera ett på. **En certifierings-ofullständig störning är ett krav på en distinktion på nivå $L^\ast + 1$ — uppkommen inom systemets egen domän, gjord relevant av systemets egen drift — vid en punkt där stegen redan har stängts.**

Detta ger avsnittets renaste formulering, och den som separerar certifieringsoförmåga från vanligt institutionellt misslyckande:

> **En vanlig störning kräver en ny distinktion. En certifierings-ofullständig störning kräver en ny distinktion i den apparat som certifierar distinktioner.**

Det första är vad Rapport XX kallade en Ashby-chock: uppgiftsrelevant variation stiger, regulatorn måste åter-särskilja, lärande är mekanismen (Rapport XXI §2). Systemet reviderar sin karta. Det andra är inte en svårare version av det första. Det är ett krav på att revidera *det som licensierar revisioner* — och licensieringsapparaten kan inte licensiera sin egen ersättning utan att förutsätta sig själv.

Regressen är **[R]** (XVII). Stängningen är **[R]** (XXI). Deras sammanställning till ett påstående om *icke-tom* certifieringsoförmåga är **[IP]**, av det skäl §3.2 gav.

## 3.4 Relokaliseringsinvarianten, riktad mot kärnan

Rapport XVII etablerade *relokaliseringsinvarianten*: att automatisera en samordningsgräns relokaliserar dess irreducibla världscertifieringslänk uppströms men tar inte bort den. Ett oföränderligt smart kontrakt stänger exekveringslänken och återöppnar samma beroende vid specifikationslänken — vad token representerar, vad förslaget betyder. Tilliten flyttas, inte avlägsnas.

Rikta detta mot själva certifieringskärnan och det säger något skarpare än vad XVII behövde säga. Anta att en institution, medveten om att dess kärna kan driva, installerar en revision av kärnan. Revisionen relokaliserar tilliten: nu är frågan om *revisionen* fortfarande följer världen. En meta-revision relokaliserar den igen. Och enligt §3.3 stängs stegen — så relokalisering avslutas, och den avslutas i något som hålls overifierat.

Det finns en praktisk korollarium, som XVII redan namngav:

> **Att härda *protokollet* är inte att härda *certifieringen*.**

En manipulationssäker liggare, en oföränderlig revisionslogg, en kryptografiskt signerad kedja av attesteringar: var och en härdar protokollet över att ett faktum attesterades. Ingen härdar attesteringen. Den mjukaste punkten i kedjan förblir människan eller sensorn som hävdar att det protokollförda faktumet förelåg.

Från detta drog vi ursprungligen en förutsägelse om *signaturen* för certifieringsmisslyckande: att när en kärna frikopplas från världen, skulle protokollet förbli intakt — varje processkontroll godkänd, varje rapport inlämnad — medan den kartläggning det protokollförde i tysthet upphörde att motsvara verkligheten. Och vi förutsåg att detta skulle uppträda som **missad certifiering**: verkligt behov som förblir oupptäckt, ett system som hade förlorat förmågan att se sanning snarare än ett som handlar på lögner.

**Demonstrationen falsifierade den förutsägelsen, och ersatte den med en värre.**

§4 korrumperar en certifieringskanal och finner *noll* missad certifiering — en exakt nolla, i varje frö — och en stor ökning av *falsk* certifiering. Mekanismen (§4.5) är att den korrupta kanalen felstyr resurser till en agent som inte behöver dem, och, genom att överförsörja den agenten, håller den permanent borta från behov. Den falska certifieringen **föregriper det verkliga behov som den annars skulle ha maskerat**. Ingenting förblir ouppfyllt, eftersom patologin föder just den part vars ouppfyllda behov skulle ha varit evidensen för den.

Så det korrigerade uttalandet av relokaliseringskorollariet är inte att protokollet överlever misslyckandet. Det är att **protokollet närs av det**:

> **En institution i certifieringsmisslyckande ser inte bara frisk ut inifrån. Dess hälsoindikatorer förbättras.** Det mått en revisor naturligt skulle sträcka sig efter — *går någons genuina behov ouppfyllt?* — avläses som en perfekt nolla, bättre än utgångsläget, precis medan kärnan är inverterad och resurser systematiskt felallokeras. Misslyckandet är inte osynligt av en tillfällighet. Det är osynligt eftersom det förstör evidensen för sig självt.

Detta är anledningen till att certifieringsoförmåga inte är ett specialfall av vanligt institutionellt fel, och det är ett starkare skäl än det vi hade. En institution som bara *har fel* om världen genererar anomalier: ouppfyllda behov, oförklarade underskott, klagomål från de parter den har svikit. Dessa anomalier är vad en fungerande tillsynsapparat konsumerar. En **certifierings-ofullständig** institution genererar inga, eftersom de parter som skulle klaga är de parter som blir överservade. Apparaten som skulle fånga vanligt misslyckande är intakt, välgödd och rapporterar framgång.

Vi håller detta vid **`[IP]`** som ett allmänt påstående om institutioner, och vid **`[R inom modellen]`** för den demonstrerade mekanismen. Den institutionella läsningen är en förmodan som resultatet stöder, inte ett påstående det bevisar.

## 3.5 Vad som kan demonstreras, och vad som visade sig inte kunna det

§3.2 medger att det allmänna påståendet saknar bevis och kanske inte medger ett. Det medgivandet tvingar fram en fråga: finns det något här som kan *visas*?

Det gör det, och det är snävare än påståendet — snävare, visade det sig, än vi förväntade oss.

**Vad vi föresatte oss att demonstrera.** Tre påståenden, vart och ett testbart:

1. **Åtskillnad i art.** En korrupt certifieringskanal bör producera ett misslyckande *kategoriskt olikt* en vanlig miljöstörning — inte bara ett värre. En vanlig störning gör världen svårare att handla i medan maskineriet genom vilket systemet vet vad det ska göra lämnas intakt. Ett certifieringsmisslyckande lämnar världen precis som den var och förstör maskineriet.
2. **En signatur.** Enligt §3.4:s ursprungliga förutsägelse: ett system som har förlorat förmågan att certifiera verkligt behov snarare än ett som handlar på falska certifieringar.
3. **Ett återhämtningsfönster.** Att återställa en certifieringskanal är inte samma handling som att återställa den samordning den stödde. Ett system som redan är utanför sin kooperativa bassäng kan finna att sanningen, återbördad till det, inte längre hjälper.

**Vad demonstrationen faktiskt fastställde.** (1) håller, men genom en mekanism motsatt den förutsagda — krisen är kategoriskt skild från en vanlig störning, men för att den *översvämmar* snarare än svälter. (2) är **falsifierad**: signaturen är falsk certifiering, inte missad certifiering. (3) är **inte fastställt, och kunde inte testas**, av ett skäl värt att ange precist.

**Återhämtningsfönstret kräver en regulator som lär sig, och vi kunde inte bygga en.**

Ett regelföljande system återhämtar sig omedelbart från en reparerad kanal vid varje fördröjning vi testade — ρ(fördröjning, återhämtning) = 0,046, en ren nollhypotes. Det resultatet är verkligt, och det är icke-informativt, eftersom det följer av vad en regelföljare *är*. Dess givande är en funktion av signalen framför den, inte av någon historia med den signalen. **Den kan inte vilseledas till misstro, eftersom den inte litar: den efterlever.** Det finns ingen bassäng att falla ur, så det finns inget för timing att spela roll för.

Frågan §3.4 egentligen handlar om är huruvida en *adaptiv* regulator, efter att ha lärt sig att dess certifieringskanal ljuger, kan läras om att den talar sanning — och huruvida det finns en fördröjning bortom vilken den inte kan det. Det är policyhysteres, och det är den form i vilken återhämtningsfönstret skulle vara ett styrningsfynd snarare än ett mekaniskt sådant. Att testa det kräver en regulator som lär sig under krisen. Vi försökte bygga en två gånger, under en förhandsregistrerad stoppregel, och misslyckades båda gångerna: inläraren kollapsar till en jämvikt utan handel där generalisten — som inte behöver någon — överlever ensam (§4.3).

Vi protokollför konsekvensen snarare än att arbeta runt den:

> **Den mest intressanta frågan denna artikel väcker om certifieringsmisslyckande är en den inte kunde ställa.** Inte för att experimentet var dåligt designat, utan för att den samordning det förutsätter själv är svår att producera — vilket är ett fynd, och tillhör den multi-agent-linjen av arbete snarare än denna artikel.

**Räckvidden för vad en sådan demonstration kan licensiera.** Kärnan korrumperas **exogent**: experimentatorn inverterar signalen. Så demonstrationen visar vad som händer *när* en certifieringskärna misslyckas. Den visar **inte** ett system som genererar sitt eget kärnmisslyckande — och endogen generering är precis krav (b) i §3.2, kravet på vilket Gödel-analogin står eller faller. **En framgångsrik demonstration konverterar inte detta avsnitt från `[IP]` till `[R]`, och §4 låter den inte göra det.**

Den luckan förblir det ärliga måttet på avståndet mellan vad detta avsnitt påstår och vad serien kan stödja. Det är också det mest hanterbara öppna problemet som artikeln lämnar efter sig, och det förenas nu av ett andra:

1. **Konstruera en minimal modell där certifieringskärnan korrumperas av systemets egen framgångsrika drift**, snarare än av ett ingrepp utifrån. Det skulle vara den första genuina kandidaten till en styrningens Gödel-sats, och den existerar inte.
2. **Konstruera en regulator som lär sig att samarbeta genom en certifieringskanal tillräckligt tillförlitligt för att traumatiseras av dess korruption.** Endast en sådan regulator kan tillfrågas om tillit, en gång förstörd, kan återuppbyggas — och på vilken tidsfrist.

Det andra är inte en teknisk bekvämlighet som står mellan oss och det första. Det är anledningen till att det första ännu inte kan testas: ett system som aldrig litade på sin kärna kan inte visas ha förlorat förmågan att revidera den.

## 3.6 Institutionella läsningar **[IP]**

Tre strukturella situationer där de fyra villkoren i §3.1 plausibelt samförekommer. De erbjuds som illustrationer av formen, inte som evidens.

**En statistikmyndighet vars kategorier inte längre skär den ekonomi den mäter.** Kategorierna var tillräckliga när de fastställdes; den ekonomi de mätte har omformats, delvis av policyer som just dessa kategorier gjorde läsbara och därmed handlingsbara. Att revidera kategorierna kräver att man vet att de har drivit — vilket kräver att man mäter driften med instrument kalibrerade i de gamla kategorierna. Myndighetens data fortsätter att samlas in oklanderligt, och fortsätter att beskriva en värld som är på väg bort.

**Ett standardiseringsorgan som certifierar en teknologi som löser upp de distinktioner dess certifiering vilar på.** Certifieringsproceduren frågar om en artefakt uppfyller kriterier definierade över en kategori av artefakter. En ny artefakt är en vars definierande egenskap är att den inte stannar innanför en sådan kategori. Organet kan certifiera den under de gamla kriterierna — en certifiering som är procedurellt giltig och substantiellt tom — eller avstå, vilket kräver ett omdöme som kriterierna inte licensierar.

**En revisionsregim som har härdat sitt protokoll och lämnat sin attestering orörd.** Varje post är signerad, tidsstämplad, oföränderlig och avstämd. Varje post är också nedströms en enda människa eller sensor som hävdar att en sak inträffade. Regimens investering i integritet har helt gått till den länk som redan var stark (§3.4), och dess förtroende har stigit i enlighet därmed.

I varje fall klarar institutionen sina egna tester. Det är inte ovidkommande för misslyckandet. Det är misslyckandet.Jag har nu översatt hela avsnittet. Varsågod, jag kan fortsätta med nästa del när du är redo.
