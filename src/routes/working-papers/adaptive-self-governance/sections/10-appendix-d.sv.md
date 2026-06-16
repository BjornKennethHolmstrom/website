### Appendix D — Adaptivt lärande och den tvåsidiga gränsen

Detta appendix tillhandahåller den formella grunden för Del VI, och det bär papprets starkaste ursprungliga påstående — den tvåsidiga gränsen för själv‑revidering (§6.4). Distinktionen mellan premiss och test spelar större roll här än någon annanstans. Att revidering försämrar ett självs koherens (parametern $\kappa > 0$ nedan) är **[IP]**‑premissen, det modelleringsåtagande som kodar observatör–anläggning‑identitet; den kan inte testas i simulering eftersom den är ett antagande om vad ett själv *är*. Vad som *kan* testas — och kunde ha misslyckats — är om den premissen producerar en icke‑trivial tvåsidig gräns: ett inre optimum, ett själv‑optimum strikt under en institutions, och en regim där självet måste offra spårning för att förbli koherent. Simuleringen bekräftar alla tre. Alla värden är beräkningsverifierade; skriptet finns i D.8.

### D.1 Självet som en dual kontrollant

Modellera självet som spårar ett drivande mål — vad omständigheterna kräver att självet ska vara — genom en skattning det agerar på:

$$\theta^*_{t+1} = \theta^*_t + v\,\xi_t, \qquad \hat\theta_{t+1} = \hat\theta_t + r\,C_t\,(o_t - \hat\theta_t), \qquad o_t = \theta^*_t + \sigma\,\eta_t,$$

där $\theta^*$ är det rörliga målet som driver med takt $v$, $\hat\theta$ själv‑modellen, $o_t$ en brusig själv‑observation, $r$ *revideringstakten* (explorations‑/inlärningsförstärkningen), och $C_t \in (0,1]$ kontrollantens koherens, definierad härnäst. Varje steg är samtidigt en handling (att agera på $\hat\theta$) och ett experiment (att observera $\theta^*$), den duala kontrollstrukturen i §6.1. **[IP]**

### D.2 Ihållande excitation: den undre gränsen

Att spåra ett mål som driver med takt $v$ kräver revidering tillräckligt snabb för att hålla jämna steg; för lite producerar eftersläpning. Simuleringen ger sant spårningsfel $E$ som stiger kraftigt när $r \to 0$: $E = 0,061$ vid spårnings‑optimum $r=0,08$, men $0,117$ vid $r=0,01$ och $0,170$ vid $r=0,005$. $r\to 0$‑gränsen är det överskyddade självet i §6.2 — varians undertryckt, parametrar oidentifierade, själv‑modellen frusen medan omständigheterna rör sig. Detta är den undre gränsen, och det är det vanliga kravet på ihållande excitation: en kontrollant som inte sonderar kan inte identifiera det mål den måste spåra. **[R]** givet modellen; verifierad.

### D.3 Explorationssvält och självdöljande

Den undre gränsen döljer sig själv, vilket är vad som gör den till svält snarare än kris. Modellera uppfattat fel som vad självet kan upptäcka genom sin egen exploration, $\hat E_t = E_t\,(1 - e^{-c\,r})$: vid hög revidering ser självet sitt sanna fel; vid låg revidering är det nästan blint för det. Simuleringen ger, vid $r = 0,02$, sant fel $E = 0,084$ men uppfattat fel $\hat E = 0,013$ — ett självdöljandegap på $0,071$, den gröna dashboarden i §6.3 som läser klart medan den sanna spårningen divergerar. Gapet sluts när $r$ stiger (det är $0,0006$ vid $r=0,7$). Den strukturella poängen är att den förmåga som skulle avslöja svälten, exploration, är just den som har stängts av, så systemets egen övervakning kan inte rapportera misslyckandet. Detta är Själv I:s varietetsgap givet en tidslig mekanism: inte bara utesluter en smal arkitektur dimensioner av det nuvarande självet, den slutar uppdateras och döljer att den har gjort det. **[IP]**, verifierad.

### D.4 Koherens‑kopplingen och den tvåsidiga gränsen

Den själv‑specifika termen är koherens. Eftersom kontrollanten är anläggningen (Del I), kärnar varje revideringsakt om kontrollantens egen integration:

$$C_{t+1} = \operatorname{clip}\!\big(C_t + \iota\,(1 - C_t) - \kappa\,|\Delta\hat\theta_t|,\; 0,\; 1\big),$$

där $\iota$ är åter‑integrationstakten, $|\Delta\hat\theta_t|$ magnituden av den själv‑revidering som faktiskt genomförs, och $\kappa$ koherenskostnaden per enhet revidering. Koherens grindar revidering i gengäld (förstärkningen är $r\,C_t$): ett destabiliserat själv kan inte integrera förändring. Premissen är $\kappa > 0$ — för ett själv försämrar revidering av sig självt det själv som utför revideringen — och den är **[IP]**, kodningen av observatör–anläggning‑identitet, inte ett resultat.

Dess testade konsekvens är en genuin tvåsidig gräns. Självets effektiva mål är att spåra väl *och* förbli koherent, $J(r) = E(r) + \lambda\,(1 - \bar C(r))$, och simuleringen visar $C(r)$ monotont avtagande (från $0,975$ vid $r=0,02$ till $0,453$ vid $r=0,9$) medan $E(r)$ är U‑format. Resultatet: $J$ har ett *inre* optimum — verifierat att vända uppåt på båda sidor (stigande när $r\to 0$ från svält, stigande när $r$ växer från koherensförlust) — för varje koherensvikt som testats ($\lambda \in \{0,5, 1, 2\}$). Gränsen är tvåsidig exakt såsom §6.4 hävdar: revidering måste vara tillräckligt snabb för att spåra och tillräckligt långsam för att integreras, $\text{(drifttakt)} < r < \text{(koherensbegränsad takt)}$. **[IP]** premiss; det inre optimumet är en testad, falsifierbar konsekvens, bekräftad.

### D.5 Själv kontra institution: varför den övre gränsen är snävare

Kontrasten med en institution isolerar vad observatör–anläggning‑identitet bidrar med. En institution isolerar sin experimentapparat från sina experimentzoner, modellerat genom $\kappa = 0$: att revidera anläggningen försämrar inte kontrollantens koherens. Med $\kappa = 0$ håller simuleringen $C \equiv 1$ vid alla revideringstakter, och det optimala $r$ är spårnings‑optimum, $r^*_{\text{inst}} = 0,08$, satt av den vanliga avvägningen mellan eftersläpning och brusförstärkning. Med $\kappa = 0,5$ (självet), sjunker optimum till $r^*_{\text{själv}} = 0,02$–$0,04$, strikt under institutionens och robust över $\lambda$. Vid sitt optimum bär självet sant fel $0,084$ mot ett bästa‑uppnåeliga $0,061$: det lämnar $0,023$ av spårningsprestanda på bordet för att bevara koherens. **[IP]**, verifierad.

En förfining håller påståendet ärligt. Institutionen är inte obegränsad uppåt — dess fel är också U‑format, stigande förbi $r = 0,08$ från brusförstärkning, så den har också en övre gräns. Självets övre gräns är *snävare* och uppstår ur en *annan mekanism*: den binder vid $r \approx 0,02$–$0,04$, långt under institutionens brusbegränsade $0,08$, och den binder genom koherensförlust snarare än brus. Det precisa innehållet i "den övre gränsen är snävare för ett själv än för ett samhälle" (§6.4) är därför inte att institutioner reviderar utan gräns, utan att självets gräns är striktare och anländer först, vilket tvingar självet under sitt eget brusbegränsade spårnings‑optimum — en begränsning ett system vars kontrollant och anläggning är separata inte möter.

### D.6 Gränsen ramverket inte får överskrida

Den tvåsidiga gränsen gränsar till kliniskt och kontemplativt territorium, och inhägnaden från Del IV och VI gäller oförändrad. **[R]** Modellen beskriver *strukturen* hos integrationsbegränsningen — att revidering som springer ifrån åter‑integration ($r$ ovanför den koherensbegränsade takten) försämrar den koherens inlärning kräver. Den beskriver inte hanteringen av den begränsningen hos någon person, och den hävdar inte att destabilisering under intensivt självarbete generellt är strukturell. Där ett kliniskt substrat är närvarande — där själv‑revidering utlöser något med en fysiologi som kontrollmodellen inte representerar — förblir den arkitektoniska beskrivningen sann och otillräcklig, namngivande svårighetens form utan att nå dess orsak. Observationen att transformation måste taktas till integration är en konsekvens av $r < r_{\text{koherens}}$, inte ett protokoll för att takta den.

### D.7 Skyddade utrymmen som tillverkad isolering

Konstruktionsprincipen i §6.6 följer direkt och är verifierad. Ett skyddat experimentutrymme är revidering isolerad från global koherens — en andel $f$ av revideringen belastar inte hela självet utan en inmurad sandlåda. Modellera detta som koherenskostnad $\kappa\,|\Delta\hat\theta|\,(1-f)$, håller simuleringen revidering vid $r = 0,15$ (ovanför det osandlådade självets optimum) och varierar $f$: spårningsfelet förblir i princip platt ($E: 0,068 \to 0,072$) medan koherensen återhämtar sig ($C: 0,843 \to 0,982$) och den kombinerade kostnaden faller ($J: 0,226 \to 0,091$) när $f$ stiger från $0$ till $0,9$. När $f \to 1$ närmar sig självet institutionens fria exploration. **[IP]**, verifierad. Detta är det formella innehållet i externaliseringsprincipen i Del VIII vid inlärningskanalen: en sandlåda låter självet köra den höga lokala exploration som spårning vill ha utan att betala den globala koherenskostnad som observatör–anläggning‑identitet annars påtvingar — tillverkande, lokalt, den kontrollant–anläggning‑separation som självet saknar som standard.

### D.8 Simulering

Repo‑fil: `self_ii_appendix_d_two_sided_bound.py`.

```python
import numpy as np

def run(r, kappa, f_sandbox=0.0, v=0.02, sigma=0.30, iota=0.10, c=8.0, T=4000, seed=0):
    rng = np.random.default_rng(seed)
    th_star = th_hat = 0.0; C = 1.0; Es=[]; Cs=[]; Ehat=[]
    for t in range(T):
        th_star += v*rng.standard_normal()
        obs = th_star + sigma*rng.standard_normal()
        dth = r*C*(obs - th_hat); th_hat += dth
        C = np.clip(C + iota*(1-C) - kappa*abs(dth)*(1-f_sandbox), 0, 1)
        if t > T//5:
            e = abs(th_hat - th_star)
            Es.append(e); Cs.append(C); Ehat.append(e*(1-np.exp(-c*r)))
    return np.mean(Es), np.mean(Cs), np.mean(Ehat)

def sweep(kappa, rs, seeds=8):
    return np.array([np.mean([run(r, kappa, seed=s) for s in range(seeds)], axis=0) for r in rs])

if __name__ == "__main__":
    rs = [0.005, 0.01, 0.02, 0.04, 0.08, 0.15, 0.30, 0.60]
    for kappa, lab in [(0.0, "institution"), (0.5, "self")]:
        R = sweep(kappa, rs); E, C, Eh = R[:,0], R[:,1], R[:,2]
        for lam in (0.5, 1.0, 2.0):
            J = E + lam*(1-C); k = int(np.argmin(J))
            interior = 0 < k < len(rs)-1
            print(f"{lab:11s} lam={lam}: r*={rs[k]:.3f} interior={interior} "
                  f"E@r*={E[k]:.4f} bestE={E.min():.4f}")
    print("D.3 self-concealment gap (E - Ehat) at r=0.02:",
          round((lambda x: x[0]-x[2])(np.mean([run(0.02,0.5,seed=s) for s in range(8)],axis=0)), 4))
    print("D.7 protected space (r=0.15, vary f): (E, C, J)")
    for f in (0.0, 0.3, 0.6, 0.9):
        E,C,_ = np.mean([run(0.15,0.5,f_sandbox=f,seed=s) for s in range(8)],axis=0)
        print(f"   f={f}: E={E:.4f} C={C:.3f} J={E+(1-C):.4f}")
```
