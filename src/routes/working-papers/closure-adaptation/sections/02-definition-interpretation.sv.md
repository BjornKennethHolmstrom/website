## 2. Modelldefinition och styrningstolkning

Vi modellerar ett enskilt styrsystem som ett kopplat dynamiskt system med fem variabler. Variablerna är dimensionslösa, begränsade till \([0,1]\), och representerar aggregerade egenskaper hos systemet snarare än specifika institutionella särdrag. Modellen är avsedd som en minimal abstraktion: den fångar återkopplingsmekanismer som återkommer i många styrningssammanhang utan att göra anspråk på att återge någon särskild institution.

### 2.1 Tillståndsvariabler

| Variabel | Betydelse | Styrningstolkning |
|---|---|---|
| \(U\) | Faktisk olöst miljöosäkerhet | Hur mycket av världens aktuella tillstånd som inte fångas av systemets modeller och procedurer. \(U=0\): fullständigt läsbar; \(U=1\): helt opak. |
| \(B\) | Gränsstyrka / tillslutning | Intensiteten i institutionell separation: regler, gränser, klassificering, övervakning, doktrinär bundenhet. \(B=0\): helt porös; \(B=1\): total tillslutning. |
| \(T\) | Tillitskapacitet | Förmågan att samordna under olöst osäkerhet utan att kräva ytterligare gränstillslutning. \(T=0\): ingen tillit; \(T=1\): full tillit. |
| \(E\) | Utforskande kapacitet | Systemets förmåga att interagera med sin miljö och minska osäkerhet genom lärande, experimenterande och engagemang. \(E=0\): inget utforskande; \(E=1\): maximalt utforskande. |
| \(P\) | Gränspermeabilitet | Graden i vilken information och anpassning kan passera gränser. \(P=0\): opak, impermeabel; \(P=1\): fullständigt transparent och öppen för informationsflöde. |

Den centrala distinktion som introduceras i denna modell är den mellan **gränsstyrka** \(B\) och **gränspermeabilitet** \(P\). En gräns kan vara stark men permeabel – till exempel en karantän som blockerar fysisk rörelse men tillåter data och expertis att flöda – eller stark och impermeabel – till exempel ett totalitärt informationsmörker. Variabeln \(P\) fångar denna andra dimension.

### 2.2 Hjälpstorheter

Definiera **upplevd osäkerhet** \(F\) som

\[
F = \frac{s U}{(1+\lambda T)(1+\mu B)},
\]

där \(s\) är insats-/osäkerhetsmultiplikatorn, och \(\lambda,\mu>0\) är konstanter. Upplevd osäkerhet är systemets interna erfarenhet av osäkerhet. Den minskas både av tillit \(T\) och av gränsstyrka \(B\), även om dessa inte minskar den faktiska osäkerheten \(U\). Detta fångar det välbekanta fenomenet att regeringar ofta bygger murar för att få världen att *kännas* mer förutsägbar, snarare än för att göra den mer förutsägbar.

Definiera det **effektiva gränsundertryckningsblocket** \(Q\) som

\[
Q = (1-P)B.
\]

Detta är den del av gränsstyrkan som faktiskt undertrycker tillit och utforskande. Om permeabiliteten är hög (\(P \approx 1\)) skadar inte ens en stark gräns systemets adaptiva kapacitet. Om permeabiliteten är låg blir gränsen skadlig.

### 2.3 Dynamiska ekvationer

Tidsutvecklingen ges av:

\[
\begin{aligned}
\dot U &= n(1-U) - \alpha E (1-\beta Q) U, \\
\dot B &= \rho_B \, \sigma\!\big(k_B(F-\theta)\big) - d_B B, \\
\dot T &= \rho_T E (1-\beta_T Q) - d_T T - \gamma Q T, \\
\dot E &= \rho_E \, \sigma\!\Big( k_E \big( \frac{\alpha U}{1+\eta Q} - c_E \big) \Big) - d_E E, \\
\dot P &= \rho_P \left( 1 - \sigma\!\big( k_P(F-\theta_P) \big) - P \right),
\end{aligned}
\]

där \(\sigma(z) = 1/(1+e^{-z})\) är den logistiska sigmoidfunktionen, och alla parametrar är positiva.

Varje ekvation har en direkt styrningstolkning.

**Osäkerhetsekvationen.** Termen \(n(1-U)\) representerar det naturliga inflödet av nya störningar, nyheter och miljöförändringar. Den andra termen representerar minskning av osäkerhet genom effektivt utforskande. Gränser minskar utforskandets effektivitet om de är starka och opaka, via faktorn \((1-\beta Q)\). Ett slutet system kan således vara oförmöget att minska sin faktiska osäkerhet även om det känner sig säkert.

**Gränsekvationen.** Gränsinvestering drivs av upplevd osäkerhet: när \(F\) överstiger en toleranströskel \(\theta\) bygger systemet gränser. Sigmoidfunktionen \(\sigma(k_B(F-\theta))\) är en mjuk strömbrytare. Gränser avklingar med hastigheten \(d_B\), vilket representerar institutionell tröghet och automatisk solnedgång. Parametern \(k_B\) styr hur skarpt systemet reagerar på upplevd osäkerhet.

**Tillitsekvationen.** Tillit växer genom utforskande under öppna förhållanden, men endast om gränsen inte är alltför opak. Termen \(\rho_T E (1-\beta_T Q)\) fångar detta: utforskande bygger tillit när det inte blockeras. Tillit avklingar med hastigheten \(d_T\), och eroderas ytterligare av gränsundertryckningsblocket \(Q\) genom termen \(-\gamma Q T\). En opak gräns förstör således aktivt tillit.

**Utforskandeekvationen.** Utforskande utlöses när faktisk osäkerhet är hög i förhållande till en kostnadströskel \(c_E\), men undertrycks av opaka gränser. Sigmoidfunktionen \(\sigma(k_E(\alpha U/(1+\eta Q)-c_E))\) fångar beslutet att utforska: om den förväntade informationsvinsten \(\alpha U\) överstiger kostnaden är utforskandet aktivt. Opaka gränser höjer den effektiva kostnaden för utforskande med en faktor \(1+\eta Q\). Utforskande avklingar också med hastigheten \(d_E\), vilket representerar utmattning, budgetcykler eller institutionell glömska.

**Permeabilitetsekvationen.** Permeabilitet anpassar sig långsamt, med hastigheten \(\rho_P\), som är mycket mindre än de andra hastigheterna. Den tenderar mot ett målvärde \(1-\sigma(k_P(F-\theta_P))\): när upplevd osäkerhet är låg är målet nära 1 (öppenhet); när upplevd osäkerhet är hög är målet nära 0 (opacitet). Tröskeln \(\theta_P\) är skild från \(\theta\), vilket tillåter att gränsernas kvalitet försämras innan systemet nödvändigtvis bygger fler av dem. Denna långsamma ekvation är modellens representation av institutionell tillitserosion, mediefrihet, rättsligt skydd och andra långsamt rörliga styrningsdrag.

### 2.4 Parametrar och standardvärden

För reproducerbarhet anges de parametervärden som används i simuleringarna:

| Parameter | Standardvärde | Beskrivning |
|---|---:|---|
| \(n\) | 0,120 | Naturlig hastighet för osäkerhetsinflöde |
| \(\alpha\) | 1,339 | Utforskandets effektivitet för att minska osäkerhet |
| \(\beta\) | 0,539 | Gränsundertryckningens effekt på osäkerhetsminskning |
| \(s\) | 0,908 | Grundläggande insatsmultiplikator |
| \(\lambda\) | 2,700 | Tillitens minskning av upplevd osäkerhet |
| \(\mu\) | 1,841 | Gränsens minskning av upplevd osäkerhet |
| \(\theta\) | 0,196 | Tröskel för upplevd osäkerhet vid gränsinvestering |
| \(k_B\) | 23,591 | Skärpa i gränsresponsen |
| \(\rho_B\) | 0,154 | Gränstillväxthastighet |
| \(d_B\) | 0,117 | Gränsavklingningshastighet |
| \(\rho_T\) | 0,546 | Tillitstillväxthastighet |
| \(\beta_T\) | 0,766 | Gränsundertryckningens effekt på tillitstillväxt |
| \(d_T\) | 0,067 | Tillitsavklingningshastighet |
| \(\gamma\) | 0,110 | Gränsundertryckningens effekt på tillitsunderhåll |
| \(\rho_E\) | 0,073 | Utforskandets tillväxthastighet |
| \(\eta\) | 2,065 | Gränsundertryckningens effekt på utforskandedrivkraft |
| \(c_E\) | 0,489 | Kostnadströskel för utforskande |
| \(k_E\) | 24,382 | Skärpa i utforskanderesponsen |
| \(d_E\) | 0,059 | Utforskandets avklingningshastighet |
| \(\rho_P\) | 0,02 | Permeabilitetens anpassningshastighet (långsam) |
| \(k_P\) | 20,0 | Skärpa i permeabilitetsresponsen |
| \(\theta_P\) | 0,15 | Tröskel för upplevd osäkerhet vid permeabilitetsförlust |

Tidsenheten är godtycklig. Hastigheterna kan skalas om utan att det kvalitativa beteendet ändras, förutsatt att tidsskalseparationen mellan \(\rho_P\) och de andra hastigheterna bevaras.

### 2.5 Omfattning och begränsningar

Modellen är inte en kalibrerad empirisk modell. Dess syfte är att blottlägga kvalitativa mekanismer som är analytiskt och beräkningsmässigt hanterbara, och att generera testbara hypoteser för mer detaljerade institutionella studier. Variablerna är aggregerade konstruktioner som kondenserar många institutionella särdrag till enskilda tal, och trösklarna och sigmoidfunktionerna är avsiktligt skarpa approximationer av de kontinuerliga, heterogena processerna i verkliga styrsystem. Alla numeriska resultat bör läsas som [R inom modell], och varje översättning till verkliga institutioner som [IP].

Med modellen definierad övergår avsnitt 3 till den analytiska strukturen hos snabb–långsam-dynamiken och de villkor under vilka bistabilitet uppstår.
