/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/screen-size.js":
/*!******************************************!*\
  !*** ./src/js/components/screen-size.js ***!
  \******************************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  function getScreenSize() {
    var divContent = document.querySelector('.js--screen-size-content');
    var width = window.innerWidth;
    var height = window.innerHeight;
    var divContentText = "".concat(width, "px x ").concat(height, "px");
    divContent.innerHTML = divContentText;
  }
  getScreenSize();
  window.addEventListener('resize', getScreenSize);
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/js/screen-size.js ***!
  \*******************************/
// global.$ = global.jQuery = require('jquery');

__webpack_require__(/*! ./components/screen-size */ "./src/js/components/screen-size.js");
})();

/******/ })()
;