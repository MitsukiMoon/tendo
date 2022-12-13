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
exports.id = "pages/patient/[patientId]";
exports.ids = ["pages/patient/[patientId]"];
exports.modules = {

/***/ "./src/pages/patient/[patientId]/index.tsx":
/*!*************************************************!*\
  !*** ./src/pages/patient/[patientId]/index.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FeedbackForm),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction FeedbackForm({ data  }) {\n    console.log(data);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const appointments = data.appointments;\n    const { patientId  } = router.query;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: appointments.map((appointment)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: `/patient/${patientId}/appointment/${appointment.id}`,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \" \",\n                            appointment.id,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\18589\\\\Desktop\\\\NodeTest - Copy\\\\tendo\\\\tendo\\\\src\\\\main\\\\frontend\\\\src\\\\pages\\\\patient\\\\[patientId]\\\\index.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\18589\\\\Desktop\\\\NodeTest - Copy\\\\tendo\\\\tendo\\\\src\\\\main\\\\frontend\\\\src\\\\pages\\\\patient\\\\[patientId]\\\\index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                }, this)\n            }, appointment.id, false, {\n                fileName: \"C:\\\\Users\\\\18589\\\\Desktop\\\\NodeTest - Copy\\\\tendo\\\\tendo\\\\src\\\\main\\\\frontend\\\\src\\\\pages\\\\patient\\\\[patientId]\\\\index.tsx\",\n                lineNumber: 18,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\18589\\\\Desktop\\\\NodeTest - Copy\\\\tendo\\\\tendo\\\\src\\\\main\\\\frontend\\\\src\\\\pages\\\\patient\\\\[patientId]\\\\index.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\nasync function getStaticPaths() {\n    const res = await fetch(\"http://localhost:8080/api/v1/patient\");\n    const patients = await res.json();\n    const paths = patients.map((patient)=>({\n            params: {\n                patientId: patient.id.toString()\n            }\n        }));\n    return {\n        paths,\n        fallback: false\n    };\n}\nasync function getStaticProps({ params  }) {\n    const result = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`http://localhost:8080/api/v1/patient/${params.patientId}`);\n    const data = await result.data;\n    return {\n        props: {\n            data: data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcGF0aWVudC9bcGF0aWVudElkXS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUNYO0FBQ2Q7QUFLWCxTQUFTRyxZQUFZLENBQUMsRUFBRUMsSUFBSSxHQUFFLEVBQUU7SUFDN0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUMsQ0FBQztJQUNsQixNQUFNRyxNQUFNLEdBQUdOLHNEQUFTLEVBQUU7SUFDMUIsTUFBTU8sWUFBWSxHQUFHSixJQUFJLENBQUNJLFlBQVk7SUFDdEMsTUFBTSxFQUFFQyxTQUFTLEdBQUUsR0FBR0YsTUFBTSxDQUFDRyxLQUFLO0lBRWxDLHFCQUNFLDhEQUFDQyxLQUFHO2tCQUNESCxZQUFZLENBQUNJLEdBQUcsQ0FBQyxDQUFDQyxXQUF3QixHQUFLO1lBQzlDLHFCQUNFLDhEQUFDRixLQUFHOzBCQUNGLDRFQUFDRyxHQUFDO29CQUFDQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUVOLFNBQVMsQ0FBQyxhQUFhLEVBQUVJLFdBQVcsQ0FBQ0csRUFBRSxDQUFDLENBQUM7OEJBQzVELDRFQUFDQyxJQUFFOzs0QkFBQyxHQUFDOzRCQUFDSixXQUFXLENBQUNHLEVBQUU7NEJBQUMsR0FBQzs7Ozs7OzRCQUFLOzs7Ozt3QkFDekI7ZUFISUgsV0FBVyxDQUFDRyxFQUFFOzs7O29CQUlsQixDQUNOO1FBQ0osQ0FBQyxDQUFDOzs7OztZQUNFLENBQ047QUFDSixDQUFDO0FBRU0sZUFBZUUsY0FBYyxHQUFHO0lBQ3JDLE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsc0NBQXNDLENBQUM7SUFDL0QsTUFBTUMsUUFBUSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSSxFQUFFO0lBRWpDLE1BQU1DLEtBQUssR0FBR0YsUUFBUSxDQUFDVCxHQUFHLENBQUMsQ0FBQ1ksT0FBTyxHQUFNO1lBQ3ZDQyxNQUFNLEVBQUU7Z0JBQUVoQixTQUFTLEVBQUVlLE9BQU8sQ0FBQ1IsRUFBRSxDQUFDVSxRQUFRLEVBQUU7YUFBRTtTQUM3QyxFQUFFO0lBRUgsT0FBTztRQUFFSCxLQUFLO1FBQUVJLFFBQVEsRUFBRSxLQUFLO0tBQUUsQ0FBQztBQUNwQyxDQUFDO0FBRU0sZUFBZUMsY0FBYyxDQUFDLEVBQUVILE1BQU0sR0FBRSxFQUFFO0lBQy9DLE1BQU1JLE1BQU0sR0FBRyxNQUFNM0IsZ0RBQVMsQ0FDNUIsQ0FBQyxxQ0FBcUMsRUFBRXVCLE1BQU0sQ0FBQ2hCLFNBQVMsQ0FBQyxDQUFDLENBQzNEO0lBQ0QsTUFBTUwsSUFBSSxHQUFHLE1BQU15QixNQUFNLENBQUN6QixJQUFJO0lBRTlCLE9BQU87UUFDTDJCLEtBQUssRUFBRTtZQUNMM0IsSUFBSSxFQUFFQSxJQUFJO1NBQ1g7S0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL3BhdGllbnQvW3BhdGllbnRJZF0vaW5kZXgudHN4P2FmYjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgQWRkcmVzcywgQXBwb2ludG1lbnQsIENvbnRhY3QsIE1vZGVscyB9IGZyb20gXCIuLi8uLi8uLi9tb2RlbC9QYXRpZW50XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVsL2xpbmtcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uLy4uL3B1YmxpYy9OYXYubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZWVkYmFja0Zvcm0oeyBkYXRhIH0pIHtcbiAgY29uc29sZS5sb2coZGF0YSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBhcHBvaW50bWVudHMgPSBkYXRhLmFwcG9pbnRtZW50cztcbiAgY29uc3QgeyBwYXRpZW50SWQgfSA9IHJvdXRlci5xdWVyeTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7YXBwb2ludG1lbnRzLm1hcCgoYXBwb2ludG1lbnQ6IEFwcG9pbnRtZW50KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2FwcG9pbnRtZW50LmlkfT5cbiAgICAgICAgICAgIDxhIGhyZWY9e2AvcGF0aWVudC8ke3BhdGllbnRJZH0vYXBwb2ludG1lbnQvJHthcHBvaW50bWVudC5pZH1gfT5cbiAgICAgICAgICAgICAgPGgxPiB7YXBwb2ludG1lbnQuaWR9IDwvaDE+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvcGF0aWVudFwiKTtcbiAgY29uc3QgcGF0aWVudHMgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIGNvbnN0IHBhdGhzID0gcGF0aWVudHMubWFwKChwYXRpZW50KSA9PiAoe1xuICAgIHBhcmFtczogeyBwYXRpZW50SWQ6IHBhdGllbnQuaWQudG9TdHJpbmcoKSB9LFxuICB9KSk7XG5cbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvcGF0aWVudC8ke3BhcmFtcy5wYXRpZW50SWR9YFxuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzdWx0LmRhdGE7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YTogZGF0YSxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUm91dGVyIiwiYXhpb3MiLCJGZWVkYmFja0Zvcm0iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsImFwcG9pbnRtZW50cyIsInBhdGllbnRJZCIsInF1ZXJ5IiwiZGl2IiwibWFwIiwiYXBwb2ludG1lbnQiLCJhIiwiaHJlZiIsImlkIiwiaDEiLCJnZXRTdGF0aWNQYXRocyIsInJlcyIsImZldGNoIiwicGF0aWVudHMiLCJqc29uIiwicGF0aHMiLCJwYXRpZW50IiwicGFyYW1zIiwidG9TdHJpbmciLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwicmVzdWx0IiwiZ2V0IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/patient/[patientId]/index.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/patient/[patientId]/index.tsx"));
module.exports = __webpack_exports__;

})();