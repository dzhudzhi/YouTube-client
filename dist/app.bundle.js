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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/App */ \"./src/App.js\");\n\nvar app = new _src_App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\napp.start();\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_AppController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/AppController */ \"./src/controllers/AppController.js\");\n/* harmony import */ var _views_AppView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/AppView */ \"./src/views/AppView.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.controller = new _controllers_AppController__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.view = new _views_AppView__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n\n  _createClass(App, [{\n    key: \"start\",\n    value: function start() {\n      var _this = this;\n\n      document.querySelector('.search-form').addEventListener('submit', function (e) {\n        e.preventDefault();\n        var searchTerm = e.target[0].value;\n        document.querySelector('.video-list').innerHTML = '';\n\n        _this.controller.getVideosFirst(searchTerm, function (data) {\n          return _this.view.drawVideoList(data);\n        });\n      });\n      document.querySelector('.pager').addEventListener('click', function (e) {\n        _this.controller.slideVideos(e.target.className, function (data) {\n          return _this.view.drawVideoList(data);\n        });\n      });\n      window.addEventListener('resize', function () {\n        return _this.controller.resize();\n      });\n      var carusel = document.querySelector('.carusel');\n      carusel.addEventListener('mousedown', function (e) {\n        return _this.controller.lock(e);\n      });\n      carusel.addEventListener('mouseup', function (e) {\n        return _this.controller.move(e, function (data) {\n          return _this.view.drawVideoList(data);\n        });\n      });\n      carusel.addEventListener('touchstart', function (e) {\n        return _this.controller.lock(e);\n      });\n      carusel.addEventListener('touchmove', function (e) {\n        return e.preventDefault();\n      });\n      carusel.addEventListener('touchend', function (e) {\n        return _this.controller.move(e, function (data) {\n          return _this.view.drawVideoList(data);\n        });\n      });\n    }\n  }]);\n\n  return App;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/controllers/AppController.js":
/*!******************************************!*\
  !*** ./src/controllers/AppController.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _YouTubeAPILoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./YouTubeAPILoader */ \"./src/controllers/YouTubeAPILoader.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar AppController =\n/*#__PURE__*/\nfunction (_YouTubeAPILoader) {\n  _inherits(AppController, _YouTubeAPILoader);\n\n  function AppController() {\n    var _this;\n\n    _classCallCheck(this, AppController);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(AppController).call(this));\n    var docWidth = document.documentElement.clientWidth;\n    var videosPerPage = Math.floor(docWidth / 330);\n    _this.state = {\n      currentIndex: 0,\n      videoItemWidth: 330,\n      videosPerPage: videosPerPage,\n      length: 0\n    };\n    _this.x0 = null;\n    return _this;\n  }\n\n  _createClass(AppController, [{\n    key: \"setState\",\n    value: function setState(currentIndex, videoItemWidth, videosPerPage) {\n      this.state = {\n        currentIndex: currentIndex,\n        videoItemWidth: videoItemWidth,\n        videosPerPage: videosPerPage,\n        length: 0\n      };\n    }\n  }, {\n    key: \"resize\",\n    value: function resize() {\n      var docWidth = document.documentElement.clientWidth;\n      var condition = Math.floor(docWidth / 330) === this.state.videosPerPage;\n\n      if (!condition) {\n        this.state.videosPerPage = Math.floor(docWidth / 330);\n      }\n    }\n  }, {\n    key: \"getVideosFirst\",\n    value: function getVideosFirst(searchTerm, callback) {\n      var _this2 = this;\n\n      _get(_getPrototypeOf(AppController.prototype), \"getResp\", this).call(this, searchTerm, false).then(function (_ref) {\n        var videos = _ref.items;\n        callback({\n          videos: videos,\n          length: _this2.state.length\n        });\n        _this2.state.length += 15;\n      });\n    }\n  }, {\n    key: \"getVideosNext\",\n    value: function getVideosNext(callback) {\n      var _this3 = this;\n\n      _get(_getPrototypeOf(AppController.prototype), \"getResp\", this).call(this, '', true).then(function (_ref2) {\n        var videos = _ref2.items;\n        callback({\n          videos: videos,\n          length: _this3.state.length\n        });\n        _this3.state.length += 15;\n      });\n    }\n  }, {\n    key: \"slideVideos\",\n    value: function slideVideos() {\n      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'same';\n      var callback = arguments.length > 1 ? arguments[1] : undefined;\n\n      switch (direction) {\n        case 'next':\n          {\n            var index = this.state.currentIndex + this.state.videosPerPage;\n            this.state.currentIndex = index;\n            var howClose = this.state.length - index;\n            var timeToLoad = 2 * this.state.videosPerPage + 1;\n            document.querySelector('.video-list').style.marginLeft = \"-\".concat(index * this.state.videoItemWidth, \"px\");\n            document.querySelector('.video-numbers ul').style.marginLeft = \"-\".concat(index * 20, \"px\");\n\n            if (howClose < timeToLoad) {\n              this.getVideosNext(callback);\n            }\n\n            break;\n          }\n\n        case 'prev':\n          {\n            if (!(this.state.currentIndex === 0)) {\n              var _index = this.state.currentIndex - this.state.videosPerPage;\n\n              if (_index < 0) {\n                _index = 0;\n              }\n\n              this.state.currentIndex = _index;\n              document.querySelector('.video-list').style.marginLeft = \"-\".concat(_index * this.state.videoItemWidth, \"px\");\n              document.querySelector('.video-numbers ul').style.marginLeft = \"-\".concat(_index * 20, \"px\");\n            }\n\n            break;\n          }\n\n        default:\n          {\n            break;\n          }\n      }\n    }\n  }, {\n    key: \"unify\",\n    value: function unify(e) {\n      return e.changedTouches ? e.changedTouches[0] : e;\n    }\n  }, {\n    key: \"lock\",\n    value: function lock(e) {\n      this.x0 = this.unify(e).clientX;\n    }\n  }, {\n    key: \"move\",\n    value: function move(e, callback) {\n      if (this.x0 || this.x0 === 0) {\n        var dx = this.unify(e).clientX - this.x0;\n        var direction = dx > 0 ? 'prev' : 'next';\n        this.slideVideos(direction, callback);\n      }\n    }\n  }]);\n\n  return AppController;\n}(_YouTubeAPILoader__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppController);\n\n//# sourceURL=webpack:///./src/controllers/AppController.js?");

/***/ }),

/***/ "./src/controllers/YouTubeAPILoader.js":
/*!*********************************************!*\
  !*** ./src/controllers/YouTubeAPILoader.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar YouTubeAPILoader =\n/*#__PURE__*/\nfunction () {\n  function YouTubeAPILoader() {\n    _classCallCheck(this, YouTubeAPILoader);\n\n    this.baseLink = 'https://www.googleapis.com/youtube/v3/';\n    this.settings = {\n      key: 'AIzaSyBNoCMgHdYGx70WFPH8ZcDsZclfC9fvzGw'\n    };\n    this.searchTerm = 'Never Gonna Give You Up';\n    this.nextPageToken = '';\n  }\n\n  _createClass(YouTubeAPILoader, [{\n    key: \"makeUrl\",\n    value: function makeUrl(options, endPoint) {\n      var urlOptions = _objectSpread({}, this.settings, options);\n\n      var url = \"\".concat(this.baseLink).concat(endPoint, \"?\");\n      Object.keys(urlOptions).forEach(function (i) {\n        url += \"\".concat(i, \"=\").concat(urlOptions[i], \"&\");\n      });\n      return url.slice(0, -1);\n    }\n  }, {\n    key: \"getResp\",\n    value: function getResp() {\n      var _this = this;\n\n      var q = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n      var nextPage = arguments.length > 1 ? arguments[1] : undefined;\n      var optionsSearch = {\n        q: q === '' ? this.searchTerm : q,\n        pageToken: nextPage ? this.nextPageToken : '',\n        part: 'snippet',\n        maxResults: '15',\n        order: 'viewCount',\n        type: 'video'\n      };\n      return fetch(this.makeUrl(optionsSearch, 'search')).then(function (res) {\n        return res.json();\n      }).then(function (_ref) {\n        var videoIds = _ref.items,\n            nextPageToken = _ref.nextPageToken;\n        _this.nextPageToken = nextPageToken;\n        var optionsVideos = {\n          part: 'snippet,statistics',\n          id: videoIds.map(function (_ref2) {\n            var id = _ref2.id;\n            return id.videoId;\n          }).join(',')\n        };\n        return fetch(_this.makeUrl(optionsVideos, 'videos')).then(function (res) {\n          return res.json();\n        });\n      });\n    }\n  }]);\n\n  return YouTubeAPILoader;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (YouTubeAPILoader);\n\n//# sourceURL=webpack:///./src/controllers/YouTubeAPILoader.js?");

/***/ }),

/***/ "./src/views/AppView.js":
/*!******************************!*\
  !*** ./src/views/AppView.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchForm */ \"./src/views/SearchForm.js\");\n/* harmony import */ var _VideoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoList */ \"./src/views/VideoList.js\");\n/* harmony import */ var _Pager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pager */ \"./src/views/Pager.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar AppView =\n/*#__PURE__*/\nfunction () {\n  function AppView() {\n    _classCallCheck(this, AppView);\n\n    this.searchFrom = new _SearchForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.videoList = new _VideoList__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.pager = new _Pager__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  }\n\n  _createClass(AppView, [{\n    key: \"drawVideoList\",\n    value: function drawVideoList(data) {\n      this.videoList.draw(data);\n      this.pager.draw();\n    }\n  }]);\n\n  return AppView;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppView);\n\n//# sourceURL=webpack:///./src/views/AppView.js?");

/***/ }),

/***/ "./src/views/Pager.js":
/*!****************************!*\
  !*** ./src/views/Pager.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Pager =\n/*#__PURE__*/\nfunction () {\n  function Pager() {\n    _classCallCheck(this, Pager);\n\n    var pager = document.createElement('div');\n    pager.className = 'pager';\n    var prevButton = document.createElement('button');\n    prevButton.classList.add('prev');\n    prevButton.textContent = 'prev';\n    var nextButton = document.createElement('button');\n    nextButton.classList.add('next');\n    nextButton.textContent = 'next';\n    var videoNumbers = document.createElement('div');\n    videoNumbers.className = 'video-numbers';\n    var ul = document.createElement('ul');\n    videoNumbers.appendChild(ul);\n    pager.appendChild(prevButton);\n    pager.appendChild(videoNumbers);\n    pager.appendChild(nextButton);\n    pager.style.visibility = 'hidden';\n    document.querySelector('.wrapper').appendChild(pager);\n  }\n\n  _createClass(Pager, [{\n    key: \"draw\",\n    value: function draw() {\n      document.querySelector('.pager').style.visibility = 'visible';\n      var docWidth = document.documentElement.clientWidth;\n      var width = \"\".concat(Math.floor(docWidth / 330) * 20, \"px\");\n      document.querySelector('.video-numbers').style.width = width;\n    }\n  }]);\n\n  return Pager;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pager);\n\n//# sourceURL=webpack:///./src/views/Pager.js?");

/***/ }),

/***/ "./src/views/SearchForm.js":
/*!*********************************!*\
  !*** ./src/views/SearchForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar SearchForm = function SearchForm() {\n  _classCallCheck(this, SearchForm);\n\n  var wrapper = document.createElement('div');\n  wrapper.className = 'wrapper';\n  var searchInput = document.createElement('input');\n  searchInput.type = 'text';\n  var searchButton = document.createElement('button');\n  searchButton.type = 'submit';\n  searchButton.innerHTML = 'search';\n  var searchForm = document.createElement('form');\n  searchForm.classList.add('search-form');\n  searchForm.appendChild(searchInput);\n  searchForm.appendChild(searchButton);\n  wrapper.appendChild(searchForm);\n  document.body.appendChild(wrapper);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchForm);\n\n//# sourceURL=webpack:///./src/views/SearchForm.js?");

/***/ }),

/***/ "./src/views/VideoList.js":
/*!********************************!*\
  !*** ./src/views/VideoList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar VideoList =\n/*#__PURE__*/\nfunction () {\n  function VideoList() {\n    _classCallCheck(this, VideoList);\n\n    var videoList = document.createElement('div');\n    videoList.className = 'carusel';\n    document.querySelector('.wrapper').appendChild(videoList);\n    var docWidth = document.documentElement.clientWidth;\n    var width = \"\".concat(docWidth - docWidth % 330, \"px\");\n    document.querySelector('.carusel').style.width = width;\n    var ul = document.createElement('ul');\n    ul.className = 'video-list';\n    document.querySelector('.carusel').appendChild(ul);\n  }\n\n  _createClass(VideoList, [{\n    key: \"draw\",\n    value: function draw(_ref) {\n      var videos = _ref.videos,\n          length = _ref.length;\n      var fragment = document.createDocumentFragment();\n      var videoItemTemp = document.querySelector('#videoItemTemp');\n      var videoNumbers = document.querySelector('.video-numbers ul');\n      videos.forEach(function (video, i) {\n        var li = document.createElement('li');\n        li.textContent = length + i + 1;\n        videoNumbers.appendChild(li);\n        var videoClone = videoItemTemp.content.cloneNode(true);\n        var videoImage = videoClone.querySelector('.video__item-image');\n        videoImage.src = video.snippet.thumbnails.medium.url;\n        videoImage.alt = video.snippet.title;\n        var videoTitle = videoClone.querySelector('.video__item-title');\n        var anchor = document.createElement('a');\n        anchor.href = \"https://www.youtube.com/watch?v=\".concat(video.id);\n        anchor.textContent = video.snippet.title;\n        anchor.target = '_blanc';\n        videoTitle.appendChild(anchor);\n        var videoViews = videoClone.querySelector('.video__item-views');\n        videoViews.textContent = \"\".concat(video.statistics.viewCount, \" views\");\n        var videoOwner = videoClone.querySelector('.video__item-owner');\n        videoOwner.textContent = \"Author: \".concat(video.snippet.channelTitle);\n        var videoPublished = videoClone.querySelector('.video__item-published');\n        videoPublished.textContent = \"Published at: \".concat(video.snippet.publishedAt);\n        var videoDescription = videoClone.querySelector('.video__item-description');\n        videoDescription.textContent = video.snippet.description;\n        fragment.appendChild(videoClone);\n        document.querySelector('.video-list').appendChild(fragment);\n      });\n    }\n  }]);\n\n  return VideoList;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideoList);\n\n//# sourceURL=webpack:///./src/views/VideoList.js?");

/***/ })

/******/ });