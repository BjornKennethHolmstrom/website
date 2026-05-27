<script lang="ts">
  import { t, language } from '$lib/stores/languageStore.ts';
  import SEO from '$lib/components/SEO.svelte';
  import GovernanceSimulator from '$lib/components/GovernanceSimulator.svelte';

  $: gs = $t.governanceSimulator;
  $: currentLang = $language || 'en';
</script>

<SEO
  title={gs.meta.title}
  description={gs.meta.description}
  keywords={'governance, simulation, subsidiarity, polycentrism, supply chain, systems thinking'}
  type={'website'}
/>

<div class="page-wrap">

  <!-- Hero -->
  <header class="hero">
    <div class="hero-inner">
      <div class="hero-badge">
        <span class="badge-dot"></span>
        {currentLang === 'sv' ? 'Interaktiv simulation' : 'Interactive simulation'}
      </div>
      <h1 class="hero-title">{gs.hero.title}</h1>
      <p class="hero-subtitle">{gs.hero.subtitle}</p>
    </div>
  </header>

  <!-- Intro prose -->
  <section class="intro-section">
    <div class="content-wrap">
      <p class="intro-p">{gs.intro.p1}</p>
      <p class="intro-p">{gs.intro.p2}</p>
    </div>
  </section>

  <!-- Simulation -->
  <section class="sim-section">
    <div class="content-wrap">
      <GovernanceSimulator t={gs} lang={currentLang} />
    </div>
  </section>

  <!-- Insights (shown after simulation has run a bit) -->
  <section class="insights-section">
    <div class="content-wrap">
      <h2 class="section-heading">{gs.insight.title}</h2>

      <div class="insight-cards">
        <div class="insight-card">
          <div class="insight-icon latency-icon">τ</div>
          <div>
            <h3 class="insight-heading">{gs.insight.latency.heading}</h3>
            <p class="insight-body">{gs.insight.latency.body}</p>
          </div>
        </div>

        <div class="insight-card">
          <div class="insight-icon collateral-icon">∇</div>
          <div>
            <h3 class="insight-heading">{gs.insight.collateral.heading}</h3>
            <p class="insight-body">{gs.insight.collateral.body}</p>
          </div>
        </div>

        <div class="insight-card">
          <div class="insight-icon capture-icon">⊗</div>
          <div>
            <h3 class="insight-heading">{gs.insight.capture.heading}</h3>
            <p class="insight-body">{gs.insight.capture.body}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Interactive Explorables -->
  <section class="insights-section">
    <div class="content-wrap">
      <h2 class="section-heading">{currentLang === 'sv' ? 'Interaktiva demonstrationer' : 'Interactive Explorables'}</h2>
      <div class="insight-cards">
        <a href="/explorables/goodhart-collapse" class="insight-card hover:shadow-md transition-shadow">
          <div class="insight-icon" style="background: rgba(245,158,11,0.12); color: #f59e0b;">📉</div>
          <div>
            <h3 class="insight-heading">{currentLang === 'sv' ? 'Goodhart-kollapsen' : 'The Goodhart Collapse'}</h3>
            <p class="insight-body">{currentLang === 'sv' ? 'När ett mått blir ett mål upphör det att vara ett bra mått. Optimera en synlig variabel medan en dold dimension kollapsar.' : 'When a measure becomes a target, it ceases to be a good measure. Optimize a visible variable while a hidden dimension collapses.'}</p>
          </div>
        </a>
        <a href="/explorables/averaging-problem" class="insight-card hover:shadow-md transition-shadow">
          <div class="insight-icon" style="background: rgba(59,130,246,0.12); color: #3b82f6;">📊</div>
          <div>
            <h3 class="insight-heading">{currentLang === 'sv' ? 'Medelvärdesproblemet' : 'The Averaging Problem'}</h3>
            <p class="insight-body">{currentLang === 'sv' ? 'En central regulator ser bara medelvärdet — och missar den lokala krisen. Friska noder störs av enhetlig politik.' : 'A central controller sees only the mean — and misses the local crisis. Healthy nodes are disrupted by uniform policy.'}</p>
          </div>
        </a>
        <a href="/explorables/immune-absorption" class="insight-card hover:shadow-md transition-shadow">
          <div class="insight-icon" style="background: rgba(220,38,38,0.1); color: #dc2626;">🛡️</div>
          <div>
            <h3 class="insight-heading">{currentLang === 'sv' ? 'Immunabsorptioncykeln' : 'The Immune Absorption Cycle'}</h3>
            <p class="insight-body">{currentLang === 'sv' ? 'Se hur ett reformförslag absorberas i varje institutionellt lager — och framträder som symbolisk förändring utan substans.' : 'Watch a reform proposal get absorbed at each institutional layer — emerging as symbolic change without substance.'}</p>
          </div>
        </a>
        <a href="/explorables/coordination-failure-tax" class="insight-card hover:shadow-md transition-shadow">
          <div class="insight-icon" style="background: rgba(139,92,246,0.1); color: #7c3aed;">🧮</div>
          <div>
            <h3 class="insight-heading">{currentLang === 'sv' ? 'Samordningsmisslyckandets skatt' : 'The Coordination Failure Tax'}</h3>
            <p class="insight-body">{currentLang === 'sv' ? 'Arkitektoniska misslyckanden adderas inte — de multipliceras. Se hur fyra samtidiga fel kan reducera kapaciteten till 6 %.' : 'Architectural failures don\'t add — they multiply. See how four simultaneous failures can reduce capacity to 6%.'}</p>
          </div>
        </a>
        <a href="/explorables/bypass-trap" class="insight-card hover:shadow-md transition-shadow">
          <div class="insight-icon" style="background: rgba(34,197,94,0.12); color: #22c55e;">🔄</div>
          <div>
            <h3 class="insight-heading">{currentLang === 'sv' ? 'Förbikopplingsfällan' : 'The Bypass Trap'}</h3>
            <p class="insight-body">{currentLang === 'sv' ? 'När en workaround lyckas försvinner trycket att reformera kärnan — om den inte har ett solnedgångsvillkor.' : 'When a workaround succeeds, pressure to reform the core vanishes — unless it has a sunset condition.'}</p>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- Technical note -->
  <section class="technical-section">
    <div class="content-wrap">
      <details class="technical-details">
        <summary class="technical-summary">{gs.technicalNote.title}</summary>
        <p class="technical-body">{gs.technicalNote.body}</p>
      </details>
    </div>
  </section>

</div>

<style>
  .page-wrap {
    min-height: 100vh;
  }

  /* Hero */
  .hero {
    padding: 4rem 1rem 2.5rem;
    text-align: center;
    border-bottom: 1px solid var(--color-separator);
  }
  .hero-inner {
    max-width: 680px;
    margin: 0 auto;
  }
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-page-accent);
    margin-bottom: 1.25rem;
    padding: 0.3rem 0.75rem;
    border: 1px solid var(--color-page-accent);
    border-radius: 99px;
    opacity: 0.85;
  }
  .badge-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--color-page-accent);
    animation: pulse-dot 2s ease-in-out infinite;
  }
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.75); }
  }
  .hero-title {
    font-size: clamp(2rem, 5vw, 3.25rem);
    font-weight: 700;
    color: var(--color-page-title, var(--color-card-text));
    margin: 0 0 1rem;
    line-height: 1.15;
  }
  .hero-subtitle {
    font-size: 1.05rem;
    color: var(--color-card-text);
    opacity: 0.7;
    max-width: 520px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* Content sections */
  .content-wrap {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .intro-section {
    padding: 2.5rem 1rem;
    border-bottom: 1px solid var(--color-separator);
  }
  .intro-p {
    font-size: 1rem;
    line-height: 1.75;
    color: var(--color-card-text);
    opacity: 0.85;
    max-width: 660px;
    margin: 0 auto 1rem;
  }
  .intro-p:last-child { margin-bottom: 0; }

  .sim-section {
    padding: 2.5rem 1rem;
    border-bottom: 1px solid var(--color-separator);
  }

  .insights-section {
    padding: 3rem 1rem;
    border-bottom: 1px solid var(--color-separator);
  }
  .section-heading {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--color-page-accent);
    margin: 0 0 1.75rem;
  }

  .insight-cards {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  .insight-card {
    display: flex;
    gap: 1.25rem;
    align-items: flex-start;
    padding: 1.25rem;
    border: 1px solid var(--color-separator);
    border-radius: 0.75rem;
    background: var(--color-card-bg);
  }
  .insight-icon {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 700;
    flex-shrink: 0;
    font-family: 'Georgia', serif;
  }
  .latency-icon { background: rgba(59,130,246,0.12); color: #3b82f6; }
  .collateral-icon { background: rgba(220,38,38,0.1); color: #dc2626; }
  .capture-icon { background: rgba(139,92,246,0.1); color: #7c3aed; }

  .insight-heading {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--color-card-text);
    margin: 0 0 0.4rem;
  }
  .insight-body {
    font-size: 0.88rem;
    line-height: 1.65;
    color: var(--color-card-text);
    opacity: 0.75;
    margin: 0;
  }

  .insight-card {
    text-decoration: none;
    color: inherit;
  }

  /* Technical note */
  .technical-section {
    padding: 2rem 1rem 3rem;
  }
  .technical-details {
    border: 1px solid var(--color-separator);
    border-radius: 0.5rem;
    overflow: hidden;
  }
  .technical-summary {
    padding: 0.75rem 1rem;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--color-card-text);
    opacity: 0.6;
    cursor: pointer;
    user-select: none;
    background: var(--color-card-bg);
  }
  .technical-summary:hover { opacity: 0.9; }
  .technical-body {
    padding: 1rem 1rem 1.25rem;
    font-size: 0.82rem;
    line-height: 1.7;
    color: var(--color-card-text);
    opacity: 0.75;
    font-family: 'Georgia', serif;
    border-top: 1px solid var(--color-separator);
    margin: 0;
  }
</style>
