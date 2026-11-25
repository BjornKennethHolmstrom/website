## Appendix A: Statisk uppgiftsrelativ tillräcklighet

### A.1 Räckvidd och notation [M]

Använd den korrigerade VI-modellen, inte en matematisk modell av en människa. Låt \(D,L\) vara reella ändligdimensionella delrum i ett omgivande tillståndsrum, \(D\) störningar och \(L\) tolererade avvikelser. Låt observationsavbildningen vara \(C\), med \(y=Cd\) och \(x=d+u\). Detta undviker ursprungsnotationen som kallade både målmängden och gapet G_self. Definiera \(K=D\cap\ker C\) och
\[g_{\rm hidden}=\dim K-\dim(K\cap L).\]
Varje tillräcklig deterministisk handlingsregel baserad på y måste tilldela samma handling till störningar med samma observation. Deras skillnad ligger i K, och om båda residualerna tillhör L så tillhör deras skillnad L. Alltså måste K vara innehållet i L. Omvänt, om hela −D är tillgängligt, välj en representant för varje observerad fiber och motverka den; återstående störning ligger i K och därmed L. Detta visar att villkoret är nödvändigt för adekvat reglering och tillräckligt under det angivna handlingsantagandet, inte under godtyckliga handlingsbegränsningar.

Rang-nullitet ger
\[\dim D-\dim(D\cap L)-\operatorname{rank}(C|_D)\le g_{\rm hidden}.\]
Med \(D=\mathbb R^2,L=\operatorname{span}(e_2)\) har avbildningarna \(C=(1,0)\) och \(C=(0,1)\) båda rang ett och räknegräns noll. Den första har dolt gap noll, den andra ett. Att räkna personliga mål kan inte ersätta denna relation. Gapet kodar inte lidandets storlek eller ett livs värde.

### A.2 Brus och den tillbakadragna tröskeln

För oberoende skalära gaussiska x och brus epsilon med positiva varianser, \(y=x+\epsilon\) och \(s=\operatorname{Var}(x)/\operatorname{Var}(\epsilon)\),
\[I(x;y)=\tfrac12\log_2(1+s),\qquad I(\epsilon;y)=\tfrac12\log_2(1+1/s).\]
Båda är 0.5 bitar vid s=1, inte noll information. Observationsrangen förblir ett när s varierar. Likheten är specifik för antagandena och innebär inte en kvalitativ övergång, rangtröskel eller förlust av reflektionsförmåga. Den personliga upplösningströskeln dras tillbaka.
