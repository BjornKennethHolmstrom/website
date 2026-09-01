## 3. Analytisk struktur: snabb–långsam dekomposition och attraktorregimer

Modellen som definieras i avsnitt 2 är femdimensionell och ickelinjär, men dess beteende kan förstås genom en standarduppdelning i snabb och långsam dynamik. Permeabilitetsvariabeln \(P\) utvecklas på en mycket långsammare tidsskala än \(U,B,T,E\) eftersom \(\rho_P = 0{,}02\) medan de andra hastigheterna ligger mellan \(0{,}05\) och \(0{,}55\). Vi behandlar därför \(P\) som en långsamt varierande parameter och analyserar det fyrdimensionella snabba delsystemet \((U,B,T,E)\) för fast \(P\). Hela systemets trajektorier rör sig sedan längs jämviktsgrenarna hos detta snabba delsystem allteftersom \(P\) förändras.

Denna uppdelning är inte en approximation som införs av bekvämlighet; den återspeglar det substantiella antagandet att **gränskvalitet förändras långsammare än gränsstyrka, tillit eller utforskande**. Konstitutioner, rättskulturer, mediemiljöer och normer för institutionell transparens är långsammare variabler än de omedelbara policyresponser de begränsar.

### 3.1 Fastpunkter i det snabba delsystemet

För fast \(P\) är det snabba delsystemet:

\[
\begin{aligned}
\dot U &= n(1-U) - \alpha E (1-\beta Q) U, \\
\dot B &= \rho_B \, \sigma\!\big(k_B(F-\theta)\big) - d_B B, \\
\dot T &= \rho_T E (1-\beta_T Q) - d_T T - \gamma Q T, \\
\dot E &= \rho_E \, \sigma\!\Big( k_E \big( \frac{\alpha U}{1+\eta Q} - c_E \big) \Big) - d_E E,
\end{aligned}
\]

med \(Q = (1-P)B\).

Eftersom sigmoidfunktionerna är branta (\(k_B, k_E \gg 1\)), beter sig det snabba delsystemet approximativt som ett styckvis linjärt system med omkopplingströsklar. Två stabila fastpunkter framträder, motsvarande de öppna och slutna regimer som observerats i simuleringarna.

#### 3.1.1 Sluten attraktor

Antag att \(F > \theta\), så att gränsinvesteringen är aktiv, och antag att utforskandet är undertryckt: \(\alpha U/(1+\eta Q) < c_E\). Då gäller:

- \(\dot B = \rho_B - d_B B\), så \(B \to \min(\rho_B/d_B, 1)\). Med standardparametrarna är \(\rho_B/d_B \approx 1{,}316\), så \(B=1\) vid mättnad.
- \(\dot E = -d_E E\), så \(E \to 0\).
- Med \(E=0\) blir \(\dot T = -d_T T - \gamma Q T\), så \(T \to 0\).
- Med \(E=0\) blir \(\dot U = n(1-U)\), så \(U \to 1\).

Den slutna fastpunkten är således approximativt

\[
(B,T,E,U) \approx (1,0,0,1).
\]

Den upplevda osäkerheten vid denna fastpunkt är

\[
F_{\text{sluten}} = \frac{s}{(1+\mu)}.
\]

För standardparametrarna och \(s=1{,}5\) är \(F_{\text{sluten}} \approx 0{,}528\), klart över \(\theta=0{,}196\), så gränsdriften förblir på. Utforskandevillkoret är också uppfyllt eftersom \(\alpha U/(1+\eta Q) = \alpha/(1+\eta(1-P))\), vilket är mindre än \(c_E\) för ett brett intervall av \(P\). Den slutna fastpunkten är således självkonsistent.

Linjärisering kring denna fastpunkt visar att egenvärdena är negativa, dominerade av avklingningshastigheterna \(d_B,d_T,d_E\) och den negativa återkopplingen i \(\dot U\). Den slutna attraktorn är lokalt stabil för alla \(P\in[0,1]\).

#### 3.1.2 Öppen attraktor

Den öppna attraktorn är mer känslig. Den motsvarar ett tillstånd där gränsinvesteringen är svag eftersom den upplevda osäkerheten ligger under tröskeln, och utforskandet är delvis aktivt, vilket håller den faktiska osäkerheten måttlig.

I gränsfallet där \(B\) är liten och \(P\) är tillräckligt hög, är \(Q \approx 0\). Då reduceras ekvationerna approximativt till:

\[
\begin{aligned}
\dot U &= n(1-U) - \alpha E U, \\
\dot T &= \rho_T E - d_T T, \\
\dot E &= \rho_E \, \sigma\!\big(k_E(\alpha U - c_E)\big) - d_E E.
\end{aligned}
\]

Om utforskandet är fullt aktivt (\(E\) nära sin övre gräns), uppfyller jämviktsvärdena

\[
U \approx \frac{n}{n+\alpha E}, \quad T \approx \frac{\rho_T E}{d_T}.
\]

Med standardparametrarna har det öppna tillstånd som observerats numeriskt \(B \approx 0{,}147\), \(E \approx 0{,}179\), \(T \approx 1{,}0\), \(U \approx 0{,}34\) och \(P \approx 0{,}70\). Det lilla men nollskilda \(B\) upprätthålls av gränsekvationen vid ett värde där den upplevda osäkerheten ligger nära tröskeln \(\theta\). Den öppna fastpunkten är därför ett självreglerande tillstånd: tillit och utforskande håller den upplevda osäkerheten tillräckligt låg för att gränsstyrkan ska förbli liten, men inte exakt noll.

Stabiliteten hos den öppna fastpunkten beror på tillit–utforskandeslingan. Om \(P\) är för låg, blir \(Q=(1-P)B\) stor även för litet \(B\), vilket undertrycker utforskande och tillit. Detta kan destabilisera det öppna tillståndet och driva systemet mot den slutna attraktorn. Villkoret för stabilitet är approximativt att det effektiva gränsundertryckningsblocket \(Q\) förblir under ett kritiskt värde \(Q^*\), där

\[
Q^* \approx \frac{\rho_T E}{\gamma T + d_T T} \quad \text{(för tillitsunderhåll)}
\]

och på motsvarande sätt för utforskande. I praktiken förlorar den öppna attraktorn stabilitet när \(P\) faller under ungefär \(0{,}3\)–\(0{,}4\), beroende på \(s\) och \(\theta\). Detta är förenligt med den interventionströskel som återfinns i avsnitt 7.

### 3.2 Bistabilitetsområde

Samexistensen av den öppna och den slutna fastpunkten för samma \(P\) och \(s\) definierar bistabilitetsområdet. Det uppstår när:

1. Den slutna fastpunkten existerar och är stabil: \(s/(1+\mu) > \theta\).
2. Den öppna fastpunkten existerar och är stabil: tillit–utforskandeslingan är stark nog att hålla den upplevda osäkerheten under tröskeln trots nollskilt \(B\).

För fast \(s\) och \(\theta\) är det snabba delsystemet bistabilt över ett intervall av \(P\). I standardparameterområdet vid \(s=1{,}5\) visar numerisk fortsättning att båda attraktorerna existerar för \(P\) ungefär mellan \(0{,}1\) och \(0{,}9\). Utanför detta intervall återstår endast en attraktor.

Separatrisen mellan attraktionsbassängerna är inte en enkel linje utan en krökt yta i det fyrdimensionella snabba tillståndsrummet. Dess läge beror på systemets historia, vilket är ursprunget till hysterosen i hela modellen.

### 3.3 Långsam permeabilitetsdynamik och hysteres

Den långsamma ekvationen för \(P\),

\[
\dot P = \rho_P \left( 1 - \sigma\!\big(k_P(F-\theta_P)\big) - P \right),
\]

skapar en positiv återkoppling som förstärker den attraktor systemet för närvarande befinner sig i.

I den öppna attraktorn är \(F\) relativt låg eftersom \(T\) är hög och \(B\) är liten. Med standardparametrar är \(F_{\text{öppen}} \approx 0{,}077\), klart under \(\theta_P=0{,}15\). Därför är målvärdet \(1-\sigma(k_P(F-\theta_P))\) nära \(1\), och \(P\) tenderar att öka mot \(1\).

I den slutna attraktorn är \(F_{\text{sluten}}\) hög (till exempel \(0{,}528\) vid \(s=1{,}5\)). Målvärdet är nära \(0\), så \(P\) tenderar att avklinga mot \(0\).

Den långsamma dynamiken driver således systemet bort från separatrisen: öppna tillstånd blir mer öppna, slutna tillstånd blir mer slutna. Detta är mekanismen bakom **hysteres**.

När systemet befinner sig på den öppna grenen och yttre förhållanden försämras (till exempel \(s\) ökar), rör sig den öppna fastpunkten mot separatrisen. Om systemet korsar den faller det till den slutna grenen. Väl på den slutna grenen börjar \(P\) att avklinga, vilket ytterligare förankrar slutenheten. För att återvända till den öppna grenen måste de yttre förhållandena förbättras så mycket att den slutna fastpunkten förlorar stabilitet – men eftersom \(P\) har avklingat kräver detta mycket säkrare förhållanden än den ursprungliga kollapspunkten. Denna asymmetri är den hysteresloop som observerats i de endimensionella svepen.

### 3.4 Sammanfattning av den analytiska strukturen

Modellen har en tydlig snabb–långsam struktur:

- Det snabba delsystemet har två stabila attraktorer: ett öppet tillstånd med hög tillit och starkt utforskande samt ett slutet tillstånd med noll tillit och noll utforskande.
- Bistabilitet uppstår över ett betydande intervall av \(P\) och \(s\), vilket skapar historieberoende.
- Den långsamma permeabilitetsvariabeln förstärker den attraktor systemet befinner sig i, vilket skapar hysteres och institutionell ärrbildning.

Denna struktur är inte antagen; den framträder ur samspelet mellan gräns-, tillit-, utforskande- och permeabilitetsdynamiken. Avsnitt 4 rapporterar systematiska simuleringar som kvantifierar bistabilitetsområdets utsträckning över parameterrymden, och avsnitt 5 undersöker hur brus interagerar med denna struktur.
