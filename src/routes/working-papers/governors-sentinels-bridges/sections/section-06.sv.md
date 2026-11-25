## 6. Guvernör och bro — en grafstatistik

Låt $e_i$ vara modell $i$:s förlustvektor på den gemensamma strömmen. Den historiska grafen använder $d_e(i,j)=\|e_i-e_j\|_2/\sqrt{N}$, en pseudometrik på modeller och en metrik på skilda förlustvektorer. Poängen är oviktad mellancentralitet vid minsta sammanhängande tröskel $b$. Artikulation innebär att borttagning gör just denna graf osammanhängande, inte att överföring eller samordning försämras.

[HR] P4:s skillnad i toppval rapporterades som 20/20 och kriteriet för artikulation per regim som 19/20. Den tillgängliga koden beräknar en enda graf för hela strömmen och skriver `is_articulation_any` vid rad 532 från den grafen. Ingen loop över sex regimer implementerar det andra kriteriet. Dess registrerade framgång kan inte certifieras. Den första statistiken är deskriptiv även om den är korrekt.

**Konstruktionseffekt [R].** Vid $b$, om exakt en kant har vikten $b$ och det finns minst tre hörn, återger borttagning av den kanten den osammanhängande grafen med strikt tröskel. Den är en bryggkant; minst en ändpunkt ligger i en komponent med minst två hörn och är en artikulationspunkt med positiv mellancentralitet. Lika vikter kan upphäva garantin. Om minst tre artikulationspunkter finns ligger minst en utanför varje topp-två-grupp. Vid 25 procents marginal blir en illustrativ euklidisk väggraf med sju punkter, avstånd 1 mellan grannar och 1,1 mellan övriga, komplett; fem artikulationspunkter blir noll utan att punkterna förändras [E].

**Motexempel med enbart nivåskillnader [R].** Med $\mu_i=\operatorname{mean}(e_i)$,

$$d_e(i,j)^2=(\mu_i-\mu_j)^2+\operatorname{Var}(e_i-e_j).$$

Därmed $d_e(i,j)\geq |\mu_i-\mu_j|$. Om $e_i=q_i s$ för skilda positiva skalärer $q_i$ och gemensam icke-negativ profil $s$ som inte är noll, är grafavstånden proportionella mot $|q_i-q_j|$. Bästa guvernören är minsta skalären, och dess grannar bildar en klick; den har noll mellancentralitet. Under villkoret om unik flaskhals har någon annan nod positiv mellancentralitet. Skilda toppval uppkommer alltså trots en enda underliggande poängdimension; centraliteten beror på poängernas mellanrum, inte enbart rangordningen. Syntetiska kontroller av 2 000 sådana ekologier ger 100 procent skilda toppval och cirka 90 procent artikulation utanför topp-två [E]. Under oberoende likformiga entydiga toppval har 20/20 skillnader sannolikheten cirka 0,046, men denna nollmodell beaktar inte konstruktionseffekten. Detta är kalibrerings- och motexempelresultat, inte historiska skattningar.

Rapport XXIII:s separata zoon visar tröskelkänsliga rangordningar, inte en omräkning av P4. Inget experiment mäter funktionell översättning. Ett funktionellt bropåstående skulle kräva en uttrycklig interaktions- eller överföringsuppgift och en matchad kontroll vid borttagning eller tillägg. Den funktionella tolkningen av P4 dras tillbaka.
