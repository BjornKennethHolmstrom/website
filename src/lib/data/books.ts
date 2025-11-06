// src/lib/data/books.ts

// Beskriver strukturen på ett bok-objekt
type Book = {
	id: string;
	key: string; // Nyckel för översättningsfilen
	cover: string;
	pdfPath: {
		en: string | null;
		sv?: string | null;
	};
	readOnlinePath: string | null;
	hasOnlineVersion: boolean;
	category: string;
	year: string;
	pages: string;
	releaseDate: string; // <-- VIKTIGT: Ett datum för sortering
};

// URL-baser
const ggfBase = 'https://globalgovernanceframeworks.org/resources';
const localBase = '/books'; // För böcker i /static/books

export const booksData: Book[] = [
	{
		id: 'ai',
		key: 'ai',
		cover: '/resources/book-cover-ai.svg',
		pdfPath: { en: `${ggfBase}/AI_as_Catalyst_for_Cognitive_Evolution_-_From_Fragmentation_to_Integration_in_the_Age_of_AI.pdf` },
		readOnlinePath: 'https://globalgovernanceframeworks.org/resources/books/ai-as-catalyst-for-cognitive-evolution',
		hasOnlineVersion: true,
		category: 'consciousness',
		year: '2025',
		pages: '236',
		releaseDate: '2025-08-27'
	},
	{
		id: 'global-governance',
		key: 'globalGovernance',
		cover: '/resources/book-cover-global-governance.svg',
		pdfPath: { en: `${ggfBase}/Global_Governance_-_Natural_Steps_Toward_a_Thriving_World.pdf` },
		readOnlinePath: null,
		hasOnlineVersion: false,
		category: 'governance',
		year: '2025',
		pages: '173',
		releaseDate: '2025-02-04'
	},
	{
		id: 'aubi',
		key: 'aubi',
		cover: '/resources/book-cover-aubi.svg',
		pdfPath: {
			en: `${ggfBase}/Adaptive_Universal_Basic_Income_-_A_New_Social_Contract_for_the_21st_Century.pdf`,
			sv: `${ggfBase}/Adaptiv_Universell_Basinkomst_-_Ett_nytt_socialt_kontrakt_för_2000-talet.pdf`
		},
		readOnlinePath: null,
		hasOnlineVersion: false,
		category: 'economics',
		year: '2025',
		pages: '136',
		releaseDate: '2025-02-13' // Gissat datum, ändra detta!
	},
	{
		id: 'capital-weaver',
		key: 'capitalWeaver',
		cover: '/resources/book-cover-the-capital-weaver.svg',
		pdfPath: { en: `${ggfBase}/The_Capital_Weaver_-_A_Practical_Guide_to_Regenerative_Investing.pdf` },
		readOnlinePath: 'https://globalgovernanceframeworks.org/resources/books/the-capital-weaver',
		hasOnlineVersion: true,
		category: 'methodology',
		year: '2025',
		pages: '362',
		releaseDate: '2025-09-11' // Gissat datum, ändra detta!
	},
	{
		id: 'optimizing-reality',
		key: 'optimizingReality',
		cover: '/resources/book-cover-optimizing-reality.svg',
		pdfPath: { en: `${ggfBase}/Optimizing_Reality.pdf` },
		readOnlinePath: null,
		hasOnlineVersion: false,
		category: 'systems',
		year: '2025',
		pages: '95',
		releaseDate: '2025-02-02'
	},
	{
		id: 'reality-sovereignty',
		key: 'realitySovereignty',
		cover: '/resources/book-cover-reality-sovereignty-and-consciousness.svg',
		pdfPath: { en: `${ggfBase}/Reality,_Sovereignty,_and_Consciousness.pdf` },
		readOnlinePath: null,
		hasOnlineVersion: false,
		category: 'consciousness',
		year: '2025',
		pages: '164',
		releaseDate: '2025-01-01'
	},
	{
		id: 'regenerative-reciprocity',
		key: 'regenerativeReciprocity',
		cover: '/resources/book-cover-regenerative-reciprocity.svg',
		pdfPath: {
			en: `${ggfBase}/Regenerative_Reciprocity_-_Systems,_Spirituality,_and_the_Ethics_of_Sustenance_in_a_Diverse_World.pdf`
		},
		readOnlinePath: null,
		hasOnlineVersion: false,
		category: 'sustainability',
		year: '2025',
		pages: '214',
		releaseDate: '2025-02-10'
	},
	{
		id: 'lmci',
		key: 'lmci',
		cover: '/resources/book-cover-lmci.svg',
		pdfPath: { en: `${ggfBase}/Love,_Meaning,_Connection_-_A_New_Index_for_Measuring_What_Matters.pdf` },
		readOnlinePath: null,
		hasOnlineVersion: false,
		category: 'metrics',
		year: '2025',
		pages: '222',
		releaseDate: '2025-02-24'
	},
	{
		id: 'being',
		key: 'being',
		cover: '/resources/book-cover-being.svg',
		pdfPath: { en: `${ggfBase}/Being_-_A_Tapestry_of_Existence.pdf` },
		readOnlinePath: null,
		hasOnlineVersion: false,
		category: 'philosophy',
		year: '2025',
		pages: '174',
		releaseDate: '2025-02-21'
	},
	// --- LOKALA (Wordpress) Böcker ---
	{
		id: 'beyond-separation',
		key: 'beyondSeparation',
		cover: '/resources/book-cover-beyond-separation.svg',
		pdfPath: { en: `${localBase}/Beyond_Separation_Systems_Thinking_and_Nonduality.pdf` },
		readOnlinePath: null,
		hasOnlineVersion: false,
		category: 'consciousness',
		year: '2025',
		pages: '180',
		releaseDate: '2025-03-09'
	},
	{
		id: 'divine-system',
		key: 'divineSystem',
		cover: '/resources/book-cover-the-divine-system.svg',
		pdfPath: { en: `${localBase}/The_Divine_System_A_Systems_Thinking_Approach_to_God.pdf` },
		readOnlinePath: null,
		hasOnlineVersion: false,
		category: 'philosophy',
		year: '2025',
		pages: '210',
		releaseDate: '2025-02-06'
	},
	{
		id: 'mystical-math',
		key: 'mysticalMath',
		cover: '/resources/book-cover-mystical-mathematics.svg',
		pdfPath: { en: `${localBase}/Mystical_Mathematics_Where_Number_Meets_Being.pdf` },
		readOnlinePath: null,
		hasOnlineVersion: false,
		category: 'philosophy',
		year: '2025',
		pages: '190',
		releaseDate: '2025-03-22'
	}
];
