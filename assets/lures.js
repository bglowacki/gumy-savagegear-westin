/* JEDNO ŹRÓDŁO PRAWDY dla kart gum. Edytuj tutaj — zmiana propaguje na wszystkie strony.
 *
 * Pola STAŁE (te same wszędzie): title, img, depth.
 * Pola DOMYŚLNE (widok katalogowy / indeks): badges, headline, kolor, body.
 *   Podstrony pogodowe nadpisują badges/headline/kolor/body własnym ujęciem
 *   (patrz konfiguracja w slonce-mocne.html / slonce-slabe.html).
 *
 * badge: 'uv' | 'natural' | 'glow' | 'dark' (etykieta domyślna)
 *        albo ['glow-partial','GLOW (głowa)'] dla etykiety własnej.
 */
window.LURES = {
  'sg-140': {
    title: 'SG Sandeel V2 BG · 140 g · 21,5 cm',
    img: 'images/01_SG_SandeelV2-BG_140g_21.5cm_OrangeGlow_generic.jpg',
    depth: '10–30 m · prąd słaby/średni',
    badges: [['uv', 'UV']],
    headline: 'Płycizna, sandeel, dorsz, czarniak',
    kolor: 'kolor z maila nieznany (generic Orange Glow); UV-linia → dobre do różnych warunków światła',
    body: 'Najlżejszy z setu. Płytki szelf, krawędzie do ~30 m. Powolny twitch + drop. Idealny gdy drapieżniki polują na małego tobiasza.'
  },
  'sa150-bluepearl': {
    title: 'Westin Sandy Andy Jig · 150 g · 23 cm · Blue Pearl',
    img: 'images/02_Westin_SandyAndyJig_150g_23cm_BluePearl.jpg',
    depth: '10–40 m · prąd słaby/średni',
    badges: [],
    headline: 'Sandeel imitacja, klarowna woda',
    kolor: 'klarowna woda + słońce / lekkie chmury (naturalny pearl, bez UV)',
    body: 'Kompletny jig (głowica 150 g + 2 korpusy). Niebieskoperłowy: naturalna imitacja śledzia/tobiasza w klarownej wodzie.'
  },
  'sa150-motoroil': {
    title: 'Westin Sandy Andy Jig · 150 g · 23 cm · Motoroil Gadus',
    img: 'images/03_Westin_SandyAndyJig_150g_23cm_MotoroilGadus.jpg',
    depth: '10–50 m · prąd słaby/średni',
    badges: [['dark', 'CIEMNY']],
    headline: 'Sandeel imitacja, mętna woda',
    kolor: 'pochmurno · deszczowo · mętna/ciemna woda (ciemny kontrast)',
    body: 'Ciemny motoroil — bursztynowo-brązowy z gęstym brokatem i ciemnym grzbietem, kontrastowy w słabym świetle. Najlepszy gdy słońca brak.'
  },
  'sa150-tobis': {
    title: 'Westin Sandy Andy Jig · 150 g · 23 cm · Tobis Ammo',
    img: 'images/04_Westin_SandyAndyJig_150g_23cm_TobisAmmo.jpg',
    depth: '10–40 m · prąd słaby',
    badges: [],
    headline: 'Naturalny tobiasz, piaszczyste dno',
    kolor: 'jasno · czyste piaszczyste/żwirowe dno (imitacja naturalnej ofiary)',
    body: 'Wojskowo-zielono-brązowy tobiasz = imitacja ofiary nad piaszczystymi półkami. Pierwszy wybór gdy widać tobiasze przy dnie.'
  },
  'sg-175': {
    title: 'SG Sandeel V2 BG · 175 g · 23,5 cm',
    img: 'images/05_SG_SandeelV2-BG_175g_23.5cm_OrangeGlow_generic.jpg',
    depth: '20–50 m · prąd średni',
    badges: [['uv', 'UV']],
    headline: 'Sandeel, średnia głębokość',
    kolor: 'kolor z maila nieznany; UV-linia → różne warunki światła',
    body: 'Wagowo idealny gdy 140 g zaczyna zarzucać, a 275 g jest jeszcze przesadą. Sprawdza się przy umiarkowanej fali pływu.'
  },
  'sg-275-puffin': {
    title: 'SG Sandeel V2 BG · 275 g · 27,5 cm · Puffin',
    img: 'images/06_SG_SandeelV2-BG_275g_Puffin.jpg',
    depth: '30–80 m · prąd mocny',
    badges: [['uv', 'UV']],
    headline: 'Big-game, kontrast w każdym świetle',
    kolor: 'jasno + pochmurno (czarny/biały/orange kontrast + UV)',
    body: 'Czarny grzbiet + biały brzuch + pomarańczowy akcent (maskonur) = silny kontrast. Killing zone — strefa 30–80 m w nurcie.'
  },
  'sg-275-greensilver': {
    title: 'SG Sandeel V2 BG · 275 g · 27,5 cm · Green Silver',
    img: 'images/07_SG_SandeelV2-BG_275g_GreenSilver.jpg',
    depth: '30–80 m · prąd mocny',
    badges: [['uv', 'UV']],
    headline: 'Imitacja czarniaka',
    kolor: 'klarowna woda + słońce (naturalny saithe + UV pomocniczo)',
    body: 'Miniatura czarniaka (saithe), naturalna ofiara halibuta. W słońcu nad dnem skalistym/rumowiskiem. Świetnie przy dryfie wzdłuż krawędzi.'
  },
  'sg-275-bluepearlsilver': {
    title: 'SG Sandeel V2 BG · 275 g · 27,5 cm · Blue Pearl Silver',
    img: 'images/13_SG_SandeelV2-BG_275g_BluePearlSilver.jpg',
    depth: '30–80 m · prąd mocny',
    badges: [['uv', 'UV']],
    headline: 'Sørøya klasyka — śledź/makrela',
    kolor: 'klarowna głęboka woda + jasno (pearl + UV)',
    body: 'Niebieski wariant baitfish. Uniwersalny strzał na jasny dzień przy głębszej krawędzi — klasyk Sørøya.'
  },
  'herring-redfish': {
    title: 'SG 4D Herring Big Shad · 300 g · 25 cm · Red Fish',
    img: 'images/14_SG_4DHerringBigShad_25cm_300g_RedFish.jpg',
    depth: '30–80 m i głębiej · prąd mocny',
    badges: [['uv', 'UV']],
    headline: 'Trofeowy halibut na karmazynie',
    kolor: 'jasno + pochmurno · skaliste dno gdzie żyje karmazyn (UV details)',
    body: 'Red Fish = imitacja karmazyna (rosefish, Sebastes), kluczowa ofiara halibuta. Pionowy jigging do dna, 5–10 m w górę i drop. Kevlar stinger + 4X hak.'
  },
  'sa300-robocod': {
    title: 'Westin Sandy Andy Jig · 300 g · 28 cm · Robo Cod',
    img: 'images/11_Westin_SandyAndyJig_300g_28cm_RoboCod.jpg',
    depth: '30–60 m · prąd średni/mocny',
    badges: [['glow-partial', 'GLOW (brzuch)']],
    headline: 'Imitacja dorsza, mieszane światło',
    kolor: 'jasno do pochmurnego (luminescencyjny brzuch pomaga w głębi)',
    body: 'Robo Cod = wzór dorsza. Fosforyzujący brzuch (NIE UV) widoczny dłużej w głębi. Oszukuje halibuta i lingę kontrolujące dorszy żerujących.'
  },
  'sa300-glowgadus': {
    title: 'Westin Sandy Andy Jig · 300 g · 28 cm · Glow Gadus',
    img: 'images/08_Westin_SandyAndyJig_300g_28cm_GlowGadus.jpg',
    depth: '30–80 m · prąd średni/mocny',
    badges: [['glow', 'GLOW']],
    headline: 'Niska widoczność / głęboko',
    kolor: 'świt/zmierzch · pochmurno · głęboko (GLOW — naładuj latarką)',
    body: 'Świecący korpus (fosfor, nie UV). Stosuj gdzie naturalne kolory już znikają (>~30 m w pochmurnym świetle).'
  },
  'sa300-bluepearl': {
    title: 'Westin Sandy Andy Jig · 300 g · 28 cm · Blue Pearl',
    img: 'images/09_Westin_SandyAndyJig_300g_28cm_BluePearl.jpg',
    depth: '30–60 m · prąd średni/mocny',
    badges: [],
    headline: 'Klarowna głęboka woda, słońce',
    kolor: 'klarowna woda + słońce (pearl błyszczy pod kątem)',
    body: 'Pełnowymiarowa wersja 300 g w klarownej wodzie. Niebiesko-perłowe boki dają błysk widoczny z daleka kiedy słońce wchodzi pod kątem.'
  },
  'cd400-glowgadus': {
    title: 'Westin Crazy Daisy Jig · 400 g · 27 cm · Glow Gadus',
    img: 'images/10_Westin_CrazyDaisyJig_400g_27cm_GlowGadus.jpg',
    depth: '50–120 m+ · prąd mocny',
    badges: [['glow', 'GLOW']],
    headline: 'Trofeowy halibut głęboko',
    kolor: 'pochmurno · głęboko · świt/zmierzch (GLOW — naładuj latarką)',
    body: 'Kompletny jig 400 g (paddle + curl + głowica). Glow Gadus = fosfor. Top-tier dla halibuta w głębokim, ciemnym słupie wody.'
  },
  'cd400-headlight': {
    title: 'Westin Crazy Daisy Jig · 400 g · 27 cm · HeadLight',
    img: 'images/12_Westin_CrazyDaisyJig_400g_27cm_HeadLight.jpg',
    depth: '50–120 m+ · prąd mocny',
    badges: [['glow-partial', 'GLOW (głowa)']],
    headline: 'Trofeowy halibut, słaba widoczność',
    kolor: 'mętno · noc · głęboko (świeci głowa — korpus naturalny srebrny)',
    body: 'Ciężka pałka. Jak sama nazwa: świeci/jaskrawi się głowa (żółto-chartreuse „reflektor") — punkt celowniczy w słabym świetle. Korpus to naturalny srebrny śledź i nie świeci (wg zdjęcia referencyjnego). Wolno przy dnie, lekkimi twitchami w górę. Sørøya: ostatnie godziny pływu, prąd ~3 węzłów.'
  }
};

// Kolejność na indeksie (sciaga_soroya.html) — od najlżejszej do najcięższej.
window.LURES_ORDER = [
  'sg-140', 'sa150-bluepearl', 'sa150-motoroil', 'sa150-tobis', 'sg-175',
  'sg-275-puffin', 'sg-275-greensilver', 'sg-275-bluepearlsilver', 'herring-redfish',
  'sa300-robocod', 'sa300-glowgadus', 'sa300-bluepearl', 'cd400-glowgadus', 'cd400-headlight'
];
