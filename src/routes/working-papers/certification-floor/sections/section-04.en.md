## 4. The floor mechanism: irreducible world-certification

Why can the link not reach zero? The answer is not "representation is irreducible," which restates rather than explains. It comes from two disciplines that share no vocabulary and were asked the question in isolation.

In **trusted computing**, the trusted computing base shrinks under verification but floors at the root of trust plus the attestation verifier. Zero would require a self-verifying root — which introduces a Byzantine fault in the verification path unless some primitive is accepted as non-verifiable. The floor exists because verification cannot ground itself: the verifier needs a verifier, and the regress terminates only by trusting one primitive unverified.

In **contract theory**, the residual requiring ex-post interpretation falls with completeness but floors at facts not verifiable to third parties. The floor is the gap between the rule and whoever certifies that the rule's triggering fact obtained — a certification that cannot be folded into the contract.

These are one structure in two costumes. The root of trust and the third-party fact-certifier are the same object:

> **The irreducible link is always a world-certification link** — the point where an external fact must enter the system and be trusted, because certification cannot self-ground. Automation can relocate which fact must be certified, and can raise the cost of suborning the certifier, but cannot eliminate the certification step.

Automation cannot remove this link because it is not a processing step (verifiable) but a world-certification step (not verifiable without an external certifier, ad infinitum). This also closes a loop with Paper XVI's residual: the floor is, in each field, the system's inability to certify — or even enumerate — the part of the world it has not modeled. Decision theory's catch-all hypothesis, the contract's non-verifiable contingency, and the TCB's unverifiable root are one object seen three ways.

