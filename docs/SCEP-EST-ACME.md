---
title: Wie man Zertifikate verteilt ohne verrückt zu werden
---



Der Author **{{ page.author}}** hat einen Github-Account:  [{% avatar devcon2012 %}](https://github.com/devcon2012)

(SCEP, EST, ACME)

Vorab: Begriffe? (X.509, RSA, EC, CSR, PKI, SHA, PKCSXXX ...?)

PKI     - Public-Key-Infrastruktur

X.509   - Ein Standard für Public-Key-Infrastruktur

PKCS    - Public-Key Cryptography Standards (PKCS) --> https://de.wikipedia.org/wiki/Public-Key_Cryptography_Standards

CSR     - Certificate Signing Request (PKCS10)

RSA     - (Rivest–Shamir–Adleman) ist ein asymmetrisches kryptographisches Verfahren

EC      - Elliptic Curve Cryptography (ECC) oder deutsch Elliptische-Kurven-Kryptografie

DH      - Diffie-Hellman-Schlüsselaustausch

SHA     - Standard Hash Algorithm

### 1. Wozu dienen Zertifikate ?

Alice   -> () ->   Bob

* Alice und Bob prüfen anhand der Zertifikate, das das Gegenüber der ist, der er sagt
* Sie handeln dann Schlüssel aus, mit deren Hilfe sie ihre Kommunikation sicher verschlüsseln können:
** Beide Seiten kombinieren den eigenen privaten Schlüssel mit dem öffentlichen Schlüssel aus dem Zertifikat des Gegenübers.
** Das mathematische Verfahren (Diffie-Hellman) garantiert, dass trotz unterschiedlicher Eingaben auf beiden Seiten das
   gleiche Ergebnis vorliegt. Dieses ist dann der gemeinsame, symmetrische Schlüssel. (Verschlüsselung mit symmetrischen Schlüsseln)
   ist sehr viel effizienter als mit asymmetrischen Schlüsseln)

Also: Wenn ich das erste Mal ein Zertifikat haben will, geht all das nicht.

### 2. SCEP, EST, ACME im Vergleich:

2.1 SCEP: "Sesam öffne dich!"

SCEP - Secure Certificate enrollment Protocol, Verisign/Cisco, RFC 8894 (2020, erste Drafts 2000)

A: Hey Bob, ich bin Alice und möchte gerne ein Zertifikat. Das Passwort ist "Sesam öffne dich"
B: Alles klar Alice, hier bitte!

* Alice ist nicht sicher, ob sie mit Bob redet.
** SCEP ist alt und verwendet http. Verwendung von https hilft hier- wenn ich bereits Stammzertifikate habe
* Bob ist nicht sicher, ob er mit Alice redet- Cecilia würde das gleiche Passwort verwenden.
** Wird das Passwort kompromittiert, kann man alle seitdem ausgestellten Zertifikate zurückziehen.
** Ist der Zeitpunkt unbekannt, kann man alle zurückziehen.
** Diese Problem ist irreparabel: SCEP selbst hat keine starke Authentisierung
* Handys (iOS / Androiden) bekommen Zertifikate via SCEP / MDM


2.2 EST: "Mein Passwort ist ..."

EST - Enrollment over Secure Transport, Cisco, RFC 7030 (~2013, updates bis heute)

A: Hey Bob, ich bin Alice und möchte gerne ein Zertifikat. MEIN Passwort ist "MxZ12%&"
B: (Sieht in seinem Verzeichnis bei Alice nach, findet 'MxZ12%&' ) Alles klar Alice, hier bitte!

* Alice hat vorher irgendwie ein Passwort / Geheimnis bekommen
* Sie reden nur per https.
* Im IOT Kontext ist EST weit verbreitet


2.3 ACME: "Mein Website ist www.alice-blog.de"

Automatic Certificate Management Environment (ACME), RFC 8555, erste Drafts ~ 2015
Verwendet von Lets Encrypt- jeder kriegt ein Zertifikat. (Welche Aussagekraft hat es dann?)

A: Hey Bob, ich bin Alice und möchte gerne ein Zertifikat für www.alice-blog.de

B: Kann ja jeder kommen. Poste mal "Bob sagt: ACME ist geil- 7546456" auf deinem Site.

A: (Macht das) - Hey Bob, ich hab das gepostet!

B: (Prüft das) - Ok, stimmt. Kannst jetzt einen Antrag stellen

A: (Stellt einen Antrag, indem sie einen "CSR" einreicht)

B: (Prüft den Antrag, dass wirklich nur www.alice-blog.de drin steht)

A: Schon fertig?

B: Moment noch .. jetzt! Kannst dir dein Zertifikat holen, habs unterschrieben.

A: (Holt sich das Zertifikat) - Danke!

* ACME prüft die Kontrolle über "Identifier" (hier www.alice-bclog.de) mittels "Challenges"
* Wer eine Challenge erfüllt, hat die Authorisierung, ein Zertifikat zu erhalten, das die
  Kontrolle über diesen Identifier bestätigt

Zur Aussagekraft: Ja, jeder kriegt ein Zertifikat, Nein, nicht jeder bekommt ein Zertifikat für alles.



### 3. Technische Details

3.1 SCEP

* Zwischen Alice und Bob werden PKCS7 / CMS ("verschlüsselte ZIPs") Botschaften ausgetauscht.
  Interface zume CMS-erzeugen leider absurd kompliziert
* Durch Signaturen wird der Besitz des Privatekey und die Integrität, durch Verschlüsselung die
  "Geheimhaltung" sichergestellt (https dazu nicht nötig, erlaubt aber die sichere Identifizierung
  des Servers
* https://nvd.nist.gov/vuln/detail/CVE-2017-2380 - Keine starke Authentisierung
  statt dessen challenge im CSR
* https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=SCEP
* Aktionen wie CA beziehen, CSR übermitteln oder Zertifikat verlängern per Aktion im CMS
* Hat Probleme mit EC-Keys (Wg. Signaturen)
* Siehe Opensource Projekte libscep / sscep auf Github

3.2 EST

* REST artiges Interface, https,
* starke Authentisierungs
* An festen "Endpunkten" werden Operationen durchgeführt


API Endpoint	Operation	Description

/.well-known/est/cacerts	Distribution of CA Certificates	The EST client can request a copy of the current CA certificates with HTTP GET operation (RFC 7030 Section 4.1).

/.well-known/est/simpleenroll	Enrollment of Clients	EST clients request a certificate from the EST server with an HTTPS POST operation (RFC 7030 Section 4.2).

/.well-known/est/simplereenroll	Re-enrollment of Clients	EST clients renew/rekey certificates with an HTTPS POST operation (RFC 7030 Section 4.2.2).

/.well-known/est/fullcmc	Full CMC	An EST client can request a certificate from an EST server with an HTTPS POST operation (RFC 7030 Section 4.3).

/.well-known/est/serverkeygen	Server-Side Key Generation	An EST client may request a private key and associated certificate from an EST server using an HTTPS POST operation (RFC 7030 Section 4.4)

/.well-known/est/csrattrs	CSR Attributes	CA policy may allow inclusion of client-provided attributes in certificates that it issues, and some of these attributes may describe information that is not available to the CA.

In addition, a CA may desire to certify a certain type of public key and a client may not have a priori knowledge of that fact. Therefore, clients SHOULD request a list of expected attributes that are required, or desired, by the CA in an enrollment request or if dictated by local policy. (RFC 7030 Section 4.5)

* Siehe libest- Server / Clients auf Github

3.3 ACME

* REST Interface, https, JWK
* starke Authentisierung per "Challenge"- Kontrolle über einen "Identifier"
* ziemlich simpel, als client genügt bash/curl/openssl..
* Server zB Boulder (Von Letsencrypt verwendet) bzw. Pebble (Zum Testen/entwickeln), beide in Go und auf Github
* Eine umfangreiche Liste von offenen Clients auf https://letsencrypt.org/de/docs/client-options/

