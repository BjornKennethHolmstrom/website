## Bilaga C. Reproducerbarhet, numeriska metoder och proveniens

### C.1 Lösare, utvärdering och verifiering [ENG]

**Lösare.** Exakt dynamisk programmering med ändlig horisont på den faktoriserade modellen: 31 104 tillstånd, 27 gemensamma handlingar, nio regnutfall och $H=11$. Policyer väljs enligt A1:s regel om lägsta handlingsindex vid likvärdiga alternativ. Ekologiska orakel är lexikografiska med tolerans $10^{-9}\max(1,|m|)$. Utvärderingen propagerar exakta tillståndsbeläggningar. En oberoende Monte Carlo-simulering kontrollerar detta statistiskt, vilket inte är ett formellt bevis.

**Verifieringsgrindar:**

| Grind | Utfall | Anmärkning |
|:---|:---|:---|
| F0-V | **FAIL** (bevarat) | Testet för sällsynta händelser använde en normalapproximation för en beståndskategori med sannolikhet omkring $2.6\times10^{-6}$; en bana observerades och $z=4,01$. Koden var korrekt, teststatistiken inte. |
| F0-V-R | PASS | Exakta binomialtest per beståndskategori, gräns 0,005/160, nya frön. |
| F0-C validate-c | PASS | Både sandbox och arbetsstation. |
| Strikt paritet, sandbox | **FAIL** (bevarat) | Ett orakels fördelning av utgifter mellan kommuner skiljde $1.2\times10^{-4}$. Skälet var plattformsberoende val mellan två exakt lika lexikografiska nivåer i 281 nådda tillstånd. |
| Strikt paritet, arbetsstation | PASS, exakt | Arbetsstationen som utförde den konfirmatoriska utvärderingen. |

**Beroende av likhetsval.** Kommunvisa orakeldiagnostiker beror på hur exakta likheter bryts och kan därför vara plattformsberoende. Kriterievärdena gör det inte.

**Ytterligare en lärdom.** Validering kan också förkasta korrekt kod på grund av en felaktig deklarerad olikhet. Det hände i E1-lite G1, kontroll V7. FAIL bevarades och rättades genom den nya deklarerade grinden G1-R.

### C.2 Evidensskattning i lärandestudierna [NM]

Dessa resultat gäller numerisk beräkning av evidens, inte själva beslutsproblemet.

- **D1 [explorativt, status tilldelad efter körningen].** Slumpvandringsbaserad sekventiell Monte Carlo (Del Moral, Doucet & Jasra, 2006) gav opålitliga evidensskattningar i en blind 16-dimensionell diagnostik. Replikatens utslag skilde sig i upp till 11 av 24 fall, så upptäcktsandelarna från den grinden tolkas inte.
- **D2 [explorativt, deklarerat].** Validerade kvadraturreferenser fastställdes i två steg: i en dimension genom G3.3a (vars FAIL sparades) och den brytpunktsuppdelade G3.3a-R, med noggrannhet inom $10^{-3}$ nats; i två dimensioner genom G3.3b-1, med 48 av 48 referenser validerade och exakta nollfall exakt återgivna.
- **D3 [explorativt, prospektivt jämfört].** En evaluatorinformerad riktad uppdelning reducerade felet i evidensskattningen på **en enda fixerad syntetisk tvådimensionell historia**. Genomsnittligt absolut fel i log-Bayesfaktor föll från 1,625 till 0,404 med 512 partiklar och från 0,457 till 0,181 med 2 048. Antalet likelihoodberäkningar minskade, men inte körtiden i alla fall: 136 s mot 118 s vid 512 partiklar och 274 s mot 339 s vid 2 048. Metoden bygger på geometri som evaluatorn känner till; den är ingen färdig blind högdimensionell estimator.

En separat teknisk metodnot kan vara lämpligare för denna del än seriens huvudtext.

### C.3 Konfirmatorisk proveniens

| Post | Registrerat värde |
|:---|:---|
| Deklaration | Blocket `f0c` i `a2_config.json`, 2026-11-06T04:10:33Z; konfigurationssnapshot i `records/`. |
| Kodfrysning | Fingeravtryck F_c `6c5c58ff6e22e3341c46959d8edb1bc25eb99863644ea2a5151b29458a38961d` över 48 filer; konfiguration SHA-256 `4ac1dcb244bbf2c68ee354805e99f1ac5476d419af087b576b4a64c57257a9c9`. |
| Testpool | 40 × 19 uniforma dragningar från reserverad ström (spawn key 9, poolversion 1); pool SHA-256 `b14d9984b3399c2e51661a811d7321af2bbc4a59f576a5127fa489577b112119`; genererad 2026-11-06T06:09:41Z. |
| Utvärdering | 120 jobb (40 världar × 3 planeringsvillkor), 06:12:34Z–09:08:42Z; 8 arbetare; Python 3.10.12, NumPy 2.2.6, SciPy 1.15.3. |
| Förhandsförbindelse | Poolens fullständiga hash skickades som text till granskaren (`records/f0c_pool_commitment_as_sent.txt`). **Enligt användarens uppgift** kom bekräftelsen omkring 06:12Z, och utvärderingen startade därefter. Exakt ordning är inte oberoende tidsstämplad. |
| Säkerhetsåtgärder och begränsningar | Den deklarerade slumpströmmen återskapar samma hash; kod och konfiguration var frysta före poolgenereringen. Det begränsar kraftigt möjligheten att välja pool selektivt men är inget historiskt bevis om den exakta tidsordningen. |
| Omkörning | En oberoende upprepning av sammanfattningen är byteidentisk utom avrundning av flyttal i JSON ($\le1.8\times10^{-15}$). |
| Incident | Tomma filer med feltext i filnamnen uppstod på arbetsstationen och raderades före inspektion. Ursprung okänt. Ingen indikation på påverkan av frysta indata eller körningar: källistorna i manifesten motsvarar frysningen. |
| Utvecklingsreferens | 16 utvecklingsvärldar; $\Delta=-1,195$ [−1,801, −0,588], SD 1,138; 15 av 16 negativa. Utvecklings- och konfirmationsdata blandas aldrig. |

### C.4 Figurer och följeslagsfiler

- Figurerna 1–5 skapas av `paper/make_figures.py` enbart från frysta resultat, med indatahashar i `paper/figures/wp1_figure_sources.json`.
- Tabellerna i bilaga B skapas av `diag/a2_f0c_exploratory_appendix.py` mot deklarationen i `records/a2_f0c_exploratory_appendix_declaration.json`.
- `paper/check_numbers.py` kontrollerar alla tal i rapporten mot ett källmärkt register.
- Följeslagsarkivet innehåller de frysta indata som behövs för att återskapa de fem figurerna och båda bilagornas tabeller.

### C.5 Metodologisk redovisning

Forskningsprogrammet initierades och leddes av **Björn Kenneth Holmström**. A2-experimenten utformades och specificerades med omfattande AI-stöd. **Claude (Anthropic)** implementerade, verifierade och körde studierna samt skrev manusutkastet. **ChatGPT (OpenAI)** granskade grindarna och utkasten. Detta är en dokumenterad granskning med flera AI-agenter, **inte oberoende mänsklig sakkunniggranskning**. AI-kontrollerna är inte en oberoende mänsklig kodrevision. En extern mänsklig granskning av den frysta lösaren och utvärderaren, tillsammans med offentlig kod och poolmanifest, är ett viktigt nästa steg.

Utkast v0.2 är inte sakkunniggranskat.

