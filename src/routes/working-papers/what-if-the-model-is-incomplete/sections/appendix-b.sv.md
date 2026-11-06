## Bilaga B. Explorativa tabeller ur den frysta konfirmatoriska faktorialen

**Status: EP (explorativt efterhandsval), enbart deskriptivt.** Tabellerna har tagits fram läsande ur de frysta F0-C-tabellerna i `analysis/f0c_f0c-v0.1-conf_6c5c58ff6e22/`. Ingen ny simulering, ingen ny värld, inget nytt p-värde och inget nytt konfidensintervall har beräknats. Tabellernas definitioner och fullständiga täckning deklarerades den **6 november 2026 kl. 10:10:31 UTC** i `records/a2_f0c_exploratory_appendix_declaration.json` innan dessa tabeller beräknades. Skriptet kontrollerar indatans hashvärden mot deklarationen.

**Varför EP och inte ED?** Loggen från F0-C-sammanfattningen och motsvarande utvecklingsanalyser var redan kända när tabellerna valdes. Urvalet av analyser var alltså inte blindat för resultaten. Inget här används för att ändra konfirmatoriska slutsatser eller för att välja en ny hypotes.

**Enhet.** Basvärlden ($n=40$). De 120 jobben omfattar tre planeringsvillkor för varje värld och är inte 120 oberoende observationer. **Kod och resultat:** `diag/a2_f0c_exploratory_appendix.py` (sha256 `b9f68d4d7825…`) skapar `analysis/f0c_exploratory_appendix/tables.json` och `tables.md`.

### B.1 Definitioner

- **Kontrast:** $\Delta_X(J)=\tfrac12\sum_{m^*\in\{m_0\cup X,m_0\}}[J(F0\text{ på }m_0\cup X)-J(F1\text{-eco på }m_0)]$ med varje policys eget fondval. Det är REP(X) − COMP under en hypotetisk 50/50-viktning för om X finns. Alla $J$ minimeras: **$\Delta<0$ gynnar REP enligt det namngivna kriteriet.**
- **Per-världsstatistik:** T1–T3 anger medelvärde, standardavvikelse, teckenfördelning, minimi- och maximivärde över 40 världar. Teckenantal kan summera till mindre än 40 vid exakta nollvärden.
- **Enbart medelvärden över världar:** T4–T6 kommer från de frysta medelvärdestabellerna. Dekompositionstermerna är ångerkomponenter gentemot U1-oraklet (representation → parametrar/skift → mål). T5 medelvärdesbildar de två fysiska maskgrenarna. T6 räknar i varje värld om en policy är icke-dominerad bland **33 kandidatpolicyer** (24 `S|f|m` och nio MIX) på respektive tvådimensionella front.
- **Indata (SHA-256-prefix):** `f0c_core.csv` `d201fc09a085…`; `f0c_decomposition.csv` `eefdb4f6ec44…`; `f0c_factorial_means.csv` `63e52948900a…`; `f0c_pareto.csv` `35f130ddc694…`.

### B.2 Tabeller

#### T1. Parameterfel (m₀ = 011, X = R, ψ = 0): Δ = REP(R) − COMP

| Villkor | J | Medel | SD | n < 0 | n > 0 | min | max |
|---|---|---|---|---|---|---|---|
| s=0.0,d=0 | J_U1 | -1.112 | 1.954 | 30 | 10 | -6.104 | +4.925 |
| s=0.0,d=0 | J_U2 | -1.061 | 2.103 | 29 | 11 | -6.324 | +6.216 |
| s=0.0,d=0 | J_def | +6.362 | 6.651 | 3 | 37 | -3.795 | +18.069 |
| s=0.0,d=0 | J_stock | +1.543 | 1.523 | 2 | 38 | -0.544 | +4.000 |
| s=0.25,d=0 | J_U1 | -0.010 | 2.579 | 24 | 15 | -7.263 | +6.970 |
| s=0.25,d=0 | J_U2 | +0.155 | 2.785 | 23 | 16 | -7.170 | +7.839 |
| s=0.25,d=0 | J_def | +5.258 | 6.231 | 4 | 35 | -4.103 | +18.340 |
| s=0.25,d=0 | J_stock | +1.269 | 1.448 | 3 | 36 | -0.948 | +4.000 |
| s=0.25,d=1 | J_U1 | -0.301 | 2.547 | 26 | 12 | -4.720 | +10.552 |
| s=0.25,d=1 | J_U2 | -0.182 | 2.842 | 24 | 14 | -5.144 | +11.621 |
| s=0.25,d=1 | J_def | +6.937 | 6.663 | 5 | 33 | -1.076 | +18.069 |
| s=0.25,d=1 | J_stock | +1.639 | 1.542 | 3 | 35 | -0.007 | +4.000 |

Parameter-/skiftterm (J_U1, världsmedelvärden):

| Villkor / policy / m\* | term |
|---|---|
| s=0.0,d=0\|F0/111\|m*=111 | +0.000 |
| s=0.0,d=0\|F0/111\|m*=011 | +0.000 |
| s=0.0,d=0\|F1-eco/011\|m*=111 | +0.000 |
| s=0.0,d=0\|F1-eco/011\|m*=011 | +0.000 |
| s=0.25,d=0\|F0/111\|m*=111 | +2.654 |
| s=0.25,d=0\|F0/111\|m*=011 | +2.370 |
| s=0.25,d=0\|F1-eco/011\|m*=111 | +1.329 |
| s=0.25,d=0\|F1-eco/011\|m*=011 | +1.516 |
| s=0.25,d=1\|F0/111\|m*=111 | +2.483 |
| s=0.25,d=1\|F0/111\|m*=011 | +2.361 |
| s=0.25,d=1\|F1-eco/011\|m*=111 | +0.857 |
| s=0.25,d=1\|F1-eco/011\|m*=011 | +1.378 |

#### T2. Regnförskjutning (m₀ = 011, X = R, s = 0): Δ = REP(R) − COMP

| ψ | J | Medel | SD | n < 0 | n > 0 | min | max |
|---|---|---|---|---|---|---|---|
| psi=-0.1 | J_U1 | -1.318 | 1.753 | 33 | 7 | -6.184 | +2.144 |
| psi=-0.1 | J_U2 | -1.300 | 1.815 | 32 | 8 | -6.198 | +2.793 |
| psi=-0.1 | J_def | +6.615 | 6.673 | 4 | 36 | -3.367 | +18.136 |
| psi=-0.1 | J_stock | +1.609 | 1.522 | 2 | 38 | -0.352 | +4.000 |
| psi=0.0 | J_U1 | -1.112 | 1.954 | 30 | 10 | -6.104 | +4.925 |
| psi=0.0 | J_U2 | -1.061 | 2.103 | 29 | 11 | -6.324 | +6.216 |
| psi=0.0 | J_def | +6.362 | 6.651 | 3 | 37 | -3.795 | +18.069 |
| psi=0.0 | J_stock | +1.543 | 1.523 | 2 | 38 | -0.544 | +4.000 |
| psi=0.1 | J_U1 | -0.808 | 2.110 | 27 | 13 | -6.310 | +7.343 |
| psi=0.1 | J_U2 | -0.710 | 2.365 | 25 | 15 | -6.533 | +9.275 |
| psi=0.1 | J_def | +6.101 | 6.632 | 4 | 36 | -4.196 | +18.069 |
| psi=0.1 | J_stock | +1.476 | 1.524 | 2 | 38 | -0.720 | +4.000 |

Representationsterm när R utelämnas in m\* = 111 (J_U1, världsmedelvärden):

| ψ / policy | term |
|---|---|
| psi=-0.1\|F0/011 | +0.518 |
| psi=-0.1\|F1-eco/011 | +0.002 |
| psi=-0.1\|F1-eco-fixed/011 | +0.038 |
| psi=0.0\|F0/011 | +1.851 |
| psi=0.0\|F1-eco/011 | +0.014 |
| psi=0.0\|F1-eco-fixed/011 | +0.094 |
| psi=0.1\|F0/011 | +3.567 |
| psi=0.1\|F1-eco/011 | +0.078 |
| psi=0.1\|F1-eco-fixed/011 | +0.229 |

#### T3. Samtliga 12 (m₀, X) pairs (s = 0, ψ = 0): Δ_X = REP(X) − COMP

| m₀ + X | J | Medel | SD | n < 0 | n > 0 | min | max |
|---|---|---|---|---|---|---|---|
| 011+R | J_U1 | -1.112 | 1.954 | 30 | 10 | -6.104 | +4.925 |
| 011+R | J_def | +6.362 | 6.651 | 3 | 37 | -3.795 | +18.069 |
| 101+S | J_U1 | -1.011 | 1.443 | 34 | 6 | -5.684 | +0.123 |
| 101+S | J_def | +6.852 | 6.571 | 0 | 40 | +0.000 | +18.069 |
| 110+C | J_U1 | -1.066 | 1.443 | 38 | 2 | -5.196 | +0.003 |
| 110+C | J_def | +6.783 | 6.589 | 0 | 40 | +0.000 | +18.069 |
| 001+R | J_U1 | -1.106 | 1.691 | 30 | 10 | -6.199 | +0.713 |
| 001+R | J_def | +5.883 | 6.667 | 3 | 37 | -0.361 | +18.069 |
| 001+S | J_U1 | -2.631 | 2.406 | 38 | 2 | -10.423 | +0.009 |
| 001+S | J_def | +11.906 | 6.255 | 0 | 40 | +0.000 | +18.619 |
| 010+R | J_U1 | -1.210 | 1.866 | 30 | 10 | -6.060 | +4.227 |
| 010+R | J_def | +7.192 | 6.483 | 4 | 36 | -2.908 | +18.232 |
| 010+C | J_U1 | -2.889 | 2.614 | 40 | 0 | -10.651 | -0.000 |
| 010+C | J_def | +11.872 | 6.217 | 0 | 40 | +0.000 | +18.619 |
| 100+S | J_U1 | -1.079 | 1.461 | 39 | 1 | -5.566 | +0.175 |
| 100+S | J_def | +7.523 | 6.445 | 0 | 40 | +0.000 | +18.232 |
| 100+C | J_U1 | -1.003 | 1.458 | 34 | 6 | -5.527 | +0.011 |
| 100+C | J_def | +6.209 | 6.715 | 0 | 40 | +0.000 | +18.069 |
| 000+R | J_U1 | -1.199 | 1.631 | 31 | 9 | -6.475 | +0.500 |
| 000+R | J_def | +7.119 | 6.723 | 1 | 39 | -0.239 | +18.232 |
| 000+S | J_U1 | -2.568 | 2.290 | 37 | 3 | -9.443 | +0.028 |
| 000+S | J_def | +11.881 | 6.130 | 0 | 40 | +0.000 | +18.619 |
| 000+C | J_U1 | -2.353 | 1.983 | 40 | 0 | -7.380 | -0.011 |
| 000+C | J_def | +13.211 | 5.428 | 0 | 40 | +0.037 | +18.619 |

#### T4. Dekomposition av 40 världar (J_U1, s = 0, ψ = 0, eget fondval; världsmedelvärden)

| policy / m\* | totalt | representation | parametrar/skift | mål |
|---|---|---|---|---|
| F0/111\|m*=111 | +0.000 | +0.000 | +0.000 | +0.000 |
| F0/111\|m*=011 | +1.765 | +1.765 | +0.000 | +0.000 |
| F1-eco/011\|m*=111 | +1.099 | +0.014 | +0.000 | +1.085 |
| F1-eco/011\|m*=011 | +2.890 | +0.000 | +0.000 | +2.890 |

#### T5. MIX jämfört med rena åtaganden (50/50 medel över m₀ ∪ X and m₀; s = 0, ψ = 0; världsmedelvärden)

| par \| policy | J_U1 | J_def |
|---|---|---|
| R\|S\|F0\|011 | 6.967 | 18.082 |
| R\|S\|F0\|111 | 6.924 | 12.624 |
| R\|MIX\|R\|0.25 | 6.557 | 16.446 |
| R\|MIX\|R\|0.5 | 6.465 | 14.980 |
| R\|MIX\|R\|0.75 | 6.638 | 13.877 |
| S\|S\|F0\|101 | 4.040 | 12.076 |
| S\|S\|F0\|111 | 4.033 | 12.645 |
| S\|MIX\|S\|0.25 | 4.017 | 12.146 |
| S\|MIX\|S\|0.5 | 4.012 | 12.371 |
| S\|MIX\|S\|0.75 | 4.016 | 12.448 |
| C\|S\|F0\|110 | 2.746 | 13.381 |
| C\|S\|F0\|111 | 2.738 | 12.653 |
| C\|MIX\|C\|0.25 | 2.725 | 13.327 |
| C\|MIX\|C\|0.5 | 2.722 | 13.073 |
| C\|MIX\|C\|0.75 | 2.728 | 12.783 |

#### T6. Pareto: andel av 40 världar som är icke-dominerade (s = 0, ψ = 0, eget fondval)

| axel \| m\* \| policy | andel |
|---|---|
| J_def\|m*=011\|S\|F0\|111 | 0.550 |
| J_def\|m*=011\|S\|F0\|011 | 1.000 |
| J_def\|m*=011\|S\|F1-eco\|111 | 0.650 |
| J_def\|m*=011\|S\|F1-eco\|011 | 1.000 |
| J_def\|m*=011\|S\|F1-eco-fixed\|011 | 1.000 |
| J_def\|m*=011\|MIX\|R\|0.5 | 0.825 |
| J_stock\|m*=011\|S\|F0\|111 | 0.575 |
| J_stock\|m*=011\|S\|F0\|011 | 1.000 |
| J_stock\|m*=011\|S\|F1-eco\|111 | 0.625 |
| J_stock\|m*=011\|S\|F1-eco\|011 | 0.950 |
| J_stock\|m*=011\|S\|F1-eco-fixed\|011 | 0.950 |
| J_stock\|m*=011\|MIX\|R\|0.5 | 0.825 |
| J_def\|m*=111\|S\|F0\|111 | 0.975 |
| J_def\|m*=111\|S\|F0\|011 | 0.250 |
| J_def\|m*=111\|S\|F1-eco\|111 | 1.000 |
| J_def\|m*=111\|S\|F1-eco\|011 | 0.300 |
| J_def\|m*=111\|S\|F1-eco-fixed\|011 | 0.275 |
| J_def\|m*=111\|MIX\|R\|0.5 | 0.225 |
| J_stock\|m*=111\|S\|F0\|111 | 0.975 |
| J_stock\|m*=111\|S\|F0\|011 | 0.250 |
| J_stock\|m*=111\|S\|F1-eco\|111 | 0.925 |
| J_stock\|m*=111\|S\|F1-eco\|011 | 0.250 |
| J_stock\|m*=111\|S\|F1-eco-fixed\|011 | 0.250 |
| J_stock\|m*=111\|MIX\|R\|0.5 | 0.225 |


### B.3 Vad tabellerna visar, inklusive motexempel

1. **Parameterfel tar bort större delen av REP(R):s U1-fördel (T1).** Vid $s=0,25$ är den genomsnittliga $\Delta_R(J_{U1})$ −0,010 (dragning 0) och −0,301 (dragning 1), jämfört med −1,112 vid $s=0$. Tecknen fördelar sig 24/15 och 26/12, och maxvärdena är +6,97 och +10,55. Parameter-/skifttermen är större för F0 på 111 (+2,37 till +2,65) än för F1-eco på 011 (+0,86 till +1,52). Riktningen stämmer med F0-dev (A11), men värdena är större i ett annat urval. De ekologiska kontrasterna behåller riktning och ungefärlig storlek: $J_{def}$ +5,3 till +6,9 och $J_{stock}$ +1,3 till +1,6. **Den konfirmerade U1-kontrasten (A1) gäller $s=0$ och får inte beskrivas som robust mot parameterfel.**
2. **Regnförskjutningen flyttar kontrasten monotont men vänder inte tecknet (T2).** Medelvärdet för $\Delta_R(J_{U1})$ är −1,318, −1,112 och −0,808 vid $\psi=-0,1,0,+0,1$. F0:s representationsterm växer (+0,518, +1,851, +3,567), medan F1-eco håller sig nära noll (+0,002, +0,014, +0,078). F1-eco-fixed ligger något högre (+0,038, +0,094, +0,229). Raden för $\psi=0$ återger de frysta förhandsdefinierade deskriptiva värdena (A7), vilket kontrollerar dataläsningen.
3. **Alla tolv maskpar har samma tecken för medelvärdena (T3), men detta avspeglar främst målfunktionen, inte representationen.** $\Delta_X(J_{U1})<0$ och $\Delta_X(J_{def})>0$ i samtliga par. För S och C är representationskontrasten liten, så talen återspeglar huvudsakligen F1-eco:s U1-pris för dess ekologiska vinst, inte värdet av att representera S eller C. Par som tillför R har upp till tio världar med positiv $\Delta$ och maxima kring +4,9. Par som tillför S eller C har högst sex positiva världar och maxima högst +0,18. De största genomsnittliga U1-kontrasterna (cirka −2,4 till −2,9) finns i 001+S, 010+C, 000+S och 000+C; deras basmodell utelämnar redan R.
4. **Dekompositionen för R-frånvarande grenen ser likadan ut i de 40 testvärldarna som i utvecklingen (T4).** Vid $m^*=011$ betalar REP en representationskostnad på +1,765 U1, medan COMP betalar ett målpris på +2,890. Skillnaden är grenmedelvärdet −1,125. Vid $m^*=111$ är nästan hela COMP:s kostnad ett målpris (+1,085 av +1,099). Detta belyser A9: det ekologiska målets U1-premium överstiger den felaktigt representerade modellens kostnad, precis som i utvecklingsvärldarna (1,06 mot 2,42). Det förblir en explorativ dekomposition, inte en konfirmerad mekanismförklaring.
5. **En säkringsheuristik slår båda rena F0-åtagandena i genomsnittlig U1 för R (T5).** Med 50/50-viktningen har MIX(R, q) genomsnittlig $J_{U1}$ på 6,465–6,638, lägre än F0 på 011 (6,967) och 111 (6,924). Dess våtmarksunderskott ligger mellan dem (13,9–16,4, mot 18,1 respektive 12,6). För S och C ligger MIX inom cirka 0,03 U1 från de rena valen. REP(R) är således inte U1-bäst av alla utvärderade policyer, vilket motiverar att A6 begränsas till REP mot COMP. **MIX ingick inte i något konfirmatoriskt test**, genomsnittsbildar övergångskärnor period för period och är inte optimalt för en fast men okänd värld. Här rapporteras enbart världsmedelvärden; se H6 i §7.2.
6. **En strategi är oftast icke-dominerad när dess representation är korrekt och oftare dominerad när den är fel (T6).** När $m^*=111$ är REP (F0/111) icke-dominerad i 97,5 % av världarna på båda fronterna, men COMP (F1-eco/011) i bara 30 % på underskottsfronten och 25 % på beståndsfronten. När $m^*=011$ är COMP icke-dominerad i 100 % respektive 95 %, och REP i 55 % respektive 57,5 %. BOTH (F1-eco/111) är icke-dominerad i 100 % respektive 92,5 % vid $m^*=111$. Detta är uttalanden per fysisk mask och kan inte summeras till ett enda 50/50-Paretopåstående.

### B.4 Nollfall och resultat som inte erhölls

- Vid $s=0$ är parameter-/skifttermen exakt noll (strukturellt, T1).
- F1-eco:s representationsterm överstiger aldrig +0,08 U1 som världsmedelvärde vid någon av de tre regnförskjutningarna. Det är en deskriptiv observation, **inte** ett ekvivalensresultat.
- Inget maskpar vänder tecknet på den genomsnittliga U1- eller $J_{def}$-kontrasten. Motexempel bland enskilda världar finns i T1–T3.

