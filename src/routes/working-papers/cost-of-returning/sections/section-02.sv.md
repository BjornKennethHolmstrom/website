## 2. Kvarhållen kompetens och den homogena loopen

### 2.1 Modellen

$N$ observatörsorganisationer väljer var och en, vid periodiska utvärderingar, mellan en delad epistemisk infrastruktur (strategi $S$) och en oberoende sådan (strategi $I$). Det delade systemet bär en gemensam dold bias $b$ relativt det sanna tillståndet; oberoende system är i genomsnitt väntevärdesriktiga med idiosynkratiska felskalor $\sigma_i$, dragna lognormalt, $\sigma_i = \sigma_0 e^{hZ_i}$ med $Z_i$ standardnormal, så att $h$ indexerar den oberoende ekologins heterogenitet. Organisationer kan inte utvärdera mot sanning — det är den prekära situation som ärvts från Artikel X — så upplevda fel är konsensusrelativa. Med delad andel $f$ ligger konsensus approximativt vid $fb$, vilket ger

$$
E_S(f) = (1-f)^2 b^2,
\qquad
E_{I,i}(f) = f^2 b^2 + \frac{\sigma_i^2}{c_i^2}.
\tag{1}
$$

Dessa är förväntade konsensusrelativa kvadratfel, inte samplade observationsströmmar; gemensamt delat brus är undertryckt i reduktionen så att analysen isolerar gemensam bias, oberoende felheterogenitet och kvarhållen kompetens. Det första uttrycket är Artikel X:s mekanism i reducerad form: när $f$ stiger, utgör användarna i allt högre grad den konsensus mot vilken de bedöms, och det delade systemet framstår som mer träffsäkert trots att dess bias gentemot sanning är oförändrad. Det andra innehåller denna artikels tillägg. Varje organisation bär en kvarhållen oberoende kompetens $c_i \in (0,1]$, som återuppbyggs under oberoende användning, $c_i \leftarrow c_i + \eta_I(1-c_i)$, och avklingar under delad användning mot ett passivt golv, $c_i \leftarrow c_i + \rho(1-c_i) - \delta c_i$, där $\rho$ är passivt bibehållande (dokumentation, kvarvarande praktik) och $\delta$ är avklingning genom bristande användning. Under varaktig delad användning konvergerar kompetensen mot den fasta punkten

$$
c_* = \frac{\rho}{\rho+\delta},
\tag{2}
$$

så att *avklingnings-till-bibehållande-kvoten* $\delta/\rho$ är modellens enda vred för hur illa konsolidering eroderar latent kapacitet. En organisations effektiva straff för oberoende är

$$
x_i = \frac{\sigma_i^2}{c_i^2},
$$

dess idiosynkratiska fel uppblåst av förlorad kompetens. Nyttorna är $U_S = -E_S - C_S + \theta$ och $U_{I,i} = -E_{I,i} - C_I - L_0 - L_1 f$, där $C_S < C_I$ är driftskostnader, $L_0$ en grundläggande ansvarsbörda på oberoende, $L_1$ ansvarsspärren som växer med mängden, och $\theta$ en exogen fördel för det delade systemet (subvention, upphandlingspreferens, samordningsbekvämlighet) som sveps långsamt för att blottlägga inträdes- och återgångsgrenarna. Skriv $\Delta C = C_I + L_0 - C_S$ för det statiska kostnadsgapet. Strategirevidering är stokastiskt bästa svar med ett litet mutationsgolv $\mu$; det deterministiska skelettet i §3 ersätter det med strikt bästa svar. Det finns, medvetet, ingen omstartskostnad och ingen direkt nätverksprestandabonus: all svårighet att återvända måste genereras av kompetenstillståndet, annars installerar artikeln sin egen slutsats.

### 2.2 Den slutna loopen

I den homogena medelfältsreduktionen — den heterogena straffekologin ersatt av det representativa straffet $\mathbb{E}[x]$ — simuleras inte modellen utan löses. På den uppåtgående grenen är populationen oberoende, kompetensen intakt ($c_0 = 1$), och konsolideringen börjar när $U_S$ överstiger den representativa oberoende nyttan vid $f \approx 0$; på den nedåtgående grenen är populationen konsoliderad, den latenta kompetensen har avslappnats till $c_*$, och återgången börjar när den representativa användarens oberoende blir livskraftigt vid $f \approx 1$:

$$
\begin{aligned}
\theta_{\mathrm{inträde}} &= b^2 - \mathbb{E}[x_0] - \Delta C,
&\mathbb{E}[x_0] &= \mathbb{E}[\sigma^2]/c_0^2,\\[2pt]
\theta_{\mathrm{utträde}}^{\mathrm{medel}} &= -b^2 - \mathbb{E}[x_*] - \Delta C - L_1,
&\mathbb{E}[x_*] &= \mathbb{E}[\sigma^2]/c_*^2.
\end{aligned}
\tag{3}
$$

Hysteresens bredd är deras differens, och den delas upp exakt **[R inom modellen]**:

$$
W_H = 2b^2
+ \mathbb{E}[\sigma^2]\left(\frac{1}{c_*^2}-\frac{1}{c_0^2}\right)
+ L_1.
\tag{4}
$$

Varje term kan tillskrivas separat. $2b^2$-termen är enbart konsensus-konstitutionsmekanismen: det är den irreversibilitet som Artikel X:s dynamik genererar även utan kompetensavklingning och utan spärr, här explicitgjord som bistabilitet snarare än som en liten återgångssannolikhet. Mittertermen är kapacitetsavklingning, helt styrd av $\delta/\rho$ genom Ekv. (2); den försvinner då $\delta \to 0$ och växer som $\mathbb{E}[\sigma^2]\left[(1+\delta/\rho)^2 - 1\right]$. $L_1$-termen är ansvarsspärren. Vid parametervärdena för simuleringsstudien ($b = 0,\!45$, $\sigma_0 = 0,\!12$, $h = 0,\!15$, $C_S = 0,\!50$, $C_I = 1,\!00$, $L_0 = 0,\!20$, $L_1 = 0,\!15$, $\rho = 0,\!003$, $\delta = 0,\!005$, följaktligen $c_* = 0,\!375$) följer det ändliga agentsystemet formeln: förutsagda utträden för de fyra cellerna i avklingning × spärr-faktorialen är $-0,\!918$, $-1,\!010$, $-1,\!068$, $-1,\!160$ mot observerade $-0,\!913$, $-0,\!963$, $-1,\!062$, $-1,\!112$, med inträdeströskeln vid $-0,\!500$ observerad mot $-0,\!513$ förutsagd i varje cell.

![Hysteresgrenar för ändliga agenter](/working-papers/images/cost-of-returning/tail-main-branches.png)
*Figur 2.1 — Hysteresgrenar för ändliga agenter för de fyra avklingning × spärr-cellerna. Alla celler delar en inträdeströskel; återgångströsklarna separerar.*

Den systematiska, teckenkonsistenta residualen på utträdena — varje observerad återgång grundare än den homogena förutsägelsen, och i tilltagande grad med avklingning — är inte brus, och §3 är dess förklaring.

Två korollarier av den slutna formen förtjänar att uttalas eftersom de disciplinerar hur resultaten får beskrivas.

**Inträdesinvarians.** Kompetensavklingning flyttar återgångströskeln och bevisligen inte inträdeströskeln: på den uppåtgående grenen är kompetensen intakt till följd av konstruktionen, eftersom avklingning verkar först efter konsolidering, så $\partial\theta_{\mathrm{inträde}}/\partial\delta = 0$ medan $\partial\theta_{\mathrm{utträde}}/\partial\delta < 0$ **[R inom modellen]**. Asymmetrin — kapacitetsavklingning gör inte monokulturen lättare att inträda i; den gör den svårare att lämna — är således en strukturell egenskap hos var i cykeln avklingningen verkar, och den rapporteras som sådan snarare än som en empirisk upptäckt. Dess empiriska innehåll är *magnituden* av utträdesskiftet, som Ekv. (4) fastställer och simulationen bekräftar i ordning och, vid måttlig avklingning, i storlek.

**Uteslutning av interaktionsfrågan.** I denna reduktion är bidragen från avklingning och ansvar till $W_H$ additiva som en algebraisk identitet: båda ingår i det skalära utträdesvillkoret, utvärderat vid $f = 1$, som separata additiva termer. Frågan om ansvar och kapacitetsavklingning *interagerar* — om institutionellt skydd av den delade standarden förstärker den irreversibilitet som skapas av kapacitetsförlust — är därför omöjlig att ställa vid detta lager; varje simulering av denna reduktion kommer att returnera en interaktion på exakt noll, vilket en tidig version av denna studie också gjorde, innan identiteten uppmärksammades. Den metodologiska poängen följer Artikel XVIII:s disciplin om ständigt-på-tester: en registrerad fråga måste ställas i en modellklass som är kapabel att besvara den åt båda hållen. Det ändliga agent-lagret i §3 är den klassen, och interaktionsfrågan återupptas, och lämnas ärligt olöst, i §7.

---

