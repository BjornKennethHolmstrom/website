# Part I: The observability problem

## Observability in control theory

In the first two papers of this series, the central concept was controllability — the ability of a governance system to steer its state toward a desired target. This paper turns to the dual concept: observability.

A dynamical system is observable if its complete internal state can be reconstructed from the outputs available to the controller. Formally, for a system x(t+1) = Ax(t), y(t) = Cx(t), observability requires that the observability matrix O = [C; CA; CA²; …; CA^(n-1)] has full column rank. When this condition fails, some dimensions of the system's state are invisible to the controller regardless of how long it observes and regardless of its computational sophistication. The information simply does not reach it.

The governance implication is direct. Citizen preferences constitute the internal state of the democratic system. Policy institutions are the controller. Representative structures — elections, parties, parliaments, cabinets, consultations — constitute the observation channel C. The observability question is: does the information in citizen preferences reach the policy layer in recoverable form?

This is distinct from the question of whether institutions are well-functioning. A perfectly honest, diligent, and well-resourced parliament operating in a five-layer representation system faces the same observability constraints as a corrupt one. The constraint is in the channel, not in the processor at the end of it.

## The representation chain as a degraded channel

Shannon's channel capacity theorem established that every communication channel has a maximum information transmission rate determined by its bandwidth and noise characteristics. Information that exceeds this capacity is irreversibly lost. No amount of error correction at the receiving end can recover it, because the information was never transmitted.

Each representation layer in a democratic system functions as a noisy, bandwidth-limited channel. Two mechanisms degrade the signal:

**Aggregation loss.** When individual preferences are summarised into a representative position — whether through voting, party platform formation, committee deliberation, or any other aggregating mechanism — the within-group variance of preferences is destroyed. If one representative speaks for ten constituents whose preferences span a wide range, that range disappears from the signal. The representative's position conveys the group mean (approximately) but loses all information about the distribution of preferences within the group. This loss is irreversible: no downstream process can recover the destroyed variance because it was never transmitted.

**Noise introduction.** Every representation mechanism is imperfect. Polling has sampling error. Media coverage selects and frames. Party platforms balance internal factions. Parliamentary deliberation produces compromises that do not cleanly reflect any constituent's preferences. Each imperfection adds noise to the transmitted signal. Unlike the signal, noise accumulates additively across layers — each layer contributes independently to the total distortion.

The combined effect: signal variance shrinks multiplicatively at each layer while noise grows additively. After enough layers, noise exceeds signal and the channel is no longer informative.

## The signal-to-noise ratio at the policy layer

For a representation chain of K layers, where layer k has aggregation ratio r_k and noise standard deviation σ_k, the surviving signal variance and accumulated noise at the policy layer are:

```
Var_survived(K) = Var_true · ∏_{k=1}^{K} (1/r_k)

Var_noise(K) = Σ_{k=1}^{K} σ_k²
```

The signal-to-noise ratio at the policy layer:

```
SNR(K) = Var_survived(K) / Var_noise(K)
```

When SNR `<` 1, noise variance exceeds surviving signal variance. The policy layer is receiving a signal in which noise is the dominant component. Its observations are more informative about the properties of its representation machinery than about the actual preferences of its citizens.

This is the constitutional unobservability threshold. It is not a soft degradation — a gradual decline in accuracy. It is a phase transition: above the threshold, the policy layer has a noisy but informative signal; below it, the signal is dominated by noise and no statistical technique can reliably recover the true citizen preference distribution.

## The averaging problem revisited

Paper one of this series introduced the averaging problem: centralized controllers operating on aggregated signals cannot distinguish which nodes are in distress, because aggregation destroys spatial information. The observability problem in democratic representation is the same mechanism applied to preference space rather than geographic space.

When a national government observes its citizens through five layers of representation, the spatial variation in preferences — across regions, communities, demographic groups, economic circumstances — is systematically compressed at each layer. What reaches the policy layer is a small residual of the original variance, embedded in a much larger volume of accumulated noise.

The parliamentary averaging problem: a parliament of 300 members, each representing roughly 150,000 constituents, has already performed an aggregation of ratio 150,000. The variance within each constituency is entirely invisible to the parliamentary chamber. The chamber itself then aggregates 300 positions into a governing coalition, a majority, a cabinet — performing further aggregation and introducing further noise. By the time a policy decision is made, it reflects a signal that has passed through all of these stages.

This does not mean parliamentary systems produce bad policy. It means they produce policy that is structurally disconnected from the full distribution of citizen preferences, and that no institutional reform within the existing layer structure can reconnect them. The information was lost before it arrived.

## What observability failure looks like in practice

Constitutional unobservability does not mean government is unresponsive. It means government is responsive to something other than citizen preferences — specifically, to the noise structure of its own representation machinery.

A government operating below the SNR threshold will still update its policies over time. It will respond to the signals it receives. But those signals are predominantly noise: the strategic positioning of parties, the framing effects of media, the path dependencies of committee deliberation, the preferences of organized interests who have learned to inject signals into the representation chain. The policy process is responsive — but to these intermediate signals, not to the underlying citizen preferences they are supposed to represent.

This provides a structural explanation for a persistent empirical observation in political science: the correlation between citizen preferences and policy outcomes is weak and declining across most established democracies. The standard explanations — capture by elites, partisan polarization, institutional sclerosis — are real. But they are operating on a system that is already architecturally incapable of reliable preference transmission. The capture is easier because the signal was already weak.
