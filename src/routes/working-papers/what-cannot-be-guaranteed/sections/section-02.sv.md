# §2 — Tre gränser, tre källor, och varför de inte reduceras till en

## 2.1 Frestelsen

Rapport XX bär titeln *Tre lagar från en gräns*, och den förtjänar den: Ashby, Goodhart och certifieringskostnaden från Rapport XVII följer alla från en enda premiss — en ändlig regulator som partitionerar den uppgiftsrelevanta världen i ett begränsat antal interna tillstånd och tilldelar en handling per tillstånd. Tre lagar, en gräns, tre operationer: att hålla, att optimera, att underhålla.

Föreliggande artikel har tre gränser. Symmetrin är nästan oemotståndlig, och det är värt att lägga fram den i sin starkaste form innan den avvisas, eftersom den version som övertygar inte är en halmgubbe.

> En begränsad regulator kan inte representera sin värld uttömmande. Den måste därför *faktorisera* — förbinda sig till en ändlig mängd distinktioner och förkasta resten (Rapport 0). Det åtagandet är en induktiv bias, och varje induktiv bias är ett vad på vilken sorts värld man befinner sig i; därav **No Free Lunch**. Regulatorn kan inte verifiera sin egen faktorisering inifrån, eftersom verifiering av ett världsfaktum kräver en verifierare, och stegen av verifierare måste stängas i ett ändligt system; därav **certifieringsoförmåga**. Och eftersom regulatorn inte kan representera sin egen framtida bana i sin helhet, kan den inte i förväg beräkna om en förändring av dess faktorisering kommer att stabilisera sig; därav **reformers oavgörbarhet**. Tre gränser, en gräns, tre utsiktspunkter.

Detta är ett gott argument. Det är också felaktigt i två av sina tre ben, och misslyckandet är inte en teknikalitet som en mer noggrann formulering skulle reparera. Att klargöra exakt *hur* det misslyckas är arbetet i detta avsnitt, eftersom misslyckandets form är det som organiserar artikeln.

## 2.2 Det andra benet misslyckas, och det misslyckas genom motsägelse

Oavgörbarhet kräver beräkningsmässig universalitet: uppdateringsdynamiken måste kunna simulera en godtycklig Turingmaskin. Universalitet kräver ett obegränsat tillståndsrum. Och ett obegränsat tillståndsrum är just vad begränsad representation förnekar.

Genomför härledningen och se den inverteras. En regulator med ett ändligt tillståndsrum $S$ har ett **avgörbart** konvergensproblem: simulera dynamiken under $|S|$ steg, observera att banan vid det laget måste ha gått in i en cykel, och avläs om den cykeln ligger innanför $C \cap V$. Begränsning *producerar* inte oavgörbarhet. Begränsning *förstör* den.

Så försöket att härleda L2 från begränsad representation är inte bara en annan härledning än den vi ger i §5; det är en härledning från negationen av L2:s egen hypotes. **[R]** De två premisserna kan inte båda vara skarpa samtidigt, och varje artikel som påstår något annat har köpt en unifiering med en motsägelse.

Detta är det enskilt starkaste skälet för den föreliggande artikelns struktur, och vi vill ha det dokumenterat snarare än begravt i en brasklapp. Rapport XX:s gräns är verklig och serien vilar på den. L2 kräver dess motsats. Det faktumet är inte en pinsamhet; det är information om var L2 faktiskt hör hemma — nämligen i en idealisering, vars ändliga skugga är ett *komplexitets*resultat snarare än ett beräkningsbarhetsresultat (§5.3). Oavgörbarhetsteoremet beskriver en gräns som seriens egna regulatorer strängt taget inte möter; vad de möter är dess exponentiellt dyra ändliga motsvarighet. Att erkänna detta är vad som hindrar §5 från att dra nytta av Turings namns prestige.

## 2.3 Det tredje benet misslyckas, mer stillsamt

No Free Lunch är likgiltigt inför regulatorns kapacitet. Betrakta en Laplace-demon: obegränsad representation, perfekt minne, ingen faktorisering påtvingad den av någon ändlighet. Den möter NFL precis som en begränsad regulator gör. Medelvärdesbildat likformigt över ett ostrukturerat rum av miljöer ligger demonens arkitektur lika med varje annan. Ingenting i NFL-beviset berör regulatorns interna kapacitet överhuvudtaget; konstruktionen med spegelmiljöer är ett påstående om *rummet av miljöer* och *frånvaron av en fördelning över det*, inte om agenten.

Så källan till L3 är epistemisk, inte arkitektonisk: **det är frånvaron av en fördelning, inte vetarens ändlighet. [R]**

Det förföriska steget i stålmannen var frasen "därav No Free Lunch", som i tysthet förvandlade en sammansättning till en härledning. Vad som är sant är:

- Begränsning *tvingar* en regulator att ha en induktiv bias (Rapport 0: den måste faktorisera; faktoriseringen är biasen).
- No Free Lunch säger att varje induktiv bias är ett vad på miljöklassen.

Dessa sammansätts. De medför inte varandra. Det första är ett faktum om regulatorer; det andra är ett faktum om relationen mellan vilken bias som helst och rummet av möjliga världar. Deras konjunktion ger det användbara påståendet — *en begränsad regulator kan inte vara neutral om den värld den befinner sig i, även om den önskar vara det* (§6.6) — och det påståendet är värt att ha. Men sammansättning är inte härledning, och att presentera den som härledning vore den inflation som denna serie förbjuder.

## 2.4 Det första benet håller — men inte via den väg Rapport XX använde

Certifieringsoförmågan *kan* spåras tillbaka till begränsad representation. Den spåras inte tillbaka via det fackprincipsargument som gav XX dess Ashby-resultat. Kedjan är längre och den har två ingredienser, inte en:

1. **Regressen (Rapport XVII).** Huruvida ett externt faktum som en regel vilar på faktiskt förelåg kan inte göras självverifierande: en verifierare av ett världsfaktum behöver i sin tur en verifierare, och kedjan avslutas endast genom att lita på något overifierat ankare. Detta är ett strukturellt faktum om världskopplad samordning och det kräver inget antagande om regulatorns storlek.
2. **Stängningen (Rapport XXI §5).** I ett begränsat system kan stegen av metanivåer inte regrediera i det oändliga — varje nivå kostar representationskapacitet — så den måste avslutas på någon ändlig nivå $L^\ast$, som håller något invariant. Det är här begränsning kommer in, och det är det *enda* ställe den kommer in.

Lägg ihop de två och du får L1: arkitekturens egen drift kan göra en distinktion relevant på nivå $L^\ast + 1$, och stegen har redan stängts. Ett krav uppstår inom systemets ansvarsdomän som systemet inte kan möta utan att bryta mot en invariant det inte kan revidera inifrån.

Notera vad denna kedja kräver utöver begränsning: **självrepresentation.** En regulator som inte kan modellera sin egen faktorisering, sina regler och sin certifieringsprocedur genererar inte kravet från första början. Så till och med det ben som överlever löper inte på gränsen ensam. **[R]** för kedjan; **[IP]** för påståendet att verkliga institutioner har tillräcklig självrepresentation för att den ska bita.

## 2.5 Källorna, i tabellform

| | Gräns | Formell källa | Kommer **inte** från |
|---|---|---|---|
| **L1** | Certifieringsoförmåga (§3) | begränsning (via stegstängning) **+** självrepresentation **+** världscertifieringsregressen i XVII | beräkning; fackprincipsargumentet i XX |
| **L2** | Reformkonvergensens oavgörbarhet (§5) | beräkningsmässig universalitet hos uppdateringsdynamiken | självreferens; och **inte** begränsning — den kräver negationen av den |
| **L3** | No Free Lunch (§6) | frånvaro av en fördelning över miljörummet | begränsning, vid varje kapacitet |

Tre gränser, tre källor, ingen gemensam premiss. **[R]** för tillskrivningarna.

## 2.6 Vad de delar, vilket inte är en premiss

Triptyken hålls inte samman av vad den följer *av*. Den hålls samman av vad den *efterfrågas*.

Varje gräns är ett krav på garanti, och de tre skiljer sig åt genom den **utsiktspunkt från vilken kravet ställs**:

> **L1** — garanti efterfrågad **inifrån**: kan systemet validera sin egen grund för korrigering?
> **L2** — garanti efterfrågad **utifrån**: kan en observatör, innan den handlar, avgöra om en föreslagen förändring konvergerar?
> **L3** — garanti efterfrågad **före världen**: kan en arkitektur rättfärdigas utan ett påstående om vilken värld den befinner sig i?

Läst på detta vis är strukturen inte en härledning utan en uppräkning över utsiktspunkter, och varje utsiktspunkt misslyckas av ett skäl som är dess eget: insidan misslyckas på grund av en regress, utsidan på grund av en reduktion, det som är före-världen på grund av frånvaron av en fördelning. Vägran att unifiera är inte en axelryckning. Det är erkännandet att "styrning kan inte garanteras" är tre olika meningar som råkar låta likadant.

Och vad de konvergerar mot ligger nedströms, inte uppströms: var och en omvandlar en garanti till en gardering, och garderingarna är sådana som serien redan besitter (§7). **Det är en konvergens av konsekvenser, inte av orsaker**, och distinktionen är artikelns ryggrad.

Detta följer ett prejudikat. Rapport XVI stod inför fyra fenomen som såg ut som ett och vägrade den enhetliga teorin, och behöll endast den gemensamma strukturen — avklingning plus en källterm — och den enda axel längs vilken de fyra skilde sig åt. Draget här är detsamma: behåll den gemensamma konsekvensen, behåll utsiktspunktsaxeln, och avstå från teorin som skulle binda samman källorna, eftersom bandet inte existerar.

## 2.7 Varför de rena härledningarna är de grunda

Det finns ett mönster i tabellen ovan, och det förklarar den inversion som anges i §1.4 snarare än att bara upprepa den.

L2 och L3 har **rena, enhypoteskällor** — universalitet; frånvaron av en fördelning. De är också de två resultat som är formellt giltiga och nästan innehållslösa (§5.3, §6.3). L1 har en **sammansatt, treingredienskälla** — begränsning plus självrepresentation plus certifieringsregressen. Den är också den enda med verkligt styrningsinnehåll, och den är inte ett teorem.

Detta är inte en tillfällighet, och den allmänna formen är värd att ange:

> **En gräns som kan härledas från en enda ren hypotes är vanligtvis en gräns om hypotesen, inte om objektet.** När hela resultatet faller ut ur "anta Turing-fullständighet" eller "anta en likformig fördelning", är antagandet det som gör arbetet och det studerade objektet är inert — ett styrsystem, en marknad, en termostat, vilken som helst av dem skulle duga. Resultatet reser så fritt eftersom det inte handlar om styrning överhuvudtaget.

Det är därför §5 och §6 förklarar sin egen grundhet snarare än att dra nytta av Turings och Wolperts namns prestige, och varför artikelns empiriska demonstration (§4) knyts till `[IP]`-diagnosen snarare än till någotdera `[R]`-teoremet. Det är en ovanlig form för en artikel och vi föredrar att förklara det här snarare än att få det påpekat.

## 2.8 Uttömmandepåståendet, och en fjärde utsiktspunkt vi inte behandlar

Ingenting ovan visar att tre är det rätta antalet.

Den organiserande axeln är den utsiktspunkt från vilken garanti efterfrågas, och åtminstone en ytterligare utsiktspunkt existerar: garanti efterfrågad **i efterhand**. *Fungerade reformen?* Detta är inte ett specialfall av någon av de tre. Det misslyckas av ett eget skäl — kontrafallet är inte tillgängligt, reformen är inte upprepningsbar, världen rörde sig av andra skäl under tiden — och det är den gräns som empirisk policyutvärdering faktiskt stöter på. Serien har inget resultat för den, denna artikel tillhandahåller inget, och dess existens är skälet till att triptykens uttömmande är nivågraderat:

> **[IP]** Dessa tre utsiktspunkter är de från vilka garanti karakteristiskt efterfrågas av en styrningsarkitektur, och var och en misslyckas.
> **Inte påstått:** att de är de enda sådana utsiktspunkterna.

Vi namnger den fjärde snarare än att förbigå den, eftersom en artikel om garantins gränser inte tyst bör göra anspråk på en fullständighetsgaranti som den inte har.
