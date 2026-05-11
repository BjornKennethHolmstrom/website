# Del IV: Strukturella observationer

Simuleringen producerar flera fynd som håller över parametervariationer och är förankrade i etablerad reglerteknik. De presenteras här som strukturella resultat, inte som policy-slutsatser.

## Frekvensgapet kan inte stängas genom justering

Det viktigaste fyndet är negativt: det finns ingen parameterinställning för en enskalig arkitektur som stänger dess frekvensgap. Att öka förstärkningen (gain) hos en centraliserad regulator bortom dess latenstak orsakar instabilitet snarare än förbättrad högfrekvensrespons. Att minska förstärkningen hos en endast lokal regulator för att förhindra oscillation i det långsamma bandet minskar samtidigt dess respons på snabba chocker under den nivå som krävs för effektiv stabilisering. Gapet är topologiskt, inte parametriskt.

Detta spelar roll eftersom det intuitiva styrningssvaret på underprestation vanligtvis är att justera parametrar: öka finansieringen, reformera procedurer, lägga till tillsyn, rekrytera bättre personal. Dessa interventioner adresserar den parametriska rymden. De lämnar de topologiska begränsningarna orörda. En centraliserad institution med τ = 12 som får ytterligare resurser och bättre ledarskap förblir en centraliserad institution med τ = 12. Dess frekvensgap kvarstår.

Arkitektonisk reform — att förändra latensstrukturen, informationsvägarna och fördelningen av beslutsbefogenhet — adresserar de topologiska begränsningarna. Parameterreform gör det inte.

## Lagren är kompletterande, inte överflödiga

En naturlig oro kring fraktal arkitektur är att flera styrningslager representerar kostsam överflödighet (redundans): lokala, regionala och globala regulatorer som alla gör variationer av samma sak. Simuleringen visar att så inte är fallet. Varje lager hanterar ett frekvensband som de andra strukturellt inte kan.

Om det lokala lagret tas bort från arkitektur C, hanteras medellånga och långsamma störningar, men snabba chocker producerar exakt det svarsmönster som ses i arkitektur A — fördröjt, enhetligt, underdimensionerat vid krisnoderna. Om det globala lagret tas bort, hanteras snabba och medellånga störningar, men den långsamma driften producerar det oscillationsmönster som ses i arkitektur B. Varje borttagning öppnar ett frekvensgap. Lagren gör inte variationer av samma sak; de gör kvalitativt olika saker som råkar dela samma formella struktur.

Detta har en styrningsimplikation som går stick i stäv med vanliga argument för institutionell reform. Förslag om att eliminera överflödiga förvaltningsnivåer — till exempel att effektivisera genom att ta bort regionala nivåer — kan innebära att man tar bort ett lager som hanterar ett frekvensband som varken lagret över eller lagret under kan nå. Den skenbara överflödigheten är en felidentifiering: vad som ser överflödigt ut från ett statsvetenskapligt perspektiv är funktionellt nödvändigt från ett reglertekniskt.

## Arkitektur A:s instabilitet produceras av dess egna korrigeringar

Ett slående drag i resultaten för arkitektur A är att dess sämsta prestanda inte inträffar under snabba chockhändelser — när dess latens förhindrar ett svar i rätt tid — utan i perioderna omedelbart efter dessa händelser, när dess fördröjda svar anländer och interagerar med ett systemtillstånd som redan delvis har återhämtat sig.

Detta är ingen tillfällighet. Den centraliserade regulatorn beräknar sin korrigeringssignal baserat på systemgenomsnittet vid tiden t, tillämpar den vid tiden t + 12, och systemgenomsnittet har rört sig under tiden. När snabba chocker pressar ned noderna 2 och 7 vid t = 20, registrerar regulatorn en blygsam nationell dipp och börjar förbereda ett nationellt utsänt svar. Vid t = 32 har den snabba chocken delvis lösts upp genom naturlig avklingning, och det (uteblivna) lokala svaret skulle ha påbörjat återhämtningen. Den centraliserade korrigeringen anländer sedan — enhetlig över alla tio noder, dimensionerad för den magnitud som observerades vid t = 20 — till ett system som delvis har självkorrigerat. Den överkorrigerar. Överkorrigeringen observeras sedan vid t + 12 och korrigeras i sin tur, vilket genererar en oscillation som helt och hållet produceras av regulatorns egna interventioner.

Detta är det formella fenomenet känt som självsvängning (hunting): en regulator som ihållande är ur fas med det system den styr genererar endogen oscillation oberoende av yttre störningar. Arkitektur A:s instabilitet i simuleringen är i hög grad självgenererad. Störningarna är utlösaren; oscillationen är regulatorns egna svar på sina egna svar.

## Koppling förstärker arkitekturspecifika misslyckandelägen

Kopplingstermen (β = 0,02) modellerar krissmitta mellan intilliggande noder. Dess interaktion med varje arkitekturs misslyckandeläge är lärorik.

Under arkitektur A sprids de snabba chockerna vid noderna 2 och 7 till intilliggande noder innan det fördröjda centrala svaret anländer, vilket ökar antalet påverkade noder vid tidpunkten för interventionen. Den enhetliga korrigeringen måste nu hantera ett större påverkat område, vilket förstärker överkorrigeringsproblemet.

Under arkitektur B är koppling inte det primära problemet — lokala regulatorer svarar innan smittan har tid att utvecklas. Kopplingstermen förstärker istället oscillationen från långsam drift: när vissa noder börjar oscillera ur fas med driften, överför deras koppling till grannar fasfel, vilket gradvis desynkroniserar nätverket och producerar ökad varians.

Under arkitektur C hanteras koppling på lämplig skala. Snabb smitta begränsas av lokala regulatorer innan den når grannar. Regionala kopplingseffekter absorberas av det regionala lagret. Långsam koppling — det fullständiga systemets gradvisa drift — följs av det globala lagret. Den fraktala arkitekturen matchar effektivt sin inneslutningsrespons med smittans spatiala skala, snarare än att tillämpa en enda inneslutningsstrategi på alla skalor samtidigt.

## Skillnaden i styrinsats är informativ

Arkitektur C kräver ungefär 12 % mer total styrinsats än arkitektur B och ungefär 185 % mer än arkitektur A. Denna kostnad förtjänar att behandlas ärligt.

Skillnaden i insats mellan C och B reflekterar omkostnaden för att upprätthålla tre aktiva styrningslager samtidigt. I styrningstermer motsvarar detta den institutionella kostnaden för regional och global samordningsinfrastruktur — de administrativa lager som lokala institutioner inte kräver. Detta är en verklig kostnad, inte en artefakt från modellen.

Skillnaden i insats mellan C och A reflekterar något annat. Arkitektur A:s låga insats är inte effektivitet — det är otillräcklighet. En regulator som inte svarar på snabba och medellånga störningar använder väldigt lite styrinsats eftersom den inte utför arbetet. Låg insats i ett system som möter flerskaliga störningar är ett symptom på misslyckande, inte en designegenskap. Data över stabilitetsunderskott bekräftar detta: arkitektur A:s låga insats producerar det högsta underskottet med en faktor på nästan fem.

Det lämpliga mätvärdet är inte styrinsats isolerat utan underskott per insatsenhet — uppnådd stabilitet per enhet av styrningskostnad. Enligt detta mått överträffar arkitektur C båda alternativen.

## Fraktal stabilitet är känslig för protokollintegritet

Den fraktala arkitekturens prestanda är beroende av att varje lager opererar inom sitt naturliga frekvensband och inte stör intilliggande lager. I simuleringen framtvingas detta genom design: förstärkningsvärdena och latenserna förhindrar att något lager opererar utanför sin bandbredd.

I verkliga styrningssystem framtvingas inte denna begränsning automatiskt. En kommunfullmäktige som försöker hantera långsamma sekulära trender genom högfrekventa interventioner introducerar oscillationsproblemet oavsett vad de regionala och globala lagren gör. En global institution som försöker hantera lokala kriser med enhetliga policyer introducerar genomsnittsproblemet oavsett den lokala institutionella kvaliteten.

Den fraktala arkitekturens stabilitet kräver protokollintegritet: varje lager måste förbli inom sin naturliga räckvidd. Detta är inte en normativ preferens för subsidiaritet. Det är ett stabilitetskrav. En fraktal arkitektur vars lager bryter mot sina bandbreddsgränser degraderas mot misslyckandelägena hos den enskaliga arkitektur vars överträdelser de mest liknar.

Detta ger en exakt teknisk innebörd åt konceptet subsidiaritet: inte att lokalt alltid är bättre, utan att varje skala bör hantera det som dess latens och signaltrohet tillåter den att hantera, och inte försöka hantera det de inte kan.
