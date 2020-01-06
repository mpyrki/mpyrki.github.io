webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Navigation/AsideNavigation/AsideLink/AsideLink.js":
/*!**********************************************************************!*\
  !*** ./components/Navigation/AsideNavigation/AsideLink/AsideLink.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AsideLink_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AsideLink.scss */ "./components/Navigation/AsideNavigation/AsideLink/AsideLink.scss");
/* harmony import */ var _AsideLink_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AsideLink_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\Programowanie\\Projekty\\Fizjoterapia_NextJs\\components\\Navigation\\AsideNavigation\\AsideLink\\AsideLink.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var AsideLink = function AsideLink(_ref) {
  var children = _ref.children,
      href = _ref.href,
      className = _ref.className;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href,
    scroll: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("a", {
    className: router.pathname === href ? _AsideLink_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Active : _AsideLink_scss__WEBPACK_IMPORTED_MODULE_3___default.a.NotActive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (AsideLink);

/***/ })

})
//# sourceMappingURL=index.js.d11d45642a90e548c7a4.hot-update.js.map