# Del VII: slutsats

Argumentet som framförs i denna rapport är avsiktligt snävt.

Den gör inte gällande att styrning kan reduceras till ingenjörskonst, eller att det politiska livets rikedom — dess normativa komplexitet, dess beroende av samtycke och legitimitet, dess oreducerbart mänskliga dimensioner — kan fångas i en tillståndsrumsmodell. Dessa påståenden vore falska, och att framföra dem skulle undergräva det specifika påstående som är sant.

Det specifika påståendet är detta: styrningssystem är återkopplingssystem, och återkopplingssystem har strukturella egenskaper som avgör deras stabilitet under störning. Dessa egenskaper kan modelleras formellt, jämföras objektivt och förbättras genom design. Att ignorera dem får dem inte att försvinna. Det innebär bara att deras konsekvenser — långsamma krissvar, indirekta störningar, ihållande avvikelser från måltillstånd — tillskrivs fel orsaker och bemöts med fel åtgärder.

De sju primitiver som introducerats här — noder, tillstånd, flöden, latens, begränsningar, återkoppling och signaltrohet — ger en minimal vokabulär för att beskriva dessa strukturella egenskaper. Simulatorn tillämpar denna vokabulär på en specifik jämförelse och producerar ett specifikt fynd: att lokaliserade kriser hanteras strukturellt bättre av arkitekturer med lokal beslutsbefogenhet och lokal observation med hög signaltrohet, än av arkitekturer som aggregerar information centralt och svarar enhetligt. Detta fynd har ett namn inom reglertekniken — det följer av Ashbys lag om nödvändig mångfald — och har förståtts formellt sedan mitten av 1900-talet.

Det som är nytt här är inte matematiken. Det är tillämpningen: att ta verktyg utvecklade för fysiska och ingenjörsmässiga system och tillämpa dem systematiskt på utformningen av styrningsinstitutioner. Och mer specifikt, att bygga en öppen, reproducerbar och utbyggbar simulator som gör dessa strukturella argument inte bara påståeliga utan demonstrerbara.

Arbetet framöver är betydande. Empirisk förankring — att kartlägga verkliga styrningsparametrar mot modellens variabler — skulle omvandla illustrativa fynd till testbara hypoteser. Ickelinjära utbyggnader skulle fånga den tröskelpunktsdynamik som betyder mest i genuina kriser. Heterogena nätverksmodeller skulle reflektera den faktiska mångfalden av styrningsenheter. Adaptiva regulatormodeller skulle adressera institutionellt lärande. Varje utbyggnad skulle också introducera nya begränsningar, vilka skulle behöva dokumenteras med samma omsorg som de nuvarande.

Inget av detta arbete bör misstas för värdeneutral teknokrati. Varje designval i ett styrningssystem inbäddar värdeomdömen: om vems stabilitet som räknas, vad som räknas som en kris, vilka begränsningar som är ickeförhandlingsbara. Den ingenjörsmässiga inramningen löser inte upp dessa frågor. Den skärper dem — genom att separera de strukturella frågorna (givet dessa mål och dessa begränsningar, vilken arkitektur kan uppnå dem?) från de normativa (vad bör målen och begränsningarna vara?).

De människor som först ritade dessa diagram — som kartlade återkopplingsloopar och krav på mångfald och signalförsämring — förstod att de gjorde något mer än ingenjörskonst. De försökte hitta ett språk där de strukturella nödvändigheterna hos livskraftiga komplexa system kunde göras synliga: inte för att vinna debatter, utan för att göra vissa typer av misstag svårare att begå.

Det projektet är ofullbordat. Denna simulator är ett litet bidrag till det.

