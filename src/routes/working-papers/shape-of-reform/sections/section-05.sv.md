# §5 — Vad objektet är

## 5.1 Det negativa resultatet, samlat

Tre fakta om reformkostnad fastställdes i §4, och tillsammans säger de vad objektet *inte* är:

- reformkostnad är **asymmetrisk** (§4.2, Påstående A): $C(M_A \Rightarrow R_B) \neq C(M_B \Rightarrow R_A)$;
- dess ändpunkter är av **olika slag** (§4.4): $C$ avbildar en modell på en regim, inte en punkt på en punkt;
- den **komponerar inte** (§4.4): det objekt som produceras genom att betala den första etappen är inte den input som den andra etappen är definierad på.

Det första utesluter en metrik. Det andra och tredje utesluter en kvasimetrik — ett riktat avstånd skulle fortfarande kräva komponerbara ändpunkter av samma typ, och reformkostnad har ingetdera. Så faktoriseringsrummet, betraktat som en scen där reform är *rörelse*, är inte ett metriskt rum, inte ett kvasimetriskt rum och inte en Riemannsk mångfald. Utforskning 04 sträckte sig efter det sista av dessa; §5.2 säger precist varför det var fel kategori, inte bara en för tidig sådan.

## 5.2 Varför den Riemannska inramningen misslyckades, precist

En Riemannsk mångfald har en symmetrisk metrisk tensor från vilken geodetiska avstånd återvinns genom att minimera över banor, och dessa avstånd **komponerar**: geodeten från A till B och från B till C begränsar geodeten från A till C. Var och en av dessa egenskaper saknas hos reformkostnad. Metriken är inte symmetrisk (§4.2). Det finns inget enskilt rum över vilket man kan minimera, eftersom kostnadens två argument är av olika slag (§4.4). Och kompositionslagen misslyckas inte approximativt utan kategoriskt, eftersom det mellanliggande objektet är en modell som bara *presterar som* vägpunkten snarare än *är* den (§4.4).

Så misslyckandet är inte att mångfalden är högt krökt, eller att krökningen mättes för tidigt. Utforskning 04 oroade sig för att krökningsläsningen kunde vara tidig; sanningen är värre för inramningen och bättre för artikeln: **det finns ingen mångfald att vara krökt.** Den Riemannska kategorin förutsätter en symmetrisk, komponerbar metrik över ett enda rum, och reform har inget av detta. Detta spelar roll eftersom "för tidig krökning" inbjuder till mer av samma arbete — mät den noggrannare, senare. "Fel kategori" omdirigerar arbetet: sluta leta efter en mångfald, och karakterisera den riktade anpassningsprocessen på dess egna villkor.

## 5.3 Det positiva objektet: ett typat metrik–anpassningssystem

Artikeln vet mer om objektet, positivt, än "inte ett metriskt rum" medger. Delarna definierades alla i §2 och mättes i §4; att sätta samman dem ger ett preliminärt formellt objekt, erbjudet som *en* karakterisering som data stöder, inte som *den* slutgiltiga teorin.

> Ett **metrik–anpassningssystem** är en tupel
> $$\mathcal{A} = (M,\ R,\ d,\ C,\ U)$$
> där
> - $M$ är en mängd av tränade modeller (faktoriseringar);
> - $R$ är en mängd av regimer (uppgifter);
> - $d : M \times M \to \mathbb{R}_{\geq 0}$ är en symmetrisk beteendemässig **metrik** på modeller (§2.2);
> - $C : M \times R \to \mathbb{R}$ är en riktad, budgetrelativ **anpassningskostnad** (§2.3), tecknad för att medge positiv transfer;
> - $U : M \times R \times T \to M$ är en **uppdateringsoperator** — att omträna $M_A$ mot $R_B$ under budget $\tau$ ger en ny modell $U(M_A, R_B, \tau)$.

Uppdateringsoperatorn är vad den metrisk–mångfaldsbilden saknade, och det är vad som gör objektet koherent. Etappindelad reform är en *sammansättning av uppdateringsoperatorer*, inte en summa av kostnader:

$$\text{reform } M_A \text{ via } R_C \text{ till } R_B \;=\; U\big(U(M_A, R_C, \tau_1),\ R_B, \tau_2\big),$$

vars kostnad är den kostnad som uppstår *längs den operatorsammansättningen* — och detta är uttryckligen **inte** $C(M_A \Rightarrow R_C) + C(M_C \Rightarrow R_B)$, eftersom $U(M_A, R_C, \tau_1)$ är en specifik modell som inte är $M_C$ (§4.4). Denna enda rad förklarar, positivt, varför vanlig bangeometri misslyckas: objektet över vilket man skulle komponera är *operatorn*, och operatorer komponerar genom applikation, inte sina skalära kostnader genom addition.

Två egenskaper hos systemet, omformulerade i dess egen vokabulär:

- **Riktadhet** (§4.2) är en egenskap hos $C$: den är inte symmetrisk på det sätt som $d$ är.
- **Iscensättning** (§4.3) är en egenskap hos $U$: det existerar $R_C$ för vilka $C$ som uppstår längs $U(U(M_A, R_C, \cdot), R_B, \cdot)$ ligger under $C(M_A \Rightarrow R_B)$, och den effektiva $R_C$ bestäms till stor del av $R_B$ (målet), inte av $M_A$ (källan).

Detta är ett **typat** objekt — dess två bärarmängder, $M$ och $R$, är genuint olika, och typdisciplinen är inte bokföring utan skälet till att olikheten i §4.4 inte är formulerbar. Det ligger närmare ett typat övergångssystem än en geometri, och att kalla det ett *metrik–anpassningssystem* registrerar båda halvorna: en metrik på beteenden, och en anpassningsprocess över dem som metriken inte styr.

## 5.4 Det öppna problemet, nu snävare

Att namnge objektet stänger det inte. Vad som förblir öppet är inte "vad är denna sak" — §5.3 besvarar det preliminärt — utan en skarpare, mer hanterbar fråga om dess kalkyl:

> **Vilka formella egenskaper hos kostnaden $C$ och uppdateringsoperatorn $U$ medger en användbar kalkyl för etappindelad anpassning?** Specifikt: under vilka villkor på $U$ hjälper iscensättning; finns det en beräkningsbar regel som väljer en effektiv vägpunkt $R_C$ från målet $R_B$ (data i §4.3 antyder att en kan existera, eftersom vägpunkten nästan är en funktion av målet ensamt); och finns det en riktad, operatormedveten analog till triangelolikheten som *är* välställd — en gräns för sammansatt operatorkostnad i termer av enkeloperatorkostnader och något mått på hur mycket $U(M_A, R_C, \cdot)$ skiljer sig från $M_C$?

Detta är en forskningsfråga med tillräcklig struktur för att kunna attackeras, vilket är mer än "objektet är inte ett metriskt rum" erbjöd. Det är också den naturliga bron till multi-agent-linjen (§8), där uppdateringsoperatorer får den ytterligare strukturen av interaktion och arv.

## 5.5 Räckvidd för formaliseringen

Tupeln är en *beskrivning av vad som mättes*, inte ett påstående om att varje metrik–anpassningssystem beter sig som detta gjorde. De specifika fynden — asymmetri nära 0,76, målbestämd iscensättning, svag avstånd–kostnadskorrelation — är egenskaper hos *detta* $(M, R, d, C, U)$, över ett substrat, en arkitekturfamilj, en klass av uppdateringsregler. Huruvida andra anpassningsprocesser instansierar samma kvalitativa struktur är precis vad §5.4:s kalkyl, om den existerade, skulle låta en förutsäga. Vi hävdar att objektet är vältypat och att dess kostnad inte komponerar; vi hävdar inte att siffrorna överförs.

---# §5 — Vad objektet är

## 5.1 Det negativa resultatet, samlat

Tre fakta om reformkostnad fastställdes i §4, och tillsammans säger de vad objektet *inte* är:

- reformkostnad är **asymmetrisk** (§4.2, Påstående A): $C(M_A \Rightarrow R_B) \neq C(M_B \Rightarrow R_A)$;
- dess ändpunkter är av **olika slag** (§4.4): $C$ avbildar en modell på en regim, inte en punkt på en punkt;
- den **komponerar inte** (§4.4): det objekt som produceras genom att betala den första etappen är inte den input som den andra etappen är definierad på.

Det första utesluter en metrik. Det andra och tredje utesluter en kvasimetrik — ett riktat avstånd skulle fortfarande kräva komponerbara ändpunkter av samma typ, och reformkostnad har ingetdera. Så faktoriseringsrummet, betraktat som en scen där reform är *rörelse*, är inte ett metriskt rum, inte ett kvasimetriskt rum och inte en Riemannsk mångfald. Utforskning 04 sträckte sig efter det sista av dessa; §5.2 säger precist varför det var fel kategori, inte bara en för tidig sådan.

## 5.2 Varför den Riemannska inramningen misslyckades, precist

En Riemannsk mångfald har en symmetrisk metrisk tensor från vilken geodetiska avstånd återvinns genom att minimera över banor, och dessa avstånd **komponerar**: geodeten från A till B och från B till C begränsar geodeten från A till C. Var och en av dessa egenskaper saknas hos reformkostnad. Metriken är inte symmetrisk (§4.2). Det finns inget enskilt rum över vilket man kan minimera, eftersom kostnadens två argument är av olika slag (§4.4). Och kompositionslagen misslyckas inte approximativt utan kategoriskt, eftersom det mellanliggande objektet är en modell som bara *presterar som* vägpunkten snarare än *är* den (§4.4).

Så misslyckandet är inte att mångfalden är högt krökt, eller att krökningen mättes för tidigt. Utforskning 04 oroade sig för att krökningsläsningen kunde vara tidig; sanningen är värre för inramningen och bättre för artikeln: **det finns ingen mångfald att vara krökt.** Den Riemannska kategorin förutsätter en symmetrisk, komponerbar metrik över ett enda rum, och reform har inget av detta. Detta spelar roll eftersom "för tidig krökning" inbjuder till mer av samma arbete — mät den noggrannare, senare. "Fel kategori" omdirigerar arbetet: sluta leta efter en mångfald, och karakterisera den riktade anpassningsprocessen på dess egna villkor.

## 5.3 Det positiva objektet: ett typat metrik–anpassningssystem

Artikeln vet mer om objektet, positivt, än "inte ett metriskt rum" medger. Delarna definierades alla i §2 och mättes i §4; att sätta samman dem ger ett preliminärt formellt objekt, erbjudet som *en* karakterisering som data stöder, inte som *den* slutgiltiga teorin.

> Ett **metrik–anpassningssystem** är en tupel
> $$\mathcal{A} = (M,\ R,\ d,\ C,\ U)$$
> där
> - $M$ är en mängd av tränade modeller (faktoriseringar);
> - $R$ är en mängd av regimer (uppgifter);
> - $d : M \times M \to \mathbb{R}_{\geq 0}$ är en symmetrisk beteendemässig **metrik** på modeller (§2.2);
> - $C : M \times R \to \mathbb{R}$ är en riktad, budgetrelativ **anpassningskostnad** (§2.3), tecknad för att medge positiv transfer;
> - $U : M \times R \times T \to M$ är en **uppdateringsoperator** — att omträna $M_A$ mot $R_B$ under budget $\tau$ ger en ny modell $U(M_A, R_B, \tau)$.

Uppdateringsoperatorn är vad den metrisk–mångfaldsbilden saknade, och det är vad som gör objektet koherent. Etappindelad reform är en *sammansättning av uppdateringsoperatorer*, inte en summa av kostnader:

$$\text{reform } M_A \text{ via } R_C \text{ till } R_B \;=\; U\big(U(M_A, R_C, \tau_1),\ R_B, \tau_2\big),$$

vars kostnad är den kostnad som uppstår *längs den operatorsammansättningen* — och detta är uttryckligen **inte** $C(M_A \Rightarrow R_C) + C(M_C \Rightarrow R_B)$, eftersom $U(M_A, R_C, \tau_1)$ är en specifik modell som inte är $M_C$ (§4.4). Denna enda rad förklarar, positivt, varför vanlig bangeometri misslyckas: objektet över vilket man skulle komponera är *operatorn*, och operatorer komponerar genom applikation, inte sina skalära kostnader genom addition.

Två egenskaper hos systemet, omformulerade i dess egen vokabulär:

- **Riktadhet** (§4.2) är en egenskap hos $C$: den är inte symmetrisk på det sätt som $d$ är.
- **Iscensättning** (§4.3) är en egenskap hos $U$: det existerar $R_C$ för vilka $C$ som uppstår längs $U(U(M_A, R_C, \cdot), R_B, \cdot)$ ligger under $C(M_A \Rightarrow R_B)$, och den effektiva $R_C$ bestäms till stor del av $R_B$ (målet), inte av $M_A$ (källan).

Detta är ett **typat** objekt — dess två bärarmängder, $M$ och $R$, är genuint olika, och typdisciplinen är inte bokföring utan skälet till att olikheten i §4.4 inte är formulerbar. Det ligger närmare ett typat övergångssystem än en geometri, och att kalla det ett *metrik–anpassningssystem* registrerar båda halvorna: en metrik på beteenden, och en anpassningsprocess över dem som metriken inte styr.

## 5.4 Det öppna problemet, nu snävare

Att namnge objektet stänger det inte. Vad som förblir öppet är inte "vad är denna sak" — §5.3 besvarar det preliminärt — utan en skarpare, mer hanterbar fråga om dess kalkyl:

> **Vilka formella egenskaper hos kostnaden $C$ och uppdateringsoperatorn $U$ medger en användbar kalkyl för etappindelad anpassning?** Specifikt: under vilka villkor på $U$ hjälper iscensättning; finns det en beräkningsbar regel som väljer en effektiv vägpunkt $R_C$ från målet $R_B$ (data i §4.3 antyder att en kan existera, eftersom vägpunkten nästan är en funktion av målet ensamt); och finns det en riktad, operatormedveten analog till triangelolikheten som *är* välställd — en gräns för sammansatt operatorkostnad i termer av enkeloperatorkostnader och något mått på hur mycket $U(M_A, R_C, \cdot)$ skiljer sig från $M_C$?

Detta är en forskningsfråga med tillräcklig struktur för att kunna attackeras, vilket är mer än "objektet är inte ett metriskt rum" erbjöd. Det är också den naturliga bron till multi-agent-linjen (§8), där uppdateringsoperatorer får den ytterligare strukturen av interaktion och arv.

## 5.5 Räckvidd för formaliseringen

Tupeln är en *beskrivning av vad som mättes*, inte ett påstående om att varje metrik–anpassningssystem beter sig som detta gjorde. De specifika fynden — asymmetri nära 0,76, målbestämd iscensättning, svag avstånd–kostnadskorrelation — är egenskaper hos *detta* $(M, R, d, C, U)$, över ett substrat, en arkitekturfamilj, en klass av uppdateringsregler. Huruvida andra anpassningsprocesser instansierar samma kvalitativa struktur är precis vad §5.4:s kalkyl, om den existerade, skulle låta en förutsäga. Vi hävdar att objektet är vältypat och att dess kostnad inte komponerar; vi hävdar inte att siffrorna överförs.

---
