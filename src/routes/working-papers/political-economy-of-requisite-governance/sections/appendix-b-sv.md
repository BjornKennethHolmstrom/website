# Appendix B: En minimal modell av förbikopplingsfällans dynamik

Detta appendix presenterar det formella dynamiska system som ligger till grund för Simulering A (avsnitt 6.1). Det specificerar ekvationerna, identifierar systemets fixpunkter, analyserar deras stabilitet och härleder det bifurkationsvillkor under vilket en solnedgångskopplad förbikoppling undkommer den lågprestations‑attraktor som fångar en permanent förbikoppling.

## B.1 Tillståndsvariabler och parametrar

Systemet har två tillståndsvariabler som utvecklas i diskret tid:

- *D*(*t*) ∈ [0, 1]: dysfunktionen hos den oreformerade grunden, där 0 representerar full funktionalitet och 1 representerar totalt haveri.
- *B*(*t*) ∈ [0, *B*_max(*D*)]: förbikopplingskapacitet, begränsad uppåt av ett grundberoende tak *B*_max(*D*) = 1 − *c*_tak · *D*, med *c*_tak ∈ [0, 1].

Takparameters *c*_tak fångar graden av beroende mellan förbikopplingen och den oreformerade arkitekturen. När *c*_tak = 0 är förbikopplingskapaciteten oberoende av grundens dysfunktion; när *c*_tak = 1 reducerar en fullständigt dysfunktionell grund förbikopplingstaket till noll.

Systemet styrs av två ansträngningsvariabler:

- *R*(*t*): reformtryck applicerat på grunden.
- *R*_B(*t*): investering i förbikopplingens expansion.

Ytterligare parametrar är:

- α: naturlig takt med vilken dysfunktion fördjupas när den lämnas okontrollerad (logistisk tillväxtparameter).
- *K*_R: förstärkning av reformtryck med avseende på synlig dysfunktion.
- *c*_syn: synlighetskoefficient — graden till vilken förbikopplingen maskerar grundens dysfunktion från politisk observation.
- γ: effektivitet av investering i förbikopplingens expansion.
- δ: avklingningstakt för förbikopplingskapacitet (institutionell entropi).
- *c*_solnedgång: kopplingsstyrka introducerad av solnedgångsvillkoret (avsnitt B.4).

## B.2 Det permanenta förbikopplingssystemet

Vi analyserar först systemet utan solnedgångskoppling, vilket motsvarar det permanenta förbikopplingsscenariot.

**Tillståndsekvationer.**

Grundens dysfunktion utvecklas som:

*D*(*t*+1) = *D*(*t*) + α · *D*(*t*) · (1 − *D*(*t*)) − β · *R*(*t*)  (B.1)

där β är den effektivitet med vilken reformtryck minskar dysfunktion. Den logistiska termen α · *D* · (1 − *D*) fångar det självförstärkande draget hos institutionellt förfall: måttlig dysfunktion förvärras under sin egen tyngd om den inte motverkas av reform. Reformtryckstermen är:

*R*(*t*) = *K*_R · *D*_syn(*t*)  (B.2)

*D*_syn(*t*) = *D*(*t*) · (1 − *c*_syn · *B*(*t*))  (B.3)

Synlig dysfunktion *D*_syn är den del av *D* som förblir politiskt läsbar efter att förbikopplingen maskerat den. När *B* = 0 är synlig dysfunktion lika med faktisk dysfunktion. När *B* ökar faller *D*_syn, vilket minskar *R* och därmed försvagar det politiska trycket för reform av grunden.

Förbikopplingskapaciteten utvecklas som:

*B*(*t*+1) = *B*(*t*) + γ · *R*_B(*t*) · (1 − *B*(*t*)/*B*_max(*D*(*t*))) − δ · *B*(*t*)  (B.4)

där *R*_B(*t*) är investeringsflödet in i förbikopplingen, vilket vi behandlar som konstant *R*_B i det permanenta förbikopplingsscenariot. Termen (1 − *B*/*B*_max) fångar avtagande avkastning när förbikopplingen närmar sig sitt grundbestämda tak. Avklingningstermen δ · *B* fångar institutionell entropi.

**Fixpunkter.**

En fixpunkt (*D*, *B*) uppfyller *D*(*t*+1) = *D*(*t*) och *B*(*t*+1) = *B*(*t*). Substituering av jämviktsvillkoren i (B.1)–(B.4) ger:

α · *D* · (1 − *D*) = β · *K*_R · *D* · (1 − *c*_syn · *B*)  (B.5)

γ · *R*_B · (1 − *B* / (1 − *c*_tak · *D*)) = δ · *B*  (B.6)

Ekvation (B.5) har en trivial lösning vid *D* = 0 (full grundfunktionalitet). För *D* `>` 0 kan vi dividera genom med *D* för att erhålla:

α · (1 − *D*) = β · *K*_R · (1 − *c*_syn · *B*)  (B.7)

Ekvation (B.6) kan arrangeras om till:

*B* = (γ · *R*_B · (1 − *c*_tak · *D*)) / (δ · (1 − *c*_tak · *D*) + γ · *R*_B)  (B.8)

Systemet medger således en familj av inre fixpunkter bestämda av skärningen mellan (B.7) och (B.8).

**Fällans jämviktsläge.**

Vi är intresserade av den regim där förbikopplingen är välutvecklad och grunden är måttligt till allvarligt dysfunktionell. Betrakta fallet där *c*_syn är stor — förbikopplingen maskerar dysfunktion väsentligt — och *c*_tak är måttlig — förbikopplingen är delvis men inte fullständigt begränsad av grunden. Under dessa förhållanden har systemet en stabil inre fixpunkt vid något (*D*_fälla, *B*_fälla) med följande egenskaper:

- *D*_fälla `>` 0: grunden förblir dysfunktionell.
- *B*_fälla är betydande: förbikopplingen tillhandahåller meningsfull tjänsteleverans.
- *D*_syn(*D*_fälla, *B*_fälla) är låg: det politiska trycket för ytterligare reform är svagt.
- *B*_fälla `<` *B*_max(*D*_fälla): förbikopplingen opererar under sitt teoretiska tak, eftersom investering stabiliseras när synlig dysfunktion faller.

Detta är förbikopplingsfällan: ett stabilt jämviktsläge där förbikopplingen är tillräckligt framgångsrik för att undertrycka reformtryck men tillräckligt begränsad av den oreformerade grunden för att den totala prestandan förblir långt under den nivå som vore uppnåbar under en genuint reformerad arkitektur.

**Stabilitet.**

Jacobianen av systemet (B.1)–(B.4) evaluerad vid fällans jämviktsläge bestämmer lokal stabilitet. Utan att reproducera den fullständiga algebraiska härledningen är egenvärdena typiskt sett innanför enhetscirkeln när α är måttlig, *c*_syn är stor och γ · *R*_B är liten i förhållande till δ. Intuitionen är okomplicerad: en stark maskeringseffekt (*c*_syn stor) säkerställer att en ökning i *B* minskar *D*_syn, vilket minskar *R*, vilket tillåter *D* att glida uppåt — en negativ återkoppling som stabiliserar jämviktsläget. En svag investeringstakt i förbikopplingen säkerställer att *B* inte växer tillräckligt snabbt för att överväldiga taket, vilket förhindrar flykt från fällan genom ren förbikopplingsexpansion.

## B.3 Flykt genom exogent reformtryck

Innan vi introducerar solnedgångskopplingen noterar vi att fällan också kan undkommas om en exogen chock — en kris, en skandal, en extern intervention — tillfälligt ökar synlighetskoefficienten *c*_syn eller minskar förbikopplingens maskeringseffektivitet. Detta motsvarar ett tillfälligt skifte i parameterregimen som destabiliserar fällans jämviktsläge, vilket möjliggör ett fönster under vilket reformtryck på grunden kan bryta attraktorn. Detta är den formella motsvarigheten till begreppet "policyfönster": en kris förändrar tillfälligt systemets strukturella parametrar och möjliggör reform som inte var möjlig tidigare.

Att förlita sig på exogena chocker är emellertid ingen konstruktionsprincip. En styrningsarkitektur som endast kan reformera sig själv när kriser framtvingar frågan är just en arkitektur med låg övergångsbandbredd (avsnitt 5.1). Solnedgångskopplingen i avsnitt 4.2 är en mekanism för att *endogenisera* chocken — att göra förbikopplingens egen framgång till den utlösare som tvingar fram reform av grunden.

## B.4 Den solnedgångskopplade förbikopplingen

Vi introducerar nu solnedgångskopplingen. Kopplingen är en mekanism som ökar synlighetskoefficienten *c*_syn i takt med att förbikopplingskapaciteten *B* växer, så att framgång inte undertrycker reformtryck utan förstärker det. Formellt ersätter vi den konstanta *c*_syn med en funktion:

*c*_syn(*B*) = *c*_syn⁰ + *c*_solnedgång · *g*(*B* − *B*_solnedgång)  (B.9)

där *g*(·) är en jämn stegfunktion (t.ex. en sigmoid) som är nära noll när *B* `<` *B*_solnedgång och nära ett när *B* `>` *B*_solnedgång. Parametern *c*_solnedgång är den ytterligare synlighet som uppnås när förbikopplingen väl korsar tröskeln *B*_solnedgång, och *c*_syn⁰ är den grundläggande maskeringskoefficient som verkar innan solnedgången utlöses.

Det modifierade reformtrycket blir:

*R*(*t*) = *K*_R · *D*(*t*) · (1 − *c*_syn(*B*(*t*)) · *B*(*t*))  (B.10)

När *B* `<` *B*_solnedgång beter sig systemet identiskt med det permanenta förbikopplingsfallet och kan slå sig till ro i fällans jämviktsläge om ett sådant existerar. När *B* överstiger *B*_solnedgång ökar den effektiva synligheten av dysfunktion kraftigt. Reformtrycket *R* stiger, vilket driver *D* nedåt. När *D* faller stiger förbikopplingstaket *B*_max(*D*), vilket tillåter *B* att expandera ytterligare. Den positiva återkopplingsslingan — högre *B* → högre *c*_syn → högre *R* → lägre *D* → högre *B*_max → högre *B* — driver systemet ut ur fällan och mot ett nytt jämviktsläge med låg *D* och hög *B*.

**Bifurkationsvillkor.**

Solnedgångskopplingen producerar en kvalitativ förändring i systemets dynamik när *c*_solnedgång överstiger ett kritiskt värde *c*_solnedgång^krit. Under denna tröskel är ökningen i synlighet vid utlösarpunkten otillräcklig för att övervinna grundens tröghetsdynamik, och systemet återgår till fällans jämviktsläge även efter att *B* korsat *B*_solnedgång. Över tröskeln destabiliseras fällans jämviktsläge, och systemets enda stabila fixpunkt är högprestations‑jämviktsläget (*D* låg, *B* hög).

Den kritiska tröskeln bestäms av kraftbalansen vid utlösarpunkten. Låt (*D*_fälla, *B*_fälla) vara fällans jämviktsläge för det permanenta förbikopplingssystemet. Solnedgångskopplingen förändrar den effektiva reformförstärkningen från *K*_R · (1 − *c*_syn⁰ · *B*) till *K*_R · (1 − (*c*_syn⁰ + *c*_solnedgång) · *B*) för *B* `>` *B*_solnedgång. Det ytterligare reformtrycket vid utlösarpunkten är approximativt:

Δ*R* ≈ *K*_R · *D*_fälla · *c*_solnedgång · *B*_solnedgång

För att fällan ska destabiliseras måste detta ytterligare tryck vara tillräckligt för att reducera *D* under den nivå där fällans självstabiliserande dynamik kan återställa den. Ett nödvändigt villkor är:

*c*_solnedgång `>` (α · (1 − 2*D*_fälla) + δ_effektiv) / (*K*_R · *B*_solnedgång)

där δ_effektiv fångar grundens tröghetsmotstånd mot förändring. Den precisa formen beror på parameteriseringen, men den strukturella poängen är att solnedgångskopplingen måste vara tillräckligt stark — den ytterligare synligheten måste vara tillräckligt stor — för att övervinna fällans stabiliserande återkoppling.

**Simulering A** demonstrerar denna bifurkation genom att svepa *c*_solnedgång och kartlägga det resulterande jämviktsläget. Utdata visar övergången från ett stabilt fäll‑jämviktsläge vid låg *c*_solnedgång till ett stabilt högprestations‑jämviktsläge vid hög *c*_solnedgång, med en kritisk region där systemets öde beror på initialvillkoren och den precisa tidpunkten för utlösaren.

## B.5 Konstruktionsimplikationer

Den formella analysen ger tre villkor för att en solnedgångskopplad förbikoppling ska lyckas där en permanent förbikoppling misslyckas.

För det första måste solnedgångströskeln *B*_solnedgång sättas *över* den nivå där förbikopplingen kan infångas eller reverseras av den etablerade men *under* den nivå där förbikopplingen stabiliserar fällans jämviktsläge. Om *B*_solnedgång är för låg utlöser förbikopplingen reformtryck innan den har demonstrerat tillräcklig prestanda för att bygga en politisk koalition för reform av grunden; trycket förflyktigas, och förbikopplingen avvecklas eller infångas. Om *B*_solnedgång är för hög når förbikopplingen fällans jämviktsläge och stabiliseras där, utan att någonsin utlösa solnedgången alls.

För det andra måste kopplingsstyrkan *c*_solnedgång överstiga den kritiska tröskeln *c*_solnedgång^krit för de givna grundparametrarna. Detta innebär att solnedgångsmekanismen måste vara *institutionellt trovärdig*: den måste genuint öka synligheten av kvarvarande dysfunktion, på ett sätt som den etablerade inte kan neutralisera. En solnedgångsklausul som den etablerade kan infånga — genom att omdefiniera utlösarvillkoret, genom att ifrågasätta evidensen för förbikopplingens prestanda, eller genom att helt enkelt ignorera det legislativa mandatet — har *c*_solnedgång ≈ 0 och kommer inte att undkomma fällan.

För det tredje måste de grundläggande parametrarna — särskilt grundtakskoefficienten *c*_tak — tillåta förbikopplingen att nå *B*_solnedgång från första början. Om grunden är så dysfunktionell att förbikopplingstaket *B*_max(*D*) ligger under *B*_solnedgång för alla uppnåbara *D*, kan förbikopplingen aldrig utlösa solnedgången, och systemet är dömt till fällan permanent. I sådana fall måste arkitektonisk reform rikta sig direkt mot grunden (genom ett krisfönster eller en exogen chock) snarare än genom en förbikopplingsstrategi.

## B.6 Begränsningar

Modellen som presenteras i detta appendix är minimal. Den abstraherar bort från flera drag hos verklig förbikopplingsdynamik: grundens heterogenitet (dysfunktion är typiskt sett ojämn över domäner, och en förbikoppling kan lätta på trycket selektivt), det strategiska beteendet hos etablerade som avsiktligt kan försämra grunden för att hålla förbikopplingen under *B*_solnedgång, och möjligheten att förbikopplingen själv blir infångad av samma intressen som kontrollerar grunden. Dessa utvidgningar är hanterbara inom samma modelleringsramverk och representerar riktningar för efterföljande arbete. Den föreliggande modellen fångar den första ordningens dynamik som skiljer permanenta från solnedgångskopplade förbikopplingar, och den tillhandahåller det formella underlaget för den konstruktionsprincip som utvecklats i avsnitt 4.2.
