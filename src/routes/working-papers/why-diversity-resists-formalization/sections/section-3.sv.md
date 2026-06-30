## 3. De fyra fristående kollapserna

Varje lins rapporteras som ett oberoende formellt objekt. De *förenas inte* i detta avsnitt; föreningen är det separata, svagare påståendet i §4.

### 3.1 Reglerteknik – persistent excitation

**Inhemsk term:** persistent excitation (rikedom hos regressorerna `φφᵀ`).  
**Riktning:** faller. När regulatorn minimerar reglerkostnaden undertrycker den insignalkomponenter som inte behövs för referensföljning, vilket svälter identifieringen av den signalrikedom den kräver.  
**Flykt:** kapaciteten faller inte omm *referenssignalen* `r(t)` själv är persistent exciting av ordning ≥ antalet okända parametrar – dvs. rikedom injiceras utifrån reglerlagen.  
**Minimal form:** under den optimala reglerlagen, om `r(t)` inte är persistent exciting av ordning *n*, blir den tids‑medelvärdesbildade `∫ φφᵀ` singulär; annars förblir den likformigt positivt definit.  
**Felsätt:** sluten‑loop‑undertryckning av identifieringskanalen.

Källtermen är `r(t)`. Regulatorn kan inte göra sin egen referens exciting – det är vad som gör den till referensen. **Strikt exogen.**

### 3.2 Evolutionsbiologi – stående genetisk varians

**Inhemsk term:** stående additiv genetisk varians, `V_A`.  
**Riktning:** faller. Riktad selektion driver gynnade alleler mot fixering och tömmer additiv varians i den selekterade egenskapen.  
**Flykt:** faller inte när mutationsinput `V_m` (och/eller rekombination som frigör dold varians, och/eller fluktuerande selektion) balanserar utarmningen.  
**Minimal form:** `ΔV_A ≈ V_m − (selektionsterm)·V_A − (driftterm)·V_A`; varians avtar om inte input eller fluktuation balanserar den.  
**Felsätt:** regimberoende – stabilitet beror på miljövolatilitet.

Källtermen är `V_m` plus miljöfluktuation. Avgörande är att mutationshastighet själv är en *ärftlig, selekterbar parameter*: optimeraren kan i princip agera på den. **Omstritt endogen.**

### 3.3 Institutionell ekonomi – hot om inträde

**Inhemsk term:** hot om inträde, `T`.  
**Riktning:** faller. Den vinstmaximerande etablerade aktören höjer barriärerna `B`, vilket sänker sannolikheten för undanträngning.  
**Flykt:** faller inte när det kostar den etablerade mer att höja `B` än den vinner (`∂π/∂B ≤ 0`), eller när `B` är fixerat av teknologi, lag eller trovärdig extern sanktion.  
**Minimal form:** `∂T/∂B < 0`, gäller om inte `∂π/∂B ≤ 0` eller `B` är externt takbegränsat.  
**Felsätt:** bevarandemekanismen är själv en optimerbar variabel – barriärer väljs av samma agent som hotet begränsar.

Källtermen är en *restriktion på `B` som den etablerade inte sätter*. **Strikt exogen.**

### 3.4 Beslutsteori – strategi‑/posteriorstöd

**Inhemsk term:** stöd för agentens strategi och posterior (handlingar och hypoteser som bär vikt men inte för närvarande är maximala).  
**Riktning:** faller. EU‑maximering med Bayesiansk uppdatering koncentrerar massa på nyttomaximerande handlingar och tillstånd med hög posterior; vikten på resten går mot noll.  
**Flykt:** faller inte under icke‑stationäritet (posteriorn kan inte sätta sig), under exakta nyttoband, eller – i *vissa* formaliseringar – när informationsvärdet av en för närvarande suboptimal handling är strikt positivt.  
**Minimal form:** `w_t(a) → 0` för submaximala `a` i en stationär värld; består omm `VOI(a) > 0`, eller band, eller icke‑stationäritet fortsätter att omfördela massa.  
**Felsätt:** stödkollaps – men platsen för flykttermen är *inte avgjord inom linsen* (se §4.2).

Källtermen är icke‑stationäritet (exogen) *eller* VOI (som i vissa formaliseringar läses som en intern hedge). **Omstritt.**
