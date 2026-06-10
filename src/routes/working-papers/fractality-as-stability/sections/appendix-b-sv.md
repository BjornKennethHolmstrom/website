# Appendix B: kod och reproduktion

## Källkod

v4-simulatorn utökar v3-kodbasen från rapport ett till en miljö med flerskaliga störningar och en jämförelse av tre arkitekturer. Den är implementerad i Python med hjälp av NumPy och Matplotlib. Inga beroenden utöver den vanliga vetenskapliga Python-stacken krävs.

Den fullständiga källkoden finns tillgänglig på:

**[github.com/BjornKennethHolmstrom/gae-governance-simulator](https://github.com/BjornKennethHolmstrom/gae-governance-simulator)**

Förvaret innehåller alla simulatorversioner i ordningsföljd:

| Fil | Rapport | Beskrivning |
| --- | --- | --- |
| `gae-simulator-v2.py` | Rapport 1 | Skalär modell med en nod |
| `gae-simulator-v3.py` | Rapport 1 | Vektormodell med tio noder, lokaliserad chock |
| `gae-simulator-v3-unadjusted.py` | Rapport 1 | v3 med instabilt K_B — instabilitetsdemonstration |
| `gae-simulator-v4.py` | Rapport 2 | Flerskalig störning, jämförelse av tre arkitekturer |

## Att reproducera resultaten

Med Python 3.8+ och NumPy/Matplotlib installerat:

```bash
git clone https://github.com/BjornKennethHolmstrom/gae-governance-simulator
cd gae-governance-simulator
pip install numpy matplotlib
python gae-simulator-v4.py

```

Simuleringen har ett frö för reproducerbarhet (`numpy.random.default_rng(seed=42)`). Att köra med standardparametrar reproducerar exakt figur 1 och den kvantitativa sammanfattningstabellen i del III.

## Viktiga arkitektoniska skillnader från v3

v4 introducerar tre betydande utbyggnader utöver v3-modellen med flera noder:

**Modell för flerskaliga störningar.** v3 använder en enda ögonblicklig chock. v4 överlagrar tre samtidiga störningstyper — impuls (snabb), sinusformad regional (medellång) och sinusformad global (långsam) — vilket genererar en sammansatt störningsmiljö som inte helt kan stabiliseras av någon enskalig regulator.

**Tre styrningsarkitekturer.** v3 jämför två arkitekturer (centraliserad, distribuerad). v4 jämför tre: centraliserad (A), endast lokal (B) och fraktal flerskalig (C). Trevägsjämförelsen gör både det högfrekventa misslyckandet hos centraliserad styrning och den långsamma bandoscillationen hos endast lokal styrning synliga.

**Ackumulering av styrsignaler i flera lager.** I arkitektur C beräknas och tillämpas tre styrsignaler samtidigt, var och en med sin egen latensbuffert. Tillståndsövergången summerar alla tre bidragen additivt, där varje lagers signal hämtas från sin egen historik vid lämplig dödtidsförskjutning.

## Att modifiera parametrarna

Alla störnings- och regulatorparametrar är definierade i början av skriptet med inbäddad dokumentation. De parametrar som är mest värda att variera för utforskning:

**Störningsperioder** (`FAST_PERIOD`, `MEDIUM_PERIOD`, `SLOW_PERIOD`): att ändra dessa förskjuter störningsfrekvenserna i förhållande till varje arkitekturs f_max-tak. Att sätta `FAST_PERIOD = 50` flyttar den snabba störningen in i det område arkitektur A delvis kan hantera; att sätta den till 10 gör den ohanterlig för vilken arkitektur som helst.

**Ställdonseffektivitet** (`B_l`, `B_r`, `B_g`): för närvarande lika på 1,0 genom design. Att sätta `B_g = 0.6` modellerar ett mindre effektivt globalt ställdon, vilket kan hävdas vara mer realistiskt men introducerar en förväxlingsfaktor som författarna till rapport ett avsiktligt undvek.

**Kopplingskoefficient** (`beta`): att öka denna bortom 0,05 producerar snabb smitta som överväldigar lokal inneslutning; att minska den mot 0 tar bort smittodynamiken och gör varje nods beteende mer oberoende.

**Regionala gränser** (`REGIONS`): den nuvarande 5/5-uppdelningen kan ändras till ojämna regioner eller fler än två regioner för att testa om designen av regionala gränser påverkar prestandan.

## Utforskning av instabilitet

Att sätta `K_l = 0.55` (över stabilitetstaket för τ_l = 2) producerar oscillatorisk instabilitet i arkitektur B och det lokala lagret i arkitektur C. Detta reproducerar det ojusterade v3-resultatet på lokal skala och demonstrerar att förstärkningstaket gäller på varje lager av den fraktala hierarkin, inte bara på den globala nivån.

## Att bidra

Utbyggnader, kritik och tillämpningar på specifika styrningskontexter välkomnas via förvaret. De mest värdefulla utbyggnaderna från författarnas perspektiv är: empirisk kalibrering av störningstidsskalor mot verkliga styrningsdata, ickelinjära dynamiska utbyggnader och adaptiv modellering av regionala gränser.

Förvaret är öppen källkod under MIT-licens.
