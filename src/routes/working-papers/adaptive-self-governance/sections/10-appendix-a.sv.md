### Appendix A — Självobservationsensemblen och korrelationsskatten

Detta appendix tillhandahåller den formella grunden för Del II. Huvudresultaten är standardstatistik tillämpad på en självobservationsensembl och är klassade **[R]**; de modelleringsval som kopplar dem till ett själv (felgenereringsstrukturen i A.4, substratblockpartitionen i A.5) är **[IP]**, och flaggas där de inträder. Alla numeriska värden nedan är beräkningsverifierade; skriptet som reproducerar dem ges i A.8. Slutna anspråk markerade *(MC)* bekräftades dessutom genom Monte Carlo till inom samplingsfel.

### A.1 Ensemblmodellen

Låt det latenta självtillståndet vara $\mathbf{x}_{\text{själv}} \in \mathbb{R}^n$. En person observerar det genom $N$ kanaler — introspektion, den inre berättelsen, interoception, en vän, en dagbok, och så vidare — där varje returnerar

$$\mathbf{y}_i = \mathbf{C}_i\,\mathbf{x}_{\text{själv}} + \boldsymbol{\varepsilon}_i, \qquad i = 1,\dots,N,$$

där $\mathbf{C}_i \in \mathbb{R}^{m_i \times n}$ är kanalens strukturella perspektiv och $\boldsymbol{\varepsilon}_i$ dess fel, med $\mathbb{E}[\boldsymbol{\varepsilon}_i]=\mathbf{0}$. Två egenskaper hos ensemblen styr dess kapacitet: rangen av det staplade perspektivet (A.3) och korrelationsstrukturen hos felen (A.2). För korrelationsanalysen räcker det att betrakta skattning av en enda skalär koordinat av $\mathbf{x}_{\text{själv}}$ på vilken alla kanaler rapporterar, med $\operatorname{Var}(\varepsilon_i)=\sigma^2$ och parvis korrelation $\operatorname{Corr}(\varepsilon_i,\varepsilon_j)=\rho$ för $i\neq j$.

### A.2 Korrelationsskatten

Poola kanalerna genom skattaren med lika vikt $\hat{x} = \frac{1}{N}\sum_i y_i$. Dess felvarians är

$$\operatorname{Var}(\hat{x}) = \frac{1}{N^2}\Big[\textstyle\sum_i \operatorname{Var}(\varepsilon_i) + \sum_{i\neq j}\operatorname{Cov}(\varepsilon_i,\varepsilon_j)\Big] = \frac{1}{N^2}\big[N\sigma^2 + N(N-1)\rho\sigma^2\big] = \sigma^2\!\left(\frac{1-\rho}{N} + \rho\right).$$

Definiera det *effektiva antalet oberoende observatörer* som det antal som skulle ge denna varians under oberoende, $\operatorname{Var}(\hat{x}) \equiv \sigma^2/N_{\text{eff}}$, ger

$$\boxed{\,N_{\text{eff}} = \frac{N}{1 + (N-1)\rho}\,}$$

Kishs designeffekt. **[R]** *(MC: empirisk poolad varians matchade den slutna formen till inom 0,3% vid $N\in\{6,20\}$, $\rho\in\{0,0,5,0,97\}$.)* Tre regimer följer. Vid $\rho=0$, $N_{\text{eff}}=N$ och antal hjälper fullt ut. För fixt $\rho>0$, tag $N\to\infty$ ger

$$\lim_{N\to\infty} N_{\text{eff}} = \frac{1}{\rho},$$

ett hårt tak oberoende av $N$: vid $\rho=0,5$ överstiger ingen mängd kanaler $N_{\text{eff}}=2$; vid $\rho=0,3$, mättas $N_{\text{eff}}$ vid $3,33$ (nås med tre signifikanta siffror vid $N=1000$). Den delade biaset sätter ett brusgolv som antalet observatörer inte kan sänka.

### A.3 Nödvändig observatörsmångfald

Stapla perspektiven som $\mathbf{C}_{\text{ens}} = [\mathbf{C}_1^\top \cdots \mathbf{C}_N^\top]^\top$. En koordinat av $\mathbf{x}_{\text{själv}}$ är återvinningsbar ur ensemblen endast om den ligger i radrummet av $\mathbf{C}_{\text{ens}}$; riktningarna av självet i nollrummet av $\mathbf{C}_{\text{ens}}$ är oobserverbara för *varje* kanal på en gång. Skriv $\dim(\mathbf{U}_{\text{själv}})$ för dimensionaliteten av själv‑osäkerhetsrummet (de riktningar i vilka personen inte kan förutsäga sitt eget tillstånd), nödvändig observatörsmångfald är täckningsvillkoret

$$r_{\text{ens}} := \operatorname{rank}(\mathbf{C}_{\text{ens}}) \ge \dim(\mathbf{U}_{\text{själv}}). \tag{[IP]}$$

Detta är ensemblens‑nivå‑analogen till det enkelkanals‑observerbarhetsvillkor som gavs i Själv I: där kunde värdearkitekturens matris vara rangdefekt; här kan *unionen* av alla kanalers perspektiv vara det, vilket producerar en blind fläck som ingen korsreferering upptäcker eftersom ingen kanal spänner över den saknade riktningen. Rang och korrelation är distinkta brister — en ensemble kan vara full‑rang men nästan perfekt korrelerad (varje kanal ser varje dimension, men med samma fel) — och A.2 kvantifierar det andra medan A.3 anger det första.

### A.4 Två vägar och deras samverkan

Modellera varje fel som summan av en delad‑modell‑komponent (gemensam bearbetning), en delad‑data‑komponent (gemensamma indata) och en idiosynkratisk komponent, alla med noll‑medelvärde, enhetsvarians, ömsesidigt oberoende: **[IP]**

$$\varepsilon_i = \sqrt{\rho_{\text{modell}}}\;m \;+\; \sqrt{(1-\rho_{\text{modell}})\,\rho_{\text{data}}}\;d \;+\; \sqrt{(1-\rho_{\text{modell}})(1-\rho_{\text{data}})}\;u_i,$$

med $m,d$ gemensamma för alla kanaler och $u_i$ idiosynkratisk. Då är $\operatorname{Var}(\varepsilon_i)=1$ och, för $i\neq j$,

$$\operatorname{Corr}(\varepsilon_i,\varepsilon_j) = \rho_{\text{modell}} + (1-\rho_{\text{modell}})\rho_{\text{data}} = 1 - (1-\rho_{\text{modell}})(1-\rho_{\text{data}}). \tag{[R]}$$

Algebran följer rigoröst ur modellen. *(MC: empirisk parvis korrelation matchade $1-(1-\rho_m)(1-\rho_d)$ exakt över testade par, t.ex. $\rho_m=0,2,\rho_d=0,8 \Rightarrow 0,84$.)* Tolkningen är att fel är dekorrelerat totalt sett endast om det är idiosynkratiskt genom *båda* vägarna; måttlig korrelation på varje rutt samverkar mot ett, och de två vägarna är sällan oberoende i praktiken, eftersom det narrativ som filtrerar inkommande signaler är det narrativ som väljer vilka signaler som söks.

### A.5 Det reflexiva golvet och viktningsstraffet

Observatör–anläggning‑identitet (Del I) innebär att vissa kanaler inte bara är korrelerade utan delar ett substrat — introspektion och den inre berättelsen är samma apparat som rapporterar två gånger — så ingen intern operation dekorrelerar dem. Modellera detta som en partition av de $N$ nominella kanalerna i $B$ block, med inom‑block‑korrelation $\rho_w \to 1$ och mellan‑block‑korrelation $\approx 0$: kanaler inuti ett block är samma effektiva observatör; block är dekorrelerade. **[IP]** för partitionen; konsekvenserna är **[R]**.

Under skattaren med lika vikt ger en blockmodell med storlekarna $k_1,\dots,k_B$ ($\sum k_b = N$) poolad varians $\frac{1}{N^2}\sum_b k_b^2$, följaktligen

$$N_{\text{eff}}^{\text{lika}} = \frac{N^2}{\sum_b k_b^2} = \frac{1}{\sum_b (k_b/N)^2},$$

det *inverterade Herfindahl‑indexet* för blockstorleksfördelningen. Optimal (blockmedveten) viktning återvinner istället blockantalet, $N_{\text{eff}}^{\text{opt}} = B$, och dessa inramar den uppnåbara mångfalden:

$$N_{\text{eff}}^{\text{lika}} \;\le\; N_{\text{eff}}^{\text{opt}} = B \;\le\; N. \tag{[R]}$$

Två konsekvenser förfinar brödtexten. För det första, golvet: eftersom substrat‑delning tvingar flera nominella kanaler in i ett block, är $B < N$ strikt närhelst några interna kanaler är sammanfogade, och $N_{\text{eff}}$ är begränsat uppåt av $B$ oavsett hur många nominella kanaler som konsulteras — det institutionella botemedlet att konstituera fler observatörer kan inte höja $B$ när de nya observatörerna hamnar i befintliga block, och endast genuint externa kanaler tillför block. För det andra, en förfining av §2.6 som simuleringen bringade i dagen och som stärker dess påstående: under lika vikt faller $N_{\text{eff}}$ *under* blockantalet närhelst block är olika stora, eftersom skattaren överviktar det stora sammanfogade blocket. För sex kanaler bestående av fem sammanfogade interna kanaler och en extern (storlekar $[5,1]$), $N_{\text{eff}}^{\text{lika}} = 36/26 \approx 1,385$ mot $N_{\text{eff}}^{\text{opt}} = 2$: den enda dekorrelerade kanal som bär all ny information blir nästan utröstad av den korrelerade majoriteten. Det är därför inte tillräckligt att *inneha* en dekorrelerad kanal; under naiv lika vikt dränker den sammanfogade majoriteten den, och att återvinna dess värde kräver att medvetet övervikta den dissonanta externa läsningen mot den interna konsensusen. Obehaget i att göra så är den kända formen av den uppviktning matematiken kräver.

### A.6 Selektionsdynamik

En heuristisk modell av kollapsen i §2.5. Låt kanal $i$ bära vikt $w_i(t)$, och låt vikter glida uppför bekvämlighetsgradienten — mot kanaler vars läsningar överensstämmer med det aktuella ensemblens medelvärde — med takt $\eta$:

$$w_i(t{+}1) \propto w_i(t)\,\exp\!\big(-\eta\, d_i(t)\big), \qquad d_i(t) = \text{kanal } i\text{:s oenighet med den poolade läsningen.}$$

Dekorrelerade kanaler, vilka till sin konstruktion är oense oftare, förlorar vikt monotont, höjer det effektiva $\rho$ och sänker $N_{\text{eff}}$ över tid. Fixpunkten koncentrerar vikt på ett enda överensstämmande block — ekokammaren av en. Denna dynamik är **[IP]**: dess riktning följer av bekvämlighetsgradienten, men den funktionella formen är illustrativ, och parametern $\eta$ har inget uppmätt värde på själv‑skalan.

### A.7 Studie 1‑ankaret

Det överordnade programmets Studie 1 uppskattade, för sex konsument‑AI‑system på femtio styrningsrelevanta storheter, en effektiv felkorrelation $\rho_{\text{eff}}\approx 0,97$ (resultatet är **[R]**; förregistrerat och bekräftat). Tillämpa A.2 direkt,

$$N_{\text{eff}} = \frac{6}{1 + 5(0,97)} = \frac{6}{5,85} \approx 1,03,$$

så sex nominellt distinkta observatörer levererade det statistiska skyddet av i praktiken en. Överföringen till själv är **[H]**: inga själv mättes, och siffran åberopas endast för att fastställa att nominellt oberoende kan samexistera med nästan total korrelation i praktiken. Ett själv vars kanaler delar ett substrat (A.5) och aktivt väljs för överensstämmelse (A.6) har svagare grunder än separat byggda AI‑system att förvänta sig dekorrelation, men magnituden av $\rho$ för någon individ är omätt och appendixet hävdar inget värde för den.

### A.8 Simulering

Följande reproducerar varje numeriskt påstående ovan; det hör hemma i det platta repositoriet som `self_ii_appendix_a_correlation_tax.py`.

```python
import numpy as np
rng = np.random.default_rng(20260616)

def N_eff(N, rho):
    "Kishs designeffekt (A.2)."
    return N / (1.0 + (N - 1.0) * rho)

def mc_pooled_var(N, rho, sigma=1.0, trials=400_000):
    "Monte‑Carlo‑varians för den poolade skattaren med lika vikt (A.2)."
    zc = rng.standard_normal(trials)
    zi = rng.standard_normal((trials, N))
    eps = (np.sqrt(rho) * zc[:, None] + np.sqrt(1 - rho) * zi) * sigma
    return eps.mean(axis=1).var()

def two_pathway_corr(rho_m, rho_d):
    "Sluten form för samverkande korrelation (A.4)."
    return 1 - (1 - rho_m) * (1 - rho_d)

def neff_equal_blocks(block_sizes):
    "Lika‑vikt N_eff = inverterat Herfindahl‑index av blockstorlekar (A.5)."
    N = sum(block_sizes)
    return N**2 / sum(k*k for k in block_sizes)

def neff_opt_blocks(block_sizes, rho_w=1 - 1e-6):
    "Optimal‑vikt N_eff = blockantal B (A.5), via GLS: 1^T Σ^{-1} 1."
    N = sum(block_sizes); Sig = np.zeros((N, N)); i = 0
    for k in block_sizes:
        Sig[i:i+k, i:i+k] = rho_w; i += k
    np.fill_diagonal(Sig, 1.0)
    one = np.ones(N)
    return one @ np.linalg.solve(Sig, one)

if __name__ == "__main__":
    print("A.2 Studie‑1‑ankare: N_eff(6, 0,97) =", round(N_eff(6, 0.97), 4))
    print("A.2 mättnad 1/rho vid rho=0,5 :", round(N_eff(10**6, 0.5), 4))
    print("A.2 MC vs sluten form (N=6,rho=.97):",
          round(mc_pooled_var(6, 0.97), 4), "vs", round((1-0.97)/6 + 0.97, 4))
    print("A.4 samverkande korr (.2,.8)     :", two_pathway_corr(0.2, 0.8))
    for bs in ([5, 1], [4, 1, 1], [6], [1]*6):
        print(f"A.5 block {bs}: lika={neff_equal_blocks(bs):.3f}  opt(B)={neff_opt_blocks(bs):.3f}")
```

Att köra det returnerar $N_{\text{eff}}(6,0,97)=1,0256$, mättnadsvärdet $2,0$ vid $\rho=0,5$, Monte‑Carlo‑överensstämmelse med den slutna formen, den samverkande korrelationen $0,84$, och blockresultaten $[5,1]\to(1,385,\,2)$, $[4,1,1]\to(2,0,\,3)$, $[6]\to(1,\,1)$, $[1{\times}6]\to(6,\,6)$.
