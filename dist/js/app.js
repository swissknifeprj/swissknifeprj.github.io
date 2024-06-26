/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// global.$ = global.jQuery = require('jquery');

__webpack_require__(/*! ./components/menu */ "./src/js/components/menu.js");
__webpack_require__(/*! ./components/header */ "./src/js/components/header.js");
__webpack_require__(/*! ./components/headerSearch */ "./src/js/components/headerSearch.js");

/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var _document$querySelect;
  var header = document.querySelector('header');
  var link = document.querySelectorAll('.js--main-menu a');
  var highlighter = (_document$querySelect = document.querySelector('.js--heder-highlight')) !== null && _document$querySelect !== void 0 ? _document$querySelect : false;
  var windowWidth = window.innerWidth;
  window.addEventListener('resize', function () {
    windowWidth = window.innerWidth;
    if (highlighter) {
      highlighter.removeAttribute('style');
      if (windowWidth < 767) {
        highlighter.classList.add('hidden');
      } else {
        highlighter.classList.remove('hidden');
      }
    }
  });
  var changeHeaderOnScroll = function changeHeaderOnScroll() {
    if (window.pageYOffset > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  changeHeaderOnScroll();
  window.addEventListener('scroll', function () {
    changeHeaderOnScroll();
  });
  function linkHighlightin(e) {
    if (highlighter) {
      var linkPositions = e.getBoundingClientRect();
      highlighter.style.width = "".concat(linkPositions.width, "px");
      highlighter.style.height = "".concat(linkPositions.height, "px");
      highlighter.style.transform = "translate(".concat(linkPositions.left + window.scrollX, "px, ").concat(linkPositions.top + window.scrollY, "px)");
    }
  }
  link.forEach(function (e) {
    e.addEventListener('mouseenter', function () {
      if (windowWidth >= 768) {
        linkHighlightin(e);
      }
    });
  });
});

/***/ }),

/***/ "./src/js/components/headerSearch.js":
/*!*******************************************!*\
  !*** ./src/js/components/headerSearch.js ***!
  \*******************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
document.addEventListener("DOMContentLoaded", function () {
  var searchHeaderBtn = document.querySelector('.js--search-header-btn');
  var searchInputWrap = document.querySelector('.js--search-input-wrap');
  var searchInput = document.querySelector('.js--search-input-wrap input');
  var HEADER = document.querySelector('header');
  var headerSearchResults = document.querySelector('.js--header-search-results');
  var pagesJson = 'data/pages.json';
  var pages = [];
  fetch(pagesJson).then(function (blob) {
    return blob.json();
  }).then(function (data) {
    return pages.push.apply(pages, _toConsumableArray(data));
  });
  function findMatches(wordToMatch, pages) {
    return pages.filter(function (place) {
      var regex = new RegExp(wordToMatch, 'gi');
      return place.name.match(regex);
    });
  }

  // function numberWithCommas(x) {
  //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // }

  function searchHeaderBtnClick() {
    searchInputWrap.classList.toggle('is-active');
    searchInput.value = '';
    headerSearchResults.innerHTML = '';
    searchInput.focus();
  }
  function searchOnChanged() {
    var _this = this;
    if (this.value === '') {
      headerSearchResults.innerHTML = '';
    } else {
      var matchArray = findMatches(this.value, pages);
      var html = matchArray.map(function (place) {
        var regex = new RegExp(_this.value, 'gi');
        var pageName = place.name.replace(regex, "<span class=\"bg-light-green\">".concat(_this.value, "</span>"));
        return "\n                <li>\n                    <a class=\"name\" href=\"".concat(place.url, "\">").concat(pageName, "</a>\n                </li>\n                ");
      }).join('');
      headerSearchResults.innerHTML = html;
    }
  }
  function clickAnywhere(e) {
    if (HEADER.contains(e.target)) return;
    searchFormClose();
  }
  function searchFormClose() {
    searchInputWrap.classList.remove('is-active');
  }
  searchHeaderBtn.addEventListener('click', searchHeaderBtnClick);
  // searchInput.addEventListener('change', searchOnChanged);
  searchInput.addEventListener('keyup', searchOnChanged);
  window.addEventListener('click', clickAnywhere);
  window.addEventListener('keyup', function (e) {
    if (e.keyCode === 27) {
      searchFormClose();
    }
  });
});

/***/ }),

/***/ "./src/js/components/menu.js":
/*!***********************************!*\
  !*** ./src/js/components/menu.js ***!
  \***********************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var headerMenuBtn = document.querySelector('.js--header-menu-btn');
  var mainMenu = document.querySelector('.js--main-menu');
  var BODY = document.querySelector('body');
  function menuButtonClick() {
    mainMenu.classList.toggle('is-active');
    headerMenuBtn.classList.toggle('is-active');
    BODY.classList.toggle('overflow-hidden');
  }
  headerMenuBtn.addEventListener('click', menuButtonClick);
  window.addEventListener('resize', function () {
    mainMenu.classList.remove('is-active');
    headerMenuBtn.classList.remove('is-active');
    BODY.classList.remove('overflow-hidden');
  });
});

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/screen-size.scss":
/*!***********************************!*\
  !*** ./src/scss/screen-size.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/my-ip.scss":
/*!*****************************!*\
  !*** ./src/scss/my-ip.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/my-ip": 0,
/******/ 			"css/screen-size": 0,
/******/ 			"css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproject"] = self["webpackChunkproject"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/my-ip","css/screen-size","css/style"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["css/my-ip","css/screen-size","css/style"], () => (__webpack_require__("./src/scss/style.scss")))
/******/ 	__webpack_require__.O(undefined, ["css/my-ip","css/screen-size","css/style"], () => (__webpack_require__("./src/scss/screen-size.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/my-ip","css/screen-size","css/style"], () => (__webpack_require__("./src/scss/my-ip.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;