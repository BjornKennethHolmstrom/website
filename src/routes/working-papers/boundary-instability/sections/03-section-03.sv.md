## 3. Den reflexiva gränscykeln: En minimal modell

### 3.1 Specifikation

Modellen instansierar teoremets hypoteser i det minsta system som kan uppvisa deras konsekvenser: två skalära delsystem, vart och ett styrt av en lokal regulator som tror att dess jurisdiktion är sluten och dess modell kalibrerad, sammankopplade genom en kanal vars styrka beror på både tillstånden och de institutionella variablerna. Den fullständiga specifikationen, med parametervärden, finns i simulatorhuvudet (`paper_xviii_boundary_instability.py`); strukturen är:

$$x_i(t{+}1)=(a_t-k_i)\,x_i+\varepsilon(t)\,x_j+w_i,\qquad
\varepsilon=\varepsilon_0+\alpha\,(1-b)+\beta\,c,$$

$$c(t{+}1)=(1-\mu)\,c+\mu\,x_1x_2+\nu\,(|\Delta k_1|+|\Delta k_2|),\qquad
b(t{+}1)=\sigma\!\big(\gamma\,(1-\overline{|r|}/R)-\delta\,|\varepsilon|+h\,(b-\tfrac12)\big).$$

Varje delsystem predikterar sitt nästa tillstånd från sin egen slutna modell, $\hat{x}_i=(a_0-k_i)\,x_i$, så residualen $r_i=x_i(t{+}1)-\hat{x}_i=(a_t-a_0)\,x_i+\varepsilon\,x_j+w_i$ är *exakt* det omodellerade innehållet: driftföråldring plus gränsöverskridande påverkan plus brus. Inlärning är ett gradientsteg på den lokala kvadrerade residualen med ett läckage, $k_i\leftarrow(1-\lambda)k_i+\eta\,x_i r_i$; tillstånden är mjukt mättade vid ett ändligt intervall.

Fem modelleringsval deklareras snarare än döljs, eftersom vart och ett är bärande och vart och ett tvingades fram av ett identifierbart misslyckande hos den naiva specifikationen. *Förstärkningsläckaget* $\lambda$: utan det är förstärkningsuppdateringen en spärrhake och ingen relaxationsoscillation är möjlig; institutionellt är reglerinsats kostsam och oförnyad auktoritet relaxerar. *Kopplingslagret* $c$: skissens momentana produkt $\beta x_1x_2$ kan inte bestå efter en kollaps, men skissens egen fasberättelse kräver persistent koppling; lagret — koppling byggd genom upprepad interaktion, som avklingar långsamt — är den minimala persistensmekanismen och den institutionellt trogna. *Policihastighetskanalen* $\nu$: explorativa körningar visade att med enbart tillståndsförmedlad reflexivitet är snabbare inlärning monotont stabiliserande och ingen övre gräns för inlärningshastigheten existerar; rapportens premiss $\partial\mathbf{\Delta}/\partial\theta\neq 0$ kräver en *direkt* kanal, och $\nu$ — varje sidas regeländringar skapar gränssnitt som trasslar samman jurisdiktionerna — är dess minimala implementation och den storhet som §4 sveper. *Minnestermen* $h\,(b-\tfrac12)$ är AR(1)-självexcitation, inte egentlig hysteres; den tidigare etiketten korrigeras. *Residualen från den slutna modellen* ersätter skissens öppna-loop-baslinje: den gör $r_i$ till den bokstavliga gränsmissmatchningssignalen, till priset av en konsekvens som noteras i §5. Alla fem finns i simulatorns ändringslogg tillsammans med de explorativa körningar som tvingade fram dem.

Korrespondensen med §2 är exakt där den behöver vara: $\theta=(k_1,k_2)$ når $\mathbf{\Delta}$ både indirekt genom tillstånden och direkt genom $\nu$, så hypotes (i) håller genom konstruktion; processbruset gör flykten till ett måttpåstående; och den ”gräns” vars öde teoremet förutsäger uppträder två gånger, som den *faktiska* kopplingen $\varepsilon$ och som den *upplevda* klarheten $b$ — gapet mellan de två är där cykeln lever.

### 3.2 De fyra faserna, såsom de uppvisas

Det simulerade systemet (Figur `xviii_A_phase_cycle`) genomlöper den cykel som skissen förutsåg, med en korrigering noterad nedan. **[R inom modellen]** för den uppvisade dynamiken; de institutionella uttydningarna är **[IP]**.

*Faktoriserbart lugn.* Gränsklarhet hög, koppling nära sitt strukturella golv, förstärkningar nära noll, lokal prediktion god. Varje intern indikator rapporterar hälsa, och rapporterna är, lokalt, sanna.

*Dold ackumulation av koppling.* Interaktionslagret rampar: korrelerade tillstånd matar $c$, $c$ matar $\varepsilon$, $\varepsilon$ korrelerar tillstånden ytterligare. Sammansättningen är osynlig där institutionerna tittar — residualstorlekarna växer bara med $\varepsilon^2$ medan återkopplingen sammansätts — och $b$ förblir hög eftersom prediktionsfelet förblir litet. Den slutna formens snabbstatistik (A.2.2) lokaliserar den klippa som denna ramp närmar sig: interaktionsstatistikan divergerar när $\varepsilon\to 1-(a-k)$, den marginal som de lokala förstärkningarna lämnar öppen.

*Icke‑faktoriserbar kollaps.* Divergensen nås; tillstånd och koppling rusar iväg på den snabba tidsskalan tills mättnad begränsar exkursionen; residualer exploderar; varje regulator finner sin lokala modell ogiltig och sina egna handlingar återvändande som otillskrivbar återkoppling; $b$ faller till sin upplösta gren. Den nu enorma inlärningssignalen driver förstärkningarna upp snabbt — den panikslagna överkorrigeringen är *förstärkningsanpassning*, inte gränsomritning.

*Felkalibrerad återhämtning.* Höga förstärkningar dödar tillstånden; residualerna tystnar; $b$:s klarhet återhämtar sig eftersom *symptomen* har undertryckts — men lagret avklingar endast långsamt, så systemet återinträder i lugn med reell koppling fortfarande förhöjd och, i takt med att läckaget blöder ut förstärkningarna igen, återbeväpnar sig instabiliteten. Återhämtningen är felkalibrerad i precis den mening skissen hävdade, och mekanismen är nu explicit: upplevd klarhet följer residualer, residualer följer vad anpassningen har absorberat, och anpassningen har absorberat bevisen.

![Figur xviii_A_phase_cycle](/working-papers/images/boundary-instability/xviii_A_phase_cycle.png)
*(Figur: `xviii_A_phase_cycle.png` — en cykel: lagerrampen under ett tyst b, ε-exkursionen förbi 1−a₀, förstärkningsspiken, kollaps och förskjuten återhämtning.)*

### 3.3 Simuleringsresultat: cykeln existerar, och den har en slutstation (P1)

Den registrerade förutsägelsen P1 — en ihållande oscillation i en icke-degenererad region av $(\beta,\eta)$-rummet — **stöds**. Uppvisningskörningen producerar nio kollaps–återhämtningshändelser på 6000 steg; regimkartan (Figur `xviii_A2_regime_map`, ett $12\times12$-rutnät över $\beta\in[0.2,2.4]$, $\eta\in[0.005,0.5]$) klassificerar **36%** av rutnätet som cyklande. **[R inom modellen.]**

Kartan innehåller också ett fynd som skissen inte förutsåg, och det hör hemma i fasberättelsen snarare än i en fotnot. Den cyklande regionen begränsas på ena sidan av en *vilande* regim — reflexivitet för svag för att nå vecket — och på den andra av en **låst icke‑faktoriserbar regim**: vid hög reflexivitet är kopplingens golv efter kollaps $\varepsilon_0+\alpha(1-b)$ i sig självt tillräckligt högt för att hålla klarheten vid noll permanent. Gränsen återhämtar sig aldrig; systemet slår sig till ro i permanent NF-residens. Cykeln är med andra ord inte det värsta fallet. Den är det *mellanliggande* fallet, tillgängligt endast för system vars reflexivitet är stark nog att bryta gränsen men svag nog att brytandet inte svetsar igen den. Institutionellt **[IP]**: det oscillerande mönstret av kris och reform förutsätter en reflexivitetsregim; bortom den ligger inte snabbare oscillation utan en permanent upplöst separation där ”jurisdiktion” överlever som en juridisk fiktion över en fullständigt sammankopplad anläggning. Appendix A.2.3 ger den medelvärdesbildade plana reduktion som förklarar cykelns anatomi och anger tydligt varför inget analytiskt gränscykelteorem görs anspråk på för den.

![Figur xviii_A2_regime_map](/working-papers/images/boundary-instability/xviii_A2_regime_map.png)
*(Figur: `xviii_A2_regime_map.png` — vilande, cyklande och låst icke‑faktoriserbara regimen över (β, η).)*

---
