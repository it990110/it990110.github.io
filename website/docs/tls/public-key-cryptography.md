---
id: public-key-cryptography
title: Public Key Cryptography Basic
description: Overview of hash functionPublic Key Cryptography
---
Public-key cryptography, or asymmetric cryptography, is a cryptographic system that uses pairs of keys. Each pair consists of a public key (which may be known to others) and a private key (which may not be known by anyone except the owner). The generation of such key pairs depends on cryptographic algorithms which are based on mathematical problems termed one-way functions. ash function are called hash values, hash codes, digests, or simply hashes. 

## Key Generation
An unpredictable (typically large and random) number is used to begin generation of an acceptable pair of keys suitable for use by an asymmetric key algorithm.

![key-generation](/img/tls/key-generation.png)

## Asymmetric Key Encryption
In an asymmetric key encryption scheme, anyone can encrypt messages using a public key, but only the holder of the paired private key can decrypt such a message. The security of the system depends on the secrecy of the private key, which must not become known to any other.

![encryption](/img/tls/encryption.png)

## Authentication
With public-key cryptography, robust authentication is also possible. A sender can combine a message with a private key to create a short digital signature on the message. Anyone with the sender's corresponding public key can combine that message with a claimed digital signature; if the signature matches the message, the origin of the message is verified

![authentication](/img/tls/authentication.png)

## Key Exchange

:::tip

**Why key exchange required?**
1. The performance of encryption with public key is much less than with symmetric key.
2. The symetric key will be leaked when it send out from Internet.
3. The algorithm or protocol is required to obtain the symetric key safely.

:::

In the Diffie–Hellman key exchange scheme, each party generates a public/private key pair and distributes the public key of the pair. After obtaining an authentic (n.b., this is critical) copy of each other's public keys, Alice and Bob can compute a shared secret offline. The shared secret can be used, for instance, as the key for a symmetric cipher which will be, in essentially all cases, much faster.

![key exchange](/img/tls/key-exchange-simple.png)



> Reference 1: [Cryptographic Hash Functions](https://en.wikipedia.org/wiki/Public-key_cryptography).
