## 6. Tre svar, ett sammanflätat beslutsproblem

### 6.1 Vad varje svar faktiskt förändrar

| Svar | Vad förändras? | Vad kostar det här? | Resultat |
|:---|:---|:---|:---|
| **Ommodellera** (anta R) | Den representerade övergångslagen | Ingen direkt startkostnad; felmodelleringskostnad när R saknas | Lägre genomsnittlig U1 och U2 än omvärdering vid exakta parametrar [R, konfirmatoriskt]; fördelen försvinner nästan vid parameterfel [R, explorativt] |
| **Omvärdera** (ekologiskt mål) | Målfunktionen | Ett U1-pris oavsett om R verkar [R, förhandsdefinierat deskriptivt] | Bättre våtmarksutfall [R, konfirmatoriskt]; betydligt mindre observerad känslighet för utelämnad R [R, förhandsdefinierat deskriptivt] |
| **Lära** (sondering, sedan bindande val) | Vad och när planeraren kan observera | Fysisk sonderingskostnad och tid | Strukturella nollfall och självupprätthållna exponeringsfällor; låg realiserad nytta för den enkla läraren [R, strukturellt/explorativt] |

**[IP — Svaren är sammanflätade.]** De tre svaren är inte oberoende reglage: målfunktionen avgör om våtmarker anläggs; våtmarkerna avgör om retention kan observeras; observerbarheten avgör om lärande är möjligt; och lärandet påverkar vilken modell som används.

En ekologisk omvärdering kan alltså skapa möjligheter till lärande som bieffekt genom att bygga upp det bestånd som den utelämnade mekanismen verkar genom. Att anta en mekanism kan göra lärande överflödigt för ett kriterium, men ändå försämra ett annat. Ingen av dessa kopplingar var föremål för ett eget konfirmatoriskt test. Tabellen tolkar flera separat fastställda delar.

### 6.2 Negativa resultat som måste få finnas kvar

1. **Den konfirmerade fördelen med ommodellering är skör.** Precisionsmålet missades; tio av fyrtio världar gick åt andra hållet eller var likvärdiga; vid parameterfel försvann fördelen nästan.
2. **Robusthet var inte gratis.** Den ekologiska målfunktionens låga känslighet för utelämnandet hade ett U1-pris även när modellen var korrekt, och ingen ekvivalens visades.
3. **Den jämförda policyn var inte bäst av alla.** En enkel säkringsheuristik gav lägre genomsnittlig U1 än båda rena åtagandena.
4. **Den enkla läraren lärde sig lite.** Det deklarerade kriteriet uppnåddes inte, och de få vinsterna kom från val av fortsättning, inte från ny information.
5. **Validering kan underkänna korrekt kod.** Två kontrollgrindar förkastade fungerande implementationer: en normalapproximation för sällsynta händelser och en felaktig deklarerad olikhet. Båda misslyckandena sparades och rättades endast genom nya deklarerade grindar (bilaga C).

### 6.3 En fördjupning av arbetsrapport 0:s diagnostiska ram [IP]

Arbetsrapport 0 föreslog fyra frågor innan en åtgärd väljs: Vad spelar roll? Hur fungerar världen? Vad kan spela roll senare? Kan vi lära oss i tid? Den här rapporten föreslår en förfining av fråga två och fyra.

| Fråga | Förfining från denna rapport | Diagnostiskt objekt |
|:---|:---|:---|
| Hur fungerar världen? | *Vilket* utelämnande som spelar roll beror på vad som i övrigt är fel (parametrar, skift) | Kostnader för utelämnanden under olika planeringsvillkor |
| Hur fungerar världen? | Att anta en mekanism och att representera den korrekt är olika påståenden | REP utvärderad i båda mekanismgrenarna |
| Kan vi lära oss i tid? | Är mekanismen observerbar *under den policy som vi faktiskt kör*? | Exponeringsbeläggning under vald policy |
| Kan vi lära oss i tid? | Mäts nyttan av lärande mot en genomförbar lärandealgoritm, inte ett orakel? | Algoritmens marginal gentemot en meny av fasta policyer |

Ramen är fortfarande ett förslag för framtida operationalisering, inte ett validerat ramverk.

