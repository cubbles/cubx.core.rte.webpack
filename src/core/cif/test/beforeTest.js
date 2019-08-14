before(function () {
  var container = document.querySelector('[cubx-core-crc]');
  window.cubx.cif._init();
  var rootContext = window.cubx.cif._rootContext;
  container.Context = rootContext;
});
