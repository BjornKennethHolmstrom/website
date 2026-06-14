## Appendix D — Endogenous Preferences: A Limitation Acknowledgment

### D.1 The Exogeneity Assumption

The model in this paper treats citizen preferences as exogenous to the representation system. Preferences evolve through individual drift and occasional genuine shifts, but the representation chain does not influence what citizens want—it only observes and degrades the signal. This is a deliberate simplification that isolates the observability mechanism.

In reality, preferences are partly endogenous to the governance system that claims to represent them. Media coverage does not merely report public opinion; it shapes which issues citizens consider salient and how they evaluate them. Party platforms do not merely aggregate member preferences; they actively construct political identities and define the terms of political debate. Policy outputs, mediated through institutions, media environments, and material incentives, shape subsequent preferences. The representation system does not stand outside the preference-formation process, observing it from a distance. It participates in it.

### D.2 The Closed-Loop Identification Problem

In control-theoretic terms, the full system is a closed loop: citizen preferences influence policy, and policy—mediated through the institutional, informational, and material channels described above—feeds back into citizen preferences. The representation chain sits in the feedback path of this loop. The observability analysis of this paper examines only the forward path—from citizens to policy—and treats the return path as absent.

This has a specific formal consequence. In system identification, estimating the parameters of a feedback loop from input-output data requires special care: if the input (citizen preferences) is correlated with the output noise (policy outputs feeding back into preference formation), the standard open-loop estimators are biased. The representation chain's degradation parameters (aggregation ratios, noise levels) cannot be estimated from observed preference-policy correlations without modelling the feedback path as well, because the observed correlation reflects both the forward degradation and the reverse influence.

The endogeneity of preferences strengthens rather than weakens the architectural diagnosis. In the exogenous case, the controller attempts to observe an independently evolving preference distribution. In the endogenous case, it attempts to observe a distribution that it partially creates through its own actions. The identification problem is therefore strictly harder, not easier. The controller is not merely observing a moving target; it is observing a target that moves in response to the act of observation.

### D.3 Why the Exogeneity Assumption Is Defensible for This Paper

Despite this limitation, the exogeneity assumption is defensible for the specific claim this paper makes. The constitutional unobservability result depends only on the forward path: the multiplicative loss of signal variance and the additive accumulation of noise as preferences pass through aggregation layers. Even if the reverse path is strong—even if media and parties and policy outputs substantially shape what citizens want—the forward path is still the mechanism through which those preferences, once formed, reach the policy layer. If the forward path is below the SNR threshold, then whatever preferences citizens hold—whether exogenously generated or endogenously shaped—cannot be reliably transmitted to the decision layer.

The practical significance of the result may in fact be greater in the endogenous case. *If the representation system shapes preferences but cannot then observe them accurately, it is governing on the basis of a signal that it has itself distorted, without being able to distinguish the distortion it introduced from the preferences it was supposed to measure.* This is a more severe form of the self-referential blindness that the paper already diagnoses: the controller is not merely blind to the system it governs, but blind to its own contribution to the blindness.

### D.4 Implications for Future Work

A full treatment of endogenous preferences would require modelling the complete feedback loop: citizens → representation chain → policy → media/parties/outcomes → citizens. This introduces several complexities beyond the scope of this paper:

- **Identification of feedback direction.** When observed preference-policy correlations are weak, is it because the representation chain degrades the forward signal (the observability hypothesis), because policy shapes preferences in ways that mask the original signal (the endogeneity hypothesis), or both? Disentangling these requires instruments or natural experiments that shift representation quality independently of policy content.

- **Multiple equilibria.** A system with endogenous preferences may have multiple stable equilibria: a high-trust equilibrium where preferences are transmitted accurately and policy responds appropriately, and a low-trust equilibrium where preferences are distorted by a degraded representation system and policy responds to the distortion, further degrading the signal. The constitutional unobservability threshold may interact with these equilibria in ways the current model cannot capture.

- **Structural path dependence.** Because preferences are partially shaped by previous policy outputs, representation architectures may exhibit path dependence. Early distortions—a media environment that systematically over-represents certain preferences, a party system that suppresses certain dimensions of political conflict—can accumulate into persistent preference configurations that survive even after the original structural cause is removed. This introduces memory effects beyond the scope of the current analysis.

- **Normative complexity.** If the governance system partly creates the preferences it claims to represent, the normative status of "representing preferences accurately" becomes ambiguous. Is a system that shapes preferences and then responds to them more or less democratic than one that merely degrades exogenous preferences? The information-theoretic framework of this paper cannot answer this question, but it can specify the conditions under which the question becomes empirically relevant.

### D.5 Connection to Later Papers in the Series

The endogenous preferences question did not disappear after Paper III. It gradually became formalised elsewhere in the series, as the theoretical architecture developed the tools to address it.

Paper VI's treatment of value architectures as observation channels addresses how governance systems select which dimensions of reality to attend to—including, by implication, which dimensions of citizen preference to measure and which to ignore or suppress. A value architecture that excludes certain preference dimensions (community wellbeing, future generations, non-human interests) is not merely failing to observe them; it is actively shaping a political environment in which those preferences are less likely to be formed and expressed.

Paper XIII's treatment of legitimacy as an emergent coupling state models a specific instance of preference-policy feedback: governance performance influences citizen trust, which in turn alters the effectiveness of future governance actions and observations. When trust collapses, citizens do not merely stop complying with directives—they alter their reporting behaviour, their political engagement, and ultimately the preferences they express through formal channels. The legitimacy dynamics of Paper XIII are one mechanism through which policy feeds back into the preference distribution that Paper III treats as exogenous.

Paper XIV's treatment of governance as an adaptive controller addresses the learning problem that endogenous preferences create: a controller that shapes the system it is trying to observe must disentangle the effects of its own actions from the underlying dynamics it seeks to understand. The dual control framework of Paper XIV is the formal apparatus for managing exactly this entanglement.

The present appendix is a placeholder for the formal integration of these themes. It acknowledges that Paper III's model is a tractable simplification whose main result survives the relaxation of its strongest assumption—and it points toward the later papers where the relaxation is gradually accomplished. The series' own trajectory mirrors the adaptive learning it recommends for governance systems: assumptions are made explicit, limitations are acknowledged, and subsequent work gradually expands the framework to address what earlier work bracketed.
