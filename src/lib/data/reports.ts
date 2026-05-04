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
		releaseDate: '2026-05-01',
		coverImage: '/images/reports/germany-spending-mirage/cover.png',
		readOnlinePath: '/reports/germany-spending-mirage',
		pdfPath: {
			en: '/reports/germany-spending-mirage-en.pdf',
			de: '/reports/germany-spending-mirage-de.pdf'   // German!
		},
		readOnlineExternal: false
	}
];
