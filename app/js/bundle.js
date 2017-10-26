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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_nav_bar__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_search__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_button__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_table__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_pager__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_form__ = __webpack_require__(8);








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

    let login = new __WEBPACK_IMPORTED_MODULE_6__components_login_form__["a" /* default */]({
      id: 'LoginForm',
      columnClass: 'col-12',
    })

    container.append(login.getContent())
    
    /*let navBar = new NavBar({
      id: 'NavBar',
      columnClass: 'col-12'
    })
    container.append(navBar.getContent())
 
    let search = new Search({
      id: 'Search',
      placeholder: 'Search',
      columnClass: 'col-2',
    })

    container.append(search.getContent())
    
    let button = new Button({
      id: 'Button',
      title: 'Take Control',
      value: 'Take Control',
      columnClass: 'col-2',
      icon: 'fa-globe'
    })
    
    container.append(button.getContent())

    let addButtonContainer = document.createElement('div')
    addButtonContainer.id = 'addButtonContainer'
    addButtonContainer.style.position = 'absolute'
    addButtonContainer.style.top = '100px'
    addButtonContainer.style.zIndex = '5'
    addButtonContainer.style.right = '4%'

    let addButton = new Button({
      id: 'Add Button',
      columnClass: 'col-2',
      icon: 'fa-plus-circle'
    })

    addButtonContainer.append(addButton.getContent())
    container.append(addButtonContainer)
    
    let table = new Table({
      id: 'table',
      data: [
        {
          "name": "Cody",
          "address": "1234 Test Lane"
        },
        {
          "name": "Cory",
          "address": "1234 Test Lane 1"
        },
        {
          "name": "Sean",
          "address": "1234 Test Lane 2"
        },
        {
          "name": "Gerald",
          "address": "1234 Test Lane 3"
        },
      ],
      design: {
        name: {
          title: 'name',
          description: 'address'
        },
        header: {
          name: 'Name',
          widget: 'Average Temperature',
          control: 'Control'
        }
      },
      columnClass: 'col-12'
    })

    container.append(table.getContent())
      
    let pagerContainer = document.createElement('div')
    pagerContainer.id = 'pager-container'
    pagerContainer.style.color = '@theme.colors.primary.background@'
    pagerContainer.style.textAlign = 'right'
    pagerContainer.style.fontWeight = 'bold'
    pagerContainer.style.fontSize = '15px'

    let pager = new Pager({
      id: 'pager',
      columnClass: 'col-2'
    })

    pagerContainer.append(pager.getContent())
    
    container.append(pagerContainer)
*/
      
    return(container)
    
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Home;



/***/ }),
/* 2 */
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
/* unused harmony export default */



/***/ }),
/* 3 */
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
    navBar.style.listStyleType = 'none'
    navBar.style.margin = '0'
    navBar.style.padding = '0'
    navBar.style.overflow = 'hidden'
    navBar.style.backgroundColor = '#333'

    let home = document.createElement('li')
    home.id = 'home'
    home.value = 'home'
    home.append(document.createTextNode('Home'))
    home.style.float = 'left'
    home.style.display = 'block'
    home.style.color = 'white'
    home.style.textAlign = 'center'
    home.style.padding = '14px 16px'
    home.style.fontWeight = 'bold'
    home.style.cursor = 'pointer'
    home.onmouseover = () =>{
      home.style.textDecoration = 'underline'
    }
    home.onmouseout = () =>{
      home.style.textDecoration = 'none'
    }
    navBar.append(home)
    
    let profile = document.createElement('li')
    profile.id = 'profile'
    profile.value = 'profile'
    profile.append(document.createTextNode('Profile'))
    profile.style.float = 'left'
    profile.style.display = 'block'
    profile.style.color = 'white'
    profile.style.textAlign = 'center'
    profile.style.cursor = 'pointer'
    profile.style.padding = '14px 16px'
    profile.onmouseover = () =>{
      profile.style.textDecoration = 'underline'
    }
    profile.onmouseout = () =>{
     profile.style.textDecoration = 'none'
    }
    navBar.append(profile)

    let devices = document.createElement('li')
    devices.id = 'devices'
    devices.value = 'devices'
    devices.append(document.createTextNode('Devices'))
    devices.style.float = 'left'
    devices.style.display = 'block'
    devices.style.color = 'white'
    devices.style.textAlign = 'center'
    devices.style.padding = '14px 16px'
    devices.style.cursor = 'pointer'
    devices.onmouseover = () =>{
      devices.style.textDecoration = 'underline'
    }
    devices.onmouseout = () =>{
     devices.style.textDecoration = 'none'
    }
    navBar.append(devices)

    let settings  = document.createElement('li')
    settings.id = 'settings'
    settings.value = 'settings'
    settings.append(document.createTextNode('Settings'))
    settings.style.float = 'left'
    settings.style.display = 'block'
    settings.style.color = 'white'
    settings.style.textAlign = 'center'
    settings.style.padding = '14px 16px'
    settings.style.cursor = 'pointer'
    settings.onmouseover = () =>{
      settings.style.textDecoration = 'underline'
    }
    settings.onmouseout = () =>{
     settings.style.textDecoration = 'none'
    }
    navBar.append(settings)

    
    container.append(navBar)

    return(container)
  }
}
/* unused harmony export default */



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Search {
  constructor (options) {
    this.options = options
  } 

  getContent() {
    let container = document.createElement('div')
    container.classList.add(this.options.columnClass)

    let search = document.createElement('input')
    search.type = 'text'
    search.id = this.options.id
    search.placeholder = this.options.placeholder

    search.style.display = 'none'
    search.style.width = '50px'
    search.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)'
    search.style.border = 'none'
    search.style.fontSize = '14px'
    search.style.backgroundColor = 'rgba(0,0,0,0.2)'
    search.style.backgroundPosition = '10px 10px'
    search.style.padding = '10px 10px 10px 10px'
    search.style.WebkitTransition = 'width 0.1s ease-in-out'
    search.style.transition = 'width 0.1s ease-in-out'
    search.onblur = () => {
      search.style.width = '25%'
      search.style.display = 'none'
    }

    let searchIcon = document.createElement('i')
    searchIcon.classList.add('fa')
    searchIcon.classList.add('fa-search')
    searchIcon.classList.add('fa-2x')
    searchIcon.style.cursor = 'pointer'
    searchIcon.style.padding = '10px 10px'
    searchIcon.style.float = 'left'
     
    searchIcon.onclick = () => {
      search.style.width = '100%'
      search.style.display = 'block'
      search.style.float = 'right'
    }
    container.append(searchIcon)

    container.append(search)

    return(container)
  }
}
/* unused harmony export default */



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Button {
  constructor (options) {
    this.options = options
  } 

  getContent() {
    let container = document.createElement('div')
    container.id = this.options.id
    container.classList.add(this.options.columnClass)

    let button = document.createElement('div')
    button.style.backgroundColor = 'transparent'

    let buttonIcon = document.createElement('i')
    buttonIcon.classList.add('fa')
    buttonIcon.classList.add(this.options.icon)
    buttonIcon.classList.add('fa-2x')
    button.append(buttonIcon)

    container.append(button)

    return container
  } 
  
}
/* unused harmony export default */



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Table {
  constructor (options) {
    this.options = options
  }

   getContent() {
    let container = document.createElement('div')
    container.classList.add(this.options.columnClass)
    
    let table = document.createElement('div')
    table.id = this.options.id
    table.classList.add(this.options.columnClass)
    
    table.style.backgroundColor = 'transparent'
    table.style.borderRadius = '5px 5px 5px 5px'
    let rowBackgroundColor = ''
    this.options.data.forEach((item,index) => {
      // create the dom Element

      let tableRow = document.createElement( 'div' )
      tableRow.style.display = 'flex'
      tableRow.style.border = '1px solid #fafafa'
      tableRow.style.fontSize = '24px'
      tableRow.style.color = '#ffffff'
      tableRow.style.borderTop = '1px'
      if((index + 1) % 2 === 0) {
        tableRow.style.backgroundColor = 'rgba(0, 0, 0, 0.)'
      }
      else {
        tableRow.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'
      }
      let tableData = document.createElement('div')
      tableData.style.flex = '1'
      tableData.style.padding = '10px 10px'
      let tableName = document.createElement('div')
      tableName.innerHTML = `
        <div>
          <div style="font-weight: bold;">
            ${item[this.options.design.name.title]}
          </div>
          <div>
            ${item[this.options.design.name.description]}
          </div>
        </div>
      `
      tableData.append(tableName)
      tableRow.append(tableData)
    
      table.append(tableRow)
    
      let buttonWidget = document.createElement('button')
      buttonWidget.style.backgroundColor = 'rgba(0,0,0,0.2)'
      buttonWidget.style.width = '10%'
      buttonWidget.style.borderRadius = '5px'
      buttonWidget.style.textAlign = 'center'
      buttonWidget.style.color = '#ffffff'
      buttonWidget.style.textTransform = 'uppercase'
      buttonWidget.append(document.createTextNode('Open'))

      tableRow.append(buttonWidget)


    })

     
    return(table)
  }
}
/* unused harmony export default */



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Pager {
  constructor (options) {
    this.options = options
  } 

  getContent() {
    let container = document.createElement('div')
    container.style.display = 'flex'
    container.classList.add(this.options.columnClass)

    let leftArrowIcon = document.createElement('img')
    leftArrowIcon.src = '/images/left-arrow.png'
    leftArrowIcon.style.color = '#D8D8D8'
    leftArrowIcon.style.marginTop = '0'
    leftArrowIcon.style.marginBottom = '0'
    leftArrowIcon.style.marginRight = '10px'
    leftArrowIcon.style.marginLeft = '0'
    leftArrowIcon.style.padding = '0'
    leftArrowIcon.onclick = this.options.onPrevious

    leftArrowIcon.onmouseover = () => {
      leftArrowIcon.style.color = '#77A3B9'
      leftArrowIcon.style.cursor = 'pointer'
    }

    leftArrowIcon.onmouseout = () => {
      leftArrowIcon.style.color = '#D8D8D8'
      leftArrowIcon.style.cursor = 'default'
    }

    container.append(leftArrowIcon)

    let pageInfo = document.createElement('div')
    pageInfo.id = this.options.id
    pageInfo.style.color = '#303030'

    pageInfo.append(this.options.info)

    this.pageInfo = pageInfo

    container.append(pageInfo)

    let rightArrowIcon = document.createElement('img')
    rightArrowIcon.src = '/images/right-arrow.png'
    rightArrowIcon.style.color = '#D8D8D8'
    rightArrowIcon.style.marginTop = '0'
    rightArrowIcon.style.marginBottom = '0'
    rightArrowIcon.style.marginRight = '0'
    rightArrowIcon.style.marginLeft = '10px'
    rightArrowIcon.style.padding = '0'
    rightArrowIcon.onclick = this.options.onNext

    rightArrowIcon.onmouseover = () => {
      rightArrowIcon.style.color = '#77A3B9'
      rightArrowIcon.style.cursor = 'pointer'
    }

    rightArrowIcon.onmouseout = () => {
      rightArrowIcon.style.color = '#D8D8D8'
      rightArrowIcon.style.cursor = 'default'
    }

    container.append(rightArrowIcon)

    return container
  }
}
/* unused harmony export default */



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class LoginForm {
  constructor (options) {
    this.options = options
  } 

  getContent() {
    let container = document.createElement('div')
    container.classList.add(this.options.columnClass)

    let login = document.createElement('div')
    login.style.position = 'absolute'
    login.style.border = '3px solid #f1f1f1'
    login.style.display = 'inline-block'
    container.append(login)
    
    
    let card = document.createElement('div')
    card.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)'
    card.style.borderRadius= '25px'
    card.style.transition = '0.3s'
    card.style.width = '350px'
    card.style.height = '350px'
    card.style.border = '1px solid #000'
    card.style.position = 'absolute'
    card.style.cursor = 'pointer'
    card.style.top = '33%'
    card.style.marginLeft = '39%'
    container.append(card)
    
    let cardBackground = document.createElement('img')
    cardBackground.src = '/images/login-background.jpg'
    cardBackground.style.height = '350px'
    cardBackground.style.borderRadius = '25px'
    cardBackground.style.width = '350px'
    cardBackground.style.opacity = '0.4'
    card.append(cardBackground
    
    )
    let usernameContainer = document.createElement('div')
    usernameContainer.id = 'usernameContainer'
    usernameContainer.style.position = 'fixed'
    usernameContainer.style.top = '45%'
    usernameContainer.style.marginLeft = '42%'
    usernameContainer.style.border = '1px solid rgba(255,255,255,0.6)'
    container.append(usernameContainer)
    let username = document.createElement('input')
    username.type = 'text'
    username.placeholder = 'Username' 
    username.style.width = '250px'
    username.style.height = '30px'
    username.style.background = 'transparent'
    username.style.border = '1px solid rgba(255,255,255,0.6)'
    username.style.borderRadius = '2px'
    username.style.color = '#fff'
    username.style.fontFamily = 'Exo, sans-serif'
    username.style.fontSize = '16px'
    username.style.fontWeight = '400'
    username.style.padding = '4px'
    login.append(username)
    usernameContainer.append(username)

    let passwordContainer = document.createElement('div')
    passwordContainer.id = 'passwordContainer'
    passwordContainer.style.position = 'fixed'
    passwordContainer.style.top = '50%'
    passwordContainer.style.marginLeft = '42%'
    container.append(passwordContainer)
    let password = document.createElement('input')
    password.type = 'text'
    password.placeholder = 'Password' 
    password.style.width = '250px'
    password.style.height = '30px'
    password.style.background = 'transparent'
    password.style.border = '1px solid rgba(255,255,255,0.6)'
    password.style.borderRadius = '2px'
    password.style.color = '#fff'
    password.style.fontFamily = 'Exo, sans-serif'
    password.style.fontSize = '16px'
    password.style.fontWeight = '400'
    password.style.padding = '4px'
    login.append(password)
    passwordContainer.append(password)

    let button = document.createElement('div')
    button.style.backgroundColor = 'transparent'
    button.style.position = 'fixed'
    button.style.top = '60%'
    button.style.marginLeft = '47%'
    container.append(button)
    
    let buttonIcon = document.createElement('img')
    buttonIcon.src = '/images/submit.png'
    buttonIcon.style.height = '50%'
    buttonIcon.style.width = '50%'
    buttonIcon.onclick = () =>{
    }
    button.append(buttonIcon)



    container.append(login)

    return(container)
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LoginForm;




/***/ })
/******/ ]);