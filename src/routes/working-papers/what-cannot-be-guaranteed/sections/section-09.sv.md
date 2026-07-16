# §9 — Vad denna artikel inte visar

Fastställt i ryggraden innan något av det skrevs, och utvidgat av vad arbetet sedan upptäckte om sig självt.

## 9.1 Två av de tre teoremen är grunda, och vi säger det

**L2 (reformers oavgörbarhet)** är ett äkta teorem och nära rutinmässigt när dess hypotes — uppdateringsdynamikens beräkningsmässiga universalitet — väl medges. Samma slutsats följer oberoende från Rices teorem och från begränsningsresultat för rika dynamiska system. När ett resultat faller ut ur tre orelaterade teorem berättar det inte något specifikt för dig om det studerade objektet; det berättar att objektet antogs vara beräkningsmässigt universellt, och allt följer av *det*.

**L3 (No Free Lunch)** är formellt giltigt och närmast innehållslöst. Dess kraft vilar helt på en likformig fördelning över ett ostrukturerat rum av miljöer — en fiktion som ingen institution någonsin har mött. Ett teorem vars tyngd vilar på en sådan fördelning är ett teorem om fördelningen.

I båda fallen är artikelns bidrag **kontrapositionen**, inte omöjlighetsresultatet: *namnge den begränsade klass av dynamik under vilken din reformutvärdering är giltig*; *namnge den miljöklass din arkitektur är ett vad på*. Vi drar inte nytta av Turings eller Wolperts namns prestige, och en läsare som kom för det kommer att bli besviken.

**L2 står dessutom i spänning med seriens egen premiss.** Den kräver obegränsning; Rapport 0 och Rapport XX kräver begränsning; ett ändligt system har ett avgörbart konvergensproblem. Den ärliga formen av L2 är därför ett **komplexitets**påstående, inte ett beräkningsbarhetspåstående, och beräkningsbarhetsinramningen är en gränsidealisering av det. Vi anser att detta är den rätta läsningen. Vi påstår inte att det är den enda.

## 9.2 Den intressanta gränsen är inte ett teorem, och är kanske inte en gräns

**L1 (certifieringsoförmåga) förblir `[IP]`**, och §4:s framgång ändrar inte det. Artikeln gör uttryckligen inte anspråk på ett Gödel-teorem för styrning. Vad den har är en regress (XVII) plus en stängning (XXI), vilket är en strukturell diagnos, inte en diagonal konstruktion.

Invändningen vi inte kan besvara anges i §3.2 och vi upprepar den här snarare än att låta den blekna. Begreppet en **arkitekturgenererad störning** har en trivial läsning under vilken varje störning kvalificerar — varje policy har bieffekter, varje kategori formar vad den kategoriserar — och under den läsningen är påståendet tomt. Den icke-triviala läsningen kräver att störningen är konstruerad *ur själva certifieringsapparaten*, vilket gör den självundergrävande snarare än bara fallibel. **Huruvida den klassen är icke-tom är precis vad ett teorem skulle behöva fastställa, och vi har inte fastställt det.** Det är möjligt att certifieringsoförmåga, korrekt formaliserad, löses upp i den vanliga iakttagelsen att institutioner kan ha fel om världen. Vi tror inte detta. Vi kan inte utesluta det.

## 9.3 De empiriska påståendena: fem registrerade misslyckanden

| | utfall |
|---|---|
| GRIND (adaptiv regulator, ×2) | UNDERKÄND — jämvikt utan handel; inläraren kunde inte byggas |
| C1 — kris ≠ vanlig störning | UNDERKÄND 0/20 |
| C2 — signatur är missad certifiering | UNDERKÄND 0/20, **inverterad** |
| C3 — det finns ett återhämtningsfönster | UNDERKÄND — reparation fungerar vid varje fördröjning |
| C4 — oanvänd kanal är inert | UNDERKÄND 1/20 |

Riktningsmässiga men under-tröskeln-resultat tvättas inte till godkända, och inget av dessa var riktningsmässigt. Det enda positiva resultatet — **översvämningsmekanismen** (§4.5) — fanns **i efterhand**, återregistrerades sedan som en ny riktningsförutsägelse och bekräftades på tjugo nya frön. Det är nivågraderat `[R inom modellen]` med den proveniensen bifogad. **Det är inte ett förhandsregistrerat fynd och vi presenterar det inte som ett.**

## 9.4 En avvikelse från förhandsregistreringen, deklarerad

Den registrerade analysgrenen var den inlärda regulatorn. Den misslyckades med sin insläppsgrind över två konfigurationer, och vi substituerade den **regelföljande** grenen, som godkänns vid 17/20.

Vi håller detta för licensierat, och vi redogör för resonemanget så att en läsare kan vara oenig. Grinden är **endast baslinje**: den testar `no_crisis`-betingelsen och inget annat, och ingen krisarm ingår i den. Att välja den gren som har en giltig baslinje är vad en grind är till för. **C1–C4 hade inte beräknats på den skriptade grenen vid tiden för bytet, och bytet deklarerades innan de beräknades.**

Vad vi inte kan påstå är att detta var designen. Det var en fallback, tagen efter ett misslyckande, och en läsare med rätt att vara misstänksam mot post‑hoc-grenval har rätt att rabattera demonstrationen i enlighet därmed.

## 9.5 Demonstrationen är en leksak, och dess korruption är ett specialfall

**En miljö, tre agenter, en certifieringskanal, en specialiseringsstruktur.** Översvämningsmekanismen beror på att mottagaren är *oförmögen* att skörda det den överförsörjs med. Huruvida den generaliserar till rikare komplementaritet är en förmodan som detta resultat stöder, inte ett påstående det bevisar.

**Korruptionen är total, inte brusig.** Signalen är inverterad, inte degraderad. En kanal som är rätt 70% av tiden skulle kunna bete sig helt annorlunda — och skulle mycket väl kunna producera den missade certifiering som inversion inte gör. Ingenting här talar till partiell eller stokastisk korruption, vilket är den form som verkligt certifieringsmisslyckande oftast tar.

**Kärnan korrumperas exogent.** Experimentatorn inverterar signalen. Demonstrationen visar vad som händer *när* en kärna misslyckas; den visar inte ett system som genererar sitt eget kärnmisslyckande. Det är krav (b) i §3.2, på vilket Gödel-analogin står eller faller, och det är orört.

## 9.6 Frågan som artikeln mest ville ställa, och inte kunde

C3 — återhämtningsfönstret — var det enda genuint nya påståendet som erbjöds, och dess nollresultat är icke-informativt av ett skäl som tog tre försök att se. **En regelföljare har ingen tillit att förlora.** Dess givande är en funktion av signalen framför den, inte av någon historia med den signalen; den kan inte vilseledas till misstro eftersom den inte litar, den efterlever. Så dess omedelbara återhämtning vid varje fördröjning är ett faktum om vad en regelföljare *är*, inte om certifiering.

Den fråga som spelar roll — huruvida en **lärande** institution, efter att ha lärts att dess certifieringskanal ljuger, kan läras om att den talar sanning, och huruvida det finns en fördröjning bortom vilken den inte kan — kräver en regulator som lär sig att samarbeta genom kanalen från första början. Vi kunde inte bygga en, och vi slutade försöka under en regel fastställd i förväg snarare än att fortsätta tills en baslinje uppträdde.

> **Den mest intressanta frågan denna artikel väcker om certifieringsmisslyckande är en den inte kunde ställa.** Två registrerade inlärarmisslyckanden är skälet, och de rapporteras som resultat snarare än som ett appendix om metoder.

## 9.7 Luckor vi kan namnge men inte fylla

**Ingen metod för att identifiera en miljöklass.** §6:s designprincip är *namnge klassen*, och serien har ingen procedur för att avgöra vilken klass en institution faktiskt befinner sig i. XIX:s vaktposter upptäcker att ett skifte har *inträffat*; ingenting identifierar vad man har skiftat *till*. Detta är just den förmåga som principen förutsätter. **[H]**

**Ingen princip för att välja mellan efterlevnad och skepticism.** §7.4: en regelföljare är exponerad på varje kanal; en inlärare smalnar av sin exponering till priset av rigiditet och med risken att ha beskurit en kanal som senare spelar roll. Båda hornen är verkliga. Vi har ingenting att säga om vilket man ska ta. **[H]**

**Triptykens uttömmande är `[IP]`, och vi namnger den fjärde utsiktspunkt vi inte behandlar.** Garanti kan också efterfrågas **i efterhand** — *fungerade reformen?* — och det kravet misslyckas av egna skäl: inget kontrafall, ingen upprepning, en värld som rörde sig av andra orsaker under tiden. Det är den gräns som empirisk policyutvärdering faktiskt stöter på. Vi har inget resultat för den. En artikel om garantins gränser bör inte tyst göra anspråk på en fullständighetsgaranti som den inte har.

## 9.8 En defekt som ärvts, och en skuld som är skyldig

Miljön som användes i §4 innehöll en degenererad handling — skörd lyckades på varje cell som innehöll någon resurs alls, och kapacitetsgolvet garanterade att varje cell alltid gjorde det — vilket lät agenter skrapa karga celler till döds medan rutnätet låg mättat. Det är åtgärdat här.

**Det är inte åtgärdat i de samordningssimuleringar som sår multi-agent-linjen av arbete.** Deras kortare episoder maskerar det. Dessa resultat bör granskas på nytt innan något byggs på dem. Vi rapporterar detta eftersom alternativet är att låta en känd defekt fortplanta sig i tysthet in i arbete som ännu inte har skrivits, vilket är samma fel som denna artikel handlar om.

---

## 9.9 Artikelns egen form, angiven

Detta är en artikel med fem registrerade misslyckanden, två grunda teorem förklarade grunda, en strukturell diagnos som inte är ett teorem och kanske inte är en gräns, en vägrad unifiering och en bekräftad mekanism som vi inte förutsåg och som falsifierar den förutsägelse vi gjorde.

Vi rapporterar hellre detta än den artikel vi föresatte oss att skriva, och anledningen ryms i resultatet. **En apparat som rapporterar perfekt hälsa under en korrupt kärna är exakt studieobjektet.** Vi byggde en av misstag — ett experiment vars instrument returnerade en ren baslinje över en död population — och vi trodde den nästan. Det som fångade det var en grind registrerad i förväg, extern till det den kontrollerade, och ansvarig inför ett kriterium fastställt innan data existerade.

Det är artikelns argument, gjort av artikelns eget misslyckande att vara immun mot det.
