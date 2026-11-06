## 3. Vad den konfirmatoriska jämförelsen visar

### 3.1 Ommodellering gav lägre genomsnittlig kostnad [R, konfirmatoriskt]

Med den hypotetiska lika viktningen hade REP(R) lägre populationsgenomsnittlig U1 än COMP. Medelskillnaden var **−1,112 U1** (95-procentigt konfidensintervall −1,737 till −0,487; $t(39)=-3.60$, $p=0.00089$).

Nollhypotesen om ingen medelskillnad förkastas på den deklarerade nivån. Den planerade precisionen uppnåddes däremot inte: intervallets halvbredd var **0,625**, mot målet 0,50. Standardavvikelsen i testsamplet (1,954) var betydligt större än under utvecklingen (1,138), och stickprovet utökades inte.

**Världarna skiljer sig åt** (figur 1): 30 av 40 gynnar REP; i en fjärdedel är kompensation lika billig eller billigare. Ytterligheterna är −6,10 (t39) och +4,92 (t18). Medianen är −0,382 och skevheten −0,22.

Två i förväg deklarerade deskriptiva kontroller pekar åt samma håll som t-intervallet: ett bootstrap-percentilintervall [−1,705, −0,518] och ett Wilcoxon-test med $p=1.1\times10^{-4}$.

![Primär kontrast per testvärld](figures/wp1_fig1_primary_delta_sv.png)

*Figur 1.* $\Delta_i$ för 40 testvärldar, sorterade med medelvärdet markerat. Det skuggade bandet är ett 95-procentigt **konfidensintervall för medelvärdet**, inte ett intervall som ska innehålla alla enskilda världar. Källa: `f0c_confirmatory.json`. [R, konfirmatoriskt]

### 3.2 Den ekologiska sidan av avvägningen [R, konfirmatoriskt]

Den förhandsdefinierade sekundära testfamiljen visar den andra sidan av jämförelsen.

| Kontrast | Medelvärde | 95 % KI (ojusterat) | Holm-justerat $p$ | Lägre på detta kriterium |
|:---|---:|:---|---:|:---|
| $\Delta J_{U2}$ (kostnadsenheter) | −1,061 | [−1,734, −0,388] | 0,0028 | REP |
| $\Delta J_{def}$ (underskottsenheter över elva perioder) | +6,362 | [+4,235, +8,489] | $1.3\times10^{-6}$ | COMP |
| $\Delta J_{stock}$ (negativ terminal våtmarksnivå) | +1,543 | [+1,056, +2,030] | $5.6\times10^{-7}$ | COMP |
| BOTH(R) − REP(R), $J_{U1}$ | +1,603 | [+0,992, +2,214] | $9.6\times10^{-6}$ | REP |

Konfidensintervallen är vanliga 95-procentiga intervall och har **inte** justerats för multipla tester. Endast p-värdena är Holm-justerade.

För det fördelningskänsliga kostnadskriteriet är REP:s fördel ungefär densamma som för U1. COMP ger mindre ackumulerat våtmarksunderskott och större våtmarksbestånd vid horisontens slut. Att både anta mekanismen och omvärdera (BOTH) kostar mer U1 än att bara anta den. BOTH:s ekologiska utfall ingick inte i det testet.

![Förhandsdefinierade kriteriekontraster](figures/wp1_fig2_criterion_contrasts_sv.png)

*Figur 2.* Förhandsdefinierade kontraster, var och en på sin egen skala. Källa: `f0c_confirmatory.json`. [R, konfirmatoriskt]

### 3.3 Policypaket jämförs, inte modellreparation isolerat [IP]

Två förhållanden skyddar mot en frestande feltolkning.

**REP är ett antagande, inte en upptäckt.** I den halva av den hypotetiska viktningen där retention saknas planerar REP med fel modell och har ändå lägre U1 än COMP (medelskillnad för grenen −1,125, 95 % KI −2,126 till −0,124; deskriptiv undergrupp). Att ha fel om världen var enligt U1 billigare än att betala för det ekologiska målet.

En explorativ dekomposition av de 40 testvärldarna (bilaga B, T4) förklarar mönstret: REP:s kostnad för felaktig representation i den grenen är **+1,765 U1**; COMP:s målpris är **+2,890**. I utvecklingsvärldarna var ordningen densamma (1,06 respektive 2,42). Resultatet handlar därför i hög grad om målkonflikten, inte om att planeraren *hittade* rätt modell.

**Kontrasten ändrar två saker.** Steget från COMP till REP lägger till en mekanism i modellen *och* tar bort det ekologiska målet. Den konfirmerade medelskillnaden gäller detta paket. Den kan inte tillskrivas bättre modellering ensam och säger inget om huruvida *investeringar i* bättre modeller är mer lönsamma än investeringar i målutformning eller information. Sådana investeringar modellerades inte.

### 3.4 Vad avvägningen fastställer och inte fastställer

**[R, härlett ur konfirmatoriska tester]** För den förhandsdefinierade jämförelsen REP(R) mot COMP under den hypotetiska lika viktningen pekar medelskillnaderna i olika riktningar för namngivna kriterier: REP har lägre U1 och U2, medan COMP ger lägre ackumulerat underskott och högre terminalt våtmarksbestånd. Ingen av dessa två policyer är entydigt bättre. Det är en logisk sammansättning av fyra testresultat, inte ett ytterligare test.

Detta gäller **inte alla strategier**. I de explorativa tabellerna har den heuristiska MIX(R, q) lägre lika viktad genomsnittlig U1 än båda rena F0-valen: 6,465–6,638, jämfört med 6,967 när retention utelämnas och 6,924 när den antas (bilaga B, T5). REP slår alltså COMP enligt U1 men är inte den U1-bästa av de utvärderade policyerna. MIX är emellertid inte en korrekt trosbaserad policy för en fast men okänd värld, och jämförelsen är explorativ.

