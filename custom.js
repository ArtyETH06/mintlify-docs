(function() {
  var style = document.createElement('style');
  style.textContent = [
    '#navbar img, #navbar svg,',
    '[class*="logo" i] img, [class*="logo" i] svg,',
    '[class*="Logo"] img, [class*="Logo"] svg {',
    '  height: 37px !important;',
    '  width: auto !important;',
    '  max-height: none !important;',
    '  margin-left: -10px !important;',
    '}'
  ].join('\n');
  document.head.appendChild(style);
})();
