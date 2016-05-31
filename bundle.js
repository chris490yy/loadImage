/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ImageLoader = __webpack_require__(1);

	var _ImageLoader2 = _interopRequireDefault(_ImageLoader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var loader = new _ImageLoader2.default(Image()); //var ImageLoader = require('../ImageLoader.js');

	var src = ['http://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg', 'http://i.dailymail.co.uk/i/pix/2016/03/22/13/32738A6E00000578-3504412-image-a-6_1458654517341.jpg', 'http://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_900.jpg?1448476701', 'http://www.gettyimages.ca/gi-resources/images/Homepage/Category-Creative/UK/UK_Creative_462809583.jpg'];

	loader.load(src, printFunc);

	function printFunc(value) {
	  console.log(value[0] + ' of ' + value[1] + ' completed');
	  if (value[0] === value[1]) {
	    console.log('finished loading yeah');
	  }
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ImageLoader = function () {
	  function ImageLoader(image) {
	    _classCallCheck(this, ImageLoader);

	    this.total = 0;
	    this.current = 0;
	    this.store = [];
	    this.image = image;
	  }

	  _createClass(ImageLoader, [{
	    key: 'load',
	    value: function load(imgs, print) {
	      var _this = this;

	      imgs.forEach(function (item) {
	        _this.total++;
	        console.log(_this.total);
	        _this.getPromise(item).then(print).catch(function (error) {
	          console.log(error);
	        });
	      });
	    }
	  }, {
	    key: 'getPromise',
	    value: function getPromise(src) {
	      var _this2 = this;

	      return new Promise(function (resolve, reject) {
	        console.log(_this2.total, 'test');

	        var img = new _this2.image();
	        console.log(img);
	        //let img = new Image();
	        img.src = src;
	        img.onload = function () {
	          _this2.current++;
	          _this2.store.push(src);
	          // let div = document.getElementById('img');
	          // div.appendChild(img);
	          resolve([_this2.current, _this2.total]);
	        };
	        //img.onload();
	      });
	    }
	  }]);

	  return ImageLoader;
	}();

	module.exports = ImageLoader;

/***/ }
/******/ ]);