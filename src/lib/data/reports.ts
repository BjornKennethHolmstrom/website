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
}

export const reportsData: Report[] = [
	{
		id: 'germany-spending-mirage',
		key: 'germanySpendingMirage',
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
	}
];

/* TODO: Publish 12/6
 {
     id: 'sweden-competence-trap',
     key: 'swedenCompetenceTrap',
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
 }
 */
