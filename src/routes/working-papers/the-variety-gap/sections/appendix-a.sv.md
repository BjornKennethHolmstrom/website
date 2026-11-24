## Appendix A: Statisk linjär reglering — rang och inriktning

### A.1 System, störning och mål

Låt $X$ vara ett ändligtdimensionellt reellt vektorrum, $D\subseteq X$ ett linjärt störningsdelrum och $L\subseteq X$ ett linjärt delrum av tolererade avvikelser. En störning $d\in D$ ger den brusfria observationen $y=Cd$, där $C$ är linjär. En deterministisk policy i ett steg väljer additiv korrigering $u=f(y)$. Reglering kräver $d+f(Cd)\in L$ för varje $d\in D$. För tillräcklighet antas alla korrigeringar i $-D$ vara tillåtna. Modellen saknar temporal inferens, brus, probabilistisk uppmjukning och begränsad aktuator. Målfunktionen specificerar inte $C$ utan en sådan koppling som extra premiss.

### A.2 Exakt villkor för adekvat observation

Definiera $K=D\cap\ker C$. En reglerande policy existerar om och endast om $K\subseteq L$.

Nödvändighet: för varje $k\in K$ ger $k$ och noll samma observation. Reglering vid noll ger $f(0)\in L$ och vid $k$ ger den $k+f(0)\in L$. Subtraktion ger $k\in L$. Tillräcklighet: välj för varje möjlig observation $y$ en representant $d_y\in D$ med $Cd_y=y$; använd $f(y)=-d_y$. Varje faktisk störning med den observationen skiljer sig från representanten med ett element i $K$, som ligger i $L$. Med begränsade handlingar kvarstår nödvändigheten men tillräckligheten kan falla. Detta är ett standardargument i linjär algebra, inte ett nyhetsanspråk.

### A.3 Nödvändig ranggräns

Om reglering är möjlig gäller $\dim K\leq\dim(D\cap L)$. Rang-nullitetssatsen ger

$$\operatorname{rank}(C|_D)=\dim D-\dim K\geq\dim D-\dim(D\cap L)\geq\dim D-\dim L.$$

Detta bevarar den tidigare dimensionsolikheten om regulatorns variation betecknar effektiv observationsrang och måldimensionen betecknar $\dim L$. Det är en statisk nödvändig gräns, inte den allmänna entropiska lagen om nödvändig variation. Observationsrummets omgivande dimension och målantal ersätter inte rang.

### A.4 Inriktning och det dolda betydelsefulla gapet

Låt $D=\mathbb R^2$, $L=\operatorname{span}(e_2)$. För $C=(1,0)$ är $K=L$ och reglering möjlig; för $C=(0,1)$ är $K=\operatorname{span}(e_1)$ och reglering omöjlig. Båda har rang ett och uppfyller den nödvändiga räknegränsen. Definiera

$$g_{\mathrm{hidden}}=\dim K-\dim(K\cap L),$$

$$g_{\mathrm{count}}=\dim D-\dim(D\cap L)-\operatorname{rank}(C|_D).$$

Den första är kvotrumsdimensionen hos $K/(K\cap L)$; den är basoberoende och noll precis när $K\subseteq L$. Eftersom $K\cap L\subseteq D\cap L$ gäller $g_{\mathrm{count}}\leq g_{\mathrm{hidden}}$. I exemplet är räkneunderskottet noll i båda fallen men det dolda gapet noll respektive ett. Ingen av storheterna mäter magnituder, välfärd eller korrigeringskostnad; $L$ ingår i uppgiften och kan vara normativt.

### A.5 Tolkning och förbehåll

För en ändlig deterministisk uppgift betecknar $A(w)$ adekvata handlingar för tillstånd $w$. I Rapport XX:s korrigerade formulering är minsta handlingstäckning den minsta handlingsmängd som skär varje $A(w)$. En regulator måste ha tillräckligt många tillstånd för att realisera en täckning, men varje observationscell måste också medge en gemensam adekvat handling och policyn måste välja en sådan. Detta är en ändlig motsvarighet, inte en likhet mellan mått.

Dynamisk observation skiljer sig från momentan rang. Låt $x_{t+1}=Fx_t$, där $F$ byter plats på två koordinater, och $C=(1,0)$. Observationerna $Cx_0$ och $Cx_1$ återger båda koordinaterna trots att momentan rang är ett. Brus, okänd dynamik och begränsningar komplicerar resultatet. Det statiska villkoret är inte en teori om dynamisk observerbarhet eller legitima samhällsmål.

---
