+++
title = "Public Key Cryptography using Elliptic Curves"
date = 2018-06-02
draft = false

tags = ["ECC", "Cryptography", "Security", "Encryption", "Decryption"]

math = true

[header]
caption = "Elliptic Curve Addition (Image By SuperManu [<a href=\"http://www.gnu.org/copyleft/fdl.html\">GFDL</a> or <a href=\"https://creativecommons.org/licenses/by-sa/3.0\">CC BY-SA 3.0</a>], <a href=\"https://commons.wikimedia.org/wiki/File:ECClines.svg\">via Wikimedia Commons</a>)"

+++

[**Trapdoor functions**](https://en.wikipedia.org/wiki/Trapdoor_function) or **one-way functions** are essential for the working of public key cryptography or asymmetric cryptography where computing the reverse of the function is not feasible by modern day computers. Multiplication of two primes is easy but factoring a product of two primes is difficult, and this forms the basis of RSA cryptography, the widely used public key cryptography system. If you do not know what RSA is, I suggest reading [this](https://brilliant.org/wiki/rsa-encryption/). In this post, I talk about another asymmetric cryptography system known as Elliptic Curve Cryptography.<!--more-->

## Elliptic Curve Cryptography

Elliptic curves are planar curves defined by the following equation.

$$y^2 = x^3 + ax + b$$ where $a$ and $b$ are constant and $4a^3 + 27b^2 \ne 0$ to avoid singular points.
The elliptic curves are symmetric about the x-axis.

Geometrically they look like this:[^pic1]

{{< figure src="https://upload.wikimedia.org/wikipedia/commons/d/db/EllipticCurveCatalog.svg" title="Elliptic Curves with different values of $a$ and $b$" numbered="true" >}}

[^pic1]: By Tos [Public domain], <a href="https://commons.wikimedia.org/wiki/File:EllipticCurveCatalog.svg">from Wikimedia Commons</a>

To use elliptic curves for cryptography, a random large prime, $p$ (or a perfect power of $2$) is chosen, and all the points on the curve are the points satisfying equation where each operation is under modulo $p$. The elliptic curve over the finite field of integers modulo $p$ would look like this:[^pic2]

[^pic2]: By trshaffer [<a href="http://creativecommons.org/publicdomain/zero/1.0/deed.en">CC0</a>], <a href="https://commons.wikimedia.org/wiki/File:Elliptic_curve_on_Z89.svg">from Wikimedia Commons</a>

{{< figure src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Elliptic_curve_on_Z89.svg" title="Elliptic curve on Z mod 89" numbered="true" >}}

Now we define addition and scalar multiplication among the points on the plane.

### Addition

Consider two points, $A$ and $B$ on the curve, now draw a line joining $A$ and $B$. This line intersects the curve at another point $C$. Let the reflection of the point $C$ about x-axis be $D$. Since elliptic curves are symmetric about the x-axis, $D$ is also on the curve and $D$ is denoted $A + B$.

Under modulo arithmetic, the XY plane is bounded. The line joining $A$ and $B$ once when crosses the bounded plane on one side wraps around and comes out from the other side of the plane at the opposite point with slope same as the original slope and continue further until it intersects at some point on the curve.

Now, consider $A$ and its reflection of $A$ about the x-axis as $B$. The line joining $A$ and $B$ never intersect the curve. We can think of it as the line meeting the curve at infinity($O$), i.e. $A + B = O$.

We call $B$ as the inverse of $A$ and $O$ as the identity under this specially defined addition operation. $B$ is also written as $-A$.

### Scalar Multiplication

Lets first define $2A = A + A$. For this, we consider the tangent at $A$ and find the reflection about the x-axis of the point at which the tangent intersects the curve. This point is defined as $2A$. Inductively, we can define $kA$ (scalar multiplication).

Let $B = kA$. Since all these points are over the finite field of integers modulo $p$, it turns out that computing $B$ from $k$ and $A$ is easy, but it is not feasible to compute $k$ from $A$ and $B$. The reason for infeasibility is the difficulty of computing discrete logarithm in this finite field. This scalar multiplication is the one-way function that forms the basis of the elliptic curve cryptography.

## Encryption and Decryption

There are many proposed algorithms for encryption/decryption using elliptic curves. The one I describe here is analogous to ElGamal public key encryption algorithm[^elgamal].

[^elgamal]: [Handouts on ElGamal Algorithm](http://homepages.math.uic.edu/~leon/mcs425-s08/handouts/el-gamal.pdf), MCS 425, Spring 2008, Dept. of Mathematics, Statistics and Computer Science, UIC

Consider that Alice wants to send a message $P_m$ to Bob. Both Alice and Bob decide on the elliptic curve equation, and a point $G$ on the curve called as the generator. The recommended equation and generator pair is given by [Standards of Efficient Cryptography](http://www.secg.org/sec2-v2.pdf). Bob chooses a random number $k_B$ and calculates $k_BG$. The integer $k_B$ forms the private key and $k_BG$ forms the public key.

Alice chooses a random integer $k$(each time Alica has to choose different $k$) and calculates the cypher text as follows:
$$P_c = (kG, P_m + kP_B)$$
Here $P_B = k_BG$ is the public key of Bob.

Bob receives the cypher text and decrypts the message as follows:
$$P_m = (P_m + kP_B) - k_B(kG)$$

## Conclusion

ECC with a private key of size 256 bits offers the same security as RSA used with 3072 bits size key[^1]. Hence ECC is more used when compared to RSA for mobile devices where the size of the key matters. The operation of encryption and decryption is symmetric in case of RSA hence the same can be used for Digital Signatures, but it is not the same in ECC, and hence a different algorithm is used for signing[^2].

[^1]: [Elliptic Curve Cryptography](https://www.globalsign.com/en/blog/elliptic-curve-cryptography/), GlobalSign Blog
[^2]: [Elliptic Curve Digital Signature Algorithm](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm), Wikipedia
