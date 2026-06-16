### Appendix C — Själv‑legitimitetsdynamik

Detta appendix tillhandahåller den formella grunden för Del IV. Kopplingsformen är själv‑skalans instans av Rapport XIII:s LPV‑modell och är **[IP]** som en representation; de dynamiska konsekvenserna som härleds ur den (existens‑bifurkationen, hysteresen, transparensfällan) följer av modellen och är beräkningsverifierade. Sveksasymmetrin $\gamma \gg \alpha$ är **[H]**. Den kliniska inhägnaden (C.7) är **[R]** som ett gränsuttalande, och bifurkationen i C.3 gör det skarpare snarare än mjukare. Skriptet finns i C.9.

### C.1 Kopplingen

Själv‑legitimitet är ett skalärt kopplingstillstånd $L \in [0,1]$ som modulerar båda kanalerna för självstyrning på en gång, i enlighet med Rapport XIII:

$$\mathbf{B}_{\text{eff}} = L\,\mathbf{B}, \qquad \mathbf{V} = \mathbf{V}_0 / L.$$

Lågt $L$ försvagar själv‑aktivering (ett direktiv diskonteras i förväg i den grad personen inte förväntar sig själv att respektera det — förstärkningen inträder i varje länk av Appendix B) och blåser upp själv‑observationsbrus (själv‑rapporter betros mindre, så introspektiv varians stiger). En variabel, två kanaler, som rör sig tillsammans. **[IP]**

### C.2 Dynamiken

Låt utfallet per period vara leverans eller svek av ett självåtagande, och låt $L$ uppdateras asymmetriskt:

$$L_{t+1} = \begin{cases} L_t + \alpha\,(1 - L_t) & \text{vid leverans (bygg, förstärkning } \alpha) \\[2pt] L_t - \gamma\,L_t & \text{vid svek (urholka, förstärkning } \gamma) \end{cases}, \qquad \gamma \gg \alpha.$$

Faktorerna $(1-L)$ och $L$ ger mättnad i $[0,1]$. Leverans är endogen: dess sannolikhet stiger när legitimiteten korsar den nivå $L_{\text{halv}}$ vid vilken själv‑aktivering blir tillförlitlig, $p_{\text{leverans}}(L) = \sigma\!\big(k(L - L_{\text{halv}})\big)$, där lägre $L_{\text{halv}}$ kodar högre *kompetens* — kapaciteten att leverera även vid blygsam självtillit. Den förväntade driften är

$$\mathbb{E}[\Delta L \mid L] = p_{\text{leverans}}(L)\,\alpha(1-L) \;-\; \big(1 - p_{\text{leverans}}(L)\big)\,\gamma L. \tag{[IP]}$$

### C.3 Existensbifurkationen

Simuleringen bringade i dagen ett resultat starkare än Del IV:s prosa, och i enlighet med seriens praxis rapporteras det såsom modellen ger det. **Huruvida en sund självtillit‑jämvikt existerar överhuvudtaget beror gemensamt på kompetens och sveksasymmetrin.** Fastställ fixpunkterna för $\mathbb{E}[\Delta L\mid L]=0$:

- *Hög kompetens* ($L_{\text{halv}}=0,3$): en stabil hög‑tillit‑jämvikt består över de testade asymmetrierna (sund fixpunkt $\approx 0,97$–$0,99$ vid $\gamma/\alpha$ upp till $6$), men separatrisen — den instabila gränsen för kollapsbassängen — *stiger* med asymmetrin ($L^\ast = 0,25,\,0,45,\,0,55$ vid $\gamma/\alpha = 2,\,4,\,6$). Högre sveks‑känslighet förstör inte det sunda tillståndet men förstorar den bassäng från vilken man faller in i kollaps.
- *Måttlig kompetens* ($L_{\text{halv}}=0,5$): den sunda jämvikten *existerar* vid $\gamma/\alpha \le 2$ och *förintas* av $\gamma/\alpha = 4$. Bortom bifurkationen är den enda attraktorn $L \to 0$: en **enbart‑kollaps‑regim** i vilken ingen nivå av självtillit är hållbar och spiralen inte är en risk utan det enda utfallet.

Detta förfinar Del IV materiellt. Självbedrägerispiralen är inte bara en bassäng man kan falla in i; för tillräckligt låg kompetens relativt sveksasymmetrin är den det enda stabila beteende systemet medger, och att börja med hög tillit hjälper inte — det finns inget sunt tillstånd att stanna i. **[R]** givet modellen; beräkningsverifierad.

### C.4 Hysteres

Eftersom urholkning använder förstärkning $\gamma$ och byggande använder förstärkning $\alpha$, överstiger tiden att återvinna en given tillitsnivå tiden att förlora den med en faktor satt av asymmetrin. Bästa‑fall stegantal för att genomkorsa $L: 0,3 \leftrightarrow 0,7$: klättra $17$ steg, falla $3$ steg vid $\gamma/\alpha = 6$ (kvot $5,7$); falla $6$ steg vid $\gamma/\alpha = 3$ (kvot $2,8$). Kvoten mellan återhämtningstid och nedgångstid följer $\gamma/\alpha$. **[R]** givet modellen. Den praktiska följdsatsen, använd i C.8: en otålig återhämtning — som förväntar sig tilliten tillbaka på den tidsskala den förlorades — sätter ett åtagande som den långsamma uppbyggnaden inte kan möta, och den ouppfyllda förväntan registreras som ett ytterligare svek.

### C.5 Byggd kontra lånad

Distinktionen reduceras till kompetens vid lika observerbar tillit. Två agenter båda vid $L_0 = 0,90$ mottar en identisk svekschock ($\Delta L = 0,25$). Den *byggda* agenten (kompetent, $L_{\text{halv}}=0,40$, separatrix $0,575$) landar post‑chock vid $0,70$, ovanför sin separatrix, och återhämtar sig till $0,905$. Den *lånade* agenten (låg kompetens, $L_{\text{halv}}=0,80$, i enbart‑kollaps‑regimen i C.3) kraterar till $0$ på samma chock. **[IP]**, verifierad. Byggd och lånad självtillit kan vara numeriskt identiska och bete sig motsatt under prövning, eftersom det som skiljer dem inte är tillitsnivån utan den kompetens som avgör om en återhämtningsbar jämvikt existerar under den. Lånad tillit är hög tillit som sitter i, eller tunt ovanför, en kollapsbassäng den inte förtjänade marginalen att undfly.

### C.6 Transparensfällan

Inför uppfattad legitimitet $P$ vid sidan av sann $L$, och låt åtagandeambition skala med $P$ medan leverans beror på $L$ — personen agerar på vad de tror om sig själva, och världen svarar på vad som är så. Den ärliga agenten håller $P = L$. Självbedragaren undertrycker svek i perceptionen ($P$ oförändrat vid svek) medan $L$ urholkas som förut. Simuleringen: över $140$ perioder håller den ärliga agenten fast vid sann $L = 0,70$ med $27$ svek, perceptionen följer sanningen. Självbedragaren, som uppfattar hög tillit, fortsätter att över‑förbinda sig relativt sann kapacitet, ådrar sig $112$ svek, och dess sanna legitimitet kollapsar till $L = 0,01$ medan uppfattad $P$ förblir $0,68$; den dolda avvikelsen når en topp på $0,78$. En framtvingad uppgörelse ($P \!\to\! L$) korrigerar perceptionen en gång, men det fortsatta bedrägeriet öppnar gapet igen. **[IP]**, verifierad. Fällan upprätthåller skenbar självtillit medan den förstör den verkliga, och den gör det genom den precisa mekanismen i §4.3: redigering av observationskanalen blåser upp uppfattad tillit, uppblåst perception driver över‑åtagande, över‑åtagande multiplicerar svek, och svek kraterar det sanna tillstånd perceptionen dolde.

### C.7 Den reflexiva skärpningen och den kliniska inhägnaden

Transparensfällan är värre för ett själv än för en institution av det skäl som angavs i Del I: agenten beslutar om $P$ och har inget instrument oberoende av den apparat som genererar $P$. En regering kan revidera sin legitimitet med sensorer externa i förhållande till den styrande kroppen; ett enskilt medvetandes självbedrägande instrument är också det instrument som skulle upptäcka bedrägeriet, och en korrumperad kanal kan inte tillförlitligt revidera sin egen korruption (C.6 formaliserar detta genom att låta beslut bero endast på $P$, utan någon avläsning av $L$). Den enda approximationen till en oberoende sensor är extern — vännen, terapeuten, den återlästa dagboken från de dekorrelerade kanalerna i Appendix A. **[IP]**

Inhägnaden, som bifurkationen i C.3 gör viktigare, inte mindre. **[R]** Modellen producerar en enbart‑kollaps‑regim — en strukturell attraktor i vilken självtillit inte kan upprätthållas. Detta tillåter *inte* att läsa någon individs kollaps av självtillit som strukturellt orsakad. Samma attraktorform kan produceras av substrat som kontrollmodellen inte representerar — neurokemin i depression, traumats fysiologi, sorg, sjukdom — och modellen kan inte särskilja en strukturellt genererad kollaps från en kliniskt genererad sådan, eftersom deras signaturer sammanfaller. Ramverket beskriver fällans form; det diagnostiserar inte dess orsak, det är inte en kliniker, och återhämtningsvillkoren i C.8 är villkor som kan hjälpa en strukturellt genererad nedgång, inte en behandling för en patologiskt genererad sådan.

### C.8 Återhämtning och perfektionism‑inversionen

Villkoren för att återuppbygga $L$ följer av dynamiken. *Leverans–verklighetsmatchning* — åtaganden tillräckligt små för att $p_{\text{leverans}}$ är nära ett — återuppbygger $L$ på $\alpha$‑sidan och håller banan klar av separatrisen. *Transparens mot sig själv* förhindrar att C.6‑gapet öppnas. *Trovärdiga åtagandemekanismer* håller handling medan $L$ är för låg för att bära den. *Hysteres‑medvetenhet* (C.4) är självt ett villkor: återhämtning är långsam till sin konstruktion, och kravet på hastighet är självförgörande. Inversionen i §4.6 faller ut direkt ur modellen. Perfektionisten sätter stora åtaganden, vilket i C.6‑mekanismen innebär hög ambition $s$ relativt sann kapacitet — maximalt över‑åtagande, maximal sveksfrekvens, den snabba vägen in i kollapsbassängen. Att sikta högt är inte motsatsen till självbedrägerispiralen; det är spiralen driven vid maximal förstärkning. Byggd tillit återvinns genom åtaganden tillräckligt små för att hållas, hållna tillräckligt länge för att räknas — vilket också är anledningen till att Del VIII beträder ett sammansatt misslyckande här, vid förstärkningen på varje annan primitiv.

### C.9 Simulering

Repo‑fil: `self_ii_appendix_c_self_legitimacy.py`.

```python
import numpy as np
def sigma(z): return 1/(1+np.exp(-z))
def p_leverans(L, k=8.0, L_halv=0.5): return sigma(k*(L-L_halv))
def EdL(L, alpha, gamma, **kw):
    p = p_leverans(L, **kw); return p*alpha*(1-L) - (1-p)*gamma*L

def fixpunkter(alpha, gamma, **kw):           # C.3 bifurkation
    Ls = np.linspace(1e-4, 1-1e-4, 400001); f = EdL(Ls, alpha, gamma, **kw)
    ut = []
    for i in np.where(np.diff(np.sign(f)) != 0)[0]:
        r = Ls[i] - f[i]*(Ls[i+1]-Ls[i])/(f[i+1]-f[i])
        dr = (EdL(r+1e-4, alpha, gamma, **kw) - EdL(r-1e-4, alpha, gamma, **kw))/2e-4
        ut.append((round(r, 3), 'stabil' if dr < 0 else 'instabil'))
    return ut

def falla(bedra, alpha=0.05, gamma=0.15, k=8.0, marginal=0.15, T=140, uppgor=90, fro=3):
    r = np.random.default_rng(fro); L = P = 0.70; gap = 0.0; svek = 0
    for t in range(T):
        s = max(P - marginal, 0.0)                 # binda sig på uppfattad tillit
        if r.random() < sigma(k*(L - s)):          # leverans beror på sann tillit
            L += alpha*(1-L); P += alpha*(1-P)
        else:
            svek += 1; L = max(L-gamma*L, 1e-4)
            P = P if bedra else max(P-gamma*P, 1e-4)
        gap = max(gap, P-L)
        if t == uppgor and bedra: P = L
    return round(L,3), round(P,3), round(gap,3), svek

if __name__ == "__main__":
    print("C.3 bifurkation (måttlig kompetens L_halv=0.5):")
    for g in (0.10, 0.20):
        sunda = [r for r,s in fixpunkter(0.05, g, L_halv=0.5) if s=='stabil' and r>0.4]
        print(f"   gamma/alpha={g/0.05:.0f}: {'sund FP '+str(sunda) if sunda else 'ENBART-KOLLAPS'}")
    print("C.6 transparensfälla (sann L, uppfattad P, max gap, svek):")
    print("   ärlig         :", falla(False))
    print("   självbedragare:", falla(True))
```
