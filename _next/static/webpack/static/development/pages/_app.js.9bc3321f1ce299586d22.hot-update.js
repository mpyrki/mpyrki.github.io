webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Navigation_TopNav_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Navigation/TopNav/Navigation */ "./components/Navigation/TopNav/Navigation.js");
/* harmony import */ var _UI_Headings_Heading1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UI/Headings/Heading1 */ "./components/UI/Headings/Heading1.js");





var _jsxFileName = "E:\\Programowanie\\Projekty\\Fizjoterapia_NextJs\\components\\Header\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
//libraries
 //components


 // import NavMobile from '../NavMobile/NavMobile';

var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _Component);

  function Header() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      return __jsx("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx(_UI_Headings_Heading1__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Prywatny Gabinet Masa\u017Cu i Fizjoterapii"), __jsx(_Navigation_TopNav_Navigation__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header/NavItem/NavItem.js":
false,

/***/ "./components/Header/TopNav/Navigation.js":
false,

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
    className: router.pathname === props.href ? _NavItem_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Active : _NavItem_scss__WEBPACK_IMPORTED_MODULE_3___default.a.NotActive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, props.children)));
};

/* harmony default export */ __webpack_exports__["default"] = (navItem);

/***/ }),

/***/ "./components/Navigation/TopNav/Navigation.js":
/*!****************************************************!*\
  !*** ./components/Navigation/TopNav/Navigation.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.scss */ "./components/Navigation/TopNav/Navigation.scss");
/* harmony import */ var _Navigation_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navigation_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavItem_NavItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavItem/NavItem */ "./components/Navigation/NavItem/NavItem.js");
var _jsxFileName = "E:\\Programowanie\\Projekty\\Fizjoterapia_NextJs\\components\\Navigation\\TopNav\\Navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//styles
 //components



var navigation = function navigation() {
  return __jsx("nav", {
    className: _Navigation_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Navigation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("ul", {
    className: _Navigation_scss__WEBPACK_IMPORTED_MODULE_1___default.a.NavigationMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("i", {
    className: "fas fa-home fa-2x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), __jsx(_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/fala_uderzeniowa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Fala uderzeniowa"), __jsx(_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/masaz_wodny",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Masa\u017C wodny"), __jsx(_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/hitop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Hitop"), __jsx(_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/tesla_stym",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Tesla Stym"), __jsx(_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/laser_wysokoenergetyczny",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Laser wysokoenergetyczny"), __jsx(_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/hivamat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Hivamat"), __jsx(_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/cennik",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Cennik"), __jsx(_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/kontakt",
    active: _Navigation_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Active,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Kontakt")));
};

/* harmony default export */ __webpack_exports__["default"] = (navigation);

/***/ })

})
//# sourceMappingURL=_app.js.9bc3321f1ce299586d22.hot-update.js.map