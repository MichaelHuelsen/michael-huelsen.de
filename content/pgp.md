+++
date = "2025-02-16"
draft = false
title = "PGP"
# type = "about"
+++

## Basic Information

Key signing policy for Michael Hülsen

Version: 1.2, 2019-05-27

Valid from: 2015-04-22

## Change Log

* 1.2: updated version, date 2019-05-27
  * spelling corrections
* 1.1: updated version, date 2017-01-02
  * spelling corrections
  * mail adresses formatted
* 1.0: initial version, date 2015-04-22, revised on 2015-04-23

## Key Information

### Main Key

    pub  4096R/40E6E6E7 
         2015-04-12
       Fingerprint=0E6B F1FA 
       E1EB 2204 A81E 089B 
       EB11 5D35 40E6 E6E7
    uid  Michael Hülsen 
         <m***l@m***n.de>
    uid  Michael Hülsen 
         <m***n@g***l.com>
    uid  Michael Hülsen 
         <c***g@m***n.de>
    sub  4096R/F4D63F5F 2015-04-12
    sub  4096R/3B81482D 2015-04-12

### Old Key

    pub  2048R/24E82C6B 2014-02-23 
    *** KEY REVOKED *** [not verified]
       Fingerprint=4601 5384 
       9C17 34CE 28EF B1D3 
       EC4A 4EA2 24E8 2C6B
    sig revok  24E82C6B 2015-04-13 
        __________ __________ [selfsig]
    uid  Michael Hülsen 
         <m***l@m***n.de>
    uid  Michael Hülsen 
         <m***n@g***l.com>
    uid  Michael Hülsen 
         <c***g@m***n.de>
    sub  2048R/16562E75 2014-02-23

The present policy is used for signatures made with the GnuPG keys 0x40E6E6E7 and 0x24E82C6B. For security
reasons I revoked the weaker key and I will use the stronger key pair for signing from now on. The policy may
replaced by a newer version
at any time. In case if there are any changes that lead to conflicts with (a) previous version(s) of the policy, the
respective old version(s) will be hyperlinked from here.

## Signing Prerequisites

### Signature Certification/Trust Levels

Signing keys includes a differentiation of trust levels that GnuPG offers:

* I will not answer. (default)
* I have not checked at all.
* I have done casual checking.
* I have done very careful checking.

Usually, I prefer to go for the very careful variant.

### Verification of Identity

First, the person who wants to get her/his key signed by me (person is called signee)
has to prove her/his identity to me by means of a internationally/nationally valid identification card,
driver's license, or passport. Of course, the token must carry
a photograph of the signee and must contain the signee's real name.
Ideally, the real name printed on the token must of course match the name shown in the corresponding
public key identity.

### Fingerprint

Second, the signee must deliver a hardcopy/printout of her/his key's fingerprint to me.
A hand-written document is welcome as well.

It is favourable, that the signee
has uploaded her/his key to one of the public pgp key servers.

### Signing procedure

First, I will retrieve the signee's public key (example: 0011AA44) from a key server.

    gpg --recv-keys 0011AA44

Then, I will check the fingerprint information of the retrieved key against the hardcopied
fingerprint information you gave me.

    gpg --fingerprint 0011AA44

If there is a match and the previous identity check was valid, the key will get signed.
The cert-level will be set individually. If there is a need for signing multiple IDs (email adresses)
associated with the key, they will get signed separately.

    gpg --sign-key --ask-cert-level 0011AA44

Then, the armored ASCII version of the signed key/identity will be exported.

    gpg --armor --output 0011AA44-signed.asc --export 0011AA44

Afterwards, every signed and exported public key block will be
sent as an encrypted email to the correspondent key owner/holder/identity separately.

## Sources

* [Debian.org - Keysigning](https://wiki.debian.org/Keysigning)
* [GnuPG.org](https://www.gnupg.org)
