## Appendix A. Simulerings- och reproducerbarhetsanteckningar

Detta appendix redovisar de numeriska procedurer som använts för att producera samtliga resultat i dokumentet. Det är avsett att möjliggöra oberoende replikering inom den angivna modellramen.

### A.1 Integration

Alla simuleringar använder Eulerintegration med fast steglängd \(dt = 0{,}05\). För deterministiska körningar integreras de ordinära differentialekvationerna i avsnitt 2.3 direkt. För stokastiska körningar använder gränsdriften den modifierade upplevda osäkerheten \(F + \sigma \xi(t)\), där \(\xi(t)\) är gaussiskt vitt brus med enhetsvarians, och integrationen följer det vanliga Euler–Maruyama-schemat.

Vid varje steg begränsas alla tillståndsvariabler till intervallet \([0,1]\). Denna begränsning är en uttrycklig del av modelldefinitionen, inte en numerisk bekvämlighet, eftersom variablerna är begränsade genom konstruktionen.

Olika experiment använder olika integrationshorisonter:

- Fasdiagramkörningar: \(t_{\text{slut}} = 180\)
- Hysteresvep: \(t_{\text{slut}} = 200\) per steg, med en 250-stegs förekvilibrering vid det initiala parametervärdet
- Stokastiska svep: \(t_{\text{slut}} = 200\)
- Tvåpopulationskörningar: \(t_{\text{slut}} = 500\)
- Interventionskörningar: \(t_{\text{slut}} = 400\), med en 300-stegs förekvilibrering vid grundinsatsvärdet

### A.2 Initialvillkor

Två referensinitialvillkor används genomgående.

**Öppen start:**

\[
U=0{,}2,\quad B=0{,}02,\quad T=0{,}95,\quad E=0{,}90,\quad P=0{,}9
\]

**Sluten start:**

\[
U=0{,}8,\quad B=0{,}90,\quad T=0{,}02,\quad E=0{,}05,\quad P=0{,}1
\]

I interventionsexperimenten förekvilibreras systemet först vid grundinsatsvärdet \(s=1{,}5\) från den öppna starten tills en attraktor nås. Det resulterande tillståndet används som initialvillkor för chockexperimentet.

### A.3 Klassificeringströsklar

Sluttillstånd klassificeras utifrån gränsstyrkan \(B\), medelvärdesbildad över de sista 200 tidsstegen i en körning. Trösklarna är:

- **Öppen:** \(B_{\text{final}} < 0{,}20\)
- **Sluten:** \(B_{\text{final}} > 0{,}55\)
- **Mellanliggande:** \(0{,}20 \le B_{\text{final}} \le 0{,}55\)
- **Oscillerande:** standardavvikelsen för \(B\) över samma slutdel \(> 0{,}05\)

För stokastiska körningar räknas en körning som sluten om dess slutliga gränsstyrka \(B\) överstiger \(0{,}5\). Denna konvention är förenlig med den deterministiska klassificeringen och används endast för binär utfallsräkning.

### A.4 Fröpolicy för stokastiska körningar

För Monte Carlo-svep använder varje körning ett eget slumptalsfrö. Körningar indexeras med \(r\), och fröet är:

\[
\text{frö}(r) = \text{basfrö} + 1000 \, r
\]

med \(\text{basfrö} = 42\). Denna deterministiska fröformel möjliggör exakt reproduktion av alla stokastiska trajektorier som rapporteras i dokumentet. För det stokastiska svepet i avsnitt 5 gäller \(r = 0,\ldots,29\) för varje parameterpar.

### A.5 Parametervärden

Alla parametervärden anges i tabellen i avsnitt 2.4. Den långsamma permeabilitetsanpassningshastigheten är \(\rho_P = 0{,}02\) om inget annat anges. I fasdiagramsvepet varieras \(\rho_P\) över \(\{0{,}01, 0{,}02, 0{,}05, 0{,}10\}\). I det stokastiska svepet hålls \(\theta = 0{,}196\) och \(\rho_P = 0{,}02\) fasta.

### A.6 Tvåpopulationsmodell

Tvåpopulationsmodellen i avsnitt 6 erhålls genom att duplicera enpopulationsmodellens ekvationer för \(B,T,E,P\) och koppla de två kopiorna genom den delade osäkerhetsvariabeln \(U\). Ekvationerna anges i avsnitt 6.1 och upprepas inte här. Initialvillkoren för polariserings- och kaskadexperimenten anges i avsnitt 6.2 och 6.3.

### A.7 Kod- och datatillgänglighet

De Python-skript och CSV-filer som använts för att producera alla figurer och tabeller är tillgängliga från författaren. En arkividentifierare kommer att läggas till i den slutliga versionen. Det fullständiga fasdiagrammet och data från de stokastiska svepen tillhandahålls som tilläggsmaterial.
