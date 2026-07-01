## 3. The relocation invariant

The strongest candidate for driving an adaptive boundary to L_c = 0 is automation: a system that updates its own rule with no human hand at the moment of execution. Consider the sharpest case — an immutable smart contract that executes an on-chain vote, or a "governance-minimized" DAO. The code is deterministic; no custodian touches the lever at execution.

Automation does not reach L_c = 0. It **relocates the irreducible link upstream rather than removing it**. The immutable contract closes the *execution* link but reopens the same vulnerability at the *specification* link: what counts as a valid vote (tokens standing for stakeholders), what a proposal means (its text standing for its intended effect), what quorum represents (a threshold standing for legitimate consensus). Attacking such a system requires touching none of the immutable code — only acquiring the representation (tokens), or exploiting the gap between a proposal's read meaning and its bytecode effect. That gap *is* the chain. This gives the invariant **[IP]**:

> **The relocation invariant.** Automating a link relocates the irreducible representational dependency; it does not delete it. Representation can be made *deterministic* (code executes exactly as written) but not *interpretation-free* (what the code should say, and whether the tokens represent the right parties, remains editable).

A note on naming. This regularity is not called a conservation law. A conservation law derives from a symmetry; none has been derived here. What is observed is that every attempt to remove a certification interface relocates it — an invariance under transformation, an empirical regularity across formalisms. "Relocation invariant" claims exactly that and no more.

