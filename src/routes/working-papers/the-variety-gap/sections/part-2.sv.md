### Del II — Optimeringens vändning: mål, observationer och beslutsregler

#### 2.1 Skilda komponenter, villkorad koppling

Låt $x_t$ beteckna tillståndet, $y_t$ en observation från en observationsmodell, $h_t$ tillgänglig historik, $u_t$ en tillåten handling och $\pi$ en policy som avbildar tillgänglig information på handlingar. Målfunktionen $J(\pi)$ utvärderar den resulterande banan. En kausal modell förutsäger handlingarnas konsekvenser. Ingen av definitionerna likställer målfunktionen med observationsmodellen.

Betrakta två lika sannolika tillstånd och två handlingar. En skalär nyttostorhet är ett om handlingen motsvarar tillståndet och noll annars. Utan informativ signal är högsta förväntade nytta $1/2$; med perfekt signal är den ett. Målfunktionen är oförändrad. Omvänt behöver en ytterligare målterm inte ge regulatorn en ny signal.

En särskild arkitektur kan uttryckligen välja sensorer efter sitt mål, till exempel genom att finansiera enbart indikatorer på en instrumentpanel. Då kan prioriteringar förändra observationskapaciteten. Detta är ett modellantagande eller en empirisk hypotes om allokering, inte en identitet.

#### 2.2 Dimensionalitet, information och beslutsvärde

Ett mål kan vara en skalär nytta över många egenskaper, en vektor av mål eller ett beslutsproblem med restriktioner. Att räkna termerna är inte detsamma som att räkna oberoende observationer eller mäta deras informationsinnehåll. Rang är meningsfull för en specificerad linjär avbildning, inte som ett allmänt antal värden. En skalär kodning kan bevara flera diskreta distinktioner, och en vektor av starkt redundanta indikatorer kan bevara mycket lite. Även adekvata observationer kan slösas bort av en dålig policy. I dynamiska sammanhang kan historiken över observationer och ingrepp identifiera tillstånd som inte mäts direkt (Appendix A).

Korta tidshorisonter och hög diskontering kan ge framtida konsekvenser mindre betydelse i besluten. Detta är egenskaper hos utvärdering och planering; de innebär inte i sig minskad sensorbandbredd.

#### 2.3 Nödvändig variation för specificerade uppgifter

Den ursprungliga rangolikheten överlever under antagandena i Appendix A. I en brusfri statisk additiv modell, med linjärt störningsrum $D$, tolererat delrum $L$ och observationsmatris $C$, kräver framgångsrik reglering

$$\operatorname{rank}(C|_D)\geq\dim D-\dim(D\cap L)\geq\dim D-\dim L.$$

Detta är ett nödvändigt villkor, inte i allmänhet tillräckligt: observerade riktningar måste vara inriktade mot betydelsefulla störningar. Med tillräckligt fria korrigeringar är det starkare villkoret $D\cap\ker C\subseteq L$ nödvändigt och tillräckligt. Vilka avvikelser som tolereras och vilka handlingar som är tillåtna måste specificeras. Matematiken avgör inte vilka samhällsvärden som är legitima.

#### 2.4 Goodhart, Ashby och policyberoende exponering

Den korrigerade Rapport XX skiljer en omvänd ordning mellan proxy och mål från en kollapsad distinktion. En proxy kan slå samman en betydelsefull distinktion utan att någon strikt negativ ordningsrelation finns i den möjliga utfallsmängden; då uppstår en risk vid lika proxyvärden. En negativ ordningsrelation möjliggör skada men visar inte att optimeringen följer den banan. Ingen av egenskaperna är identisk med ett observationsfel.

En möjlig villkorad kedja är: mål och incitament påverkar policy; policy förändrar exponering för tillstånd och ingrepp; exponering förändrar tillgänglig evidens; evidens påverkar lärande och senare beslut. Kedjan kan fungera med oförändrade sensorer. Den kan också gå via ändrade sensorbudgetar, men det ytterligare steget kräver evidens. Exponering räcker inte för lärande om observationslikelihooden eller modellklassen inte kan skilja alternativen åt. Bättre mål är inget universellt botemedel: instrumentellt miljöskydd, stående buffertar, oberoende revisioner eller förbättrad inferens kan räcka under vissa förhållanden.

Om två hypoteser inducerar identiska fördelningar över tillgängliga historiker under en specificerad policy kan inget test baserat på historikerna skilja dem bättre än enbart priorn. En annan möjlig policy kan inducera olika fördelningar. Detta är policyrelativ identifierbarhet, inte evidens för att ett visst mål orsakar förlusten. Appendix C testar inte denna lärandemekanism.

#### 2.5 Relaterad forskning

Ashby (1956) och Conant och Ashby (1970) ger den kybernetiska bakgrunden. Goodhart (1975), Manheim och Garrabrant (2018) samt Skalse m.fl. (2022) behandlar mät- och proxyproblem; Zhuang och Hadfield-Menell (2020) analyserar utelämnade egenskaper under explicita resursbegränsningar. Rapport XIV diskuterar dual reglering och persistent excitation. Rapport XXIV undersöker policyberoende exponering i en särskild modell av en inlärd observatör. Rapport XXVII undersöker beslutsrelevant inriktning i ett löst reglerproblem. Detta är relaterade mekanismer, inte evidens för en universell kollapslag.

Systemisk optimering WP1 (§§2.2, 5.1–5.3) ger ytterligare en modellspecifik illustration: utan en uppströms våtmark påverkar retentionsmekanismen inte övergångarna; den rapporterade logaritmiska Bayesfaktorn noll gäller den utvärderade observationslikelihooden, inte varje möjlig historik eller likelihood. De sju exponeringsfällorna gäller den stationära passiva operatören. Sondingrepp kan exponera retention utan att posteriorn förändras tillförlitligt. Paketkontrasten är uttryckligen sammansatt (§2.4). Detta stöder åtskillnaden mellan exponering och inferens, inte att mål likställs med observation eller att breddade mål återställer synförmågan.

---
