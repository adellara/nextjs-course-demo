"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction HomePage(props) {\n    //Karena pake getStaticProps jadi gausa useEffect useState\n    // const [loadedMeetups,setLoadedMeetups]=useState([])\n    // useEffect(()=>{\n    //     setLoadedMeetups(DUMMY_MEETUPS)\n    // },[])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n                fileName: \"D:\\\\belajar\\\\Udemy\\\\react-complete-guide\\\\code\\\\biggerproject-nodejs\\\\pages\\\\index.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                meetups: props.meetups\n            }, void 0, false, {\n                fileName: \"D:\\\\belajar\\\\Udemy\\\\react-complete-guide\\\\code\\\\biggerproject-nodejs\\\\pages\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\belajar\\\\Udemy\\\\react-complete-guide\\\\code\\\\biggerproject-nodejs\\\\pages\\\\index.js\",\n        lineNumber: 14,\n        columnNumber: 12\n    }, this);\n}\n_c = HomePage;\nvar __N_SSG = true;\n//CARA KEDUA :generated every incoming request (cara pertama is better)\n// export async function getServerSideProps(context){\n//     const req = context.req cek ada request sama response ga\n//     const res = context.res\n//     return{\n//         props:{\n//             meetups:DUMMY_MEETUPS\n//         }\n//     }\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTZCO0FBQzRCO0FBRXhCO0FBRWpDLFNBQVNHLFFBQVEsQ0FBQ0MsS0FBSyxFQUFFO0lBQ3JCLDBEQUEwRDtJQUMxRCxzREFBc0Q7SUFFdEQsa0JBQWtCO0lBQ2xCLHNDQUFzQztJQUN0QyxRQUFRO0lBRVIscUJBQU8sOERBQUNGLDJDQUFROzswQkFDWiw4REFBQ0Ysa0RBQUk7Ozs7b0JBRUU7MEJBQ1AsOERBQUNDLHNFQUFVO2dCQUFDSSxPQUFPLEVBQUVELEtBQUssQ0FBQ0MsT0FBTzs7Ozs7b0JBQUc7Ozs7OztZQUM5QjtDQUNkO0FBZFFGLEtBQUFBLFFBQVE7O0FBNkNqQix1RUFBdUU7QUFDdkUscURBQXFEO0FBQ3JELCtEQUErRDtBQUMvRCw4QkFBOEI7QUFFOUIsY0FBYztBQUNkLGtCQUFrQjtBQUNsQixvQ0FBb0M7QUFDcEMsWUFBWTtBQUNaLFFBQVE7QUFDUixJQUFJO0FBRUosK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0J1xyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcclxuICAgIC8vS2FyZW5hIHBha2UgZ2V0U3RhdGljUHJvcHMgamFkaSBnYXVzYSB1c2VFZmZlY3QgdXNlU3RhdGVcclxuICAgIC8vIGNvbnN0IFtsb2FkZWRNZWV0dXBzLHNldExvYWRlZE1lZXR1cHNdPXVzZVN0YXRlKFtdKVxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgLy8gICAgIHNldExvYWRlZE1lZXR1cHMoRFVNTVlfTUVFVFVQUylcclxuICAgIC8vIH0sW10pXHJcblxyXG4gICAgcmV0dXJuIDxGcmFnbWVudD5cclxuICAgICAgICA8SGVhZD5cclxuXHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9Lz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbn1cclxuXHJcbi8vY2FsbCBzdGF0aWMgcHJvcHMgYmVmb3JlIHJ1bm5pbmcgdGhlIGNvbXBvbmVudHNcclxuLy9jYW4gYmUgYXN5bmMsIHdhaXQgdW50aWwgc3RhdGljIHByb3BzIGZldGNoZWQgdGhlbiBydW4gdGhlIGNvbXBvbmVudFxyXG4vL2lzIGNhbGxlZCBkdXJpbmcgdGhlIGJ1aWxkIHByb2NjZXNzLCBuZXZlciBzYW1wZSBkaSBtYWNoaW5lIHVzZXIvY2xpZW50IHNpZGVcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XHJcbiAgICAvL0ZFVENIIERBVEEgRlJPTSBBUElcclxuICAgIC8vaGFydXMgcmV0dXJuIHBvcnBzXHJcbiAgICBcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vYWRlbGw6Y3VybHloYWlyQGNsdXN0ZXIwLnFzcjM1bWwubW9uZ29kYi5uZXQvbWVldFVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKClcclxuXHJcbiAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXRVcHMnKTtcclxuXHJcbiAgICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTsgLy9yZXR1cm4gYXJyYXkgb2YgbWVldHVwc1xyXG5cclxuICAgIGNsaWVudC5jbG9zZSgpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgIG1lZXR1cHM6IG1lZXR1cHMubWFwKChtZWV0dXApPT4oe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6bWVldHVwLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6bWVldHVwLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczptZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGlkOm1lZXR1cC5faWQudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJldmFsaWRhdGU6MTAgLy8xMHMgdW50aWwgbmV4dCBqcyBjaGVjayBpcyB0aGVyZSBhbnkgcmVxdWVzdHMgY29taW5nIGluICh1cGRhdGUgZXZlcnkgbmV3ZXN0IGRhdGEgdXBkYXRlZClcclxuICAgIH1cclxufVxyXG5cclxuLy9DQVJBIEtFRFVBIDpnZW5lcmF0ZWQgZXZlcnkgaW5jb21pbmcgcmVxdWVzdCAoY2FyYSBwZXJ0YW1hIGlzIGJldHRlcilcclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcclxuLy8gICAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxIGNlayBhZGEgcmVxdWVzdCBzYW1hIHJlc3BvbnNlIGdhXHJcbi8vICAgICBjb25zdCByZXMgPSBjb250ZXh0LnJlc1xyXG5cclxuLy8gICAgIHJldHVybntcclxuLy8gICAgICAgICBwcm9wczp7XHJcbi8vICAgICAgICAgICAgIG1lZXR1cHM6RFVNTVlfTUVFVFVQU1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sIm5hbWVzIjpbIkhlYWQiLCJNZWV0dXBMaXN0IiwiRnJhZ21lbnQiLCJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});