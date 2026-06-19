### Part I — Inherited Unobservability

#### 1.1 The node is a layer

Paper III modelled the representation chain as a degraded communication channel. Each layer aggregates — destroying within-group variance irreversibly — and adds noise; surviving signal shrinks multiplicatively while noise grows additively, until, beyond a threshold chain length, the signal at the policy layer is dominated by noise and no downstream technique can recover what aggregation destroyed. That paper drew one conclusion this one now turns at a right angle. It held institutional quality constant and varied chain structure, and found that a chain staffed by the most honest, diligent representatives imaginable produces the same observability outcome as one staffed by mediocre ones. The constraint was constitutional: built into the layer count, indifferent to the virtue of the people occupying the layers. **[R]**

The dual question is what happens when we hold the chain structure constant and vary the perceptual capacity of a single layer. A human decision node is not only a relay; it is itself an observation channel, with its own observation matrix mapping the slice of the plant it faces into the representation it passes upward. Call it C_node. Paper III's apparatus already tells us how to read the consequence. The institution's effective observation matrix is the composition of its formal sensing channel and the human nodes in series with it. If C_node is rank-deficient in some direction — if the operator simply cannot perceive a dimension of the state in front of them, possessing no repertoire for it — then that direction lies in the null space of the composite, and the observability matrix O = [C; CA; …] loses rank on the corresponding subspace. The dimension produces zero output regardless of its value. It is invisible to any observer downstream, exactly as Paper III's destroyed variance was, and for the same structural reason: the information was never transmitted. **[R]**

#### 1.2 The principle

This yields the paper's central result, stated as the operator-scale corollary of constitutional unobservability.

> **Inherited Unobservability.** For any governance architecture, observability with respect to a class of disturbances is upper-bounded by the observation capacity of the operator nodes through which information about that disturbance must pass. A perceptual deficiency at a node propagates to a rank deficiency of the chain, on the subspace the node cannot perceive, irrespective of the quality or quantity of the formal sensing infrastructure surrounding it. **[R]**

The rigour here is inherited, not fresh: the proposition is a redeployment of Paper III's rank argument with the node, rather than the chain length, as the source of the deficiency. The tag reflects derivational status. It carries one essential qualification, developed in Part V: the claim is structural, not metric. It says a node's rank deficiency propagates; it does *not* claim that C_node is estimable as a matrix, that operators can be ranked by how close their C_node sits to the identity, or that interventions move it in calibrated ways. None of that holds, and the principle does not need it. The structural statement — that what a node cannot perceive, the chain cannot perceive through it — stands on the algebra alone.

#### 1.3 Why interior dimensions bind

For most dimensions the principle is slack, because the operator is not the only path. External, measurable features of the plant — output, throughput, compliance counts, emissions — have formal channels that route around the human node: sensors, registries, administrative records, independent audit. A perceptually narrow operator degrades these dimensions only locally and recoverably, because another channel carries the same signal. The bound binds where there is no bypass.

Interior dimensions are where there is none. The generative states of the governed — humiliation, fear, the need for order, injured belonging, loss of standing — are real components of the plant's true state, causally upstream of the behaviours that eventually register in the data, and absent from direct measurement. They have no sensor. The only channel through which they enter the institution's representation is a human one: an operator who reads them, or fails to, off the people in front of them. For these dimensions C_node is not one path among several; it is the path. Its rank deficiency is therefore unrecoverable, and operator capacity becomes the binding constraint on what the institution can perceive.

> **Corollary (the interior bind).** For disturbances whose critical features are interior to human agents, and which therefore possess no formal sensing channel that bypasses human perception, operator capacity is the binding constraint on institutional observability. **[R]**

This is the exact dual of Paper III's quality-independence finding, and it carries the same uncomfortable edge. There, a well-run institution could not out-staff a chain that was structurally too long. Here, a well-resourced institution cannot out-instrument an operator who is perceptually narrow in the dimensions that pass only through them. More data does not help; better dashboards do not help; AI augmentation of the formal channel does not help — because the deficient channel is the one the augmentation cannot reach. The constraint is not in the infrastructure. It is in the node, and the institution inherits it.

---

