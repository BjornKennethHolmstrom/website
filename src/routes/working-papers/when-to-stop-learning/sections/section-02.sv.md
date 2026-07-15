## 2. Lärande är inte anpassning [R för separationen, IP för styrningsläsningen]

### 2.1 Två definitioner som inte sammanfaller

Serien har behandlat lärande och anpassning som nära synonymer så ofta att glidningen mellan dem har blivit osynlig, och det naturliga språket uppmuntrar den: vi säger att ett system "lärde sig" och menar att det "anpassade sig", som om att förbättra sin modell av världen och att förbli kopplad till den vore samma prestation. De är inte det, och separationen är värd att ange precist eftersom allt i denna artikels livscykel beror på den.

*Anpassning* är den process som upprätthåller tillräcklig koppling mellan en kontrollant och dess omgivning under förändring, så att kontrollanten fortsätter att möta sina livskraftighetsvillkor — prestanda inom gränser, essentiella variabler inom intervall, loopen med världen intakt. Den bedöms efter utfall: förblir systemet kopplat? Det är en egenskap hos hela loopens relation till världen.

*Lärande* är processen att uppdatera en kontrollants interna modell — dess representation, dess prediktiva karta, dess parametrar — från data. Det bedöms efter den modellens trohet: följer kartan terrängen bättre än den gjorde? Det är en egenskap hos inlärarens relation till sitt eget interna tillstånd.

De två bedöms mot olika saker, och när det väl inses är dissociationen omedelbar. Lärande kan inträffa utan anpassning: en kontrollant kan förbättra sin modell medan dess koppling försämras, vilket är precis vad §3 uppvisar — kartan skärps medan greppet sviker. Anpassning kan inträffa utan lärande: en kontrollant med en fast modell kan upprätthålla koppling utmärkt om dess fasta modell råkar förbli tillräcklig, eller om den anpassar sig med icke-lärande medel — buffring, redundans, reträtt till ett robust standardläge. Lärande är en mekanism genom vilken ett system kan upprätthålla koppling. Det är varken nödvändigt för anpassning eller tillräckligt för den.

Anpassningstriaden från Rapport XV kodar redan separationen utan att ha namngett den: Avkänn matar Lär, men det är Utför som sluter loopen med världen. Lärande sitter i mitten av den kedjan, och ett mellansteg kan lyckas medan det steg som faktiskt berör världen misslyckas. Om Utför är brutet — om loopen inte kan agera på vad modellen nu vet — då har lärande ingen adaptiv effekt alls, hur mycket trohet det än vinner. Kartan är inte kopplingen, och det steg som förbättrar kartan är inte det steg som upprätthåller kopplingen.

### 2.2 Vad lärande kostar loopen

Skälet till att de två kan motverka varandra, snarare än bara skilja sig åt, är att lärande inte är en gratis input till anpassning. Det ställer två krav på den loop som måste agera på dess resultat, och den skarpare formen av detta avsnitts påstående handlar om dessa krav.

Lärande *blottlägger* latent missmatchning. En bättre modell bringar i dagen diskrepanser mellan vad kontrollanten trodde och vad världen gör — diskrepanser som alltid fanns där men som den grövre tidigare modellen inte representerade. Detta är Rapport XVI:s källtermer sedda från lärandesidan: den nyblivna synliga missmatchningen är verklig information, och den är också en ny förpliktelse, eftersom en missmatchning kontrollanten nu kan se är en den nu måste agera på eller medvetet tolerera. Kalla detta blottlagt krav.

Lärande *skapar* också inkorporeringskostnad. Att agera på en reviderad modell är inte ögonblickligt; loopen måste omorganisera sig kring revisionen — finjustera aktueraren, planera om, samordna de delar som förlitade sig på den gamla modellen — och den omorganisationen konsumerar kapacitet och inducerar en transient under vilken kopplingen försämras just för att loopen är mitt uppe i att förändras. Kalla detta skapat krav. En modellrevision är en störning för själva den loop som ska dra nytta av den, innan den är en nytta.

Mot dessa två krav står loopens kapacitet att absorbera dem — att agera på blottlagd missmatchning och betala ned inkorporeringskostnad utan att förlora koppling. Skriv det som en olikhet:

$$D_\text{blottlagd} + D_\text{skapad} \le C_\text{absorbera}.$$

Anpassning lyckas när den efterfrågan som lärandet gör handlingsbar ryms inom vad loopen kan absorbera, och misslyckas när den inte gör det. Detta är det villkor som §3 gör mekaniskt och testar: bortom en viss inlärningshastighet överskrider revisionsströmmen $C_\text{absorbera}$, och kopplingen försämras trots att troheten fortsätter att förbättras. Olikheten är anledningen till att de två storheterna kan vara motsatta snarare än bara distinkta — lärande driver den vänstra sidan uppåt, och bortom den punkt där den korsar den högra sidan är mer lärande mindre anpassning.

### 2.3 En taxonomi över lärande efter dess effekt på koppling

Olikheten sorterar lärande i tre slag, åtskilda inte av hur mycket modellen förbättras utan av vad som händer med den loop som måste inkorporera förbättringen.

Lärande är *adaptivt* när det blottlagda och skapade kravet ryms inom absorptionskapaciteten: modellen förbättras, loopen inkorporerar förbättringen utan att förlora koppling, och trohet och koppling stiger tillsammans. Detta är det fall som namnglidningen antar är det enda — lärande som också är anpassning.

Lärande är *irrelevant* när det förbättrar trohet längs dimensioner som loopens koppling inte beror på. Modellen blir bättre på att förutsäga saker som inte påverkar livskraftighet; inget krav ställs på loopen eftersom inget handlingsbart blottlades, och kopplingen är oförändrad. Oskadligt, och vanligt — mycket av vad ett system lär sig spelar ingen roll för om det förblir kopplat.

Lärande är *maladaptivt* när det krav det ställer överskrider absorptionskapaciteten: revisionsströmmen stör loopen snabbare än loopen kan omorganisera sig, och kopplingen försämras. Modellen förbättras och systemet misslyckas, samtidigt, av samma anledning. Detta är det farliga fallet, eftersom varje intern signal ser ut som framgång — trohetsmåttet klättrar monotont in i regimen där kopplingen kollapsar — och en kontrollant som bara övervakar sitt eget lärande skulle inte se något fel förrän förlusten av koppling anlände från ett håll som dess självbedömning inte täckte.

Styrningsläsningen, [IP] som alltid, är att en institution kan studera sitt problem mer och mer träffsäkert samtidigt som den styr det sämre och sämre, och att träffsäkerheten inte är något försvar — kan till och med vara mekanismen bakom misslyckandet, om revisionstakten springer ifrån institutionens kapacitet att omorganisera sig kring varje reviderad förståelse. Den reform som aldrig lägger sig därför att varje ny studie tvingar fram en ny omstrukturering misslyckas inte med att lära. Den lär sig maladaptivt: blottlägger och skapar mer efterfrågan än loopen kan absorbera, och misstar den förbättrade kartan för ett förbättrat grepp. Det misstaget — kartans trohet tagen för loopens hälsa — är den första av de tre livscykelförväxlingar denna artikel spårar, och §3 visar att det inte bara är möjligt utan mekaniskt.
