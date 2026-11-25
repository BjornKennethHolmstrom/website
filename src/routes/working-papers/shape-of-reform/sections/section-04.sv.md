# §4 — Riktad anpassningskostnad och utvalda rutter

## 4.1 Prediktion och statistisk enhet

[TR] Den separata registrerade rapporten ger H_predict FAIL: median över frön för riktad Spearmankorrelation 0,468 [0,439; 0,525], under 0,5. Rapporten returnerar n/a för symmetriserad korrelation och asymmetri eftersom dess sökning efter omvända par är omkastad. V4-generatorns egen sammanfattning med uttryckliga hemmaregimer ger 0,656 respektive 0,763. Skillnaden mellan 0,468 och 0,656 är deskriptiv, inte ett bevisat tak eller en kausal förklaring.

Kostnaden beror på källan och målregimen, inte den särskilda målmodellen. Av 300 rader tillhör 120 30 grupper med upprepade dragningar; deras medianvariationskoefficient är 0,007. Parsammanfattningar med sista respektive genomsnittlig dragning överensstämmer till tre decimaler. Vid explorativ aggregering till 21 källa–regim-enheter per frö (medelkostnad och medelolikhet till modeller med målregimen som hem) är median rho 0,544, med 9/10 frön minst 0,3 [E]. Detta skulle uppfylla de ursprungliga numeriska gränserna men ändrar enheten och prediktorn, inte det registrerade resultatet. Detta explorativa resultat manar till försiktighet med att på grundval av det ursprungliga misslyckandet avfärda sambandet som enbart dekorativt.

För likaviktade omvända kostnader $c_{AB},c_{BA}$ har varje symmetrisk prediktion $s$ den parade kvadratiska felsumman

$$(s-c_{AB})^2+(s-c_{BA})^2=2\left(s-\frac{c_{AB}+c_{BA}}{2}\right)^2+\frac{(c_{AB}-c_{BA})^2}{2}.$$

Detta är en exakt projektion för kvadratiskt fel [R], inte ett numeriskt Spearmantak.

## 4.2 Asymmetri, referenser och censurering

[TR] V4:s median över frön för relativ asymmetri är 0,763, med klippta kostnader inklusive nollor. Den separata registrerade analysen kan inte beräkna den. Definiera parasymmetri som absolut riktad skillnad dividerad med maximal kostnad (nämnare med golv $10^{-9}$). Explorativa poolade parkontroller med medelvärde av upprepade dragningar ger:

| Delmängd | Par | Median |
|---|---:|---:|
| Alla | 150 | 0,761 |
| Båda referenser vid taket | 121 | 0,694 |
| Minst en referens stoppad tidigt | 29 | 1,000 |
| Båda kostnader positiva | 125 | 0,677 |
| Minst en kostnad noll | 25 | 1,000 |

Dessa poolade medianer är inte v4:s medianer över frön. Par med samma arkitektur har också betydande asymmetri (poolad median 0,771, 60 par) [E]. Medianen för tidigt stoppade referenser är 1, men det innebär inte att varje par innehåller noll; den separata nollkostnadsgruppen innehåller 25 par. Referensstatus och klippning påverkar storleken; asymmetri kvarstår efter endera begränsningen, inte som en kausal uppdelning.

90,3 procent av övergångsraderna använder referenser som når taket på 1400 steg. Varken takträff eller tidigt stopp certifierar konvergens. Flaggor för negativ teckenförsedd kostnad förekommer i 41,3 procent av raderna, 100 procent vid tidigt stoppade referenser mot 35,1 procent vid taket. Detta är förenligt med artefakter från blandade urval och etablerar inte positiv överföring. Radpoolad censurering är 12,7 procent, eller 10,7 procent utan `compressed_h2`; motsvarande medianer över frön är 0,117 och 0,074. Censurering registrerar en tröskel som inte passerats inom samplad budget, inte saknade kostnadsdata. Inget attenueringsteorem följer. Den empiriska asymmetrin gäller detta mått och denna apparat, inte kostnaden för fullbordad reform.

## 4.3 Etappindelning: utvalda rutteffekter och olöst mekanism

[TR] Den separata rapporten innehåller fem registrerade tester. Alla utfall bevaras, inklusive fördeklarerad känslighetsanalys utan `compressed_h2` som källa.

| Test | Hela panelen | Exkluderingspanel |
|---|---|---|
| H_predict | FAIL; rho 0,468 | FAIL; 0,435 |
| H_geodesic | PASS; 10/10, vinst 0,324 | PASS; 10/10, 0,406 |
| H_route | PASS; spridning 1,134, sämsta förlorar 0,917 | PASS; 1,456, 0,900 |
| H_hard | FAIL; rho 0,000 | FAIL; 0,200 |
| H_waypoint | FAIL; billigaste inträde 88% | FAIL; 91% |

Ruttjämförelsen väljer sex rader med hög kostnad per frö, jämför rutter om 800+800 steg med en nollkontroll med uppvärmning i hemmaregimen med samma antal steg, och väljer bästa och sämsta på samma urval. Nollkontrollens första etapp har mediankostnad 0,140; mediankomponenten över frön för relativ beräkningskontroll är 0,362, inte en ren kausal skattning av beräkning och inte en jämförelse med 1600 direkta målsteg. De 60 utvalda paren representerar 42 skilda frö/källa/målregim-enheter; varje par har två skilda mellanregimer utanför ändpunkterna. Deduplicering av mellansteg behåller 10/10 och vinst 0,323 [E]. Bästa av två mot en nollkontroll gynnar fortfarande urval. Jämförelserna etablerar en kontrast mellan utvalda rutter under implementerat mått, inte en driftsättningsbar ruttpolicy.

Mekanismprövningen `why_detour` mäter efterföljande etapps kostnad, inte total ruttkostnad, och tillåter destinationen själv som mellansteg. I återfunna 60 rader med måluppvärmning är median efterföljande kostnad noll (57 noll, maximum 0,75); den har minsta uppmätta väglängd i alla celler och störst efterföljande nytta i 88 procent. Kvadrerad olikhet garanterar inte denna väglängdsordning i allmänhet. Ursprungligt automatiskt GEODESIC-utfall är komprometterat av kandidatuppsättningen, inte bara litet urval. Borttagning av destinationen som mellansteg lämnar två alternativ, Q1/Q2 otillgängliga, mellanstegets huvudeffekt 32 procent och interaktion 55,2 procent; ursprungliga regeln ger MIXED/INCONCLUSIVE [E]. Två destinationer för en fast källa delar bara en kandidat utanför ändpunkterna, så rangkorrelationstest av destinationsoberoende är otillgängligt. I 57 celler utan delad placering har den kortare vägkandidaten lägre efterföljande kostnad i 91 procent [E]; detta skiljer inte närhet, vägstruktur eller träningsordning åt. Tidigare statistik om 25 procents källberoende och påståendet om målets granne dras tillbaka. Poolat 0,313 rapporterades av granskaren från ad hoc-cellmedel, inte en certifierad omkörning; det åberopas inte här.

## 4.4 Typade kostnader och komposition

$C(m,r)$ tar en modell och en uppgift. Med en hemavbildning $h$ är $F(m,n)=C(m,h(n))$ en vältypad modellparsfunktion och ett triangeltest är matematiskt formulerbart. Men det är inte kostnaden för sekventiell anpassning, som använder faktiskt uppdaterat tillstånd, inte en kanonisk modell för mellanuppgiften. Den historiska triangelfrekvensen 25–29 procent saknar beräknad källa i tillgängligt v4-skript; v3 räknar istället gynnsamma faktiska omvägar. Inget numeriskt påstående om triangelbrott för $F$ behålls. En gemensam vägpunkt nära en destination kan ligga på kortaste vägar från många källor (Appendix A); destinationsberoende skulle inte i sig skilja geodetisk från icke-geodetisk ruttning.
