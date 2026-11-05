## 1. Problemet som föregår optimeraren

Ett optimeringsproblem tycks börja med en målfunktion, begränsningar och möjliga handlingar. I ett sammankopplat system börjar det tidigare: med val om vilka konsekvenser som ska räknas, vilka beroenden som ska representeras, hur osäkerhet ska uttryckas och vilka framtida behov det är värt att förbereda sig för. Varje utelämnad mekanism kan snedvrida prognoser. Varje utelämnad måldimension kan snedvrida utvärderingen. Varje obeaktad informationskostnad kan få lärande att framstå som antingen gratis eller omöjligt.

En regulator behöver inte vara beräkningsmässigt inkompetent för att misslyckas. Den kan lösa sitt formella problem exakt och ändå prestera dåligt i den verkliga världen. Detta är utgångspunkten för serien **Systemisk optimering**, som kompletterar *Governance as Engineering* (GaE) men ställer en annan fråga. GaE handlar om den arkitektur genom vilken institutioner observerar, beslutar, samordnar och anpassar sig. Systemisk optimering frågar hur själva *optimeringsproblemet bör konstrueras och utvärderas*, särskilt när sammankopplade utfall, framtida preferenser eller världsmodellen är osäkra.

Forskningsprogrammets vägledande fråga är mer ambitiös än resultaten i denna rapport: **vilka strukturella egenskaper hos sammankopplade system visar när ömsesidig nytta är möjlig, och hur bör kunskapen om dessa egenskaper förändra optimeringens utformning?** De föreliggande experimenten undersöker förutsättningar. Endast A1:s explorativa kartläggning av fasta åtgärdsprogram behandlar ömsesidig nytta direkt, och då enligt en strikt, modellspecifik definition med separata redovisningsposter. Inget av experimenten skattar effekten av verkliga styrningsreformer.

Rapporten är en syntes snarare än tre separata experimentrapporter. Den redovisar även negativa resultat, tester som förblir inkonklusiva och sätt på vilka själva diagnostiken brister. Siffrorna från A1, B och B5 **slås inte ihop**: de avser olika simulerade världar, utfall och nämnare. Det vetenskapliga bidraget är jämförelsen mellan felmekanismer och möjliga motåtgärder, inte en gemensam numerisk effektstorlek.

### 1.1 Fyra företeelser som inte får blandas ihop

Låt ett beslutsproblem med ändlig tidshorisont schematiskt beskrivas av

$$
\mathcal{D}=(\mathcal{S},\mathcal{A},P,u,\Gamma,\mathcal{I},\mathcal{C}),
$$

där $\mathcal{S}$ och $\mathcal{A}$ är tillstånd och möjliga handlingar, $P$ är övergångslagen, $u$ utvärderingskriteriet, $\Gamma$ beskriver osäkra framtida mål där detta är relevant, $\mathcal{I}$ är den information planeraren förfogar över och $\mathcal{C}$ beskriver begränsningar och kostnader för informationsinhämtning. Den praktiskt verksamma planeraren arbetar i stället med ett representerat problem $\widehat{\mathcal{D}}$. Den väljer en policy $\pi(\widehat{\mathcal{D}})$, som därefter utvärderas mot den verkliga uppgiften.

Vi skiljer mellan fyra möjliga brister:

1. **Målfunktionens lämplighet:** uttrycker den optimerade målfunktionen utvärderingskriteriet på ett ändamålsenligt sätt? En kompletterande term kan förbättra det faktiska utfallet utan att själv ingå i utvärderingskriteriet.
2. **Modellens lämplighet:** fångar planerarens övergångslag den kausala struktur och de parametrar som bestämmer konsekvenserna?
3. **Kunskap om framtida mål:** vet planeraren vilka framtida mål som är möjliga eller sannolika?
4. **Lärande- och anpassningsförmåga:** kan planeraren skaffa relevant kunskap och handla utifrån den innan beslut blir oåterkalleliga, och till vilken kostnad?

Detta är analytiska distinktioner, inte påståenden om statistiskt oberoende eller en fullständig taxonomi. Ett verkligt institutionellt misslyckande kan involvera alla fyra samtidigt. Experimenten skiljer dem avsiktligt åt, just eftersom motåtgärderna inte bör antas vara utbytbara.

### 1.2 Jämförelsestandarden

För en given verklig uppgift betecknar $W(\pi)$ det förväntade värdet av policyn $\pi$, med konventionen att högre är bättre. För A1, som minimerar den totala utvärderingskostnaden $U$, sätter vi $W=-U$; för B och B5 betecknar $W=V$ redan en belöning. Om $\pi^*$ är optimal givet den information som uttryckligen är tillgänglig i referensvillkoret, är den realiserade alternativförlusten **för en policy med samma eller mindre information än referensen**

$$
\mathcal{R}(\pi)=W(\pi^*)-W(\pi)\ge 0.
$$

Avgörande är att referensens optimala planerare, *oraklet*, skiljer sig mellan experimenten. A1:s orakel känner den sanna övergångsmodellen. B:s informerade planerare känner den sanna **fördelningen** av framtida mål, men inte vilket mål som kommer att förverkligas. B5 redovisar separat värdet av att känna denna fördelning, dess stöd eller det realiserade målet. Den gemensamma prövningen är inte om en sofistikerad planerare slår en avsiktligt svag. Den är om en föreslagen intervention tillför värde jämfört med en kontroll som isolerar just dess mekanism.
