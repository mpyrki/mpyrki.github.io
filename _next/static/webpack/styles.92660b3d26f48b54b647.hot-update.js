webpackHotUpdate("styles",{

/***/ "./components/Navigation/AsideNavigation/AsideNavigation.scss":
/*!********************************************************************!*\
  !*** ./components/Navigation/AsideNavigation/AsideNavigation.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Aside":"_1QrU94mj0ER7MgqpI_2Qlg","Active":"_1GDI6Fe9G7i3tsMypD2ow1"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1578324470156");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.92660b3d26f48b54b647.hot-update.js.map