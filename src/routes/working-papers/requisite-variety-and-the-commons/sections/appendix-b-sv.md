# Bilaga B: kod och reproduktion

## Källkod

paper_iv_commons_requisite_variety-simulatorn utökar serien till domänen för styrning av allmänningar, och ersätter paper_iii_representation_observability:s modell för preferensöverföring med en dynamikmodell för resursbestånd som styrs av fem distinkta återkopplingsarkitekturer. Den är implementerad i Python med hjälp av NumPy och Matplotlib.

Den fullständiga källkoden finns tillgänglig på:

**[github.com/BjornKennethHolmstrom/gae-governance-simulator](https://github.com/BjornKennethHolmstrom/gae-governance-simulator)**

Lagringsplatsen innehåller nu sex simulatorversioner:

| Fil | Artikel | Beskrivning |
| --- | --- | --- |
| `paper_i_single_node_feedback.py` | Artikel I | Ennods skalär återkopplingsmodell |
| `paper_i_multinode_subsidiarity.py` | Artikel I | Tionods vektormodell, lokaliserad chock |
| `paper_i_multinode_unadjusted.py` | Artikel I | v3 med instabil förstärkning — instabilitetsdemo |
| `paper_ii_fractal_multiscale.py` | Artikel II | Flerskalig störning, tre arkitekturer |
| `paper_iii_representation_observability.py` | Artikel III | Representationskedjans observerbarhet, fyra arkitekturer |
| `paper_iv_commons_requisite_variety.py` | Artikel IV | Styrning av allmänningar, erforderlig variation, fem arkitekturer |

## Reproducera resultaten

```bash
git clone https://github.com/BjornKennethHolmstrom/gae-governance-simulator
cd gae-governance-simulator
pip install numpy matplotlib
python paper_iv_commons_requisite_variety.py

```

Simuleringen är seedad (`numpy.random.default_rng(seed=42)`). Standardparametrarna reproducerar exakt figur 1 och den kvantitativa sammanfattningstabellen i del III.

## Viktiga arkitektoniska skillnader från v5

v6 är en strukturell avvikelse från v5:s modell för preferensöverföring. Där v5 modellerade informationsflöde genom en representationskedja, modellerar v6 ett resursbestånd som styrs av fem distinkta återkopplingsarkitekturer med olika observations- och kontrollegenskaper.

**Resurstillståndets rymd.** Istället för medborgarnas preferensvektorer är tillståndet ett resursbestånd på 12 områden som utvecklas under logistisk tillväxt med diffusion, flerskaliga störningar och utvinning av 20 användargrupper.

**Observationskanal.** Funktionen `observe_resource` implementerar fördröjd, möjligen aggregerad och möjligen brusig observation av resurstillståndet. Arkitektur B observerar med en 12-stegs fördröjning; E observerar med en 1-stegs fördröjning och får direkt åtkomst till den långsamma signalen för bärkraft.

**Utvinningsbeslut.** Funktionen `compute_extraction` implementerar fem kvalitativt olika utvinningslogiker: obegränsad individuell optimering (A), kvotefterlevnad under årlig undersökning (B), prisresponsiv utvinning (C), efterlevnad av samhällsregler med graderade sanktioner (D), och säsongsanpassad utvinning med starkt socialt ansvarsutkrävande (E).

**Flerskaliga störningar.** Funktionen `carrying_capacity` genererar hela trebands-störningsmiljön. Den långsamma trenden är endast observerbar för Arkitektur E, som har `slow_signal=True`.

**Rumslig dynamik.** Områdenas anslutningsbarhet genereras av `generate_patch_connectivity`, som skapar en bandad diffusionsmatris. Utvinning allokeras över områden proportionellt mot det aktuella beståndet.

## Ändra parametrarna

**Magnitud för den långsamma trenden.** Att öka `SLOW_AMP` (standard 20) gör årtiondets nedgång i bärkraft större, vilket ökar prestandagapet mellan E och D. Gapet mellan B och A breddas också, eftersom en större långsam trend innebär att B:s fördröjda kvoter ligger längre efter de aktuella förhållandena.

**Observationsfördröjning (Arkitektur B).** Att minska `obs_lag` från 12 till 6 förbättrar avsevärt B:s prestanda. Detta utforskar frågan: vid vilken observationsfrekvens blir statlig förvaltning gynnsam snarare än skadlig? Övergångspunkten är arkitektoniskt informativ.

**Sanktioneringsstyrka.** Att minska D:s och E:s sanktioneringsparametrar mot A:s och B:s nivåer avslöjar hur stor del av prestandafördelen hos gemensamhetsförvaltningen som kan tillskrivas sanktionering kontra enbart observationsdimensionalitet. Svaret är att merparten av fördelen kvarstår även med svag sanktionering, vilket bekräftar att observationsdimensionalitet är den primära drivkraften.

**Kollapströskel.** Att öka θ från 0.20 till 0.35 gör en kollaps lättare att utlösa och förskjuter alla arkitekturers kollapsrisk uppåt. Den relativa rangordningen bevaras, men de absoluta gapen förändras.

**Antal användare (N_users).** Att öka N_users samtidigt som resursparametrarna hålls konstanta höjer utvinningstrycket över alla arkitekturer. Detta utforskar problemet med styrning av allmänningar under befolkningstillväxt — en betydande utvidgning till den verkliga världen som inte modellerats i grundsimuleringen.

## Utöka modellen

**Hysteres och regimskiften.** Att ersätta logistisk tillväxt med en bistabil dynamikmodell (t.ex. en dubbelbrunnspotential i beståndsrymden) skulle testa om prestandarangordningen bevaras när kollaps får irreversibla konsekvenser. Förutsägelsen: gapet mellan E och alla andra arkitekturer breddas avsevärt, eftersom den medvetenhet om långsamma variabler som endast E har är precis det som möjliggör tidiga ingripanden innan tröskeln korsas.

**Adaptiv styrning.** Att låta styrningsparametrar utvecklas över tid — arkitekturer som lär sig av utfall och justerar sina observationssystem — skulle modellera framväxten av adaptiv förvaltning. Förutsägelsen: arkitekturer med högre initial observationsdimensionalitet anpassar sig snabbare eftersom de kan observera vad deras styrningsbeslut producerar.

**Flera resurstyper.** Att utöka till kopplade resurssystem (fiske + skog + vatten) med interaktioner dem emellan skulle modellera styrning av biologisk mångfald. Förutsägelsen: den observationsdimensionalitet som krävs för stabil styrning skalar med antalet kopplade resurstyper, vilket ytterligare breddar fördelen för inbäddad gemensamhetsförvaltning över administrativa system med fasta observationskanaler.

## Bidra

Lagringsplatsen har öppen källkod under MIT-licens. Utökningar, empiriska tillämpningar och kritik välkomnas via GitHub.
