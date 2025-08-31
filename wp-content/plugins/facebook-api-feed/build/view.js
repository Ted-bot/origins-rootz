import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "@wordpress/interactivity":
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");
/**
 * WordPress dependencies
 */

// import { controls } from '@wordpress/data';

const {
  state
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)('facebookCarousel', {
  state: {
    currentIndex: 0,
    get themeText() {
      return state.isDark ? state.darkText : state.lightText;
    }
  },
  actions: {
    moveBack() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const itemsTotal = context.totalItems;
      const itemsPerView = context.itemsPerView;

      // extra effect change the order of feed items
      // if (context.feed && context.feed.length > 0) {
      // 	context.feed.unshift(context.feed.pop());
      // }
      // context.currentIndex = (context.currentIndex - 1) % context.feed.length;

      // extra effect
      // console.log(context);

      // const orderOfFacebookFeed = context.feed;
      // if ( orderOfFacebookFeed && orderOfFacebookFeed.length > 0) {
      // 	orderOfFacebookFeed.unshift(orderOfFacebookFeed.pop());
      // 	console.log({changehappend: orderOfFacebookFeed});
      // }
      // context.feed = orderOfFacebookFeed;

      // console.log(context.feed);

      context.currentIndex = (context.currentIndex - 1) % context.feed.length;
      const offset = -context.currentIndex * (100 / itemsPerView);
      context.transform = `translateX(${offset}%)`;

      // context.currentIndex = (context.currentIndex + itemsPerView) % itemsTotal;
      // const offset = -context.currentIndex * (100 / itemsPerView);
      // context.transform = `translateX(${offset}%)`;
      console.log({
        'tranform backward': context.transform
      });
    },
    moveForward() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const itemsTotal = context.totalItems;
      const itemsPerView = context.itemsPerView;

      // extra effect change the order of feed items
      // if (context.feed && context.feed.length > 0) {
      // 	context.feed.push(context.feed.shift());
      // }

      // context.currentIndex = (context.currentIndex + 1) % context.feed.length;

      // console.log(context);

      // const orderOfFacebookFeed = context.feed;
      // if ( orderOfFacebookFeed && orderOfFacebookFeed.length > 0) {
      // 	orderOfFacebookFeed.push(orderOfFacebookFeed.shift());
      // 	console.log({changehappend: orderOfFacebookFeed});
      // }
      // context.feed = orderOfFacebookFeed;

      context.currentIndex = (context.currentIndex + 1) % context.feed.length;
      const offset = -context.currentIndex * (100 / itemsPerView);
      context.transform = `translateX(${offset}%)`;

      // context.currentIndex = (context.currentIndex - itemsPerView) % itemsTotal;
      // const offset = -context.currentIndex * (100 / itemsPerView);
      // context.transform = `translateX(${offset}%)`;
      console.log({
        'tranform backward': context.transform
      });

      // console.log(context.feed);
    }
  },
  callbacks: {
    initializeCarousel() {
      console.log("Store initialized!");
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const itemsTotal = context.totalItems;
      const itemsPerView = context.itemsPerView;
      setInterval(() => {
        // extra effect change the order of feed items
        // if (context.feed && context.feed.length > 0) {
        // 	context.feed.push(context.feed.shift());
        // }
        context.currentIndex = (context.currentIndex + 1) % context.feed.length;
        const offset = -context.currentIndex * (100 / itemsPerView);
        context.transform = `translateX(${offset}%)`;
      }, 3000);
    }
  }
});
})();


//# sourceMappingURL=view.js.map