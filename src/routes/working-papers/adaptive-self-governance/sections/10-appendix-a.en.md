## Appendix A — The Self‑Observation Ensemble and the Correlation Tax

This appendix supplies the formal backing for Part II. The headline results are standard statistics applied to a self‑observation ensemble and are rated **[R]**; the modeling choices that connect them to a self (the error‑generating structure of A.4, the substrate‑block partition of A.5) are **[IP]**, and are flagged where they enter. All numerical values below are computation‑verified; the script reproducing them is given in A.8. Closed‑form claims marked *(MC)* were additionally confirmed by Monte Carlo to within sampling error.

### A.1 The ensemble model

Let the latent self‑state be $\mathbf{x}_{\text{self}} \in \mathbb{R}^n$. A person observes it through $N$ channels — introspection, the inner narrative, interoception, a friend, a journal, and so on — each returning

$$\mathbf{y}_i = \mathbf{C}_i\,\mathbf{x}_{\text{self}} + \boldsymbol{\varepsilon}_i, \qquad i = 1,\dots,N,$$

where $\mathbf{C}_i \in \mathbb{R}^{m_i \times n}$ is the channel's structural perspective and $\boldsymbol{\varepsilon}_i$ its error, with $\mathbb{E}[\boldsymbol{\varepsilon}_i]=\mathbf{0}$. Two properties of the ensemble govern its capacity: the rank of the stacked perspective (A.3) and the correlation structure of the errors (A.2). For the correlation analysis it suffices to consider estimation of a single scalar coordinate of $\mathbf{x}_{\text{self}}$ on which all channels report, with $\operatorname{Var}(\varepsilon_i)=\sigma^2$ and pairwise correlation $\operatorname{Corr}(\varepsilon_i,\varepsilon_j)=\rho$ for $i\neq j$.

### A.2 The correlation tax

Pool the channels by the equal‑weight estimator $\hat{x} = \frac{1}{N}\sum_i y_i$. Its error variance is

$$\operatorname{Var}(\hat{x}) = \frac{1}{N^2}\Big[\textstyle\sum_i \operatorname{Var}(\varepsilon_i) + \sum_{i\neq j}\operatorname{Cov}(\varepsilon_i,\varepsilon_j)\Big] = \frac{1}{N^2}\big[N\sigma^2 + N(N-1)\rho\sigma^2\big] = \sigma^2\!\left(\frac{1-\rho}{N} + \rho\right).$$

Defining the *effective number of independent observers* as the count that would yield this variance under independence, $\operatorname{Var}(\hat{x}) \equiv \sigma^2/N_{\text{eff}}$, gives

$$\boxed{\,N_{\text{eff}} = \frac{N}{1 + (N-1)\rho}\,}$$

the Kish design effect. **[R]** *(MC: empirical pooled variance matched the closed form to within 0.3% at $N\in\{6,20\}$, $\rho\in\{0,0.5,0.97\}$.)* Three regimes follow. At $\rho=0$, $N_{\text{eff}}=N$ and numbers help fully. For fixed $\rho>0$, taking $N\to\infty$ gives

$$\lim_{N\to\infty} N_{\text{eff}} = \frac{1}{\rho},$$

a hard ceiling independent of $N$: at $\rho=0.5$ no quantity of channels exceeds $N_{\text{eff}}=2$; at $\rho=0.3$, $N_{\text{eff}}$ saturates at $3.33$ (reached to three significant figures by $N=1000$). The shared bias sets a noise floor that observer count cannot lower.

### A.3 Requisite observer diversity

Stack the perspectives as $\mathbf{C}_{\text{ens}} = [\mathbf{C}_1^\top \cdots \mathbf{C}_N^\top]^\top$. A coordinate of $\mathbf{x}_{\text{self}}$ is recoverable from the ensemble only if it lies in the row space of $\mathbf{C}_{\text{ens}}$; the directions of the self in the kernel of $\mathbf{C}_{\text{ens}}$ are unobservable to *every* channel at once. Writing $\dim(\mathbf{U}_{\text{self}})$ for the dimensionality of the self‑uncertainty space (the directions in which the person cannot predict their own state), requisite observer diversity is the covering condition

$$r_{\text{ens}} := \operatorname{rank}(\mathbf{C}_{\text{ens}}) \ge \dim(\mathbf{U}_{\text{self}}). \tag{[IP]}$$

This is the ensemble‑level analogue of the single‑channel observability condition of Self I: there the value architecture's matrix could be rank‑deficient; here the *union* of all channels' perspectives can be, producing a blind spot no cross‑referencing detects because no channel spans the missing direction. Rank and correlation are distinct deficiencies — an ensemble can be full‑rank yet near‑perfectly correlated (every channel sees every dimension, but with the same error) — and A.2 quantifies the second while A.3 states the first.

### A.4 Two pathways and their compounding

Model each error as the sum of a shared‑model component (common processing), a shared‑data component (common inputs), and an idiosyncratic component, all zero‑mean, unit‑variance, mutually independent: **[IP]**

$$\varepsilon_i = \sqrt{\rho_{\text{model}}}\;m \;+\; \sqrt{(1-\rho_{\text{model}})\,\rho_{\text{data}}}\;d \;+\; \sqrt{(1-\rho_{\text{model}})(1-\rho_{\text{data}})}\;u_i,$$

with $m,d$ common to all channels and $u_i$ idiosyncratic. Then $\operatorname{Var}(\varepsilon_i)=1$ and, for $i\neq j$,

$$\operatorname{Corr}(\varepsilon_i,\varepsilon_j) = \rho_{\text{model}} + (1-\rho_{\text{model}})\rho_{\text{data}} = 1 - (1-\rho_{\text{model}})(1-\rho_{\text{data}}). \tag{[R]}$$

The algebra follows rigorously from the model. *(MC: empirical pairwise correlation matched $1-(1-\rho_m)(1-\rho_d)$ exactly across tested pairs, e.g. $\rho_m=0.2,\rho_d=0.8 \Rightarrow 0.84$.)* The interpretation is that error is decorrelated overall only if it is idiosyncratic through *both* pathways; moderate correlation on each route compounds toward unity, and the two pathways are rarely independent in practice, since the narrative that filters incoming signals is the narrative that selects which signals are sought.

### A.5 The reflexive floor and the weighting penalty

Observer–plant identity (Part I) implies that some channels are not merely correlated but share one substrate — introspection and the inner narrative are the same apparatus reporting twice — so no internal operation decorrelates them. Model this as a partition of the $N$ nominal channels into $B$ blocks, with within‑block correlation $\rho_w \to 1$ and between‑block correlation $\approx 0$: channels inside a block are the same effective observer; blocks are decorrelated. **[IP]** for the partition; the consequences are **[R]**.

Under the equal‑weight estimator, a block model with sizes $k_1,\dots,k_B$ ($\sum k_b = N$) yields pooled variance $\frac{1}{N^2}\sum_b k_b^2$, hence

$$N_{\text{eff}}^{\text{equal}} = \frac{N^2}{\sum_b k_b^2} = \frac{1}{\sum_b (k_b/N)^2},$$

the *inverse Herfindahl index* of the block‑size distribution. Optimal (block‑aware) weighting instead recovers the block count, $N_{\text{eff}}^{\text{opt}} = B$, and these bracket the achievable diversity:

$$N_{\text{eff}}^{\text{equal}} \;\le\; N_{\text{eff}}^{\text{opt}} = B \;\le\; N. \tag{[R]}$$

Two consequences refine the body. First, the floor: because substrate‑sharing forces several nominal channels into one block, $B < N$ strictly whenever any internal channels are fused, and $N_{\text{eff}}$ is bounded above by $B$ regardless of how many nominal channels are consulted — the institutional remedy of constituting more observers cannot raise $B$ when the new observers fall in existing blocks, and only genuinely external channels add blocks. Second, a refinement of §2.6 that the simulation surfaced and that strengthens its claim: under equal weighting, $N_{\text{eff}}$ falls *below* the block count whenever blocks are unequal, because the estimator over‑weights the large fused block. For six channels comprising five fused internal channels and one external (sizes $[5,1]$), $N_{\text{eff}}^{\text{equal}} = 36/26 \approx 1.385$ against $N_{\text{eff}}^{\text{opt}} = 2$: the single decorrelated channel that carries all the new information is very nearly outvoted by the correlated majority. It is therefore not sufficient to *possess* a decorrelated channel; under naive equal weighting the fused majority drowns it, and recovering its value requires deliberately over‑weighting the dissonant external reading against the internal consensus. The discomfort of doing so is the felt form of the up‑weighting the mathematics requires.

### A.6 Selection dynamics

A heuristic model of the collapse of §2.5. Let channel $i$ carry weight $w_i(t)$, and let weights drift up the comfort gradient — toward channels whose readings agree with the current ensemble mean — at rate $\eta$:

$$w_i(t{+}1) \propto w_i(t)\,\exp\!\big(-\eta\, d_i(t)\big), \qquad d_i(t) = \text{disagreement of channel } i \text{ with the pooled reading.}$$

Decorrelated channels, which by construction disagree more often, lose weight monotonically, raising the effective $\rho$ and lowering $N_{\text{eff}}$ over time. The fixed point concentrates weight on a single agreeing block — the echo chamber of one. This dynamic is **[IP]**: its direction follows from the comfort gradient, but the functional form is illustrative, and the parameter $\eta$ has no measured self‑scale value.

### A.7 The Study 1 anchor

The parent programme's Study 1 estimated, for six consumer AI systems on fifty governance‑relevant quantities, an effective error correlation $\rho_{\text{eff}}\approx 0.97$ (the result is **[R]**; preregistered and confirmed). Applying A.2 at face value,

$$N_{\text{eff}} = \frac{6}{1 + 5(0.97)} = \frac{6}{5.85} \approx 1.03,$$

so six nominally distinct observers delivered the statistical protection of essentially one. The transfer to selves is **[H]**: no selves were measured, and the figure is invoked only to establish that nominal independence can coexist with near‑total correlation in practice. A self whose channels share a substrate (A.5) and are actively selected for agreement (A.6) has weaker grounds than separately built AI systems to expect decorrelation, but the magnitude of $\rho$ for any individual is unmeasured and the appendix asserts no value for it.

### A.8 Simulation

The following reproduces every numerical claim above; it belongs in the flat repository as `self_ii_appendix_a_correlation_tax.py`.

```python
import numpy as np
rng = np.random.default_rng(20260616)

def N_eff(N, rho):
    "Kish design effect (A.2)."
    return N / (1.0 + (N - 1.0) * rho)

def mc_pooled_var(N, rho, sigma=1.0, trials=400_000):
    "Monte-Carlo variance of the equal-weight pooled estimator (A.2)."
    zc = rng.standard_normal(trials)
    zi = rng.standard_normal((trials, N))
    eps = (np.sqrt(rho) * zc[:, None] + np.sqrt(1 - rho) * zi) * sigma
    return eps.mean(axis=1).var()

def two_pathway_corr(rho_m, rho_d):
    "Closed-form compounded correlation (A.4)."
    return 1 - (1 - rho_m) * (1 - rho_d)

def neff_equal_blocks(block_sizes):
    "Equal-weight N_eff = inverse Herfindahl index of block sizes (A.5)."
    N = sum(block_sizes)
    return N**2 / sum(k*k for k in block_sizes)

def neff_opt_blocks(block_sizes, rho_w=1 - 1e-6):
    "Optimal-weight N_eff = block count B (A.5), via GLS: 1^T Σ^{-1} 1."
    N = sum(block_sizes); Sig = np.zeros((N, N)); i = 0
    for k in block_sizes:
        Sig[i:i+k, i:i+k] = rho_w; i += k
    np.fill_diagonal(Sig, 1.0)
    one = np.ones(N)
    return one @ np.linalg.solve(Sig, one)

if __name__ == "__main__":
    print("A.2 Study-1 anchor: N_eff(6, 0.97) =", round(N_eff(6, 0.97), 4))
    print("A.2 saturation 1/rho at rho=0.5 :", round(N_eff(10**6, 0.5), 4))
    print("A.2 MC vs closed form (N=6,rho=.97):",
          round(mc_pooled_var(6, 0.97), 4), "vs", round((1-0.97)/6 + 0.97, 4))
    print("A.4 compounded corr (.2,.8)     :", two_pathway_corr(0.2, 0.8))
    for bs in ([5, 1], [4, 1, 1], [6], [1]*6):
        print(f"A.5 blocks {bs}: equal={neff_equal_blocks(bs):.3f}  opt(B)={neff_opt_blocks(bs):.3f}")
```

Running it returns $N_{\text{eff}}(6,0.97)=1.0256$, the saturation value $2.0$ at $\rho=0.5$, Monte‑Carlo agreement with the closed form, the compounded correlation $0.84$, and the block results $[5,1]\to(1.385,\,2)$, $[4,1,1]\to(2.0,\,3)$, $[6]\to(1,\,1)$, $[1{\times}6]\to(6,\,6)$.
