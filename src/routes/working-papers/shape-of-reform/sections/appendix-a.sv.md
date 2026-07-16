# Appendix A — Identiteten hos anslutningströskeln och objektets typdisciplin

## A.1 ε_c är flaskhalskanten i det minimala spännträdet (för §3.2)

**Påstående.** För en mängd punkter med parvisa avstånd, vilka länkas till en graf närhelst deras avstånd är högst ett tröskelvärde τ, är det minsta τ för vilket grafen är sammanhängande (single-linkage-anslutning) lika med den största kanten i det minimala spännträdet.

*Bevis.* Låt $\tau^\ast$ vara den största kantvikten i det minimala spännträdet (MST). Vid varje $\tau < \tau^\ast$ uppdelas MST om alla kanter tyngre än τ avlägsnas (den tyngsta MST-kanten tas bort, vars två ändpunkter ligger i olika komponenter av den återstående skogen, och ingen lättare kant kan återförena dem utan att motsäga MST:s minimalitet); eftersom MST är en delgraf av den fulla trösklade grafen på samma nodmängd med samma sammanhängning, är den fulla grafen också osammanhängande. Vid $\tau = \tau^\ast$ finns varje MST-kant närvarande, så grafen är sammanhängande. Alltså är anslutningströskeln exakt $\tau^\ast$. $\square$

**Konsekvens.** Den per-regim anslutningströskeln ε_c bär ingen information utöver flaskhalskanten i MST, vilken är ett sammandrag av avståndens *magnitud*. Replikationen bekräftar detta numeriskt: över regimer överstiger ε_c MST:s maximala kant med 0,5–3,8%, vilket är exakt granulariteten i tröskelsvepningen. Varje påstående som vilar på att ε_c varierar mellan regimer är ett påstående om §3.1, omformulerat i topologins vokabulär. Detta är registrerat som `[R]`.

## A.2 Varför triangelolikheten inte är formulerbar (för §4.4)

Reformkostnaden $C(M_A \Rightarrow R_B)$ har typen $M \times R \to \mathbb{R}$. En triangelolikhet $C(A,B) \leq C(A,C) + C(C,B)$ kräver att alla tre $A$, $B$, $C$ är objekt av en enda typ, så att var och en av de tre kostnaderna är en instans av samma tvåargumentfunktion och den mellersta termen $C$ uppträder en gång som huvud och en gång som svans.

Här är argumenten typade $M$ (vänster) och $R$ (höger). I $C(M_A \Rightarrow R_C) + C(M_C \Rightarrow R_B)$ uppträder symbolen "C" först som en regim $R_C$ och sedan som en modell $M_C$ — två olika objekt som notationen sammanblandar. Även om man medger sammanblandningen, är $M_C$ inte den modell som produceras av den första operationen: $U(M_A, R_C, \tau)$ är en modell som *presterar som* $M_C$ på $R_C$ men är en distinkt punkt i $M$ (§4.4). Så den andra etappens verkliga kostnad är $C(U(M_A, R_C, \tau) \Rightarrow R_B)$, en empirisk storhet som i allmänhet är olik $C(M_C \Rightarrow R_B)$.

**Den återanvändbara formen.** Kompositionella lagar kräver kompositionella operationer, inte bara kompatibelt utseende index. Den syntaktiska platsen för en triangelolikhet kan fyllas med tre uppmätta tal närhelst tre objekt existerar; huruvida det resulterande påståendet *betyder* något kräver att operationen som producerar den första kostnaden ger det objekt som den andra kostnaden är definierad på. För reformkostnad gör den inte det, och "brottsfrekvensen" på ~25% (§4.4) är därför inte ett brott mot någonting — det är ett kategorifel som tabellerats. `[R]`

---
