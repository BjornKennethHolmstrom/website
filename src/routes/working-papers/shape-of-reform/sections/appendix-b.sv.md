# Appendix B — Mätning av övergångskostnad och proveniens

## B.1 v1 — sammanblandning med målkapacitet

V1-implementationen använde målmodellens referens snarare än en referens av källans arkitektur, vilket blandade ihop kapacitet med anpassning. Ursprungstexten rapporterade en median för riktad asymmetri på 0,79 och en median för relativ asymmetri på 1,000 i röktestet [HR]. Dessa utfall kan inte återfinnas; generiska filnamn för v1/v2 överlappar. Ingen kvantitativ jämförelse med v1 certifieras.

## B.2 v2 — kapacitetsmatchning

V2:s röktesttabeller (två frön) finns kvar under generiska filnamn. Deras median för riktad respektive symmetrisk korrelation är 0,655 och 0,697, förenligt med v3:s dokumentation. De är inte registrerade tiofröpanelen. Matchning av referensarkitektur undanröjer en designkonfoundering, inte urvalsskillnad, optimeringsvariation eller referensens tillräcklighet.

## B.3 v3 — referens och nollkontroll

Senare implementation tränar ändamålsbyggda referenser och jämför verkliga rutter med kontroll med uppvärmning i hemmaregim. Tidigt stopp och träningstak etablerar inte konvergens. Första etappen för kontrollen är inte gratis; båda etapperna använder stipulerade budgetar. V3:s triangeldiagnostik räknar gynnsamma omvägar snarare än brott mot en fast matris av parkostnader. Inga historiska numeriska v3-påståenden behövs för korrigerade slutsatser.

## B.4 v4 och mekanismkontrollen

V4-kostnadskoden utvärderar på träningsdata var 20:e steg över 800 uppdateringar, referens på valideringsdata; se §2.3. Tiofrötabellen innehåller 300 direkta rader och 60 utvalda ruttjämförelser. Registrerade rapporten och generatorsammanfattningen använder olika paruppslagningar. Registrerade rapporten ger n/a för omvänd parstatistik; generatorn använder uttrycklig HOME. Upprepade dragningar bevaras i CSV-filer men sista dragningen skriver över ordlistan; medelaggregering ger samma parsammanfattningar till tre decimaler. Enhetskänsligheten samt tak- och nollkostnadskänsligheterna i §4 är explorativa. De senare kan reproduceras med `asymmetry_floor_check.py` i korrigeringsarkivet. I mekanismkuben är destinationen själv ett tillåtet mellansteg; uteslutning ändrar automatiskt utfall till MIXED/INCONCLUSIVE. Ingen mekanism identifieras därmed.

## B.5 Proveniens och reproducerbarhet

Återfunna `xxiii_out.zip` innehåller 73 filer. Korrigeringsarkivet bevarar detta och ursprungliga skript och godkänd granskning oförändrade. Test 1 och 2 körs om från lagrade matriser till maximal avvikelse $4.44\times10^{-16}$, v4:s parsammanfattningar till $2.22\times10^{-16}$, och separata rapporten och mekanismsammanfattningen reproduceras rad för rad. Test 3:s tabell kontrolleras men dess prediktionsarrayer återfinns inte. Ursprungliga v1-resultat, historiska commits och registreringskronologi, samt exakt ad hoc-skript bakom statistiken om källberoende förblir otillgängliga. Detta är omkörningar på tabellnivå, inte ny träning, och omräkningarna är i efterhand. De sex duplicerade svenska avsnittskropparna i tidigare källa har tagits bort i denna utgåva. AI-assisterat arbetsdokument, inte fackgranskat; bibliografi, mänsklig specialistgranskning och publiceringsbyggkontroll förblir separata.
