import { papersEn, papersSv } from '../../data/syntheses';

export const synthesesTranslations = {
  en: {
    synthesesHubTitle: 'The Clouded Mirror',
    synthesesHubSubtitle: "A Reader's Guide",
    synthesesHubIntro:
      "Eight pathways into the same diagnosis. Each is written for a different audience—each is grounded in the same structural architecture. Choose the one that speaks to you.",
    synthesesHubFooter:
      "These syntheses are built on the Governance as Engineering working papers and country reports. For the full technical framework, visit the",
    synthesesHubFooterLinkLabel: "Working Papers",
    furtherReadingTitle: 'Technical Foundations',
    furtherReadingIntro: 'The working papers behind this essay, and what each one adds:',
    digestTitle: 'The series in ten findings',
    papersDigest: [
      { ...papersEn.I, digest: 'A slow institution trying to manage a fast crisis always arrives out of phase — amplifying instability rather than correcting it. Response speed is a structural property of the architecture, not a matter of effort or political will.' },
      { ...papersEn.II, digest: 'No single institution can handle both a flooding crisis this week and a demographic shift unfolding over decades. Stable governance requires different controllers at different scales, each handling only what it can actually reach.' },
      { ...papersEn.III, digest: 'After roughly three layers of representation — citizen to councillor to parliament to cabinet — the noise from aggregation exceeds the surviving signal. What politicians hear bears little resemblance to what citizens actually want, regardless of how competent or honest the representatives are.' },
      { ...papersEn.IV, digest: 'What determines whether a shared resource survives is not how strictly the rules are enforced but how well the governance system can observe the resource. Annual aggregate surveys authorise destruction they cannot perceive. Communities embedded in the landscape, watching continuously from multiple angles, do not.' },
      { ...papersEn.V, digest: 'When several architectural failures coincide, their costs multiply rather than add. A governance system carrying spatial blindness, slow feedback, preference invisibility, and a narrow dashboard at the same time can be very active while barely functioning — and cannot see this in its own outputs.' },
      { ...papersEn.VI, digest: 'Any system that narrows its attention to a single scorecard eventually destroys the conditions that made the scorecard meaningful. GDP stops tracking welfare. Engagement stops tracking value. This is Goodhart\'s Law — and it applies to governance dashboards, to AI reward functions, and to any institution optimising a simplified model of a complex world.' },
      { ...papersEn.VII, digest: 'Across fifteen country studies, reforms that adjust the rules without changing the underlying architecture are absorbed by it. The institutions targeted have immune systems — predictable adaptive responses that dilute, capture, or outlast the reform. The only reliable entry point is a protected space where a different architecture can demonstrate results.' },
      { ...papersEn.VIII, digest: 'The gap between what a governance system can perceive and what it actually needs to perceive can be estimated from observable data. This paper builds the measurement framework — so the diagnosis is not just qualitative, but trackable, comparable, and falsifiable.' },
      { ...papersEn.IX, digest: 'Those who benefit from the current architecture are embedded in it — with shorter response times and more institutional levers than any reform coalition. A system can look functional right up to the point where it has quietly lost the capacity to change itself. That point of no return can arrive before any crisis is visible.' },
      { ...papersEn.X, digest: 'When every monitoring system shares the same models and training data, their blind spots become identical — and invisible to all of them at once. A handful of genuinely independent observers, protected from the pressures that drive conformity, provides most of the protection against this. You don\'t need infinite diversity; you need a few voices that are actually different.' },
    ],
    synthesesItems: [
      {
        slug: 'we-see-you',
        title: 'We See You',
        audience: 'For those who have no energy left for theories',
        description: 'The foundation of all governance is the body, the breath, the safety of a place to sleep.',
        borderColor: 'border-l-stone-500 dark:border-l-stone-400',
        furtherReading: [
                  { ...papersEn.III, reason: 'Why the system cannot hear you: after three layers of representation, the noise exceeds the signal, and what you actually need never reaches the people who decide.' },
                  { ...papersEn.V, reason: 'Why help so often fails to arrive: when several architectural failures coincide, their costs multiply, and a system can be busy producing outputs while delivering almost nothing.' },
                  { ...papersEn.VII, reason: 'Where the protected spaces come from: the case for building places where the observation channel is short enough to see a person, not a statistic.' },
                ],
      },
      {
        slug: 'the-spirits-the-state-cannot-hear',
        title: 'The Spirits the State Cannot Hear',
        audience: 'For keepers of ancestral traditions',
        description: "Why the state's deafness to the sacred is not a cultural oversight but a structural catastrophe.",
        borderColor: 'border-l-purple-500 dark:border-l-purple-400',
        furtherReading: [
                  { ...papersEn.IV, reason: 'The simulation behind the claim: indigenous bioregional governance reduces ecological collapse risk from over ninety percent to under four — because it perceives dimensions the state cannot.' },
                  { ...papersEn.VI, reason: 'Value architectures as observation channels: the formal account of how a system\'s values determine what it can perceive — and what the sacred as an excluded dimension means structurally.' },
                  { ...papersEn.X, reason: 'Why the keepers must be protected: a civilisation needs structurally independent observers, and traditions that perceive what the consensus cannot are exactly that.' },
                ],
      },
      {
        slug: 'the-dashboard-was-green',
        title: 'The Dashboard Was Green',
        audience: 'For climate activists and ecological thinkers',
        description: 'How narrow observation channels authorise the destruction they cannot perceive.',
        borderColor: 'border-l-green-500 dark:border-l-green-400',
        furtherReading: [
                  { ...papersEn.IV, reason: 'The full commons analysis behind the cod story: why state management can underperform open access, and why Ostrom\'s principles work — they open observation channels.' },
                  { ...papersEn.VI, reason: 'The formal definition of the Variety Gap and the Goodhart-Ashby synthesis: why optimising a narrow dashboard destroys the correlations that made it informative.' },
                  { ...papersEn.II, reason: 'Why the slow variable is invisible: no single-scale controller can cover fast shocks, seasonal cycles, and decadal trends at once — only nested, fractal architectures can.' },
                  { ...papersEn.X, reason: 'The new fragility: when every monitoring system shares the same models and data, their blind spots become correlated — and the next collapse is invisible to all of them at once.' },
                ],
      },
      {
        slug: 'the-blindness-of-power',
        title: 'The Blindness of Power',
        audience: 'For those watching the rise of strongman politics',
        description: 'Why control-obsessed governance is not a symptom of strength but of terminal perceptual collapse.',
        borderColor: 'border-l-red-500 dark:border-l-red-400',
        furtherReading: [
                  { ...papersEn.III, reason: 'The mathematics of the narrowed channel: why routing all signals through one node destroys the variety they carry, however capable the leader.' },
                  { ...papersEn.VII, reason: 'The immune system across fifteen jurisdictions: the Control-Blindness-Shock Loop and its cousins, documented from Russia and China to democratic systems.' },
                  { ...papersEn.IX, reason: 'Incumbent resistance modelled as an adaptive controller: why it structurally outpaces reform coalitions, and why forcing change faster than the system\'s latency allows triggers crisis rather than correction.' },
                ],
      },
      {
        slug: 'the-democracy-that-cant-hear-you',
        title: 'The Democracy That Can’t Hear You',
        audience: 'For democratic reformers and deliberative practitioners',
        description: 'Why representation chains longer than three layers destroy the signal they are meant to transmit.',
        borderColor: 'border-l-blue-500 dark:border-l-blue-400',
        furtherReading: [
                  { ...papersEn.III, reason: 'The result this essay rests on: the constitutional unobservability threshold, crossed at roughly two to three representation layers, with the full simulation and its parameters.' },
                  { ...papersEn.I, reason: 'The latency foundation: why every controller has a gain ceiling set by its response delay, and what that means for institutions answering this year\'s problems with last year\'s information.' },
                  { ...papersEn.IX, reason: 'Why shortening the chain is resisted: reforms that threaten the layers are absorbed by them — and the design principles for transitions that survive.' },
                ],
      },
      {
        slug: 'from-goodhart-to-governance',
        title: 'From Goodhart to Governance',
        audience: 'For AI safety researchers and tech governance practitioners',
        description: 'Goodhart’s Law is not just about reward hacking—it is the signature of any low‑dimensional optimisation.',
        borderColor: 'border-l-orange-500 dark:border-l-orange-400',
        furtherReading: [
                  { ...papersEn.VI, reason: 'The Goodhart-Ashby synthesis in full: objective functions as observation architectures, and the formal claim that low-dimensional optimisation destroys its own perceptual ground.' },
                  { ...papersEn.X, reason: 'The paper written for this audience: why consolidation onto shared foundation models and training corpora collapses the observer ensemble, with the ensemble variance equation and the simulation behind the warning.' },
                  { ...papersEn.IX, reason: 'Why institutional adaptation may be too slow even when the risk is identified: transition bandwidth, and the trap where a system still functions but can no longer redesign itself.' },
                  { ...papersEn.V, reason: 'The compounding result: why simultaneous architectural failures multiply rather than add, leaving a busy system governing noise.' },
                ],
      },
      {
        slug: 'the-perception-threshold',
        title: 'The Perception Threshold',
        audience: 'For systems thinkers and integral practitioners',
        description: 'The meta‑governance imperative as the evolutionary challenge of our civilisation.',
        borderColor: 'border-l-yellow-500 dark:border-l-yellow-400',
        furtherReading: [
                  { ...papersEn.VI, reason: 'The meta-governance argument formalised: value architectures that can evolve, and the variety gap as the measure of what a stage of governance cannot yet perceive.' },
                  { ...papersEn.IX, reason: 'The friction between stages: why structurally superior architectures don\'t simply win — incumbent resistance, transition bandwidth, and the point of no return where a system loses the capacity to evolve.' },
                  { ...papersEn.X, reason: 'What second-tier actually requires: not a single integral observer but a structurally protected ensemble of decorrelated ones — the engineering content of the leap.' },
                ],
      },
      {
        slug: 'the-mirror-of-the-earth',
        title: 'The Mirror of the Earth',
        audience: 'For planetary thinkers and deep ecologists',
        description: 'Why the Earth is speaking and our institutions cannot hear it—and what Earth‑attuned governance requires.',
        borderColor: 'border-l-teal-500 dark:border-l-teal-400',
        furtherReading: [
                  { ...papersEn.IV, reason: 'The commons result at the heart of the essay: observation dimensionality, not enforcement capacity, determines whether ecosystems survive their governance.' },
                  { ...papersEn.II, reason: 'Why institutions are deaf to the slow signals: the frequency-latency constraint, and the nested architectures that close all frequency bands at once.' },
                  { ...papersEn.X, reason: 'Planetary sensing as an ensemble problem: why Earth observation consolidated into shared models and pipelines reproduces, at global scale, the blindness the essay describes.' },
                ],
      },
      {
        slug: 'the-clouded-mirror',
        title: 'The Clouded Mirror',
        audience: 'For anyone wanting the complete argument',
        description: 'The full public‑facing synthesis of the Governance as Engineering research programme.',
        borderColor: 'border-l-amber-500 dark:border-l-amber-400',
        furtherReading: [
                  { ...papersEn.VI, reason: 'The conceptual centre of the series: the variety gap and the Goodhart-Ashby synthesis.' },
                  { ...papersEn.VIII, reason: 'From concept to measurement: the parametric framework and composite index, applied across the series\' country and organisational cases.' },
                  { ...papersEn.IX, reason: 'The dynamics of change: transition bandwidth, incumbent resistance, and the limits of peaceful architectural reform.' },
                  { ...papersEn.X, reason: 'The closing argument: why everything else depends on maintaining a diverse, decorrelated ensemble of observers.' },
                  { href: '/working-papers', label: 'The full working paper series', reason: 'Papers I–V build the control-theoretic foundations the synthesis draws on.' },
                ],
      },
    ],
  },
  sv: {
    synthesesHubTitle: 'The Clouded Mirror',
    synthesesHubSubtitle: 'En läsguide',
    synthesesHubIntro:
      'Åtta vägar in i samma diagnos. Varje text är skriven för en specifik målgrupp—alla vilar på samma strukturella arkitektur. Välj den som talar till dig.',
    synthesesHubFooter:
      'Dessa synteser bygger på arbetsdokumenten och landsrapporterna inom Governance as Engineering. För det fullständiga tekniska ramverket, besök',
    furtherReadingTitle: 'Tekniskt ramverk',
    furtherReadingIntro: 'Arbetsdokumenten bakom denna essä, och vad vart och ett tillför:',
    synthesesHubFooterLinkLabel: 'Arbetsdokument',
    digestTitle: 'Serien i tio resultat',
    papersDigest: [
      { ...papersSv.I, digest: 'En långsam institution som försöker hantera en snabb kris anländer alltid i fel fas — och förstärker instabiliteten snarare än att korrigera den. Svarshastigheten är en strukturell egenskap i arkitekturen, inte en fråga om ansträngning eller politisk vilja.' },
      { ...papersSv.II, digest: 'Ingen enskild institution kan hantera både en översvämningskris den här veckan och en demografisk förändring som utspelar sig under decennier. Stabil styrning kräver olika reglernivåer vid olika skalor, där varje nivå bara hanterar det den faktiskt kan nå.' },
      { ...papersSv.III, digest: 'Efter ungefär tre representationslager — medborgare, kommunfullmäktige, riksdag, regering — överstiger bruset från aggregering den kvarvarande signalen. Vad politiker hör liknar föga vad medborgarna faktiskt vill, oavsett hur kompetenta eller ärliga representanterna är.' },
      { ...papersSv.IV, digest: 'Det som avgör om en gemensam resurs överlever är inte hur strikt reglerna efterlevs, utan hur väl styrningssystemet kan observera resursen. Årliga aggregerade mätningar godkänner förstörelse de inte kan uppfatta. Samhällen inbäddade i landskapet, som kontinuerligt följer det från flera håll, gör inte det.' },
      { ...papersSv.V, digest: 'När flera arkitekturfel sammanfaller multipliceras kostnaderna i stället för att adderas. Ett styrningssystem som samtidigt bär rumslig blindhet, långsam återkoppling, preferensosynlighet och ett smalt mätindex kan vara mycket aktivt och knappt fungera — och kan inte se detta i sina egna utdata.' },
      { ...papersSv.VI, digest: 'Varje system som begränsar sin uppmärksamhet till ett enda mätindex förstör till slut de förutsättningar som gjorde indexet meningsfullt. BNP slutar spegla välstånd. Engagemang slutar spegla värde. Det är Goodharts lag — och den gäller styrningens instrumentpaneler, AI-belöningsfunktioner och varje institution som optimerar en förenklad modell av en komplex värld.' },
      { ...papersSv.VII, digest: 'I femton landsstudier absorberas reformer som justerar reglerna utan att förändra den bakomliggande arkitekturen av den. De institutioner som är måltavlor har immunsystem — förutsägbara adaptiva reaktioner som späder ut, kapar eller överlever reformen. Den enda pålitliga ingångspunkten är ett skyddat rum där en annan arkitektur kan visa resultat.' },
      { ...papersSv.VIII, digest: 'Gapet mellan vad ett styrningssystem kan uppfatta och vad det faktiskt behöver uppfatta kan uppskattas från observerbara data. Denna rapport bygger mätramverket — så att diagnosen inte bara är kvalitativ, utan spårbar, jämförbar och falsifierbar.' },
      { ...papersSv.IX, digest: 'De som gynnas av den nuvarande arkitekturen är inbäddade i den — med kortare svarstider och fler institutionella hävstänger än någon reformkoalition. Ett system kan se funktionsdugligt ut ända tills det tyst har förlorat förmågan att förändra sig självt. Den punkten kan nås utan att någon kris är synlig.' },
      { ...papersSv.X, digest: 'När alla övervakningssystem delar samma modeller och träningsdata blir deras blinda fläckar identiska — och osynliga för alla på en gång. En handfull genuint oberoende observatörer, skyddade från de tryck som driver konformitet, ger merparten av skyddet mot detta. Du behöver inte oändlig mångfald; du behöver några röster som faktiskt är annorlunda.' },
    ],
    synthesesItems: [
      {
        slug: 'we-see-you',
        title: 'Vi ser dig',
        audience: 'För den som inte orkar med fler teorier',
        description:
          'All styrning börjar med kroppen, andningen, tryggheten att ha någonstans att sova.',
        borderColor: 'border-l-stone-50 dark:border-l-stone-400',
        furtherReading: [
                  { ...papersSv.III, reason: 'Varför systemet inte kan höra dig: efter tre lager av representation överstiger bruset signalen, och det du faktiskt behöver når aldrig fram till dem som beslutar.' },
                  { ...papersSv.V, reason: 'Varför hjälpen så ofta uteblir: när flera arkitekturfel sammanfaller multipliceras kostnaderna, och ett system kan vara fullt sysselsatt med att producera resultat utan att leverera nästan någonting.' },
                  { ...papersSv.VII, reason: 'Varifrån de skyddade rummen kommer: argumentet för att bygga platser där observationskanalen är kort nog att se en människa, inte en siffra.' },
                ],
      },
      {
        slug: 'the-spirits-the-state-cannot-hear',
        title: 'Andarna som staten inte kan höra',
        audience: 'För bärare av förfädernas traditioner',
        description:
          'Varför statens dövhet för det heliga inte är en kulturell förbiseelse utan en strukturell katastrof.',
        borderColor: 'border-l-purple-500 dark:border-l-purple-400',
        furtherReading: [
                  { ...papersSv.IV, reason: 'Simuleringen bakom påståendet: ursprungsfolkens bioregionala styrning sänker risken för ekologisk kollaps från över nittio procent till under fyra — eftersom den uppfattar dimensioner staten inte kan se.' },
                  { ...papersSv.VI, reason: 'Värdearkitekturer som observationskanaler: den formella redogörelsen för hur ett systems värden avgör vad det kan uppfatta — och vad det heliga som utesluten dimension betyder strukturellt.' },
                  { ...papersSv.X, reason: 'Varför bärarna måste skyddas: en civilisation behöver strukturellt oberoende observatörer, och traditioner som uppfattar vad konsensus inte kan är just sådana.' },
                ],
      },
      {
        slug: 'the-dashboard-was-green',
        title: 'Instrumentpanelen var grön',
        audience: 'För klimataktivister och ekologiska tänkare',
        description:
          'Hur smala observationskanaler godkänner förstörelse de inte kan uppfatta.',
        borderColor: 'border-l-green-500 dark:border-l-green-400',
        furtherReading: [
                  { ...papersSv.IV, reason: 'Hela allmänningsanalysen bakom torskberättelsen: varför statlig förvaltning kan prestera sämre än fritt tillträde, och varför Ostroms principer fungerar — de öppnar observationskanaler.' },
                  { ...papersSv.VI, reason: 'Den formella definitionen av varietetsgapet och Goodhart–Ashby-syntesen: varför optimering mot en smal instrumentpanel förstör de korrelationer som gjorde den informativ.' },
                  { ...papersSv.II, reason: 'Varför den långsamma variabeln är osynlig: ingen styrning på en enda skala kan täcka snabba chocker, säsongscykler och decennietrender samtidigt — bara nästlade, fraktala arkitekturer kan.' },
                  { ...papersSv.X, reason: 'Den nya skörheten: när alla övervakningssystem delar samma modeller och data blir deras blinda fläckar korrelerade — och nästa kollaps är osynlig för alla på en gång.' },
                ],
      },
      {
        slug: 'the-blindness-of-power',
        title: 'Maktens blindhet',
        audience: 'För den som ser starka mäns politik breda ut sig',
        description:
          'Varför kontrollbesatt styrning inte är ett tecken på styrka utan på terminal perceptionskollaps.',
        borderColor: 'border-l-red-500 dark:border-l-red-400',
        furtherReading: [
                  { ...papersSv.III, reason: 'Matematiken bakom den förträngda kanalen: varför signaler som tvingas genom en enda nod förlorar den variation de bär, oavsett hur skicklig ledaren är.' },
                  { ...papersSv.VII, reason: 'Immunsystemet i femton länder: kontroll–blindhet–chock-loopen och dess släktingar, dokumenterade från Ryssland och Kina till demokratiska system.' },
                  { ...papersSv.IX, reason: 'Etablissemangets motstånd modellerat som en adaptiv regulator: varför det strukturellt är snabbare än reformkoalitioner, och varför förändring som forceras snabbare än systemets latens tillåter utlöser kris snarare än korrigering.' },
                ],
      },
      {
        slug: 'the-democracy-that-cant-hear-you',
        title: 'Demokratin som inte kan höra dig',
        audience: 'För demokratiaktivister och deltagardemokratins praktiker',
        description:
          'Varför representationskedjor med fler än tre lager förstör signalen de ska bära.',
        borderColor: 'border-l-blue-500 dark:border-l-blue-400',
        furtherReading: [
                  { ...papersSv.III, reason: 'Resultatet som essän vilar på: den konstitutionella oobserverbarhetströskeln, som passeras vid ungefär två till tre representationslager, med hela simuleringen och dess parametrar.' },
                  { ...papersSv.I, reason: 'Latensgrunden: varför varje regulator har ett förstärkningstak som bestäms av dess svarsfördröjning, och vad det betyder för institutioner som besvarar årets problem med fjolårets information.' },
                  { ...papersSv.IX, reason: 'Varför kortare kedjor möter motstånd: reformer som hotar lagren absorberas av dem — och designprinciperna för övergångar som överlever.' },
                ],
      },
      {
        slug: 'from-goodhart-to-governance',
        title: 'Från Goodhart till styrning',
        audience: 'För AI‑säkerhetsforskare och teknostyrningspraktiker',
        description:
          'Goodharts lag handlar inte bara om belöningshackning – den är signumet för all lågdimensionell optimering.',
        borderColor: 'border-l-orange-500 dark:border-l-orange-400',
        furtherReading: [
                  { ...papersSv.VI, reason: 'Goodhart–Ashby-syntesen i sin helhet: målfunktioner som observationsarkitekturer, och det formella påståendet att lågdimensionell optimering förstör sin egen perceptuella grund.' },
                  { ...papersSv.X, reason: 'Rapporten skriven för just denna läsekrets: varför konsolidering till delade grundmodeller och träningsdata kollapsar observatörsensemblen, med ensemblevariansekvationen och simuleringen bakom varningen.' },
                  { ...papersSv.IX, reason: 'Varför institutionell anpassning kan vara för långsam även när risken är identifierad: övergångsbandbredd, och fällan där ett system fortfarande fungerar men inte längre kan omkonstruera sig självt.' },
                  { ...papersSv.V, reason: 'Multiplikationsresultatet: varför samtidiga arkitekturfel multipliceras snarare än adderas, och lämnar ett fullt sysselsatt system som styr brus.' },
                ],
      },
      {
        slug: 'the-perception-threshold',
        title: 'Perceptionströskeln',
        audience: 'För systemtänkare och integrala praktiker',
        description:
          'Meta‑styrningsimperativet som vår civilisations evolutionära utmaning.',
        borderColor: 'border-l-yellow-500 dark:border-l-yellow-400',
        furtherReading: [
                  { ...papersSv.VI, reason: 'Meta-styrningsargumentet formaliserat: värdearkitekturer som kan utvecklas, och varietetsgapet som måttet på vad ett styrningsstadium ännu inte kan uppfatta.' },
                  { ...papersSv.IX, reason: 'Friktionen mellan stadier: varför strukturellt överlägsna arkitekturer inte bara vinner — etablissemangets motstånd, övergångsbandbredd, och punkten utan återvändo där ett system förlorar förmågan att utvecklas.' },
                  { ...papersSv.X, reason: 'Vad andra skiktet faktiskt kräver: inte en enda integral observatör utan en strukturellt skyddad ensemble av dekorrelerade — språngets ingenjörsinnehåll.' },
                ],
      },
      {
        slug: 'the-mirror-of-the-earth',
        title: 'Jordens spegel',
        audience: 'För planetära tänkare och djup ekologer',
        description:
          'Varför jorden talar och våra institutioner inte kan höra den – och vad en jordförankrad styrning kräver.',
        borderColor: 'border-l-teal-500 dark:border-l-teal-400',
        furtherReading: [
                  { ...papersSv.IV, reason: 'Allmänningsresultatet i essäns kärna: observationens dimensionalitet, inte tillsynskapaciteten, avgör om ekosystem överlever sin styrning.' },
                  { ...papersSv.II, reason: 'Varför institutionerna är döva för de långsamma signalerna: frekvens–latens-begränsningen, och de nästlade arkitekturer som täcker alla frekvensband samtidigt.' },
                  { ...papersSv.X, reason: 'Planetär avkänning som ett ensembleproblem: varför jordobservation konsoliderad till delade modeller och pipelines återskapar, i global skala, den blindhet essän beskriver.' },
                ],
      },
      {
        slug: 'the-clouded-mirror',
        title: 'The Clouded Mirror (hela syntesen)',
        audience: 'För den som vill ha hela argumentet',
        description:
          'Den fullständiga publika syntesen av forskningen Styrning som ingenjörskonst.',
        borderColor: 'border-l-amber-500 dark:border-l-amber-400',
        furtherReading: [
                  { ...papersSv.VI, reason: 'Seriens begreppsliga centrum: varietetsgapet och Goodhart–Ashby-syntesen.' },
                  { ...papersSv.VIII, reason: 'Från begrepp till mätning: det parametriska ramverket och sammansatta indexet, tillämpat på seriens lands- och organisationsfall.' },
                  { ...papersSv.IX, reason: 'Förändringens dynamik: övergångsbandbredd, etablissemangets motstånd och gränserna för fredlig arkitekturreform.' },
                  { ...papersSv.X, reason: 'Slutargumentet: varför allt annat beror på att upprätthålla en mångfaldig, dekorrelerad ensemble av observatörer.' },
                  { href: '/working-papers', label: 'Hela arbetsdokumentserien', reason: 'Rapport I–V bygger de reglertekniska grunder som syntesen vilar på.' },
                ],
      },
    ],
  },
};
