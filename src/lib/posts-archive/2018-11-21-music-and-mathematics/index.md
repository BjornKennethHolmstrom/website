---
title: A new word for octave and combinatorics and scales
date: 2018-11-21T00:00:00.000Z
categories:
  - mathematics
  - music
---

## A Replacement for the Word Octave  

To start with, we delineate the phenomena of an observable vibration or frequency audible to an observer over time. If it has a beginning and an end, it has a duration and is called a tone. The lowest audible dominant frequency is called the tones pitch. Then if we make that frequency twice as fast, the relative pitch is to the first one is what has been until now commonly been called an _octave_. As it is derived from the Latin word _octo_, which means "eight", it is based on the assumption that the selection of frequencies before a doubling of the frequency is seven, with the highest note making the eighth. This is however, often not the case and merely a tradition. For illustrative purposes, we provide the reader a list. Note that this is not complete but only provide a few out of many examples.  

- Bebop scales ([https://en.wikipedia.org/wiki/Bebop\_scale](https://en.wikipedia.org/wiki/Bebop_scale))

- Pentatonic scale ([https://en.wikipedia.org/wiki/Pentatonic\_scale](https://en.wikipedia.org/wiki/Pentatonic_scale))  
    

- Slendro-Jawar scale ([https://en.wikipedia.org/wiki/Slendro](https://en.wikipedia.org/wiki/Slendro))

- Whole-tone scale ([https://en.wikipedia.org/wiki/Whole\_tone\_scale](https://en.wikipedia.org/wiki/Whole_tone_scale))

These are only from the music history written as until today, and since many more examples might be created or discovered we thus propose for the Latin word _geminus_, meaning 'double' to be used instead. With this word we have an etymological meaning directly related to the actual change of pitch and we free ourselves from the assumption of a seven note scale. We will use geminus instead of octave in the remainder of this article.  

## Combinatorics and Scales

Assuming the range between a tonic and its geminus divided in x notes, what is the number of unique scales with y notes?

We start with a division into 1 note, then look through each subdivision into scales, iterating by adding one note at the time:

For intervals of one note, we have only one possible scale

For intervals of two notes, we can chose scales of one note, of which there are two, or a scale of two notes, of which there is one.

For intervals of three notes, we have

- Three scales of one note  
    

- Three scales of two notes

- One scale of three notes

For intervals of four notes, we have

- Four scales of one note  
    

- Six scales of two notes

- Four scales of three notes

- One scale of four notes

For brevity we now choose to not list the always occurring x scales of y notes and y scales of x notes

For intervals of five notes

- Ten scales with two notes

- Ten scales with three notes

- Five scales of four note

We can calculate further combinations either by formulas from of combinatorics, using the binomial coefficients (or [pascals triangle](https://en.wikipedia.org/wiki/Pascal%27s_triangle)) using the following formula

![](/blog/2018-11-21-music-and-mathematics/images/a2457a7ef3c77831e34e06a1fe17a80b84a03181)

Let's say we are especially interested in how many scales with seven unique tones can be derived from the common twelve tone range division of a geminus.

We insert 12 as _n_ and 7 as _k_ to get 12 \* 11 \* 10 \* 9 \* 8 \* 7 \* 6 \* 5 \* 4 \* 3 \* 2 \* 1 / ( 7 \* 6 \* 5 \* 4 \* 3 \* 2 \* 1 ) \* ( 5 \* 4 \* 3 \* 2 \* 1) = 12 \* 11 \* 10 \* 9 \* 8 / 5 \* 4 \* 3 \* 2 = 95040 / 120 = 792

Within this set of scales, a multiples of 12 can be seen as identical modes, that is, they have the same relative pattern transposed. This reduces the number of highly unique scales to 66. Now we can start to identify unique scales which have taken on names. We use a simple ASCII notation, where o represents a note part of a scale, and x a note not part of a scale, to create a textual representation of these 66 scales. We denote the root note by r and the geminus as g above the representation. We also introduce a numerical notation.  

To begin with, we have the scale where all selected notes are in a row. From this we can derive four other scales by simply moving one note apart from the others.  

```
r                         g           o o o o o o o x x x x x |    7o - 5xo o o o o o x o x x x x |    6o - 1x - 1o - 4xo o o o o o x x o x x x |    6o - 2x - 1o - 3xo o o o o o x x x o x x |    6o - 3x - 1o - 2xo o o o o o x x x x o x |    6o - 3x - 1o - 1x
```

Note that moving the single o to the rightmost position would be the first pattern, only transposed by one to the left.
