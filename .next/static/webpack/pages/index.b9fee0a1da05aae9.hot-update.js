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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\n\nvar DUMMY_MEETUPS = [\n    {\n        id: \"m1\",\n        title: \"A First Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"Some address 5, 12345 Some City\",\n        description: \"This is a first meetup!\"\n    },\n    {\n        id: \"m2\",\n        title: \"A Second Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"Some address 10, 12345 Some City\",\n        description: \"This is a second meetup!\"\n    }\n];\nfunction HomePage(props) {\n    //Karena pake getStaticProps jadi gausa useEffect useState\n    // const [loadedMeetups,setLoadedMeetups]=useState([])\n    // useEffect(()=>{\n    //     setLoadedMeetups(DUMMY_MEETUPS)\n    // },[])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        meetups: props.meetups\n    }, void 0, false, {\n        fileName: \"D:\\\\belajar\\\\Udemy\\\\react-complete-guide\\\\code\\\\biggerproject-nodejs\\\\pages\\\\index.js\",\n        lineNumber: 30,\n        columnNumber: 12\n    }, this);\n}\n_c = HomePage;\nvar __N_SSG = true;\n//CARA KEDUA :generated every incoming request (cara pertama is better)\n// export async function getServerSideProps(context){\n//     const req = context.req cek ada request sama response ga\n//     const res = context.res\n//     return{\n//         props:{\n//             meetups:DUMMY_MEETUPS\n//         }\n//     }\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUE0QztBQUNhO0FBR3pELElBQU1HLGFBQWEsR0FBRztJQUNsQjtRQUNJQyxFQUFFLEVBQUUsSUFBSTtRQUNSQyxLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCQyxLQUFLLEVBQUUsd0hBQXdIO1FBQy9IQyxPQUFPLEVBQUUsaUNBQWlDO1FBQzFDQyxXQUFXLEVBQUUseUJBQXlCO0tBQ3pDO0lBQ0Q7UUFDSUosRUFBRSxFQUFFLElBQUk7UUFDUkMsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QkMsS0FBSyxFQUFFLHdIQUF3SDtRQUMvSEMsT0FBTyxFQUFFLGtDQUFrQztRQUMzQ0MsV0FBVyxFQUFFLDBCQUEwQjtLQUMxQztDQUNBO0FBRUwsU0FBU0MsUUFBUSxDQUFDQyxLQUFLLEVBQUU7SUFDckIsMERBQTBEO0lBQzFELHNEQUFzRDtJQUV0RCxrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLFFBQVE7SUFFUixxQkFBTyw4REFBQ1Isc0VBQVU7UUFBQ1MsT0FBTyxFQUFFRCxLQUFLLENBQUNDLE9BQU87Ozs7O1lBQUc7Q0FDL0M7QUFUUUYsS0FBQUEsUUFBUTs7QUF5Q2pCLHVFQUF1RTtBQUN2RSxxREFBcUQ7QUFDckQsK0RBQStEO0FBQy9ELDhCQUE4QjtBQUU5QixjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCLG9DQUFvQztBQUNwQyxZQUFZO0FBQ1osUUFBUTtBQUNSLElBQUk7QUFFSiwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QnXHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdtMScsXHJcbiAgICAgICAgdGl0bGU6ICdBIEZpcnN0IE1lZXR1cCcsXHJcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTI4MHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnJyxcclxuICAgICAgICBhZGRyZXNzOiAnU29tZSBhZGRyZXNzIDUsIDEyMzQ1IFNvbWUgQ2l0eScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgZmlyc3QgbWVldHVwISdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdtMicsXHJcbiAgICAgICAgdGl0bGU6ICdBIFNlY29uZCBNZWV0dXAnLFxyXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnLzEyODBweC1TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZycsXHJcbiAgICAgICAgYWRkcmVzczogJ1NvbWUgYWRkcmVzcyAxMCwgMTIzNDUgU29tZSBDaXR5JyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBzZWNvbmQgbWVldHVwISdcclxuICAgIH1cclxuICAgIF07XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG4gICAgLy9LYXJlbmEgcGFrZSBnZXRTdGF0aWNQcm9wcyBqYWRpIGdhdXNhIHVzZUVmZmVjdCB1c2VTdGF0ZVxyXG4gICAgLy8gY29uc3QgW2xvYWRlZE1lZXR1cHMsc2V0TG9hZGVkTWVldHVwc109dXNlU3RhdGUoW10pXHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpPT57XHJcbiAgICAvLyAgICAgc2V0TG9hZGVkTWVldHVwcyhEVU1NWV9NRUVUVVBTKVxyXG4gICAgLy8gfSxbXSlcclxuXHJcbiAgICByZXR1cm4gPE1lZXR1cExpc3QgbWVldHVwcz17cHJvcHMubWVldHVwc30vPlxyXG59XHJcblxyXG4vL2NhbGwgc3RhdGljIHByb3BzIGJlZm9yZSBydW5uaW5nIHRoZSBjb21wb25lbnRzXHJcbi8vY2FuIGJlIGFzeW5jLCB3YWl0IHVudGlsIHN0YXRpYyBwcm9wcyBmZXRjaGVkIHRoZW4gcnVuIHRoZSBjb21wb25lbnRcclxuLy9pcyBjYWxsZWQgZHVyaW5nIHRoZSBidWlsZCBwcm9jY2VzcywgbmV2ZXIgc2FtcGUgZGkgbWFjaGluZSB1c2VyL2NsaWVudCBzaWRlXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xyXG4gICAgLy9GRVRDSCBEQVRBIEZST00gQVBJXHJcbiAgICAvL2hhcnVzIHJldHVybiBwb3Jwc1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL2FkZWxsOmN1cmx5aGFpckBjbHVzdGVyMC5xc3IzNW1sLm1vbmdvZGIubmV0L21lZXRVcHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5Jyk7XHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpXHJcblxyXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0VXBzJyk7XHJcblxyXG4gICAgY29uc3QgbWVldHVwcyA9IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7IC8vcmV0dXJuIGFycmF5IG9mIG1lZXR1cHNcclxuICAgIGNvbnNvbGUubG9nKG1lZXR1cHMpXHJcblxyXG4gICAgY2xpZW50LmNsb3NlKClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOntcclxuICAgICAgICAgICAgbWVldHVwczogbWVldHVwcy5tYXAoKG1lZXR1cCk9Pih7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTptZWV0dXAudGl0bGUsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTptZWV0dXAuaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOm1lZXR1cC5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgaWQ6bWVldHVwLl9pZC50b1N0cmluZygpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmV2YWxpZGF0ZToxMCAvLzEwcyB1bnRpbCBuZXh0IGpzIGNoZWNrIGlzIHRoZXJlIGFueSByZXF1ZXN0cyBjb21pbmcgaW4gKHVwZGF0ZSBldmVyeSBuZXdlc3QgZGF0YSB1cGRhdGVkKVxyXG4gICAgfVxyXG59XHJcblxyXG4vL0NBUkEgS0VEVUEgOmdlbmVyYXRlZCBldmVyeSBpbmNvbWluZyByZXF1ZXN0IChjYXJhIHBlcnRhbWEgaXMgYmV0dGVyKVxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpe1xyXG4vLyAgICAgY29uc3QgcmVxID0gY29udGV4dC5yZXEgY2VrIGFkYSByZXF1ZXN0IHNhbWEgcmVzcG9uc2UgZ2FcclxuLy8gICAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzXHJcblxyXG4vLyAgICAgcmV0dXJue1xyXG4vLyAgICAgICAgIHByb3BzOntcclxuLy8gICAgICAgICAgICAgbWVldHVwczpEVU1NWV9NRUVUVVBTXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNZWV0dXBMaXN0IiwiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});