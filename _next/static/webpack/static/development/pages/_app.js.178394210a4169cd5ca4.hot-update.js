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
/* harmony import */ var _Navigation_NavMobile_NavMobile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Navigation/NavMobile/NavMobile */ "./components/Navigation/NavMobile/NavMobile.js");





var _jsxFileName = "E:\\Programowanie\\Projekty\\Fizjoterapia_NextJs\\components\\Header\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;
//libraries
 //components





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
      }), __jsx(_Navigation_NavMobile_NavMobile__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Navigation/NavBtn/NavBtn.js":
/*!************************************************!*\
  !*** ./components/Navigation/NavBtn/NavBtn.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavBtn_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBtn.scss */ "./components/Navigation/NavBtn/NavBtn.scss");
/* harmony import */ var _NavBtn_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NavBtn_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Programowanie\\Projekty\\Fizjoterapia_NextJs\\components\\Navigation\\NavBtn\\NavBtn.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//libraries
 //styles

 //components

var navBtn = function navBtn(props) {
  var activeBtn = null;

  if (props.active) {
    activeBtn = _NavBtn_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Active;
  }

  return __jsx("button", {
    className: _NavBtn_scss__WEBPACK_IMPORTED_MODULE_1___default.a.NavigationBtn + ' ' + activeBtn,
    onClick: props.clicked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (navBtn);

/***/ }),

/***/ "./components/Navigation/NavMobile/NavMobile.js":
/*!******************************************************!*\
  !*** ./components/Navigation/NavMobile/NavMobile.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _NavMobile_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NavMobile.scss */ "./components/Navigation/NavMobile/NavMobile.scss");
/* harmony import */ var _NavMobile_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_NavMobile_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _NavItem_NavItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../NavItem/NavItem */ "./components/Navigation/NavItem/NavItem.js");
/* harmony import */ var _NavBtn_NavBtn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../NavBtn//NavBtn */ "./components/Navigation/NavBtn/NavBtn.js");







var _jsxFileName = "E:\\Programowanie\\Projekty\\Fizjoterapia_NextJs\\components\\Navigation\\NavMobile\\NavMobile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;
//libraries
 //styles

 //components




var Navigation =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Navigation, _Component);

  function Navigation() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navigation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      hide: true,
      active: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggleMobile", function () {
      _this.setState({
        hide: !_this.state.hide,
        active: !_this.state.active
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navigation, [{
    key: "render",
    value: function render() {
      var showMenu = _NavMobile_scss__WEBPACK_IMPORTED_MODULE_8___default.a.Hide;
      this.state.hide ? showMenu = _NavMobile_scss__WEBPACK_IMPORTED_MODULE_8___default.a.Hide : showMenu = _NavMobile_scss__WEBPACK_IMPORTED_MODULE_8___default.a.Show;
      return __jsx("nav", {
        className: _NavMobile_scss__WEBPACK_IMPORTED_MODULE_8___default.a.NavMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx(_NavBtn_NavBtn__WEBPACK_IMPORTED_MODULE_10__["default"], {
        clicked: this.toggleMobile,
        active: this.state.active,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), __jsx("div", {
        className: _NavMobile_scss__WEBPACK_IMPORTED_MODULE_8___default.a.NavMenu + " " + showMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx(_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        link: "".concat(process.env.PUBLIC_URL, "/home"),
        active: _NavMobile_scss__WEBPACK_IMPORTED_MODULE_8___default.a.Active,
        clicked: this.toggleMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Strona g\u0142\xF3wna"), __jsx(_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        link: "".concat(process.env.PUBLIC_URL, "/fala_uderzeniowa"),
        active: _NavMobile_scss__WEBPACK_IMPORTED_MODULE_8___default.a.Active,
        clicked: this.toggleMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Fala uderzeniowa"), __jsx(_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        link: "".concat(process.env.PUBLIC_URL, "/hitop"),
        active: _NavMobile_scss__WEBPACK_IMPORTED_MODULE_8___default.a.Active,
        clicked: this.toggleMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Hitop"), __jsx(_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        link: "".concat(process.env.PUBLIC_URL, "/tesla_stym"),
        active: _NavMobile_scss__WEBPACK_IMPORTED_MODULE_8___default.a.Active,
        clicked: this.toggleMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "Tesla Stym"), __jsx(_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        link: "".concat(process.env.PUBLIC_URL, "/laser_wysokoenergetyczny"),
        active: _NavMobile_scss__WEBPACK_IMPORTED_MODULE_8___default.a.Active,
        clicked: this.toggleMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Laser wysokoenergetyczny"), __jsx(_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        link: "".concat(process.env.PUBLIC_URL, "/cennik"),
        active: _NavMobile_scss__WEBPACK_IMPORTED_MODULE_8___default.a.Active,
        clicked: this.toggleMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "Cennik"), __jsx(_NavItem_NavItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
        link: "".concat(process.env.PUBLIC_URL, "/kontakt"),
        active: _NavMobile_scss__WEBPACK_IMPORTED_MODULE_8___default.a.Active,
        clicked: this.toggleMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Kontakt"))));
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Navigation);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=_app.js.178394210a4169cd5ca4.hot-update.js.map