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

const {
  state
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)('create-block/parallax-images-component-interactivity', {
  state: {
    get themeText() {
      return state.isDark ? state.darkText : state.lightText;
    }
    // imageHeight: 250,
    // get imageStyle() {
    // 	console.log({styleChanged: state.imageHeight});
    // 	return `height: ${this.imageHeight}px; transition: height 0.2s ease;`;
    // },
  },
  actions: {
    toggleOpen() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      context.isOpen = !context.isOpen;
    },
    toggleTheme() {
      state.isDark = !state.isDark;
    },
    initScroll() {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      const container = document.querySelector('.hero-component'); // .hero-component__container div div

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Container is in view → add scroll tracking
            window.addEventListener('scroll', updateHeight);
          } else {
            // Container out of view → remove scroll tracking
            window.removeEventListener('scroll', updateHeight);
          }
        });
      });

      // Function to update image height based on scroll position
      function updateHeight() {
        const rect = container.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        console.log({
          rectop: rect
        });

        // Example: adjust only when container is on screen
        if (rect.top < viewportHeight && rect.bottom > 0) {
          const scrollY = window.scrollY;
          let newHeight = 300 - scrollY * 0.1;
          if (newHeight < 150) newHeight = 150;
          console.log({
            newHeight: newHeight + '%'
          });
          context.imageHeight = `${newHeight}%`;
        }
      }
      if (container) {
        console.log({
          container
        });
        observer.observe(container);

        // window.addEventListener('scroll', () => {
        // const scrollY = window.scrollY;

        // console.log({scrollY});

        // // Example: shrink the image as user scrolls down
        // let newHeight = 300 - scrollY * 0.5;
        // if (newHeight < 100) newHeight = 100;

        // context.imageHeight = newHeight;
        // });
      }
    }
  },
  callbacks: {
    initializeInfoComponent: () => {
      const context = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      // let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);
      // console.log({ "initialize info Component" : content});
      // console.log({ "info window Component" : window});
      // const imagesContainer = document.querySelectorAll('.hero-component')
      // const imagesParallellax = document.querySelectorAll('.hero-component .hero-component__container div div')
      // console.log({ "info document Component" : imagesParallellax });

      // imagesContainer.forEach( el => {
      // 	console.log({imageContainer: el});
      // 	console.log({imageContainerPosition: el.scrollTop});
      // 	const images = el.querySelectorAll('img');
      // 	images.forEach( image => {
      // 		console.log({image: image});
      // 		console.log({imagePosition: image.scrollTop});
      // 		image.addEventListener('scroll', event => {
      // 			// let ratio = getRatio(image);
      // 			// console.log({ratio});
      // 			console.log({event: image.scrollTop});
      // 			console.log({imageNewPosition: imageNewPosition});
      // 			let imageNewPosition = -window.innerHeight * ratio;
      // 			// el.style.transform = `translateY(${imageNewPosition}%)`;
      // 			// content.transform = `translateY(${-window.innerHeight * ratio}%)`;
      // 		})
      // 	})

      // });

      // imagesParallellax.forEach( el => {
      // 	console.log({image: el});
      // 	console.log({imagePosition: el.scrollTop});
      // 	el.addEventListener('scroll', event => {
      // 		// let ratio = getRatio(el);
      // 		// console.log({ratio});
      // 		// let imageNewPosition = -window.innerHeight * ratio;
      // 		console.log({event: event});
      // 		console.log({imageNewPosition: el.scrollTop});
      // 		// el.style.transform = `translateY(${imageNewPosition}%)`;
      // 		// content.transform = `translateY(${-window.innerHeight * ratio}%)`;
      // 	});
      // });

      // <div class="hero-component">
      // <div class="hero-component__container container">
      // 	<div class="hero-component__image-container"  data-wp-interactive="create-block" >
      // 		<div>
      // 			<div class="

      // Log the value of `isOpen` each time it changes.
    }
  }
});
})();


//# sourceMappingURL=view.js.map