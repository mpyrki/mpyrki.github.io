webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Navigation/NavItem/NavItem.js":
/*!**************************************************!*\
  !*** ./components/Navigation/NavItem/NavItem.js ***!
  \**************************************************/
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
/* harmony import */ var _NavItem_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavItem.scss */ "./components/Navigation/NavItem/NavItem.scss");
/* harmony import */ var _NavItem_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_NavItem_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\Programowanie\\Projekty\\Fizjoterapia_NextJs\\components\\Navigation\\NavItem\\NavItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//libraries





var navItem = function navItem(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("a", {
    onClick: props.clicked,
    className: router.pathname === props.href ? _NavItem_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Active : _NavItem_scss__WEBPACK_IMPORTED_MODULE_3___default.a.NotActive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, props.children)));
};

/* harmony default export */ __webpack_exports__["default"] = (navItem);

/***/ })

})
//# sourceMappingURL=_app.js.eb8ed40065f5311fd161.hot-update.js.map