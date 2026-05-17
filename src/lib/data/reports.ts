// src/lib/data/reports.ts

export interface Report {
	id: string;
	key: string;
	category: string;
	year: number;
	pages: number;
	readTime: {
		en: string;
		sv: string;
	};
	version?: string;
	releaseDate: string;
	coverImage?: string;
	readOnlinePath: string;
	pdfPath?: Record<string, string>;   // e.g. { en: '...', de: '...' }
	readOnlineExternal?: boolean;
 emoji?: string; 
}

export const reportsData: Report[] = [
	{
		id: 'ai-coherence-velocity-trap',
		key: 'aiCoherenceVelocityTrap',
		emoji: '🤖',
		category: 'organization',
		year: 2026,
		pages: 68,
		readTime: {
			en: '60–75 min',
			sv: '60–75 min'
		},
		version: '1.0',
		releaseDate: '2026-05-15',
		coverImage: '/images/reports/ai-coherence-velocity-trap/cover.png',
		readOnlinePath: '/reports/ai-coherence-velocity-trap',
		pdfPath: {
			en: '/reports/ai-coherence-velocity-trap-en.pdf'
		},
		readOnlineExternal: false
	},
	{
		id: 'healthcare-clinical-observability-gap',
		key: 'healthcareClinicalObservabilityGap',
		emoji: '🏥',
		category: 'organization',
		year: 2026,
		pages: 75,
		readTime: {
			en: '70–85 min',
			sv: '70–85 min'
		},
		version: '1.0',
		releaseDate: '2026-05-16',
		coverImage: '/images/reports/healthcare-clinical-observability-gap/cover.png',
		readOnlinePath: '/reports/healthcare-clinical-observability-gap',
		pdfPath: {
			en: '/reports/healthcare-clinical-observability-gap-en.pdf'
		},
		readOnlineExternal: false
	},
	{
		id: 'universities-integration-deficit',
		key: 'universitiesIntegrationDeficit',
		emoji: '🎓',
		category: 'organization',
		year: 2026,
		pages: 92,
		readTime: {
			en: '75–90 min',
			sv: '75–90 min'
		},
		version: '1.0',
		releaseDate: '2026-05-17',
		coverImage: '/images/reports/universities-integration-deficit/cover.png',
		readOnlinePath: '/reports/universities-integration-deficit',
		pdfPath: {
			en: '/reports/universities-integration-deficit-en.pdf'
		},
		readOnlineExternal: false
	},
	{
		id: 'germany-spending-mirage',
		key: 'germanySpendingMirage',
  emoji: '🇩🇪',
		category: 'country',
		year: 2026,
		pages: 45,
		readTime: {
			en: '35–45 min',
			sv: '35–45 min'
		},
		version: '1.0',
		releaseDate: '2026-05-04',
		coverImage: '/images/reports/germany-spending-mirage/cover.png',
		readOnlinePath: '/reports/germany-spending-mirage',
		pdfPath: {
			en: '/reports/germany-spending-mirage-en.pdf',
			de: '/reports/germany-spending-mirage-de.pdf'   // German!
		},
		readOnlineExternal: false
	},
 {
		id: 'france-decisiveness-mirage',
		key: 'franceDecisivenessMirage',
  emoji: '🇫🇷',
		category: 'country',
		year: 2026,
		pages: 52,
		readTime: {
			en: '40–50 min',
			sv: '40–50 min'
		},
		version: '1.0',
		releaseDate: '2026-05-04',
		coverImage: '/images/reports/france-decisiveness-mirage/cover.png',
		readOnlinePath: '/reports/france-decisiveness-mirage',
		pdfPath: {
			en: '/reports/france-decisiveness-mirage-en.pdf',
			fr: '/reports/france-decisiveness-mirage-fr.pdf'
		},
		readOnlineExternal: false
	},
 {
     id: 'sweden-competence-trap',
     key: 'swedenCompetenceTrap',
     emoji: '🇸🇪',
     category: 'country',
     year: 2026,
     pages: 56,
     readTime: {
         en: '40–50 min',
         sv: '40–50 min'
     },
     version: '1.0',
     releaseDate: '2026-07-12',
     coverImage: '/images/reports/sweden-competence-trap/cover.png',
     readOnlinePath: '/reports/sweden-competence-trap',
     pdfPath: {
         en: '/reports/sweden-competence-trap-en.pdf',
         sv: '/reports/sweden-competence-trap-sv.pdf'
     },
     readOnlineExternal: false
 },
 {
     id: 'india-leap-lag-cycle',
     key: 'indiaLeapLagCycle',
     emoji: '🇮🇳',
     category: 'country',
     year: 2026,
     pages: 55,
     readTime: {
         en: '40–50 min',
         sv: '40–50 min'
     },
     version: '1.0',
     releaseDate: '2026-05-04',
     coverImage: '/images/reports/india-leap-lag-cycle/cover.png',
     readOnlinePath: '/reports/india-leap-lag-cycle',
     pdfPath: {
         en: '/reports/india-leap-lag-cycle-en.pdf',
         hi: '/reports/india-leap-lag-cycle-hi.pdf',
         ta: '/reports/india-leap-lag-cycle-ta.pdf'
     },
     readOnlineExternal: false
 },
 {
     id: 'eu-coherence-mirage',
     key: 'euCoherenceMirage',
     emoji: '🇪🇺',
     category: 'country',
     year: 2026,
     pages: 61,
     readTime: {
         en: '50–60 min',
         sv: '50–60 min'
     },
     version: '1.0',
     releaseDate: '2026-05-04',
     coverImage: '/images/reports/eu-coherence-mirage/cover.png',
     readOnlinePath: '/reports/eu-coherence-mirage',
     pdfPath: {
         en: '/reports/eu-coherence-mirage-en.pdf'
     },
     readOnlineExternal: false
 },
 {
     id: 'uk-control-mirage',
     key: 'ukControlMirage',
     emoji: '🇬🇧',
     category: 'country',
     year: 2026,
     pages: 62,
     readTime: {
         en: '50–60 min',
         sv: '50–60 min'
     },
     version: '1.0',
     releaseDate: '2026-05-05',
     coverImage: '/images/reports/uk-control-mirage/cover.png',
     readOnlinePath: '/reports/uk-control-mirage',
     pdfPath: {
         en: '/reports/uk-control-mirage-en.pdf'
     },
     readOnlineExternal: false
 },
 {
     id: 'subsidiarity-deficit',
     key: 'subsidiarityDeficit',
     category: 'synthesis',
     emoji: '🧩',
     year: 2026,
     pages: 60,
     readTime: {
         en: '60–75 min',
         sv: '60–75 min'
     },
     version: '1.0',
     releaseDate: '2026-10-01',
     coverImage: '/images/reports/subsidiarity-deficit/cover.png',
     readOnlinePath: '/reports/subsidiarity-deficit',
     pdfPath: {
         en: '/reports/subsidiarity-deficit-en.pdf'
     },
     readOnlineExternal: false
 },
 {
     id: 'brazil-accumulation-deficit',
     key: 'brazilAccumulationDeficit',
     emoji: '🇧🇷',
     category: 'country',
     year: 2026,
     pages: 67,
     readTime: {
         en: '60–75 min',
         sv: '60–75 min'
     },
     version: '1.0',
     releaseDate: '2026-05-05',
     coverImage: '/images/reports/brazil-accumulation-deficit/cover.png',
     readOnlinePath: '/reports/brazil-accumulation-deficit',
     pdfPath: {
         en: '/reports/brazil-accumulation-deficit-en.pdf',
         pt_br: '/reports/brazil-accumulation-deficit-pt_br.pdf'
     },
     readOnlineExternal: false
 },
 {
     id: 'us-integration-deficit',
     key: 'usIntegrationDeficit',
     emoji: '🇺🇸',
     category: 'country',
     year: 2026,
     pages: 71,
     readTime: {
         en: '60–75 min',
         sv: '60–75 min'
     },
     version: '1.0',
     releaseDate: '2026-05-06',
     coverImage: '/images/reports/us-integration-deficit/cover.png',
     readOnlinePath: '/reports/us-integration-deficit',
     pdfPath: {
         en: '/reports/us-integration-deficit-en.pdf'
     },
     readOnlineExternal: false
 },
 {
     id: 'finland-throughput-constraint',
     key: 'finlandThroughputConstraint',
     category: 'country',
     year: 2026,
     pages: 58,
     readTime: {
         en: '55–65 min',
         sv: '55–65 min'
     },
     version: '1.0',
     releaseDate: '2026-05-06',
     coverImage: '/images/reports/finland-throughput-constraint/cover.png',
     readOnlinePath: '/reports/finland-throughput-constraint',
     pdfPath: {
         en: '/reports/finland-throughput-constraint-en.pdf',
         fi: '/reports/finland-throughput-constraint-fi.pdf',
         sv: '/reports/finland-throughput-constraint-sv.pdf'
     },
     readOnlineExternal: false
 },
 {
     id: 'russia-legibility-deficit',
     key: 'russiaLegibilityDeficit',
     category: 'country',
     year: 2026,
     pages: 32,
     readTime: {
         en: '35–45 min',
         sv: '35–45 min'
     },
     version: '1.0',
     releaseDate: '2026-05-06',
     coverImage: '/images/reports/russia-legibility-deficit/cover.png',
     readOnlinePath: '/reports/russia-legibility-deficit',
     pdfPath: {
         en: '/reports/russia-legibility-deficit-en.pdf',
         ru: '/reports/russia-legibility-deficit-ru.pdf'
     },
     readOnlineExternal: false
 },
 {
     id: 'china-calibration-deficit',
     key: 'chinaCalibrationDeficit',
     emoji: '🇨🇳',
     category: 'country',
     year: 2026,
     pages: 77,
     readTime: {
         en: '65–80 min',
         sv: '65–80 min'
     },
     version: '1.0',
     releaseDate: '2026-05-07',
     coverImage: '/images/reports/china-calibration-deficit/cover.png',
     readOnlinePath: '/reports/china-calibration-deficit',
     pdfPath: {
         en: '/reports/china-calibration-deficit-en.pdf',
         zh: '/reports/china-calibration-deficit-zh.pdf'
     },
     readOnlineExternal: false
 },
	{
		id: 'japan-continuity-trap',
		key: 'japanContinuityTrap',
		emoji: '🇯🇵',
		category: 'country',
		year: 2026,
		pages: 80,
		readTime: {
			en: '65–80 min',
			sv: '65–80 min'
		},
		version: '1.0',
		releaseDate: '2026-05-08',
		coverImage: '/images/reports/japan-continuity-trap/cover.png',
		readOnlinePath: '/reports/japan-continuity-trap',
		pdfPath: {
			en: '/reports/japan-continuity-trap-en.pdf',
			ja: '/reports/japan-continuity-trap-ja.pdf'
		},
		readOnlineExternal: false
	},
	{
		id: 'nigeria-substrate-deficit',
		key: 'nigeriaSubstrateDeficit',
		emoji: '🇳🇬',
		category: 'country',
		year: 2026,
		pages: 78,
		readTime: {
			en: '65–80 min',
			sv: '65–80 min'
		},
		version: '1.0',
		releaseDate: '2026-05-09',
		coverImage: '/images/reports/nigeria-substrate-deficit/cover.png',
		readOnlinePath: '/reports/nigeria-substrate-deficit',
		pdfPath: {
			en: '/reports/nigeria-substrate-deficit-en.pdf'
		},
		readOnlineExternal: false
	},
	{
		id: 'israel-boundary-deficit',
		key: 'israelBoundaryDeficit',
		emoji: '🇮🇱',
		category: 'country',
		year: 2026,
		pages: 78,
		readTime: {
			en: '65–80 min',
			sv: '65–80 min'
		},
		version: '1.0',
		releaseDate: '2026-05-10',
		coverImage: '/images/reports/israel-boundary-deficit/cover.png',
		readOnlinePath: '/reports/israel-boundary-deficit',
		pdfPath: {
			en: '/reports/israel-boundary-deficit-en.pdf',
			he: '/reports/israel-boundary-deficit-he.pdf'
		},
		readOnlineExternal: false
	},
	{
		id: 'spain-transition-trap',
		key: 'spainTransitionTrap',
		emoji: '🇪🇸',
		category: 'country',
		year: 2026,
		pages: 74,
		readTime: {
			en: '70–85 min',
			sv: '70–85 min'
		},
		version: '1.0',
		releaseDate: '2026-05-13',
		coverImage: '/images/reports/spain-transition-trap/cover.png',
		readOnlinePath: '/reports/spain-transition-trap',
		pdfPath: {
			en: '/reports/spain-transition-trap-en.pdf',
			es: '/reports/spain-transition-trap-es.pdf',
			eu: '/reports/spain-transition-trap-eu.pdf'
		},
		readOnlineExternal: false
	}
];

