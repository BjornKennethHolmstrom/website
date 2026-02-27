# Del II: simuleringen

## Scenariodesign

Simulatorn modellerar 60 medborgargrupper som har preferenser över fyra policydimensioner, vilka utvecklas över 120 tidssteg. Medborgarna är organiserade i fyra spatiala kluster om 15 grupper vardera, med genuin intern mångfald inom varje kluster — denna variation inom gruppen är precis den information som aggregering förstör. Alla preferenser är normaliserade till intervallet [−1, +1], där −1 representerar starkt motstånd och +1 starkt stöd på varje dimension.

Preferenserna är inte statiska. De utvecklas långsamt genom individuell drift (vilket representerar genuint åsiktsbyte över tid), med två genuina preferensskiften injicerade vid t = 40 och t = 80. Vid t = 40 skiftar kluster 0 kraftigt på dimensionerna 1 och 2, vilket representerar en genuin regional preferensförändring — den typ av verklig demokratisk signal som ett fungerande representationssystem bör upptäcka och överföra. Vid t = 80 sker ett systemövergripande skifte på dimension 3 som påverkar alla grupper.

Dessa genuina skiften är det kritiska testet. Ett demokratiskt system som inte kan upptäcka och svara på genuina preferensskiften inom ett rimligt tidsfönster fungerar inte som en demokrati i någon meningsfull bemärkelse, oavsett dess institutionella former.

## De fyra arkitekturerna

Alla fyra arkitekturer ges identiska parametrar för institutionell kvalitet: samma policyresponsförstärkning (K = 0,30) och samma grundläggande signalbehandlingslogik. Skillnader i prestanda kan uteslutande tillskrivas antalet lager samt aggregerings- och brusegenskaperna för varje lager.

**Arkitektur A — djup demokrati (5 lager):** opinionsundersökning → media → parti → parlament → regering → policy. Detta representerar en typisk västerländsk parlamentarisk demokrati med ett fullständigt filtreringslager av media och partier mellan medborgare och valda representanter. Lagerparametrar: aggregeringsförhållanden på 5, 4, 3, 4, 3; standardavvikelser för brus på 0,12, 0,18, 0,22, 0,20, 0,15; total latens på 18 tidssteg.

**Arkitektur B — representativ (3 lager):** direktundersökning → fullmäktige → församling → policy. Ett slankare representativt system — närmare en rådsdemokrati av nordisk modell med direkt undersökningsindata som ersätter mediafiltrering. Lagerparametrar: aggregeringsförhållanden på 4, 5, 3; standardavvikelser för brus på 0,10, 0,18, 0,14; total latens på 9 tidssteg.

**Arkitektur C — semidirekt (2 lager):** medborgarförsamling → policy. Medborgare deltar direkt i en församlingsprocess som matar in i policy, med ett mellanliggande samordningslager. Lagerparametrar: aggregeringsförhållanden på 3, 2; standardavvikelser för brus på 0,08, 0,10; total latens på 4 tidssteg.

**Arkitektur D — direkt/deltagande (1 lager):** medborgare → policy. Nästan direkt deltagande med minimal förmedling. Lagerparametrar: aggregeringsförhållande på 1 (ingen aggregeringsförlust), standardavvikelse för brus på 0,05; total latens på 1 tidssteg.

## Simuleringsutdata

![Simuleringsutdata: fyra rader med paneler. Översta raden: SNR vs lagerantal (vänster) och variansöverlevnad vs brusackumulering (höger). Andra raden: policyspårning av medborgarpreferenser över tid för alla fyra arkitekturer. Tredje raden: RMS-spårningsfel per arkitektur över tid. Nedre raden: värmekartor för preferensrepresentationsfel (observerat minus sant) för varje arkitektur vid t=50.](/whitepapers/images/observability-democracy/ggf-simulator-v5.png)

*Figur 1: Utdata från GGF Governance Simulator v5. Uppe till vänster: SNR på policylagret sjunker under oobserverbarhetströskeln (röd streckad linje, SNR = 1) mellan K = 1 och K = 2 lager; alla arkitekturer med 2+ lager hamnar under den enligt den analytiska modellen. Uppe till höger: överlevande preferensvarians (blå) passeras av ackumulerad brusvarians (röd) vid ungefär K = 3 lager. Andra raden: policyspårning över tid — arkitektur A (röd) oscillerar oberäkneligt kring det sanna medborgargenomsnittet istället för att följa det; D (grön) följer tätt med korta anpassningsfördröjningar vid de genuina skifthändelserna. Tredje raden: individuella felspårningar bekräftar A:s ihållande brusdrivna oscillation och D:s baslinjefel som ligger nära noll. Nedre raden: värmekartor för representationsfel visar att arkitekturerna A och B har projicerat en nästan enhetlig (brusdominerad) signal tillbaka till alla medborgargrupper, vilket utplånar den genuina spatiala variation som C och D bevarar.*

## Att läsa resultaten

**SNR-kollapsen är snabbare än vad intuitionen antyder.** Den analytiska SNR-kurvan i den övre vänstra panelen faller från 1,78 vid K = 1 till 0,25 vid K = 2 och 0,048 vid K = 3. Detta är ett fall på två storleksordningar över tre lager. Hastigheten på denna kollaps återspeglar den multiplikativa naturen hos aggregeringsförluster: varje ytterligare lager dividerar den överlevande variansen med aggregeringsförhållandet, medan varje lager adderar ett ungefär konstant brustillskott. Produkten avklingar geometriskt; summan växer linjärt. Det geometriska förfallet vinner snabbt.

**Arkitektur A:s oscillation är brusföljande, inte preferensföljande.** Det mest slående draget i policyspårningspanelen är inte att arkitektur A svarar långsamt på genuina preferensskiften — det är att den oscillerar kontinuerligt i frånvaro av någon genuin signal. Det röda spåret i spårningspanelen rör sig ihållande och betydande genom hela simuleringen, även under perioder där medborgarnas sanna preferenser är stabila. Detta är signaturen för ett system som följer sitt eget brus snarare än någon extern signal. Policylagret tar emot en signal som domineras av brusegenskaperna i dess representationskedja med fem lager, och svarar troget på det bruset. De genuina preferensskiftena vid t = 40 och t = 80 är inte synliga som distinkta händelser i arkitektur A:s spår — de förloras i bakgrundsoscillationen.

**Arkitektur D:s korta feltoppar är det korrekta demokratiska svaret.** Arkitektur D:s felspårning visar två korta, skarpa toppar — en vid t = 40 och en vid t = 80 — som exakt motsvarar de genuina preferensskiftena. Dessa toppar representerar den oundvikliga eftersläpningen mellan en genuin preferensförändring och att policysystemet upptäcker och svarar på den, även med minimal förmedling. Efter varje topp återgår felet snabbt till nära noll. Detta är hur en fungerande demokratisk signal ser ut: lugn baslinje, snabb upptäckt av genuin förändring, snabbt svar.

**Värmekartorna visar fullständig spatial informationsförstörelse.** Den nedre raden jämför observerade minus sanna preferenser på medborgargruppsnivå vid t = 50, efter det första genuina preferensskiftet. Arkitektur A:s värmekarta domineras av stora, spatialt enhetliga block av rött och blått — representationskedjan har projicerat en brusdriven enhetlig signal tillbaka till alla medborgargrupper, vilket helt döljer den genuina spatiala variationen i preferenser. Arkitektur D:s värmekarta är nästan vit — den observerade signalen följer tätt de sanna preferenserna hos varje medborgargrupp och bevarar den spatiala strukturen.

## Kvantitativ sammanfattning

| Arkitektur | Lager | Genomsnittligt spårningsfel | Överlevande varians | SNR |
| --- | --- | --- | --- | --- |
| A — djup demokrati | 5 | 0,160 | 0 % | 0,002 |
| B — representativ | 3 | 0,077 | 0 % | 0,048 |
| C — semidirekt | 2 | 0,022 | 79 % | 0,254 |
| D — direkt/deltagande | 1 | 0,008 | 100 % | 1,780 |

Spårningsfelskillnaden mellan A och D är en faktor tjugo. Arkitektur A:s genomsnittliga spårningsfel på 0,160 på en preferensskala av [−1, +1] innebär att policylagret är systematiskt fel med ungefär 16 % av det fullständiga preferensintervallet — inte på grund av något institutionellt misslyckande, utan på grund av att den signal som det tar emot har förstörts av representationskedjan innan den anländer.

Siffrorna på 0 % överlevande varians för arkitekturerna A och B är exakta: under simuleringsparametrarna når inte en detekterbar bråkdel av den ursprungliga medborgarpreferensvariansen policylagret. Vad policylagret observerar är uteslutande brus.
