## 8. Metod och konfidens

Nivåerna följer serien: **[R]** rigorös, **[IP]** i princip, **[H]** heuristisk, där **[R inom modellen]** markerar ett resultat som är exakt för den angivna modellen och inte gör anspråk på mer. Denna artikel är i huvudsak konsoliderande; dess enda simulation är Goodhart-demonstrationen i §4.3, registrerad i `paper_xx-goodhart_demo_preregistration.md` och körd av `paper_xx-goodhart_demo.py`, med fastställda trösklar och nollhypoteser fixerade före körningen. De utforskningar som ligger bakom härledningarna (`06-conservation-law.md`, `07-asbhy_s-law.md`, `08-goodhart.md`, `09-certification-entropy.md` och syntesen `08-reflection.md`) är argument, inte evidens, och citeras endast som källan till inramningen.

Konfidensnivåerna per resultat:

| Resultat | Nivå | Not |
|---|---|---|
| Deterministisk handlingstäckningsgräns (§3) | [R] | Verkligt men nära definitionsmässigt; värdet är placering, inte djup |
| Kapacitet, partition och uppgiftsförändring (§3) | [R] för räkningen, [IP] för styrningsläsningen | Det icke-ytliga innehållet i Ashby-avsnittet |
| Interventionsmängdens ordningskriterium (§4.2) | [R; etablerat] | Definition och deterministisk motsvarighet till Skalse m.fl. (2022); inget nyhetsanspråk |
| Förlust plus nåbarhet innebär degradering | tillbakadraget | Explicit motexempel i §4.2 |
| Tillåten minskning av den utelämnade dimensionen (§4.3) | [R inom modellen] | 30 rapporterade registrerade världar; nolländpunkten och monotonicitet per värld följer analytiskt; P1 och poolad rangstatistik är stickprovsberoende |
| Realiserad Goodhart-degradering är oundviklig | inte visat | Kräver en bana eller urvalsregel, inte enbart ett ogynnsamt par |
| Certifieringskostnaden är monoton under skuldkonventionen i §5.2 | [IP] | Redovisningskonsekvens av icke-återbetalningsbara betalda kostnader och begränsad skuldnedskrivning |
| Komplexitetskonservering (§5.3) | misslyckad | Ingen konserveringsidentitet fastställd; additiv redovisning och entropiredovisning kvarstår som [H] |
| Gemensam ram för begränsad representation (§6) | [IP] | Syntes, inte en enda tillräcklig premiss |
| Alla institutionella läsningar | [IP] | Argument genom analogi från kontrollanter med ändligt tillstånd |

**Rättelsenot (24 november 2026).** Den adversariella granskningen av SCAI-S0 identifierade en ogiltig generalisering i tidigare §4.2. Denna revision drar tillbaka teoremet och nyhetsanspråket, lägger till motexemplet och tidigare forskning samt reviderar beroende tolkningar. Den registrerade demonstrationen rapporteras oförändrad; den ursprungliga körningen och registreringen har inte körts om för denna rättelse.

---

