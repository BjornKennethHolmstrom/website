# Del III — Felmoder för adaptiv styrning

Följande fem mekanismer är diagnostiska hypoteser [H/IP], inte en uttömmande taxonomi eller fem experimentellt etablerade felmoder.

## 3.1 Utforskningssvält

En policy kan undertrycka exponeringen för informativa händelser samtidigt som den följer ett mål. Pröva om de saknade distinktionerna ändrar genomförbara beslut och om en annan tillåten policy skulle återvinna dem. Självdöljande är en separat hypotes: jämför systemets uppgivna eller predikterade prestanda med ett oberoende uppmätt utfall för samma uppgift. Den äldre simuleringen implementerade inte den jämförelsen.

## 3.2 Modellinlåsning

Parameteruppdateringar inom en fast modell kan inte nödvändigtvis reparera felspecifikation. Bevarade alternativ, residualkontroller och oberoende modellgranskning kan vara användbara. En regim som passar en observationshistorik behöver inte prediktera interventioner. Skilj otillräcklig evidens från en modellklass som inte kan uttrycka alternativet. Se korrigerad VI och seriens diskussion om policyberoende exponering; varken nyhet eller pluralism garanterar bättre modeller.

## 3.3 Exploateringsinlåsning

En institution kan i princip känna till en genomförbar policy men sakna befogenhet, resurser eller en praktiskt möjlig övergång. Det är något annat än att inte känna till responsen. I den förenklade processen \(x_{t+1}=Ax_t+\mu Bu_t+w_t\) kan observationer med avsedd styrsignal inte skilja \(B\) från \(\mu\) utan ytterligare information. Exempelvis ger \(B=I,\mu=0.3\) och \(B=0.3I,\mu=1\) samma dynamik med avsedd insignal när övriga storheter hålls fasta. Simuleringen mäter fel mot fysiska parametrar och isolerar därför inte lärande från verkställighet. Rapport IX och den korrigerade rapport XXIII motiverar mätning av faktiska övergångsvillkor, inte härledning av dem från en skalär skattning.

## 3.4 Lärandeinducerad oscillation

Anpassning och reglering kan samverka ogynnsamt: en fördröjd skattning kan ändra en förstärkning efter att omgivningen åter har förändrats. Detta kräver analys av den faktiska slutna slingan, skattningsmetoden och uppdateringsschemat. Varken stor utforskningsamplitud eller snabb institutionell förändring är i sig ett bevis för instabilitet. Stabilitet hos en frusen modell garanterar inte stabilitet hos ett tidsvarierande återkopplat system.

## 3.5 Glömska utan tillräcklig ersättning

Institutionella dokument kan bli inaktuella eller gå förlorade. Att bevara dem och att uppdatera dem är olika operationer. En balans för kunskapsstocken kan formuleras som en separat modell med definierade förvärvs- och förlustprocesser; den ursprungliga kvoten mellan driftvarians och en skillnad av lärande- och glömsketakt är inte härledd från RLS-rekursionen och dras tillbaka. Appendix A.3 ger en inversinformationsgräns, inte en gräns för faktiskt följningsfel eller ett mått på institutionell kompetens.
