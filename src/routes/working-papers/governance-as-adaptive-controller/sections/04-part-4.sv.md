# Del IV — Simulering: den adaptiva regulatorn

## 4.1 Implementerad process och regulator [I]

Simuleringen är en tvådimensionell linjär process, driftande diagonal \(A\) och obunden två gånger två-matris \(B\). Den använder ett nominellt Kalmanfilter, två radvisa rekursiva minsta kvadratskattningar och säkerhetsekvivalent LQR med valfri gaussisk dither. Filtret använder den nominella processen och avsedd styrsignal, inte den aktuella skattade eller dämpade processen. Det är inte i allmänhet optimalt för den faktiska processen. Appendix B beskriver koden i stället för den ursprungligen föreslagna idealregulatorn.

## 4.2 Sex scenarier

Den historiska jämförelsen använder måttlig dither, ingen avsiktlig dither, krisutlöst dither, hög dither, kombinerad snabbare drift och kortare minne samt dämpad verkställighet. Ingen avsiktlig dither är inte detsamma som frånvaro av informativ variation: processbrus, återkoppling och transienter kvarstår. Krisutlösaren använder det sanna simulerade tillståndet, som en verklig regulator inte behöver kunna observera. Villkoret med snabbare drift ändrar även glömskan, vilket förhindrar isolering av glömskans effekt.

## 4.3 Historiska och explorativa resultat

Appendix B.7 behåller den historiska tabellen med 100 körningar [HR]. Rapporterade medianer för följningsnorm vid måttlig, ingen och krisutlöst dither är 0,211, 0,204 respektive 0,201. Deras parameterfel skiljer sig markant. Hög dither har högst rapporterad följningsnorm (0,658) och lägst parameterfel (0,075). Detta är en avvägning mellan prestanda och identifiering över en ändlig horisont, inte evidens för att regulatorn utan utforskning måste misslyckas till slut.

En explorativ omkörning av de tre första fröna i sammanfattningstabellen för varje scenario ger följande medianer av körningarnas medelfel [E]; banorna med 550 steg och ursprungliga måttdefinitioner behölls.

| Scenario | Följningsnorm | Parameterfel |
|---|---:|---:|
| 1 | 0,213 | 0,499 |
| 2 | 0,205 | 1,666 |
| 3 | 0,197 | 1,951 |
| 4 | 0,647 | 0,085 |
| 5 | 0,231 | 1,258 |
| 6 | 0,280 | 0,774 |

Inga krisepisoder inträffar i de tre omkörda banorna i scenario 3. I varje omkörd bana i scenario 6 ligger skattningen närmare den effektiva insignalens förstärkning än den fysiska enligt auditens diagnostik med medelvärde av matrisfelet. Observationerna verifierar inte hela de historiska fördelningarna. Kodens fält för självdöljande är en konstant platshållare och kan inte tolkas som en mätning.

## 4.4 Svep och begränsningar

Kodens följningssvep mäter medeltillståndsnorm, inte det kvadratiska LQR-målet, informationsrang eller derivatan av en institutionell kunskapsstock. Deras kontur vid följningsnorm 1,0 är en vald prestandanivå, inte en härledd excitations- eller lärandetröskel. De ursprungliga fullständiga svepen, regulatorns figurdata och CSV-filen återfanns inte i auditen; de äldre figurerna och landöverläggen används inte som evidens i denna revision. Inga påståenden om asymptotisk stabilitet, optimal dual reglering eller kausala institutionella effekter följer av de explorativa omkörningarna.
