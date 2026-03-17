// Force logo size via JS as fallback
(function() {
  var style = document.createElement('style');
  style.textContent = [
    '#navbar img, #navbar svg,',
    '[class*="logo" i] img, [class*="logo" i] svg,',
    '[class*="Logo"] img, [class*="Logo"] svg {',
    '  height: 41px !important;',
    '  width: auto !important;',
    '  max-height: none !important;',
    '}'
  ].join('\n');
  document.head.appendChild(style);
})();
