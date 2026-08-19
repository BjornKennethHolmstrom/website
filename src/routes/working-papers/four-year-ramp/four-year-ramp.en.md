# The Four-Year Ramp

### Legislative production and the electoral clock in the Swedish Riksdag, 2002–2026

**Draft 2** — all figures from Riksdagens öppna data, 24 riksmöten, 5,715 propositions.

---

## Abstract

Swedish election campaigns are argued in part over governing capacity: which
constellation can legislate, at what tempo, with what force. This paper tests
those claims against the full open-data record of the Riksdag from 2002 to
2026 — six governments, four constitutional arrangements, 5,715 government
propositions with chamber outcomes at förslagspunkt resolution.

Legislative volume is governed almost entirely by position in the electoral
cycle. Output rises from a mean of 155 non-budget propositions in a mandate's
first riksmöte to 268 in its fourth, a 73% increase accounting for 82.4% of
all variance. Which parties govern accounts for 1.4%. The year-four surge is
not queue-clearing: the additional propositions are no smaller, and the
chamber absorbs them with no increase in processing time.

The end-of-term surge itself is well documented; the contribution here is
that it does not vary with which parties govern, which is difficult to
reconcile with the vote-seeking mechanism the literature ascribes to it.

Two of the four production measures have demonstrated sensitivity — each
resolves a large effect elsewhere in the same data — so their failure to
detect party effects is informative rather than a power failure. The single
detectable deviation in twenty-four years is riksmöte 2021/22, when the
government's proposition rejection rate rose fivefold during the collapse of
the Löfven III / Andersson government. That result survives four separate
tests for coverage artefacts.

The paper does not claim that governments are interchangeable. It claims
something narrower and more awkward: on the process measures the Riksdag
records, the calendar and acute governmental crisis are visible, and party
control is not.

---

## 1. Introduction

Swedish election campaigns routinely turn on claims about governing capacity.
*Handlingskraft*, *reformtempo*, *regeringsduglighet* — the vocabulary
presumes that different constellations would produce different amounts of
legislation at different speeds with different success. These are empirical
claims about the production characteristics of a legislature, and they are
testable.

They have not, so far as I can establish, been tested against the full
open-data record. The Riksdag publishes every document with structured
metadata: submission dates, committee referrals, chamber decisions, and — in
the *dokforslag* block — the outcome of every individual förslagspunkt, coded
as bifall, delvis bifall, or avslag. Twenty-four riksmöten of this material
covers six governments spanning nearly every parliamentary arrangement modern
Sweden has produced.

Legislative volume follows a four-year ramp — a pattern already established
in the political legislation cycle literature, and expected in a PR system.
What is not established, and what this paper reports, is that the ramp is
essentially identical under every government observed, that the additional
output is not cheaper or faster-processed, and that rejection rates are
constant except during one riksmöte of governmental collapse. The variation
that campaigns contest does not appear in the record of what parliament
produces; the variation that does appear is a property of the calendar.

I want to be careful about what this does and does not establish, and §7 and
§9 are devoted to that. The composition question — whether governments differ
in *what* they legislate about, as opposed to how much — could not be
resolved by this design, and I report the attempt as a limitation rather than
a null.

## 1.1 Related work

### Political legislation cycles

The pattern documented in §4 is not new. A literature in political economy,
running under the heading *political legislation cycles* (PLC), has
established that legislative output rises toward the end of an electoral
term. Lagona and Padovano (2008) set out the theory and the first tests;
Padovano and Sy (2026) provide the first panel test, covering twenty
electoral democracies from the mid-1970s onward, and find that the number of
laws falls at the start of a legislature and rises significantly near its
end, typically in the final six months. Country-level studies replicate the
pattern in the Czech Republic (Brechler and Geršl 2014), in semi-presidential
France (Gavoille and Padovano 2017), and for decree production in Italy
(Dattilo and Padovano 2025).

Two features of that literature bear directly on the Swedish case. First,
Padovano and Sy find cycle magnitude conditional on institutional design: PR
systems produce cycles around 67% larger than majoritarian ones. Sweden is
PR, and the ratio observed here (1.73 from first to fourth riksmöte) is
broadly consistent with that expectation. The present paper therefore does
not claim to discover the cycle. It claims that the cycle is invariant to
government identity in a way the standard mechanism does not predict.

Second, and more consequentially, PLC theory attributes the pre-election peak
to *opportunistic* behaviour: incumbents adopt vote-maximising strategies as
elections approach, and the resulting cycle is read as evidence of dynamic
inefficiency in the agency relationship between voters and politicians. That
interpretation makes predictions this paper can test, because the existing
evidence is cross-country while the variation here is within-country across
six governments under a constant constitutional framework.

Three of those predictions fail:

1. **Magnitude should vary with electoral incentive.** A government facing
   likely defeat, or a fragile coalition needing to demonstrate output, has
   more to gain from a pre-election surge than a secure one. Across six
   Swedish governments — including one parliamentary majority, one caretaker
   period, and one that collapsed mid-mandate — mandate identity explains
   1.4% of variance in output (§4).
2. **Pre-election legislation should be cheaper.** Vote-seeking output
   predicts more numerous, smaller, more visible instruments. Year-four
   propositions are marginally *larger* than year-one propositions on
   förslagspunkter (§4.1).
3. **A deliberate surge should strain the processing pipeline.** Latency is
   flat at 71–72 days across all four year-positions, and the 90th percentile
   falls in year four (§4.2).

An administrative account fits the same data more comfortably: if the
utredning–remiss–beredning pipeline has a characteristic duration, work
initiated early in a mandate matures late in it, and the ramp is a transit
property of the pipeline rather than a strategy of the government moving
through it. This paper cannot adjudicate between the two accounts — §10 sets
out the SOU-lag test that would — but the invariance result narrows the space
the opportunistic account has to occupy.

### Government type and legislative performance

A separate literature asks whether minority and coalition governments
legislate less effectively than majority ones. Strøm (1984, 1990) established
that minority cabinets are rational solutions rather than pathologies, and
that they are not straightforwardly less successful. Krauss (2018) provides
the large-N comparative test — 197 governments across 21 parliamentary
democracies — and finds that minority cabinets do not generally underperform:
what matters is whether legislative support is *formalised*, with formal
minority cabinets operating in practice much like executive coalitions.
Bergman, Ilonszki and others have examined how coalition agreements affect
policy productivity, finding effects conditional on cabinet type.

This is the literature the Swedish case speaks to most directly. The period
covers a single-party minority with informal support, a majority coalition, a
minority coalition, two different formalised cross-bloc arrangements
(Decemberöverenskommelsen, Januariavtalet), and a written support contract
with staff embedded in Regeringskansliet (Tidöavtalet). Krauss's account
predicts that the formalised arrangements should perform comparably to the
majority government. They do — but so does everything else, including the
informally supported single-party minority. The distinction the literature
draws between formal and substantive minority support does not register in
Swedish legislative output.

The one exception is instructive and is consistent with Krauss's mechanism
read at higher resolution: the rejection-rate spike of 2021/22 (§6) occurs
precisely when a formalised arrangement had ceased to function.

### Composition over the cycle

On what governments legislate about, as opposed to how much, the relevant work
concerns intra-term dynamics rather than partisan difference. Bäck and
colleagues (2023) show German MPs' legislative priorities shifting across the
electoral cycle, from party-agenda issues early to competitive
differentiation late. Work on coalition governments' strategic timing finds
the middle of the term used as a window for controversial legislation, where
the distance from the next election reduces electoral risk. Both imply that
*when* within a term is a live variable for composition — which the design in
§7 does not model, and which may be part of why bloc effects were not
recoverable there.

### The Swedish case in this literature

Sweden appears in the comparative panels but has not, so far as I can
establish, been examined at the resolution the open-data record permits:
förslagspunkt-level chamber outcomes across every government proposition for
twenty-four years. The contribution here is that resolution and the
within-country design it supports, not the discovery of the cycle.

## 2. The Swedish case

The period 2002–2026 supplies unusually varied parliamentary conditions
within a constant constitutional framework:

| Mandate | Arrangement |
|---|---|
| Persson II (2002–06) | S single-party minority, V and MP support |
| Reinfeldt I (2006–10) | Four-party majority coalition |
| Reinfeldt II (2010–14) | Four-party minority coalition |
| Löfven I (2014–18) | S+MP minority, Decemberöverenskommelsen |
| Löfven II/III + Andersson (2018–22) | S+MP minority, Januariavtalet, then collapse |
| Kristersson (2022–26) | M+KD+L minority, Tidöavtalet with SD |

The period includes one genuine parliamentary majority, one four-month
caretaker government, one pandemic, three prime ministers inside a single
mandate, and two formal cross-party governing contracts of different design.
If parliamentary arrangement affects legislative production, the variation
required to detect it is present.

## 3. Data and construction

All data come from Riksdagens öppna data via the `dokumentlista` and
`dokumentstatus` endpoints. The unit of time is the riksmöte; mandates group
four riksmöten each.

Four measures:

1. **Volume** — government propositions per riksmöte.
2. **Latency** — days from proposition date to chamber decision, taken from
   the handling betänkande where the decision is not recorded on the
   proposition itself.
3. **Instrument size** — förslagspunkter per proposition.
4. **Success** — share of propositions with at least one förslagspunkt
   rejected by the chamber.

### 3.1 Population statement

Measures 2–4 are computed on **non-budget propositions that reached a
betänkande with a förslag block**: 3,658 of 5,715 cached propositions. This
restriction is not incidental and should not be read as a sample of all
propositions.

Budget propositions are decided by rambeslut rather than punkt by punkt, and
consequently carry förslag blocks at 17.1% against 73.1% for ordinary
propositions (Fisher OR = 0.08, p < 1e-200). The budget family is also
registered as one document per utgiftsområde, so a single budget proposition
appears in the record as roughly twenty-seven documents — and the number so
registered shifted from about 42 per year to about 11 during 2017/18–2020/21
through a change in titling convention, not in budgeting. Budget documents
are therefore excluded from all measures throughout, and volume results are
reported both ways.

### 3.2 A measure discarded

Partial approval (*delvis bifall*) falls monotonically from 18.1% of
propositions in 2002–06 to 2.7% in 2022–26. This is not a finding. Mean
förslagspunkter per proposition rises over the same period, and the two
correlate at Spearman −0.75 across the twenty-four riksmöten: registrars
progressively stopped coding partial approval and began splitting punkter
instead. The measure records registration practice and is dropped.

## 4. The electoral ramp

The existence of an end-of-term surge is expected (§1.1). What follows
concerns its magnitude, its invariance, and its composition.

Decomposing proposition counts across the 6 × 4 grid of mandates and
year-positions:

| Source | SS | df | Share |
|---|---|---|---|
| Mandate | 735.7 | 5 | **1.4%** |
| Year-in-mandate | 42,450.5 | 3 | **82.4%** |
| Interaction | 8,314.8 | 15 | 16.1% |

Year-in-mandate means, non-budget propositions: **155 → 182 → 211 → 268**, a
ratio of 1.73. Mandate means span 227 to 245 — eight percent, across every
arrangement listed in §2.

Non-budget propositions per riksmöte:

| Mandate | Y1 | Y2 | Y3 | Y4 |
|---|---|---|---|---|
| Persson II | 170 | 206 | 191 | 224 |
| Reinfeldt I | 136 | 165 | 246 | 260 |
| Reinfeldt II | 181 | 175 | 199 | 261 |
| Löfven I | 143 | 196 | 221 | 296 |
| Löfven II/III + Andersson | 161 | 189 | 209 | 271 |
| Kristersson | 138 | 160 | 200 | 297 |

### 4.1 The surge is not queue-clearing

The obvious deflationary reading is that year-four output is thin: minor
amendments and technical instruments cleared from a backlog before
dissolution. It is not. Median förslagspunkter per proposition by
year-position runs 1, 1, 1, 2, and the mean runs 3.0, 2.9, 3.1, 3.7.
Year-four propositions are marginally *larger*, so the ramp represents
roughly double the legislative content of a mandate's first year on any
weighting.

### 4.2 The chamber absorbs it without delay

Median latency by year-position: **72, 72, 72, 71 days**. The 90th percentile
*falls* in year four, from 155 to 140 days.

This is the most mechanically informative result in the paper. A 73% increase
in arrival rate with no increase in processing delay is not what a
capacity-constrained pipeline does; elementary queueing predicts the
opposite. Two readings are available. Either utilisation sits far below one
for three years out of four, or beredning latency is not a queue at all but a
fixed structural interval — motionstid, remissrunda, utskottsberedning —
whose duration is set by procedure rather than by load.

Both readings place the binding constraint outside parliament. The Riksdag is
not what limits Swedish legislative output.

### 4.3 Amplitude: an artefact, not a trend

Cycle amplitude appears to grow across the series when all propositions are
included: year-4/year-1 ratios of 1.20, 1.72, 1.32, 1.72, 1.89, 1.92, with a
log-scale linear-by-linear interaction at F(1,14) = 8.28, p = 0.012.

Excluding budget documents, it does not. The ratios become non-monotone
(1.32, 1.91, 1.44, 2.07, 1.68, 2.15), Tukey's non-additivity test returns
p = 0.557, the linear-by-linear term p = 0.063, and a permutation test on the
six ratios p = 0.18.

Budget documents are precisely where the registration conventions of §3.1
shifted. The apparent amplitude trend is therefore most plausibly registrar
behaviour rather than legislative behaviour, and it is not claimed here. §10
retains it as a conjecture with a testable implication.

A note on the design: with one observation per cell, a saturated interaction
consumes all fifteen residual degrees of freedom. The quantity labelled
"interaction" above *is* the interaction; there is no independent error term,
and conventional interaction F-tests do not exist in this layout. The
one-degree-of-freedom tests above are the available substitutes.

## 5. Instrument sensitivity

Four null results invite the objection that the instruments are blunt. Rather
than validate against an external measure, I pair each null with a large
effect the *same* measure detects in the *same* units.

**Volume** resolves the year-in-mandate effect at F(3,15) = 25.5, 82.4% of
variance. A measure with that resolution is not blind. Against it, mandate
returns F = 0.27 — meaning between-mandate variation is *smaller* than the
within-mandate residual. This is a statement about effect size, not a failure
of power: an F below one indicates that grouping by mandate explains less
than an arbitrary partition of the same data would be expected to.

**Success rate** resolves riksmöte 2021/22 at OR = 4.55, Fisher p = 3.7e-05,
while the remaining twenty-three riksmöten are homogeneous to χ² = 13.4 on 22
df, **p = 0.92**. The measure finds a real deviation where one exists.

**Latency and instrument size** have no such validation. They are reported
descriptively in §4; no null is claimed for them.

## 6. What happened in 2021/22

Proposition rejection rates by mandate (≥1 punkt rejected, Wilson 95% CI):

| Mandate | k/n | Rate | CI |
|---|---|---|---|
| Persson II | 7/570 | 1.23% | 0.60–2.51 |
| Reinfeldt I | 8/643 | 1.24% | 0.63–2.44 |
| Reinfeldt II | 9/575 | 1.57% | 0.83–2.95 |
| Löfven I | 10/641 | 1.56% | 0.85–2.85 |
| Löfven II/III + Andersson | 22/636 | 3.46% | 2.30–5.18 |
| Kristersson | 4/593 | 0.67% | 0.26–1.72 |

The overall χ² across mandates is significant (17.7, df 5, p = 0.003), and it
is entirely one cell. Löfven II against the other five pooled: OR = 2.81,
Fisher p = 0.0004. Remove that mandate and the remaining five are
indistinguishable: χ² = 2.54, df 4, p = 0.64. Kristersson against the other
four: p = 0.22 — nothing.

But the mandate is the wrong unit. Within Löfven II the rejections run 3, 3,
3, 13 across the four riksmöten. The final year alone gives 5.94% against
1.37% for every other riksmöte in the series (OR = 4.55, p = 3.7e-05).
Excluding it, Löfven II falls to 2.16% against 1.26%, p = 0.17.

2021/22 is the riksmöte in which Löfven resigned, Magdalena Andersson was
elected prime minister and resigned the same day following the Miljöpartiet
exit, was re-elected, and governed on a budget written by the opposition. A
government losing votes at four times the ordinary rate under those
conditions is not a finding about governing arrangements. It is a description
of a government coming apart.

### 6.1 The coverage threat, tested four ways

Because förslag-block coverage varies across the series (59.8%–70.7% by
mandate) and correlates with rejection rate at the mandate level (rho = 0.71,
n = 6), the 2021/22 result could in principle be an artefact of that riksmöte
being well covered. Four tests:

1. **Riksmöte-level regression.** Across all 24 riksmöten the
   coverage–rejection correlation is **+0.04** — essentially zero. The
   mandate-level rho of 0.71 was an artefact of aggregating twenty-four
   observations to six. 2021/22 remains the extreme value on the
   coverage-adjusted residual at z = +3.31.
2. **Coverage-matched peers.** Against the thirteen riksmöten within ±3pp of
   its coverage: 4.41% vs 0.85%, OR = 5.38, p = 0.0003.
3. **Mantel–Haenszel by coverage tercile.** OR = 8.71, p < 0.0001.
4. **Tipping-point bounds.** For coverage to explain the result, the 1,302
   *unobserved* propositions in the other riksmöten would need a rejection
   rate of **13.41%** — 15.3 times their observed rate of 0.88%. Counting
   every uncovered proposition as undefeated everywhere, the most
   pessimistic possible recount, still leaves OR = 5.43, p = 1.7e-04.

The fourth test is the one that settles it. The first three can only fail to
find a confound; the fourth states how implausible the confound would have to
be.

## 7. Composition: unresolved

If governments do not differ in how much they legislate, they might still
differ in what they legislate about. I could not resolve this, and report the
attempt rather than a null.

Because mandates are contiguous blocks of calendar time, any secular drift in
policy attention registers as a "mandate effect" with no party content. The
test must therefore be on **bloc**, which alternates S–M–S–M and is not
collinear with time, after removing a linear trend from each series.

| Representation | Bloc variance share | Median p | Time share |
|---|---|---|---|
| Committee (utskott) shares | 5.2% | 0.167 | 13.6% |
| Title topics, TF-IDF | 3.7% | 0.417 | 19.4% |
| Title topics, KB-SBERT | 3.0% | 0.729 | 14.7% |

Committee shares were restricted to the twelve utskott present across all 24
riksmöten; LU was abolished in 2006 and CU created in its place, so their
apparent bloc effects were existence windows correlating with bloc. Title
topics had digits stripped, since year tokens otherwise cluster documents by
riksmöte, and 708 recurring administrative propositions were excluded by a
rule stated in advance — treaty ratifications, annual reports, deployment
renewals — leaving 4,178 of 4,894.

Bloc variance shares are stable across k = 10–40 and five clustering seeds,
ranging 3.1–4.8% with standard deviations under 1.5pp. The associated
p-values are not stable: they range from 0.08 to 1.00 across the same sweep.
That instability is itself the clearest illustration of the design's limit.
Bloc is constant within a riksmöte, so effective n is 24 regardless of 4,178
documents; the circular-shift null admits 23 labellings, **the minimum
achievable p is 0.042**, and the statistic therefore takes a handful of
discrete values that move sharply under trivial changes to the partition
while the effect size does not.

Why era and party cannot be separated here is visible in the topics
themselves. Under both vectorisations the highest bloc-variance cluster is
health care and covid — +1.45pp under S-led governments in the SBERT
solution — which is the pandemic falling inside an S-led window. Committee
data show the same pattern: JuU runs +3.15pp under S-led, coinciding with the
gang-violence escalation of 2015–2022, but the M-led government of 2022–26
legislated heavily on crime as well.

Time explains 14–19% of composition variance against bloc's 3–5%. Content
appears to track the era more than the government, but that is an
observation, not a tested claim. Two unrelated representations agreeing at
3–4% suggests the limitation is the design rather than the vectoriser.

## 8. Threats to validity

**Coverage.** Addressed at §6.1 for the 2021/22 result. The riksmöte-level
correlation of +0.04 suggests coverage is close to random with respect to
contentiousness, but the mechanism generating missing förslag blocks is not
established.

**Registration practice.** Three convention changes were detected and
handled: budget document counts (§3.1), partial-approval coding (§3.2), and
year tokens in titles (§7). Others may remain undetected. Any longitudinal
claim from this source needs the same scrutiny — the amplitude result of §4.3
is a worked example of a finding that did not survive it.

**Right-censoring.** Riksmöte 2025/26 was incomplete at extraction. Volume
may rise further; latency is biased low. The Kristersson rejection rate is
stable across three specifications (0.66%, 0.53%, 0.67%), so censoring is not
driving it.

**Effective sample size.** Every mandate- or bloc-level claim runs on 24
observations. Where a result depends on that layer, this is stated.

**Selection on submitted propositions.** See §9.

## 9. What this does not show

**Nothing about quality or outcomes.** A constant rate of legislation says
nothing about whether the legislation is good, or whether it achieves
anything. Throughput is not effect.

**Nothing about composition.** §7 is inconclusive in both directions.

**Nothing about the current government specifically.** The Kristersson
mandate is unremarkable on every validated measure. That is a finding about
the measures, not a verdict on the government.

**Anticipatory adaptation is structurally invisible, and this is the deepest
limitation.** Governments do not submit propositions they expect to lose. A
government skilled at anticipating defeat and a government with a secure
majority produce identical rejection rates by opposite routes. What the
record contains is the residual after adaptation: bills never drafted,
provisions softened in negotiation with a support party, ideas killed at the
departementspromemoria stage leave no trace in any document the Riksdag
publishes.

This is a general property of institutional measurement rather than a quirk
of this dataset. The system records the failures that occurred and is
constitutionally blind to those avoided by not attempting them. Any
evaluation built on the observable record inherits that blindness, including
this one.

## 10. Implications

**For evaluation.** Grading a mandate on reformtempo measures the calendar.
Any comparison of governments on legislative output that does not condition
on year-in-mandate is measuring the electoral clock and attributing it to
parties.

**For institutional design.** If throughput and latency are set upstream of
parliament — in Regeringskansliet's utredning capacity, the remiss cycle, and
committee procedure — then reform aimed at legislative capacity has to
address that apparatus. Nothing in this data suggests parliament is the
constraint.

**The test that would settle the mechanism.** §1.1 set out two competing accounts of the end-of-term surge: the opportunistic one the political legislation cycle literature assumes, in which governments release legislation before elections to maximise votes, and an administrative one in which the ramp is a transit property of a pipeline with a characteristic duration. The invariance results above sit awkwardly with the first but do not establish the second. One measurement discriminates between them. If the ramp is pipeline transit, propositions arriving in year four were initiated earlier and should show systematically longer lags from SOU to proposition than those arriving in year one. If it is strategic release, the lag distribution should be similar across year-positions and the difference should lie in when completed work is published rather than when it was begun. The lag is extractable from the same source — propositions cite the SOU they descend from — and is the natural next step for this line of work.

**For the study of political attention.** Elections are contested over a
variable — which parties govern — that accounts for 1.4% of the variance in
how much the legislature produces, and for none of the variance in how fast
or how successfully. Whether it accounts for what the legislature produces
could not be determined here. If party control matters, this record does not
show where.



---

## Appendix: reproduction

All analysis runs from Riksdagens öppna data with no other source. Pipeline:
document listing and status extraction, budget-family exclusion,
förslagspunkt outcome normalisation, and the tests reported above. Scripts,
derived tables, and the API response cache as of 2026-08-18 are
available at https://github.com/BjornKennethHolmstrom/riksdag-legislative-production.

**Sources:** Sveriges riksdag, öppna data (fri användning, ange källa).
