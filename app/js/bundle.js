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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__containers_home__ = __webpack_require__(1);


class Entry {
  constructor() {
    document.body.style.background = 'url("/images/background.png") no-repeat center center fixed'
    document.body.style.backgroundSize = 'cover'
    document.body.style.height = '100%'
    document.body.style.margin = '0'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundAttachment = 'fixed'
  }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = Entry;


let entry = new Entry()
window.entry = entry

let content = document.getElementById('content')

let homeContainer = new __WEBPACK_IMPORTED_MODULE_0__containers_home__["a" /* default */]()
content.append(homeContainer.getContent())


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_title__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_card__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_nav_bar__ = __webpack_require__(4);




class Home {

  getContent() {
    let container = document.createElement('div')
    container.id = 'container'
    container.style.position = 'absolute'
    container.style.width = '100%'
    container.style.height = '100%'
    container.style.backgroundImage = 'url("")'
    container.style.backgroundRepeat = 'no-repeat'
    container.style.backgroundSize = 'cover'
    container.style.backgroundPosition = '50% 50%'

    let title = new __WEBPACK_IMPORTED_MODULE_0__components_title__["a" /* default */]({
      title: 'Base Project',
      columnClass: 'col-2'
    })

    container.append(title.getContent())
    
    let navBar = new __WEBPACK_IMPORTED_MODULE_2__components_nav_bar__["a" /* default */]({
      id: 'NavBar',
      columnClass: 'col-6'
    })
 
    let honeywellCard = new __WEBPACK_IMPORTED_MODULE_1__components_card__["a" /* default */]({
      id: 'HoneywellCard',
      title: 'Honeywell',
      value: 'Honeywell',
      columnClass: 'col-2'
    })
    
    container.append(honeywellCard.getContent())

    let ecobeeCard = new __WEBPACK_IMPORTED_MODULE_1__components_card__["a" /* default */]({
      id: 'EcobeeCard',
      title: 'Ecobee',
      value: 'Ecobee',
      columnClass: 'col-2'
    })

    container.append(ecobeeCard.getContent())
    
    let nestCard = new __WEBPACK_IMPORTED_MODULE_1__components_card__["a" /* default */]({
      id: 'NestCard',
      title: 'Nest',
      value: 'Nest',
      columnClass: 'col-2'
    })

    container.append(nestCard.getContent())

    let alexaCard = new __WEBPACK_IMPORTED_MODULE_1__components_card__["a" /* default */]({
      id: 'AlexaCard',
      title: 'Alexa',
      value: 'Alexa',
      columnClass: 'col-2'
    })

    container.append(alexaCard.getContent())

    container.append(navBar.getContent())
    return(container)
    
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Home;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Title {
  constructor (options) {
    this.options = options
  } 

  getContent() {
    let container = document.createElement('div')
    container.classList.add(this.options.columnClass)

    let title = document.createElement('div')
    title.append(this.options.title)
    title.style.position = 'absolute'
    title.style.color = '#ffffff'
    title.style.fontSize = '20px'
    title.style.top = '100px'
    title.style.marginLeft = '100px'

    container.append(title)

    return(container)
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Title;




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Card {
  constructor (options) {
    this.options = options
  } 

  getContent() {
    let container = document.createElement('div')
    container.classList.add(this.options.columnClass)

    let card = document.createElement('div')
    card.id = this.options.id
    card.value = this.options.value
    card.append(this.options.title)

    card.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)'
    card.style.transition = '0.3s'
    card.style.width = '100px'
    card.style.height = '100px'
    card.style.border = '1px solid #000'
    card.style.position = 'absolute'
    card.style.cursor = 'pointer'
    card.style.top = '35%'
    card.onmouseover = () => {
      card.style.boxShadow = '0 8px 16px 0 rgba(0,0,0,0.2)'
    }
    card.onmouseout = () => {
      card.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)'
    }

    container.append(card)
    
    return(container)
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Card;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class NavBar {
  constructor (options) {
    this.options = options
  } 

  getContent() {
    let container = document.createElement('div')
    container.classList.add(this.options.columnClass)

    let navBar = document.createElement('ul')
    navBar.id = this.options.id
    navBar.style.width = '1500px'
    navBar.style.listStyleType = 'none'
    navBar.style.margin = '0'
    navBar.style.padding = '0'
    navBar.style.overflow = 'hidden'
    navBar.style.backgroundColor = '#333'

    let devices = document.createElement('li')
    devices.id = 'devices'
    devices.value = 'devices'
    devices.append(document.createTextNode('Devices'))
    devices.style.float = 'left'
    devices.style.display = 'block'
    devices.style.color = 'white'
    devices.style.textAlign = 'center'
    devices.style.padding = '14px 16px'
    navBar.append(devices)

    let home = document.createElement('li')
    home.id = 'home'
    home.value = 'home'
    home.append(document.createTextNode('Home'))
    home.style.float = 'left'
    home.style.display = 'block'
    home.style.color = 'white'
    home.style.textAlign = 'center'
    home.style.padding = '14px 16px'
    navBar.append(home)

    let profile = document.createElement('li')
    profile.id = 'profile'
    profile.value = 'profile'
    profile.append(document.createTextNode('Profile'))
    profile.style.float = 'left'
    profile.style.display = 'block'
    profile.style.color = 'white'
    profile.style.textAlign = 'center'
    profile.style.padding = '14px 16px'
    navBar.append(profile)

    container.append(navBar)

    return(container)
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = NavBar;



/***/ })
/******/ ]);