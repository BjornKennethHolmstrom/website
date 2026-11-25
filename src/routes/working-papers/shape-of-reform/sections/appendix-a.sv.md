# Appendix A — Anslutningströskelns identitet och typade kostnader

## A.1 MST-flaskhalsen [R]

Låt $G$ vara en komplett oriktad ändlig viktad graf, $T$ ett minimalt uppspännande träd och $b$ dess största kantvikt. Vid tröskel $b$ innehåller grafen $T$ och är sammanhängande. Antag att tröskel $s<b$ gör den sammanhängande. Ta bort en kant med största vikt från $T$; de resulterande två komponenterna bildar ett snitt. En väg vid tröskel $s$ som korsar snittet innehåller en kant med vikt högst $s$, lättare än den borttagna kanten. Ersättning av kanten i $T$ ger ett uppspännande träd med lägre vikt, en motsägelse. Alltså

$$\varepsilon_c=b=\max_{e\in T}w(e).$$

Ingen triangelolikhet eller unik MST krävs. Skalning av alla kantvikter med en positiv konstant skalar $b$; ändrat arrangemang kan ändra $b$ vid samma medelavstånd. Om endast en kant har vikt $b$ och minst tre noder finns är den en bryggkant och någon ändpunkt en artikulationspunkt. Vid lika vikter behöver detta inte gälla. Detta förklarar en konstruktionseffekt, inte motsvarande modells funktion (se XIX §6).

## A.2 Typer, vägar och symmetrisk projektion [R]

Låt $h:M\to R$ tilldela hemmauppgifter. En inducerad modellparsfunktion $F(m,n)=C(m,h(n))$ kan prövas för triangelolikheter, men i allmänhet använder andra etappen i faktisk stegvis anpassning $U(m,r_1,T_1;\omega_1)$ snarare än en kanonisk hemmamodell. §5 anger additiv kostnad på faktiskt uppdaterat tillstånd. Detta är den precisa räckvidden för att den tabellerade kostnadsuppslagningen inte komponeras.

Med icke-negativa kantkostnader ger konkatenering av två genomförbara vägar en genomförbar väg med summan av deras kostnader. Infimum (eller godtyckligt nära approximation av ändliga infimum) ger riktad triangelolikhet för optimal vägkostnad; ouppnåeliga par kan ha oändlig kostnad. Nollkostnad mellan skilda tillstånd tillåts. Konstruktionen kräver inte en symmetrisk metrik och certifierar inte existensen av en användbar inlärd tillståndsgeometri.

Ett träd med kanter A–C, D–C, E–C, C–B har kortaste vägar till B från alla tre källor genom C. Gemensamt mellansteg för en destination motbevisar därför inte geodesier. Den symmetriska projektionen för kvadratiskt fel i §4.1 följer genom utveckling av de två kvadrerade residualerna; dess irreducibla term är inte en gräns för rangkorrelation.
