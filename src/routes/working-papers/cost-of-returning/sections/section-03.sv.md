## 3. Flyktstege-satsen

### 3.1 Vad residualen krävde

De homogena utträdena i Ekv. (3) använder det representativa straffet $\mathbb{E}[x_*]$. Det ändliga heterogena systemet återvänder tidigare — vid grundare $\theta$ — i varje cell, och underskottet växer med $\delta/\rho$. Mekanismen blir synlig när man frågar vem som rör sig först. Utträde från full konsolidering är inte en populationsgenomsnittlig händelse: det initieras av den organisation som har det minsta realiserade straffet $x_i = \sigma_i^2/c_i^2$ — den bäst bevarade kanalen — och dess avhopp förändrar miljön för alla andra. När den organisationen lämnar, faller den delade andelen med $1/N$, det delade systemets konsensusrelativa fel stiger, straffet för att välja oberoende faller med $f$, och varje annan organisations skäl för oberoende stärks med en fast storlek. Flykten är en kaskad, och frågan om den fullbordas är en fråga om *sekvensen* av straff, inte deras medelvärde.

### 3.2 Uppställning och lemma

Fixa $\theta$ och håll kompetensen vid sitt konsoliderade värde (kaskaden är snabb relativt kompetensdynamiken; antagandet om tidsskaleseparation diskuteras nedan). Sortera straffen $y_1 \le y_2 \le \cdots \le y_N$. Fördelen med oberoende för en organisation med straff $x$ vid delad andel $f$ är, från §2.1,

$$
A(x, f) = b^2(1-2f) - L_1 f - x - \Delta C - \theta.
\tag{5}
$$

Definiera drivtermen $\vartheta(\theta) = -\theta - b^2 - L_1 - \Delta C$ (fördelen för det billigaste möjliga avhoppet vid $f = 1$, brutto för dess straff), och

$$
\Lambda := 2b^2 + L_1,
\qquad
\Delta := \frac{\Lambda}{N},
\tag{6}
$$

den totala kopplingsstyrkan och per-avhopps **rekryteringskrediten**.

**Lemma (monoton kaskad).** Under asynkront strikt bästa svar vid fast $\theta$ och frusen kompetens, där oavgjorda fall inte utlöser avhopp: $A(x,f)$ är strikt avtagande i $f$ för varje $x$; följaktligen, längs varje sekvens av avhopp faller $f$ endast, varje tidigare avhoppares fördel växer endast, ingen avhoppare återgår, och den terminala avhopparmängden är oberoende av avhoppsordningen. **[R inom modellen]** *Bevis.* $\partial A/\partial f = -\Lambda < 0$. Eftersom avhopp sänker $f$, ökar det strikt varje organisations avhoppsfördel, inklusive avhopparnas, så återgång är aldrig ett bästa svar; och om den $k$-te billigaste organisationen är ogenomförbar vid det aktuella $f$, är varje dyrare organisation också ogenomförbar. Kaskaden har därför en unik stängning, som erhålls genom att utvärdera organisationerna i straffordning. ∎

Lemmat är vad som licensierar allt efter det: eftersom kaskaden inte medger några återgångar och inget ordningsberoende, är dess utfall en deterministisk funktion av den sorterade straffsekvensen, och den funktionen kan skrivas ned.

### 3.3 Satsen

**Sats (flyktstege).** Under lemmats dynamik, från full konsolidering, är det $k$-te avhoppet genomförbart omm $y_k < \vartheta(\theta) + (k-1)\Delta$, och det terminala antalet avhoppare är

$$
K^*(\theta) = \min\{\, k : y_k \ge \vartheta(\theta) + (k-1)\Delta \,\} - 1,
\qquad
\min\varnothing := N+1.
$$

Följaktligen når den delade andelen $f \le \tfrac12$ — artikelns återgångskriterium, som matchar loopkonventionen i §2 — omm $\vartheta(\theta)$ överstiger **stege-funktionalen**

$$
M_N = \max_{k \le \lceil N/2\rceil}\bigl[\, y_k - (k-1)\Delta \,\bigr],
\qquad
\theta_{\mathrm{utträde}}^{\mathrm{det}} = -\bigl(b^2 + L_1 + \Delta C\bigr) - M_N.
\tag{7}
$$

**[R inom modellen]** *Bevis.* Enligt lemmat kan kaskaden utvärderas i straffordning. Efter $k-1$ avhopp är den delade andelen $1-(k-1)/N$ och den $k$-te billigaste organisationens fördel är $A\bigl(y_k,\, 1-(k-1)/N\bigr) = \vartheta(\theta) + (k-1)\Delta - y_k$, positiv omm det angivna villkoret är uppfyllt; kaskaden fortsätter till den första överträdelsen och stannar där, eftersom $y$ är sorterad och krediten är linjär. Halvantagandevillkoret är genomförbarheten för alla stegpinnar $k \le \lceil N/2\rceil$, vilket är $\vartheta(\theta) > M_N$ genom omordning. ∎

Funktionalen $M_N$ är artikelns centrala objekt. Maximumet identifierar den svåraste stegpinnen som måste korsas innan hälften av ensemblen kan lämna: en billig första avhoppare är otillräcklig när en senare följare förblir för kostsam i förhållande till den rekryteringskredit som ackumulerats hittills.

### 3.4 Korollarier

**(i) Homogen gräns.** Identiska straff $y_k \equiv \mathbb{E}[x]$ gör att maximumet binder vid $k = 1$ och $M_N = \mathbb{E}[x]$: reduktionen i §2.2 återfås, vilket blottlägger dess utträde som spinodalen för en degenererad stege. **(ii) Ren-svans-gräns.** Om varje mellanrum uppfyller $y_k - y_1 < (k-1)\Delta$, då är $M_N = y_1$ och utträdet bestäms enbart av den bäst bevarade kanalen — ordningsstatistikregimen, där den första avhopparen rekryterar hela kaskaden. **(iii) Trappa.** För $\theta$ mellan på varandra följande överträdelsepunkter på stegen är den stabila konfigurationen *blandad*, med $f = 1 - K^*(\theta)/N$: teorin förutsäger partiella avhoppsplatåer vid härledda positioner, inte bara ett fördröjt hopp. Simulationen uppvisar dem där teorin säger att den måste göra det (§4): i den stegdominerade regimen är mediangapet mellan första avhopp och halvutträde $0,\!0104$ i $\theta$, och över frön korrelerar den observerade platåbredden med det realiserade steggapet $M_N - y_1$ vid $r = 0,\!761$. En tillräckligt kapabel kanal kan lämna monokulturen innan tillräckligt många andra kanaler är redo att följa den.

![En stark kärna kan hoppa av innan tillräckligt många följare kan fullborda flykten](/working-papers/images/cost-of-returning/ladder-staircase.png)
*Figur 3.1 — En representativ trappa i den stegdominerade regimen: första avhopp, stabil partiell avhoppsplatå, fullbordad flykt, mot ren-svans- och stegtrösklarna.*

**(iv) Heterogen stora-populations-gräns.** Skriv $Q_x := F_x^{-1}$ för straffkvantilfunktionen, med $k = qN$ och de empiriska kvantilerna konvergerande till $Q_x$, så konvergerar funktionalen till variationsformen

$$
M_\infty = \sup_{q \in (0,\, 1/2]} \bigl[\, Q_x(q) - q\Lambda \,\bigr],
\tag{8}
$$

vilken är $N$-oberoende — den deterministiska halvan av förklaringen, fullbordad i §4, till varför den observerade utträdeströskeln är nästan platt i $N$. Alla fyra: **[R inom modellen]**.

Eftersom varje organisations kompetens under varaktig konsolidering konvergerar till samma $c_*$, är straffördelningen vid utträde $\sigma^2$-fördelningen skalad med $1/c_*^2$, så $Q_x(q) = Q_{\sigma^2}(q)/c_*^2$ och avklingningsvredet kommer in i stegen precis som det kom in i den homogena loopen — multiplikativt, genom $(1+\delta/\rho)^2$ — men tillämpas nu på den bindande kvantilen snarare än medelvärdet.

**Räckvidd.** Två antaganden begränsar satsen. *Tidsskaleseparation:* kompetens är frusen under kaskaden; detta håller i det simulerade systemet, där kaskader fullbordas på tiotals utvärderingar mot en kompetenstidsskala på $1/(\rho+\delta) \approx 125$, och blir ett angivet räckviddsvillkor överallt där återuppbyggnad under kaskaden skulle vara materiell. *Medelfältskoppling:* varje avhopp levererar sin kredit $\Delta$ till alla organisationer lika, eftersom interaktionen löper genom skalären $f$; under nätverksstrukturerad utvärdering skulle krediten lokaliseras och $M_N$ bli grafberoende. Båda är deklarerade gränser, inte defekter: den andra är den naturliga efterföljarfrågan och lämnas som sådan.

---

