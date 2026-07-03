// src/lib/i18n/translations/working-papers.ts

export const workingpapersTranslations = {
	en: {
		workingpapers: {
			meta: {
				title: 'Working Papers | Björn Kenneth Holmström',
				description:
					'A collection of research white papers on governance, AI, consciousness, and systemic change.'
			},
			hero: {
				title: 'Working Papers',
				subtitle: 'A Library of Research for Systemic Change',
				description:
					'Research publications exploring methodologies and frameworks for addressing complex systemic challenges.'
			},
			categories: {
				governance: 'Governance',
				economics: 'Economics',
				systems: 'Systems',
				consciousness: 'Consciousness',
				philosophy: 'Philosophy',
				methodology: 'Methodology'
			},
			governanceSimulator: {
				title: 'Governance Stability Simulator: A Control-Theoretic Model of Institutional Adaptation',
				description:
					'An open analytical framework modelling governance as a feedback control system. Demonstrates how latency and signal fidelity place hard mathematical ceilings on institutional performance — and why subsidiarity is an engineering requirement, not a political preference. Paper I in the Governance as Engineering series.'
			},
			fractalityAsStability: {
				title: 'Fractality as Stability: A Multi-Scale Control-Theoretic Proof',
				description:
					'No single-scale controller can stabilize a system facing simultaneous fast, medium, and slow disturbances. Fractal architectures — nested hierarchies of controllers matched to their disturbance timescale — are the stability-optimal solution. Paper II in the Governance as Engineering series.'
			},
			observabilityDemocracy: {
				title: 'The Observability-Democracy Connection: How Representation Chains Destroy the Signal They Are Meant to Transmit',
				description:
					'Representation chains with three or more layers are constitutionally unobservable: noise variance exceeds surviving signal variance at the policy layer. No institutional reform within the existing architecture can restore preference transmission fidelity. Paper III in the Governance as Engineering series.'
			},
 		requisiteVarietyCommons: {
				title: 'Requisite Variety and the Commons: Why Proximity Governs',
				description:
					'The tragedy of the commons is an architectural failure — a missing feedback loop — not a motivational one. Ashby\'s Law of Requisite Variety determines which governance systems can stabilize renewable resources: state management performs worse than open access, and indigenous resource sovereignty is a structural engineering requirement. Paper IV in the Governance as Engineering series.'
			},
   coordinationFailureTax: {
     title: 'The Coordination Failure Tax',
     subtitle: 'Architectural Compounding and the Path to Requisite Governance',
     description: 'Four governance failure modes — spatial blindness, frequency gaps, preference invisibility, and observational inadequacy — do not add. They multiply. This paper introduces the coordination failure tax, maps the compounding mechanism formally, and shows how the Global Governance Frameworks constitute a structural response to all four diagnosed constraints simultaneously. Paper V in the Governance as Engineering series.',
     seriesLabel: 'Paper V · Governance as Engineering',
   },
   theVarietyGap: {
       title: 'The Variety Gap: What We Don\'t Optimize For, We Lose the Ability to See',
       description:
           'Objective functions are observation architectures. Low-dimensional value functions produce the same structural collapse as low-dimensional governance channels. The variety gap — the mismatch between the dimensionality of reality and the value architecture — is introduced as a unifying diagnostic for systemic blindness. Paper VI in the Governance as Engineering series.'
   },
   selfVarietyGap: {
       title: 'The Variety Gap in the Self: What a Person Optimizes For Determines What They Can Perceive',
       description:
           'Extends the governance-as-engineering framework to self-governance. The ego is a low-dimensional controller; narrow personal values create blind spots that eventually return as crises. Introduces the self-variety gap (G_self) — a unifying diagnostic for psychological blind spots. Companion to the Governance as Engineering series.'
   },
   adaptiveSelfGovernance: {
     title: 'Adaptive Self‑Governance: The Reflexive Controller and the Limits of Self‑Revision',
     description:
       'Companion to The Self‑Variety Gap and Cycle Two of the Governance as Engineering series. Applies the adaptation triad — observer diversity, actuation integrity, and adaptive learning — to the self as a controller whose controller and plant are the same system. Models the correlation tax on self‑knowledge, delegation‑depth attenuation between intention and act, built vs. borrowed self‑trust, boundary calibration, and the reflexive risk of self‑revision destabilising the regime being revised. Includes formal appendices on self‑observer correlation, actuation chain attenuation, self‑legitimacy dynamics, and observer–plant identity.',
   },
   measuringTheVarietyGap: {
     title: 'Measuring the Variety Gap: A Parametric Framework for Diagnosing Governance Failure',
     description:
       'Paper VIII in the Governance as Engineering series. Develops a systematic method for measuring the Variety Gap in governance systems, mapping eight structural primitives to observable parameters and constructing a composite diagnostic index. Calibrated against the twenty-one cases in the series and validated on three pilot cases not used in framework development.',
   },
   politicalEconomyOfRequisiteGovernance: {
     title: 'The Political Economy of Requisite Governance: Transition Pathways Under Incumbent Selection Pressure',
     description:
       'Models the transition to requisite governance as a contested control problem between reform coalitions and incumbent controllers. Introduces the transition variety ratio Ω, formalizes three structural traps (bypass, legibility, incentive‑compatibility), and derives design principles for transition mechanisms — sunset‑coupled bypasses, protected experimental spaces, incumbent buy‑out protocols, and observer diversity. Includes historical calibration (British abolition 1833, Meiji Restoration, Montreal Protocol, German coal phase‑out) and three simulations. Paper IX in the Governance as Engineering series.',
   },
   requisiteObserverDiversity: {
     title: 'Requisite Observer Diversity: Why Civilizations Need Multiple, Independently‑Constituted Epistemic Systems',
     description:
       'Extends the Governance as Engineering series to observer populations. Argues that civilizational epistemic resilience requires an observer ensemble whose effective rank exceeds the dimensionality of the uncertainty it monitors. Formalizes Requisite Observer Diversity, derives the collapse dynamics of epistemic monocultures (including the liability shield and model collapse), and specifies design principles: constitutionally protected epistemic institutions, ensemble methods, subsidiarity of observation, precautionary action gate, and predictive‑validity weighting. Includes a simulation of epistemic monoculture collapse. Paper X in series.',
   },
   reformExhaustion: {
     title: 'Reform Exhaustion: Delegation Depth and the Controllability of Governance',
     description:
       'The actuation channel — the path policy intent travels from centre to street — has been the untreated channel in the series. This paper models the delegation chain as a sequence of projections, delays, and noise injections that survive even when every actor is competent, honest, and compliant. The central result is an energy law: the minimum control effort required to realise a policy target grows superlinearly with delegation depth. Deep chains do not refuse policy; they price it out. With country‑report evidence, simulation, and a within‑country empirical anchor. Paper XI closes the series\' first theoretical cycle.',
   },
   boundarySelectionDeficits: {
     title: 'Boundary Selection Deficits: How the Wrong System Boundary Defeats Perfect Internal Governance',
     description:
       'Can a controller with perfect internal observation and actuation still fail? Yes — if it has drawn the wrong system boundary. This paper models the mismatch between jurisdictional perimeters and the actual coupling structure of the systems they govern. When causally relevant dynamics fall outside a controller\'s boundary, they become unmodeled disturbances that feed back through the M-Δ loop, destabilising the system from outside any internal dashboard\'s view. Introduces the boundary mismatch index B, the pooling paradox, and the Information-Actuation Frontier connecting boundary selection to delegation depth. With simulation and empirical illustrations from climate, pandemics, the EU, India, and Israel. Paper XII opens Cycle Two of the series.',
   },
   legitimacyAsEmergentGain: {
     title: 'Legitimacy as Emergent Gain: The Dual-Channel Coupling of Trust in Governance Architecture',
     description:
       'What is legitimacy, structurally? It is not a primitive of governance architecture but an emergent coupling state — a parameter generated by the interaction between architecture and the governed that simultaneously modulates actuation effectiveness and observation fidelity. This paper models legitimacy as an endogenous scheduling variable in a linear parameter-varying control system, deriving the legitimacy trap, the borrowed-vs-built distinction, and hysteresis dynamics. With design principles for legitimacy-sensitive architectures and empirical illustrations. Paper XIII bridges the series\' primitives to the outcomes they produce.',
   },
   governanceAsAdaptiveController: {
     title: 'Governance as an Adaptive Controller: Exploration, Memory, and the Conditions for Institutional Learning',
     description:
       'Completes the Cycle Two adaptation triad. Models governance learning as a dual control problem, formalising the exploration–exploitation trade‑off, institutional memory, and persistent excitation. Identifies five failure modes — exploration starvation, model lock‑in, exploitation lock‑in, learning‑induced oscillation, and the forgetting‑without‑learning trap — and derives design principles for adaptive governance architectures. Paper XIV consolidates the theoretical arc of Cycle Two and opens the transition to engineering.',
   },
   adaptationBottleneck: {
     title: 'The Adaptation Bottleneck: Throughput Constraints on the Sense–Learn–Execute Loop',
     description:
       'The Sense–Learn–Execute triad was established as three separately justified requirements. This paper treats them as three simultaneous claims on finite processing capacity and shows that effective adaptive throughput is gated by the slowest stage. Identifies three backlogs — information, innovation, and reality — and derives design implications for functionally separating the loop\'s legs. The dynamic dual of Paper V: where static deficits compound, dynamic capacities are gated by their minimum. Paper XV closes the loop on Cycle Two.',
   },
   selfOperator: {
     title: 'Self III: The Operator — How Institutions Inherit the Limits of Their Nodes',
     description:
       'Closes the seam between the governance series and the Self papers. Derives Inherited Unobservability: an institution\'s capacity to perceive interior dimensions of the governed is upper-bounded by the perceptual capacity of the human operators through whom those dimensions must pass. Couples operator self‑opacity to distortion in estimating others\' interior states. Identifies the operator‑seeded legitimacy spiral. The final Self paper, bridging personal and institutional architecture.',
   },
   whyDiversityResistsFormalization: {
     title: 'Why Diversity Resists Formalization',
     subtitle: 'A cross‑framework failure atlas of exploration‑preservation under optimization pressure',
     description:
       'Four disciplines — control theory, evolutionary biology, institutional economics, and decision theory — were each asked the same structural question in strictly native vocabulary. Their independently derived minimal formal statements share a single decay‑plus‑source‑term structure. The paper does not propose a unified theory, but a corrected order parameter: source‑term locality, the axis along which the four collapses align and differ. Paper XVI in the Governance as Engineering series.',
   },
   certificationFloor: {
     title: 'The Certification Floor',
     subtitle: 'Why world‑coupled coordination retains an irreducible link, and self‑referential coordination does not',
     description:
       'Isolates the structural reason that an adaptive coordination boundary retains an irreducible certification link. Derives a relocation invariant: automating a coordination boundary relocates the irreducible world‑certification link upstream but never removes it. Shows the invariant is scope‑bounded to world‑coupled coordination and fails for self‑referential coordination. Paper XVII in the Governance as Engineering series.',
   },
   boundaryInstability: {
     title: 'The Boundary Instability Principle',
     subtitle: 'Reflexive governance and the endogenous drift of decomposability',
     description:
       'Extends Paper XII by removing the assumption that the coupling between a jurisdiction and its environment is fixed. Shows that when governance learning acts through channels that also carry cross‑boundary influence, decomposability becomes reflexive — the boundary that was correct at design time does not stay correct, and the un‑correcting process is the controller\'s own adaptation. Formalizes the Non‑Factorizability Theorem, a reflexive boundary cycle, a Critical Learning Bandwidth that closes endogenously, and a failing early‑warning index. Paper XVIII in the Governance as Engineering series.',
   },
			// --- GGF Papers ---
			preventing1933: {
				title: 'Preventing 1933: The Architecture of Democratic Resilience',
				description:
					'A systems architecture analysis of the Weimar Republic\'s collapse, demonstrating how dual-currency systems and epistemic protocols could prevent a modern democratic failure.'
			},
			fractalCyberneticConsciousness: {
				title: 'The Fractal-Cybernetic Model of Consciousness',
				description: 'A transdisciplinary framework bridging cybernetics, fractal geometry, and contemplative science to explain consciousness evolution toward awakening. Integrates Ashby\'s requisite variety, Mandelbrot\'s fractality, and nondual mysticism into a unified model of consciousness development.'
			},
			responsiveSociety: {
				title: 'The Responsive Society: Aligning with Truth in an Unknown World',
				description:
					'A foundational white paper exploring how societies can navigate uncertainty with wisdom rather than fighting it with force.'
			},
			infiniteParadox: {
				title: 'The Infinite Paradox: Non-Dual Ethics for Planetary Governance',
				description:
					'A comprehensive framework for governance that honors both moral clarity and systems humility, providing practical tools for navigating ethical dilemmas.'
			},
			regenerativeGovernance: {
				title: 'The Regenerative Governance: Integrating the Hardware, Heart, and Nervous System',
				description:
					'A foundational white paper introducing the core architectural innovation of the Global Governance Frameworks.'
			},
			beyondFragmentedTruth: {
				title: 'Beyond Fragmented Truth: A Reasoning Path from Ancient Wisdom to Modern Governance',
				description:
					'A methodological framework for using AI-enhanced reasoning to bridge ancient wisdom traditions and contemporary governance challenges.'
			},
			currencyOfCare: {
				title: 'The Currency of Care: Why Universal Basic Income Isn\'t Enough',
				description:
					"An in-depth exploration of why UBI is a necessary but insufficient solution to the 'crisis of value,' proposing the AUBI system."
			},
			cognitiveScaffolding: {
				title: 'Cognitive Scaffolding: A Multi-Model AI Synthesis Method',
				description:
					'A comprehensive methodology for leveraging diverse AI models to develop robust, holistic solutions for the global polycrisis.'
			},
			// --- Wordpress Papers ---
			beyondTheDuopoly: {
				title: 'Beyond the Duopoly: A Playbook for Post-Polarized Politics',
				description:
					'Diagnoses political polarization as a systems failure and proposes an integrated framework to restore democracy\'s capacity for collective wisdom.'
			},
			mapOfAwakening: {
				title: 'A Collaborative Map of Awakening: Integrating States of Consciousness',
				description:
					'Introduces a bi-dimensional framework distinguishing between universal awareness development and diverse contemplative realizations.'
			},
			beyondStates: {
				title: 'Beyond States: Weaving the Five Streams of Holistic Co-Flourishing',
				description:
					'Argues that consciousness development alone is insufficient, requiring integration across five interdependent streams for true flourishing.'
			},
			changeParadox: {
				title: 'The Change Paradox Field Manual',
				description:
					'A comprehensive, open-source protocol for building transformative political power. Integrates nervous system regulation, Spiral Dynamics, and on-the-ground organizing tactics into a 7-step framework for movements that win.'
			},
			// --- Original papers from this website ---
			addictionIntegration: {
				title: 'Addiction as Integration Failure: A Multi-Domain Framework',
				description:
					'A rigorous analysis applying Project Janus to the crisis of attention, proving that modern addiction is a systemic integration failure, not an individual pathology.'
			},
			beyondIntegration: {
				title: 'Beyond Integration: Nonduality, Psychosis, and the Aperture Problem',
				description: 'A personal and theoretical exploration of consciousness development, modal flexibility, and the systemic barriers preventing safe exploration of psychiatric medication necessity. Integrates Project Janus framework with nondual recognition to propose new approaches to mental health, AI alignment, and human development.'
			},
			architectureOfStability: {
				title: 'The Architecture of Stability: A Systems-Theoretic Framework for Power and Governance',
				description: 'A transdisciplinary analysis showing that centralized governance with time delay is mathematically unstable, and proposing fractal subsidiarity—with Sweden as the prototype—as the constitutional solution for adaptive, resilient societies.'
			},
   architectureOfGovernanceFailure: {
       title: 'The Architecture of Governance Failure: Requisite Variety, Coordination Failure, and the Limits of Modern States',
       description:
           'A unified framework diagnosing why governance systems become blind to their own fragility. Connects Ashby\'s Law of Requisite Variety, Goodhart\'s Law, and the coordination failure tax into a single architecture of institutional collapse, illustrated through cross-national case studies, and derives the architectural prerequisites for adaptive governance.'
   }
		}
	},
	sv: {
		workingpapers: {
			meta: {
				title: 'Arbetsdokument | Björn Kenneth Holmström',
				description:
					'En samling forskningsrapporter om styrning, AI, medvetande och systemisk förändring.'
			},
			hero: {
				title: 'Arbetsdokument',
				subtitle: 'Ett forskningsbibliotek för systemisk förändring',
				description:
					'Forskningspublikationer som utforskar metoder och ramverk för att hantera komplexa systemiska utmaningar.'
			},
			categories: {
				governance: 'Styrning',
				economics: 'Ekonomi',
				systems: 'System',
				consciousness: 'Medvetande',
				philosophy: 'Filosofi',
				methodology: 'Metodik'
			},
			governanceSimulator: {
				title: 'Styrstabilitetssimulatorn: En reglerteoretisk modell för institutionell anpassning',
				description:
					'Ett öppet analytiskt ramverk som modellerar styrning som ett återkopplingssystem. Visar hur latens och signalfidelitet sätter hårda matematiska tak för institutionell prestanda — och varför subsidiaritet är ett ingenjörskrav, inte en politisk preferens. Rapport I i serien Styrning som ingenjörskonst.'
			},
			fractalityAsStability: {
				title: 'Fraktalitet som stabilitet: Ett flerskaligt reglerteoretiskt bevis',
				description:
					'Ingen enskild skalregulator kan stabilisera ett system som möter samtidiga snabba, mellanliggande och långsamma störningar. Fraktala arkitekturer — nästlade hierarkier av regulatorer anpassade till sin störningstidsskala — är den stabilitetsoptimala lösningen. Rapport II i serien Styrning som ingenjörskonst.'
			},
			observabilityDemocracy: {
				title: 'Observerbarhets-demokratikopplingen: Hur representationskedjor förstör den signal de är avsedda att förmedla',
				description:
					'Representationskedjor med tre eller fler lager är konstitutionellt icke-observerbara: brusvariansen överstiger den kvarvarande signalvariansen i politiklagret. Ingen institutionell reform inom den befintliga arkitekturen kan återställa preferensöverföringens trohet. Rapport III i serien Styrning som ingenjörskonst.'
			},
 		requisiteVarietyCommons: {
				title: 'Nödvändig variation och allmänningen: Varför närhet styr',
				description:
					'Allmänningens tragedi är ett arkitektoniskt misslyckande — en saknad återkopplingsslinga — inte ett motivationsmisslyckande. Ashbys lag om nödvändig variation avgör vilka styrningssystem som kan stabilisera förnybara resurser: statlig förvaltning presterar sämre än fri tillgång, och ursprungsbefolkningars resurssouveränitet är ett strukturellt ingenjörskrav. Rapport IV i serien Styrning som ingenjörskonst.'
			},
   coordinationFailureTax: {
     title: 'Samordningsmisslyckandets skatt',
     subtitle: 'Arkitektonisk förstärkning och vägen mot nödvändig styrning',
     description: 'Fyra styrningsfelmönster — rumslig blindhet, frekvensluckor, preferensosynlighet och observationsotillräcklighet — adderar inte. De multiplicerar. Denna rapport introducerar samordningsmisslyckandets skatt, kartlägger förstärkningsmekanismen formellt och visar hur Global Governance Frameworks utgör ett strukturellt svar på alla fyra diagnosticerade begränsningar samtidigt. Rapport V i serien Styrning som ingenjörskonst.',
     seriesLabel: 'Rapport V · Styrning som ingenjörskonst',
   },
   theVarietyGap: {
       title: 'Variationsgapet: Vad vi inte optimerar för, förlorar vi förmågan att se',
       description:
           'Målfunktioner är observationsarkitekturer. Lågdimensionella värdefunktioner producerar samma strukturella kollaps som lågdimensionella styrkanaler. Variationsgapet — skillnaden mellan verklighetens dimensionalitet och värdearkitekturens — introduceras som ett enhetligt diagnostiskt verktyg för systemisk blindhet. Rapport VI i serien Styrning som ingenjörskonst.'
   },
   selfVarietyGap: {
       title: 'Variationsgapet i självet: Vad en person optimerar för avgör vad de kan uppfatta',
       description:
           'Utvidgar ramverket för styrning som ingenjörskonst till självstyrning. Egot fungerar som en lågdimensionell regulator; snäva personliga värderingar skapar blinda fläckar som till slut återvänder som kriser. Introducerar själv-variationsgapet (G_self) — ett enhetligt diagnostiskt verktyg för psykologiska blinda fläckar. Komplement till serien Styrning som ingenjörskonst.'
   },
   adaptiveSelfGovernance: {
     title: 'Adaptiv självstyrning: Den reflexiva kontrollanten och självrevisionens gränser',
     description:
       'Följeslagare till Själv‑variationsgapet och Cykel Två i serien Styrning som ingenjörskonst. Tillämpar adaptationstriaden — observatörsmångfald, aktueringsintegritet och adaptivt lärande — på självet som en kontrollant vars kontrollant och system är samma entitet. Modellerar korrelationsskatten på självkännedom, delegationsdjupets dämpning mellan intention och handling, byggd vs. lånad självtillit, gränskalibrering och den reflexiva risken att självrevision destabiliserar regimen som revideras. Innehåller formella appendix om själv‑observatörskorrelation, aktueringskedjans dämpning, själv‑legitimitetsdynamik och observatör–system‑identitet.',
   },
   measuringTheVarietyGap: {
     title: 'Att mäta varietetsgapet: Ett parametriskt ramverk för att diagnostisera styrningsmisslyckanden',
     description:
       'Rapport VIII i serien Styrning som ingenjörskonst. Utvecklar en systematisk metod för att mäta varietetsgapet i styrsystem, kartlägger åtta strukturella primitiver till observerbara parametrar och konstruerar ett sammansatt diagnostiskt index. Kalibrerad mot de tjugoen fallen i serien och validerad på tre pilotfall som inte använts i ramverkets utveckling.',
   },
   politicalEconomyOfRequisiteGovernance: {
     title: 'Den politiska ekonomin för nödvändig styrning: Övergångsvägar under tryck från etablerade intressen',
     description:
       'Modellerar övergången till nödvändig styrning som ett kontrollproblem mellan reformkoalitioner och etablerade motståndare. Introducerar övergångsvarietetskvoten Ω, formaliserar tre strukturella fällor (kringgående, läsbarhet, incitamentskompatibilitet) och härleder konstruktionsprinciper för övergångsmekanismer — solnedgångskopplade bypassar, skyddade experimentutrymmen, utköpsprotokoll för etablerade intressen och observatörsmångfald. Inkluderar historisk kalibrering (brittiska slaveriets avskaffande 1833, Meiji‑restaurationen, Montrealprotokollet, tysk kolavveckling) och tre simuleringar. Rapport IX i serien Styrning som ingenjörskonst.',
   },
   requisiteObserverDiversity: {
     title: 'Nödvändig observatörsmångfald: Varför civilisationer behöver flera, oberoende epistemiska system',
     description:
       'Utvidgar serien Styrning som ingenjörskonst till observatörspopulationer. Argumenterar för att civilisatorisk epistemisk resiliens kräver en observatörsensemble vars effektiva rang överstiger dimensionaliteten hos den osäkerhet som övervakas. Formaliserar nödvändig observatörsmångfald, härleder kollapsdynamiken för epistemiska monokulturer (inklusive ansvarsskölden och modellkollaps) och specificerar konstruktionsprinciper: konstitutionellt skyddade epistemiska institutioner, ensemblemetoder, observationernas subsidiaritet, försiktighetsgrind och prediktiv validitetsviktning. Inkluderar en simulering av epistemisk monokulturkollaps. Rapport X i serien.',
   },
   reformExhaustion: {
     title: 'Reformutmattning: Delegationsdjup och styrningens styrbarhet',
     description:
       'Aktueringskanalen — vägen policyintention färdas från centrum till gata — har varit den obehandlade kanalen i serien. Denna rapport modellerar delegationskedjan som en sekvens av projektioner, fördröjningar och brusinjektioner som består även när varje aktör är kompetent, ärlig och följsam. Det centrala resultatet är en energilag: den minsta kontrollansträngning som krävs för att realisera ett policymål växer superlinjärt med delegationsdjupet. Djupa kedjor vägrar inte policy; de prissätter den ur räckhåll. Med landrapportbevis, simulering och en empirisk förankring inom ett land. Rapport XI avslutar seriens första teoretiska cykel.',
   },
   boundarySelectionDeficits: {
     title: 'Gränsdragningsunderskott: Hur fel systemgräns besegrar perfekt intern styrning',
     description:
       'Kan en kontrollant med perfekt intern observation och aktivering ändå misslyckas? Ja — om den har dragit fel systemgräns. Denna rapport modellerar obalansen mellan jurisdiktionella gränser och den faktiska kopplingsstrukturen hos de system som styrs. När kausalt relevanta dynamiker hamnar utanför kontrollantens gräns blir de omodellerade störningar som återkopplas genom M-Δ-loopen och destabiliserar systemet utom synhåll för interna instrumentpaneler. Introducerar gränsmatchningsindexet B, poolningsparadoxen och informations-aktiveringsfronten som kopplar gränsval till delegationsdjup. Med simulering och empiriska illustrationer från klimat, pandemier, EU, Indien och Israel. Rapport XII inleder seriens andra cykel.',
   },
   legitimacyAsEmergentGain: {
     title: 'Legitimitet som emergent förstärkning: Förtroendets tvåkanalskoppling i styrningsarkitektur',
     description:
       'Vad är legitimitet, strukturellt sett? Det är inte en primitiv i styrningsarkitekturen utan ett emergent kopplingstillstånd — en parameter som genereras av interaktionen mellan arkitektur och de styrda, och som samtidigt modulerar aktiveringseffektivitet och observationsprecision. Denna rapport modellerar legitimitet som en endogen schemaläggningsvariabel i ett linjärt parametervarierande kontrollsystem, och härleder legitimitetsfällan, distinktionen mellan lånad och byggd legitimitet, och hysteresdynamik. Med designprinciper för legitimitetskänsliga arkitekturer och empiriska illustrationer. Rapport XIII överbryggar seriens primitiver till de utfall de producerar.',
   },
   governanceAsAdaptiveController: {
     title: 'Styrning som en adaptiv kontrollant: Utforskning, minne och villkoren för institutionellt lärande',
     description:
       'Fullbordar Cykel Tvås adaptationstriad. Modellerar styrningens lärande som ett dubbelkontrollproblem, formaliserar avvägningen mellan utforskning och exploatering, institutionellt minne och persistent excitation. Identifierar fem felmoder — utforskningssvält, modellfastlåsning, exploateringsfastlåsning, lärandeinducerad oscillation och fällan att glömma utan att lära — och härleder designprinciper för adaptiva styrningsarkitekturer. Rapport XIV konsoliderar Cykel Tvås teoretiska båge och öppnar övergången till ingenjörskonst.',
   },
   adaptationBottleneck: {
     title: 'Adaptationsflaskhalsen: Genomströmningsbegränsningar i Sense–Learn–Execute-loopen',
     description:
       'Sense–Learn–Execute-triaden etablerades som tre separat motiverade krav. Denna rapport behandlar dem som tre samtidiga anspråk på ändlig processorkapacitet och visar att effektiv adaptiv genomströmning begränsas av det långsammaste steget. Identifierar tre eftersläpningar — information, innovation och verklighet — och härleder designimplikationer för funktionell separation av loopens ben. Den dynamiska dualen till Rapport V: där statiska underskott multipliceras, styrs dynamiska kapaciteter av sitt minimum. Rapport XV stänger loopen för Cykel Två.',
   },
   selfOperator: {
     title: 'Själv III: Operatören — Hur institutioner ärver sina noders begränsningar',
     description:
       'Stänger sömmen mellan styrningsserien och Själv‑artiklarna. Härleder Ärvd oobserverbarhet: institutionens förmåga att uppfatta de styrdas inre dimensioner begränsas uppåt av den perceptuella kapaciteten hos de mänskliga operatörer genom vilka dessa dimensioner måste passera. Kopplar operatörens självopacitet till förvrängning i uppskattningen av andras inre tillstånd. Identifierar den operatörssådda legitimitetsnedåtgående spiralen. Den avslutande Själv‑artikeln, som överbryggar personlig och institutionell arkitektur.',
   },
   whyDiversityResistsFormalization: {
     title: 'Varför mångfald motstår formalisering',
     subtitle: 'En tvär‑ramverks misslyckandeatlas över utforskningsbevarande under optimeringstryck',
     description:
       'Fyra discipliner — reglerteknik, evolutionsbiologi, institutionell ekonomi och beslutsteori — fick samma strukturella fråga i strikt inhemsk vokabulär. Deras oberoende härledda minimala formella utsagor delar en enda förfalls‑plus‑källtermsstruktur. Artikeln föreslår ingen enhetlig teori, men en korrigerad ordningsparameter: källtermslokalitet, axeln längs vilken de fyra kollapserna sammanfaller och skiljer sig. Rapport XVI i serien Styrning som ingenjörskonst.',
   },
   certificationFloor: {
     title: 'Certifieringsgolvet',
     subtitle: 'Varför världskopplad koordination behåller en irreducibel länk, och självreferentiell koordination inte gör det',
     description:
       'Isolerar den strukturella orsaken till att en adaptiv koordinationsgräns behåller en irreducibel certifieringslänk. Härleder en omlokaliseringsinvariant: automatisering av en koordinationsgräns flyttar den irreducibla världscertifieringslänken uppströms men tar aldrig bort den. Visar att invarianten är räckviddsbegränsad till världskopplad koordination och fallerar för självreferentiell koordination. Rapport XVII i serien Styrning som ingenjörskonst.',
   },
   boundaryInstability: {
     title: 'Principen om gränsinstabilitet',
     subtitle: 'Reflexiv styrning och den endogena driften av nedbrytbarhet',
     description:
       'Utvidgar Rapport XII genom att ta bort antagandet att kopplingen mellan en jurisdiktion och dess miljö är fast. Visar att när styrningens lärande verkar genom kanaler som också bär gränsöverskridande inflytande blir nedbrytbarheten reflexiv — den gräns som var korrekt vid konstruktionstillfället förblir inte korrekt, och den process som förstör den är kontrollantens egen anpassning. Formaliserar icke‑faktoriserbarhetsteoremet, en reflexiv gränscykel, en kritisk inlärningsbandbredd som stängs endogent och ett tidigt varningsindex som misslyckas. Rapport XVIII i serien Styrning som ingenjörskonst.',
   },
			// --- GGF Papers ---
			preventing1933: {
				title: 'Att förhindra 1933: Arkitekturen för demokratisk resiliens',
				description:
					'En systemarkitektonisk analys av Weimarrepublikens kollaps som visar hur dubbla valutasystem och epistemiska protokoll kan förhindra en modern demokratisk kollaps.'
			},
			fractalCyberneticConsciousness: {
				title: 'Den fraktala-kybernetiska medvetandemodellen',
				description: 'Ett tvärvetenskapligt ramverk som förenar kybernetik, fraktalgeometri och kontemplativ vetenskap för att förklara medvetandets evolution mot uppvaknande. Integrerar Ashbys nödvändiga mångfald, Mandelbrots fraktalitet och icke-dualistisk mysticism till en enhetlig modell för medvetandeutveckling.'
			},
			responsiveSociety: {
				title: 'The Responsive Society: Aligning with Truth in an Unknown World',
				description:
					'En grundläggande rapport som undersöker hur samhällen kan navigera osäkerhet med visdom istället för att bekämpa den med kraft.'
			},
			infiniteParadox: {
				title: 'The Infinite Paradox: Non-Dual Ethics for Planetary Governance',
				description:
					'Ett ramverk för styrning som hedrar både moralisk klarhet och systemisk ödmjukhet, med praktiska verktyg för att navigera etiska dilemman.'
			},
			regenerativeGovernance: {
				title: 'The Regenerative Governance: Integrating the Hardware, Heart, and Nervous System',
				description:
					'En grundläggande rapport som introducerar kärnan i Global Governance Frameworks arkitektoniska innovation.'
			},
			beyondFragmentedTruth: {
				title: 'Beyond Fragmented Truth: A Reasoning Path from Ancient Wisdom to Modern Governance',
				description:
					'En metodologisk ramverk för att använda AI-förstärkt resonemang för att överbrygga forntida visdomstraditioner och samtida styrningsutmaningar.'
			},
			currencyOfCare: {
				title: 'The Currency of Care: Why Universal Basic Income Isn\'t Enough',
				description:
					'En djupgående utforskning av varför UBI är en nödvändig men otillräcklig lösning på "värdekrisen" och föreslår AUBI-systemet.'
			},
			cognitiveScaffolding: {
				title: 'Cognitive Scaffolding: A Multi-Model AI Synthesis Method',
				description:
					'En omfattande metodik för att utnyttja olika AI-modeller för att utveckla robusta, holistiska lösningar för den globala polykrisen.'
			},
			// --- Wordpress Papers ---
			beyondTheDuopoly: {
				title: 'Beyond the Duopoly: A Playbook for Post-Polarized Politics',
				description:
					'Diagnostiserar politisk polarisering som ett systemfel och föreslår ett integrerat ramverk för att återställa demokratins kapacitet.'
			},
			mapOfAwakening: {
				title: 'A Collaborative Map of Awakening: Integrating States of Consciousness',
				description:
					'Introducerar ett ramverk som skiljer mellan universell medvetenhetsutveckling och olika kontemplativa insikter.'
			},
			beyondStates: {
				title: 'Beyond States: Weaving the Five Streams of Holistic Co-Flourishing',
				description:
					'Argumenterar för att medvetenhetsutveckling ensam är otillräcklig och kräver integration över fem strömmar för sant blomstrande.'
			},
			changeParadox: {
				title: 'The Change Paradox Field Manual',
				description:
					'Ett omfattande, open-source protokoll för att bygga transformativ politisk makt. Integrerar nervsystemsreglering, Spiral Dynamics och konkreta organisationstaktiker i ett 7-stegs ramverk för rörelser som vinner.'
			},
			// --- Original papers from this website ---
			addictionIntegration: {
				title: 'Beroende som integrationsmisslyckande: Ett multidomän-ramverk',
				description:
					'En rigorös analys som applicerar Project Janus på uppmärksamhetskrisen och bevisar att modernt beroende är ett systemiskt integrationsfel, inte en individuell patologi.'
			},
			beyondIntegration: {
				title: 'Bortom integration: icke-dualitet, psykos och aperturproblemet',
				description: 'En personlig och teoretisk utforskning av medvetandeutveckling, modal flexibilitet och de systemiska barriärer som förhindrar säker utforskning av behovet av psykiatrisk medicinering. Integrerar Project Janus-ramverket med icke-dualistisk insikt för att föreslå nya tillvägagångssätt för psykisk hälsa, AI-anpassning och mänsklig utveckling.'
			},
			architectureOfStability: {
				title: 'Stabilitetens arkitektur: Ett systemteoretiskt ramverk för makt och styrning',
				description: 'En tvärvetenskaplig analys som visar att centraliserad styrning med tidsfördröjning är matematiskt instabil, och föreslår fraktal subsidiaritet – med Sverige som prototyp – som den konstitutionella lösningen för anpassningsbara, resilienta samhällen.'
			},
   architectureOfGovernanceFailure: {
       title: 'Styrningsmisslyckandets arkitektur: Nödvändig variation, samordningsmisslyckande och de moderna staternas gränser',
       description:
           'Ett enhetligt ramverk som diagnostiserar varför styrsystem blir blinda för sin egen skörhet. Kopplar samman Ashbys lag om nödvändig variation, Goodharts lag och samordningsmisslyckandets skatt till en sammanhållen arkitektur för institutionell kollaps, illustrerat genom nationella fallstudier, och härleder de arkitektoniska förutsättningarna för adaptiv styrning.'
   }
		}
	}
};
