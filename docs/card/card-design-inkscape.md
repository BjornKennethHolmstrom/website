Absolut. Att sätta upp filen korrekt från början är det viktigaste steget för att få ett bra tryckresultat.

Här är en steg-för-steg-guide för hur du konfigurerar ditt visitkortsdokument i Inkscape. Vi ställer in det för standard europeisk visitkortsstorlek (85 x 55 mm) med korrekt utfall (bleed).

---

### 1. Sätta upp ditt dokument (arbetsytan)

När du skapar en fil för tryck måste du designa på en yta som är *större* än den slutgiltiga produkten. Detta extra utrymme kallas **utfall (bleed)** och klipps bort av tryckeriet. Detta garanterar att du inte får vita kanter om snittet är en bråkdel av en millimeter fel.

Standardutfall är 3 mm på varje sida.

* **Slutgiltig storlek:** 85 mm x 55 mm
* **Dokumentstorlek (med utfall):** 91 mm x 61 mm (85 + 3 + 3) x (55 + 3 + 3)

**Så här gör du i Inkscape:**

1.  Öppna Inkscape.
2.  Gå till **Arkiv > Dokumentegenskaper...** (Skift + Ctrl + D).
3.  Under fliken "Sida":
    * **Visningsenheter:** Ändra till `mm`.
    * **Enheter:** Ändra till `mm`.
4.  I rutan "Anpassad storlek":
    * **Bredd:** Skriv `91.0`
    * **Höjd:** Skriv `61.0`
5.  Stäng fönstret Dokumentegenskaper. Din arbetsyta har nu exakt rätt mått.

### 2. Lägga till hjälplinjer (utfall och säkerhetsmarginal)

Nu ska vi lägga till visuella guider så att du ser var tryckeriet kommer att klippa och var din text ska vara.

1.  Se till att "Linjaler" är synliga (Visa > Visa/Dölj > Linjaler).
2.  **Skapa utfallslinjer (Cut/Trim line):**
    * Klicka på den vänstra linjalen och dra ut en hjälplinjé. Släpp den vid `3 mm`.
    * Dra en till från vänster och släpp den vid `88 mm` (91 - 3).
    * Klicka på den övre linjalen och dra ut en hjälplinjé. Släpp den vid `3 mm`.
    * Dra en till från toppen och släpp den vid `58 mm` (61 - 3).
    * *Rektangeln som bildas av dessa fyra linjer är ditt 85 x 55 mm kort.*

3.  **Skapa säkerhetsmarginal (Safe zone):**
    * Du vill inte att text eller logotyper ska vara *precis* vid kanten, då de riskerar att klippas. Lägg till en inre marginal på 3-4 mm. Låt oss ta 4 mm.
    * Dra linjer `4 mm` *inåt* från dina nya utfallslinjer:
    * Från vänster: `7 mm` (3 + 4)
    * Från höger: `84 mm` (88 - 4)
    * Från toppen: `7 mm` (3 + 4)
    * Från botten: `54 mm` (58 - 4)

**Resultatet:**
* **Hela din sida (91x61):** All bakgrundsfärg/bild måste fylla detta.
* **Yttre rektangeln (85x55):** Här kommer kortet att klippas.
* **Inre rektangeln (77x47):** Håll all viktig text, ditt namn och din QR-kod *innanför* denna box.

### 3. Designa med lager

Använd lager för att hålla ordning.

1.  Öppna Lager-panelen (Lager > Lager...).
2.  Döp om "Layer 1" till `Baksida`.
3.  Skapa ett nytt lager (klicka på `+`) och kalla det `Framsida`.
4.  Du kan nu designa din fram- och baksida på varsitt lager och tända/släcka dem (med ögon-ikonen) för att se dem.

### 4. En viktig notering om färg (RGB vs. CMYK)

* Inkscape är en **RGB**-redigerare (gjord för skärmar).
* Tryckerier använder **CMYK** (Cyan, Magenta, Yellow, Black) för bläck.

**Vad detta betyder:** Väldigt ljusa, "självlysande" färger (som skärm-blå eller neon-grön) kommer att se annorlunda ut i tryck (ofta mattare).
**Lösning:**
1.  Var medveten om detta. Välj "naturliga" färger, inte super-mättade RGB-färger.
2.  När du exporterar till PDF (i nästa steg) kommer färgerna att konverteras.
3.  De flesta moderna tryckerier (som Moo.com) är *mycket* bra på att hantera RGB-till-CMYK-konvertering från en PDF. Det blir inte ett problem så länge du inte valt en omöjlig färg.

### 5. Exportera för tryck (den färdiga PDF:en)

När du har designat klart båda sidor:

1.  **För framsidan:** Se till att lagret "Framsida" är synligt och "Baksida" är dolt.
2.  Gå till **Arkiv > Spara som...**.
3.  I rullgardinsmenyn, välj **"Portable Document Format (*.pdf)"**.
4.  Kalla den `visitkort_framsida.pdf` och klicka på Spara.
5.  **VIKTIGT:** En dialogruta dyker upp. Använd dessa inställningar:
    * **Text till sökvägar:** Bocka i denna. (Detta omvandlar dina typsnitt till former, så tryckeriet inte behöver ha dem installerade).
    * **Rasterisera filtereffekter:** Om du använt skuggor/oskärpa, bocka i.
    * **Upplösning för rasterisering:** Sätt till `300` DPI (standard för tryck).
    * Klicka **OK**.
6.  **För baksidan:** Göm "Framsida"-lagret, visa "Baksida"-lagret.
7.  Upprepa steg 2-5 och spara den som `visitkort_baksida.pdf`.

Du har nu två perfekta, högupplösta, tryckfärdiga PDF-filer som du kan ladda upp till Vistaprint, Moo eller vilket tryckeri som helst.

---

Har du några frågor om den här processen?
