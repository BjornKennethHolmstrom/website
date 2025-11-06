### Design Brief & Specifikation: Personlig Hub-webbplats (bjornkennethholmstrom.org)

**1. Projektöversikt**

**Mål:** Skapa en ensidig, statiskt genererad "Nav"-webbplats.
**Syfte:** Webbplatsen fungerar som en central, professionell landningssida för Björn Kenneth Holmström. Den ska introducera honom som systemtänkaren bakom ett ekosystem av projekt och fungera som en visuell, klickbar "karta" som leder besökare vidare till hans olika projekt, blogg och skrifter.

**2. Kärnfilosofi & Tonalitet**

* **Minimalistisk & Ren:** Komplexiteten ligger i projekten; navet måste vara radikalt enkelt.
* **Professionell & Koherent:** Sidan måste *kännas* som en del av samma tekniska och filosofiska familj som de andra `.org`-projekten (Spiralize, GGF, etc.).
* **Integrerad & Systemisk:** Designen ska visuellt gruppera och visa kopplingen mellan projekten.
* **Förtroendeingivande:** Sidan ska reflektera "öppen källkod, inga trackers, ingen backend"-etoset. Den är en resurs, inte en datainsamlare.

**3. Teknisk Specifikation (Tech Stack)**

* **Ramverk:** SvelteKit (med statisk sido-generering, SSG).
* **Styling:** Tailwind CSS.
* **Hosting:** Statisk värd (t.ex. GitHub Pages, Netlify, Vercel).
* **Krav:** Inga cookies (förutom ev. för ljus/mörkt läge), ingen databas, ingen spårning.
* **Språk:** Engelska och Svenska (modersmål), till att börja med.

**4. Visuell Identitet**

* **Färgpalett:** En neutral palett som låter projektloggorna "tala".
    * **Ljust läge:** Bakgrund: `off-white` / `väldigt ljusgrå` (t.ex. `bg-slate-50`). Text: `mörkgrå` (t.ex. `text-slate-900`).
    * **Mörkt läge:** Bakgrund: `väldigt mörkblå` / `grafit` (t.ex. `bg-slate-900`). Text: `ljusgrå` (t.ex. `text-slate-200`).
    * **Accentfärg:** En enskild, klar färg för länkar och hover-effekter (t.ex. en "turkos" eller "bärnsten").
* **Typografi:**
    * **Rubriker:** Ett rent, modernt sans-serif-typsnitt (t.ex. Inter, Rubik, eller Be Vietnam Pro).
    * **Brödtext:** Samma som rubriker, eller ett komplementärt sans-serif. Lättläst.

---

**5. Sidstruktur (Wireframe & Komponenter)**

Sidan ska vara en enda vertikal kolumn på mobil, och ett rutnät på desktop.

---

### **[Sektion 1: Hero]**

**Syfte:** En omedelbar, professionell introduktion.

* **Komponent:** En centrerad text-sektion.
* **Innehåll:**
    * `H1:` Björn Kenneth Holmström
    * `H2 (Subtitle):` Systemtänkare & Designer av medvetna system
    * `P (Kort bio):` En eller två meningar som definierar syftet.
        * *Förslag:* "Jag utforskar, designar och bygger öppna verktyg för mänsklig och planetär blomstring. Här är en karta över mitt arbete."

---

### **[Sektion 2: Ekosystemet (Huvudinnehåll)]**

**Syfte:** Huvudportalen. Presenterar projekten i logiska kluster.

* **Layout:** En responsiv CSS Grid. Varje projekt är ett "kort".
* **Kort-design:** Korten ska vara rena (t.ex. `bg-white` / `bg-slate-800`, `rounded-lg`, `shadow-md`). De ska innehålla:
    1.  Projektets logotyp (SVG).
    2.  Projektnamn (`H4`).
    3.  En kort tagline/beskrivning.
    4.  En tydlig knapp/länk (t.ex. "Utforska ->").

---

#### **Kluster A: System för samordning**

* `H3 (Sektionsrubrik):` System för planetär samordning
* **Layout:** Ett rutnät, t.ex. 2 kolumner.

* **Kort 1: Global Governance Frameworks**
    * **Logotyp:** GGF-logotyp.
    * **Tagline:** Ramverk för meta-styrning och interoperabilitet.
    * **Länk:** `globalgovernanceframeworks.org`

* **Kort 2: Fjärilspartiet**
    * **Logotyp:** Fjärilspartiets logotyp.
    * **Tagline:** Ett svenskt politiskt parti grundat i systemtänkande.
    * **Länk:** (Länk till partiets webbplats)

---

#### **Kluster B: Kvartetten för medvetenhet**

* `H3 (Sektionsrubrik):` En kvartett för medvetenhet
* **Layout:** Ett rutnät med 4 kolumner (på desktop).

* **Kort 3: Spiralize.org**
    * **Logotyp:** Spiralize-logotyp.
    * **Tagline:** Utforska Spiral Dynamics och medvetandeutveckling.
    * **Länk:** `spiralize.org`

* **Kort 4: Nondualize.org**
    * **Logotyp:** Nondualize-logotyp.
    * **Tagline:** Utforska icke-dualitet och medvetandets natur.
    * **Länk:** `nondualize.org`

* **Kort 5: Communize.org**
    * **Logotyp:** Communize-logotyp.
    * **Tagline:** Utforska gemenskap och skapandet av allmänningar.
    * **Länk:** `communize.org`

* **Kort 6: Universalize.org**
    * **Logotyp:** Universalize-logotyp.
    * **Tagline:** Utforska universellt perspektiv och kosmiskt ansvar.
    * **Länk:** `universalize.org`

---

#### **Kluster C: Personliga rum**

* `H3 (Sektionsrubrik):` Personliga rum
* **Layout:** Ett rutnät, t.ex. 2-3 kolumner.

* **Kort 7: Spiritualized.org**
    * **Logotyp:** Spiritualized-logotyp.
    * **Tagline:** Andlighet som tillåtelse att vara. En fristad för den överväldigade själen.
    * **Länk:** `spiritualized.org`

* **Kort 8: Blogg & Essäer**
    * **Logotyp:** (Kanske en enkel ikon av en fjäderpenna eller en öppen bok).
    * **Tagline:** Min personliga blogg, tankar och "whitepapers".
    * **Länk:** (Länk till din WordPress-sida eller framtida blogg).

* **Kort 9: Böcker**
    * **Logotyp:** (Ikon av en bok).
    * **Tagline:** Publicerade böcker och längre skrifter.
    * **Länk:** (Länk till boksida/butik).

---

### **[Sektion 3: Footer]**

**Syfte:** Avslutning, kontakt och etos.

* **Layout:** Enkel, centrerad eller uppdelad text.
* **Innehåll:**
    * `P (Etos):` "Byggt med öppen källkod och respekt för din integritet. Inga trackers."
    * `Länkar:`
        * GitHub
        * E-post (via `mailto:` eller kontaktformulärslänk)
        * Discord ("The Butterfly Hub")
