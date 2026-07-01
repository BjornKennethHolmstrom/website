## 1. Avvägningen: kedjelängd mot adaptivitet

Artikel XVI frågade vad som gör en gräns hållbar mot en optimerare som tjänar på att flytta den. Börja med en distinktion som svaret hänger på.

En koordinationsgräns kan upprätthålla en regel på två strukturellt olika sätt. Den kan vara **infryst i en fysisk invariant** – en bergskedja som gör invasion från ett håll omöjlig upprätthåller ”ingen invasion här” utan sensor, utan väktare och utan gränssnitt att muta. Eller den kan vara **upprätthållen genom representation** – en regel som någon agent upptäcker bryts, verifierar mot en standard och agerar på.

Kalla den första regimen **L_c = 0**: noll redigerbara länkar mellan det påtvingade villkoret och det fysiska faktum som påtvingar det. Den köper *absolut verkställighet* till priset av *noll adaptivitet*. Berget verkställer sin regel perfekt och för evigt, och är hjälplöst i samma ögonblick som miljön dirigerar om – i det ögonblick någon uppfinner flygplanet är villkoret ogiltigt, och det kan inte uppdateras, eftersom det inte har någon representation av sin egen regel att revidera. Det är en frusen Execute‑fas utan Sense och utan Learn.

Varje redigerbar länk som läggs till flyttar systemet till **L_c ≥ 1** och köper adaptivitet – förmågan att upptäcka överträdelse, omverifiera och ändra regeln – till priset av ytterligare ett mutbart gränssnitt. Detta ger det första resultatet **[IP]**:

> Den minsta kedjelängden hos en *adaptiv* koordinationsgräns är **L_c ≥ 1**, och detta är priset för adaptivitet, inte ett definitionsmässigt faktum om styrning.

Distinktionen spelar roll eftersom en tidigare väg till detta påstående var cirkulär. ”Styrning koordinerar agentskap; agentskap innebär representation; alltså L_c ≥ 1” vinner genom att definiera styrning så att fallen med L_c = 0 utesluts (terräng, termodynamiska gradienter, rent fysiskt tvång), som faktiskt koordinerar agentskap gentemot kontrafaktiska villkor utan representation. Den icke‑cirkulära vägen är avvägningen: L_c = 0‑koordination existerar, men den kan inte representera sin egen regel och därför inte anpassa den. Styrning är L_c ≥ 1 eftersom styrning är den sortens koordination som måste uppdatera sina regler – och uppdatering kräver representation, och representation är redigerbar.

Detta viker sig direkt in i Artikel XVI:s koppling snarare än att stå bredvid den. Källtermens lokalitet handlade om kapaciteten att *generera alternativ*; kedjelängd handlar om kapaciteten att *uppdatera regeln*; båda är en koppling – **egenskapen som gör ett system adaptivt (en källterm inuti loopen, en representation av dess egen regel) är samma egenskap som gör det redigerbart, eroderbart eller mutbart.** L_c = 0 är gränsfallet: oredigerbarhet köpt genom att helt avstå från adaptivitet, den geografiska motsvarigheten till en fullständigt koncentrerad posterior som inte längre kan lära.
