# Gumy morskie — Savage Gear & Westin (wg maili)

Posortowane od najlżejszej do najcięższej. Źródła: Spark Desktop lokalny cache (Allegro + Amazon order/payment maile, maj–czerwiec 2026).

| # | Waga | Długość | Producent | Model | Kolor | Cena | Zamówienie |
|---|-----:|--------:|-----------|-------|-------|-----:|------------|
| 1 | 140 g | 21,5 cm | Savage Gear | Sandeel V2 Big Game | (kolor nie był w mailu — Allegro id `18231878538`) | 59,90 zł | Allegro / troc_szczecin · 22.05.2026 |
| 2 | ~150 g | 23 cm | Westin | Sandy Andy Jig *(kompletny + zapas korpusów)* | **Blue Pearl** (kod BP) | 87,99 zł | Allegro / troc_szczecin · 22.05.2026 |
| 3 | ~150 g | 23 cm | Westin | Sandy Andy Jig *(kompletny + zapas korpusów)* | **Motoroil Gadus** (kod MOG) | 87,99 zł | Allegro / troc_szczecin · 22.05.2026 |
| 4 | ~150 g | 23 cm | Westin | Sandy Andy Jig *(kompletny + zapas korpusów)* | **Tobis Ammo** (kod TA) | 87,99 zł | Allegro / troc_szczecin · 22.05.2026 |
| 5 | 175 g | 23,5 cm | Savage Gear | Sandeel V2 Big Game | (kolor nie był w mailu — Allegro id `16985559998`) | 68,90 zł | Allegro / troc_szczecin · 22.05.2026 |
| 6 | 275 g | 27,5 cm | Savage Gear | Sandeel V2 Big Game | **Puffin** | 72,51 zł | Amazon / pilker-discount_GmbH · ~01.06.2026 |
| 7 | 275 g | 27,5 cm | Savage Gear | Sandeel V2 Big Game | **Blue Pearl Silver** | 72,51 zł | Amazon · ~01.06.2026 |
| 8 | 275 g | 27,5 cm | Savage Gear | Sandeel V2 Big Game | **zielono-srebrny** (Green Silver) | 72,51 zł | Amazon · ~01.06.2026 |
| 9 | 300 g | 28 cm | Westin | Sandy Andy Jig (kompletny: 1 hak jigowy + 2 gumowe ryby) | **Robo Cod** | 102,39 zł | Amazon · ~01.06.2026 |
| 10 | 300 g | 28 cm | Westin | Sandy Andy Jig (kompletny) | **Glow Gadus** | 102,39 zł | Amazon · ~01.06.2026 |
| 11 | 300 g | 28 cm | Westin | Sandy Andy Jig (kompletny) | **Blue Pearl** | 102,39 zł | Amazon · ~01.06.2026 |
| 12 | 400 g | 27 cm | Westin | Crazy Daisy Jig *(kompletny + zapas korpusów)* | **Glow Gadus** (kod GG) | 118,99 zł | Allegro / troc_szczecin · 04.06.2026 |
| 13 | 400 g | 27 cm | Westin | Crazy Daisy Jig (kompletny: head + 2 gumy) | **HeadLight** | 118,99 zł | Allegro / pan_wedkarz · 04.06.2026 |
| 14 | 300 g | 25 cm | Savage Gear | 4D Herring Big Shad *(dodane ręcznie — brak w mailach)* | **Red Fish** (karmazyn) | — | — |

## Strony (HTML)

| Strona | Co zawiera |
|---|---|
| [`sciaga_soroya.html`](sciaga_soroya.html) | **Indeks** wszystkich 14 gum (kolejność wagowa). Menu na górze linkuje do podstron wg nasłonecznienia. |
| [`slonce-mocne.html`](slonce-mocne.html) | ☀️ **Mocne słońce** — jasny dzień, klarowna woda: UV-reactive (cała linia SG) + naturalne perłowe/błyszczące kolory (Blue Pearl, Tobis Ammo, Green Silver). 9 pozycji. |
| [`slonce-slabe.html`](slonce-slabe.html) | 🌥️ **Słabe słońce / mrok** — dwie sekcje: **(1) pochmurny dzień** = te same gumy UV linii SG (działają pod chmurami, słabiej); **(2) mrok/noc/głębia/mętna woda** = GLOW (fosfor) + ciemne kontrastowe (Motoroil, Puffin). 11 pozycji (5 UV + 6 GLOW/ciemne). |

### Komponenty (jedno źródło prawdy)

Karty gum są **reuzywalne** między stronami — dane gumy żyją w jednym miejscu, strony tylko je składają:

| Plik | Rola |
|---|---|
| [`assets/lures.js`](assets/lures.js) | **Jedno źródło prawdy** — `window.LURES`: dla każdej gumy stałe pola (tytuł, zdjęcie, głębokość) + domyślny opis (badge/headline/kolor/body = widok indeksu). Edytujesz raz, zmiana propaguje wszędzie. |
| [`assets/cards.js`](assets/cards.js) | Komponent: `renderGrid('#kontener', [...])` renderuje karty z `LURES`; pola opisowe można nadpisać per strona. |
| [`assets/cards.css`](assets/cards.css) | Wspólne style kart i znaczników (UV / GLOW / GLOW-partial / CIEMNY / NATURALNY). |

Ta sama guma na kilku stronach (np. SG UV na liście słonecznej **i** w sekcji „pochmurno") = jeden wpis w `lures.js`, różne ujęcie opisu na stronie. Zmiana zdjęcia/wagi/nazwy = jedna edycja.

Podział wynika z tagów: **UV-reactive** świeci dzięki promieniom UV — najmocniej w słońcu, ale UV przechodzi też przez chmury (75–90%), więc działa i przy zachmurzeniu (słabiej); gaśnie dopiero nocą i poniżej zasięgu UV-A. **GLOW** świeci sam po naładowaniu światłem — wtedy, gdy UV już nie ma (noc, głębia, mętna woda). Podział na podstrony jest więc praktyczny (jasny dzień ↔ mrok/głębia), nie sztywny: gumy UV bywają skuteczne także pod chmurami.

## Tagi technologiczne

| Tag | Co znaczy | Pozycje z listy |
|---|---|---|
| 🟣 **UV** | UV-reactive paint deklarowany przez producenta. Świeci dzięki promieniom UV — najmocniej w słońcu, ale UV przechodzi przez chmury (75–90%), więc działa też przy zachmurzeniu (słabiej). UV-A sięga najgłębiej ze wszystkich barw: w najczystszej toni kilkadziesiąt metrów, w wodzie przybrzeżnej znacznie mniej. Gaśnie w nocy i poniżej zasięgu UV. | **1, 5, 6, 7, 8, 14** (cała linia SG Sandeel V2 BG + 4D Herring Big Shad) |
| 🟢 **GLOW** | Fosforyzujący (phosphor) korpus. Naładuj latarką przed wpuszczeniem, świeci sam w ciemności. Dla mętnej wody, nocy, głębi >100 m. | **10, 12** (Westin Glow Gadus — Sandy Andy 300 g + Crazy Daisy 400 g) |
| 🟢½ **GLOW (część)** | Świeci/jaskrawi się tylko fragment lury, reszta korpusu naturalna. | **9** (Robo Cod — luminescencyjny brzuch), **13** (Headlight — jaskrawa „reflektorowa" głowa, korpus naturalny srebrny) |
| — (brak) | Naturalny kolor bez UV/GLOW deklarowanego. | **2, 3, 4, 11** (Westin Sandy Andy Blue Pearl/MOG/TA, 300 g BP) |

**Ważne:** Westin Sandy Andy / Crazy Daisy producent NIE deklaruje UV. „Glow Gadus" to fosforyzujący korpus (świeci po naładowaniu), a „Headlight" ma jaskrawą/świecącą głowę przy naturalnym, srebrnym korpusie (świeci sama głowa — potwierdza zdjęcie referencyjne) — w obu wypadkach to nie UV. SG odwrotnie — cała linia Sandeel V2 BG i 4D Herring ma UV-reactive finish (sprawdzone na savage-gear.com, gerlinger.de, pilker-discount.de).

## Uwagi
- **140 g i 175 g Sandeel V2**: pełna nazwa koloru była w tytule oferty Allegro, której Spark nie zachowuje w treści maila (Allegro blokuje też fetch po HTTP 403). Mam tylko ID ofert.
- **Sandy Andy 23 cm = ~150 g** (Westin oficjalny rozmiar zamiennika dla tego wymiaru) — kody kolorów BP / MOG / TA odpowiadają nazwom Blue Pearl / Motoroil Gadus / Tobis Ammo z oficjalnego katalogu (Hook-Up).
- **Crazy Daisy 27 cm = 400 g** (rozmiar handlowy Westina dla 27 cm). GG = Glow Gadus (potwierdzone u DB Angling Supplies).
- Wszystkie pozycje Westina to **kompletne jigi** (głowica + korpus/-y) — Allegro etykietuje je czasem "morskie gumy" lub "spare body", ale w opakowaniu jest też głowica plus dodatkowy zapasowy korpus tej samej barwy. Sandy Andy 150 g/23 cm i Crazy Daisy 400 g/27 cm to ten sam typ produktu co Sandy Andy Jig 300 g/28 cm — różni je tylko rozmiar głowicy.
- Z zamówień **NIE** zaliczyłem do listy: wędki SGS2 Inline Boat Game, torby WPMP Lure Carryall (zwrot), tulejki zaciskowej Crimps — to nie są gumy.

## Galeria (`images/`)

| # | Plik | Pozycja |
|---|------|---------|
| 1 | [`01_SG_SandeelV2-BG_140g_21.5cm_OrangeGlow_generic.jpg`](images/01_SG_SandeelV2-BG_140g_21.5cm_OrangeGlow_generic.jpg) | SG Sandeel V2 BG 140 g / 21,5 cm (kolor z maila nieznany — pokazany wzór) |
| 2 | [`02_Westin_SandyAndyJig_150g_23cm_BluePearl.jpg`](images/02_Westin_SandyAndyJig_150g_23cm_BluePearl.jpg) | Westin Sandy Andy Jig 150 g / 23 cm — **Blue Pearl** (BP) |
| 3 | [`03_Westin_SandyAndyJig_150g_23cm_MotoroilGadus.jpg`](images/03_Westin_SandyAndyJig_150g_23cm_MotoroilGadus.jpg) | Westin Sandy Andy Jig 150 g / 23 cm — **Motoroil Gadus** (MOG) |
| 4 | [`04_Westin_SandyAndyJig_150g_23cm_TobisAmmo.jpg`](images/04_Westin_SandyAndyJig_150g_23cm_TobisAmmo.jpg) | Westin Sandy Andy Jig 150 g / 23 cm — **Tobis Ammo** (TA) |
| 5 | [`05_SG_SandeelV2-BG_175g_23.5cm_OrangeGlow_generic.jpg`](images/05_SG_SandeelV2-BG_175g_23.5cm_OrangeGlow_generic.jpg) | SG Sandeel V2 BG 175 g / 23,5 cm (kolor z maila nieznany) |
| 6 | [`06_SG_SandeelV2-BG_275g_Puffin.jpg`](images/06_SG_SandeelV2-BG_275g_Puffin.jpg) | SG Sandeel V2 BG 275 g / 27,5 cm — **Puffin** |
| 7 | [`07_SG_SandeelV2-BG_275g_GreenSilver.jpg`](images/07_SG_SandeelV2-BG_275g_GreenSilver.jpg) | SG Sandeel V2 BG 275 g / 27,5 cm — **Green Silver** (zielono-srebrny) |
| 8 | [`13_SG_SandeelV2-BG_275g_BluePearlSilver.jpg`](images/13_SG_SandeelV2-BG_275g_BluePearlSilver.jpg) | SG Sandeel V2 BG 275 g / 27,5 cm — **Blue Pearl Silver** |
| 9 | [`11_Westin_SandyAndyJig_300g_28cm_RoboCod.jpg`](images/11_Westin_SandyAndyJig_300g_28cm_RoboCod.jpg) | Westin Sandy Andy Jig 300 g / 28 cm — **Robo Cod** |
| 10 | [`08_Westin_SandyAndyJig_300g_28cm_GlowGadus.jpg`](images/08_Westin_SandyAndyJig_300g_28cm_GlowGadus.jpg) | Westin Sandy Andy Jig 300 g / 28 cm — **Glow Gadus** |
| 11 | [`09_Westin_SandyAndyJig_300g_28cm_BluePearl.jpg`](images/09_Westin_SandyAndyJig_300g_28cm_BluePearl.jpg) | Westin Sandy Andy Jig 300 g / 28 cm — **Blue Pearl** |
| 12 | [`10_Westin_CrazyDaisyJig_400g_27cm_GlowGadus.jpg`](images/10_Westin_CrazyDaisyJig_400g_27cm_GlowGadus.jpg) | Westin Crazy Daisy Jig 400 g / 27 cm — **Glow Gadus** (kod GG) |
| 13 | [`12_Westin_CrazyDaisyJig_400g_27cm_HeadLight.jpg`](images/12_Westin_CrazyDaisyJig_400g_27cm_HeadLight.jpg) | Westin Crazy Daisy Jig 400 g / 27 cm — **HeadLight** |
| 14 | [`14_SG_4DHerringBigShad_25cm_300g_RedFish.jpg`](images/14_SG_4DHerringBigShad_25cm_300g_RedFish.jpg) | SG **4D Herring Big Shad** 300 g / 25 cm — **Red Fish** (karmazyn) · dodane ręcznie |

## Źródła
- Lokalny cache Spark Desktop (FTS + messageBodyParsedData)
- [Westin Sandy Andy Jig Spare Bodies — Hook-Up](https://hook-up.eu/en/shad/7017-westin-sandy-andy-jig-spare-bodies.html)
- [Savage Gear Sandeel V2 Big Game — oficjalna strona](https://savage-gear.com/products/lures/saltwater-lures/soft-lures/ready-to-fish/sandeel-v2-big-game)
- [Sandeel V2 Big Game 21,5 cm / 140 g — Gerrys Fishing](https://www.gerrysfishing.com/product/savage-gear-sandeel-v2-big-game-21-5cm-140g-mackerel/)
- [Sandeel V2 Big Game 23,5 cm / 175 g — Gerrys Fishing](https://www.gerrysfishing.com/product/savage-gear-sandeel-v2-big-game-23-5cm-175g-mackerel/)
- [Westin Crazy Daisy 400 g / 27 cm Glow Gadus — DB Angling](https://www.dbanglingsupplies.co.uk/westin-crazy-daisy-400g-glow-gadus-norway-cod-and-halibut-lures)
- [Westin Crazy Daisy Jig — Westin Fishing](https://www.westin-fishing.com/en/jigs/crazy-daisy-jig)
