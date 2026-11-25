# Del II — Formellt ramverk: dual reglering och identifiering

## 2.1 Handlingar och information

Dual reglering, förknippad med Feldbaums klassiska formulering, motiverar denna distinktion. Ursprungspåståendet om en universellt optimal uppdelning i en säkerhetsekvivalent handling och en utforskningsterm dras tillbaka.

Betrakta ett partiellt observerat system med latent tillstånd \(x_t\), osäker parameter \(\theta_t\), handling \(u_t\) och observation \(y_t\). En övergångskärna och en observationskärna anger hur \(u_t\) kan förändra både det fysiska utfallet och senare evidens. En styrhandling med båda effekterna har en dual effekt. En möjlig informationsvinst innebär inte ensam att handlingen är värd sin kostnad eller ens tillåten.

## 2.2 Beslutsproblemet i informationstillståndet

Låt \(h_t\) innehålla tillgängliga observationer till och med \(y_t\) samt tidigare handlingar. Under en angiven Markovmodell är den gemensamma posteriorn \(b_t(dx,d\theta)=P(dx_t,d\theta_t\mid h_t)\) ett tillräckligt informationstillstånd. En punktskattning av \(x_t\) tillsammans med en marginell fördelning för \(\theta_t\) behöver inte bevara deras beroende. För ändlig horisont och additiva stegkostnader är en Bellmanekvation i informationstillståndet

\[
V_t(b)=\inf_{u\in U_t(b)}\{\bar c_t(b,u)+\mathbb E[V_{t+1}(\mathcal B(b,u,Y_{t+1}))\mid b,u]\}.
\]

Här är \(\mathcal B\) den gemensamma prediktions- och uppdateringsoperationen, och \(U_t(b)\) innehåller relevanta genomförbarhets- och säkerhetsvillkor. En slutkostnad ger randvillkoret. Lösningen kan innebära experiment, passivt lärande eller inga ytterligare prov. Den säkerhetsekvivalenta regulatorn med fast slumpmässig dither i del IV löser inte denna Bellmanekvation.

## 2.3 Utforskningssvält som villkorad felmod

Policyn som väljs för omedelbar prestanda kan undvika historiker som skulle skilja rivaliserande modeller åt. Om distinktionerna påverkar besluten och ingen annan genomförbar evidens finns, kan framtida beslut försämras. En regulator kan också få naturligt informativa data eller erhålla den nödvändiga evidensen genom återkoppling eller avsiktliga försök. Hypotesen om utforskningssvält kräver en jämförelse av tillgänglig information under faktiska alternativa policyer, inte bara antalet observationer eller insignalens varians.

## 2.4 Identifiering och excitation

För brusfri linjär regression \(y_t=\phi_t^\top\theta\) kräver entydighet från ändliga data full kolonnrang hos den staplade regressormatrisen. Vid brus spelar ackumulerad information och lämpliga brus- och exogenitetsvillkor roll. Uniform persistent excitation är ett starkare villkor, exempelvis

\[
\sum_{i=t-L+1}^{t}\phi_i\phi_i^\top\succeq\alpha I,\qquad \alpha>0.
\]

Villkoret gäller den gemensamma regressorn, inte enbart referensen eller styrsignalen. Appendix A.2 ger motexempel till det ursprungliga universella nödvändighetsanspråket. Följning av föränderliga parametrar kräver aktuell information i en takt och med en noggrannhet anpassad till driften; varken ändlig rang eller persistent excitation ensam garanterar en godtycklig skattningsmetods prestanda. Distinktionerna gäller den antagna observationsmodellen och gör inte institutionellt lärande till linjär regression genom analogi.
