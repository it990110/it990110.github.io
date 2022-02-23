---
id: hash-function
title: Hash Function
description: Overview of hash function
---
A hash function is any function that can be used to map data of arbitrary size to fixed-size values. The values returned by a hash function are called hash values, hash codes, digests, or simply hashes. 

![asymmetric-overview](/img/tls/hash-functions.jpg)
**Input and data like food**
![asymmetric-overview](/img/tls/food.jpg)
**Hash Fucntion like digest**
![asymmetric-overview](/img/tls/digest.jpg)
**Hash Value like excrement**
![asymmetric-overview](/img/tls/excrement.jpg)
## The properties of hash functions
cryptographic hash functions exhibit these three properties:
- They are “collision-free.” This means that no two input hashes should map to the same output hash. 
- They can be hidden. It should be difficult to guess the input value for a hash function from its output. 
- They should be puzzle-friendly. It should be difficult to select an input that provides a pre-defined output. Thus, the input should be selected from a distribution that's as wide as possible. 

## Examples of Cryptographic Hash Functions
Cryptographic hash functions are widely used in cryptocurrencies to pass transaction information anonymously. For example, Bitcoin, the original and largest cryptocurrency, uses the SHA-256 cryptographic hash function in its algorithm. Similarly, IOTA, a platform for the Internet of Things, has its own cryptographic hash function, called Curl.

However, hashes have other applications in the real world. These are some of the most common cryptographic applications:

### Password Verification
Storing passwords in a regular text file is dangerous, so nearly all sites store passwords as hashes. When a user inputs their password, it is hashed and the result is compared to the list of hashed values stored on the company's servers. This is not a fool-proof practice, however, as the Collection #1 trove of 21 million stolen passwords, discovered in 2019, demonstrates.2

### Signature Generation and Verification
Verifying signatures is a mathematical process used to verify the authenticity of digital documents or messages. A valid digital signature, where the prerequisites are satisfied, gives its receiver strong proof that the message was created by a known sender and that the message was not altered in transit. A digital signature scheme typically consists of three algorithms: a key generation algorithm; a signing algorithm that, given a message and a private key, produces a signature; and a signature verifying algorithm. Merkle Trees, a technology used in cryptocurrencies, is a kind of digital signature.

### Verifying File and Message Integrity
Hashes can be used to make sure messages and files transmitted from sender to receiver are not tampered with during transit. The practice builds a "chain of trust." For example, a user might publish a hashed version of their data and the key so that recipients can compare the hash value they compute to the published value to make sure they align.

### Bitcoin practice
Mining: Breaking down everything you need to know about Bitcoin mining, from blockchain and block rewards to proof of work and mining pools.

Merkle Tree: In cryptography and computer science, a hash tree or Merkle tree is a tree in which every "leaf" (node) is labelled with the cryptographic hash of a data block, and every node that is not a leaf (called a branch, inner node, or inode) is labelled with the cryptographic hash of the labels of its child nodes. 

## MD VS SHA
Let us briefly see some popular hash functions

### Message Digest (MD)
MD5 was most popular and widely used hash function for quite some years. MD5 digests have been widely used in the software world to provide assurance about integrity of transferred file. For example, file servers often provide a pre-computed MD5 checksum for the files, so that a user can compare the checksum of the downloaded file to it.

### Secure Hash Function (SHA)
Family of SHA comprise of four SHA algorithms; SHA-0, SHA-1, SHA-2, and SHA-3. Though from same family, there are structurally different.

> Reference 1: [Cryptographic Hash Functions](https://www.investopedia.com/news/cryptographic-hash-functions/).

> Reference 2: [Hash function from WiKi](https://en.wikipedia.org/wiki/Hash_function).

> Reference 3: [Hash function image](https://www.tutorialspoint.com/cryptography/cryptography_hash_functions.htm).