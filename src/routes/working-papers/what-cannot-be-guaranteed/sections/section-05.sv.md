# §5 — Den andra gränsen: ingen kan utifrån avgöra om en reform konvergerar

## 5.1 Frågan, ställd så att den kan besvaras

Avsnitt 3 frågade om en styrningsarkitektur inifrån kan validera att dess egen grund för korrigering fortfarande håller. Detta avsnitt ställer den komplementära frågan, och det är den som reformatörer faktiskt ställer: *innan vi gör detta, kan någon säga oss om det kommer att fungera?*

Preciserat är frågan ett beslutsproblem. Låt ett **reformsystem** vara en tupel

$$G = (S,\ U,\ R,\ C,\ V)$$

där $S$ är det gemensamma tillståndsrummet för agenter, resurser, föreställningar och institutionella regler; $U: S \to S$ är den uppdateringsdynamik som den föreslagna reformen inducerar; $R$ är den faktorisering som är tillgänglig för agenterna; $C \subseteq S$ är samordningskriteriet — mängden av tillstånd i vilka agenternas handlingar är ömsesidigt förenliga i den mening som guvernörerna i Rapport XIX upprätthåller; och $V \subseteq S$ är livskraftighetsmängden, de tillstånd i vilka essentiella variabler förblir inom gränserna.

**Reformkonvergensproblemet.** Givet $(G, s_0)$, avgör om trajektorian $s_{t+1} = U(s_t)$ till slut går in i och förblir i $C \cap V$.

Detta är vad en reformutvärdering *är*, när dimman är borta från den. En konsekvensbedömning, en finanspolitisk prognos, en konstitutionell granskning: var och en är ett försök att besvara en instans av detta problem, under resursbegränsningar och med en tolerans för fel. Frågan i detta avsnitt är om problemet överhuvudtaget har en generell lösning.

## 5.2 Teoremet

**Teorem (Reformkonvergensens oavgörbarhet, [R]; Appendix A.2).** *Låt $\mathcal{G}$ vara en klass av reformsystem vars uppdateringsdynamik kan simulera en universell Turingmaskin. Då finns det ingen algoritm som, för varje $G \in \mathcal{G}$ och varje $s_0$, avgör om trajektorian för $U$ från $s_0$ till slut går in i och förblir i $C \cap V$.*

Beviset är en reduktion från stopproblemet, och det enda steget som kräver omsorg är konstruktionen av målmängden. Det räcker inte att ordna så att den simulerade maskinens stoppande tillstånd ligger innanför $C \cap V$; man måste också utesluta möjligheten att en *icke-stoppande* beräkning driver in i någon annan samordnad, livskraftig region och uppfyller konvergenskriteriet av en slump. Så vi konstruerar $G_{M,x}$ så att $C \cap V = \{s_H\}$ exakt — ett enda absorberande tillstånd, som inträffar om och endast om $M$ stannar på $x$, där varje tillstånd som kodar en levande beräkning ligger utanför $C$. Konvergens *är* då stopp, och en beslutsprocedur för det ena skulle vara en beslutsprocedur för det andra.

Två saker som teoremet inte kräver, och det spelar roll att det inte gör det.

**Det kräver inte institutionell självreferens.** Den formella källan till oavgörbarheten är uppdateringsdynamikens beräkningsmässiga universalitet — inget mer. Självreferens är en plausibel *väg* genom vilken verkliga styrsystem förvärvar tillräcklig uttryckskraft för att gränsen ska bita: en institution som kan skriva om sina egna beslutsregler kan därmed koda godtycklig beräkning i omskrivandet. Men teoremet gäller för system utan någon självmodell alls, förutsatt att dynamiken är tillräckligt rik. Att sammanblanda de två är det vanliga övergreppet i denna litteratur, och §2:s separation av källor beror på att inte göra det. Certifieringsoförmågan i §3 handlar *om* självreferens; detta resultat gör det inte.

**Det kräver inte att samordningskriteriet är exotiskt.** Varje $C$ och $V$ i vilken ett stoppande tillstånd kan bäddas in duger. Teoremet är därför inte ett påstående om svårigheten att *definiera* samordning — en svårighet som serien tar på allvar på andra håll — utan om att avgöra om den är nådd.

## 5.3 Teoremet är grunt, och att säga det är poängen

Givet Turing-fullständighet är reduktionen ovan rutinmässig. Det är värt att vara explicit om hur rutinmässig: samma slutsats följer från åtminstone tre oberoende standardresultat. Rices teorem ger oavgörbarhet för praktiskt taget varje icke-trivial semantisk egenskap hos ett program, av vilken "konvergerar till ett samordnat tillstånd" är en. Richardsons teorem och dess släktingar ger oavgörbarhet för begränsningsproblem för tillräckligt rika dynamiska system, och att förbli inom $V$ är ett begränsningsvillkor. Och den direkta reduktion vi har givit är den läroboksmässiga konstruktionen. **När ett resultat faller ut ur tre orelaterade teorem, berättar det inte något specifikt för dig om det studerade objektet.** Det berättar att objektet antogs vara beräkningsmässigt universellt, och allt följer av det antagandet snarare än av något styrningsformat.

Serien har varit här förut. Rapport XX härledde Ashbys lag från begränsad representation och rapporterade att härledningen var närmast definitionsmässig — ett verkligt teorem med grunt innehåll — eftersom det var mer värdefullt att rapportera det än att klä ett fackprincipsargument som en upptäckt. Samma disciplin gäller här, och skarpare, eftersom orden *Gödel* och *Turing* bär en prestige som gör läsarens tänkande åt dem. En artikel som tillkännagav "reformkonvergens är oavgörbart" och stannade skulle dra nytta av den prestigen. Vad som följer är den del som inte är gratis.

**Teoremet står i spänning med seriens egen premiss, och spänningen är lärorik.** Rapport 0 och Rapport XX bygger allt på *begränsad representation*: en ändlig regulator som partitionerar den uppgiftsrelevanta världen i ett begränsat antal interna tillstånd. Men ett system med ett ändligt tillståndsrum har ett *avgörbart* konvergensproblem — simulera det under $|S|$ steg och avläs om det har gått in i en cykel innanför $C \cap V$. Oavgörbarhet kräver obegränsning, vilket är precis vad resten av serien förnekar. **De två gränserna kan därför inte båda vara skarpa samtidigt**, och att låtsas något annat vore en unifiering köpt med en motsägelse. Detta är ett av skälen till att §2 vägrar att härleda triptyken från en enda gräns.

Upplösningen är inte att överge teoremet utan att omlokalisera det. För en ändlig institution är konvergens avgörbart och beslutsproceduren kostar tid exponentiell i tillståndsbeskrivningen — vilket är att säga, avgörbart och *oanvändbart*. **Den operativa gränsen för reformutvärdering är komplexitet, inte beräkningsbarhet.** Oavgörbarhetsteoremet är den idealiserade skugga som kastas av ett ändligt men astronomiskt dyrt problem, och det är kostnaden, inte omöjligheten, som en reformatör möter. Vi anger detta som den ärliga formen av resultatet:

> **[R]** För obegränsad uppdateringsdynamik är reformkonvergensproblemet oavgörbart.
> **[R]** För ändliga system är det avgörbart, till kostnad exponentiell i tillståndsbeskrivningen.
> **[IP]** För verkliga institutioner är det andra den bindande begränsningen, och det första är en gränsidealisering av den.

Beräkningsbarhetsinramningen är den traditionella. Komplexitetsinramningen är den som gör arbete.

## 5.4 Vad teoremet förbjuder, och vad det licensierar

**Förbjudet: tron att tillräcklig analytisk kapacitet sluter gapet.** Den intuition som teoremet dödar är inte "reformer är svåra att förutsäga" — alla tror det — utan det tysta antagandet att svårigheten är ett *resurs*problem, lösbart genom en bättre modell, en större simulering, en mer kapabel analytiker eller en tillräckligt kraftfull maskin. På den obegränsade klassen finns ingen procedur alls, och på de begränsade klasser vi faktiskt bebor är proceduren exponentiell. Ingetdera fixas genom skalning. En institution som behandlar *ex ante*-certifiering av reform som ett lösbart ingenjörsproblem och bemannar det därefter är inte ambitiös; den missförstår problemets typ.

**Licensierat: nästan allt som serien redan rekommenderar, nu som konsekvens snarare än råd.** Skyddade experimentutrymmen (Rapport VII) är den enda tillgängliga metoden när ingen *a priori*-procedur existerar: du kan inte beräkna svaret, så du måste instrumentera frågan. Vaktposter (Rapport XIX) är nödvändiga eftersom divergens måste *upptäckas* när den inte kan *förutsägas*. Reversibilitet och solnedgångsklausuler (Rapport XXI §6) är det rationella svaret på ett vad vars utfall inte kan avgöras i förväg: en irreversibel reform är en satsning på ett beslutsproblem som du just har fått veta att du inte kan avgöra. Vad §7 kommer att utveckla är att dessa inte längre är försiktighetsrekommendationer utan tvingande drag.

**En brasklapp som måste bevaras, eftersom det är den som oftast tappas.** *Oavgörbarhet implicerar inte oförutsägbarhet i praktiken.* Stopproblemet är oavgörbart, och termineringsbevisare avgör likväl frågan för den överväldigande majoriteten av program som någon faktiskt skriver. Oavgörbarhet är ett påstående om det *värsta fallet över en obegränsad klass*; det är fullständigt förenligt med en beslutsprocedur som lyckas på varje instans som en verklig institution någonsin kommer att möta. Att glida från teoremet till "vi kan inte veta om reformer kommer att fungera" är att begå precis det fel som §6 kommer att identifiera i missbruket av No Free Lunch: att förvandla ett påstående om frånvaron av universella garantier till en licens för fatalism. Teoremet tar bort en garanti; det tar inte bort kunskap.

**Det konstruktiva innehållet är därför ett krav: namnge begränsningen.** Begränsade klasser av dynamik förblir perfekt avgörbara — kontraktionsavbildningar, potentialspel, monotona system, acykliska beroendestrukturer, linjär-kvadratisk reglering med ändlig horisont. Ingen verklig institution är designad i den obegränsade klassen. Så teoremets ingenjörsmässiga översättning är inte *överge utvärdering* utan *ange den klass av dynamik under vilken din utvärdering är giltig, och instrumentera för det fall att systemet lämnar den*. En konsekvensbedömning som inte anger vilka strukturella antaganden som gör dess projektion meningsfull är inte en konservativ uppskattning; det är ett obegränsat påstående om ett oavgörbart problem. **[IP]**

## 5.5 Paret med §3, hållet isär

Det är frestande att smälta samman detta avsnitt med det föregående. Båda är begränsande, båda rör omöjligheten av ett visst slags garanti, och båda slutar i samma designprinciper. Men de är olika resultat och artikeln slår inte ihop dem:

> **§3 (certifieringsoförmåga)** rör gränserna för att validera en nödvändig förändring **inifrån** det system som behöver den.
> **§5 (reformers oavgörbarhet)** rör gränserna för att förutsäga, **utifrån**, huruvida en föreslagen förändring kommer att konvergera.

Det första är en regress; det andra är en reduktion. Det första har verkligt innehåll och inget teorem; det andra har ett teorem och tunt innehåll. Det första biter på arkitekturer som kan representera sig själva; det andra biter på arkitekturer som kan beräkna, oavsett om de kan representera sig själva. En institution skulle i princip kunna lida av det ena utan det andra — ett självblint men beräkningsmässigt universellt system möter §5 och inte §3; ett självrepresenterande ändligt-tillståndssystem möter §3 och inte, i någon bitande mening, §5.

Att de två likväl konvergerar mot samma garderingar — sandlådor, vaktposter, reversibilitet — är den observation som §7 förvandlar till ett argument. Det är en konvergens av konsekvenser, inte av orsaker, och artikelns struktur beror på att hålla isär distinktionen.

---

## Appendix A.2 — Reduktionen (för §5.2)

Låt $M$ vara en Turingmaskin och $x$ en input. Konstruera reformsystemet $G_{M,x} = (S, U, R, C, V)$ enligt följande.

**Tillstånd.** $S = \mathrm{Conf}(M) \cup \{s_H\}$, där $\mathrm{Conf}(M)$ är mängden av konfigurationer av $M$ (bandinnehåll, huvudposition, kontrolltillstånd) och $s_H \notin \mathrm{Conf}(M)$ är ett nytt absorberande tillstånd.

**Dynamik.** $U$ verkar som $M$:s transitionsfunktion på $\mathrm{Conf}(M)$, förutom att varje konfiguration i vilken $M$:s kontrolltillstånd är accepterande eller avvisande avbildas på $s_H$; och $U(s_H) = s_H$. Således är $s_H$ absorberande och nås om och endast om $M$ stannar.

**Samordning och livskraftighet.** Sätt $C = V = \{s_H\}$, så att $C \cap V = \{s_H\}$. Varje konfiguration som kodar en levande beräkning ligger utanför $C$; det enda samordnade, livskraftiga tillståndet är den stoppande sänkan.

**Initialtillstånd.** $s_0 = e(M, x)$, initialkonfigurationen för $M$ på $x$.

**Påstående.** Trajektorian för $U$ från $s_0$ går till slut in i och förblir i $C \cap V$ **omm** $M$ stannar på $x$.

*Bevis.* ($\Leftarrow$) Om $M$ stannar på $x$, når den simulerade beräkningen en stoppande konfiguration i ändligt många steg, varpå $U$ avbildar den på $s_H$, vilket är absorberande; trajektorian är därefter i $C \cap V$ för alltid. ($\Rightarrow$) Om $M$ inte stannar på $x$, lämnar $U$ aldrig $\mathrm{Conf}(M)$, och $\mathrm{Conf}(M) \cap C = \emptyset$; trajektorian går aldrig in i $C \cap V$ överhuvudtaget, än mindre förblir i den. $\square$

**Korollarium (Teorem, §5.2).** Anta att en algoritm $P$ avgjorde reformkonvergensproblemet för klassen $\mathcal{G}$ av reformsystem med universell uppdateringsdynamik. Då avgör $M_P$ — maskinen som, på input $(M, x)$, konstruerar $G_{M,x}$ och kör $P$ på $(G_{M,x}, s_0)$ — stopproblemet, en motsägelse. $\square$

**Anmärkning om förstärkningen.** Reduktionen använder specialfallet där konvergens innebär att gå in i ett *absorberande* samordningstillstånd. Det generella konvergenskriteriet i §5.1 — trajektorian går till slut in i $C \cap V$ och förblir där, möjligen med fortsatt rörelse inom det — är svagare, och varje beslutsprocedur för det generella problemet skulle avgöra detta specialfall. Oavgörbarhet för specialfallet implicerar därför oavgörbarhet för det generella. Detta är anledningen till att $C \cap V$ konstrueras som en singelton: ju stramare målmängd, desto starkare det resulterande teoremet, och desto färre invändningar tillgängliga för en läsare som misstänker att en icke-stoppande beräkning skulle kunna uppfylla kriteriet genom att vandra in i någon tillfällig samordnad region.

**Anmärkning om ändlighet.** Varje hypotes i detta appendix misslyckas för en ändlig-tillståndsinstitution, för vilken $\mathrm{Conf}$ är ändlig och konvergens avgörs genom att simulera $|S|$ steg. Se §5.3: teoremet är en gränsidealisering, och den bindande begränsningen för verklig reformutvärdering är kostnaden för den simuleringen, inte dess omöjlighet.
