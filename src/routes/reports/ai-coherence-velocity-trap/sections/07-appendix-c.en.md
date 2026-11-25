## Appendix C: The Governance as Engineering Connection

### C.1 The Architectural Foundation

The report draws on the Governance as Engineering series. Earlier Papers I–V are historical conditional models; the correction does not re-audit or categorically disprove them. Corrected Papers VI, VIII and XX and the accepted capstone (GA-R02-C §3.5, E.5), subsidiarity (GA-R02-S §1.5, C.2) and glossary bridge constrain the interpretation. These sources motivate the questions but do not validate company claims or certify governance designs. The audit's W1–W9 are conditional mathematical or logical illustrations, not empirical estimates.

### C.2 The Seven Primitives

The original names nodes, state, flows, latency, constraints, feedback loops and signal fidelity; it describes only four. No descriptions of the other three are reconstructed here.

**Nodes** include boards, executives, safety functions, investors and regulators in an illustrative institutional model. Their information, decision rights and implementation capabilities are distinct. A count of nodes cannot establish adequacy.

**State** refers to the specified condition of the governed system: for example, a relevant system property or exposure. It may be partly unknown. Objectives and metrics do not determine all that can be observed.

**Latency** is the time between a specified disturbance, its observation, a decision and an implemented corrective response. Relevant deadlines differ by task; delay may be a necessary safeguard or a deficit, and an actual time must be measured.

**Signal fidelity** concerns the relation between relevant evidence and the condition it is intended to represent. Compare missing signals, noise, interpretation and filtering separately from deliberate nonresponse. Accurate evidence may be ignored (capstone §3.5).

### C.3 Task-relative adequacy, observation and proxy safety (W1–W3)

Under the corrected Paper VI static noiseless linear setting, let D be the disturbance subspace, C the observation map, L the task-indifference subspace, and K = D ∩ ker C. If admissible actions must cancel disturbances modulo L, exact adequacy requires K ⊆ L and is sufficient when all of −D is available. The hidden gap is dim K − dim(K∩L); the count max(0, dim D − dim(D∩L) − rank(C restricted to D)) is a lower bound, not a certificate. In a two-dimensional example D=R², L=span(e2), C=(1,0) leaves K=span(e2) and h=0; C′=(0,1) leaves K=span(e1) and h=1, despite equal observation rank. A redundant measurement changes raw count without changing this condition. In D=R³ with L=span(e2,e3), observing e1 gives rank 1 and h=0; replacing that channel with observations of e2 and e3 gives rank 2 and h=1. Increasing rank by replacing channels can worsen adequacy. Paper XX's minimum action-compatible cover gives a necessary lower bound on the number of available actions; the bound is not sufficient. No rank or count is a company safety score. The original count-based Variety Gap interpretation is withdrawn (corrected VIII).

W2 separates information, objectives and authority. In two possible states d in `{0,1}`, suppose the required action is a=d. Both institutions observe y=d; one selects a=d and another selects a=0 under a stipulated objective or rule. They have identical information and different action. A third knows the state but lacks authority to choose a=1; a fourth has authority but cannot reliably implement it. None of these failures need be described as blindness. A constant objective can coexist with full observation. The example does not characterize actual organisations.

W3 is the corrected XX proxy witness. For feasible deterministic pairs (a,b) in `{(0,0),(0,1),(2,0),(2,1)}`, let proxy M=a and target T=a+b. Every strict deterministic increase in M increases T, though ties differ. If a lottery choosing (2,0) with probability 1/4 and (0,0) otherwise is feasible, E[M]=E[T]=1/2. The deterministic (0,1) has M=0 and T=1: the lottery raises expected proxy while lowering expected target. The policy class and mixtures matter. A certification or benchmark is not a target guarantee, and this toy example is not evidence that any particular benchmark is gamed.

### C.4 Scale and latency (W4)

Suppose two independent disturbance streams change at different rates, observed by a single controller sampling at the fast rate and able to act with sufficient bandwidth and deadlines. In the stipulated static per-step model, choosing u_i = −d_i rejects both disturbances. A multi-layer arrangement with missing actuation or delayed handoffs may fail. The witness refutes a universal single-scale impossibility claim in that setting; it is not a dynamic stability proof or a reinterpretation of Papers I–II. Compare architectures on causal timing, jurisdiction, action permissions, resource limits and actual outcomes. No frequency band determines lawful authority.

### C.5 The Coordination Failure Tax (W6)

For sequential normalized retentions r_i=1−f_i in [0,1] with Q/Q0=∏r_i, the loss 1−∏(1−f_i) ≤ ∑f_i. Two half-retentions lose 3/4, no greater than 1. Retained quality 1/4 passes a stipulated threshold 1/5 and fails 1/3. Neither categorical failure nor universal compounding follows. Compare interactions against a common baseline: Y0=10, YA=12, YB=13, YAB=14 gives interaction 14−12−13+10=−1; YAB=17 gives +2. The original claim that governance failures necessarily multiply, and that every loop cycle increases a tax, is withdrawn. This is consistent with the capstone E.5 correction and does not establish actual AI outcomes.

### C.6 Common-mode errors and aggregation (W5)

Let M1 and M2 be binary misses conditional on a specified hazard, each with probability p. For feasible correlation ρ, E[M1M2]=p²+ρp(1−p). With independent p=.1, both miss with probability .01. If shared tools lower each marginal miss to .05 but make misses perfectly correlated, both miss with probability .05. At p=1/20, the joint miss exceeds .01 exactly for ρ>3/19. Feasible joint probability lies between max(0,2p−1) and p; the minimum feasible correlation at p=1/20 is −1/19, where the joint miss is zero.

The joint miss is failure to flag under an any-flag rule; it is response failure only if a flag is sufficient for reliable prescribed action and no other failure channel exists. For a rule requiring both to flag, failure to flag is 2p−P(both miss). Other rules differ; any-flag escalation may increase false alarms. Negative dependence can help within feasible bounds. No actual probabilities are estimated. Common benchmarks may also induce dependence through strategic adaptation by the evaluated system. Test calibration, severity, misses, false alarms, common modes and actual decisions. The subsidiarity W5 fair binary-signal example concerns agreement events (six independent signals: all-positive 1/64, either-sign unanimity 1/32; copying: unanimity 1 and all-positive 1/2), not hazard-conditioned misses. No numerical transfer is warranted. Two AI reviewers may share sources and framing; model-family count does not establish independent review.

### C.7 Incentives, recurrence and alternatives (W7–W8)

Suppose membership yields 2 benefit units, compliance costs 1 and effective mitigation costs 3 additional to compliance, with a badge that does not distinguish the two. Compliance alone yields +1, compliance plus mitigation −2. This stipulated payoff illustrates a possible incentive mismatch, not actual company behaviour or equilibrium. Counts of anomalies, certification and adoption are process measures; assess independent outcomes, exposure and detection.

A safety intervention followed by durable correction and continued viability is compatible with competition. If the number of alternatives follows n_(t+1)=n_t+entry_t−exit_t, entry balancing exit prevents monotone depletion in this count. Counts do not establish functional independence. Define viability, substitutability, switching costs and recovery before assessing the envelope. Neither toy demonstrates an actual trajectory.

### C.8 Joint maxima, thresholds and strategic feasibility (W9)

For an explicitly feasible set A, safety S(a) and viability V(a), joint maximization requires a common maximizer if maxima exist. Disjoint maxima do not establish incompatible minimum floors. For `A={a,b,c}` with outcomes (1,0), (0,1), (.7,.7), both .6 floors are met by c, though neither objective is maximized. Removing c makes the floors infeasible in the stipulated deterministic action set; adding (1,1) permits joint maximization. No implicit convexification, transfers or mixtures. Define legitimate floors, uncertainty, authority and time horizon independently of this toy. No measured frontier or universal trade-off follows.

For actor i, let A_i(a_−i) be the authorized action set conditional on the rival profile and F_i(a_−i) the subset satisfying both S_i(a_i,a_−i)≥s_i and V_i(a_i,a_−i)≥v_i. Unilateral feasibility means F_i is nonempty against a stated baseline. Robust fixed-action feasibility against a defined set B requires an action in the intersection of F_i(b) over b∈B; adaptive policies require a separately specified information and policy class. Joint feasibility means an authorized profile exists with every actor's action in its respective F_i. Neither baseline-conditional unilateral nor joint feasibility implies the other in general. Robust fixed-action feasibility over B implies baseline-conditional feasibility for every baseline in B; the converse need not hold.

Two firms choose R (restrain) or A (accelerate). Safety is .8 under R and .3 under A; own viability is as follows (own action first):

| Own action | Rival R | Rival A |
|---|---:|---:|
| R | .7 | .3 |
| A | .9 | .5 |

At floors .6 and .6, neither action works against rival A, but mutual R meets both floors for both. A strictly dominates R in viability alone, so mutual R is not stable if viability alone determines choice. If V(R,A) changes to .6, unilateral R becomes feasible against A. This is a deterministic illustration, not a description of Mythos, any actual firm, full preferences or lawful coordination. Joint feasibility does not establish equilibrium, enforceability, safety, legal authorization or a need for this Commons.

For dynamic or uncertain cases predeclare horizon T, admissible policies, authority, scenario distribution or uncertainty set and criteria over T. If justified, an explicit joint chance constraint P(all specified floors hold over T)≥1−ε may be compared with other models; it is not permission to relax hard safety or rights constraints. Compare rival baselines and authorized joint policies on the same assumptions. Unknown feasible alternatives, exits, entry and survivorship matter. H0 states observational tests separately from intervention evaluation. The original claim of a mathematical relationship establishing an unavoidable trap or a limiting case is withdrawn.
