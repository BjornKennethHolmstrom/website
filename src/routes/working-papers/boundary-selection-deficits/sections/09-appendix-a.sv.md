# Appendix A — M-Δ-härledning och dekomposition av gränsmissanpassning

Detta appendix tillhandahåller de formella härledningarna som ligger till grund för M-Δ-konfigurationen i Del II. Det utvecklar flerjurisdiktionsmodellen, anger småförstärkningsvillkoret för stabilitet, härleder gränsmissanpassningsindex B och dekomponerar B i stokastiskt exogent brus och strukturerad gränsöverskridande återkoppling.

## A.1 Flerjurisdiktionsmodell

Betrakta ett system av N kopplade delsystem. Varje delsystem i ∈ {1, …, N} har en intern tillståndsvektor **x**_i(t) ∈ ℝ^{k_i}. Den sanna dynamiken för delsystem i är:

**ẋ**_i(t) = **A**_ii **x**_i(t) + **B**_i **u**_i(t) + Σ_{j≠i} **A**_ij **x**_j(t) + **w**_i(t)   (A.1)

där **A**_ii ∈ ℝ^{k_i × k_i} fångar den interna dynamiken, **B**_i ∈ ℝ^{k_i × m_i} är aktueringsmatrisen, **u**_i(t) ∈ ℝ^{m_i} är styrsignalen, **A**_ij ∈ ℝ^{k_i × k_j} fångar kopplingen från delsystem j till delsystem i, och **w**_i(t) är genuint exogent brus med kovarians **W**_i.

Den fullständiga tillståndsvektorn för den verkliga anläggningen är **x**(t) = [**x**_1(t)^T, …, **x**_N(t)^T]^T ∈ ℝ^K där K = Σ_i k_i. Den fullständiga dynamiken är:

**ẋ**(t) = **A** **x**(t) + **B** **u**(t) + **w**(t)   (A.2)

med **A** = [**A**_ij]_{i,j=1}^N, **B** = diag(**B**_1, …, **B**_N), **u**(t) = [**u**_1(t)^T, …, **u**_N(t)^T]^T, och **w**(t) analogt staplat.

Antag nu att de N delsystemen är uppdelade i M jurisdiktioner, där varje jurisdiktion α styr en delmängd 𝒥_α ⊂ {1, …, N}. Den jurisdiktionella uppdelningen definierar en projektion **P**_α : ℝ^K → ℝ^{K_α} som extraherar tillstånden för de delsystem som tilldelats jurisdiktion α. Regulatorn för jurisdiktion α observerar **P**_α **x**(t) och tillämpar styrning **u**_α(t) som endast påverkar dess tilldelade delsystem.

Regulatorns *modellerade anläggning* är delsystemet:

**ẋ̂**_α(t) = **Â**_α **x̂**_α(t) + **B̂**_α **u**_α(t)   (A.3)

där **x̂**_α = **P**_α **x**, **Â**_α = **P**_α **A** **P**_α^T (den interna dynamiken för delsystemen i jurisdiktion α, som ignorerar gränsöverskridande kopplingar), och **B̂**_α = **P**_α **B** **P**_α^T (den aktuering som är tillgänglig för jurisdiktion α).

Skillnaden mellan den sanna dynamiken (A.1) och den modellerade dynamiken (A.3) är den omodellerade dynamiken för jurisdiktion α:

**Δ**_α(**x**, **u**, t) = **P**_α **A** **x**(t) + **P**_α **B** **u**(t) + **P**_α **w**(t) − **Â**_α **x̂**_α(t) − **B̂**_α **u**_α(t)   (A.4)

Denna **Δ**_α inkluderar två distinkta komponenter: de gränsöverskridande kopplingstermerna **P**_α **A** (**I** − **P**_α^T **P**_α) **x**(t) som regulatorns modell utesluter, och spridningseffekterna av styrhandlingar som vidtas i andra jurisdiktioner och som påverkar delsystem i genom kopplingsmatriserna **A**_ij.

## A.2 M-Δ-konfiguration

För en given jurisdiktion kan vi representera sammankopplingen mellan den nominella modellen och den omodellerade dynamiken i den gängse M-Δ-formen från robust reglerteori.

Det nominella systemet **M**_α består av jurisdiktionens interna dynamik tillsammans med dess regulator. Låt regulatorn för jurisdiktion α tillämpa linjär återkoppling **u**_α(t) = −**K**_α **x̂**_α(t), där **K**_α är en förstärkningsmatris utformad för att stabilisera den nominella interna dynamiken **Â**_α. Det slutna nominella systemet är:

**M**_α : **ẋ̂**_α(t) = (**Â**_α − **B̂**_α **K**_α) **x̂**_α(t)   (A.5)

Detta nominella system tar emot insignaler från två källor: det exogena bruset **P**_α **w**(t) och det strukturerade gränsöverskridande inflödet **w_in,α**(t) = Σ_{j∉𝒥_α} **A**_ij **x**_j(t) + spridningseffekter av **u**_j för j ≠ α. Det producerar två utsignaler: det reglerade tillståndet **x̂**_α självt, och utflödet **y_out,α**(t) = Σ_{j∈𝒥_α, k∉𝒥_α} **A**_kj **x**_j(t) — de spridningseffekter som delsystem α:s tillstånd genererar för delsystem utanför dess jurisdiktion.

Blocket för omodellerad dynamik **Δ**_α fångar den externa världens bearbetning av dessa utflöden. Det tar emot **y_out,α** och producerar, tillsammans med dynamiken hos alla andra jurisdiktioner och deras regulatorer, inflödet **w_in,α**. Formellt är **Δ**_α sammansättningen av alla andra jurisdiktioners dynamik, deras regulatorer och de kopplingsmatriser som överför tillstånd mellan jurisdiktioner. Slingan sluts:

**Jurisdiktion α (M_α) → y_out,α → Extern värld (Δ_α) → w_in,α → Jurisdiktion α (M_α)**

Småförstärkningssatsen tillhandahåller ett tillräckligt villkor för stabilitet hos denna sammankoppling när både **M**_α och **Δ**_α är stabila linjära system. Låt ‖**M**_α‖ beteckna H_∞-normen för överföringsfunktionen från w_in,α till y_out,α — den maximala förstärkningen av en insignal genom den nominella slutna jurisdiktionen. Låt ‖**Δ**_α‖ beteckna motsvarande norm för den externa världens överföringsfunktion från y_out,α tillbaka till w_in,α. Småförstärkningsvillkoret för stabilitet är:

‖**M**_α‖ · ‖**Δ**_α‖ `<` 1   (A.6)

Om detta villkor överträds kan sammankopplingen bli instabil även om både **M**_α och **Δ**_α var för sig är stabila. Oscillationer eller divergens kan uppstå enbart ur interaktionen över gränsen.

Styrningstolkningen är att ‖**M**_α‖ mäter hur starkt händelser inom jurisdiktionen spiller över till den externa världen — jurisdiktionens "spridningskänslighet". ‖**Δ**_α‖ mäter hur starkt dessa spridningseffekter, när de väl har bearbetats av den externa världen, återkommer som störningar — den externa världens "återkopplingsförstärkning". När deras produkt överstiger ett genererar regulatorns egna stabiliseringsansträngningar, överförda genom gränsslingan, förstärkta återvändande störningar. Regulatorns interna dashboard visar endast de återvändande störningarna, inte deras ursprung i slingan; regulatorn behandlar dem som exogent brus och svarar med ytterligare interventioner som förstärker dem ytterligare.

## A.3 Gränsmissanpassningsindex B

För en given jurisdiktion α, definiera den totala störning som regulatorn upplever som variansen i avvikelsen mellan jurisdiktionens tillstånd och dess mål, hänförlig till faktorer utanför regulatorns interna modell:

Var(total_störning) = Var(**P**_α **A** **x** + **P**_α **B** **u** + **P**_α **w** − **Â**_α **x̂**_α − **B̂**_α **u**_α)   (A.7)

Detta är variansen av **Δ**_α från ekvation (A.4). Den kan dekomponeras i två komponenter baserat på deras korrelation med regulatorns egna handlingar.

Komponenten *stokastiskt exogent brus* är den del av störningsvariansen som är okorrelerad med regulatorns tidigare styrsignaler:

**B_brus = Var(**P**_α **w**) + Var(gränsöverskridande brus från andra jurisdiktioner som är okorrelerat med **u**_α)   (A.8)

Detta inkluderar genuin miljömässig slumpmässighet och spridningseffekter från andra jurisdiktioners handlingar som inte är systematiskt relaterade till jurisdiktion α:s eget beteende. Det kan hanteras genom buffertar, försäkringspooler och reservkapacitet.

Komponenten *strukturerad gränsöverskridande återkoppling* är den del av störningsvariansen som är korrelerad med regulatorns egna tidigare handlingar, processad genom den externa M-Δ-slingan:

**B_strukt = Var(Σ_{τ`>`0} **H**(τ) **u**_α(t−τ))   (A.9)

där **H**(τ) fångar impulsresponsen från den externa världen på jurisdiktion α:s styrhandlingar — orsakskedjan från **u**_α till y_out,α genom kopplingsnätverket, in i **Δ**_α, och tillbaka som w_in,α efter τ tidssteg.

Gränsmissanpassningsindex är då:

**B = (B_brus + B_strukt) / Var(total_störning)**   (A.10)

B ∈ [0,1]. När B är liten dominerar den interna dynamiken; gränsöverskridande kopplingar är försumbara. När B är stor bestäms jurisdiktionens utfall i väsentlig grad av dynamik som har sitt ursprung utanför dess gräns. När specifikt B_strukt är stor är M-Δ-slingan aktiv, och regulatorns egna interventioner genererar betydande strukturerad återkoppling.

Småförstärkningsvillkoret (A.6) kan relateras till B_strukt. När ‖**M**_α‖ · ‖**Δ**_α‖ → 1 underifrån växer B_strukt ickelinjärt, eftersom den återvändande återkopplingen blir förstärkt nära stabilitetsgränsen. Ett system med hög B_strukt som ännu inte är instabilt kan ändå uppvisa signaturen för spridningseffektoscillation: ihållande, fasfördröjda svar på dess egna handlingar som försämrar prestanda även om slingförstärkningen formellt förblir under ett.

## A.4 Uppskattningsanteckningar

Dekompositionen av B i B_brus och B_strukt är konceptuellt ren men empiriskt krävande. Strukturerad gränsöverskridande återkoppling är just den komponent som en regulators egen övervakningsarkitektur är utformad för att inte observera — regulatorn behandlar w_in,α som exogen till sin konstruktion. Att uppskatta B_strukt kräver antingen en oberoende observationskanal som spänner över M-Δ-slingan (kravet på spridningseffekt-observerbarhet i Del VI.3), eller retrospektiv analys av styrningsutfall som identifierar den komponent av störningsvariansen som är förutsägbar utifrån regulatorns egna tidigare handlingar.

En praktisk ansats är att uppskatta den totala externa variansen från gränsöverskridande flödesdata (handel, kapitalflöden, migration, utsläpp, information) och sedan använda instrumentvariabeltekniker för att isolera den komponent som är ortogonal mot regulatorns handlingar (B_brus) från den komponent som inte är det (B_strukt). Detta kräver data som ofta är fragmentariska, och de resulterande uppskattningarna kommer att ha breda konfidensintervall. Teknisk rapport VIII:s mätramverk, som explicit propagerar osäkerhet och behandlar uppskattningar som undre gränser för system med aktiv Mätparadox, är det lämpliga fordonet för denna uppskattning.

## A.5 Linjäriseringsbrasklapp

Härledningarna i detta appendix antar linjär tidsinvariant dynamik. Verkliga styrsystem är ickelinjära, och kopplingsmatriserna **A**_ij kan själva bero på systemtillståndet (t.ex. finansiell smitta som aktiveras endast under stress, migrationsflöden som svarar på ekonomiska differentialer, diplomatiskt tryck som intensifieras ickelinjärt med allvarlighetsgraden i gränstvisten). Småförstärkningsvillkoret (A.6) är tillräckligt för stabilitet i det linjära fallet men kan vara konservativt eller otillämpligt när ickelinjäriteter är närvarande.

Den kvalitativa mekanismen — att gränsmissanpassning genererar instabilitet genom strukturerade återkopplingsslingor — är inte beroende av linjäritet. Den beror endast på existensen av gränsöverskridande kausala vägar som återför regulatorns handlingar som störningar. Det linjära ramverket gör denna mekanism analytiskt hanterbar och tillhandahåller ett vokabulär för att diagnostisera den. Den ickelinjära utvidgningen, även om den vore önskvärd, skulle inte ändra den strukturella diagnosen, endast precisionen med vilken stabilitetsgränsen kan specificeras.
