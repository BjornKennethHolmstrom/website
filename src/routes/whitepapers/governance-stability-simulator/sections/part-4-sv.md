# Del IV: Strukturella observationer

Simuleringen producerar flera observationer som håller över parametervariationer och är grundade i etablerad reglerteknik. De presenteras här som strukturella fynd, inte policy-slutsatser.

## Latens är den primära avgörande faktorn för maximal lyhördhet

Sambandet mellan latens och förstärkningstaket är det mest betydelsefulla fyndet för styrningsdesign. Det innebär att hastigheten på ett styrningssystems svar inte i första hand är en funktion av politisk vilja, institutionell kvalitet eller tillgängliga resurser. Det är en funktion av den tid som krävs för att information ska färdas från där ett problem existerar till där ett beslut fattas, och för ett svar att färdas tillbaka.

Detta sätter en hård gräns för vad centraliserad styrning kan uppnå i miljöer med hög latens, oavsett dess övriga kvaliteter. Ett system med tolv tidsstegs latens kan inte matcha krissvaret hos ett system med två tidsstegs latens, även om varje annan parameter är identisk. Återkopplingens fysik gör inga undantag för institutionell senioritet eller formell auktoritet.

## Signaltrohet avgör om systemet svarar på verkligheten

En regulator med låg signaltrohet styr, i en exakt mening, en fiktion — en förvrängd representation av världen konstruerad från brusiga, aggregerade, selektivt filtrerade signaler. Interventionerna den producerar är kalibrerade för den fiktionen. När fiktionen avviker avsevärt från verkligheten, blir interventionerna systematiskt felkalibrerade.

Signaltrohet försämras förutsägbart med avståndet mellan var ett tillstånd existerar och var det observeras. Det försämras med varje aggregeringssteg som kastar bort lokal information till förmån för sammanfattande statistik. Det försämras med varje rapporteringslager som introducerar motiverad förvrängning eller byråkratisk förenkling. Och det försämras med tiden: ju längre tid en signal tar att färdas, desto mer kan den underliggande verkligheten ha förändrats när den anländer.

## Indirekt störning är strukturell, inte tillfällig

I simuleringen lider friska noder av betydande stabilitetsunderskott under arkitektur A trots att de själva inte upplever någon chock. Denna indirekta störning är inte en modelleringsartefakt. Den reflekterar den strukturella konsekvensen av att tillämpa enhetliga interventioner på ett heterogent system.

Vilket styrningssystem som helst som svarar på genomsnittliga signaler med enhetliga policyer kommer att producera interventioner som samtidigt är för svaga för de platser som behöver dem och för starka för de platser som inte gör det. Den indirekta kostnaden är inte en bieffekt som bättre kalibrering kan eliminera. Den är en direkt konsekvens av informationsförlusten från aggregering.

## Koppling förstärker kostnaden för fördröjd respons

Simulatorn inkluderar en kopplingsterm som modellerar smitta — tendensen hos instabilitet vid en nod att fortplanta sig till intilliggande noder över tid. Under arkitektur A:s längre latens har krisen vid nod 2 och 7 tid att blöda in i intilliggande noder innan svaret anländer. Under arkitektur B:s kortare latens begränsas krisen innan smittan hinner utvecklas.

Detta innebär att prestandaskillnaden mellan arkitekturerna inte är fast — den växer med krisens svårighetsgrad och varaktighet. Ju längre tid ett svar tar, desto större nätverk påverkas, och desto svårare blir återhämtningsproblemet. Arkitekturer med hög latens står inför sammansatta kostnader som arkitekturer med låg latens helt undviker.

## Det distribuerade förstärkningstaket är verkligt

Ett fynd som förtjänar explicit betoning: arkitektur B är inte immun mot stabilitetsbegränsningar. Distribuerade system med alltför aggressiva lokala regulatorer kommer att oscillera och destabiliseras, vilket demonstrerades under utvecklingen av denna simulator. Förstärkningstaket gäller för varje återkopplingssystem oavsett dess topologi.

Vad som förändras under distribuerad arkitektur är inte takets existens, utan dess höjd. Lägre latens tillåter ett högre tak, vilket tillåter mer aggressiva svar. Men taket måste fortfarande respekteras. Detta har en viktig styrningsimplikation: lokal autonomi utan samordningsprotokoll kan producera sin egen instabilitet. Fördelen med distribuerad arkitektur realiseras först när lokala regulatorer opererar inom gränser som fastställts av ett gemensamt samordningslager — vilket är precis den roll som styrning på protokollnivå har, till skillnad från direktiv styrning.

## Prestandaskillnader är kvantifierbara

Simuleringen producerar objektiva prestandamått: återhämtningstid per nod, kumulativt stabilitetsunderskott och indirekt underskott vid icke-krisnoder. Dessa är inte retoriska påståenden. De är siffror producerade genom att köra modellen under specificerade parametrar.

Denna kvantifierbarhet är den nyckelegenskap som skiljer den ingenjörsmässiga inramningen från den politiska inramningen. Det blir möjligt att fråga, inte "vilken arkitektur är bäst i princip", utan "vad är den uppmätta prestandaskillnaden under dessa förhållanden, och hur förändras den när parametrarna varierar." Svaret kommer att bero på de specifika parametrar som valts — vilket är anledningen till att avsnittet om begränsningar adresserar parameterval noggrant.
