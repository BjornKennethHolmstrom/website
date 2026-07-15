## 2. Learning is not adaptation [R for the separation, IP for the governance reading]

### 2.1 Two definitions that do not coincide

The series has treated learning and adaptation as near-synonyms often enough that the slide between them has become invisible, and natural language encourages it: we say a system "learned" and mean it "adapted," as though improving one's model of the world and staying coupled to it were the same achievement. They are not, and the separation is worth stating precisely because everything in this paper's lifecycle depends on it.

*Adaptation* is the process that maintains adequate coupling between a controller and its environment under change, such that the controller keeps meeting its viability conditions — performance within bounds, essential variables in range, the loop with the world intact. It is judged by outcome: does the system remain coupled? It is a property of the whole loop's relation to the world.

*Learning* is the process of updating a controller's internal model — its representation, its predictive map, its parameters — from data. It is judged by the fidelity of that model: does the map track the territory better than it did? It is a property of the learner's relation to its own internal state.

The two are judged against different things, and once that is seen the dissociation is immediate. Learning can occur without adaptation: a controller can improve its model while its coupling degrades, which is exactly what §3 exhibits — the map sharpening as the grip fails. Adaptation can occur without learning: a controller with a fixed model can maintain coupling perfectly well if its fixed model happens to remain adequate, or if it adapts by non-learning means — buffering, redundancy, retreat to a robust default. Learning is one mechanism by which a system may maintain coupling. It is neither necessary for adaptation nor sufficient for it.

The adaptation triad of Paper XV already encodes the separation without having named it: Sense feeds Learn, but it is Execute that closes the loop with the world. Learning sits in the middle of that chain, and a middle stage can succeed while the stage that actually touches the world fails. If Execute is broken — if the loop cannot act on what the model now knows — then learning has no adaptive effect at all, however much fidelity it gains. The map is not the coupling, and the stage that improves the map is not the stage that maintains the coupling.

### 2.2 What learning costs the loop

The reason the two can oppose each other, rather than merely differ, is that learning is not a free input to adaptation. It makes two demands on the loop that must act on its results, and the sharper form of this section's claim is about those demands.

Learning *reveals* latent mismatch. A better model surfaces discrepancies between what the controller believed and what the world is doing — discrepancies that were always there but that the coarser prior model did not represent. This is Paper XVI's source terms seen from the learning side: the newly-visible mismatch is real information, and it is also a new obligation, because a mismatch the controller can now see is one it must now act on or knowingly tolerate. Call this revealed demand.

Learning also *creates* incorporation cost. Acting on a revised model is not instantaneous; the loop must reorganize around the revision — retune the actuator, re-plan, re-coordinate the parts that depended on the old model — and that reorganization consumes capacity and induces a transient during which coupling is degraded precisely because the loop is in the middle of changing. Call this created demand. A model revision is a disturbance to the very loop that is supposed to benefit from it, before it is a benefit.

Against these two demands stands the loop's capacity to absorb them — to act on revealed mismatch and pay down incorporation cost without losing coupling. Write it as an inequality:

$$D_\text{revealed} + D_\text{created} \le C_\text{absorb}.$$

Adaptation succeeds when the demand learning makes actionable stays within what the loop can absorb, and fails when it does not. This is the condition §3 makes mechanical and tests: past a certain learning rate the revision stream exceeds $C_\text{absorb}$, and coupling degrades though fidelity keeps improving. The inequality is why the two quantities can be opposed rather than merely distinct — learning drives the left side up, and beyond the point where it crosses the right side, more learning is less adaptation.

### 2.3 A taxonomy of learning by its effect on coupling

The inequality sorts learning into three kinds, distinguished not by how much the model improves but by what happens to the loop that must incorporate the improvement.

Learning is *adaptive* when the revealed and created demand stays within absorptive capacity: the model improves, the loop incorporates the improvement without losing coupling, and fidelity and coupling rise together. This is the case the naming-slide assumes is the only one — learning that is also adapting.

Learning is *irrelevant* when it improves fidelity along dimensions the loop's coupling does not depend on. The model gets better at predicting things that do not bear on viability; no demand is made on the loop because nothing actionable was revealed, and coupling is unchanged. Harmless, and common — much of what a system learns does not matter to whether it stays coupled.

Learning is *maladaptive* when the demand it makes exceeds absorptive capacity: the revision stream disrupts the loop faster than the loop can reorganize, and coupling degrades. The model is improving and the system is failing, at the same time, for the same reason. This is the dangerous case, because every internal signal looks like success — the fidelity metric climbs monotonically into the regime where the coupling is collapsing — and a controller monitoring only its own learning would see nothing wrong until the loss of coupling arrived from a direction its self-assessment did not cover.

The governance reading, [IP] as always, is that an institution can be studying its problem more and more accurately while governing it worse and worse, and that the accuracy is no defense — may even be the mechanism of the failure, if the pace of revision outruns the institution's capacity to reorganize around each revised understanding. The reform that never settles because each new study forces another restructuring is not failing to learn. It is learning maladaptively: revealing and creating more demand than the loop can absorb, and mistaking the improving map for an improving grip. That mistake — the map's fidelity taken for the loop's health — is the first of the three lifecycle confusions this paper traces, and §3 shows it is not merely possible but mechanical.
