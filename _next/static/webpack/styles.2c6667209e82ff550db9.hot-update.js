webpackHotUpdate("styles",{

/***/ "./styles/FalaUderzeniowa.scss":
/*!*************************************!*\
  !*** ./styles/FalaUderzeniowa.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"FalaUderzeniowa":"_2k56Jmmj5XfsSg9l6bgOC9","Pics":"Pj_vuHwscD8weh1iv5uLH"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1578322595443");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.2c6667209e82ff550db9.hot-update.js.map