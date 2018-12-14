(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react-dom"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react-dom", "react"], factory);
	else if(typeof exports === 'object')
		exports["ReactDraggable"] = factory(require("react-dom"), require("react"));
	else
		root["ReactDraggable"] = factory(root["ReactDOM"], root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = findInArray;
/* harmony export (immutable) */ __webpack_exports__["d"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["e"] = isNum;
/* harmony export (immutable) */ __webpack_exports__["c"] = int;
/* harmony export (immutable) */ __webpack_exports__["a"] = dontSetMe;

// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
function findInArray(array /*: Array<any> | TouchList*/, callback /*: Function*/) /*: any*/ {
  for (var i = 0, length = array.length; i < length; i++) {
    if (callback.apply(callback, [array[i], i, array])) return array[i];
  }
}

function isFunction(func /*: any*/) /*: boolean*/ {
  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
}

function isNum(num /*: any*/) /*: boolean*/ {
  return typeof num === 'number' && !isNaN(num);
}

function int(a /*: string*/) /*: number*/ {
  return parseInt(a, 10);
}

function dontSetMe(props /*: Object*/, propName /*: string*/, componentName /*: string*/) {
  if (props[propName]) {
    return new Error('Invalid prop ' + propName + ' passed to ' + componentName + ' - do not set this, set it on the child.');
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./lib/utils/shims.js
var shims = __webpack_require__(0);

// CONCATENATED MODULE: ./lib/utils/getPrefix.js
var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
function getPrefix() /*: string*/ {
  var prop /*: string*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

  // Checking specifically for 'window.document' is for pseudo-browser server-side
  // environments that define 'window' as the global context.
  // E.g. React-rails (see https://github.com/reactjs/react-rails/pull/84)
  if (typeof window === 'undefined' || typeof window.document === 'undefined') return '';

  var style = window.document.documentElement.style;

  if (prop in style) return '';

  for (var i = 0; i < prefixes.length; i++) {
    if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
  }

  return '';
}

function browserPrefixToKey(prop /*: string*/, prefix /*: string*/) /*: string*/ {
  return prefix ? '' + prefix + kebabToTitleCase(prop) : prop;
}

function browserPrefixToStyle(prop /*: string*/, prefix /*: string*/) /*: string*/ {
  return prefix ? '-' + prefix.toLowerCase() + '-' + prop : prop;
}

function kebabToTitleCase(str /*: string*/) /*: string*/ {
  var out = '';
  var shouldCapitalize = true;
  for (var i = 0; i < str.length; i++) {
    if (shouldCapitalize) {
      out += str[i].toUpperCase();
      shouldCapitalize = false;
    } else if (str[i] === '-') {
      shouldCapitalize = true;
    } else {
      out += str[i];
    }
  }
  return out;
}

// Default export is the prefix itself, like 'Moz', 'Webkit', etc
// Note that you may have to re-test for certain things; for instance, Chrome 50
// can handle unprefixed `transform`, but not unprefixed `user-select`
/* harmony default export */ var utils_getPrefix = (getPrefix());
// CONCATENATED MODULE: ./lib/utils/domFns.js
/* unused harmony export matchesSelector */
/* harmony export (immutable) */ __webpack_exports__["i"] = matchesSelectorAndParentsTo;
/* harmony export (immutable) */ __webpack_exports__["a"] = addEvent;
/* harmony export (immutable) */ __webpack_exports__["m"] = removeEvent;
/* harmony export (immutable) */ __webpack_exports__["k"] = domFns_outerHeight;
/* harmony export (immutable) */ __webpack_exports__["l"] = domFns_outerWidth;
/* harmony export (immutable) */ __webpack_exports__["g"] = domFns_innerHeight;
/* harmony export (immutable) */ __webpack_exports__["h"] = domFns_innerWidth;
/* harmony export (immutable) */ __webpack_exports__["j"] = offsetXYFromParent;
/* harmony export (immutable) */ __webpack_exports__["c"] = createCSSTransform;
/* harmony export (immutable) */ __webpack_exports__["d"] = createSVGTransform;
/* harmony export (immutable) */ __webpack_exports__["e"] = getTouch;
/* harmony export (immutable) */ __webpack_exports__["f"] = getTouchIdentifier;
/* harmony export (immutable) */ __webpack_exports__["b"] = addUserSelectStyles;
/* harmony export (immutable) */ __webpack_exports__["n"] = removeUserSelectStyles;
/* harmony export (immutable) */ __webpack_exports__["o"] = styleHacks;
/* unused harmony export addClassName */
/* unused harmony export removeClassName */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/*:: import type {ControlPosition, MouseTouchEvent} from './types';*/


var matchesSelectorFunc = '';
function matchesSelector(el /*: Node*/, selector /*: string*/) /*: boolean*/ {
  if (!matchesSelectorFunc) {
    matchesSelectorFunc = Object(shims["b" /* findInArray */])(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
      // $FlowIgnore: Doesn't think elements are indexable
      return Object(shims["d" /* isFunction */])(el[method]);
    });
  }

  // Might not be found entirely (not an Element?) - in that case, bail
  // $FlowIgnore: Doesn't think elements are indexable
  if (!Object(shims["d" /* isFunction */])(el[matchesSelectorFunc])) return false;

  // $FlowIgnore: Doesn't think elements are indexable
  return el[matchesSelectorFunc](selector);
}

// Works up the tree to the draggable itself attempting to match selector.
function matchesSelectorAndParentsTo(el /*: Node*/, selector /*: string*/, baseNode /*: Node*/) /*: boolean*/ {
  var node = el;
  do {
    if (matchesSelector(node, selector)) return true;
    if (node === baseNode) return false;
    node = node.parentNode;
  } while (node);

  return false;
}

function addEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/) /*: void*/ {
  if (!el) {
    return;
  }
  if (el.attachEvent) {
    el.attachEvent('on' + event, handler);
  } else if (el.addEventListener) {
    el.addEventListener(event, handler, true);
  } else {
    // $FlowIgnore: Doesn't think elements are indexable
    el['on' + event] = handler;
  }
}

function removeEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/) /*: void*/ {
  if (!el) {
    return;
  }
  if (el.detachEvent) {
    el.detachEvent('on' + event, handler);
  } else if (el.removeEventListener) {
    el.removeEventListener(event, handler, true);
  } else {
    // $FlowIgnore: Doesn't think elements are indexable
    el['on' + event] = null;
  }
}

function domFns_outerHeight(node /*: HTMLElement*/) /*: number*/ {
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetTop which is including margin. See getBoundPosition
  var height = node.clientHeight;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height += Object(shims["c" /* int */])(computedStyle.borderTopWidth);
  height += Object(shims["c" /* int */])(computedStyle.borderBottomWidth);
  return height;
}

function domFns_outerWidth(node /*: HTMLElement*/) /*: number*/ {
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetLeft which is including margin. See getBoundPosition
  var width = node.clientWidth;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width += Object(shims["c" /* int */])(computedStyle.borderLeftWidth);
  width += Object(shims["c" /* int */])(computedStyle.borderRightWidth);
  return width;
}
function domFns_innerHeight(node /*: HTMLElement*/) /*: number*/ {
  var height = node.clientHeight;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height -= Object(shims["c" /* int */])(computedStyle.paddingTop);
  height -= Object(shims["c" /* int */])(computedStyle.paddingBottom);
  return height;
}

function domFns_innerWidth(node /*: HTMLElement*/) /*: number*/ {
  var width = node.clientWidth;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width -= Object(shims["c" /* int */])(computedStyle.paddingLeft);
  width -= Object(shims["c" /* int */])(computedStyle.paddingRight);
  return width;
}

// Get from offsetParent
function offsetXYFromParent(evt /*: {clientX: number, clientY: number}*/, offsetParent /*: HTMLElement*/) /*: ControlPosition*/ {
  var isBody = offsetParent === offsetParent.ownerDocument.body;
  var offsetParentRect = isBody ? { left: 0, top: 0 } : offsetParent.getBoundingClientRect();

  var x = evt.clientX + offsetParent.scrollLeft - offsetParentRect.left;
  var y = evt.clientY + offsetParent.scrollTop - offsetParentRect.top;

  return { x: x, y: y };
}

function createCSSTransform(_ref) /*: Object*/ {
  var x = _ref.x,
      y = _ref.y;

  // Replace unitless items with px
  return _defineProperty({}, browserPrefixToKey('transform', utils_getPrefix), 'translate(' + x + 'px,' + y + 'px)');
}

function createSVGTransform(_ref3) /*: string*/ {
  var x = _ref3.x,
      y = _ref3.y;

  return 'translate(' + x + ',' + y + ')';
}

function getTouch(e /*: MouseTouchEvent*/, identifier /*: number*/) /*: ?{clientX: number, clientY: number}*/ {
  return e.targetTouches && Object(shims["b" /* findInArray */])(e.targetTouches, function (t) {
    return identifier === t.identifier;
  }) || e.changedTouches && Object(shims["b" /* findInArray */])(e.changedTouches, function (t) {
    return identifier === t.identifier;
  });
}

function getTouchIdentifier(e /*: MouseTouchEvent*/) /*: ?number*/ {
  if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
}

// User-select Hacks:
//
// Useful for preventing blue highlights all over everything when dragging.

// Note we're passing `document` b/c we could be iframed
function addUserSelectStyles(doc /*: ?Document*/) {
  if (!doc) return;
  var styleEl = doc.getElementById('react-draggable-style-el');
  if (!styleEl) {
    styleEl = doc.createElement('style');
    styleEl.type = 'text/css';
    styleEl.id = 'react-draggable-style-el';
    styleEl.innerHTML = '.react-draggable-transparent-selection *::-moz-selection {background: transparent;}\n';
    styleEl.innerHTML += '.react-draggable-transparent-selection *::selection {background: transparent;}\n';
    doc.getElementsByTagName('head')[0].appendChild(styleEl);
  }
  if (doc.body) addClassName(doc.body, 'react-draggable-transparent-selection');
}

function removeUserSelectStyles(doc /*: ?Document*/) {
  try {
    if (doc && doc.body) removeClassName(doc.body, 'react-draggable-transparent-selection');
    // $FlowIgnore: IE
    if (doc.selection) {
      // $FlowIgnore: IE
      doc.selection.empty();
    } else {
      window.getSelection().removeAllRanges(); // remove selection caused by scroll
    }
  } catch (e) {
    // probably IE
  }
}

function styleHacks() /*: Object*/ {
  var childStyle /*: Object*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // Workaround IE pointer events; see #51
  // https://github.com/mzabriskie/react-draggable/issues/51#issuecomment-103488278
  return _extends({
    touchAction: 'none'
  }, childStyle);
}

function addClassName(el /*: HTMLElement*/, className /*: string*/) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    if (!el.className.match(new RegExp('(?:^|\\s)' + className + '(?!\\S)'))) {
      el.className += ' ' + className;
    }
  }
}

function removeClassName(el /*: HTMLElement*/, className /*: string*/) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp('(?:^|\\s)' + className + '(?!\\S)', 'g'), '');
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(10)();
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = getBoundPosition;
/* harmony export (immutable) */ __webpack_exports__["g"] = snapToGrid;
/* harmony export (immutable) */ __webpack_exports__["a"] = canDragX;
/* harmony export (immutable) */ __webpack_exports__["b"] = canDragY;
/* harmony export (immutable) */ __webpack_exports__["f"] = getControlPosition;
/* harmony export (immutable) */ __webpack_exports__["c"] = createCoreData;
/* harmony export (immutable) */ __webpack_exports__["d"] = createDraggableData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shims__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domFns__ = __webpack_require__(2);




/*:: import type Draggable from '../Draggable';*/
/*:: import type {Bounds, ControlPosition, DraggableData, MouseTouchEvent} from './types';*/
/*:: import type DraggableCore from '../DraggableCore';*/


function getBoundPosition(draggable /*: Draggable*/, x /*: number*/, y /*: number*/) /*: [number, number]*/ {
  // If no bounds, short-circuit and move on
  if (!draggable.props.bounds) return [x, y];

  // Clone new bounds
  var bounds = draggable.props.bounds;

  bounds = typeof bounds === 'string' ? bounds : cloneBounds(bounds);
  var node = findDOMNode(draggable);

  if (typeof bounds === 'string') {
    var ownerDocument = node.ownerDocument;

    var ownerWindow = ownerDocument.defaultView;
    var boundNode = void 0;
    if (bounds === 'parent') {
      boundNode = node.parentNode;
    } else {
      boundNode = ownerDocument.querySelector(bounds);
    }
    if (!(boundNode instanceof ownerWindow.HTMLElement)) {
      throw new Error('Bounds selector "' + bounds + '" could not find an element.');
    }
    var nodeStyle = ownerWindow.getComputedStyle(node);
    var boundNodeStyle = ownerWindow.getComputedStyle(boundNode);
    // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.
    bounds = {
      left: -node.offsetLeft + Object(__WEBPACK_IMPORTED_MODULE_0__shims__["c" /* int */])(boundNodeStyle.paddingLeft) + Object(__WEBPACK_IMPORTED_MODULE_0__shims__["c" /* int */])(nodeStyle.marginLeft),
      top: -node.offsetTop + Object(__WEBPACK_IMPORTED_MODULE_0__shims__["c" /* int */])(boundNodeStyle.paddingTop) + Object(__WEBPACK_IMPORTED_MODULE_0__shims__["c" /* int */])(nodeStyle.marginTop),
      right: Object(__WEBPACK_IMPORTED_MODULE_2__domFns__["h" /* innerWidth */])(boundNode) - Object(__WEBPACK_IMPORTED_MODULE_2__domFns__["l" /* outerWidth */])(node) - node.offsetLeft + Object(__WEBPACK_IMPORTED_MODULE_0__shims__["c" /* int */])(boundNodeStyle.paddingRight) - Object(__WEBPACK_IMPORTED_MODULE_0__shims__["c" /* int */])(nodeStyle.marginRight),
      bottom: Object(__WEBPACK_IMPORTED_MODULE_2__domFns__["g" /* innerHeight */])(boundNode) - Object(__WEBPACK_IMPORTED_MODULE_2__domFns__["k" /* outerHeight */])(node) - node.offsetTop + Object(__WEBPACK_IMPORTED_MODULE_0__shims__["c" /* int */])(boundNodeStyle.paddingBottom) - Object(__WEBPACK_IMPORTED_MODULE_0__shims__["c" /* int */])(nodeStyle.marginBottom)
    };
  }

  // Keep x and y below right and bottom limits...
  if (Object(__WEBPACK_IMPORTED_MODULE_0__shims__["e" /* isNum */])(bounds.right)) x = Math.min(x, bounds.right);
  if (Object(__WEBPACK_IMPORTED_MODULE_0__shims__["e" /* isNum */])(bounds.bottom)) y = Math.min(y, bounds.bottom);

  // But above left and top limits.
  if (Object(__WEBPACK_IMPORTED_MODULE_0__shims__["e" /* isNum */])(bounds.left)) x = Math.max(x, bounds.left);
  if (Object(__WEBPACK_IMPORTED_MODULE_0__shims__["e" /* isNum */])(bounds.top)) y = Math.max(y, bounds.top);

  return [x, y];
}

function snapToGrid(grid /*: [number, number]*/, pendingX /*: number*/, pendingY /*: number*/) /*: [number, number]*/ {
  var x = Math.round(pendingX / grid[0]) * grid[0];
  var y = Math.round(pendingY / grid[1]) * grid[1];
  return [x, y];
}

function canDragX(draggable /*: Draggable*/) /*: boolean*/ {
  return draggable.props.axis === 'both' || draggable.props.axis === 'x';
}

function canDragY(draggable /*: Draggable*/) /*: boolean*/ {
  return draggable.props.axis === 'both' || draggable.props.axis === 'y';
}

// Get {x, y} positions from event.
function getControlPosition(e /*: MouseTouchEvent*/, touchIdentifier /*: ?number*/, draggableCore /*: DraggableCore*/) /*: ?ControlPosition*/ {
  var touchObj = typeof touchIdentifier === 'number' ? Object(__WEBPACK_IMPORTED_MODULE_2__domFns__["e" /* getTouch */])(e, touchIdentifier) : null;
  if (typeof touchIdentifier === 'number' && !touchObj) return null; // not the right touch
  var node = findDOMNode(draggableCore);
  // User can provide an offsetParent if desired.
  var offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
  return Object(__WEBPACK_IMPORTED_MODULE_2__domFns__["j" /* offsetXYFromParent */])(touchObj || e, offsetParent);
}

// Create an data object exposed by <DraggableCore>'s events
function createCoreData(draggable /*: DraggableCore*/, x /*: number*/, y /*: number*/) /*: DraggableData*/ {
  var state = draggable.state;
  var isStart = !Object(__WEBPACK_IMPORTED_MODULE_0__shims__["e" /* isNum */])(state.lastX);
  var node = findDOMNode(draggable);

  if (isStart) {
    // If this is our first move, use the x and y as last coords.
    return {
      node: node,
      deltaX: 0, deltaY: 0,
      lastX: x, lastY: y,
      x: x, y: y
    };
  } else {
    // Otherwise calculate proper values.
    return {
      node: node,
      deltaX: x - state.lastX, deltaY: y - state.lastY,
      lastX: state.lastX, lastY: state.lastY,
      x: x, y: y
    };
  }
}

// Create an data exposed by <Draggable>'s events
function createDraggableData(draggable /*: Draggable*/, coreData /*: DraggableData*/) /*: DraggableData*/ {
  return {
    node: coreData.node,
    x: draggable.state.x + coreData.deltaX,
    y: draggable.state.y + coreData.deltaY,
    deltaX: coreData.deltaX,
    deltaY: coreData.deltaY,
    lastX: draggable.state.x,
    lastY: draggable.state.y
  };
}

// A lot faster than stringify/parse
function cloneBounds(bounds /*: Bounds*/) /*: Bounds*/ {
  return {
    left: bounds.left,
    top: bounds.top,
    right: bounds.right,
    bottom: bounds.bottom
  };
}

function findDOMNode(draggable /*: Draggable | DraggableCore*/) /*: HTMLElement*/ {
  var node = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(draggable);
  if (!node) {
    throw new Error('<DraggableCore>: Unmounted during event!');
  }
  // $FlowIgnore we can't assert on HTMLElement due to tests... FIXME
  return node;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_domFns__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_positionFns__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_shims__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_log__ = __webpack_require__(7);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









/*:: import type {EventHandler, MouseTouchEvent} from './utils/types';*/


// Simple abstraction for dragging events names.
/*:: import type {Element as ReactElement} from 'react';*/
var eventsFor = {
  touch: {
    start: 'touchstart',
    move: 'touchmove',
    stop: 'touchend'
  },
  mouse: {
    start: 'mousedown',
    move: 'mousemove',
    stop: 'mouseup'
  }
};

// Default to mouse events.
var dragEventFor = eventsFor.mouse;

/*:: type DraggableCoreState = {
  dragging: boolean,
  lastX: number,
  lastY: number,
  touchIdentifier: ?number
};*/
/*:: export type DraggableBounds = {
  left: number,
  right: number,
  top: number,
  bottom: number,
};*/
/*:: export type DraggableData = {
  node: HTMLElement,
  x: number, y: number,
  deltaX: number, deltaY: number,
  lastX: number, lastY: number,
};*/
/*:: export type DraggableEventHandler = (e: MouseEvent, data: DraggableData) => void;*/
/*:: export type ControlPosition = {x: number, y: number};*/


//
// Define <DraggableCore>.
//
// <DraggableCore> is for advanced usage of <Draggable>. It maintains minimal internal state so it can
// work well with libraries that require more control over the element.
//

/*:: export type DraggableCoreProps = {
  allowAnyClick: boolean,
  cancel: string,
  children: ReactElement<any>,
  disabled: boolean,
  enableUserSelectHack: boolean,
  offsetParent: HTMLElement,
  grid: [number, number],
  handle: string,
  onStart: DraggableEventHandler,
  onDrag: DraggableEventHandler,
  onStop: DraggableEventHandler,
  onMouseDown: (e: MouseEvent) => void,
};*/

var DraggableCore = function (_React$Component) {
  _inherits(DraggableCore, _React$Component);

  function DraggableCore() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DraggableCore);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DraggableCore.__proto__ || Object.getPrototypeOf(DraggableCore)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dragging: false,
      // Used while dragging to determine deltas.
      lastX: NaN, lastY: NaN,
      touchIdentifier: null
    }, _this.handleDragStart = function (e) {
      // Make it possible to attach event handlers on top of this one.
      _this.props.onMouseDown(e);

      // Only accept left-clicks.
      if (!_this.props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) return false;

      // Get nodes. Be sure to grab relative document (could be iframed)
      var thisNode = __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.findDOMNode(_this);
      if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) {
        throw new Error('<DraggableCore> not mounted on DragStart!');
      }
      var ownerDocument = thisNode.ownerDocument;

      // Short circuit if handle or cancel prop was provided and selector doesn't match.

      if (_this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || _this.props.handle && !Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["i" /* matchesSelectorAndParentsTo */])(e.target, _this.props.handle, thisNode) || _this.props.cancel && Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["i" /* matchesSelectorAndParentsTo */])(e.target, _this.props.cancel, thisNode)) {
        return;
      }

      // Set touch identifier in component state if this is a touch event. This allows us to
      // distinguish between individual touches on multitouch screens by identifying which
      // touchpoint was set to this element.
      var touchIdentifier = Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["f" /* getTouchIdentifier */])(e);
      _this.setState({ touchIdentifier: touchIdentifier });

      // Get the current drag point from the event. This is used as the offset.
      var position = Object(__WEBPACK_IMPORTED_MODULE_4__utils_positionFns__["f" /* getControlPosition */])(e, touchIdentifier, _this);
      if (position == null) return; // not possible but satisfies flow
      var x = position.x,
          y = position.y;

      // Create an event object with all the data parents need to make a decision here.

      var coreEvent = Object(__WEBPACK_IMPORTED_MODULE_4__utils_positionFns__["c" /* createCoreData */])(_this, x, y);

      Object(__WEBPACK_IMPORTED_MODULE_6__utils_log__["a" /* default */])('DraggableCore: handleDragStart: %j', coreEvent);

      // Call event handler. If it returns explicit false, cancel.
      Object(__WEBPACK_IMPORTED_MODULE_6__utils_log__["a" /* default */])('calling', _this.props.onStart);
      var shouldUpdate = _this.props.onStart(e, coreEvent);
      if (shouldUpdate === false) return;

      // Add a style to the body to disable user-select. This prevents text from
      // being selected all over the page.
      if (_this.props.enableUserSelectHack) Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["b" /* addUserSelectStyles */])(ownerDocument);

      // Initiate dragging. Set the current x and y as offsets
      // so we know how much we've moved during the drag. This allows us
      // to drag elements around even if they have been moved, without issue.
      _this.setState({
        dragging: true,

        lastX: x,
        lastY: y
      });

      // Add events to the document directly so we catch when the user's mouse/touch moves outside of
      // this element. We use different events depending on whether or not we have detected that this
      // is a touch-capable device.
      Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["a" /* addEvent */])(ownerDocument, dragEventFor.move, _this.handleDrag);
      Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["a" /* addEvent */])(ownerDocument, dragEventFor.stop, _this.handleDragStop);
    }, _this.handleDrag = function (e) {
      console.log('start drag', e);
      // Prevent scrolling on mobile devices, like ipad/iphone.
      if (e.type === 'touchmove') e.preventDefault();

      // Get the current drag point from the event. This is used as the offset.
      var position = Object(__WEBPACK_IMPORTED_MODULE_4__utils_positionFns__["f" /* getControlPosition */])(e, _this.state.touchIdentifier, _this);
      if (position == null) return;
      var x = position.x,
          y = position.y;

      // Snap to grid if prop has been provided

      if (Array.isArray(_this.props.grid)) {
        var _deltaX = x - _this.state.lastX,
            _deltaY = y - _this.state.lastY;

        var _snapToGrid = Object(__WEBPACK_IMPORTED_MODULE_4__utils_positionFns__["g" /* snapToGrid */])(_this.props.grid, _deltaX, _deltaY);

        var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);

        _deltaX = _snapToGrid2[0];
        _deltaY = _snapToGrid2[1];

        if (!_deltaX && !_deltaY) return; // skip useless drag
        x = _this.state.lastX + _deltaX, y = _this.state.lastY + _deltaY;
      }

      var coreEvent = Object(__WEBPACK_IMPORTED_MODULE_4__utils_positionFns__["c" /* createCoreData */])(_this, x, y);

      Object(__WEBPACK_IMPORTED_MODULE_6__utils_log__["a" /* default */])('DraggableCore: handleDrag: %j', coreEvent);

      // Call event handler. If it returns explicit false, trigger end.
      var shouldUpdate = _this.props.onDrag(e, coreEvent);
      if (shouldUpdate === false) {
        try {
          // $FlowIgnore
          _this.handleDragStop(new MouseEvent('mouseup'));
        } catch (err) {
          // Old browsers
          var event = ((document.createEvent('MouseEvents') /*: any*/) /*: MouseTouchEvent*/);
          // I see why this insanity was deprecated
          // $FlowIgnore
          event.initMouseEvent('mouseup', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
          _this.handleDragStop(event);
        }
        return;
      }

      _this.setState({
        lastX: x,
        lastY: y
      });
    }, _this.handleDragStop = function (e) {
      if (!_this.state.dragging) return;

      var position = Object(__WEBPACK_IMPORTED_MODULE_4__utils_positionFns__["f" /* getControlPosition */])(e, _this.state.touchIdentifier, _this);
      if (position == null) return;
      var x = position.x,
          y = position.y;

      var coreEvent = Object(__WEBPACK_IMPORTED_MODULE_4__utils_positionFns__["c" /* createCoreData */])(_this, x, y);

      var thisNode = __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.findDOMNode(_this);
      if (thisNode) {
        // Remove user-select hack
        if (_this.props.enableUserSelectHack) Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["n" /* removeUserSelectStyles */])(thisNode.ownerDocument);
      }

      Object(__WEBPACK_IMPORTED_MODULE_6__utils_log__["a" /* default */])('DraggableCore: handleDragStop: %j', coreEvent);

      // Reset the el.
      _this.setState({
        dragging: false,
        lastX: NaN,
        lastY: NaN
      });

      // Call event handler
      _this.props.onStop(e, coreEvent);

      if (thisNode) {
        // Remove event handlers
        Object(__WEBPACK_IMPORTED_MODULE_6__utils_log__["a" /* default */])('DraggableCore: Removing handlers');
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["m" /* removeEvent */])(thisNode.ownerDocument, dragEventFor.move, _this.handleDrag);
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["m" /* removeEvent */])(thisNode.ownerDocument, dragEventFor.stop, _this.handleDragStop);
      }
    }, _this.onMouseDown = function (e) {
      dragEventFor = eventsFor.mouse; // on touchscreen laptops we could switch back to mouse
      _this.handleDrag(e);
      console.log('handle drag on mouse down');
      return _this.handleDragStart(e);
    }, _this.onMouseUp = function (e) {
      dragEventFor = eventsFor.mouse;

      return _this.handleDragStop(e);
    }, _this.onTouchStart = function (e) {
      // We're on a touch device now, so change the event handlers
      dragEventFor = eventsFor.touch;

      return _this.handleDragStart(e);
    }, _this.onTouchEnd = function (e) {
      // We're on a touch device now, so change the event handlers
      dragEventFor = eventsFor.touch;

      return _this.handleDragStop(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DraggableCore, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // Remove any leftover event handlers. Remove both touch and mouse handlers in case
      // some browser quirk caused a touch event to fire during a mouse move, or vice versa.
      var thisNode = __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.findDOMNode(this);
      if (thisNode) {
        var ownerDocument = thisNode.ownerDocument;

        Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["m" /* removeEvent */])(ownerDocument, eventsFor.mouse.move, this.handleDrag);
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["m" /* removeEvent */])(ownerDocument, eventsFor.touch.move, this.handleDrag);
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["m" /* removeEvent */])(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["m" /* removeEvent */])(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
        if (this.props.enableUserSelectHack) Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["n" /* removeUserSelectStyles */])(ownerDocument);
      }
    }

    // Same as onMouseDown (start drag), but now consider this a touch device.

  }, {
    key: 'render',
    value: function render() {
      // Reuse the child provided
      // This makes it flexible to use whatever element is wanted (div, ul, etc)
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children), {
        style: Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["o" /* styleHacks */])(this.props.children.props.style),

        // Note: mouseMove handler is attached to document so it will still function
        // when the user drags quickly and leaves the bounds of the element.
        onMouseDown: this.onMouseDown,
        onTouchStart: this.onTouchStart,
        onMouseUp: this.onMouseUp,
        onTouchEnd: this.onTouchEnd
      });
    }
  }]);

  return DraggableCore;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

DraggableCore.displayName = 'DraggableCore';
DraggableCore.propTypes = {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,

  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,

  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,

  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function offsetParent(props /*: DraggableCoreProps*/, propName /*: $Keys<DraggableCoreProps>*/) {
    if (props[propName] && props[propName].nodeType !== 1) {
      throw new Error('Draggable\'s offsetParent must be a DOM Node.');
    }
  },

  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number),

  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,

  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,

  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

  /**
   * These properties should be defined on the child, not here.
   */
  className: __WEBPACK_IMPORTED_MODULE_5__utils_shims__["a" /* dontSetMe */],
  style: __WEBPACK_IMPORTED_MODULE_5__utils_shims__["a" /* dontSetMe */],
  transform: __WEBPACK_IMPORTED_MODULE_5__utils_shims__["a" /* dontSetMe */]
};
DraggableCore.defaultProps = {
  allowAnyClick: false, // by default only accept left click
  cancel: null,
  disabled: false,
  enableUserSelectHack: true,
  offsetParent: null,
  handle: null,
  grid: null,
  transform: null,
  onStart: function onStart() {},
  onDrag: function onDrag() {},
  onStop: function onStop() {},
  onMouseDown: function onMouseDown() {}
};
/* harmony default export */ __webpack_exports__["default"] = (DraggableCore);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = log;

/*eslint no-console:0*/
function log() {
  var _console;

  if (true) (_console = console).log.apply(_console, arguments);
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var Draggable = __webpack_require__(9).default;

// Previous versions of this lib exported <Draggable> as the root export. As to not break
// them, or TypeScript, we export *both* as the root and as 'default'.
// See https://github.com/mzabriskie/react-draggable/pull/254
// and https://github.com/mzabriskie/react-draggable/issues/266
module.exports = Draggable;
module.exports.default = Draggable;
module.exports.DraggableCore = __webpack_require__(6).default;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_domFns__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_positionFns__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_shims__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DraggableCore__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_log__ = __webpack_require__(7);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









/*:: import type {ControlPosition, DraggableBounds, DraggableCoreProps} from './DraggableCore';*/


/*:: import type {DraggableEventHandler} from './utils/types';*/
/*:: import type {Element as ReactElement} from 'react';*/
/*:: type DraggableState = {
  dragging: boolean,
  dragged: boolean,
  x: number, y: number,
  slackX: number, slackY: number,
  isElementSVG: boolean
};*/


//
// Define <Draggable>
//

/*:: export type DraggableProps = {
  ...$Exact<DraggableCoreProps>,
  axis: 'both' | 'x' | 'y' | 'none',
  bounds: DraggableBounds | string | false,
  defaultClassName: string,
  defaultClassNameDragging: string,
  defaultClassNameDragged: string,
  defaultPosition: ControlPosition,
  position: ControlPosition,
};*/

var Draggable = function (_React$Component) {
  _inherits(Draggable, _React$Component);

  function Draggable(props /*: DraggableProps*/) {
    _classCallCheck(this, Draggable);

    var _this = _possibleConstructorReturn(this, (Draggable.__proto__ || Object.getPrototypeOf(Draggable)).call(this, props));

    _this.onDragStart = function (e, coreData) {
      Object(__WEBPACK_IMPORTED_MODULE_8__utils_log__["a" /* default */])('Draggable: onDragStart: %j', coreData);

      // Short-circuit if user's callback killed it.
      var shouldStart = _this.props.onStart(e, Object(__WEBPACK_IMPORTED_MODULE_5__utils_positionFns__["d" /* createDraggableData */])(_this, coreData));
      // Kills start event on core as well, so move handlers are never bound.
      if (shouldStart === false) return false;

      _this.setState({ dragging: true, dragged: true });
    };

    _this.onDrag = function (e, coreData) {
      console.log(e);
      console.log('@@@@@@   onDrag', !_this.state.dragging && !_this.props.repositionOnClick);
      if (!_this.state.dragging && !_this.props.repositionOnClick) return false;
      Object(__WEBPACK_IMPORTED_MODULE_8__utils_log__["a" /* default */])('Draggable: onDrag: %j', coreData);
      var uiData = Object(__WEBPACK_IMPORTED_MODULE_5__utils_positionFns__["d" /* createDraggableData */])(_this, coreData);

      var newState /*: $Shape<DraggableState>*/ = {
        x: uiData.x,
        y: uiData.y
      };

      // Keep within bounds.
      if (_this.props.bounds) {
        console.log('bounds');
        // Save original x and y.
        var _x = newState.x,
            _y = newState.y;

        // Add slack to the values used to calculate bound position. This will ensure that if
        // we start removing slack, the element won't react to it right away until it's been
        // completely removed.

        newState.x += _this.state.slackX;
        newState.y += _this.state.slackY;

        // Get bound position. This will ceil/floor the x and y within the boundaries.

        var _getBoundPosition = Object(__WEBPACK_IMPORTED_MODULE_5__utils_positionFns__["e" /* getBoundPosition */])(_this, newState.x, newState.y),
            _getBoundPosition2 = _slicedToArray(_getBoundPosition, 2),
            newStateX = _getBoundPosition2[0],
            newStateY = _getBoundPosition2[1];

        newState.x = newStateX;
        newState.y = newStateY;

        // Recalculate slack by noting how much was shaved by the boundPosition handler.
        newState.slackX = _this.state.slackX + (_x - newState.x);
        newState.slackY = _this.state.slackY + (_y - newState.y);

        // Update the event we fire to reflect what really happened after bounds took effect.
        uiData.x = newState.x;
        uiData.y = newState.y;
        uiData.deltaX = newState.x - _this.state.x;
        uiData.deltaY = newState.y - _this.state.y;
      }

      // Short-circuit if user's callback killed it.
      var shouldUpdate = _this.props.onDrag(e, uiData);
      if (shouldUpdate === false) return false;

      _this.setState(newState);
    };

    _this.onDragStop = function (e, coreData) {
      if (!_this.state.dragging) return false;

      // Short-circuit if user's callback killed it.
      var shouldStop = _this.props.onStop(e, Object(__WEBPACK_IMPORTED_MODULE_5__utils_positionFns__["d" /* createDraggableData */])(_this, coreData));
      if (shouldStop === false) return false;

      Object(__WEBPACK_IMPORTED_MODULE_8__utils_log__["a" /* default */])('Draggable: onDragStop: %j', coreData);

      var newState /*: $Shape<DraggableState>*/ = {
        dragging: false,
        slackX: 0,
        slackY: 0
      };

      // If this is a controlled component, the result of this operation will be to
      // revert back to the old position. We expect a handler on `onDragStop`, at the least.
      var controlled = Boolean(_this.props.position);
      if (controlled) {
        var _this$props$position = _this.props.position,
            _x2 = _this$props$position.x,
            _y2 = _this$props$position.y;

        newState.x = _x2;
        newState.y = _y2;
      }

      _this.setState(newState);
    };

    _this.state = {
      // Whether or not we are currently dragging.
      dragging: false,

      // Whether or not we have been dragged before.
      dragged: false,

      // Current transform x and y.
      x: props.position ? props.position.x : props.defaultPosition.x,
      y: props.position ? props.position.y : props.defaultPosition.y,

      // Used for compensating for out-of-bounds drags
      slackX: 0, slackY: 0,

      // Can only determine if SVG after mounting
      isElementSVG: false
    };
    return _this;
  }

  _createClass(Draggable, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.position && !(this.props.onDrag || this.props.onStop)) {
        // eslint-disable-next-line
        console.warn('A `position` was applied to this <Draggable>, without drag handlers. This will make this ' + 'component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the ' + '`position` of this element.');
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Check to see if the element passed is an instanceof SVGElement
      if (typeof window.SVGElement !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.findDOMNode(this) instanceof window.SVGElement) {
        this.setState({ isElementSVG: true });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps /*: Object*/) {
      // Set x/y if position has changed
      if (nextProps.position && (!this.props.position || nextProps.position.x !== this.props.position.x || nextProps.position.y !== this.props.position.y)) {
        this.setState({ x: nextProps.position.x, y: nextProps.position.y });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.setState({ dragging: false }); // prevents invariant if unmounted while dragging
    }
  }, {
    key: 'render',
    value: function render() /*: ReactElement<any>*/ {
      var _classNames;

      var style = {},
          svgTransform = null;

      // If this is controlled, we don't want to move it - unless it's dragging.
      var controlled = Boolean(this.props.position);
      var draggable = !controlled || this.state.dragging;

      var position = this.props.position || this.props.defaultPosition;
      var transformOpts = {
        // Set left if horizontal drag is enabled
        x: Object(__WEBPACK_IMPORTED_MODULE_5__utils_positionFns__["a" /* canDragX */])(this) && draggable ? this.state.x : position.x,

        // Set top if vertical drag is enabled
        y: Object(__WEBPACK_IMPORTED_MODULE_5__utils_positionFns__["b" /* canDragY */])(this) && draggable ? this.state.y : position.y
      };

      // If this element was SVG, we use the `transform` attribute.
      if (this.state.isElementSVG) {
        svgTransform = Object(__WEBPACK_IMPORTED_MODULE_4__utils_domFns__["d" /* createSVGTransform */])(transformOpts);
      } else {
        // Add a CSS transform to move the element around. This allows us to move the element around
        // without worrying about whether or not it is relatively or absolutely positioned.
        // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
        // has a clean slate.
        style = Object(__WEBPACK_IMPORTED_MODULE_4__utils_domFns__["c" /* createCSSTransform */])(transformOpts);
      }

      var _props = this.props,
          defaultClassName = _props.defaultClassName,
          defaultClassNameDragging = _props.defaultClassNameDragging,
          defaultClassNameDragged = _props.defaultClassNameDragged;


      var children = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children);

      // Mark with class while dragging
      var className = __WEBPACK_IMPORTED_MODULE_3_classnames___default()(children.props.className || '', defaultClassName, (_classNames = {}, _defineProperty(_classNames, defaultClassNameDragging, this.state.dragging), _defineProperty(_classNames, defaultClassNameDragged, this.state.dragged), _classNames));

      // Reuse the child provided
      // This makes it flexible to use whatever element is wanted (div, ul, etc)
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7__DraggableCore__["default"],
        _extends({}, this.props, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(children, {
          className: className,
          style: _extends({}, children.props.style, style),
          transform: svgTransform
        })
      );
    }
  }]);

  return Draggable;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Draggable.displayName = 'Draggable';
Draggable.propTypes = _extends({}, __WEBPACK_IMPORTED_MODULE_7__DraggableCore__["default"].propTypes, {

  /**
   * `axis` determines which axis the draggable can move.
   *
   *  Note that all callbacks will still return data as normal. This only
   *  controls flushing to the DOM.
   *
   * 'both' allows movement horizontally and vertically.
   * 'x' limits movement to horizontal axis.
   * 'y' limits movement to vertical axis.
   * 'none' limits all movement.
   *
   * Defaults to 'both'.
   */
  axis: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['both', 'x', 'y', 'none']),

  /**
   * `bounds` determines the range of movement available to the element.
   * Available values are:
   *
   * 'parent' restricts movement within the Draggable's parent node.
   *
   * Alternatively, pass an object with the following properties, all of which are optional:
   *
   * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
   *
   * All values are in px.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable bounds={{right: 300, bottom: 300}}>
   *              <div>Content</div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  bounds: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    left: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    right: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    top: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    bottom: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
  }), __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf([false])]),

  defaultClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  defaultClassNameDragging: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  defaultClassNameDragged: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,

  /**
   * `defaultPosition` specifies the x and y that the dragged item should start at
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable defaultPosition={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */
  defaultPosition: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    x: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    y: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
  }),

  /**
   * `position`, if present, defines the current position of the element.
   *
   *  This is similar to how form elements in React work - if no `position` is supplied, the component
   *  is uncontrolled.
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable position={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */
  position: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    x: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    y: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
  }),

  /**
   * These properties should be defined on the child, not here.
   */
  className: __WEBPACK_IMPORTED_MODULE_6__utils_shims__["a" /* dontSetMe */],
  style: __WEBPACK_IMPORTED_MODULE_6__utils_shims__["a" /* dontSetMe */],
  transform: __WEBPACK_IMPORTED_MODULE_6__utils_shims__["a" /* dontSetMe */]
});
Draggable.defaultProps = _extends({}, __WEBPACK_IMPORTED_MODULE_7__DraggableCore__["default"].defaultProps, {
  axis: 'both',
  bounds: false,
  defaultClassName: 'react-draggable',
  defaultClassNameDragging: 'react-draggable-dragging',
  defaultClassNameDragged: 'react-draggable-dragged',
  defaultPosition: { x: 0, y: 0 },
  position: null
});
/* harmony default export */ __webpack_exports__["default"] = (Draggable);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(11);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIi4uL3dlYnBhY2svYm9vdHN0cmFwIDRhMDg1MDE5YTE2Nzg4NzBhYTJkIiwiLi4vLi9saWIvdXRpbHMvc2hpbXMuanMiLCIuLi9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwicmVhY3QtZG9tXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiYW1kXCI6XCJyZWFjdC1kb21cIixcInJvb3RcIjpcIlJlYWN0RE9NXCJ9IiwiLi4vLi9saWIvdXRpbHMvZ2V0UHJlZml4LmpzIiwiLi4vLi9saWIvdXRpbHMvZG9tRm5zLmpzIiwiLi4vZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCIsXCJyb290XCI6XCJSZWFjdFwifSIsIi4uLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCIuLi8uL2xpYi91dGlscy9wb3NpdGlvbkZucy5qcyIsIi4uLy4vbGliL0RyYWdnYWJsZUNvcmUuanMiLCIuLi8uL2xpYi91dGlscy9sb2cuanMiLCIuLi8uL2luZGV4LmpzIiwiLi4vLi9saWIvRHJhZ2dhYmxlLmpzIiwiLi4vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCIuLi8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIi4uLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiXSwibmFtZXMiOlsiZmluZEluQXJyYXkiLCJhcnJheSIsImNhbGxiYWNrIiwiaSIsImxlbmd0aCIsImFwcGx5IiwiaXNGdW5jdGlvbiIsImZ1bmMiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJpc051bSIsIm51bSIsImlzTmFOIiwiaW50IiwiYSIsInBhcnNlSW50IiwiZG9udFNldE1lIiwicHJvcHMiLCJwcm9wTmFtZSIsImNvbXBvbmVudE5hbWUiLCJFcnJvciIsInByZWZpeGVzIiwiZ2V0UHJlZml4IiwicHJvcCIsIndpbmRvdyIsImRvY3VtZW50Iiwic3R5bGUiLCJkb2N1bWVudEVsZW1lbnQiLCJicm93c2VyUHJlZml4VG9LZXkiLCJwcmVmaXgiLCJrZWJhYlRvVGl0bGVDYXNlIiwiYnJvd3NlclByZWZpeFRvU3R5bGUiLCJ0b0xvd2VyQ2FzZSIsInN0ciIsIm91dCIsInNob3VsZENhcGl0YWxpemUiLCJ0b1VwcGVyQ2FzZSIsIm1hdGNoZXNTZWxlY3RvckZ1bmMiLCJtYXRjaGVzU2VsZWN0b3IiLCJlbCIsInNlbGVjdG9yIiwibWV0aG9kIiwibWF0Y2hlc1NlbGVjdG9yQW5kUGFyZW50c1RvIiwiYmFzZU5vZGUiLCJub2RlIiwicGFyZW50Tm9kZSIsImFkZEV2ZW50IiwiZXZlbnQiLCJoYW5kbGVyIiwiYXR0YWNoRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnQiLCJkZXRhY2hFdmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvdXRlckhlaWdodCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsImNvbXB1dGVkU3R5bGUiLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJnZXRDb21wdXRlZFN0eWxlIiwiYm9yZGVyVG9wV2lkdGgiLCJib3JkZXJCb3R0b21XaWR0aCIsIm91dGVyV2lkdGgiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwiYm9yZGVyTGVmdFdpZHRoIiwiYm9yZGVyUmlnaHRXaWR0aCIsImlubmVySGVpZ2h0IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJpbm5lcldpZHRoIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJvZmZzZXRYWUZyb21QYXJlbnQiLCJldnQiLCJvZmZzZXRQYXJlbnQiLCJpc0JvZHkiLCJib2R5Iiwib2Zmc2V0UGFyZW50UmVjdCIsImxlZnQiLCJ0b3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4IiwiY2xpZW50WCIsInNjcm9sbExlZnQiLCJ5IiwiY2xpZW50WSIsInNjcm9sbFRvcCIsImNyZWF0ZUNTU1RyYW5zZm9ybSIsImJyb3dzZXJQcmVmaXgiLCJjcmVhdGVTVkdUcmFuc2Zvcm0iLCJnZXRUb3VjaCIsImUiLCJpZGVudGlmaWVyIiwidGFyZ2V0VG91Y2hlcyIsInQiLCJjaGFuZ2VkVG91Y2hlcyIsImdldFRvdWNoSWRlbnRpZmllciIsImFkZFVzZXJTZWxlY3RTdHlsZXMiLCJkb2MiLCJzdHlsZUVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImlkIiwiaW5uZXJIVE1MIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJhcHBlbmRDaGlsZCIsImFkZENsYXNzTmFtZSIsInJlbW92ZVVzZXJTZWxlY3RTdHlsZXMiLCJyZW1vdmVDbGFzc05hbWUiLCJzZWxlY3Rpb24iLCJlbXB0eSIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsInN0eWxlSGFja3MiLCJjaGlsZFN0eWxlIiwidG91Y2hBY3Rpb24iLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJtYXRjaCIsIlJlZ0V4cCIsInJlbW92ZSIsInJlcGxhY2UiLCJnZXRCb3VuZFBvc2l0aW9uIiwiZHJhZ2dhYmxlIiwiYm91bmRzIiwiY2xvbmVCb3VuZHMiLCJmaW5kRE9NTm9kZSIsIm93bmVyV2luZG93IiwiYm91bmROb2RlIiwicXVlcnlTZWxlY3RvciIsIkhUTUxFbGVtZW50Iiwibm9kZVN0eWxlIiwiYm91bmROb2RlU3R5bGUiLCJvZmZzZXRMZWZ0IiwibWFyZ2luTGVmdCIsIm9mZnNldFRvcCIsIm1hcmdpblRvcCIsInJpZ2h0IiwibWFyZ2luUmlnaHQiLCJib3R0b20iLCJtYXJnaW5Cb3R0b20iLCJNYXRoIiwibWluIiwibWF4Iiwic25hcFRvR3JpZCIsImdyaWQiLCJwZW5kaW5nWCIsInBlbmRpbmdZIiwicm91bmQiLCJjYW5EcmFnWCIsImF4aXMiLCJjYW5EcmFnWSIsImdldENvbnRyb2xQb3NpdGlvbiIsInRvdWNoSWRlbnRpZmllciIsImRyYWdnYWJsZUNvcmUiLCJ0b3VjaE9iaiIsImNyZWF0ZUNvcmVEYXRhIiwic3RhdGUiLCJpc1N0YXJ0IiwibGFzdFgiLCJkZWx0YVgiLCJkZWx0YVkiLCJsYXN0WSIsImNyZWF0ZURyYWdnYWJsZURhdGEiLCJjb3JlRGF0YSIsIlJlYWN0RE9NIiwiZXZlbnRzRm9yIiwidG91Y2giLCJzdGFydCIsIm1vdmUiLCJzdG9wIiwibW91c2UiLCJkcmFnRXZlbnRGb3IiLCJEcmFnZ2FibGVDb3JlIiwiZHJhZ2dpbmciLCJOYU4iLCJoYW5kbGVEcmFnU3RhcnQiLCJvbk1vdXNlRG93biIsImFsbG93QW55Q2xpY2siLCJidXR0b24iLCJ0aGlzTm9kZSIsImRpc2FibGVkIiwidGFyZ2V0IiwiTm9kZSIsImhhbmRsZSIsImNhbmNlbCIsInNldFN0YXRlIiwicG9zaXRpb24iLCJjb3JlRXZlbnQiLCJsb2ciLCJvblN0YXJ0Iiwic2hvdWxkVXBkYXRlIiwiZW5hYmxlVXNlclNlbGVjdEhhY2siLCJoYW5kbGVEcmFnIiwiaGFuZGxlRHJhZ1N0b3AiLCJjb25zb2xlIiwicHJldmVudERlZmF1bHQiLCJBcnJheSIsImlzQXJyYXkiLCJvbkRyYWciLCJNb3VzZUV2ZW50IiwiZXJyIiwiY3JlYXRlRXZlbnQiLCJpbml0TW91c2VFdmVudCIsIm9uU3RvcCIsIm9uTW91c2VVcCIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hFbmQiLCJSZWFjdCIsImNsb25lRWxlbWVudCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwiZGlzcGxheU5hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwibm9kZVR5cGUiLCJhcnJheU9mIiwibnVtYmVyIiwic3RyaW5nIiwidHJhbnNmb3JtIiwiZGVmYXVsdFByb3BzIiwicHJvY2VzcyIsIkRyYWdnYWJsZSIsInJlcXVpcmUiLCJkZWZhdWx0IiwibW9kdWxlIiwiZXhwb3J0cyIsIm9uRHJhZ1N0YXJ0Iiwic2hvdWxkU3RhcnQiLCJkcmFnZ2VkIiwicmVwb3NpdGlvbk9uQ2xpY2siLCJ1aURhdGEiLCJuZXdTdGF0ZSIsInNsYWNrWCIsInNsYWNrWSIsIm5ld1N0YXRlWCIsIm5ld1N0YXRlWSIsIm9uRHJhZ1N0b3AiLCJzaG91bGRTdG9wIiwiY29udHJvbGxlZCIsIkJvb2xlYW4iLCJkZWZhdWx0UG9zaXRpb24iLCJpc0VsZW1lbnRTVkciLCJ3YXJuIiwiU1ZHRWxlbWVudCIsIm5leHRQcm9wcyIsInN2Z1RyYW5zZm9ybSIsInRyYW5zZm9ybU9wdHMiLCJkZWZhdWx0Q2xhc3NOYW1lIiwiZGVmYXVsdENsYXNzTmFtZURyYWdnaW5nIiwiZGVmYXVsdENsYXNzTmFtZURyYWdnZWQiLCJjbGFzc05hbWVzIiwib25lT2YiLCJvbmVPZlR5cGUiLCJzaGFwZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFDTyxTQUFTQSxXQUFULENBQXFCQyxLQUFyQiwrQkFBb0RDLFFBQXBELDJCQUE2RTtBQUNsRixPQUFLLElBQUlDLElBQUksQ0FBUixFQUFXQyxTQUFTSCxNQUFNRyxNQUEvQixFQUF1Q0QsSUFBSUMsTUFBM0MsRUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViOztBQUVBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCOztBQUVoQjtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxVQUFVLElBQTRFO0FBQ3hGO0FBQ0EsRUFBRSxpQ0FBcUIsRUFBRSxtQ0FBRTtBQUMzQjtBQUNBLEdBQUc7QUFBQSxvR0FBQztBQUNKLEVBQUU7QUFDRjtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIuL2Rpc3QvcmVhY3QtZHJhZ2dhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3QtZG9tXCIpLCByZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3QtZG9tXCIsIFwicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY3REcmFnZ2FibGVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdC1kb21cIiksIHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3REcmFnZ2FibGVcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdERPTVwiXSwgcm9vdFtcIlJlYWN0XCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNGEwODUwMTlhMTY3ODg3MGFhMmQiLCIvLyBAZmxvd1xuLy8gQGNyZWRpdHMgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcm9nb3pobmlrb2ZmL2E0M2NmZWQyN2M0MWU0ZTY4Y2RjXG5leHBvcnQgZnVuY3Rpb24gZmluZEluQXJyYXkoYXJyYXk6IEFycmF5PGFueT4gfCBUb3VjaExpc3QsIGNhbGxiYWNrOiBGdW5jdGlvbik6IGFueSB7XG4gIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSBhcnJheS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChjYWxsYmFjay5hcHBseShjYWxsYmFjaywgW2FycmF5W2ldLCBpLCBhcnJheV0pKSByZXR1cm4gYXJyYXlbaV07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuYzogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2YgZnVuYyA9PT0gJ2Z1bmN0aW9uJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZnVuYykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bShudW06IGFueSk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKG51bSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnQoYTogc3RyaW5nKTogbnVtYmVyIHtcbiAgcmV0dXJuIHBhcnNlSW50KGEsIDEwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvbnRTZXRNZShwcm9wczogT2JqZWN0LCBwcm9wTmFtZTogc3RyaW5nLCBjb21wb25lbnROYW1lOiBzdHJpbmcpIHtcbiAgaWYgKHByb3BzW3Byb3BOYW1lXSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoYEludmFsaWQgcHJvcCAke3Byb3BOYW1lfSBwYXNzZWQgdG8gJHtjb21wb25lbnROYW1lfSAtIGRvIG5vdCBzZXQgdGhpcywgc2V0IGl0IG9uIHRoZSBjaGlsZC5gKTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3V0aWxzL3NoaW1zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJjb21tb25qc1wiOlwicmVhY3QtZG9tXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiYW1kXCI6XCJyZWFjdC1kb21cIixcInJvb3RcIjpcIlJlYWN0RE9NXCJ9XG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIEBmbG93XG5jb25zdCBwcmVmaXhlcyA9IFsnTW96JywgJ1dlYmtpdCcsICdPJywgJ21zJ107XG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJlZml4KHByb3A6IHN0cmluZz0ndHJhbnNmb3JtJyk6IHN0cmluZyB7XG4gIC8vIENoZWNraW5nIHNwZWNpZmljYWxseSBmb3IgJ3dpbmRvdy5kb2N1bWVudCcgaXMgZm9yIHBzZXVkby1icm93c2VyIHNlcnZlci1zaWRlXG4gIC8vIGVudmlyb25tZW50cyB0aGF0IGRlZmluZSAnd2luZG93JyBhcyB0aGUgZ2xvYmFsIGNvbnRleHQuXG4gIC8vIEUuZy4gUmVhY3QtcmFpbHMgKHNlZSBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZWFjdC1yYWlscy9wdWxsLzg0KVxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiAnJztcblxuICBjb25zdCBzdHlsZSA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGU7XG5cbiAgaWYgKHByb3AgaW4gc3R5bGUpIHJldHVybiAnJztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGJyb3dzZXJQcmVmaXhUb0tleShwcm9wLCBwcmVmaXhlc1tpXSkgaW4gc3R5bGUpIHJldHVybiBwcmVmaXhlc1tpXTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyb3dzZXJQcmVmaXhUb0tleShwcm9wOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHByZWZpeCA/IGAke3ByZWZpeH0ke2tlYmFiVG9UaXRsZUNhc2UocHJvcCl9YCA6IHByb3A7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBicm93c2VyUHJlZml4VG9TdHlsZShwcm9wOiBzdHJpbmcsIHByZWZpeDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHByZWZpeCA/IGAtJHtwcmVmaXgudG9Mb3dlckNhc2UoKX0tJHtwcm9wfWAgOiBwcm9wO1xufVxuXG5mdW5jdGlvbiBrZWJhYlRvVGl0bGVDYXNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IG91dCA9ICcnO1xuICBsZXQgc2hvdWxkQ2FwaXRhbGl6ZSA9IHRydWU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHNob3VsZENhcGl0YWxpemUpIHtcbiAgICAgIG91dCArPSBzdHJbaV0udG9VcHBlckNhc2UoKTtcbiAgICAgIHNob3VsZENhcGl0YWxpemUgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gJy0nKSB7XG4gICAgICBzaG91bGRDYXBpdGFsaXplID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0ICs9IHN0cltpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLy8gRGVmYXVsdCBleHBvcnQgaXMgdGhlIHByZWZpeCBpdHNlbGYsIGxpa2UgJ01veicsICdXZWJraXQnLCBldGNcbi8vIE5vdGUgdGhhdCB5b3UgbWF5IGhhdmUgdG8gcmUtdGVzdCBmb3IgY2VydGFpbiB0aGluZ3M7IGZvciBpbnN0YW5jZSwgQ2hyb21lIDUwXG4vLyBjYW4gaGFuZGxlIHVucHJlZml4ZWQgYHRyYW5zZm9ybWAsIGJ1dCBub3QgdW5wcmVmaXhlZCBgdXNlci1zZWxlY3RgXG5leHBvcnQgZGVmYXVsdCBnZXRQcmVmaXgoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi91dGlscy9nZXRQcmVmaXguanMiLCIvLyBAZmxvd1xuaW1wb3J0IHtmaW5kSW5BcnJheSwgaXNGdW5jdGlvbiwgaW50fSBmcm9tICcuL3NoaW1zJztcbmltcG9ydCBicm93c2VyUHJlZml4LCB7YnJvd3NlclByZWZpeFRvS2V5fSBmcm9tICcuL2dldFByZWZpeCc7XG5cbmltcG9ydCB0eXBlIHtDb250cm9sUG9zaXRpb24sIE1vdXNlVG91Y2hFdmVudH0gZnJvbSAnLi90eXBlcyc7XG5cbmxldCBtYXRjaGVzU2VsZWN0b3JGdW5jID0gJyc7XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yKGVsOiBOb2RlLCBzZWxlY3Rvcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICghbWF0Y2hlc1NlbGVjdG9yRnVuYykge1xuICAgIG1hdGNoZXNTZWxlY3RvckZ1bmMgPSBmaW5kSW5BcnJheShbXG4gICAgICAnbWF0Y2hlcycsXG4gICAgICAnd2Via2l0TWF0Y2hlc1NlbGVjdG9yJyxcbiAgICAgICdtb3pNYXRjaGVzU2VsZWN0b3InLFxuICAgICAgJ21zTWF0Y2hlc1NlbGVjdG9yJyxcbiAgICAgICdvTWF0Y2hlc1NlbGVjdG9yJ1xuICAgIF0sIGZ1bmN0aW9uKG1ldGhvZCl7XG4gICAgICAvLyAkRmxvd0lnbm9yZTogRG9lc24ndCB0aGluayBlbGVtZW50cyBhcmUgaW5kZXhhYmxlXG4gICAgICByZXR1cm4gaXNGdW5jdGlvbihlbFttZXRob2RdKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIE1pZ2h0IG5vdCBiZSBmb3VuZCBlbnRpcmVseSAobm90IGFuIEVsZW1lbnQ/KSAtIGluIHRoYXQgY2FzZSwgYmFpbFxuICAvLyAkRmxvd0lnbm9yZTogRG9lc24ndCB0aGluayBlbGVtZW50cyBhcmUgaW5kZXhhYmxlXG4gIGlmICghaXNGdW5jdGlvbihlbFttYXRjaGVzU2VsZWN0b3JGdW5jXSkpIHJldHVybiBmYWxzZTtcblxuICAvLyAkRmxvd0lnbm9yZTogRG9lc24ndCB0aGluayBlbGVtZW50cyBhcmUgaW5kZXhhYmxlXG4gIHJldHVybiBlbFttYXRjaGVzU2VsZWN0b3JGdW5jXShzZWxlY3Rvcik7XG59XG5cbi8vIFdvcmtzIHVwIHRoZSB0cmVlIHRvIHRoZSBkcmFnZ2FibGUgaXRzZWxmIGF0dGVtcHRpbmcgdG8gbWF0Y2ggc2VsZWN0b3IuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yQW5kUGFyZW50c1RvKGVsOiBOb2RlLCBzZWxlY3Rvcjogc3RyaW5nLCBiYXNlTm9kZTogTm9kZSk6IGJvb2xlYW4ge1xuICBsZXQgbm9kZSA9IGVsO1xuICBkbyB7XG4gICAgaWYgKG1hdGNoZXNTZWxlY3Rvcihub2RlLCBzZWxlY3RvcikpIHJldHVybiB0cnVlO1xuICAgIGlmIChub2RlID09PSBiYXNlTm9kZSkgcmV0dXJuIGZhbHNlO1xuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gIH0gd2hpbGUgKG5vZGUpO1xuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50KGVsOiA/Tm9kZSwgZXZlbnQ6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgaWYgKCFlbCkgeyByZXR1cm47IH1cbiAgaWYgKGVsLmF0dGFjaEV2ZW50KSB7XG4gICAgZWwuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBoYW5kbGVyKTtcbiAgfSBlbHNlIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gJEZsb3dJZ25vcmU6IERvZXNuJ3QgdGhpbmsgZWxlbWVudHMgYXJlIGluZGV4YWJsZVxuICAgIGVsWydvbicgKyBldmVudF0gPSBoYW5kbGVyO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFdmVudChlbDogP05vZGUsIGV2ZW50OiBzdHJpbmcsIGhhbmRsZXI6IEZ1bmN0aW9uKTogdm9pZCB7XG4gIGlmICghZWwpIHsgcmV0dXJuOyB9XG4gIGlmIChlbC5kZXRhY2hFdmVudCkge1xuICAgIGVsLmRldGFjaEV2ZW50KCdvbicgKyBldmVudCwgaGFuZGxlcik7XG4gIH0gZWxzZSBpZiAoZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIC8vICRGbG93SWdub3JlOiBEb2Vzbid0IHRoaW5rIGVsZW1lbnRzIGFyZSBpbmRleGFibGVcbiAgICBlbFsnb24nICsgZXZlbnRdID0gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb3V0ZXJIZWlnaHQobm9kZTogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICAvLyBUaGlzIGlzIGRlbGliZXJhdGVseSBleGNsdWRpbmcgbWFyZ2luIGZvciBvdXIgY2FsY3VsYXRpb25zLCBzaW5jZSB3ZSBhcmUgdXNpbmdcbiAgLy8gb2Zmc2V0VG9wIHdoaWNoIGlzIGluY2x1ZGluZyBtYXJnaW4uIFNlZSBnZXRCb3VuZFBvc2l0aW9uXG4gIGxldCBoZWlnaHQgPSBub2RlLmNsaWVudEhlaWdodDtcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICBoZWlnaHQgKz0gaW50KGNvbXB1dGVkU3R5bGUuYm9yZGVyVG9wV2lkdGgpO1xuICBoZWlnaHQgKz0gaW50KGNvbXB1dGVkU3R5bGUuYm9yZGVyQm90dG9tV2lkdGgpO1xuICByZXR1cm4gaGVpZ2h0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3V0ZXJXaWR0aChub2RlOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gIC8vIFRoaXMgaXMgZGVsaWJlcmF0ZWx5IGV4Y2x1ZGluZyBtYXJnaW4gZm9yIG91ciBjYWxjdWxhdGlvbnMsIHNpbmNlIHdlIGFyZSB1c2luZ1xuICAvLyBvZmZzZXRMZWZ0IHdoaWNoIGlzIGluY2x1ZGluZyBtYXJnaW4uIFNlZSBnZXRCb3VuZFBvc2l0aW9uXG4gIGxldCB3aWR0aCA9IG5vZGUuY2xpZW50V2lkdGg7XG4gIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgd2lkdGggKz0gaW50KGNvbXB1dGVkU3R5bGUuYm9yZGVyTGVmdFdpZHRoKTtcbiAgd2lkdGggKz0gaW50KGNvbXB1dGVkU3R5bGUuYm9yZGVyUmlnaHRXaWR0aCk7XG4gIHJldHVybiB3aWR0aDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbm5lckhlaWdodChub2RlOiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gIGxldCBoZWlnaHQgPSBub2RlLmNsaWVudEhlaWdodDtcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICBoZWlnaHQgLT0gaW50KGNvbXB1dGVkU3R5bGUucGFkZGluZ1RvcCk7XG4gIGhlaWdodCAtPSBpbnQoY29tcHV0ZWRTdHlsZS5wYWRkaW5nQm90dG9tKTtcbiAgcmV0dXJuIGhlaWdodDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlubmVyV2lkdGgobm9kZTogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICBsZXQgd2lkdGggPSBub2RlLmNsaWVudFdpZHRoO1xuICBjb25zdCBjb21wdXRlZFN0eWxlID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gIHdpZHRoIC09IGludChjb21wdXRlZFN0eWxlLnBhZGRpbmdMZWZ0KTtcbiAgd2lkdGggLT0gaW50KGNvbXB1dGVkU3R5bGUucGFkZGluZ1JpZ2h0KTtcbiAgcmV0dXJuIHdpZHRoO1xufVxuXG4vLyBHZXQgZnJvbSBvZmZzZXRQYXJlbnRcbmV4cG9ydCBmdW5jdGlvbiBvZmZzZXRYWUZyb21QYXJlbnQoZXZ0OiB7Y2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXJ9LCBvZmZzZXRQYXJlbnQ6IEhUTUxFbGVtZW50KTogQ29udHJvbFBvc2l0aW9uIHtcbiAgY29uc3QgaXNCb2R5ID0gb2Zmc2V0UGFyZW50ID09PSBvZmZzZXRQYXJlbnQub3duZXJEb2N1bWVudC5ib2R5O1xuICBjb25zdCBvZmZzZXRQYXJlbnRSZWN0ID0gaXNCb2R5ID8ge2xlZnQ6IDAsIHRvcDogMH0gOiBvZmZzZXRQYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgY29uc3QgeCA9IGV2dC5jbGllbnRYICsgb2Zmc2V0UGFyZW50LnNjcm9sbExlZnQgLSBvZmZzZXRQYXJlbnRSZWN0LmxlZnQ7XG4gIGNvbnN0IHkgPSBldnQuY2xpZW50WSArIG9mZnNldFBhcmVudC5zY3JvbGxUb3AgLSBvZmZzZXRQYXJlbnRSZWN0LnRvcDtcblxuICByZXR1cm4ge3gsIHl9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ1NTVHJhbnNmb3JtKHt4LCB5fToge3g6IG51bWJlciwgeTogbnVtYmVyfSk6IE9iamVjdCB7XG4gIC8vIFJlcGxhY2UgdW5pdGxlc3MgaXRlbXMgd2l0aCBweFxuICByZXR1cm4ge1ticm93c2VyUHJlZml4VG9LZXkoJ3RyYW5zZm9ybScsIGJyb3dzZXJQcmVmaXgpXTogJ3RyYW5zbGF0ZSgnICsgeCArICdweCwnICsgeSArICdweCknfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNWR1RyYW5zZm9ybSh7eCwgeX06IHt4OiBudW1iZXIsIHk6IG51bWJlcn0pOiBzdHJpbmcge1xuICByZXR1cm4gJ3RyYW5zbGF0ZSgnICsgeCArICcsJyArIHkgKyAnKSc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3VjaChlOiBNb3VzZVRvdWNoRXZlbnQsIGlkZW50aWZpZXI6IG51bWJlcik6ID97Y2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXJ9IHtcbiAgcmV0dXJuIChlLnRhcmdldFRvdWNoZXMgJiYgZmluZEluQXJyYXkoZS50YXJnZXRUb3VjaGVzLCB0ID0+IGlkZW50aWZpZXIgPT09IHQuaWRlbnRpZmllcikpIHx8XG4gICAgICAgICAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBmaW5kSW5BcnJheShlLmNoYW5nZWRUb3VjaGVzLCB0ID0+IGlkZW50aWZpZXIgPT09IHQuaWRlbnRpZmllcikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG91Y2hJZGVudGlmaWVyKGU6IE1vdXNlVG91Y2hFdmVudCk6ID9udW1iZXIge1xuICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlc1swXSkgcmV0dXJuIGUudGFyZ2V0VG91Y2hlc1swXS5pZGVudGlmaWVyO1xuICBpZiAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzWzBdKSByZXR1cm4gZS5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyO1xufVxuXG4vLyBVc2VyLXNlbGVjdCBIYWNrczpcbi8vXG4vLyBVc2VmdWwgZm9yIHByZXZlbnRpbmcgYmx1ZSBoaWdobGlnaHRzIGFsbCBvdmVyIGV2ZXJ5dGhpbmcgd2hlbiBkcmFnZ2luZy5cblxuLy8gTm90ZSB3ZSdyZSBwYXNzaW5nIGBkb2N1bWVudGAgYi9jIHdlIGNvdWxkIGJlIGlmcmFtZWRcbmV4cG9ydCBmdW5jdGlvbiBhZGRVc2VyU2VsZWN0U3R5bGVzKGRvYzogP0RvY3VtZW50KSB7XG4gIGlmICghZG9jKSByZXR1cm47XG4gIGxldCBzdHlsZUVsID0gZG9jLmdldEVsZW1lbnRCeUlkKCdyZWFjdC1kcmFnZ2FibGUtc3R5bGUtZWwnKTtcbiAgaWYgKCFzdHlsZUVsKSB7XG4gICAgc3R5bGVFbCA9IGRvYy5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlRWwudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgc3R5bGVFbC5pZCA9ICdyZWFjdC1kcmFnZ2FibGUtc3R5bGUtZWwnO1xuICAgIHN0eWxlRWwuaW5uZXJIVE1MID0gJy5yZWFjdC1kcmFnZ2FibGUtdHJhbnNwYXJlbnQtc2VsZWN0aW9uICo6Oi1tb3otc2VsZWN0aW9uIHtiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDt9XFxuJztcbiAgICBzdHlsZUVsLmlubmVySFRNTCArPSAnLnJlYWN0LWRyYWdnYWJsZS10cmFuc3BhcmVudC1zZWxlY3Rpb24gKjo6c2VsZWN0aW9uIHtiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDt9XFxuJztcbiAgICBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzdHlsZUVsKTtcbiAgfVxuICBpZiAoZG9jLmJvZHkpIGFkZENsYXNzTmFtZShkb2MuYm9keSwgJ3JlYWN0LWRyYWdnYWJsZS10cmFuc3BhcmVudC1zZWxlY3Rpb24nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVVzZXJTZWxlY3RTdHlsZXMoZG9jOiA/RG9jdW1lbnQpIHtcbiAgdHJ5IHtcbiAgICBpZiAoZG9jICYmIGRvYy5ib2R5KSByZW1vdmVDbGFzc05hbWUoZG9jLmJvZHksICdyZWFjdC1kcmFnZ2FibGUtdHJhbnNwYXJlbnQtc2VsZWN0aW9uJyk7XG4gICAgLy8gJEZsb3dJZ25vcmU6IElFXG4gICAgaWYgKGRvYy5zZWxlY3Rpb24pIHtcbiAgICAgIC8vICRGbG93SWdub3JlOiBJRVxuICAgICAgZG9jLnNlbGVjdGlvbi5lbXB0eSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7ICAvLyByZW1vdmUgc2VsZWN0aW9uIGNhdXNlZCBieSBzY3JvbGxcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBwcm9iYWJseSBJRVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZUhhY2tzKGNoaWxkU3R5bGU6IE9iamVjdCA9IHt9KTogT2JqZWN0IHtcbiAgLy8gV29ya2Fyb3VuZCBJRSBwb2ludGVyIGV2ZW50czsgc2VlICM1MVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vbXphYnJpc2tpZS9yZWFjdC1kcmFnZ2FibGUvaXNzdWVzLzUxI2lzc3VlY29tbWVudC0xMDM0ODgyNzhcbiAgcmV0dXJuIHtcbiAgICB0b3VjaEFjdGlvbjogJ25vbmUnLFxuICAgIC4uLmNoaWxkU3R5bGVcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzTmFtZShlbDogSFRNTEVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFlbC5jbGFzc05hbWUubWF0Y2gobmV3IFJlZ0V4cChgKD86XnxcXFxccykke2NsYXNzTmFtZX0oPyFcXFxcUylgKSkpIHtcbiAgICAgIGVsLmNsYXNzTmFtZSArPSBgICR7Y2xhc3NOYW1lfWA7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzc05hbWUoZWw6IEhUTUxFbGVtZW50LCBjbGFzc05hbWU6IHN0cmluZykge1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9IGVsc2Uge1xuICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoYCg/Ol58XFxcXHMpJHtjbGFzc05hbWV9KD8hXFxcXFMpYCwgJ2cnKSwgJycpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdXRpbHMvZG9tRm5zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJjb21tb25qc1wiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIixcInJvb3RcIjpcIlJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQGZsb3dcbmltcG9ydCB7aXNOdW0sIGludH0gZnJvbSAnLi9zaGltcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7Z2V0VG91Y2gsIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0LCBvZmZzZXRYWUZyb21QYXJlbnQsIG91dGVyV2lkdGgsIG91dGVySGVpZ2h0fSBmcm9tICcuL2RvbUZucyc7XG5cbmltcG9ydCB0eXBlIERyYWdnYWJsZSBmcm9tICcuLi9EcmFnZ2FibGUnO1xuaW1wb3J0IHR5cGUge0JvdW5kcywgQ29udHJvbFBvc2l0aW9uLCBEcmFnZ2FibGVEYXRhLCBNb3VzZVRvdWNoRXZlbnR9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHR5cGUgRHJhZ2dhYmxlQ29yZSBmcm9tICcuLi9EcmFnZ2FibGVDb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvdW5kUG9zaXRpb24oZHJhZ2dhYmxlOiBEcmFnZ2FibGUsIHg6IG51bWJlciwgeTogbnVtYmVyKTogW251bWJlciwgbnVtYmVyXSB7XG4gIC8vIElmIG5vIGJvdW5kcywgc2hvcnQtY2lyY3VpdCBhbmQgbW92ZSBvblxuICBpZiAoIWRyYWdnYWJsZS5wcm9wcy5ib3VuZHMpIHJldHVybiBbeCwgeV07XG5cbiAgLy8gQ2xvbmUgbmV3IGJvdW5kc1xuICBsZXQge2JvdW5kc30gPSBkcmFnZ2FibGUucHJvcHM7XG4gIGJvdW5kcyA9IHR5cGVvZiBib3VuZHMgPT09ICdzdHJpbmcnID8gYm91bmRzIDogY2xvbmVCb3VuZHMoYm91bmRzKTtcbiAgY29uc3Qgbm9kZSA9IGZpbmRET01Ob2RlKGRyYWdnYWJsZSk7XG5cbiAgaWYgKHR5cGVvZiBib3VuZHMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3Qge293bmVyRG9jdW1lbnR9ID0gbm9kZTtcbiAgICBjb25zdCBvd25lcldpbmRvdyA9IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgbGV0IGJvdW5kTm9kZTtcbiAgICBpZiAoYm91bmRzID09PSAncGFyZW50Jykge1xuICAgICAgYm91bmROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3VuZE5vZGUgPSBvd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYm91bmRzKTtcbiAgICB9XG4gICAgaWYgKCEoYm91bmROb2RlIGluc3RhbmNlb2Ygb3duZXJXaW5kb3cuSFRNTEVsZW1lbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JvdW5kcyBzZWxlY3RvciBcIicgKyBib3VuZHMgKyAnXCIgY291bGQgbm90IGZpbmQgYW4gZWxlbWVudC4nKTtcbiAgICB9XG4gICAgY29uc3Qgbm9kZVN0eWxlID0gb3duZXJXaW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBjb25zdCBib3VuZE5vZGVTdHlsZSA9IG93bmVyV2luZG93LmdldENvbXB1dGVkU3R5bGUoYm91bmROb2RlKTtcbiAgICAvLyBDb21wdXRlIGJvdW5kcy4gVGhpcyBpcyBhIHBhaW4gd2l0aCBwYWRkaW5nIGFuZCBvZmZzZXRzIGJ1dCB0aGlzIGdldHMgaXQgZXhhY3RseSByaWdodC5cbiAgICBib3VuZHMgPSB7XG4gICAgICBsZWZ0OiAtbm9kZS5vZmZzZXRMZWZ0ICsgaW50KGJvdW5kTm9kZVN0eWxlLnBhZGRpbmdMZWZ0KSArIGludChub2RlU3R5bGUubWFyZ2luTGVmdCksXG4gICAgICB0b3A6IC1ub2RlLm9mZnNldFRvcCArIGludChib3VuZE5vZGVTdHlsZS5wYWRkaW5nVG9wKSArIGludChub2RlU3R5bGUubWFyZ2luVG9wKSxcbiAgICAgIHJpZ2h0OiBpbm5lcldpZHRoKGJvdW5kTm9kZSkgLSBvdXRlcldpZHRoKG5vZGUpIC0gbm9kZS5vZmZzZXRMZWZ0ICtcbiAgICAgICAgaW50KGJvdW5kTm9kZVN0eWxlLnBhZGRpbmdSaWdodCkgLSBpbnQobm9kZVN0eWxlLm1hcmdpblJpZ2h0KSxcbiAgICAgIGJvdHRvbTogaW5uZXJIZWlnaHQoYm91bmROb2RlKSAtIG91dGVySGVpZ2h0KG5vZGUpIC0gbm9kZS5vZmZzZXRUb3AgK1xuICAgICAgICBpbnQoYm91bmROb2RlU3R5bGUucGFkZGluZ0JvdHRvbSkgLSBpbnQobm9kZVN0eWxlLm1hcmdpbkJvdHRvbSlcbiAgICB9O1xuICB9XG5cbiAgLy8gS2VlcCB4IGFuZCB5IGJlbG93IHJpZ2h0IGFuZCBib3R0b20gbGltaXRzLi4uXG4gIGlmIChpc051bShib3VuZHMucmlnaHQpKSB4ID0gTWF0aC5taW4oeCwgYm91bmRzLnJpZ2h0KTtcbiAgaWYgKGlzTnVtKGJvdW5kcy5ib3R0b20pKSB5ID0gTWF0aC5taW4oeSwgYm91bmRzLmJvdHRvbSk7XG5cbiAgLy8gQnV0IGFib3ZlIGxlZnQgYW5kIHRvcCBsaW1pdHMuXG4gIGlmIChpc051bShib3VuZHMubGVmdCkpIHggPSBNYXRoLm1heCh4LCBib3VuZHMubGVmdCk7XG4gIGlmIChpc051bShib3VuZHMudG9wKSkgeSA9IE1hdGgubWF4KHksIGJvdW5kcy50b3ApO1xuXG4gIHJldHVybiBbeCwgeV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzbmFwVG9HcmlkKGdyaWQ6IFtudW1iZXIsIG51bWJlcl0sIHBlbmRpbmdYOiBudW1iZXIsIHBlbmRpbmdZOiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgY29uc3QgeCA9IE1hdGgucm91bmQocGVuZGluZ1ggLyBncmlkWzBdKSAqIGdyaWRbMF07XG4gIGNvbnN0IHkgPSBNYXRoLnJvdW5kKHBlbmRpbmdZIC8gZ3JpZFsxXSkgKiBncmlkWzFdO1xuICByZXR1cm4gW3gsIHldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuRHJhZ1goZHJhZ2dhYmxlOiBEcmFnZ2FibGUpOiBib29sZWFuIHtcbiAgcmV0dXJuIGRyYWdnYWJsZS5wcm9wcy5heGlzID09PSAnYm90aCcgfHwgZHJhZ2dhYmxlLnByb3BzLmF4aXMgPT09ICd4Jztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbkRyYWdZKGRyYWdnYWJsZTogRHJhZ2dhYmxlKTogYm9vbGVhbiB7XG4gIHJldHVybiBkcmFnZ2FibGUucHJvcHMuYXhpcyA9PT0gJ2JvdGgnIHx8IGRyYWdnYWJsZS5wcm9wcy5heGlzID09PSAneSc7XG59XG5cbi8vIEdldCB7eCwgeX0gcG9zaXRpb25zIGZyb20gZXZlbnQuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udHJvbFBvc2l0aW9uKGU6IE1vdXNlVG91Y2hFdmVudCwgdG91Y2hJZGVudGlmaWVyOiA/bnVtYmVyLCBkcmFnZ2FibGVDb3JlOiBEcmFnZ2FibGVDb3JlKTogP0NvbnRyb2xQb3NpdGlvbiB7XG4gIGNvbnN0IHRvdWNoT2JqID0gdHlwZW9mIHRvdWNoSWRlbnRpZmllciA9PT0gJ251bWJlcicgPyBnZXRUb3VjaChlLCB0b3VjaElkZW50aWZpZXIpIDogbnVsbDtcbiAgaWYgKHR5cGVvZiB0b3VjaElkZW50aWZpZXIgPT09ICdudW1iZXInICYmICF0b3VjaE9iaikgcmV0dXJuIG51bGw7IC8vIG5vdCB0aGUgcmlnaHQgdG91Y2hcbiAgY29uc3Qgbm9kZSA9IGZpbmRET01Ob2RlKGRyYWdnYWJsZUNvcmUpO1xuICAvLyBVc2VyIGNhbiBwcm92aWRlIGFuIG9mZnNldFBhcmVudCBpZiBkZXNpcmVkLlxuICBjb25zdCBvZmZzZXRQYXJlbnQgPSBkcmFnZ2FibGVDb3JlLnByb3BzLm9mZnNldFBhcmVudCB8fCBub2RlLm9mZnNldFBhcmVudCB8fCBub2RlLm93bmVyRG9jdW1lbnQuYm9keTtcbiAgcmV0dXJuIG9mZnNldFhZRnJvbVBhcmVudCh0b3VjaE9iaiB8fCBlLCBvZmZzZXRQYXJlbnQpO1xufVxuXG4vLyBDcmVhdGUgYW4gZGF0YSBvYmplY3QgZXhwb3NlZCBieSA8RHJhZ2dhYmxlQ29yZT4ncyBldmVudHNcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb3JlRGF0YShkcmFnZ2FibGU6IERyYWdnYWJsZUNvcmUsIHg6IG51bWJlciwgeTogbnVtYmVyKTogRHJhZ2dhYmxlRGF0YSB7XG4gIGNvbnN0IHN0YXRlID0gZHJhZ2dhYmxlLnN0YXRlO1xuICBjb25zdCBpc1N0YXJ0ID0gIWlzTnVtKHN0YXRlLmxhc3RYKTtcbiAgY29uc3Qgbm9kZSA9IGZpbmRET01Ob2RlKGRyYWdnYWJsZSk7XG5cbiAgaWYgKGlzU3RhcnQpIHtcbiAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBtb3ZlLCB1c2UgdGhlIHggYW5kIHkgYXMgbGFzdCBjb29yZHMuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5vZGUsXG4gICAgICBkZWx0YVg6IDAsIGRlbHRhWTogMCxcbiAgICAgIGxhc3RYOiB4LCBsYXN0WTogeSxcbiAgICAgIHgsIHksXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UgY2FsY3VsYXRlIHByb3BlciB2YWx1ZXMuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5vZGUsXG4gICAgICBkZWx0YVg6IHggLSBzdGF0ZS5sYXN0WCwgZGVsdGFZOiB5IC0gc3RhdGUubGFzdFksXG4gICAgICBsYXN0WDogc3RhdGUubGFzdFgsIGxhc3RZOiBzdGF0ZS5sYXN0WSxcbiAgICAgIHgsIHksXG4gICAgfTtcbiAgfVxufVxuXG4vLyBDcmVhdGUgYW4gZGF0YSBleHBvc2VkIGJ5IDxEcmFnZ2FibGU+J3MgZXZlbnRzXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRHJhZ2dhYmxlRGF0YShkcmFnZ2FibGU6IERyYWdnYWJsZSwgY29yZURhdGE6IERyYWdnYWJsZURhdGEpOiBEcmFnZ2FibGVEYXRhIHtcbiAgcmV0dXJuIHtcbiAgICBub2RlOiBjb3JlRGF0YS5ub2RlLFxuICAgIHg6IGRyYWdnYWJsZS5zdGF0ZS54ICsgY29yZURhdGEuZGVsdGFYLFxuICAgIHk6IGRyYWdnYWJsZS5zdGF0ZS55ICsgY29yZURhdGEuZGVsdGFZLFxuICAgIGRlbHRhWDogY29yZURhdGEuZGVsdGFYLFxuICAgIGRlbHRhWTogY29yZURhdGEuZGVsdGFZLFxuICAgIGxhc3RYOiBkcmFnZ2FibGUuc3RhdGUueCxcbiAgICBsYXN0WTogZHJhZ2dhYmxlLnN0YXRlLnlcbiAgfTtcbn1cblxuLy8gQSBsb3QgZmFzdGVyIHRoYW4gc3RyaW5naWZ5L3BhcnNlXG5mdW5jdGlvbiBjbG9uZUJvdW5kcyhib3VuZHM6IEJvdW5kcyk6IEJvdW5kcyB7XG4gIHJldHVybiB7XG4gICAgbGVmdDogYm91bmRzLmxlZnQsXG4gICAgdG9wOiBib3VuZHMudG9wLFxuICAgIHJpZ2h0OiBib3VuZHMucmlnaHQsXG4gICAgYm90dG9tOiBib3VuZHMuYm90dG9tXG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRET01Ob2RlKGRyYWdnYWJsZTogRHJhZ2dhYmxlIHwgRHJhZ2dhYmxlQ29yZSk6IEhUTUxFbGVtZW50IHtcbiAgY29uc3Qgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGRyYWdnYWJsZSk7XG4gIGlmICghbm9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignPERyYWdnYWJsZUNvcmU+OiBVbm1vdW50ZWQgZHVyaW5nIGV2ZW50IScpO1xuICB9XG4gIC8vICRGbG93SWdub3JlIHdlIGNhbid0IGFzc2VydCBvbiBIVE1MRWxlbWVudCBkdWUgdG8gdGVzdHMuLi4gRklYTUVcbiAgcmV0dXJuIG5vZGU7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdXRpbHMvcG9zaXRpb25GbnMuanMiLCIvLyBAZmxvd1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7bWF0Y2hlc1NlbGVjdG9yQW5kUGFyZW50c1RvLCBhZGRFdmVudCwgcmVtb3ZlRXZlbnQsIGFkZFVzZXJTZWxlY3RTdHlsZXMsIGdldFRvdWNoSWRlbnRpZmllcixcbiAgICAgICAgcmVtb3ZlVXNlclNlbGVjdFN0eWxlcywgc3R5bGVIYWNrc30gZnJvbSAnLi91dGlscy9kb21GbnMnO1xuaW1wb3J0IHtjcmVhdGVDb3JlRGF0YSwgZ2V0Q29udHJvbFBvc2l0aW9uLCBzbmFwVG9HcmlkfSBmcm9tICcuL3V0aWxzL3Bvc2l0aW9uRm5zJztcbmltcG9ydCB7ZG9udFNldE1lfSBmcm9tICcuL3V0aWxzL3NoaW1zJztcbmltcG9ydCBsb2cgZnJvbSAnLi91dGlscy9sb2cnO1xuXG5pbXBvcnQgdHlwZSB7RXZlbnRIYW5kbGVyLCBNb3VzZVRvdWNoRXZlbnR9IGZyb20gJy4vdXRpbHMvdHlwZXMnO1xuaW1wb3J0IHR5cGUge0VsZW1lbnQgYXMgUmVhY3RFbGVtZW50fSBmcm9tICdyZWFjdCc7XG5cbi8vIFNpbXBsZSBhYnN0cmFjdGlvbiBmb3IgZHJhZ2dpbmcgZXZlbnRzIG5hbWVzLlxuY29uc3QgZXZlbnRzRm9yID0ge1xuICB0b3VjaDoge1xuICAgIHN0YXJ0OiAndG91Y2hzdGFydCcsXG4gICAgbW92ZTogJ3RvdWNobW92ZScsXG4gICAgc3RvcDogJ3RvdWNoZW5kJ1xuICB9LFxuICBtb3VzZToge1xuICAgIHN0YXJ0OiAnbW91c2Vkb3duJyxcbiAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgICBzdG9wOiAnbW91c2V1cCdcbiAgfVxufTtcblxuLy8gRGVmYXVsdCB0byBtb3VzZSBldmVudHMuXG5sZXQgZHJhZ0V2ZW50Rm9yID0gZXZlbnRzRm9yLm1vdXNlO1xuXG50eXBlIERyYWdnYWJsZUNvcmVTdGF0ZSA9IHtcbiAgZHJhZ2dpbmc6IGJvb2xlYW4sXG4gIGxhc3RYOiBudW1iZXIsXG4gIGxhc3RZOiBudW1iZXIsXG4gIHRvdWNoSWRlbnRpZmllcjogP251bWJlclxufTtcblxuZXhwb3J0IHR5cGUgRHJhZ2dhYmxlQm91bmRzID0ge1xuICBsZWZ0OiBudW1iZXIsXG4gIHJpZ2h0OiBudW1iZXIsXG4gIHRvcDogbnVtYmVyLFxuICBib3R0b206IG51bWJlcixcbn07XG5cbmV4cG9ydCB0eXBlIERyYWdnYWJsZURhdGEgPSB7XG4gIG5vZGU6IEhUTUxFbGVtZW50LFxuICB4OiBudW1iZXIsIHk6IG51bWJlcixcbiAgZGVsdGFYOiBudW1iZXIsIGRlbHRhWTogbnVtYmVyLFxuICBsYXN0WDogbnVtYmVyLCBsYXN0WTogbnVtYmVyLFxufTtcblxuZXhwb3J0IHR5cGUgRHJhZ2dhYmxlRXZlbnRIYW5kbGVyID0gKGU6IE1vdXNlRXZlbnQsIGRhdGE6IERyYWdnYWJsZURhdGEpID0+IHZvaWQ7XG5cbmV4cG9ydCB0eXBlIENvbnRyb2xQb3NpdGlvbiA9IHt4OiBudW1iZXIsIHk6IG51bWJlcn07XG5cbmV4cG9ydCB0eXBlIERyYWdnYWJsZUNvcmVQcm9wcyA9IHtcbiAgYWxsb3dBbnlDbGljazogYm9vbGVhbixcbiAgY2FuY2VsOiBzdHJpbmcsXG4gIGNoaWxkcmVuOiBSZWFjdEVsZW1lbnQ8YW55PixcbiAgZGlzYWJsZWQ6IGJvb2xlYW4sXG4gIGVuYWJsZVVzZXJTZWxlY3RIYWNrOiBib29sZWFuLFxuICBvZmZzZXRQYXJlbnQ6IEhUTUxFbGVtZW50LFxuICBncmlkOiBbbnVtYmVyLCBudW1iZXJdLFxuICBoYW5kbGU6IHN0cmluZyxcbiAgb25TdGFydDogRHJhZ2dhYmxlRXZlbnRIYW5kbGVyLFxuICBvbkRyYWc6IERyYWdnYWJsZUV2ZW50SGFuZGxlcixcbiAgb25TdG9wOiBEcmFnZ2FibGVFdmVudEhhbmRsZXIsXG4gIG9uTW91c2VEb3duOiAoZTogTW91c2VFdmVudCkgPT4gdm9pZCxcbn07XG5cbi8vXG4vLyBEZWZpbmUgPERyYWdnYWJsZUNvcmU+LlxuLy9cbi8vIDxEcmFnZ2FibGVDb3JlPiBpcyBmb3IgYWR2YW5jZWQgdXNhZ2Ugb2YgPERyYWdnYWJsZT4uIEl0IG1haW50YWlucyBtaW5pbWFsIGludGVybmFsIHN0YXRlIHNvIGl0IGNhblxuLy8gd29yayB3ZWxsIHdpdGggbGlicmFyaWVzIHRoYXQgcmVxdWlyZSBtb3JlIGNvbnRyb2wgb3ZlciB0aGUgZWxlbWVudC5cbi8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWdnYWJsZUNvcmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RHJhZ2dhYmxlQ29yZVByb3BzLCBEcmFnZ2FibGVDb3JlU3RhdGU+IHtcblxuICBzdGF0aWMgZGlzcGxheU5hbWUgPSAnRHJhZ2dhYmxlQ29yZSc7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBgYWxsb3dBbnlDbGlja2AgYWxsb3dzIGRyYWdnaW5nIHVzaW5nIGFueSBtb3VzZSBidXR0b24uXG4gICAgICogQnkgZGVmYXVsdCwgd2Ugb25seSBhY2NlcHQgdGhlIGxlZnQgYnV0dG9uLlxuICAgICAqXG4gICAgICogRGVmYXVsdHMgdG8gYGZhbHNlYC5cbiAgICAgKi9cbiAgICBhbGxvd0FueUNsaWNrOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIGBkaXNhYmxlZGAsIGlmIHRydWUsIHN0b3BzIHRoZSA8RHJhZ2dhYmxlPiBmcm9tIGRyYWdnaW5nLiBBbGwgaGFuZGxlcnMsXG4gICAgICogd2l0aCB0aGUgZXhjZXB0aW9uIG9mIGBvbk1vdXNlRG93bmAsIHdpbGwgbm90IGZpcmUuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQnkgZGVmYXVsdCwgd2UgYWRkICd1c2VyLXNlbGVjdDpub25lJyBhdHRyaWJ1dGVzIHRvIHRoZSBkb2N1bWVudCBib2R5XG4gICAgICogdG8gcHJldmVudCB1Z2x5IHRleHQgc2VsZWN0aW9uIGR1cmluZyBkcmFnLiBJZiB0aGlzIGlzIGNhdXNpbmcgcHJvYmxlbXNcbiAgICAgKiBmb3IgeW91ciBhcHAsIHNldCB0aGlzIHRvIGBmYWxzZWAuXG4gICAgICovXG4gICAgZW5hYmxlVXNlclNlbGVjdEhhY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogYG9mZnNldFBhcmVudGAsIGlmIHNldCwgdXNlcyB0aGUgcGFzc2VkIERPTSBub2RlIHRvIGNvbXB1dGUgZHJhZyBvZmZzZXRzXG4gICAgICogaW5zdGVhZCBvZiB1c2luZyB0aGUgcGFyZW50IG5vZGUuXG4gICAgICovXG4gICAgb2Zmc2V0UGFyZW50OiBmdW5jdGlvbihwcm9wczogRHJhZ2dhYmxlQ29yZVByb3BzLCBwcm9wTmFtZTogJEtleXM8RHJhZ2dhYmxlQ29yZVByb3BzPikge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSAmJiBwcm9wc1twcm9wTmFtZV0ubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEcmFnZ2FibGVcXCdzIG9mZnNldFBhcmVudCBtdXN0IGJlIGEgRE9NIE5vZGUuJyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGBncmlkYCBzcGVjaWZpZXMgdGhlIHggYW5kIHkgdGhhdCBkcmFnZ2luZyBzaG91bGQgc25hcCB0by5cbiAgICAgKi9cbiAgICBncmlkOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcblxuICAgIC8qKlxuICAgICAqIGBoYW5kbGVgIHNwZWNpZmllcyBhIHNlbGVjdG9yIHRvIGJlIHVzZWQgYXMgdGhlIGhhbmRsZSB0aGF0IGluaXRpYXRlcyBkcmFnLlxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKlxuICAgICAqIGBgYGpzeFxuICAgICAqICAgbGV0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgKiAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgKiAgICAgICAgIHJldHVybiAoXG4gICAgICogICAgICAgICAgICA8RHJhZ2dhYmxlIGhhbmRsZT1cIi5oYW5kbGVcIj5cbiAgICAgKiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgKiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFuZGxlXCI+Q2xpY2sgbWUgdG8gZHJhZzwvZGl2PlxuICAgICAqICAgICAgICAgICAgICAgICAgPGRpdj5UaGlzIGlzIHNvbWUgb3RoZXIgY29udGVudDwvZGl2PlxuICAgICAqICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgKiAgICAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICogICAgICAgICApO1xuICAgICAqICAgICAgIH1cbiAgICAgKiAgIH0pO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGhhbmRsZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIGBjYW5jZWxgIHNwZWNpZmllcyBhIHNlbGVjdG9yIHRvIGJlIHVzZWQgdG8gcHJldmVudCBkcmFnIGluaXRpYWxpemF0aW9uLlxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKlxuICAgICAqIGBgYGpzeFxuICAgICAqICAgbGV0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgKiAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgKiAgICAgICAgICAgcmV0dXJuKFxuICAgICAqICAgICAgICAgICAgICAgPERyYWdnYWJsZSBjYW5jZWw9XCIuY2FuY2VsXCI+XG4gICAgICogICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsXCI+WW91IGNhbid0IGRyYWcgZnJvbSBoZXJlPC9kaXY+XG4gICAgICogICAgICAgICAgICAgICAgICAgICA8ZGl2PkRyYWdnaW5nIGhlcmUgd29ya3MgZmluZTwvZGl2PlxuICAgICAqICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAqICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICogICAgICAgICAgICk7XG4gICAgICogICAgICAgfVxuICAgICAqICAgfSk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgY2FuY2VsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gZHJhZ2dpbmcgc3RhcnRzLlxuICAgICAqIElmIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgYm9vbGVhbiBmYWxzZSwgZHJhZ2dpbmcgd2lsbCBiZSBjYW5jZWxlZC5cbiAgICAgKi9cbiAgICBvblN0YXJ0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGlsZSBkcmFnZ2luZy5cbiAgICAgKiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGJvb2xlYW4gZmFsc2UsIGRyYWdnaW5nIHdpbGwgYmUgY2FuY2VsZWQuXG4gICAgICovXG4gICAgb25EcmFnOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGRyYWdnaW5nIHN0b3BzLlxuICAgICAqIElmIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgYm9vbGVhbiBmYWxzZSwgdGhlIGRyYWcgd2lsbCByZW1haW4gYWN0aXZlLlxuICAgICAqL1xuICAgIG9uU3RvcDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBBIHdvcmthcm91bmQgb3B0aW9uIHdoaWNoIGNhbiBiZSBwYXNzZWQgaWYgb25Nb3VzZURvd24gbmVlZHMgdG8gYmUgYWNjZXNzZWQsXG4gICAgICogc2luY2UgaXQnbGwgYWx3YXlzIGJlIGJsb2NrZWQgKGFzIHRoZXJlIGlzIGludGVybmFsIHVzZSBvZiBvbk1vdXNlRG93bilcbiAgICAgKi9cbiAgICBvbk1vdXNlRG93bjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBUaGVzZSBwcm9wZXJ0aWVzIHNob3VsZCBiZSBkZWZpbmVkIG9uIHRoZSBjaGlsZCwgbm90IGhlcmUuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBkb250U2V0TWUsXG4gICAgc3R5bGU6IGRvbnRTZXRNZSxcbiAgICB0cmFuc2Zvcm06IGRvbnRTZXRNZVxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYWxsb3dBbnlDbGljazogZmFsc2UsIC8vIGJ5IGRlZmF1bHQgb25seSBhY2NlcHQgbGVmdCBjbGlja1xuICAgIGNhbmNlbDogbnVsbCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgZW5hYmxlVXNlclNlbGVjdEhhY2s6IHRydWUsXG4gICAgb2Zmc2V0UGFyZW50OiBudWxsLFxuICAgIGhhbmRsZTogbnVsbCxcbiAgICBncmlkOiBudWxsLFxuICAgIHRyYW5zZm9ybTogbnVsbCxcbiAgICBvblN0YXJ0OiBmdW5jdGlvbigpe30sXG4gICAgb25EcmFnOiBmdW5jdGlvbigpe30sXG4gICAgb25TdG9wOiBmdW5jdGlvbigpe30sXG4gICAgb25Nb3VzZURvd246IGZ1bmN0aW9uKCl7fVxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAvLyBVc2VkIHdoaWxlIGRyYWdnaW5nIHRvIGRldGVybWluZSBkZWx0YXMuXG4gICAgbGFzdFg6IE5hTiwgbGFzdFk6IE5hTixcbiAgICB0b3VjaElkZW50aWZpZXI6IG51bGxcbiAgfTtcblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyBSZW1vdmUgYW55IGxlZnRvdmVyIGV2ZW50IGhhbmRsZXJzLiBSZW1vdmUgYm90aCB0b3VjaCBhbmQgbW91c2UgaGFuZGxlcnMgaW4gY2FzZVxuICAgIC8vIHNvbWUgYnJvd3NlciBxdWlyayBjYXVzZWQgYSB0b3VjaCBldmVudCB0byBmaXJlIGR1cmluZyBhIG1vdXNlIG1vdmUsIG9yIHZpY2UgdmVyc2EuXG4gICAgY29uc3QgdGhpc05vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICBpZiAodGhpc05vZGUpIHtcbiAgICAgIGNvbnN0IHtvd25lckRvY3VtZW50fSA9IHRoaXNOb2RlO1xuICAgICAgcmVtb3ZlRXZlbnQob3duZXJEb2N1bWVudCwgZXZlbnRzRm9yLm1vdXNlLm1vdmUsIHRoaXMuaGFuZGxlRHJhZyk7XG4gICAgICByZW1vdmVFdmVudChvd25lckRvY3VtZW50LCBldmVudHNGb3IudG91Y2gubW92ZSwgdGhpcy5oYW5kbGVEcmFnKTtcbiAgICAgIHJlbW92ZUV2ZW50KG93bmVyRG9jdW1lbnQsIGV2ZW50c0Zvci5tb3VzZS5zdG9wLCB0aGlzLmhhbmRsZURyYWdTdG9wKTtcbiAgICAgIHJlbW92ZUV2ZW50KG93bmVyRG9jdW1lbnQsIGV2ZW50c0Zvci50b3VjaC5zdG9wLCB0aGlzLmhhbmRsZURyYWdTdG9wKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLmVuYWJsZVVzZXJTZWxlY3RIYWNrKSByZW1vdmVVc2VyU2VsZWN0U3R5bGVzKG93bmVyRG9jdW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZURyYWdTdGFydDogRXZlbnRIYW5kbGVyPE1vdXNlVG91Y2hFdmVudD4gPSAoZSkgPT4ge1xuICAgIC8vIE1ha2UgaXQgcG9zc2libGUgdG8gYXR0YWNoIGV2ZW50IGhhbmRsZXJzIG9uIHRvcCBvZiB0aGlzIG9uZS5cbiAgICB0aGlzLnByb3BzLm9uTW91c2VEb3duKGUpO1xuXG4gICAgLy8gT25seSBhY2NlcHQgbGVmdC1jbGlja3MuXG4gICAgaWYgKCF0aGlzLnByb3BzLmFsbG93QW55Q2xpY2sgJiYgdHlwZW9mIGUuYnV0dG9uID09PSAnbnVtYmVyJyAmJiBlLmJ1dHRvbiAhPT0gMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gR2V0IG5vZGVzLiBCZSBzdXJlIHRvIGdyYWIgcmVsYXRpdmUgZG9jdW1lbnQgKGNvdWxkIGJlIGlmcmFtZWQpXG4gICAgY29uc3QgdGhpc05vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICBpZiAoIXRoaXNOb2RlIHx8ICF0aGlzTm9kZS5vd25lckRvY3VtZW50IHx8ICF0aGlzTm9kZS5vd25lckRvY3VtZW50LmJvZHkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignPERyYWdnYWJsZUNvcmU+IG5vdCBtb3VudGVkIG9uIERyYWdTdGFydCEnKTtcbiAgICB9XG4gICAgY29uc3Qge293bmVyRG9jdW1lbnR9ID0gdGhpc05vZGU7XG5cbiAgICAvLyBTaG9ydCBjaXJjdWl0IGlmIGhhbmRsZSBvciBjYW5jZWwgcHJvcCB3YXMgcHJvdmlkZWQgYW5kIHNlbGVjdG9yIGRvZXNuJ3QgbWF0Y2guXG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQgfHxcbiAgICAgICghKGUudGFyZ2V0IGluc3RhbmNlb2Ygb3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5Ob2RlKSkgfHxcbiAgICAgICh0aGlzLnByb3BzLmhhbmRsZSAmJiAhbWF0Y2hlc1NlbGVjdG9yQW5kUGFyZW50c1RvKGUudGFyZ2V0LCB0aGlzLnByb3BzLmhhbmRsZSwgdGhpc05vZGUpKSB8fFxuICAgICAgKHRoaXMucHJvcHMuY2FuY2VsICYmIG1hdGNoZXNTZWxlY3RvckFuZFBhcmVudHNUbyhlLnRhcmdldCwgdGhpcy5wcm9wcy5jYW5jZWwsIHRoaXNOb2RlKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTZXQgdG91Y2ggaWRlbnRpZmllciBpbiBjb21wb25lbnQgc3RhdGUgaWYgdGhpcyBpcyBhIHRvdWNoIGV2ZW50LiBUaGlzIGFsbG93cyB1cyB0b1xuICAgIC8vIGRpc3Rpbmd1aXNoIGJldHdlZW4gaW5kaXZpZHVhbCB0b3VjaGVzIG9uIG11bHRpdG91Y2ggc2NyZWVucyBieSBpZGVudGlmeWluZyB3aGljaFxuICAgIC8vIHRvdWNocG9pbnQgd2FzIHNldCB0byB0aGlzIGVsZW1lbnQuXG4gICAgY29uc3QgdG91Y2hJZGVudGlmaWVyID0gZ2V0VG91Y2hJZGVudGlmaWVyKGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe3RvdWNoSWRlbnRpZmllcn0pO1xuXG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IGRyYWcgcG9pbnQgZnJvbSB0aGUgZXZlbnQuIFRoaXMgaXMgdXNlZCBhcyB0aGUgb2Zmc2V0LlxuICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0Q29udHJvbFBvc2l0aW9uKGUsIHRvdWNoSWRlbnRpZmllciwgdGhpcyk7XG4gICAgaWYgKHBvc2l0aW9uID09IG51bGwpIHJldHVybjsgLy8gbm90IHBvc3NpYmxlIGJ1dCBzYXRpc2ZpZXMgZmxvd1xuICAgIGNvbnN0IHt4LCB5fSA9IHBvc2l0aW9uO1xuXG4gICAgLy8gQ3JlYXRlIGFuIGV2ZW50IG9iamVjdCB3aXRoIGFsbCB0aGUgZGF0YSBwYXJlbnRzIG5lZWQgdG8gbWFrZSBhIGRlY2lzaW9uIGhlcmUuXG4gICAgY29uc3QgY29yZUV2ZW50ID0gY3JlYXRlQ29yZURhdGEodGhpcywgeCwgeSk7XG5cbiAgICBsb2coJ0RyYWdnYWJsZUNvcmU6IGhhbmRsZURyYWdTdGFydDogJWonLCBjb3JlRXZlbnQpO1xuXG4gICAgLy8gQ2FsbCBldmVudCBoYW5kbGVyLiBJZiBpdCByZXR1cm5zIGV4cGxpY2l0IGZhbHNlLCBjYW5jZWwuXG4gICAgbG9nKCdjYWxsaW5nJywgdGhpcy5wcm9wcy5vblN0YXJ0KTtcbiAgICBjb25zdCBzaG91bGRVcGRhdGUgPSB0aGlzLnByb3BzLm9uU3RhcnQoZSwgY29yZUV2ZW50KTtcbiAgICBpZiAoc2hvdWxkVXBkYXRlID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgLy8gQWRkIGEgc3R5bGUgdG8gdGhlIGJvZHkgdG8gZGlzYWJsZSB1c2VyLXNlbGVjdC4gVGhpcyBwcmV2ZW50cyB0ZXh0IGZyb21cbiAgICAvLyBiZWluZyBzZWxlY3RlZCBhbGwgb3ZlciB0aGUgcGFnZS5cbiAgICBpZiAodGhpcy5wcm9wcy5lbmFibGVVc2VyU2VsZWN0SGFjaykgYWRkVXNlclNlbGVjdFN0eWxlcyhvd25lckRvY3VtZW50KTtcblxuICAgIC8vIEluaXRpYXRlIGRyYWdnaW5nLiBTZXQgdGhlIGN1cnJlbnQgeCBhbmQgeSBhcyBvZmZzZXRzXG4gICAgLy8gc28gd2Uga25vdyBob3cgbXVjaCB3ZSd2ZSBtb3ZlZCBkdXJpbmcgdGhlIGRyYWcuIFRoaXMgYWxsb3dzIHVzXG4gICAgLy8gdG8gZHJhZyBlbGVtZW50cyBhcm91bmQgZXZlbiBpZiB0aGV5IGhhdmUgYmVlbiBtb3ZlZCwgd2l0aG91dCBpc3N1ZS5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRyYWdnaW5nOiB0cnVlLFxuXG4gICAgICBsYXN0WDogeCxcbiAgICAgIGxhc3RZOiB5XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgZXZlbnRzIHRvIHRoZSBkb2N1bWVudCBkaXJlY3RseSBzbyB3ZSBjYXRjaCB3aGVuIHRoZSB1c2VyJ3MgbW91c2UvdG91Y2ggbW92ZXMgb3V0c2lkZSBvZlxuICAgIC8vIHRoaXMgZWxlbWVudC4gV2UgdXNlIGRpZmZlcmVudCBldmVudHMgZGVwZW5kaW5nIG9uIHdoZXRoZXIgb3Igbm90IHdlIGhhdmUgZGV0ZWN0ZWQgdGhhdCB0aGlzXG4gICAgLy8gaXMgYSB0b3VjaC1jYXBhYmxlIGRldmljZS5cbiAgICBhZGRFdmVudChvd25lckRvY3VtZW50LCBkcmFnRXZlbnRGb3IubW92ZSwgdGhpcy5oYW5kbGVEcmFnKTtcbiAgICBhZGRFdmVudChvd25lckRvY3VtZW50LCBkcmFnRXZlbnRGb3Iuc3RvcCwgdGhpcy5oYW5kbGVEcmFnU3RvcCk7XG4gIH07XG5cbiAgaGFuZGxlRHJhZzogRXZlbnRIYW5kbGVyPE1vdXNlVG91Y2hFdmVudD4gPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzdGFydCBkcmFnJywgZSk7XG4gICAgLy8gUHJldmVudCBzY3JvbGxpbmcgb24gbW9iaWxlIGRldmljZXMsIGxpa2UgaXBhZC9pcGhvbmUuXG4gICAgaWYgKGUudHlwZSA9PT0gJ3RvdWNobW92ZScpIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIEdldCB0aGUgY3VycmVudCBkcmFnIHBvaW50IGZyb20gdGhlIGV2ZW50LiBUaGlzIGlzIHVzZWQgYXMgdGhlIG9mZnNldC5cbiAgICBjb25zdCBwb3NpdGlvbiA9IGdldENvbnRyb2xQb3NpdGlvbihlLCB0aGlzLnN0YXRlLnRvdWNoSWRlbnRpZmllciwgdGhpcyk7XG4gICAgaWYgKHBvc2l0aW9uID09IG51bGwpIHJldHVybjtcbiAgICBsZXQge3gsIHl9ID0gcG9zaXRpb247XG5cbiAgICAvLyBTbmFwIHRvIGdyaWQgaWYgcHJvcCBoYXMgYmVlbiBwcm92aWRlZFxuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMucHJvcHMuZ3JpZCkpIHtcbiAgICAgIGxldCBkZWx0YVggPSB4IC0gdGhpcy5zdGF0ZS5sYXN0WCwgZGVsdGFZID0geSAtIHRoaXMuc3RhdGUubGFzdFk7XG4gICAgICBbZGVsdGFYLCBkZWx0YVldID0gc25hcFRvR3JpZCh0aGlzLnByb3BzLmdyaWQsIGRlbHRhWCwgZGVsdGFZKTtcbiAgICAgIGlmICghZGVsdGFYICYmICFkZWx0YVkpIHJldHVybjsgLy8gc2tpcCB1c2VsZXNzIGRyYWdcbiAgICAgIHggPSB0aGlzLnN0YXRlLmxhc3RYICsgZGVsdGFYLCB5ID0gdGhpcy5zdGF0ZS5sYXN0WSArIGRlbHRhWTtcbiAgICB9XG5cbiAgICBjb25zdCBjb3JlRXZlbnQgPSBjcmVhdGVDb3JlRGF0YSh0aGlzLCB4LCB5KTtcblxuICAgIGxvZygnRHJhZ2dhYmxlQ29yZTogaGFuZGxlRHJhZzogJWonLCBjb3JlRXZlbnQpO1xuXG4gICAgLy8gQ2FsbCBldmVudCBoYW5kbGVyLiBJZiBpdCByZXR1cm5zIGV4cGxpY2l0IGZhbHNlLCB0cmlnZ2VyIGVuZC5cbiAgICBjb25zdCBzaG91bGRVcGRhdGUgPSB0aGlzLnByb3BzLm9uRHJhZyhlLCBjb3JlRXZlbnQpO1xuICAgIGlmIChzaG91bGRVcGRhdGUgPT09IGZhbHNlKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyAkRmxvd0lnbm9yZVxuICAgICAgICB0aGlzLmhhbmRsZURyYWdTdG9wKG5ldyBNb3VzZUV2ZW50KCdtb3VzZXVwJykpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIE9sZCBicm93c2Vyc1xuICAgICAgICBjb25zdCBldmVudCA9ICgoZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnRzJyk6IGFueSk6IE1vdXNlVG91Y2hFdmVudCk7XG4gICAgICAgIC8vIEkgc2VlIHdoeSB0aGlzIGluc2FuaXR5IHdhcyBkZXByZWNhdGVkXG4gICAgICAgIC8vICRGbG93SWdub3JlXG4gICAgICAgIGV2ZW50LmluaXRNb3VzZUV2ZW50KCdtb3VzZXVwJywgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAwLCAwLCAwLCAwLCAwLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMCwgbnVsbCk7XG4gICAgICAgIHRoaXMuaGFuZGxlRHJhZ1N0b3AoZXZlbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbGFzdFg6IHgsXG4gICAgICBsYXN0WTogeVxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZURyYWdTdG9wOiBFdmVudEhhbmRsZXI8TW91c2VUb3VjaEV2ZW50PiA9IChlKSA9PiB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmRyYWdnaW5nKSByZXR1cm47XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IGdldENvbnRyb2xQb3NpdGlvbihlLCB0aGlzLnN0YXRlLnRvdWNoSWRlbnRpZmllciwgdGhpcyk7XG4gICAgaWYgKHBvc2l0aW9uID09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCB7eCwgeX0gPSBwb3NpdGlvbjtcbiAgICBjb25zdCBjb3JlRXZlbnQgPSBjcmVhdGVDb3JlRGF0YSh0aGlzLCB4LCB5KTtcblxuICAgIGNvbnN0IHRoaXNOb2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgaWYgKHRoaXNOb2RlKSB7XG4gICAgICAvLyBSZW1vdmUgdXNlci1zZWxlY3QgaGFja1xuICAgICAgaWYgKHRoaXMucHJvcHMuZW5hYmxlVXNlclNlbGVjdEhhY2spIHJlbW92ZVVzZXJTZWxlY3RTdHlsZXModGhpc05vZGUub3duZXJEb2N1bWVudCk7XG4gICAgfVxuXG4gICAgbG9nKCdEcmFnZ2FibGVDb3JlOiBoYW5kbGVEcmFnU3RvcDogJWonLCBjb3JlRXZlbnQpO1xuXG4gICAgLy8gUmVzZXQgdGhlIGVsLlxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgbGFzdFg6IE5hTixcbiAgICAgIGxhc3RZOiBOYU5cbiAgICB9KTtcblxuICAgIC8vIENhbGwgZXZlbnQgaGFuZGxlclxuICAgIHRoaXMucHJvcHMub25TdG9wKGUsIGNvcmVFdmVudCk7XG5cbiAgICBpZiAodGhpc05vZGUpIHtcbiAgICAgIC8vIFJlbW92ZSBldmVudCBoYW5kbGVyc1xuICAgICAgbG9nKCdEcmFnZ2FibGVDb3JlOiBSZW1vdmluZyBoYW5kbGVycycpO1xuICAgICAgcmVtb3ZlRXZlbnQodGhpc05vZGUub3duZXJEb2N1bWVudCwgZHJhZ0V2ZW50Rm9yLm1vdmUsIHRoaXMuaGFuZGxlRHJhZyk7XG4gICAgICByZW1vdmVFdmVudCh0aGlzTm9kZS5vd25lckRvY3VtZW50LCBkcmFnRXZlbnRGb3Iuc3RvcCwgdGhpcy5oYW5kbGVEcmFnU3RvcCk7XG4gICAgfVxuICB9O1xuXG4gIG9uTW91c2VEb3duOiBFdmVudEhhbmRsZXI8TW91c2VUb3VjaEV2ZW50PiA9IChlKSA9PiB7XG4gICAgZHJhZ0V2ZW50Rm9yID0gZXZlbnRzRm9yLm1vdXNlOyAvLyBvbiB0b3VjaHNjcmVlbiBsYXB0b3BzIHdlIGNvdWxkIHN3aXRjaCBiYWNrIHRvIG1vdXNlXG4gICAgdGhpcy5oYW5kbGVEcmFnKGUpO1xuICAgIGNvbnNvbGUubG9nKCdoYW5kbGUgZHJhZyBvbiBtb3VzZSBkb3duJyk7XG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlRHJhZ1N0YXJ0KGUpO1xuICB9O1xuXG4gIG9uTW91c2VVcDogRXZlbnRIYW5kbGVyPE1vdXNlVG91Y2hFdmVudD4gPSAoZSkgPT4ge1xuICAgIGRyYWdFdmVudEZvciA9IGV2ZW50c0Zvci5tb3VzZTtcblxuICAgIHJldHVybiB0aGlzLmhhbmRsZURyYWdTdG9wKGUpO1xuICB9O1xuXG4gIC8vIFNhbWUgYXMgb25Nb3VzZURvd24gKHN0YXJ0IGRyYWcpLCBidXQgbm93IGNvbnNpZGVyIHRoaXMgYSB0b3VjaCBkZXZpY2UuXG4gIG9uVG91Y2hTdGFydDogRXZlbnRIYW5kbGVyPE1vdXNlVG91Y2hFdmVudD4gPSAoZSkgPT4ge1xuICAgIC8vIFdlJ3JlIG9uIGEgdG91Y2ggZGV2aWNlIG5vdywgc28gY2hhbmdlIHRoZSBldmVudCBoYW5kbGVyc1xuICAgIGRyYWdFdmVudEZvciA9IGV2ZW50c0Zvci50b3VjaDtcblxuICAgIHJldHVybiB0aGlzLmhhbmRsZURyYWdTdGFydChlKTtcbiAgfTtcblxuICBvblRvdWNoRW5kOiBFdmVudEhhbmRsZXI8TW91c2VUb3VjaEV2ZW50PiA9IChlKSA9PiB7XG4gICAgLy8gV2UncmUgb24gYSB0b3VjaCBkZXZpY2Ugbm93LCBzbyBjaGFuZ2UgdGhlIGV2ZW50IGhhbmRsZXJzXG4gICAgZHJhZ0V2ZW50Rm9yID0gZXZlbnRzRm9yLnRvdWNoO1xuXG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlRHJhZ1N0b3AoZSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIC8vIFJldXNlIHRoZSBjaGlsZCBwcm92aWRlZFxuICAgIC8vIFRoaXMgbWFrZXMgaXQgZmxleGlibGUgdG8gdXNlIHdoYXRldmVyIGVsZW1lbnQgaXMgd2FudGVkIChkaXYsIHVsLCBldGMpXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pLCB7XG4gICAgICBzdHlsZTogc3R5bGVIYWNrcyh0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzLnN0eWxlKSxcblxuICAgICAgLy8gTm90ZTogbW91c2VNb3ZlIGhhbmRsZXIgaXMgYXR0YWNoZWQgdG8gZG9jdW1lbnQgc28gaXQgd2lsbCBzdGlsbCBmdW5jdGlvblxuICAgICAgLy8gd2hlbiB0aGUgdXNlciBkcmFncyBxdWlja2x5IGFuZCBsZWF2ZXMgdGhlIGJvdW5kcyBvZiB0aGUgZWxlbWVudC5cbiAgICAgIG9uTW91c2VEb3duOiB0aGlzLm9uTW91c2VEb3duLFxuICAgICAgb25Ub3VjaFN0YXJ0OiB0aGlzLm9uVG91Y2hTdGFydCxcbiAgICAgIG9uTW91c2VVcDogdGhpcy5vbk1vdXNlVXAsXG4gICAgICBvblRvdWNoRW5kOiB0aGlzLm9uVG91Y2hFbmRcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL0RyYWdnYWJsZUNvcmUuanMiLCIvLyBAZmxvd1xuLyplc2xpbnQgbm8tY29uc29sZTowKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZyguLi5hcmdzOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52LkRSQUdHQUJMRV9ERUJVRykgY29uc29sZS5sb2coLi4uYXJncyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdXRpbHMvbG9nLmpzIiwidmFyIERyYWdnYWJsZSA9IHJlcXVpcmUoJy4vbGliL0RyYWdnYWJsZScpLmRlZmF1bHQ7XG5cbi8vIFByZXZpb3VzIHZlcnNpb25zIG9mIHRoaXMgbGliIGV4cG9ydGVkIDxEcmFnZ2FibGU+IGFzIHRoZSByb290IGV4cG9ydC4gQXMgdG8gbm90IGJyZWFrXG4vLyB0aGVtLCBvciBUeXBlU2NyaXB0LCB3ZSBleHBvcnQgKmJvdGgqIGFzIHRoZSByb290IGFuZCBhcyAnZGVmYXVsdCcuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL216YWJyaXNraWUvcmVhY3QtZHJhZ2dhYmxlL3B1bGwvMjU0XG4vLyBhbmQgaHR0cHM6Ly9naXRodWIuY29tL216YWJyaXNraWUvcmVhY3QtZHJhZ2dhYmxlL2lzc3Vlcy8yNjZcbm1vZHVsZS5leHBvcnRzID0gRHJhZ2dhYmxlO1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IERyYWdnYWJsZTtcbm1vZHVsZS5leHBvcnRzLkRyYWdnYWJsZUNvcmUgPSByZXF1aXJlKCcuL2xpYi9EcmFnZ2FibGVDb3JlJykuZGVmYXVsdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIiwiLy8gQGZsb3dcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7Y3JlYXRlQ1NTVHJhbnNmb3JtLCBjcmVhdGVTVkdUcmFuc2Zvcm19IGZyb20gJy4vdXRpbHMvZG9tRm5zJztcbmltcG9ydCB7Y2FuRHJhZ1gsIGNhbkRyYWdZLCBjcmVhdGVEcmFnZ2FibGVEYXRhLCBnZXRCb3VuZFBvc2l0aW9ufSBmcm9tICcuL3V0aWxzL3Bvc2l0aW9uRm5zJztcbmltcG9ydCB7ZG9udFNldE1lfSBmcm9tICcuL3V0aWxzL3NoaW1zJztcbmltcG9ydCBEcmFnZ2FibGVDb3JlIGZyb20gJy4vRHJhZ2dhYmxlQ29yZSc7XG5pbXBvcnQgdHlwZSB7Q29udHJvbFBvc2l0aW9uLCBEcmFnZ2FibGVCb3VuZHMsIERyYWdnYWJsZUNvcmVQcm9wc30gZnJvbSAnLi9EcmFnZ2FibGVDb3JlJztcbmltcG9ydCBsb2cgZnJvbSAnLi91dGlscy9sb2cnO1xuaW1wb3J0IHR5cGUge0RyYWdnYWJsZUV2ZW50SGFuZGxlcn0gZnJvbSAnLi91dGlscy90eXBlcyc7XG5pbXBvcnQgdHlwZSB7RWxlbWVudCBhcyBSZWFjdEVsZW1lbnR9IGZyb20gJ3JlYWN0JztcblxudHlwZSBEcmFnZ2FibGVTdGF0ZSA9IHtcbiAgZHJhZ2dpbmc6IGJvb2xlYW4sXG4gIGRyYWdnZWQ6IGJvb2xlYW4sXG4gIHg6IG51bWJlciwgeTogbnVtYmVyLFxuICBzbGFja1g6IG51bWJlciwgc2xhY2tZOiBudW1iZXIsXG4gIGlzRWxlbWVudFNWRzogYm9vbGVhblxufTtcblxuZXhwb3J0IHR5cGUgRHJhZ2dhYmxlUHJvcHMgPSB7XG4gIC4uLiRFeGFjdDxEcmFnZ2FibGVDb3JlUHJvcHM+LFxuICBheGlzOiAnYm90aCcgfCAneCcgfCAneScgfCAnbm9uZScsXG4gIGJvdW5kczogRHJhZ2dhYmxlQm91bmRzIHwgc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRDbGFzc05hbWU6IHN0cmluZyxcbiAgZGVmYXVsdENsYXNzTmFtZURyYWdnaW5nOiBzdHJpbmcsXG4gIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2VkOiBzdHJpbmcsXG4gIGRlZmF1bHRQb3NpdGlvbjogQ29udHJvbFBvc2l0aW9uLFxuICBwb3NpdGlvbjogQ29udHJvbFBvc2l0aW9uLFxufTtcblxuLy9cbi8vIERlZmluZSA8RHJhZ2dhYmxlPlxuLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PERyYWdnYWJsZVByb3BzLCBEcmFnZ2FibGVTdGF0ZT4ge1xuXG4gIHN0YXRpYyBkaXNwbGF5TmFtZSA9ICdEcmFnZ2FibGUnO1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgLy8gQWNjZXB0cyBhbGwgcHJvcHMgPERyYWdnYWJsZUNvcmU+IGFjY2VwdHMuXG4gICAgLi4uRHJhZ2dhYmxlQ29yZS5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBgYXhpc2AgZGV0ZXJtaW5lcyB3aGljaCBheGlzIHRoZSBkcmFnZ2FibGUgY2FuIG1vdmUuXG4gICAgICpcbiAgICAgKiAgTm90ZSB0aGF0IGFsbCBjYWxsYmFja3Mgd2lsbCBzdGlsbCByZXR1cm4gZGF0YSBhcyBub3JtYWwuIFRoaXMgb25seVxuICAgICAqICBjb250cm9scyBmbHVzaGluZyB0byB0aGUgRE9NLlxuICAgICAqXG4gICAgICogJ2JvdGgnIGFsbG93cyBtb3ZlbWVudCBob3Jpem9udGFsbHkgYW5kIHZlcnRpY2FsbHkuXG4gICAgICogJ3gnIGxpbWl0cyBtb3ZlbWVudCB0byBob3Jpem9udGFsIGF4aXMuXG4gICAgICogJ3knIGxpbWl0cyBtb3ZlbWVudCB0byB2ZXJ0aWNhbCBheGlzLlxuICAgICAqICdub25lJyBsaW1pdHMgYWxsIG1vdmVtZW50LlxuICAgICAqXG4gICAgICogRGVmYXVsdHMgdG8gJ2JvdGgnLlxuICAgICAqL1xuICAgIGF4aXM6IFByb3BUeXBlcy5vbmVPZihbJ2JvdGgnLCAneCcsICd5JywgJ25vbmUnXSksXG5cbiAgICAvKipcbiAgICAgKiBgYm91bmRzYCBkZXRlcm1pbmVzIHRoZSByYW5nZSBvZiBtb3ZlbWVudCBhdmFpbGFibGUgdG8gdGhlIGVsZW1lbnQuXG4gICAgICogQXZhaWxhYmxlIHZhbHVlcyBhcmU6XG4gICAgICpcbiAgICAgKiAncGFyZW50JyByZXN0cmljdHMgbW92ZW1lbnQgd2l0aGluIHRoZSBEcmFnZ2FibGUncyBwYXJlbnQgbm9kZS5cbiAgICAgKlxuICAgICAqIEFsdGVybmF0aXZlbHksIHBhc3MgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzLCBhbGwgb2Ygd2hpY2ggYXJlIG9wdGlvbmFsOlxuICAgICAqXG4gICAgICoge2xlZnQ6IExFRlRfQk9VTkQsIHJpZ2h0OiBSSUdIVF9CT1VORCwgYm90dG9tOiBCT1RUT01fQk9VTkQsIHRvcDogVE9QX0JPVU5EfVxuICAgICAqXG4gICAgICogQWxsIHZhbHVlcyBhcmUgaW4gcHguXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqXG4gICAgICogYGBganN4XG4gICAgICogICBsZXQgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgICAqICAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAqICAgICAgICAgcmV0dXJuIChcbiAgICAgKiAgICAgICAgICAgIDxEcmFnZ2FibGUgYm91bmRzPXt7cmlnaHQ6IDMwMCwgYm90dG9tOiAzMDB9fT5cbiAgICAgKiAgICAgICAgICAgICAgPGRpdj5Db250ZW50PC9kaXY+XG4gICAgICogICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICAqICAgICAgICAgKTtcbiAgICAgKiAgICAgICB9XG4gICAgICogICB9KTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBib3VuZHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgbGVmdDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgcmlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIHRvcDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgYm90dG9tOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgICB9KSxcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMub25lT2YoW2ZhbHNlXSlcbiAgICBdKSxcblxuICAgIGRlZmF1bHRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVmYXVsdENsYXNzTmFtZURyYWdnaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2VkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogYGRlZmF1bHRQb3NpdGlvbmAgc3BlY2lmaWVzIHRoZSB4IGFuZCB5IHRoYXQgdGhlIGRyYWdnZWQgaXRlbSBzaG91bGQgc3RhcnQgYXRcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6XG4gICAgICpcbiAgICAgKiBgYGBqc3hcbiAgICAgKiAgICAgIGxldCBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgICogICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICogICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICogICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGRlZmF1bHRQb3NpdGlvbj17e3g6IDI1LCB5OiAyNX19PlxuICAgICAqICAgICAgICAgICAgICAgICAgICAgIDxkaXY+SSBzdGFydCB3aXRoIHRyYW5zZm9ybVg6IDI1cHggYW5kIHRyYW5zZm9ybVk6IDI1cHg7PC9kaXY+XG4gICAgICogICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICAgKiAgICAgICAgICAgICAgKTtcbiAgICAgKiAgICAgICAgICB9XG4gICAgICogICAgICB9KTtcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBkZWZhdWx0UG9zaXRpb246IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICB4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgeTogUHJvcFR5cGVzLm51bWJlclxuICAgIH0pLFxuXG4gICAgLyoqXG4gICAgICogYHBvc2l0aW9uYCwgaWYgcHJlc2VudCwgZGVmaW5lcyB0aGUgY3VycmVudCBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudC5cbiAgICAgKlxuICAgICAqICBUaGlzIGlzIHNpbWlsYXIgdG8gaG93IGZvcm0gZWxlbWVudHMgaW4gUmVhY3Qgd29yayAtIGlmIG5vIGBwb3NpdGlvbmAgaXMgc3VwcGxpZWQsIHRoZSBjb21wb25lbnRcbiAgICAgKiAgaXMgdW5jb250cm9sbGVkLlxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKlxuICAgICAqIGBgYGpzeFxuICAgICAqICAgICAgbGV0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgKiAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgKiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgKiAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUgcG9zaXRpb249e3t4OiAyNSwgeTogMjV9fT5cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pkkgc3RhcnQgd2l0aCB0cmFuc2Zvcm1YOiAyNXB4IGFuZCB0cmFuc2Zvcm1ZOiAyNXB4OzwvZGl2PlxuICAgICAqICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICogICAgICAgICAgICAgICk7XG4gICAgICogICAgICAgICAgfVxuICAgICAqICAgICAgfSk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgcG9zaXRpb246IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICB4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgeTogUHJvcFR5cGVzLm51bWJlclxuICAgIH0pLFxuXG4gICAgLyoqXG4gICAgICogVGhlc2UgcHJvcGVydGllcyBzaG91bGQgYmUgZGVmaW5lZCBvbiB0aGUgY2hpbGQsIG5vdCBoZXJlLlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogZG9udFNldE1lLFxuICAgIHN0eWxlOiBkb250U2V0TWUsXG4gICAgdHJhbnNmb3JtOiBkb250U2V0TWVcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIC4uLkRyYWdnYWJsZUNvcmUuZGVmYXVsdFByb3BzLFxuICAgIGF4aXM6ICdib3RoJyxcbiAgICBib3VuZHM6IGZhbHNlLFxuICAgIGRlZmF1bHRDbGFzc05hbWU6ICdyZWFjdC1kcmFnZ2FibGUnLFxuICAgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2luZzogJ3JlYWN0LWRyYWdnYWJsZS1kcmFnZ2luZycsXG4gICAgZGVmYXVsdENsYXNzTmFtZURyYWdnZWQ6ICdyZWFjdC1kcmFnZ2FibGUtZHJhZ2dlZCcsXG4gICAgZGVmYXVsdFBvc2l0aW9uOiB7eDogMCwgeTogMH0sXG4gICAgcG9zaXRpb246IG51bGxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogRHJhZ2dhYmxlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLy8gV2hldGhlciBvciBub3Qgd2UgYXJlIGN1cnJlbnRseSBkcmFnZ2luZy5cbiAgICAgIGRyYWdnaW5nOiBmYWxzZSxcblxuICAgICAgLy8gV2hldGhlciBvciBub3Qgd2UgaGF2ZSBiZWVuIGRyYWdnZWQgYmVmb3JlLlxuICAgICAgZHJhZ2dlZDogZmFsc2UsXG5cbiAgICAgIC8vIEN1cnJlbnQgdHJhbnNmb3JtIHggYW5kIHkuXG4gICAgICB4OiBwcm9wcy5wb3NpdGlvbiA/IHByb3BzLnBvc2l0aW9uLnggOiBwcm9wcy5kZWZhdWx0UG9zaXRpb24ueCxcbiAgICAgIHk6IHByb3BzLnBvc2l0aW9uID8gcHJvcHMucG9zaXRpb24ueSA6IHByb3BzLmRlZmF1bHRQb3NpdGlvbi55LFxuXG4gICAgICAvLyBVc2VkIGZvciBjb21wZW5zYXRpbmcgZm9yIG91dC1vZi1ib3VuZHMgZHJhZ3NcbiAgICAgIHNsYWNrWDogMCwgc2xhY2tZOiAwLFxuXG4gICAgICAvLyBDYW4gb25seSBkZXRlcm1pbmUgaWYgU1ZHIGFmdGVyIG1vdW50aW5nXG4gICAgICBpc0VsZW1lbnRTVkc6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5wb3NpdGlvbiAmJiAhKHRoaXMucHJvcHMub25EcmFnIHx8IHRoaXMucHJvcHMub25TdG9wKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBjb25zb2xlLndhcm4oJ0EgYHBvc2l0aW9uYCB3YXMgYXBwbGllZCB0byB0aGlzIDxEcmFnZ2FibGU+LCB3aXRob3V0IGRyYWcgaGFuZGxlcnMuIFRoaXMgd2lsbCBtYWtlIHRoaXMgJyArXG4gICAgICAgICdjb21wb25lbnQgZWZmZWN0aXZlbHkgdW5kcmFnZ2FibGUuIFBsZWFzZSBhdHRhY2ggYG9uRHJhZ2Agb3IgYG9uU3RvcGAgaGFuZGxlcnMgc28geW91IGNhbiBhZGp1c3QgdGhlICcgK1xuICAgICAgICAnYHBvc2l0aW9uYCBvZiB0aGlzIGVsZW1lbnQuJyk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHRoZSBlbGVtZW50IHBhc3NlZCBpcyBhbiBpbnN0YW5jZW9mIFNWR0VsZW1lbnRcbiAgICBpZih0eXBlb2Ygd2luZG93LlNWR0VsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpIGluc3RhbmNlb2Ygd2luZG93LlNWR0VsZW1lbnQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0VsZW1lbnRTVkc6IHRydWUgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHM6IE9iamVjdCkge1xuICAgIC8vIFNldCB4L3kgaWYgcG9zaXRpb24gaGFzIGNoYW5nZWRcbiAgICBpZiAobmV4dFByb3BzLnBvc2l0aW9uICYmXG4gICAgICAgICghdGhpcy5wcm9wcy5wb3NpdGlvbiB8fFxuICAgICAgICAgIG5leHRQcm9wcy5wb3NpdGlvbi54ICE9PSB0aGlzLnByb3BzLnBvc2l0aW9uLnggfHxcbiAgICAgICAgICBuZXh0UHJvcHMucG9zaXRpb24ueSAhPT0gdGhpcy5wcm9wcy5wb3NpdGlvbi55XG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHg6IG5leHRQcm9wcy5wb3NpdGlvbi54LCB5OiBuZXh0UHJvcHMucG9zaXRpb24ueSB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtkcmFnZ2luZzogZmFsc2V9KTsgLy8gcHJldmVudHMgaW52YXJpYW50IGlmIHVubW91bnRlZCB3aGlsZSBkcmFnZ2luZ1xuICB9XG5cbiAgb25EcmFnU3RhcnQ6IERyYWdnYWJsZUV2ZW50SGFuZGxlciA9IChlLCBjb3JlRGF0YSkgPT4ge1xuICAgIGxvZygnRHJhZ2dhYmxlOiBvbkRyYWdTdGFydDogJWonLCBjb3JlRGF0YSk7XG5cbiAgICAvLyBTaG9ydC1jaXJjdWl0IGlmIHVzZXIncyBjYWxsYmFjayBraWxsZWQgaXQuXG4gICAgY29uc3Qgc2hvdWxkU3RhcnQgPSB0aGlzLnByb3BzLm9uU3RhcnQoZSwgY3JlYXRlRHJhZ2dhYmxlRGF0YSh0aGlzLCBjb3JlRGF0YSkpO1xuICAgIC8vIEtpbGxzIHN0YXJ0IGV2ZW50IG9uIGNvcmUgYXMgd2VsbCwgc28gbW92ZSBoYW5kbGVycyBhcmUgbmV2ZXIgYm91bmQuXG4gICAgaWYgKHNob3VsZFN0YXJ0ID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7ZHJhZ2dpbmc6IHRydWUsIGRyYWdnZWQ6IHRydWV9KTtcbiAgfTtcblxuICBvbkRyYWc6IERyYWdnYWJsZUV2ZW50SGFuZGxlciA9IChlLCBjb3JlRGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIGNvbnNvbGUubG9nKCdAQEBAQEAgICBvbkRyYWcnLCAhdGhpcy5zdGF0ZS5kcmFnZ2luZyAmJiAhdGhpcy5wcm9wcy5yZXBvc2l0aW9uT25DbGljayk7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmRyYWdnaW5nICYmICF0aGlzLnByb3BzLnJlcG9zaXRpb25PbkNsaWNrKSByZXR1cm4gZmFsc2U7XG4gICAgbG9nKCdEcmFnZ2FibGU6IG9uRHJhZzogJWonLCBjb3JlRGF0YSk7XG4gICAgY29uc3QgdWlEYXRhID0gY3JlYXRlRHJhZ2dhYmxlRGF0YSh0aGlzLCBjb3JlRGF0YSk7XG5cbiAgICBjb25zdCBuZXdTdGF0ZTogJFNoYXBlPERyYWdnYWJsZVN0YXRlPiA9IHtcbiAgICAgIHg6IHVpRGF0YS54LFxuICAgICAgeTogdWlEYXRhLnlcbiAgICB9O1xuXG4gICAgLy8gS2VlcCB3aXRoaW4gYm91bmRzLlxuICAgIGlmICh0aGlzLnByb3BzLmJvdW5kcykge1xuICAgICAgY29uc29sZS5sb2coJ2JvdW5kcycpO1xuICAgICAgLy8gU2F2ZSBvcmlnaW5hbCB4IGFuZCB5LlxuICAgICAgY29uc3Qge3gsIHl9ID0gbmV3U3RhdGU7XG5cbiAgICAgIC8vIEFkZCBzbGFjayB0byB0aGUgdmFsdWVzIHVzZWQgdG8gY2FsY3VsYXRlIGJvdW5kIHBvc2l0aW9uLiBUaGlzIHdpbGwgZW5zdXJlIHRoYXQgaWZcbiAgICAgIC8vIHdlIHN0YXJ0IHJlbW92aW5nIHNsYWNrLCB0aGUgZWxlbWVudCB3b24ndCByZWFjdCB0byBpdCByaWdodCBhd2F5IHVudGlsIGl0J3MgYmVlblxuICAgICAgLy8gY29tcGxldGVseSByZW1vdmVkLlxuICAgICAgbmV3U3RhdGUueCArPSB0aGlzLnN0YXRlLnNsYWNrWDtcbiAgICAgIG5ld1N0YXRlLnkgKz0gdGhpcy5zdGF0ZS5zbGFja1k7XG5cbiAgICAgIC8vIEdldCBib3VuZCBwb3NpdGlvbi4gVGhpcyB3aWxsIGNlaWwvZmxvb3IgdGhlIHggYW5kIHkgd2l0aGluIHRoZSBib3VuZGFyaWVzLlxuICAgICAgY29uc3QgW25ld1N0YXRlWCwgbmV3U3RhdGVZXSA9IGdldEJvdW5kUG9zaXRpb24odGhpcywgbmV3U3RhdGUueCwgbmV3U3RhdGUueSk7XG4gICAgICBuZXdTdGF0ZS54ID0gbmV3U3RhdGVYO1xuICAgICAgbmV3U3RhdGUueSA9IG5ld1N0YXRlWTtcblxuICAgICAgLy8gUmVjYWxjdWxhdGUgc2xhY2sgYnkgbm90aW5nIGhvdyBtdWNoIHdhcyBzaGF2ZWQgYnkgdGhlIGJvdW5kUG9zaXRpb24gaGFuZGxlci5cbiAgICAgIG5ld1N0YXRlLnNsYWNrWCA9IHRoaXMuc3RhdGUuc2xhY2tYICsgKHggLSBuZXdTdGF0ZS54KTtcbiAgICAgIG5ld1N0YXRlLnNsYWNrWSA9IHRoaXMuc3RhdGUuc2xhY2tZICsgKHkgLSBuZXdTdGF0ZS55KTtcblxuICAgICAgLy8gVXBkYXRlIHRoZSBldmVudCB3ZSBmaXJlIHRvIHJlZmxlY3Qgd2hhdCByZWFsbHkgaGFwcGVuZWQgYWZ0ZXIgYm91bmRzIHRvb2sgZWZmZWN0LlxuICAgICAgdWlEYXRhLnggPSBuZXdTdGF0ZS54O1xuICAgICAgdWlEYXRhLnkgPSBuZXdTdGF0ZS55O1xuICAgICAgdWlEYXRhLmRlbHRhWCA9IG5ld1N0YXRlLnggLSB0aGlzLnN0YXRlLng7XG4gICAgICB1aURhdGEuZGVsdGFZID0gbmV3U3RhdGUueSAtIHRoaXMuc3RhdGUueTtcbiAgICB9XG5cbiAgICAvLyBTaG9ydC1jaXJjdWl0IGlmIHVzZXIncyBjYWxsYmFjayBraWxsZWQgaXQuXG4gICAgY29uc3Qgc2hvdWxkVXBkYXRlID0gdGhpcy5wcm9wcy5vbkRyYWcoZSwgdWlEYXRhKTtcbiAgICBpZiAoc2hvdWxkVXBkYXRlID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gIH07XG5cbiAgb25EcmFnU3RvcDogRHJhZ2dhYmxlRXZlbnRIYW5kbGVyID0gKGUsIGNvcmVEYXRhKSA9PiB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmRyYWdnaW5nKSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBTaG9ydC1jaXJjdWl0IGlmIHVzZXIncyBjYWxsYmFjayBraWxsZWQgaXQuXG4gICAgY29uc3Qgc2hvdWxkU3RvcCA9IHRoaXMucHJvcHMub25TdG9wKGUsIGNyZWF0ZURyYWdnYWJsZURhdGEodGhpcywgY29yZURhdGEpKTtcbiAgICBpZiAoc2hvdWxkU3RvcCA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIGxvZygnRHJhZ2dhYmxlOiBvbkRyYWdTdG9wOiAlaicsIGNvcmVEYXRhKTtcblxuICAgIGNvbnN0IG5ld1N0YXRlOiAkU2hhcGU8RHJhZ2dhYmxlU3RhdGU+ID0ge1xuICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgc2xhY2tYOiAwLFxuICAgICAgc2xhY2tZOiAwXG4gICAgfTtcblxuICAgIC8vIElmIHRoaXMgaXMgYSBjb250cm9sbGVkIGNvbXBvbmVudCwgdGhlIHJlc3VsdCBvZiB0aGlzIG9wZXJhdGlvbiB3aWxsIGJlIHRvXG4gICAgLy8gcmV2ZXJ0IGJhY2sgdG8gdGhlIG9sZCBwb3NpdGlvbi4gV2UgZXhwZWN0IGEgaGFuZGxlciBvbiBgb25EcmFnU3RvcGAsIGF0IHRoZSBsZWFzdC5cbiAgICBjb25zdCBjb250cm9sbGVkID0gQm9vbGVhbih0aGlzLnByb3BzLnBvc2l0aW9uKTtcbiAgICBpZiAoY29udHJvbGxlZCkge1xuICAgICAgY29uc3Qge3gsIHl9ID0gdGhpcy5wcm9wcy5wb3NpdGlvbjtcbiAgICAgIG5ld1N0YXRlLnggPSB4O1xuICAgICAgbmV3U3RhdGUueSA9IHk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gIH07XG5cbiAgcmVuZGVyKCk6IFJlYWN0RWxlbWVudDxhbnk+IHtcbiAgICBsZXQgc3R5bGUgPSB7fSwgc3ZnVHJhbnNmb3JtID0gbnVsbDtcblxuICAgIC8vIElmIHRoaXMgaXMgY29udHJvbGxlZCwgd2UgZG9uJ3Qgd2FudCB0byBtb3ZlIGl0IC0gdW5sZXNzIGl0J3MgZHJhZ2dpbmcuXG4gICAgY29uc3QgY29udHJvbGxlZCA9IEJvb2xlYW4odGhpcy5wcm9wcy5wb3NpdGlvbik7XG4gICAgY29uc3QgZHJhZ2dhYmxlID0gIWNvbnRyb2xsZWQgfHwgdGhpcy5zdGF0ZS5kcmFnZ2luZztcblxuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wcm9wcy5wb3NpdGlvbiB8fCB0aGlzLnByb3BzLmRlZmF1bHRQb3NpdGlvbjtcbiAgICBjb25zdCB0cmFuc2Zvcm1PcHRzID0ge1xuICAgICAgLy8gU2V0IGxlZnQgaWYgaG9yaXpvbnRhbCBkcmFnIGlzIGVuYWJsZWRcbiAgICAgIHg6IGNhbkRyYWdYKHRoaXMpICYmIGRyYWdnYWJsZSA/XG4gICAgICAgIHRoaXMuc3RhdGUueCA6XG4gICAgICAgIHBvc2l0aW9uLngsXG5cbiAgICAgIC8vIFNldCB0b3AgaWYgdmVydGljYWwgZHJhZyBpcyBlbmFibGVkXG4gICAgICB5OiBjYW5EcmFnWSh0aGlzKSAmJiBkcmFnZ2FibGUgP1xuICAgICAgICB0aGlzLnN0YXRlLnkgOlxuICAgICAgICBwb3NpdGlvbi55XG4gICAgfTtcblxuICAgIC8vIElmIHRoaXMgZWxlbWVudCB3YXMgU1ZHLCB3ZSB1c2UgdGhlIGB0cmFuc2Zvcm1gIGF0dHJpYnV0ZS5cbiAgICBpZiAodGhpcy5zdGF0ZS5pc0VsZW1lbnRTVkcpIHtcbiAgICAgIHN2Z1RyYW5zZm9ybSA9IGNyZWF0ZVNWR1RyYW5zZm9ybSh0cmFuc2Zvcm1PcHRzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQWRkIGEgQ1NTIHRyYW5zZm9ybSB0byBtb3ZlIHRoZSBlbGVtZW50IGFyb3VuZC4gVGhpcyBhbGxvd3MgdXMgdG8gbW92ZSB0aGUgZWxlbWVudCBhcm91bmRcbiAgICAgIC8vIHdpdGhvdXQgd29ycnlpbmcgYWJvdXQgd2hldGhlciBvciBub3QgaXQgaXMgcmVsYXRpdmVseSBvciBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuXG4gICAgICAvLyBJZiB0aGUgaXRlbSB5b3UgYXJlIGRyYWdnaW5nIGFscmVhZHkgaGFzIGEgdHJhbnNmb3JtIHNldCwgd3JhcCBpdCBpbiBhIDxzcGFuPiBzbyA8RHJhZ2dhYmxlPlxuICAgICAgLy8gaGFzIGEgY2xlYW4gc2xhdGUuXG4gICAgICBzdHlsZSA9IGNyZWF0ZUNTU1RyYW5zZm9ybSh0cmFuc2Zvcm1PcHRzKTtcbiAgICB9XG5cbiAgICBjb25zdCB7XG4gICAgICBkZWZhdWx0Q2xhc3NOYW1lLFxuICAgICAgZGVmYXVsdENsYXNzTmFtZURyYWdnaW5nLFxuICAgICAgZGVmYXVsdENsYXNzTmFtZURyYWdnZWRcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcblxuICAgIC8vIE1hcmsgd2l0aCBjbGFzcyB3aGlsZSBkcmFnZ2luZ1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoKGNoaWxkcmVuLnByb3BzLmNsYXNzTmFtZSB8fCAnJyksIGRlZmF1bHRDbGFzc05hbWUsIHtcbiAgICAgIFtkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dpbmddOiB0aGlzLnN0YXRlLmRyYWdnaW5nLFxuICAgICAgW2RlZmF1bHRDbGFzc05hbWVEcmFnZ2VkXTogdGhpcy5zdGF0ZS5kcmFnZ2VkXG4gICAgfSk7XG5cbiAgICAvLyBSZXVzZSB0aGUgY2hpbGQgcHJvdmlkZWRcbiAgICAvLyBUaGlzIG1ha2VzIGl0IGZsZXhpYmxlIHRvIHVzZSB3aGF0ZXZlciBlbGVtZW50IGlzIHdhbnRlZCAoZGl2LCB1bCwgZXRjKVxuICAgIHJldHVybiAoXG4gICAgICA8RHJhZ2dhYmxlQ29yZSB7Li4udGhpcy5wcm9wc30gb25TdGFydD17dGhpcy5vbkRyYWdTdGFydH0gb25EcmFnPXt0aGlzLm9uRHJhZ30gb25TdG9wPXt0aGlzLm9uRHJhZ1N0b3B9PlxuICAgICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgc3R5bGU6IHsuLi5jaGlsZHJlbi5wcm9wcy5zdHlsZSwgLi4uc3R5bGV9LFxuICAgICAgICAgIHRyYW5zZm9ybTogc3ZnVHJhbnNmb3JtXG4gICAgICAgIH0pfVxuICAgICAgPC9EcmFnZ2FibGVDb3JlPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi9EcmFnZ2FibGUuanMiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB0aHJvdyBlcnI7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=