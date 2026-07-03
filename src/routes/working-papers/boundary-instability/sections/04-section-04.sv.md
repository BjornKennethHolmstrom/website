## 4. Den kritiska inlärningsbandbredden

### 4.1 Två gränser av olika slag

Cykeln i §3 löpte vid en fast miljö. Lägg till seriens stående tryck — en miljö som driver med hastigheten $r_{\text{env}}$, här som $a_t=a_0+r_{\text{env}}t$ medan de lokala modellernas kalibrering föråldras — så får inlärningshastigheten $\eta$ två gränser vars *mekanismer* skiljer sig åt, inte bara deras riktningar.

**Den undre gränsen är Rapport XV:s, i lokal form.** Inlärning måste springa ifrån föråldringen. Det medelvärdesbildade förstärkningsflödet (A.3.1) ger

$$\eta_{\min}(t)\;\approx\;\frac{r_{\text{env}}+\lambda\,(a_t-a_0)}{\sigma_x^2\,m},$$

där $m$ är stabilitetsmarginalen. Drifthastigheten inträder som väntat. Läckagetermen gör något mindre väntat och värt att benämna: $\eta_{\min}$ växer med den *ackumulerade* driften $(a_t-a_0)$ även vid konstant $r_{\text{env}}$ — där adaptiv kapacitet avklingar (Rapport XVI:s territorium) kostar det att blott *hålla* en redan absorberad anpassning en stående inlärningshastighet. Ett system kan falla under sin egen $\eta_{\min}$ utan att världen ökar farten alls. **[R inom modellen]**, medelvärdesbildad; oregistrerad men härledd, och flaggad som sådan.

**Den övre gränsen är denna rapports, och den löper genom gränsen.** Snabb inlärning innebär hög policihastighet; policihastighet matar kopplingslagret genom $\nu$; lagret jämviktar vid $c^\ast=q+(2\nu\eta/\mu)\,\mathbb{E}|x_ir_i|$; och gränsomkopplingens klara gren överlever endast så länge $\varepsilon(c^\ast)$ håller sig under en kritisk koppling. Lösning (A.3.2):

$$\eta_{\max}\;\approx\;\frac{\mu\,\big(\varepsilon_{\text{crit}}-\varepsilon_0-\beta q\big)}{(4/\pi)\,\nu\beta\,\sigma_x\sigma_r}.$$

Strukturen är långsam-anpassningsvillkoret från den post-Rohrska medelvärdesbildningslitteraturen, transponerad: anpassning måste vara långsam i förhållande till den tidsskala på vilken dess egen aktivitet omformar den omodellerade kopplingen — här lagrets relaxationshastighet $\mu$, skalad med den reflexiva förstärkningen $\nu\beta$. Prejudikatet citeras för strukturen; formeln är denna modells egen. **[R inom modellen]**, medelvärdesbildad.

### 4.2 Fellägena är artskilda

Bandbredden är inte en symmetrisk bestraffning för att missa ett optimum. Simuleringssnittet (Figur `xviii_C_bandwidth_slice`, vid $r_{\text{env}}=5\times10^{-5}$, $\nu=0.15$) visar hur varje överträdelse ser ut. Under $\eta_{\min}$ fallerar systemet i *tillståndet*: förstärkningarna sackar efter driften, anläggningen mättas, icke-faktoriserbar residens är total eftersom vrakspillrorna är genuint sammankopplade. Över $\eta_{\max}$ fallerar systemet i *gränsen* medan det lyckas i tillståndet: vid den högsta svepta inlärningshastigheten är följningen i huvudsak perfekt — medelkvadrattillstånd kring $0.006$ — medan systemet befinner sig i den icke-faktoriserbara regimen 89% av tiden. Varje resultattavla lyser grön; den separation som gör ”jurisdiktion” till ett meningsfullt ord har upplösts. Detta är gränsdomäntvillingen till Rapport XV:s effektiva-men-självblindande regim, framställd här utan någon avkänningsmättnad: blindheten är inte en kapacitetsbrist utan en strukturell konsekvens av vad snabb anpassning gör med den dekomposition den verkar inom. **[R inom modellen]**; den institutionella tolkningen **[IP]**.

![Figur xviii_C_bandwidth_slice](/working-papers/images/boundary-instability/xviii_C_bandwidth_slice.png)
*(Figur: `xviii_C_bandwidth_slice.png` — långsam inlärning fallerar i tillståndet, snabb inlärning fallerar i gränsen.)*

### 4.3 Den dynamiska klämningen och Dekomponerbarhetsfronten (P3)

Båda gränserna är tillståndsberoende, och deras tillståndsberoende pekar åt fel håll för bekvämligheten. Täljaren i $\eta_{\max}$ är en kopplingsmarginal, och allt som händer på väg mot kollaps — lagret stiger, klarheten sviktar, residualerna växer — krymper den. Läckagetermen trycker upp $\eta_{\min}$ i takt med att absorberad drift ackumuleras. Fönstret klämmer därför endogent, från båda ändar, snabbast precis när systemet redan är i trubbel: den *dynamiska klämningen*. **[R inom modellen]** som komparativ statik för de två formlerna.

Den registrerade förutsägelsen P3 — att fönstret smalnar i $r_{\text{env}}$ och reflexivitetsstyrkan, och stängs för vissa kombinationer — **stöds**. Fönsterkartan (Figur `xviii_C2_window_map`, livsduglighet som kräver begränsade tillstånd, ingen mättnadslåsning och NF-residens under 20% någonstans på ett 13-punkters log-$\eta$-rutnät) visar den livsdugliga andelen krympande i båda koordinaterna och nående **noll på 36% av $(r_{\text{env}},\nu)$-rutnätet**. Stängningskonturen är den empiriska **Dekomponerbarhetsfronten**: bortom den existerar ingen inlärningshastighet som både följer miljön och bevarar gränsen. Detta är noll-livsduglighetsvillkoret som en realiserad region av parameterrummet, inte ett gränsfall — och det inkluderar kombinationer med $r_{\text{env}}=0$, där hög reflexivitet ensam stänger fönstret. **[R inom modellen.]** Fronten generaliserar Rapport XII:s Informations–Aktueringsfront från en avvägning över gräns*placering* till en avvägning över anpassnings*hastighet*, och till skillnad från en avvägning har den en ogenomförbar sida.

![Figur xviii_C2_window_map](/working-papers/images/boundary-instability/xviii_C2_window_map.png)
*(Figur: `xviii_C2_window_map.png` — livsduglig fönsterbredd över (r_env, ν); den röda konturen är Dekomponerbarhetsfronten.)*

---
