## Appendix A. Audit trail and reproducibility

### A.1 Experimental source files

This paper was prepared from the uploaded frozen specifications, aggregate outputs and archived world records. The **technical review of v0.1** reproduced A1 G5 and B B4 verdicts using each study's frozen analysis script and checked B5 against its locked report; these are arithmetic/provenance reproductions, not independent implementations of the solvers. At the drafting stage, the recorded aggregates were inspected and key mean effects independently re-aggregated; this is **not** a complete independent rerun of the solver or Monte Carlo verification suites. The supplied study authors' audits report that the original test suites and provenance gates passed.

| Study | Primary supplied evidence | Sealed-test reference |
|:---|:---|:---|
| **A1** | A1 v0.2.2 G4-frozen revision, with *post-G5* report additions §§19–20; `g5_verdicts.json`; `g5_worlds.zip`; `g6_exploratory.json`; diagnostic code archive | 800 worlds; frozen G4 code fingerprint `22568e14ddcb5d2cc0763d784709305542d5a2abf4493c5ce0bf0c51cee257c4` |
| **B** | B v0.2 B3-frozen analysis and B2 horizon record; `b4_worlds.zip`; B4 verdicts reproduced from records with frozen analysis code during the technical review; B4 exploratory output | 800 worlds; $H_M=4$; frozen analysis code fingerprint `b57c71f4979715fd5cc053d0104a4ab6cae971a6756bee58ab90964a0b177d6f` |
| **B5** | B5 v0.2 revision 23 plus B5-0.1 amendment revision 31 and post-test §14; `b54_E_verdicts.json`; `b54_exploratory.json`; `b54_lock.json`; `b54_worlds.zip`; `b53_worlds.zip` | 800 test worlds plus 200 clustered-support worlds; frozen B5-3 code fingerprint `a2a8f827e36e3aa602dca2f1a9141a387d18d76dc44b235d48a185dd342f034d` |

B5's original condition-E verdicts file has SHA-256 `0252bffa7adf2afcb62e6152b58cf1083e591b7a067f6fcfa0afb913032984d1`, matching `b54_lock.json` and the reference carried in the exploratory output. The B5 test-world archive includes **800** original test records and **200** misspecification records; its separate development archive includes **100** development records. The aggregate B5 means reproduce from those test records, including the informed-minus-flat mean gap of **0.4376338** and the concurrent-survey gains of approximately **0.091376** (free) and **0.046154** (cost 0.075) reward units. A1's G6 report records 800/800 passed replay and ledger checks.

### A.2 A reader's checklist for checking the claims

1. Check the recorded fingerprints and pool IDs before computing any outcomes, and retain the signed-off configurations and amendments.
2. Reproduce the confirmatory statistics first, using the pre-frozen estimability and multiple-comparison rules. Do not use exploratory contrasts to select confirmatory verdicts.
3. Reproduce every normalized effect as a ratio of **paired means** with its specified oracle gap and interval; do not average per-world ratios unless the protocol requires it.
4. Verify A1's wet and dry counterexamples, B's reserve-matched controls and HB3 ranking validity, and B5's exclusive versus concurrent survey distinctions.
5. Separate deterministic model identities and numerical tests from world-prior conclusions, then separate both from claims about real governance.

### A.3 Methodological disclosure

The study programme was initiated and directed by **Björn Kenneth Holmström**. The experiments and specifications were developed with substantial AI assistance, including implementation and technical analysis in Claude. This synthesis draft was prepared by ChatGPT through review of the uploaded research artifacts, with selected numerical cross-checks, and is intended for subsequent author revision and an independent technical source audit. **Draft v0.2 is not a peer-reviewed publication, and AI cross-checks are not an independent human code audit.** A later public version should identify the definitive repository location, software environment, exact frozen artifact set and any material changes made during author review.

### A.4 Frozen artifact identifiers and environments

The download-copy filenames above are locators, not persistent identifiers. The following recorded values should be checked against the canonical freeze records **before** a public release. The A1 G6 script fingerprint and A1/B workstation package versions remain to be included in a finalized release manifest; they should not be inferred from a later computer environment.

**A1 (frozen G4).** Document hash prefix `f07b3584…`; G0 configuration SHA-256 `fe9d52be094fcb40baeff5cedd61fb5f25676967cc5dfbd4714f53463a8effe9`; test-pool SHA-256 `a788bf1b85f9c9f9c978ff21f730f8b80ff337aba05c23ec0112b513aed70ba8`; G4 analysis fingerprint `22568e14ddcb5d2cc0763d784709305542d5a2abf4493c5ce0bf0c51cee257c4`.

**B (frozen B3).** Document revision 49, hash prefix `8fd0cf3a…`; B0 configuration SHA-256 `69ebe82650a4384dee53e1d64ddbf58295d5c6eac2ff22bd0f301d20c32f9fda`; horizon $H_M=4$; sealed-pool SHA-256 `d2a8fdf01854e91d7f9c9803f2eecd06c361b7e2e586ca66d2ccb4b530457600`; analysis fingerprint `b57c71f4979715fd5cc053d0104a4ab6cae971a6756bee58ab90964a0b177d6f`.

**B5 (frozen B5-3).** Document revision 23 with export SHA-256 `6e339fa90e00a12d928827cad1cc8f8c4e88b108fea4fc30b59167302cada92b` and amendment revision 31; configuration SHA-256 `248e1e9dcff8f9609d96c002ba6c63a1e87bc116d99170dadfc780a9e03488b7`; amendment SHA-256 `347db34c86910f68f3c75983babd34f766a81ecbcb4e6b53674697b13fe99c99`. Sealed test-pool SHA-256 `4b393fdf0c25eb6f7551c1e49c5b176f7e26022f22b90ad6911f6b94afefa3cb`; misspecification-pool SHA-256 `8e88994f5fbf221c0cf27f09c4c746240395888be64d5c9b67eebeeaae768414`; B5-3 fingerprint `a2a8f827e36e3aa602dca2f1a9141a387d18d76dc44b235d48a185dd342f034d`; condition-E verdict lock `0252bffa7adf2afcb62e6152b58cf1083e591b7a067f6fcfa0afb913032984d1`.

The B5 pool record specifies **Python 3.10.12, NumPy 2.2.6, SciPy 1.15.3** on x86_64. This environment matters for regenerating the sealed pools: RNG algorithms and numerical order can change across versions. Matching a CSV or JSON statistic does not by itself certify matching RNG state or code identity. The A1 and B workstation environments should be recorded from their original execution machines, not reconstructed from the B5 versions.

### A.5 Sequence of analysis and audit

A1's G0–G5 confirmatory procedures were frozen before the sealed G5 verdicts. **G6's runner, analysis code, and several diagnostic operational choices were written after those verdicts were available**; G6 is exploratory. B's B4 confirmatory analysis followed its B3 freeze. B5's B5-0.1 amendment was made after seeing zero-polling behavior in verification worlds and an exploratory free-observation diagnostic, but before the development and sealed-test comparisons. For B5-4, E's confirmatory test values were locked before any C/F **development or sealed-test** values were viewed; earlier verification/pilot flags and a few verification smoke-test values were available.

The experiments were designed and directed by the author with **substantial AI assistance**. Claude implemented and analyzed the studies, ChatGPT reviewed successive gates, and Claude later technically reviewed this manuscript, including numerical cross-checks. This is a documented multi-agent review process, **not independent human peer review**. An external human audit of at least one frozen solver and evaluator, together with public release of executable analysis code and original pool manifests, remains an important next validation step.

### A.6 Reproducibility update (5 November 2026)

Following completion of draft v0.2, three **author-run computational audits** strengthened the provenance of the experiments. **Audit 1:** all 47 frozen source-file hashes and four sealed-pool hashes matched their records, the B5 condition-E verdict lock matched, and all 158 included tests passed. **Audit 2:** all 2,400 confirmatory world records matched their archived ZIPs; 22 selected point estimates were independently checked; and the frozen analyses reproduced all three complete confirmatory verdict JSON files **byte for byte**, including confidence intervals. **Audit 3:** the frozen simulators regenerated four selected sealed worlds (A1 test 000; B test 000; B5 test 000 and misspecification 000), with **identical scientific fields** after excluding execution-time metadata.

These checks demonstrate source integrity, archived-outcome analysis reproduction, and **sample-level** simulation reproduction. They do **not** constitute a full-pool simulator rerun, independent solver/evaluator validation, human peer review, or evidence that the models represent real-world institutions. No experimental verdict has been changed. The methods and reports are documented in the [research repository](https://github.com/BjornKennethHolmstrom/systemic-optimization) ([Audit 1](https://github.com/BjornKennethHolmstrom/systemic-optimization/blob/main/provenance/REPRODUCIBILITY_AUDIT_1.md), [Audit 2](https://github.com/BjornKennethHolmstrom/systemic-optimization/blob/main/provenance/REPRODUCIBILITY_AUDIT_2.md), [Audit 3](https://github.com/BjornKennethHolmstrom/systemic-optimization/blob/main/provenance/REPRODUCIBILITY_AUDIT_3.md)); access depends on its publication status.
