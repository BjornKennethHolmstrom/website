## Appendix B — Simuleringsprotokoll

**Konsoliderad simulator.** `paper_xxvi_cost_of_returning.py`, masterfrö 20260718, platt arkivplacering enligt seriens konvention, figurer skrivna till `outputs/` och refererade — inte inbäddade — i arkivkopian av denna artikel; webbutgåvan bäddar in dem på `/working-papers/images/cost-of-returning/`.

**Bygglinje.** Modellen utvecklades i fem registrerade cykler, var och en frusen före körning och grindad mot den föregående cykelns överlevande påståenden. Den konsoliderade simulatorn reproducerar de slutliga bekräftelseresultaten; per-cykel-skripten behålls i arkivet för granskningsspåret.

| Cykel | Fråga | Registrerat utfall |
|---|---|---|
| 1. Medelfältsprototyp | Vidgar kompetensavklingning loopen och förskjuter endast utträdet? | Bekräftad; modellen befanns analytiskt lösbar, vilket omvandlade cykelns resultat till sluten form och blottlade additivitetsidentiteten (§2.2) |
| 2. D2-transplantation | Överlever de slutna trösklarna ändliga heterogena agenter? | Bekräftad inom tolerans, med en systematisk, teckenkonsistent grund residual på utträden — flaggad, inte absorberad |
| 3. Svanscykel | Är residualen en ordningsstatistikeffekt (nukleation)? | Bekräftad: realiserad-svans-förutsägelse minskade utträdes-MAE ≈ 60%; $N$-beroendet överskattades — falsifierad, vilket föranledde stegen |
| 4. Stegcykel | Styr stege-funktionalen där den rena svansen misslyckas? | Bekräftad i den registrerade $N \times h$-separerande regimen (stege-MAE $0,\!0089$ mot svans $0,\!0145$ mot medel $0,\!0523$; median $k^* \approx 10$); trappsteg observerade vid förutsagda positioner; stark log-uppehållslag misslyckades ($R^2\ 0,\!9314 < 0,\!95$) |
| 5. Slutlig bekräftelse | Klassificeringstest av kvantilstegs-kriteriet; faromätning och sammansättning | 55/56 celler (98,2%), enda felet vid $N=500$, $h=0,\!60$ där $P(k^*>1)=0,\!543$; undanhållen överlevnads-MAE $0,\!0538$ ($< 0,\!12$ registrerat), punktvis topp $0,\!119$ vid den grunda kanten; sammansättnings-MAE $0,\!0029$ populationsbetingat, $0,\!0050$ ny population |

**Protokollnoter.** Trösklar skattas genom kontinuerlig korsningsinterpolation, inte rutnätsknäppning, efter att cykel 3 fastställde att rutnätskvantisering vid steg $0,\!025$ maskerade regimen med liten avklingning. Alla faktoriella- och lagjämförelser använder gemensamma slumptal (delat masterfrö och synkroniserade generatorströmmar över celler och återuppbyggnadslagar). Farovalidering är split-half inom population. Svepsammansättning är per population i båda armarna: varje populations farakurva sammansätts till sitt eget förutsagda utträde, där det populationsbetingade testet jämför per population och ny-populations-testet jämför medianen av de populationsspecifika förutsägelserna mot färska dragningar (§5.3). Nedåtgående grenar för utträdesmätning initieras vid full konsolidering med kompetens vid den analytiska fasta punkten $c_*$, vilket eliminerar uppåthistorisk kontamination identifierad i cykel 3. Återhämtningsgränsbandets $[0,\!1, 0,\!9]$-bredd antogs efter att ett initialt smalare band visade sig för glest för stabil betingad skattning (§6).

**Frusna parametrar (basregim).** $N = 20$ (fas- och stegstudier sveper $N$ till 2000); $b = 0,\!45$; $\sigma_0 = 0,\!12$; $h = 0,\!15$ (svept 0–0,8); $C_S = 0,\!50$; $C_I = 1,\!00$; $L_0 = 0,\!20$; $L_1 = 0,\!15$ (spärrceller); $\rho = 0,\!003$; $\delta = 0,\!005$ (avklingningsceller), följaktligen $c_* = 0,\!375$; urvalsförstärkning 8,0; växlingshastighet 0,25; mutationsgolv $5\times10^{-4}$; uppehållsvärden $\{10, 30, 100, 300\}$. Fullständiga frusna tabeller, per-arm-frö-offset och registrerade toleranser finns i simulatorns huvud.

---

