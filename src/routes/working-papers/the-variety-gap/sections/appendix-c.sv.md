## Appendix C: Historisk simulering av investeringsregler — korrigerad specifikation

### C.1 Systembeskrivning

Detta appendix dokumenterar det av författaren återfunna skriptet `paper_vi_value_function_collapse.py`. De tidigare tryckta ekvationerna motsvarade inte implementationen. Följande specifikation är koden som kördes om i november 2026, inte en rekonstruerad eller anpassad modell.

Låt $W_t$ beteckna modellerat välstånd, $E_t$ modellerad miljöintegritet och $I_t$ investering. Definiera $m_t=\min_{0\leq s\leq t}E_s$, med regenerationsfaktorn $q_t=1$ om $m_t>40$ och annars $q_t=0,\!2$. Skriv $E_{\mathrm{base}}=100$ för kodens `E0`, skilt från initialtillståndet $E_{t=0}=90$. Uppdateringarna är

$$W_{t+1}=\max\{0,(1-\delta_W)W_t+\alpha E_t I_t\},$$

$$E_{t+1}=\max\{0,E_t-\beta I_t+\gamma q_t(E_{\mathrm{base}}-E_t)-\eta W_t\}.$$

Skadan är samtidig och negativ. Hysteresen är permanent i den modellerade historiken; golven är explicita. Detta är syntetisk dynamik, inte kalibrerade ekologiska eller ekonomiska lagar.

### C.2 Sammansatta regulatorer

Låt $W_{\mathrm{obs}}=W_t+\epsilon_W$ och, enbart för den miljömedvetna regeln, $E_{\mathrm{obs}}=E_t+\epsilon_E$. Bruset är Gaussiskt. De fasta reglerna är

$$I_1=\max\{0,I_0+K(W^*-W_{\mathrm{obs}})\},$$

$$I_2=\max\{0,[I_0+K(W^*-W_{\mathrm{obs}})](E_{\mathrm{obs}}/E_{\mathrm{base}})^2\}.$$

Dessa är inte lösningar till ett optimeringsproblem. De tidigare etiketterna $J_1=W$ och $J_2=W+\lambda E$ är nominella utvärderingar; deklarerat $\lambda$ används inte. Jämförelsen ändrar både observation och policy, utan lärande eller modellrevision. Dämpningen multiplicerar hela uttrycket och är kvadratisk, inte sigmoid. I körningen begränsar den investering vid lågt $E$; den är ingen allmän säkerhetsgaranti.

### C.3 Parametrisering och körning

| Parameter | Implementerat värde |
|---|---:|
| Registrerade tillstånd / övergångar | 500 / 499 |
| Initialt välstånd / miljö | 60 / 90 |
| $\alpha,\delta_W,\beta$ | 0,3; 0,05; 0,25 |
| $\gamma,\eta$ | 0,05; 0,02 |
| $E_{\mathrm{base}},W^*,I_0,K$ | 100; 120; 5; 0,5 |
| Observationsbrusets standardavvikelser $\sigma_W,\sigma_E$ | 1; 0,5 |
| Deklarerat oanvänt $\lambda$ | 1,5 |
| Slumpfrö | 2024 |

En NumPy-generator delas sekventiellt, först av regel 1, sedan av regel 2; dragningarna är inte matchade mellan armarna. Brus ingår i observationerna, inte i tillståndsuppdateringarna. Investering och tillstånd har nedre golv noll och inga övre tak. Sista värdet i investeringsarrayen är en oexekverad nollplatshållare. Kollapsmarkören är första $E<30$, skild från permanenta regenerationsskiftet vid $E\leq40$.

### C.4 Reproducerade utfall och diagnostik

![Figur C.1](/working-papers/images/the-variety-gap/appendix-c-simulation.sv.png)

*Figur C.1.* Omritade banor från den nya körningen av återfunnet skript; en separat deterministisk jämförelse med konstant investering använder samma systemdynamik. Ingen historisk arm bibehåller god miljöintegritet. Värdena är modellenheter.

| Mått | Välståndsregel | Miljömedveten regel |
|---|---:|---:|
| Högsta $W$ | 988,11 | 798,93 |
| Första $E<30$ | 4 | 6 |
| Första $E=0$ | 6 | 8 |
| Tillstånd med $E<30$ | 496/500 | 494/500 |
| Medel-$W$, sista 50 | ungefär 0 | 37,29 |
| Medel-$E$, sista 50 | 0 | 11,06 |
| Slutligt $E$ | 0 | 11,12 |
| Skriptets kollapsmått | 1,00 | 0,79 |

Kollapsmåttet tar medelvärdet av de icke-negativa underskotten i de sista 50 tillståndens medelvälstånd relativt $W^*$ och miljö relativt $E_{\mathrm{base}}$, vartdera dividerat med sin referens. Det är en beskrivande statistik, inte en välfärdsfunktion. Båda reglerna når noll miljöintegritet; den andra återgår aldrig till $E\geq30$. Dess partiella återhämtning till ett degraderat tillstånd är inte kollapsprevention.

Initialinvesteringarna är 34,49 och 27,48. De första välståndshoppen placerar båda reglerna över målet; båda investerar exakt noll från $t=1$ till och med $t=40$ (välståndsregeln) respektive $t=36$ (den miljömedvetna regeln), långt efter sin första tröskelpassage. Under detta fönster drivs miljöns nedgång av termen $-\eta W_t$, inte av skillnad i aktiv dämpning. Initialinvesteringarna skiljer sig på grund av dämpning och olika brusdragningar; senare investeringsregler spelar roll under återhämtningen. Vid $E=0$ och lågt $W$ investerar den första regeln ungefär 65: investeringsskadan ensam är ungefär 16,25 mot ungefär en enhet regeneration. Utan investering vid detta tillstånd, och med försumbart välstånd, är regenerationen positiv. Den första regeln upprätthåller inlåsningen; hysteres ensam tvingar inte fram den. Den andra regeln begränsar investering vid lågt $E$ och möjliggör partiell återhämtning.

En diagnostisk negativ efterhandskontroll, inte en optimerad policy eller ett förregistrerat experiment: konstant investering $I_t=0,\!5$ utan observation under samma systemdynamik och initialvillkor ger lägsta $E=41,\!19$ och slutligt $(W;E)\approx(132,\!95;44,\!32)$. Den aktiverar aldrig regenerationsskiftet och överträffar båda historiska armarna i slutligt välstånd och miljö. Direkt miljöobservation är inte nödvändig för just dessa utfall. Dess odiskonterade välståndssumma är 67059,92, men summorna med diskonteringsfaktorerna 0,99 och 0,95 är 13585,06 respektive 2609,69, lägre än för båda historiska reglerna. Dess kumulativa odiskonterade välstånd överstiger regel 1 respektive 2 för första gången vid steg 144 respektive 126. I ytterligare deterministiska punktkontroller undviker konstanta investeringar på 0,3, 0,4 och 0,5 regenerationsskiftet, men 0,55 når noll miljöintegritet. Den framgångsrika jämförelseregeln är alltså känslig för en liten parameterändring; varken generell robusthet eller optimalitet är etablerad.

### C.5 Vad jämförelsen etablerar

Den andra regelns punktvisa välstånd överstiger den förstas från $t=80$ till slutet; kumulativt odiskonterat välstånd överstiger det första vid $t=191$. Över alla 500 tillstånd är odiskonterade summor 19822,21 och 31338,49. Med diskonteringsfaktor 0,99 per steg är summorna 16500,83 och 14837,02; med 0,95 är de 9687,74 och 7852,30. De inkluderar initialtillståndet. Rangordningen beror på horisont och utvärdering. Regel 2 är tillåten för en utvärderare med enbart välståndsmål som får samma observationer och handlingsmängd; den är inte evidens för nödvändigheten av ett miljömål.

Med kända parametrar och brusfria välståndsavläsningar, om $I_t>0$, implicerar välståndsuppdateringen

$$E_t=\frac{W_{t+1}-(1-\delta_W)W_t}{\alpha I_t}.$$

Välståndsgolvet förändrar inte denna icke-negativa uppdatering. Med oberoende additiva observationsfel av fast standardavvikelse $\sigma_W$ och fast icke-noll insats är standardavvikelsen för skattningsfelet $\sigma_W\sqrt{1+(1-\delta_W)^2}/(\alpha I_t)$. Eftersom insatsen beror på den brusiga observationen är formeln för fast insats en approximation i sluten slinga; vid nollinvestering är direkt inversion inte tillgänglig. Ingen historisk regel implementerar skattaren. Avsaknad av direkt observation etablerar inte avsaknad av dynamisk information.

### C.6 Reproducerbarhet och räckvidd

Det återfunna skriptet arkiveras oförändrat. Nya körningar utan grafiskt gränssnitt reproducerar rapporterade topp- och slutnivåer. Historisk commit, ursprunglig PNG och ursprungliga banarrayer återfanns inte, så detta är inte strikt historisk figurreproduktion. Den reviderade figuren använder arkiverade arrayer från den nya körningen; genereringskod och diagnostiska beräkningar medföljer korrigeringen. Ingen ny faktoriell optimeringsexperimentserie genomfördes. Jämförelsen med konstant investering är en avgränsad efterhandskontroll. Slutsatserna begränsas till dessa regler, parametrar och utvärderingskonventioner.

---
