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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quickselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quickselect */ "./src/quickselect.js");
/* harmony import */ var _quickselectoptimised__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quickselectoptimised */ "./src/quickselectoptimised.js");
/* harmony import */ var _naive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./naive */ "./src/naive.js");



var form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  var data = new FormData(form);
  var test = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var entry = _step.value;
      test = entry[1];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  ;
  calculateData(test);
  event.preventDefault();
}, false);

function calculateData(test) {
  var windowSizes = {
    test1: 3,
    test2: 100,
    test3: 1000,
    test4: 10000
  };
  var windowSize = windowSizes[test];
  read("../data/".concat(test, ".csv")).then(function (res) {
    //console.log(res)
    var Normal = Object(_quickselect__WEBPACK_IMPORTED_MODULE_0__["default"])(windowSize, res);
    var Optimised = Object(_quickselectoptimised__WEBPACK_IMPORTED_MODULE_1__["default"])(windowSize, res);
    var Naive = Object(_naive__WEBPACK_IMPORTED_MODULE_2__["default"])(windowSize, res);
    document.getElementById("test1").innerHTML = "Quickselect execution time ".concat(Normal.time, " milliseconds");
    document.getElementById("test2").innerHTML = "Quickselect optimised execution time ".concat(Optimised.time, " milliseconds");
    document.getElementById("test3").innerHTML = "Naive execution time ".concat(Naive.time, " milliseconds");
    console.log(compareArrays(Normal.result, Optimised.result, Naive.result));
    alert("".concat(test, " finished!"));
  });
}

function read(url) {
  console.log(url);
  return fetch(url).then(function (res) {
    return res.text();
  }).then(function (res) {
    return res.split("\n");
  }).then(function (res) {
    return res.map(function (o) {
      return parseInt(o);
    });
  });
}

function compareArrays(arr1, arr2, arr3) {
  if (!(arr1.length === arr2.length && arr1.length === arr3.length)) {
    return 'arrays are not of same length';
  }

  for (var i = 0; i < arr1.length; i++) {
    if (!(arr1[i] === arr2[i] && arr1[i] === arr3[i])) {
      return "difference found: ".concat(arr1[i], " - ").concat(arr2[i], " - ").concat(arr3[i]);
    }
  }

  return 'no differences found';
}

/***/ }),

/***/ "./src/naive.js":
/*!**********************!*\
  !*** ./src/naive.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainNaive; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MedianCalculator2 =
/*#__PURE__*/
function () {
  function MedianCalculator2(windowSize) {
    _classCallCheck(this, MedianCalculator2);

    this.windowSize = windowSize;
    this.window = [];
  }

  _createClass(MedianCalculator2, [{
    key: "addDelay",
    value: function addDelay(d) {
      this.window.push(d);

      if (this.window.length > this.windowSize) {
        this.window.shift();
      }
    }
  }, {
    key: "getMedian",
    value: function getMedian() {
      var n = this.window.length;

      if (n === 0) {
        return "empty array";
      }

      if (n === 1) {
        return -1;
      }

      var arr = _toConsumableArray(this.window).sort(function (a, b) {
        return a - b;
      });

      if (n % 2 === 1) {
        return arr[(arr.length + 1) / 2 - 1];
      } else {
        return 0.5 * (arr[arr.length / 2 - 1] + arr[arr.length / 2]);
      }
    }
  }]);

  return MedianCalculator2;
}();

function MainNaive(windowSize, data) {
  var a = performance.now(); //console.log(data)

  var calc = new MedianCalculator2(windowSize);
  var result = [];

  for (var i = 0; i < data.length; i++) {
    calc.addDelay(data[i]);
    result.push(calc.getMedian());
  }

  var b = performance.now();
  var time = b - a;
  return {
    time: time,
    result: result
  };
}

/***/ }),

/***/ "./src/quickselect.js":
/*!****************************!*\
  !*** ./src/quickselect.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainNormal; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MedianCalculator =
/*#__PURE__*/
function () {
  function MedianCalculator(windowSize) {
    _classCallCheck(this, MedianCalculator);

    this.windowSize = windowSize;
    this.window = [];
  }

  _createClass(MedianCalculator, [{
    key: "addDelay",
    value: function addDelay(d) {
      this.window.push(d);

      if (this.window.length > this.windowSize) {
        this.window.shift();
      }
    }
  }, {
    key: "getMedian",
    value: function getMedian() {
      var n = this.window.length;

      if (n === 0) {
        return "empty array";
      }

      if (n === 1) {
        return -1;
      }

      var arr = _toConsumableArray(this.window);

      if (n % 2 === 1) {
        return this.quickSelect(arr, arr.length / 2);
      } else {
        return 0.5 * (this.quickSelect(arr, arr.length / 2 - 1) + this.quickSelect(arr, arr.length / 2));
      }
    }
  }, {
    key: "quickSelect",
    value: function quickSelect(arr, k) {
      if (arr.length === 0) {
        return arr[0];
      }

      var pivot = arr[~~(Math.random() * arr.length)];
      var lows = [],
          highs = [],
          pivots = [];
      arr.forEach(function (el) {
        if (el < pivot) {
          lows.push(el);
        } else if (el > pivot) {
          highs.push(el);
        } else {
          pivots.push(el);
        }
      });

      if (k < lows.length) {
        return this.quickSelect(lows, k);
      } else if (k < lows.length + pivots.length) {
        return pivots[0];
      } else {
        return this.quickSelect(highs, k - lows.length - pivots.length);
      }
    }
  }]);

  return MedianCalculator;
}();

function MainNormal(windowSize, data) {
  var a = performance.now(); //console.log(data)

  var calc = new MedianCalculator(windowSize);
  var result = [];

  for (var i = 0; i < data.length; i++) {
    calc.addDelay(data[i]);
    result.push(calc.getMedian());
  }

  var b = performance.now();
  var time = b - a;
  return {
    time: time,
    result: result
  };
}

/***/ }),

/***/ "./src/quickselectoptimised.js":
/*!*************************************!*\
  !*** ./src/quickselectoptimised.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainOptimised; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MedianCalculator3 =
/*#__PURE__*/
function () {
  function MedianCalculator3(windowSize) {
    _classCallCheck(this, MedianCalculator3);

    this.windowSize = windowSize;
    this.window = [];
  }

  _createClass(MedianCalculator3, [{
    key: "addDelay",
    value: function addDelay(d) {
      this.window.push(d);

      if (this.window.length > this.windowSize) {
        this.window.shift();
      }
    }
  }, {
    key: "getMedian",
    value: function getMedian() {
      var n = this.window.length;

      if (n === 0) {
        return 'empty array';
      }

      if (n === 1) {
        return -1;
      }

      var arr = _toConsumableArray(this.window);

      if (n % 2 === 1) {
        return this.quickSelect(arr, 0, arr.length - 1, (arr.length + 1) / 2 - 1);
      } else {
        return 0.5 * (this.quickSelect(arr, 0, arr.length - 1, arr.length / 2 - 1) + this.quickSelect(arr, 0, arr.length - 1, arr.length / 2));
      }
    }
  }, {
    key: "swap",
    value: function swap(arr, from, to) {
      var temp = arr[from];
      arr[from] = arr[to];
      arr[to] = temp;
    }
  }, {
    key: "partition",
    value: function partition(arr, start, end, pivotIndex) {
      var pivot = arr[pivotIndex];
      this.swap(arr, pivotIndex, end);
      var pIndex = start;

      for (var i = start; i < end; i++) {
        if (arr[i] <= pivot) {
          this.swap(arr, i, pIndex);
          pIndex++;
        }
      }

      this.swap(arr, pIndex, end);
      return pIndex;
    }
  }, {
    key: "quickSelect",
    value: function quickSelect(arr, start, end, k) {
      if (start === end) {
        return arr[start];
      }

      var pivotIndex = this.partition(arr, start, end, ~~(Math.random() * (end - start + 1) + start));

      switch (true) {
        case k === pivotIndex:
          return arr[k];

        case k < pivotIndex:
          return this.quickSelect(arr, start, pivotIndex - 1, k);

        default:
          return this.quickSelect(arr, pivotIndex + 1, end, k);
      }
    }
  }]);

  return MedianCalculator3;
}();

function MainOptimised(windowSize, data) {
  var a = performance.now(); //console.log(data)

  var calc = new MedianCalculator3(windowSize);
  var result = [];

  for (var i = 0; i < data.length; i++) {
    calc.addDelay(data[i]);
    result.push(calc.getMedian());
  }

  var b = performance.now();
  var time = b - a;
  return {
    time: time,
    result: result
  };
}

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map