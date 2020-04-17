/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./node_modules/normalize.css/normalize.css?");

/***/ }),

/***/ "./src/fasterdisco.css":
/*!*****************************!*\
  !*** ./src/fasterdisco.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/fasterdisco.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ \"./node_modules/normalize.css/normalize.css\");\n/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fasterdisco_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fasterdisco.css */ \"./src/fasterdisco.css\");\n/* harmony import */ var _fasterdisco_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fasterdisco_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _plasma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plasma */ \"./src/plasma.js\");\n\n\n\n\n\nObject(_plasma__WEBPACK_IMPORTED_MODULE_2__[\"drawAnimated\"])('plasma', _plasma__WEBPACK_IMPORTED_MODULE_2__[\"plasmaMap\"], _plasma__WEBPACK_IMPORTED_MODULE_2__[\"colorMap\"]);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/plasma.js":
/*!***********************!*\
  !*** ./src/plasma.js ***!
  \***********************/
/*! exports provided: drawStill, drawAnimated, plasmaMap, colorMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawStill\", function() { return drawStill; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawAnimated\", function() { return drawAnimated; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"plasmaMap\", function() { return plasmaMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colorMap\", function() { return colorMap; });\n/*! Credits: https://www.bidouille.org/prog/plasma */\nfunction drawFrame(context, plasmaMap, colorMap) {\n  const time = new Date().getTime() * 0.0025;\n\n  const w = context.canvas.width;\n  const h = context.canvas.height;\n  const imageData = context.getImageData(0, 0, w, h);\n  const px = imageData.data;\n\n  const kx = w / h;\n  for (let y = 0; y < h; y++) {\n    const yy = y / h - 0.5;\n    for (let x = 0; x < w; x++) {\n      const xx = (kx * x) / w - kx / 2;\n      const v = plasmaMap(xx, yy, time);\n      colorMap(px, (y * w + x) * 8, v);\n    }\n  }\n  context.putImageData(imageData, 0, 0);\n}\n\nfunction drawStill(canvasId, plasmaMap, colorMap) {\n  const canvas = document.getElementById(canvasId);\n  const context = canvas.getContext('2d', { alpha: false });\n  drawFrame(context, plasmaMap, colorMap);\n}\n\nfunction drawAnimated(canvasId, plasmaMap, colorMap) {\n  const canvas = document.getElementById(canvasId);\n  const context = canvas.getContext('2d', { alpha: false });\n\n  function animate() {\n    drawFrame(context, plasmaMap, colorMap);\n    window.requestAnimationFrame(animate);\n  }\n  animate();\n}\n\nfunction plasmaMap(x, y, time) {\n  let v = 0;\n  v += Math.sin(x * 10 + time);\n  v += Math.sin((y * 10 + time) / 2.0);\n  v += Math.sin((x * 10 + y * 10 + time) / 2.0);\n  const cx = x + 0.5 * Math.sin(time / 5.0);\n  const cy = y + 0.5 * Math.cos(time / 3.0);\n  v += Math.sin(Math.sqrt(100 * (cx * cx + cy * cy) + 1) + time);\n  v = v / 2.0;\n  return v;\n}\n\nfunction colorMap(px, offset, v) {\n  px[offset] = 255;\n  px[offset + 1] =\n    255 * (0.5 + 0.25 * Math.sin(Math.PI * v + (2 * Math.PI) / 3));\n  px[offset + 2] = 255 * (0.5 + 0.5 * Math.sin(Math.PI * v));\n  px[offset + 3] = 128;\n  px[offset + 4] = 192 * (0.5 + 0.5 * Math.cos(Math.PI * v));\n  px[offset + 5] =\n    192 * (0.5 + 0.33 * Math.sin(Math.PI * v + (2 * Math.PI) / 3));\n  px[offset + 6] = 255 * (0.5 - 0.5 * Math.sin(Math.PI * v));\n  px[offset + 7] = 92;\n}\n\n\n//# sourceURL=webpack:///./src/plasma.js?");

/***/ })

/******/ });