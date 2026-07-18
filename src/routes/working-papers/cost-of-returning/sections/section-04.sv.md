## 4. Svans–stege fasdiagrammet

### 4.1 När binder stegen?

Korollarium (ii) säger att stegen kollapsar till den rena svansen när mellanrummen är små jämfört med krediten; den intressanta frågan är var i parameterrummet stegen är bärande — där den bindande rangen $k^* = \arg\max_k [y_k - (k-1)\Delta]$ överstiger ett, så att flykten genuint begränsas av följare snarare än av kärnan. Det exakta kriteriet avläses från satsen. **Ändligt-$N$ kvantilstegs-kriterium:** i väntevärde över dragningar binder stegen bortom sin första stegpinne omm kvantilstegen stiger ovanför rekryteringskreditlinjen vid någon stegpinne, dvs.

$$
\exists\, k \in \{2, \ldots, \lceil N/2\rceil\}:
\quad
Q_x\!\left(\frac{k}{N+1}\right) - Q_x\!\left(\frac{1}{N+1}\right)
\;>\;
(k-1)\,\Delta.
\tag{9}
$$

Dess kontinuumform är ett **sekantlutningsvillkor**: med $q_0 \approx 1/(N{+}1)$,

$$
\sup_{q \in (q_0,\, 1/2]}
\left[\, Q_x(q) - Q_x(q_0) - \Lambda\,(q - q_0) \,\right] > 0,
\tag{10}
$$

det vill säga, någon *genomsnittlig* kvantillutning mätt från den gynnsamma svansen måste överstiga $\Lambda$. Den punktvisa kvantiltäthetsjämförelsen $QD_x(q) > \Lambda$ är den lokala diagnostiken: enligt medelvärdessatsen måste den hålla någonstans om sekantvillkoret håller, så den identifierar *var* kreditlinjen kan springas om, men den är i allmänhet inte tillräcklig, eftersom stegvillkoret beror på det integrerade avståndet från den första ordningsstatistikan. Varje storhet i Ekv. (9)–(10) är fastställd av modellspecifikationen innan någon simulering körs: kriteriet har ingen anpassad fasgräns.

### 4.2 Det icke-monotona heterogenitetsberoendet, härlett

För den lognormala strafffamiljen, $x = (\sigma_0^2/c_*^2)\,e^{2hZ}$, är kvantilfunktionen $Q_x(q) = (\sigma_0^2/c_*^2)\,e^{2h z_q}$ med $z_q$ standardnormal-kvantilen, och dess täthet $QD_x(q) \propto 2h\, e^{2h z_q + z_q^2/2}$. Sekantvillkorets beteende på det tillåtna intervallet producerar exakt den fasstruktur som simulationen fann, av skäl som är värda att ange noggrant eftersom en tidigare cykel av denna studie felaktigt angav dem. När $h \to 0$ försvinner mellanrummen och stegen kan inte binda: kanaler är utbytbara och det första avhoppet rekryterar alla andra — svansregimen, trivialt. När $h$ blir stort, kollapsar faktorn $e^{2h z_q}$ med $z_q < 0$ den *absoluta* skalan för varje straff under medianen: för de ändliga jämn-$N$-designer som simulerats här, sitter alla stegpinnar vid kvantiler strikt under $\tfrac12$, så hela stegen komprimeras mot noll snabbare än den linjära kreditlinjen, inklusive mellanrum, och stegen blir slack igen. Svansregimen vid extrem heterogenitet är därför *inte* en fråga om att den exceptionella kärnan rekryterar starkare — krediten $\Delta$ är blind för vem som hoppar av — utan om att följarna blir absolut billiga. I kontinuumgränsen får påståendet ett parametervillkor, eftersom medianstegpinnen $Q_x(\tfrac12) = \sigma_0^2/c_*^2$ är $h$-invariant: den höga-$h$-sekanten från svansen till medianen närmar sig $2\sigma_0^2/c_*^2$, så återgången till svansfasen då $h \to \infty$ kräver

$$
\frac{\sigma_0^2}{c_*^2} < \frac{\Lambda}{2},
$$

vilket håller vid de frusna parametrarna ($0,\!102 < 0,\!278$) men är ett villkor, inte en lag: en större baslinje-straffskala skulle lämna medianstegpinnen bindande även vid extrem heterogenitet — ett ytterligare fasvillkor snarare än en defekt i härledningen. Mellan de två kollapserna, vid intermediärt $h$, binder stegen: en bra första kanal hoppar av medan senare kanaler förblir för kostsamma för den ackumulerade krediten, och flykten begränsas av propagation.

![Mellanliggande heterogenitet separerar svansnukleation från kaskadpropagation](/working-papers/images/cost-of-returning/ladder-h-sweep.png)
*Figur 4.1 — Observerat halvutträde mot homogena, rena svans- och stegförutsägelser över heterogenitet. Stegen är mest distinkt från den rena svansen vid intermediärt $h$.*

$N$-beroendet kommer in genom den tillåtna nedre ändpunkten: större $N$ skjuter $q_0 = 1/(N{+}1)$ in i regionen där $z_q^2/2$-termen blåser upp kvantiltätheten, så sannolikheten att stegen binder stiger med $N$ vid fast $h$. Samma geometri fullbordar förklaringen av den platta $N$-kurvan som falsifierade denna studies tidigare ordningsstatistikförutsägelse. Att höja $N$ förbättrar den gynnsamma svansen — $y_1$ faller — men försvagar varje avhopps rekryteringskredit som $\Lambda/N$, och i de observerade trösklarna tar de två effekterna nästan ut varandra: vid $h = 0,\!15$ rör sig det uppmätta halvutträdet med mindre än $0,\!01$ i $\theta$ över $N$ från 20 till 1000, medan den rena svansförutsägelsen rör sig med tre gånger så mycket. Stege-funktionalen, som prissätter båda effekterna, följer de observerade trösklarna där den rena svansen inte gör det: i den stegdominerade regimen är stegens genomsnittliga absoluta utträdesfel $0,\!0089$ mot $0,\!0145$ för den realiserade rena svansen och $0,\!0523$ för populationsmedelvärdet, med medianbindningsrang $k^* \approx 10$ — ungefär tio avhopp måste vara möjliga att bära innan ensemblen kan nå halv delad anslutning.

![Fler möjliga kärnor, men svagare rekrytering per avhopp](/working-papers/images/cost-of-returning/ladder-N-sweep.png)
*Figur 4.2 — Det nästan platta $N$-beroendet: den förbättrade svansen och den försvagade per-avhopps-krediten prissätts mot varandra i stege-funktionalen.*

### 4.3 Klassificeringstestet

Kriteriet i §4.1 utsattes sedan för det registrerade test som motiverar att kalla fasstrukturen ett resultat snarare än en skanning: reproducera den empiriska $(N \times h)$-faskartan — varje cells Monte Carlo-skattning av $P(k^* > 1)$, trösklad vid $\tfrac12$ — från enbart det ändliga-$N$ kvantilstegs-kriteriet, utan något anpassat. Kriteriet klassificerar 55 av 56 frusna celler (98,2%). Det enda felet är cellen $N = 500$, $h = 0,\!60$, där den empiriska $P(k^* > 1) = 0,\!543$ ligger $0,\!043$ över majoritetströskeln medan kvantilklassificeraren förblir på svanssidan: kriteriet har fel endast där dess egen storhet är närmast likgiltighet. De tre ankarregimerna, registrerade i förväg, beter sig som förutsagt:

| Regim | Empirisk $P(k^* > 1)$ | Analytisk fas |
|---|---:|---|
| $N = 20$, $h = 0,\!15$ (Artikel X-skala) | 0,015 | svansdominerad |
| $N = 1000$, $h = 0,\!15$ | 0,997 | stegdominerad |
| $N = 1000$, $h = 0,\!80$ | 0,215 | svansdominerad (återvänd) |

![Empirisk stegfas med analytisk gräns](/working-papers/images/cost-of-returning/final-phase-map.png)
*Figur 4.3 — Monte Carlo $P(k^* > 1)$ över det frusna $N \times h$-rutnätet med den analytiska gränsen överlagrad; den enda felklassificerade cellen ligger på själva gränsen.*

![Medianbindningsrang för flyktstegen](/working-papers/images/cost-of-returning/final-binding-rank-map.png)
*Figur 4.4 — Medianbindningsrang $k^*$ över samma rutnät: den kvantitativa följeslagaren till faskartan.*

Två läsningar av kartan hör hemma här snarare än i §7 eftersom de är strukturella snarare än tolkande. För det första, vid de ensemblestorlekar som Artikel X faktiskt modellerar — tiotals observatörsorganisationer — styr svansregimen: monokulturens reversibilitet bärs nästan helt av dess enda bäst bevarade kanal, ett ordningsstatistikberoende som är återhämtningssidans syskon till Artikel X:s täckningsaritmetik, där de första få skyddade observatörerna bär nästan all detektionskapacitet. För det andra, storheten $\Lambda = 2b^2 + L_1$ uppträder på båda sidor av bokslutet. Den är per-stegpinne-rekryteringskrediten — den mängd med vilken varje avhopp befriar resten — och den är byggd av exakt de två krafter som fördjupar inlåsning: konsensus-konstitutions-biasen och ansvarsspärren. Givet en livskraftig första avhoppare är de krafter som gör monokulturen svår att lämna samma krafter som gör dess upprivning snabb. Styrningsläsningen av båda punkterna skjuts upp till §7 och bär **[IP]**; inom modellen är de exakta.

---

