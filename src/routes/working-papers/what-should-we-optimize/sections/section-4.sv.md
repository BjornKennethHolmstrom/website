## 4. Experiment B: framtida mål kan förändras

### 4.1 Möjligheter som mått och som beslutsregel

B tar bort modellosäkerheten för att isolera ett annat problem. Gemenskapen har tre produktiva förmågor, en förnybar resurs, reserver och en miljöregim: **1 080 fysiska tillstånd**. Under en inledande fas eftersträvar den ett känt, aktuellt mål. Vid tidpunkten $\tau\in\{3,5,7\}$ avslöjas ett framtida mål som dragits från en fördelning över **30 mål**. Målet är därefter känt, och alla planerare anpassar sig optimalt under resten av en tidshorisont på 13 perioder. Den informerade referensen känner fördelningen före $\tau$, men inte vilket mål som kommer att realiseras. Den kortsiktiga baslinjen antar att det nuvarande målet består.

Studien jämför fyra sätt att värdera framtida möjligheter utan att känna den sanna fördelningen:

- **M-reach**: logaritmen av antalet livskraftiga nåbara tillstånd (resurs $R\ge1$) inom den i piloten valda tidshorisonten $H_M=4$ perioder.
- **M-div**: antalet olika nåbara förmågeprofiler.
- **M-rec**: återhämtningsförmågan hos resursbeståndet efter en standardiserad chock.
- **M-AUP**: en penalitet för förändringar i uppnåeliga värden hos slumpmässiga hjälpfunktioner för belöning, inspirerad av *attainable utility preservation*.

Huvudtestet frågade **inte** enbart om ett mått överträffade kortsiktighet. Det krävde att varje mått dels återvann minst 5 % av gapet mellan informerat och kortsiktigt beslutsfattande, dels överträffade en reservbaserad policy som avstod lika mycket värde från det aktuella målet med minst 5 % av samma gap. Den andra jämförelsen är viktig: ett system som bara håller inne resurser kan se ”öppet” ut utan att visa något mer än en välbekant sparstrategi.

### 4.2 Resultat: prediktivt mått, ineffektiv optimerare [R]

**Vid den frysta måttvikten $\bar\lambda=0.25$ klarade inget av de fyra måtten det förhandsregistrerade gemensamma testet HB1.** Förmågemångfald återvann **14,6 %** av gapet mellan informerad och kortsiktig policy jämfört med den kortsiktiga policyn, men överträffade sin reservkontroll med matchad alternativkostnad med bara **0,6 % av gapet**, klart under marginalen 5 %. Nåbarhet återvann **4,6 %** och låg något under sin reservkontroll. AUP återvann **2,7 %**; återhämtningsförmåga förlorade i själva verket cirka **49,6 %** av referensgapet jämfört med kortsiktighet. Samtliga fyra misslyckades också i den separata jämförelsen HB2 med en planerare som hade en specificerad felaktig föreställning om framtida mål.

Samtidigt **stödde tillståndsrangordningstestet HB3 både nåbarhet och mångfald**: båda hade en stratifierad genomsnittlig Spearmankorrelation på omkring **0,730** med *det marginella värdet av anpassning till framtida mål*, efter matchning av tillstånd avseende reserver, resurser, regim och ungefärligt värde för det aktuella målet. Korrelationerna var dessutom nästan omöjliga att skilja åt. De bör inte tolkas som evidens för två oberoende mekanismer.

| Planerare i B | Andel av värdegapet mellan informerad och kortsiktig policy som återvinns | Evidensroll |
|:---|---:|:---|
| Likformig föreställning om 30 tänkbara mål | **0,690** | Explorativ kontroll med explicit målföreställning |
| Specificerad felaktig föreställning på primär felnivå | **≈0,45** | Explorativ jämförelse |
| Förmågemångfald (M-div) | 0,146 | Misslyckas med gemensamt HB1; stöder HB3 som mått |
| Minimaxånger över mål | 0,108 | Explorativ robust jämförelse |
| Nåbarhet (M-reach) | 0,046 | Misslyckas med gemensamt HB1; stöder HB3 som mått |
| Bevarande av uppnåelig nytta (M-AUP) | 0,027 | Misslyckas med gemensamt HB1 |
| Återhämtningsförmåga (M-rec) | −0,496 | Skadlig i genomsnitt |

**Kontrollen med likformig föreställning** är inte bara ännu en representation av allmän öppenhet. Den specificerar en föreställning om *vilka mål som är tänkbara*, även om de får lika vikt. Att den återvinner 69 % antyder därför att en uttrycklig relevant målrymd kan vara mycket mer handlingsvägledande än att maximera ett oviktat strukturellt antal. Experimentet visar inte att en likformig föreställning slår varje lika felaktig koncentrerad föreställning; det faktiska fördelningsavståndet hos jämförelsen varierar mellan världarna.

Distinktionen kan begreppsligt generaliseras. Anta att ett system har många möjliga framtida handlingar. Antalet sådana handlingar är inte detsamma som deras förväntade värde. Deras betydelse beror på vilket framtida mål som förverkligas, hur mycket varje handling bidrar till det målet och vad det kostar att bevara motsvarande förmåga. Ett mått kan rangordna fysiska tillstånd väl efter deras potential men ändå ge en dålig marginalsignal för valet av handlingar i dag.

**[IP — Skillnaden mellan mått och mål.]** En statistik kan vara giltig som *diagnos av möjligheter* utan att vara lämplig som *belöning för att skapa möjligheter*. Att förvandla en användbar indikator till en målfunktion innebär ett ytterligare kausalt påstående om beslutsincitament; det följer inte gratis av en korrelation.

**Viktkänslighet och reservationer om målstödet.** En explorativ känslighetsanalys med $\bar\lambda=1.0$ höjer M-reachs återvinning till cirka 0,279, men resultatet **matchades inte mot reservens alternativkostnad** vid denna vikt. En starkare vikt skulle kanske klara HB1, kanske inte. Vid $\bar\lambda=0.05$ ligger måtten inom ungefär ±0,03 av gapet. I B är listan med 30 mål **exakt den sanna fördelningens stöd**. En likformig prior har alltså en särskilt gynnsam specifikationsfördel; B5 varierar detta stöd.

### 4.3 Begränsningar och motexempel

B innehåller världar där specialisering lönar sig, oanvända förmågor förfaller och framtida mål knappt förändras. De explorativa kartorna visar att mångfaldens relativa värde minskar när specialiseringens avkastning eller förmågeförfallet ökar. Nåbarhet med obegränsad positiv sannolikhet korrelerar positivt med marginellt optionsvärde, medan en variant som begränsas till vägar med hög sannolikhet, vid sin specifika övergångströskel, korrelerar negativt. Det är en varning mot att likställa *sannolika vägar* med *värdefulla alternativ*, inte ett bevis för att sällsynta tillstånd bör dominera planeringen.

Experimentets gynnsamma antagande är att alla planerare kan anpassa sig **perfekt när det framtida målet avslöjas**. Det gör bevarade handlingsalternativ särskilt användbara. Experimentet antar också att alla tänkbara mål, aktiviteter och handlingar finns i modellen från början. Det kan inte testa förmågan att *skapa* nya möjligheter, omdefiniera mål genom överläggning eller upptäcka aktiviteter utanför det ursprungliga tillståndsrummet. Det negativa resultatet för dessa fyra formuleringar är inte en sats om att möjlighetsbevarande aldrig fungerar.

Tidigare forskning erkänner redan vikten av att bevara handlingsalternativ och hantera irreversibilitet. Teorin om realoptioner tillskriver väntan på information ett värde (Arrow & Fisher, 1974; Dixit & Pindyck, 1994). Relativ nåbarhet och bevarande av uppnåelig nytta erbjuder formellt olika mått för att motverka oönskade bieffekter (Krakovna et al., 2019; Turner, Hadfield-Menell & Tadepalli, 2020). B är ett avsiktligt avgränsat jämförande experiment, inte ett anspråk på att ha uppfunnit idén att bevarade handlingsalternativ kan vara viktiga.

**Kontrolljämförelse.** Reservpolicyn med matchad alternativkostnad följer i stort sett samma tertilmönster: dess återvinning förändras parallellt med M-div när specialiseringsavkastning och förmågeförfall varierar (exempelvis ungefär 0,188/0,124/0,114 jämfört med M-divs 0,201/0,127/0,118 efter specialiseringstertil). Detta villkorliga mönster bör därför inte tillskrivas just målfunktionen för strukturell mångfald.
