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
exports.id = "pages/profile";
exports.ids = ["pages/profile"];
exports.modules = {

/***/ "./public/Nav.module.css":
/*!*******************************!*\
  !*** ./public/Nav.module.css ***!
  \*******************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"navbar\": \"Nav_navbar__IUbbF\",\n\t\"logo-container\": \"Nav_logo-container__T9RS9\",\n\t\"links-container\": \"Nav_links-container__4He_q\",\n\t\"link\": \"Nav_link__VOhJP\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvTmF2Lm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3B1YmxpYy9OYXYubW9kdWxlLmNzcz84NjIwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdmJhclwiOiBcIk5hdl9uYXZiYXJfX0lVYmJGXCIsXG5cdFwibG9nby1jb250YWluZXJcIjogXCJOYXZfbG9nby1jb250YWluZXJfX1Q5UlM5XCIsXG5cdFwibGlua3MtY29udGFpbmVyXCI6IFwiTmF2X2xpbmtzLWNvbnRhaW5lcl9fNEhlX3FcIixcblx0XCJsaW5rXCI6IFwiTmF2X2xpbmtfX1ZPaEpQXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./public/Nav.module.css\n");

/***/ }),

/***/ "./src/components/navigation-bar.tsx":
/*!*******************************************!*\
  !*** ./src/components/navigation-bar.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("var _links_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache;\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NavigationBar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_Nav_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/Nav.module.css */ \"./public/Nav.module.css\");\n/* harmony import */ var _public_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_Nav_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _links_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./links.json */ \"./src/components/links.json\");\n\n\n\n\nconst linksString = JSON.stringify(/*#__PURE__*/ (_links_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache || (_links_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache = __webpack_require__.t(_links_json__WEBPACK_IMPORTED_MODULE_2__, 2))));\nconst links = JSON.parse(linksString).links;\nfunction Links({ links  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_public_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"links-container\"]),\n        children: links.map((link)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_public_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().link),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: link.href,\n                    children: link.label\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\18589\\\\Desktop\\\\NodeTest - Copy\\\\tendo\\\\tendo\\\\src\\\\main\\\\frontend\\\\src\\\\components\\\\navigation-bar.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 25\n                }, this)\n            }, link.href, false, {\n                fileName: \"C:\\\\Users\\\\18589\\\\Desktop\\\\NodeTest - Copy\\\\tendo\\\\tendo\\\\src\\\\main\\\\frontend\\\\src\\\\components\\\\navigation-bar.tsx\",\n                lineNumber: 17,\n                columnNumber: 21\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\18589\\\\Desktop\\\\NodeTest - Copy\\\\tendo\\\\tendo\\\\src\\\\main\\\\frontend\\\\src\\\\components\\\\navigation-bar.tsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n}\nfunction NavigationBar() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_public_Nav_module_css__WEBPACK_IMPORTED_MODULE_3___default().navbar),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Links, {\n            links: links\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\18589\\\\Desktop\\\\NodeTest - Copy\\\\tendo\\\\tendo\\\\src\\\\main\\\\frontend\\\\src\\\\components\\\\navigation-bar.tsx\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\18589\\\\Desktop\\\\NodeTest - Copy\\\\tendo\\\\tendo\\\\src\\\\main\\\\frontend\\\\src\\\\components\\\\navigation-bar.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLWJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDdUI7QUFDWjtBQUVyQyxNQUFNRyxXQUFXLEdBQUdDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSCwyTUFBSSxDQUFDO0FBQ3hDLE1BQU1JLEtBQUssR0FBR0YsSUFBSSxDQUFDRyxLQUFLLENBQUNKLFdBQVcsQ0FBQyxDQUFDRyxLQUFLO0FBTTNDLFNBQVNFLEtBQUssQ0FBQyxFQUFDRixLQUFLLEdBQXNCLEVBQWU7SUFDdEQscUJBQ0ksOERBQUNHLEtBQUc7UUFBQ0MsU0FBUyxFQUFFVCxrRkFBeUI7a0JBQ3BDSyxLQUFLLENBQUNLLEdBQUcsQ0FBQyxDQUFDQyxJQUFVLEdBQUs7WUFDdkIscUJBQ0ksOERBQUNILEtBQUc7Z0JBQWlCQyxTQUFTLEVBQUVULG9FQUFjOzBCQUMxQyw0RUFBQ1ksR0FBQztvQkFBQ0MsSUFBSSxFQUFFRixJQUFJLENBQUNFLElBQUk7OEJBQ2JGLElBQUksQ0FBQ0csS0FBSzs7Ozs7d0JBQ1g7ZUFIRUgsSUFBSSxDQUFDRSxJQUFJOzs7O29CQUliLENBQ1Q7UUFDTCxDQUFDLENBQUM7Ozs7O1lBQ0EsQ0FDVDtBQUNMLENBQUM7QUFFYyxTQUFTRSxhQUFhLEdBQWdCO0lBQ2pELHFCQUNJLDhEQUFDQyxLQUFHO1FBQUNQLFNBQVMsRUFBRVQsc0VBQWE7a0JBQ3pCLDRFQUFDTyxLQUFLO1lBQUNGLEtBQUssRUFBRUEsS0FBSzs7Ozs7Z0JBQUk7Ozs7O1lBQ3JCLENBQ1I7QUFDTixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLWJhci50c3g/YTJhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3B1YmxpYy9OYXYubW9kdWxlLmNzcyc7XHJcbmltcG9ydCAqIGFzIGRhdGEgZnJvbSAnLi9saW5rcy5qc29uJztcclxuaW1wb3J0IHtMaW5rfSBmcm9tIFwiLi4vbW9kZWwvbGlua1wiO1xyXG5jb25zdCBsaW5rc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG5jb25zdCBsaW5rcyA9IEpTT04ucGFyc2UobGlua3NTdHJpbmcpLmxpbmtzO1xyXG5cclxuaW50ZXJmYWNlIE5hdmlnYXRpb25CYXJQcm9wcyB7XHJcbiAgICBsaW5rczogTGlua1tdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMaW5rcyh7bGlua3N9IDogTmF2aWdhdGlvbkJhclByb3BzKTogSlNYLkVsZW1lbnQge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzWydsaW5rcy1jb250YWluZXInXX0+XHJcbiAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbms6IExpbmspID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpbmsuaHJlZn0gY2xhc3NOYW1lPXtzdHlsZXNbJ2xpbmsnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2xpbmsuaHJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGluay5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbkJhcigpOiBKU1guRWxlbWVudCB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyfT5cclxuICAgICAgICAgICAgPExpbmtzIGxpbmtzPXtsaW5rc30gLz5cclxuICAgICAgICA8L25hdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJkYXRhIiwibGlua3NTdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwibGlua3MiLCJwYXJzZSIsIkxpbmtzIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwibGluayIsImEiLCJocmVmIiwibGFiZWwiLCJOYXZpZ2F0aW9uQmFyIiwibmF2IiwibmF2YmFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/navigation-bar.tsx\n");

/***/ }),

/***/ "./src/pages/profile/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/profile/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Profile)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_navigation_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navigation-bar */ \"./src/components/navigation-bar.tsx\");\n\n\n\nfunction Profile() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navigation_bar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\18589\\\\Desktop\\\\NodeTest - Copy\\\\tendo\\\\tendo\\\\src\\\\main\\\\frontend\\\\src\\\\pages\\\\profile\\\\index.tsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Bye\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\18589\\\\Desktop\\\\NodeTest - Copy\\\\tendo\\\\tendo\\\\src\\\\main\\\\frontend\\\\src\\\\pages\\\\profile\\\\index.tsx\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZmlsZS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDa0M7QUFHN0MsU0FBU0UsT0FBTyxHQUFHO0lBRTlCLHFCQUNJOzswQkFDSSw4REFBQ0Qsa0VBQWE7Ozs7b0JBQUU7MEJBQ2hCLDhEQUFDRSxJQUFFOzBCQUFDLEtBQUc7Ozs7O29CQUFLOztvQkFDYixDQUNMO0FBQ04sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL3Byb2ZpbGUvaW5kZXgudHN4P2Q1NmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi1iYXJcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbkJhci8+XHJcbiAgICAgICAgICAgIDxoMT5CeWU8L2gxPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdmlnYXRpb25CYXIiLCJQcm9maWxlIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/profile/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./src/components/links.json":
/*!***********************************!*\
  !*** ./src/components/links.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"links":[{"label":"Home","href":"/"},{"label":"Feedback","href":"/feedback"}]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/profile/index.tsx"));
module.exports = __webpack_exports__;

})();