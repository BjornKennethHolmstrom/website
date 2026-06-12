# Appendix B — Simuleringsspecifikation

---

## B.0 Konvention

En fil: **`gae-simulator-v14-reform-exhaustion.py`**, vid sidan av den levererade prototypen (`gae-simulator-v13-chain-prototype.py`, frusen som den kördes för Del V). Endast NumPy + SciPy. Alla parametrar som namngivna konstanter överst i filen. Ett ändringslogg-kommentarblock i filens huvud registrerar varje specifikationsändring som görs efter den första fullständiga körningen, med datum och skäl — detta ersätter v1:s formella avvikelselogg till noll overhead. Figurer till `outputs/` som `v14-*.png`; publicerade värden är medianer med kvartilavstånd över **minst 100 frön** per betingelse; fördelningar visas som histogrampaneler snarare än arkiveras separat. En README-rad.

## B.1 De sex simuleringarna

**A — Energilagen** (utvidgar prototyp E1). Djup n = 0…12; lagersingulärvärden U[0,7, 1,0] baslinje, U[0,5, 1,0] och U[0,9, 1,0] som robusthet; m ∈ {4, 6, 10}. Figur `v14-energy-main.png`: median E_min(n)/E_min(0), log-skala, IQR-band, analytisk linje exp(−2E[ln σ]·n) övertryckt; asymptoter för bristfällig geometri markerade. Sekundärpanel: IQR/median mot n (spridning).

**B — Blindfläcksgeometri** (utvidgar prototyp E2). Ortogonal pol (separat konstruktion — *inte* en punkt på korrelationsaxeln) plus kärnkorrelation ρ_B ∈ {0, 0,1, …, 1,0}; d ∈ {1, 2}; `oblique`-robusthetsvariant (ett singulärvärde vid {0, 0,1, 0,3}). Följ hård rang, rent överföringsantal (trösklar 0,99/0,95/0,90), σ_min. **Sundhetsgrindar:** de bevisade resultaten i Appendix A (A.3.1, A.3.2, A.3.3.i–ii) körs som kodassertioner; ett misslyckande är en bugg per definition och stoppar körningen. Figur `v14-geometry-sweep.png`: rent antal och σ_min över (n, ρ_B), ortogonal pol markerad utanför axeln — §7.3:s designkarta renderad.

**C — Brusplacering** (utvidgar prototyp E3). n = 6 baslinje; levererad variansandel per injektionslager; levererad SNR mot djup (axlar matchade mot teknisk rapport III:s centrala figur för det visuella rimmet). Valfri common-mode brusflagga, rapporterad som explorativ. Figur `v14-noise-placement.png`.

**D — Arkitekturer.** Enhetliga djup 7/4/2 och fraktal tilldelning (låg-V-komponenter genom djup 7; hög-V genom djup 2 som slutar i en sluten lokal slinga: korrigerande term δ_t = −L(y_lokal,t − r_lokal), enstegs lokal fördröjning, förstärkning och auktoritetsenvelopp svepta; envelopp 0 = öppen-slinga-styrfall). 20 platser; hög-V-komponenter dragna per plats. Utdata per arkitektur: trohet per komponentklass, E_min, latens, varians över platser. Figur `v14-architectures.png`.

**E — Diskriminator.** Hotkodat direktivbatteri; strukturell värld (M = I) mot antagonistisk värld (M(θ) som dämpar hotade dimensioner enligt teknisk rapport IX) under den bärande begränsningen **matchad genomsnittlig försvagning** — världarna får endast skilja sig i mönster. Utdata: trohet-på-hot-lutningsfördelningar per värld och styrkekurvan (minsta batteristorlek och brus vid 95 % separation), vilken Del VI citerar. Figur `v14-discriminator.png`.

**F — Dubbelriktad nod** (testar Förmodan A.4.1; **körs sist**, efter att A–E validerar dess komponenter). Observationskedja av blockmedelvärdesbildande nivåer (seriens konvention från teknisk rapport I/III — återanvänd, återuppfinn inte) sammansatt med aktueringskedjan; centrum agerar på den kedjefiltrerade skattningen. Faktoriell: borttagna lager upp × ned ∈ {0,1,2}² vid samma nod. Utdata: J-ytan och interaktionsskattningen med KI. Figur `v14-bidirectional.png`.

## B.2 Registrerade förutsägelser och falsifieringskonsekvenser (förda från v1, bindande)

1. **Spridningsbefordringsregel:** djup-spridningsfyndet (A.2.3) går in i Del II vid revidering endast om IQR/median växer monotont i n över alla nio (m × fördelning) betingelser i Simulering A.
2. **Tilldelningsprincip:** fraktal arkitektur D måste strikt dominera enhetlig B på det kombinerade måttet; om den inte gör det förlorar §7.2 sitt kvantitativa stöd och Del VII revideras.
3. **Superadditivitet:** en noll- eller negativ interaktion i Simulering F nedgraderar Förmodan A.4.1 till en *motbevisad hypotes* i den publicerade texten, och §7.4:s läsning av skyddat utrymme återgår från "kandidat till härlett designteorem" till "konsistent observation."

## B.3 Parametertabell

| Parameter | Baslinje | Svep |
|---|---|---|
| Dimension m | 6 | 4, 10 |
| Anläggningspoler | U[0,85, 0,98] | — |
| Lager singulärvärden | U[0,7, 1,0] | U[0,5, 1,0], U[0,9, 1,0] |
| Brist d | 1 | 2 |
| Kärnkorrelation ρ_B | 0…1 steg 0,1, + ortogonal pol | — |
| Oblique σ_svag | — | 0, 0,1, 0,3 |
| Djup n | 0…7 | 0…12 (A); 0…m (B) |
| Frön | 100 | — |
| Platser (D) | 20 | — |
| Lokal slinga förstärkning / envelopp (D) | svept, deklarerad i fil | — |
| Borttagningar (F) | {0,1,2}² | — |
