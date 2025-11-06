// src/lib/data/whitepapers.ts

type Whitepaper = {
	id: string;
	key: string;
	category: string;
	year: string;
	pages: string;
	readTime: string | null;
	version: string | null;
	pdfPath: {
		en: string | null;
		sv?: string | null;
	};
	readOnlinePath: string | null;
	releaseDate: string; // <-- VIKTIGT: Ett datum för sortering
};

const ggfBase = 'https://globalgovernanceframeworks.org';
const wpBase = 'https://bjornkennethholmstrom.wordpress.com';
const localBase = '/whitepapers'; // För filer i /static/whitepapers

export const papersData: Whitepaper[] = [
	{
		id: 'responsiveSociety',
		key: 'responsiveSociety',
		category: 'philosophy',
		year: '2025',
		pages: '60',
		readTime: '45 min',
		version: '1.0',
		pdfPath: { en: `${ggfBase}/resources/whitepapers/The_Responsive_Society_-_Aligning_with_Truth_in_an_Unknown_World.pdf` },
		readOnlinePath: `${ggfBase}/resources/whitepapers/the-responsive-society`,
		releaseDate: '2025-10-04'
	},
	{
		id: 'infiniteParadox',
		key: 'infiniteParadox',
		category: 'governance',
		year: '2025',
		pages: '80',
		readTime: '45 min',
		version: '1.0',
		pdfPath: { en: `${ggfBase}/resources/whitepapers/The_Infinite_Paradox_-_Non-Dual_Ethics_for_Planetary_Governance.pdf` },
		readOnlinePath: `${ggfBase}/resources/whitepapers/the-infinite-paradox`,
		releaseDate: '2025-09-03'
	},
	{
		id: 'regenerativeGovernance',
		key: 'regenerativeGovernance',
		category: 'governance',
		year: '2025',
		pages: '60',
		readTime: '40 min',
		version: '1.0',
		pdfPath: { en: `${ggfBase}/resources/whitepapers/The_Regenerative_Governance_-_Integrating_Hardware_Heart_Nervous_System.pdf` },
		readOnlinePath: `${ggfBase}/resources/whitepapers/the-regenerative-governance`,
		releaseDate: '2025-09-03'
	},
	{
		id: 'beyondFragmentedTruth',
		key: 'beyondFragmentedTruth',
		category: 'methodology',
		year: '2025',
		pages: '77',
		readTime: '45 min',
		version: '1.0',
		pdfPath: { en: `${ggfBase}/resources/whitepapers/Beyond_Fragmented_Truth_-_A_Reasoning_Path_from_Ancient_Wisdom_to_Modern_Governance.pdf` },
		readOnlinePath: `${ggfBase}/resources/whitepapers/beyond-fragmented-truth`,
		releaseDate: '2025-09-01'
	},
	{
		id: 'currencyOfCare',
		key: 'currencyOfCare',
		category: 'economics',
		year: '2025',
		pages: '36',
		readTime: '35 min',
		version: '1.0',
		pdfPath: { en: `${ggfBase}/resources/whitepapers/The_Currency_of_Care_Beyond_UBI.pdf` },
		readOnlinePath: `${ggfBase}/resources/whitepapers/the-currency-of-care`,
		releaseDate: '2025-08-31'
	},
	{
		id: 'cognitiveScaffolding',
		key: 'cognitiveScaffolding',
		category: 'methodology',
		year: '2025',
		pages: '25',
		readTime: '25 min',
		version: '1.8',
		pdfPath: { en: `${ggfBase}/resources/whitepapers/Cognitive_Scaffolding_-_A_Multi-Model_AI_Synthesis_Method.pdf` },
		readOnlinePath: `${ggfBase}/resources/whitepapers/cognitive-scaffolding`,
		releaseDate: '2025-08-25'
	},
	// --- Wordpress Papers (Nu lokala) ---
	{
		id: 'beyondTheDuopoly',
		key: 'beyondTheDuopoly',
		category: 'governance',
		year: '2025',
		pages: '54',
		readTime: null,
		version: null,
		pdfPath: { en: `${localBase}/beyond-the-duopoly.pdf` },
		readOnlinePath: `${localBase}/beyond-the-duopoly/`,
		releaseDate: '2025-09-15'
	},
	{
		id: 'mapOfAwakening',
		key: 'mapOfAwakening',
		category: 'consciousness',
		year: '2025',
		pages: '36',
		readTime: null,
		version: null,
		pdfPath: { en: `${localBase}/collaborative-map-of-awakening.pdf` },
		readOnlinePath: `${localBase}/collaborative-map-of-awakening/`,
		releaseDate: '2025-09-23'
	},
	{
		id: 'beyondStates',
		key: 'beyondStates',
		category: 'consciousness',
		year: '2025',
		pages: '57',
		readTime: null,
		version: null,
		pdfPath: { en: `${localBase}/beyond-states.pdf` },
		readOnlinePath: `${localBase}/beyond-states/`,
		releaseDate: '2025-09-29'
	}
];
