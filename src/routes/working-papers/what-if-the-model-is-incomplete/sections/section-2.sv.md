## 2. Vad som representeras, optimeras och observeras

### 2.1 Översvämningsmodellen

Modellen är A1:s system med tre kommuner, med oförändrad lösare, redovisning och utvärderingskriterium. Två kommuner ligger uppströms och en nedströms. Vi kallar dem Up1, Up2 och Dn för att undvika sammanblandning med kriterierna U1 och U2.

Det finns totalt **31 104 tillstånd**. De beskriver varje kommuns budgetnivå och skyddskapacitet mot översvämningar, de två uppströmskommunernas våtmarksnivåer $w_i\in\{0,1,2\}$ och ett vått eller torrt väderregimläge.

I var och en av elva perioder kan uppströmskommunerna avstå från åtgärder, bygga skydd eller återställa våtmark. Kommunen nedströms kan avstå, bygga eller samfinansiera återställning uppströms. En regional stödfond har alternativet $o\in\{0,1\}$, som väljs en gång mot en avgift. Regnet har tre nivåer i vartdera uppströms avrinningsområdet.

**Kriteriet U1** omfattar utgifter och avgifter till stödfonden, kvarvarande översvämningsskador efter stödinsatser, påföljd för budgetunderskott och monetariserad skada samt ett terminalt restvärde. **U2** lägger till en påföljd för den största enskilda kommunens kvarvarande skada. U2 tar viss hänsyn till fördelning men är inte ett fullständigt rättvisemått.

Policyerna beräknas med exakt dynamisk programmering för ändlig horisont (Puterman, 1994), med reservation för flyttalsprecision och regler för likvärdiga alternativ. De utvärderas exakt genom att tillståndens beläggningssannolikheter propageras framåt. Oberoende Monte Carlo-simulering kontrollerar resultaten statistiskt (bilaga C).

### 2.2 Slå av och på mekanismer

En *mask* anger vilka av tre mekanismer som finns, i ordningen R, S, C. Masken **111** har alla tre; **011** saknar retention.

| Mekanism | Finns | Saknas |
|:---|:---|:---|
| **R: retention nedströms** | Belastningen nedströms utgår från avrinning *efter* retention; uppströms våtmarker skyddar nedströms | Belastningen utgår från obehandlad avrinning |
| **S: synkronisering av toppflöden** | En tecknad term proportionell mot den mindre av de två retentionandelarna ändrar belastningen nedströms | Ingen sådan term |
| **C: regnberoende** | Gaussisk kopulakorrelation mellan avrinningsområdenas regn | Oberoende regn med samma marginaler |

Den **fysiska** masken $m^*$ beskriver världen; den **representerade** masken $m$ beskriver planerarens modell. Samtliga $8\times8$ kombinationer utvärderas inom varje basvärld.

**Planeringsvillkor.** Vid $s=0$ är planeringsparametrarna lika med de sanna; vid $s=0,25$ används två deklarerade störningsdragningar. Vid utvärdering kan sannolikheten för kraftigt regn ändras med $\psi\in\{-0.1,0,+0.1\}$.

**Kontinuitet med A1.** Mask 111 återger A1:s fullständiga modell exakt och mask 000 återger den tidigare samlat förenklade modellen, element för element. A2:s tester verifierar detta.

**[R, strukturellt] Exponering.** Retention uppströms är proportionell mot våtmarksnivån. Utan uppströms våtmark ger modellerna med och utan R identiska övergångar. Synkroniseringstermen försvinner när någon av våtmarkerna är tom. En policy som aldrig anlägger våtmark kommer alltså aldrig till tillstånd där R eller S kan påverka det som observeras.

### 2.3 Vad som optimeras och hur det bedöms

**Planeringsmål:**

- **F0** minimerar förväntad U1.
- **F1-eco** lägger till en kostnad för våtmarksunderskott:

$$
\min_\pi\ \mathbb{E}_\pi\Big[\sum_{t=0}^{10} c^{U1}_t + \text{salvage}\Big]+\lambda\,\mathbb{E}_\pi\Big[\sum_{t=0}^{10} g_t\Big],\qquad g_t=\tfrac{2-w_{1,t}}{2}+\tfrac{2-w_{2,t}}{2}.
$$

  Här beräknas $\lambda=0.1\cdot\mathrm{range}(\text{cost})/\mathrm{range}(g)$ för varje planeringsmodell, precis som i A1.
- **F1-eco-fixed** låser $\lambda$ till värdet i den fullständiga modellen och testar om resultaten beror på att vikten räknas om.

**Utvärderingskriterier.** Varje policy bedöms enligt fyra kriterier som alla minimeras, i det sanna scenariot och med policyns eget fondval:

- $J_{U1}$ och $J_{U2}$: de ovan definierade kostnaderna.
- $J_{def}=\mathbb{E}\sum_tg_t$: ackumulerat våtmarksunderskott uppströms.
- $J_{stock}=-\mathbb{E}[w_1+w_2]$ i slutet av horisonten: negativt terminalt våtmarksbestånd.

Varje kriterium har ett eget exakt orakel som väljer den policy som är optimal enligt just det kriteriet.

### 2.4 Två förändringar samtidigt: policypaketen

För en mekanism $X$ och en basmask $m_0$ som saknar den bildar fyra strategier en $2\times2$-design.

| | Målfunktion F0 | Målfunktion F1-eco |
|:---|:---|:---|
| Modell $m_0$ (X utelämnas) | OMIT | **COMP** (omvärdering) |
| Modell $m_0\cup X$ (X antas) | **REP**(X) (ommodellering) | BOTH(X) |

Den konfirmatoriska kontrasten jämför de två markerade cellerna för $X=R$ och $m_0=011$:

$$
\Delta_i=\tfrac12\sum_{m^*\in\{111,\,011\}}\Big[J_{U1}\big(\pi^{F0}_{111};m^*\big)-J_{U1}\big(\pi^{F1\text{-eco}}_{011};m^*\big)\Big].
$$

Varje värld $i$ bidrar med medelvärdet för retention närvarande och frånvarande, med lika **hypotetiska** vikter. $\Delta_i<0$ innebär att REP hade lägre U1. Eftersom jämförelsen samtidigt ändrar *den representerade mekanismen* och *målfunktionen* mäter den skillnaden mellan två policypaket, inte den isolerade effekten av respektive förändring. De två andra cellerna och en ångerdekomposition används för tolkningen.

**MIX** är ett extra riktmärke som optimerar F0 med ett per-period-viktat genomsnitt av två modeller, med vikten $q$ för den som innehåller $X$. Det är en heuristik, inte den optimala policyn för en värld där mekanismen är fast men okänd.

### 2.5 Var ånger uppstår

För en strategi som utvärderas enligt kriteriet $J$ i ett givet scenario kan ångern relativt $J$-oraklet delas upp i tre termer:

$$
J(\pi_a)-J(\pi_d)=\underbrace{[J(\pi_a)-J(\pi_b)]}_{\text{representation}}+\underbrace{[J(\pi_b)-J(\pi_c)]}_{\text{parametrar och skift}}+\underbrace{[J(\pi_c)-J(\pi_d)]}_{\text{mål}}.
$$

Här är $\pi_a$ den använda policyn; $\pi_b$ har samma mål men korrekta mekanismer; $\pi_c$ har samma mål samt korrekta mekanismer och parametrar; och $\pi_d$ är oraklet för $J$. Parametertermen är exakt noll vid $s=0,\psi=0$. Detta är en **ordningsberoende bokföringsuppdelning**, inte unika kausala effekter.

### 2.6 Evidensupplägg

| Etapp | Världar | Roll |
|:---|:---|:---|
| Pilot Gate C | 8 utvecklingsvärldar | Explorativ faktoriell studie av utelämnade mekanismer |
| Exponerings- och lärandestudier | Förhandsvalda utvecklingsvärldar | Explorativa |
| Utvecklingskörning | 16 utvecklingsvärldar | Planering av stickprovsstorlek |
| **Konfirmatoriskt test** | **40** oberoende och likformigt dragna världar från låsta parameterintervall, via en reserverad slumpström efter fryst kod och konfiguration | **Konfirmatoriskt** |

Det primära testet är ett tvåsidigt t-test av medelvärdet för $\Delta$ (39 frihetsgrader). Precisionsmålet var ett 95-procentigt intervall med halvbredd 0,50 U1; den deklarerade lägsta stickprovsstorleken 40 användes. Fyra sekundära tester Holm-justerades (Holm, 1979): $\Delta$ enligt $J_{U2}$, $J_{def}$, $J_{stock}$ samt BOTH(R) − REP(R) enligt $J_{U1}$. Allt annat i faktorialen är deskriptivt eller explorativt.

Som i arbetsrapport 0 tidsstämplades deklarationer före körningarna; misslyckade valideringsgrindar sparades som FAIL och rättades endast genom nya deklarerade grindar; och den reserverade testströmmen fick användas en enda gång av ett auktoriserat steg. Bilaga C redovisar proveniensen och dess begränsningar.

