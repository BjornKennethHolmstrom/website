## Appendix A — Bevis och härledningar

### A.1 Homogena trösklar och loopuppdelningen

Vid $f \approx 0$ med intakt kompetens $c_0$ börjar konsolideringen när $U_S > U_I$ för den representativa organisationen: med $E_S(0) = b^2$, $E_I(0) = \mathbb{E}[x_0]$, och med kostnads- och ansvarskonstanterna samlade i $\Delta C = C_I + L_0 - C_S$ (spärrtermen $L_1 f$ försvinner vid $f = 0$), ger detta $\theta_{\mathrm{inträde}} = b^2 - \mathbb{E}[x_0] - \Delta C$. Vid $f \approx 1$ med kompetensen avslappnad till $c_*$: $E_S(1) = 0$, $E_I(1) = b^2 + \mathbb{E}[x_*]$, spärren i full styrka, vilket ger $\theta_{\mathrm{utträde}}^{\mathrm{medel}} = -b^2 - \mathbb{E}[x_*] - \Delta C - L_1$. Subtraktion ger Ekv. (4), med $x = \sigma^2/c^2$ och de gemensamma kompetensvärdena. Kompetensens fasta punkt under delad användning löser $\rho(1-c) = \delta c$, vilket ger Ekv. (2). *Inträdesinvarians:* $\theta_{\mathrm{inträde}}$ innehåller ingen $\delta$-beroende storhet, eftersom avklingning endast verkar på konsoliderade organisationer och den uppåtgående grenen närmar sig inträde från $f \approx 0$ med $c = c_0$; följaktligen $\partial\theta_{\mathrm{inträde}}/\partial\delta = 0$, medan $\partial\theta_{\mathrm{utträde}}/\partial\delta = -\mathbb{E}[\sigma^2]\,\partial(1/c_*^2)/\partial\delta < 0$. *Additivitetsidentitet:* $\delta$ ingår i $\theta_{\mathrm{utträde}}$ endast genom $\mathbb{E}[x_*]$ och $L_1$ endast som den additiva sista termen; korsderivatan $\partial^2\theta_{\mathrm{utträde}}/\partial\delta\,\partial L_1$ försvinner identiskt, så varje interaktion som mäts i denna reduktion är noll till följd av konstruktionen.

### A.2 Lemmat om monoton kaskad

$A(x, f) = b^2(1-2f) - L_1 f - x - \Delta C - \theta$ har $\partial A/\partial f = -(2b^2+L_1) = -\Lambda < 0$ för alla $x$. Under asynkront strikt bästa svar vid fast $\theta$ och frusen kompetens, där oavgjorda fall inte utlöser avhopp: varje avhopp sänker $f$, vilket strikt höjer $A$ för varje organisation, inklusive avhopparna; en avhoppares fördel var positiv vid avhoppet och växer endast, så återgång är aldrig ett bästa svar. Och om den $k$-te billigaste organisationen är ogenomförbar vid det aktuella $f$, är varje dyrare organisation också ogenomförbar vid det $f$. Kaskaden har därför en unik stängning, som erhålls genom att utvärdera organisationerna i straffordning, oberoende av den asynkrona uppdateringssekvensen. ∎

### A.3 Flyktstege-satsen

Enligt A.2 utvärderas kaskaden i straffordning. Före något avhopp är $f = 1$; efter $k-1$ avhopp är $f = 1-(k-1)/N$, och den $k$-te billigaste organisationens fördel är

$$
A\!\left(y_k,\; 1-\tfrac{k-1}{N}\right)
= b^2\!\left(-1+\tfrac{2(k-1)}{N}\right) - L_1\!\left(1-\tfrac{k-1}{N}\right) - y_k - \Delta C - \theta
= \vartheta(\theta) + (k-1)\Delta - y_k,
$$

med $\vartheta(\theta) = -\theta - b^2 - L_1 - \Delta C$ och $\Delta = \Lambda/N$. Det $k$-te avhoppet är genomförbart omm detta är positivt, dvs. $y_k < \vartheta + (k-1)\Delta$. Eftersom $y$ är icke-avtagande och krediten är linjär, stannar kaskaden vid den första överträdelsen, $K^*(\theta) = \min\{k : y_k \ge \vartheta + (k-1)\Delta\} - 1$ med $\min\varnothing := N+1$. Den delade andelen når $f \le \tfrac12$ omm $K^* \ge \lceil N/2\rceil$, dvs. omm varje stegpinne $k \le \lceil N/2\rceil$ är genomförbar, dvs. omm $\vartheta(\theta) > M_N$. ∎

*Korollarium (i):* $y_k \equiv \mathbb{E}[x]$ ger $y_k - (k-1)\Delta$ maximalt vid $k = 1$, $M_N = \mathbb{E}[x]$, vilket reproducerar A.1:s utträde. *(ii):* om $y_k - y_1 < (k-1)\Delta$ för alla $k$ ligger varje intervall under $y_1$ utom $k = 1$; $M_N = y_1$. *(iii):* för $\theta$ med $\vartheta(\theta)$ mellan på varandra följande distinkta värden av överträdelsesekvensen, är $K^*(\theta)$ konstant med $0 < K^* < \lceil N/2\rceil$; enligt A.2 är den motsvarande blandade konfigurationen en fixpunkt, stabil under dynamiken eftersom inget genomförbart avhopp eller återgång återstår — trappan. *(iv):* sätt $k = \lceil qN\rceil$; enligt Glivenko–Cantelli och kontinuitet hos $Q_x$ på kompakta delintervall av $(0, \tfrac12]$, gäller $y_{\lceil qN\rceil} \to Q_x(q)$ likformigt och $(k-1)\Delta \to q\Lambda$, vilket ger Ekv. (8); supremumet över den öppna nedre änden kontrolleras i tillämpningen av den ändliga-$N$ gränsen $q \ge 1/(N{+}1)$. ∎

### A.4 Faskriteriet

**Exakt ändligt-$N$ kriterium.** Från satsen binder stegen bortom sin första stegpinne — $k^* > 1$ — omm $\exists k \ge 2$ med $y_k - y_1 > (k-1)\Delta$. Att ta förväntade ordningsstatistikor vid deras kvantilpositioner $k/(N{+}1)$ ger den registrerade klassificeraren, Ekv. (9), utvärderad per cell utan någon anpassad gräns.

**Kontinuum-sekantvillkor.** Med $q_0 = 1/(N{+}1)$ och $k-1 \approx (q-q_0)N$ blir bindningsvillkoret Ekv. (10): någon sekantlutning för $Q_x$ mätt från $q_0$ måste överstiga $\Lambda$, upp till den ändliga-$N$ faktorn $(N{+}1)/N$.

**Kvantiltäthet som lokal diagnostik.** Om sekantvillkoret håller på $[q_0, q]$, tillhandahåller medelvärdessatsen en punkt där $QD_x > \Lambda$; omvändningen misslyckas i allmänhet, eftersom ett lokalt täthetsöverskott inte behöver producera ett sekantöverskott från $q_0$ när de mellanliggande kvantilerna är låga. $QD_x$ lokaliserar därför var kreditlinjen kan springas om; Ekv. (9)–(10) avgör om den gör det.

**Lognormal analys.** $Q_x(q) = (\sigma_0^2/c_*^2)\,e^{2h z_q}$; $QD_x(q) = (\sigma_0^2/c_*^2)\, 2h\,\sqrt{2\pi}\; e^{2h z_q + z_q^2/2}$. När $h \to 0$ försvinner mellanrummen och Ekv. (10) misslyckas: svansregim. För de ändliga jämn-$N$-designer som simulerats, sitter alla stegpinnar vid $q < \tfrac12$, så när $h \to \infty$ går varje $Q_x$-värde på stegen mot $e^{2h z_q} \to 0$ och Ekv. (9) misslyckas igen: svansregim. I kontinuum är $Q_x(\tfrac12) = \sigma_0^2/c_*^2$ $h$-invariant, och hög-$h$-sekanten till medianen närmar sig $2\sigma_0^2/c_*^2$; återgången till svansfasen kräver då $\sigma_0^2/c_*^2 < \Lambda/2$, vilket håller vid de frusna parametrarna. Vid intermediärt $h$ är tätheten maximal vid låga kvantiler och sekantvillkoret håller för de simulerade parametervärdena: stegregim. Större $N$ sänker $q_0$ in i regionen där $z_q^2/2$-faktorn blåser upp tätheten, det monotona $N$-beroendet hos fassannolikheten. ∎

### A.5 Svepsammansättning

För ett nedåtgående svep $\{\theta_j\}$ med $T$ utvärderingar per steg och per-steg flyktfara $\lambda(\theta_j)$, är överlevnad till slutet av steg $j$ $\exp\bigl(-T\sum_{m\le j}\lambda(\theta_m)\bigr)$ under exponentialreduktionen; medianutträdet är det första $\theta_j$ med kumulativ fara minst $\ln 2$. Ingen parameter i detta uttryck anpassas till svepdata; $\lambda$ skattas vid fast $\theta$ på oberoende försök (split-half-validerad, §5.2), och förutsägelser sammansätts per population före aggregering (§5.3).

---

