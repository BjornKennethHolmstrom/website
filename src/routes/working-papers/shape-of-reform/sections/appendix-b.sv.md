# Appendix B — Mätningen av övergångskostnad: tre versioner, och varför golvet är hela problemet

Den riktade kostnaden är bara så meningsfull som det referensgolv den mäts mot. Att få golvet rätt tog tre versioner; alla tre rapporteras eftersom felen är lärorika och eftersom den huvudsakliga asymmetrin i den första versionen helt och hållet var en artefakt av golvet.

## B.1 v1 — målkapacitetsförväxlingen

**Golv:** *målmodellens* eget konvergerade förlustvärde. **Misslyckande:** detta gör golvet till en egenskap hos målets *kapacitet*, inte målets *regim*. En högkapacitetskälla som omtränas mot en lågkapacitetsmåls regim klarar målets (slappa) golv omedelbart, så den uppmätta kostnaden är noll — i endast en riktning. Resultatet var en medianriktad asymmetri på 0,79 som var **kapacitetsskillnad i förklädnad**: att vända på ett hög- och lågkapacitetspar kastar om vilken riktning som avläser noll. Avslöjandet i rök-körningen var en medianrelativ asymmetri på exakt 1,000 — signaturen för systematiska enkelriktade nollor, dvs. en bugg, inte ett fenomen.

## B.2 v2 — det kapacitetsmatchade golvet

**Korrigering:** golvet för att reformera $M_A$ mot $R_B$ är en *ny modell av $M_A$:s egen arkitektur*, tränad till konvergens på $R_B$. Kostnaden besvarar nu: *hur mycket sämre är det att reformera $M_A$ till att passa $R_B$ än att bygga en modell med samma kapacitet för $R_B$ från grunden?* Kapacitetsrättvist enligt konstruktionen; medger en tecknad variant (negativ = positiv transfer, den reformerade modellen överträffar en specialbyggd sådan). Asymmetrin **överlevde** korrigeringen vid ≈ 0,69 i rök-körningen — vilket fastställde att den aldrig var förväxlingen — och de sju ursprungliga modellerna fungerar som sina egna referenser (en ny modell på sin hemregim *är* zoo-modellen), så endast golven utanför hemregimen behöver tränas.

## B.3 v3 — konvergerade golv och noll-omväg-kontrollen

Två förfiningar. **Konvergerade golv:** referenser tränade till konvergens med tidig stoppning snarare än till en fast budget, så att "positiv transfer" mäts mot ett verkligt golv snarare än ett undertränat sådant. **Noll-omväg-kontrollen** för iscensättningseffekten: rutta $M_A$ genom dess *egen hemregim* före målet — en etapp som kostar ≈ 0 men som konsumerar en full omträningsbudget — för att separera genuin iscensättning från beräkningen av ett andra träningsetapp. Kontrollen utlöste: att rutta genom noll-mellanhanden hjälpte (~20%), så den råa omvägsfördelen var delvis beräkning. Att rutta genom den *rätta* mellanhanden slog nollan med ytterligare ≈ 32% (medianvinst över noll), vilket är vägstrukturkomponenten. Budgeten höjdes 400 → 800 steg eftersom konvergerade golv tryckte upp censureringen, och censurering trunkerar kostnaden, vilket *dämpar* avstånd–kostnad-korrelationen — så den rapporterade ρ = 0,47 är om något konservativ.

## B.4 v4 / mekanismkontrollen — och de komprometterade statistikorna

Den fulla körningen (§4) använde v4-mätningen (beräkningsmatchad verklig-mot-noll-omväg) och en separat arkitekturfast kub (`why_detour`) för mekanismen. Två statistikor i mekanismanalysen var degenererade vid små sampel och flaggas i §4.3 och §7.7: en inom-cell-vägkorrelation på 1,000 (tre punkter per cell) som den automatiserade domen felläste som geodet, och korsdestinations-rangkorrelationer på tre mellanhänder. Slutsatserna i §4.3 vilar på de **poolade** statistikorna (n ≈ 36) och på källberoendeantalet (25%), inte på de degenererade per-cell-siffrorna.

## B.5 Vad versionshistoriken är till för

Tre versioner är inte obeslutsamhet; det är revisionsspåret. Den asymmetri som är artikelns ryggrad uppträdde i v1 som en artefakt och måste visas *överleva* golvkorrigeringen innan den kunde tros. Hade vi rapporterat v1:s 0,79 utan det kapacitetsmatchade golvet, skulle det centrala resultatet ha varit en kapacitetsförväxling klädd som en upptäckt — precis den misslyckandemod som §3 fångar den deskriptiva geometrin med att begå. Golvet är hela problemet, och att rapportera alla tre versioner är hur läsaren kan kontrollera att den överlevande asymmetrin inte är förväxlingen iförd ett annat tal.
