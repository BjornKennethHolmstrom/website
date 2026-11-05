## 2. Metod och evidensdisciplin

De tre studierna använder ändliga syntetiska världar, exakt dynamisk programmering eller tillhörande linjära program, verifieringstester som är oberoende av huvudlösaren samt experimentpooler med åtskilda roller. Varje studie hade en fryst specifikation och analysprocedur innan resultaten från den förseglade testpoolen lästes. Samtliga studier utvärderade **800 förseglade testvärldar**; B5 genomförde dessutom en **200-världars delstudie med felspecificerad prior**. Dessa världar är syntetiska parameterdragningar, inte ett urval av observerade kommuner eller gemenskaper. Konfidensintervallen beskriver osäkerhet över den deklarerade fördelningen som genererar världarna; den numeriska utvärderingen av en enskild värld är exakt inom lösarens specificerade toleranser. De förseglade poolerna använde latin hyperkub-sampling, medan den dokumenterade percentilbootstrapen samplade om hela världar som om de vore oberoende. Tolkningen av intervallen är därför knuten till den analysapproximationen, inte till observationellt urval.

A1 använder en modell med två uppströmskommuner och en nedströmskommun, med sannolikhetsfördelat regn, våtmarksetablering, översvämningsskydd, samordning av akuta resurser och ekonomiska reserver. B ersätter detta med en kompakt aktivitets- och resursmodell där en gemenskap kan producera, investera, låta förmågor förfalla eller återskapa naturresurser. B5 behåller den andra modellens grundstruktur i ett mindre tillståndsrum men lägger till en bayesiansk målhierarki och enkätåtgärder. Förändringarna är uttryckligen **inte** en jämförelse av samma intervention under identiska förhållanden.

**Konfirmerande och explorativ evidens hålls åtskilda.** A1:s H1′, H1″ och H2′, B:s HB1–HB3 samt B5:s H5-1–H5-3 under villkor E har i förväg definierade beslutsregler. Senare stresstester, scenariokartläggningar, känslighetsanalyser och B5:s tillägg om samtidiga enkäter är explorativa: deras effekter kan motivera nya förhandsregistreringar, inte ändra gamla utslag. Detta är särskilt viktigt i B5, där en enkät som kunde genomföras parallellt med en produktiv handling tillkom sedan verifieringsvärldar hade visat att den ursprungligen frysta enkäten, som tog en hel period, nästan aldrig valdes.

| Experiment | Huvudsaklig okänd faktor | Huvudjämförelse | Viktigaste reservation |
|:---|:---|:---|:---|
| **A1** | Världens dynamik eller kausala struktur | Direkt mål mot tvärsystemiskt kompletterat mål och robust optimering under osäkerhet | Olika modellfel gynnar olika motåtgärder |
| **B** | Framtida mål, medan dynamiken är känd | Strukturella möjlighetsmått mot explicita föreställningar och matchade reservstrategier | Ett flexibilitetsmått behöver inte vara en bra målfunktion |
| **B5** | Vilka mål som är möjliga och hur sannolika de är | Kunskap om stöd och kostsamt bayesianskt lärande mot en likformig prior | Informationens nytta är skild från kostnaden och tidpunkten för att skaffa den |

### 2.1 Vad ett normaliserat återvinningsmått betyder

De normaliserade procentsatserna i denna rapport är i allmänhet **kvoter mellan genomsnittliga förbättringar och genomsnittliga orakelgap**, inte förbättringar av systemets totala välfärd och inte andelar av världar. I B gäller exempelvis

$$
R_M=\frac{\overline{V(\pi_M)-V(\pi_{\mathrm{myopic}})}}
{\overline{V(\pi_{\mathrm{informed}})-V(\pi_{\mathrm{myopic}})}}.
$$

I B5 utgår nämnaren i stället från gapet mellan en informerad och en likformig planerare. A1 använder kostnadsgapet *F0 minus oraklet* för H1′ och H2′, medan H1″ dividerar en **differens-i-differenser** i absolut förbättring med gapet mellan F0 och oraklet i den **snäva modellen**. Ett värde över ett är möjligt vid jämförelse med en svag kontroll. Negativa värden betyder försämring gentemot den relevanta baslinjen; de betyder inte att den absoluta välfärden är negativ. Experimentens upplägg innehåller också regler för när kvoter med försvinnande nämnare går att skatta. En kvot som saknar meningsfull nämnare får inte presenteras som ett fynd.
