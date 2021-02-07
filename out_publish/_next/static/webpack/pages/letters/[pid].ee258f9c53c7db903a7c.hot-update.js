webpackHotUpdate_N_E("pages/letters/[pid]",{

/***/ "./components/functions/wordFinder.js":
/*!********************************************!*\
  !*** ./components/functions/wordFinder.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data.json */ \"./components/data/data.json\");\nvar _data_data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/data.json */ \"./components/data/data.json\", 1);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (wordFinder = function wordFinder(arr) {\n  return _data_data_json__WEBPACK_IMPORTED_MODULE_1__.filter(function (word) {\n    var arrCopy = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr.join(''));\n\n    return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(word).every(function (letter) {\n      if (arrCopy.includes(letter)) {\n        arrCopy.splice(arrCopy.indexOf(letter), 1);\n        return true;\n      }\n    });\n  }).sort(function (a, b) {\n    return b.length - a.length;\n  });\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mdW5jdGlvbnMvd29yZEZpbmRlci5qcz8xYTgyIl0sIm5hbWVzIjpbIndvcmRGaW5kZXIiLCJhcnIiLCJkYXRhIiwiZmlsdGVyIiwid29yZCIsImFyckNvcHkiLCJqb2luIiwiZXZlcnkiLCJsZXR0ZXIiLCJpbmNsdWRlcyIsInNwbGljZSIsImluZGV4T2YiLCJzb3J0IiwiYSIsImIiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFZUEseUVBQVUsR0FBRyxvQkFBQUMsR0FBRyxFQUFJO0FBQ2xDLFNBQU9DLDRDQUFJLENBQ1RDLE1BREssQ0FDRSxVQUFBQyxJQUFJLEVBQUk7QUFDZixRQUFNQyxPQUFPLEdBQUcsNkZBQUlKLEdBQUcsQ0FBQ0ssSUFBSixDQUFTLEVBQVQsQ0FBUCxDQUFiOztBQUNBLFdBQU8sNkZBQUlGLElBQUosRUFBVUcsS0FBVixDQUFnQixVQUFBQyxNQUFNLEVBQUk7QUFDaEMsVUFBSUgsT0FBTyxDQUFDSSxRQUFSLENBQWlCRCxNQUFqQixDQUFKLEVBQThCO0FBQzdCSCxlQUFPLENBQUNLLE1BQVIsQ0FBZUwsT0FBTyxDQUFDTSxPQUFSLENBQWdCSCxNQUFoQixDQUFmLEVBQXdDLENBQXhDO0FBQ0EsZUFBTyxJQUFQO0FBQ0E7QUFDRCxLQUxNLENBQVA7QUFNQSxHQVRLLEVBVUxJLElBVkssQ0FVQSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxXQUFVQSxDQUFDLENBQUNDLE1BQUYsR0FBV0YsQ0FBQyxDQUFDRSxNQUF2QjtBQUFBLEdBVkEsQ0FBUDtBQVdBLENBWkQiLCJmaWxlIjoiLi9jb21wb25lbnRzL2Z1bmN0aW9ucy93b3JkRmluZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS9kYXRhLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCB3b3JkRmluZGVyID0gYXJyID0+IHtcblx0cmV0dXJuIGRhdGFcblx0XHQuZmlsdGVyKHdvcmQgPT4ge1xuXHRcdFx0Y29uc3QgYXJyQ29weSA9IFsuLi5hcnIuam9pbignJyldO1xuXHRcdFx0cmV0dXJuIFsuLi53b3JkXS5ldmVyeShsZXR0ZXIgPT4ge1xuXHRcdFx0XHRpZiAoYXJyQ29weS5pbmNsdWRlcyhsZXR0ZXIpKSB7XG5cdFx0XHRcdFx0YXJyQ29weS5zcGxpY2UoYXJyQ29weS5pbmRleE9mKGxldHRlciksIDEpO1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KVxuXHRcdC5zb3J0KChhLCBiKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/functions/wordFinder.js\n");

/***/ }),

/***/ "./pages/letters/[pid].jsx":
/*!*********************************!*\
  !*** ./pages/letters/[pid].jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Letters; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var _components_functions_wordFinder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/functions/wordFinder.js */ \"./components/functions/wordFinder.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _jsxFileName = \"/Users/axelelgenstierna/Git-repos/nine-helper/pages/letters/[pid].jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Letters() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])([]),\n      word = _useState[0],\n      setWord = _useState[1];\n\n  var pid = router.query.pid;\n\n  var goBack = function goBack() {\n    router.back();\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useEffect\"])(function () {\n    pid && setWord(Object(_components_functions_wordFinder_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_components_functions_wordFinder_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(pid.split(''))));\n  }, [pid]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"w-full h-full\",\n      children: word.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \" w-full h-layout-res-top flex flex-col justify-center items-center\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"text-red-400 font-serif text-xl font-bold text-center pb-2\",\n            children: \"Result:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 8\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"text-black font-serif text-3xl font-bold text-center\",\n            children: word\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 8\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-full h-24 flex justify-center items-center\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"h-16 w-16 shadow-medium rounded-full flex justify-center items-center cursor-pointer\",\n            onClick: goBack,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faAngleLeft\"],\n              className: \"text-red-400\",\n              size: \"lg\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 9\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 8\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 7\n        }, this)]\n      }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \" text-3xl font-serif\",\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 6\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Letters, \"k1d+LMHGJU0qWccsN6LPcfW0X7s=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = Letters;\n\nvar _c;\n\n$RefreshReg$(_c, \"Letters\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGV0dGVycy9bcGlkXS5qc3g/NDBmOSJdLCJuYW1lcyI6WyJMZXR0ZXJzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ3b3JkIiwic2V0V29yZCIsInBpZCIsInF1ZXJ5IiwiZ29CYWNrIiwiYmFjayIsInVzZUVmZmVjdCIsIndvcmRGaW5kZXIiLCJzcGxpdCIsImxlbmd0aCIsImZhQW5nbGVMZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQ2pDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRGlDLGtCQUVUQyxzREFBUSxDQUFDLEVBQUQsQ0FGQztBQUFBLE1BRTFCQyxJQUYwQjtBQUFBLE1BRXBCQyxPQUZvQjs7QUFBQSxNQUd6QkMsR0FIeUIsR0FHakJMLE1BQU0sQ0FBQ00sS0FIVSxDQUd6QkQsR0FIeUI7O0FBS2pDLE1BQU1FLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDcEJQLFVBQU0sQ0FBQ1EsSUFBUDtBQUNBLEdBRkQ7O0FBSUFDLHlEQUFTLENBQUMsWUFBTTtBQUNmSixPQUFHLElBQUlELE9BQU8sQ0FBQ00sbUZBQVUsQ0FBQ0EsbUZBQVUsQ0FBQ0wsR0FBRyxDQUFDTSxLQUFKLENBQVUsRUFBVixDQUFELENBQVgsQ0FBWCxDQUFkO0FBQ0EsR0FGUSxFQUVOLENBQUNOLEdBQUQsQ0FGTSxDQUFUO0FBSUEsc0JBQ0MscUVBQUMsMERBQUQ7QUFBQSwyQkFDQztBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUEsZ0JBQ0VGLElBQUksQ0FBQ1MsTUFBTCxHQUFjLENBQWQsZ0JBQ0E7QUFBQSxnQ0FDQztBQUFLLG1CQUFTLEVBQUMsb0VBQWY7QUFBQSxrQ0FDQztBQUFLLHFCQUFTLEVBQUMsNERBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZUFJQztBQUFLLHFCQUFTLEVBQUMsc0RBQWY7QUFBQSxzQkFBdUVUO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBT0M7QUFBSyxtQkFBUyxFQUFDLDhDQUFmO0FBQUEsaUNBQ0M7QUFDQyxxQkFBUyxFQUFDLHNGQURYO0FBRUMsbUJBQU8sRUFBRUksTUFGVjtBQUFBLG1DQUlDLHFFQUFDLDhFQUFEO0FBQWlCLGtCQUFJLEVBQUVNLDZFQUF2QjtBQUFvQyx1QkFBUyxFQUFDLGNBQTlDO0FBQTZELGtCQUFJLEVBQUM7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBEO0FBQUEsc0JBREEsZ0JBa0JBO0FBQUssaUJBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBMEJBOztHQXZDdUJkLE87VUFDUkUscUQ7OztLQURRRixPIiwiZmlsZSI6Ii4vcGFnZXMvbGV0dGVycy9bcGlkXS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB3b3JkRmluZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZnVuY3Rpb25zL3dvcmRGaW5kZXIuanMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhQW5nbGVMZWZ0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExldHRlcnMoKSB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXHRjb25zdCBbd29yZCwgc2V0V29yZF0gPSB1c2VTdGF0ZShbXSk7XG5cdGNvbnN0IHsgcGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cblx0Y29uc3QgZ29CYWNrID0gKCkgPT4ge1xuXHRcdHJvdXRlci5iYWNrKCk7XG5cdH07XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRwaWQgJiYgc2V0V29yZCh3b3JkRmluZGVyKHdvcmRGaW5kZXIocGlkLnNwbGl0KCcnKSkpKTtcblx0fSwgW3BpZF0pO1xuXG5cdHJldHVybiAoXG5cdFx0PExheW91dD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsJz5cblx0XHRcdFx0e3dvcmQubGVuZ3RoID4gMCA/IChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9JyB3LWZ1bGwgaC1sYXlvdXQtcmVzLXRvcCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXJlZC00MDAgZm9udC1zZXJpZiB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBwYi0yJz5cblx0XHRcdFx0XHRcdFx0XHRSZXN1bHQ6XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ibGFjayBmb250LXNlcmlmIHRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlcic+e3dvcmR9PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC0yNCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG5cdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2gtMTYgdy0xNiBzaGFkb3ctbWVkaXVtIHJvdW5kZWQtZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlcidcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtnb0JhY2t9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQW5nbGVMZWZ0fSBjbGFzc05hbWU9J3RleHQtcmVkLTQwMCcgc2l6ZT0nbGcnIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9JyB0ZXh0LTN4bCBmb250LXNlcmlmJz5Mb2FkaW5nLi4uPC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0xheW91dD5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/letters/[pid].jsx\n");

/***/ })

})