## Appendix B. Reproducerbarhetsmanifest

Varje rad listar den artefakt som producerar ett påstående eller en figur, den cache den läser eller skriver, och kommandot. Alla skript är ren Python över NumPy, SciPy och Matplotlib; ingen nätverksanslutning eller GPU krävs, och all slumpmässighet är seedad.

| Resultat / figur | Skript | Cache | Kommando |
|---|---|---|---|
| §3 gränskontroller (särdrags- vs tillståndsproxy) | `paper_xxiv_possibility_experiment.py` | — | `python3 paper_xxiv_possibility_experiment.py` |
| §3 passiv koppling, optimerad frikoppling (snedvriden proxy) | `paper_xxiv_possibility_biased_resolution.py` | — | `python3 paper_xxiv_possibility_biased_resolution.py` |
| §3 utövbar räckvidd, strukturell jämförelse, OOD-anpassning | `paper_xxiv_possibility_exercisable.py` | — | `python3 paper_xxiv_possibility_exercisable.py` |
| §4 upplösning × kostnad-svep (med proxy- + G1-grindar) | `paper_xxiv_possibility_resolution_sweep_v2.py` | `paper_xxiv_sweep2_cache.json` | `python3 …_v2.py <sec>` (återupptagbar), sedan `--plot` |
| §4/§8 normaliserad entropi + interaktions-GLM | `paper_xxiv_possibility_analyze_cache.py` | läser `…sweep2_cache.json` | `python3 …_analyze_cache.py` |
| §4/§8 partitionsgeometritest | `paper_xxiv_possibility_partition_transition.py` | — | `python3 …_partition_transition.py` |
| §5 inlärd allokering per regim | `paper_xxiv_possibility_future_3.py` | — | `python3 …_future_3.py [K]` |
| Figur 1 (Exp. 1) | `paper_xxiv_gen_fig_exp1.py` (+ `paper_xxiv_figstyle.py`) | — | `python3 paper_xxiv_gen_fig_exp1.py` |
| Figur 2 (Exp. 2) | `paper_xxiv_gen_fig_exp2.py` | läser `…sweep2_cache.json` | `python3 paper_xxiv_gen_fig_exp2.py` |
| Figur 3 (Exp. 3) | `paper_xxiv_gen_fig_exp3.py` | — | `python3 paper_xxiv_gen_fig_exp3.py` |
| Figur 4 (mekanism-slinga) | `paper_xxiv_figure_4_feedback_loop.svg` | — | statisk SVG |

Två reproducerbarhetsnoter hör hemma i dokumentationen. Upplösningssvepet är tidsbegränsat och återupptagbart: `paper_xxiv_possibility_resolution_sweep_v2.py <sekunder>` fyller så många celler som ryms innan det avslutas och kan återanropas tills cachen är komplett, varefter `--plot` tabulerar och renderar. Och en tidigare version av svepskriptet reproducerade inte sina rapporterade siffror — det utelämnade inställningen `m_meadow` och använde ett grövre kostnadsrutnät än vad berättelsen beskrev; diskrepansen fångades genom att köra den levererade artefakten på nytt och är korrigerad i den version som listas här. Manifestet existerar för att denna klass av fel ska fångas genom konstruktion snarare än av tur.

---

