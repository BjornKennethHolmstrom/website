# Appendix B: kod och reproduktion

## Källkod

Simulatorn är implementerad i Python och använder NumPy för numeriska beräkningar och Matplotlib för visualisering. Inga beroenden utöver den vanliga vetenskapliga Python-stacken krävs.

Den fullständiga källkoden finns tillgänglig på:

**[github.com/BjornKennethHolmstrom/ggf-governance-simulator](https://github.com/BjornKennethHolmstrom/ggf-governance-simulator)**

Förvaret innehåller:

* `ggf-simulator-v2.py` — en-nods skalär modell (demonstration av latens och signaltrohet)
* `ggf-simulator-v3.py` — tionods vektormodell (subsidiaritet och genomsnittsproblemet)
* `README.md` — installationsinstruktioner och parameterdokumentation
* `/outputs` — förgenererade figurer från den kanoniska parameteruppsättningen

## Att reproducera resultaten

Med Python 3.8+ och NumPy/Matplotlib installerat:

```bash
git clone https://github.com/BjornKennethHolmstrom/ggf-governance-simulator
cd ggf-governance-simulator
python ggf-simulator-v3.py

```

Simuleringen har ett frö för reproducerbarhet (`numpy.random.default_rng(seed=7)`). Att köra med standardparametrarna reproducerar figurerna i denna rapport exakt.

## Att modifiera parametrarna

De arkitektoniska parametrarna är definierade i början av varje skript och är avsedda att varieras. Att ändra `tau_A`, `sigma_A`, `K_A` och deras motsvarigheter i arkitektur B kommer att producera olika kvantitativa utfall samtidigt som de kvalitativa strukturella relationerna bevaras — förutsatt att förstärkningsvärdena (gain) förblir under stabilitetstaket för sina respektive latenser.

Att sätta `K_B` över ungefär 0,5 för `tau_B = 2` kommer att producera den oscillatoriska instabilitet som diskuteras i del V. Detta beteende är avsiktligt och informativt: det demonstrerar att stabilitetstaket är en verklig begränsning för såväl distribuerade arkitekturer som centraliserade.

## Att bidra

Utbyggnader, kritik och tillämpningar på specifika styrningskontexter välkomnas. Förvaret är öppen källkod under MIT-licens.
