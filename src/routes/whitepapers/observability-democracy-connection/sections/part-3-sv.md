# Del III: Strukturella observationer

## Tröskeln är en fasövergång, inte en gradient

SNR-kurvan i figur 1 kan antyda en gradvis försämring: system med fler lager är något mindre responsiva, de med färre något mer. Denna tolkning underdriver fyndet. Oobserverbarhetströskeln vid SNR = 1 är en kvalitativ gräns, inte en punkt på en kontinuerlig skala.

Över tröskeln har policylagret en försämrad men informativ signal. Statistiska metoder — medelvärdesbildning över tid, opinionsundersökningar, deliberativa processer — kan extrahera genuin preferensinformation från den. Signalen är brusig, men signalen finns där.

Under tröskeln kan dessa metoder inte hjälpa. Bruset dominerar signalen helt och hållet. Ytterligare opinionsundersökningar, bättre undersökningsmetodik, mer sofistikerade parlamentariska procedurer — alla dessa opererar på signalen efter att den har anlänt till policylagret. De kan inte återskapa varians som förstördes i aggregeringen innan den anlände. Ingen institutionell förbättring inom den befintliga lagerstrukturen kan driva ett system som befinner sig under tröskeln över tröskeln.

Detta är anledningen till att uttrycket "konstitutionell oobserverbarhet" är passande. Begränsningen är inbyggd i representationskedjans konstitutionella struktur. Den kan inte åtgärdas genom att reformera de institutioner som sitter i vardera änden av den kedjan.

## Institutionell kvalitet är oberoende av arkitektonisk kapacitet

Simuleringen håller den institutionella kvaliteten konstant över alla arkitekturer. Detta är ett medvetet designval, och dess innebörd förtjänar att betonas: ett femlagerssystem bemannat av de mest ärliga, flitiga och välresurserade representanter man kan tänka sig producerar samma observerbarhetsutfall som ett som är bemannat av medelmåttiga eller korrupta sådana.

Detta går stick i stäv med den dominerande traditionen inom demokratisk reform, som nästan uteslutande fokuserar på institutionell kvalitet: att minska korruption, öka ansvarsutkrävandet, förbättra deliberativa processer, stärka civilsamhället, reformera kampanjfinansiering. Dessa reformer är viktiga av många anledningar. De adresserar dock inte observerbarhetsbegränsningen.

Ett parlament som bättre representerar genomsnittspreferensen hos sin valkrets — eftersom det är mer ärligt, mer deliberativt, mer ansvarskrävande — förstör fortfarande variansen inom valkretsen. Ett mediesystem som mer exakt rapporterar den allmänna opinionen aggregerar och väljer fortfarande ut. Varje förbättring av den institutionella kvaliteten flyttar systemet närmare det teoretiska prestandataket för dess lagerarkitektur. Det taket förblir under oobserverbarhetströskeln för system med tre eller fler lager.

Obehaget i detta fynd är verkligt: det antyder att en välfungerande representativ demokrati inte är mer kapabel att pålitligt överföra medborgarnas preferenser än en dåligt fungerande, i den specifika bemärkelsen att båda opererar i den konstitutionellt oobserverbara regimen. Skillnaden mellan dem ligger någon annanstans — i legitimitet, i ansvarsutkrävande, i fördelningen av kostnader och fördelar, i skydd mot missbruk — inte i signaltrohet vid överföring av preferenser.

## Bruset som systemet följer istället

Om policylagret inte följer medborgarnas preferenser, vad är det då som det följer? Simuleringen ger ett exakt svar: brusegenskaperna hos själva representationskedjan.

Varje lager introducerar brus med en karakteristisk signatur. Mediebrus har egenskaperna hos medias urvalsdynamik — uppmärksamhetscykler, inramningseffekter (framing), saliensbias (salience biases). Partibrus har egenskaperna hos partikonkurrens — strategisk positionering, intern falangbalansering, incitament vid val. Parlamentariskt brus har egenskaperna hos deliberativa förhandlingar — koalitionsbildning, dagordningskontroll, procedurell stiganpassning (path dependence).

Dessa är inte slumpmässiga. De är strukturerade bruskällor med förutsägbara egenskaper. Ett policysystem som opererar under SNR-tröskeln reagerar på detta strukturerade brus som om det vore en signal. Det följer mediecykler. Det svarar på partiers positionering. Det är känsligt för parlamentariska procedurer. Det producerar policy som återspeglar egenskaperna hos representationsmaskineriet snarare än medborgarnas preferenser.

Detta är inte en cynisk observation. Dessa bruskällor är inte osynliga — de är föremål för enorm statsvetenskaplig litteratur om dagordningssättande, partikonkurrens och lagstiftningsförhandlingar. Vad observerbarhetsramverket tillför är en exakt förklaring till varför detta sker även i välfungerande system: inte på grund av maktövertagande (capture) eller dysfunktion, utan för att signalen redan var överväldigad av brus innan den institutionella dynamiken ens började.

## Den spatiala dimensionen av preferensförstörelse

Värmekartorna i figur 1 synliggör något som aggregerad statistik för spårningsfel döljer: förstörelsen av medborgarnas preferenser är spatialt enhetlig över alla grupper, i alla arkitekturer under tröskeln.

I arkitektur A och B är policylagrets "observerade" preferens i huvudsak densamma för varje medborgargrupp — en brusdominerad skalär som sänds tillbaka över hela medborgarpopulationen. Den genuina spatiala variationen i preferenser — faktumet att kluster 0 skiftade dramatiskt vid t = 40 medan kluster 1, 2 och 3 inte gjorde det — är osynlig för policylagret. Det tillämpar en spatialt odifferentierad policy på en spatialt differentierad population.

Detta är precis genomsnittsproblemet från rapport ett, nu formaliserat i preferensrymden. En central regulator som tillämpar enhetlig policy över diversifierade noder producerar indirekt förvrängning (collateral distortion) vid noder som inte behövde interventionen. Observerbarhetsramverket visar att detta inte är ett val — det är en strukturell nödvändighet när spatial preferensinformation har förstörts i representationskedjan. Policylagret kan inte tillämpa differentierad policy på preferensstrukturer som det inte kan observera.

## Genuin preferensförändring är systematiskt långsam att upptäcka

De två genuina preferensskiftena i simuleringen — vid t = 40 och t = 80 — avslöjar en sekundär strukturell egenskap: detektionslatens skalar med antalet lager på ett sätt som förvärrar brusproblemet.

Varje lager introducerar både brus och fördröjning. För arkitektur A, med en total latens på 18 tidssteg, fortplantar sig inte ett genuint preferensskifte vid t = 40 fullt ut till policylagret förrän vid t = 58. Vid den tidpunkten har signalen som bär informationen om preferensskiftet passerat genom fem brusiga aggregeringsstadier och går inte att skilja från bakgrundsbrus. Arkitektur D upptäcker skiftet inom ett till två tidssteg och svarar inom tre till fyra.

För långsamtrörliga policyproblem — den typ som demokratiska system antas hantera genom avsiktliga kollektiva val — kan denna latens vara acceptabel. För problem som kräver svar inom detektionsfönstret är femlagersarkitekturen strukturellt blind. Den kommer inte att upptäcka skiftet förrän långt efter att det optimala svarsfönstret har stängts.

Kombinationen av spatial förstörelse, tidsmässig fördröjning och brusdominans innebär att arkitektur A:s policy inte svarar på genuina preferensskiften — den fortsätter att oscillera som svar på sitt eget brus. Den demokratiska händelsen (en genuin förändring av vad medborgarna vill ha) är osynlig i policyutfallet.
