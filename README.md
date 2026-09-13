# Feodorov Garten & Entrümpelung – Website

## Ordnerstruktur
```
/
├── index.html          Startseite
├── faq.html             FAQ-Seite (eigenständig verlinkt)
├── impressum.html        Platzhalter-Impressum
├── css/
│   └── style.css        Gemeinsames Stylesheet
├── js/
│   └── main.js          Gemeinsames JavaScript (Navigation, aktive Menüpunkte, FAQ, Google Ads)
└── images/
    ├── logo.jpg                  FEO.A.S. Logo (rund zugeschnitten)
    ├── hero-garten.jpg           Hero-Foto (Fahrzeug auf Rasenfläche)
    ├── karte-gartenarbeiten.jpg  Echte Leistungskarte Gartenarbeiten
    └── karte-entruempelung.jpg   Echte Leistungskarte Entrümpelung
```

## Rechtliches
- Die **Bewertungssektion** wurde entfernt (keine Platzhalter-Kundenstimmen mehr auf der Seite).
- **Impressum**: `impressum.html` ist ein Platzhalter nach § 5 TMG-Struktur. Vor Veröffentlichung müssen Adresse, ggf. USt-ID und alle `[Platzhalter]` durch echte Angaben ersetzt werden. Die Seite hat `<meta name="robots" content="noindex">`, damit sie nicht mit unvollständigen Angaben in Suchmaschinen erscheint — nach dem Ausfüllen entfernen.
- **Datenschutz**: Kein Datenschutz-Link mehr im Footer. Sobald die Seite personenbezogene Daten verarbeitet (z. B. über Google Ads, ein Kontaktformular oder Tracking), ist eine Datenschutzerklärung gesetzlich erforderlich — bei Bedarf einfach Bescheid geben, dann wird eine Platzhalterseite ergänzt.

## Navigation
Der aktive Menüpunkt wird jetzt per JavaScript gesetzt (`js/main.js`): auf `faq.html` ist automatisch "FAQ" markiert, auf `index.html` wechselt die Markierung per Scroll-Position zwischen den Abschnitten.

## Hosting über GitHub Pages
1. Diesen kompletten Ordnerinhalt in ein neues (oder bestehendes) GitHub-Repository laden — **wichtig: die komplette Ordnerstruktur mit hochladen**, nicht nur `index.html` einzeln, sonst funktionieren die Verweise auf `css/style.css`, `js/main.js` und die Bilder nicht.
2. Im Repository unter **Settings → Pages** als Quelle den Branch (z. B. `main`) und den Ordner `/ (root)` auswählen.
3. Nach ein bis zwei Minuten ist die Seite unter `https://<dein-github-username>.github.io/<repo-name>/` erreichbar.
4. Alle Links in den Dateien sind **relative Pfade** (z. B. `css/style.css`, `images/...`) — das funktioniert sowohl direkt unter einer eigenen Domain als auch unter einem GitHub-Pages-Unterpfad wie oben, ohne Anpassung.

## Kontaktformular entfernt
Das große Kontaktformular im Kontaktbereich wurde entfernt. Kontaktaufnahme läuft jetzt ausschließlich über Telefon, WhatsApp und E-Mail-Link. Die kurze Anfrage-Box im Hero-Bereich ("Kostenlose Beratung") ist weiterhin vorhanden — falls die auch weg soll, einfach Bescheid geben.

## Leistungen
Die Seite bietet aktuell zwei Leistungen an:
- **Gartenarbeiten**: Rasen mähen, Hecke schneiden, Unkraut entfernen, Gartenpflege ganzjährig, u. v. m.
- **Entrümpelung**: Wohnungsauflösung, Keller- & Garagenräumung, Entsorgung nach Absprache

## Bereits eingetragene Kontaktdaten
- Inhaber: **Alexandru Feodorov**
- Telefon: **+49 179 4808051**
- E-Mail: **feodorov.alexandru.s@gmail.com**
- Der Geschäftsname "Feodorov Garten & Entrümpelung" wurde als Arbeitstitel angenommen, da kein eigener Firmenname angegeben wurde — bei Bedarf in `index.html`, `faq.html` (Logo, `<title>`, JSON-LD `name`) sowie im Footer beider Seiten anpassen.

## Bilder & Farben
Die Bilder im `images/`-Ordner sind aus den beiden von dir bereitgestellten Visitenkarten-Fotos zugeschnitten:
- `logo.jpg` — das FEO.A.S.-Logo, rund freigestellt für Header und Footer
- `hero-garten.jpg` — die Rasenfläche mit Firmenfahrzeug (ohne Textbanner) als Hero-Bild
- `karte-gartenarbeiten.jpg` / `karte-entruempelung.jpg` — die vollständigen Leistungskarten, unverändert im "Einblicke"-Bereich

Die Farbpalette (`css/style.css`, Variablen `--moss*` und `--kraft*`) wurde direkt aus deinem Logo und deiner Entrümpelungs-Karte abgeleitet: Markengrün für Gartenarbeiten, dunkles Anthrazit für Entrümpelung — passend zur bestehenden Optik deiner Visitenkarten.

Falls du später noch mehr/andere Fotos einsetzen willst: einfach in `images/` ablegen und die `src`-Pfade in `index.html` anpassen.

## Vor dem Livegang noch zu ergänzen
Im Code mit `[Platzhalter]`, `XXXXXXXXXX` oder `deine-domain.de` markiert:
- Echte Geschäftsadresse (Kontaktbereich + JSON-LD in `index.html`)
- Google Ads Conversion-ID (`AW-XXXXXXXXXX`) und Conversion-Labels in `js/main.js`
- Geo-Koordinaten im JSON-LD (`index.html`)
- `https://deine-domain.de` in den `canonical`-Links und im JSON-LD

## Formular
Das Kontaktformular zeigt aktuell nur eine Erfolgsmeldung an, sendet aber noch keine Daten. Für echten Empfang der Anfragen braucht es entweder ein eigenes Backend oder einen Formular-Service (z. B. Formspree) — siehe Chatverlauf für Details zu den Datenschutz-Unterschieden der Optionen.
