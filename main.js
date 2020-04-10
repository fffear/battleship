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
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/GameDisplay/GameDisplay.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/GameDisplay/GameDisplay.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"._3Zv0wVNnYLNVOO2U9GWTK4 {\\n  border: 1px solid black;\\n  width: 40px;\\n  height: 40px;\\n}\\n\\n._1NMpqcob0wHKG25K4ydSJv {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border: 1px solid transparent;\\n  width: 40px;\\n  height: 40px;\\n}\\n\\n._1TI798gSXz8EFL7GsWxKZ- {\\n  display: flex;\\n  \\n}\\n\\n.cdE4xMypDAtCDyIy-lMVy {\\n  display: inline-block;\\n\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"tile\": \"_3Zv0wVNnYLNVOO2U9GWTK4\",\n\t\"HeaderTile\": \"_1NMpqcob0wHKG25K4ydSJv\",\n\t\"board\": \"_1TI798gSXz8EFL7GsWxKZ-\",\n\t\"column\": \"cdE4xMypDAtCDyIy-lMVy\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/GameDisplay/GameDisplay.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/index.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/index.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\n  background-color: red;\\n  margin: 0;\\n}\\n\\n._1NMRzpTF3FTPdE5VRWhKRb {\\n  background-color: blue;\\n}\\n\\n._3QeMItP2lT58RRZx9X3wLj {\\n  display: flex;\\n  justify-content: space-around;\\n  background-color: palegreen;\\n}\\n\\n._4CU7tSgz9us5IVlgg7g2u {\\n  border: 1px solid black;\\n  width: 40px;\\n  height: 40px;\\n}\\n\\n._2-73q697r1RMs7A4eSrbnF {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border: 1px solid transparent;\\n  width: 40px;\\n  height: 40px;\\n}\\n\\n._1nvL-wdag3lyUIa8qqNapi {\\n  display: flex;\\n  \\n}\\n\\n._2lmgwHLx5UTsZqsfD3jRhF {\\n  display: inline-block;\\n}\", \"\"]);\n// Exports\nexports.locals = {\n\t\"diffBack\": \"_1NMRzpTF3FTPdE5VRWhKRb\",\n\t\"boardContainer\": \"_3QeMItP2lT58RRZx9X3wLj\",\n\t\"tile\": \"_4CU7tSgz9us5IVlgg7g2u\",\n\t\"HeaderTile\": \"_2-73q697r1RMs7A4eSrbnF\",\n\t\"board\": \"_1nvL-wdag3lyUIa8qqNapi\",\n\t\"column\": \"_2lmgwHLx5UTsZqsfD3jRhF\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/index.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/EventPubSub/EventPubSub.js":
/*!****************************************!*\
  !*** ./src/EventPubSub/EventPubSub.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// PubSub Mediator Object\nvar Events = function () {\n  var _events = {};\n\n  function on(eventName, fn) {\n    _events[eventName] = _events[eventName] || [];\n\n    _events[eventName].push(fn);\n  }\n\n  function off(eventName, fn) {\n    if (_events[eventName]) {\n      for (var i = 0; i < _events[eventName].length; i++) {\n        if (_events[eventName][i] === fn) {\n          _events[eventName].splice(i, 1);\n\n          break;\n        }\n      }\n    }\n  }\n\n  function emit(eventName, data) {\n    if (_events[eventName]) {\n      _events[eventName].forEach(function (fn) {\n        fn(data);\n      });\n    }\n  }\n\n  return {\n    on: on,\n    off: off,\n    emit: emit\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Events);\n\n//# sourceURL=webpack:///./src/EventPubSub/EventPubSub.js?");

/***/ }),

/***/ "./src/Game/Game.js":
/*!**************************!*\
  !*** ./src/Game/Game.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ship_Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Ship/Ship */ \"./src/Ship/Ship.js\");\n/* harmony import */ var _Player_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Player/Player */ \"./src/Player/Player.js\");\n/* harmony import */ var _Player_ComputerPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Player/ComputerPlayer */ \"./src/Player/ComputerPlayer.js\");\n/* harmony import */ var _Gameboard_Gameboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Gameboard/Gameboard */ \"./src/Gameboard/Gameboard.js\");\n\n\n\n // import GameDisplay from \"../GameDisplay/GameDisplay\";\n\nvar Game = function () {\n  var humanPlayer = Object(_Player_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  var computerPlayer = Object(_Player_ComputerPlayer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  var computerGameboard = Object(_Gameboard_Gameboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  var humanGameboard = Object(_Gameboard_Gameboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n  var startNewGame = function startNewGame() {\n    player1 = Object(_Player_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    player2 = Object(_Player_Player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    gameboard1 = Object(_Gameboard_Gameboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    gameboard2 = Object(_Gameboard_Gameboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  };\n\n  var gameOver = function gameOver() {\n    if (computerGameboard.allShipsSunk()) {\n      console.log(\"You Win!\");\n      return \"\";\n    } else if (humanGameboard.allShipsSunk()) {\n      console.log(\"Computer Win!\");\n      return \"\";\n    } else {\n      console.log(\"No ships\");\n    }\n  };\n\n  return {\n    computerGameboard: computerGameboard,\n    humanGameboard: humanGameboard,\n    humanPlayer: humanPlayer,\n    computerPlayer: computerPlayer,\n    startNewGame: startNewGame,\n    gameOver: gameOver\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/Game/Game.js?");

/***/ }),

/***/ "./src/GameController/GameController.js":
/*!**********************************************!*\
  !*** ./src/GameController/GameController.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _EventPubSub_EventPubSub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../EventPubSub/EventPubSub */ \"./src/EventPubSub/EventPubSub.js\");\n/* harmony import */ var _GameDisplay_GameDisplay_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GameDisplay/GameDisplay.css */ \"./src/GameDisplay/GameDisplay.css\");\n/* harmony import */ var _GameDisplay_GameDisplay_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_GameDisplay_GameDisplay_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Game_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Game/Game */ \"./src/Game/Game.js\");\n\n\n\n\nvar GameController = function (game) {\n  var startNewGame = function startNewGame(newGame) {\n    game.startNewGame();\n    _EventPubSub_EventPubSub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emit(\"startNewGame\", game);\n  };\n\n  var humanPlayerTurn = function humanPlayerTurn(squareData) {\n    game.humanPlayer.attack(game.computerGameboard, squareData);\n    var tile = squareData.tile;\n    var coordinates = {\n      x: squareData.x,\n      y: squareData.y\n    };\n    _EventPubSub_EventPubSub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emit(\"updateTile\", {\n      tile: tile,\n      board: game.computerGameboard,\n      coordinates: coordinates\n    });\n    return;\n  };\n\n  var computerPlayerTurn = function computerPlayerTurn() {\n    var xCoordinates = game.computerPlayer.getXCoordinates(game.computerGameboard.allCoordinates);\n    var randomXCoordinate = xCoordinates[Math.floor(Math.random() * xCoordinates.length)];\n    var randomCoordinates = game.computerPlayer.selectRandomCoordinatesStillAvailable(game.computerGameboard.allCoordinates, randomXCoordinate);\n    game.computerPlayer.attack(game.humanGameboard, randomCoordinates);\n    _EventPubSub_EventPubSub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emit(\"updateTile\", {\n      board: game.humanGameboard,\n      coordinates: randomCoordinates\n    });\n  };\n\n  var gameTurn = function gameTurn(squareData) {\n    new Promise(function (resolve, reject) {\n      humanPlayerTurn(squareData);\n      resolve();\n    }).then(function () {\n      return new Promise(function (resolve, reject) {\n        setTimeout(function () {\n          resolve(computerPlayerTurn());\n        }, 1000);\n      });\n    }).then(function () {\n      game.gameOver();\n    });\n  }; // const gameTurn = options => {\n  //   const { player, enemyGameboard, coordinates } = options;\n  // };\n\n\n  _EventPubSub_EventPubSub__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on(\"gameTurn\", gameTurn);\n  return {\n    gameTurn: gameTurn,\n    startNewGame: startNewGame\n  };\n}(_Game_Game__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameController);\n\n//# sourceURL=webpack:///./src/GameController/GameController.js?");

/***/ }),

/***/ "./src/GameDisplay/GameDisplay.css":
/*!*****************************************!*\
  !*** ./src/GameDisplay/GameDisplay.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-1!./GameDisplay.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/GameDisplay/GameDisplay.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/GameDisplay/GameDisplay.css?");

/***/ }),

/***/ "./src/GameDisplay/GameDisplay.js":
/*!****************************************!*\
  !*** ./src/GameDisplay/GameDisplay.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Player_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Player/Player */ \"./src/Player/Player.js\");\n/* harmony import */ var _GameDisplay_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameDisplay.css */ \"./src/GameDisplay/GameDisplay.css\");\n/* harmony import */ var _GameDisplay_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_GameDisplay_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _EventPubSub_EventPubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../EventPubSub/EventPubSub */ \"./src/EventPubSub/EventPubSub.js\");\n/* harmony import */ var _Game_Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Game/Game */ \"./src/Game/Game.js\");\n\n\n\n\n\nvar GameDisplay = function (game) {\n  var currentGame = game;\n\n  var restartGame = function restartGame(game) {\n    currentGame = game;\n  };\n\n  var createColumn = function createColumn() {\n    var individualColumn = document.createElement(\"div\");\n    individualColumn.classList.add(_GameDisplay_css__WEBPACK_IMPORTED_MODULE_1___default.a.column);\n    return individualColumn;\n  };\n\n  var createYColumn = function createYColumn(container) {\n    var individualColumn = createColumn();\n    var individualGrid = document.createElement(\"div\");\n    individualGrid.classList.add(_GameDisplay_css__WEBPACK_IMPORTED_MODULE_1___default.a.HeaderTile);\n    individualColumn.appendChild(individualGrid);\n\n    for (var i = 0; i < 10; i++) {\n      var _individualGrid = document.createElement(\"div\");\n\n      _individualGrid.classList.add(_GameDisplay_css__WEBPACK_IMPORTED_MODULE_1___default.a.HeaderTile);\n\n      _individualGrid.textContent = i + 1;\n      individualColumn.appendChild(_individualGrid);\n    }\n\n    container.appendChild(individualColumn);\n  };\n\n  var createBoard = function createBoard(board) {\n    var boardDiv = document.createElement(\"div\");\n    boardDiv.classList.add(_GameDisplay_css__WEBPACK_IMPORTED_MODULE_1___default.a.board);\n    createYColumn(boardDiv);\n\n    for (var key in board) {\n      var individualColumn = createColumn();\n      var individualGrid = document.createElement(\"div\");\n      individualGrid.classList.add(_GameDisplay_css__WEBPACK_IMPORTED_MODULE_1___default.a.HeaderTile);\n      individualGrid.textContent = key;\n      individualColumn.appendChild(individualGrid);\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = board[key][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var gridContent = _step.value;\n\n          var _individualGrid2 = document.createElement(\"div\");\n\n          _individualGrid2.classList.add(_GameDisplay_css__WEBPACK_IMPORTED_MODULE_1___default.a.tile);\n\n          _individualGrid2.textContent = gridContent;\n          individualColumn.appendChild(_individualGrid2);\n          boardDiv.appendChild(individualColumn);\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    }\n\n    return boardDiv;\n  };\n\n  var renderBoard = function renderBoard(board, container) {\n    container.appendChild(board);\n  };\n\n  var renderGameboards = function renderGameboards(game) {\n    var board1 = createBoard(game.computerGameboard.allCoordinates);\n    var board2 = createBoard(game.humanGameboard.allCoordinates);\n    var boardContainer = document.querySelector(\".board-container\");\n    renderBoard(board1, boardContainer);\n    renderBoard(board2, boardContainer);\n  };\n\n  renderGameboards(currentGame);\n  _EventPubSub_EventPubSub__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on(\"startNewGame\", restartGame);\n  _EventPubSub_EventPubSub__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on(\"startNewGame\", renderGameboards);\n  var computerPlayerBoard = document.querySelectorAll(\".\".concat(_GameDisplay_css__WEBPACK_IMPORTED_MODULE_1___default.a.board))[0];\n  var humanPlayerBoard = document.querySelectorAll(\".\".concat(_GameDisplay_css__WEBPACK_IMPORTED_MODULE_1___default.a.board))[1];\n\n  var findTile = function findTile(board, coordinates) {\n    var columns = Array.from(board.childNodes);\n\n    for (var _i = 0, _columns = columns; _i < _columns.length; _i++) {\n      var column = _columns[_i];\n\n      if (column.firstChild.innerText === coordinates.x) {\n        var tilesInColumn = Array.from(column.childNodes);\n\n        for (var i = 0; i < tilesInColumn.length; i++) {\n          if (coordinates.y === i) return tilesInColumn[i];\n        }\n      }\n    }\n  };\n\n  var renderUpdatedTile = function renderUpdatedTile(updatedData) {\n    if (updatedData[\"tile\"] === undefined) {\n      updatedData[\"tile\"] = findTile(humanPlayerBoard, updatedData[\"coordinates\"]);\n    }\n\n    updatedData[\"tile\"].textContent = updatedData[\"board\"].allCoordinates[updatedData[\"coordinates\"].x][updatedData[\"coordinates\"].y - 1];\n  };\n\n  var initiateGameTurn = function initiateGameTurn(event) {\n    var xCoordinate = event.target.parentElement.firstChild.textContent;\n    if (xCoordinate === \"\") return;\n    var gridArray = Array.prototype.slice.call(event.target.parentElement.childNodes);\n    var yCoordinate = gridArray.findIndex(function (square) {\n      return square === event.target;\n    });\n    if (yCoordinate === 0) return;\n    _EventPubSub_EventPubSub__WEBPACK_IMPORTED_MODULE_2__[\"default\"].emit(\"gameTurn\", {\n      x: xCoordinate,\n      y: yCoordinate,\n      tile: event.target\n    }); // computerPlayerBoard.removeEventListener(\"click\", initiateGameTurn);\n  };\n\n  computerPlayerBoard.addEventListener(\"click\", initiateGameTurn);\n  _EventPubSub_EventPubSub__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on(\"updateTile\", renderUpdatedTile);\n  return {\n    renderBoard: renderBoard,\n    renderGameboards: renderGameboards,\n    createBoard: createBoard,\n    renderUpdatedTile: renderUpdatedTile\n  };\n}(_Game_Game__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameDisplay);\n\n//# sourceURL=webpack:///./src/GameDisplay/GameDisplay.js?");

/***/ }),

/***/ "./src/Gameboard/Gameboard.js":
/*!************************************!*\
  !*** ./src/Gameboard/Gameboard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nvar Gameboard = function Gameboard() {\n  var createGrid = function createGrid() {\n    var grid = {};\n\n    for (var i = 0; i < 10; i++) {\n      var xCoordinate = String.fromCharCode(65 + i);\n      grid[xCoordinate] = _toConsumableArray(Array(10)).map(function (x) {\n        return \" \";\n      });\n    }\n\n    return grid;\n  };\n\n  var allCoordinates = createGrid();\n  var ships = [];\n\n  var placeShip = function placeShip(ship, coordinates, orientation) {\n    var shipLength = ship.positionsHit.length;\n\n    if (orientation === \"horizontal\" && shipLength + coordinates.x.charCodeAt(0) <= 75) {\n      for (var i = 0; i < shipLength; i++) {\n        var xCoordinate = String.fromCharCode(coordinates.x.charCodeAt(0) + i);\n        ship.positions.push({\n          x: xCoordinate,\n          y: coordinates.y\n        });\n      }\n    } else if (orientation === \"vertical\" && shipLength + coordinates.y <= 11) {\n      for (var _i = 0; _i < shipLength; _i++) {\n        ship.positions.push({\n          x: coordinates.x,\n          y: coordinates.y + _i\n        });\n      }\n    }\n\n    ships.push(ship);\n  };\n\n  var receiveAttack = function receiveAttack(x, y) {\n    if (checkHit(x, y)) {\n      allCoordinates[x][y - 1] = \"X\";\n      hitShip(x, y);\n    } else {\n      allCoordinates[x][y - 1] = \"M\";\n    }\n  };\n\n  var checkHit = function checkHit(x, y) {\n    return ships.some(function (ship) {\n      return ship.positions.some(function (coordinates) {\n        return coordinates.x === x && coordinates.y === y;\n      });\n    });\n  };\n\n  var hitShip = function hitShip(x, y) {\n    for (var i = 0; i < ships.length; i++) {\n      for (var j = 0; j < ships[i].positions.length; j++) {\n        if (ships[i].positions[j].x === x && ships[i].positions[j].y === y) {\n          ships[i].hit(j);\n        }\n      }\n    }\n  };\n\n  var allShipsSunk = function allShipsSunk() {\n    if (ships.length === 0) return false;\n    return ships.every(function (ship) {\n      return ship.isSunk();\n    });\n  }; // 1. place ships at specific coordinates by calling the ship factory function\n  // 2. receiveAttack function that takes a pair of coordinates, determines whether or\n  //    not the attack hit a ship and then sends the ‘hit’ function to the correct ship,\n  //    or records the coordinates of the missed shot.\n  // 3. Gameboards should keep track of missed attacks so they can display them properly.\n  // 4. Gameboards should be able to report whether or not all of their ships have been sunk.\n\n\n  return {\n    allCoordinates: allCoordinates,\n    placeShip: placeShip,\n    ships: ships,\n    receiveAttack: receiveAttack,\n    allShipsSunk: allShipsSunk\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gameboard);\n\n//# sourceURL=webpack:///./src/Gameboard/Gameboard.js?");

/***/ }),

/***/ "./src/Player/ComputerPlayer.js":
/*!**************************************!*\
  !*** ./src/Player/ComputerPlayer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/Player/Player.js\");\n\n\nvar ComputerPlayer = function ComputerPlayer() {\n  var prototype = Object(_Player__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  var yColumnNotEmpty = function yColumnNotEmpty(coordinatesStillAvailable, xCoordinate) {\n    return coordinatesStillAvailable[xCoordinate].some(function (yCoordinate) {\n      return yCoordinate === \" \";\n    });\n  };\n\n  var getXCoordinates = function getXCoordinates(coordinatesStillAvailable) {\n    var arrayOfXCoordinates = [];\n\n    for (var xCoordinate in coordinatesStillAvailable) {\n      if (yColumnNotEmpty(coordinatesStillAvailable, xCoordinate)) {\n        arrayOfXCoordinates.push(xCoordinate);\n      }\n    }\n\n    return arrayOfXCoordinates; // return coordinatesStillAvailable.reduce((array, value, index) => {\n    //   if (value !== undefined) {\n    //     array.push(index);\n    //   }\n    //   return array;\n    // }, []);\n  };\n\n  var getIndexesOfY = function getIndexesOfY(coordinatesStillAvailable, xCoordinate) {\n    var arrayOfYCoordinateIndexes = [];\n    var arrayOfYCoordinates = coordinatesStillAvailable[xCoordinate];\n\n    for (var i = 0; i < arrayOfYCoordinates.length; i++) {\n      if (arrayOfYCoordinates[i] === \" \") {\n        arrayOfYCoordinateIndexes.push(i + 1);\n      }\n    }\n\n    return arrayOfYCoordinateIndexes;\n  };\n\n  var selectRandomCoordinatesStillAvailable = function selectRandomCoordinatesStillAvailable(coordinatesStillAvailable, xCoordinate) {\n    // const xCoordinates = getXCoordinates(coordinatesStillAvailable);\n    // const randomXCoordinate =\n    //   xCoordinates[Math.floor(Math.random() * xCoordinates.length)];\n    var yCoordinates = getIndexesOfY(coordinatesStillAvailable, xCoordinate);\n    var yCoordinate = yCoordinates[Math.floor(Math.random() * yCoordinates.length)];\n    return {\n      x: xCoordinate,\n      y: yCoordinate\n    };\n  };\n\n  return Object.assign({}, prototype, {\n    selectRandomCoordinatesStillAvailable: selectRandomCoordinatesStillAvailable,\n    getXCoordinates: getXCoordinates,\n    getIndexesOfY: getIndexesOfY\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComputerPlayer);\n\n//# sourceURL=webpack:///./src/Player/ComputerPlayer.js?");

/***/ }),

/***/ "./src/Player/Player.js":
/*!******************************!*\
  !*** ./src/Player/Player.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar player = function player() {\n  var attack = function attack(gameboard, coordinates) {\n    gameboard.receiveAttack(coordinates.x, coordinates.y);\n  };\n\n  return {\n    attack: attack\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (player);\n\n//# sourceURL=webpack:///./src/Player/Player.js?");

/***/ }),

/***/ "./src/Ship/Ship.js":
/*!**************************!*\
  !*** ./src/Ship/Ship.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Ship = function Ship(length) {\n  // const _determineCoordinates = (length, startingCoordinate, direction) => {\n  //   const coordinates = [];\n  //   if (\n  //     direction === \"horizontal\" &&\n  //     length + startingCoordinate.x.charCodeAt(0) <= 75\n  //   ) {\n  //     for (let i = 0; i < length; i++) {\n  //       let xCoordinate = String.fromCharCode(\n  //         startingCoordinate.x.charCodeAt(0) + i\n  //       );\n  //       coordinates.push({ x: xCoordinate, y: startingCoordinate.y });\n  //     }\n  //   } else if (\n  //     direction === \"vertical\" &&\n  //     length + startingCoordinate.y <= 11\n  //   ) {\n  //     for (let i = 0; i < length; i++) {\n  //       coordinates.push({\n  //         x: startingCoordinate.x,\n  //         y: startingCoordinate.y + i\n  //       });\n  //     }\n  //   }\n  //   return coordinates;\n  // };\n  // const coordinates = _determineCoordinates(\n  //   length,\n  //   startingCoordinate,\n  //   direction\n  // );\n  var positions = [];\n  var positionsHit = Array.apply(null, {\n    length: length\n  });\n\n  var checkHit = function checkHit(position) {\n    return position == undefined;\n  };\n\n  var hit = function hit(number) {\n    if (number < positionsHit.length) {\n      positionsHit[number] = \"X\";\n    }\n  };\n\n  var isSunk = function isSunk() {\n    return !positionsHit.some(checkHit);\n  };\n\n  return {\n    positions: positions,\n    hit: hit,\n    isSunk: isSunk,\n    positionsHit: positionsHit\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ship);\n\n//# sourceURL=webpack:///./src/Ship/Ship.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-1!./index.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _EventPubSub_EventPubSub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventPubSub/EventPubSub */ \"./src/EventPubSub/EventPubSub.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GameDisplay_GameDisplay_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameDisplay/GameDisplay.css */ \"./src/GameDisplay/GameDisplay.css\");\n/* harmony import */ var _GameDisplay_GameDisplay_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_GameDisplay_GameDisplay_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Game_Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Game/Game */ \"./src/Game/Game.js\");\n/* harmony import */ var _GameDisplay_GameDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameDisplay/GameDisplay */ \"./src/GameDisplay/GameDisplay.js\");\n/* harmony import */ var _GameController_GameController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GameController/GameController */ \"./src/GameController/GameController.js\");\n\n\n\n\n\n // Add event listener to computer player board to attack square\n// let rootDiv = document.createElement(\"div\");\n// rootDiv.setAttribute(\"id\", \"root\");\n// document.body.appendChild(rootDiv);\n\nvar rootDiv = document.querySelector(\"#root\");\nvar boardContainer = document.querySelector(\".board-container\"); // let boardContainer = document.createElement(\"div\");\n// boardContainer.classList.add(\"board-container\");\n\nboardContainer.classList.add(_index_css__WEBPACK_IMPORTED_MODULE_1___default.a.boardContainer);\nrootDiv.appendChild(boardContainer); // console.log(Game);\n// GameController.startNewGame(Game());\n// GameDisplay.renderGameboards();\n// let game = Game();\n// let board1 = GameDisplay.createBoard(\n//   game.gameboard1.allCoordinates,\n//   boardContainer\n// );\n// let board2 = GameDisplay.createBoard(\n//   game.gameboard2.allCoordinates,\n//   boardContainer\n// );\n// GameDisplay.renderBoard(board1, boardContainer);\n// GameDisplay.renderBoard(board2, boardContainer);\n// let playerGameboard = document.querySelector(`.${GameDisplayStyles.board}`);\n// console.log(playerGameboard);\n// playerGameboard.addEventListener(\"click\", e => {\n//   let coordinates = GameInteraction.attackSquare(e);\n//   if (!coordinates) return;\n//   game.player1.attack(game.gameboard1, coordinates);\n//   GameDisplay.renderUpdatedTile(coordinates.tile, game.gameboard1, coordinates);\n// });\n// let div = document.querySelector(\"div\");\n// div.classList.add(styles.diffBack);\n// console.log(div);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });