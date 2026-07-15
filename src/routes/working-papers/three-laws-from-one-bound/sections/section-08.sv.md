## 8. Metod och konfidens

Nivåerna följer serien: **[R]** rigorös, **[IP]** i princip, **[H]** heuristisk, där **[R inom modellen]** markerar ett resultat som är exakt för den angivna modellen och inte gör anspråk på mer. Denna artikel är i huvudsak härledningsbaserad; dess enda simulation är Goodhart-demonstrationen i §4.3, registrerad i `paper_xx-goodhart_demo_preregistration.md` och körd av `paper_xx-goodhart_demo.py`, med fastställda trösklar och nollhypoteser fixerade före körningen. De utforskningar som ligger bakom härledningarna (`06-conservation-law.md`, `07-asbhy_s-law.md`, `08-goodhart.md`, `09-certification-entropy.md` och syntesen `08-reflection.md`) är argument, inte evidens, och citeras endast som källan till inramningen.

Konfidensnivåerna per resultat:

| Resultat | Nivå | Not |
|---|---|---|
| Ashby som fackteorem (§3) | [R] | Verkligt men nära definitionsmässigt; värdet är placering, inte djup |
| Preciseringen i tre krav / chock i nödvändig variation (§3) | [R] för räkningen, [IP] för styrningsläsningen | Det icke-ytliga innehållet i Ashby-avsnittet |
| Interventionsmängdsteoremet (§4.2) | [R] | Det enda nya formella resultatet |
| Nåbarhet styr Goodharts allvarlighetsgrad (§4.3) | [R inom modellen] | 30 registrerade världar; ändpunkten $r=0$ är analytisk |
| Goodhart är *oundviklig* | görs inte anspråk på | Villkorat av att den förkastade dimensionen är målrelevant och nåbar |
| Certifieringskostnaden är monoton (§5.2) | [IP] | Redovisningskonsekvens av icke-återbetalningsbar kostnad |
| Komplexitetskonservering (§5.3) | misslyckad | Ingen konserverad budget; endast olikheten $\sum V \ge V_A$ |
| En gräns ger tre lagar (§6) | [IP] | Enandet; artikelns bidrag |
| Alla institutionella läsningar | [IP] | Argument genom analogi från kontrollanter med ändligt tillstånd |

---

