<template>
  <div class="pgp">
    <h1>This is my PGP policy.</h1>
    <br />
    <h2>Basic Information</h2>
    Key signing policy for Michael Hülsen <br />
    Version: 1.2, 2019-05-27<br />
    Initial policy valid from: 2015-04-22 <br />

    <br />
    <br />
    <h2>Change Log</h2>
    <ul>
      <li>1.2: updated version, date 2019-05-27</li>
      <ul>
        <li>spelling corrections</li>
      </ul>
      <li>1.0: initial version, date 2015-04-22, revised on 2015-04-23</li>
      <li>1.1: updated version, date 2017-01-02</li>
      <ul>
        <li>spelling corrections</li>
        <li>mail adresses formatted</li>
      </ul>
      <li>1.0: initial version, date 2015-04-22, revised on 2015-04-23</li>
    </ul>
    <br />
    <h2>Key Information</h2>

    <h3>Main Key</h3>
    <pre>
pub  4096R/40E6E6E7 
     2015-04-12
   Fingerprint=0E6B F1FA 
   E1EB 2204 A81E 089B 
   EB11 5D35 40E6 E6E7
uid  Michael Hülsen 
     &lt;m***l@m***n.de&gt;
uid  Michael Hülsen 
     &lt;m***n@g***l.com&gt;
uid  Michael Hülsen 
     &lt;c***g@m***n.de&gt;
sub  4096R/F4D63F5F 2015-04-12
sub  4096R/3B81482D 2015-04-12

</pre
    >
    <h3>Old Key</h3>
    <pre>
pub  2048R/24E82C6B 2014-02-23 
*** KEY REVOKED *** [not verified]
   Fingerprint=4601 5384 
   9C17 34CE 28EF B1D3 
   EC4A 4EA2 24E8 2C6B
sig revok  24E82C6B 2015-04-13 
    __________ __________ [selfsig]
uid  Michael Hülsen 
     &lt;m***l@m***n.de&gt;
uid  Michael Hülsen 
     &lt;m***n@g***l.com&gt;
uid  Michael Hülsen 
     &lt;c***g@m***n.de&gt;
sub  2048R/16562E75 2014-02-23

</pre
    >

    The present policy is used for signatures made with the GnuPG keys 0x40E6E6E7 and 0x24E82C6B.
    For security reasons I revoked the weaker key and I will use the stronger key pair for signing
    from now on. The policy may replaced by a newer version at any time. In case if there are any
    changes that lead to conflicts with (a) previous version(s) of the policy, the respective old
    version(s) will be hyperlinked from here.
    <br />
    <br />
    <h2>Signing Prerequisites</h2>
    <br />
    <h3>Signature Certification/Trust Levels</h3>
    <br />
    Signing keys includes a differentiation of trust levels that GnuPG offers:

    <ol start="0">
      <li>I will not answer. (default)</li>
      <li>I have not checked at all.</li>
      <li>I have done casual checking.</li>
      <li>I have done very careful checking.</li>
    </ol>

    Usually, I prefer to go for the very careful variant.

    <br />
    <h3>Verification of Identity</h3>
    First, the person who wants to get her/his key signed by me (person is called signee) has to
    prove her/his identity to me by means of a internationally/nationally valid identification card,
    driver's license, or passport. Of course, the token must carry a photograph of the signee and
    must contain the signee's real name. Ideally, the real name printed on the token must of course
    match the name shown in the corresponding public key identity.

    <br />
    <h3>Fingerprint</h3>
    Second, the signee must deliver a hardcopy/printout of her/his key's fingerprint to me. A
    hand-written document is welcome as well.<br /><br />
    It is favourable, that the signee has uploaded her/his key to one of the public pgp key servers.

    <br />
    <h3>Signing procedure</h3>
    First, I will retrieve the signee's public key (example: 0011AA44) from a key server.

    <pre>
gpg --recv-keys 0011AA44
    </pre>

    Then, I will check the fingerprint information of the retrieved key against the hardcopied
    fingerprint information you gave me.

    <pre>
gpg --fingerprint 0011AA44
    </pre>

    If there is a match and the previous identity check was valid, the key will get signed. The
    cert-level will be set individually. If there is a need for signing multiple IDs (email
    adresses) associated with the key, they will get signed separately.

    <pre>
gpg --sign-key 
    --ask-cert-level 0011AA44
    </pre>

    Then, the armored ASCII version of the signed key/identity will be exported.

    <pre>
gpg --armor 
    --output 0011AA44-signed.asc 
    --export 0011AA44
    </pre>

    Afterwards, every signed and exported public key block will be sent as an encrypted email to the
    correspondent key owner/holder/identity separately.

    <br />
    <br />
    <h2>Sources</h2>
    <ul>
      <li>
        <a href="https://wiki.debian.org/Keysigning" target="new_window"
          >https://wiki.debian.org/Keysigning</a
        >
      </li>
      <li><a href="https://www.gnupg.org" target="new_window">https://www.gnupg.org</a></li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .pgp {
    min-height: 100vh;
    align-items: center;
  }
}
</style>
