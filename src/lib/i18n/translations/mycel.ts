export const mycelTranslations = {
	en: {
		hero: {
			title: 'Mycel',
			tagline: 'A coordination substrate for living communities'
		},
		intro: {
			whatTitle: 'What it is',
			whatP1: 'Mycel is a lightweight coordination network inspired by mycelium — the underground fungal networks that connect forests, route nutrients, and maintain resilience without any central organism in charge.',
			whatP2: 'It is not a social media platform. It is infrastructure that quietly makes real-world coordination easier, works when the internet doesn\'t, and is designed to <strong>strengthen human relationships rather than substitute for them</strong>.',
			problemTitle: 'The problem it addresses',
			problemP1: 'Current platforms monetize attention, amplify anxiety, and simulate connection without providing it. The result is epidemic loneliness alongside compulsive engagement — people more connected than ever and more isolated than ever.',
			problemP2: 'Mycel is designed around a different question: <em>what would infrastructure look like if its goal was to get you off the app and into the world?</em>'
		},
		how: {
			title: 'How it works',
			mapTitle: 'The ambient map',
			mapP1: 'The main view is not a feed. It is a soft, living map of presence: who is around, what they have to offer, what they need. You sit at the center. Connections to your peers radiate outward, thickening where real exchange happens.',
			twoSpeedTitle: 'Two-speed signaling',
			ambientName: 'Ambient layer — slow',
			ambientDesc: 'Presence, resource availability, community mood. No urgency. Like knowing your neighbors\' general state without constant contact.',
			activeName: 'Active layer — fast',
			activeDesc: 'Encrypted direct coordination — a need, an offer, a crisis signal. Appears when something requires action. Dissolves when it\'s done.',
			trustTitle: 'Trust-weighted topology',
			trustP1: 'Connections strengthen with meaningful exchange history and atrophy without it. Bots and noise are starved of visibility organically — no moderation team, no algorithm, just organic topology.',
			antiTitle: 'Anti-addiction by design',
			antiP1: 'No engagement algorithms. No notification dark patterns. No metrics that create status competition. Presence events expire. The network rests when nothing is happening.',
			shovel: 'The goal is a tool people pick up when they need it and put down without difficulty — like a good shovel.'
		},
		guide: {
			title: 'Getting started',
			step1Title: '1. Open the app',
			step1P1: 'Visit the link below on your phone or computer. The app works in any modern browser — no app store needed.',
			step1P2: 'On your first visit, tap <strong>Create new identity</strong>. Your key is generated on your device and never leaves it.',
			step2Title: '2. Add a peer',
			step2P1: 'Tap the <strong>+</strong> button in the top right. If you\'re standing next to someone, show them your QR code and have them scan it — or scan theirs.',
			step2P2: 'You can also paste a key manually if someone sends it to you via any channel.',
			step3Title: '3. Set your presence',
			step3P1: 'Tap the bar at the bottom (or tap your own node in the center of the map). Set your capacity, mood, and what you can offer or could use.',
			step3P2: 'Your presence is broadcast to peers and expires after one hour. The app quietly republishes while it\'s open.',
			step4Title: '4. See your network',
			step4P1: 'The map shows your peers. Node size reflects trust. Colors show capacity: <strong style="color: #5a9e6a;">green</strong> = available, <strong style="color: #8a8e4a;">yellow</strong> = limited, <strong style="color: #666;">grey</strong> = unavailable.',
			step4P2: 'Tap any node to see their details, offers, needs — and send gratitude.',
			step5Title: '5. Coordinate in person',
			step5P1: 'That\'s the point. See that your neighbor has firewood and you need some? Walk over. The app creates reasons to meet, not reasons to stay in the app.'
		},
		tech: {
			title: 'Built on Nostr',
			p1: 'Mycel uses the <strong>Nostr protocol</strong> — simple signed JSON events, decentralized relays, no central authority. Your identity is a cryptographic keypair. No registration, no phone number, no central server.',
			p2: 'All trust scores are computed locally on your device. No server knows your trust graph. Presence events are published to relays and expire automatically.',
			stackTitle: 'Stack',
			stackItems: 'SvelteKit · TypeScript · nostr-tools · Canvas · Tailwind CSS'
		},
		links: {
			title: 'Try it',
			openApp: 'Open Mycel',
			viewSource: 'Source on GitHub',
			appHint: 'Works on phone and desktop. Install as a PWA for the best experience.',
			sourceHint: 'AGPL-3.0 — public infrastructure stays public.'
		},
		relation: {
			title: 'Relation to Global Governance Frameworks',
			p1: 'Mycel is developed under the <a href="https://www.globalgovernanceframeworks.org" class="underline hover:opacity-70">Global Governance Frameworks</a> research initiative as the practical infrastructure layer for bioregional coordination, the Social Fabric Framework, and the Hearts care economy. It is designed to stand alone as useful infrastructure regardless of that broader context.'
		},
		footer: {
			status: 'Status: Early prototype — Phase 0 complete. Works for small groups who know each other.',
			contact: 'Questions or want to help test? Reach out:'
		}
	},
	sv: {
		hero: {
			title: 'Mycel',
			tagline: 'Ett koordineringssubstrat för levande samhällen'
		},
		intro: {
			whatTitle: 'Vad det är',
			whatP1: 'Mycel är ett lätt koordineringsnätverk inspirerat av mycel — de underjordiska svampnätverk som kopplar samman skogar, leder näring och upprätthåller motståndskraft utan någon central organism.',
			whatP2: 'Det är inte en social medieplattform. Det är infrastruktur som tyst gör samordning i verkliga livet enklare, fungerar när internet inte gör det, och är designat för att <strong>stärka mänskliga relationer istället för att ersätta dem</strong>.',
			problemTitle: 'Problemet det adresserar',
			problemP1: 'Dagens plattformar monetariserar uppmärksamhet, förstärker ångest och simulerar kontakt utan att erbjuda den. Resultatet är epidemisk ensamhet bredvid tvångsmässigt engagemang — människor mer uppkopplade än någonsin och mer isolerade än någonsin.',
			problemP2: 'Mycel utgår från en annan fråga: <em>hur skulle infrastruktur se ut om målet var att få dig bort från appen och ut i världen?</em>'
		},
		how: {
			title: 'Hur det fungerar',
			mapTitle: 'Den levande kartan',
			mapP1: 'Huvudvyn är inte ett flöde. Det är en mjuk, levande karta över närvaro: vilka som finns i närheten, vad de kan erbjuda, vad de behöver. Du sitter i mitten. Kopplingar till dina kontakter strålar utåt och stärks där verkligt utbyte sker.',
			twoSpeedTitle: 'Signalering i två hastigheter',
			ambientName: 'Omgivningslager — långsamt',
			ambientDesc: 'Närvaro, tillgängliga resurser, stämningen i grannskapet. Ingen brådska. Som att veta hur dina grannar har det utan ständig kontakt.',
			activeName: 'Aktivt lager — snabbt',
			activeDesc: 'Krypterad direktsamordning — ett behov, ett erbjudande, en krissignal. Dyker upp när något kräver handling. Försvinner när det är klart.',
			trustTitle: 'Tillitsviktad topologi',
			trustP1: 'Kopplingar stärks med meningsfullt utbyte och försvagas utan det. Bottar och brus svälts ut ur synlighet organiskt — ingen moderering, ingen algoritm, bara organisk topologi.',
			antiTitle: 'Antiberoendedesign',
			antiP1: 'Inga engagemangsalgoritmer. Inga notifikationsmönster som skapar beroende. Inga mätetal som skapar statuskonkurrens. Närvarohändelser löper ut. Nätverket vilar när inget händer.',
			shovel: 'Målet är ett verktyg som människor tar upp när de behöver det och lägger ner utan svårighet — som en bra spade.'
		},
		guide: {
			title: 'Kom igång',
			step1Title: '1. Öppna appen',
			step1P1: 'Besök länken nedan på din telefon eller dator. Appen fungerar i alla moderna webbläsare — ingen appbutik behövs.',
			step1P2: 'Vid ditt första besök, tryck på <strong>Skapa ny identitet</strong>. Din nyckel skapas på din enhet och lämnar den aldrig.',
			step2Title: '2. Lägg till en kontakt',
			step2P1: 'Tryck på <strong>+</strong>-knappen uppe till höger. Om ni står bredvid varandra, visa din QR-kod och låt den andra skanna — eller skanna deras.',
			step2P2: 'Du kan också klistra in en nyckel manuellt om någon skickar den via valfri kanal.',
			step3Title: '3. Ange din närvaro',
			step3P1: 'Tryck på fältet längst ner (eller tryck på din egen nod i mitten av kartan). Ställ in din kapacitet, stämning, och vad du kan erbjuda eller skulle behöva.',
			step3P2: 'Din närvaro sänds till kontakter och löper ut efter en timme. Appen återpublicerar tyst medan den är öppen.',
			step4Title: '4. Se ditt nätverk',
			step4P1: 'Kartan visar dina kontakter. Nodstorlek speglar tillit. Färger visar kapacitet: <strong style="color: #5a9e6a;">grön</strong> = tillgänglig, <strong style="color: #8a8e4a;">gul</strong> = begränsad, <strong style="color: #666;">grå</strong> = ej tillgänglig.',
			step4P2: 'Tryck på valfri nod för att se detaljer, erbjudanden, behov — och skicka tacksamhet.',
			step5Title: '5. Samordna på plats',
			step5P1: 'Det är hela poängen. Ser du att din granne har ved och du behöver? Gå dit. Appen skapar anledningar att träffas, inte anledningar att stanna i appen.'
		},
		tech: {
			title: 'Byggt på Nostr',
			p1: 'Mycel använder <strong>Nostr-protokollet</strong> — enkla signerade JSON-händelser, decentraliserade reläer, ingen central auktoritet. Din identitet är ett kryptografiskt nyckelpar. Ingen registrering, inget telefonnummer, ingen central server.',
			p2: 'Alla tillitspoäng beräknas lokalt på din enhet. Ingen server känner till din tillitsgraf. Närvarohändelser publiceras till reläer och löper ut automatiskt.',
			stackTitle: 'Teknikstack',
			stackItems: 'SvelteKit · TypeScript · nostr-tools · Canvas · Tailwind CSS'
		},
		links: {
			title: 'Prova',
			openApp: 'Öppna Mycel',
			viewSource: 'Källkod på GitHub',
			appHint: 'Fungerar på telefon och dator. Installera som PWA för bästa upplevelse.',
			sourceHint: 'AGPL-3.0 — publik infrastruktur förblir publik.'
		},
		relation: {
			title: 'Relation till Global Governance Frameworks',
			p1: 'Mycel utvecklas under forskningsinitiativet <a href="https://www.globalgovernanceframeworks.org" class="underline hover:opacity-70">Global Governance Frameworks</a> som det praktiska infrastrukturlagret för bioregional samordning, Social Fabric Framework och Hearts-omsorgsekonomin. Det är designat att fungera som användbar infrastruktur oberoende av det bredare sammanhanget.'
		},
		footer: {
			status: 'Status: Tidig prototyp — Fas 0 klar. Fungerar för små grupper som känner varandra.',
			contact: 'Frågor eller vill hjälpa till att testa? Hör av dig:'
		}
	}
};
