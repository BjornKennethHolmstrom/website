# §2 — Rummet, och de två storheter som inte får förväxlas

## 2.1 Konstruktionen

Liksom i rapporterna 0 och XIX prognostiserar rekurrenta prediktorer en studsande punkt renderad på ett pixelrutnät i normala, blåsiga, dämpade och oskarpa regimer. Uppsättningen består av sju modeller med olika dolda kapaciteter, träningsregimer och ett hjälphuvud för hastighet. Geometripanelen innehåller tjugo zoon, med frön 1000+z och sex träningsepoker, inte XIX:s tjugo zoon. Kostnadspanelen innehåller tio frön. En tränad prediktor är en artefakt, inte direkt evidens om dess interna faktorisering.

## 2.2 Beteendemässig olikhet — kartan [R]

För prediktionsvektorer $p_A,p_B$ på en gemensam ström med $N$ skalära element är XXIII:s implementerade mått

$$q_p(A,B)=\frac{\|p_A-p_B\|_2^2}{N},\qquad d_p(A,B)=\sqrt{q_p(A,B)}.$$

Det kvadrerade måttet $q_p$ är symmetriskt och icke-negativt, men för prediktionerna 0, 1 och 2 är de tre avstånden 1, 1 och 4, vilket bryter mot triangelolikheten. RMS-roten $d_p$ är en pseudometrik på tränade artefakter och en metrik på skilda prediktionsprofiler. XIX använder istället RMS-skillnader mellan förlustprofiler $e_A,e_B$. Motsatta prediktioner kan dela samma förlust mot målet noll. Ingetdera olikhetsmåttet etablerar ekvivalens mellan interna representationer eller en översättningsväg. Strikt växande transformationer bevarar parvisa rangordningar och den exakta första sammanhängande grafen; de bevarar i allmänhet inte formkorrelationer, relativ marginal eller vägsummor.

## 2.3 Övergångskostnad — ett mått med fast budget [TR]

För ett modelltillstånd $m$, målregim $r$ och uppdateringsbudget $T$ är implementerad v4-kostnad

$$C_T(m,r)=20\sum_{k=0}^{39}\max(0,\ell_{20k}^{\mathrm{train}}-f_r),\qquad T=800.$$

Här är $f_r$ bästa registrerade valideringsförlust hos en referens av källans arkitektur tränad på $r$, inte ett bevisat optimum. Den teckenförsedda varianten utelämnar klippning. Första samplade passagen av $1{,}05 f_r$ registreras, eller markeras som censurerad om ingen sker. Summan omfattar fast budget oavsett passage; den är inte tid eller kostnad fram till lyckat slutförande. Utvärdering på träningsdata mot en valideringsreferens blandar urval; teckenförsedda värden under referensen påvisar inte positiv överföring mot ett matchat undanhållet riktmärke. Referensstopp och känslighet redovisas i §4 och Appendix B.

Kostnad beror på uppdateringsregel, optimerare, dataordning, arkitektur, stokastisk kontext, uppgift, budget och referens. Beteckna uppdateringen $U(m,r,T;\omega)$, med stokastisk kontext $\omega$. En modell–regim-kostnad är inte ett avstånd mellan två tränade ändpunkter.

## 2.4 Kartan och resan

Ett olikhetsmått beskriver beteende på en vald ström. Anpassning förändrar en modell med särskilda data och operationer. Även en exakt metrik på beteendeprofiler behöver inte förutsäga denna kostnad. Omvänt kan prediktiv korrelation finnas utan att identifiera en väggeometri. XIX växlar mellan redan tränade prediktorer; den mäter inte omträningskostnader. XXIII jämför dessa skilda storheter utan att behandla den ena som direkt ersättning för den andra.
