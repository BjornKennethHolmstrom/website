# Appendix A — Formellt

## A.1 Reduktionen (för §5.2)

Låt $M$ vara en Turingmaskin och $x$ en input. Konstruera reformsystemet $G_{M,x} = (S, U, R, C, V)$ enligt följande.

**Tillstånd.** $S = \mathrm{Conf}(M) \cup \{s_H\}$, där $\mathrm{Conf}(M)$ är mängden av konfigurationer av $M$ — bandinnehåll, huvudposition, kontrolltillstånd — och $s_H \notin \mathrm{Conf}(M)$ är ett nytt absorberande tillstånd.

**Dynamik.** $U$ verkar som $M$:s transitionsfunktion på $\mathrm{Conf}(M)$, förutom att varje konfiguration vars kontrolltillstånd är accepterande eller avvisande avbildas på $s_H$; och $U(s_H) = s_H$. Således är $s_H$ absorberande och nås om och endast om $M$ stannar.

**Samordning och livskraftighet.** Sätt $C = V = \{s_H\}$, så att $C \cap V = \{s_H\}$. Varje konfiguration som kodar en levande beräkning ligger utanför $C$; det enda samordnade, livskraftiga tillståndet är den stoppande sänkan.

**Initialtillstånd.** $s_0 = e(M, x)$, initialkonfigurationen för $M$ på $x$.

**Påstående.** Trajektorian för $U$ från $s_0$ går till slut in i och förblir i $C \cap V$ **omm** $M$ stannar på $x$.

*Bevis.* ($\Leftarrow$) Om $M$ stannar på $x$, når den simulerade beräkningen en stoppande konfiguration i ändligt många steg, varpå $U$ avbildar den på $s_H$, vilket är absorberande; trajektorian är därefter i $C \cap V$ för alltid. ($\Rightarrow$) Om $M$ inte stannar på $x$, lämnar $U$ aldrig $\mathrm{Conf}(M)$, och $\mathrm{Conf}(M) \cap C = \emptyset$; trajektorian går aldrig in i $C \cap V$ överhuvudtaget, än mindre förblir i den. $\square$

**Korollarium (Teorem, §5.2).** Anta att en algoritm $P$ avgjorde reformkonvergensproblemet för klassen $\mathcal{G}$ av reformsystem med universell uppdateringsdynamik. Då avgör $M_P$ — maskinen som, på input $(M, x)$, konstruerar $G_{M,x}$ och kör $P$ på $(G_{M,x}, s_0)$ — stopproblemet. Motsägelse. $\square$

**Anmärkning om förstärkningen.** Reduktionen använder specialfallet där konvergens innebär att gå in i ett *absorberande* samordningstillstånd. Det generella konvergenskriteriet i §5.1 — trajektorian går till slut in i $C \cap V$ och förblir där, möjligen med fortsatt rörelse inom det — är svagare, och varje beslutsprocedur för det generella problemet skulle avgöra detta specialfall. Oavgörbarhet för specialfallet implicerar därför oavgörbarhet för det generella. Detta är anledningen till att $C \cap V$ konstrueras som en singelton: ju stramare målmängd, desto starkare teoremet, och desto färre invändningar tillgängliga för en läsare som misstänker att en icke-stoppande beräkning skulle kunna uppfylla kriteriet genom att vandra in i någon tillfällig samordnad region.

**Anmärkning om ändlighet.** Varje hypotes i detta appendix misslyckas för en ändlig-tillståndsinstitution, för vilken $\mathrm{Conf}$ är ändlig och konvergens avgörs genom att simulera $|S|$ steg och avläsa om den resulterande cykeln ligger innanför $C \cap V$. Se §5.3: teoremet är en gränsidealisering, och den bindande begränsningen för verklig reformutvärdering är **kostnaden** för den simuleringen, inte dess omöjlighet.

## A.2 En not om vad som *inte* bevisas här

Inget formellt appendix ges för **No Free Lunch** (§6). Teoremet är standard, spegelmiljöskissen i §6.2 är tillräcklig för att se hur det går, och §6.3 förklarar det närmast innehållslöst. Att bevisa ett innehållslöst resultat på nytt i full formell dräkt vore **inflation genom formatering** — att slösa stringens på just det teorem som artikeln säger inte bär något innehåll, och därigenom låna dess skenbara tyngd. Utelämnandet är ett val och vi föredrar att namnge det.

---

# A.3 Två öppna problem, precist angivna

Artikeln lämnar två problem öppna. De anges här snarare än utspridda över §3.2, §3.5, §4.6 och §9.6, eftersom ett öppet problem som begravs i prosa inte blir föremål för arbete.

**De är inte oberoende. Det andra blockerar det empiriska testet av det första.**

---

## Öppet problem 1 — Ett teorem för certifieringsoförmåga

**Status.** §3 anger certifieringsoförmåga som `[IP]` och avstår uttryckligen från att kalla det ett Gödel-teorem. Det finns ingen diagonal konstruktion här — endast en regress (Rapport XVII) plus en stängning (Rapport XXI §5), vilket är en strukturell diagnos. Ett teorem skulle kräva tre saker, varav ingen tillhandahålls i denna artikel.

### (a) En definition av objektet

En **styrningsarkitektur** som en begränsad regulator med självrepresentationskapacitet: analogin till "ett formellt system tillräckligt rikt för att koda aritmetik." Ingredienserna existerar — Rapport 0:s begränsade faktorisering, Rapport XXI:s metastege med dess stängningsnivå $L^\ast$, Rapport XVII:s certifieringskärna — men ingen har sammanställt dem till en definition skarp nog att kvantifiera över. Minimalt måste den fastställa:

- faktoriseringen $R$ och begränsningen på dess kardinalitet;
- certifieringskärnan $K$: proceduren som avbildar observationer till attesteringar av att ett världsfaktum förelåg;
- systemets representation *av* $R$ och *av* $K$ — självmodellen, utan vilken problemet inte uppstår;
- metastegen och dess stängningsnivå $L^\ast$, vid vilken något hålls invariant eftersom kapaciteten har tagit slut.

### (b) Ett begrepp om en *arkitekturgenererad störning* — **den avgörande punkten, och den sannolika felpunkten**

Analogon till en sats konstruerad från systemets egna symboler. Detta krav har två läsningar och gapet mellan dem är där hela påståendet lever.

> **Trivial läsning:** en störning är arkitekturgenererad om arkitekturens drift var bland dess orsaker. Under denna läsning är klassen **universell** — varje policy har bieffekter, varje kategori formar vad den kategoriserar, varje institution förändrar den värld den styr — och certifieringsoförmågan är tom.
>
> **Stark läsning:** en störning är arkitekturgenererad om den är konstruerad *ur själva certifieringsapparaten*, på ett sådant sätt att absorbering av den kräver revidering av $K$, och $K$ kan inte licensiera sin egen ersättning. Detta gör apparaten **självundergrävande**, inte bara fallibel.

**Den öppna frågan är om den starka klassen är icke-tom.** Vi har inte visat att den är det. Vi tror inte att den är tom, och vi kan inte utesluta det. Skulle den starka klassen visa sig vara tom, löses certifieringsoförmågan upp i den vanliga iakttagelsen att institutioner kan ha fel om världen — vilket är sant, ointressant, och inte vad §3 hävdar.

Varje försök på detta problem bör börja här, inte vid (c).

### (c) Beviset för icke-absorberbarhet

Givet (a) och (b): visa att en störning enligt den starka läsningen inte kan absorberas utan att antingen

- bryta mot en invariant som systemet inte kan revidera inifrån, eller
- klättra till metanivå $L^\ast + 1$, vilken den begränsade stegen redan har stängts på.

### Den empiriska motsvarigheten, och varför §4 inte tillhandahåller den

§4 korrumperar certifieringskärnan **exogent** — experimentatorn inverterar signalen. Den visar därför vad som händer *när* en kärna misslyckas. Den visar inte ett system som **genererar sitt eget kärnmisslyckande**, vilket är krav (b) i empirisk dräkt.

> **Det empiriska problemet: konstruera en minimal modell där certifieringskärnan korrumperas av systemets egen framgångsrika drift, snarare än av ett ingrepp utifrån.**

Den modellen skulle vara den första genuina kandidaten till en styrningens Gödel-sats. Den existerar inte, i denna serie eller, såvitt vi vet, någonstans.

---

## Öppet problem 2 — En regulator som kan traumatiseras

**Status.** Registrerad förutsägelse C3 — att certifieringsreparation har en tidsfrist — är det enda genuint nya påstående som Rapport XXII hade, och det är **icke-ställbart i det system vi kunde bygga**. Dess nollresultat (reparation fungerar omedelbart vid varje fördröjning, ρ = 0,046) är ett faktum om vad en regelföljare *är*, inte ett faktum om certifiering:

> **En regelföljare har ingen tillit att förlora.** Dess givande är en funktion av signalen framför den, inte av någon historia med den signalen. Den kan inte vilseledas till misstro, eftersom den inte litar — den efterlever. Det finns ingen bassäng att falla ur, så det finns inget för timing att spela roll för.

Frågan som spelar roll är **policyhysteres**: huruvida en adaptiv regulator, efter att ha lärt sig att dess certifieringskanal ljuger, kan läras om att den talar sanning — och huruvida det finns en fördröjning bortom vilken den inte kan.

### Vad som krävs

En multi-agent-regulator som uppfyller **alla fyra**:

1. **Den lär sig.** Inte frusen vid utvärdering. Den måste vara kapabel att avlära tillit till en korrupt kanal och återförvärva den efter reparation.
2. **Den samarbetar tillförlitligt.** Den når en kooperativ jämvikt medierad av certifieringskanalen, och den gör det över frön — inte i en gynnsam minoritet av dem.
3. **Dess samarbete är kanalmedierat.** Givande måste vara betingat på certifieringssignalen, så att korrumpering av signalen är korrumpering av samordningen, snarare än att bara korrumpera en input som policyn har lärt sig att ignorera.
4. **Dess degradering är separabel från populationens.** Policyhysteres måste vara mätbar bland agenter som *överlever*, annars är den oskiljbar från den triviala observationen att de döda inte återhämtar sig.

### Det registrerade framgångskriteriet, överfört

Baslinjegrinden från §4.3, oförändrad: under `no_crisis`, överlevnad och samarbetsgrad platta över utvärderingshorisonten och sann-informerat givande ≥ 0,60, i ≥ 16 av 20 frön.

**Vi misslyckades med detta vid 4/20, 0/20 och 0/20 över tre konfigurationer** (Appendix B.4). I den stora majoriteten av frön konvergerar inläraren mot en **jämvikt utan handel där generalisten — som skördar båda resurserna och inte behöver någon — överlever ensam**, medan båda specialisterna svälter.

### Varför detta är ett forskningsproblem och inte ett trimningsproblem

Vi slutade under en regel fastställd före det sista försöket, och anledningen är värd att ange som en del av problemet:

> Varje ytterligare konfiguration skulle ha varit ett sökande efter den baslinje som producerar det resultat artikeln vill ha. Vid den punkten är förhandsregistreringen dekoration, och "fyndet" är en artefakt av sökandet.

Misslyckandet är i sig informativt. Tre agenter, hård komplementaritet, en *sanningsenlig* signalkanal, fördröjd givarkredit, ett explicit överlevnadsmål — och samordning framträder ändå inte tillförlitligt. **Samordning är en betingad attraktor, inte en oundviklighet**, vilket är tesen för samordningslinjen av arbete, som här anländer objuden och mot denna artikels intressen. Öppet problem 2 tillhör den linjen, och Rapport XXII:s oförmåga att lösa det erbjuds som evidens för den.

### Beroendet

**Öppet problem 2 blockerar den empiriska halvan av Öppet problem 1.** Ett system som aldrig litade på sin certifieringskärna kan inte visas ha förlorat förmågan att revidera den. Fram tills att en traumatiserbar regulator existerar, har den endogena korruptionsmodellen i ÖP1 ingenting att korrumpera som skulle märka det.

---

## A.4 Två mindre problem, protokollförda

**A.4.1 — Partiell och stokastisk korruption.** §4:s kanal är **inverterad**, inte degraderad. En kanal som är rätt 70% av tiden är den form som verkligt certifieringsmisslyckande oftast tar, och den skulle kunna bete sig helt annorlunda — den skulle mycket väl kunna producera den *missade* certifiering som total inversion inte gör, eftersom en partiellt tillförlitlig kanal inte systematiskt skulle översörja någon enskild part. Översvämningsmekanismen (§4.5) kan vara en artefakt av totalitet. Otestat.

**A.4.2 — Generaliserar översvämning?** Mekanismen beror på att mottagaren är **oförmögen att skörda** vad den översörjs med — dess lager stiger eftersom gåvor är den enda källan och ingenting konsumerar överskottet. Huruvida den överlever rikare komplementaritetsstrukturer, fler agenter eller resurser med avklingning är en förmodan som resultatet stöder snarare än ett påstående det bevisar. Ett negativt utfall här skulle begränsa §7.3:s tillsynsprincip till en snäv klass av allokeringssystem, vilket vore värt att veta.
