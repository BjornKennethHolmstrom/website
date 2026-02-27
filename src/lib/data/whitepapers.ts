// src/lib/data/whitepapers.ts

type Whitepaper = {
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
const localBase = '/whitepapers';

export const papersData: Whitepaper[] = [
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
		coverImage: '/whitepapers/images/governance-simulator-cover.png',
		readOnlinePath: '/whitepapers/governance-stability-simulator',
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
		coverImage: '/whitepapers/images/fractality-as-stability-cover.png',
		readOnlinePath: '/whitepapers/fractality-as-stability',
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
		coverImage: '/whitepapers/images/observability-democracy-cover.png',
		readOnlinePath: '/whitepapers/observability-democracy-connection',
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
		coverImage: '/whitepapers/images/architecture-of-stability-cover.png',
		readOnlinePath: '/whitepapers/architecture-of-stability',
		readOnlineExternal: false,
		releaseDate: '2026-02-19'
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
		coverImage: '/whitepapers/images/preventing-1933-cover.png',
		readOnlinePath: `${ggfBase}/resources/whitepapers/preventing-1933`,
		readOnlineExternal: true,
		releaseDate: '2025-12-18'
	},
	{
		id: 'beyond-integration',
		key: 'beyondIntegration',
		category: 'consciousness',
		year: '2025',
		coverImage: '/whitepapers/images/beyond-integration-cover.png',
		releaseDate: '2025-12-04',
		pages: '135',
		version: '1.0',
		readTime: {
			en: '4-6 hours',
			sv: '4-6 timmar'
		},
		readOnlinePath: '/whitepapers/beyond-integration',
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
		coverImage: '/whitepapers/images/fractal-cybernetic-cover.png',
		readOnlinePath: '/whitepapers/fractal-cybernetic-consciousness',
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
		coverImage: '/whitepapers/images/cognitive-scaffolding-cover.png',
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
		coverImage: '/whitepapers/images/regenerative-governance-cover.png',
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
		coverImage: '/whitepapers/images/currency-of-care-cover.png',
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
		coverImage: '/whitepapers/images/addiction-cover.png',
		readOnlinePath: '/whitepapers/addiction-as-integration-failure',
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
		coverImage: '/whitepapers/images/change-paradox-cover.png',
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
		coverImage: '/whitepapers/images/beyond-the-duopoly-cover.png',
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
		coverImage: '/whitepapers/images/infinite-paradox-cover.png',
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
		coverImage: '/whitepapers/images/responsive-society-cover.png',
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
		coverImage: '/whitepapers/images/beyond-fragmented-truth-cover.png',
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
		coverImage: '/whitepapers/images/map-of-awakening-cover.png',
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
		coverImage: '/whitepapers/images/beyond-states-cover.png',
		readOnlinePath: `${localBase}/beyond-states/`,
		readOnlineExternal: false,
		releaseDate: '2025-09-29'
	}
];
