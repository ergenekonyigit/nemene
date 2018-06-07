(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("nemene", [], factory);
	else if(typeof exports === 'object')
		exports["nemene"] = factory();
	else
		root["nemene"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(2);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.median = exports.mean = exports.max = exports.min = exports.sum = exports.shift = exports.head = exports.clone = exports.combinations = exports.factorial = exports.sortArr = exports.flatten = exports.reduceDigit = exports.frequency = undefined;

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _typeof2 = __webpack_require__(82);

var _typeof3 = _interopRequireDefault(_typeof2);

var _map = __webpack_require__(23);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var frequency = exports.frequency = function frequency(arr) {
  return arr.reduce(function (acc, val) {
    return acc.set(val, 1 + (acc.get(val) || 0));
  }, new _map2.default());
};

var reduceDigit = exports.reduceDigit = function reduceDigit(arr, digit) {
  return (typeof arr === 'undefined' ? 'undefined' : (0, _typeof3.default)(arr)) === 'object' ? arr.map(function (_) {
    return parseFloat(_.toFixed(digit));
  }) : parseFloat(arr.toFixed(digit));
};

var flatten = exports.flatten = function flatten(arr) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return depth !== 1 ? arr.reduce(function (a, v) {
    return a.concat(Array.isArray(v) ? flatten(v, depth - 1) : v);
  }, []) : arr.reduce(function (a, v) {
    return a.concat(v);
  }, []);
};

var sortArr = exports.sortArr = function sortArr(f) {
  return function (arr) {
    return [].concat((0, _toConsumableArray3.default)(arr)).sort(f);
  };
};

var factorial = exports.factorial = function factorial(n) {
  return n < 0 ? function () {
    throw new TypeError('Negative numbers are not allowed!');
  }() : n <= 1 ? 1 : n * factorial(n - 1);
};

var combinations = exports.combinations = function combinations(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r));
};

var clone = exports.clone = function clone(x) {
  return [].concat((0, _toConsumableArray3.default)(x));
};

var head = exports.head = function head(arr) {
  return arr[0];
};

var shift = exports.shift = function shift(x) {
  return x.slice(1);
};

var sum = exports.sum = function sum() {
  for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
    arr[_key] = arguments[_key];
  }

  return [].concat(arr).reduce(function (acc, val) {
    return acc + val;
  }, 0);
};

var min = exports.min = function min(arr) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return [].concat((0, _toConsumableArray3.default)(arr)).sort(function (a, b) {
    return a - b;
  }).slice(0, n);
};

var max = exports.max = function max(arr) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return [].concat((0, _toConsumableArray3.default)(arr)).sort(function (a, b) {
    return b - a;
  }).slice(0, n);
};

var mean = exports.mean = function mean() {
  for (var _len2 = arguments.length, nums = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    nums[_key2] = arguments[_key2];
  }

  return [].concat(nums).reduce(function (acc, val) {
    return acc + val;
  }, 0) / nums.length;
};

var median = exports.median = function median(arr) {
  var mid = Math.floor(arr.length / 2),
      nums = [].concat((0, _toConsumableArray3.default)(arr)).sort(function (a, b) {
    return a - b;
  });

  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(71), __esModule: true };

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(34)('wks');
var uid = __webpack_require__(21);
var Symbol = __webpack_require__(4).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(45);
var toPrimitive = __webpack_require__(29);
var dP = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var core = __webpack_require__(7);
var ctx = __webpack_require__(12);
var hide = __webpack_require__(9);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(16)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5);
var createDesc = __webpack_require__(17);
module.exports = __webpack_require__(8) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(44);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(49);
var defined = __webpack_require__(26);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(117), __esModule: true };

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(72)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(27)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(25);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(5).f;
var has = __webpack_require__(11);
var TAG = __webpack_require__(3)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(95), __esModule: true };

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(12);
var call = __webpack_require__(50);
var isArrayIter = __webpack_require__(51);
var anObject = __webpack_require__(13);
var toLength = __webpack_require__(20);
var getIterFn = __webpack_require__(52);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(28);
var $export = __webpack_require__(6);
var redefine = __webpack_require__(47);
var hide = __webpack_require__(9);
var has = __webpack_require__(11);
var Iterators = __webpack_require__(18);
var $iterCreate = __webpack_require__(73);
var setToStringTag = __webpack_require__(22);
var getPrototypeOf = __webpack_require__(78);
var ITERATOR = __webpack_require__(3)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(13);
var dPs = __webpack_require__(74);
var enumBugKeys = __webpack_require__(35);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(46)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(77).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(48);
var enumBugKeys = __webpack_require__(35);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(34)('keys');
var uid = __webpack_require__(21);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(26);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(85);
var global = __webpack_require__(4);
var hide = __webpack_require__(9);
var Iterators = __webpack_require__(18);
var TO_STRING_TAG = __webpack_require__(3)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(3);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(21)('meta');
var isObject = __webpack_require__(10);
var has = __webpack_require__(11);
var setDesc = __webpack_require__(5).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(16)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var core = __webpack_require__(7);
var LIBRARY = __webpack_require__(28);
var wksExt = __webpack_require__(38);
var defineProperty = __webpack_require__(5).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 41 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 42 */
/***/ (function(module, exports) {



/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(16)(function () {
  return Object.defineProperty(__webpack_require__(46)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var document = __webpack_require__(4).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(11);
var toIObject = __webpack_require__(14);
var arrayIndexOf = __webpack_require__(75)(false);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(32);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(13);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(18);
var ITERATOR = __webpack_require__(3)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(53);
var ITERATOR = __webpack_require__(3)('iterator');
var Iterators = __webpack_require__(18);
module.exports = __webpack_require__(7).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(32);
var TAG = __webpack_require__(3)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(32);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(48);
var hiddenKeys = __webpack_require__(35).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(5).f;
var create = __webpack_require__(30);
var redefineAll = __webpack_require__(59);
var ctx = __webpack_require__(12);
var anInstance = __webpack_require__(60);
var forOf = __webpack_require__(24);
var $iterDefine = __webpack_require__(27);
var step = __webpack_require__(54);
var setSpecies = __webpack_require__(97);
var DESCRIPTORS = __webpack_require__(8);
var fastKey = __webpack_require__(39).fastKey;
var validate = __webpack_require__(43);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(9);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4);
var $export = __webpack_require__(6);
var meta = __webpack_require__(39);
var fails = __webpack_require__(16);
var hide = __webpack_require__(9);
var redefineAll = __webpack_require__(59);
var forOf = __webpack_require__(24);
var anInstance = __webpack_require__(60);
var isObject = __webpack_require__(10);
var setToStringTag = __webpack_require__(22);
var dP = __webpack_require__(5).f;
var each = __webpack_require__(98)(0);
var DESCRIPTORS = __webpack_require__(8);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(53);
var from = __webpack_require__(102);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(6);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(6);
var aFunction = __webpack_require__(44);
var ctx = __webpack_require__(12);
var forOf = __webpack_require__(24);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var logGamma = function logGamma(z) {
  var s = 1 + 76.18009173 / z - 86.50532033 / (z + 1) + 24.01409822 / (z + 2) - 1.231739516 / (z + 3) + 0.00120858003 / (z + 4) - 0.00000536382 / (z + 5);

  return (z - 0.5) * Math.log(z + 4.5) - (z + 4.5) + Math.log(s * 2.50662827465);
};

var gcf = function gcf(x, a) {
  // Good for x > a + 1
  var a0 = 0;
  var b0 = 1;
  var a1 = 1;
  var b1 = x;
  var aOld = 0;
  var n = 0;

  while (Math.abs((a1 - aOld) / a1) > 0.00001) {
    aOld = a1;
    n = n + 1;
    a0 = a1 + (n - a) * a0;
    b0 = b1 + (n - a) * b0;
    a1 = x * a0 + n * a1;
    b1 = x * b0 + n * b1;
    a0 = a0 / b1;
    b0 = b0 / b1;
    a1 = a1 / b1;
    b1 = 1;
  }
  var prob = Math.exp(a * Math.log(x) - x - logGamma(a)) * a1;

  return 1 - prob;
};

var gSer = function gSer(x, a) {
  // Good for x < a + 1.
  var T9 = 1 / a;
  var g = T9;
  var i = 1;

  while (T9 > g * 0.00001) {
    T9 = T9 * x / (a + i);
    g = g + T9;
    i = i + 1;
  }
  g = g * Math.exp(a * Math.log(x) - x - logGamma(a));
  return g;
};

var gammaCdf = function gammaCdf(x, a) {
  var GI = void 0;

  if (x <= 0) {
    GI = 0;
  } else if (x < a + 1) {
    GI = gSer(x, a);
  } else {
    GI = gcf(x, a);
  }
  return GI;
};

var chiSqrCdf = exports.chiSqrCdf = function chiSqrCdf(Z, DF) {
  var chiSqr = void 0;

  if (DF <= 0) {
    throw new TypeError('Negative numbers are not allowed!');
  } else {
    chiSqr = gammaCdf(Z / 2, DF / 2);
  }
  return Math.round(chiSqr * 100000) / 100000;
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var cdf = function cdf(X) {
  // HASTINGS.  MAX ERROR = .000001
  var T = 1 / (1 + 0.2316419 * Math.abs(X));
  var D = 0.3989423 * Math.exp(-X * X / 2);
  var Prob = D * T * (0.3193815 + T * (-0.3565638 + T * (1.781478 + T * (-1.821256 + T * 1.330274))));

  if (X > 0) {
    Prob = 1 - Prob;
  }
  return Prob;
};

var normalCdf = exports.normalCdf = function normalCdf(Z, M, SD) {
  var Prob = void 0;

  if (SD < 0) {
    throw new TypeError('The standard deviation must be nonnegative.');
  } else if (SD === 0) {
    if (Z < M) {
      Prob = 0;
    } else {
      Prob = 1;
    }
  } else {
    Prob = cdf((Z - M) / SD);
    Prob = Math.round(100000 * Prob) / 100000;
  }
  return Prob;
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var logGamma = function logGamma(z) {
  var s = 1 + 76.18009173 / z - 86.50532033 / (z + 1) + 24.01409822 / (z + 2) - 1.231739516 / (z + 3) + 0.00120858003 / (z + 4) - 0.00000536382 / (z + 5);

  return (z - 0.5) * Math.log(z + 4.5) - (z + 4.5) + Math.log(s * 2.50662827465);
};

var Betinc = function Betinc(X, A, B) {
  var A0 = 0;
  var B0 = 1;
  var A1 = 1;
  var B1 = 1;
  var M9 = 0;
  var A2 = 0;
  var C9;

  while (Math.abs((A1 - A2) / A1) > 0.00001) {
    A2 = A1;
    C9 = -(A + M9) * (A + B + M9) * X / (A + 2 * M9) / (A + 2 * M9 + 1);
    A0 = A1 + C9 * A0;
    B0 = B1 + C9 * B0;
    M9 = M9 + 1;
    C9 = M9 * (B - M9) * X / (A + 2 * M9 - 1) / (A + 2 * M9);
    A1 = A0 + C9 * A1;
    B1 = B0 + C9 * B1;
    A0 = A0 / B1;
    B0 = B0 / B1;
    A1 = A1 / B1;
    B1 = 1;
  }
  return A1 / A;
};

var Betacdf = function Betacdf(Z, A, B) {
  var S;
  var BT;
  var Bcdf;

  S = A + B;
  BT = Math.exp(logGamma(S) - logGamma(B) - logGamma(A) + A * Math.log(Z) + B * Math.log(1 - Z));
  if (Z < (A + 1) / (S + 2)) {
    Bcdf = BT * Betinc(Z, A, B);
  } else {
    Bcdf = 1 - BT * Betinc(1 - Z, B, A);
  }
  return Bcdf;
};

var fCdf = exports.fCdf = function fCdf(X, f1, f2) {
  var Fcdf = void 0,
      Z = void 0;

  if (f1 <= 0) {
    throw new TypeError('Numerator degrees of freedom must be positive');
  } else if (f2 <= 0) {
    throw new TypeError('Denominator degrees of freedom must be positive');
  } else if (X <= 0) {
    Fcdf = 0;
  } else {
    Z = X / (X + f2 / f1);
    Fcdf = Betacdf(Z, f1 / 2, f2 / 2);
  }
  return Math.round(Fcdf * 100000) / 100000;
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ZTABLE = {
  z: [0.09, 0.08, 0.07, 0.06, 0.05, 0.04, 0.03, 0.02, 0.01, 0],
  '-3.4': [0.0002, 0.0003, 0.0003, 0.0003, 0.0003, 0.0003, 0.0003, 0.0003, 0.0003, 0.0003],
  '-3.3': [0.0003, 0.0004, 0.0004, 0.0004, 0.0004, 0.0004, 0.0004, 0.0005, 0.0005, 0.0005],
  '-3.2': [0.0005, 0.0005, 0.0005, 0.0006, 0.0006, 0.0006, 0.0006, 0.0006, 0.0007, 0.0007],
  '-3.1': [0.0007, 0.0007, 0.0008, 0.0008, 0.0008, 0.0008, 0.0009, 0.0009, 0.0009, 0.001],
  '-3.0': [0.001, 0.001, 0.0011, 0.0011, 0.0011, 0.0012, 0.0012, 0.0013, 0.0013, 0.0013],
  '-2.9': [0.0014, 0.0014, 0.0015, 0.0015, 0.0016, 0.0016, 0.0017, 0.0018, 0.0018, 0.0019],
  '-2.8': [0.0019, 0.002, 0.0021, 0.0021, 0.0022, 0.0023, 0.0023, 0.0024, 0.0025, 0.0026],
  '-2.7': [0.0026, 0.0027, 0.0028, 0.0029, 0.003, 0.0031, 0.0032, 0.0033, 0.0034, 0.0035],
  '-2.6': [0.0036, 0.0037, 0.0038, 0.0039, 0.004, 0.0041, 0.0043, 0.0044, 0.0045, 0.0047],
  '-2.5': [0.0048, 0.0049, 0.0051, 0.0052, 0.0054, 0.0055, 0.0057, 0.0059, 0.006, 0.0062],
  '-2.4': [0.0064, 0.0066, 0.0068, 0.0069, 0.0071, 0.0073, 0.0075, 0.0078, 0.008, 0.0082],
  '-2.3': [0.0084, 0.0087, 0.0089, 0.0091, 0.0094, 0.0096, 0.0099, 0.0102, 0.0104, 0.0107],
  '-2.2': [0.011, 0.0113, 0.0116, 0.0119, 0.0122, 0.0125, 0.0129, 0.0132, 0.0136, 0.0139],
  '-2.1': [0.0143, 0.0146, 0.015, 0.0154, 0.0158, 0.0162, 0.0166, 0.017, 0.0174, 0.0179],
  '-2.0': [0.0183, 0.0188, 0.0192, 0.0197, 0.0202, 0.0207, 0.0212, 0.0217, 0.0222, 0.0228],
  '-1.9': [0.0233, 0.0239, 0.0244, 0.025, 0.0256, 0.0262, 0.0268, 0.0274, 0.0281, 0.0287],
  '-1.8': [0.0294, 0.0301, 0.0307, 0.0314, 0.0322, 0.0329, 0.0336, 0.0344, 0.0351, 0.0359],
  '-1.7': [0.0367, 0.0375, 0.0384, 0.0392, 0.0401, 0.0409, 0.0418, 0.0427, 0.0436, 0.0446],
  '-1.6': [0.0455, 0.0465, 0.0475, 0.0485, 0.0495, 0.0505, 0.0516, 0.0526, 0.0537, 0.0548],
  '-1.5': [0.0559, 0.0571, 0.0582, 0.0594, 0.0606, 0.0618, 0.063, 0.0643, 0.0655, 0.0668],
  '-1.4': [0.0681, 0.0694, 0.0708, 0.0721, 0.0735, 0.0749, 0.0764, 0.0778, 0.0793, 0.0808],
  '-1.3': [0.0823, 0.0838, 0.0853, 0.0869, 0.0885, 0.0901, 0.0918, 0.0934, 0.0951, 0.0968],
  '-1.2': [0.0985, 0.1003, 0.102, 0.1038, 0.1056, 0.1075, 0.1093, 0.1112, 0.1131, 0.1151],
  '-1.1': [0.117, 0.119, 0.121, 0.123, 0.1251, 0.1271, 0.1292, 0.1314, 0.1335, 0.1357],
  '-1.0': [0.1379, 0.1401, 0.1423, 0.1446, 0.1469, 0.1492, 0.1515, 0.1539, 0.1562, 0.1587],
  '-0.9': [0.1611, 0.1635, 0.166, 0.1685, 0.1711, 0.1736, 0.1762, 0.1788, 0.1814, 0.1841],
  '-0.8': [0.1867, 0.1894, 0.1922, 0.1949, 0.1977, 0.2005, 0.2033, 0.2061, 0.209, 0.2119],
  '-0.7': [0.2148, 0.2177, 0.2206, 0.2236, 0.2266, 0.2296, 0.2327, 0.2358, 0.2389, 0.242],
  '-0.6': [0.2451, 0.2483, 0.2514, 0.2546, 0.2578, 0.2611, 0.2643, 0.2676, 0.2709, 0.2743],
  '-0.5': [0.2776, 0.281, 0.2843, 0.2877, 0.2912, 0.2946, 0.2981, 0.3015, 0.305, 0.3085],
  '-0.4': [0.3121, 0.3156, 0.3192, 0.3228, 0.3264, 0.33, 0.3336, 0.3372, 0.3409, 0.3446],
  '-0.3': [0.3483, 0.352, 0.3557, 0.3594, 0.3632, 0.3669, 0.3707, 0.3745, 0.3783, 0.3821],
  '-0.2': [0.3829, 0.3897, 0.3936, 0.3974, 0.4013, 0.4052, 0.409, 0.4129, 0.4168, 0.4207],
  '-0.1': [0.4247, 0.4286, 0.4325, 0.4364, 0.4404, 0.4443, 0.4483, 0.4522, 0.4562, 0.4602],
  '0.0': [0.4641, 0.4681, 0.4721, 0.4761, 0.4801, 0.484, 0.488, 0.492, 0.496, 0.5]
};

var zScore = exports.zScore = function zScore(zscore) {
  zscore = parseFloat(zscore);

  if (isNaN(zscore)) {
    throw new TypeError('zscore is not a valid number');
  }

  var yZscore = -3.4;
  var xZscore = 0.09;

  if (zscore === 0) {
    return 0.5;
  }

  if (zscore > 0) {
    if (zscore > 3.49) {
      return 1;
    }

    zscore = Math.floor(zscore * 100) / 100;
    yZscore = Math.floor(zscore * 10) / 10;
    yZscore = -yZscore;
  } else {
    if (zscore < -3.49) {
      return 0;
    }

    zscore = Math.ceil(zscore * 100) / 100;
    yZscore = Math.ceil(zscore * 10) / 10;
  }
  xZscore = Math.abs(Math.round(zscore % yZscore * 10000) / 10000);

  var z100 = isNaN(xZscore) ? Math.abs(zscore) : xZscore;
  var z10 = yZscore === 0 ? '0.0' : yZscore.toFixed(1);
  var col = ZTABLE.z.indexOf(z100);
  var perc = ZTABLE[z10][col];

  if (zscore > 0) {
    perc = Math.round((1 - perc) * 10000) / 10000;
  }

  return perc;
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Kendall = exports.SpearmanRankCorrelation = exports.CochransQ = exports.FriedmansS = exports.KruskalWallis = exports.Median = exports.ChiSquareForIndependence = exports.ChiSquareForHomogeneity = exports.McNemar = exports.WilcoxonRankSum = exports.Sign = exports.SiegelTukey = exports.Mood = exports.FishersExact = exports.KolmogorovSmirnov = exports.WaldWolfowitz = exports.MannWhitney = exports.LocationMedian = exports.Runs = exports.WilcoxonSignedRanks = exports.OneSampleSign = exports.Binomial = exports.LayardChiSquare = exports.BrownForsythe = exports.Levene = exports.ShapiroWilk = exports.Lilliefors = exports.KolmogorovSmirnovGoodnessOfFit = exports.ChiSquareGoodnessOfFit = undefined;

var _ChiSquareGoodnessOfFit = __webpack_require__(70);

var _ChiSquareGoodnessOfFit2 = _interopRequireDefault(_ChiSquareGoodnessOfFit);

var _KolmogorovSmirnovGoodnessOfFit = __webpack_require__(105);

var _KolmogorovSmirnovGoodnessOfFit2 = _interopRequireDefault(_KolmogorovSmirnovGoodnessOfFit);

var _Lilliefors = __webpack_require__(106);

var _Lilliefors2 = _interopRequireDefault(_Lilliefors);

var _ShapiroWilk = __webpack_require__(107);

var _ShapiroWilk2 = _interopRequireDefault(_ShapiroWilk);

var _Levene = __webpack_require__(108);

var _Levene2 = _interopRequireDefault(_Levene);

var _BrownForsythe = __webpack_require__(109);

var _BrownForsythe2 = _interopRequireDefault(_BrownForsythe);

var _LayardChiSquare = __webpack_require__(110);

var _LayardChiSquare2 = _interopRequireDefault(_LayardChiSquare);

var _Binomial = __webpack_require__(114);

var _Binomial2 = _interopRequireDefault(_Binomial);

var _OneSampleSign = __webpack_require__(115);

var _OneSampleSign2 = _interopRequireDefault(_OneSampleSign);

var _WilcoxonSignedRanks = __webpack_require__(116);

var _WilcoxonSignedRanks2 = _interopRequireDefault(_WilcoxonSignedRanks);

var _Runs = __webpack_require__(122);

var _Runs2 = _interopRequireDefault(_Runs);

var _LocationMedian = __webpack_require__(123);

var _LocationMedian2 = _interopRequireDefault(_LocationMedian);

var _MannWhitney = __webpack_require__(124);

var _MannWhitney2 = _interopRequireDefault(_MannWhitney);

var _WaldWolfowitz = __webpack_require__(125);

var _WaldWolfowitz2 = _interopRequireDefault(_WaldWolfowitz);

var _KolmogorovSmirnov = __webpack_require__(126);

var _KolmogorovSmirnov2 = _interopRequireDefault(_KolmogorovSmirnov);

var _FishersExact = __webpack_require__(127);

var _FishersExact2 = _interopRequireDefault(_FishersExact);

var _Mood = __webpack_require__(128);

var _Mood2 = _interopRequireDefault(_Mood);

var _SiegelTukey = __webpack_require__(129);

var _SiegelTukey2 = _interopRequireDefault(_SiegelTukey);

var _Sign = __webpack_require__(130);

var _Sign2 = _interopRequireDefault(_Sign);

var _WilcoxonRankSum = __webpack_require__(131);

var _WilcoxonRankSum2 = _interopRequireDefault(_WilcoxonRankSum);

var _McNemar = __webpack_require__(132);

var _McNemar2 = _interopRequireDefault(_McNemar);

var _ChiSquareForHomogeneity = __webpack_require__(133);

var _ChiSquareForHomogeneity2 = _interopRequireDefault(_ChiSquareForHomogeneity);

var _ChiSquareForIndependence = __webpack_require__(134);

var _ChiSquareForIndependence2 = _interopRequireDefault(_ChiSquareForIndependence);

var _Median = __webpack_require__(135);

var _Median2 = _interopRequireDefault(_Median);

var _KruskalWallis = __webpack_require__(136);

var _KruskalWallis2 = _interopRequireDefault(_KruskalWallis);

var _FriedmansS = __webpack_require__(137);

var _FriedmansS2 = _interopRequireDefault(_FriedmansS);

var _CochransQ = __webpack_require__(138);

var _CochransQ2 = _interopRequireDefault(_CochransQ);

var _SpearmanRankCorrelation = __webpack_require__(139);

var _SpearmanRankCorrelation2 = _interopRequireDefault(_SpearmanRankCorrelation);

var _Kendall = __webpack_require__(140);

var _Kendall2 = _interopRequireDefault(_Kendall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Correlation


// Tests for n Paired Samples


// Tests for n Independent Samples


// Chi Square Tests for Homogeneity and Independence


// Tests for Two Independent Samples
// - Location Problem


// Tests for One Sample
exports.ChiSquareGoodnessOfFit = _ChiSquareGoodnessOfFit2.default;
exports.KolmogorovSmirnovGoodnessOfFit = _KolmogorovSmirnovGoodnessOfFit2.default;
exports.Lilliefors = _Lilliefors2.default;
exports.ShapiroWilk = _ShapiroWilk2.default;
exports.Levene = _Levene2.default;
exports.BrownForsythe = _BrownForsythe2.default;
exports.LayardChiSquare = _LayardChiSquare2.default;
exports.Binomial = _Binomial2.default;
exports.OneSampleSign = _OneSampleSign2.default;
exports.WilcoxonSignedRanks = _WilcoxonSignedRanks2.default;
exports.Runs = _Runs2.default;
exports.LocationMedian = _LocationMedian2.default;
exports.MannWhitney = _MannWhitney2.default;
exports.WaldWolfowitz = _WaldWolfowitz2.default;
exports.KolmogorovSmirnov = _KolmogorovSmirnov2.default;
exports.FishersExact = _FishersExact2.default;
exports.Mood = _Mood2.default;
exports.SiegelTukey = _SiegelTukey2.default;
exports.Sign = _Sign2.default;
exports.WilcoxonRankSum = _WilcoxonRankSum2.default;
exports.McNemar = _McNemar2.default;
exports.ChiSquareForHomogeneity = _ChiSquareForHomogeneity2.default;
exports.ChiSquareForIndependence = _ChiSquareForIndependence2.default;
exports.Median = _Median2.default;
exports.KruskalWallis = _KruskalWallis2.default;
exports.FriedmansS = _FriedmansS2.default;
exports.CochransQ = _CochransQ2.default;
exports.SpearmanRankCorrelation = _SpearmanRankCorrelation2.default;
exports.Kendall = _Kendall2.default;

// Tests for Two Paired Samples

// - Scale Problem


// Tests for Homogeneity of Variance
// Tests of Goodness of Fit

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = __webpack_require__(2);

var _from2 = _interopRequireDefault(_from);

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = ChiSquareGoodnessOfFit;

var _utils = __webpack_require__(1);

var _chiSqr = __webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ChiSquareGoodnessOfFit(_ref) {
  var observed = _ref.observed,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var c = observed.length;
  var pj = 1 / c;
  var df = c - 1;
  var avg = _utils.mean.apply(undefined, (0, _toConsumableArray3.default)(observed));
  var sumObserved = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(observed));
  var expected = (0, _from2.default)({ length: c }, function () {
    return sumObserved * pj;
  });
  var chiSqrCalc = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(expected.map(function (v, i) {
    return Math.pow(observed[i] - v, 2) / v;
  })));
  var pValue = (0, _chiSqr.chiSqrCdf)(chiSqrCalc, df);
  var H0 = null;

  if (way.includes('two-way')) {
    pValue < alpha / 2 || 2 * pValue < alpha ? H0 = false : H0 = true;
  } else {
    pValue < alpha ? H0 = true : H0 = false;
  }

  return {
    c: c,
    observed: observed,
    expected: expected,
    avg: avg,
    sumObserved: sumObserved,
    pj: pj,
    df: df,
    chiSqrCalc: (0, _utils.reduceDigit)(chiSqrCalc, digit),
    pValue: pValue,
    H0: H0
  };
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(19);
__webpack_require__(79);
module.exports = __webpack_require__(7).Array.from;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(25);
var defined = __webpack_require__(26);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(30);
var descriptor = __webpack_require__(17);
var setToStringTag = __webpack_require__(22);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(9)(IteratorPrototype, __webpack_require__(3)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(5);
var anObject = __webpack_require__(13);
var getKeys = __webpack_require__(31);

module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(14);
var toLength = __webpack_require__(20);
var toAbsoluteIndex = __webpack_require__(76);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(25);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(4).document;
module.exports = document && document.documentElement;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(11);
var toObject = __webpack_require__(36);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(12);
var $export = __webpack_require__(6);
var toObject = __webpack_require__(36);
var call = __webpack_require__(50);
var isArrayIter = __webpack_require__(51);
var toLength = __webpack_require__(20);
var createProperty = __webpack_require__(80);
var getIterFn = __webpack_require__(52);

$export($export.S + $export.F * !__webpack_require__(81)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(5);
var createDesc = __webpack_require__(17);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(3)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(83);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(87);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(84), __esModule: true };

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(19);
__webpack_require__(37);
module.exports = __webpack_require__(38).f('iterator');


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(86);
var step = __webpack_require__(54);
var Iterators = __webpack_require__(18);
var toIObject = __webpack_require__(14);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(27)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(88), __esModule: true };

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(89);
__webpack_require__(42);
__webpack_require__(93);
__webpack_require__(94);
module.exports = __webpack_require__(7).Symbol;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(4);
var has = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(8);
var $export = __webpack_require__(6);
var redefine = __webpack_require__(47);
var META = __webpack_require__(39).KEY;
var $fails = __webpack_require__(16);
var shared = __webpack_require__(34);
var setToStringTag = __webpack_require__(22);
var uid = __webpack_require__(21);
var wks = __webpack_require__(3);
var wksExt = __webpack_require__(38);
var wksDefine = __webpack_require__(40);
var enumKeys = __webpack_require__(90);
var isArray = __webpack_require__(56);
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(10);
var toIObject = __webpack_require__(14);
var toPrimitive = __webpack_require__(29);
var createDesc = __webpack_require__(17);
var _create = __webpack_require__(30);
var gOPNExt = __webpack_require__(91);
var $GOPD = __webpack_require__(92);
var $DP = __webpack_require__(5);
var $keys = __webpack_require__(31);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(57).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(41).f = $propertyIsEnumerable;
  __webpack_require__(55).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(28)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(9)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(31);
var gOPS = __webpack_require__(55);
var pIE = __webpack_require__(41);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(14);
var gOPN = __webpack_require__(57).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(41);
var createDesc = __webpack_require__(17);
var toIObject = __webpack_require__(14);
var toPrimitive = __webpack_require__(29);
var has = __webpack_require__(11);
var IE8_DOM_DEFINE = __webpack_require__(45);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(40)('asyncIterator');


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(40)('observable');


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
__webpack_require__(19);
__webpack_require__(37);
__webpack_require__(96);
__webpack_require__(101);
__webpack_require__(103);
__webpack_require__(104);
module.exports = __webpack_require__(7).Map;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(58);
var validate = __webpack_require__(43);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(61)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4);
var core = __webpack_require__(7);
var dP = __webpack_require__(5);
var DESCRIPTORS = __webpack_require__(8);
var SPECIES = __webpack_require__(3)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(12);
var IObject = __webpack_require__(49);
var toObject = __webpack_require__(36);
var toLength = __webpack_require__(20);
var asc = __webpack_require__(99);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(100);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
var isArray = __webpack_require__(56);
var SPECIES = __webpack_require__(3)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(6);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(62)('Map') });


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(24);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(63)('Map');


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(64)('Map');


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _map = __webpack_require__(23);

var _map2 = _interopRequireDefault(_map);

exports.default = KolmogorovSmirnovGoodnessFit;

var _utils = __webpack_require__(1);

var _normal = __webpack_require__(66);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function KolmogorovSmirnovGoodnessFit(_ref) {
  var observed = _ref.observed,
      _ref$mean = _ref.mean,
      mean = _ref$mean === undefined ? undefined : _ref$mean,
      _ref$standardDeviatio = _ref.standardDeviation,
      standardDeviation = _ref$standardDeviatio === undefined ? undefined : _ref$standardDeviatio,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit;

  var c = observed.length;
  var frequencyMap = (0, _utils.frequency)(observed);
  var sortedFrequencyMap = new _map2.default([].concat((0, _toConsumableArray3.default)(frequencyMap.entries())).sort());
  var X = [].concat((0, _toConsumableArray3.default)(sortedFrequencyMap.keys()));
  var frequencyX = [].concat((0, _toConsumableArray3.default)(sortedFrequencyMap.values()));
  var Sx = [];
  var cumulativeFrequency = [];

  frequencyX.reduce(function (prev, curr, i) {
    return cumulativeFrequency[i] = prev + curr;
  }, 0);
  cumulativeFrequency.reduce(function (prev, curr, i) {
    return Sx[i] = curr / c;
  }, 0);
  var Xf = [];
  var XSubMeanX = [];
  var XSubMeanXFrequencyX = [];

  if (typeof mean === 'undefined' && typeof standardDeviation === 'undefined') {
    Xf = X.map(function (v, i) {
      return v * frequencyX[i];
    });
    mean = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(Xf)) / c;
    XSubMeanX = X.map(function (v) {
      return v - mean;
    });
    XSubMeanXFrequencyX = XSubMeanX.map(function (v, i) {
      return Math.pow(v, 2) * frequencyX[i];
    });
    standardDeviation = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(XSubMeanXFrequencyX)) / (c - 1);
  }
  var variance = Math.sqrt(standardDeviation);
  var Z = X.map(function (v) {
    return (v - mean) / variance;
  });
  var fX = X.map(function (v) {
    return (0, _normal.normalCdf)(v, mean, variance);
  });
  var SxSubfX = Sx.map(function (v, i) {
    return i === 0 ? fX[i] : Math.abs(Sx[i - 1] - fX[i]);
  });
  var Dc = (0, _utils.max)(SxSubfX);

  return {
    c: c,
    observed: observed,
    sortedFrequencyMap: sortedFrequencyMap,
    X: X,
    frequencyX: frequencyX,
    cumulativeFrequency: cumulativeFrequency,
    Sx: (0, _utils.reduceDigit)(Sx, digit),
    Xf: (0, _utils.reduceDigit)(Xf, digit),
    XSubMeanX: (0, _utils.reduceDigit)(XSubMeanX, digit),
    XSubMeanXFrequencyX: (0, _utils.reduceDigit)(XSubMeanXFrequencyX, digit),
    mean: (0, _utils.reduceDigit)(mean, digit),
    standardDeviation: (0, _utils.reduceDigit)(standardDeviation, digit),
    variance: (0, _utils.reduceDigit)(variance, digit),
    Z: (0, _utils.reduceDigit)(Z, digit),
    Dc: (0, _utils.reduceDigit)(Dc, digit)
  };
}

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _map = __webpack_require__(23);

var _map2 = _interopRequireDefault(_map);

exports.default = Lilliefors;

var _utils = __webpack_require__(1);

var _normal = __webpack_require__(66);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Lilliefors(_ref) {
  var observed = _ref.observed,
      _ref$mean = _ref.mean,
      mean = _ref$mean === undefined ? undefined : _ref$mean,
      _ref$standardDeviatio = _ref.standardDeviation,
      standardDeviation = _ref$standardDeviatio === undefined ? undefined : _ref$standardDeviatio,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit;

  var c = observed.length;
  var frequencyMap = (0, _utils.frequency)(observed);
  var sortedFrequencyMap = new _map2.default([].concat((0, _toConsumableArray3.default)(frequencyMap.entries())).sort());
  var X = [].concat((0, _toConsumableArray3.default)(sortedFrequencyMap.keys()));
  var frequencyX = [].concat((0, _toConsumableArray3.default)(sortedFrequencyMap.values()));
  var Sx = [];
  var cumulativeFrequency = [];

  frequencyX.reduce(function (prev, curr, i) {
    return cumulativeFrequency[i] = prev + curr;
  }, 0);
  cumulativeFrequency.reduce(function (prev, curr, i) {
    return Sx[i] = curr / c;
  }, 0);
  var Xf = [];
  var XSubMeanX = [];
  var XSubMeanXFrequencyX = [];

  if (typeof mean === 'undefined' && typeof standardDeviation === 'undefined') {
    Xf = X.map(function (v, i) {
      return v * frequencyX[i];
    });
    mean = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(Xf)) / c;
    XSubMeanX = X.map(function (v) {
      return v - mean;
    });
    XSubMeanXFrequencyX = XSubMeanX.map(function (v, i) {
      return Math.pow(v, 2) * frequencyX[i];
    });
    standardDeviation = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(XSubMeanXFrequencyX)) / (c - 1);
  }
  var variance = Math.sqrt(standardDeviation);
  var Z = X.map(function (v) {
    return (v - mean) / variance;
  });
  var fX = X.map(function (v) {
    return (0, _normal.normalCdf)(v, mean, variance);
  });
  var SxSubfX = Sx.map(function (v, i) {
    return i === 0 ? fX[i] : Math.abs(Sx[i - 1] - fX[i]);
  });
  var Dc = (0, _utils.max)(SxSubfX);

  return {
    c: c,
    observed: observed,
    sortedFrequencyMap: sortedFrequencyMap,
    X: X,
    frequencyX: frequencyX,
    cumulativeFrequency: cumulativeFrequency,
    Sx: (0, _utils.reduceDigit)(Sx, digit),
    Xf: (0, _utils.reduceDigit)(Xf, digit),
    XSubMeanX: (0, _utils.reduceDigit)(XSubMeanX, digit),
    XSubMeanXFrequencyX: (0, _utils.reduceDigit)(XSubMeanXFrequencyX, digit),
    mean: (0, _utils.reduceDigit)(mean, digit),
    standardDeviation: (0, _utils.reduceDigit)(standardDeviation, digit),
    variance: (0, _utils.reduceDigit)(variance, digit),
    Z: (0, _utils.reduceDigit)(Z, digit),
    Dc: (0, _utils.reduceDigit)(Dc, digit)
  };
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _map = __webpack_require__(23);

var _map2 = _interopRequireDefault(_map);

exports.default = ShapiroWilk;

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ShapiroWilk(_ref) {
  var observed = _ref.observed,
      _ref$mean = _ref.mean,
      mean = _ref$mean === undefined ? undefined : _ref$mean,
      _ref$standardDeviatio = _ref.standardDeviation,
      standardDeviation = _ref$standardDeviatio === undefined ? undefined : _ref$standardDeviatio,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit;

  var c = observed.length;
  var frequencyMap = (0, _utils.frequency)(observed);
  var sortedFrequencyMap = new _map2.default([].concat((0, _toConsumableArray3.default)(frequencyMap.entries())).sort());
  var X = [].concat((0, _toConsumableArray3.default)(sortedFrequencyMap.keys()));
  var frequencyX = [].concat((0, _toConsumableArray3.default)(sortedFrequencyMap.values()));
  var Sx = [];
  var cumulativeFrequency = [];

  frequencyX.reduce(function (prev, curr, i) {
    return cumulativeFrequency[i] = prev + curr;
  }, 0);
  cumulativeFrequency.reduce(function (prev, curr, i) {
    return Sx[i] = curr / c;
  }, 0);
  var Xf = [];
  var XSubMeanX = [];
  var XSubMeanXFrequencyX = [];

  if (typeof mean === 'undefined' && typeof standardDeviation === 'undefined') {
    Xf = X.map(function (v, i) {
      return v * frequencyX[i];
    });
    mean = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(Xf)) / c;
    XSubMeanX = X.map(function (v) {
      return v - mean;
    });
    XSubMeanXFrequencyX = XSubMeanX.map(function (v, i) {
      return Math.pow(v, 2) * frequencyX[i];
    });
    standardDeviation = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(XSubMeanXFrequencyX)) / (c - 1);
  }
  var variance = Math.sqrt(standardDeviation);
  var Z = X.map(function (v) {
    return (v - mean) / variance;
  });

  return {
    c: c,
    observed: observed,
    sortedFrequencyMap: sortedFrequencyMap,
    X: X,
    frequencyX: frequencyX,
    cumulativeFrequency: cumulativeFrequency,
    Sx: (0, _utils.reduceDigit)(Sx, digit),
    Xf: (0, _utils.reduceDigit)(Xf, digit),
    XSubMeanX: (0, _utils.reduceDigit)(XSubMeanX, digit),
    XSubMeanXFrequencyX: (0, _utils.reduceDigit)(XSubMeanXFrequencyX, digit),
    mean: (0, _utils.reduceDigit)(mean, digit),
    standardDeviation: (0, _utils.reduceDigit)(standardDeviation, digit),
    variance: (0, _utils.reduceDigit)(variance, digit),
    Z: (0, _utils.reduceDigit)(Z, digit)
  };
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = Levene;

var _utils = __webpack_require__(1);

var _f = __webpack_require__(67);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Levene(_ref) {
  var observed = _ref.observed,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var c = observed.length;
  var flatObserved = (0, _utils.flatten)(observed);
  var n = flatObserved.length;
  var ni = observed.map(function (v) {
    return v.length;
  });
  var meanObserved = observed.map(function (v) {
    return _utils.mean.apply(undefined, (0, _toConsumableArray3.default)(v));
  });
  var Z = observed.map(function (v, i) {
    return v.map(function (val) {
      return Math.abs(val - meanObserved[i]);
    });
  });
  var sumZi = Z.map(function (_, i) {
    return _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(Z[i]));
  });
  var meanZi = sumZi.map(function (v, i) {
    return v / ni[i];
  });
  var meanZ = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(sumZi)) / n;
  var SSB = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(ni.map(function (v, i) {
    return v * Math.pow(meanZi[i] - meanZ, 2);
  })));
  var SSW = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(Z.map(function (v, i) {
    return _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(v.map(function (val) {
      return Math.pow(val - meanZi[i], 2);
    })));
  })));
  var MSB = SSB / (c - 1);
  var MSW = SSW / (n - c);
  var fCalc = MSB / MSW;
  var pValue = 1 - (0, _f.fCdf)(fCalc, c - 1, n - c);

  return {
    c: c,
    n: n,
    ni: ni,
    observed: observed,
    flatObserved: flatObserved,
    meanObserved: meanObserved,
    Z: Z,
    sumZi: sumZi,
    meanZi: meanZi,
    meanZ: meanZ,
    SSB: (0, _utils.reduceDigit)(SSB, digit),
    SSW: (0, _utils.reduceDigit)(SSW, digit),
    MSB: (0, _utils.reduceDigit)(MSB, digit),
    MSW: (0, _utils.reduceDigit)(MSW, digit),
    fCalc: (0, _utils.reduceDigit)(fCalc, digit),
    pValue: pValue
  };
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = BrownForsythe;

var _utils = __webpack_require__(1);

var _f = __webpack_require__(67);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BrownForsythe(_ref) {
  var observed = _ref.observed,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var c = observed.length;
  var flatObserved = (0, _utils.flatten)(observed);
  var n = flatObserved.length;
  var ni = observed.map(function (v) {
    return v.length;
  });
  var medianObserved = observed.map(function (v) {
    return (0, _utils.median)(v);
  });
  var Z = observed.map(function (v, i) {
    return v.map(function (val) {
      return Math.abs(val - medianObserved[i]);
    });
  });
  var sumZi = Z.map(function (_, i) {
    return _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(Z[i]));
  });
  var meanZi = sumZi.map(function (v, i) {
    return v / ni[i];
  });
  var meanZ = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(sumZi)) / n;
  var SSB = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(ni.map(function (v, i) {
    return v * Math.pow(meanZi[i] - meanZ, 2);
  })));
  var SSW = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(Z.map(function (v, i) {
    return _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(v.map(function (val) {
      return Math.pow(val - meanZi[i], 2);
    })));
  })));
  var MSB = SSB / (c - 1);
  var MSW = SSW / (n - c);
  var fCalc = MSB / MSW;
  var pValue = 1 - (0, _f.fCdf)(fCalc, c - 1, n - c);

  return {
    c: c,
    n: n,
    ni: ni,
    observed: observed,
    flatObserved: flatObserved,
    medianObserved: medianObserved,
    Z: Z,
    sumZi: sumZi,
    meanZi: meanZi,
    meanZ: meanZ,
    SSB: (0, _utils.reduceDigit)(SSB, digit),
    SSW: (0, _utils.reduceDigit)(SSW, digit),
    MSB: (0, _utils.reduceDigit)(MSB, digit),
    MSW: (0, _utils.reduceDigit)(MSW, digit),
    fCalc: (0, _utils.reduceDigit)(fCalc, digit),
    pValue: pValue
  };
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _log = __webpack_require__(111);

var _log2 = _interopRequireDefault(_log);

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = LayardChiSquare;

var _utils = __webpack_require__(1);

var _chiSqr = __webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LayardChiSquare(_ref) {
  var observed = _ref.observed,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var c = observed.length;
  var df = c - 1;
  var flatObserved = (0, _utils.flatten)(observed);
  var n = flatObserved.length;
  var ni = observed.map(function (v) {
    return v.length;
  });
  var meanObserved = observed.map(function (v) {
    return _utils.mean.apply(undefined, (0, _toConsumableArray3.default)(v));
  });
  var Z = observed.map(function (v, i) {
    return v.map(function (val) {
      return val - meanObserved[i];
    });
  });
  var SSW = Z.map(function (v, i) {
    return _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(v.map(function (val) {
      return Math.pow(val, 2);
    })));
  });
  var SSSW = Z.map(function (v, i) {
    return _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(v.map(function (val) {
      return Math.pow(val, 4);
    })));
  });
  var gamma = n * _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(SSSW)) / Math.pow(_utils.sum.apply(undefined, (0, _toConsumableArray3.default)(SSW)), 2) - 3;
  var T = 2 + (1 - c / n) * gamma;
  var sSqr = SSW.map(function (v) {
    return v / c;
  });
  var logsSqr = SSW.map(function (v) {
    return (0, _log2.default)(v / c);
  });
  var calc1 = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(ni.map(function (v, i) {
    return (v - 1) * logsSqr[i];
  }))) / _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(ni.map(function (v) {
    return v - 1;
  })));
  var calc2 = ni.map(function (v, i) {
    return (v - 1) * Math.pow(logsSqr[i] - calc1, 2);
  });
  var L = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(calc2)) / T;
  var pValue = 1 - (0, _chiSqr.chiSqrCdf)(L, df);

  return {
    c: c,
    df: df,
    n: n,
    ni: ni,
    observed: observed,
    meanObserved: meanObserved,
    Z: Z,
    SSW: SSW,
    SSSW: SSSW,
    gamma: (0, _utils.reduceDigit)(gamma, digit),
    T: (0, _utils.reduceDigit)(T, digit),
    sSqr: (0, _utils.reduceDigit)(sSqr, digit),
    logsSqr: (0, _utils.reduceDigit)(logsSqr, digit),
    calc1: (0, _utils.reduceDigit)(calc1, digit),
    calc2: (0, _utils.reduceDigit)(calc2, digit),
    L: (0, _utils.reduceDigit)(L, digit),
    pValue: pValue
  };
}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(113);
module.exports = __webpack_require__(7).Math.log10;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(6);

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = __webpack_require__(2);

var _from2 = _interopRequireDefault(_from);

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = Binomial;

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Binomial(_ref) {
  var observed = _ref.observed,
      piZero = _ref.piZero,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var n = observed.length;
  var bCalc = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(observed));
  var w = way === 'one-way' ? 1 : 2;
  var Pb = (0, _from2.default)({ length: n + 1 }, function (_, i) {
    return (0, _utils.combinations)(n, i) * Math.pow(piZero, i) * Math.pow(1 - piZero, n - i);
  });
  // TODO two-way
  var Pbi = Pb.reduce(function (acc, cur, i) {
    return acc.value > alpha / w ? { value: acc.value, index: acc.index } : { value: acc.value + cur, index: i };
  }, { value: 0, index: 0 });

  return {
    n: n,
    w: w,
    observed: observed,
    bCalc: bCalc,
    way: way,
    Pb: Pb,
    Pbi: Pbi
  };
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = __webpack_require__(2);

var _from2 = _interopRequireDefault(_from);

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = OneSampleSign;

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OneSampleSign(_ref) {
  var observed = _ref.observed,
      M0 = _ref.M0,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var n = observed.length;
  var Di = observed.map(function (v) {
    return v - M0;
  });
  var delta = Di.map(function (v) {
    return v > 0 ? 1 : 0;
  });
  var k = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(delta));
  var Pk = (0, _from2.default)({ length: n + 1 }, function (_, i) {
    return (0, _utils.combinations)(n, i) * Math.pow(1 / 2, i) * Math.pow(1 / 2, n - i);
  });

  return {
    n: n,
    observed: observed,
    Di: Di,
    delta: delta,
    k: k,
    Pk: Pk
  };
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = __webpack_require__(15);

var _set2 = _interopRequireDefault(_set);

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = WilcoxonSignedRanks;

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { wilcoxonCdf } from '../cdf/wilcoxon';

function WilcoxonSignedRanks(_ref) {
  var observed = _ref.observed,
      M0 = _ref.M0,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var n = observed.length;
  var Di = observed.map(function (v) {
    return v - M0;
  });
  var delta = Di.filter(function (v) {
    return v !== 0;
  }).map(function (v, i) {
    return v > 0 ? 1 : 0;
  });
  var absDi = Di.filter(function (v) {
    return v !== 0;
  }).map(function (v) {
    return Math.abs(v);
  });
  var indexedAbsDi = absDi.map(function (v, i) {
    return { value: v, index: i };
  });
  var indexSortedAbsDi = (0, _utils.sortArr)(function (_x, _y) {
    return _x.value > _y.value ? 1 : _x.value === _y.value ? 0 : -1;
  })([].concat((0, _toConsumableArray3.default)(indexedAbsDi)));
  var values = [].concat((0, _toConsumableArray3.default)(new _set2.default(indexSortedAbsDi.map(function (v) {
    return v.value;
  }))));
  var meanIndice = [];

  values.forEach(function (item, i) {
    var indexes = indexSortedAbsDi.map(function (val, j) {
      val.index = j;
      return val;
    }).filter(function (a) {
      return a.value === item;
    }).map(function (a) {
      return a.index + 1;
    });

    meanIndice[i] = indexes.map(function (_) {
      return _utils.mean.apply(undefined, (0, _toConsumableArray3.default)(indexes));
    });
  });
  var flatMeanIndice = (0, _utils.flatten)(meanIndice);

  indexSortedAbsDi.map(function (v, i) {
    return v.index = flatMeanIndice[i];
  });
  var rAbsDi = indexedAbsDi.map(function (v) {
    return v.index;
  });
  var TPlus = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(rAbsDi.map(function (v, i) {
    return v * delta[i];
  })));

  return {
    n: n,
    observed: observed,
    Di: Di,
    delta: delta,
    absDi: absDi,
    rAbsDi: rAbsDi,
    TPlus: TPlus
  };
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42);
__webpack_require__(19);
__webpack_require__(37);
__webpack_require__(118);
__webpack_require__(119);
__webpack_require__(120);
__webpack_require__(121);
module.exports = __webpack_require__(7).Set;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(58);
var validate = __webpack_require__(43);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(61)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(6);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(62)('Set') });


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(63)('Set');


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(64)('Set');


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = Runs;

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Runs(_ref) {
  var observed = _ref.observed,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var n = void 0,
      n1 = void 0,
      n2 = void 0,
      ind = void 0,
      meanX = void 0;
  var upDown = void 0;

  if (observed[0][0]) {
    meanX = _utils.mean.apply(undefined, (0, _toConsumableArray3.default)(observed[1]));
    upDown = observed[1].map(function (x) {
      return x > meanX ? 'U' : 'D';
    });
    n1 = observed[0].filter(function (x) {
      return x === 'M';
    }).length;
    n2 = observed[0].filter(function (x) {
      return x === 'W';
    }).length;
    n = n1 + n2;
  } else {
    n = observed.length;
    meanX = _utils.mean.apply(undefined, (0, _toConsumableArray3.default)(observed));
    upDown = observed.map(function (x) {
      return x > meanX ? 'U' : 'D';
    });
    ind = upDown.reduce(function (acc, cur) {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});
  }

  return {
    n: n,
    observed: observed,
    meanX: meanX,
    upDown: upDown,
    ind: ind
  };
}

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = LocationMedian;

var _utils = __webpack_require__(1);

var _z = __webpack_require__(68);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LocationMedian(_ref) {
  var observed = _ref.observed,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit;

  var x = observed[0];
  var y = observed[1];
  var n1 = x.length;
  var n2 = y.length;
  var n = n1 + n2;
  var sortedX = (0, _utils.sortArr)(function (a, b) {
    return a - b;
  })(x);
  var sortedY = (0, _utils.sortArr)(function (a, b) {
    return a - b;
  })(y);
  var sortedXY = (0, _utils.sortArr)(function (a, b) {
    return a - b;
  })([].concat((0, _toConsumableArray3.default)(x), (0, _toConsumableArray3.default)(y)));
  var medianXY = (0, _utils.median)(sortedXY);

  var xMedian = [[], []];

  x.map(function (v, i) {
    return v > medianXY ? xMedian[0].push(v) : xMedian[1].push(v);
  });
  var xMedianLength = xMedian.map(function (v) {
    return v.length;
  });

  var yMedian = [[], []];

  y.map(function (v, i) {
    return v > medianXY ? yMedian[0].push(v) : yMedian[1].push(v);
  });
  var yMedianLength = yMedian.map(function (v) {
    return v.length;
  });

  var P1 = xMedianLength[0] / n1;
  var P2 = yMedianLength[0] / n2;
  var P = (xMedianLength[0] + yMedianLength[0]) / n;
  var Z = (P1 - P2) / Math.sqrt(P * (1 - P) * (1 / n1 + 1 / n2));
  var pValue = 1 - (0, _z.zScore)(Math.abs(Z));

  return {
    x: x,
    y: y,
    sortedX: sortedX,
    sortedY: sortedY,
    sortedXY: sortedXY,
    medianXY: medianXY,
    xMedian: xMedian,
    xMedianLength: xMedianLength,
    yMedian: yMedian,
    yMedianLength: yMedianLength,
    n1: n1,
    n2: n2,
    n: n,
    P1: P1,
    P2: P2,
    P: P,
    Z: Z,
    pValue: pValue
  };
}

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = __webpack_require__(2);

var _from2 = _interopRequireDefault(_from);

var _set = __webpack_require__(15);

var _set2 = _interopRequireDefault(_set);

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = MannWhitney;

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MannWhitney(_ref) {
  var observed = _ref.observed,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit;

  var x = observed[0];
  var y = observed[1];
  var flattenObserved = (0, _utils.flatten)(observed);
  var n1 = x.length;
  var n2 = y.length;
  var n = n1 + n2;
  var indexedObs = flattenObserved.map(function (v, i) {
    return { value: v, index: i };
  });
  var indexSortedObs = (0, _utils.sortArr)(function (_x, _y) {
    return _x.value > _y.value ? 1 : _x.value === _y.value ? 0 : -1;
  })([].concat((0, _toConsumableArray3.default)(indexedObs)));
  var values = [].concat((0, _toConsumableArray3.default)(new _set2.default(indexSortedObs.map(function (v) {
    return v.value;
  }))));
  var meanIndice = [];

  values.forEach(function (item, i) {
    var indexes = indexSortedObs.map(function (itm, j) {
      itm.index = j;
      return itm;
    }).filter(function (v) {
      return v.value === item;
    }).map(function (v) {
      return v.index + 1;
    });

    meanIndice[i] = indexes.map(function (_) {
      return _utils.mean.apply(undefined, (0, _toConsumableArray3.default)(indexes));
    });
  });
  var flatMeanIndice = meanIndice.flatten();

  indexSortedObs.map(function (v, i) {
    return v.index = flatMeanIndice[i];
  });
  var rObs = indexedObs.map(function (v) {
    return v.index;
  });
  var rX = (0, _from2.default)({ length: n1 }, function (_, i) {
    return rObs[i];
  });
  var rY = (0, _from2.default)({ length: n2 }, function (_, i) {
    return rObs[n1 + i];
  });
  var S = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(rX));
  var T = S - n1 * (n1 + 1) / 2;

  return {
    x: x,
    y: y,
    n1: n1,
    n2: n2,
    n: n,
    rX: rX,
    rY: rY,
    S: S,
    T: T
  };
}

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = __webpack_require__(2);

var _from2 = _interopRequireDefault(_from);

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = WaldWolfowitz;

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function WaldWolfowitz(_ref) {
  var observed = _ref.observed,
      M0 = _ref.M0,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var x = observed[0];
  var xObj = x.map(function (v) {
    return { value: v, index: 'X' };
  });
  var y = observed[1];
  var yObj = y.map(function (v) {
    return { value: v, index: 'Y' };
  });
  var n1 = x.length;
  var n2 = y.length;
  var n = n1 + n2;
  var xy = [].concat((0, _toConsumableArray3.default)(xObj), (0, _toConsumableArray3.default)(yObj));
  // TODO repetitive value
  var sortedXY = (0, _utils.sortArr)(function (_x, _y) {
    return _x.value > _y.value ? 1 : _x.value === _y.value ? 0 : -1;
  })([].concat((0, _toConsumableArray3.default)(xy)));
  var rCalc = 1;

  (0, _from2.default)({ length: sortedXY.length - 1 }, function (_, i) {
    if (sortedXY[i].index !== sortedXY[i + 1].index) rCalc++;
    return rCalc;
  });

  return {
    x: x,
    y: y,
    xObj: xObj,
    yObj: yObj,
    n1: n1,
    n2: n2,
    n: n,
    sortedXY: sortedXY,
    rCalc: rCalc
  };
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = __webpack_require__(2);

var _from2 = _interopRequireDefault(_from);

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = KolmogorovSmirnov;

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function KolmogorovSmirnov(_ref) {
  var observed = _ref.observed,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var x = observed[0];
  var xObj = x.map(function (v) {
    return { value: v, index: 'X' };
  });
  var y = observed[1];
  var yObj = y.map(function (v) {
    return { value: v, index: 'Y' };
  });
  var n1 = x.length;
  var n2 = y.length;
  var n = n1 + n2;
  var xy = [].concat((0, _toConsumableArray3.default)(xObj), (0, _toConsumableArray3.default)(yObj));
  var sortedXY = (0, _utils.sortArr)(function (_x, _y) {
    return _x.value > _y.value ? 1 : _x.value === _y.value ? 0 : -1;
  })([].concat((0, _toConsumableArray3.default)(xy)));
  var Xi = [];
  var Yi = [];

  sortedXY.map(function (v) {
    v.index === 'X' ? Xi.push(v.value) : Xi.push(null);
    v.index === 'Y' ? Yi.push(v.value) : Yi.push(null);
  });
  var cumulativeFrequencyX = [];
  var cumulativeFrequencyY = [];
  var S1x = [];
  var S2x = [];

  Xi.map(function (v) {
    return typeof v === 'number' ? 1 : null;
  }).reduce(function (prev, curr, i) {
    return cumulativeFrequencyX[i] = prev + curr;
  }, 0);
  cumulativeFrequencyX.reduce(function (prev, curr, i) {
    return S1x[i] = curr / n1;
  }, 0);
  Yi.map(function (v) {
    return typeof v === 'number' ? 1 : null;
  }).reduce(function (prev, curr, i) {
    return cumulativeFrequencyY[i] = prev + curr;
  }, 0);
  cumulativeFrequencyY.reduce(function (prev, curr, i) {
    return S2x[i] = curr / n2;
  }, 0);
  var Sx = (0, _from2.default)({ length: n }, function (_, i) {
    return way === 'one-way' ? S2x[i] - S1x[i] : S1x[i] - S2x[i];
  });
  var D = (0, _utils.max)(Sx);

  return {
    way: way,
    x: x,
    y: y,
    n1: n1,
    n2: n2,
    n: n,
    xObj: xObj,
    yObj: yObj,
    sortedXY: sortedXY,
    Xi: Xi,
    Yi: Yi,
    cumulativeFrequencyX: cumulativeFrequencyX,
    cumulativeFrequencyY: cumulativeFrequencyY,
    Sx: Sx,
    D: D
  };
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = __webpack_require__(2);

var _from2 = _interopRequireDefault(_from);

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = FishersExact;

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FishersExact(_ref) {
  var observed = _ref.observed,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var a = observed[0][0];
  var b = observed[1][0];
  var n1 = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(observed[0]));
  var n2 = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(observed[1]));
  var n = n1 + n2;
  var w = way === 'one-way' ? 1 : 2;
  var Pb = (0, _from2.default)({ length: n2 + 1 }, function (_, i) {
    return (0, _utils.combinations)(n2, i) * (0, _utils.combinations)(n1, a + b - i) / (0, _utils.combinations)(n, a + b);
  });
  var Pbi = Pb.reduce(function (acc, cur, i) {
    return acc.value > alpha / w ? { value: acc.value, index: acc.index } : { value: acc.value + cur, index: i };
  }, { value: 0, index: 0 });

  return {
    a: a,
    b: b,
    n1: n1,
    n2: n2,
    n: n,
    Pb: Pb,
    Pbi: Pbi
  };
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = __webpack_require__(2);

var _from2 = _interopRequireDefault(_from);

var _set = __webpack_require__(15);

var _set2 = _interopRequireDefault(_set);

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = Mood;

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Mood(_ref) {
  var observed = _ref.observed,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var x = observed[0];
  var y = observed[1];
  var flattenObserved = (0, _utils.flatten)(observed);
  var n1 = x.length;
  var n2 = y.length;
  var n = n1 + n2;
  var indexedObs = flattenObserved.map(function (v, i) {
    return { value: v, index: i };
  });
  var indexSortedObs = (0, _utils.sortArr)(function (_x, _y) {
    return _x.value > _y.value ? 1 : _x.value === _y.value ? 0 : -1;
  })([].concat((0, _toConsumableArray3.default)(indexedObs)));
  var values = [].concat((0, _toConsumableArray3.default)(new _set2.default(indexSortedObs.map(function (v) {
    return v.value;
  }))));
  var meanIndice = [];

  values.forEach(function (item, i) {
    var indexes = indexSortedObs.map(function (itm, j) {
      itm.index = j;
      return itm;
    }).filter(function (v) {
      return v.value === item;
    }).map(function (v) {
      return v.index + 1;
    });

    meanIndice[i] = indexes.map(function (_) {
      return _utils.mean.apply(undefined, (0, _toConsumableArray3.default)(indexes));
    });
  });
  var flatMeanIndice = meanIndice.flatten();

  indexSortedObs.map(function (v, i) {
    return v.index = flatMeanIndice[i];
  });
  var rObs = indexedObs.map(function (v) {
    return v.index;
  });
  var rX = (0, _from2.default)({ length: n1 }, function (_, i) {
    return rObs[i];
  });
  var rY = (0, _from2.default)({ length: n2 }, function (_, i) {
    return rObs[n1 + i];
  });
  var ri = rX;
  var riMinus = ri.map(function (v) {
    return v - (n + 1) / 2;
  });
  var riMinusSqr = riMinus.map(function (v) {
    return Math.pow(v, 2);
  });
  var M = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(riMinusSqr));

  return {
    x: x,
    y: y,
    n1: n1,
    n2: n2,
    n: n,
    rX: rX,
    rY: rY,
    ri: ri,
    riMinus: riMinus,
    riMinusSqr: riMinusSqr,
    M: M
  };
}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = SiegelTukey;

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SiegelTukey(_ref) {
  var observed = _ref.observed,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var x = observed[0];
  var xObj = x.map(function (v) {
    return { value: v, index: 'X' };
  });
  var y = observed[1];
  var yObj = y.map(function (v) {
    return { value: v, index: 'Y' };
  });
  var flattenObserved = (0, _utils.flatten)(observed);
  var idx = flattenObserved.map(function (_, i) {
    return i + 1;
  });
  var n1 = x.length;
  var n2 = y.length;
  var n = n1 + n2;
  var xy = [].concat((0, _toConsumableArray3.default)(xObj), (0, _toConsumableArray3.default)(yObj));
  var sortedXY = (0, _utils.sortArr)(function (_x, _y) {
    return _x.value > _y.value ? 1 : _x.value === _y.value ? 0 : -1;
  })([].concat((0, _toConsumableArray3.default)(xy)));
  var sortedX = sortedXY.map(function (v) {
    return v.value;
  });
  var sortedY = sortedXY.map(function (v) {
    return v.index;
  });
  var delta = sortedXY.map(function (v) {
    return v.index === 'X' ? 1 : 0;
  });
  var ai = idx.map(function (v, i) {
    if (v % 2 === 0 && v > 1 && v <= n / 2) return 2 * v;
    if (v % 2 !== 0 && v >= 1 && v <= n / 2) return 2 * v - 1;
    if (v % 2 === 0 && v > n / 2 && v <= n) return 2 * (n - v) + 2;
    if (v % 2 !== 0 && v > n / 2 && v < n) return 2 * (n - v) + 1;
  });
  var ST = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(ai.map(function (v, i) {
    return v * delta[i];
  })));

  return {
    x: x,
    y: y,
    n1: n1,
    n2: n2,
    n: n,
    idx: idx,
    ai: ai,
    sortedX: sortedX,
    sortedY: sortedY,
    delta: delta,
    ST: ST
  };
} /* eslint consistent-return: 0*/

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = __webpack_require__(2);

var _from2 = _interopRequireDefault(_from);

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = Sign;

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Sign(_ref) {
  var observed = _ref.observed,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var x = observed[0];
  var y = observed[1];
  var Di = x.map(function (v, i) {
    return v - y[i];
  });
  var delta = Di.filter(function (v) {
    return v !== 0;
  }).map(function (v, i) {
    return v > 0 ? 1 : 0;
  });
  var kCalc = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(delta));
  var n = delta.length;
  var w = way === 'one-way' ? 1 : 2;
  var Pk = (0, _from2.default)({ length: n }, function (_, i) {
    return (0, _utils.combinations)(n, i) * Math.pow(1 / 2, n);
  });
  // TODO two-way
  var Pki = Pk.reduce(function (acc, cur, i) {
    return acc.value > alpha / w ? { value: acc.value, index: acc.index } : { value: acc.value + cur, index: i };
  }, { value: 0, index: 0 });

  return {
    x: x,
    y: y,
    Di: Di,
    delta: delta,
    kCalc: kCalc,
    n: n,
    Pk: Pk,
    Pki: Pki
  };
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = __webpack_require__(15);

var _set2 = _interopRequireDefault(_set);

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = WilcoxonRanksum;

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function WilcoxonRanksum(_ref) {
  var observed = _ref.observed,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var x = observed[0];
  var y = observed[1];
  var Di = x.map(function (v, i) {
    return v - y[i];
  });
  var delta = Di.filter(function (v) {
    return v !== 0;
  }).map(function (v, i) {
    return v > 0 ? 1 : 0;
  });
  var absDi = Di.filter(function (v) {
    return v !== 0;
  }).map(function (v) {
    return Math.abs(v);
  });
  var indexedAbsDi = absDi.map(function (v, i) {
    return { value: v, index: i };
  });
  var indexSortedAbsDi = (0, _utils.sortArr)(function (_x, _y) {
    return _x.value > _y.value ? 1 : _x.value === _y.value ? 0 : -1;
  })([].concat((0, _toConsumableArray3.default)(indexedAbsDi)));
  var values = [].concat((0, _toConsumableArray3.default)(new _set2.default(indexSortedAbsDi.map(function (v) {
    return v.value;
  }))));
  var meanIndice = [];

  values.forEach(function (item, i) {
    var indexes = indexSortedAbsDi.map(function (itm, j) {
      itm.index = j;
      return itm;
    }).filter(function (v) {
      return v.value === item;
    }).map(function (v) {
      return v.index + 1;
    });

    meanIndice[i] = indexes.map(function (_) {
      return _utils.mean.apply(undefined, (0, _toConsumableArray3.default)(indexes));
    });
  });
  var flatMeanIndice = meanIndice.flatten();

  indexSortedAbsDi.map(function (v, i) {
    return v.index = flatMeanIndice[i];
  });
  var rAbsDi = indexedAbsDi.map(function (v) {
    return v.index;
  });
  var n = rAbsDi.length;
  var TPlus = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(rAbsDi.map(function (v, i) {
    return v * delta[i];
  })));

  return {
    n: n,
    x: x,
    y: y,
    Di: Di,
    delta: delta,
    absDi: absDi,
    indexedAbsDi: indexedAbsDi,
    indexSortedAbsDi: indexSortedAbsDi,
    rAbsDi: rAbsDi,
    TPlus: TPlus
  };
}

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = McNemar;

var _z = __webpack_require__(68);

function McNemar(_ref) {
  var observed = _ref.observed,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var A = observed[0][0];
  var C = observed[0][1];
  var B = observed[1][0];
  var D = observed[1][1];
  var AB = A + B;
  var AC = A + C;
  var BD = B + D;
  var CD = C + D;
  var n = AB + CD;
  var Z = (C - B) / Math.sqrt(C + B);
  var pValue = 1 - (0, _z.zScore)(Math.abs(Z));

  return {
    A: A,
    B: B,
    C: C,
    D: D,
    AB: AB,
    AC: AC,
    BD: BD,
    CD: CD,
    n: n,
    Z: Z,
    pValue: pValue
  };
}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _from = __webpack_require__(2);

var _from2 = _interopRequireDefault(_from);

exports.default = ChiSquareForHomogeneity;

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { chiSqrCdf } from '../cdf/chiSqr';

function ChiSquareForHomogeneity(_ref) {
  var observed = _ref.observed,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var r = observed.length;
  var c = observed[0].length;
  var sumI = (0, _from2.default)({ length: c }, function (_, i) {
    return _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(observed.map(function (v) {
      return v[i];
    })));
  });
  var sumJ = observed.map(function (v) {
    return _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(v));
  });
  var n = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(sumI || sumJ));
  var expected = (0, _from2.default)({ length: r }, function (_, i) {
    return (0, _from2.default)({ length: c }, function (_, j) {
      return sumI[j] * sumJ[i] / n;
    });
  });
  var chiSqr = expected.map(function (v, i) {
    return v.map(function (val, j) {
      return Math.pow(observed[i][j] - val, 2) / val;
    });
  });
  var chiSqrCalc = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(chiSqr.map(function (v) {
    return _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(v));
  })));
  var df = (c - 1) * (r - 1);
  // const pValue = 1 - chiSqrCdf(chiSqrCalc, df);

  return {
    r: r,
    c: c,
    sumI: sumI,
    sumJ: sumJ,
    n: n,
    expected: expected,
    chiSqrCalc: chiSqrCalc,
    df: df
    // pValue
  };
}

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _from = __webpack_require__(2);

var _from2 = _interopRequireDefault(_from);

exports.default = ChiSquareForIndependence;

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { chiSqrCdf } from '../cdf/chiSqr';

function ChiSquareForIndependence(_ref) {
  var observed = _ref.observed,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit,
      _ref$way = _ref.way,
      way = _ref$way === undefined ? 'one-way' : _ref$way;

  var r = observed.length;
  var c = observed[0].length;
  var sumI = (0, _from2.default)({ length: c }, function (_, i) {
    return _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(observed.map(function (v) {
      return v[i];
    })));
  });
  var sumJ = observed.map(function (v) {
    return _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(v));
  });
  var n = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(sumI || sumJ));
  var expected = (0, _from2.default)({ length: r }, function (_, i) {
    return (0, _from2.default)({ length: c }, function (_, j) {
      return sumI[j] * sumJ[i] / n;
    });
  });
  var chiSqr = expected.map(function (v, i) {
    return v.map(function (val, j) {
      return Math.pow(observed[i][j] - val, 2) / val;
    });
  });
  var chiSqrCalc = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(chiSqr.map(function (v) {
    return _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(v));
  })));
  var df = (c - 1) * (r - 1);
  var v = Math.sqrt(chiSqrCalc / (n * (0, _utils.min)([c - 1, r - 1])));
  // const pValue = 1 - chiSqrCdf(chiSqrCalc, df);

  return {
    r: r,
    c: c,
    sumI: sumI,
    sumJ: sumJ,
    n: n,
    expected: expected,
    chiSqrCalc: chiSqrCalc,
    df: df,
    v: v
    // pValue
  };
}

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = __webpack_require__(2);

var _from2 = _interopRequireDefault(_from);

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = Median;

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { chiSqrCdf } from '../cdf/chiSqr';

function Median(_ref) {
  var observed = _ref.observed,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit;

  var ni = observed.map(function (v) {
    return v.length;
  });
  var n = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(ni));
  var flattenObserved = (0, _utils.flatten)(observed);
  var m = (0, _utils.median)(flattenObserved);
  var sortedObserved = observed.map(function (v) {
    return (0, _utils.sortArr)(function (a, b) {
      return a - b;
    })(v);
  });
  var nMedian = (0, _from2.default)({ length: ni.length }, function () {
    return [[], []];
  });

  observed.map(function (v, i) {
    return v.map(function (val, j) {
      return val > m ? nMedian[i][0].push(val) : nMedian[i][1].push(val);
    });
  });
  var nMedianLength = nMedian.map(function (v) {
    return v.map(function (val) {
      return val.length;
    });
  });
  var sumI = (0, _from2.default)({ length: nMedianLength[0].length }, function (_, i) {
    return _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(nMedianLength.map(function (v) {
      return v[i];
    })));
  });
  var sumJ = (0, _from2.default)({ length: nMedianLength.length }, function (_, i) {
    return _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(nMedianLength[i]));
  });
  var expected = (0, _from2.default)({ length: sumJ.length }, function (_, i) {
    return (0, _from2.default)({ length: sumI.length }, function (_, j) {
      return sumJ[i] / 2;
    });
  });
  var chiSqr = expected.map(function (v, i) {
    return v.map(function (val, j) {
      return Math.pow(nMedianLength[i][j] - val, 2) / val;
    });
  });
  var chiSqrCalc = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(chiSqr.map(function (v) {
    return _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(v));
  })));
  // const df = ni.length - 1;
  // const pValue = 1 - chiSqrCdf(chiSqrCalc, df);

  return {
    ni: ni,
    n: n,
    m: m,
    observed: observed,
    sortedObserved: sortedObserved,
    nMedian: nMedian,
    nMedianLength: nMedianLength,
    sumI: sumI,
    sumJ: sumJ,
    expected: expected,
    chiSqr: chiSqr,
    chiSqrCalc: chiSqrCalc
  };
}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = __webpack_require__(15);

var _set2 = _interopRequireDefault(_set);

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = KruskalWallis;

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function KruskalWallis(_ref) {
  var observed = _ref.observed,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit;

  var ni = observed.map(function (v) {
    return v.length;
  });
  var n = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(ni));
  var flattenObserved = (0, _utils.flatten)(observed);
  var indexedObs = flattenObserved.map(function (v, i) {
    return { value: v, index: i };
  });
  var indexSortedObs = (0, _utils.sortArr)(function (_x, _y) {
    return _x.value > _y.value ? 1 : _x.value === _y.value ? 0 : -1;
  })([].concat((0, _toConsumableArray3.default)(indexedObs)));
  var values = [].concat((0, _toConsumableArray3.default)(new _set2.default(indexSortedObs.map(function (v) {
    return v.value;
  }))));
  var meanIndice = [];

  values.forEach(function (item, i) {
    var indexes = indexSortedObs.map(function (itm, j) {
      itm.index = j;
      return itm;
    }).filter(function (v) {
      return v.value === item;
    }).map(function (v) {
      return v.index + 1;
    });

    meanIndice[i] = indexes.map(function (_) {
      return _utils.mean.apply(undefined, (0, _toConsumableArray3.default)(indexes));
    });
  });
  var flatMeanIndice = (0, _utils.flatten)(meanIndice);

  indexSortedObs.map(function (v, i) {
    return v.index = flatMeanIndice[i];
  });
  var rr = indexedObs.map(function (v) {
    return v.index;
  });
  var clonedObs = (0, _utils.clone)(observed);
  var rObs = clonedObs.map(function (v) {
    return v.map(function (val) {
      val = (0, _utils.head)(rr);
      rr = (0, _utils.shift)(rr);
      return val;
    });
  });
  var Rij = rObs.map(function (v) {
    return _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(v));
  });
  var H = 12 / (n * (n + 1)) * _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(Rij.map(function (v, i) {
    return Math.pow(v, 2) / ni[i];
  }))) - 3 * (n + 1);
  var frequencyRank = (0, _utils.frequency)(flatMeanIndice);
  var frequencyArr = [].concat((0, _toConsumableArray3.default)(frequencyRank.values()));
  var Ti = frequencyArr.map(function (v) {
    return (v - 1) * v * (v + 1);
  });
  var HStar = H / (1 - _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(Ti)) / (Math.pow(n, 3) - n));

  return {
    ni: ni,
    n: n,
    observed: observed,
    flattenObserved: flattenObserved,
    flatMeanIndice: flatMeanIndice,
    rObs: rObs,
    Rij: Rij,
    H: H,
    frequencyArr: frequencyArr,
    Ti: Ti,
    HStar: HStar
  };
}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FriedmansS;
function FriedmansS() {
  // TODO
}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CochransQ;
function CochransQ() {
  // TODO
}

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = __webpack_require__(15);

var _set2 = _interopRequireDefault(_set);

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = SpearmanRankCorrelation;

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SpearmanRankCorrelation(_ref) {
  var observed = _ref.observed,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit;

  var x = observed[0];
  var y = observed[1];
  var n = x.length || y.length;
  var indexedObs = observed.map(function (v) {
    return v.map(function (v, i) {
      return { value: v, index: i };
    });
  });
  var indexSortedObs = indexedObs.map(function (v) {
    return (0, _utils.sortArr)(function (_x, _y) {
      return _x.value > _y.value ? 1 : _x.value === _y.value ? 0 : -1;
    })([].concat((0, _toConsumableArray3.default)(v)));
  });
  var values = indexSortedObs.map(function (v) {
    return [].concat((0, _toConsumableArray3.default)(new _set2.default(v.map(function (_) {
      return _.value;
    }))));
  });
  var meanIndice = [[], []];

  values.map(function (v, i) {
    return v.forEach(function (item, j) {
      var indexes = indexSortedObs[i].map(function (val, k) {
        val.index = k;
        return val;
      }).filter(function (_) {
        return _.value === item;
      }).map(function (_) {
        return _.index + 1;
      });

      meanIndice[i][j] = indexes.map(function (_) {
        return _utils.mean.apply(undefined, (0, _toConsumableArray3.default)(indexes));
      });
    });
  });
  var flatMeanIndice = meanIndice.map(function (v) {
    return (0, _utils.flatten)(v);
  });

  indexSortedObs.map(function (v, i) {
    return v.map(function (val, j) {
      return val.index = flatMeanIndice[i][j];
    });
  });
  var rObs = indexedObs.map(function (v) {
    return v.map(function (val) {
      return val.index;
    });
  });
  var rX = rObs[0];
  var rY = rObs[1];
  var di = rX.map(function (v, i) {
    return v - rY[i];
  });
  var diSqr = di.map(function (v) {
    return Math.pow(v, 2);
  });
  var sumDiSqr = _utils.sum.apply(undefined, (0, _toConsumableArray3.default)(diSqr));
  var rs = 1 - 6 * sumDiSqr / (n * (Math.pow(n, 2) - 1));

  return {
    n: n,
    x: x,
    y: y,
    rX: rX,
    rY: rY,
    rObs: rObs,
    di: di,
    diSqr: diSqr,
    sumDiSqr: sumDiSqr,
    rs: rs
  };
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(0);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = Kendall;

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Kendall(_ref) {
  var observed = _ref.observed,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 0.05 : _ref$alpha,
      _ref$digit = _ref.digit,
      digit = _ref$digit === undefined ? 4 : _ref$digit;

  var x = observed[0];
  var y = observed[1];
  var n = x.length || y.length;
  var xyObs = x.map(function (v, i) {
    return { key: v, value: y[i] };
  });
  var keySortedObs = (0, _utils.sortArr)(function (x, y) {
    return x.key > y.key ? 1 : x.key === y.key ? 0 : -1;
  })([].concat((0, _toConsumableArray3.default)(xyObs)));
  var pq = [[], []];
  var temp = keySortedObs.map(function (v) {
    return v.value;
  });

  keySortedObs.map(function (v) {
    return temp.map(function (val) {
      return v.value > val ? pq[0].push(val) : pq[1].push(val);
    });
  });
  // TODO

  return {
    n: n,
    x: x,
    y: y,
    xyObs: xyObs,
    keySortedObs: keySortedObs,
    pq: pq,
    temp: temp
  };
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=nemene.js.map