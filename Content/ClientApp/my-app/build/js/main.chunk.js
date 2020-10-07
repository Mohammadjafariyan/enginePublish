(this["webpackJsonpmy-app"] = this["webpackJsonpmy-app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".App {\r\n  text-align: center;\r\n}\r\n\r\n.App-logo {\r\n  height: 40vmin;\r\n  pointer-events: none;\r\n}\r\n\r\n@media (prefers-reduced-motion: no-preference) {\r\n  .App-logo {\r\n    animation: App-logo-spin infinite 20s linear;\r\n  }\r\n}\r\n\r\n.App-header {\r\n  background-color: #282c34;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: calc(10px + 2vmin);\r\n  color: white;\r\n}\r\n\r\n.App-link {\r\n  color: #61dafb;\r\n}\r\n\r\n@keyframes App-logo-spin {\r\n  from {\r\n    transform: rotate(0deg);\r\n  }\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/AppGlobalStyle.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/AppGlobalStyle.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);"]);
exports.push([module.i, "@import url(/Content/Site.css);"]);
// Module
exports.push([module.i, "\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\r\n  margin: 0;\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\r\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\r\n    sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\ncode {\r\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\r\n    monospace;\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/Tooltip.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/Tooltip.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* -------------------------------------------------------------------\r\n  Microtip\r\n  Modern, lightweight css-only tooltips\r\n  Just 1kb minified and gzipped\r\n  @author Ghosh\r\n  @package Microtip\r\n----------------------------------------------------------------------\r\n  1. Base Styles\r\n  2. Direction Modifiers\r\n  3. Position Modifiers\r\n--------------------------------------------------------------------*/\r\n\r\n\r\n/* ------------------------------------------------\r\n  [1] Base Styles\r\n-------------------------------------------------*/\r\n\r\n[aria-label][role~=\"tooltip\"] {\r\n    position: relative;\r\n}\r\n\r\n[aria-label][role~=\"tooltip\"]::before,\r\n[aria-label][role~=\"tooltip\"]::after {\r\n    transform: translate3d(0, 0, 0);\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    will-change: transform;\r\n    opacity: 0;\r\n    pointer-events: none;\r\n    transition: all var(--microtip-transition-duration, .18s) var(--microtip-transition-easing, ease-in-out) var(--microtip-transition-delay, 0s);\r\n    position: absolute;\r\n    box-sizing: border-box;\r\n    z-index: 10;\r\n    transform-origin: top;\r\n}\r\n\r\n[aria-label][role~=\"tooltip\"]::before {\r\n    background-size: 100% auto !important;\r\n    content: \"\";\r\n}\r\n\r\n[aria-label][role~=\"tooltip\"]::after {\r\n    background: rgba(17, 17, 17, .9);\r\n    border-radius: 4px;\r\n    color: #ffffff;\r\n    content: attr(aria-label);\r\n    font-size: var(--microtip-font-size, 13px);\r\n    font-weight: var(--microtip-font-weight, normal);\r\n    text-transform: var(--microtip-text-transform, none);\r\n    padding: .5em 1em;\r\n    white-space: nowrap;\r\n    box-sizing: content-box;\r\n}\r\n\r\n[aria-label][role~=\"tooltip\"]:hover::before,\r\n[aria-label][role~=\"tooltip\"]:hover::after,\r\n[aria-label][role~=\"tooltip\"]:focus::before,\r\n[aria-label][role~=\"tooltip\"]:focus::after {\r\n    opacity: 1;\r\n    pointer-events: auto;\r\n}\r\n\r\n\r\n\r\n/* ------------------------------------------------\r\n  [2] Position Modifiers\r\n-------------------------------------------------*/\r\n\r\n[role~=\"tooltip\"][data-microtip-position|=\"top\"]::before {\r\n    background: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%280%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E\") no-repeat;\r\n    height: 6px;\r\n    width: 18px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n[role~=\"tooltip\"][data-microtip-position|=\"top\"]::after {\r\n    margin-bottom: 11px;\r\n}\r\n\r\n[role~=\"tooltip\"][data-microtip-position|=\"top\"]::before {\r\n    transform: translate3d(-50%, 0, 0);\r\n    bottom: 100%;\r\n    left: 50%;\r\n}\r\n\r\n[role~=\"tooltip\"][data-microtip-position|=\"top\"]:hover::before {\r\n    transform: translate3d(-50%, -5px, 0);\r\n}\r\n\r\n[role~=\"tooltip\"][data-microtip-position|=\"top\"]::after {\r\n    transform: translate3d(-50%, 0, 0);\r\n    bottom: 100%;\r\n    left: 50%;\r\n}\r\n\r\n[role~=\"tooltip\"][data-microtip-position=\"top\"]:hover::after {\r\n    transform: translate3d(-50%, -5px, 0);\r\n}\r\n\r\n/* ------------------------------------------------\r\n  [2.1] Top Left\r\n-------------------------------------------------*/\r\n[role~=\"tooltip\"][data-microtip-position=\"top-left\"]::after {\r\n    transform: translate3d(calc(-100% + 16px), 0, 0);\r\n    bottom: 100%;\r\n}\r\n\r\n[role~=\"tooltip\"][data-microtip-position=\"top-left\"]:hover::after {\r\n    transform: translate3d(calc(-100% + 16px), -5px, 0);\r\n}\r\n\r\n\r\n/* ------------------------------------------------\r\n  [2.2] Top Right\r\n-------------------------------------------------*/\r\n[role~=\"tooltip\"][data-microtip-position=\"top-right\"]::after {\r\n    transform: translate3d(calc(0% + -16px), 0, 0);\r\n    bottom: 100%;\r\n}\r\n\r\n[role~=\"tooltip\"][data-microtip-position=\"top-right\"]:hover::after {\r\n    transform: translate3d(calc(0% + -16px), -5px, 0);\r\n}\r\n\r\n\r\n/* ------------------------------------------------\r\n  [2.3] Bottom\r\n-------------------------------------------------*/\r\n[role~=\"tooltip\"][data-microtip-position|=\"bottom\"]::before {\r\n    background: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%28180%2018%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E\") no-repeat;\r\n    height: 6px;\r\n    width: 18px;\r\n    margin-top: 5px;\r\n    margin-bottom: 0;\r\n}\r\n\r\n[role~=\"tooltip\"][data-microtip-position|=\"bottom\"]::after {\r\n    margin-top: 11px;\r\n}\r\n\r\n[role~=\"tooltip\"][data-microtip-position|=\"bottom\"]::before {\r\n    transform: translate3d(-50%, -10px, 0);\r\n    bottom: auto;\r\n    left: 50%;\r\n    top: 100%;\r\n}\r\n\r\n[role~=\"tooltip\"][data-microtip-position|=\"bottom\"]:hover::before {\r\n    transform: translate3d(-50%, 0, 0);\r\n}\r\n\r\n[role~=\"tooltip\"][data-microtip-position|=\"bottom\"]::after {\r\n    transform: translate3d(-50%, -10px, 0);\r\n    top: 100%;\r\n    left: 50%;\r\n}\r\n\r\n[role~=\"tooltip\"][data-microtip-position=\"bottom\"]:hover::after {\r\n    transform: translate3d(-50%, 0, 0);\r\n}\r\n\r\n\r\n/* ------------------------------------------------\r\n  [2.4] Bottom Left\r\n-------------------------------------------------*/\r\n[role~=\"tooltip\"][data-microtip-position=\"bottom-left\"]::after {\r\n    transform: translate3d(calc(-100% + 16px), -10px, 0);\r\n    top: 100%;\r\n}\r\n\r\n[role~=\"tooltip\"][data-microtip-position=\"bottom-left\"]:hover::after {\r\n    transform: translate3d(calc(-100% + 16px), 0, 0);\r\n}\r\n\r\n\r\n/* ------------------------------------------------\r\n  [2.5] Bottom Right\r\n-------------------------------------------------*/\r\n[role~=\"tooltip\"][data-microtip-position=\"bottom-right\"]::after {\r\n    transform: translate3d(calc(0% + -16px), -10px, 0);\r\n    top: 100%;\r\n}\r\n\r\n[role~=\"tooltip\"][data-microtip-position=\"bottom-right\"]:hover::after {\r\n    transform: translate3d(calc(0% + -16px), 0, 0);\r\n}\r\n\r\n\r\n/* ------------------------------------------------\r\n  [2.6] Left\r\n-------------------------------------------------*/\r\n[role~=\"tooltip\"][data-microtip-position=\"left\"]::before,\r\n[role~=\"tooltip\"][data-microtip-position=\"left\"]::after {\r\n    bottom: auto;\r\n    left: auto;\r\n    right: 100%;\r\n    top: 50%;\r\n    transform: translate3d(10px, -50%, 0);\r\n}\r\n\r\n[role~=\"tooltip\"][data-microtip-position=\"left\"]::before {\r\n    background: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%28-90%2018%2018%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E\") no-repeat;\r\n    height: 18px;\r\n    width: 6px;\r\n    margin-right: 5px;\r\n    margin-bottom: 0;\r\n}\r\n\r\n[role~=\"tooltip\"][data-microtip-position=\"left\"]::after {\r\n    margin-right: 11px;\r\n}\r\n\r\n[role~=\"tooltip\"][data-microtip-position=\"left\"]:hover::before,\r\n[role~=\"tooltip\"][data-microtip-position=\"left\"]:hover::after {\r\n    transform: translate3d(0, -50%, 0);\r\n}\r\n\r\n\r\n/* ------------------------------------------------\r\n  [2.7] Right\r\n-------------------------------------------------*/\r\n[role~=\"tooltip\"][data-microtip-position=\"right\"]::before,\r\n[role~=\"tooltip\"][data-microtip-position=\"right\"]::after {\r\n    bottom: auto;\r\n    left: 100%;\r\n    top: 50%;\r\n    transform: translate3d(-10px, -50%, 0);\r\n}\r\n\r\n[role~=\"tooltip\"][data-microtip-position=\"right\"]::before {\r\n    background: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%2817,%2017,%2017,%200.9%29%22%20transform%3D%22rotate%2890%206%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E\") no-repeat;\r\n    height: 18px;\r\n    width: 6px;\r\n    margin-bottom: 0;\r\n    margin-left: 5px;\r\n}\r\n\r\n[role~=\"tooltip\"][data-microtip-position=\"right\"]::after {\r\n    margin-left: 11px;\r\n}\r\n\r\n[role~=\"tooltip\"][data-microtip-position=\"right\"]:hover::before,\r\n[role~=\"tooltip\"][data-microtip-position=\"right\"]:hover::after {\r\n    transform: translate3d(0, -50%, 0);\r\n}\r\n\r\n/* ------------------------------------------------\r\n  [3] Size\r\n-------------------------------------------------*/\r\n[role~=\"tooltip\"][data-microtip-size=\"small\"]::after {\r\n    white-space: initial;\r\n    width: 80px;\r\n}\r\n\r\n[role~=\"tooltip\"][data-microtip-size=\"medium\"]::after {\r\n    white-space: initial;\r\n    width: 150px;\r\n}\r\n\r\n[role~=\"tooltip\"][data-microtip-size=\"large\"]::after {\r\n    white-space: initial;\r\n    width: 260px;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/myStyle.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/myStyle.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fullWidth{\r\n    width: 100%;\r\n}\r\n\r\n.fillerHolder{\r\n\r\n    position: relative;\r\n}\r\n\r\n.floatRight{\r\n    float: right;\r\n}\r\n.floatLeft{\r\n    float: left;\r\n}\r\n\r\n.bigIcon{\r\n    font-size: 40px !important;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n    .listGroup {\r\n\r\n        height: 40vh\r\n    }\r\n\r\n}\r\n\r\n.FormDataPage .listGroup{\r\n    height: 30vh\r\n\r\n\r\n}\r\n.listGroup{\r\n    overflow:auto;\r\n    height:80vh\r\n}\r\n.link{\r\n    color: #1c84c6 !important;\r\n}\r\n.FormRendererSingleElement{\r\n    display: flex;\r\n}\r\n.filler{\r\n    position: absolute;\r\n    left: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    top: 0px;\r\n}\r\n.filler:hover{\r\n    border:1px solid #00AEEF;\r\n    cursor: pointer;\r\n    \r\n}\r\n.toolsMenuFormCreator{\r\n    \r\n    border: 1px solid #ddd;\r\n    border-radius: 2px 2px 2px 2px;\r\n}\r\n\r\n.formElement{\r\n    \r\n    \r\n    \r\n    background-color: #6a8894;\r\n}\r\n\r\n\r\n.userTag{\r\n    position: absolute;\r\n    left: 2px;\r\n    top: 2px;\r\n}\r\n.userTag:hover{\r\n    color:#0edbf9;\r\n    cursor: pointer;\r\n}\r\n\r\n.userTagBlue{\r\n    color:#1e88e5;\r\n\r\n}\r\n.pointer:hover{\r\n    cursor: pointer;\r\n}\r\n.onMobile {\r\n    display: none;\r\n}\r\n\r\na:not([href]):not([class]):hover,a:hover{\r\n    color: #04aecd !important;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\na:not([href]):not([class]),a{\r\n    color: #09e2ca !important;\r\n}\r\n\r\n\r\n@media screen and (max-width: 1366px) {\r\n  \r\n}\r\n@media screen and (max-width: 1024px) {\r\n  \r\n}\r\n/* Use a media query to add a breakpoint at 800px: */\r\n@media screen and (max-width: 800px) {\r\n    .onMobile {\r\n        display: inherit/* The width is 100%, when the viewport is 800px or smaller */\r\n    }\r\n\r\n    .onDesktop{\r\n        display: none/* The width is 100%, when the viewport is 800px or smaller */\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n   \r\n\r\n\r\n}\r\n\r\n\r\n\r\n.onthefly{\r\n\r\n    position: fixed;\r\n    left: 20px;\r\n    border:50px solid darkblue;\r\n\r\n    top:70%;\r\n\r\n\r\n}\r\n\r\n\r\n.inOneLine{\r\ndisplay: flex;\r\n}\r\n\r\n.userCard{\r\n    margin-Top:5px\r\n}\r\n\r\n.hideWhole{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: black;\r\n    opacity: 0.3;\r\n    top: 0px;\r\n    left: 0px;\r\n    z-index: 20;\r\n}\r\n\r\n.showSingle{\r\n     \r\n     z-index: 21;\r\n }\r\n\r\n.alert{\r\n    z-index: 21;\r\n}\r\n\r\n\r\n.active {\r\n    background-color: #00ACED;\r\n    color:white;\r\n}\r\n\r\n .gapStat{\r\n     height: 10px;\r\n     width: 10px;\r\n     background-color: #29bb1c;\r\n     border-radius: 50%;\r\n     display: inline-block;\r\n     text-align: center;\r\n }\r\n.MsgCount{\r\n    height: 100%;\r\n    width: 17px;\r\n    background-color: #51a3f1;\r\n    border-radius: 50%;\r\n    display: inline-block;\r\n    text-align: center;\r\n    color: white;\r\n    float: left;\r\n}\r\n.selectedUserInList {\r\n    background-color: bisque;\r\n}\r\n\r\n.userInList:hover {\r\n    background-color: aqua;\r\n    cursor: pointer\r\n}\r\n\r\n\r\n.noMargin {\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n\r\n.chatPanel{\r\n    max-height: 500px;\r\n    overflow: auto\r\n    ;\r\n}\r\n\r\n.post{\r\n    margin-top: 20px;\r\n}\r\n\r\n\r\n.chatPanel::-webkit-scrollbar {\r\n    width: 12px;\r\n}\r\n\r\n.chatPanel::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);\r\n    border-radius: 10px;\r\n}\r\n\r\n.chatPanel::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.5);\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/whileWriting.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/whileWriting.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".lds-ellipsis {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 80px;\r\n    height: 80px;\r\n}\r\n\r\n.whileWriting{\r\n    \r\n    \r\n}\r\n.lds-ellipsis div {\r\n    position: absolute;\r\n    top: 33px;\r\n    width: 13px;\r\n    height: 13px;\r\n    border-radius: 50%;\r\n    background: #14dede;\r\n    animation-timing-function: cubic-bezier(0, 1, 1, 0);\r\n}\r\n.lds-ellipsis div:nth-child(1) {\r\n    left: 8px;\r\n    animation: lds-ellipsis1 0.6s infinite;\r\n}\r\n.lds-ellipsis div:nth-child(2) {\r\n    left: 8px;\r\n    animation: lds-ellipsis2 0.6s infinite;\r\n}\r\n.lds-ellipsis div:nth-child(3) {\r\n    left: 32px;\r\n    animation: lds-ellipsis2 0.6s infinite;\r\n}\r\n.lds-ellipsis div:nth-child(4) {\r\n    left: 56px;\r\n    animation: lds-ellipsis3 0.6s infinite;\r\n}\r\n@keyframes lds-ellipsis1 {\r\n    0% {\r\n        transform: scale(0);\r\n    }\r\n    100% {\r\n        transform: scale(1);\r\n    }\r\n}\r\n@keyframes lds-ellipsis3 {\r\n    0% {\r\n        transform: scale(1);\r\n    }\r\n    100% {\r\n        transform: scale(0);\r\n    }\r\n}\r\n@keyframes lds-ellipsis2 {\r\n    0% {\r\n        transform: translate(0, 0);\r\n    }\r\n    100% {\r\n        transform: translate(24px, 0);\r\n    }\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.svg */ "./src/logo.svg");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Header */ "./src/Components/Header.js");
/* harmony import */ var _Components_Chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Chat */ "./src/Components/Chat.js");
/* harmony import */ var _Components_Customers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/Customers */ "./src/Components/Customers.js");
/* harmony import */ var _Pages_ChatPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pages/ChatPage */ "./src/Pages/ChatPage.js");
/* harmony import */ var _Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Pages/LayoutPage */ "./src/Pages/LayoutPage.js");
/* harmony import */ var _Components_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/Menu */ "./src/Components/Menu.js");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/myStyle.css */ "./src/styles/myStyle.css");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_myStyle_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _AppGlobalStyle_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AppGlobalStyle.css */ "./src/AppGlobalStyle.css");
/* harmony import */ var _AppGlobalStyle_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_AppGlobalStyle_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fakeServer_FakeServerMonitor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fakeServer/FakeServerMonitor */ "./src/fakeServer/FakeServerMonitor.js");
/* harmony import */ var _Help_MyGlobal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Help/MyGlobal */ "./src/Help/MyGlobal.js");
/* harmony import */ var _styles_Tooltip_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles/Tooltip.css */ "./src/styles/Tooltip.css");
/* harmony import */ var _styles_Tooltip_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_Tooltip_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primereact_resources_themes_saga_blue_theme_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primereact/resources/themes/saga-blue/theme.css */ "./node_modules/primereact/resources/themes/saga-blue/theme.css");
/* harmony import */ var primereact_resources_themes_saga_blue_theme_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primereact_resources_themes_saga_blue_theme_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primereact/resources/primereact.min.css */ "./node_modules/primereact/resources/primereact.min.css");
/* harmony import */ var primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeicons/primeicons.css */ "./node_modules/primeicons/primeicons.css");
/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\App.js";



















function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), _Help_MyGlobal__WEBPACK_IMPORTED_MODULE_12__["MyGlobal"].isTestingEnvirement && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "onthefly",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 42
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fakeServer_FakeServerMonitor__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/AppGlobalStyle.css":
/*!********************************!*\
  !*** ./src/AppGlobalStyle.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./AppGlobalStyle.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/AppGlobalStyle.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/Components/AddTag.js":
/*!**********************************!*\
  !*** ./src/Components/AddTag.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/myStyle.css */ "./src/styles/myStyle.css");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_myStyle_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\AddTag.js";





function addNewTag(tagName) {
  if (!tagName) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].LayoutPage.showError('لطفا ابتدا عنوان برچسب را وارد نمایید');
    return;
  }

  _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].LayoutPage.showMsg('در حال ثبت برچسب جدید');
  _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["MyCaller"].Send("NewTagAdd", {
    tagTitle: tagName
  });
}

function AddTag() {
  _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].AddTag = this;
  const [tagName, setTagName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"].Prepend, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"].Text, {
    onClick: () => {
      addNewTag(tagName);
      setTagName('');
    },
    className: "pointer",
    id: "inputGroupPrepend",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: 'fa fa-plus',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 29
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "\u0639\u0646\u0648\u0627\u0646 \u0628\u0631\u0686\u0633\u0628 \u0631\u0627 \u0648\u0627\u0631\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F",
    "aria-describedby": "inputGroupPrepend",
    name: "\u0639\u0646\u0648\u0627\u0646 \u062A\u06AF",
    value: tagName,
    onChange: e => setTagName(e.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (AddTag);

/***/ }),

/***/ "./src/Components/Admins.js":
/*!**********************************!*\
  !*** ./src/Components/Admins.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Admins; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Customers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Customers */ "./src/Components/Customers.js");
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Help/DataHolder */ "./src/Help/DataHolder.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\Admins.js";





class Admins extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(arg) {
    super(arg);
    this.state = {};
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].AdminsPage = this;
  }

  newAccountOnlineCallback(res) {//todo:
  }

  adminOnlineAgainCallback(res) {//todo:
  }

  GetAdminsListCallback(res) {
    if (!res || !res.Content || !res.Content.EntityList || !res.Content.EntityList.length) {
      //  CurrentUserInfo.LayoutPage.showError('هیچ اطلاعاتی دریافت نشد');
      return;
    }

    let arr = res.Content.EntityList;
    this.setState({
      arr: arr
    });
  }

  componentWillMount() {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["MyCaller"].Send('GetAdminsList');
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card adminsPanel" + (_Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].LayoutPage.state.focusForSelectingAdmin ? ' showSingle ' : ''),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }
    }, "\u0627\u062F\u0645\u06CC\u0646 \u0647\u0627\u06CC \u0622\u0646\u0644\u0627\u06CC\u0646"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "list-group list-group-flush",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }, this.state.arr && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Customers__WEBPACK_IMPORTED_MODULE_1__["ShowOnlineUsers"], {
      isAdmins: true,
      onClick: el => {
        _Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].selectedAdmin = el;
        this.setState({
          temp: Math.random(),
          focusForSelectingAdmin: false
        });

        if (_Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].ForwardChat && _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].ForwardChat.state.waitingForSelectAdmin) {
          _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].ForwardChat.setWaitingForSelectAdmin();
        } else {
          _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].currentUsersIsAdmins = true;
          _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].LayoutPage.showMsg('در حال خواندن اطلاعات چت');
          this.readChat();
        }

        _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].LayoutPage.setState({
          temp: Math.random(),
          focusForSelectingAdmin: false
        });
      },
      arr: this.state.arr,
      parent: this,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 44
      }
    }))));
  } ///CALLED BY ADMINS


  readChat() {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["MyCaller"].Send("ReadChat", {
      targetId: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].selectedAdmin.Id,
      pageNumber: 1
    });
  }

}

/***/ }),

/***/ "./src/Components/Chat.js":
/*!********************************!*\
  !*** ./src/Components/Chat.js ***!
  \********************************/
/*! exports provided: default, ChatPannel, gotoBottom, showMultimedia, AutomaticSendPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPannel", function() { return ChatPannel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gotoBottom", function() { return gotoBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMultimedia", function() { return showMultimedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomaticSendPage", function() { return AutomaticSendPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Help/DataHolder */ "./src/Help/DataHolder.js");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/myStyle.css */ "./src/styles/myStyle.css");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_myStyle_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Help_CookieManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../Help/CookieManager */ "./src/Help/CookieManager.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header */ "./src/Components/Header.js");
/* harmony import */ var _ChatForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChatForm */ "./src/Components/ChatForm.js");
/* harmony import */ var _TagList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TagList */ "./src/Components/TagList.js");
/* harmony import */ var _CustomerTags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CustomerTags */ "./src/Components/CustomerTags.js");
/* harmony import */ var _FormShowerInChat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormShowerInChat */ "./src/Components/FormShowerInChat.js");
/* harmony import */ var _Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Pages/LayoutPage */ "./src/Pages/LayoutPage.js");
/* harmony import */ var _MarkAsResovled__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MarkAsResovled */ "./src/Components/MarkAsResovled.js");
/* harmony import */ var _ScreenRecordShower__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ScreenRecordShower */ "./src/Components/ScreenRecordShower.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! dompurify */ "./node_modules/dompurify/dist/purify.js");
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\Chat.js";















class Chat extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(arg) {
    super(arg);
    this.state = {};
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatPage = this;
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {}

  newSendPMByMeInAnotherPlaceCallback(res) {
    if (res.Content.MultimediaContent) {
      // اضافه می کند ، جایی دیگر خود ادمین ارسال کرده
      var chat = res.Content;

      if (this.state.chats) {
        var isFind = this.state.chats.find(c => c.UniqId == chat.UniqId);

        if (isFind) {} else {
          this.addChat(chat, true);
        }
      }
    } else {
      this.adminSendToCustomerCallback(res, true); // this.customerSendToAdminCallback(res,true);
    }
  }

  clearSearch() {
    this.setState({
      chats: this.prevChatsList
    });
  }

  searchHandlerCallback(searchChatsList) {
    this.prevChatsList = this.state.chats;
    this.setState({
      chats: searchChatsList
    });
  }

  multimediaPmSendCallback(res) {
    var chat = res.Content;
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatPage.setState({
      scroll: false
    });

    if (this.state.chats) {
      var isFind = this.state.chats.find(c => c.UniqId == chat.UniqId);

      if (isFind) {} else {
        chat.IsReceive = true;
        this.addChat(chat, true);
      }
    }

    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send("MultimediaDeliverd", {
      chatId: res.Content.Id
    });
  }

  multimediaDeliveredCallback(res) {
    this.msgDeliveredCallback(res);
  }

  readChatCallback(res) {
    var arr = [];
    arr = res.Content.EntityList;
    let chats = this.state.chats;

    if (!chats) {
      chats = [];
    }

    if (!arr || !arr.length) {
      this.setState({
        chats: []
      });
    }
    /*   CustomerToAccount=1,
            AccountToCustomer=2,
            AccountToAccount=3,
            SaveAsFastAnswering=4, */


    for (let i = 0; i < arr.length; i++) {
      let isFind = chats.find(a => a.Id == arr[i].Id);

      if (isFind) {
        continue;
      }

      const element = arr[i];

      if (element.SenderType == 1 || element.SenderType == 3) {
        element.IsReceive = true;
      }

      this.addChat(element, true);
    }
    /*if (arr && arr.length == 0) {
            this.setState({ chats: arr})
        }*/

  }

  LoadForms() {
    //debugger;
    if (!this.state.chats || this.state.chats.length == 0) return;

    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer) {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_10__["_showError"])('کاربر را مجددا انتخاب کنید');

      return;
    }

    let forms = this.state.chats.filter(c => c.formId);

    for (let i = 0; i < forms.length; i++) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send('CustomerGetFormSingle', {
        formId: forms[i].formId,
        chatId: forms[i].Id,
        customerId: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer.Id
      });
    }
  }

  customerGetFormSingleCallback(res) {}

  adminSendToCustomerCallback(res) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatPage.setState({
      scroll: false
    });
    let AccountId = res.Content.AccountId;
    let Message = res.Content.Message;
    let TotalReceivedMesssages = res.Content.TotalReceivedMesssages;
    let chat = res.Content;
    let chats = this.state.chats;

    if (!chats) {
      chats = [];
    }

    var isFind = chats.find(c => c.UniqId == chat.UniqId);

    if (isFind) {} else {
      this.addChat(chat, true);
    }
  }

  customerSendToAdminCallback(res) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatPage.setState({
      scroll: false
    });
    let CustomerId = res.Content.CustomerId;
    let Message = res.Content.Message;
    let TotalReceivedMesssages = res.Content.TotalReceivedMesssages;
    let chat = res.Content.Chat;
    /*    if(Push){
            Push.create("پیغام جدید", {
                body: Message,
                icon: '/icon.png',
                timeout: 4000,
                onClick: function () {
                    window.focus();
                    this.close();
                }
            });
        }*/

    chat.IsReceive = true;
    this.addChat(chat, true);
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send("AdminReceivedMsg", {
      chatId: res.Content.ChatId,
      target: res.Content.CustomerId
    });
  }

  msgDeliveredCallback(res) {
    var msgUniqId = res.Content.UniqId;
    if (!this.state.chats) return;
    var i = this.state.chats.findIndex(c => c.UniqId === msgUniqId);

    if (i != -1) {
      let chats = this.state.chats;
      chats[i].DeliverDateTime = new Date();
      this.setState({
        chats: this.state.chats,
        temp: Math.random()
      });
    } else {
      console.error("i is not found");
    }
  }

  userAddedToTagsCallback(res) {
    //debugger
    if (!res || !res.Content || !res.Content.EntityList) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError('دیتای خوانده شده برای برچسب های کاربر نال است');
      return;
    }

    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer) {
      return;
    }

    _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer.Tags = res.Content.EntityList;
    _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer.CustomerTags = res.Content.EntityList;
    this.setState({
      tmp: Math.random()
    });

    if (_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].CustomerTags) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].CustomerTags.setState({
        tmp: Math.random()
      });
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MarkAsResovled__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-header ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 21
      }
    }, _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].SelectedUserName, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 25
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-body ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: "card-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 25
      }
    }), this.state.err && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "alert alert-danger",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 29
      }
    }, this.state.err), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chatPanel",
      id: "chatPanel",
      onScroll: e => {
        this.onScroll(e);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 25
      }
    }, this.state.chats && this.state.chats.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 33
      }
    }, "\u0647\u06CC\u0686 \u0686\u062A\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChatPannel, {
      chats: this.state.chats,
      parent: this,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 29
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChatForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onPaste: e => {
        this.onPaste(e);
      },
      upload: e => {
        this.uploadFile(e);
      },
      onSubmit: e => {
        this.submit(e);
      },
      onChange: e => {
        this.chatFormOnChange(e);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 25
      }
    }))));
  }

  chatFormOnChange(e) {
    let multiMedia = showMultimedia(e.target.value);

    if (!multiMedia) {
      this.setState({
        text: e.target.value
      });
    } else {
      this.setState({
        text: ""
      });
    }
  }

  onScroll(e) {
    //todo:
    if (e.target.scrollTop === 0) {
      // element is at the end of its scroll, load more content
      if (!_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].pageNumber) {
        _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].pageNumber = 1;
      }

      this.setState({
        scroll: true
      });
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].pageNumber++;
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send("ReadChat", {
        targetId: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer.Id,
        pageNumber: _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].pageNumber
      });
    }
  }

  uploadFile(e) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatPage.setState({
      scroll: false
    });

    for (let i = 0; i < e.target.files.length; i++) {
      let file = e.target.files[i];
      var fileReader = new FileReader();

      fileReader.onload = e => {
        let multiMedia = showMultimedia(e.target.result);

        if (multiMedia) {
          this.addChat({
            MultimediaContent: e.target.result
          });
        } else {
          this.setState({
            err: "نوع فایل قابل ارسال نیست"
          });
        }
      };

      fileReader.readAsDataURL(file);
    }
  }

  onPaste(event) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatPage.setState({
      scroll: false
    });
    var paste = event.clipboardData.getData("text/plain");
    let multiMedia = showMultimedia(paste);

    if (multiMedia) {
      this.addChat({
        MultimediaContent: paste
      });
    } else {
      this.setState({
        text: paste
      }); //            this.addChat({Message: paste});
    }
  }

  getChats() {
    let chats = this.state.chats;

    if (!chats || !chats.length) {
      chats = [];
    }

    return chats;
  }

  addChat(chat, dontSend) {
    if (!dontSend) {
      if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer) {
        _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError("هیچ کاربری برای ارسال پیام انتخاب نشده است");
        return;
      }
    }

    let chats = this.getChats();
    chats.sort((a, b) => {
      if (a.Id < b.Id) {
        return -1;
      }

      if (a.Id > b.Id) {
        return 1;
      } // a must be equal to b


      return 0;
    });

    if (!dontSend) {
      let id = chats.length == 0 ? 0 : chats[chats.length - 1].UniqId;

      if (!id) {
        id = 1;
      }

      chat.UniqId = id + 1;
      this.sendChat(chat);
    }

    chats.push(chat);
    this.setState({
      chats: chats
    });

    if (!this.state.scroll) {
      setTimeout(() => {
        gotoBottom("chatPanel");
      }, 500);
    }
  }

  DeleteMessageCallback(res) {
    console.log("رسپانس حذف پیام");

    if (!res || !res.Content || !res.Content.uniqId || !res.Content.targetId) {
      console.error(" مقدار بازگشتی از سرور نال است ");
      return;
    }

    let uniqId = res.Content.uniqId;
    let targetId = res.Content.targetId;
    let message = _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatPage.state.chats.find(f => f.UniqId === uniqId);

    if (!message) {
      console.error(uniqId + " یافت نشد ");
      return;
    }

    console.log("در حال حذف پیام");
    let inner = message;

    if (inner) {
      inner.Message = "حذف شد";
      console.log("پیام حذف شد در رسپانس");
    }

    message.IsDisabled = false;
    this.setState({
      tmp: Math.random()
    });
  }

  EditMessageCallback(res) {
    console.log("رسپانس درخواست ویرایش");

    if (!res || !res.Content || !res.Content.uniqId || !res.Content.targetId) {
      console.error(" مقدار بازگشتی از سرور نال است ");
      return;
    }

    let uniqId = res.Content.uniqId;
    let targetId = res.Content.targetId;
    let message = _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatPage.state.chats.find(f => f.UniqId === uniqId);

    if (!message) {
      console.error(uniqId + " یافت نشد ");
      return;
    }

    console.log("انجام ویرایش در رسپاسن");
    let inner = message;

    if (inner) {
      inner.Message = res.Content.Message;
    }

    this.setState({
      tmp: Math.random()
    });
  }

  sendChat(chat) {
    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError("هیچ کاربری برای ارسال پیام انتخاب نشده است");
      return;
    }

    if (chat.MultimediaContent) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send("MultimediaPmSend", {
        targetId: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer.Id,
        gapFileUniqId: chat.UniqId,
        MultimediaContent: chat.MultimediaContent,
        uniqId: chat.UniqId
      });
    } else {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send("AdminSendToCustomer", {
        adminToken: _Help_CookieManager__WEBPACK_IMPORTED_MODULE_4__["cookieManager"].getItem("adminToken"),
        targetUserId: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer.Id,
        typedMessage: chat.Message,
        gapFileUniqId: chat.UniqId,
        uniqId: chat.UniqId
      });
    }
  }

  submit(e) {
    e.preventDefault();
    if (!this.state.text) return false;
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatPage.setState({
      scroll: false
    });
    this.addChat({
      Message: this.state.text
    });
    this.setState({
      text: ""
    });
    return false;
  }

  DeleteMsgOnClick(uniqId, gapFileUniqId, THIS) {
    console.log("جذف پیغام");
    let message = _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatPage.state.chats.find(f => f.UniqId === uniqId);

    if (!message) {
      console.error(uniqId + " یافت نشد ");
      return;
    }

    console.log("ارسال درخواست حذف پیغام ");
    message.IsDisabled = true;
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatPage.setState({
      tmp: Math.random()
    });
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send("DeleteMessage", {
      uniqId,
      targetId: _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].targetId
    });
    console.log(" درخواست حذف پیغام ارسال شد ");
  }

  EditMsgOnClick(uniqId, gapFileUniqId, THIS) {
    console.log("ویرایش فراخوانی شد");
    let message = _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatPage.state.chats.find(f => f.UniqId === uniqId);

    if (!message) {
      console.error(uniqId + " یافت نشد ");
      return;
    }

    if (!_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatForm) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError("CurrentUserInfo.ChatForm is null");
    }

    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatForm.setState({
      text: message.Message
    });

    if (!window["submitBackup"]) {
      window["submitBackup"] = Object.assign({}, this.submit);
      window["uploadFileBackup"] = Object.assign({}, this.uploadFile);
      window["onPasteBackup"] = Object.assign({}, this.onPaste);
      window["chatFormOnChangeBackup"] = Object.assign({}, this.chatFormOnChange);
    }

    this.uploadFile = e => _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError("در ویرایش فایل مجاز نمی باشد");

    this.onPaste = e => {
      var paste = e.clipboardData.getData("text/plain");
      this.setState({
        text: paste
      });
    };

    this.uploadFile = e => _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError("در ویرایش فایل مجاز نمی باشد");

    this.chatFormOnChange = e => {};

    this.submit = e => {
      e.preventDefault();
      console.log("انجام ویرایش توسط کاربر");
      console.log("ارسال درخواست ویرایش");
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send("EditMessage", {
        uniqId,
        targetId: _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].targetId,
        message: e.target.value
      });
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatForm.setState({
        text: ""
      });
      this.submit = window["submitBackup"];
      this.uploadFile = window["uploadFileBackup"];
      this.onPaste = window["onPasteBackup"];
      this.chatFormOnChange = window["chatFormOnChangeBackup"];
    };
  }

}
function ChatPannel(props) {
  if (!props.chats || !props.chats.length) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  }

  return props.chats.map((el, i, arr) => {
    if (!el.IsReceive) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card post  offset-md-4 ",
        key: el.UniqId,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 607,
          columnNumber: 17
        }
      }, props.onDelete && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header card-header-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 609,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: e => {
          props.onDelete(el);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 610,
          columnNumber: 29
        }
      }, "x"), el.Delay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        dir: "rtl",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 617,
          columnNumber: 42
        }
      }, " \u0628\u0639\u062F \u0627\u0632 ", el.Delay, " \u062F\u0642\u06CC\u0642\u0647 "), el.Time && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          fontSize: '10px'
        },
        dir: "rtl",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 618,
          columnNumber: 41
        }
      }, " ", el.Time, " "), props.parent && props.parent.DeleteMsgOnClick && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: 'inline-flex'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 620,
          columnNumber: 79
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: () => {
          props.parent.DeleteMsgOnClick(el.UniqId, el);
        },
        className: "gapB gapRemB",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 621,
          columnNumber: 33
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-trash-o",
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 627,
          columnNumber: 37
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: () => {
          props.parent.EditMsgOnClick(el.UniqId, el);
        },
        className: "gapB gapEdB",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 629,
          columnNumber: 33
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-pencil",
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 635,
          columnNumber: 37
        }
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body",
        style: {
          wordBreak: 'break-all',
          display: 'flex',
          direction: 'rtl'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 642,
          columnNumber: 21
        }
      }, el.formId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormShowerInChat__WEBPACK_IMPORTED_MODULE_9__["default"], {
        chatId: el.Id,
        chatUniqId: el.UniqId,
        formId: el.formId,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 645,
          columnNumber: 40
        }
      }), el.MultimediaContent && showMultimedia(el.MultimediaContent), !el.MultimediaContent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        key: el.Message,
        dangerouslySetInnerHTML: {
          __html: el.Message
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 648,
          columnNumber: 51
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IsDelivered, {
        DeliverDateTime: el.DeliverDateTime,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 656,
          columnNumber: 25
        }
      })));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card post card post col-6",
        key: el.UniqId,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 664,
          columnNumber: 17
        }
      }, props.onDelete && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-header card-header-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 666,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: e => {
          props.onDelete(el);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 667,
          columnNumber: 29
        }
      }, "x"), el.Delay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        dir: "rtl",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 675,
          columnNumber: 42
        }
      }, " \u0628\u0639\u062F \u0627\u0632 ", el.Delay, "\u062F\u0642\u06CC\u0642\u0647 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body",
        style: {
          wordBreak: 'break-all',
          display: 'flex',
          direction: 'ltr'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 678,
          columnNumber: 21
        }
      }, el.formId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormShowerInChat__WEBPACK_IMPORTED_MODULE_9__["default"], {
        chatId: el.Id,
        formName: el.formName,
        chatUniqId: el.UniqId,
        formId: el.formId,
        elements: el.elements,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 679,
          columnNumber: 40
        }
      }), el.MultimediaContent && showMultimedia(el.MultimediaContent), !el.MultimediaContent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        key: el.Message,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 682,
          columnNumber: 51
        }
      }, " ", el.Message, " ")));
    }
  });
}

function IsDelivered(props) {
  if (props.DeliverDateTime) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 694,
        columnNumber: 16
      }
    }, "\u221A");
  }

  if (props.IsDelivered === false) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 697,
        columnNumber: 16
      }
    }, "\u06A9\u0627\u0631\u0628\u0631 \u0622\u0641\u0644\u0627\u06CC\u0646 \u0627\u0633\u062A");
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 700,
      columnNumber: 12
    }
  });
}

function gotoBottom(id) {
  var element = document.getElementById(id);

  if (element) {
    element.scrollTop = element.scrollHeight - element.clientHeight;
  }
}

function validURL(str) {
  var pattern = new RegExp("^(https?:\\/\\/)?" + // protocol
  "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
  "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
  "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
  "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
  "(\\#[-a-z\\d_]*)?$", "i"); // fragment locator

  return !!pattern.test(str);
}

function showMultimedia(pastedData) {
  if (pastedData.indexOf("video") >= 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
      height: "50",
      width: "200",
      controls: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 727,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
      src: pastedData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 728,
        columnNumber: 17
      }
    }));
  }

  if (pastedData.indexOf("audio") >= 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio", {
      controls: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 735,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
      src: pastedData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 736,
        columnNumber: 17
      }
    }));
  }

  if (pastedData.indexOf("image") >= 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      onClick: () => {
        showImageMaximized(pastedData);
      },
      alt: "\u0639\u06A9\u0633",
      src: pastedData,
      height: "100",
      controls: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 743,
        columnNumber: 13
      }
    });
  }

  if (validURL(pastedData)) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      target: "_blank",
      href: pastedData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 757,
        columnNumber: 13
      }
    }, pastedData);
  }

  return null;
}

function closeImgPreview(el) {
  let maxImgPrev = document.getElementById("maxImgPrev");

  if (maxImgPrev) {
    maxImgPrev.remove();
  }
}

function showImageMaximized(src) {
  closeImgPreview();
  let img = createElementFromHTML(`<div  id="maxImgPrev"><div style="    z-index: 999999;background-color:black;opacity:0.5; position:absolute;top:0px;left:0px;right:0px;bottom:0px;
width:1000%;height:1000%;"></div><div style="z-index:999999999;margin:10%;  position:absolute;top:0px;left:0px;right:0px;bottom:0px;
width:100%;height:100%;"><img src="${src}" style="width:80%;height:80%"/>
<button type="button" onclick='let maxImgPrev = document.getElementById("maxImgPrev");
if (maxImgPrev) {
  maxImgPrev.remove();
}'>x</button>
</div></div>`);
  document.querySelector("body").append(img);
}

function createElementFromHTML(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString.trim(); // Change this to div.childNodes to support multiple top-level nodes

  return div.firstChild;
}

class AutomaticSendPage extends Chat {
  constructor(arg) {
    super(arg);
    this.state = {};
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].AutomaticSendPage = this;
  }

  successCallback(res) {
    this.setState({
      sending: false
    });
  }

  getAutomaticSendChatsSocketHandlerCallback(res) {
    this.setState({
      sending: false
    });

    if (!res || !res.Content) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError('پیام های اتوماتیک خوانده شده صحیح نیست');
      return;
    }

    let arr = res.Content;

    if (arr && arr.length > 0) {
      this.setState({
        chats: arr
      });
    } else {}
  }

  componentDidMount() {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send("GetAutomaticSendChatsSocketHandler");
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 853,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 855,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-6 ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 858,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-12 ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 859,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      dir: 'rtl',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 861,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 862,
        columnNumber: 33
      }
    }, "\u0627\u062A\u0648\u0645\u0627\u062A\u06CC\u06A9 \u0627\u0632 \u0637\u0631\u0641 \u0627\u062F\u0645\u06CC\u0646 \u06A9\u0645 \u0645\u0631\u0627\u062C\u0639\u0647 \u0627\u0631\u0633\u0627\u0644 \u0645\u06CC \u0634\u0648\u062F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 863,
        columnNumber: 33
      }
    }, "\u0627\u0632 \u0637\u0631\u0641 \u0627\u062F\u0645\u06CC\u0646 \u0647\u0627\u06CC \u0645\u062E\u0635\u0648\u0635 \u0647\u0631 \u0628\u062E\u0634 \u0633\u0627\u06CC\u062A \u067E\u06CC\u063A\u0627\u0645 \u0627\u0631\u0633\u0627\u0644 \u0645\u06CC \u0634\u0648\u062F"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChatPannel, {
      chats: this.state.chats,
      onDelete: chat => {
        this.state.chats.splice(this.state.chats.indexOf(chat), 1);
        this.setState({
          temp: Math.random(),
          chats: this.state.chats
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 866,
        columnNumber: 25
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-6  ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 874,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 877,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "exampleInputEmail1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 878,
        columnNumber: 29
      }
    }, " \u0632\u0645\u0627\u0646 \u062A\u0627\u062E\u06CC\u0631 \u0628\u0647 \u062F\u0642\u06CC\u0642\u0647 "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      min: 0,
      max: 60,
      type: "number",
      className: "form-control",
      id: "exampleInputEmail1",
      "aria-describedby": "emailHelp",
      placeholder: "\u0632\u0645\u0627\u0646 \u0628\u0647 \u062F\u0642\u06CC\u0642\u0647  ",
      value: this.state.delay,
      onChange: e => {
        if (e.target.value > 60 || e.target.value <= 0) {
          _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError('زمان تاخیر فقط مابین 1 الی 60 مورد قبول است');

          if (e.target.value > 60) {
            this.setState({
              delay: 60
            });
          } else {
            this.setState({
              delay: 1
            });
          }
        } else {
          this.setState({
            delay: e.target.value
          });
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 879,
        columnNumber: 29
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      id: "emailHelp",
      className: "form-text text-muted",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 900,
        columnNumber: 29
      }
    }, "\u0645\u062F\u062A \u0632\u0645\u0627\u0646\u06CC \u06A9\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0648\u0627\u0631\u062F \u0633\u0627\u06CC\u062A \u0634\u062F\u0647 \u0627\u0633\u062A \u0627\u0645\u0627 \u0647\u06CC\u0686 \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u062F\u0631\u06CC\u0627\u0641\u062A \u0646\u06A9\u0631\u062F\u0647 \u0627\u0633\u062A ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 903,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChatForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onPaste: e => {
        this.onPaste(e);
      },
      upload: e => {
        this.uploadFile(e);
      },
      onSubmit: e => {
        return this.submit(e);
      },
      onChange: e => {
        let multiMedia = showMultimedia(e.target.value);

        if (!multiMedia) {
          this.setState({
            text: e.target.value
          });
        } else {
          this.setState({
            text: ""
          });
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 905,
        columnNumber: 29
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: () => {
        this.saveAutomaticSendChats();
      },
      type: "submit",
      disabled: this.state.sending,
      className: "btn btn-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 955,
        columnNumber: 25
      }
    }, "\u062B\u0628\u062A "))));
  }

  saveAutomaticSendChats() {
    if (!this.state.chats || !this.state.chats.length) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError('هیچ پیغامی ثبت نشده است ');
      return;
    }

    this.setState({
      sending: true
    });
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send("SaveAutomaticSendChatsSocketHandler", {
      chats: this.state.chats
    });
  }

  showAdmins() {
    if (!this.state.admins) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 990,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 992,
        columnNumber: 17
      }
    }, this.state.admins.map((el, i, arr) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        key: el.Id,
        className: "arow",
        onClick: () => {
          this.setState({
            selectedAdmin: el
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 996,
          columnNumber: 32
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 999,
          columnNumber: 29
        }
      }, el.Name));
    })));
  }

  addChat(chat, dontSend) {
    let chats = this.getChats();
    chat.Delay = this.state.delay ? this.state.delay : 1;
    chat.DeliverDateTime = new Date();
    chats.push(chat);
    chats.sort((a, b) => {
      if (a.Id < b.Id) {
        return -1;
      }

      if (a.Id > b.Id) {
        return 1;
      } // a must be equal to b


      return 0;
    });
    chat.UniqId = chats.length + 1;
    this.setState({
      chats: chats
    });

    if (!this.state.scroll) {
      /*setTimeout(() => {
          gotoBottom("chatPanel");
      }, 500);*/
    }
  }

  submit(e) {
    e.preventDefault();
    if (!this.state.text) return false;
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatPage.setState({
      scroll: false
    });
    this.addChat({
      Message: this.state.text
    }, true);
    this.setState({
      text: ""
    });
    return false;
  }

}

/***/ }),

/***/ "./src/Components/ChatForm.js":
/*!************************************!*\
  !*** ./src/Components/ChatForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Help/DataHolder */ "./src/Help/DataHolder.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\ChatForm.js";



class ChatForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(arg) {
    super(arg);
    this.submit = this.submit.bind(this);
    this.state = {};
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatForm = this;
  }

  submit(e) {
    e.preventDefault();
    this.props.onSubmit(e);
    this.setState({
      text: ''
    });
    return false;
  }

  addText(text) {
    let prev = this.state.text ? this.state.text : '';
    this.setState({
      text: prev + " " + text
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.submit,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      style: {
        direction: 'rtl'
      },
      onKeyPress: () => {
        bindIsTyping();
      },
      value: this.state.text,
      placeholder: "\u062C\u0647\u062A \u0627\u0631\u0633\u0627\u0644 \u0641\u0627\u06CC\u0644 \u06CC\u0627 \u067E\u06CC\u063A\u0627\u0645 \u0645\u062A\u0646\u06CC \u0627\u06CC\u0646\u062C\u0627 \u062A\u0627\u06CC\u067E \u0646\u0645\u0627\u06CC\u06CC\u062F",
      className: "form-control",
      onChange: e => {
        this.setState({
          text: e.target.value
        });
        this.props.onChange(e);
      },
      onPaste: e => {
        this.props.onPaste(e);
      },
      type: 'textarea',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      style: {
        display: 'block'
      },
      className: "btn btn-default",
      onClick: () => {
        document.getElementById('fileUpload').click();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    }, "\u0627\u0631\u0633\u0627\u0644 \u0641\u0627\u06CC\u0644"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onChange: e => {
        this.props.upload(e);
      },
      id: "fileUpload",
      type: "file",
      hidden: "hidden",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }));
  }

}
/*TYPING*/

var searchTimeout;
let searchTimeoutSelectedCustomerId;

function bindIsTyping() {
  if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer || !_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer.Id) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError('کاربری انتخاب نشده است');
    return;
  }

  if (searchTimeout != undefined) clearTimeout(searchTimeout);
  searchTimeoutSelectedCustomerId = _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer.Id;
  searchTimeout = setTimeout(callServerScript, 1000);
  _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send('AdminStartTyping', {
    customerId: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer.Id
  });
}

function callServerScript() {
  if (!searchTimeoutSelectedCustomerId) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError('کاربری انتخاب نشده است.');
    return;
  }

  _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send('AdminStopTyping', {
    customerId: searchTimeoutSelectedCustomerId
  });
}
/*TYPING END*/

/***/ }),

/***/ "./src/Components/CustomerData.js":
/*!****************************************!*\
  !*** ./src/Components/CustomerData.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Help/DataHolder */ "./src/Help/DataHolder.js");
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Table */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Pages/LayoutPage */ "./src/Pages/LayoutPage.js");
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../Help/Socket */ "./src/Help/Socket.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\CustomerData.js";







class CustomerData extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  getCustomerDataList(res) {
    if (!res || !res.Content) {
      return;
    }

    this.setState({
      customerDataList: res.Content
    });
  }

  componentDidMount() {
    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomer) {
      return;
    }

    _Help_Socket__WEBPACK_IMPORTED_MODULE_5__["MyCaller"].Send('GetCustomerDataList', {
      customerId: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomer.Id
    });
  }

  render() {
    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomer) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }
    }, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u06A9\u0627\u0631\u0628\u0631"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-body",
      style: {
        display: 'flex',
        textAlign: 'center'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
      striped: true,
      bordered: true,
      hover: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 29
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      colSpan: '2',
      style: {
        padding: '0px',
        margin: '0px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      autocomplete: "on",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      style: {
        display: 'flex'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 41
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 45
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Prepend, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 49
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"].Text, {
      id: "basic-addon1",
      onClick: () => {
        if (this.state.sending) {
          Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_4__["_showMsg"])('لطفا تا ذخیره کلید قبلی صبر کنید');
        } else {
          this.AddCustomerData();
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 53
      }
    }, !this.state.sending && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: 'fa fa-plus',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 57
      }
    }), this.state.sending && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: 'fa fa-circle-o-notch',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 57
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
      autocomplete: "on",
      placeholder: "\u0645\u0642\u062F\u0627\u0631",
      "aria-label": "Username",
      "aria-describedby": "basic-addon1",
      value: this.state.value,
      onChange: e => {
        this.setState({
          value: e.target.value
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 49
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["FormControl"], {
      autocomplete: "on",
      placeholder: "\u06A9\u0644\u06CC\u062F",
      "aria-label": "Username",
      value: this.state.key,
      "aria-describedby": "basic-addon1",
      onChange: e => {
        this.setState({
          key: e.target.value
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 49
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 41
      }
    }))), this.state.customerDataList && this.state.customerDataList.map((data, i, arr) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 44
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 41
        }
      }, data.Key), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 41
        }
      }, data.Value));
    })))))));
  }

  addCustomerDataCallback(res) {
    this.setState({
      sending: false
    });
    this.componentDidMount();
  }

  AddCustomerData() {
    if (!this.state.key) {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_4__["_showError"])('کلید خالی است لطفا عنوان کلید را وارد کنید');

      return;
    }

    if (!this.state.value) {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_4__["_showError"])('مقدار کلید خالی است لطفا مقدار کلید را وارد کنید');

      return;
    }

    Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_4__["_showMsg"])('در حال ذخیره کلید جدید');

    this.setState({
      sending: true
    });
    _Help_Socket__WEBPACK_IMPORTED_MODULE_5__["MyCaller"].Send('SaveKey', {
      Key: this.state.key,
      Value: this.state.Value
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CustomerData);

/***/ }),

/***/ "./src/Components/CustomerInfo.js":
/*!****************************************!*\
  !*** ./src/Components/CustomerInfo.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Badge */ "./node_modules/react-bootstrap/esm/Badge.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Help/DataHolder */ "./src/Help/DataHolder.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _Satistification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Satistification */ "./src/Components/Satistification.js");
/* harmony import */ var _MarkAsResovled__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MarkAsResovled */ "./src/Components/MarkAsResovled.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\CustomerInfo.js";











class CustomerInfo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(arg) {
    super(arg);
    this.state = {};
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].CustomerInfo = this;
  }

  render() {
    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    console.log('CustomerInfo===>DataHolder.selectedCustomer====>');
    console.log(_Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card  ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-header ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }
    }, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u06A9\u0627\u0631\u0628\u0631", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "p-toast-message-icon pi pi-check",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 25
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_2__["default"], {
      pill: true,
      variant: "light",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      width: 100,
      height: 100,
      src: `${""}/Content/HelpImages/user-icon.png`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 29
      }
    }), _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.LastTrackInfo && _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.LastTrackInfo.country_code && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_2__["default"], {
      pill: true,
      variant: "light",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: `https://www.countryflags.io/${_Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.LastTrackInfo.country_code}/flat/64.png`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 33
      }
    })), (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.LastTrackInfo || !_Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.LastTrackInfo.country_code) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_2__["default"], {
      pill: true,
      variant: "light",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: `https://www.countryflags.io/ir/flat/64.png`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 33
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Group, {
      controlId: "formBasicEmail",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 25
      }
    }, !this.state.editingName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, {
      onClick: () => {
        this.setState({
          editingName: true
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: 'fa fa-pencil',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 33
      }
    }), _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.Name), this.state.editingName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
      type: "text",
      placeholder: "\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631",
      value: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.Name,
      onChange: e => {
        _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.Name = e.target.value;
        this.setState({
          tmp: Math.random()
        });

        if (_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].CustomersPage) {
          _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].CustomersPage.setState({
            tmp: Math.random()
          });
        }
      },
      onKeyDown: e => {
        if (e.key === 'Enter') {
          this.setState({
            editingName: false
          });
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 29
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 29
      }
    }), !this.state.editingEmail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, {
      onClick: () => {
        this.setState({
          editingEmail: true
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: 'fa fa-pencil',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 33
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 33
      }
    }, _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.Email ? _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.Email : 'ایمیل')), this.state.editingEmail && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
      type: "email",
      placeholder: "\u0645\u062D\u0644 \u0642\u0631\u0627\u0631 \u06AF\u0631\u0641\u062A\u0646 \u0627\u06CC\u0645\u06CC\u0644 \u06A9\u0627\u0631\u0628\u0631",
      value: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.Email,
      onChange: e => {
        _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.Email = e.target.value;
        this.setState({
          tmp: Math.random()
        });
      },
      onKeyDown: e => {
        if (e.key === 'Enter') {
          this.setState({
            editingEmail: false
          });
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 29
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 29
      }
    }), !this.state.editingPhone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Label, {
      onClick: () => {
        this.setState({
          editingPhone: true
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: 'fa fa-phone',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 33
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 33
      }
    }, _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.Phone ? _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.Phone : 'شماره تلفن')), this.state.editingPhone && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control, {
      type: "text",
      placeholder: "\u0634\u0645\u0627\u0631\u0647 \u062A\u0644\u0641\u0646",
      value: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.Phone,
      onChange: e => {
        _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.Phone = e.target.value;
        this.setState({
          tmp: Math.random()
        });
      },
      onKeyDown: e => {
        if (e.key === 'Enter') {
          this.setState({
            editingPhone: false
          });
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 29
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Text, {
      className: "text-muted",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 29
      }
    }, _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.Address, !_Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.Address && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 74
      }
    }, "\u0622\u062F\u0631\u0633 \u06A9\u0627\u0631\u0628\u0631 \u0645\u0634\u062E\u0635 \u0646\u06CC\u0633\u062A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: 'primary',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: 'primary',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: 'fa fa-user',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 37
      }
    })), "\u0646\u0645\u0627\u06CC\u0634 \u06A9\u0627\u0645\u0644 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644 \u06A9\u0627\u0631\u0628\u0631")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Satistification__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 25
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CustomerInfo);

/***/ }),

/***/ "./src/Components/CustomerTags.js":
/*!****************************************!*\
  !*** ./src/Components/CustomerTags.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomerTags; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Help/DataHolder */ "./src/Help/DataHolder.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\CustomerTags.js";




class CustomerTags extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].CustomerTags = this;
  }

  deleteTagFormUserTagsById(tagId) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send("DeleteTagFormUserTagsById", {
      tagId: tagId,
      customerId: this.props.customer.Id,
      target: this.props.customer.Id
    });
  }

  deleteTagFormUserTagsByIdCallback(res) {
    if (!res.Content.TargetCustomerId) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError('TargetCustomerId is null');
      return;
    }

    if (!res.Content.TargetTagId) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError('TargetTagId is null');
      return;
    }

    let TargetCustomerId = res.Content.TargetCustomerId;
    let TargetTagId = res.Content.TargetTagId;

    if (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].selectedCustomer && _Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].selectedCustomer.Tags) {
      if (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].selectedCustomer.Id === TargetCustomerId) {
        _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].CustomersPage.GetUserAddedToTags(_Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].selectedCustomer.Id);
        /* if (!DataHolder.selectedCustomer.Tags.find(t => t.Id === TargetTagId)) {
             CurrentUserInfo.LayoutPage.showError('TargetTagId is null');
             return;
         }
         
         // آپدیت تگ های کاربر انتخاب شده اگر تگ ها از بین تگ های او باشد
         DataHolder.selectedCustomer.Tags=DataHolder.selectedCustomer.Tags.filter(t => t.Id !== TargetTagId).find(t => t.Id === TargetTagId)
         */
      }
    }

    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showMsg('برچسب با موفقیت برداشته شد'); // آپدیت لیست کاربران

    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].OnlineCustomerListHolder.GetClientsListForAdmin();
  }

  render() {
    let tags;

    if (!this.props.customer || !this.props.customer.Tags || !this.props.customer.Tags || !this.props.customer.Tags.length) {
      if (!this.props.customer || !this.props.customer.CustomerTags || !this.props.customer.CustomerTags || !this.props.customer.CustomerTags.length) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
      } else {
        tags = this.props.customer.CustomerTags;
      }
    } else {
      tags = this.props.customer.Tags;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }
    }, tags.map((el, i, arr) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
        variant: "primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 29
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          fontSize: "14px"
        },
        className: "fa fa-tags",
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 33
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 33
        }
      }, el.Name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          color: 'white'
        },
        type: "button",
        onClick: () => {
          this.deleteTagFormUserTagsById(el.Id);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 33
        }
      }, "x")));
    }));
  }

}

/***/ }),

/***/ "./src/Components/CustomerToolbar.js":
/*!*******************************************!*\
  !*** ./src/Components/CustomerToolbar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Badge */ "./node_modules/react-bootstrap/esm/Badge.js");
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Help/DataHolder */ "./src/Help/DataHolder.js");
/* harmony import */ var _Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Pages/LayoutPage */ "./src/Pages/LayoutPage.js");
/* harmony import */ var _CustomerInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CustomerInfo */ "./src/Components/CustomerInfo.js");
/* harmony import */ var _UserDeviceInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserDeviceInfo */ "./src/Components/UserDeviceInfo.js");
/* harmony import */ var _UserTags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UserTags */ "./src/Components/UserTags.js");
/* harmony import */ var _OtherTools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./OtherTools */ "./src/Components/OtherTools.js");
/* harmony import */ var _LastPagesVisited__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./LastPagesVisited */ "./src/Components/LastPagesVisited.js");
/* harmony import */ var _CustomerData__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CustomerData */ "./src/Components/CustomerData.js");
/* harmony import */ var _SendFromHelpDeskModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SendFromHelpDeskModal */ "./src/Components/SendFromHelpDeskModal.js");
/* harmony import */ var _SendFromHelpDesk__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SendFromHelpDesk */ "./src/Components/SendFromHelpDesk.js");
/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primereact/dialog */ "./node_modules/primereact/dialog.js");
/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primereact_dialog__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ScreenRecordShower__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ScreenRecordShower */ "./src/Components/ScreenRecordShower.js");
/* harmony import */ var _ScreenRecordShowerSendRequest__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ScreenRecordShowerSendRequest */ "./src/Components/ScreenRecordShowerSendRequest.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\CustomerToolbar.js";



















class CustomerToolbar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_5__["DataHolder"].selectedCustomer) {
      return;
    }

    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send('GetCreatedForms', {
      customerId: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_5__["DataHolder"].selectedCustomer.Id
    });
  }

  constructor(args) {
    super(args);
    this.state = {};
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].CustomerToolbar = this;
  }

  getCreatedFormsCallback(res) {
    if (!res || !res.Content || !res.Content.EntityList) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError('لیست فرم ها نال است');
      return;
    }

    this.setState({
      formList: res.Content.EntityList
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CustomerInfo__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OtherTools__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card adminsPanel" + (_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.state.focusForSelectingAdmin ? ' showSingle ' : ''),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    }, "\u0627\u0631\u0633\u0627\u0644 \u0641\u0631\u0645"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }, !_Help_DataHolder__WEBPACK_IMPORTED_MODULE_5__["DataHolder"].selectedCustomer && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 58
      }
    }, "\u06A9\u0627\u0631\u0628\u0631\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A"), _Help_DataHolder__WEBPACK_IMPORTED_MODULE_5__["DataHolder"].selectedCustomer && (!this.state.formList || this.state.formList.length == 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 28
      }
    }, "\u0647\u06CC\u0686 \u0641\u0631\u0645\u06CC \u062A\u0639\u0631\u06CC\u0641 \u0646\u0634\u062F\u0647 \u0648 \u06CC\u0627 \u062A\u0645\u0627\u0645\u06CC \u0641\u0631\u0645 \u0647\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A"), this.state.formList && this.state.formList.map((el, i, arr) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onClick: () => {
          this.selectForm(el);
        },
        title: 'جهت ارسال انتخاب نمایید',
        variant: "primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 33
        }
      }, el.Name, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          fontSize: '12px'
        },
        className: "fa fa-plus",
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 98
        }
      })));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CustomerData__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserDeviceInfo__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserTags__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LastPagesVisited__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 12
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SendFromHelpDeskModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
      title: 'انتخاب از مقالات مرکز پشتیبانی',
      ok: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SendFromHelpDesk__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SendFromHelpDeskModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
      title: 'نمایش برخط مانیتور بازدیدکننده',
      currName: 'ScreenRecordShowerSendRequest',
      ok: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ScreenRecordShowerSendRequest__WEBPACK_IMPORTED_MODULE_17__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 21
      }
    })));
  }

  selectForm(el) {
    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_5__["DataHolder"].selectedCustomer || !_Help_DataHolder__WEBPACK_IMPORTED_MODULE_5__["DataHolder"].selectedCustomer.Id) {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_6__["_showError"])('هیچ بازدید کننده ای انتخاب نشده است');

      return;
    }

    let count = _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatPage.state.chats && _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatPage.state.chats.length ? _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatPage.state.chats.length : 0;
    count++;
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send('AdminSendFormToCustomer', {
      formId: el.Id,
      customerId: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_5__["DataHolder"].selectedCustomer.Id,
      UniqId: count
    });
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatPage.addChat({
      type: 'form',
      formId: el.Id,
      Message: '',
      UniqId: count
    }, true);
    let customerId = _Help_DataHolder__WEBPACK_IMPORTED_MODULE_5__["DataHolder"].selectedCustomer && _Help_DataHolder__WEBPACK_IMPORTED_MODULE_5__["DataHolder"].selectedCustomer.Id ? _Help_DataHolder__WEBPACK_IMPORTED_MODULE_5__["DataHolder"].selectedCustomer.Id : null;
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send('GetCreatedForms', {
      customerId
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CustomerToolbar);

/***/ }),

/***/ "./src/Components/Customers.js":
/*!*************************************!*\
  !*** ./src/Components/Customers.js ***!
  \*************************************/
/*! exports provided: default, ShowOnlineUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Customers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowOnlineUsers", function() { return ShowOnlineUsers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Help/DataHolder */ "./src/Help/DataHolder.js");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../styles/myStyle.css */ "./src/styles/myStyle.css");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_myStyle_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _WhileWriting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WhileWriting */ "./src/Components/WhileWriting.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\Customers.js";






class Customers extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(arg) {
    super(arg);
    this.state = {};
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].CustomersPage = this;
  }

  customerTypingCallback(res, IsTyping) {
    if (!res || !res.Content.targetCustomerId) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError('کاربر ی در حال تایپ است بدون کد کاربر ارسال شده است ');
      return;
    }

    if (!this.state.arr) {
      return;
    }

    let j = this.state.arr.findIndex(f => f.Id === res.Content.targetCustomerId);

    if (j === -1) {
      return;
    }

    this.state.arr[j].IsTyping = IsTyping;
    this.setState({
      tmp: Math.random()
    });
  }

  customerStartTypingCallback(res) {
    this.customerTypingCallback(res, true);
  }

  customerStopTypingCallback(res) {
    this.customerTypingCallback(res, false);
  }

  totalUserCountsChangedCallback(res) {
    if (!res.Content.CustomerList || !res.Content.CustomerList.length) {
      console.log('res.CustomerList is null or empty');
      return;
    }

    let arr = this.state.arr;

    if (!arr) {
      arr = [];
      return;
    }

    for (let i = 0; i < res.Content.CustomerList.length; i++) {
      let CustomerId = res.Content.CustomerList[i].CustomerId;
      let TotalNewChatSentByCustomer = res.Content.CustomerList[i].TotalNewChatSentByCustomer;
      let OnlineStatus = res.Content.CustomerList[i].OnlineStatus;
      let j = arr.findIndex(f => f.Id === CustomerId);

      if (j !== -1) {
        arr[j].OnlineStatus = OnlineStatus;
        arr[j].NewMessageCount = TotalNewChatSentByCustomer;
      }
    }

    this.setState({
      arr: arr,
      tmp: Math.random()
    });
  }

  customerSendToAdminCallback(res) {
    let CustomerId = res.Content.CustomerId;
    let Message = res.Content.Message;
    let TotalReceivedMesssages = res.Content.TotalReceivedMesssages;
    let chat = res.Content.Chat;

    if (!TotalReceivedMesssages) {
      return;
    } // اگر کاربر کنونی ارسال کننده باشد


    if (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer && _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer.Id === CustomerId) {
      return;
    }

    if (!this.state.arr) {
      return;
    }

    let i = this.state.arr.findIndex(c => c.Id == CustomerId);

    if (i != -1) {
      this.state.arr[i].TotalUnRead = TotalReceivedMesssages;
      this.setState({
        arr: this.state.arr
      });
    }
  }

  clearSearch() {
    this.setState({
      arr: this.prevCustomersList
    });
  }

  searchHandlerCallback(searchCustomersList) {
    this.prevCustomersList = this.state.arr;

    if (!searchCustomersList) {
      searchCustomersList = [];
    }

    let customerList = [];

    for (var i = 0; i < searchCustomersList.length; i++) {
      let tmp = searchCustomersList[i].Customer;
      customerList.push(tmp);
    }

    this.setState({
      arr: customerList
    });
  }

  componentWillMount() {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].UserType = 'CustomersChattedWithMe';
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedTagId = null;
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].gapIsOnlyOnly = null;
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].currentUsersIsAdmins = null;
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send("GetClientsListForAdmin", {
      userType: _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].UserType
    });
  }

  getCustomerActivityDetailCallback(res) {//todo:
  }

  readChat() {
    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError('کاربر انتخاب نشده است');
      return;
    }

    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showMsg('در حال خواندن اطلاعات چت');
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send("ReadChat", {
      targetId: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer.Id,
      pageNumber: 1
    });
  }

  getClientsListForAdminCallback(res) {
    if (!res || !res.Content || !res.Content.EntityList) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError('getClientsListForAdminCallback returns null');
      return;
    }

    var arr = [];
    arr = res.Content.EntityList;

    if (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer) {
      if (!arr.find(f => f.Id == _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer.Id)) {
        arr.push(_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer);
        this.readChat();
      } else {
        this.readChat();

        if (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer) {
          this.GetUserAddedToTags(_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer.Id);
        }
      }

      this.placeOnTop(arr);
    }

    this.setState({
      arr: arr
    });
  }

  GetUserAddedToTags(target) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send("GetUserAddedToTags", {
      target: target
    });
  }

  placeOnTop(arr) {
    arr.sort((x, y) => {
      return x.Id == _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer.Id ? -1 : 1;
    });
  }

  customerOnlineAgainCallback(res) {
    this.newCustomerOnlineCallback(res);
  }

  customerOfflineAgainCallback(res) {
    this.newCustomerOnlineCallback(res);
  }

  newCustomerOnlineCallback(res) {
    let arr = this.state.arr;

    if (!arr) {
      arr = [];
    }

    let i = arr.findIndex(f => f.Id === res.Content.Id);

    if (i != -1) {
      arr[i] = res.Content;
    } else {//  arr.push(res.Content);
    }

    this.setState({
      arr: arr
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 3
      }
    }, "\u06A9\u0627\u0631\u0628\u0631\u0627\u0646 \u0622\u0646\u0644\u0627\u06CC\u0646"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "list-group list-group-flush",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 3
      }
    }, this.state.arr && this.state.arr.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShowOnlineUsers, {
      arr: this.state.arr,
      parent: this,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 70
      }
    }))));
  }

}

const showTotalUnRead = function (el) {
  if (el.NewMessageCount) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
      variant: "info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 17
      }
    }, el.NewMessageCount, "+");
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  }
};

function ShowOnlineUsers(props) {
  if (!props.arr || props.arr.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  }

  return props.arr.map((el, i, arr) => {
    let isSelected = false;

    if (props.isAdmins) {
      isSelected = _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedAdmin && el.Id == _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedAdmin.Id ? 'selectedUserInList' : '';
    } else {
      isSelected = _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer && el.Id == _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer.Id ? 'selectedUserInList' : '';
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: el.Id,
      onClick: e => {
        if (props.onClick) {
          props.onClick(el);
        } else {
          _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].currentUsersIsAdmins = false;
          el.TotalUnRead = 0;
          _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer = el;
          props.parent.setState({
            temp: Math.random()
          });
          props.parent.readChat();

          if (_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].CustomerToolbar) {
            _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].CustomerToolbar.setState({
              temp: Math.random()
            });
          } //  debugger


          if (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer) {
            props.parent.GetUserAddedToTags(_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer.Id);
          } //CurrentUserInfo.CustomersPage.placeOnTop(arr);


          _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatPage.setState({
            scroll: false
          });
        }
      },
      className: 'list-group-item userInList ' + isSelected,
      key: el.Id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 16
      }
    }, showTotalUnRead(el), el.Name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WhileWriting__WEBPACK_IMPORTED_MODULE_5__["default"], {
      IsTyping: el.IsTyping,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 13
      }
    }), el.OnlineStatus === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "gapStat",
      style: {
        backgroundColor: 'green'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 17
      }
    }), el.OnlineStatus === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "gapStat",
      style: {
        backgroundColor: 'grey'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 17
      }
    }), el.OnlineStatus === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "gapStat",
      style: {
        backgroundColor: 'orange'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 17
      }
    }));
  });
}

/***/ }),

/***/ "./src/Components/FormDataTable.js":
/*!*****************************************!*\
  !*** ./src/Components/FormDataTable.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var _Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Pages/LayoutPage */ "./src/Pages/LayoutPage.js");
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Table */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/myStyle.css */ "./src/styles/myStyle.css");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_myStyle_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\FormDataTable.js";








class FormDataTable extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(prop) {
    super(prop);
    this.state = {};
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].FormDataTable = this;
  }

  getFormDataCallback(res) {
    if (!res || !res.Content) {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_2__["_showError"])('دیتای خوانده شده اشکال دارد');

      return;
    }

    console.log('FormDataTable==>getFormDataCallback');
    console.log(res);
    let formStructure = res.Content.Form;
    let formData = res.Content.formData;
    let Page = res.Content.Page;
    let total = res.Content.total ? res.Content.total : 0;
    /*   let formDateFixArr=[];
       for (let i = 0; i < formData.length; i++) {
             let row={};
           for (let j = 0; j < formStructure.elements; j++) {
               row[formData[i].Key]=formData[i].Value;
             }
           formDateFixArr[formData[i].Key]=formData[i].Value;    
           
       }*/

    this.setState({
      formStructure,
      formData: formData,
      Page,
      total
    });
  }

  componentDidMount() {}

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
      dir: 'rtl',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }
    }, !_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      dir: 'rtl',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 25
      }
    }, "\u06CC\u06A9 \u0641\u0631\u0645 \u0627\u0632 \u0644\u06CC\u0633\u062A \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F \u062A\u0627 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0622\u0646 \u0646\u0645\u0627\u06CC\u0634 \u062F\u0627\u062F\u0647 \u0634\u0648\u062F")), this.state.Page && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 25
      }
    }, _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 65
      }
    }, "\u0641\u0631\u0645 : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 84
      }
    }, _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedForm.Name), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      dir: 'rtl',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 44
      }
    }, "\u0635\u0641\u062D\u0647 : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 64
      }
    }, this.state.Page))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      dir: 'rtl',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 44
      }
    }, "\u0645\u062C\u0645\u0648\u0639 :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 64
      }
    }, this.state.total), " \u0631\u06A9\u0648\u0631\u062F")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }, this.state.Page && this.showPaging()), this.state.Page && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 37
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {
      striped: true,
      bordered: true,
      hover: true,
      size: "sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }
    }, this.showHeaders()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 21
      }
    }, this.showData())), this.state.Page && this.showPaging());
  }

  showHeaders() {
    if (!this.state.formStructure) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    }

    let str = {
      elements: this.state.formStructure.Elements,
      Name: this.state.formStructure.Name,
      AfterMessage: this.state.formStructure.AfterMessage,
      OnlyMe: this.state.formStructure.OnlyMe,
      Id: this.state.formStructure.Id
    };

    if (!str.elements || !str.elements.length) {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_2__["_showError"])('المنت های فرم خالی است');

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 16
      }
    }, str.elements.map((el, i, arr) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 20
        }
      }, el.Name);
    }));
  }

  showData() {
    if (!this.state.formData) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    }

    let str = {
      elements: this.state.formStructure.Elements,
      Name: this.state.formStructure.Name,
      AfterMessage: this.state.formStructure.AfterMessage,
      OnlyMe: this.state.formStructure.OnlyMe,
      Id: this.state.formStructure.Id
    };

    if (!str.elements || !str.elements.length) {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_2__["_showError"])('المنت های فرم خالی است');

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    } //rows:List of FormElement lists


    return this.state.formData.map((rows, i, dataArr) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        key: i,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 21
        }
      }, //row:FormElement
      rows.map((row, j, dataArr) => {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          key: 'd-' + j,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 21
          }
        }, row.Value);
      }));
    });
  }

  showPaging() {
    let currstate = {
      formStructure: this.state.formStructure,
      formData: this.state.formData,
      Page: this.state.Page,
      total: this.state.total
    };

    if (_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedForm && currstate.Page === null || currstate.Page === undefined) {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_2__["_showError"])("صفحه نال است");

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    }

    if (currstate.total === null || currstate.total === undefined) {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_2__["_showError"])("total نال است");

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    }

    let pages = currstate.total / 20 + (currstate.total % 20 > 0 ? 1 : 0);
    let arr = [];

    for (let i = 1; i <= pages; i++) {
      arr.push(i);
    }

    let c = 1;
    return arr.map((p, i, arr) => {
      if (i <= 3) {
        if (p === this.state.Page) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            onClick: () => {
              this.selectPage(p);
            },
            className: 'btn btn-primary text-default cursor',
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 28
            }
          }, p);
        } else {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            onClick: () => {
              this.selectPage(p);
            },
            className: 'text-primary btn btn-default cursor',
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 223,
              columnNumber: 28
            }
          }, p);
        }
      } else {
        if (!(i > pages - 2) && i == 4) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 28
            }
          }, "...");
        }
      }

      if (i > pages - 2) {
        if (p === this.state.Page) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            onClick: () => {
              this.selectPage(p);
            },
            className: 'btn btn-primary text-default cursor',
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 28
            }
          }, p);
        } else {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            onClick: () => {
              this.selectPage(p);
            },
            className: 'text-primary btn btn-default cursor',
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 243,
              columnNumber: 28
            }
          }, p);
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    });
  }

  selectPage(page) {
    if (!_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedForm) {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_2__["_showError"])('فرمی انتخاب نشده است');

      return;
    }

    Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_2__["_showMsg"])("در حال خواندن اطلاعات");

    this.setState({
      Page: page,
      formData: null
    });
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send('GetFormData', {
      formId: _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedForm.Id,
      Page: page
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FormDataTable);

/***/ }),

/***/ "./src/Components/FormInputs.js":
/*!**************************************!*\
  !*** ./src/Components/FormInputs.js ***!
  \**************************************/
/*! exports provided: Input, CallValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallValidation", function() { return CallValidation; });
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\FormInputs.js";


function Input(props, validate) {
  const [val, setVal] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.value);
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    setVal(props.value);
  }, [props.value]);
  pushToInputs(this);

  function Validate(newVal, newValCal) {
    //debugger;
    if (props.required && !(newValCal ? newVal : val)) {
      setError(`${props.name} نمی تواند خالی باشد `);
      return false;
    } else {
      setError('');
      return true;
    }
  }

  if (!_Help_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].Inputs) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].Inputs = [];
  }

  _Help_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].Inputs.push(Validate);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    style: {
      float: 'right'
    },
    dir: 'rtl',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, props.name), props.type == 'textarea' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    id: props.id,
    readonly: props.readonly,
    placeholder: props.placeholder,
    className: 'form-control ' + (props.className ? props.className : ''),
    name: props.elname,
    value: val,
    onChange: e => {
      setVal(e.target.value);

      if (props.onChange) {
        props.onChange(e);
      }

      if (props.parent && props.parentStateName) {
        props.parent.state[props.parentStateName] = e.target.value;
        props.parent.setState({
          tmp: Math.random()
        });
      }

      Validate(e.target.value, true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 38
    }
  }, " "), props.type !== 'textarea' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    disabled: props.disabled,
    id: props.id,
    checked: props.checked,
    readonly: props.readonly,
    placeholder: props.placeholder,
    className: 'form-control ' + (props.className ? props.className : ''),
    type: props.type,
    name: props.elname,
    value: val,
    onChange: e => {
      setVal(e.target.value);

      if (props.onChange) {
        props.onChange(e);
      }

      if (props.parent && props.parentStateName) {
        props.parent.state[props.parentStateName] = e.target.value;
        props.parent.setState({
          tmp: Math.random()
        });
      }

      Validate(e.target.value, true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 39
    }
  }), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
    style: {
      color: 'darkred'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }, error));
}

function pushToInputs(el) {
  if (!_Help_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].Inputs) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].Inputs = [];
  }

  if (_Help_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].Inputs.find(f => f === el)) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].Inputs.push(el);
  }
}

function CallValidation() {
  if (!_Help_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].Inputs) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].Inputs = [];
  }

  let isFormValid = true;

  for (let i = 0; i < _Help_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].Inputs.length; i++) {
    let isValid = _Help_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].Inputs[i]();

    if (!isValid) {
      isFormValid = false;
    }
  }

  return isFormValid;
}

/***/ }),

/***/ "./src/Components/FormShowerInChat.js":
/*!********************************************!*\
  !*** ./src/Components/FormShowerInChat.js ***!
  \********************************************/
/*! exports provided: default, FormShowerInChatHolder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormShowerInChatHolder", function() { return FormShowerInChatHolder; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Pages_FormCreatorPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Pages/FormCreatorPage */ "./src/Pages/FormCreatorPage.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\FormShowerInChat.js";





class FormShowerInChat extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(args) {
    super(args);
    this.state = {
      elements: this.props.elements,
      // You can even call functions and class methods:
      Name: this.props.formName
    };
    FormShowerInChatHolder[this.props.formId + '' + this.props.chatUniqId] = this;
  }

  componentDidMount() {
    console.log('FormShowerInChat->componentDidMount:');
    console.log(this.state.elements);

    if (!this.state.elements) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send('GetFormSingle', {
        formId: this.props.formId,
        uniqId: this.props.chatUniqId
      });
    }
  } ///این ممتد در واقع باید بیرون از این کلاس می بود


  saveFormDataCallback(res) {
    //debugger
    console.log('FormShowerInChat->saveFormDataCallback:');
    console.log(res);
    /*form.AfterMessage,
                formId,
                chatId,
                FormValues*/

    if (!res || !res.Content || !res.Content.FormValues || res.Content.FormValues.length == 0) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError('اطلاعات بازگشتی از سرور نال است');
      return;
    }

    if (!this.state.elements || this.state.elements.length == 0) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError('المنت های فرم خالی است');
      return;
    }

    if (!_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatPage) {
      return;
    } else {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatPage.addChat({
        type: 'form',
        formId: res.Content.formId,
        Message: '',
        elements: res.Content.formElements,
        IsReceive: true,
        UniqId: res.Content.UniqId
      }, true);
    }

    this.setState({
      tmp: Math.random()
    });
    console.log(res);
  }

  getFormSingleCallback(res) {
    // debugger
    if (!res || !res.Content) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError('اطلاعات بازگشتی از سرور نال است');
      return;
    }

    console.log('this.state.elements', this.state.elements);
    this.setState({
      elements: res.Content.Elements,
      Name: res.Content.Name,
      AfterMessage: res.Content.AfterMessage,
      OnlyMe: res.Content.OnlyMe,
      Message: res.Content.Message,
      Id: res.Content.Id
    });
    console.log(res);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }
    }, !this.state.elements && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 42
      }
    }, "\u062F\u0631 \u062D\u0627\u0644 \u0627\u0631\u0633\u0627\u0644 \u0641\u0631\u0645"), this.state.Name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 37
      }
    }, this.state.Name), this.state.elements && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_FormCreatorPage__WEBPACK_IMPORTED_MODULE_3__["FormRenderer"], {
      elements: this.state.elements,
      editable: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 41
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FormShowerInChat);
/*لیست کامپونت های فرم ها در این ابجکت نگه داری می شود|*/

const FormShowerInChatHolder = {};

/***/ }),

/***/ "./src/Components/Header.js":
/*!**********************************!*\
  !*** ./src/Components/Header.js ***!
  \**********************************/
/*! exports provided: ForwardChat, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForwardChat", function() { return ForwardChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Help/DataHolder */ "./src/Help/DataHolder.js");
/* harmony import */ var _WhileWriting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WhileWriting */ "./src/Components/WhileWriting.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _MarkAsResovled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MarkAsResovled */ "./src/Components/MarkAsResovled.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\Header.js";






class ForwardChat extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(arg) {
    super(arg);
    this.state = {};
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ForwardChat = this;
  }

  forwardChatSuccessCallback(res) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showMsg('با موفقیت فوروارد شد');
  }

  setWaitingForSelectAdmin() {
    if (this.state.waitingForSelectAdmin) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError(null);
      this.setState({
        waitingForSelectAdmin: false
      });
      this.ForwardChats();
    }
  }

  ForwardChats() {
    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError('هیچ چتی انتخاب نشده است');
      return;
    }

    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedAdmin) {
      if (_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].AdminsPage) {
        this.setState({
          waitingForSelectAdmin: true
        });
        _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.setState({
          temp: Math.random(),
          focusForSelectingAdmin: true
        });
      }

      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError('لطفا ادمین مورد نظر را جهت فوروارد انتخاب نمایید');
      return;
    }

    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showMsg('در حال فوروارد چت');
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send('forwardChat', {
      myAccountId: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedAdmin.Id,
      targetUserId: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer.Id
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer && _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].AdminsPage && _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].AdminsPage.state.arr && _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].AdminsPage.state.arr.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: () => {
        this.ForwardChats();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 20
      }
    }, "\u0627\u0646\u062A\u0642\u0627\u0644 \u06AF\u0641\u062A\u06AF\u0648"));
  }

}
class MyHeader extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(arg) {
    super(arg);
    this.state = {};
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].MyHeader = this;
  }

  customerTypingCallback(res, IsTyping) {
    if (!res || !res.Content.targetCustomerId) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError('کاربر ی در حال تایپ است بدون کد کاربر ارسال شده است ');
      return;
    }

    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer) {
      return;
    }

    _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer.IsTyping = IsTyping;
    this.setState({
      tmp: Math.random()
    });
  }

  customerStartTypingCallback(res) {
    this.customerTypingCallback(res, true);
  }

  customerStopTypingCallback(res) {
    this.customerTypingCallback(res, false);
  }

  search(searchTerm) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatPage.setState({
      scroll: false
    });

    if (!searchTerm || searchTerm == '') {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].CustomersPage.clearSearch(); //CurrentUserInfo.AdminsPage.searchHandlerCallback(res.customerlist);

      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].ChatPage.clearSearch();
      return;
    }

    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send("SearchHandler", {
      customerId: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer ? _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer.Id : null,
      searchTerm: searchTerm
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ForwardChat, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }
    }), _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer && _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer.IsTyping && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WhileWriting__WEBPACK_IMPORTED_MODULE_3__["default"], {
      IsTyping: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer.IsTyping,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "form-control",
      placeholder: "\u062C\u0633\u062A\u062C\u0648",
      value: this.state.searchTerm,
      onChange: e => {
        this.setState({
          searchTerm: e.target.value
        });
        this.search(e.target.value);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 21
      }
    })));
  }

}
/*
* 
* function adminStartTypingCallback(){
    getDoc().querySelector('#gapwhileWriting').style.display=null;
}


function adminStopTypingCallback(){
    getDoc().querySelector('#gapwhileWriting').style.display='none';
}



function bindIsTyping(){
    var searchTimeout;
    getDoc().querySelector('#gapChatInput').onkeypress = function () {
        if (searchTimeout != undefined) clearTimeout(searchTimeout);


        searchTimeout = setTimeout(callServerScript, 250);
        MyCaller.Send('CustomerStartTyping');
    };
    
}

function callServerScript() {
    MyCaller.Send('CustomerStopTyping');

}
*/

/***/ }),

/***/ "./src/Components/LastPagesVisited.js":
/*!********************************************!*\
  !*** ./src/Components/LastPagesVisited.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Help/DataHolder */ "./src/Help/DataHolder.js");
/* harmony import */ var react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Badge */ "./node_modules/react-bootstrap/esm/Badge.js");
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Table */ "./node_modules/react-bootstrap/esm/Table.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\LastPagesVisited.js";





class LastPagesVisited extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomer) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }
    }, "\u0622\u062E\u0631\u06CC\u0646 \u0635\u0641\u062D\u0627\u062A \u0628\u0627\u0632\u062F\u06CC\u062F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-body",
      style: {
        display: 'flex',
        textAlign: 'center'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_3__["default"], {
      striped: true,
      bordered: true,
      hover: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 37
      }
    }, "\u0645\u06CC\u0632\u0627\u0646 \u0628\u0627\u0632\u062F\u06CC\u062F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 37
      }
    }, "\u0639\u0646\u0648\u0627\u0646 \u0635\u0641\u062D\u0647")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 29
      }
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LastPagesVisited);

/***/ }),

/***/ "./src/Components/MarkAsResovled.js":
/*!******************************************!*\
  !*** ./src/Components/MarkAsResovled.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Help/DataHolder */ "./src/Help/DataHolder.js");
/* harmony import */ var react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Badge */ "./node_modules/react-bootstrap/esm/Badge.js");
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Help/Socket */ "./src/Help/Socket.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\MarkAsResovled.js";





class MarkAsResovled extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomer) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: () => {
        if (_Help_Socket__WEBPACK_IMPORTED_MODULE_3__["CurrentUserInfo"].CustomerInfo) {
          _Help_Socket__WEBPACK_IMPORTED_MODULE_3__["CurrentUserInfo"].CustomerInfo.setState({
            tmp: Math.random()
          });
        }

        _Help_Socket__WEBPACK_IMPORTED_MODULE_3__["CurrentUserInfo"].ChatPage.setState({
          tmp: Math.random()
        });

        if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomer.IsResolved) {
          _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomer.IsResolved = true;
        } else {
          _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomer.IsResolved = false;
        }

        this.setState({
          IsResolved: false
        });
      },
      className: "card  ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-header " + (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomer.IsResolved ? 'bg-success text-white' : 'bg-danger text-white'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }
    }, _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomer.IsResolved && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: 'success',
      "aria-label": "\u0639\u0644\u0627\u0645\u062A \u0628\u0635\u0648\u0631\u062A \u062D\u0644 \u0646\u0634\u062F\u0647",
      "data-microtip-position": "top",
      role: "tooltip",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 27
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: 'fa fa-check',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 31
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 27
      }
    }, "\u0628\u0635\u0648\u0631\u062A \u062D\u0644 \u0634\u062F\u0647 \u0639\u0644\u0627\u0645\u062A \u0632\u062F\u0647 \u0634\u062F")), !_Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomer.IsResolved && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_2__["default"], {
      variant: 'danger',
      "aria-label": "\u0639\u0644\u0627\u0645\u062A \u0628\u0635\u0648\u0631\u062A \u062D\u0644 \u0634\u062F\u0647",
      "data-microtip-position": "top",
      role: "tooltip",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: 'fa fa-close',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 33
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 29
      }
    }, "\u0645\u0634\u06A9\u0644 \u0627\u06CC\u0646 \u0645\u06A9\u0627\u0644\u0645\u0647 \u062D\u0644 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MarkAsResovled);

/***/ }),

/***/ "./src/Components/Menu.js":
/*!********************************!*\
  !*** ./src/Components/Menu.js ***!
  \********************************/
/*! exports provided: default, ShowPlusCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPlusCount", function() { return ShowPlusCount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Help/DataHolder */ "./src/Help/DataHolder.js");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/myStyle.css */ "./src/styles/myStyle.css");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_myStyle_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SubMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SubMenu */ "./src/Components/SubMenu.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Help_MyGlobal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Help/MyGlobal */ "./src/Help/MyGlobal.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap_ButtonGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/ButtonGroup */ "./node_modules/react-bootstrap/esm/ButtonGroup.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\Menu.js";









class Menu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(arg) {
    super(arg);
    this.state = {};
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].Menu = this;
  }

  setPage(page) {
    _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].currentPage = page;
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.setState({
      temp: Math.random()
    });
    this.setState({
      temp: Math.random()
    });
  }

  totalUserCountsChangedCallback(res) {
    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].currentPage) {
      // یعنی در صفحه چت است
      return;
    }
    /*  if(!res || !res.Content.TotalWaitingForAnswerCount || !res.Content.NotChattedCount || !res.Content.TotalNewChatReceived)
      {
          console.error(res);
          CurrentUserInfo.LayoutPage.showError('totalUserCountsChangedCallback error')
          return;
      }*/


    this.setState({
      TotalNewChatReceived: res.Content.TotalNewChatReceived,
      TotalWaitingForAnswerCount: res.Content.TotalWaitingForAnswerCount,
      NotChattedCount: res.Content.NotChattedCount
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
      fluid: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 3
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 3
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "aria-label": "Basic example",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "light",
      className: 'btn btn-default ' + (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].currentPage === 'ProfilePage' ? ' bg-primary text-white ' : ''),
      type: "button",
      onClick: () => {
        this.setPage('ProfilePage');
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }
    }, "\u067E\u0631\u0648\u0641\u0627\u06CC\u0644"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "light",
      className: 'btn btn-default ' + (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].currentPage === 'FormDataPage' ? ' bg-primary text-white ' : ''),
      type: "button",
      onClick: () => {
        this.setPage('FormDataPage');
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }
    }, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A \u06A9\u0627\u0631\u0628\u0631\u0627\u0646"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "light",
      className: 'btn btn-default ' + (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].currentPage === 'HelpDeskPage' ? ' bg-primary text-white ' : ''),
      type: "button",
      onClick: () => {
        this.setPage('HelpDeskPage');
        _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].subPage = null;
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }
    }, "Help Desk  \u0645\u0642\u0627\u0644\u0627\u062A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "light",
      id: 'formCreatorButton',
      className: 'btn btn-default ' + (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].currentPage === 'FormCreator' ? ' bg-primary text-white ' : ''),
      type: "button",
      onClick: () => {
        this.setPage('FormCreator');
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }
    }, "\u0641\u0631\u0645 \u0633\u0627\u0632"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "light",
      className: 'btn btn-default ' + (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].currentPage === 'SocialChannels' ? ' bg-primary text-white ' : ''),
      type: "button",
      onClick: () => {
        this.setPage('SocialChannels');
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }
    }, "\u0634\u0628\u06A9\u0647 \u0647\u0627\u06CC \u0627\u062C\u062A\u0645\u0627\u0639\u06CC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "light",
      className: 'btn btn-default ' + (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].currentPage === 'AutomaticSend' ? ' bg-primary text-white ' : ''),
      type: "button",
      onClick: () => {
        this.setPage('AutomaticSend');
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }
    }, "\u0627\u0631\u0633\u0627\u0644 \u0647\u0627\u06CC \u0627\u062A\u0648\u0645\u0627\u062A\u06CC\u06A9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "light",
      className: 'btn btn-default ' + (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].currentPage ? ' bg-primary text-white ' : ''),
      type: "button",
      onClick: () => {
        this.setPage(null);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShowPlusCount, {
      Count: this.state.TotalNewChatReceived,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 21
      }
    }), "\u0627\u062A\u0627\u0642 \u0686\u062A"), _Help_MyGlobal__WEBPACK_IMPORTED_MODULE_6__["MyGlobal"].isTestingEnvirement && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "light",
      className: 'btn btn-default ' + (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].currentPage ? ' bg-primary text-white ' : ''),
      type: "button",
      onClick: () => {
        this.setPage('FakeServerMonitor');
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 25
      }
    }, "FakeServerMonitor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SubMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 17
      }
    })))));
  }

}
function ShowPlusCount(props) {
  if (props.Count && props.Count > 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
      variant: "info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }
    }, props.Count, "+");
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  }
}

/***/ }),

/***/ "./src/Components/Modal.js":
/*!*********************************!*\
  !*** ./src/Components/Modal.js ***!
  \*********************************/
/*! exports provided: MyModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyModal", function() { return MyModal; });
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\Modal.js";


class MyModal extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    this.handleClose = () => {
      this.props.handleClose();
    };

    this.state = {};
    this.handleClose.bind(this);
  }

  componentDidMount() {}

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"], {
      dir: 'rtl',
      show: this.props.show,
      onHide: this.handleClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"].Header, {
      closeButton: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"].Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 25
      }
    }, this.props.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"].Body, {
      className: 'mymodal',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }
    }, this.props.children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Modal"].Footer, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }
    }, this.props.onSave && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      id: 'saveModal',
      variant: "primary",
      onClick: this.handleClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 47
      }
    }, "\u0630\u062E\u06CC\u0631\u0647 \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Button"], {
      variant: "secondary",
      onClick: this.handleClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 25
      }
    }, "\u0644\u063A\u0648"))));
  }

}

/***/ }),

/***/ "./src/Components/OnlineCustomerList.js":
/*!**********************************************!*\
  !*** ./src/Components/OnlineCustomerList.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OnlineCustomerList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/myStyle.css */ "./src/styles/myStyle.css");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_myStyle_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../Help/DataHolder */ "./src/Help/DataHolder.js");
/* harmony import */ var _CustomerTags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CustomerTags */ "./src/Components/CustomerTags.js");
/* harmony import */ var _TagSingleCustomer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TagSingleCustomer */ "./src/Components/TagSingleCustomer.js");
/* harmony import */ var _TagList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TagList */ "./src/Components/TagList.js");
/* harmony import */ var _WhileWriting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WhileWriting */ "./src/Components/WhileWriting.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\OnlineCustomerList.js";










class OnlineCustomerList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  selectCustomer(customer) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_3__["MyCaller"].Send('selectCustomerForChat', {
      customerId: customer.Id
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      fluid: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: 2,
      className: "onDesktop",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TagList__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 19
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: 10,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 15
      }
    }, this.showCustomers())));
  }

  showCustomers() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 16
      }
    }, !this.props.list && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 35
      }
    }, "\u062F\u0631 \u062D\u0627\u0644 \u062E\u0648\u0627\u0646\u062F\u0646 \u0627\u0637\u0644\u0627\u0639\u0627\u062A"), this.props.list && this.props.list.length == 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 62
      }
    }, "\u0647\u06CC\u0686 \u0628\u0627\u0632\u062F\u06CC\u062F\u06A9\u0646\u0646\u062F\u0647 \u0627\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F"), this.props.list && this.props.list.map((item, i, arr) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        md: 3,
        className: "userCard",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        bg: "Light",
        key: i,
        text: item.Name,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 25
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 29
        }
      }, item.Name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TagSingleCustomer__WEBPACK_IMPORTED_MODULE_6__["default"], {
        customerId: item.Id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 33
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WhileWriting__WEBPACK_IMPORTED_MODULE_8__["default"], {
        IsTyping: item.IsTyping,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 33
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 29
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Text, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 33
        }
      }, this.showNewMessageCount(item), item.Message && item.Message.Message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 78
        }
      }, item.Message.ChatType === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 73
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
        variant: "warning",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 43
        }
      }, item.Message.Message)), item.Message.ChatType === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
        variant: "warning",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 45
        }
      }, "\u0631\u0628\u0627\u062A :", item.Message.Message, " "), item.Message.ChatType === 4 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
        variant: "success",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 45
        }
      }, "\u0641\u0631\u0645 :", item.Message.Message, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CustomerTags__WEBPACK_IMPORTED_MODULE_5__["default"], {
        customer: item,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 37
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 33
        }
      }, item.Address), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 33
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Link, {
        href: "#",
        onClick: () => {
          _Help_DataHolder__WEBPACK_IMPORTED_MODULE_4__["DataHolder"].selectedCustomer = item;
          _Help_DataHolder__WEBPACK_IMPORTED_MODULE_4__["DataHolder"].currentPage = null;
          _Help_Socket__WEBPACK_IMPORTED_MODULE_3__["CurrentUserInfo"].LayoutPage.setState({
            temp: Math.random()
          });
          this.setState({
            temp: Math.random()
          });

          if (_Help_Socket__WEBPACK_IMPORTED_MODULE_3__["CurrentUserInfo"].CustomersPage) {
            this.selectCustomer(item);
          }
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 33
        }
      }, "\u0634\u0631\u0648\u0639 \u0686\u062A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Footer, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 29
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        dir: "rtl",
        className: "text-muted",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 33
        }
      }, item.Time))));
    }));
  }

  showNewMessageCount(item) {
    if (item.NewMessageCount) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
        variant: "primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 20
        }
      }, item.NewMessageCount, "+");
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 22
        }
      }, "\u0628\u062F\u0648\u0646 \u067E\u06CC\u063A\u0627\u0645"));
    }
  }

}

/***/ }),

/***/ "./src/Components/OtherTools.js":
/*!**************************************!*\
  !*** ./src/Components/OtherTools.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Badge */ "./node_modules/react-bootstrap/esm/Badge.js");
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Help/DataHolder */ "./src/Help/DataHolder.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/myStyle.css */ "./src/styles/myStyle.css");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_myStyle_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Pages/LayoutPage */ "./src/Pages/LayoutPage.js");
/* harmony import */ var _VoiceCall__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VoiceCall */ "./src/Components/VoiceCall.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\OtherTools.js";









class OtherTools extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }
    }, "\u062A\u0645\u0627\u0633 \u0648 \u0645\u06A9\u0627\u0646 \u06CC\u0627\u0628\u06CC \u0648 \u0627\u0628\u0632\u0627\u0631"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      style: {
        color: 'green'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }
    }, " \u06A9\u0627\u0631\u0628\u0631 \u062C\u0647\u062A \u062A\u0645\u0627\u0633 \u062A\u0635\u0648\u06CC\u0631\u06CC \u0648 \u0635\u0648\u062A\u06CC \u062F\u0631 \u062F\u0633\u062A\u0631\u0633 \u0627\u0633\u062A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-body",
      style: {
        display: 'flex',
        textAlign: 'center'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      "aria-label": "\u062A\u0645\u0627\u0633 \u0635\u0648\u062A\u06CC",
      "data-microtip-position": "top",
      role: "tooltip",
      onClick: () => {
        if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer) {
          Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_6__["_showError"])('لطفا ابتدا یک بازدیدکننده را انتخاب کنید');

          return;
        }

        _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomerForCall = _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer;

        if (_Help_Socket__WEBPACK_IMPORTED_MODULE_4__["CurrentUserInfo"].VoiceCall) {
          _Help_Socket__WEBPACK_IMPORTED_MODULE_4__["CurrentUserInfo"].VoiceCall.show();
        } else {
          Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_6__["_showError"])('CurrentUserInfo.VoiceCall is null');
        }

        this.setState({
          tmp: Math.random()
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_1__["default"], {
      variant: 'light',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 37
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: 'fa fa-phone bigIcon',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 50
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VoiceCall__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 29
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      "aria-label": "\u062A\u0645\u0627\u0633 \u0648\u06CC\u062F\u0626\u0648\u06CC\u06CC",
      "data-microtip-position": "top",
      role: "tooltip",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_1__["default"], {
      variant: 'light',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 37
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: 'fa fa-video-camera bigIcon',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 50
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      "aria-label": "\u0646\u0645\u0627\u06CC\u0634 \u062F\u0631 \u0646\u0642\u0634\u0647",
      "data-microtip-position": "top",
      role: "tooltip",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_1__["default"], {
      variant: 'light',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 37
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: 'fa fa-map-marker bigIcon',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 50
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      "aria-label": "\u0646\u0645\u0627\u06CC\u0634 \u0628\u0631\u062E\u0637 \u0645\u0627\u0646\u06CC\u062A\u0648\u0631 \u06A9\u0627\u0631\u0628\u0631",
      "data-microtip-position": "top",
      role: "tooltip",
      onClick: () => {
        this.openCustomerScreenViewer();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_1__["default"], {
      variant: 'light',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 37
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: 'fa fa-television bigIcon',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 50
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      "aria-label": "\u0645\u0631\u0648\u0631\u06AF\u0631 \u0645\u0634\u062A\u0631\u06A9",
      "data-microtip-position": "top",
      role: "tooltip",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_1__["default"], {
      variant: 'light',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 37
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: 'fa fa-window-restore bigIcon',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 50
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      "aria-label": "Help Desk  \u0627\u0631\u0633\u0627\u0644 \u0627\u0632   ",
      "data-microtip-position": "top",
      role: "tooltip",
      onClick: () => {
        this.openHelpDeskModal();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_1__["default"], {
      variant: 'light',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 41
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-file-text-o bigIcon",
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 45
      }
    })))))))));
  }

  openHelpDeskModal() {
    if (!_Help_Socket__WEBPACK_IMPORTED_MODULE_4__["CurrentUserInfo"].SendFromHelpDeskModal) {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_6__["_showError"])('مدال help desk یافت نشد');

      return;
    }

    _Help_Socket__WEBPACK_IMPORTED_MODULE_4__["CurrentUserInfo"].SendFromHelpDeskModal.show();
  }

  openCustomerScreenViewer() {
    if (!_Help_Socket__WEBPACK_IMPORTED_MODULE_4__["CurrentUserInfo"].Modals || !_Help_Socket__WEBPACK_IMPORTED_MODULE_4__["CurrentUserInfo"].Modals['ScreenRecordShowerSendRequest']) {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_6__["_showError"])('CurrentUserInfo.Modals[\'ScreenRecordShowerSendRequest\'] is null');
    } else {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_4__["CurrentUserInfo"].Modals['ScreenRecordShowerSendRequest'].show();
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (OtherTools);

/***/ }),

/***/ "./src/Components/Satistification.js":
/*!*******************************************!*\
  !*** ./src/Components/Satistification.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\Satistification.js";


class Satistification extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      "aria-label": "\u0631\u0636\u0627\u06CC\u062A\u0645\u0646\u062F\u06CC",
      "data-microtip-position": "top",
      role: "tooltip",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      style: {
        color: '#f8d007'
      },
      className: "fa fa-star",
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      style: {
        color: '#f8d007'
      },
      className: "fa fa-star",
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      style: {
        color: '#f8d007'
      },
      className: "fa fa-star",
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      style: {
        color: '#f8d007'
      },
      className: "fa fa-star",
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      style: {
        color: 'black'
      },
      className: "fa fa-star",
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      style: {
        color: 'black'
      },
      className: "fa fa-star",
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Satistification);

/***/ }),

/***/ "./src/Components/SaveArticle.js":
/*!***************************************!*\
  !*** ./src/Components/SaveArticle.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Help/DataHolder */ "./src/Help/DataHolder.js");
/* harmony import */ var _FormInputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormInputs */ "./src/Components/FormInputs.js");
/* harmony import */ var primereact_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/editor */ "./node_modules/primereact/editor.js");
/* harmony import */ var primereact_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Pages/LayoutPage */ "./src/Pages/LayoutPage.js");
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Spinner */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Help/Socket */ "./src/Help/Socket.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\SaveArticle.js";











class SaveArticle extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      wait: true
    });

    Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["_showMsg"])("در حال خواندن مقاله"); //todo:


    _Help_Socket__WEBPACK_IMPORTED_MODULE_9__["MyCaller"].Send('HD_GetById', {
      id: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].HelpDeskRowDataSelected.Id
    });
  } //todo:


  hD_GetByIdCallback(res) {
    if (!res || !res.Content) {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["_showError"])("ers is null hD_GetByIdCallback ");

      return;
    }

    this.setState({
      wait: false
    });
    _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].HelpDeskRowDataSelected = res.Content;
    this.setState({
      tmp: Math.random()
    });
  }

  save() {
    this.setState({
      wait: true
    });

    Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["_showMsg"])("در حال ذخیره مقاله"); //todo:


    _Help_Socket__WEBPACK_IMPORTED_MODULE_9__["MyCaller"].Send('HD_Save', {
      HelpDeskRowDataSelected: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].HelpDeskRowDataSelected
    });
  } //todo:


  hD_SaveCallback(res) {
    this.setState({
      wait: false
    });

    Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["_showMsg"])("با موفقیت ذخیره شد");
  }

  render() {
    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].HelpDeskRowDataSelected) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }
      }, "\u0647\u06CC\u0686 \u0645\u0642\u0627\u0644\u0647 \u0627\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      dir: 'rtl',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }
    }, "\u0641\u0631\u0645 \u062B\u0628\u062A \u0648 \u0648\u06CC\u0631\u0627\u06CC\u0634 \u0645\u0642\u0627\u0644\u0647"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      }
    }, "\u0628\u0639\u062F \u0627\u0632 \u0627\u0639\u0645\u0627\u0644 \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A \u062F\u06A9\u0645\u0647 \u062B\u0628\u062A \u0631\u0627 \u0641\u0634\u0627\u0631 \u062F\u0647\u06CC\u062F"), this.state.wait && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_8__["default"], {
      animation: "border",
      role: "status",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sr-only",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 25
      }
    }, "\u0644\u0637\u0641\u0627 \u0645\u0646\u062A\u0638\u0631 \u0628\u0645\u0627\u0646\u06CC\u062F...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormInputs__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      value: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].HelpDeskRowDataSelected.title,
      type: 'text',
      name: 'عنوان مقاله',
      onChange: e => {
        _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].HelpDeskRowDataSelected.title = e.target.value;
        this.setState({
          tmp: Math.random()
        });
      },
      placeholder: '',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 29
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      variant: 'primary',
      onClick: () => {
        this.save();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 25
      }
    }, "\u062B\u0628\u062A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 29
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_editor__WEBPACK_IMPORTED_MODULE_3__["Editor"], {
      style: {
        height: '320px'
      },
      value: this.state.Article,
      onTextChange: e => this.setState({
        Article: e.htmlValue
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 21
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SaveArticle);

/***/ }),

/***/ "./src/Components/ScreenRecordShower.js":
/*!**********************************************!*\
  !*** ./src/Components/ScreenRecordShower.js ***!
  \**********************************************/
/*! exports provided: default, b64toBlob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b64toBlob", function() { return b64toBlob; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Pages/LayoutPage */ "./src/Pages/LayoutPage.js");
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\ScreenRecordShower.js";





class ScreenRecordShower extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(arg) {
    super(arg);
    this.state = {
      videoData: []
    };
  }

  videoElementRef(e) {
    //debugger;
    console.log(e);
  }

  componentDidMount() {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].ScreenRecordShower = this;
  }

  componentWillUnmount() {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].ScreenRecordShower = null;
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
      style: {
        display: this.state.currentShowingPart ? null : 'none'
      },
      ref: node => this.videoElem = node,
      controls: true,
      id: "videoElem",
      src: this.state.currentShowingPart,
      width: 350,
      height: 350,
      onEnded: () => {
        this.videoPartEnd();
      },
      autoPlay: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }
    }));
  }

  screenRecordSaveCallback(res) {
    if (!res || !res.Content || !res.Content.buffer) {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_1__["_showError"])("ویدئو برگشتی فرمت صحیح ندارد");

      return;
    }

    let base64 = btoa(res.Content.buffer);
    let blob = b64toBlob(base64, 'video/webm');
    this.state.videoData.push(blob);
    this.showNextPart();
  }

  videoPartEnd() {//debugger;

    /* this.setState({currentShowingPart:null })*/

    /* this.showNextPart();*/
  }

  makeBlobAndShow(blob) {
    let blobUrl = URL.createObjectURL(blob);
    let blobUrl2 = URL.revokeObjectURL(blob);
    const videoElem = this.videoElem; // برای اولین بار نال است

    if (videoElem) {
      // blobUrl= URL.revokeObjectURL(blobUrl)
      let lastTime = this.videoElem.currentTime ? this.videoElem.currentTime : 0; //videoElem.src=blobUrl;

      videoElem.load();
      videoElem.currentTime = lastTime;
      videoElem.play();
    }

    return blobUrl;
  }

  showNextPart() {
    let wholeVideoBlob = new Blob(this.state.videoData, {
      'type': 'video/webm'
    });
    this.setState({
      lastStopTime: this.videoElem.currentTime
    });
    let blob = this.makeBlobAndShow(wholeVideoBlob);
    this.setState({
      currentShowingPart: blob
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ScreenRecordShower);
const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);
    const byteNumbers = new Array(slice.length);

    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, {
    type: contentType
  });
  return blob;
};

/***/ }),

/***/ "./src/Components/ScreenRecordShowerSendRequest.js":
/*!*********************************************************!*\
  !*** ./src/Components/ScreenRecordShowerSendRequest.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ScreenRecordShower__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScreenRecordShower */ "./src/Components/ScreenRecordShower.js");
/* harmony import */ var _SendFromHelpDeskModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SendFromHelpDeskModal */ "./src/Components/SendFromHelpDeskModal.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var primereact_progressspinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/progressspinner */ "./node_modules/primereact/progressspinner.js");
/* harmony import */ var primereact_progressspinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_progressspinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Help/DataHolder */ "./src/Help/DataHolder.js");
/* harmony import */ var _Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Pages/LayoutPage */ "./src/Pages/LayoutPage.js");
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Table */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var _ShowMyScreen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ShowMyScreen */ "./src/Components/ShowMyScreen.js");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/myStyle.css */ "./src/styles/myStyle.css");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_myStyle_css__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\ScreenRecordShowerSendRequest.js";












class ScreenRecordShowerSendRequest extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(ar) {
    super(ar);
    this.state = {};
    _Help_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ScreenRecordShowerSendRequest = this;
  }

  screenRecordCustomerCloseCallback(res) {
    if (!res || !res.Content) {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["_showError"])('screenRecordCustomerCloseCallback res is null');

      return;
    }

    this.help(res);
    this.setState({
      errColor: 'darkred'
    });
    _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.IsAcceptedToScreenRecord = null;
    this.setState({
      tmp: Math.random()
    });
  }

  screenRecordAccessRequestSuccessCallback(res) {
    this.setState({
      msg: res.Content
    });
    this.setState({
      errColor: 'green'
    });

    if (!res || !res.Content) {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["_showError"])('res is null');

      return;
    }

    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer) {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["_showError"])('هیج بازدیدکننده ای انتخاب نشده است لطفا ابتدا یک بازدیدکننده را انتخاب نمایید');

      return;
    }

    setTimeout(() => {
      this.setState({
        msg: null
      });
    }, 1000);
    _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.IsAcceptedToScreenRecord = true;
    this.setState({
      tmp: Math.random()
    });
  }

  help(res) {
    if (!res || !res.Content) {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["_showError"])('res is null');

      return;
    }

    this.setState({
      err: res.Content
    });
  }

  screenRecordAccessRequestFailCallback(res) {
    this.help(res);
    this.setState({
      errColor: 'darkred'
    });
  }

  componentWillUnmount() {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_0__["MyCaller"].Send('ScreenRecordAdminClose', {
      customerId: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.Id
    });
    this.setState({
      err: null,
      msg: null
    });
  }

  componentDidMount() {
    _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.IsAcceptedToScreenRecord = null;
  }

  sendRequest() {
    this.setState({
      sent: true
    });
    _Help_Socket__WEBPACK_IMPORTED_MODULE_0__["MyCaller"].Send('ScreenRecordAccessRequest', {
      customerId: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.Id
    });
  }

  render() {
    if (this.state.err) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        style: {
          color: this.state.errColor
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 23
        }
      }, this.state.err), this.state.errColor === 'green' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(primereact_progressspinner__WEBPACK_IMPORTED_MODULE_5__["ProgressSpinner"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }
      }));
    }

    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 20
        }
      }, "\u0647\u06CC\u062C \u0628\u0627\u0632\u062F\u06CC\u062F\u06A9\u0646\u0646\u062F\u0647 \u0627\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A \u0644\u0637\u0641\u0627 \u0627\u0628\u062A\u062F\u0627 \u06CC\u06A9 \u0628\u0627\u0632\u062F\u06CC\u062F\u06A9\u0646\u0646\u062F\u0647 \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0645\u0627\u06CC\u06CC\u062F");
    }

    if (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.IsAcceptedToScreenRecord === false) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        style: {
          fontSize: '18px'
        },
        className: "fa fa-frown-o",
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 17
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 17
        }
      }, "\u06A9\u0627\u0631\u0628\u0631 \u0627\u062C\u0627\u0632\u0647 \u0646\u0645\u0627\u06CC\u0634 \u0645\u0627\u0646\u06CC\u062A\u0648\u0631 \u0631\u0627 \u0646\u062F\u0627\u062F"));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 13
      }
    }, !this.state.sent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "fa fa-television bigIcon",
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_8__["default"], {
      striped: true,
      bordered: true,
      hover: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 29
      }
    }, "\u0646\u0645\u0627\u06CC\u0634 \u0635\u0641\u062D\u0647 \u06A9\u0627\u0631\u0628\u0631"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 29
      }
    }, "\u0627\u0631\u0633\u0627\u0644 \u0635\u0641\u062D\u0647 \u0634\u0645\u0627"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 33
      }
    }, "\u0627\u0631\u0633\u0627\u0644 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u062C\u0627\u0632\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0628\u0631\u0627\u06CC \u0646\u0645\u0627\u06CC\u0634 \u0635\u0641\u062D\u0647 \u0645\u0627\u0646\u06CC\u062A\u0648\u0631 \u0627\u0648"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: 'success',
      onClick: () => {
        this.sendRequest();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "fa fa-user-circle bigIcon",
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 37
      }
    }), "\u0627\u0631\u0633\u0627\u0644 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0645\u062C\u0648\u0632")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 33
      }
    }, "\u0627\u0634\u062A\u0631\u0627\u06A9 \u06AF\u0630\u0627\u0631\u06CC \u06CC\u06A9\u06CC \u0627\u0632 \u0635\u0641\u062D\u0627\u062A \u0645\u0631\u0648\u0631\u06AF\u0631 \u06CC\u0627 \u06A9\u0644 \u0635\u0641\u062D\u0647 \u0645\u0627\u0646\u06CC\u062A\u0648\u0631 \u0634\u0645\u0627"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: 'success',
      onClick: () => {
        this.showMyMonitor();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "fa fa-paper-plane-o bigIcon",
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 37
      }
    }), "\u0634\u0631\u0648\u0639 \u0627\u0634\u062A\u0631\u0627\u06A9 \u06AF\u0630\u0627\u0631\u06CC  ")))))), !_Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.IsAcceptedToScreenRecord && this.state.sent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 21
      }
    }, "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u0631\u0633\u0627\u0644 \u0634\u062F \u060C \u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 \u062A\u0627\u06CC\u06CC\u062F \u06A9\u0627\u0631\u0628\u0631"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(primereact_progressspinner__WEBPACK_IMPORTED_MODULE_5__["ProgressSpinner"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 21
      }
    })), this.state.showMyScreen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ShowMyScreen__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 1
      }
    }), !this.state.showMyScreen && _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.IsAcceptedToScreenRecord && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, this.state.msg && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      style: {
        color: this.state.errColor
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 40
      }
    }, this.state.msg), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ScreenRecordShower__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 21
      }
    })));
  }

  showMyMonitor() {
    _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].selectedCustomer.IsAcceptedToScreenRecord = true;
    this.setState({
      showMyScreen: true,
      sent: true
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ScreenRecordShowerSendRequest);

/***/ }),

/***/ "./src/Components/SendFromHelpDesk.js":
/*!********************************************!*\
  !*** ./src/Components/SendFromHelpDesk.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/dialog */ "./node_modules/primereact/dialog.js");
/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primereact_dialog__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/column */ "./node_modules/primereact/column.js");
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_column__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/datatable */ "./node_modules/primereact/datatable.js");
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_datatable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button.js");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/inputtext */ "./node_modules/primereact/inputtext.js");
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Pages/LayoutPage */ "./src/Pages/LayoutPage.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\SendFromHelpDesk.js";










class SendFromHelpDesk extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["MyCaller"].Send('GetSocialChannelsInfo');
    this.setState({
      loading: true
    });

    Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["_showMsg"])("خواندن تنظیمات مرکز پشتیبانی");
  }

  getSocialChannelsInfoCallback(res) {
    if (!res || !res.Content) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].LayoutPage.showError('اطلاعات بازگشتی خالی است');
      return;
    }

    Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["_showMsg"])("تنظیمات دریافت شد");

    this.setState({
      email: res.Content.email,
      telegram: res.Content.telegram,
      whatsapp: res.Content.whatsapp,
      helpDeskApi: res.Content.helpDeskApi,
      helpDeskUrlLink: res.Content.helpDeskUrlLink
    });

    Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["_showMsg"])("خواندن مقالات مرکز پشتیبانی");

    fetch(res.Content.helpDeskApi).then(re => re.json()).then(re => {
      this.setState({
        products: re.array
      });
      this.setState({
        loading: false
      });

      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["_showMsg"])("اطلاعات رسید");
    }).catch(e => {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["_showError"])('خطایی در درخواست اطلاعات help desk بوجود آمد');

      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["_showError"])(e);
    });
  }

  onSearch() {
    // _showMsg("خواندن مقالات از مرکز پشتیبانی")
    this.setState({
      loading: true
    });
    let filter = this.state.globalFilter ? this.state.globalFilter : '';
    fetch(this.state.helpDeskApi + "?searchTerm=" + filter).then(re => re.json()).then(re => {
      this.setState({
        products: re.array
      });
      this.setState({
        loading: false
      }); // _showMsg("اطلاعات رسید")
    }).catch(e => {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["_showError"])('خطایی در درخواست اطلاعات help desk بوجود آمد');

      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["_showError"])(e);
    });
  }

  constructor(re) {
    super(re);
    this.state = {
      products: [
        /*            {title:'code',id:Math.random(),url:'http://localhost:60518/'},
                    {title:'code',id:Math.random(),url:'http://localhost:60518/'},
                    {title:'code',id:Math.random(),url:'http://localhost:60518/'},
                    {title:'code',id:Math.random(),url:'http://localhost:60518/'},
                    {title:'code',id:Math.random(),url:'http://localhost:60518/'},
                    {title:'code',id:Math.random(),url:'http://localhost:60518/'},
                    {title:'code',id:Math.random(),url:'http://localhost:60518/'},
                    {title:'code',id:Math.random(),url:'http://localhost:60518/'},
                    {title:'code',id:Math.random(),url:'http://localhost:60518/'},
                    {title:'code',id:Math.random(),url:'http://localhost:60518/'},
                    {title:'code',id:Math.random(),url:'http://localhost:60518/'},
                    {title:'code',id:Math.random(),url:'http://localhost:60518/'},
                    {title:'code',id:Math.random(),url:'http://localhost:60518/'},
                    {title:'code',id:Math.random(),url:'http://localhost:60518/'},*/
      ]
    };
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].SendFromHelpDesk = this;
  }

  preViewPage(link) {
    this.setState({
      preview: true,
      previewUrl: link
    });
  }

  statusBodyTemplate(rowData) {
    if (this.props.actionButtons) {
      return this.props.actionButtons(rowData);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 18
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      label: "\u0645\u0634\u0627\u0647\u062F\u0647",
      icon: 'pi pi-eye',
      className: "p-button-primary",
      onClick: () => {
        _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].SendFromHelpDesk.preViewPage(rowData.link);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      label: "\u0627\u0631\u0633\u0627\u0644",
      icon: 'pi pi-reply',
      className: "p-button-info",
      onClick: () => {
        if (_Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].ChatPage) {
          _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].ChatPage.addChat({
            Message: `
                        
                        <a onclick="gapHelpDeskLinkOpener('${rowData.link}')">${rowData.title}</a>
                        `,
            IsReceive: false
          });
        } else {
          Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["_showError"])('در صفحه چت نیستید');
        }

        if (_Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].SendFromHelpDeskModal) {
          _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].SendFromHelpDeskModal.hide();
        } else {
          Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["_showError"])('مدال یافت نشد');
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      label: "\u0627\u0646\u062A\u062E\u0627\u0628",
      icon: 'pi pi-pencil',
      className: "p-button-info",
      onClick: () => {
        if (_Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].ChatPage) {
          _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].ChatForm.addText(`
                        
                        <a onclick="GapSelectFromHelpDesk('${rowData.link}')">${rowData.title}</a>
                        `);
        } else {
          Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["_showError"])('در صفحه چت نیستید');
        }

        if (_Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].SendFromHelpDeskModal) {
          _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].SendFromHelpDeskModal.hide();
        } else {
          Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["_showError"])('مدال یافت نشد');
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 13
      }
    }));
  }

  render() {
    const header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "table-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "p-input-icon-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "pi pi-search",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_inputtext__WEBPACK_IMPORTED_MODULE_6__["InputText"], {
      type: "search",
      onInput: e => {
        this.setState({
          globalFilter: e.target.value
        });
        this.onSearch();
      },
      placeholder: "\u062C\u0633\u062A\u062C\u0648...",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 21
      }
    })));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 13
      }
    }, this.state.loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Spinner"], {
      animation: "border",
      role: "status",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "sr-only",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 21
      }
    }, "\u062F\u0631 \u062D\u0627\u0644 \u062E\u0648\u0627\u0646\u062F\u0646 \u0627\u0637\u0644\u0627\u0639\u0627\u062A...")), this.state.products && this.state.products.length == 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 17
      }
    }, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A\u06CC \u06CC\u0627\u0641\u062A \u0646\u0634\u062F"), this.state.preview && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      label: "\u0628\u0627\u0632\u06AF\u0634\u062A",
      icon: 'pi pi-times',
      className: "p-button-rounded p-button-secondary",
      onClick: () => {
        this.setState({
          preview: false
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 5
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 5
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
      src: this.state.previewUrl,
      style: {
        width: '100%',
        height: '100vh'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 5
      }
    })), !this.state.preview && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTable"], {
      header: header,
      rows: 10,
      selection: this.state.selectedProduct1,
      onSelectionChange: e => this.setState({
        selectedProduct1: e.value
      }),
      selectionMode: "single",
      dataKey: "Id",
      paginator: true,
      value: this.state.products,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_column__WEBPACK_IMPORTED_MODULE_3__["Column"], {
      field: "title",
      header: "\u0639\u0646\u0648\u0627\u0646 \u0645\u0642\u0627\u0644\u0647",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_column__WEBPACK_IMPORTED_MODULE_3__["Column"], {
      field: "inventoryStatus",
      header: "\u062C\u0633\u062A\u062C\u0648",
      body: b => this.statusBodyTemplate(b),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 21
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SendFromHelpDesk);

/***/ }),

/***/ "./src/Components/SendFromHelpDeskModal.js":
/*!*************************************************!*\
  !*** ./src/Components/SendFromHelpDeskModal.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button.js");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/dialog */ "./node_modules/primereact/dialog.js");
/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SendFromHelpDesk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SendFromHelpDesk */ "./src/Components/SendFromHelpDesk.js");
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/datatable */ "./node_modules/primereact/datatable.js");
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_datatable__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\SendFromHelpDeskModal.js";







class PrimengModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      displayBasic: false,
      displayBasic2: false,
      displayModal: false,
      displayConfirmation: false,
      displayMaximizable: false,
      displayPosition: false,
      position: 'center'
    };
    this.onClick = this.onClick.bind(this);
    this.onHide = this.onHide.bind(this);

    if (this.props.currName) {
      if (!_Help_Socket__WEBPACK_IMPORTED_MODULE_4__["CurrentUserInfo"].Modals) {
        _Help_Socket__WEBPACK_IMPORTED_MODULE_4__["CurrentUserInfo"].Modals = [];
      }

      _Help_Socket__WEBPACK_IMPORTED_MODULE_4__["CurrentUserInfo"].Modals[this.props.currName] = this;
    } else {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_4__["CurrentUserInfo"].SendFromHelpDeskModal = this;
    }
  }

  renderFooter(name) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_button__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      label: "\u0644\u063A\u0648",
      icon: "pi pi-times",
      onClick: () => this.onHide(name),
      className: "p-button-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }), this.state.ok && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_button__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      label: "\u062A\u0627\u06CC\u06CC\u062F",
      icon: "pi pi-check",
      onClick: () => this.onHide(name),
      autoFocus: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 35
      }
    }));
  }

  onHide(name) {
    this.setState({
      [`${name}`]: false
    });
  }

  onClick(name, position) {
    let state = {
      [`${name}`]: true
    };

    if (position) {
      state = { ...state,
        position
      };
    }

    this.setState(state);
  }

  hide() {
    this.onHide('displayBasic');
  }

  show() {
    this.onClick('displayBasic');
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_dialog__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
      maximizable: true,
      modal: true,
      header: this.props.title,
      visible: this.state.displayBasic,
      style: {
        width: '80vw'
      },
      footer: this.renderFooter('displayBasic'),
      onHide: () => this.onHide('displayBasic'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }
    }, this.props.children));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PrimengModal);

/***/ }),

/***/ "./src/Components/ShowMyScreen.js":
/*!****************************************!*\
  !*** ./src/Components/ShowMyScreen.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Pages/LayoutPage */ "./src/Pages/LayoutPage.js");
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Spinner */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Help/DataHolder */ "./src/Help/DataHolder.js");
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Help/Socket */ "./src/Help/Socket.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\ShowMyScreen.js";






class ShowMyScreen extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      msg: '\n' + '                در انتظار تایید دسترسی به اسکرین لطفا منتظر بمانید\n' + '            '
    };
  }

  componentDidMount() {
    this.ScreenRecordAdminShareRequest();
    _Help_Socket__WEBPACK_IMPORTED_MODULE_4__["CurrentUserInfo"].ShowMyScreen = this;
  } //todo


  ScreenRecordAdminShareRequest() {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_4__["MyCaller"].Send('ScreenRecordAdminShareRequest', {
      customerId: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].selectedCustomer.Id
    });
  } //todo


  screenRecordAdminShareRequestCallback(res) {
    if (!res || !res.Content) {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_1__["_showError"])('screenRecordAdminShareRequestCallback res  is null');

      return;
    }

    this.setState({
      chatId: res.Content.chatId
    });
    VIDEO_CALL_INIT(this, (parent, msg, err) => {
      parent.setState({
        msg: msg,
        err: err
      });
    }, res.Content.chatId);
  }

  screenRecordAdminShareOpenByCustomer(res) {
    //todo
    //VIDEO_CALL_STOP(this.state.chatId);
    //  _showConstantMsg(null)
    Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_1__["_showMsg"])('کاربر صفحه مانیتور آنلاین شما را باز کرد');
  }

  screenRecordAdminShareCloseByCustomer(res) {
    //todo
    //VIDEO_CALL_STOP(this.state.chatId);
    //  _showConstantMsg(null)
    Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_1__["_showError"])('کاربر صفحه مانیتور آنلاین شما را بست');
  }

  componentWillUnmount() {
    //todo
    _Help_Socket__WEBPACK_IMPORTED_MODULE_4__["MyCaller"].Send('ScreenRecordAdminShareClose', {
      targetCustomerId: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].selectedCustomer.Id,
      chatId: this.state.chatId
    });
  }

  render() {
    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].selectedCustomer) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: 'text-danger',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 20
        }
      }, "\u06A9\u0627\u0631\u0628\u0631\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }
    }, this.state.err && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        color: 'darkred'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }
    }, this.state.msg), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
      animation: "grow",
      variant: "info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }), !this.state.err && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        color: 'green'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }
    }, this.state.msg));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ShowMyScreen);
/*VIDEO_CALL :*/

let videoElem;
let mediaSource;
let chunks = [];
let mediaRecorder;
let captureStream;

function configStream() {
  /*   let blob = new Blob(buffer, { 'type' : 'video/webm' });
                 let audioURL = window.URL.createObjectURL(blob);
                 */
  videoElem.captureStream();
}
/*VOICE CALL END*/


function VIDEO_CALL_STOP(chatId) {
  try {
    mediaRecorder.stop();
  } catch (e) {//ingore
  }

  console.log(mediaRecorder.state);
  console.log("recorder stopped");
  captureStream.getTracks().forEach(track => track.stop());
  /*MyCaller.Send('ScreenRecordCustomerClose', {myAccountId: CurrentUserInfo.targetId,
      msg:msg});*/

  _Help_Socket__WEBPACK_IMPORTED_MODULE_4__["MyCaller"].Send('ScreenRecordAdminShareClose', {
    targetCustomerId: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].selectedCustomer.Id,
    chatId: chatId
  });
}

function setRecordVideo() {}

function VIDEO_CALL_INIT(THIS, callback, chatId) {
  if (navigator.mediaDevices.getDisplayMedia) {
    console.log('getUserMedia supported.');
    var constraints = {
      video: {
        cursor: "always"
      },
      audio: false
    };

    let onSuccess = function (stream) {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_1__["_showConstantMsg"])('در حال ارسال صفحه مرورگر انتخابی خود هستید', null, () => {
        VIDEO_CALL_STOP(chatId);

        Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_1__["_showConstantMsg"])(null);
      });

      setRecordVideo();
      captureStream = stream;
      debugger;
      callback(THIS, 'اجازه دسترسی داده شد'); //debugger;

      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start(3000); //videoElem.srcObject=stream;

      console.log(mediaRecorder.state);

      mediaRecorder.ondataavailable = function (e) {
        new Promise(resolve => {
          const fileReader = new FileReader();
          fileReader.addEventListener("loadend", () => {
            //debugger
            // videoElem.src=fileReader.result;

            /*  var dataUrl = fileReader.result;
              var base64 = dataUrl.split(',')[1];*/
            resolve(fileReader.result);
          });
          fileReader.readAsBinaryString(e.data);
        }).then(function (buffer) {
          //todo
          _Help_Socket__WEBPACK_IMPORTED_MODULE_4__["MyCaller"].Send('ScreenRecordAdminShare', {
            targetCustomerId: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].selectedCustomer.Id,
            chatId: chatId,
            buffer
          });
        });
        chunks.push(e.data);
      };
    };

    let onError = function (err) {
      callback(THIS, 'اجازه دسترسی داده نشد', err);
      console.error('The following error occured: ' + err);
    };

    navigator.mediaDevices.getDisplayMedia(constraints).then(onSuccess, onError);
  } else {
    callback(THIS, 'این امکان در مرورگر شما پشتیبانی نمی شود');
    alert('این امکان در مرورگر شما پشتیبانی نمی شود');
    console.error('getUserMedia not supported on your browser!');
  }

  window.onresize = function () {//canvas.width = mainSection.offsetWidth;
  };

  window.onresize();
}
/*VOICE CALL:*/

/*

export function onTheFlyVideoRunning(){
    
    CurrentUserInfo.onTheFlyVideoRunning=this;
    
    return <div style="position: fixed;
    /!* width: 200px; *!/
    /!* height: 200px; *!/
    top: 55vh;
    left: 10vh;
    background-color: #f8f9fa;
    padding: 20px;
}">
        <p>صفحه مانیتور شما در حال نمایش برای پشتیبانی است</p>

        <video autoPlay id="gapOnlineVideo" width="200" height="200">

        </video>

        <button className="gapMainColor "
                style="background-color: lightgrey;padding: 5px;border-radius: 3px 3px 3px 3px ;border:none"
                onClick="VIDEO_CALL_STOP(this,'توسط کاربر بسته شد');setMsg(this,'توسط کاربر بسته شد',null,false)">لغو
            نمایش
        </button>

        <button className="gapMainColor GAP_VIDEO_CALL_STOP" style="display: none"
                onClick="VIDEO_CALL_STOP(this,'توسط پشتیبانی بسته شد');setMsg(this,'توسط پشتیبانی بسته شد',null,false)"></button>
    </div>;
}*/

/***/ }),

/***/ "./src/Components/SubMenu.js":
/*!***********************************!*\
  !*** ./src/Components/SubMenu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubMenu; });
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Help/DataHolder */ "./src/Help/DataHolder.js");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/myStyle.css */ "./src/styles/myStyle.css");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_myStyle_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Menu */ "./src/Components/Menu.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\SubMenu.js";







class SubMenu extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(arg) {
    super(arg);
    this.state = {
      onlyOfflineChecked: false
    };
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].SubMenu = this;
  }

  OnlyOfflines(e) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].gapIsOnlyOnly = !this.state.onlyOfflineChecked;
    this.setState({
      onlyOfflineChecked: !this.state.onlyOfflineChecked
    });
    if (_Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].OnlineCustomerListHolder) _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].OnlineCustomerListHolder.GetClientsListForAdmin();
  }

  setPage(page) {
    _Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].selectedCustomer = null;
    _Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].currentPage = 'CustomerList';
    _Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].filterType = page;
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].LayoutPage.setState({
      temp: Math.random()
    });
    this.setState({
      temp: Math.random()
    });
  }

  totalUserCountsChangedCallback(res) {
    /* if(!res || !res.Content.TotalWaitingForAnswerCount || !res.Content.NotChattedCount)
    {
    console.error(res);
    CurrentUserInfo.LayoutPage.showError('totalUserCountsChangedCallback error')
    return;
    }*/
    this.setState({
      TotalNewChatReceived: res.Content.TotalNewChatReceived,
      TotalWaitingForAnswerCount: res.Content.TotalWaitingForAnswerCount,
      NotChattedCount: res.Content.NotChattedCount
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "onMobile",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["ButtonGroup"], {
      variant: "light",
      "aria-label": "Basic example",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "light",
      className: "btn btn-default " + (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].currentPage === "CustomerList" && _Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].filterType === "SepratePerPage" ? " bg-primary text-white " : ""),
      onClick: () => {
        this.setPage('SepratePerPage');
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 19
      }
    }, "\u0628\u0631 \u0627\u0633\u0627\u0633 \u0635\u0641\u062D\u0647 \u0647\u0627"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "light",
      className: "btn btn-default " + (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].currentPage === "CustomerList" && _Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].filterType === "NotChatted" ? " bg-primary text-white " : ""),
      onClick: () => {
        this.setPage("NotChatted");
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_5__["ShowPlusCount"], {
      Count: this.state.NotChattedCount,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 23
      }
    }, "              \u0628\u062F\u0648\u0646 \u06AF\u0641\u062A\u06AF\u0648")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "light",
      className: "btn btn-default " + (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].currentPage === "CustomerList" && _Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].filterType === "Answered" ? " bg-primary text-white " : ""),
      onClick: () => {
        this.setPage('Answered');
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_5__["ShowPlusCount"], {
      Count: this.state.TotalAnswered,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 23
      }
    }), "\u067E\u0627\u0633\u062E \u062F\u0627\u062F\u0647 \u0634\u062F\u0647"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "light",
      className: "btn btn-default " + (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].currentPage === "CustomerList" && _Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].filterType === "WaitingForAnswer" ? " bg-primary text-white " : ""),
      onClick: () => {
        this.setPage("WaitingForAnswer");
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 19
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_5__["ShowPlusCount"], {
      Count: this.state.TotalWaitingForAnswerCount,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 23
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 23
      }
    }, "              \u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 \u067E\u0627\u0633\u062E"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "onDesktop",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Dropdown"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Dropdown"].Toggle, {
      variant: "default",
      id: "dropdown-basic",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 15
      }
    }, "..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Dropdown"].Menu, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 15
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Dropdown"].Item, {
      onClick: () => {
        this.setPage("AllCustomerListPage");
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }
    }, " \u062A\u0645\u0627\u0645\u06CC \u0645\u0631\u0627\u062C\u0639\u0647 \u06A9\u0646\u0646\u062F\u06AF\u0627\u0646 \u0633\u0627\u06CC\u062A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Dropdown"].Item, {
      onClick: () => {
        this.setPage("NotChattedLeftCustomerListPage");
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }
    }, " \u06A9\u0627\u0631\u0628\u0631\u0627\u0646\u06CC \u06A9\u0647 \u0628\u062F\u0648\u0646 \u062F\u0631\u06CC\u0627\u0641\u062A \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0633\u0627\u06CC\u062A \u0631\u0627 \u062A\u0631\u06A9 \u06A9\u0631\u062F\u0647 \u0627\u0646\u062F "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Dropdown"].Item, {
      onClick: () => {
        this.setPage("ChattedAndReturnedCustomerListPage");
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }
    }, " \u0628\u0639\u062F \u0627\u0632 \u062F\u0631\u06CC\u0627\u0641\u062A \u067E\u0634\u062A\u06CC\u0628\u0627\u0646\u06CC \u0645\u062C\u062F\u062F\u0627 \u0628\u0647 \u0633\u0627\u06CC\u062A \u0628\u0627\u0632\u06AF\u0634\u062A\u0647 \u0627\u0646\u062F")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "light",
      className: "btn btn-default " + (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].currentPage === "CustomerList" && _Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].filterType === "SepratePerPage" ? " bg-primary text-white " : ""),
      onClick: () => {
        this.setPage('SepratePerPage');
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 13
      }
    }, "\u0628\u0631 \u0627\u0633\u0627\u0633 \u0635\u0641\u062D\u0647 \u0647\u0627")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
      controlId: "formBasicCheckbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Check, {
      checked: this.state.onlyOfflineChecked,
      type: "checkbox",
      label: "\u0641\u0642\u0637 \u0622\u0641\u0644\u0627\u06CC\u0646 \u0647\u0627",
      onChange: () => {
        this.OnlyOfflines();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 11
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "light",
      className: "btn btn-default " + (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].currentPage === "CustomerList" && _Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].filterType === "NotChatted" ? " bg-primary text-white " : ""),
      onClick: () => {
        this.setPage("NotChatted");
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_5__["ShowPlusCount"], {
      Count: this.state.NotChattedCount,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 1
      }
    }, "              \u0628\u062F\u0648\u0646 \u06AF\u0641\u062A\u06AF\u0648"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "light",
      className: "btn btn-default " + (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].currentPage === "CustomerList" && _Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].filterType === "Answered" ? " bg-primary text-white " : ""),
      onClick: () => {
        this.setPage('Answered');
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_5__["ShowPlusCount"], {
      Count: this.state.TotalAnswered,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 17
      }
    }), "\u067E\u0627\u0633\u062E \u062F\u0627\u062F\u0647 \u0634\u062F\u0647")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "light",
      className: "btn btn-default " + (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].currentPage === "CustomerList" && _Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].filterType === "WaitingForAnswer" ? " bg-primary text-white " : ""),
      onClick: () => {
        this.setPage("WaitingForAnswer");
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_5__["ShowPlusCount"], {
      Count: this.state.TotalWaitingForAnswerCount,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 17
      }
    }, "              \u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 \u067E\u0627\u0633\u062E"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 9
      }
    }));
  }

}

/***/ }),

/***/ "./src/Components/TagList.js":
/*!***********************************!*\
  !*** ./src/Components/TagList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TagList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var _AddTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddTag */ "./src/Components/AddTag.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Help/DataHolder */ "./src/Help/DataHolder.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\TagList.js";





class TagList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(args) {
    super(args);
    this.state = {
      list: []
    };
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].TagList = this;
  }

  getTagsCallback(res) {
    if (!res || !res.Content || !res.Content.EntityList) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError('دیتای خوانده شده برای برچسب ها نال است');
      return;
    }

    this.getAllTagsForCurrentAdminCallback(res);
  }

  getAllTagsForCurrentAdmin() {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showMsg('در حال خواندن برچسب ها');
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send("GetAllTagsForCurrentAdmin");
  }

  componentWillMount() {
    this.getAllTagsForCurrentAdmin();
    /*
    
        let chat = {
          Message: "با سلام خوش آمدید",
        };
        let chats = [];
        chats.push(chat);
    
        let arr = [];
    
        let addres = "Tehran,Tehran";
        arr.push({
          Name: "کاربر آنلاین",
          Message: "با سلام خوش آمدید",
          Time: "5 دقیقه قبل",
          Address: addres,
        });
        arr.push({
          Name: "کاربر آنلاین",
          Message: "با سلام خوش آمدید",
          Time: "5 دقیقه قبل",
          Address: addres,
        });
        arr.push({
          Name: "کاربر آنلاین",
          Message: "با سلام خوش آمدید",
          Time: "5 دقیقه قبل",
          Address: addres,
        });
        arr.push({
          Name: "کاربر آنلاین",
          Message: "با سلام خوش آمدید",
          Time: "5 دقیقه قبل",
          Address: addres,
        });
        arr.push({
          Name: "کاربر آنلاین",
          Message: "با سلام خوش آمدید",
          Time: "5 دقیقه قبل",
          Address: addres,
        });
        arr.push({
          Name: "کاربر آنلاین",
          Message: "با سلام خوش آمدید",
          Time: "5 دقیقه قبل",
          Address: addres,
        });
        arr.push({
          Name: "کاربر آنلاین",
          Message: "با سلام خوش آمدید",
          Time: "5 دقیقه قبل",
          Address: addres,
        });
        arr.push({
          Name: "کاربر آنلاین",
          Message: "با سلام خوش آمدید",
          Time: "5 دقیقه قبل",
          Address: addres,
        });
        arr.push({
          Name: "کاربر آنلاین",
          Message: "با سلام خوش آمدید",
          Time: "5 دقیقه قبل",
          Address: addres,
        });
        arr.push({
          Name: "کاربر آنلاین",
          Message: "با سلام خوش آمدید",
          Time: "5 دقیقه قبل",
          Address: addres,
        });
        arr.push({
          Name: "کاربر آنلاین",
          Message: "با سلام خوش آمدید",
          Time: "5 دقیقه قبل",
          Address: addres,
        });
    
        this.setState({ list: arr });*/
  }

  getAllTagsForCurrentAdminCallback(res) {
    if (!res || !res.Content || !res.Content.EntityList) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError("دیتای بازگشتی برای برچسب ها نال است");
      return;
    }

    this.setState({
      tags: res.Content.EntityList
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddTag__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroup"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 17
      }
    }, _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].NewTagModeEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 25
      }
    }, "\u062C\u0647\u062A \u0628\u0631\u0686\u0633\u0628 \u0632\u062F\u0646 \u0628\u0647 \u06A9\u0627\u0631\u0628\u0631 \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0645\u0627\u06CC\u06CC\u062F :"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      variant: "primary",
      type: "button",
      onClick: () => {
        this.saveSelectedTagsForCustomer();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 25
      }
    }, "\u062B\u0628\u062A")), this.state.tags && this.state.tags.map((el, i, arr) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ListGroup"].Item, {
        key: el.Id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 33
        }
      }, !_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].NewTagModeEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        style: {
          float: 'left',
          backgroundColor: 'white',
          border: 'none'
        },
        type: "button",
        onClick: () => {
          this.deleteTagById(el.Id);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 41
        }
      }, "x"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        onClick: () => {
          this.getUsersByTagId(el.Id, el.Name);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 41
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        style: {
          fontSize: "14px",
          float: 'right'
        },
        className: "fa fa-tags",
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 45
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 45
        }
      }, el.Name))), _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].NewTagModeEnabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Group, {
        controlId: "formBasicCheckbox2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 41
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Form"].Check, {
        type: "checkbox",
        checked: el.checked,
        label: el.Name,
        onChange: e => {
          el.checked = e.target.checked;

          if (!_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedTags) {
            _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedTags = [];
          } // حذف از ارایه


          _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedTags = _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedTags.filter(f => f.Id !== el.Id);

          if (e.target.checked) {
            _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedTags.push(el.Id);
          }

          this.setState({
            tmp: Math.random()
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 45
        }
      })))));
    })));
  }

  saveSelectedTagsForCustomer() {
    if (!_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].NewTagModeCustomerId) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError('CurrentUserInfo.NewTagModeCustomerId is null');
      return;
    }

    if (!_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedTags || _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedTags.length == 0) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError('هیچ برچسبی انتخاب نشده است');
      return;
    }

    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showMsg('در حال ذخیره برچسب های انتخاب شده به کاربر');
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send("SetCurrentUserToTags", {
      tags: _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedTags,
      target: _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].NewTagModeCustomerId
    }); // بستن فرم برچسب ها

    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].NewTagModeEnabled = false;
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedTags = [];

    for (let i = 0; i < _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].TagList.state.tags.length; i++) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].TagList.state.tags[i].checked = false;
    }

    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].TagList.setState({
      tmp: Math.random()
    });
  }

  getUsersByTagId(tagId, tagName) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedTagId = tagId;
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedTagName = tagName;

    if (_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].OnlineCustomerListHolder) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].OnlineCustomerListHolder.GetClientsListForAdmin();
    }
  }

  deleteTagById(tagId) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showMsg('در حال حذف تگ');
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send("DeleteTagById", {
      tagId: tagId
    });
  }

  deleteTagByIdCallback(res) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showMsg('برچسب با موفقیت حذف شد'); // آپدیت لیست برچسب ها

    this.getAllTagsForCurrentAdmin(); // آپدیت لیست کاربران

    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].OnlineCustomerListHolder.GetClientsListForAdmin();
    if (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_4__["DataHolder"].selectedCustomer) _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send("GetUserAddedToTags", {
      target: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_4__["DataHolder"].selectedCustomer.Id
    });
  }

}

/***/ }),

/***/ "./src/Components/TagSingleCustomer.js":
/*!*********************************************!*\
  !*** ./src/Components/TagSingleCustomer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/myStyle.css */ "./src/styles/myStyle.css");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_myStyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Badge */ "./node_modules/react-bootstrap/esm/Badge.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\TagSingleCustomer.js";





class TagSingleCustomer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let isActive = _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].NewTagModeEnabled === this.props.customerId ? ' userTagBlue ' : ' df ';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_3__["default"], {
      "aria-label": "\u0686\u0633\u0628\u0627\u0646\u062F\u0646 \u0628\u0631\u0686\u0633\u0628 \u0628\u0647 \u06A9\u0627\u0631\u0628\u0631 \u060C \u0628\u0631\u0627\u06CC \u062F\u0633\u062A\u0647 \u0628\u0646\u062F\u06CC \u06A9\u0627\u0631\u0628\u0631\u0627\u0646 \u0645\u0641\u06CC\u062F \u0627\u0633\u062A",
      "data-microtip-position": "top",
      role: "tooltip",
      variant: 'info',
      onClick: () => {
        _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].NewTagModeCustomerId = this.props.customerId;

        if (_Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].NewTagModeEnabled) {
          _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].NewTagModeEnabled = !_Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].NewTagModeEnabled;
        } else {
          _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].NewTagModeEnabled = true;
        }

        _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].TagList.setState({
          tmp: Math.random()
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-tag " + isActive,
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 24
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: 'fa fa-plus',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 28
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TagSingleCustomer);

/***/ }),

/***/ "./src/Components/UserDeviceInfo.js":
/*!******************************************!*\
  !*** ./src/Components/UserDeviceInfo.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Help/DataHolder */ "./src/Help/DataHolder.js");
/* harmony import */ var react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Badge */ "./node_modules/react-bootstrap/esm/Badge.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\UserDeviceInfo.js";




class UserDeviceInfo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomer) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomer || !_Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomer.LastTrackInfo || !_Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomer.LastTrackInfo.Browser || !_Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomer.LastTrackInfo.OS) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }
    }, "\u062F\u0633\u062A\u06AF\u0627\u0647 \u06A9\u0627\u0631\u0628\u0631"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: 'fa fa-cloud',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 29
      }
    }), _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomer.LastTrackInfo.Browser), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: 'fa fa-browser',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 29
      }
    }), _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomer.LastTrackInfo.OS), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: 'fa fa-cloud',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 29
      }
    }), _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomer.LastTrackInfo.ip), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: 'fa fa-monitor',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 29
      }
    }), _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomer.LastTrackInfo.PageTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Badge__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: 'fa fa-time',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 29
      }
    }), _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomer.LastTrackInfo.Time))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UserDeviceInfo);

/***/ }),

/***/ "./src/Components/UserTags.js":
/*!************************************!*\
  !*** ./src/Components/UserTags.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CustomerTags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomerTags */ "./src/Components/CustomerTags.js");
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Help/DataHolder */ "./src/Help/DataHolder.js");
/* harmony import */ var _AddTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddTag */ "./src/Components/AddTag.js");
/* harmony import */ var _TagSingleCustomer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TagSingleCustomer */ "./src/Components/TagSingleCustomer.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _TagList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TagList */ "./src/Components/TagList.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\UserTags.js";








class UserTags extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }, "\u0628\u0631\u0686\u0633\u0628 \u0647\u0627\u06CC \u06A9\u0627\u0631\u0628\u0631"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TagSingleCustomer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      customerId: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer.Id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CustomerTags__WEBPACK_IMPORTED_MODULE_1__["default"], {
      customer: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].selectedCustomer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TagList__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 25
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UserTags);

/***/ }),

/***/ "./src/Components/VoiceCall.js":
/*!*************************************!*\
  !*** ./src/Components/VoiceCall.js ***!
  \*************************************/
/*! exports provided: voiceData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "voiceData", function() { return voiceData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Help/DataHolder */ "./src/Help/DataHolder.js");
/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/dialog */ "./node_modules/primereact/dialog.js");
/* harmony import */ var primereact_dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _VoiceCallRunner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VoiceCallRunner */ "./src/Components/VoiceCallRunner.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Spinner */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var _Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Pages/LayoutPage */ "./src/Pages/LayoutPage.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\VoiceCall.js";








let voiceData = [];

class VoiceCall extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      type: 'callToUser'
    };
  }

  componentDidMount() {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_5__["CurrentUserInfo"].VoiceCall = this;
    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomerForCall) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    this.onClick('displayPosition', 'bottom-right');
  }

  show() {
    this.onClick('displayPosition', 'bottom-right');
  }

  render() {
    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomerForCall) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_dialog__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
      rtl: true,
      modal: false,
      header: "\u0628\u0631\u0642\u0631\u0627\u0631\u06CC \u062A\u0645\u0627\u0633 \u0635\u0648\u062A\u06CC  ",
      visible: this.state.displayPosition,
      position: this.state.position,
      style: {
        width: '30vw'
      },
      onHide: () => this.onHide('displayPosition'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }
    }, this.state.type === 'callToUser' && this.callToUser(), this.state.type === 'userCalling' && this.userCalling(), this.state.type === 'openSpeak' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_VoiceCallRunner__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 57
      }
    }), this.state.type === 'error' && this.showError(), this.state.type === 'callRequestFromCustomer' && this.callRequestFromCustomer(), this.state.anotherCallIsWaiting && this.anotherCallIsWaitings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_dialog__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
      rtl: true,
      modal: false,
      header: "\u0628\u0631\u0642\u0631\u0627\u0631\u06CC \u062A\u0645\u0627\u0633 \u0635\u0648\u062A\u06CC  ",
      visible: this.state.isAnotherCallCome,
      position: 'bottom-left',
      style: {
        width: '30vw'
      },
      onHide: () => this.setState({
        isAnotherCallCome: false
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }
    }, this.state.isAnotherCallCome && this.showAnotherCallCome()));
  }

  showError() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        color: 'red'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }
    }, this.state.error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      style: {
        color: 'red'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }
    }, this.state.techError));
  }

  onClick(name, position) {
    let state = {
      [`${name}`]: true
    };

    if (position) {
      state = { ...state,
        position
      };
    }

    this.setState(state);
  }
  /*<i class="fa fa-microphone" aria-hidden="true"></i>
  <i class="fa fa-headphones" aria-hidden="true"></i>
  */


  callToUser() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }
    }, "\u0627\u0628\u062A\u062F\u0627 \u0645\u0637\u0645\u0626\u0646 \u0634\u0648\u06CC\u062F \u0645\u06CC\u06A9\u0631\u0648\u0641\u0648\u0646 \u06CC\u0627 \u06A9\u0627\u0631\u062A \u0635\u0648\u062A\u06CC \u062F\u0633\u062A\u06AF\u0627\u0647 \u0634\u0645\u0627 \u062F\u0631\u0633\u062A \u06A9\u0627\u0631 \u0645\u06CC\u06A9\u0646\u062F \u0633\u067E\u0633 \u0628\u0631\u0627\u06CC \u0634\u0631\u0648\u0639 \u062A\u0645\u0627\u0633 \u062F\u06A9\u0645\u0647 \u0632\u06CC\u0631 \u0631\u0627 \u0641\u0634\u0627\u0631 \u062F\u0647\u06CC\u062F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }
    }), "\u0634\u0631\u0648\u0639 \u062A\u0645\u0627\u0633", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: 'p-button p-component p-button-rounded p-button-success p-button-icon-only',
      onClick: () => {
        this.AccessRequest();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      style: {
        fontSize: '30px'
      },
      className: "fa fa-phone",
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }
    })));
  }

  userCalling() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 13
      }
    }, "\u062F\u0631\u062E\u0648\u0627\u0633\u062A \u062A\u0645\u0627\u0633 \u0627\u0631\u0633\u0627\u0644 \u0634\u062F \u060C \u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 \u0628\u0631\u0627\u06CC \u067E\u0630\u06CC\u0631\u0634 \u06A9\u0627\u0631\u0628\u0631"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_6__["default"], {
      animation: "border",
      variant: "info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 13
      }
    }));
  } //todo:


  vC_CustomerIsAcceptOrRejectCallback(res) {
    if (!res || !res.Content) {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["_showError"])('vC_AdminCallInitCallback res is null');
    }

    if (res.Content.IsAccepted === true) {
      startRecording();
    } else {
      this.setState({
        type: 'error',
        error: res.Content.Message
      });
    }
  }

  VC_AdminCallInit() {
    this.setState({
      type: 'userCalling'
    });
    _Help_Socket__WEBPACK_IMPORTED_MODULE_5__["MyCaller"].Send('VC_AdminCallInit', {
      customerId: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomerForCall.Id
    });
  }

  vC_CustomerCallInitCallback(res) {
    if (!res || !res.Content) {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["_showError"])('vC_CustomerCallInitCallback res is null');

      return;
    }

    if (!res || !res.Content.chatId) {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["_showError"])('vC_CustomerCallInitCallback  chatId  is null');

      return;
    } // در حال مکالمه هستیم


    if (inCalling) {
      // آیا کسی دیگر زنگ میزند ؟
      if (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomerForCall && _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomerForCall.Id != res.Content.Customer.Id) {
        this.setState({
          isAnotherCallCome: true,
          anotherCallCustomer: res.Content.Customer,
          anotherCallChatId: res.Content.chatId
        });

        Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["_showError"])('کاربر دیگری در حال تماس به شماست ، در انتظار ');

        return;
      }
    }

    _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomerForCall = res.Content.Customer;
    _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomerForCallChatId = res.Content.chatId;
    this.setState({
      type: 'callRequestFromCustomer'
    });
  }

  AccessRequest() {
    ACCESS_TO_VOICE(stream => {
      this.VC_AdminCallInit();
    }, err => {
      this.setState({
        type: 'error'
      });
      this.setState({
        error: 'اجازه دسترسی به میکروفون شما صادر نشد',
        techError: err + ""
      });
    });
  }

  showAnotherCallCome() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 17
      }
    }, _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomerForCall.Name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 17
      }
    }, "\u062A\u0645\u0627\u0633 \u062F\u06CC\u06AF\u0631\u06CC \u0631\u0633\u06CC\u062F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 13
      }
    }), "\u062F\u0631 \u0627\u0646\u062A\u0638\u0627\u0631 \u0628\u0627\u0634\u062F", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: 'p-button p-component p-button-rounded p-button-success p-button-icon-only',
      onClick: () => {
        this.Wait(this.state.anotherCallCustomer, this.state.anotherCallChatId);
        this.setState({
          isAnotherCallCome: null
        });
        this.setState({
          anotherCallIsWaiting: true
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      style: {
        fontSize: '30px'
      },
      className: "fa fa-phone",
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 17
      }
    })), "\u0631\u062F \u06A9\u0631\u062F\u0646", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: 'p-button p-component p-button-rounded p-button-success p-button-icon-only',
      onClick: () => {
        this.Reject(this.state.anotherCallCustomer, this.state.anotherCallChatId);
        this.setState({
          isAnotherCallCome: null
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      style: {
        fontSize: '30px'
      },
      className: "fa fa-phone",
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 17
      }
    })));
  }

  Answer() {
    ACCESS_TO_VOICE(stream => {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_5__["MyCaller"].Send('VC_AdminIsAcceptOrReject', {
        msg: msg,
        err: null,
        isAccepted: true,
        customerId: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomerForCall.Id,
        chatId: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomerForCallChatId
      });
      startRecording();
    }, err => {
      this.setState({
        type: 'error'
      });
      this.setState({
        error: 'اجازه دسترسی به میکروفون شما صادر نشد',
        techError: err + ""
      });
    });
  }

  Reject(customerId, chatId) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_5__["MyCaller"].Send('VC_AdminIsAcceptOrReject', {
      msg: msg,
      err: null,
      isAccepted: false,
      customerId: customerId ? customerId : _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomerForCall.Id,
      chatId: chatId ? chatId : _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomerForCallChatId
    });
    if (customerId) this.onHide('displayPosition');
  }

  callRequestFromCustomer() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 17
      }
    }, _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomerForCall.Name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 17
      }
    }, "\u062F\u0631 \u062D\u0627\u0644 \u062A\u0645\u0627\u0633 \u0628\u0647 \u0634\u0645\u0627\u0633\u062A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 13
      }
    }), "\u067E\u0627\u0633\u062E", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: 'p-button p-component p-button-rounded p-button-success p-button-icon-only',
      onClick: () => {
        this.Answer();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      style: {
        fontSize: '30px'
      },
      className: "fa fa-phone",
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 17
      }
    })), "\u0631\u062F \u06A9\u0631\u062F\u0646", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: 'p-button p-component p-button-rounded p-button-success p-button-icon-only',
      onClick: () => {
        this.Reject();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      style: {
        fontSize: '30px'
      },
      className: "fa fa-phone",
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 17
      }
    })));
  }

  Wait(customerId, chatId) {
    if (!customerId || !chatId) {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_7__["_showError"])("Wait(customerId,chatId) is null");

      return;
    }

    _Help_Socket__WEBPACK_IMPORTED_MODULE_5__["MyCaller"].Send('VC_AdminInAnotherCalling', {
      customerId: customerId,
      chatId: chatId
    });
  }

  anotherCallIsWaitings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      style: {
        fontSize: '30px'
      },
      className: "fa fa-frown-o",
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 17
      }
    }, "\u06A9\u0627\u0631\u0628\u0631\u0627\u0646 \u062F\u0631 \u062D\u0627\u0644 \u0627\u0646\u062A\u0638\u0627\u0631"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (VoiceCall);
let streamrecorder,
    webcamstream,
    mediaRecorder,
    inCalling = false;

function startRecording() {
  inCalling = true;
  mediaRecorder = new MediaRecorder(webcamstream);
  mediaRecorder.start(3000);

  mediaRecorder.ondataavailable = function (e) {
    new Promise(resolve => {
      const fileReader = new FileReader();
      fileReader.addEventListener("loadend", () => {
        //debugger
        // videoElem.src=fileReader.result;

        /*  var dataUrl = fileReader.result;
          var base64 = dataUrl.split(',')[1];*/
        resolve(fileReader.result);
      });
      fileReader.readAsBinaryString(e.data);
    }).then(function (buffer) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_5__["MyCaller"].Send('VC_AdminSpeak', {
        customerId: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].selectedCustomerForCall.Id,
        buffer
      });
    });
    chunks.push(e.data);
  };
}

function stopRecording() {
  mediaRecorder.stop();
  inCalling = false;
}

function ACCESS_TO_VOICE(successCallback, failCallback) {
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia; // Get access to microphone

  navigator.getUserMedia( // Only request audio
  {
    video: false,
    audio: true
  }, // Success callback
  function success(localAudioStream) {
    // Do something with audio stream
    webcamstream = stream;
    voiceData = [];
    successCallback(localAudioStream);
  }, // Failure callback
  function error(err) {
    // handle error
    failCallback(err);
  });
}

/***/ }),

/***/ "./src/Components/VoiceCallRunner.js":
/*!*******************************************!*\
  !*** ./src/Components/VoiceCallRunner.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Pages/LayoutPage */ "./src/Pages/LayoutPage.js");
/* harmony import */ var _VoiceCall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VoiceCall */ "./src/Components/VoiceCall.js");
/* harmony import */ var _ScreenRecordShower__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScreenRecordShower */ "./src/Components/ScreenRecordShower.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\VoiceCallRunner.js";





class VoiceCallRunner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  VC_CustomerSpeark(res) {
    if (!res || !res.Content) {
      Object(_Pages_LayoutPage__WEBPACK_IMPORTED_MODULE_1__["_showError"])('vC_AdminCallInitCallback res is null');
    }

    let base64 = btoa(res.Content.buffer);
    let blob = Object(_ScreenRecordShower__WEBPACK_IMPORTED_MODULE_3__["b64toBlob"])(base64, 'voice/mp4');
    _VoiceCall__WEBPACK_IMPORTED_MODULE_2__["voiceData"].push(blob);
    let wholeVideoBlob = new Blob(_VoiceCall__WEBPACK_IMPORTED_MODULE_2__["voiceData"], {
      'type': 'video/webm'
    });
    let blobUrl = URL.createObjectURL(wholeVideoBlob); // برای اولین بار نال است

    if (this.voiceElem) {
      // blobUrl= URL.revokeObjectURL(blobUrl)
      let lastTime = this.voiceElem.currentTime ? this.voiceElem.currentTime : 0;
      this.voiceElem.src = blobUrl;
      this.voiceElem.load();
      this.voiceElem.currentTime = lastTime;
      this.voiceElem.play();
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio", {
      ref: node => this.voiceElem = node,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (VoiceCallRunner);

/***/ }),

/***/ "./src/Components/WhileWriting.js":
/*!****************************************!*\
  !*** ./src/Components/WhileWriting.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_whileWriting_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/whileWriting.css */ "./src/styles/whileWriting.css");
/* harmony import */ var _styles_whileWriting_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_whileWriting_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Help/Socket */ "./src/Help/Socket.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Components\\WhileWriting.js";




class WhileWriting extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].WhileWriting = this;
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, this.props.IsTyping && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "gapwhileWriting",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 42
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "lds-ellipsis",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "whileWriting",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 14
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "whileWriting",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 14
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "whileWriting",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 14
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "whileWriting",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 14
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WhileWriting);

/***/ }),

/***/ "./src/Help/ChangeUserTypes.js":
/*!*************************************!*\
  !*** ./src/Help/ChangeUserTypes.js ***!
  \*************************************/
/*! exports provided: changeUserTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeUserTypes", function() { return changeUserTypes; });
/* harmony import */ var _Socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Socket */ "./src/Help/Socket.js");
/* harmony import */ var _DataHolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataHolder */ "./src/Help/DataHolder.js");


function changeUserTypes(type) {
  _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].UserType = type;

  switch (type) {
    case 'AllCustomerListPage':
      _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].UserType = null;
      if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].OnlineCustomerListHolder) _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].OnlineCustomerListHolder.GetClientsListForAdmin();
      return;
      break;

    case 'answered':
      break;

    case "SeparatePerPageCustomerListPage":
      if (!_DataHolder__WEBPACK_IMPORTED_MODULE_1__["DataHolder"].SelectedPage) {
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].LayoutPage.showError("هیچ صفحه ای انتخاب نشده است");
        return;
      }

      break;

    case 'chatted':
      break;

    case 'NotChatted':
      break;

    case 'NotChattedLeft':
      break;

    case 'WaitingForAnswer':
      break;

    case 'GetVisitedPagesForCurrentSite':
      _Socket__WEBPACK_IMPORTED_MODULE_0__["MyCaller"].Send('GetVisitedPagesForCurrentSite');
      return;
      break;

    case 'ChattedAndReturnedCustomerListPage':
      break;

    case 'NotChattedLeftCustomerListPage':
      break;

    default:
      alert(' نوع شناخته نشد ' + type);
      return;
      break;
  }

  if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].OnlineCustomerListHolder) _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].OnlineCustomerListHolder.GetClientsListForAdmin();else {
    _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].LayoutPage.showError('CurrentUserInfo.OnlineCustomerListHolder is null');
  }
}

/***/ }),

/***/ "./src/Help/CookieManager.js":
/*!***********************************!*\
  !*** ./src/Help/CookieManager.js ***!
  \***********************************/
/*! exports provided: cookieManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cookieManager", function() { return cookieManager; });
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");

const cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_0__["default"]();
const cookieManager = {
  getItem: function (sKey) {
    let val = cookies.get(sKey);
    if (val === 'null') return;
    return val;
  },
  setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    cookies.set(sKey, sValue);
    return true;
  },
  removeItem: function (sKey, sPath, sDomain) {
    cookies.set(sKey, null); //  document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");

    return true;
  },
  hasItem: function (sKey) {
    return new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie);
  },
  keys:
  /* optional method: you can safely remove it! */
  function () {
    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);

    for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
      aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
    }

    return aKeys;
  }
};

/***/ }),

/***/ "./src/Help/DataHolder.js":
/*!********************************!*\
  !*** ./src/Help/DataHolder.js ***!
  \********************************/
/*! exports provided: DataHolder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataHolder", function() { return DataHolder; });
const DataHolder = {};

/***/ }),

/***/ "./src/Help/Dispatcher.js":
/*!********************************!*\
  !*** ./src/Help/Dispatcher.js ***!
  \********************************/
/*! exports provided: _dispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_dispatcher", function() { return _dispatcher; });
/* harmony import */ var _Socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Socket */ "./src/Help/Socket.js");
/* harmony import */ var _CookieManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CookieManager */ "./src/Help/CookieManager.js");
/* harmony import */ var _Pages_LoginPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Pages/LoginPage */ "./src/Pages/LoginPage.js");
/* harmony import */ var _DataHolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DataHolder */ "./src/Help/DataHolder.js");
/* harmony import */ var _Components_FormShowerInChat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/FormShowerInChat */ "./src/Components/FormShowerInChat.js");






class dispatcher {
  dispatch(res) {
    if (res.Type == -1) //error
      {
        console.error(res.Message);
      }

    console.log('dispatcher===>', res.Name);

    switch (res.Name) {
      case "screenRecordAdminShareRequestCallback":
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ShowMyScreen) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ShowMyScreen.screenRecordAdminShareRequestCallback(res);
        }

        break;

      case "screenRecordCustomerCloseCallback":
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ScreenRecordShowerSendRequest) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ScreenRecordShowerSendRequest.screenRecordCustomerCloseCallback(res);
        }

        break;

      case "screenRecordAccessRequestSuccessCallback":
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ScreenRecordShowerSendRequest) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ScreenRecordShowerSendRequest.screenRecordAccessRequestSuccessCallback(res);
        }

        break;

      case "screenRecordAccessRequestFailCallback":
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ScreenRecordShowerSendRequest) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ScreenRecordShowerSendRequest.screenRecordAccessRequestFailCallback(res);
        }

        break;

      case "screenRecordSaveCallback":
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ScreenRecordShower) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ScreenRecordShower.screenRecordSaveCallback(res);
        }

        break;

      case 'saveFormDataCallback':
        /*لیست کامپونت های فرم ها در این ابجکت نگه داری می شود|*/
        if (_Components_FormShowerInChat__WEBPACK_IMPORTED_MODULE_4__["FormShowerInChatHolder"]) {
          /*form.AfterMessage,
                      formId,
                      chatId,
                      FormValues*/
          let FormShowerInChat = _Components_FormShowerInChat__WEBPACK_IMPORTED_MODULE_4__["FormShowerInChatHolder"][res.Content.formId + '' + res.Content.UniqId];

          if (FormShowerInChat) {
            FormShowerInChat.saveFormDataCallback(res);
          }
        }

        break;

      case 'deleteFormCallback':
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].FormCreatorPage) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].FormCreatorPage.deleteFormCallback(res);
        }

        break;

      case 'saveFormCallback':
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].FormCreatorPage) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].FormCreatorPage.saveFormCallback(res);
        }

        break;

      case 'getFormDataCallback':
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].FormDataTable) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].FormDataTable.getFormDataCallback(res);
        }

        break;

      case 'getFormSingleCallback':
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].FormCreatorPage) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].FormCreatorPage.getFormSingleCallback({
            Content: res.Content.form
          });
        }
        /*لیست کامپونت های فرم ها در این ابجکت نگه داری می شود|*/


        if (_Components_FormShowerInChat__WEBPACK_IMPORTED_MODULE_4__["FormShowerInChatHolder"]) {
          let FormShowerInChat = _Components_FormShowerInChat__WEBPACK_IMPORTED_MODULE_4__["FormShowerInChatHolder"][res.Content.form.Id + '' + res.Content.UniqId];

          if (FormShowerInChat) {
            FormShowerInChat.getFormSingleCallback({
              Content: res.Content.form
            });
          }
        }

        break;

      case 'customerGetFormSingleCallback':
        //       debugger
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].FormCreatorPage) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].FormCreatorPage.getFormSingleCallback(res);
        }
        /*لیست کامپونت های فرم ها در این ابجکت نگه داری می شود|*/


        if (_Components_FormShowerInChat__WEBPACK_IMPORTED_MODULE_4__["FormShowerInChatHolder"]) {
          let FormShowerInChat = _Components_FormShowerInChat__WEBPACK_IMPORTED_MODULE_4__["FormShowerInChatHolder"][res.Content.form.Id + '' + res.Content.UniqId];

          if (FormShowerInChat) {
            FormShowerInChat.getFormSingleCallback({
              Content: res.Content.form
            });
          }
        }

        break;

      case 'customerStartTypingCallback':
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].OnlineCustomerListHolder) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].OnlineCustomerListHolder.customerStartTypingCallback(res);
        }

        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].MyHeader) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].MyHeader.customerStartTypingCallback(res);
        }

        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].CustomersPage) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].CustomersPage.customerStartTypingCallback(res);
        }

        break;

      case 'getCreatedFormsCallback':
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].CreatedForms) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].CreatedForms.getCreatedFormsCallback(res);
        }

        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].CustomerToolbar) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].CustomerToolbar.getCreatedFormsCallback(res);
        }

        break;

      case "getSocialChannelsInfoCallback":
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].SocialChannelsPage) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].SocialChannelsPage.getSocialChannelsInfoCallback(res);
        }

        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].SendFromHelpDesk) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].SendFromHelpDesk.getSocialChannelsInfoCallback(res);
        }

        break;

      case 'saveSocialChannelsInfoCallback':
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].SocialChannelsPage) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].SocialChannelsPage.saveSocialChannelsInfoCallback(res);
        }

        break;

      case "customerStopTypingCallback":
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].OnlineCustomerListHolder) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].OnlineCustomerListHolder.customerStopTypingCallback(res);
        }

        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].MyHeader) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].MyHeader.customerStopTypingCallback(res);
        }

        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].CustomersPage) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].CustomersPage.customerStopTypingCallback(res);
        }

        break;

      case "forwardChatSuccessCallback":
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ForwardChat.forwardChatSuccessCallback(res);
        break;

      case "GetAdminsListCallback":
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].AdminsPage.GetAdminsListCallback(res);
        break;

      case "getAutomaticSendChatsSocketHandlerCallback":
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].AutomaticSendPage.getAutomaticSendChatsSocketHandlerCallback(res);
        break;

      case "successCallback":
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].LayoutPage.showMsg(res.Message);
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].AutomaticSendPage.successCallback(res.Message);
        break;

      case "ClearCookie":
        //cookieManager.removeItem('customerToken')
        _CookieManager__WEBPACK_IMPORTED_MODULE_1__["cookieManager"].removeItem('adminToken');
        console.log('ClearCookie==>adminToken===>', _CookieManager__WEBPACK_IMPORTED_MODULE_1__["cookieManager"].getItem('adminToken'));
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].customerToken = null;
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].LayoutPage.setState({
          tmp: Math.random(),
          isClearCookie: true
        }); //window.location.reload();

        break;

      case "newSendPMByMeInAnotherPlaceCallback":
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ChatPage.newSendPMByMeInAnotherPlaceCallback(res);
        break;

      case "readChatCallback":
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ChatPage.readChatCallback(res);
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ChatPage.LoadForms(res);
        break;

      case "adminLoginCallback":
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].LoginPage.adminLoginCallback(res);
        break;

      case "getClientsListForAdminCallback":
        // CurrentUserInfo.CustomersPage.getClientsListForAdminCallback(res);
        if (!_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].currentPage) {
          if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].CustomersPage) {
            _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].CustomersPage.getClientsListForAdminCallback(res);
          }
        } else {
          if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].OnlineCustomerListHolder) {
            _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].OnlineCustomerListHolder.getClientsListForAdminCallback(res);
          }
        }
        /*else{
            CurrentUserInfo.LayoutPage.showError('dispatcher CurrentUserInfo.OnlineCustomerListHolder is null');
           }*/


        break;

      case "adminSendToCustomerCallback":
        //CurrentUserInfo.ChatPage.adminSendToCustomerCallback(res);
        break;

      case "adminSendToCustomerFailCallback":
        if (res.Message) _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].LayoutPage.showError(res.Message); // CurrentUserInfo.plugin.adminSendToCustomerFailCallback(res);

        break;

      case "customerSendToAdminCallback":
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ChatPage && !_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].currentPage) _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ChatPage.customerSendToAdminCallback(res);
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].CustomersPage) _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].CustomersPage.customerSendToAdminCallback(res);
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].OnlineCustomerListHolder) _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].OnlineCustomerListHolder.customerSendToAdminCallback(res);
        break;

      case "msgDeliveredCallback":
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ChatPage.msgDeliveredCallback(res);
        break;

      case "multimediaPmSendCallback":
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ChatPage.multimediaPmSendCallback(res);
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].OnlineCustomerListHolder) _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].OnlineCustomerListHolder.multimediaPmSendCallback(res);
        break;

      case "multimediaDeliveredCallback":
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ChatPage.multimediaDeliveredCallback(res);
        break;
      //new Accont or Customer

      case "newAccountOnlineCallback":
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].AdminsPage.newAccountOnlineCallback(res);
        break;

      case "newCustomerOnlineCallback":
        //todo:server add coiunt of new  users
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].CustomersPage) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].CustomersPage.newCustomerOnlineCallback(res);
        }

        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].OnlineCustomerListHolder) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].OnlineCustomerListHolder.newCustomerOnlineCallback(res);
        }

        break;
      //end

      case 'totalUserCountsChangedCallback':
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].SubMenu.totalUserCountsChangedCallback(res);
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].Menu.totalUserCountsChangedCallback(res);

        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].OnlineCustomerListHolder) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].OnlineCustomerListHolder.totalUserCountsChangedCallback(res);
        }

        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].CustomersPage) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].CustomersPage.totalUserCountsChangedCallback(res);
        }

        break;
      //customer online again

      case "customerOnlineAgainCallback":
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].CustomersPage.customerOnlineAgainCallback(res);

        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].OnlineCustomerListHolder) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].OnlineCustomerListHolder.customerOnlineAgainCallback(res);
        } //   CurrentUserInfo.plugin.customerOnlineAgainCallback(res);


        break;

      case "customerOfflineAgainCallback":
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].CustomersPage.customerOfflineAgainCallback(res); //  CurrentUserInfo.plugin.customerOfflineAgainCallback(res);

        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].OnlineCustomerListHolder) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].OnlineCustomerListHolder.customerOfflineAgainCallback(res);
        }

        break;
      //end
      //admin online again

      case "adminOnlineAgainCallback":
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].AdminsPage.adminOnlineAgainCallback(res);
        break;

      case "adminOfflineAgainCallback":
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].AdminsPage.adminOfflineAgainCallback(res);
        break;
      //end

      case "getCustomerActivityDetailCallback":
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].CustomersPage.getCustomerActivityDetailCallback(res);
        break;

      case "searchHandlerCallback":
        /* customerlist,
                            sendMsgList,
                            receiveMsgList*/
        ;
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].CustomersPage.searchHandlerCallback(res.Content.customerlist); //CurrentUserInfo.AdminsPage.searchHandlerCallback(res.customerlist);

        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ChatPage.searchHandlerCallback(res.Content.sendMsgList, res.Content.receiveMsgList);
        break;

      case "loadReadyPmCallback":
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].plugin.loadReadyPmCallback(res);
        break;

      case "DeleteMessageCallback":
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ChatPage.DeleteMessageCallback(res);
        break;

      case "EditMessageCallback":
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ChatPage.EditMessageCallback(res);
        break;

      case 'getVisitedPagesForCurrentSiteCallback':
        _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].SepratePerPage.getVisitedPagesForCurrentSiteCallback(res);
        break;

      case "getAllTagsForCurrentAdminCallback":
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].TagList) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].TagList.getAllTagsForCurrentAdminCallback(res);
        }

        break;

      case 'deleteTagFormUserTagsByIdCallback':
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].CustomerTags) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].CustomerTags.deleteTagFormUserTagsByIdCallback(res);
        }

        break;

      case 'deleteTagByIdCallback':
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].TagList) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].TagList.deleteTagByIdCallback(res);
        }

        break;

      case 'getMyProfileCallback':
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ProfilePage) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ProfilePage.getMyProfileCallback(res);
        }

        break;

      case 'saveMyProfileCallback':
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ProfilePage) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ProfilePage.saveMyProfileCallback(res);
        }

        break;

      case 'userAddedToTagsCallback':
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ChatPage) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].ChatPage.userAddedToTagsCallback(res);
        } // باعث loop می شود لذا if گذاشته ایم


        if (_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].currentPage) {
          if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].OnlineCustomerListHolder) {
            _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].OnlineCustomerListHolder.userAddedToTagsCallback(res);
          }
        } // CurrentUserInfo.LayoutPage.showMsg('برچسب های انتخاب شده به کاربر زده شد')


        break;

      case "getTagsCallback":
        if (_Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].TagList) {
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].TagList.getTagsCallback(res);
        }

        break;

      default:
        if (res && res.Message) {
          console.error(res.Message);
          _Socket__WEBPACK_IMPORTED_MODULE_0__["CurrentUserInfo"].LayoutPage.showError(res.Message);

          if (res.Message.indexOf('کانکشکن متفاوت') >= 0) {
            /*cookieManager.removeItem('customerToken')
            cookieManager.removeItem('adminToken')
            CurrentUserInfo.customerToken=null;
            _currentAdminInfo.adminToken=null;*/

            /*   if (debugMode){
                   alert('اتصال مجدد')
               }
               cookieManager.removeItem('customerToken')
               cookieManager.removeItem('adminToken')
               CurrentUserInfo.customerToken=null;
               _currentAdminInfo.adminToken=null;
               startUp();*/
          }
        }

        break;
    }
  }

}

const _dispatcher = new dispatcher();

/***/ }),

/***/ "./src/Help/MyGlobal.js":
/*!******************************!*\
  !*** ./src/Help/MyGlobal.js ***!
  \******************************/
/*! exports provided: MyGlobal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyGlobal", function() { return MyGlobal; });
const MyGlobal = {
  isTestingEnvirement: false,
  fakeWebsite: false
};

/***/ }),

/***/ "./src/Help/Socket.js":
/*!****************************!*\
  !*** ./src/Help/Socket.js ***!
  \****************************/
/*! exports provided: MyCaller, CurrentUserInfo, Socket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCaller", function() { return MyCaller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentUserInfo", function() { return CurrentUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Socket", function() { return Socket; });
/* harmony import */ var _Dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dispatcher */ "./src/Help/Dispatcher.js");
/* harmony import */ var _CookieManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CookieManager */ "./src/Help/CookieManager.js");
/* harmony import */ var _MyGlobal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyGlobal */ "./src/Help/MyGlobal.js");
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Help/DataHolder */ "./src/Help/DataHolder.js");




const MyCaller = {
  Send(name, data) {
    if (_MyGlobal__WEBPACK_IMPORTED_MODULE_2__["MyGlobal"].isTestingEnvirement) {
      if (CurrentUserInfo.FakeServerMonitor) {
        CurrentUserInfo.FakeServerMonitor.ServerCall(name, data);
      }
      /*else{
         CurrentUserInfo.LayoutPage.showError('CurrentUserInfo.FakeServerMonitor is null:' + name);
       }*/


      return;
    }

    if (CurrentUserInfo.ws.readyState != WebSocket.OPEN) {
      CurrentUserInfo.LayoutPage.showError('در حال اتصال به سرور و ارسال درخواست');
      setTimeout(() => {
        if (CurrentUserInfo.ws.readyState === WebSocket.CLOSED || CurrentUserInfo.ws.readyState === WebSocket.CLOSED) {
          Socket(function () {
            console.log('opened !');
          });
        }

        CurrentUserInfo.LayoutPage.showError('در حال اتصال');
        this.Send(name, data);
      }, 1000);
      return;
    } else {
      if (CurrentUserInfo.LayoutPage.state.err && CurrentUserInfo.LayoutPage.state.err.indexOf('اتصال') >= 0) {
        CurrentUserInfo.LayoutPage.showError(null);
      }
    }

    var req = {};
    req.Name = name;
    req.Body = data;
    req.Token = _CookieManager__WEBPACK_IMPORTED_MODULE_1__["cookieManager"].getItem('adminToken');
    req.SelectedTagId = CurrentUserInfo.selectedTagId;
    req.gapIsOnlyOnly = CurrentUserInfo.gapIsOnlyOnly;
    req.IsAdminMode = CurrentUserInfo.currentUsersIsAdmins; // req.WebsiteToken = DataHolder.WebsiteToken;

    if (_MyGlobal__WEBPACK_IMPORTED_MODULE_2__["MyGlobal"].fakeWebsite) {
      let baseUrl = document.getElementById('baseUrl').value;
      let port = document.getElementById('port').value;
      fetch(`http://${baseUrl}:${port}/Home/GetWebsiteToken`).then(response => response.json()).then(data => {
        req.WebsiteToken = data;
        req.IsAdminOrCustomer = 1; // admin
        //debugger

        CurrentUserInfo.ws.send(JSON.stringify(req));
      });
      return;
      /*req.WebsiteToken =
          "N09XVk1peG5Gc2FtQWhLSHk4MjIrZ2xMeVN2T0VoR1JaOThRY3BHbnJwYXBORHpBTDZ0Zjlpb084Tkd6dWFpYlRrcWZVQjdtRnV2LzdNL3ozVkM3cGc9PQ==";
      */
    } else {
      let websiteToken = document.getElementById('websiteToken').value;
      req.WebsiteToken = websiteToken;
      req.IsAdminOrCustomer = 1; // admin
      //debugger

      CurrentUserInfo.ws.send(JSON.stringify(req));
    }
  }

};
const CurrentUserInfo = {
  ws: WebSocket
};
const Socket = function (onOpen) {
  let baseUrl = document.getElementById('baseUrl').value;
  CurrentUserInfo.ws = new WebSocket("ws://" + baseUrl + ":8181/");

  CurrentUserInfo.ws.onopen = function () {
    console.log('اتصال برقرار شد');
    /*alert("About to send data");
    ws.send("Hello World"); // I WANT TO SEND THIS MESSAGE TO THE SERVER!!!!!!!!
    alert("Message sent!");*/

    if (onOpen) {
      onOpen();
    }
  };

  CurrentUserInfo.ws.onmessage = function (evt) {
    var received_msg = evt.data;

    _Dispatcher__WEBPACK_IMPORTED_MODULE_0__["_dispatcher"].dispatch(JSON.parse(received_msg));
  };

  CurrentUserInfo.ws.onclose = function () {
    // websocket is closed.
    console.error("اتصال قطع شد");
  };
};
Socket(function () {
  console.log('opened !');
});

/***/ }),

/***/ "./src/Pages/AllCustomerListPage.js":
/*!******************************************!*\
  !*** ./src/Pages/AllCustomerListPage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AllCustomerListPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OnlineCustomerListHolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OnlineCustomerListHolder */ "./src/Pages/OnlineCustomerListHolder.js");
/* harmony import */ var _Help_ChangeUserTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Help/ChangeUserTypes */ "./src/Help/ChangeUserTypes.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Pages\\AllCustomerListPage.js";



class AllCustomerListPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    Object(_Help_ChangeUserTypes__WEBPACK_IMPORTED_MODULE_2__["changeUserTypes"])('AllCustomerListPage');
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnlineCustomerListHolder__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 1
      }
    }));
  }

}

/***/ }),

/***/ "./src/Pages/Answered.js":
/*!*******************************!*\
  !*** ./src/Pages/Answered.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Answered; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OnlineCustomerListHolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OnlineCustomerListHolder */ "./src/Pages/OnlineCustomerListHolder.js");
/* harmony import */ var _Help_ChangeUserTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Help/ChangeUserTypes */ "./src/Help/ChangeUserTypes.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Pages\\Answered.js";



class Answered extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    Object(_Help_ChangeUserTypes__WEBPACK_IMPORTED_MODULE_2__["changeUserTypes"])('answered');
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnlineCustomerListHolder__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 1
      }
    }));
  }

}

/***/ }),

/***/ "./src/Pages/ChatPage.js":
/*!*******************************!*\
  !*** ./src/Pages/ChatPage.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Components/Header */ "./src/Components/Header.js");
/* harmony import */ var _Components_Chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Components/Chat */ "./src/Components/Chat.js");
/* harmony import */ var _Components_Customers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Components/Customers */ "./src/Components/Customers.js");
/* harmony import */ var _Components_Admins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../Components/Admins */ "./src/Components/Admins.js");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../styles/myStyle.css */ "./src/styles/myStyle.css");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_myStyle_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Components_CustomerToolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/CustomerToolbar */ "./src/Components/CustomerToolbar.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Pages\\ChatPage.js";







class ChatPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-3 noMargin",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_CustomerToolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 1
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-6 noMargin",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Chat__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 3
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-3 noMargin",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Customers__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 3
      }
    }))));
  }

}

/***/ }),

/***/ "./src/Pages/ChattedAndReturnedCustomerListPage.js":
/*!*********************************************************!*\
  !*** ./src/Pages/ChattedAndReturnedCustomerListPage.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChattedAndReturnedCustomerListPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OnlineCustomerListHolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OnlineCustomerListHolder */ "./src/Pages/OnlineCustomerListHolder.js");
/* harmony import */ var _Help_ChangeUserTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Help/ChangeUserTypes */ "./src/Help/ChangeUserTypes.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Pages\\ChattedAndReturnedCustomerListPage.js";



class ChattedAndReturnedCustomerListPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    Object(_Help_ChangeUserTypes__WEBPACK_IMPORTED_MODULE_2__["changeUserTypes"])('ChattedAndReturnedCustomerListPage');
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnlineCustomerListHolder__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 1
      }
    }));
  }

}

/***/ }),

/***/ "./src/Pages/FormCreatorPage.js":
/*!**************************************!*\
  !*** ./src/Pages/FormCreatorPage.js ***!
  \**************************************/
/*! exports provided: default, FormCreatorToolsMenu, FormRenderer, CreatedForms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCreatorToolsMenu", function() { return FormCreatorToolsMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRenderer", function() { return FormRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatedForms", function() { return CreatedForms; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var _Components_FormInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/FormInputs */ "./src/Components/FormInputs.js");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/myStyle.css */ "./src/styles/myStyle.css");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_myStyle_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Components_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Modal */ "./src/Components/Modal.js");
/* harmony import */ var _LayoutPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LayoutPage */ "./src/Pages/LayoutPage.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Pages\\FormCreatorPage.js";










class FormCreatorPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(prop) {
    super(prop);
    this.state = {
      showModal: false
    };
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].FormCreatorPage = this;
  }

  DeleteElement(el, i) {
    if (!this.state.elements) {
      Object(_LayoutPage__WEBPACK_IMPORTED_MODULE_8__["_showError"])('this.state.elements is null');
    }

    if (!this.state.elements[i]) {
      Object(_LayoutPage__WEBPACK_IMPORTED_MODULE_8__["_showError"])('this.state.elements[i] is null');
    }

    let elements = this.state.elements;
    elements = elements.filter(e => e != el);
    this.setState({
      elements: elements
    });
  }

  getFormSingleCallback(res) {
    if (!res || !res.Content) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError('اطلاعات بازگشتی از سرور نال است');
      return;
    }

    console.log(res);
    this.setState({
      elements: res.Content.Elements,
      Name: res.Content.Name,
      AfterMessage: res.Content.AfterMessage,
      OnlyMe: res.Content.OnlyMe,
      Message: res.Content.Message,
      Id: res.Content.Id
    });
  }

  addNewFormElement(el) {
    let elements = this.state.elements;

    if (!elements) {
      elements = [];
    }

    elements.push(el);
    this.setState({
      elements: elements
    });
    this.setState({
      elementsError: null
    });
  }

  deleteFormCallback(formId) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showMsg('فرم حذف شد');
    this.clearForm();

    if (_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].CreatedForms) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].CreatedForms.componentDidMount();
    }
  }

  DeleteForm(formId) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showMsg('در حال حذف فرم');
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send('DeleteForm', {
      formId: formId
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Text, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
      variant: 'info',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 41
      }
    }, " \u062F\u0631\u06CC\u0627\u0641\u062A \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0627\u0632 \u06A9\u0627\u0631\u0628\u0631 \u0628\u0627 \u062A\u0639\u0631\u06CC\u0641 \u0627\u0646\u0648\u0627\u0639 \u0641\u0631\u0645 \u0648 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u062F\u0631 \u0627\u062A\u0627\u0642 \u0686\u062A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 41
      }
    }), "\u062F\u0631 \u0627\u06CC\u0646 \u0628\u062E\u0634 \u0641\u0631\u0645 \u0647\u0627 \u062A\u0639\u0631\u06CC\u0641 \u060C \u0648\u06CC\u0631\u0627\u06CC\u0634 \u0648 \u062D\u0630\u0641 \u0645\u06CC \u0634\u0648\u0646\u062F")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
      md: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CreatedForms, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 25
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
      md: 9,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Body, {
      id: 'form',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 33
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Title, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 37
      }
    }, this.state.Id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 59
      }
    }, "\u0648\u06CC\u0631\u0627\u06CC\u0634 \u0641\u0631\u0645"), !this.state.Id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 60
      }
    }, "\u0641\u0631\u0645 \u062C\u062F\u06CC\u062F"), this.state.Id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        float: 'left'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 41
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      onClick: () => {
        this.DeleteForm(this.state.Id);
      },
      variant: "default",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 45
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: 'pointer  floatLeft text-danger',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 49
      }
    }, "\u062D\u0630\u0641 \u0641\u0631\u0645", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-trash",
      "aria-hidden": "true",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 53
      }
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Text, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 37
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 41
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 45
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_FormInputs__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      value: this.state.Message,
      type: 'textarea',
      formName: 'form',
      required: true,
      parent: this,
      parentStateName: 'Message',
      id: 'beforeMsg',
      name: 'متن فرم',
      placeholder: 'مثال: درصورتی که آفلاین بودیم',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 49
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 45
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_FormInputs__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      value: this.state.Name,
      type: 'text',
      formName: 'form',
      required: true,
      parentStateName: 'Name',
      parent: this,
      id: 'title',
      name: 'عنوان فرم',
      placeholder: 'عنوان فرم را وارد نمایید',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 49
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 41
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 45
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_FormInputs__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      value: this.state.AfterMessage,
      type: 'textarea',
      id: 'afterMsg',
      formName: 'form',
      required: true,
      parent: this,
      parentStateName: 'AfterMessage',
      name: 'پیغام بعد از پر کردن فرم به کاربر نمایش داده می شود:',
      placeholder: 'مثال: با تشکر فرم ارسال گردید',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 49
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 45
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
      controlId: "onlyMe",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 49
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Check, {
      type: "checkbox",
      label: "\u0627\u0646\u062D\u0635\u0627\u0631\u0627 \u0627\u06CC\u0646 \u0641\u0631\u0645 \u0645\u062E\u0635\u0648\u0635 \u0634\u0645\u0627 \u0628\u0627\u0634\u062F",
      checked: this.state.OnlyMe,
      onChange: e => {
        let onlyMe = this.state.OnlyMe;

        if (!onlyMe) {
          onlyMe = true;
        } else {
          onlyMe = false;
        }

        this.setState({
          OnlyMe: onlyMe
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 53
      }
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 41
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 41
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
      md: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 45
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      id: 'save',
      onClick: () => {
        this.save();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 49
      }
    }, "\u0630\u062E\u06CC\u0631\u0647 \u062A\u063A\u06CC\u06CC\u0631\u0627\u062A"), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 41
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 41
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
      md: 5,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 45
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormCreatorToolsMenu, {
      parent: this,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 49
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
      md: 7,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 45
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 49
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 53
      }
    }, this.state.elements && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 81
      }
    }, "\u0644\u06CC\u0633\u062A \u0641\u06CC\u0644\u062F \u0647\u0627\u06CC \u062A\u0639\u0631\u06CC\u0641 \u0634\u062F\u0647 "), (!this.state.elements || !this.state.elements.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 57
      }
    }, "\u0627\u0632 \u0645\u0646\u0648\u06CC \u0627\u0628\u0632\u0627\u0631 \u0627\u0628\u062A\u062F\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0645\u0627\u06CC\u06CC\u062F"), this.state.elements && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormRenderer, {
      elements: this.state.elements,
      editable: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 57
      }
    }), this.state.elementsError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      style: {
        color: 'darkred'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 86
      }
    }, this.state.elementsError))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Modal__WEBPACK_IMPORTED_MODULE_7__["MyModal"], {
      show: this.state.showModal,
      handleClose: () => {
        this.setState({
          showModal: false
        });
      },
      title: "ویرایش ورودی های فرم ",
      onSave: () => {
        this.setState({
          tmp: Math.random()
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EditElementForm, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 21
      }
    })));
  }

  save() {
    if (!Object(_Components_FormInputs__WEBPACK_IMPORTED_MODULE_4__["CallValidation"])('form')) {
      if (!this.state.elements || !this.state.elements.length) {
        this.setState({
          elementsError: 'هیچ ورودی برای فرم انتخاب نشده است'
        });
        return;
      }
    } else {
      if (!this.state.elements || !this.state.elements.length) {
        this.setState({
          elementsError: 'هیچ ورودی برای فرم انتخاب نشده است'
        });
        return;
      }
    }

    if (this.validateInputSubElements() === false) {
      this.setState({
        elementsError: 'برای چک باکس ها و ورودی های انتخاب دار ، باید مقادیر تعریف نمایید'
      });
      return;
    }

    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showMsg('در حال ذخیره فرم');
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send('SaveForm', {
      elements: this.state.elements,
      Name: this.state.Name,
      AfterMessage: this.state.AfterMessage,
      Message: this.state.Message,
      OnlyMe: this.state.OnlyMe ? true : false,
      Id: this.state.Id
    });
  }

  clearForm() {
    this.setState({
      elements: [],
      Name: '',
      AfterMessage: '',
      Message: '',
      OnlyMe: false,
      Id: null
    });
  }

  validateInputSubElements() {
    /*
    * 
    * هیچ چک باکسی نباید بدون الیمنت زیر مجموع باشد
    * */
    for (let i = 0; i < this.state.elements.length; i++) {
      if (this.state.elements[i].type == 'checkbox' || this.state.elements[i].type == 'radio') {
        if (!this.state.elements[i].SubElements || this.state.elements[i].SubElements.length === 0) {
          return false;
        }
      }
    }

    return true;
  }

  saveFormCallback(res) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showMsg('تغییرات با موفقیت اعمال شد');

    if (_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].CreatedForms) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].CreatedForms.componentDidMount();
    }

    this.clearForm();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FormCreatorPage);
class FormCreatorToolsMenu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  select(type) {
    this.props.parent.addNewFormElement({
      type: type,
      Value: ''
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'toolsMenuFormCreator',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 392,
        columnNumber: 17
      }
    }, "\u0646\u0648\u0627\u0631 \u0627\u0628\u0632\u0627\u0631"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormElement, {
      onClick: () => this.select('input'),
      id: 'addElementInput',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormElement, {
      onClick: () => this.select('textarea'),
      id: 'addElementTextArea',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 400,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormElement, {
      onClick: () => this.select('checkbox'),
      id: 'addElementCheckBox',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 405,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormElement, {
      onClick: () => this.select('radio'),
      id: 'addElementRadio',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "radio",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415,
        columnNumber: 17
      }
    }));
  }

}

const FormElement = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'fillerHolder',
    id: props.id,
    onClick: () => {
      props.onClick();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'filler',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 9
    }
  }), props.children);
};

const FormRendererSingleElement = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'FormRendererSingleElement',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    className: 'fullWidth',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Card"].Body, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: 'fullWidth',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
    md: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      float: 'left'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 25
    }
  }, props.editable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    onClick: () => {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].FormCreatorPage.DeleteElement(props.el, props.j);
    },
    variant: "default",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: 'pointer  floatLeft text-danger',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-trash",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 37
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 25
    }
  }, props.el.Name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 49
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 56
    }
  }, "\u0639\u0646\u0648\u0627\u0646 \u0641\u06CC\u0644\u062F :"), props.el.Name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 104
    }
  })), props.children, props.el.Help && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 47
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 54
    }
  }, "\u0645\u062A\u0646 \u0631\u0627\u0647\u0646\u0645\u0627 :"), props.el.Help))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
    md: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 21
    }
  }, props.editable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    className: 'editElement',
    onClick: () => {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedElementIndex = props.j;
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].FormCreatorPage.setState({
        showModal: true
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473,
      columnNumber: 44
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fa fa-pencil",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480,
      columnNumber: 29
    }
  })))))));
};

class FormRenderer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 495,
        columnNumber: 13
      }
    }, this.props.elements && this.props.elements.map((el, i, arr) => {
      if (el.type === 'input') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormRendererSingleElement, {
          el: el,
          j: i,
          editable: this.props.editable,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 505,
            columnNumber: 29
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_FormInputs__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          readonly: !this.props.editable ? 'readonly' : null,
          value: el.Value,
          onChange: e => {
            el.Value = e.target.value;
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 507,
            columnNumber: 33
          }
        }));
      }

      if (el.type === 'textarea') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormRendererSingleElement, {
          el: el,
          j: i,
          editable: this.props.editable,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 519,
            columnNumber: 29
          }
        }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
          readonly: !this.props.editable ? 'readonly' : null,
          className: 'form-control',
          value: el.Value,
          onChange: e => {
            el.Value = e.target.value;
          },
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 519,
            columnNumber: 102
          }
        }));
      }

      if (el.type === 'checkbox') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormRendererSingleElement, {
          el: el,
          j: i,
          editable: this.props.editable,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 533,
            columnNumber: 29
          }
        }, showSubElements(el, this.props.editable));
      }

      if (el.type === 'radio') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormRendererSingleElement, {
          el: el,
          j: i,
          editable: this.props.editable,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 552,
            columnNumber: 29
          }
        }, showSubElements(el, this.props.editable));
      }
    }));
  }

}
class CreatedForms extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].CreatedForms = this;
  }

  componentDidMount() {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send('GetCreatedForms');
  }

  getCreatedFormsCallback(res) {
    if (!res || !res.Content || !res.Content.EntityList) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showError('لیست فرم ها نال است');
      return;
    }

    this.setState({
      formList: res.Content.EntityList
    });
  }

  select(form) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showMsg('در حال خواندن اطلاعات فرم');
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send('GetFormSingle', {
      formId: form.Id
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 608,
        columnNumber: 13
      }
    }, !this.state.formList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 610,
        columnNumber: 17
      }
    }, "\u062F\u0631 \u062D\u0627\u0644 \u062E\u0648\u0627\u0646\u062F\u0646 \u0641\u0631\u0645 \u0647\u0627\u06CC \u062A\u0639\u0631\u06CC\u0641 \u0634\u062F\u0647"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"], {
      className: 'listGroup',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 612,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
      className: ' text-primary',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 615,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 617,
        columnNumber: 25
      }
    }, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: 'pointer  floatRight  text-secondary ',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 620,
        columnNumber: 25
      }
    }, "\u0648\u06CC\u0631\u0627\u06CC\u0634"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: 'pointer  floatLeft  text-info ',
      title: 'نمایش اطلاعات وارد شده',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 624,
        columnNumber: 25
      }
    }, "\u0627\u0637\u0644\u0627\u0639\u0627\u062A")), this.state.formList && this.state.formList.map((el, i, arr) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ListGroup"].Item, {
        key: i,
        className: ' text-primary',
        onClick: () => {
          this.select(el);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 636,
          columnNumber: 29
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 640,
          columnNumber: 33
        }
      }, el.Name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: 'pointer  floatRight  text-secondary ',
        onClick: () => {
          _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedForm = el;
          _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showMsg('در حال خواندن اطلاعات فرم');
          _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send('GetFormSingle', {
            formId: el.Id
          });
          _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].Menu.setPage('FormCreator');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 643,
          columnNumber: 33
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-pencil",
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 654,
          columnNumber: 37
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: 'pointer  floatLeft  text-info ',
        title: 'نمایش اطلاعات وارد شده',
        onClick: () => {
          _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedForm = el;
          _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.showMsg('در حال خواندن اطلاعات ');
          _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send('GetFormData', {
            formId: el.Id
          });
          _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].Menu.setPage('FormDataPage');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 657,
          columnNumber: 33
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-table",
        "aria-hidden": "true",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 671,
          columnNumber: 37
        }
      }))));
    })));
  }

}

function showSubElements(el, editable) {
  if (!el.SubElements) {
    if (el.type === 'checkbox' || el.type === 'radio') {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 692,
          columnNumber: 20
        }
      }, "\u0645\u0642\u0627\u062F\u06CC\u0631 \u0686\u06A9 \u0628\u0627\u06A9 \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A");
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    }
  }

  return el.SubElements.map((subEl, j, arrr) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: subEl.Tmp,
      dir: 'rtl',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 705,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
      md: 2,
      style: {
        paddingTop: '42px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 707,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_FormInputs__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      readonly: !editable ? 'readonly' : null,
      checked: el.Value === subEl.Value ? 'checked' : null,
      elname: el.FieldName,
      type: el.type,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 708,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 718,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_FormInputs__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      className: 'subelement',
      readonly: !editable ? 'readonly' : null,
      value: subEl.Value,
      type: 'text',
      elname: el.FieldName,
      name: 'متن',
      onChange: e => {
        subEl.Value = e.target.value;
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 719,
        columnNumber: 17
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 733,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_FormInputs__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      className: 'subelement',
      readonly: !editable ? 'readonly' : null,
      value: subEl.FieldName,
      elname: el.FieldName,
      type: 'text',
      name: 'مقدار',
      onChange: e => {
        subEl.FieldName = e.target.value;
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 735,
        columnNumber: 17
      }
    })));
  });
}

class EditElementForm extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    if (_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedElementIndex == null || _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedElementIndex == undefined) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 759,
          columnNumber: 20
        }
      }, "\u0647\u06CC\u0686 \u0627\u0644\u0645\u0646\u062A\u06CC \u0627\u0646\u062A\u062E\u0627\u0628 \u0646\u0634\u062F\u0647 \u0627\u0633\u062A");
    }

    if (!_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].FormCreatorPage || !_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].FormCreatorPage.state || !_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].FormCreatorPage.state.elements) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 764,
          columnNumber: 20
        }
      }, "\u0645\u0642\u0627\u062F\u06CC\u0631 \u0646\u0627\u0644 \u0647\u0633\u062A\u0646\u062F");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'editForm',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 769,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_FormInputs__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      value: _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].FormCreatorPage.state.elements[_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedElementIndex].Name,
      type: 'text',
      id: 'fieldTitle',
      onChange: e => {
        _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].FormCreatorPage.state.elements[_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedElementIndex].Name = e.target.value;
      },
      name: 'عنوان فیلد',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 772,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_FormInputs__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      value: _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].FormCreatorPage.state.elements[_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedElementIndex].Help,
      id: 'fieldHelp',
      type: 'text',
      onChange: e => {
        _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].FormCreatorPage.state.elements[_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedElementIndex].Help = e.target.value;
      },
      name: 'متن راهنما',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 781,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_FormInputs__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      value: _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].FormCreatorPage.state.elements[_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedElementIndex].FieldName,
      id: 'fieldName',
      type: 'text',
      onChange: e => {
        _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].FormCreatorPage.state.elements[_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedElementIndex].FieldName = e.target.value;
      },
      name: 'نام یکتای فیلد',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 793,
        columnNumber: 17
      }
    }), (_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].FormCreatorPage.state.elements[_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedElementIndex].type === 'checkbox' || _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].FormCreatorPage.state.elements[_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedElementIndex].type === 'radio') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 811,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      id: 'addSubElements',
      variant: 'default',
      onClick: () => {
        this.addSubElement(_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].FormCreatorPage.state.elements[_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedElementIndex]);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 812,
        columnNumber: 21
      }
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 814,
        columnNumber: 25
      }
    }, "+"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 814,
        columnNumber: 40
      }
    }, "\u0645\u0642\u0627\u062F\u06CC\u0631 \u0642\u0627\u0628\u0644 \u0627\u0646\u062A\u062E\u0627\u0628"), " ")), showSubElements(_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].FormCreatorPage.state.elements[_Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].selectedElementIndex], true));
  }

  addSubElement(element) {
    if (!element.SubElements) {
      element.SubElements = [];
    }

    element.SubElements.push({
      Tmp: Math.random()
    });
    this.setState({
      tmp: Math.random()
    });
  }

}

/***/ }),

/***/ "./src/Pages/FormDataPage.js":
/*!***********************************!*\
  !*** ./src/Pages/FormDataPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormCreatorPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormCreatorPage */ "./src/Pages/FormCreatorPage.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/myStyle.css */ "./src/styles/myStyle.css");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_myStyle_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_FormDataTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/FormDataTable */ "./src/Components/FormDataTable.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Pages\\FormDataPage.js";






class FormDataPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      md: 3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormCreatorPage__WEBPACK_IMPORTED_MODULE_1__["CreatedForms"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 29
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
      md: 9,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_FormDataTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 29
      }
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FormDataPage);

/***/ }),

/***/ "./src/Pages/HelpDeskPage.js":
/*!***********************************!*\
  !*** ./src/Pages/HelpDeskPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_SendFromHelpDesk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/SendFromHelpDesk */ "./src/Components/SendFromHelpDesk.js");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button.js");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var _LayoutPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LayoutPage */ "./src/Pages/LayoutPage.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Help/DataHolder */ "./src/Help/DataHolder.js");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primereact/toast */ "./node_modules/primereact/toast.js");
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primereact_toast__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Pages\\HelpDeskPage.js";












class HelpDeskPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(arg) {
    super(arg);
    this.state = {};
    _Help_Socket__WEBPACK_IMPORTED_MODULE_3__["CurrentUserInfo"].HelpDeskPage = this;
  }

  buttons(rowData) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 16
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      label: "\u062D\u0630\u0641",
      icon: 'pi pi-times',
      className: "p-button-danger",
      onClick: () => {
        _Help_DataHolder__WEBPACK_IMPORTED_MODULE_7__["DataHolder"].HelpDeskRowDataSelected = rowData;
        _Help_Socket__WEBPACK_IMPORTED_MODULE_3__["CurrentUserInfo"].HelpDeskPage.confirmModal();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      label: "\u0648\u06CC\u0631\u0627\u06CC\u0634",
      icon: 'pi pi-pencil',
      className: "p-button-success",
      onClick: () => {
        _Help_DataHolder__WEBPACK_IMPORTED_MODULE_7__["DataHolder"].subPage = 'SaveArticle';
        _Help_DataHolder__WEBPACK_IMPORTED_MODULE_7__["DataHolder"].HelpDeskRowDataSelected = rowData;
        _Help_Socket__WEBPACK_IMPORTED_MODULE_3__["CurrentUserInfo"].LayoutPage.setState({
          tmp: Math.random()
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }));
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__["default"], {
      dir: 'rtl',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      label: "\u0645\u0642\u0627\u0644\u0647 \u062C\u062F\u06CC\u062F",
      icon: 'pi pi-plus',
      className: "p-button-primary",
      onClick: () => {
        this.setState({
          deleteModal: true
        }); //  DataHolder.subPage = 'SaveArticle';
        //  CurrentUserInfo.LayoutPage.setState({tmp: Math.random()});
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 25
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_SendFromHelpDesk__WEBPACK_IMPORTED_MODULE_1__["default"], {
      actionButtons: r => this.buttons(r),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 25
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_toast__WEBPACK_IMPORTED_MODULE_9__["Toast"], {
      ref: el => this.toastBC = el,
      position: "bottom-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }));
  }

  hD_DeleteByIdCallback(res) {
    Object(_LayoutPage__WEBPACK_IMPORTED_MODULE_4__["_showMsg"])("با موفقیت حذف شد");

    _Help_Socket__WEBPACK_IMPORTED_MODULE_3__["CurrentUserInfo"].SendFromHelpDesk.onSearch();
  }

  confirmModal() {
    if (this.state.isToastOpen) {
      return;
    }

    this.setState({
      isToastOpen: true
    });
    this.toastBC.show({
      severity: 'warn',
      sticky: true,
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10__["default"], {
        md: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 23
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "pi pi-exclamation-triangle",
        style: {
          fontSize: '3rem'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 27
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 27
        }
      }, "\u0622\u06CC\u0627 \u0627\u0632 \u062D\u0630\u0641 \u0627\u06CC\u0646 \u0645\u0642\u0627\u0644\u0647 \u0627\u0637\u0645\u06CC\u0646\u0627\u0646 \u062F\u0627\u0631\u06CC\u062F \u061F"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10__["default"], {
        md: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 22
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10__["default"], {
        md: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 26
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        style: {
          width: '100%'
        },
        type: "button",
        label: "\u0628\u0644\u0647",
        className: "p-button-success",
        onClick: () => {
          this.setState({
            isToastOpen: false
          });
          this.toastBC.clear();
          this.deleteArticle();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 30
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10__["default"], {
        md: 6,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 26
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: () => {
          this.setState({
            isToastOpen: false
          });
          this.toastBC.clear();
        },
        style: {
          width: '100%'
        },
        type: "button",
        label: "\u0644\u063A\u0648",
        className: "p-button-secondary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 30
        }
      })))))
    });
  }

  deleteArticle() {
    if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_7__["DataHolder"].HelpDeskRowDataSelected) {
      Object(_LayoutPage__WEBPACK_IMPORTED_MODULE_4__["_showError"])('هیچ مقاله ای برای حذف انتخاب نشده است');

      return;
    }

    Object(_LayoutPage__WEBPACK_IMPORTED_MODULE_4__["_showMsg"])("در حال حذف مقاله");

    MyCaller.Send('HD_DeleteById', {
      id: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_7__["DataHolder"].HelpDeskRowDataSelected.Id
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HelpDeskPage);

/***/ }),

/***/ "./src/Pages/LayoutPage.js":
/*!*********************************!*\
  !*** ./src/Pages/LayoutPage.js ***!
  \*********************************/
/*! exports provided: default, _showError, _showConstantMsg, _showMsg, MessageAlerts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LayoutPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_showError", function() { return _showError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_showConstantMsg", function() { return _showConstantMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_showMsg", function() { return _showMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageAlerts", function() { return MessageAlerts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChatPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatPage */ "./src/Pages/ChatPage.js");
/* harmony import */ var _LoginPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginPage */ "./src/Pages/LoginPage.js");
/* harmony import */ var _Help_CookieManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Help/CookieManager */ "./src/Help/CookieManager.js");
/* harmony import */ var _Help_MyGlobal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../Help/MyGlobal */ "./src/Help/MyGlobal.js");
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../Help/DataHolder */ "./src/Help/DataHolder.js");
/* harmony import */ var _Components_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Components/Menu */ "./src/Components/Menu.js");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/myStyle.css */ "./src/styles/myStyle.css");
/* harmony import */ var _styles_myStyle_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_myStyle_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _WaitingForAnswer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WaitingForAnswer */ "./src/Pages/WaitingForAnswer.js");
/* harmony import */ var _AllCustomerListPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AllCustomerListPage */ "./src/Pages/AllCustomerListPage.js");
/* harmony import */ var _Answered__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Answered */ "./src/Pages/Answered.js");
/* harmony import */ var _NotChatted__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NotChatted */ "./src/Pages/NotChatted.js");
/* harmony import */ var _NotChattedLeftCustomerListPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./NotChattedLeftCustomerListPage */ "./src/Pages/NotChattedLeftCustomerListPage.js");
/* harmony import */ var _ChattedAndReturnedCustomerListPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ChattedAndReturnedCustomerListPage */ "./src/Pages/ChattedAndReturnedCustomerListPage.js");
/* harmony import */ var _SepratePerPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SepratePerPage */ "./src/Pages/SepratePerPage.js");
/* harmony import */ var _SeparatePerPageCustomerListPage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SeparatePerPageCustomerListPage */ "./src/Pages/SeparatePerPageCustomerListPage.js");
/* harmony import */ var _fakeServer_FakeServerMonitor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../fakeServer/FakeServerMonitor */ "./src/fakeServer/FakeServerMonitor.js");
/* harmony import */ var _ProfilePage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ProfilePage */ "./src/Pages/ProfilePage.js");
/* harmony import */ var _SocialChannelsPage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./SocialChannelsPage */ "./src/Pages/SocialChannelsPage.js");
/* harmony import */ var _FormCreatorPage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./FormCreatorPage */ "./src/Pages/FormCreatorPage.js");
/* harmony import */ var _FormDataPage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./FormDataPage */ "./src/Pages/FormDataPage.js");
/* harmony import */ var _Components_Chat__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../Components/Chat */ "./src/Components/Chat.js");
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primereact/toast */ "./node_modules/primereact/toast.js");
/* harmony import */ var primereact_toast__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primereact_toast__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var primereact_message__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primereact/message */ "./node_modules/primereact/message.js");
/* harmony import */ var primereact_message__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primereact_message__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-bootstrap/Spinner */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primereact/button */ "./node_modules/primereact/button.js");
/* harmony import */ var primereact_button__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(primereact_button__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _HelpDeskPage__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./HelpDeskPage */ "./src/Pages/HelpDeskPage.js");
/* harmony import */ var _Components_SaveArticle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../Components/SaveArticle */ "./src/Components/SaveArticle.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Pages\\LayoutPage.js";





























class LayoutPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    };
    _Help_Socket__WEBPACK_IMPORTED_MODULE_5__["CurrentUserInfo"].LayoutPage = this;
  }

  showConstantMsg(msg, type, callback) {
    this.setState({
      constantMsg: msg,
      constantMsgType: type,
      constantMsgCallback: callback
    });
  }

  showError(msg) {
    if (msg) {
      if (this.toast) {
        this.toast.show({
          severity: 'error',
          summary: 'پیغام',
          detail: msg
        });
      } else {
        this.setState({
          err: msg
        });
        setTimeout(() => {
          this.setState({
            err: null
          });
        }, 2000);
      }
    }
  }

  showMsg(msg) {
    if (msg) {
      if (this.toast) {
        this.toast.show({
          severity: 'info',
          summary: 'پیغام',
          detail: msg
        });
      } else {
        this.setState({
          msg: msg
        });
        setTimeout(() => {
          this.setState({
            msg: null
          });
        }, 2000);
      }
    }
  }

  componentWillMount() {
    if (_Help_MyGlobal__WEBPACK_IMPORTED_MODULE_4__["MyGlobal"].isTestingEnvirement) {
      _Help_CookieManager__WEBPACK_IMPORTED_MODULE_3__["cookieManager"].setItem("adminToken", "sdlflksdf");
      this.setState({
        isLogin: true
      });
    }
  }

  render() {
    let adminToken = _Help_CookieManager__WEBPACK_IMPORTED_MODULE_3__["cookieManager"].getItem("adminToken"); //console.log(adminToken)

    if (this.state.isClearCookie) {
      adminToken = null;
    } // console.log(adminToken)


    if (adminToken && adminToken != 'null' && adminToken != 'undefined') {
      if (!_Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].currentPage) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 21
          }
        }, this.state.focusForSelectingAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "hideWhole",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 64
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_toast__WEBPACK_IMPORTED_MODULE_23__["Toast"], {
          position: "bottom-left",
          ref: el => this.toast = el,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 25
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 25
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MessageAlerts, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 25
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChatPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }
        }));
      } else if (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].currentPage === 'FakeServerMonitor') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 19
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_toast__WEBPACK_IMPORTED_MODULE_23__["Toast"], {
          position: "bottom-left",
          ref: el => this.toast = el,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 23
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 23
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MessageAlerts, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 23
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fakeServer_FakeServerMonitor__WEBPACK_IMPORTED_MODULE_17__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 23
          }
        }));
      } else if (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].currentPage === "FormCreator") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.focusForSelectingAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "hideWhole",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 64
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_toast__WEBPACK_IMPORTED_MODULE_23__["Toast"], {
          position: "bottom-left",
          ref: el => this.toast = el,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 25
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 25
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MessageAlerts, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 25
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormCreatorPage__WEBPACK_IMPORTED_MODULE_20__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 25
          }
        }));
      } else if (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].currentPage === "AutomaticSend") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.focusForSelectingAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "hideWhole",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 64
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_toast__WEBPACK_IMPORTED_MODULE_23__["Toast"], {
          position: "bottom-left",
          ref: el => this.toast = el,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 25
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 25
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MessageAlerts, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 25
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Chat__WEBPACK_IMPORTED_MODULE_22__["AutomaticSendPage"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 25
          }
        }));
      } else if (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].currentPage === "ProfilePage") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.focusForSelectingAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "hideWhole",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 64
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_toast__WEBPACK_IMPORTED_MODULE_23__["Toast"], {
          position: "bottom-left",
          ref: el => this.toast = el,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 25
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 25
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MessageAlerts, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 25
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProfilePage__WEBPACK_IMPORTED_MODULE_18__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 25
          }
        }));
      } else if (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].currentPage === "FormDataPage") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.focusForSelectingAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "hideWhole",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 64
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_toast__WEBPACK_IMPORTED_MODULE_23__["Toast"], {
          position: "bottom-left",
          ref: el => this.toast = el,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 25
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 25
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MessageAlerts, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 25
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FormDataPage__WEBPACK_IMPORTED_MODULE_21__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 25
          }
        }));
      } else if (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].currentPage === "SocialChannels") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.focusForSelectingAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "hideWhole",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 64
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_toast__WEBPACK_IMPORTED_MODULE_23__["Toast"], {
          position: "bottom-left",
          ref: el => this.toast = el,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 25
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 25
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MessageAlerts, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 25
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SocialChannelsPage__WEBPACK_IMPORTED_MODULE_19__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 25
          }
        }));
      } else if (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].currentPage === "HelpDeskPage") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.focusForSelectingAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "hideWhole",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 64
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_toast__WEBPACK_IMPORTED_MODULE_23__["Toast"], {
          position: "bottom-left",
          ref: el => this.toast = el,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211,
            columnNumber: 25
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212,
            columnNumber: 25
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MessageAlerts, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 25
          }
        }), !_Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].subPage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HelpDeskPage__WEBPACK_IMPORTED_MODULE_27__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 25
          }
        }), _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].subPage === 'SaveArticle' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_SaveArticle__WEBPACK_IMPORTED_MODULE_28__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 25
          }
        }));
      } else if (_Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].currentPage === "CustomerList") {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.focusForSelectingAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "hideWhole",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 64
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_toast__WEBPACK_IMPORTED_MODULE_23__["Toast"], {
          position: "bottom-left",
          ref: el => this.toast = el,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 234,
            columnNumber: 25
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 25
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MessageAlerts, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 25
          }
        }), _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].filterType === 'WaitingForAnswer' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WaitingForAnswer__WEBPACK_IMPORTED_MODULE_9__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 25
          }
        }), _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].filterType === 'Answered' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Answered__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 25
          }
        }), _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].filterType === 'AllCustomerListPage' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AllCustomerListPage__WEBPACK_IMPORTED_MODULE_10__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 25
          }
        }), _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].filterType === 'NotChatted' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NotChatted__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 25
          }
        }), _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].filterType === 'ChattedAndReturnedCustomerListPage' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ChattedAndReturnedCustomerListPage__WEBPACK_IMPORTED_MODULE_14__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 25
          }
        }), _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].filterType === 'NotChattedLeftCustomerListPage' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NotChattedLeftCustomerListPage__WEBPACK_IMPORTED_MODULE_13__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 256,
            columnNumber: 25
          }
        }), _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].filterType === 'SepratePerPage' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SepratePerPage__WEBPACK_IMPORTED_MODULE_15__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 260,
            columnNumber: 25
          }
        }), _Help_DataHolder__WEBPACK_IMPORTED_MODULE_6__["DataHolder"].filterType === 'SeparatePerPageCustomerListPage' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SeparatePerPageCustomerListPage__WEBPACK_IMPORTED_MODULE_16__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 25
          }
        }));
      }
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_toast__WEBPACK_IMPORTED_MODULE_23__["Toast"], {
        position: "bottom-left",
        ref: el => this.toast = el,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MessageAlerts, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278,
          columnNumber: 21
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoginPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
        parent: this,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 21
        }
      }));
    }
  }

}
function _showError(msgf) {
  _Help_Socket__WEBPACK_IMPORTED_MODULE_5__["CurrentUserInfo"].LayoutPage.showError(msgf);
}
function _showConstantMsg(msgf, type, callback) {
  _Help_Socket__WEBPACK_IMPORTED_MODULE_5__["CurrentUserInfo"].LayoutPage.showConstantMsg(msgf, type, callback);
}
function _showMsg(msg) {
  _Help_Socket__WEBPACK_IMPORTED_MODULE_5__["CurrentUserInfo"].LayoutPage.showMsg(msg);
}
function MessageAlerts(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, _Help_Socket__WEBPACK_IMPORTED_MODULE_5__["CurrentUserInfo"].LayoutPage.state.err && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert alert-danger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 51
    }
  }, _Help_Socket__WEBPACK_IMPORTED_MODULE_5__["CurrentUserInfo"].LayoutPage.state.err), _Help_Socket__WEBPACK_IMPORTED_MODULE_5__["CurrentUserInfo"].LayoutPage.state.msg && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert alert-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 50
    }
  }, _Help_Socket__WEBPACK_IMPORTED_MODULE_5__["CurrentUserInfo"].LayoutPage.state.msg), _Help_Socket__WEBPACK_IMPORTED_MODULE_5__["CurrentUserInfo"].LayoutPage.state.constantMsg && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert alert-" + (_Help_Socket__WEBPACK_IMPORTED_MODULE_5__["CurrentUserInfo"].LayoutPage.state.constantMsgType ? _Help_Socket__WEBPACK_IMPORTED_MODULE_5__["CurrentUserInfo"].LayoutPage.state.constantMsgType : 'success'),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(primereact_button__WEBPACK_IMPORTED_MODULE_26__["Button"], {
    icon: "pi pi-times",
    onClick: () => {
      if (_Help_Socket__WEBPACK_IMPORTED_MODULE_5__["CurrentUserInfo"].LayoutPage.state.constantMsgCallback) _Help_Socket__WEBPACK_IMPORTED_MODULE_5__["CurrentUserInfo"].LayoutPage.state.constantMsgCallback();
    },
    className: "p-button-rounded p-button-text p-button-plain",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 13
    }
  }), _Help_Socket__WEBPACK_IMPORTED_MODULE_5__["CurrentUserInfo"].LayoutPage.state.constantMsg, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_25__["default"], {
    animation: "grow",
    variant: "info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330,
      columnNumber: 13
    }
  })));
}

/***/ }),

/***/ "./src/Pages/LoginPage.js":
/*!********************************!*\
  !*** ./src/Pages/LoginPage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var _Help_CookieManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Help/CookieManager */ "./src/Help/CookieManager.js");
/* harmony import */ var _Help_MyGlobal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Help/MyGlobal */ "./src/Help/MyGlobal.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Pages\\LoginPage.js";





class LoginPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(arg) {
    super(arg);
    this.state = {};
    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LoginPage = this;
  }

  adminLoginCallback(res) {
    if (res.Type === 0) {
      var token = res.Token;
      _Help_CookieManager__WEBPACK_IMPORTED_MODULE_2__["cookieManager"].setItem('adminToken', token);
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].targetId = res.Content.Id;
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].targetName = res.Content.Name;
      _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["CurrentUserInfo"].LayoutPage.setState({
        isLogin: true,
        isClearCookie: false
      });
    } else {
      this.setState({
        err: 'نام کاربری یا رمز عبور صحیح نیست'
      });
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container h-100 row align-items-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-4 ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 6
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-6  mt-md-3 ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 6
      }
    }, this.state.err && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "alert alert-danger",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 20
      }
    }, this.state.err), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 3
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      for: "exampleInputEmail1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5
      }
    }, "\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      id: 'username',
      type: "text",
      className: "form-control",
      "aria-describedby": "emailHelp",
      placeholder: "\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0631\u0627 \u0648\u0627\u0631\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F",
      onChange: e => this.setState({
        username: e.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      id: "emailHelp",
      className: "form-text text-muted",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }
    }, "\u0646\u0627\u0645 \u06A9\u0627\u0631\u0628\u0631\u06CC \u0648 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0627\u0632 \u062F\u0627\u0634\u0628\u0648\u0631\u062F /  \u0642\u0633\u0645\u062A \u062A\u0639\u0631\u06CC\u0641 \u0627\u062F\u0645\u06CC\u0646 \u0642\u0627\u0628\u0644 \u062F\u0633\u062A\u0631\u0633 \u0627\u0633\u062A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 3
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      for: "exampleInputPassword1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 5
      }
    }, "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      id: 'password',
      onChange: e => this.setState({
        password: e.target.value
      }),
      type: "password",
      className: "form-control",
      placeholder: "\u0631\u0645\u0632 \u0639\u0628\u0648\u0631",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 5
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: () => {
        this.login();
      },
      type: "submit",
      id: 'login',
      className: "btn btn-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 3
      }
    }, "\u0648\u0631\u0648\u062F ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-md-3 ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 3
      }
    }));
  }

  login() {
    if (!this.state.username || !this.state.password) {
      this.setState({
        err: 'اطلاعات صحیح وارد نشده است'
      });
      return;
    }

    if (_Help_MyGlobal__WEBPACK_IMPORTED_MODULE_3__["MyGlobal"].isTestingEnvirement) {
      this.adminLoginCallback({
        Type: 0,
        Token: "sdlfjslkdfj",
        Content: {}
      });
    }

    _Help_Socket__WEBPACK_IMPORTED_MODULE_1__["MyCaller"].Send("AdminLogin", {
      username: this.state.username,
      password: this.state.password
    });
  }

}

/***/ }),

/***/ "./src/Pages/NotChatted.js":
/*!*********************************!*\
  !*** ./src/Pages/NotChatted.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotChatted; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OnlineCustomerListHolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OnlineCustomerListHolder */ "./src/Pages/OnlineCustomerListHolder.js");
/* harmony import */ var _Help_ChangeUserTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Help/ChangeUserTypes */ "./src/Help/ChangeUserTypes.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Pages\\NotChatted.js";



class NotChatted extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    Object(_Help_ChangeUserTypes__WEBPACK_IMPORTED_MODULE_2__["changeUserTypes"])('NotChatted');
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnlineCustomerListHolder__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 1
      }
    }));
  }

}

/***/ }),

/***/ "./src/Pages/NotChattedLeftCustomerListPage.js":
/*!*****************************************************!*\
  !*** ./src/Pages/NotChattedLeftCustomerListPage.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotChattedLeftCustomerListPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OnlineCustomerListHolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OnlineCustomerListHolder */ "./src/Pages/OnlineCustomerListHolder.js");
/* harmony import */ var _Help_ChangeUserTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Help/ChangeUserTypes */ "./src/Help/ChangeUserTypes.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Pages\\NotChattedLeftCustomerListPage.js";



class NotChattedLeftCustomerListPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    Object(_Help_ChangeUserTypes__WEBPACK_IMPORTED_MODULE_2__["changeUserTypes"])('NotChattedLeftCustomerListPage');
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnlineCustomerListHolder__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 1
      }
    }));
  }

}

/***/ }),

/***/ "./src/Pages/OnlineCustomerListHolder.js":
/*!***********************************************!*\
  !*** ./src/Pages/OnlineCustomerListHolder.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OnlineCustomerListHolder; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_OnlineCustomerList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Components/OnlineCustomerList */ "./src/Components/OnlineCustomerList.js");
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Help/DataHolder */ "./src/Help/DataHolder.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Pages\\OnlineCustomerListHolder.js";






class OnlineCustomerListHolder extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(args) {
    super(args);
    this.state = {
      list: []
    };
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].OnlineCustomerListHolder = this;
  }

  userAddedToTagsCallback(res) {
    this.GetClientsListForAdmin();
  }

  customerTypingHelper(res, isTyping) {
    if (!res || !res.Content.targetCustomerId) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].LayoutPage.showError('کاربر ی در حال تایپ است بدون کد کاربر ارسال شده است ');
      return;
    }

    if (!this.state.list) {
      return;
    }

    let j = this.state.list.findIndex(f => f.Id === res.Content.targetCustomerId);

    if (j === -1) {
      return;
    }

    this.state.list[j].IsTyping = isTyping;
    this.setState({
      tmp: Math.random()
    });
  }

  customerStartTypingCallback(res) {
    this.customerTypingHelper(res, true);
  }

  customerStopTypingCallback(res) {
    this.customerTypingHelper(res, false);
  }

  totalUserCountsChangedCallback(res) {
    /* CustomerId=w.Id,
         TotalNewChatSentByCustomer=w.Chats.Count(c =>
             c.SenderType==ChatSenderType.CustomerToAccount && c.DeliverDateTime.HasValue==false),
         OnlineStatus*/
    if (!res.Content.CustomerList || !res.Content.CustomerList.length) {
      console.log('res.CustomerList is null or empty');
      return;
    }

    let arr = this.state.list;

    if (!arr) {
      arr = [];
      return;
    }

    for (let i = 0; i < res.Content.CustomerList.length; i++) {
      let CustomerId = res.Content.CustomerList[i].CustomerId;
      let TotalNewChatSentByCustomer = res.Content.CustomerList[i].TotalNewChatSentByCustomer;
      let OnlineStatus = res.Content.CustomerList[i].OnlineStatus;
      let j = arr.findIndex(f => f.Id === CustomerId);

      if (j !== -1) {
        arr[j].OnlineStatus = OnlineStatus;
        arr[j].NewMessageCount = TotalNewChatSentByCustomer;
      }
    }

    this.setState({
      list: arr,
      tmp: Math.random()
    });
  }

  customerOnlineAgainCallback(res) {
    this.newCustomerOnlineCallback(res);
  }

  customerOfflineAgainCallback(res) {
    this.newCustomerOnlineCallback(res);
  }

  newCustomerOnlineCallback(res) {
    if (res.Content.OnlineTp != _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].UserType) {
      console.log(res);
      console.log(`res.Content.Type!=CurrentUserInfo.UserType res.Content.Type= ${res.Content.Type}!=${_Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].UserType}`);
      return;
    }

    let arr = this.state.list;

    if (!arr) {
      arr = [];
    }

    let i = arr.findIndex(f => f.Id === res.Content.Id);

    if (i != -1) {
      /*   if (res.Content.OnlineStatus===0 || res.Content.OnlineStatus==='0'){
             
         }*/
      arr[i] = res.Content;
    } else {
      arr.push(res.Content);
    }

    this.setState({
      list: arr
    });
  }

  multimediaPmSendCallback(res) {
    this.customerSendToAdminCallback(res);
  }

  customerSendToAdminCallback(res) {
    //debugger;
    let CustomerId = res.Content.CustomerId;
    let Message = res.Content.Message;
    let TotalReceivedMesssages = res.Content.TotalReceivedMesssages;
    let chat = res.Content.Chat;

    if (!this.state.list) {
      return;
    }

    let i = this.state.list.findIndex(c => c.Id == CustomerId);

    if (i != -1) {
      this.state.list[i].NewMessageCount = TotalReceivedMesssages;
      this.setState({
        list: this.state.list
      });
    }
  }

  getClientsListForAdminCallback(res) {
    if (!res || !res.Content || !res.Content.EntityList) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].LayoutPage.showError("getClientsListForAdminCallback res is null");
      return;
    }

    var arr = [];
    arr = res.Content.EntityList;
    this.setState({
      list: arr
    });
  }

  GetClientsListForAdmin() {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["MyCaller"].Send("GetClientsListForAdmin", {
      userType: _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].UserType,
      selectedPage: _Help_DataHolder__WEBPACK_IMPORTED_MODULE_3__["DataHolder"].SelectedPage
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 13
      }
    }, showSelectedTag(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_OnlineCustomerList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      list: this.state.list,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 17
      }
    }));
  }

}

function showSelectedTag() {
  if (!_Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].selectedTagId || !_Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].selectedTagName) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
    variant: "info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 16
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    style: {
      fontSize: "14px"
    },
    className: "fa fa-tags",
    "aria-hidden": "true",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 38
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 9
    }
  }, _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].selectedTagName)), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    onClick: () => {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].TagList.getUsersByTagId(null, null);
      _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].TagList.setState({
        tmp: Math.random()
      });
      _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].OnlineCustomerListHolder.setState({
        tmp: Math.random()
      });
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 14
    }
  }, "x"));
}

/***/ }),

/***/ "./src/Pages/ProfilePage.js":
/*!**********************************!*\
  !*** ./src/Pages/ProfilePage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Help/Socket */ "./src/Help/Socket.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Pages\\ProfilePage.js";




const LoadImageAndSet = function (e2, callback) {
  let elementById = e2;

  if (elementById.target.files.length > 1) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].LayoutPage.showError('فقط یک عکس مجاز است');
    return;
  }

  for (let i = 0; i < elementById.target.files.length; i++) {
    let file = elementById.target.files[i];
    var fileReader = new FileReader();

    fileReader.onload = function (e) {
      console.log(e.target.result);
      callback(e.target.result);
    };

    fileReader.readAsDataURL(file);
  }
};

class ProfilePage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props, context) {
    super(props, context);
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].ProfilePage = this;
    this.state = {};
  }

  componentDidMount() {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].LayoutPage.showMsg('در حال خواندن اطلاعات پروفایل');
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["MyCaller"].Send('GetMyProfile');
  }

  getMyProfileCallback(res) {
    if (!res || !res.Content) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].LayoutPage.showError('res is null for profile');
      return;
    }

    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].LayoutPage.showMsg('اطلاعات پروفایل خوانده شد');
    this.setState({
      Name: res.Content.Name,
      Image: res.Content.Image
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      fluid: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }
    }, this.state.Image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: this.state.Image,
      width: "300",
      height: "200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 25
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }, this.state.Name && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProfilePageForm, {
      ImageLoad: content => {
        this.setState({
          Image: content
        });
      },
      Name: this.state.Name,
      Img: this.state.Image,
      onSubmit: (name, image, Img) => this.onMSubmit(name, image, Img),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 25
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      }
    })));
  }

  onMSubmit(name, image, Img) {
    if (!name) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].LayoutPage.showError('نام وارد نشده است');
      return;
    }

    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].LayoutPage.showMsg('در حال ذخیره تغییرات پروفایل');
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["MyCaller"].Send('SaveMyProfile', {
      name,
      image,
      Img
    });
  }

  saveMyProfileCallback(res) {
    this.getMyProfileCallback(res);
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].LayoutPage.showMsg('تغییرات پروفایل با موفقیت ذخیره شد');
  }

}

function ProfilePageForm(props) {
  const [name, setName] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.Name);
  const [image, setImage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const Img = props.Img;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "formBasicEmail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, "\u0646\u0627\u0645 \u0634\u0645\u0627"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    value: name,
    type: "text",
    placeholder: "\u0646\u0627\u0645 \u0634\u0645\u0627",
    onChange: e => setName(e.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Text, {
    className: "text-muted",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, "\u0628\u0647 \u0628\u0627\u0632\u062F\u06CC\u062F \u06A9\u0646\u0646\u062F\u06AF\u0627\u0646 \u0646\u0645\u0627\u06CC\u0634 \u062F\u0627\u062F\u0647 \u0645\u06CC \u0634\u0648\u062F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].File, {
    label: "\u0639\u06A9\u0633 \u067E\u0631\u0648\u0641\u0627\u06CC\u0644",
    onChange: e => {
      LoadImageAndSet(e, fileContent => {
        setImage(fileContent);
        props.ImageLoad(fileContent);
      });
    },
    accept: ".jpeg,.jpg,.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    type: "button",
    onClick: () => {
      props.onSubmit(name, image, Img);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, "\u0630\u062E\u06CC\u0631\u0647"));
}

/* harmony default export */ __webpack_exports__["default"] = (ProfilePage);

/***/ }),

/***/ "./src/Pages/SeparatePerPageCustomerListPage.js":
/*!******************************************************!*\
  !*** ./src/Pages/SeparatePerPageCustomerListPage.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SeparatePerPageCustomerListPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OnlineCustomerListHolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OnlineCustomerListHolder */ "./src/Pages/OnlineCustomerListHolder.js");
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Help/DataHolder */ "./src/Help/DataHolder.js");
/* harmony import */ var _Help_ChangeUserTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Help/ChangeUserTypes */ "./src/Help/ChangeUserTypes.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Pages\\SeparatePerPageCustomerListPage.js";




class SeparatePerPageCustomerListPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    Object(_Help_ChangeUserTypes__WEBPACK_IMPORTED_MODULE_3__["changeUserTypes"])('SeparatePerPageCustomerListPage');
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].SelectedPage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 45
      }
    }, _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].SelectedPage.Url, "- ", _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].SelectedPage.Name, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnlineCustomerListHolder__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 1
      }
    }));
  }

}

/***/ }),

/***/ "./src/Pages/SepratePerPage.js":
/*!*************************************!*\
  !*** ./src/Pages/SepratePerPage.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SepratePerPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Help/DataHolder */ "./src/Help/DataHolder.js");
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var _Help_ChangeUserTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Help/ChangeUserTypes */ "./src/Help/ChangeUserTypes.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Pages\\SepratePerPage.js";





class SepratePerPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(args) {
    super(args);
    this.state = {
      list: []
    };
    _Help_Socket__WEBPACK_IMPORTED_MODULE_3__["CurrentUserInfo"].SepratePerPage = this;
  }

  componentWillMount() {
    Object(_Help_ChangeUserTypes__WEBPACK_IMPORTED_MODULE_4__["changeUserTypes"])('GetVisitedPagesForCurrentSite');
    /* let arr = [];
       let chat = {
         Message: "با سلام خوش آمدید",
       };
       for (let i = 0; i < 20; i++) {
         arr.push({ Name: "صفحه " + i, Url: "http://sso.com.em.co" });
       }
       this.setState({ list: arr });*/
  }

  getVisitedPagesForCurrentSiteCallback(res) {
    let arr = [];
    let trackinfosViewModellist = res.Content;

    if (!trackinfosViewModellist) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_3__["CurrentUserInfo"].LayoutPage.showError("دیتا نال است");
      alert("دیتا نال است");
      return;
    }

    window["trackinfosViewModellist"] = trackinfosViewModellist;

    for (let i = 0; i < trackinfosViewModellist.length; i++) {
      let pageTitle = trackinfosViewModellist[i].PageTitle;
      let baseUrl = trackinfosViewModellist[i].BaseUrl;
      let VisitedCount = trackinfosViewModellist[i].VisitedCount;
      let Customers = trackinfosViewModellist[i].Customers;
      arr.push({
        Name: pageTitle,
        Url: baseUrl,
        VisitedCount,
        CustomersCount: Customers && Customers.length ? Customers.length : 0,
        Customers: Customers
      });
    }

    this.setState({
      list: arr
    });
  }

  select(link) {
    _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].SelectedPage = link.Url;
    _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].currentPage = "CustomerList";
    _Help_DataHolder__WEBPACK_IMPORTED_MODULE_2__["DataHolder"].filterType = "SeparatePerPageCustomerListPage";
    _Help_Socket__WEBPACK_IMPORTED_MODULE_3__["CurrentUserInfo"].LayoutPage.setState({
      temp: Math.random()
    });
    this.setState({
      temp: Math.random()
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 7
      }
    }, this.state.list && this.state.list.map((link, i, arr) => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        key: i,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 15
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 19
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 23
        }
      }, "\u062A\u0639\u062F\u0627\u062F \u0628\u0627\u0632\u062F\u06CC\u062F : ", link.VisitedCount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 23
        }
      }, "\u062A\u0639\u062F\u0627\u062F \u0622\u0646\u0644\u0627\u06CC\u0646 : ", link.CustomersCount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Link, {
        href: "#",
        onClick: () => {
          this.select(link);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 23
        }
      }, "\u0645\u0634\u0627\u0647\u062F\u0647 \u06A9\u0627\u0631\u0628\u0631\u0627\u0646")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 21
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Link, {
        href: "#",
        onClick: () => {
          this.select(link);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 23
        }
      }, link.Name, " - ", link.Url))))));
    }));
  }

}

/***/ }),

/***/ "./src/Pages/SocialChannelsPage.js":
/*!*****************************************!*\
  !*** ./src/Pages/SocialChannelsPage.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_FormInputs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/FormInputs */ "./src/Components/FormInputs.js");
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Pages\\SocialChannelsPage.js";





class SocialChannelsPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props, context) {
    super(props, context);
    this.json1 = `{
                                "searchTerm":"متنی که کاربر جستجو می کند"
                            }`;
    this.json2 = `{
                                "array": [
                                     {title:"عنوان لینک",link:"http://..."}
                                ],

                                "emptyText": "پیغام در صورت خالی بودن"
                            }`;
    this.state = {};
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].SocialChannelsPage = this;
  }

  componentDidMount() {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["MyCaller"].Send('GetSocialChannelsInfo');
  }

  getSocialChannelsInfoCallback(res) {
    if (!res || !res.Content) {
      _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].LayoutPage.showError('اطلاعات بازگشتی خالی است');
      return;
    }

    this.setState({
      email: res.Content.email,
      telegram: res.Content.telegram,
      whatsapp: res.Content.whatsapp,
      helpDeskApi: res.Content.helpDeskApi,
      helpDeskUrlLink: res.Content.helpDeskUrlLink
    });
  }

  saveSocialChannelsInfoCallback(res) {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].LayoutPage.showMsg('با موفقیت ذخیره شد');
  }

  save() {
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].LayoutPage.showMsg('در حال ذخیره');
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["MyCaller"].Send('SaveSocialChannelsInfo', {
      email: this.state.email,
      telegram: this.state.telegram,
      whatsapp: this.state.whatsapp,
      helpDeskApi: this.state.helpDeskApi,
      helpDeskUrlLink: this.state.helpDeskUrlLink
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      style: {
        direction: 'ltr'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'form col-md-5 offset-md-1',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      }
    }, "\u0647\u0631 \u06A9\u062F\u0627\u0645 \u0627\u0632 \u0641\u06CC\u0644\u062F \u0647\u0627 \u062E\u0627\u0644\u06CC \u0628\u0627\u0634\u062F \u0628\u0647 \u0645\u0639\u0646\u0627\u06CC \u0639\u062F\u0645 \u0646\u0645\u0627\u06CC\u0634 \u0622\u0646 \u0627\u0633\u062A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 1
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'form-group',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_FormInputs__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      value: this.state.email,
      onChange: e => this.setState({
        email: e.target.value
      }),
      type: 'text',
      name: 'ایمیل',
      placeholder: 'mohammad.jafariyan7@gmail.com',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 25
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'form-group',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_FormInputs__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      value: this.state.telegram,
      onChange: e => this.setState({
        telegram: e.target.value
      }),
      type: 'text',
      name: 'تلگرام',
      placeholder: 'https://t.me/asharsoft',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 25
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'form-group',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_FormInputs__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      value: this.state.whatsapp,
      type: 'text',
      onChange: e => this.setState({
        whatsapp: e.target.value
      }),
      name: 'واتساپ',
      placeholder: 'https://wa.me/+989148980692',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 25
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'form-group',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_FormInputs__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      value: this.state.helpDeskApi,
      type: 'text',
      name: 'آدرس Api فراخوانی HelpDesk',
      placeholder: '/HelpDeskApi/Search',
      onChange: e => this.setState({
        helpDeskApi: e.target.value
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      style: {
        textAlign: 'right'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 25
      }
    }, "\u0646\u0645\u0648\u0646\u0647 \u062F\u0631\u062E\u0648\u0627\u0633\u062A \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0627\u0632 \u067E\u0644\u0627\u06AF\u06CC\u0646"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 25
      }
    }, this.json1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      style: {
        textAlign: 'right'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 25
      }
    }, "\u0646\u0645\u0648\u0646\u0647 \u0633\u0627\u062E\u062A\u0627\u0631 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0645\u0648\u0631\u062F \u0627\u0646\u062A\u0638\u0627\u0631 \u067E\u0644\u0627\u06AF\u06CC\u0646"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 25
      }
    }, this.json2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'form-group',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_FormInputs__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      value: this.state.helpDeskUrlLink,
      onChange: e => this.setState({
        helpDeskUrlLink: e.target.value
      }),
      type: 'text',
      name: 'آدرس helpdesk در سایت شما',
      placeholder: '/Home/Docs',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
      dir: 'rtl',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 21
      }
    }, "\u0627\u06AF\u0631 \u062A\u0646\u0647\u0627 \u0627\u062F\u0631\u0633 helpdesk \u0648\u0627\u0631\u062F \u0634\u062F\u0647 \u0628\u0627\u0634\u062F \u0648 \u0622\u062F\u0631\u0633 Api \u0648\u0627\u0631\u062F \u0646\u0634\u0648\u062F \u0628\u0635\u0648\u0631\u062A \u0644\u06CC\u0646\u06A9 \u0646\u0645\u0627\u06CC\u0634 \u062F\u0627\u062F\u0647 \u0645\u06CC \u0634\u0648\u062F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: 'form-group',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: 'btn btn-primary',
      onClick: () => {
        this.save();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 21
      }
    }, "\u0630\u062E\u06CC\u0631\u0647"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: 'btn btn-info',
      onClick: () => {
        this.factoryReset();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 21
      }
    }, "\u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u06A9\u0627\u0631\u062E\u0627\u0646\u0647"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: ' col-md-4 offset-md-1',
      style: {
        borderRight: '1px solid #ddd'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      style: {
        textAlign: 'right'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 25
      }
    }, "\u062F\u06A9\u0645\u0647 \u0647\u0627\u06CC \u0632\u06CC\u0631"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: `${""}/Content/HelpImages/circles.PNG`,
      style: {
        width: '80%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      style: {
        textAlign: 'right'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 25
      }
    }, "help desk"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: `${""}/Content/HelpImages/helpDesk.PNG`,
      style: {
        width: '80%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
      style: {
        textAlign: 'right'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 25
      }
    }, "\u0628\u0627\u0632 \u0634\u062F\u0646 \u0622\u062F\u0631\u0633 \u062F\u0631 \u0647\u0645\u0627\u0646 \u0635\u0641\u062D\u0647"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: `${""}/Content/HelpImages/circleHelpDesk.PNG`,
      style: {
        width: '80%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 25
      }
    }))));
  }

  factoryReset() {
    this.setState({
      helpDeskApi: '/HelpDeskApi/Search',
      helpDeskUrlLink: 'mohammad.jafariyan7@gmail.com'
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SocialChannelsPage);

/***/ }),

/***/ "./src/Pages/WaitingForAnswer.js":
/*!***************************************!*\
  !*** ./src/Pages/WaitingForAnswer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WaitingForAnswer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_OnlineCustomerList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Components/OnlineCustomerList */ "./src/Components/OnlineCustomerList.js");
/* harmony import */ var _OnlineCustomerListHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OnlineCustomerListHolder */ "./src/Pages/OnlineCustomerListHolder.js");
/* harmony import */ var _Help_ChangeUserTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Help/ChangeUserTypes */ "./src/Help/ChangeUserTypes.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\Pages\\WaitingForAnswer.js";




class WaitingForAnswer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    Object(_Help_ChangeUserTypes__WEBPACK_IMPORTED_MODULE_3__["changeUserTypes"])('WaitingForAnswer');
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OnlineCustomerListHolder__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 1
      }
    }));
  }

}

/***/ }),

/***/ "./src/fakeServer/FakeServerMonitor.js":
/*!*********************************************!*\
  !*** ./src/fakeServer/FakeServerMonitor.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FakeServerMonitor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Help_Dispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Help/Dispatcher */ "./src/Help/Dispatcher.js");
/* harmony import */ var _Help_Socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Help/Socket */ "./src/Help/Socket.js");
/* harmony import */ var _Help_MyGlobal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Help/MyGlobal */ "./src/Help/MyGlobal.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\fakeServer\\FakeServerMonitor.js";




class FakeServerMonitor extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props, context) {
    super(props, context);
    this.customers = [];
    this.tags = [];
    _Help_Socket__WEBPACK_IMPORTED_MODULE_2__["CurrentUserInfo"].FakeServerMonitor = this;
  }

  ServerCall(name, data) {
    if (name === "DeleteTagById") {
      if (!data.tagId) {
        alert('data.tagId isnull');
      }

      if (!this.tags.filter(f => f.Id === data.tagId)) {
        alert('not found tag');
        return;
      }

      this.tags = this.tags.filter(f => f.Id != data.tagId);
      document.getElementById('getAllTagsForCurrentAdminCallback').click();
    }
  }

  render() {
    if (!_Help_MyGlobal__WEBPACK_IMPORTED_MODULE_3__["MyGlobal"].isTestingEnvirement) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: () => {
        let customer = {
          Name: 'کاربر آنلاین' + new Date().getTime(),
          OnlineStatus: 1,
          Id: Math.random(),
          TotalUnRead: Math.round(Math.random(1, 999999) * 20)
        };
        this.customers.push(customer);

        _Help_Dispatcher__WEBPACK_IMPORTED_MODULE_1__["_dispatcher"].dispatch({
          Name: 'newCustomerOnlineCallback',
          Content: customer
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }, "add new Customer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: () => {
        let customer = {
          Name: 'کاربر آنلاین' + new Date().getTime(),
          OnlineStatus: 1,
          Id: Math.random(),
          TotalUnRead: Math.round(Math.random(1, 999999) * 20)
        };
        this.customers.push(customer);
        let Content = {};
        Content.EntityList = this.customers;

        _Help_Dispatcher__WEBPACK_IMPORTED_MODULE_1__["_dispatcher"].dispatch({
          Name: 'getClientsListForAdminCallback',
          Content: Content
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }
    }, "getClientsListForAdminCallback"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: () => {
        let customer = {
          Name: 'کاربر آنلاین' + new Date().getTime(),
          OnlineStatus: 1,
          Id: Math.random(),
          TotalUnRead: Math.round(Math.random(1, 999999) * 20)
        };
        this.customers.push(customer);
        let Content = {};
        Content.TotalWaitingForAnswerCount = this.customers.length;
        Content.NotChattedCount = this.customers.length / 2;
        Content.TotalNewChatReceived = this.customers.length;

        _Help_Dispatcher__WEBPACK_IMPORTED_MODULE_1__["_dispatcher"].dispatch({
          Name: 'totalUserCountsChangedCallback',
          Content: Content
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }
    }, "totalUserCountsChangedCallback"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: () => {
        let tag = {
          Name: 'تگ' + new Date().getMinutes(),
          OnlineStatus: 1,
          Id: Math.random(),
          TotalUnRead: Math.round(Math.random(1, 999999) * 20)
        };
        this.tags.push(tag);
        let Content = {};
        Content.EntityList = this.tags;

        _Help_Dispatcher__WEBPACK_IMPORTED_MODULE_1__["_dispatcher"].dispatch({
          Name: 'getAllTagsForCurrentAdminCallback',
          Content: Content
        });
      },
      id: "getAllTagsForCurrentAdminCallback",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }
    }, "getAllTagsForCurrentAdminCallback"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: () => {
        let tag = {
          Name: 'تگ' + new Date().getMinutes(),
          OnlineStatus: 1,
          Id: Math.random(),
          TotalUnRead: Math.round(Math.random(1, 999999) * 20)
        };
        this.tags.push(tag);
        let Content = {};
        Content.EntityList = this.tags;

        _Help_Dispatcher__WEBPACK_IMPORTED_MODULE_1__["_dispatcher"].dispatch({
          Name: 'userAddedToTagsCallback',
          Content: Content
        });
      },
      id: "userAddedToTagsCallback",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }
    }, "userAddedToTagsCallback"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: () => {
        let tag = {
          Name: 'تگ' + new Date().getMinutes(),
          OnlineStatus: 1,
          Id: Math.random(),
          Image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIWFhUXFxcYFxcVFhgaGBYYGhgYFxcYGBgYHyggGBolGxcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHx8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALIBGwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAADBAIFAAEGBwj/xAA/EAABAgQEAwUFBwQBAwUAAAABAhEAAyExBBJBUQVhcQYigZGhEzKxwfAHFBVCUtHhI2KC8ZIzQ3IWg5Oisv/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAlEQACAgEEAwACAwEAAAAAAAAAAQIRAxIhMVEEE0EiMhRxgWH/2gAMAwEAAhEDEQA/AAeyjDLjolcHMRHCI9/3RPEeCRQIRBhhovkcI5QVPC4TzIawM55OHgglNF1M4aYVVhiLiD2Jg8dC0qUDEzgSLQdEjURZ4ZmrESnRUYWUZwp2gZkEaR1BkJMRVhUmF7hvCcx7MwWXMNmi6Vg0wFWGEV7EyPW0ICZvBUzWNPSDzcGTCS5JBgTTE7QxMnlVjCMxJg8uUo2eNzMOq5hqkS7YCXKJsIMZLXEbSopgkoA3MNsSSA+yjSpcOKy2FTG0yCbiFY9IkERISjtFimRaJKIHujxIhax6OyrKI1DEyY92gJEWmZtGgIlGARIQxGARMCNCJNCKRvLGZIwCHMDglzSyR1O3OJcklbLim3SEmjZEdcns9ICWJU/6n+Voirs5LBBCywIJB1GwZq845/5WM6P4uQ5MJjYTHaYjg0lSaICdimkcni5OVRSKgFnaLx5o5OCcmGWPkC8ZGBMSyxqZHTJkGNnD8oqkceEHRx5HSOF459HorJjf0dGH5QQSBCX41L3iC+NohaJ9D1w7HzKELrwoMI/jaXtGlcVe0Wsc0Q8kGHm4EC0KTUNE/vijcUgK0FRoDFxT+mcmnwDM87QeUt40jhyz1ja+FzWdopuPZFS6NLIGsBSoQCdLmC4jeFQp6iKrYzb3G3JjUzCUuPKHZGGVtBFYUm8Z66NdFopiogEAgdIWIV1i4m4ZAsYUmkCNYy6MZR7K5Uo7RAyzDSphgZjRMxdAgIlmO8bMEw0grUEJuS389AKw2xJN8Ago7xovvF+ey0xgUrQd6mh6tWF5vZ+en8oPQivR4yWbG/po8GRfCpAjGhmZg1poUEeEbkYNayQlJJAc8o01KrI0u6oWAiRaGMLhFTFZUjqdBzJ0EXknAy5SQSkLVqpVUnklJoW3iJ5VH+zTHhczmxEwI77Dr7ozM21PJhCmI4FImEqDpJ/SQ3k0YLy1f5I6H4jr8WcngsOZi0pAdz6XPpHUIkzJTJASJe497x3hrh3C0ygzkk728AI1PkBLkLUXsklwOmsZZM6m6XBtiwOCt8msxUInmUzG0Ew72Zuu8Cx6iB1jn+0dH/Q8k0hfHYVS0kJCQWppCspa7iwixlOWMP8AV2g2kqONxGFXLUy0sdNjzEa9odh5COyxWFTMDKS8VH4JLNpnwjrj5MWvyOOfjST/ABONnpGY5Qweg5QPJD83DkFo0MKraOxSVHI4uxMJjeUw4cKRpGCUdoNSFpYslBhuSnlBZMovaLbDyv7RGU50bQx2Q4fhSq8W8rBARGUQNGhhMyOKc22dsIJIwSRBxLBEBzwREyMnZqqBzMGk3EZLwiBZIgxXGJMGphpQKZIpSK/ESV7Ui5IERKYIzoUoWczN4es1NIErhZaOnUiI+zjZZ2YPx4nIKwBBsY0rAK2jqzKO0AVgVKufKNV5HZk/GXw5hOCJIG50Dx1GE4TLlMoHvAM/UMfrnEpOBylwWiS8Oq7+sZ5crlsmaYsKhu0GCTdLnrBzOHd3b0gCZih3cthvAxMDxz0dFjWLCGdQBjMIzDKjIBZgAIRxeIrXQRGfxgBLAF2g0uqDUrsBxNXsnShLAl1Eak1Hk8U/tS4JVUa7RmNxC1sCSduUIqSvZ46YLbc5pvfYu+G4nOsuTvQ3/iOoTMG8eeYecUKcFjD0riq3c16kxOTFq4Lx5a5OwOJD7tAFklWY+AijkcVNXHlEMRxEt7xjNY2jT2Jo6GZPOlN4VmYtBNa0jmZmLV+o+cRl4topYiXlOrw80M0OyZnlHJS8fDyuLZUO/wDOkTLGy45EdIuYBHN4/s3hpkxSzLqouWmKSPIBhHNdoe0M4JKk90ZhRyFHLmLKqHSWLgbXo0UuB7dYpEtCEy5RSlIAPIUFjHNKai6LuzuTLS7AjxhhMvkkwcIBugejxKUgG6R4R2OZnpALw2bQCIqwYZsqT9coaKBv+8YZR0V5wtbDQujUqUkfkHUCDJT/AGjwhXKpNzGBKhUKBESxqkOrkj6EQTJhX74rSGsPiXvCdoNmbUmNAwxciNsCWZyIVlUCCTpBEA6waSmlhGLQHiXIdER1jB1EYuWdL6RU+1U3i7Q0rJk6LjJq4gaZqSHe3rFFi+NGoADMB5Qr9+LULRaxMzeVfDp5eNSKEN6wScWYgUMcxhpyjchovsNxBISxNqCFKFcFQyXyESpRsIHOnBJCVXvTSN4fHhi9a0isBz4g899oSXY2+ixVOoCKvEMThkmtidjDMySzNCkzCEkuotsII0ErFVezBqqITSwozM1dtoZHCkakwQcLQdCfGNLh2Z1PoqkISdUxrGyskvMItvwxH6fOEOKYBZACQWHODVG9haZVuctPn1gAxMOYrh6n90wsrhqtj5GOhNGDTIjHRs4t40OHl7RuZgC1HB6E+grDtBTBzcUwdRAHOKPEdp0soJGVTs6rNR1DxNBy8Iru0PEsryUTcz3YWINRUaEfTRRIxLGpBNQGNraeEedn8iTdR2N4Y1yzu+y2JLLC5hWpSs4LukJNAAdLEsd4f4lxlMsMCnObJUoDSl44rgXaL7uhQyAkrBdTe6HLUqXJGu/KAcbxy5wTNUirA92oKQXKv7bmzDygjnahp+lOG9mYri8yaQlSi+tSwIJJUQTQ11hHHcTR7RXs0qSh2ACswpR8yql7+MJjEAKJIcNYh70Oo29Yr5iwS7+cYRW+5oeq4f7Uy5z4dwwYJVW3edx8IlP+1As6JLUPvKfvFgk0agVmca0jzlOIBoSE095z4vvETMliprvVqjbr9axp7WTueoq+1OWSkfd1W7/eFFaZd08y14Bwn7S0lbT5RSlgCZZchVlEufd1YVjzgTkO7Us+4OnLrSNe2AUykhqgKJL+YpB7n0G57Gr7QcBUFU3u27hObkK3oeXOBp+0nBEVlzPdQQAkF1H3kaVTSutfHySXJC2CCczlnYjTukgRBWGVleiQwd3uH8ofuC2esYn7ScJ+SVMLH9IDhxWp605c4TnfajLSO7JUe4l+8zLNxq6bVjyuYhhmcizbHdomiWpyQ1dqn/jFa2Kz0A/alPC0LCEZAFZkOe+SKHNoAa/vpLhf2pYn2ivbS0qQxyhAykG6ak1G+seb1uA+5ApzcaRJSz6/O0FsVs9g4d9rEtyJ+HUAECstQJUvUMpgB1NNeV7g/tBwEz/ulBKgAJiSDUkAuHDMMz6A7x4NLTR6jSu2taRiUmzmmxFKUPKFY9TPpLBcZlzUqVKmIWEliUqBDs/wgJmZySm+xYR4BwziMySoqRMIB1BItZxY312joeFdsp0pkLImBy5J7xzHyodOemlxyR+kykz03Gysxcc3ivUS7XgPBO0MjElSAsJKdFnIdqVY105xZTOEKUCpJBGlakcjaOqM12Yyi3wMSJBQkTUrSpLsf7erwfGTQ4ISBuEl/GkVKeGqFFBf+JBhyTwoO/8AVTuXH7QpV2UrqqJF7spqVIaLKRLdLipPNoCjgiGpNXeoJ+MOScIlIYV5vGcpJ8GkYtE5U+YlgpBI0N4d+8IIf+CIEiYWY1jWblGTRqmEKdi4jAk6GNe0jQUYB7EilRFSPL+YguUfowVK40epgsBdMli+TxoYmQT+T0gjc/jGjXWHYqBe6KJSPIRy3bTjS5UjPJUgf1EJWojMUglnSBc5mTWlTAPtB7aJwQ9jKyrnqDkKP/TGhKbl6ts1efkPF+0s7EKClzCo6BIygVe3MuXiHk+ITEONKKZ811BRzqqxIOY5i2eou+8JSpo383vy8YY4nPVMUVKNTVyXL8zqYrQd3iORj65zhhTfn/DRZe2kolnPL9o4oPaKQUktWl7HxIobRRJV1+bQcTyBSh35fvEuPQGsSoUAAAqbv4E6taF2PONzDz+v2iGaLSAdQCkMtBf65esQmJzNlHqK9RD+OlzASCKAMCNtB9fxFWQPzP1ERF3uBH2jbevwiQm15Xr/ABGkoBNFMOd26QVcrugsrm6afCK2AIleViDc2NqeLxZYXFMg5jUska67Foq5E4JDMOv18IZw5CmZTKtWx67RlNCNYiYQrK4pt9VhzCBJCSUvWhArsHbTwitmqrmICS5DNsamzeW0P4VThyxB0uX8Yp8CaGihLd4UNzV9L3cRhlhIs4FjlBAbcjrcQILSMxLpYH8x8Gd71pDUtKVhwsg0upQ82pGTlQqBFfdzUFa1zJI33B/aFmAY5U86fFlU15GCFJSslQ7urDxBpeDBSbAlJsCK35fKKugF0TMxbKCGs1R0Zo0Uh6FrM9fB9+TwZeG/US9wQdttogcIqvecX2+TFhrFal2KiKZu5D6lteexi/4L2vxWGoiZnQAyUTO8gXytV0s9hsOTUX3QtqDzagpsbRASsxLUbc68xpDjJfBHsHBu3+HnHLO/oKapPuGpo9wwq5aOsTJSQ4WCNwXHOPmzvBRzOLN4c4ZRi5qElKVqymjBSstQaECm8bxmw55PowYbr5GMMpt/KPnjD8QmCqVqT0UQabEGOi4V26xsghpylp/TOdY/5HvDwMXrJ26PZQnkYmEHYxQdme3kjEpCVlMqbYoUaKP9ijfperVjpxiNmh6n0Woxf0BkPONh94mrFVqYiJoMK2Ol8JAq3ERVNUNRE1TEgObAPHh3bLtUcRPXNlFaUZDLlsoe4feVSwVlBarUiHNLkbR3vaLt8jDYgSBLVMYPMKX7poQlI1U3TSEsb9pyEzECXJUqV/3FEspO2VOv0KR49L4gqrUPKnp0gc2eWqovVwfreM3Odiose1uORiJ0zEJUypiirKaqAJoCdgGEUCZmzxubMzFzE8PMSCXp06wkmkWSyqUcyU0vT+YEuWU3EWSsSCwqKAvS/wAh+0V+JWXYi1h9aQRbAjLWB9P8okCVEkAlvOBgg1qDsPqgjE3uz/CLGSmk6j6+ngcbWY1m5nzgA6FGNIdE1NbKDqBBbXMxfpt51nEsJlWyapNg79QYbx8oqUD3pgLEnMVqD0YlyTaEMenvOMzEA95wRSor0jKMVGWwC7tpY2hnC4pdQksNHIp0J+EJqO5icqW5jRgPiWlUvMEsoXNa/KN4YH3ym1aGvpCSsrBnfXblWCyZgArYtTxNNdohrYVDfEMSpYSMpH5jq+xrW0Bwi6t8PWhiOJWkLORIAIqGzMa0DhxEhOP5hT6tWBKo7CZmOmMQGYX0L86UiOGmsLkV+IgeLU5ZgdvKNSFghjcWO/I6Q62H8OgEr3ZiTUJGYEMCC4d/4NoT4jOIykGhJcaAje9YX9oMoTmqlT61sCOtoHjJhUWAsSSBzO0ZRi73EZPnnUkFhax/e8O4PEsACu27EcrwgqQSplOHGZnD0pqecDmKAJDlwzEdKihteNHBNUFFqceQqrAj9PzEQOMCixCQRqmj+Fhp+8IKWSQR3g24fx2iakAgqDvRgEOLfrGvJtLwljQqG04oAKc+ZcHyZjEEYiWqmUjnmPwMKIwkzKWQtjqEnkYGMKsEOhd690/tFaV2FFkuUlLgrOlhz9I2jEAOBUMHDl6F3fXygE1BTRlkgnQsQWsGcVfq4tGIwqnzJ1d0lgoNoxNj/uHT7FRYIWDViwrRvU6Rc4ftZiZYSlOIUwZgsAihFHIJbS8UmC4LiVVTKJcWBBoGrSH8P2axqmaQWsQ4Y/KGm/hLgddwft8tLfeEJUDZaGBtqklj4NeOi/8AWmDCM/3hFA+V2X0ymvyjzZHYzHkOJKQea033v0gq+yGOYgS0Pf366aAW/cxspyJ0Dfb7tzMmgyZEw+xWzkJKSb5kE7Gjjk27+ernE/XlDPEOG4iVWbJmIG6kkB+torgYze73NktgqZjWDHU3/wBRntIC8bzQh0YAY3LBelWiLwxJULAGv15QMYWUjMe8SL6Cm0MzpLpYkUIZWjbMIr5q6003Aia5r0+Gv0YlpiDTyGIAA5gCv1yhFJ0iRSYjFJUMx4jEm1jUAzrFcVyKGbCpVlDAhS1MDU1UL1MTw/E5agR+HlVXCkBJI8VS1ARe/i5QE+1SpOalFJIYByQU/MxX8RxUtVfaqFi6R7Rk7kE0210vHnxcr/X/AGyqZzuKwBVMzmTiEyz7zlKlvX3TkAa2mhrtmF4cDm7swUGVkZn3zbadIsU41IzH2iiSCRRLFTUdILhy35v2iE7iySQCD3T+pQo1qNzvHRqmKheXwpSkZfaKCmqhRYGgZtNBfaJns9OZ1T0JBIYLWQ5bKKhxYARMcdAWn+mlSRopyzs7ZVJYUs7XhD8TW7A5U5nFHbxvoNYKydiDT+BTpbEGWo6ZVg3pq20NyMKo1VIUpRF+/wAnDjZjaKzNMUnN7QblPtAFf8Xc363guHlTF/lJpetPK8Woya3YtkWE/hHvKUgJoS6s9eXeJ2uasYAvCSwCSpAUGqMxfvUIdtOUQmySks5CvluKBoxGFJDkE8yEMfMttBofYOic32BZncCuaoJ6Eu3L6LM/GoIS8uUalioKvS1h5CHsJglkDNKJG2ZKRZrAN5jQQ9iOCSzeUd3ZIfxPweGsaYrKGTiw4SFJFSaJUpt6EneMxRkqy17wSyjkNTuKuOgfwjoJHBJKg4cGhDGXmDbHL84FiOCpJJyLJrchvMEGLUK+BZSzJksEOqoD1QddiFjlBZePRourVcTKdXXDcvg+YkiWkBwzkqPN+9T+I2rg3ebuf4vQcqxSi+iGzUvGS2JLE6Ey3YC9Ca7+EO4XH4Vw4R/8IvqeUAw3Z8qWoqIrukqPmbRZ4fshLo6iWNf9kxaTEyzkcTwhFkj/ANsADq4pDuGxUh6N4AQDDdnpQDNruaeDtFpguFy0swFLNFbiHsNNllqX/tPrDSZSGsD1FfQRKRLAEFlkt3gAXPuuQz00FWZ+e8IoEmQgk90eX8Rs4VJHujUc/ODKnpSQ5AcsH1N29DB0rEMDy77UZaAEpUsoBD5UoUbWL5mFWFo8uxCEBsqird0s3rWPeu33AvvclISE5klwVPbUOI8mx3ZadISsqEshQKRUqIcjvJpQ0vEOyk6KJHDJpQqYJZyI94lg1jYlzQiw1hUo5xZYecqWXKQVB+8pAUSCGy98EN4PAfxCYLZRV/8Apovr+X0iC9hWWitA50iaEmt+m8MIxYIOYkVskJAq5NhSrUtElYtkgIA5kgE+Is0DELrlkXDciIGm8SB51tD+G4eS2chP/kSKatSsJuuQE5KFE0H+t/raBimlYu8Thc7ZVpBv7z902sNz5XionSSk5Tfz9YmM7AAY2W+v9xt2jUWBdMsIKghQSfzAlmNGIsbXpCrzAFABWWhWyXAaxJApWLX7mL67gD4wnOwykuHLahzXyg0sLETOURq7vdr3pEcpL0PjX1hsyA1mPp5xJGE+qw9IrFkyAxJWxFhlJfxcN6weThAbLSQAC7ejGphmXhRzv+kRc4TDNb9m8hDUGJyKeXg3/ILM9Q53v8N4veF8M7pzADYAXs9WHxPrB5WHSfzHaijFph5IA94+L/OHoCyrTh5gCsoUM4KSymDNsQX84z8MoCxHMlZf9ouULbvMTYMAVG+wPxMbzuo/01oA/MpQDnYAF7fGFVOh8qxKSFJ1fkE282+jDqTM6a1SfCw/eCADYHrX4kkwQo3B6AkeoaGkSRSVKDOzf2mr1esD+7fpSkc/l3YaQtx7pDUqfm5eFlleY3a4Zm2atfSKSE2aXKVd2u9z5PEEhQZyfn60jF57HN1dPwa0bVNA/MdzQ/EtGiIYzIvdXWn08OTJYIv1qA/nS8IYbEJp3huKB/KHsNPCyz2O4BPg0MQRBJYICXeudQdv8dYclFWYJyqb9Qy5elTm9NYDNlgmyyR+UMx1/NSCyJS2yuoc+4/kkNEMpFik0LGvOvgzxE4xSWChlJt7r+qoVwsmZmU6gWoCc3qkADyMHVgVmhUBTvMktyIIUCPWEUH+8ry0rz7sYjGtVRbajj0iCeGAWUPEOfS55xEcJJHemE1dsoY+dfWHsAefPSqj5quBlsdDUHzii4rKChUP1aLRfB0gUWp+ZAHSxPjfrCGK4YEgsST4wKgZwnEeFIf/AKbP+kFzCeN4IkpLCvN+cdBxKYqWaAeJPpQxSYjjS6vKpukknxpA6ErOZGASg5ZoDXzBVQGsxIerbWNYEhEgDvZidQFJbwq9NnryiwxmPw63CkzOZDdaFvjFYtElShlUpuYD6UDHrVoykl8NE2PqxWFlLUEJMxLHKpy76Ah2alSHofAVs+YZhfUu/nTpRh4Re4fsuhgFzgFEUAFHIfqfLWMxHZiaiiCFX7xIFNQzxze/HdXuNsql4spQmWhwkPXVT3dvHzhcTmc6kEU/n6rFwOzy1BJVMQCdHe12ahp8IyT2aOZlzEsbZS5A5wvZjQUznFRox0WJ7OKeiwU6HVtvOFTwaYKGh6xazQf0C5zUsPOsKzUmwYeb/CJGWrfyH7wGZ/5+oHzjsMzYQd/j84kJYa7n6tYQOThs1XUehenq0HGHamYjlX1gAZlBrjzb/TxZ4QuKf6itw+HTSjl9v3i5w5QkOo9H8qfvD3EFkgOxPqP9w6kBmoetvEGEgpCrAkGtHLjwh6Vhv7FNWiiWPnSJZRrMlhUCtgNfqkERU/m9foQT7prlp5t+0SQQPq/iIQEkStnfwJ9Yl7EkguejAfK0FD/2tzf/AFA5uJA1A6W9DWEMjOSpqAk9RSkRyFgCfX46wHGYteXuTCK17rhj1NITGLuM5NqgpGu7Ui0mS2PzAdB6/s8CSlzVoEguHV0cKt4mJBEu5Y//AG+MUiGNomoBDqaH5YlmozHoTX1iuRiZabCnRoIriCE3UoHy+H11gYIs0TTomnNR+cMS5hereDxQfijq7pbfXx3hmTi0vVfwZvSE0M6OVM5/CNpnjaKU45IHcKT1f4wSXxR7Cp2U/wAoVDsvET+o8IJ7U7iKIYtzUV53HXaDS8SHu/RzCodlypYIvegrqbAc4p0YxCgWxCCN8tqE3J5GON7d9pS4w8pSgQSFgJDH3VILuX383jhfxAj3WAIDsVEKatXe5AcfCMpTp7FHpfF5aT3gtKgbEEainSg9I5/E4aZoX0AJHxU4HjHMSOLLCSkLLEqNN2y11qDFjh+KIXSYVpIYghQYGwozgNvvDWXsWkpuKgpUXTlILFgBU10A0gGE4TPUPaIllSRVwpBNK0S7k8mjoeImYzgnIAHWoOALAktS/wBGCyeKgSk5VJJ7ySrIkKVRIAJSGUANSSac4yySpFqguA4ZJQrOtaiUgBSHAGYsXej0Gm/IwWZxh1FKWKSWD0FDdz0ikn8TUoFJCTlDlTOfDxgascZacwFFBWpINXHeFlAECjfGOP1Nu5bgHVMK1Fjk0Iaj6KBDAOPGurxJM5YzPMDgAulnU9wd3G8Ip4ssgKtfMQ+wNb6tFhhkgpExScyVJPdBPvOXU70cgCum7V0lFpbjs3icTPCQtFRlze77oJLUNwWNNmjo8FhUzJaVgqDiwCTUUPqIoJeIKQZc18iUnKkK7yTsKvQU2tSEZU+WA3tSnklKm9Kc458mJzVLb+haqGz4+sBmJJNg39wP7w/7P6eNGQd/L+Y93SZWV+SY1SGawe3nBZcijk+sHmYUG7+f0I3LkpBv6wqCxjDNRlH/ABJHgGi0kplpqUgEin6j0D8oUwoUQwGUNfXnziRxSQSWSTSpIKhoam0FDLBGPGlelfrSGJmNLVBD6DUdD/MUuJ4lZKUg1ooEP9dIDJxyqlSqbEA9WGkKhjyeJAnkOdyLsSW1hvCYha6hOVPV/F7RSpxhNSktYd1hfcCsOIGIUaSiWtYepIEIReTEBKXKlEnXT0NPWK4TFlyMtA2aoA86/CAYrA4gqAWAL91LqVajkDKBpU/y7wzs7MvMOVP6Qp//AM384Q6E5K1TTlCipYqauG/yZxCC8IStQQSSLgBgGs7M3jHeYfASUHuoGZv0hz1eDTJfdZgxuGABG1oLCjgwqYAEzJlrBLZj/kxpyEDVjstQFU6E+nxpHT4jg2HS7JYEWK1EO9xVzAZnDZamIBYaWHVopEvc5f70tRJJPiXA6sXESVOSkVJJOwYHxNSaxdYzBJCgZcpJ5rfKK6JAt8YWOGWSpRS5DB5coU3GZTa7P4QxCacQpTMGA8m+DeH8MIxAYkrcbNSl60GnSJ/hqgMxkqW71JLj/FJDeUCVNK6VZ27gIy+NngAYw2OJtQAil/XSvLeLfDLBqwfnp4kRSS5MwOpMu1s596pYAMdKOIOjGqJOZpRBYjOF5WD+8EpNq2hN1yOr4L2ZNlgOUjqan0ERCmRMUpacmXuGqaM9SSXpyijl8QkpKs84+0AdEtKS66ZnzqTlCTYGrF9o53tDiJqxKXlmSpU1yj2qwrMKd5IASE63u72jKWWPCLWN8lDxaYQtYzhVSHD1D0LkQmicQKX35GMngOQDRzA7RmUGTNFK+kPYaYD1JZ6HoH+v2q1AG3OD4ZRTX5U6+EJoGW+IAMspysVAMe8SSL+8WDkekVkklCghRIdiwu+kPy1FICkqJ3d282aLvGSpsyTlEoh27wUlRX4lRIF6PpakZuVcjSsr8OgA94gBiNC6diwIIfLV6O8VHFFzMxC1OCad7NQUBeLvA8BmTgUimQMaKIfR1FRryG0bl9kJqlf1ZyEigu6yNsultT5xn7YRe7Cmc1IBsCbuw1blF5wvFqluDKzqFu6e6eRHmzs8dNhuDScKSwUVM3ed6nYCkHRjO6aZSbDV62DeMYZPKvhbCaOTXwvEKTSUoFRchmA2qS7NpygqOyE8gHPL/wCcdbhlKattHN+Taawz7Zf6W8f4jF+Xk+JBSOcw8bm3HWMjI+kXBgwHEC0txSunQxuWkOmkZGRD5KXBYJA+uogE6UkpqkWToNSXjcZAxksQWw6lChALEUIvrAeziQfakhyEuCbg1qNoyMiBnXygyKUqbQB+8OT/ABMajIENjEtZc1OmsWc0UHhGRkSwRLFig6iFSosS9YyMhoGVqFEguX/0InOUQg1+qxkZFogSk2+t4mguXO0ZGRRIMKLX/MIdkKJS5Llr+UZGQmNCc1ZM1iSRs9PeOkO8RWThcSCSwsHoP6ZNNqgeUZGRxeR+yOrBwzgsYkUpon1Z4J24mqM6YgqJShbISSWSPZIokWA6RuMjNfsD+nIfXrETGRkbkG0RZ9nx/VQNCoCNRkTLgTL6fKTlHdFCsWFgVsI6/sykexWWqEpY7dx/jWMjI5MnBpi5EsWWKki2Zm0bKCzeJ84rscopEvKcrqQ7Udyp7RkZHIgkOzfdUda11841IHcfmPgIyMjKfBn9D4I/1CNKfGIT1HMa6xkZCkUf/9k="
        };
        let Content = {};
        Content = tag;

        _Help_Dispatcher__WEBPACK_IMPORTED_MODULE_1__["_dispatcher"].dispatch({
          Name: 'getMyProfileCallback',
          Content: Content
        });
      },
      id: "userAddedToTagsCallback",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }
    }, "getMyProfileCallback"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: () => {
        let tag = {
          Name: 'تگ' + new Date().getMinutes(),
          OnlineStatus: 1,
          Id: Math.random()
        };
        let tags = [];

        for (let i = 0; i < 100; i++) {
          tags.push(tag);
        }

        let Content = {};
        Content = {};
        Content.EntityList = tags;

        _Help_Dispatcher__WEBPACK_IMPORTED_MODULE_1__["_dispatcher"].dispatch({
          Name: 'getCreatedFormsCallback',
          Content: Content
        });
      },
      id: "getCreatedFormsCallback",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 17
      }
    }, "getCreatedFormsCallback"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: () => {
        let tag = {
          Name: 'تگ' + new Date().getMinutes(),
          OnlineStatus: 1,
          Id: Math.random()
        };
        let tags = [];

        for (let i = 0; i < 100; i++) {
          tags.push(tag);
        }

        let Content = {};
        Content = {};
        Content.EntityList = tags;

        _Help_Dispatcher__WEBPACK_IMPORTED_MODULE_1__["_dispatcher"].dispatch({
          Name: 'getFormSingleCallback',
          Content: {
            elements: [{
              Name: tag.Name,
              Help: tag.Name,
              Value: tag.Name,
              type: 'input'
            }],
            Name: tag.Name,
            AfterMessage: tag.Name,
            OnlyMe: true,
            Id: 51564
          }
        });
      },
      id: "getFormSingleCallback",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 17
      }
    }, "                getFormSingleCallback"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: () => {
        let tag = {
          Name: 'تگ' + new Date().getMinutes(),
          OnlineStatus: 1,
          Id: Math.random()
        };
        let tags = [];

        for (let i = 0; i < 100; i++) {
          tags.push(tag);
        }

        let Content = {};
        Content = {};
        Content.EntityList = tags;
        let formData = [];

        for (let i = 0; i < 20; i++) {
          formData.push({
            Email: "Email-" + Math.random() + "@gmail.com"
          });
        } //   debugger


        _Help_Dispatcher__WEBPACK_IMPORTED_MODULE_1__["_dispatcher"].dispatch({
          Name: 'getFormDataCallback',
          Content: {
            Form: {
              elements: [{
                Name: 'نام فیلد',
                FieldName: 'Email',
                Help: tag.Name,
                Value: tag.Name,
                type: 'input'
              }],
              Name: tag.Name,
              AfterMessage: tag.Name,
              OnlyMe: true
            },
            FormData: formData,
            Page: 1,
            Total: 350
          }
        });
        /*  let formStructure = res.Content.Form;
        let formData = res.Content.FormData;
        let Page = res.Content.Page;
        let total = res.Content.Total;*/

      },
      id: "getFormDataCallback",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 17
      }
    }, "                getFormDataCallback"));
  }

}

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "D:\\mohammad\\workplace\\1399\\shahrivar\\0028-onlinesupportsite\\SignalRMVCChat\\Content\\ClientApp\\my-app\\src\\index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/logo.ee7cd8ed.svg";

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ "./src/styles/Tooltip.css":
/*!********************************!*\
  !*** ./src/styles/Tooltip.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Tooltip.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/Tooltip.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles/myStyle.css":
/*!********************************!*\
  !*** ./src/styles/myStyle.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./myStyle.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/myStyle.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles/whileWriting.css":
/*!*************************************!*\
  !*** ./src/styles/whileWriting.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./whileWriting.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/whileWriting.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\mohammad\workplace\1399\shahrivar\0028-onlinesupportsite\SignalRMVCChat\Content\ClientApp\my-app\src\index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map