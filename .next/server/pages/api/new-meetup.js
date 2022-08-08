"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// define function contains server side code , will not appeared in client side\n// path : /api/new-meetup\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const { title , image , address , description  } = data;\n        //never run this code in the client side\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://adell:curlyhair@cluster0.qsr35ml.mongodb.net/meetUps?retryWrites=true&w=majority\");\n        const db = client.db();\n        const meetupsCollection = db.collection(\"meetUps\");\n        //insert object\n        const result = await meetupsCollection.insertOne(data);\n        console.log(result);\n        client.close() // close database after done using\n        ;\n        //201 : data inserted successfully status\n        res.status(201).json({\n            message: \"Meetup Inserted\"\n        }) // buat ngasih response yang direturn\n        ;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwrRUFBK0U7QUFDL0UseUJBQXlCO0FBRWE7QUFFdEMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUNDLEdBQUcsRUFBQztJQUMzQixJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBRyxNQUFNLEVBQUM7UUFDcEIsTUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQUk7UUFDckIsTUFBTSxFQUFDQyxLQUFLLEdBQUNDLEtBQUssR0FBQ0MsT0FBTyxHQUFDQyxXQUFXLEdBQUMsR0FBR0wsSUFBSTtRQUU5Qyx3Q0FBd0M7UUFDeEMsTUFBTU0sTUFBTSxHQUFHLE1BQU1YLHdEQUFtQixDQUFDLGdHQUFnRyxDQUFDO1FBQzFJLE1BQU1hLEVBQUUsR0FBR0YsTUFBTSxDQUFDRSxFQUFFLEVBQUU7UUFFdEIsTUFBTUMsaUJBQWlCLEdBQUdELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUVsRCxlQUFlO1FBQ2YsTUFBTUMsTUFBTSxHQUFHLE1BQU1GLGlCQUFpQixDQUFDRyxTQUFTLENBQUNaLElBQUksQ0FBQztRQUN0RGEsT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU0sQ0FBQyxDQUFDO1FBRXBCTCxNQUFNLENBQUNTLEtBQUssRUFBRSxDQUFDLGtDQUFrQzs7UUFFakQseUNBQXlDO1FBQ3pDakIsR0FBRyxDQUFDa0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBQ0MsT0FBTyxFQUFDLGlCQUFpQjtTQUFDLENBQUMsQ0FBQyxxQ0FBcUM7O0tBQzFGO0NBQ0o7QUFFRCxpRUFBZXRCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz83Mzk0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGRlZmluZSBmdW5jdGlvbiBjb250YWlucyBzZXJ2ZXIgc2lkZSBjb2RlICwgd2lsbCBub3QgYXBwZWFyZWQgaW4gY2xpZW50IHNpZGVcclxuLy8gcGF0aCA6IC9hcGkvbmV3LW1lZXR1cFxyXG5cclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEscmVzKXtcclxuICAgIGlmIChyZXEubWV0aG9kPT09J1BPU1QnKXtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcbiAgICAgICAgY29uc3Qge3RpdGxlLGltYWdlLGFkZHJlc3MsZGVzY3JpcHRpb259ID0gZGF0YVxyXG5cclxuICAgICAgICAvL25ldmVyIHJ1biB0aGlzIGNvZGUgaW4gdGhlIGNsaWVudCBzaWRlXHJcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9hZGVsbDpjdXJseWhhaXJAY2x1c3RlcjAucXNyMzVtbC5tb25nb2RiLm5ldC9tZWV0VXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScpO1xyXG4gICAgICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKClcclxuXHJcbiAgICAgICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0VXBzJyk7XHJcblxyXG4gICAgICAgIC8vaW5zZXJ0IG9iamVjdFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmluc2VydE9uZShkYXRhKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG4gICAgICAgIGNsaWVudC5jbG9zZSgpIC8vIGNsb3NlIGRhdGFiYXNlIGFmdGVyIGRvbmUgdXNpbmdcclxuXHJcbiAgICAgICAgLy8yMDEgOiBkYXRhIGluc2VydGVkIHN1Y2Nlc3NmdWxseSBzdGF0dXNcclxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7bWVzc2FnZTonTWVldHVwIEluc2VydGVkJ30pIC8vIGJ1YXQgbmdhc2loIHJlc3BvbnNlIHlhbmcgZGlyZXR1cm5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiY2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY29uc29sZSIsImxvZyIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();