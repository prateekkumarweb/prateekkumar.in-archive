+++
title = "Monotonicity Testing Lower Bounds via Communication Complexity"

[slides]
theme = "white"
+++
{{< slide class="slide-center" >}}

<small>Monotonicity Testing Lower Bounds via Communication Complexity</small>
=============================================================================

[Prateek Kumar](https://prateekkumar.in)

<small>Nov 9, 2018</small>

<small>CS5030: Communication Complexity\
Class Presentation</small>

---

## Property Testing

Let $D$, $R$ be two sets, then preperty $\mathcal{P}$ is
a set of functions from $D$ to $R$.

Examples: Linearity, Monotonicity

**Property Testing:** Given a black box which outputs $f(x)$ when provided with
query $x$, goal is to decide whether $f \in \mathcal{P}$ using as few queries to
the black box as possible.

Exact property testing requires $\Theta(|D|)$ queries.
So, our focus will be on randomized algorithms.

---

## $\epsilon$-Property Testing

Decide whether $f \in \mathcal{P}$ or $f$ is $\epsilon$-far from $\mathcal{P}$.

$f$ is $\epsilon$-far from $\mathcal{P}$ *iff* $\forall g \in \mathcal{P}$,
$f$ and $g$ differ at $\geq \epsilon|D|$ values.

**Query Complexity:** $\min\_{T \in \text{testers}} \max\_{f : D \to R} Q(T, f)$

Testers can be adaptive or non-adaptive, have one-sided or two-sided errors.

---

## Monotonicity testing upper bounds

**Boolean case:** $D = \\{0, 1\\}^n, R = \\{0, 1\\}$\
$f : \\{0, 1\\}^n \to \\{0, 1\\}$ is monotone iff $f(x\_0) \leq f(x\_1)$
for all $x\_0, x\_1$ such that $x\_0$ and $x\_1$ differ at $i$th bit only
and $x\_0$ has 0 as $i$th bit and $x\_1$ has 1 as the $i$th bit.

---

**Theorem:** For $\epsilon$-monotone testing (randomized), the upper bound on
number of queries is $O(\frac{n}{\epsilon})$. For larger ranges, it is
$O(\frac{n\log\_2(|R|)}{\epsilon})$ (Proof at the end, if time available)

---

## Monotonicity testing lower bounds

First we will see bounds for larger ranges($|R| = \Omega(n)$).

**Theorem:** For large enough ranges, $R$ and $\epsilon = \frac{1}{8}$
every adaptive monotonicty tester with 2-sided error
uses $\Omega(n)$ queries.

---

### Proof of the theorem

We will reduce $\text{DISJ}$ to $\frac{1}{8}$-monotonicity testing.

Let $T$ be a randomized tester to distinguish monotone and
$\frac{1}{8}$-far from monotone.

We will develop a public-coin
randomized protocol for $\text{DISJ}$.

Let $A, B \subseteq [n]$ and let Alice and Bob have $A$ and
$B$ respectively.

---

**Lemma:** Let $A, B \subseteq [n]$, function $h_{AB} : 2^{[n]} \to \mathbb{Z}$
defined as

$$
h_{AB}(S) = 2|S| + (-1)^{|S \cap A|} + (-1)^{|S \cap B|}
$$

then,

1. $A \cap B = \phi$ implies $h$ is monotone.
2. $A \cap B \neq \phi$ implies $h$ is $\frac{1}{8}$-far from monotone.

Let us assume the lemma is true (proof, we will see in sometime)

---

### Protocol

Alice and Bob will agree on random bits and feed those bits to
their own copies of the tester $T$.

The tester has to decide whether $h_{AB}$ is monotone or $\frac{1}{8}$-far
from monotone.

The tester will query for $h_{AB}(S)$ for some $S \in \\{0, 1\\}^n$.

Alice and Bob will together decide the value of $h_{AB}(S)$ and feed
their testers.

---

1. Until $T$ halts:
  * Let $S$ be the query asked by $T$.
  * Alice sends $(-1)^{|S \cap A|}$ to Bob. (1-bit)
  * Bob sends $(-1)^{|S \cap B|}$ to Alice. (1-bit)
  * Both compute $h_{AB}(S)$ and feed their testers.
2. If $T$ accepts $h_{AB}$ then Alice/Bob declare $\text{DISJOINT}$,
else they declare $\text{NOT DISJOINT}$

Communication complexity of the protocol
$= 2(\text{No. of queries asked by }T)$

---

Since $\text{DISJ}$ has $\Omega(n)$ public coin randomized complexity,
the query complexity of monotone is $\Omega(n)$.

---

## Proof of the lemma

Case (i) $A \cap B = \phi$

Let $S \subseteq [n] - \\{i\\}$.

Since $A$ and $B$ are disjoint, $i \notin $ at least one of
$A$ and $B$.

$h\_{AB}(S \cup \\{i\\}) - h\_{AB}(S) \geq 0$ \
$\forall i \in [n], S \subseteq [n] - \\{i\\}$

$\therefore$ $h_{AB}$ is monotone.

---

Case (ii) $A \cap B \neq \phi$

Let $i \in A \cap B$.

Consider $S \subseteq [n] - \\{{i\\}}$ such that
$(-1)^{|S \cap A|} = 1$ and $(-1)^{|S \cap B|} = 1$.

In this case,\
$h\_{AB}(S \cup \\{i\\}) - h\_{AB}(S) < 0$.

There are at least $2^{n-1}/4 = 2^n/8$ possible values for $S$ for a
given pair $A, B$. (Reason, next slide)

---

Consider sets $A' = A - B, B' = B - A$.

$Pr\_{S}[|S \cap C| \mod 2 = 0] = \frac{1}{2}$ for any non-empty set $C \subseteq [n]$

Assuming $A'$ and $B'$ to be non-empty.

Since $A', A \cap B, B'$ are all mutually disjoint, we have that the events
$(|S \cap A'| \mod 2 = 0)$, $(|S \cap (A \cap B)| \mod 2 = 0)$, $(|S \cap B'| \mod 2 = 0)$
are all mutually independent.

---

$\therefore Pr\_{S}((-1)^{|S \cap A|} = 1 \text{ and } (-1)^{|S \cap B|} = 1)$

$= Pr\_{S}(|S \cap A'| \mod 2 = 0$ and $|S \cap (A \cap B)| \mod 2 = 0$ and $|S \cap B'| \mod 2 = 0)$
$+ Pr\_{S}(|S \cap A'| \mod 2 = 1$ and $|S \cap (A \cap B)| \mod 2 = 1$ and $|S \cap B'| \mod 2 = 1)$
$= \frac{1}{2}\*\frac{1}{2}\*\frac{1}{2} + \frac{1}{2}\*\frac{1}{2}\*\frac{1}{2} = \frac{1}{4}$

*Note:* When $A'$ is empty, then both $A \cap B$ and $B'$ must have even number of elements and
same probability of 1/4 will be obtained.

---

For each of the possible pair $(S, S \cup \\{i\\})$,
we have to change one of the values of the function $h_{AB}$
(i.e. either $h\_{AB}(S)$ or $h\_{AB}(S \cup \\{i\\})$)
to make it monotone.

Total no. of such modifications $\geq \frac{2^n}{8}$\
$\therefore$ $h_{AB}$ is $\frac{1}{8}$-far from monotone.

---

### Query complexity when $|R| = \Omega(\sqrt{n})$

Trick is to truncate $h\_{AB}$ to obtain $h'\_{AB}$ as follows:

1. $h\_{AB}(S)$ $< n - c\sqrt{n} \implies h'\_{AB} = n - c\sqrt{n}$.
2. $h\_{AB}(S)$ $> n + c\sqrt{n} \implies h'\_{AB} = n + c\sqrt{n}$.
3. $h'\_{AB}(S) = h\_{AB}(S)$ in all other cases.

---

Case (i) When $A, B$ are disjoint, truncating gives another monotone function.

Case (ii) When $A, B$ are not disjoint, $h'\_{AB}$ turns out to be $\frac{1}{16}$-far
from monotone.\
First, see that $h\_{AB}$ and $h'\_{AB}$ differ in at most $\frac{1}{16}$ entries
(using Chebyshev's inequlaity).\
Hamming distance obeys triangle inequality. So $h'\_{AB}$ is $\frac{1}{16}$-far from
montone.

---

### Query complexity when $|R| = o(\sqrt{n})$

Let $m = |R|^2$

Consider a function $g : [m] \to R$.
In this case, we define $h : [n] \to R$ as
$h(S) = g(S \cap [m])$

$g$ is monotone $\implies$ $h$ is monotone (Clear from def.).

Next, we will show that\
$g$ is $\epsilon$-far from monotone $\implies$ $h$ is $\epsilon$-far from monotone.

---

Suppose $h$ is not $\epsilon$-far from monotone
$\implies$ $\exists$ monotone $h'$ such that
$Pr\_{X \subseteq [m], Y \subseteq [n]-[m]}[h(X \cup Y) \neq h'(X \cup Y)] \leq \epsilon$.

Using averaging argument,\
$\exists Y\_0$ such that
$Pr\_{X \subseteq [m]}[h(X \cup Y\_0) \neq h'(X \cup Y\_0)] \leq \epsilon$

Define $g'$ as $g'(X) = h'(X \cup Y\_0)$.\
$\therefore Pr\_{X \subseteq [m]}[g(X) \neq g'(X)] \leq \epsilon$\
$\implies$ $g$ is also not $\epsilon$-far from monotone.

---

To test $g$, we can test $h$ and return the result.

Since $g$ requires $\Omega(m)$ queries, $h$ also requires
$\Omega(m) = \Omega(|R|^2)$ queries.

---

## Monotonicity testing upper bounds

**Theorem:** For $\epsilon$-monotone testing (randomized) and boolean range,
the upper bound on number of queries is $O(\frac{n}{\epsilon})$.
For larger ranges, it is $O(\frac{n\log\_2(|R|)}{\epsilon})$.

(Proof on the board)

---

## References

1. Communication Complexity (for Algorithm Designers), Tim Roughgardden (Chapter 8).
2. Property Testing Lower Bounds Via Communication Complexity, Eric Blais, Joshua Brody, Kevin Matulef (Section 4).
