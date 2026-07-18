## 2. Den importerade allokeringslagen

Fastställ en skalär responsprofil `f(ω) = |S(jω)|² ≥ 0` över en frekvensvariabel `ω`, där `S` är känslighetsfunktionen för en återkopplingsslinga som specificeras i Avsnitt 3. En störningsmiljö allokerar energi över frekvens; realiserad förlust är den energiviktade responsen,

    J(D) = ∫ f(ω) D(ω) dω,

där `D` är en spektraltäthet för störningen. En *passiv* miljö sprider en fast budget likformigt över det nåbara bandet; en *strategisk* miljö allokerar samma budget för att åstadkomma så mycket skada den kan, givet hur koncentrerad den tillåts vara.

Vi modellerar den strategiska aktören med tre parametrar. Dess budget är en total energi `E`. Dess räckvidd är en mängd `Ω_a` — de frekvenser vid vilka den överhuvudtaget kan placera störning. Dess koncentration är en faktor `c ≥ 1` som begränsar den täthet den får placera vid en enskild frekvens till `c` gånger den likformiga tätheten över `Ω_a`; `c = 1` tvingar den strategiska aktören att vara oskiljbar från den passiva, och `c → ∞` tillåter den att placera hela sin budget vid en enda frekvens. Med `μ_a` som det normaliserade (likformiga) måttet på `Ω_a`, löser den strategiska aktören

    J_strat = E · sup { ∫ f q dμ_a : 0 ≤ q ≤ c, ∫ q dμ_a = 1 }.

Den optimala `q` fyller de högsta-`f`-frekvenser den kan nå upp till täthetstaket, och förbrukar budgeten på den sämsta nåbara `1/c`-andelen av bandet. Värdet av detta program är exakt det betingade värde-vid-risk för `f` vid nivån `α = 1 − 1/c`:

    J_strat / E = CVaR_{1−1/c}( f ; μ_a on Ω_a ),          [importerad]

medelvärdet av `f` över dess sämsta `1/c`-måttsandel. Den passiva förlusten är det vanliga medelvärdet, `J_pass / E = E_{μ_a}[f]`, och den strategiska premien är skillnaden,

    G / E = CVaR_{1−1/c}(f) − E_{μ_a}[f] = M · U,

där `M = E_{μ_a}[f]` är den nåbara medelnivån och `U = CVaR/M − 1 ≥ 0` är ett skalinvariant index för övre-svans-heterogenitet. Koncentrationsparametern interpolerar två klassiska ändpunkter: vid `c = 1` är den strategiska förlusten det nåbara medelvärdet, en bandbegränsad `H₂`-liknande storhet; när `c → ∞` är den det nåbara essentiella supremumet, den ändlig-frekvens-`H∞`-förstärkningen.

Denna lag är importerad, inte härledd här. Supremumet ovan är riskenveloppsrepresentationen (dualiteten) för CVaR / expected shortfall: den sämsta-fall-förväntningen av `f` över alla mått vars täthet med avseende på basmåttet är begränsad av `1/α`. Det är ekvivalent ett distributionsrobust sämsta fall över en sannolikhetskvotsbegränsad tvetydighetsmängd. Vi etiketterar den därför som ett *importerat allokeringslemma* (Rockafellar–Uryasev) och gör inget anspråk på nyhet för det **[R, importerad]**. Två kvalifikationer följer med den. Det är ett *statiskt* lemma: förlust är linjär i den allokerade tätheten och det finns ingen tidsmässig, kausal eller övergångskostnad för att flytta tryck mellan frekvenser. Och den förutsätter tyst *upptäckt* — värdet `CVaR` uppnås endast av en aktör som vet var `f` är stor och därför kan lokalisera den övre svansen; en aktör med endast brusig kunskap om `f` realiserar strikt mindre, och interpolerar tillbaka mot det passiva medelvärdet. Vi återkommer till båda kvalifikationerna i Avsnitt 4.

En not om verifiering, eftersom serien behandlar det som en disciplinfråga. Den medföljande simulatorn beräknar `J_strat` på två oberoende sätt — en operationell girig vattenfyllnadsallokerare, och den analytiska CVaR-formeln ovan — och bekräftar att de överensstämmer i storleksordningen `10⁻¹⁴`. Detta kontrollerar diskretiseringen, inte teoremet; teoremet är importerat och identiteten är exakt.

---

