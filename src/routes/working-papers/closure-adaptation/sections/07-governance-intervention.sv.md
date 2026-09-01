## 7. Styrningsintervention: konstitutionellt permeabilitetsgolv

Resultaten i avsnitt 4–6 fastställer att tillslutningsfällan är ett robust strukturellt drag hos modellen. En naturlig fråga för Governance as Engineering är om en enkel designregel kan förhindra den. Detta avsnitt prövar en sådan regel: ett **konstitutionellt minimum för gränspermeabilitet** – ett golv \(P_{\min}\) under vilket systemets permeabilitet inte kan falla, ens under en kris.

Experimentet motiveras av observationen i avsnitt 5 att den långsamma permeabilitetsdynamiken fungerar som en buffert mot övergående rädsla. Om denna buffert själv tillåts kollapsa förlorar systemet sin motståndskraft. Ett golv för \(P\) är ett sätt att säkerställa att bufferten inte kan förstöras fullständigt, oavsett hur allvarlig den upplevda osäkerheten blir.

### 7.1 Interventionsdesign

Vi använder enpopulationsmodellen med samma parametrar som i tidigare avsnitt. Systemet startar från den öppna attraktorn vid grundinsatsen \(s=1{,}5\). Vid tiden \(t=100\) appliceras en kombinerad chock under 30 tidsenheter:

- insatsmultiplikatorn höjs till \(s=3{,}0\);
- permeabiliteten tvingas nedåt, men inte under golvet \(P_{\min}\).

Efter chocken återgår \(s\) till \(1{,}5\), och den påtvingade permeabiliteten släpps. Systemet integreras därefter till \(t=400\). Interventionsvariabeln är \(P_{\min}\), som varieras över \(\{0{,}0, 0{,}1, 0{,}2, 0{,}3, 0{,}4, 0{,}5, 0{,}6, 0{,}7\}\).

Simuleringen är deterministisk. Utfallet klassificeras som ”återhämtad” om den slutliga gränsstyrkan \(B\) ligger under \(0{,}2\), och som ”sluten” annars.

### 7.2 Resultat

Tabell 7.1 rapporterar sluttillståndet för varje golvvärde.

**Tabell 7.1: Effekt av ett konstitutionellt permeabilitetsgolv på krisåterhämtning**

| \(P_{\min}\) | Slutligt \(B\) | Slutligt \(P\) | Slutligt \(T\) | Slutligt \(E\) | Utfall |
|---:|---:|---:|---:|---:|---:|
| 0,0 | 1,000 | 0,008 | 0,034 | 0,046 | Sluten |
| 0,1 | 1,000 | 0,100 | 0,053 | 0,052 | Sluten |
| 0,2 | 1,000 | 0,200 | 0,081 | 0,059 | Sluten |
| 0,3 | 1,000 | 0,300 | 0,119 | 0,068 | Sluten |
| 0,4 | 0,149 | 0,671 | 1,000 | 0,177 | Återhämtad |
| 0,5 | 0,148 | 0,695 | 1,000 | 0,179 | Återhämtad |
| 0,6 | 0,147 | 0,697 | 1,000 | 0,179 | Återhämtad |
| 0,7 | 0,147 | 0,700 | 1,000 | 0,179 | Återhämtad |

Figur 7 visar den skarpa övergången mellan permanent slutenhet och fullständig återhämtning.

![Figur 7: Effekt av ett konstitutionellt permeabilitetsgolv på krisåterhämtning. Slutlig gränsstyrka B visas som funktion av golvet P_min. För P_min ≤ 0,3 förblir systemet permanent slutet efter den kombinerade chocken. För P_min ≥ 0,4 återhämtar sig systemet till den öppna attraktorn. Övergången är skarp, vilket indikerar en kritisk tröskel.](/working-papers/images/closure-adaptation/figure7_Pmin_intervention.png)

**Figur 7:** Effekt av ett konstitutionellt permeabilitetsgolv på krisåterhämtning. Slutlig gränsstyrka \(B\) visas som funktion av golvet \(P_{\min}\). För \(P_{\min} \le 0{,}3\) förblir systemet permanent slutet efter den kombinerade chocken. För \(P_{\min} \ge 0{,}4\) återhämtar sig systemet till den öppna attraktorn. Övergången är skarp, vilket indikerar en kritisk tröskel.

Utfallet förändras diskontinuerligt mellan \(P_{\min}=0{,}3\) och \(P_{\min}=0{,}4\). För golv på eller under \(0{,}3\) kollapsar systemet in i den slutna attraktorn och förblir där. För golv på eller över \(0{,}4\) återhämtar sig systemet till den öppna attraktorn, med slutligt \(B \approx 0{,}147\), \(T=1{,}0\) och \(E \approx 0{,}18\). Den kritiska tröskeln är således

\[
P_{\min}^* \in (0{,}3,\ 0{,}4).
\]

Inom modellen är denna tröskel skarp: det är inte fråga om en gradvis förbättring av återhämtningskvaliteten, utan om en bifurkation mellan permanent slutenhet och fullständig återhämtning.

### 7.3 Mekanism

Golvet verkar genom det effektiva gränsundertryckningsblocket \(Q = (1-P)B\). Under chocken stiger \(s\) och \(B\) börjar växa. Om \(P\) tillåts falla nära noll, växer \(Q\) sig stort när \(B\) stiger, vilket snabbt undertrycker tillit och utforskande. När dessa väl gått förlorade förblir den upplevda osäkerheten hög även efter att chocken upphört, och den slutna attraktorn tar över.

Om \(P\) hålls på eller över \(0{,}4\), förblir produkten \((1-P)B\) tillräckligt liten även när \(B\) växer under chocken för att tillit–utforskandeslingan inte ska förstöras. När chocken upphör har systemet fortfarande hög \(T\) och nollskilt \(E\), vilket minskar den faktiska osäkerheten och sänker den upplevda osäkerheten, så att \(B\) kan avklinga tillbaka till sitt värde i det öppna tillståndet.

Det kritiska golvet bestäms av modellens interna kopplingsstyrkor, särskilt parametrarna \(\beta_T,\gamma,\eta\), som styr hur starkt opaka gränser undertrycker tillit och utforskande. Det är inte ett värde valt av normativa skäl; det är den minsta permeabilitet som krävs för att hålla undertryckningsblocket under den tröskel vid vilken den öppna attraktorn förlorar stabilitet.

### 7.4 Styrningstolkning

I styrningstermer motsvarar ett permeabilitetsgolv en klass av institutionella skydd som inte kan upphävas ens under nödlägen. Konkret:

- konstitutionellt skydd för pressfrihet och offentlig information;
- domstolsprövning som inte kan kringgås genom exekutiva dekret;
- obligatoriska solnedgångsklausuler för nödbefogenheter som inte kan förlängas i det oändliga;
- internationella fördragsåtaganden som håller gränser öppna för information och observatörer;
- rättsligt skydd för visselblåsare och oberoende revisorer.

Dessa är mekanismer som håller \(P\) över det kritiska golvet när rädsla annars skulle driva ned det. Modellen antyder att sådana skydd inte bara är normativa preferenser utan **bärande konstruktionskrav**. Utan dem kan en tillräckligt allvarlig kris driva systemet in i en sluten attraktor från vilken återhämtning är svår.

Detta resultat omformulerar en långvarig spänning inom styrningsteorin mellan säkerhet och frihet. I modellen är valet inte mellan säkerhet och öppenhet i allmänhet, utan mellan ett system som kan upprätthålla en miniminivå av informationsflöde under stress och ett som inte kan det. Ett system som offrar sitt permeabilitetsgolv under en kris kan vinna kortsiktig samordning, men till priset av att förlora just den kapacitet – tillit och utforskande – som skulle göra det möjligt att anpassa sig till krisen och återhämta sig efteråt. Golvet är således en form av **institutionell strömbrytare**: det hindrar en övergående överström av rädsla från att förstöra hela systemets adaptiva maskineri.

### 7.5 Relation till tidigare dokument

Permeabilitetsgolvet är en direkt operationalisering av idéer från Paper XVIII, som visade att en regulator kan svetsa igen sin egen gräns bortom en reflexivitetströskel. Golvet är en mekanism för att förhindra denna svetsning: genom att begränsa den långsamma variabeln \(P\) håller det systemet borta från det område i parameterrummet där den slutna attraktorn blir det enda stabila tillståndet.

Det knyter också an till Paper XVI, som hävdade att utforskande består endast genom källtermer som optimeraren inte själv sätter. Ett konstitutionellt golv för permeabilitet är en extern källterm av precis detta slag: det upprätthåller förutsättningarna för utforskande även när systemets omedelbara mål – att minska upplevd osäkerhet – annars skulle förstöra dem.

Slutligen är golvet ett konkret exempel på seriens bredare anspråk att styrningsarkitekturer bör utformas som styrsystem med avgränsade felmoder. Modellen identifierar en specifik felmod – krisinducerad permanent slutenhet – och en specifik designparameter – \(P_{\min}\) – som kan förhindra den.

### 7.6 Begränsningar

Interventionsresultatet är en förutsägelse inom modellen, inte ett empiriskt fynd. Det kritiska värdet \(P_{\min}^*\) beror på modellens parametrar och chockens storlek. I en rikare modell med heterogena aktörer, strategiskt beteende eller mer realistisk koppling skulle tröskeln kunna vara mindre skarp eller samverka med andra variabler. Modellen antar också att golvet kan upprätthållas perfekt; i praktiken kan konstitutionella skydd eroderas, ignoreras eller omtolkas under tryck. Resultatet bör därför läsas som ett principbevis: det finns en klass av interventioner som kan förhindra tillslutningsfällan, och golvet är en plausibel kandidat. Empirisk prövning i verkliga styrsystem ligger utanför detta dokuments räckvidd.

### 7.7 Sammanfattning

Ett konstitutionellt minimum för gränspermeabilitet är en enkel och effektiv intervention i modellen. Vid \(P_{\min}=0{,}4\) förhindrar det helt den permanenta slutenhet som annars följer på en allvarlig kombinerad chock, medan lägre golv tillåter kollaps. Mekanismen är bevarandet av tillit–utforskandeslingan genom krisen. Resultatet ger formellt stöd åt idén att transparensskydd inte bara är liberala värden utan väsentliga styrparametrar för adaptiv styrning. Nästa avsnitt diskuterar de bredare designprinciper och öppna frågor som modellen reser.
