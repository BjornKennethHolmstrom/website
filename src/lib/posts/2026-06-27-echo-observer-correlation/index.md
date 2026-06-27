---
title: >-
  The Echo Beneath the Facts: Frontier AIs Agree More When They Can't Look It Up
date: 2026-06-27T10:00:00.000Z
categories:
  - ai
  - epistemics
  - systems-thinking
tags:
  - ECHO
  - observer-correlation
  - epistemic-independence
  - AI-monoculture
  - LLM-evaluation
  - model-ensembles
  - scalable-oversight
  - forecasting
  - Governance-as-Engineering
coverImage: >-
  /blog/2026-06-27-echo-observer-correlation/images/header.png
---

There is a comforting intuition behind a lot of how we use AI: if one model can be wrong, surely several models, consulted together, will catch each other's mistakes. Ask five frontier systems instead of one and you get five points of view, five chances to notice the error, an average steadier than any single guess. It is the same intuition that makes us trust a panel over a pundit, a committee over a king.

I built a small instrument to check whether that intuition holds. The short answer is that it holds far less than you would hope — and, more strangely, it holds *least* in exactly the situation where you would expect the models to be on their own.

## The instrument

The tool is called [ECHO](https://bjornkennethholmstrom.github.io/echo/). The idea is simple enough to state in a sentence: give several observers the same set of questions, each with a known true answer, and measure not whether they are individually accurate but whether their *mistakes* are correlated.

This matters because of a piece of basic statistics. If you average N observers whose errors are independent, the error of the average shrinks roughly N-fold — that is the whole reason a panel beats a pundit. But if their errors are correlated — if they tend to be wrong in the same direction at the same time — averaging buys you almost nothing. They aren't a panel. They're an echo.

ECHO puts a number on that. It reports how correlated the errors are (a value it calls ρ, from 0 for fully independent to 1 for identical), and it translates that into something more legible: the *effective number of independent observers* your panel really amounts to. Five models with independent errors are worth five. Five models that all think alike are worth one, no matter how many you consult.

## The first experiment, and the obvious objection

The first battery I ran was a set of 240 development indicators — populations, GDP figures, life expectancies, emissions — for the year 2022, drawn from the World Bank. I asked four frontier models to estimate each value from their own knowledge, with no tools and no lookups, and fed their answers to ECHO.

The result was a moderate echo: ρ ≈ 0.57. The four models were doing the work of roughly one and a half independent observers, not four. Already a little sobering. But there was an obvious objection, and it was a good one.

2022 sits inside every one of these models' training windows. They have read the same Wikipedia, the same World Bank tables, the same statistical abstracts. Of course they agree — they're not reasoning, they're reciting, and they've all memorised the same source. On this reading the correlation is an artefact of shared training data and says nothing deeper. It's the single most natural way to wave the result away.

So I tried to take the memory away.

## The second experiment

The second battery was built to be impossible to memorise. Thirty-four quantities, every one of them resolved *after* the models' training cutoffs: medal counts from the Milan–Cortina 2026 Winter Olympics, closing levels of stock indices and exchange rates on a specific day in late May 2026, and recent macroeconomic readings — central-bank rates, inflation, unemployment — from the spring of 2026. The true answers exist and are sourced, but they could not possibly be sitting in any model's training data. This time I ran five models, adding a fifth to widen the panel.

If the first result had been shared memorisation, removing the memorisation should make the agreement fall apart. ρ should drop, perhaps toward the independence we were hoping for all along.

It rose. ρ ≈ 0.81 — markedly *higher* than on the memorisable data. Five models collapsing to the equivalent of about 1.2 independent observers. The echo did not weaken when I took the facts away. It got louder.

## What that inversion means

This is the part worth sitting with, because it turns the obvious objection on its head.

The correlation was never mainly in the models' shared databases. It is in their shared *reasoning*. On the 2022 data the models could occasionally diverge precisely *because* they'd memorised slightly different numbers — recall carries its own idiosyncratic noise, and that noise is a small source of independence. Strip the facts away and force them to genuinely estimate the unknown, and the common machinery underneath shows through more clearly, because the way these systems reason about an unknown quantity is more uniform than the trivia they each happen to have stored. Remove the memory and the monoculture gets *stronger*, not weaker.

The clearest evidence sits in one column of the output. On the post-cutoff battery, every single one of the five models *under-estimated* — not on average across the panel, but each model individually, and across every category of question. A shared directional blind spot, and one that cannot be memorisation, because there was nothing to memorise.

For the macroeconomic questions the cause is almost visible. A Middle East conflict broke out in late February 2026 and sent an energy shock through the world economy — inflation jumped, oil spiked, central banks that had been expected to cut were instead forced to hold or hike. None of this was knowable from the models' training data, which ended in a calmer, disinflating world. So all five models anchored on that earlier world and lowballed the 2026 inflation prints *in the same direction, together*. The macro questions were the tightest echo of all (ρ ≈ 0.89). One shared surprise, five identical misses.

And it is not merely that shared bias inflating the number. ECHO measures correlation on *centred* errors — it subtracts each model's average miss before computing ρ — so the 0.81 is the co-movement that remains *after* the common lowball is removed. When one model is unusually far off on a particular item, the others tend to be off on that same item too. Two distinct forms of sameness, stacked: a shared direction, and correlated wobble around it.

## What I am not claiming

I want to be careful, because a result like this is easy to over-sell, and the honest version is more useful than the loud one.

The models are much *less accurate* on the post-cutoff battery — roughly three times the single-observer error of the 2022 set. These are genuinely hard quantities, so part of what's being measured is correlation among large errors. The two batteries also ask different questions, so this is a suggestive comparison, not a controlled before-and-after; the cleaner experiment would hold the quantities fixed and vary only their memorisability. And with only 34 items the confidence intervals are wide — roughly [0.43, 0.71] for the first run and [0.64, 0.91] for the second. They overlap at the edges. The *direction* of the jump is clear and survives the bias-centring check, but I would not call it a clean statistical knockout. It is a strong signal pointing somewhere, not a closed case.

## Why it matters beyond the curiosity

A great deal of current practice quietly assumes the thing this result questions. Model ensembles, LLM-as-judge evaluation pipelines, "ask several models and take the consensus" workflows, and many scalable-oversight proposals all lean on the premise that several models supply several *independent* checks. If their errors are correlated — and most of all on the open-ended judgment calls, rather than the lookups — then the consensus is reassuring without being informative. You have multiplied the appearance of corroboration without multiplying the evidence. The danger is sharpest exactly where these systems are used to watch each other.

That is the shape of the problem I find most worth naming: a monitoring arrangement can *feel* robust — five independent observers all agreeing — while actually being one observer reflected in five mirrors. The agreement is real. The independence is an illusion. And you cannot tell which you have by looking at the agreement; you have to measure the correlation of the errors against ground truth, which is the one thing ECHO is built to do.

## Try it, and tell me where I'm wrong

ECHO is a small, self-contained web tool. You can [open it here](https://bjornkennethholmstrom.github.io/echo/), feed it your own observers — AI models, expert panels, forecasters, indicators — against quantities with known answers, and see how independent they actually are and whether consulting more of them buys you anything. The example data and the method are there to inspect; nothing here asks you to take the finding on faith, which is rather the point.

I would genuinely like to know whether this matches what other people see. If you run model panels, build evaluation pipelines, study expert elicitation, or work on forecasting where the herding of forecasters is a live concern, I'd value hearing whether the inversion reproduces in your setting — and where the design is weakest. The build-out of this little programme is open to anyone whose strengths lie in the empirical validation, which is honestly not where mine are.

ECHO grew out of a broader project of mine, [Governance as Engineering](/syntheses), which treats institutions as feedback and control systems and asks, among other things, whether the channels through which a society senses the world are actually independent or just an echo chamber wearing many faces. This is the first instrument from that programme. The diagnosis was the easy part. Measuring it — and finding it pointing the wrong way from what I expected — is where it starts to earn its keep.
