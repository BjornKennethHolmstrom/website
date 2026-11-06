## 5. Varför exponering inte garanterar lärande

Det tredje svaret, lärandet, ingick inte i det konfirmatoriska testet. Det studerades i en rad explorativa grindar med förhandsvalda utvecklingsvärldar och exakta beräkningar där det var möjligt. Frågan är enkel: om planeraren misstänker att retention kan finnas, kan den få reda på det i tid för att kunskapen ska löna sig?

### 5.1 Ett nollfall inbyggt i modellen [R, strukturellt]

Utan våtmark uppströms är övergångslagarna identiska med och utan retention (§2.2). Detta gäller alla undersökta oexponerade tillstånd–handlingspar, i varje värld och variant.

För den specifika observationslikelihood som användes i inferensgrindarna är logaritmen av Bayesfaktorn mellan ”retention finns” och ”retention saknas” exakt noll på sådana historiker. Det är ett påstående om just den likelihooden. Det visar inte att fullständiga historiker saknar information under varje möjlig observationsmodell.

### 5.2 En fälla som policyn själv upprätthåller [R, explorativt]

En *exponeringsfälla* uppstår när en utelämnad mekanism spelar roll för beslutet, men planerarens egen policy aldrig leder till ett tillstånd där mekanismen kan upptäckas. Under passiv drift identifierade exponeringsstudien **sju** exakta sådana fällor i sex utvecklings- och stresstestvärldar: sex för retention och en för synkronisering.

I världen d05 ökar en modell som utelämnar retention den verkliga U1-kostnaden med **2,36** vid $\psi=0$. Samtidigt ger den planeraren noll beläggning av tillstånd där retention kan verka. Hur länge den än fortsätter ser den därför inga belägg som skulle kunna rätta modellen: de egna besluten håller beläggen utom räckhåll.

**[IP — Observerbarheten beror på policyn.]** Om ett modellfel går att upptäcka är inte enbart en egenskap hos världen och sensorerna. Det beror också på den policy som körs. En planerare kan upprätthålla sin egen blinda fläck.

### 5.3 Exponering är ännu inte evidens [R, explorativt]

Anta att planeraren medvetet återställer våtmark under $k$ år — en *sondering* — och sedan förbinder sig till en plan. Vi byggde en exakt bayesiansk lärandealgoritm för denna situation. Den känner till två hypoteser, observerar hela tillståndet utan brus, uppdaterar sin posterior exakt och väljer en fortsättning vid år $k$. Upplägget är medvetet gynnsamt och besläktat med bayesianskt adaptiv planering (Guez, Silver & Dayan, 2012).

**[R, strukturellt]** Ett enda sonderingsår kan inte ge denna lärandealgoritm information: den första övergången börjar i ett oexponerat tillstånd, så posteriorn är identisk med priorn på varje historia.

**[R, explorativt]** Längre sonderingar skapar exponering långt innan de skapar användbar evidens. I d05 exponerar sonderingen retention med sannolikheterna 0,77, 0,95 och 0,99 vid $k=1,2,3$, men sannolikheten att posteriorn alls har ändrats är 0, 0 och 0,15. I d00 kommer evidensen tidigare (0,47 vid $k=2$); i d02 kommer den först vid $k=3$ (0,36). Se figur 4.

![Exponering och lärande](figures/wp1_fig4_exposure_learning_sv.png)

*Figur 4.* Sannolikheten att retention är exponerad vid beslutstillfället (A), respektive att posteriorn då har ändrats (B). Gemensam sondering, retention närvarande. Källa: `e1lite_cells.csv`. [R, explorativt; del B vid $k=1$ är strukturellt]

### 5.4 Vad lärande skulle kunna vara värt och vad läraren faktiskt får [R, explorativt]

Tre jämförelser i studierna av lärandets värde måste hållas isär.

**Allvetande från början (O\*).** Denna planerare vet redan vid start om retention finns. Dess fördel jämfört med passiv drift, $C(P0)-C(O^*)$, är 0,92 / 1,84 / 2,76 U1 i d00 och 0,59 / 1,18 / 1,77 U1 i d05 när den hypotetiska sannolikhetsvikten för retention ökar från 0,25 via 0,50 till 0,75. Fördelen är noll i de två kontrollvärldarna där retention saknar betydelse. Det är en gräns relativt den passiva policyn, inte ett kanoniskt EVPI-värde (Howard, 1966) och inte vinsten av någon sondering.

**Oraklet efter en fast sondering (X\*).** X\* måste först genomföra en förutbestämd sondering under $k$ perioder och får sedan perfekt information innan det fortsätter. Jämfört med en begränsad meny av fasta policyer, B_extended, som även omfattar sonderingarna utan lärande, har X\* positiv nettomarginal i bara **10 av 54** primära celler i de tre världar där retention spelar roll (7 av 54 i en känslighetsvariant). Med de två kontrollvärldarna inräknade blir talen 10/90 och 7/90. Nämnarna svarar på olika frågor. X\* är ett tak *för sin fixerade sondering*, inte en övre gräns för alla adaptiva policyer.

**Den genomförbara läraren.** Den exakta algoritmen som sonderar och sedan väljer en fast fortsättning tar till vara högst omkring en femtedel av X\*:s marginal. Kvoten $\kappa$, relativt X\*:s marginal över B_extended, är som bäst 0,107 i huvudvarianten och 0,179 i känslighetsvarianten. Det deklarerade kriteriet ($\kappa\ge0,5$) klaras inte i någon av de nio celler där kvoten är definierad. Läraren slår B_extended i 2 av 54 celler, båda med ett enda sonderingsår och **utan någon posterioruppdatering** (figur 5).

En uppdelning av algoritmens vinster visar att nästan hela nyttan kommer från **tillståndsberoende val av fortsättning**, med priorn och det uppnådda tillståndet som underlag, och inte från att övertygelsen om retention ändras. Posterioruppdateringen är värd högst 0,069 U1 i någon cell och utgör 2,1 % av de större vinsterna.

![Orakel och genomförbar lärandealgoritm](figures/wp1_fig5_oracle_vs_learner_sv.png)

*Figur 5.* Nettomarginalen för oraklet X\* efter fast sondering över den begränsade menyn B_extended, jämfört med lärarens, i 54 primära celler där retention spelar roll. Detta är **programmens nettomarginaler mot en begränsad meny**, inte isolerat informationsvärde. Lärarens positiva marginaler vid $k=1$ innehåller ingen posterioruppdatering. Källa: `e1lite_cells.csv`. [R, explorativt]

**[IP — Informationsvärde är inte samma sak som värdet för en genomförbar lärandealgoritm.]** Det teoretiska värdet av att känna till en mekanism, även inom en given sondering, kan vida överstiga vad en enkel exakt algoritm tjänar under samma tidshorisont. Skillnaden beror inte på dålig inferens utan på tid, exponering och bindande beslut: evidensen kommer sent, sonderingen kostar och den återstående horisonten är kort.

Detta överensstämmer med arbetsrapport 0:s slutsats att information kan vara värdefull även när det inte lönar sig att hämta in den. Här är kostnaden inte ett produktionsuppehåll, utan den fysiska investering som krävs för att mekanismen alls ska bli synlig. Resultaten gäller en algoritm, en jämförelsemeny, brusfri observation, ett enda bindande fortsättningsbeslut och utvalda världar. De visar inte att lärande aldrig kan löna sig.

