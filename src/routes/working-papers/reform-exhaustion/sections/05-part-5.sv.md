# Del V — Simulering

## 5.0 Syfte och konventioner

Simuleringarna fyller seriens standardmässiga disciplinära funktion: de tvingar de formella påståendena i Del II att producera siffror, och de blottlägger påståendenas beroende av antaganden som prosa kan lämna bekväma och algebra kan lämna implicita. Disciplinen verkade på detta papper före publicering, och episoden rapporteras snarare än slätas över, eftersom den förändrade ett teorem. Ett tidigt utkast till §2.1 hävdade att repertoarbrister per lager ackumuleras additivt i det generiska fallet. Prototypen falsifierade påståendet som det var formulerat: generiska blinda fläckar annihilerar inte additivt — de *försämrar* additivt, och distinktionen mellan annihilation och försämring visar sig styras av en variabel som utkastet inte hade identifierat, linjeringsgeometrin hos lagrens blinda fläckar, vilken Simulering B nu behandlar som en primär experimentell axel och Appendix A.3 härleder. Det korrigerade resultatet är starkare än det ursprungliga påståendet, och det kopplar aktueringskedjan till teknisk rapport X:s korrelationsramverk. Detta är vad simuleringar är till för.

Konventioner, enligt serien: öppen källkod i Python, samtliga parametrar deklarerade i repositoriet, Monte Carlo över 100 frön med fördelningar rapporterade snarare än enstaka körningar, illustrativa snarare än empiriskt kalibrerade parametrar, commit-hash citerad i den publicerade versionen. Anläggning: x_{t+1} = Ax_t + Bu_t med A diagonalstabilt (element likformigt [0,85, 0,98] om inget annat anges), B = I, m = 6. Lager som i §2.1: slumpmässiga kontraktiva översättningar med singulärvärden likformigt [0,7, 1,0] om inte ett experiment varierar dem.

## 5.1 Simulering A — Energilagen

**Design.** Svep delegationsdjup n från 0 till 7. Vid varje djup, komponera kedjan Π, lös den diskreta Lyapunovekvationen för styrbarhetsgramianen för (A, BΠ) och beräkna den minimala energin E_min = x_fᵀW_c⁻¹x_f för slumpmässiga enhetsmåltillstånd. Rapportera E_min(n)/E_min(0)-fördelningar över frön.

**Prototypresultat.** Medianenergikvoter: 1,41, 1,94, 2,76, 3,85, 5,78, 8,03, 11,18 för djupen ett till sju — en uppmätt tillväxtfaktor per lager på ungefär 1,40 mot en analytisk förutsägelse på 1,399 från lagrens singulärvärdesfördelning (faktorn exp(−2·E[ln σ]); härledning i Appendix A.2). Energilagens exponentiella form bekräftas i prototypen inom samplingfelets marginal.

**Ett andra fynd som den formella analysen inte förutsåg.** Kvartilavståndet för energikvoten vidgas med djupet — [8,84, 13,96] vid djup sju mot [1,30, 1,53] vid djup ett. Djup höjer inte bara medianpriset för policy; det gör priset *mindre förutsägbart*, eftersom den sammansatta orienteringen av sju slumpmässiga översättningar varierar mer över realisationer än orienteringen av en. Styrningstolkningen föregriper §3.3:s variansobservation från kostnadssidan: en djup kedja är inte bara ett dyrt instrument utan ett instrument vars kostnad inte kan budgeteras tillförlitligt.

## 5.2 Simulering B — Blindfläcksgeometri

**Design.** Lager bär repertoarbrist d_i = 1: varje är en ortogonal projektion som annihilerar en riktning (dess blinda fläck), sammansatt med kontraktionen från 5.1 frånkopplad för att isolera rangmekanismen. Tre geometrier: *oberoende* (blinda fläckar ömsesidigt ortogonala), *generisk* (blinda fläckar dragna likformigt slumpmässigt), *homogeniserad* (alla lager delar en blind fläck). Följ, per djup: hård rang av Π; rent överförda dimensioner (singulärvärden ≥ 0,99); minsta singulärvärde skilt från noll.

**Prototypresultat.** Oberoende geometri: rang faller exakt en per lager, 6, 5, 4, 3, 2, 1, 0 — additiv annihilation, (m − q)/d-vägen till konstitutionell ostyrbarhet i §2.4. Homogeniserad geometri: rang 5 vid varje djup från ett och framåt, alla överlevande dimensioner vid full trohet — en absolut, djupoberoende blind fläck och inget annat. Generisk geometri: hård rang konstant vid 5, medan rent överförda dimensioner faller nästan exakt en per lager (6,0, 5,0, 4,0, 3,0, 2,0, 1,1, 0,45) och den sämst överlevande riktningens förstärkning kollapsar geometriskt (1,0, 1,0, 0,36, 0,18, 0,095, 0,059, 0,033) — vid djup sex kostar återställandet av den riktningen i storleksordningen (1/0,033)² ≈ 900 gånger direktaktueringsenergin.

**Kritiskt fynd.** Den invarianta storheten över de oberoende och generiska regimerna är antalet rent överförda dimensioner: en dimension per bristfälligt lager, debiterat som omöjlighet i en geometri och som exponentiellt pris i den andra — den enhetliga lagen i §2.1, här uppvisad snarare än påstådd. Och den homogeniserade regimen står isär på ett sätt som landevidensen i §3.2 och §4.2 gör läsbart: en kedja vars lager delar sin blinda fläck är dimensionellt billig och absolut, osynligt blind i den enda dimension inget lager kan uttrycka. Implementerarkorrelation är för aktueringskanalen vad observatörskorrelation är för teknisk rapport X:s ensemble — den variabel som avgör om delarnas brister tar ut varandra, ackumuleras eller sammanfaller.

## 5.3 Simulering C — Brusplacering

**Design.** Fixera djup n = 6 med de kontraktiva lagren från 5.1. Injicera brus med enhetsvarians vid varje lager; beräkna varje injektionspunkts andel av levererad brusvarians vid aktuatorn.

**Prototypresultat.** Andelar per lager, toppen av kedjan till gatan: 6,7, 9,0, 12,4, 17,1, 23,1, 31,7 procent. De två sista lagren bidrar med 54,8 procent av levererad brusvarians. Asymmetrin från §3.3 — signalen passerar allt, sent brus passerar nästan ingenting — bekräftas: vad gatan levererar är mestadels vad gatan hörde.

**Kritisk förutsägelse för Del VI.** Om mekanismen verkar i verkliga kedjor borde granskningar av implementeringstrohet finna varians koncentrerad nära leveranspunkten snarare än jämnt fördelad längs kedjan — en förutsägelse på kodningsnivå som MGNREGA-delstatsjämförelserna i princip kan kontrollera, eftersom socialrevisionsdata lokaliserar avvikelser per administrativ nivå.

## 5.4 Simulering D — Arkitekturer jämförda

**Design (full simulering; prototypen körde endast djupjämförelsen).** Fyra arkitekturer vid matchad kvalitet per lager: A, enhetligt djup 7; B, enhetligt djup 4; C, enhetligt djup 2; D, *fraktal tilldelning* — direktivet uppdelat efter inneboende dimensionalitet, lågvarietetskomponenter routade genom den djupa enhetliga kedjan, högvarietetskomponenter genom djup ≤ 2 med slutna lokala slingor (§2.5). Utdata: levererad trohet, E_min, latens och levererad SNR per arkitektur; designförutsägelsen är att D närmar sig C:s trohet på högvarietetskomponenter vid nära A:s enhetlighet på lågvarietetskomponenter — tilldelningsprincipen i §4.2 gjord kvantitativ.

**Djupets prototyptabell.** Medianenergikvot och medeleffekt för levererad signal: djup 2 — 1,94 och 0,544; djup 4 — 3,85 och 0,299; djup 7 — 11,18 och 0,117. En djup‑7‑kedja levererar ungefär en femtedel av signaleffekten hos en djup‑2‑kedja och prissätter måltillstånd till ungefär sex gånger energin, vid identisk kvalitet per lager.

## 5.5 Simulering E — Diskriminatorn (endast specifikation)

Operationalisera separationen i §4.1. Generera direktiv med en kodad *hotparameter*; kör två världar: strukturell (M = I, kedja Π som ovan) och antagonistisk (M(θ) som dämpar hotfulla dimensioner enligt teknisk rapport IX:s incitamentskompatibilitetsmekanism, sammansatt med samma Π). Signaturen: levererad trohet är oberoende av hot i den strukturella världen och monotont avtagande i hot i den antagonistiska världen, vid matchad genomsnittlig försvagning. Simuleringen fastställer signaturens synlighet vid realistiska brusnivåer innan Del VI letar efter den i kodade fall — in-silico-styrkeanalysen för den empiriska diskriminatorn.

## 5.6 Vad simuleringarna fastställer och inte fastställer

Enligt seriens gällande disciplin: simuleringarna fastställer intern konsistens — att de formella mekanismerna producerar det påstådda beteendet under modellens antaganden — och de har redan gjort rätt för sig genom att korrigera ett av dessa påståenden. De fastställer ingenting om verkliga delegationskedjor. Parametrarna är illustrativa; lagren är linjära; geometrisvepet utforskar ett rum vars verkliga fördelning är en empirisk okänd. Bron från uppvisad mekanism till testad mekanism är Del VI, och seriens position sedan teknisk rapport VIII är att bron är obligatorisk: en mekanism som inte kan konfronteras med data är ännu inte ett bidrag, hur väl den än simulerar.

---
