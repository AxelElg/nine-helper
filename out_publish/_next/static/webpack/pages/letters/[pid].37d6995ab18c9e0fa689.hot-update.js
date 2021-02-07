webpackHotUpdate_N_E("pages/letters/[pid]",{

/***/ "./components/data/data.json":
false,

/***/ "./components/functions/wordFinder.js":
false,

/***/ "./pages/letters/[pid].jsx":
/*!*********************************!*\
  !*** ./pages/letters/[pid].jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Letters; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\nvar _jsxFileName = \"/Users/axelelgenstierna/Git-repos/nine-helper/pages/letters/[pid].jsx\",\n    _s = $RefreshSig$();\n\n // import wordFinder from '../../components/functions/wordFinder.js';\n\n\n\n\n\nfunction Letters() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])([]),\n      word = _useState[0],\n      setWord = _useState[1];\n\n  var pid = router.query.pid;\n\n  var goBack = function goBack() {\n    router.back();\n  };\n\n  var wordFinder = function wordFinder(arr) {\n    return data.filter(function (word) {\n      var arrCopy = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr.join(''));\n\n      return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(word).every(function (letter) {\n        if (arrCopy.includes(letter)) {\n          arrCopy.splice(arrCopy.indexOf(letter), 1);\n          return true;\n        }\n      });\n    }).sort(function (a, b) {\n      return b.length - a.length;\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useEffect\"])(function () {\n    pid && setWord(wordFinder(wordFinder(pid.split(''))));\n  }, [pid]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"w-full h-full\",\n      children: word.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \" w-full h-layout-res-top flex flex-col justify-center items-center\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"text-red-400 font-serif text-xl font-bold text-center pb-2\",\n            children: \"Result:\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 8\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"text-black font-serif text-3xl font-bold text-center\",\n            children: word\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 8\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-full h-24 flex justify-center items-center\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"h-16 w-16 shadow-medium rounded-full flex justify-center items-center cursor-pointer\",\n            onClick: goBack,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__[\"FontAwesomeIcon\"], {\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__[\"faAngleLeft\"],\n              className: \"text-red-400\",\n              size: \"lg\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 9\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 8\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 7\n        }, this)]\n      }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \" text-3xl font-serif\",\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 6\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Letters, \"k1d+LMHGJU0qWccsN6LPcfW0X7s=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = Letters;\n\nvar _c;\n\n$RefreshReg$(_c, \"Letters\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGV0dGVycy9bcGlkXS5qc3g/NDBmOSJdLCJuYW1lcyI6WyJMZXR0ZXJzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ3b3JkIiwic2V0V29yZCIsInBpZCIsInF1ZXJ5IiwiZ29CYWNrIiwiYmFjayIsIndvcmRGaW5kZXIiLCJhcnIiLCJkYXRhIiwiZmlsdGVyIiwiYXJyQ29weSIsImpvaW4iLCJldmVyeSIsImxldHRlciIsImluY2x1ZGVzIiwic3BsaWNlIiwiaW5kZXhPZiIsInNvcnQiLCJhIiwiYiIsImxlbmd0aCIsInVzZUVmZmVjdCIsInNwbGl0IiwiZmFBbmdsZUxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFDakMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEaUMsa0JBRVRDLHNEQUFRLENBQUMsRUFBRCxDQUZDO0FBQUEsTUFFMUJDLElBRjBCO0FBQUEsTUFFcEJDLE9BRm9COztBQUFBLE1BR3pCQyxHQUh5QixHQUdqQkwsTUFBTSxDQUFDTSxLQUhVLENBR3pCRCxHQUh5Qjs7QUFLakMsTUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNwQlAsVUFBTSxDQUFDUSxJQUFQO0FBQ0EsR0FGRDs7QUFJQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxHQUFHLEVBQUk7QUFDekIsV0FBT0MsSUFBSSxDQUNUQyxNQURLLENBQ0UsVUFBQVQsSUFBSSxFQUFJO0FBQ2YsVUFBTVUsT0FBTyxHQUFHLDZGQUFJSCxHQUFHLENBQUNJLElBQUosQ0FBUyxFQUFULENBQVAsQ0FBYjs7QUFDQSxhQUFPLDZGQUFJWCxJQUFKLEVBQVVZLEtBQVYsQ0FBZ0IsVUFBQUMsTUFBTSxFQUFJO0FBQ2hDLFlBQUlILE9BQU8sQ0FBQ0ksUUFBUixDQUFpQkQsTUFBakIsQ0FBSixFQUE4QjtBQUM3QkgsaUJBQU8sQ0FBQ0ssTUFBUixDQUFlTCxPQUFPLENBQUNNLE9BQVIsQ0FBZ0JILE1BQWhCLENBQWYsRUFBd0MsQ0FBeEM7QUFDQSxpQkFBTyxJQUFQO0FBQ0E7QUFDRCxPQUxNLENBQVA7QUFNQSxLQVRLLEVBVUxJLElBVkssQ0FVQSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxhQUFVQSxDQUFDLENBQUNDLE1BQUYsR0FBV0YsQ0FBQyxDQUFDRSxNQUF2QjtBQUFBLEtBVkEsQ0FBUDtBQVdBLEdBWkQ7O0FBY0FDLHlEQUFTLENBQUMsWUFBTTtBQUNmbkIsT0FBRyxJQUFJRCxPQUFPLENBQUNLLFVBQVUsQ0FBQ0EsVUFBVSxDQUFDSixHQUFHLENBQUNvQixLQUFKLENBQVUsRUFBVixDQUFELENBQVgsQ0FBWCxDQUFkO0FBQ0EsR0FGUSxFQUVOLENBQUNwQixHQUFELENBRk0sQ0FBVDtBQUlBLHNCQUNDLHFFQUFDLDBEQUFEO0FBQUEsMkJBQ0M7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBLGdCQUNFRixJQUFJLENBQUNvQixNQUFMLEdBQWMsQ0FBZCxnQkFDQTtBQUFBLGdDQUNDO0FBQUssbUJBQVMsRUFBQyxvRUFBZjtBQUFBLGtDQUNDO0FBQUsscUJBQVMsRUFBQyw0REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxlQUlDO0FBQUsscUJBQVMsRUFBQyxzREFBZjtBQUFBLHNCQUF1RXBCO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBT0M7QUFBSyxtQkFBUyxFQUFDLDhDQUFmO0FBQUEsaUNBQ0M7QUFDQyxxQkFBUyxFQUFDLHNGQURYO0FBRUMsbUJBQU8sRUFBRUksTUFGVjtBQUFBLG1DQUlDLHFFQUFDLDhFQUFEO0FBQWlCLGtCQUFJLEVBQUVtQiw2RUFBdkI7QUFBb0MsdUJBQVMsRUFBQyxjQUE5QztBQUE2RCxrQkFBSSxFQUFDO0FBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRDtBQUFBLHNCQURBLGdCQWtCQTtBQUFLLGlCQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQTBCQTs7R0FyRHVCM0IsTztVQUNSRSxxRDs7O0tBRFFGLE8iLCJmaWxlIjoiLi9wYWdlcy9sZXR0ZXJzL1twaWRdLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuLy8gaW1wb3J0IHdvcmRGaW5kZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mdW5jdGlvbnMvd29yZEZpbmRlci5qcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFBbmdsZUxlZnQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGV0dGVycygpIHtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cdGNvbnN0IFt3b3JkLCBzZXRXb3JkXSA9IHVzZVN0YXRlKFtdKTtcblx0Y29uc3QgeyBwaWQgfSA9IHJvdXRlci5xdWVyeTtcblxuXHRjb25zdCBnb0JhY2sgPSAoKSA9PiB7XG5cdFx0cm91dGVyLmJhY2soKTtcblx0fTtcblxuXHRjb25zdCB3b3JkRmluZGVyID0gYXJyID0+IHtcblx0XHRyZXR1cm4gZGF0YVxuXHRcdFx0LmZpbHRlcih3b3JkID0+IHtcblx0XHRcdFx0Y29uc3QgYXJyQ29weSA9IFsuLi5hcnIuam9pbignJyldO1xuXHRcdFx0XHRyZXR1cm4gWy4uLndvcmRdLmV2ZXJ5KGxldHRlciA9PiB7XG5cdFx0XHRcdFx0aWYgKGFyckNvcHkuaW5jbHVkZXMobGV0dGVyKSkge1xuXHRcdFx0XHRcdFx0YXJyQ29weS5zcGxpY2UoYXJyQ29weS5pbmRleE9mKGxldHRlciksIDEpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pXG5cdFx0XHQuc29ydCgoYSwgYikgPT4gYi5sZW5ndGggLSBhLmxlbmd0aCk7XG5cdH07XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRwaWQgJiYgc2V0V29yZCh3b3JkRmluZGVyKHdvcmRGaW5kZXIocGlkLnNwbGl0KCcnKSkpKTtcblx0fSwgW3BpZF0pO1xuXG5cdHJldHVybiAoXG5cdFx0PExheW91dD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC1mdWxsJz5cblx0XHRcdFx0e3dvcmQubGVuZ3RoID4gMCA/IChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9JyB3LWZ1bGwgaC1sYXlvdXQtcmVzLXRvcCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXJlZC00MDAgZm9udC1zZXJpZiB0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBwYi0yJz5cblx0XHRcdFx0XHRcdFx0XHRSZXN1bHQ6XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ibGFjayBmb250LXNlcmlmIHRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlcic+e3dvcmR9PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC0yNCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XG5cdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2gtMTYgdy0xNiBzaGFkb3ctbWVkaXVtIHJvdW5kZWQtZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlcidcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtnb0JhY2t9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQW5nbGVMZWZ0fSBjbGFzc05hbWU9J3RleHQtcmVkLTQwMCcgc2l6ZT0nbGcnIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC8+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9JyB0ZXh0LTN4bCBmb250LXNlcmlmJz5Mb2FkaW5nLi4uPC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0xheW91dD5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/letters/[pid].jsx\n");

/***/ })

})