// src/lib/data/working-papers.ts

type Workingpaper = {
	id: string;
	key: string;
	category: string;
	tags?: string[];
	year: string;
	pages: string;
	readTime: {
		en: string | null;
		sv?: string | null;
	};
	version: string | null;
	pdfPath: {
		en: string | null;
		sv?: string | null;
	};
	readOnlinePath: string | null;
	readOnlineExternal?: boolean;
	releaseDate: string;
	coverImage?: string;
};

const ggfBase = 'https://globalgovernanceframeworks.org';
const wpBase = 'https://bjornkennethholmstrom.wordpress.com';
const localBase = '/working-papers';

export const papersData: Workingpaper[] = [
 {
   id: 'requisiteObserverDiversity',
   key: 'requisiteObserverDiversity',
   category: 'governance',
   tags: [
     'Observer Diversity',
     'Epistemic Systems',
     'Governance Engineering',
     'Cybernetics',
     'Ensemble Methods',
     'Model Collapse',
     'Precautionary Principle',
     'Civilizational Resilience',
     'AI Safety',
     'Observability'
   ],
   year: '2026',
   pages: '50',
   readTime: {
     en: '45 min',
     sv: '45 min'
   },
   version: '1.0',
   pdfPath: {
     en: `${localBase}/requisite-observer-diversity.pdf`,
     sv: `${localBase}/requisite-observer-diversity-sv.pdf`,
   },
   coverImage: '/working-papers/images/requisite-observer-diversity-cover.png',
   readOnlinePath: '/working-papers/requisite-observer-diversity',
   readOnlineExternal: false,
   releaseDate: '2026-06-10'
 },
 {
   id: 'politicalEconomyOfRequisiteGovernance',
   key: 'politicalEconomyOfRequisiteGovernance',
   category: 'governance',
   tags: [
     'Political Economy',
     'Transition Pathways',
     'Incumbent Resistance',
     'Requisite Variety',
     'Governance Engineering',
     'Control Theory',
     'Institutional Design',
     'Buy-out Protocols',
     'Simulation',
     "Ashby's Law",
     'Transition Bandwidth'
   ],
   year: '2026',
   pages: '69',                         
   readTime: {
     en: '60 min',                           
     sv: '60 min'
   },
   version: '1.0',
   pdfPath: {
     en: `${localBase}/political-economy-of-requisite-governance.pdf`,
     sv: `${localBase}/political-economy-of-requisite-governance-sv.pdf`,
   },
   coverImage: '/working-papers/images/political-economy-requisite-governance-cover.png',
   readOnlinePath: '/working-papers/political-economy-of-requisite-governance',
   readOnlineExternal: false,
   releaseDate: '2026-06-10'
 },
 {
   id: 'measuringTheVarietyGap',
   key: 'measuringTheVarietyGap',
   category: 'governance',
   tags: ['Variety Gap', 'Measurement', 'Parametric Framework', 'Diagnostic Instrument', 'Governance Engineering', 'Observability', 'Cybernetics', 'Composite Index'],
   year: '2026',
   pages: '80',
   readTime: {
     en: '70 min',
     sv: '70 min'
   },
   version: '1.1',
   pdfPath: {
     en: `${localBase}/measuring-the-variety-gap.pdf`,
     sv: `${localBase}/measuring-the-variety-gap-sv.pdf`,
   },
   coverImage: '/working-papers/images/measuring-the-variety-gap-cover.png',
   readOnlinePath: '/working-papers/measuring-the-variety-gap',
   readOnlineExternal: false,
   releaseDate: '2026-05-29'
 },
 {
     id: 'architectureOfGovernanceFailure',
     key: 'architectureOfGovernanceFailure',
     category: 'governance',
     tags: ['Governance Failure', 'Requisite Variety', 'Coordination Failure Tax', 'Goodhart-Ashby Synthesis', 'Observability', 'Cybernetics', 'Institutional Design', 'Meta-Governance'],
     year: '2026',
     pages: '33',
     readTime: {
         en: '45 min',
         sv: '45 min'
     },
     version: '1.0',
     pdfPath: {
         en: `${localBase}/architecture-of-governance-failure.pdf`,
         sv: `${localBase}/architecture-of-governance-failure-sv.pdf`,
     },
     coverImage: '/working-papers/images/architecture-of-governance-failure-cover.png',
     readOnlinePath: '/working-papers/architecture-of-governance-failure',
     readOnlineExternal: false,
     releaseDate: '2026-05-16'
 },
 {
     id: 'theVarietyGap',
     key: 'theVarietyGap',
     category: 'governance',
     tags: ['Variety Gap', 'Value Architecture', 'Goodhart-Ashby Synthesis', 'Meta-Governance', 'Observability', 'Cybernetics', 'Complexity', 'Civilizational Viability', 'Systems Theory', 'Governance Engineering'],
     year: '2026',
     pages: '62',
     readTime: {
         en: '70 min',
         sv: '70 min'
     },
     version: '1.1',
     pdfPath: {
         en: `${localBase}/the-variety-gap.pdf`,
         sv: `${localBase}/the-variety-gap-sv.pdf`,
     },
     coverImage: '/working-papers/images/the-variety-gap-cover.png',
     readOnlinePath: '/working-papers/the-variety-gap',
     readOnlineExternal: false,
     releaseDate: '2026-05-08'
 },
 {
  id: 'coordinationFailureTax',
  key: 'coordinationFailureTax',
  category: 'governance',
  tags: ['Governance Architecture','Systems Theory','Coordination Failure','Requisite Variety','Cybernetics','Democratic Reform','Commons Governance','Global Governance Frameworks','Institutional Design',
  ],
  year: '2026',
  pages: '18',
		readTime: {
			en: '25 min',
			sv: '25 min'
		},
		version: '1.0',
		pdfPath: {
			en: `${localBase}/coordination-failure-tax.pdf`,
			sv: `${localBase}/coordination-failure-tax-sv.pdf`,
		},
		coverImage: '/working-papers/images/coordination-failure-tax-cover.png',
		readOnlinePath: '/working-papers/coordination-failure-tax',
		readOnlineExternal: false,
		releaseDate: '2026-03-02'
	},
 {
		id: 'requisiteVarietyCommons',
		key: 'requisiteVarietyCommons',
		category: 'governance',
		tags: ['Commons Governance', 'Requisite Variety', 'Cybernetics', 'Indigenous Sovereignty', 'Traditional Ecological Knowledge', 'Feedback Loops', 'Resource Management', 'Governance Engineering', 'Simulation'],
		year: '2026',
		pages: '43',
		readTime: {
			en: '50 min',
			sv: '50 min'
		},
		version: '1.0',
		pdfPath: {
			en: `${localBase}/requisite-variety-and-the-commons.pdf`,
			sv: `${localBase}/requisite-variety-and-the-commons-sv.pdf`,
		},
		coverImage: '/working-papers/images/requisite-variety-commons-cover.png',
		readOnlinePath: '/working-papers/requisite-variety-and-the-commons',
		readOnlineExternal: false,
		releaseDate: '2026-02-27'
	},
 {
		id: 'observabilityDemocracy',
		key: 'observabilityDemocracy',
		category: 'governance',
		tags: ['Information Theory', 'Observability', 'Democracy', 'Representation', 'Signal Fidelity', 'Governance Engineering', 'Control Theory', 'Simulation'],
		year: '2026',
		pages: '34',
		readTime: {
			en: '45 min',
			sv: '45 min'
		},
		version: '1.0',
		pdfPath: {
			en: `${localBase}/observability-democracy-connection.pdf`,
			sv: `${localBase}/observability-democracy-connection-sv.pdf`,
		},
		coverImage: '/working-papers/images/observability-democracy-cover.png',
		readOnlinePath: '/working-papers/observability-democracy-connection',
		readOnlineExternal: false,
		releaseDate: '2026-02-27'
	},
	{
		id: 'fractalityAsStability',
		key: 'fractalityAsStability',
		category: 'governance',
		tags: ['Control Theory', 'Cybernetics', 'Fractal Architecture', 'Multi-Scale Systems', 'Governance Engineering', 'Feedback Systems', 'Frequency Analysis', 'Subsidiarity', 'Simulation'],
		year: '2026',
		pages: '47',
		readTime: {
			en: '50 min',
			sv: '50 min'
		},
		version: '1.0',
		pdfPath: {
			en: `${localBase}/fractality-as-stability.pdf`,
			sv: `${localBase}/fractality-as-stability-sv.pdf`,
		},
		coverImage: '/working-papers/images/fractality-as-stability-cover.png',
		readOnlinePath: '/working-papers/fractality-as-stability',
		readOnlineExternal: false,
		releaseDate: '2026-02-27'
	},
	{
		id: 'governanceSimulator',
		key: 'governanceSimulator',
		category: 'governance',
		tags: ['Control Theory', 'Cybernetics', 'Systems Theory', 'Subsidiarity', 'Governance Engineering', 'Feedback Systems', 'Simulation'],
		year: '2026',
		pages: '33',
		readTime: {
			en: '40 min',
			sv: '40 min'
		},
		version: '1.0',
		pdfPath: {
			en: `${localBase}/governance-stability-simulator.pdf`,
			sv: `${localBase}/governance-stability-simulator-sv.pdf`,
		},
		coverImage: '/working-papers/images/governance-simulator-cover.png',
		readOnlinePath: '/working-papers/governance-stability-simulator',
		readOnlineExternal: false,
		releaseDate: '2026-02-27'
	},
	{
		id: 'architectureOfStability',
		key: 'architectureOfStability',
		category: 'governance',
		tags: ['Systems Theory', 'Control Theory', 'Cybernetics', 'Constitutional Design', 'Subsidiarity', 'Governance', 'Complexity Science', 'Fractal Architecture', 'Stability Analysis', 'Sweden', 'Prototype'],
		year: '2026',
		pages: '193',
		readTime: {
			en: '4 hours',
			sv: '4 timmar'
		},
		version: '1.0',
		pdfPath: {
			en: `${localBase}/architecture-of-stability.pdf`,
			sv: `${localBase}/architecture-of-stability.pdf`
		},
		coverImage: '/working-papers/images/architecture-of-stability-cover.png',
		readOnlinePath: '/working-papers/architecture-of-stability',
		readOnlineExternal: false,
		releaseDate: '2026-02-19'
	},
 {
     id: 'selfVarietyGap',
     key: 'selfVarietyGap',
     category: 'governance',
     tags: ['Self-Governance', 'Variety Gap', 'Cybernetics', 'Psychology', 'Goodhart-Ashby Synthesis', 'Meta-Governance', 'Personal Development', 'Systems Theory'],
     year: '2026',
     pages: '57',
     readTime: {
         en: '65 min',
         sv: '65 min'
     },
     version: '1.0',
     pdfPath: {
         en: `${localBase}/self-variety-gap.pdf`,
         sv: `${localBase}/self-variety-gap-sv.pdf`,
     },
     coverImage: '/working-papers/images/self-variety-gap-cover.png',
     readOnlinePath: '/working-papers/self-variety-gap',
     readOnlineExternal: false,
     releaseDate: '2026-05-08'
 },
	{
		id: 'preventing1933',
		key: 'preventing1933',
		category: 'governance',
		year: '2025',
		pages: '27',
		readTime: { en: '35 min' },
		version: '1.0',
		pdfPath: { en: `${ggfBase}/resources/whitepapers/Preventing_1933_-_Architecture_of_Democratic_Resilience.pdf`, sv: `${ggfBase}/resources/whitepapers/Att_f%C3%B6rhindra_1933_-_Arkitekturen_f%C3%B6r_demokratisk_motst%C3%A5ndskraft.pdf` },
		coverImage: '/working-papers/images/preventing-1933-cover.png',
		readOnlinePath: `${ggfBase}/resources/whitepapers/preventing-1933`,
		readOnlineExternal: true,
		releaseDate: '2025-12-18'
	},
	{
		id: 'beyond-integration',
		key: 'beyondIntegration',
		category: 'consciousness',
		year: '2025',
		coverImage: '/working-papers/images/beyond-integration-cover.png',
		releaseDate: '2025-12-04',
		pages: '135',
		version: '1.0',
		readTime: {
			en: '4-6 hours',
			sv: '4-6 timmar'
		},
		readOnlinePath: '/working-papers/beyond-integration',
		pdfPath: {
			en: `${localBase}/beyond-integration.pdf`,
			sv: `${localBase}/beyond-integration-sv.pdf`
		},
		readOnlineExternal: false,
	},
	{
		id: 'fractalCyberneticConsciousness',
		key: 'fractalCyberneticConsciousness',
		category: 'consciousness',
		tags: ['Systems Theory', 'Cybernetics', 'Fractal Geometry', 'Nondual Philosophy', 'Consciousness Studies'],
		year: '2026',
		pages: '51',
		readTime: {
			en: '1 hour',
			sv: '1 timme'
		},
		version: '1.0',
		pdfPath: {
			en: `${localBase}/fractal-cybernetic-consciousness.pdf`,
			sv: `${localBase}/fractal-cybernetic-consciousness-sv.pdf`
		},
		coverImage: '/working-papers/images/fractal-cybernetic-cover.png',
		readOnlinePath: '/working-papers/fractal-cybernetic-consciousness',
		readOnlineExternal: false,
		releaseDate: '2026-02-07'
	},
	{
		id: 'cognitiveScaffolding',
		key: 'cognitiveScaffolding',
		category: 'methodology',
		year: '2025',
		pages: '21',
		readTime: { en: '25 min' },
		version: '1.8',
		pdfPath: { en: `${ggfBase}/resources/whitepapers/Cognitive_Scaffolding_-_A_Multi-Model_AI_Synthesis_Method.pdf` },
		coverImage: '/working-papers/images/cognitive-scaffolding-cover.png',
		readOnlinePath: `${ggfBase}/resources/whitepapers/cognitive-scaffolding`,
		readOnlineExternal: true,
		releaseDate: '2025-08-25'
	},
	{
		id: 'regenerativeGovernance',
		key: 'regenerativeGovernance',
		category: 'governance',
		year: '2025',
		pages: '52',
		readTime: { en: '40 min' },
		version: '1.0',
		pdfPath: { en: `${ggfBase}/resources/whitepapers/The_Regenerative_Governance_-_Integrating_Hardware_Heart_Nervous_System.pdf` },
		coverImage: '/working-papers/images/regenerative-governance-cover.png',
		readOnlinePath: `${ggfBase}/resources/whitepapers/the-regenerative-governance`,
		readOnlineExternal: true,
		releaseDate: '2025-09-03'
	},
	{
		id: 'currencyOfCare',
		key: 'currencyOfCare',
		category: 'economics',
		year: '2025',
		pages: '30',
		readTime: { en: '35 min' },
		version: '1.0',
		pdfPath: { en: `${ggfBase}/resources/whitepapers/The_Currency_of_Care_Beyond_UBI.pdf` },
		coverImage: '/working-papers/images/currency-of-care-cover.png',
		readOnlinePath: `${ggfBase}/resources/whitepapers/the-currency-of-care`,
		readOnlineExternal: true,
		releaseDate: '2025-08-31'
	},
	{
		id: 'addictionIntegration',
		key: 'addictionIntegration',
		category: 'systems',
		year: '2025',
		version: '1.0',
		pages: '90',
		readTime: {
			en: 'Quick skim: 1 hour | Full read: 3-4 hours',
			sv: 'Snabb skumläsning: 1 timme | Fullständig läsning: 3–4 timmar'
		},
		tags: ['Systems Thinking', 'Psychology', 'Governance', 'Methodology'],
		pdfPath: {
			en: `${localBase}/addiction-as-integration-failure.pdf`,
			sv: `${localBase}/addiction-as-integration-failure-sv.pdf`
		},
		coverImage: '/working-papers/images/addiction-cover.png',
		readOnlinePath: '/working-papers/addiction-as-integration-failure',
		readOnlineExternal: false,
		releaseDate: '2026-12-01'
	},
	{
		id: 'changeParadox',
		key: 'changeParadox',
		category: 'methodology',
		year: '2025',
		pages: '~100',
		readTime: { en: '2-3 hours', sv: '2-3 timmar' },
		version: '2.2',
		pdfPath: { en: 'https://github.com/BjornKennethHolmstrom/change-paradox-field-manual/releases/latest' },
		coverImage: '/working-papers/images/change-paradox-cover.png',
		readOnlinePath: 'https://bjornkennethholmstrom.github.io/change-paradox-field-manual/',
		readOnlineExternal: true,
		releaseDate: '2025-11-23'
	},
	{
		id: 'beyondTheDuopoly',
		key: 'beyondTheDuopoly',
		category: 'governance',
		year: '2025',
		pages: '54',
		readTime: { en: null },
		version: null,
		pdfPath: { en: `${localBase}/beyond-the-duopoly.pdf` },
		coverImage: '/working-papers/images/beyond-the-duopoly-cover.png',
		readOnlinePath: `${localBase}/beyond-the-duopoly/`,
		readOnlineExternal: false,
		releaseDate: '2025-09-15'
	},
	{
		id: 'infiniteParadox',
		key: 'infiniteParadox',
		category: 'governance',
		year: '2025',
		pages: '64',
		readTime: { en: '45 min' },
		version: '1.0',
		pdfPath: { en: `${ggfBase}/resources/whitepapers/The_Infinite_Paradox_-_Non-Dual_Ethics_for_Planetary_Governance.pdf` },
		coverImage: '/working-papers/images/infinite-paradox-cover.png',
		readOnlinePath: `${ggfBase}/resources/whitepapers/the-infinite-paradox`,
		readOnlineExternal: true,
		releaseDate: '2025-09-03'
	},
	{
		id: 'responsiveSociety',
		key: 'responsiveSociety',
		category: 'philosophy',
		year: '2025',
		pages: '50',
		readTime: { en: '45 min' },
		version: '1.0',
		pdfPath: { en: `${ggfBase}/resources/whitepapers/The_Responsive_Society_-_Aligning_with_Truth_in_an_Unknown_World.pdf` },
		coverImage: '/working-papers/images/responsive-society-cover.png',
		readOnlinePath: `${ggfBase}/resources/whitepapers/the-responsive-society`,
		readOnlineExternal: true,
		releaseDate: '2025-10-04'
	},
	{
		id: 'beyondFragmentedTruth',
		key: 'beyondFragmentedTruth',
		category: 'methodology',
		year: '2025',
		pages: '65',
		readTime: { en: '45 min' },
		version: '1.0',
		pdfPath: { en: `${ggfBase}/resources/whitepapers/Beyond_Fragmented_Truth_-_A_Reasoning_Path_from_Ancient_Wisdom_to_Modern_Governance.pdf` },
		coverImage: '/working-papers/images/beyond-fragmented-truth-cover.png',
		readOnlinePath: `${ggfBase}/resources/whitepapers/beyond-fragmented-truth`,
		readOnlineExternal: true,
		releaseDate: '2025-09-01'
	},
	{
		id: 'mapOfAwakening',
		key: 'mapOfAwakening',
		category: 'consciousness',
		year: '2025',
		pages: '36',
		readTime: { en: null },
		version: null,
		pdfPath: { en: `${localBase}/collaborative-map-of-awakening.pdf` },
		coverImage: '/working-papers/images/map-of-awakening-cover.png',
		readOnlinePath: `${localBase}/collaborative-map-of-awakening/`,
		readOnlineExternal: false,
		releaseDate: '2025-09-23'
	},
	{
		id: 'beyondStates',
		key: 'beyondStates',
		category: 'consciousness',
		year: '2025',
		pages: '57',
		readTime: { en: null },
		version: null,
		pdfPath: { en: `${localBase}/beyond-states.pdf` },
		coverImage: '/working-papers/images/beyond-states-cover.png',
		readOnlinePath: `${localBase}/beyond-states/`,
		readOnlineExternal: false,
		releaseDate: '2025-09-29'
	}
];
