# Appendix A — Formella härledningar

## A.1 Formulering i informationstillståndet [M]

Låt \(K(dx',d\theta'\mid x,\theta,u)\) vara en Markovövergång och \(O(dy'\mid x',\theta',u)\) en observationskärna. Prediktera först den gemensamma fördelningen med \(K\), uppdatera den sedan med \(O\). Med täthetsnotation är den prediktiva likelihooden för \(y'\)

\[
p(y'\mid b,u)=\int O(y'\mid x',\theta',u)K(dx',d\theta'\mid x,\theta,u)b(dx,d\theta).
\]

Den gemensamma uppdaterade fördelningen erhålls genom att multiplicera predikterad täthet med likelihooden och dividera med denna normaliseringsfaktor. Detta integrerar över latent tillstånd i stället för att behandla dess punktskattning som observerad. Med kostnaderna och slutvillkoret i §2.2 ger det beslutsrekursionen i informationstillståndet. Handlingens informationseffekt ingår i väntevärdet över \(Y_{t+1}\); positiv informationsvinst är inte nödvändigtvis positivt nettobeslutsvärde. Ingen allmän optimalitet hos säkerhetsekvivalens plus dither följer.

## A.2 Persistent excitation och identifierbarhet [M]

I obunden brusfri regression, \(Y=\Phi\theta\), är parametern entydig om och endast om designmatrisen har full kolonnrang. En minsta kvadratminimerare finns även vid rangbrist men behöver inte vara entydig. Betrakta \(x_{t+1}=ax_t+bu_t\), \(u_t=1\), \(x_0=0\), \(x_1=2\), \(x_2=3\). Då gäller

\[
\Phi=\begin{pmatrix}0&1\\2&1\end{pmatrix},\quad \det(\Phi^\top\Phi)=4,\quad (a,b)=(0.5,2).
\]

Konstant insignal har räckt eftersom transienten exciterar den gemensamma regressorn. För den skalära regressorn \(\phi_t=t^{-1/2}\) divergerar \(\sum_{t=1}^T\phi_t^2\) när \(T\) växer medan varje sent fönster med fast längd har en summa som går mot noll. Ackumulerad informationstillväxt kräver alltså inte en uniform fönstergräns. Statistisk konsistens kräver fortfarande antaganden om brus, återkoppling och observationsprocess.

För \(y_t=\theta u_t+\epsilon_t\) med oberoende gaussiska fel av känd varians \(\sigma^2\) ger en genomförbar förutbestämd insignal skild från noll vid fast referens information \(u_t^2/\sigma^2\). Vid förutbestämda insignaler summeras informationen över tid. Extern referensvariation är således inte universellt nödvändig. Om prov är överkomliga, säkra eller användbara är ett separat beslut.

## A.3 Glömska och inversinformation [M]

För \(0<\lambda_f<1\) och \(P_0\succ0\) är RLS-rekursionen

\[
P_t=\lambda_f^{-1}\left(P_{t-1}-\frac{P_{t-1}\phi_t\phi_t^\top P_{t-1}}{\lambda_f+\phi_t^\top P_{t-1}\phi_t}\right).
\]

Matrisinversionslemmat ger, med \(R_t=P_t^{-1}\),

\[
R_t=\lambda_f R_{t-1}+\phi_t\phi_t^\top=\lambda_f^t R_0+\sum_{i=1}^t\lambda_f^{t-i}\phi_i\phi_i^\top.
\]

Om alla fönster med längd \(L\) har Grammatris minst \(\alpha I\) med \(\alpha>0\), gäller för \(t\ge L\),

\[
R_t\succeq\lambda_f^{L-1}\alpha I,\qquad P_t\preceq (\lambda_f^{L-1}\alpha)^{-1}I.
\]

För konstant skalär \(\phi=1\) går \(R_t\) mot \(1/(1-\lambda_f)\) och \(P_t\) mot \(1-\lambda_f\). Driftkovariansen \(W\) ingår inte explicit i denna inversinformationsuppdatering (även om drift kan ändra regressorerna). Den äldre formeln \(\operatorname{tr}(P_\infty)\approx\operatorname{tr}(W)/(r_l-r_f)\) och dess divergensregel dras tillbaka. Vid konstant förväntad regressors Grammatris \(G\) går den viktade informationsmatrisens väntevärde mot \(G/(1-\lambda_f)\); inversion och väntevärde kommuterar inte. Den faktiska parameterfelskovariansen under brus, drift, återkoppling och filterfelspecifikation är en annan storhet.

För vikter \(w_k=\lambda_f^k\) över oändlig historik:

| Storhet | Uttryck | Vid 0,99 |
|---|---|---:|
| Halveringstid | \(\log(1/2)/\log\lambda_f\) | 68,97 |
| E-faldningstid | \(-1/\log\lambda_f\) | 99,50 |
| Viktsumma | \(1/(1-\lambda_f)\) | 100 |
| Kishs effektiva stickprovsstorlek | \((1+\lambda_f)/(1-\lambda_f)\) | 199 |

Viktsumman approximerar e-faldningstiden nära ett. Kishs effektiva stickprovsstorlek är en egenskap hos vikter, inte en allmän informationsgräns. Ingen är ett direkt mått på institutionellt minne.

## A.4 Rangbrist i den operativa historiken och provdesignkriteriet [M]

För den statiska modellen i §6.9 låt \(m=(1-p)\lambda(1-e)>0\). I koordinater \((\log\lambda,\log(1-e))\) är Poissonlikelihoodens score-riktning \((1,1)\), så dess Fisherinformation är

\[
\mathcal I_{\mathrm{reg}}=m\begin{pmatrix}1&1\\1&1\end{pmatrix}.
\]

Ett oberoende prov med känd effektivitet lägger till \(\operatorname{diag}(h,0)\) med \(h=p\lambda(1-e_{\mathrm{probe}})\). Den gemensamma determinanten är \(mh>0\) för \(0<p<1\) och \(e_{\mathrm{probe}}<1\), givet positivt hot och kvarvarande andel incidenter. Vid \(p=1\) försvinner den operativa kanalen och gemensam rang är åter ett om provkoefficienten är positiv. En utformad reduktion är inte nödvändigtvis en känd koefficient i verkligheten.

Icke-identifierbarhet innebär inte oförmåga att besluta: vid \(p=0\) ger en exakt känd residualprodukt 0,1 och en oberoende gräns \(0\le e\le0.5\) att \(\lambda\le0.2\), under en säkerhetströskel på 1, trots att parametrarna inte är gemensamt identifierade. Beslut från ändliga data måste beakta osäkerhet i produkten och annan evidens.

För en separat skalär gaussisk approximation i logaritmerat hot med innovationsvarians \(q>0\) i en slumppromenad och konstant information \(I>0\) per steg är posteriorvariansens uppdatering

\[
P_{t+1}=\left(\frac{1}{P_t+q}+I\right)^{-1}.
\]

Vid den positiva fixpunkten gäller \(IP(P+q)=q\), alltså

\[
P_\infty=\frac{\sqrt{q^2+4q/I}-q}{2}.
\]

Anta att posteriorns medelvärde är exakt \(\log\lambda_{\mathrm{low}}\) och att posteriorn är gaussisk, med säkerhetsmarginal \(\Delta=\log(\lambda_{\mathrm{safe}}/\lambda_{\mathrm{low}})>0\) och ensidig kvantil \(z_\alpha>0\). Sätt \(v=(\Delta/z_\alpha)^2\). Kriteriet \(P_\infty\le v\) gäller om och endast om \(I\ge q/[v(v+q)]\). Med \(I=p\kappa\), \(\kappa=\lambda_{\mathrm{low}}(1-e_{\mathrm{probe}})>0\),

\[
p_{\mathrm{exact}}=\frac{q}{\kappa v(v+q)},\qquad p_{\mathrm{approx}}=\frac{q}{\kappa v^2}=\frac{qz_\alpha^4}{\kappa\Delta^4}.
\]

Approximationen gäller för \(q\ll v\) och dess kvot mot den exakta tröskeln är \(1+q/v>1\). Den är en övre gräns för den idealiserade stationära variansdesigntröskeln, inte en undre gräns. Ett värde utanför det tillåtna intervallet för exponeringsandelar är inte en genomförbar design. För de äldre värdena \(\lambda_{\mathrm{low}}=0.2\), \(\lambda_{\mathrm{safe}}=1\), \(e_{\mathrm{probe}}=0.5\), \(\alpha=0.05\):

| Driftstandardavvikelse | Approximation | Exakt skalär tröskel |
|---|---:|---:|
| 0,03 | 0,00982 | 0,00981 |
| 0,06 | 0,03927 | 0,03913 |
| 0,12 | 0,15710 | 0,15477 |

Detta är en villkorad variansdesignberäkning, inte ett förstapassageresultat. Posteriorns medelvärde kan fluktuera och korsa en beslutsgräns vid andra varianser. Den historiska simuleringens rutnätsfilter skiljer sig från denna approximation. Ingen allmän riktning för en gräns etableras för det filtret, okänd proveffektivitet, flera hotklasser eller verkliga regulatorer.
