## 1. The tradeoff: chain length against adaptivity

Paper XVI asked what makes a boundary durable against an optimizer that gains by moving it. Begin with a distinction the answer turns on.

A coordination boundary can enforce a rule in two structurally different ways. It can be **frozen into a physical invariant** — a mountain range that makes invasion from one direction impossible enforces "no invasion here" with no sensor, no custodian, and no interface to suborn. Or it can be **maintained through representation** — a rule that some agent senses is being violated, verifies against a standard, and acts on.

Name the first regime **L_c = 0**: zero editable links between the enforced constraint and the physical fact that enforces it. It buys *absolute enforcement* at the cost of *zero adaptivity*. The mountain enforces its rule perfectly and forever, and is helpless the moment the environment routes around it — the instant someone invents the airplane, the constraint is void, and it cannot update, because it has no representation of its own rule to revise. It is a frozen Execute phase with no Sense and no Learn.

Each editable link added moves the system to **L_c ≥ 1** and buys adaptivity — the capacity to detect violation, re-verify, and change the rule — at the cost of one more subornable interface. This yields the first result **[IP]**:

> The minimum chain length of any *adaptive* coordination boundary is **L_c ≥ 1**, and this is the price of adaptivity, not a definitional fact about governance.

The distinction matters because an earlier route to this claim was circular. "Governance coordinates agency; agency implies representation; therefore L_c ≥ 1" wins by defining governance to exclude the L_c = 0 cases (terrain, thermodynamic gradients, pure physical constraint), which do coordinate agency against counterfactuals with no representation. The non-circular route is the tradeoff: L_c = 0 coordination exists, but it cannot represent its own rule and therefore cannot adapt it. Governance is L_c ≥ 1 because governance is the kind of coordination that must update its rules — and updating requires representation, and representation is editable.

This folds directly into Paper XVI's coupling rather than standing apart from it. Source-term locality concerned the capacity to *generate alternatives*; chain length concerns the capacity to *update the rule*; both are one coupling — **the property that makes a system adaptive (a source term inside the loop, a representation of its own rule) is the same property that makes it editable, erodible, or subornable.** L_c = 0 is the limiting case: un-editability purchased by surrendering adaptivity entirely, the geographic equivalent of a fully concentrated posterior that can no longer learn.


