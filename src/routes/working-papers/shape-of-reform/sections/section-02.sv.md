# §2 — Rummet, och de två storheter som inte får förväxlas

## 2.1 Konstruktionen

Substratet är det som Rapport 0 och Rapport XIX använde: en studsande prick i en begränsad låda, renderad till ett litet pixelrutnät, vars dynamik varieras av *regim* — normal, blåsig, dämpad, oskarp. En **regulator** är en begränsad återkommande prediktor som tränats för att förutsäga prickens framtida positioner under en regim. Eftersom den är begränsad kan den inte representera världen uttömmande; den måste förbinda sig till en ändlig mängd uppgiftsrelevanta distinktioner och förkasta resten. Det åtagandet är dess **faktorisering** (Rapport 0), och rummet av faktoriseringar — realiserat, konkret, som ett zoo av tränade regulatorer — är föremålet för denna artikel.

Ett zoo är sju regulatorer som spänner över fyra regimer och ett litet spektrum av kapaciteter. Tjugo oberoende omtränade zoon tillhandahåller de fördelningar mot vilka varje registrerat påstående nedan avläses; seriens stående åtagande till fördelningar snarare än enskilda trajektorior är vad som omvandlar ett suggestivt enskilt tal till en skattning med en spridning, och det är vad flera av XIX:s explorativa figurer saknade.

## 2.2 Beteendemässigt avstånd — kartan `[R]`

Skriv $M_A$ för en tränad regulator — en *modell* — och $R_B$ för en *regim*, en uppgift definierad av en omgivning. Notationen är avsiktlig och bärande: artikelns centrala påstående (§4.4) hänger på att dess två storheter har olika typ, och att koda typen i notationen håller det faktumet synligt på varje rad snarare än bara där det argumenteras för. Beteendemässigt avstånd relaterar två modeller; reformkostnad, i §2.3, relaterar en modell till en regim.

Avståndet mellan två regulatorer $M_A$ och $M_B$ är rotmedelkvadratdifferensen av deras prediktionsfelserie på en gemensam utvärderingsström:

$$d_{\mathrm{beh}}(M_A, M_B) = \mathrm{RMS}_t\big( e_A(t) - e_B(t) \big)$$

där $e_X(t)$ är regulator X:s prediktionsfel vid steg t. Två regulatorer är nära när de har fel på samma sätt vid samma tidpunkt, långt ifrån när de inte har det. Denna storhet är **symmetrisk till följd av konstruktionen** — $d_{\mathrm{beh}}(M_A, M_B) = d_{\mathrm{beh}}(M_B, M_A)$ — den uppfyller triangelolikheten, och den är en genuin metrik på mängden av modeller. Det är den "karta" som Rapport XIX byggde, och ingenting i denna artikel bestrider den. Vad artikeln bestrider är antagandet — aldrig uttalat av XIX, men implicit i att kalla objektet en *geometri* — att denna metrik är den struktur som spelar roll.

## 2.3 Övergångskostnad — resandet `[R inom modellen]`

Den andra storheten existerade inte före denna artikel, och det är där svårigheten låg. Att reformera modell $M_A$ mot regim $R_B$ är att omträna $M_A$ tills den är en kompetent regulator för $R_B$. **Kostnaden** är det överskottsfel som betalas längs vägen — integralen, över en fast omträningsbudget, av hur långt $M_A$:s fel på $R_B$:s uppgift överstiger ett referensgolv:

$$C(M_A \Rightarrow R_B) = \int_0^{\text{budget}} \max\big(0,\ \ell_t - \ell_{\text{golv}}\big)\, dt$$

Den dubbla pilen, och typningen modell-till-regim, är inte dekoration: $C$ tar en modell till vänster och en regim till höger, och det finns ingen läsning av den som ett avstånd mellan två punkter i ett och samma rum. Det är det faktum som §4.4 vilar på.

Allt hänger på golvet, och att få golvet rätt tog tre försök (Appendix B). Golvet måste vara **kapacitetsmatchat och konvergerat**: en nybyggd regulator av $M_A$:s *egen arkitektur*, tränad till konvergens på $R_B$. Mätt mot något annat — mot målmodellens eget konvergerade förlustvärde, som den första versionen gjorde — är "kostnaden" kontaminerad av kapacitetsskillnaden mellan källa och mål, och dess mest slående särdrag (en stor asymmetri) visar sig vara en artefakt av den kontaminationen snarare än en egenskap hos reform. Den korrigerade storheten besvarar en ren fråga: *hur mycket sämre är det att reformera en existerande regulator till att passa $R_B$ än att bygga en ny, med samma kapacitet, för $R_B$ direkt?*

**Kostnad är relativ till en anpassningsprocess, inte bara till källa och mål.** $C$ är inte en egenskap hos $M_A$ och $R_B$ ensamma. Den beror på optimeraren, inlärningshastigheten, omträningsbudgeten, dataordningen, initialiseringen, arkitekturen, förlustfunktionen och referensgolvet. Där distinktionen spelar roll skriver vi $C_{U,T,L}(M_A \Rightarrow R_B)$ — kostnad under uppdateringsregel $U$, budget $T$, förlust $L$ — och håller den apparaten fast genom hela artikelns körningar. Detta är inte en brasklapp som ska avfärdas; det är en del av vad objektet *är* (§5), och det spelar roll för styrningsläsningen, där "reformkostnad" beror på den implementationsteknologi som finns tillgänglig.

Notera tre särdrag som kommer att spela roll.

**Den är riktad.** $C(M_A \Rightarrow R_B)$ och $C(M_B \Rightarrow R_A)$ är olika mätningar och behöver inte överensstämma. §4.2 visar att de systematiskt inte gör det.

**Dess ändpunkter är av olika slag.** Storheten löper från en *modell* ($M_A$, en specifik tränad regulator) till en *regim* ($R_B$, en uppgift). Detta är inte en pedantisk distinktion; det är anledningen till att triangelolikheten inte bara är bruten utan inte formulerbar (§4.4), och det är det djupaste skälet till att reformprocessen inte är en metrisk geometri.

**Den kan vara negativ** — positiv transfer — när den reformerade regulatorn överträffar en specialbyggd sådan eftersom den bar med sig något användbart över. Den tecknade varianten av kostnaden fångar detta, och det är en storhet som serien tidigare inte hade ett sätt att se.

## 2.4 Distinktionen är hela artikeln

Beteendemässigt avstånd $d_{\mathrm{beh}}(M_A, M_B)$ är en symmetrisk metrik mellan modeller. Reformkostnad $C(M_A \Rightarrow R_B)$ är en riktad, icke-komponerande storhet från en modell till en regim. **Kartan är inte resandet.**

Rapport XIX byggde kartan och kunde inte ha märkt skillnaden, eftersom resandet i dess arkitektur var gratis — den adaptiva regulatorn valde en aktiv modell varje steg utan kostnad, så det fanns inget sådant som ett dyrt drag genom faktoriseringsrummet. En karta utan resande på den kan uppvisa hur mycket skenbar geometrisk struktur som helst samtidigt som den ingenting säger om vad det kostar att komma någonstans, och §3 är i praktiken demonstrationen att XIX:s karta, granskad på sina egna villkor, säger mindre än vad den verkade göra. §4 är demonstrationen att resandet, när det väl prissätts, säger något som XIX:s karta inte kunde ha sagt — och något som inte alls reduceras till ett avstånd.

Resten av artikeln är konsekvensen av att hålla isär dessa två storheter: misslyckandena i §3 är misslyckanden för *kartan*, och resultaten i §4 är egenskaper hos *resandet*, och anledningen till att artikeln läser sig som "tre misslyckanden och tre resultat" snarare än som en enda förvirrad dom är att dessa är två olika objekt som Rapport XIX:s löfte hade sammanblandat.# §2 — Rummet, och de två storheter som inte får förväxlas

## 2.1 Konstruktionen

Substratet är det som Rapport 0 och Rapport XIX använde: en studsande prick i en begränsad låda, renderad till ett litet pixelrutnät, vars dynamik varieras av *regim* — normal, blåsig, dämpad, oskarp. En **regulator** är en begränsad återkommande prediktor som tränats för att förutsäga prickens framtida positioner under en regim. Eftersom den är begränsad kan den inte representera världen uttömmande; den måste förbinda sig till en ändlig mängd uppgiftsrelevanta distinktioner och förkasta resten. Det åtagandet är dess **faktorisering** (Rapport 0), och rummet av faktoriseringar — realiserat, konkret, som ett zoo av tränade regulatorer — är föremålet för denna artikel.

Ett zoo är sju regulatorer som spänner över fyra regimer och ett litet spektrum av kapaciteter. Tjugo oberoende omtränade zoon tillhandahåller de fördelningar mot vilka varje registrerat påstående nedan avläses; seriens stående åtagande till fördelningar snarare än enskilda trajektorior är vad som omvandlar ett suggestivt enskilt tal till en skattning med en spridning, och det är vad flera av XIX:s explorativa figurer saknade.

## 2.2 Beteendemässigt avstånd — kartan `[R]`

Skriv $M_A$ för en tränad regulator — en *modell* — och $R_B$ för en *regim*, en uppgift definierad av en omgivning. Notationen är avsiktlig och bärande: artikelns centrala påstående (§4.4) hänger på att dess två storheter har olika typ, och att koda typen i notationen håller det faktumet synligt på varje rad snarare än bara där det argumenteras för. Beteendemässigt avstånd relaterar två modeller; reformkostnad, i §2.3, relaterar en modell till en regim.

Avståndet mellan två regulatorer $M_A$ och $M_B$ är rotmedelkvadratdifferensen av deras prediktionsfelserie på en gemensam utvärderingsström:

$$d_{\mathrm{beh}}(M_A, M_B) = \mathrm{RMS}_t\big( e_A(t) - e_B(t) \big)$$

där $e_X(t)$ är regulator X:s prediktionsfel vid steg t. Två regulatorer är nära när de har fel på samma sätt vid samma tidpunkt, långt ifrån när de inte har det. Denna storhet är **symmetrisk till följd av konstruktionen** — $d_{\mathrm{beh}}(M_A, M_B) = d_{\mathrm{beh}}(M_B, M_A)$ — den uppfyller triangelolikheten, och den är en genuin metrik på mängden av modeller. Det är den "karta" som Rapport XIX byggde, och ingenting i denna artikel bestrider den. Vad artikeln bestrider är antagandet — aldrig uttalat av XIX, men implicit i att kalla objektet en *geometri* — att denna metrik är den struktur som spelar roll.

## 2.3 Övergångskostnad — resandet `[R inom modellen]`

Den andra storheten existerade inte före denna artikel, och det är där svårigheten låg. Att reformera modell $M_A$ mot regim $R_B$ är att omträna $M_A$ tills den är en kompetent regulator för $R_B$. **Kostnaden** är det överskottsfel som betalas längs vägen — integralen, över en fast omträningsbudget, av hur långt $M_A$:s fel på $R_B$:s uppgift överstiger ett referensgolv:

$$C(M_A \Rightarrow R_B) = \int_0^{\text{budget}} \max\big(0,\ \ell_t - \ell_{\text{golv}}\big)\, dt$$

Den dubbla pilen, och typningen modell-till-regim, är inte dekoration: $C$ tar en modell till vänster och en regim till höger, och det finns ingen läsning av den som ett avstånd mellan två punkter i ett och samma rum. Det är det faktum som §4.4 vilar på.

Allt hänger på golvet, och att få golvet rätt tog tre försök (Appendix B). Golvet måste vara **kapacitetsmatchat och konvergerat**: en nybyggd regulator av $M_A$:s *egen arkitektur*, tränad till konvergens på $R_B$. Mätt mot något annat — mot målmodellens eget konvergerade förlustvärde, som den första versionen gjorde — är "kostnaden" kontaminerad av kapacitetsskillnaden mellan källa och mål, och dess mest slående särdrag (en stor asymmetri) visar sig vara en artefakt av den kontaminationen snarare än en egenskap hos reform. Den korrigerade storheten besvarar en ren fråga: *hur mycket sämre är det att reformera en existerande regulator till att passa $R_B$ än att bygga en ny, med samma kapacitet, för $R_B$ direkt?*

**Kostnad är relativ till en anpassningsprocess, inte bara till källa och mål.** $C$ är inte en egenskap hos $M_A$ och $R_B$ ensamma. Den beror på optimeraren, inlärningshastigheten, omträningsbudgeten, dataordningen, initialiseringen, arkitekturen, förlustfunktionen och referensgolvet. Där distinktionen spelar roll skriver vi $C_{U,T,L}(M_A \Rightarrow R_B)$ — kostnad under uppdateringsregel $U$, budget $T$, förlust $L$ — och håller den apparaten fast genom hela artikelns körningar. Detta är inte en brasklapp som ska avfärdas; det är en del av vad objektet *är* (§5), och det spelar roll för styrningsläsningen, där "reformkostnad" beror på den implementationsteknologi som finns tillgänglig.

Notera tre särdrag som kommer att spela roll.

**Den är riktad.** $C(M_A \Rightarrow R_B)$ och $C(M_B \Rightarrow R_A)$ är olika mätningar och behöver inte överensstämma. §4.2 visar att de systematiskt inte gör det.

**Dess ändpunkter är av olika slag.** Storheten löper från en *modell* ($M_A$, en specifik tränad regulator) till en *regim* ($R_B$, en uppgift). Detta är inte en pedantisk distinktion; det är anledningen till att triangelolikheten inte bara är bruten utan inte formulerbar (§4.4), och det är det djupaste skälet till att reformprocessen inte är en metrisk geometri.

**Den kan vara negativ** — positiv transfer — när den reformerade regulatorn överträffar en specialbyggd sådan eftersom den bar med sig något användbart över. Den tecknade varianten av kostnaden fångar detta, och det är en storhet som serien tidigare inte hade ett sätt att se.

## 2.4 Distinktionen är hela artikeln

Beteendemässigt avstånd $d_{\mathrm{beh}}(M_A, M_B)$ är en symmetrisk metrik mellan modeller. Reformkostnad $C(M_A \Rightarrow R_B)$ är en riktad, icke-komponerande storhet från en modell till en regim. **Kartan är inte resandet.**

Rapport XIX byggde kartan och kunde inte ha märkt skillnaden, eftersom resandet i dess arkitektur var gratis — den adaptiva regulatorn valde en aktiv modell varje steg utan kostnad, så det fanns inget sådant som ett dyrt drag genom faktoriseringsrummet. En karta utan resande på den kan uppvisa hur mycket skenbar geometrisk struktur som helst samtidigt som den ingenting säger om vad det kostar att komma någonstans, och §3 är i praktiken demonstrationen att XIX:s karta, granskad på sina egna villkor, säger mindre än vad den verkade göra. §4 är demonstrationen att resandet, när det väl prissätts, säger något som XIX:s karta inte kunde ha sagt — och något som inte alls reduceras till ett avstånd.

Resten av artikeln är konsekvensen av att hålla isär dessa två storheter: misslyckandena i §3 är misslyckanden för *kartan*, och resultaten i §4 är egenskaper hos *resandet*, och anledningen till att artikeln läser sig som "tre misslyckanden och tre resultat" snarare än som en enda förvirrad dom är att dessa är två olika objekt som Rapport XIX:s löfte hade sammanblandat.
