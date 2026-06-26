/* Komponent karty gumy. Renderuje karty z danych window.LURES (assets/lures.js).
 *
 * Użycie na stronie:
 *   renderGrid('#grid', [
 *     { id: 'sg-275-puffin' },                          // pełny widok katalogowy z lures.js
 *     { id: 'sg-140', badges:[['uv','UV']],             // nadpisanie pól per strona
 *       headline:'...', kolor:'...', body:'...' },
 *   ]);
 *
 * Pola stałe gumy (tytuł, zdjęcie, głębokość) są ZAWSZE z lures.js — jedno źródło prawdy.
 * Pola opisowe (badges/headline/kolor/body) można nadpisać per strona; bez nadpisania
 * brane są wartości domyślne (widok katalogowy) z lures.js.
 */
(function () {
  var DEFAULT_LABELS = { uv: 'UV', natural: 'NATURALNY', glow: 'GLOW', dark: 'CIEMNY' };

  function escAttr(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function escHTML(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // badge: 'uv' (etykieta domyślna) albo ['glow-partial','GLOW (głowa)'] (etykieta własna)
  function badgesHTML(spec) {
    if (!spec || !spec.length) return '';
    return spec.map(function (b) {
      var cls, label;
      if (Array.isArray(b)) { cls = b[0]; label = b[1]; }
      else { cls = b; label = DEFAULT_LABELS[b] || b; }
      return '<span class="badge ' + escAttr(cls) + '">' + escHTML(label) + '</span>';
    }).join('');
  }

  function pick(it, L, key) { return it[key] !== undefined ? it[key] : L[key]; }

  function cardHTML(it) {
    var L = (window.LURES || {})[it.id];
    if (!L) { console.warn('renderGrid: nieznana guma "' + it.id + '"'); return ''; }
    // headline/kolor/body to autorska treść (mogą zawierać <b> itp.) — nie escapujemy.
    var badges = pick(it, L, 'badges');
    var headline = pick(it, L, 'headline');
    var kolor = pick(it, L, 'kolor');
    var body = pick(it, L, 'body');
    return '<article class="card">' +
      '<img src="' + escAttr(L.img) + '" alt="' + escAttr(L.title) + '" loading="lazy">' +
      '<h2>' + escHTML(L.title) + '</h2>' +
      '<p class="badges">' + badgesHTML(badges) + '</p>' +
      (headline ? '<p class="headline">' + headline + '</p>' : '') +
      '<p class="metric depth"><span>GŁĘBOKOŚĆ</span> ' + (L.depth || '') + '</p>' +
      '<p class="metric color"><span>KOLOR</span> ' + (kolor || '') + '</p>' +
      (body ? '<p class="body">' + body + '</p>' : '') +
      '</article>';
  }

  // renderGrid(selectorKontenera, listaPozycji)
  window.renderGrid = function (sel, items) {
    var host = document.querySelector(sel);
    if (!host) { console.warn('renderGrid: brak kontenera ' + sel); return; }
    host.innerHTML = (items || []).map(cardHTML).join('');
  };
})();
