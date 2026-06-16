### Appendix B — Aktueringskedjan och energilagen

Detta appendix tillhandahåller den formella grunden för Del III. Resultatet om minimalenergistyrning och onåbarhetströskeln är standard reglerteori tillämpad på en delegeringskaskad och är klassade **[R]**; modelleringen av en persons intention‑till‑beteende‑bana som en sådan kaskad är **[IP]**, flaggad där den inträder. Skalningsanspråk är beräkningsverifierade; skriptet finns i B.8.

### B.1 Aktueringskedjan som en kaskad

Modellera banan från intention till beteende som en kaskad av $D$ steg — värde/mål, plan, motivation, vana, miljö, utförande — i diskret tid:

$$x^{(1)}_{k+1} = a\,x^{(1)}_k + b\,u_k, \qquad x^{(i)}_{k+1} = a\,x^{(i)}_k + c\,x^{(i-1)}_k \quad (i = 2,\dots,D).$$

Styrningen $u$ (direktivet) inträder endast vid det första steget; målet är det djupaste tillståndet $x^{(D)}$ (beteendet). I matrisform $\mathbf{x}_{k+1} = \mathbf{A}\mathbf{x}_k + \mathbf{B}u_k$ med $\mathbf{A}$ undre‑bidiagonal (diagonal $a$, subdiagonal $c$) och $\mathbf{B}=b\,\mathbf{e}_1$. **[IP]** De tre mekanismerna i §3.1 är de tre strukturella konstanterna. *Latens* är propageringsfördröjningen: direktivets inflytande når steg $i$ tidigast vid steg $i$. *Projektion* är överföringen mellan steg $c$ (ekvivalent en förstärkning per lager $\alpha_i \le 1$): varje steg passerar endast den komponent av sin insignal som ligger inom dess egen repertoar. *Brus* är en additiv perturbation per steg $w^{(i)}_k$, utelämnad ur nåbarhetsalgebran nedan eftersom den inte påverkar den nåbara mängden, endast variansen kring den.

### B.2 Minimalenergistyrning

För ett mål $\mathbf{x}_t$ nåbart inom horisont $T$, är den minimala styrinsatsen $\sum_{k=0}^{T-1} u_k^2$

$$J_{\min}(T) = \mathbf{x}_t^\top \mathbf{W}_T^{-1}\,\mathbf{x}_t, \qquad \mathbf{W}_T = \sum_{k=0}^{T-1}\mathbf{A}^k\mathbf{B}\mathbf{B}^\top(\mathbf{A}^\top)^k,$$

med $\mathbf{W}_T$ den ändliga‑horisontens styrbarhetsgramian (pseudo‑invers på det nåbara underrummet där $\mathbf{W}_T$ är singulär). **[R]** Detta är själv‑skalans instans av Rapport XI:s energilag: insatsen för att realisera en intention är den inverterade gramiankvadratiska formen, och gramianens konditionering i målriktningen sätts av kedjan.

### B.3 Insatslagen

Att nå den djupaste koordinaten $\mathbf{e}_D$ kräver att direktivet färdas genom alla $D$ steg, och förstärkningen längs den enda vägen av längd $D$ är $\propto b\,c^{\,D-1}$, så insatsen i det förstärkningsbegränsade regimen skalar som

$$J_{\min} \;\sim\; \big(b\,c^{\,D-1}\big)^{-2} \;=\; b^{-2}\,c^{-2(D-1)},$$

geometrisk — det vill säga exponentiell — i djupet. Simuleringen bekräftar superlinjär‑till‑geometrisk tillväxt och tillför en förfining som saknas i det platta uttalandet i Rapport XI: **takten beror på horisontspelrum.** Vid minimal horisont $T=D$ (direktivet måste agera så snabbt som kedjan tillåter), växer $J_{\min}$ brant — för $c=0,7$, $J_{\min}=8,6,\,130,\,2256$ vid $D=3,5,7$, en kvot per djup nära $3,9$, brantare till och med än $c^{-2}$ eftersom den diagonala avklingningen $a$ också ackumuleras utan tid att spara. Med generös horisont $T=2D$ är tillväxten mildare men fortfarande superlinjär (kvot per djup $\approx 1,3$ för $c=0,7$, stigande mot den geometriska takten när $D$ ökar). Den ärliga sammanfattningen: minsta insats växer *minst superlinjärt* i delegeringsdjup i allmänhet, och *geometriskt* i den förstärknings- eller tidsbegränsade regimen, där tidspress omvandlar djup från enbart kostsamt till prohibitivt. "Superlinjär" är det konservativa golvet konsistent med det överordnade pappret; de generiska och värsta fallen är exponentiella. **[R]**, skalning beräkningsverifierad.

Den praktiska läsningen: samma intention är långt billigare att aktivera given en lång horisont än under tidspress, och hävstången ligger i djupet, inte i insatsen — att halvera kedjelängden gör mer än någon genomförbar ökning i viljestyrka mot exponentialen.

### B.4 Konstitutionell själv‑ostyrbarhet

Tröskelfallet är exakt och är appendixets skarpaste resultat. Direktivets inflytande når steg $D$ tidigast vid steg $D$; följaktligen, för varje horisont $T < D$ ligger den djupaste koordinaten *utanför* det nåbara underrummet, $\mathbf{W}_T$ är singulär i $\mathbf{e}_D$‑riktningen, och

$$T < D \;\Longrightarrow\; \mathbf{e}_D \notin \operatorname{range}(\mathbf{W}_T) \;\Longrightarrow\; J_{\min} = \infty.$$

Simuleringen returnerar exakt detta: vid $D=5$ är beteendet onåbart för $T=4$ och ändligt (om stort) för $T\ge 5$; vid $D=7$, onåbart för $T=6$. **[R]** Tolka horisonten som det fönster innan intentionen avklingar eller tillfället passerar, anger resultatet att en intention vars kedja är djupare än dess tillgängliga horisont inte kan bli beteende oavsett insats — direktivet kan inte prop agera tillräckligt snabbt för att anlända i tid. Detta är *konstitutionell själv‑ostyrbarhet*, och den är den exakta dualen till Själv I:s konstitutionella oobserverbarhet: där kan tillstånd i självet bortom ett kritiskt kedjedjup inte uppfattas vid någon insats; här kan tillstånd i självet bortom det nåbara djupet inte nås vid någon insats. De två resultaten tillsammans begränsar självstyrning på båda kanalerna, såsom Rapport III och XI begränsar styrning på båda dess kanaler. De två felsätten känns identiska inifrån — uppriktigt, totalt, upprepat misslyckande — och ramverket hävdar att distinktionen är verklig (djup‑men‑nåbart ger efter för åtgärderna i §3.6; bortom‑mängden gör det inte) utan att påstå sig identifiera, från enbart struktur, vilket en given person står inför.

### B.5 Pressman–Wildavskys skalära skugga

Godkännandepunktsaritmetiken är det skalära, probabilistiska specialfallet av samma multiplikativa försvagning. Om en stående intention kräver framgång vid var och en av $n$ oberoende länkar, var och en med sannolikhet per länk $p$, är den gemensamma framgångssannolikheten $\prod_i p_i = p^n$. Verifierade instanser: $0,99^{70} = 0,495$ (sjuttio nästan säkra godkännanden faller under jämna odds — Oakland‑siffran), $0,95^{10} = 0,599$ (siffran "verkställs på ungefär sextio procent av dagarna" i §3.2), och $0,90^{10} = 0,349$. **[R]** Intentionen misslyckas inte för att någon länk är svag; den misslyckas för att produkten av många höga sannolikheter inte är hög, vilket är den multiplikativa försvagningen i B.3 sedd genom en probabilistisk snarare än en energetisk lins.

### B.6 Legitimitetskopplingen

Appendix C utvecklar själv‑legitimitet som en multiplikativ förstärkning $L_{\text{själv}} \in [0,1]$ på aktivering, $\mathbf{B}_{\text{eff}} = L_{\text{själv}}\mathbf{B}$. Inträdande vid varje länk, sammansätts den med överföringen $\alpha$ så att den effektiva förstärkningen per länk är $L\alpha$ och vägförstärkningen är $(L\alpha)^{D}$, vilket ger insats $\sim (L\alpha)^{-2D}$. Eftersom $L$ inträder i *exponenten*, tillför låg självtillit inte en fast straffavgift — den multiplicerar basen för exponentialen i djupet. Vid $D=8$, $\alpha=0,8$: full tillit ($L=1$) ger vägförstärkning $0,168$; $L=0,8$ ger $0,028$, en insatskostnad $35\times$ större; $L=0,5$ ger $6,6\times10^{-4}$, en insatskostnad $65536\times$ större. **[IP]** Detta är påståendet i §3.5 — djup och misstro multipliceras, inte adderas — och den själv‑skaliga formen av den överordnade seriens dubbelriktade nod, där två komprimeringar möts och ackumuleras. Dess följdsats driver sekvenseringspåståendet i Del VIII: korta kedjor både aktiverar billigt och, genom att leverera, höjer $L$, vilket är vad som gör längre kedjor överkomliga.

### B.7 Delegering över tid

Den tidsliga läsningen i §3.4 kräver ingen ny formalism. Indexera kaskadstegen efter successiva tidsskivor av självet snarare än efter interna delsystem: en stående intention är ett direktiv som varje framtida själv måste åter‑ta emot och åter‑överföra, tillämpande sin egen överföring $\alpha_i$ — sin efterlevnad, satt av den själv‑legitimitet det tillerkänner det ärvda direktivet. Kedjan av framtida själv är samma kaskad, med stegdjup ersatt av tidsligt djup och varje stegs $\alpha_i$ styrd av det framtida självets $L_{\text{själv}}$. Den tvåsidiga strukturen i B.4 och B.6 överförs oförändrad. **[IP]**

### B.8 Simulering

Repo‑fil: `self_ii_appendix_b_actuation_chain.py`.

```python
import numpy as np

def cascade(D, a=0.5, c=0.7, b=1.0):
    A = np.zeros((D, D)); np.fill_diagonal(A, a)
    for i in range(1, D): A[i, i-1] = c
    B = np.zeros((D, 1)); B[0, 0] = b
    return A, B

def min_energy(A, B, x_t, T):
    "Min styrinsats för att nå x_t på T steg; inf om onåbart (B.2, B.4)."
    cols, M = [], B.copy()
    for _ in range(T): cols.append(M.copy()); M = A @ M
    R = np.hstack(cols)                       # kolumner A^k B
    z, *_ = np.linalg.lstsq(R, x_t, rcond=None)
    if np.linalg.norm(R @ z - x_t) > 1e-8: return np.inf   # utanför den nåbara mängden
    W = R @ R.T
    return float(x_t @ np.linalg.pinv(W, rcond=1e-15) @ x_t)

if __name__ == "__main__":
    print("B.4 onåbarhet (T < D => inf):")
    for D in (3, 5, 7):
        A, B = cascade(D); eD = np.eye(D)[-1]
        for T in (D-1, D, D+2):
            J = min_energy(A, B, eD, T)
            print(f"   D={D} T={T}: {'ONÅBAR' if np.isinf(J) else f'{J:.4g}'}")
    print("B.3 insatslag (T=2D):")
    for c in (0.7, 0.5):
        Js = [min_energy(*cascade(D, c=c), np.eye(D)[-1], 2*D) for D in range(2, 9)]
        print(f"   c={c}: " + ", ".join(f"{j:.3g}" for j in Js))
    print("B.5 Pressman-Wildavsky p^n:",
          {f"{p}^{n}": round(p**n, 3) for p, n in [(0.99,70),(0.95,10),(0.9,10)]})
    print("B.6 legitimitetsförstärkning (Lα)^D, D=8, α=0.8:",
          {L: round((L*0.8)**8, 5) for L in (1.0, 0.8, 0.5)})
```
