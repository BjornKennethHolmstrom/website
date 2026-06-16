### Appendix E — Observatör–anläggning‑identitet och mätning–störning‑kopplingen

Detta appendix tillhandahåller den formella grunden för Del I. Det är den konceptuella slutstenen, och det bär mindre beräkningsmässig tyngd än A, C och D med avsikt: det centrala påståendet — att observationshandlingen för ett själv är en handling på det observerade systemet — är strukturellt, och de empiriska och simulerade konsekvenserna av det påståendet etablerades i de andra appendixen. E anger premissen precist, identifierar exakt vilken reglerteknisk garanti den upphäver, och demonstrerar de två konsekvenser som tillhör den ensam och inte antas när den anges. Separationsprincip‑påståendet (E.1) är **[R]** som ett gränsuttalande; premissen att den fallerar för ett själv är **[IP]**; fixpunktsresultaten (E.2–E.3) är beräkningsverifierade konsekvenser av den reflexiva kopplingen, inte om‑uttryck av den.

### E.1 Separationsprincipen och premissen som fallerar

Separationssatsen (säkerhetsekvivalenssatsen) för linjär‑kvadratisk‑gaussisk reglering anger att den optimala kontrollanten dekomponeras i två oberoende designade delar: en optimal tillståndsskattare, och en styrlag som agerar på skattningen exakt som den skulle på det sanna tillståndet. Skattning och styrning är separerbara — man kan först fastställa tillståndet, sedan bestämma vad man ska göra. Resultatet vilar på en strukturell premiss som sällan explicitgörs eftersom den nästan alltid är uppfylld: observationsprocessen inträder inte i anläggningens dynamik. Att mäta systemet förändrar det inte. **[R]**

Ett själv bryter mot denna premiss vid dess rot (Del I §1.3). Själva handlingen att observera sig själv — att rikta uppmärksamheten mot ett tillstånd, att fråga sig hur man känner, att berätta sin situation — inträder i dynamiken hos just det tillstånd som observeras; det finns ett system, och att avläsa det är att operera på det. Premissen för separationssatsen är därför falsk för ett själv, och dess slutsats är inte tillgänglig: skattning och styrning är inte separerbara, och "skatta sedan agera" är inte en sekvens ett själv kan utföra, eftersom skattandet redan är ett agerande. **[IP]** Detta är samma typ av gräns som gräns‑appendixet registrerade för småförstärkningssatsen: en namngiven reglerteknisk garanti vars angivna premiss själv‑fallet inte uppfyller.

En not om vad detta appendix inte gör. Man skulle kunna modellera mätningens återverkan direkt — anta att observera injicerar en tillståndsstörning, sedan visa att en kontrollant som ignorerar den gör sämre ifrån sig — men den demonstrationen vore cirkulär, och återvinner endast den premiss den antog. E demonstrerar istället två konsekvenser av den reflexiva kopplingen som *inte* antas när den anges: att självperception har många självbekräftande fixpunkter snarare än ett sant värde (E.2), och att observation därför kan omlokalisera det tillstånd den observerar (E.3). Båda uppstår ur kopplingen; ingen är inbyggd i den.

### E.2 Självperception som fixpunktsurval, inte sanningsupptäckt

Modellera ett självtillstånd $x$ och en självuppfattning $b$ på någon dimension. En *passiv* observatörs uppfattning följer en fast extern sanning: $x$ är opåverkat av att observeras, och $b$ konvergerar mot den. En *reflexiv* observatörs uppfattning inträder i dynamiken — att tro drar tillståndet mot uppfattningen ($x \leftarrow x + \eta(b-x)$, observation som handling) och avläsningen dras mot uppfattningen ($\text{obs} = x + \text{bias}\,(b-x)$, bekräftelse). Simuleringen, från ett gemensamt sant initialtillstånd $x_0 = 0,5$:

- *Passiv* ($\eta=0$, ingen bias): uppfattningen konvergerar till $0,50$ från varje initial uppfattning $b_0 \in \{0,1,\dots,0,9\}$ — en enda fixpunkt, sanningen, upptäckt oavsett var uppfattningen började.
- *Reflexiv* ($\eta=0,15$, $\text{bias}=0,5$): det slutliga tillståndet och uppfattningen väljs av $b_0$ — $b_0=0,1 \to 0,245$, $b_0=0,5 \to 0,50$, $b_0=0,9 \to 0,755$ — ett *kontinuum* av självbekräftande fixpunkter, var och en en blandning av initial uppfattning och tidigare tillstånd (här symmetrisk kring det sanna $0,5$ eftersom bekräftelsen är partiell), där den som nås väljs av var uppfattningen började snarare än av någon tidigare sanning.

Detta är det formella innehållet i §1.3: för ett själv är "korrekt självperception" inte återvinnandet av ett redan existerande faktum utan urvalet av en fixpunkt i en reflexiv process — en uppfattning som är sann om det tillstånd din tro på den producerar. Fixpunkterna är neutralt stabila längs mångfalden $b=x$, så ett självbegrepp, när det väl har etablerats, är självbekräftande och består. **[IP]** premiss; mångfald är en verifierad, icke‑antagen konsekvens. Farokanten är omedelbar: ett falskt men självbekräftande självbegrepp är en fixpunkt som vilken annan som helst, och den apparat som skulle kunna avslöja dess falskhet är den apparat som upprätthåller den — det förseglade självet i Del VII, sett vid sin rot.

### E.3 Självobservation som intervention

Samma koppling som producerar faran producerar spaken i §1.4. Eftersom observation flyttar tillståndet kan en medveten förändring av uppfattningen *omlokalisera* fixpunkten — något en passiv observatör inte kan göra, eftersom det för den bara finns en sanning att finna. Med start låst vid ett lågt självbegrepp ($b=x=0,2$) och tillämpande av en engångsintervention av uppfattningen till $0,65$ vid mitten av körningen, ger simuleringen: det reflexiva systemet omlokaliserar sig och håller fast vid ett nytt självbekräftande tillstånd ($b=x=0,487$), medan det passiva systemet återgår till det sanna $0,2$, där interventionen lämnar inga spår. **[IP]/[H]**, verifierad.

Två ärliga kvalificeringar. Omlokaliseringen landar *delvis* — vid $0,487$, mellan det gamla tillståndet och det avsedda $0,65$ — eftersom den nya fixpunkten sätts av balansen mellan handling ($\eta$) och bekräftelse ($\text{bias}$), så en enda åter‑berättelse flyttar självet mot ett valt självbegrepp men inte hela vägen dit; uthållig intervention krävs för att flytta längre, vilket är anledningen till att de praktiker som utnyttjar denna spak (kontemplativ uppmärksamhet, den disciplinerade åter‑berättelsen i terapi) är upprepade snarare än singulära, och kopplar till de små, uthålliga åtagandena i Del III och IV. Och detta är den mekanism, utlovad i §1.4, genom vilken Själv I:s asymptot $G_{\text{själv}}\to 0$ överhuvudtaget är nåbar: i ett system där observera är att handla, är att rikta uppmärksamheten mot en utesluten dimension samma operation som att börja släppa in den — spaken och faran är en koppling sedd från två sidor.

### E.4 Den gemensamma roten

Observatör–anläggning‑identitet är en enda premiss, och papprets huvudsakliga avsteg från den överordnade serien är dess konsekvenser, etablerade där var och en kunde testas:

- golvet under självobservations‑korrelation, eftersom kanaler delar ett substrat (Appendix A.5);
- den oreviderbara själv‑legitimiteten, eftersom det bedrägliga instrumentet är revisionsinstrumentet (Appendix C.6–C.7);
- den tvåsidiga gränsen för själv‑revidering, eftersom experimentatorn är experimentet (Appendix D.4–D.5);
- frånvaron av någon brandvägg mellan primitiver, vilket gör sammansatt misslyckande till standard (Del VII).

Till dessa lägger E de två konsekvenser som tillhör själva premissen: mångfalden av självbekräftande fixpunkter (E.2) och omlokaliseringsspaken (E.3). Fördelningen är medveten och är den ärliga formen av papprets evidens. E är slutstenen — det enda strukturella faktum från vilket avvikelserna följer — men det är inte där tyngden vilar. Tyngden vilar på de appendix som kunde beräkna eller simulera konsekvenserna, och E:s roll är att visa att dessa spridda resultat inte är fem separata fynd utan en premiss sedd fem gånger: i ett själv kan kontrollanten och anläggningen inte dras isär, och allt pappret hävdar som den överordnade serien inte gör är vad detta enda faktum för med sig.

### E.5 Simulering

Repo‑fil: `self_ii_appendix_e_observer_plant.py`.

```python
import numpy as np

def observe_self(b0, eta, bias, x0=0.5, lam=0.2, T=4000,
                 intervene_at=None, intervene_to=None):
    """Reflexiv självobservation. eta: observation-som-handling (0 = passiv observatör);
    bias: bekräftelse i avläsningen. Valfri engångsintervention av uppfattningen."""
    x, b = x0, b0
    for t in range(T):
        if intervene_at is not None and t == intervene_at:
            b = intervene_to
        x = x + eta*(b - x)                 # att observera/tro flyttar tillståndet (1.3/1.4)
        obs = x + bias*(b - x)              # avläsning dragen mot uppfattning (bekräftelse)
        b = b + lam*(obs - b)
    return round(x, 3), round(b, 3)

if __name__ == "__main__":
    print("E.2 passiv vs reflexiv (gemensam sann x0=0.5):")
    for b0 in (0.1, 0.5, 0.9):
        print(f"   b0={b0}: passiv {observe_self(b0,0.0,0.0)}  reflexiv {observe_self(b0,0.15,0.5)}")
    print("E.3 uppfattningsintervention -> 0.65 vid t=1500 (start låst vid 0.2):")
    print("   reflexiv:", observe_self(0.2,0.15,0.5,x0=0.2,intervene_at=1500,intervene_to=0.65))
    print("   passiv  :", observe_self(0.2,0.0,0.0,x0=0.2,intervene_at=1500,intervene_to=0.65))
```
