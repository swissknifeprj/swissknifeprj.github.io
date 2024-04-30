/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/my-ip.js":
/*!************************************!*\
  !*** ./src/js/components/my-ip.js ***!
  \************************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var divContent = document.querySelector('.js--screen-size-content');
  fetch('https://api.ipify.org?format=json').then(function (response) {
    return response.json();
  }).then(function (data) {
    var divContentText = data.ip;
    divContent.innerHTML = divContentText;
  })["catch"](function (error) {
    console.log('Error:', error);
  });
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
/*!*************************!*\
  !*** ./src/js/my-ip.js ***!
  \*************************/
// global.$ = global.jQuery = require('jquery');

__webpack_require__(/*! ./components/my-ip */ "./src/js/components/my-ip.js");
})();

/******/ })()
;