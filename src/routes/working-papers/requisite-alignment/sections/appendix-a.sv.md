## Appendix A. Reproducerbarhet

Alla numeriska resultat härrör från en fast kedja av frusna artefakter. Var och en är innehållsadresserad med de första 16 hexadecimala siffrorna av sin SHA-256; körningen är deterministisk (ingen slumptalsgenerator i lösarens sökväg; det enda Monte Carlo-elementet, Grind-1:s nedre-gräns-certifikat, är en valideringsgräns som inte används i något rapporterat värde). Grind-2-produktionskörningen bär run_id 16bc675b, bunden till panelen, lösarens hash, rutnätsnivåer (G = 40/54/64), horisont (H = 64), geometrier och förskjutningsnivåer; en mismatch i någon av dessa avvisar kontrollpunkten.

| Artefakt | Fil | SHA-256 (16) |
|---|---|---|
| Modellkontrakt (ES-2.0 rev5) | `ES-2.0-model-contract.md` | 2c71487c2ce18287 |
| Grind-1 förhandsregistrering | `ES-2.1-gate1-prereg.md` | 154d403eacde14ef |
| Grind-2 förhandsregistrering (rev1.1) | `ES-2.2-gate2-prereg.md` | ea7db6b5ff508a2e |
| Grind-1 lösare (Kuhn) | `es21_gate1_solver_kuhn.py` | 85560ac1e8c2d342 |
| Grind-2 lösare (Kuhn, förskjuten kanal) | `es22_gate2_solver_kuhn.py` | 53424370260e2656 |
| Oberoende H = 2 validerare | `es22_h2_exact.py` | 1f42d5762eb1e89f |
| Grind-2 produktionsdrivrutin | `es22_run_gate2.py` | f1585246503abaeb |
| Deterministisk efterbearbetning | `es22_postprocess_results.py` | 5bdbe48637c4c600 |
| Frusen 74-cellerspanelmanifest | `es22_panel_manifest.json` | 7a525ac3ca1cfe14 |
| Grind-1 aktiveringsyta (ändrad) | `es21_step5_amended.json` | 22d1fbf37ddb29d1 |
| Grind-2 råresultat (körning 16bc675b) | `es22_gate2_results.json` | e98b42bd45ab685b |
| Grind-2 bedömd omanalys | `es22_gate2_adjudicated.json` | 4211345f293f3f60 |

**Lösare.** Bakåtinduktion på trosimplexet över K = 4, CDF-Kuhn (Freudenthal)-simplexinterpolation vid rutnätsnivåerna G = 40 → 54 → 64, horisont H = 64. Grind-2-lösaren är en minimal diff från Grind-1-lösaren, som endast ändrar återkopplingsobservationens likelihood till den trenivåers förskjutna kanalen (§3.4); allt annat maskineri är identiskt, och m = 0-identiteten (V1) bekräftar att reduktionen är exakt.

**Panel och klassificering.** 74-cellerspanelen är selekterad deterministiskt från den frusna Grind-1-ytan enligt regeln i §3.5 (kvalificerad interiör A > 11·ε_A, tertilstratifiering med SHA-256-hashordning, registrerade ankare och snitt där de kvalificerar, ett angränsningspar per tertil) — ingen slumpmässig sampling. Klassificering är intervallregeln från §3.5 med δ_min = 0,05 · median(A över panelen) = 0,648, grindad på oberoende konvergens för båda policyvärdena (§3.6). Efterbearbetningsskriptet regenererar varje rapporterat antal, andel och geometribedömningen från råresultat-JSON:en utan att lösa om, och är auktoriteten för siffrorna i §4; de två drivrutinssidorapporteringsproblem det korrigerar (poolning av det olösta antalet; den tillåtande geometriflaggan) är dokumenterade i dess huvud.

**Valideringsmatriser.** V1–V8-förpliktelserna (Tabell 1) utvärderades innan någon vetenskaplig betingelse tolkades; den exakta H = 2-uppräkningen (V7) delar ingen interpolationskärna med produktionslösaren och bekräftar oberoende exakt modellkonjugeringssymmetri (spridning 4 × 10⁻¹⁶), vilket fastställer att produktionslösarens lilla konjugeringsspridning är interpolationsbias inom den registrerade enveloppen, inte en modellasymmetri.

**Hårdvara.** Ryzen 7 3700X, 16 trådar; produktionskörningen slutfördes på ungefär 2,5 timmar med 12 arbetsprocesser. Endast numpy/scipy; ingen GPU, inget nätverk i lösningsvägen.

---

