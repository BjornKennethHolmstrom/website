<!-- src/routes/systemic-optimization/+page.svelte -->
<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import SEO from '$lib/components/SEO.svelte';
  import Provenance from '$lib/components/Provenance.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  type Lang = 'en' | 'sv';

  const REPO = 'https://github.com/BjornKennethHolmstrom/systemic-optimization';
  const DA = '/systemic-optimization/decision-audit';

  // Static files: keep the original file names in static/systemic-optimization/decision-audit/
  const auditFiles: Record<Lang, { zip: string; pdf: string; docx: string; md: string; review: string }> = {
    en: {
      zip: `${DA}/Systemic_Optimization_Decision_Audit_v0.2.1_Workshop_Kit_EN.zip`,
      pdf: `${DA}/Systemic_Optimization_Decision_Audit_v0.2.1_Workshop_Worksheet.pdf`,
      docx: `${DA}/Systemic_Optimization_Decision_Audit_v0.2.1_Workshop_Worksheet.docx`,
      md: `${DA}/Systemic_Optimization_Decision_Audit_v0.2.1_Workshop_Worksheet.md`,
      review: `${DA}/Systemic_Optimization_Decision_Audit_v0.2.1_After_Action_Review.pdf`
    },
    sv: {
      zip: `${DA}/Systemisk_Optimering_Beslutsgranskning_v0.2.1_Workshop_Kit_SV.zip`,
      pdf: `${DA}/Systemisk_Optimering_Beslutsgranskning_v0.2.1_Workshop_Arbetsblad.pdf`,
      docx: `${DA}/Systemisk_Optimering_Beslutsgranskning_v0.2.1_Workshop_Arbetsblad.docx`,
      md: `${DA}/Systemisk_Optimering_Beslutsgranskning_v0.2.1_Workshop_Arbetsblad.md`,
      review: `${DA}/Systemisk_Optimering_Beslutsgranskning_v0.2.1_Uppfoljning_Efter_Beslut.pdf`
    }
  };

  const papers = [
    {
      number: '0',
      url: '/working-papers/what-should-we-optimize',
      cover: '/working-papers/images/what-should-we-optimize-cover.png',
      pdf: {
        en: '/working-papers/what-should-we-optimize/what-should-we-optimize-en.pdf',
        sv: '/working-papers/what-should-we-optimize/what-should-we-optimize-sv.pdf'
      },
      title: {
        en: 'What Should We Optimize, and What Must We Know?',
        sv: 'Vad bör vi optimera, och vad måste vi veta?'
      },
      subtitle: {
        en: 'Three Computational Experiments on Model Error, Future Goals, and the Cost of Learning',
        sv: 'Tre beräkningsexperiment om modellfel, framtida mål och kostnaden för lärande'
      },
      desc: {
        en: 'Three computational experiments examine model error, future-goal uncertainty, and when learning is worth its cost. Confirmatory results and subsequent reproducibility audits are clearly distinguished.',
        sv: 'Tre beräkningsexperiment undersöker modellfel, osäkerhet om framtida mål och när lärande är värt sin kostnad. Konfirmatoriska resultat hålls åtskilda från senare reproducerbarhetsgranskningar.'
      }
    },
    {
      number: '1',
      url: '/working-papers/what-if-the-model-is-incomplete',
      cover: '/working-papers/images/what-if-the-model-is-incomplete-cover.png',
      pdf: {
        en: '/working-papers/what-if-the-model-is-incomplete/what-if-the-model-is-incomplete-en.pdf',
        sv: '/working-papers/what-if-the-model-is-incomplete/what-if-the-model-is-incomplete-sv.pdf'
      },
      title: {
        en: 'What If the Model Is Incomplete?',
        sv: 'Vad händer om modellen är ofullständig?'
      },
      subtitle: {
        en: 'Computational Experiments on Causal Representation, Ecological Objectives, and the Limits of Learning',
        sv: 'Beräkningsexperiment om kausal representation, ekologiska mål och lärandets begränsningar'
      },
      desc: {
        en: 'A synthetic flood-management study examines three responses to incomplete understanding: re-model, re-value, and learn. Confirmatory results reveal a trade-off between conventional costs and ecological outcomes, while exploratory experiments expose the limits of learning.',
        sv: 'En syntetisk översvämningsstudie undersöker tre svar på ofullständig förståelse: ändra modellen, ändra målet eller lära sig mer. Konfirmatoriska resultat visar en målkonflikt mellan konventionella kostnader och ekologiska utfall, medan explorativa experiment belyser lärandets begränsningar.'
      }
    },
    {
      number: 'B1',
      url: '/working-papers/contestable-cooperation',
      cover: '/working-papers/images/contestable-cooperation-cover.png',
      pdf: {
        en: '/working-papers/contestable-cooperation/contestable-cooperation-en.pdf',
        sv: '/working-papers/contestable-cooperation/contestable-cooperation-sv.pdf'
      },
      title: { en: 'Contestable Cooperation', sv: 'Prövbar samverkan' },
      subtitle: {
        en: 'Operational capacity, corrective capacity, and the politics of evaluation',
        sv: 'Operativ förmåga, korrigeringsförmåga och utvärderingens politik'
      },
      desc: {
        en: 'A conceptual paper on evaluating cooperation without conflating effective services with legitimacy. Proposes a provisional Contestability Module; not empirically validated.',
        sv: 'En begreppslig rapport om att utvärdera samverkan utan att förväxla välfungerande tjänster med legitimitet. Föreslår en preliminär prövbarhetsmodul som ännu inte validerats empiriskt.'
      }
    }
  ] as const;

  const content = {
    en: {
      seoTitle: 'Systemic Optimization | Björn Kenneth Holmström',
      seoDesc:
        'Systemic Optimization is a research programme examining whether we optimize the right problem, with an adequate understanding of reality and enough opportunity to detect and correct our mistakes.',
      tag: 'Research programme',
      note: 'AI-assisted research · Model-based results · Not peer-reviewed',
      title: 'What Is Systemic Optimization?',
      lead: 'Traditional optimization seeks the best solution to a given problem. But even a mathematically optimal solution can produce poor outcomes if the problem itself is poorly formulated.',
      questions:
        'What if we measure the wrong things, overlook important causal relationships, or do not know which needs will matter in the future? What if our decisions also prevent us from discovering our own mistakes?',
      thesis:
        'Systemic optimization is an approach to examining and improving not only our solutions, but the problems and decision processes behind them.',
      core:
        'At its core, it asks whether we are optimizing the right problem, with an adequate understanding of reality and enough opportunity to detect and correct our mistakes.',
      responsesTitle: 'Four ways to respond to an incomplete problem',
      responses: [
        { title: 'Change the objective', text: 'Which outcomes count, and whose interests are missing from what we value?' },
        { title: 'Improve the model', text: 'Which mechanisms, delays or feedbacks might our understanding of the system leave out?' },
        { title: 'Handle uncertainty', text: 'Can we choose actions that hold up if our assumptions are wrong — and what does that insurance cost?' },
        { title: 'Create opportunities to learn', text: 'When can we obtain evidence that actually distinguishes between explanations, in time to change course?' }
      ],
      responsesNote:
        'In the model experiments so far, these responses are not interchangeable, and none of them is automatically best. Each has its own costs, and each can change what the others achieve.',
      exampleTitle: 'An example: reducing flood damage',
      example:
        'Consider a community seeking to reduce flood damage. Optimizing the cost of protective measures may seem straightforward, but the outcome depends on which consequences are counted and how accurately the model represents interactions between municipalities, water flows, and ecosystems. Changing the objective, improving the model, or gathering more information can produce different outcomes — each with its own costs and limitations.',
      blindspot:
        'One particularly important insight is that <strong>our decisions also shape what we are able to learn</strong>. A policy can create blind spots by preventing the very situations in which its assumptions could be challenged.',
      notTitle: 'What it is — and is not',
      not1:
        'Systemic optimization therefore does not offer a universal method for always making the right decision. It is a research and design perspective for identifying different kinds of inadequacy, comparing possible remedies, and making decision processes more aware of their limitations.',
      not2:
        'The underlying research uses mathematical models and computational experiments. Its findings are currently model-specific and should not be mistaken for empirical validation in real-world societies.',
      central:
        'The central question is not only “How can we best achieve our objective?” but also “Have we chosen the right objective, understood the system, and created the conditions to recognize when we need to rethink our approach?”',
      papersTitle: 'Working papers',
      papersIntro: 'Each paper separates confirmatory, exploratory and interpretive results, and publishes its code and experiments.',
      paperLabel: 'Working Paper',
      readOnline: 'Read online',
      pdfEn: 'PDF (English)',
      pdfSv: 'PDF (Swedish)',
      auditTitle: 'Decision Audit: a workshop tool',
      auditLead: 'Are we making the right decision — or optimizing the wrong problem?',
      auditIntro:
        'The Decision Audit translates the research into a worksheet for examining objectives, assumptions, hidden consequences and opportunities for learning before important decisions are made. It suits municipalities, organizations and other groups facing a consequential choice.',
      auditQuestionsTitle: 'The four diagnostic questions',
      auditQuestions: [
        'Are we valuing the right outcomes?',
        'Is the causal model adequate for this decision?',
        'What does our own policy prevent us from seeing?',
        'Can feasible learning improve the decision in time?'
      ],
      auditFormat: 'Run it as a quick 45-minute or a full 85-minute workshop. Question 3 is always mandatory.',
      auditStatusLabel: 'Status',
      auditStatus:
        'Exploratory decision support, version 0.2.1. Not yet empirically validated: it produces no risk score and does not establish that a decision is correct.',
      downloadsTitle: 'Downloads',
      langName: { en: 'English', sv: 'Swedish' },
      files: {
        zip: 'Complete workshop kit (ZIP)',
        pdf: 'Worksheet (PDF, print)',
        docx: 'Worksheet (DOCX, editable)',
        md: 'Worksheet (Markdown source)',
        review: 'After-action review (PDF, 1 page)'
      },
      pilotTitle: 'Help test it',
      pilot:
        'Try the worksheet on a decision with limited consequences and compare it with your usual process. I would like to hear how long it took, what you would cut, and whether it surfaced anything consequential you had not considered before.',
      pilotCta: 'Send feedback →',
      repo: 'Source code and experiments on GitHub ↗'
    },
    sv: {
      seoTitle: 'Systemisk optimering | Björn Kenneth Holmström',
      seoDesc:
        'Systemisk optimering är ett forskningsprogram som undersöker om vi optimerar rätt problem, med rätt förståelse av verkligheten och tillräcklig möjlighet att upptäcka och korrigera våra misstag.',
      tag: 'Forskningsprogram',
      note: 'AI-assisterad forskning · Modellbaserade resultat · Ej sakkunniggranskad',
      title: 'Vad är systemisk optimering?',
      lead: 'Traditionell optimering handlar om att hitta den bästa lösningen på ett givet problem. Men även en matematiskt optimal lösning kan leda till dåliga resultat om problemet är felaktigt formulerat.',
      questions:
        'Vad händer om vi mäter fel saker, förbiser viktiga orsakssamband eller inte vet vilka behov som kommer att vara viktiga i framtiden? Vad händer om våra beslut dessutom hindrar oss från att upptäcka våra egna misstag?',
      thesis:
        'Systemisk optimering är ett sätt att undersöka och förbättra inte bara våra lösningar, utan också själva problemen och beslutsprocesserna bakom dem.',
      core:
        'I grunden handlar det om att undersöka om vi optimerar rätt problem, med rätt förståelse av verkligheten och tillräcklig möjlighet att upptäcka och korrigera våra misstag.',
      responsesTitle: 'Fyra sätt att hantera ett ofullständigt problem',
      responses: [
        { title: 'Ändra målet', text: 'Vilka utfall räknas, och vems intressen saknas i det vi värderar?' },
        { title: 'Förbättra modellen', text: 'Vilka mekanismer, fördröjningar eller återkopplingar kan saknas i vår förståelse av systemet?' },
        { title: 'Hantera osäkerheten', text: 'Kan vi välja åtgärder som håller även om antagandena är fel – och vad kostar den försäkringen?' },
        { title: 'Skapa möjligheter att lära', text: 'När kan vi få evidens som faktiskt skiljer mellan olika förklaringar, i tid för att ändra kurs?' }
      ],
      responsesNote:
        'I modellexperimenten hittills är dessa åtgärder inte utbytbara, och ingen av dem är automatiskt bäst. Var och en har sina egna kostnader och kan påverka vad de andra åstadkommer.',
      exampleTitle: 'Ett exempel: att minska översvämningsskador',
      example:
        'Tänk på ett samhälle som vill minska översvämningsskador. Att optimera kostnaderna för skyddsåtgärder kan verka enkelt, men resultatet beror på vilka konsekvenser som räknas och hur väl modellen beskriver samspelet mellan kommuner, vattenflöden och ekosystem. Att ändra målet, förbättra modellen eller samla mer information kan ge olika resultat – och varje åtgärd har sina egna kostnader och begränsningar.',
      blindspot:
        'En särskilt viktig insikt är att <strong>våra beslut också påverkar vad vi får möjlighet att lära oss</strong>. En policy kan skapa blindfläckar genom att förhindra just de situationer där dess antaganden skulle kunna motbevisas.',
      notTitle: 'Vad det är – och inte är',
      not1:
        'Systemisk optimering söker därför inte en universell metod för att alltid fatta rätt beslut. Det är ett forsknings- och designperspektiv för att identifiera olika typer av brister, jämföra möjliga åtgärder och göra beslutsprocesser mer medvetna om sina begränsningar.',
      not2:
        'Den bakomliggande forskningen använder matematiska modeller och beräkningsexperiment. Resultaten är hittills modellbundna och ska inte förväxlas med empirisk validering i verkliga samhällen.',
      central:
        'Den centrala frågan är inte bara ”Hur når vi vårt mål på bästa sätt?” utan också ”Har vi valt rätt mål, förstått systemet och skapat förutsättningar för att upptäcka när vi behöver tänka om?”',
      papersTitle: 'Arbetsrapporter',
      papersIntro: 'Varje rapport skiljer mellan konfirmatoriska, explorativa och tolkande resultat, och källkod och experiment publiceras öppet.',
      paperLabel: 'Arbetsrapport',
      readOnline: 'Läs online',
      pdfEn: 'PDF (engelska)',
      pdfSv: 'PDF (svenska)',
      auditTitle: 'Beslutsgranskning: ett workshopverktyg',
      auditLead: 'Fattar vi rätt beslut – eller optimerar vi fel problem?',
      auditIntro:
        'Beslutsgranskningen omsätter forskningen i ett arbetsblad för att granska mål, antaganden, dolda konsekvenser och möjligheter till lärande innan viktiga beslut fattas. Det passar kommuner, organisationer och andra grupper som står inför ett beslut med betydande konsekvenser.',
      auditQuestionsTitle: 'De fyra diagnostiska frågorna',
      auditQuestions: [
        'Värderar vi rätt utfall?',
        'Är orsakssambandsmodellen tillräcklig för beslutet?',
        'Vad hindrar vår egen policy oss från att se?',
        'Kan genomförbart lärande förbättra beslutet i tid?'
      ],
      auditFormat: 'Genomförs som en kort workshop på 45 minuter eller en fullständig på 85 minuter. Fråga 3 är alltid obligatorisk.',
      auditStatusLabel: 'Status',
      auditStatus:
        'Utforskande beslutsstöd, version 0.2.1. Ännu inte empiriskt validerat: verktyget ger ingen riskpoäng och visar inte att ett beslut är rätt.',
      downloadsTitle: 'Nedladdningar',
      langName: { en: 'Engelska', sv: 'Svenska' },
      files: {
        zip: 'Komplett workshopmaterial (ZIP)',
        pdf: 'Arbetsblad (PDF, för utskrift)',
        docx: 'Arbetsblad (DOCX, redigerbart)',
        md: 'Arbetsblad (Markdown-källa)',
        review: 'Uppföljning efter beslut (PDF, 1 sida)'
      },
      pilotTitle: 'Hjälp till att pröva verktyget',
      pilot:
        'Pröva gärna arbetsbladet på ett beslut med begränsade konsekvenser och jämför med er vanliga beslutsprocess. Jag vill gärna höra hur lång tid det tog, vad ni skulle ta bort och om något viktigt som tidigare förbisetts kom fram.',
      pilotCta: 'Skicka återkoppling →',
      repo: 'Källkod och experiment på GitHub ↗'
    }
  };

  let currentLang = $derived(($language === 'sv' ? 'sv' : 'en') as Lang);
  let c = $derived(content[currentLang]);
  // Show the kit in the reader's language first.
  let kitOrder = $derived((currentLang === 'sv' ? ['sv', 'en'] : ['en', 'sv']) as Lang[]);
  const fileKeys = ['zip', 'pdf', 'docx', 'md', 'review'] as const;
</script>

<SEO title={c.seoTitle} description={c.seoDesc} />

<div class="mx-auto max-w-4xl px-4 pb-24 pt-12 lg:pt-16" style="color: var(--color-page-text)">
  <!-- Introduction -->
  <header class="mb-12">
    <span
      class="mb-4 inline-block rounded-full bg-[var(--color-card-bg)] px-3 py-1 text-xs font-medium uppercase tracking-wide"
      style="color: var(--color-page-accent)">{c.tag}</span
    >
    <h1 class="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">{c.title}</h1>
    <p class="text-xl font-light leading-relaxed opacity-80 md:text-2xl">{c.lead}</p>
    <p class="mt-4 text-sm opacity-60">{c.note}</p>
    <div class="mt-6"><Provenance align="start" /></div>
  </header>

  <article class="space-y-6 text-lg leading-relaxed">
    <p>{c.questions}</p>
    <p class="border-l-4 border-[var(--color-page-accent)] pl-5 text-xl font-semibold">{c.thesis}</p>
    <p class="opacity-90">{c.core}</p>
  </article>

  <!-- Four responses -->
  <section class="mt-16" aria-labelledby="responses">
    <h2 id="responses" class="mb-6 text-2xl font-semibold" style="color: var(--color-page-accent)">{c.responsesTitle}</h2>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {#each c.responses as r, i (r.title)}
        <div class="rounded-xl border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-5 text-[var(--color-card-text)]">
          <p class="mb-1 text-xs font-bold uppercase tracking-wider opacity-50">{i + 1}</p>
          <h3 class="mb-2 text-lg font-semibold">{r.title}</h3>
          <p class="text-sm leading-relaxed opacity-80">{r.text}</p>
        </div>
      {/each}
    </div>
    <p class="mt-6 text-lg leading-relaxed opacity-90">{c.responsesNote}</p>
  </section>

  <!-- Example and blind spots -->
  <section class="mt-16 space-y-6 text-lg leading-relaxed" aria-labelledby="example">
    <h2 id="example" class="text-2xl font-semibold" style="color: var(--color-page-accent)">{c.exampleTitle}</h2>
    <p>{c.example}</p>
    <p>{@html c.blindspot}</p>
  </section>

  <section class="mt-16 space-y-6 text-lg leading-relaxed" aria-labelledby="scope">
    <h2 id="scope" class="text-2xl font-semibold" style="color: var(--color-page-accent)">{c.notTitle}</h2>
    <p>{c.not1}</p>
    <p class="opacity-80">{c.not2}</p>
  </section>

  <blockquote class="my-16 rounded-xl border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 text-xl font-semibold leading-relaxed text-[var(--color-card-text)] md:p-8">
    {c.central}
  </blockquote>

  <!-- Working papers -->
  <section class="mt-16" aria-labelledby="papers">
    <h2 id="papers" class="mb-2 text-2xl font-semibold" style="color: var(--color-page-accent)">{c.papersTitle}</h2>
    <p class="mb-8 opacity-70">{c.papersIntro}</p>
    <div class="space-y-6">
      {#each papers as p (p.number)}
        <div class="flex flex-col gap-6 rounded-xl border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-6 text-[var(--color-card-text)] sm:flex-row">
          <a href={p.url} class="block w-28 shrink-0 self-center sm:w-32 sm:self-start">
            <img src={p.cover} alt="" class="h-auto w-full rounded-md shadow-md ring-1 ring-black/10 dark:ring-white/15" loading="lazy" />
          </a>
          <div class="min-w-0 flex-1">
            <p class="mb-2 text-xs font-bold uppercase tracking-wider" style="color: var(--color-page-accent)">{c.paperLabel} {p.number}</p>
            <h3 class="mb-1 text-xl font-bold leading-tight"><a href={p.url} class="hover:underline">{p.title[currentLang]}</a></h3>
            <p class="mb-3 text-sm opacity-70">{p.subtitle[currentLang]}</p>
            <p class="mb-4 text-sm leading-relaxed opacity-90">{p.desc[currentLang]}</p>
            <div class="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
              <a href={p.url} class="text-[var(--color-page-accent)] hover:underline">{c.readOnline} →</a>
              <a href={p.pdf.en} download class="text-[var(--color-page-accent)] hover:underline">{c.pdfEn}</a>
              <a href={p.pdf.sv} download class="text-[var(--color-page-accent)] hover:underline">{c.pdfSv}</a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Decision Audit -->
  <section class="mt-20" aria-labelledby="audit" id="decision-audit">
    <h2 id="audit" class="mb-2 text-2xl font-semibold" style="color: var(--color-page-accent)">{c.auditTitle}</h2>
    <p class="mb-4 text-xl font-semibold">{c.auditLead}</p>
    <p class="mb-8 text-lg leading-relaxed">{c.auditIntro}</p>

    <h3 class="mb-3 text-xs font-bold uppercase tracking-wider opacity-50">{c.auditQuestionsTitle}</h3>
    <ol class="mb-6 space-y-2">
      {#each c.auditQuestions as q, i (q)}
        <li class="flex gap-3 text-lg">
          <span class="shrink-0 font-bold tabular-nums" style="color: var(--color-page-accent)">Q{i + 1}</span>
          <span>{q}</span>
        </li>
      {/each}
    </ol>
    <p class="mb-4 opacity-90">{c.auditFormat}</p>
    <p class="mb-10 rounded-md border-l-4 border-amber-500 bg-amber-500/10 px-4 py-3 text-sm leading-relaxed">
      <strong>{c.auditStatusLabel}:</strong>
      {c.auditStatus}
    </p>

    <h3 class="mb-4 text-xs font-bold uppercase tracking-wider opacity-50">{c.downloadsTitle}</h3>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      {#each kitOrder as kit (kit)}
        <div class="rounded-xl border border-[var(--color-separator)] bg-[var(--color-card-bg)] p-5 text-[var(--color-card-text)]">
          <h4 class="mb-4 text-lg font-semibold">{c.langName[kit]}</h4>
          <ul class="space-y-2 text-sm">
            {#each fileKeys as key (key)}
              <li>
                <a
                  href={auditFiles[kit][key]}
                  download
                  hreflang={kit}
                  class="{key === 'zip' ? 'font-semibold' : ''} text-[var(--color-page-accent)] hover:underline"
                >
                  {c.files[key]}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

    <div class="mt-10 rounded-xl border border-[var(--color-separator)] p-6">
      <h3 class="mb-2 text-lg font-semibold">{c.pilotTitle}</h3>
      <p class="mb-4 leading-relaxed opacity-90">{c.pilot}</p>
      <a href="/contact" class="font-medium text-[var(--color-page-accent)] hover:underline">{c.pilotCta}</a>
    </div>
  </section>

  <div class="mt-16 flex flex-col gap-8 border-t border-[var(--color-separator)] pt-8">
    <a href={REPO} target="_blank" rel="noopener noreferrer" class="text-sm font-medium text-[var(--color-page-accent)] hover:underline">{c.repo}</a>
    <ShareButtons title={c.title} />
  </div>
</div>
