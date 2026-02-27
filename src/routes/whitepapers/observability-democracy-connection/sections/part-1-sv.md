# Del I: Observerbarhetsproblemet

## Observerbarhet inom reglerteknik

I de två första rapporterna i denna serie var det centrala konceptet styrbarhet — ett styrningssystems förmåga att styra sitt tillstånd mot ett önskat mål. Denna rapport vänder sig till det duala konceptet: observerbarhet.

Ett dynamiskt system är observerbart om dess fullständiga inre tillstånd kan rekonstrueras från de utdata som är tillgängliga för regulatorn. Formellt sett, för ett system x(t+1) = Ax(t), y(t) = Cx(t), kräver observerbarhet att observerbarhetsmatrisen O = [C; CA; CA²; …; CA^(n-1)] har full kolumnrang. När detta villkor inte uppfylls är vissa dimensioner av systemets tillstånd osynliga för regulatorn, oavsett hur länge den observerar och oavsett dess beräkningsmässiga sofistikering. Informationen når helt enkelt inte fram.

Implikationen för styrning är direkt. Medborgarnas preferenser utgör det inre tillståndet i det demokratiska systemet. Policyinstitutionerna är regulatorn. Representativa strukturer — val, partier, parlament, regeringar, samråd — utgör observationskanalen C. Observerbarhetsfrågan är: når informationen om medborgarnas preferenser fram till policylagret i en form som kan återskapas?

Detta skiljer sig från frågan om huruvida institutioner är välfungerande. Ett fullkomligt ärligt, flitigt och välresurserat parlament som opererar i ett representationssystem med fem lager står inför samma observerbarhetsbegränsningar som ett korrupt sådant. Begränsningen ligger i kanalen, inte i processorn i slutet av den.

## Representationskedjan som en försämrad kanal

Shannons sats om kanalkapacitet fastslog att varje kommunikationskanal har en maximal informationsöverföringshastighet som bestäms av dess bandbredd och brusegenskaper. Information som överstiger denna kapacitet går oåterkalleligen förlorad. Ingen mängd felkorrigering i mottagaränden kan återskapa den, eftersom informationen aldrig överfördes.

Varje representationslager i ett demokratiskt system fungerar som en brusig, bandbreddsbegränsad kanal. Två mekanismer försämrar signalen:

**Aggregeringsförlust.** När individuella preferenser sammanfattas till en representativ position — vare sig det sker genom röstning, utformning av partiprogram, kommittéöverläggningar eller någon annan aggregerande mekanism — förstörs variansen av preferenser inom gruppen. Om en representant talar för tio väljare vars preferenser spänner över ett brett spektrum, försvinner det spektrumet från signalen. Representantens position förmedlar gruppens genomsnitt (ungefär) men förlorar all information om fördelningen av preferenser inom gruppen. Denna förlust är irreversibel: ingen nedströms process kan återskapa den förstörda variansen eftersom den aldrig överfördes.

**Introduktion av brus.** Varje representationsmekanism är ofullkomlig. Opinionsundersökningar har urvalsfel. Medierapportering väljer ut och vinklar (frames). Partiprogram balanserar interna falanger. Parlamentariska överläggningar producerar kompromisser som inte rent speglar någon enskild väljares preferenser. Varje ofullkomlighet adderar brus till den överförda signalen. Till skillnad från signalen ackumuleras brus additivt över lagren — varje lager bidrar oberoende till den totala förvrängningen.

Den kombinerade effekten: signalvariansen krymper multiplikativt vid varje lager medan bruset växer additivt. Efter tillräckligt många lager överstiger bruset signalen och kanalen är inte längre informativ.

## Signal-brusförhållandet på policylagret

För en representationskedja med K lager, där lager k har aggregeringsförhållandet r_k och standardavvikelsen för brus σ_k, är den överlevande signalvariansen och det ackumulerade bruset på policylagret:

```
Var_survived(K) = Var_true · ∏_{k=1}^{K} (1/r_k)

Var_noise(K) = Σ_{k=1}^{K} σ_k²

```

Signal-brusförhållandet på policylagret:

```
SNR(K) = Var_survived(K) / Var_noise(K)

```

När SNR `<` 1 överstiger brusvariansen den överlevande signalvariansen. Policylagret tar emot en signal där brus är den dominerande komponenten. Dess observationer är mer informativa om egenskaperna hos dess representationsmaskineri än om medborgarnas faktiska preferenser.

Detta är tröskeln för konstitutionell oobserverbarhet. Det är inte en mjuk försämring — en gradvis nedgång i noggrannhet. Det är en fasövergång: över tröskeln har policylagret en brusig men informativ signal; under den domineras signalen av brus och ingen statistisk teknik kan pålitligt rekonstruera den sanna fördelningen av medborgarnas preferenser.

## Genomsnittsproblemet återbesökt

Rapport ett i denna serie introducerade genomsnittsproblemet: centraliserade regulatorer som opererar på aggregerade signaler kan inte urskilja vilka noder som är i nöd, eftersom aggregering förstör spatial information. Observerbarhetsproblemet i demokratisk representation är samma mekanism tillämpad på preferensrymden istället för den spatiala rymden.

När en nationell regering observerar sina medborgare genom fem representationslager komprimeras den spatiala variationen i preferenser — över regioner, samhällen, demografiska grupper, ekonomiska omständigheter — systematiskt vid varje lager. Det som når policylagret är en liten rest av den ursprungliga variansen, inbäddad i en mycket större volym av ackumulerat brus.

Det parlamentariska genomsnittsproblemet: ett parlament med 300 ledamöter, som var och en representerar ungefär 150 000 väljare, har redan utfört en aggregering med förhållandet 150 000. Variansen inom varje valkrets är helt osynlig för den parlamentariska kammaren. Kammaren själv aggregerar sedan 300 positioner till en regerande koalition, en majoritet, en regering — vilket utför ytterligare aggregering och introducerar ytterligare brus. När ett policybeslut väl fattas återspeglar det en signal som har passerat genom alla dessa stadier.

Detta betyder inte att parlamentariska system producerar dålig policy. Det betyder att de producerar policy som är strukturellt bortkopplad från den fullständiga fördelningen av medborgarnas preferenser, och att ingen institutionell reform inom den befintliga lagerstrukturen kan återknyta dem. Informationen gick förlorad innan den kom fram.

## Hur observerbarhetsmisslyckande ser ut i praktiken

Konstitutionell oobserverbarhet betyder inte att regeringen är okänslig (unresponsive). Det betyder att regeringen är mottaglig för något annat än medborgarnas preferenser — specifikt för brusstrukturen i sitt eget representationsmaskineri.

En regering som opererar under SNR-tröskeln kommer fortfarande att uppdatera sina policyer över tid. Den kommer att svara på de signaler den tar emot. Men dessa signaler är övervägande brus: partiernas strategiska positionering, mediernas inramningseffekter (framing), stiganpassningar (path dependencies) i kommittéöverläggningar, preferenserna hos organiserade intressen som har lärt sig att injicera signaler i representationskedjan. Policyprocessen är responsiv — men till dessa intermediära signaler, inte till de underliggande medborgarpreferenser de antas representera.

Detta ger en strukturell förklaring till en återkommande empirisk observation inom statsvetenskapen: korrelationen mellan medborgarnas preferenser och policyutfall är svag och minskande i de flesta etablerade demokratier. De vanliga förklaringarna — eliternas maktövertagande (capture), partipolitisk polarisering, institutionell skleros — är verkliga. Men de verkar på ett system som redan är arkitektoniskt inkapabelt till pålitlig preferensöverföring. Övertagandet är lättare eftersom signalen redan var svag.
