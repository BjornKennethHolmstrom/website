## Appendix B: Dynamik hos effektiva gap och villkorade trösklar

### B.1 Tidsvarierande tillräcklighet

Förändrade störningar, sensorer och uppgifter kan förändra storheterna i Appendix A, men deras exakta dimensioner är heltal. Ett kontinuerligt varierande effektivt gapmått $g(t)$ är en separat fenomenologisk konstruktion [H], inte exakt rang. Skala och mätning måste specificeras innan dynamiken anpassas.

### B.2 Uppkomst av nya krav

En term $\alpha(t)$ kan representera ökningen av ett specificerat effektivt underskott till följd av ändrade krav, inte en universell takt för dimensionstillväxt. Förändringar kan också avlägsna krav.

### B.3 Anpassning

En term $\beta(t)A(t)$ kan representera minskningstakten genom en specificerad anpassningsprocess. Uppdelningen är ett förenklande antagande: samspel, fördröjningar, kostnader, substitution och utarmad korrigeringskapacitet kan bryta det.

### B.4 Varför rang inte bestämmer signalkvalitet

Låt $x,z,\epsilon$ vara oberoende och $y=x+\epsilon$, där $x$ och $\epsilon$ är centrerade Gaussiska variabler med lika positiv varians. Signal-brusförhållandet är ett och $I(x;y)=\tfrac12\log_2(2)=0,\!5$ bitar. Oberoende oobserverade koordinater $z$ lämnar $I((x,z);y)=I(x;y)$ och signal-brusförhållandet oförändrade. Deras relevans för reglering är separat. Varken signal-brusförhållande ett eller rangunderskott innebär noll information eller oundvikligt misslyckande. Universellt $G_{\mathrm{crit}}$ och det uppskattade intervallet 2–3 dras tillbaka; Rapport III:s kedjedjupsresultat kalibrerar dem inte.

### B.5 Villkorad beräkning av tröskelpassage

Under illustrationsekvationen $\dot g=\alpha(t)-\beta(t)A(t)$ gäller

$$g(t)=g(0)+\int_0^t[\alpha(s)-\beta(s)A(s)]\,ds.$$

Om en fast tröskel $g_*$ har motiverats oberoende, $g(0)<g_*$ och nettotakten $v=\alpha-\beta A$ är konstant och strikt positiv, är passagetiden $(g_*-g(0))/v$. Vid varierande takter krävs att den integrerade nettotillväxten når skillnaden. Positiv tillväxt räcker inte: $\dot g=e^{-t}$ och $g(0)=0$ ger $g(t)=1-e^{-t}<1$, som aldrig når två. En tröskel för ett mått måste kalibreras till uppgiften och innebär inte institutionell upplösning.

### B.6 Relation till empiriska fenomen

Ansatsen kan organisera hypoteser om fördröjd anpassning, kompetensförlust och återhämtning. Den etablerar inte en kausal förklaring till någon landskris. Alternativ innefattar ändrade handlingsbegränsningar, förvrängd återkoppling, modellfel och ändrade utfallskriterier.

### B.7 Förbehåll och öppna problem

Ingen allmän avbildning från rang, entropi eller målantal till ett kontinuerligt underskott har etablerats. Inget gemensamt mått eller tröskelvärde har validerats över institutioner. Framtida arbete kan anpassa ett uppgiftsspecifikt mått och testa förutsagda banor mot alternativa modeller med osäkerhet.

---
