"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/patient/[patientId]/appointment/[appointmentId]",{

/***/ "./src/pages/patient/[patientId]/appointment/[appointmentId]/index.tsx":
/*!*****************************************************************************!*\
  !*** ./src/pages/patient/[patientId]/appointment/[appointmentId]/index.tsx ***!
  \*****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ FeedbackForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../components */ \"./src/components/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nvar __N_SSG = true;\nfunction FeedbackForm(param) {\n    var appointmentData = param.appointmentData, patientData = param.patientData;\n    var handleFormChange = function handleFormChange(e) {\n        setState(e);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), state = ref[0], setState = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var _query = router.query, patientId = _query.patientId, appointmentId = _query.appointmentId;\n    var formMultiStepSchema = {\n        1: {\n            type: \"text\",\n            id: \"unique-id-of-the-name-control\",\n            name: \"name\",\n            label: \"Hi \".concat(patientData.name.givenName, \", on a scale of 1-10, would you recommend Dr \").concat(patientData, \" to a friend or family member? 1 = Would not recommend, 10 = Would strongly recommend\")\n        },\n        2: {\n            type: \"email\",\n            id: \"unique-id-of-the-email-control\",\n            name: \"email\",\n            label: \"Your email address\"\n        },\n        3: {\n            type: \"radio\",\n            id: \"unique-id-of-the-radio-select-control\",\n            name: \"salary\",\n            label: \"Your salary\",\n            defaultChecked: false,\n            value: \"€1.000 - €2.000\",\n            values: [\n                \"€0 - €1.000\",\n                \"€1.000 - €2.000\",\n                \"€2.000 - €3.000\",\n                \"€3.000 - €4.000\",\n                \"More than €4.000\", \n            ]\n        },\n        4: {\n            type: \"submit\",\n            id: \"unique-id-of-the-submit-control\",\n            name: \"submit\",\n            label: \"Is this data correct?\",\n            value: \"Confirm your details\"\n        }\n    };\n    var formMultiStepDefaultData = {\n        name: \"Bob Walters\",\n        email: \"bob@example.com\",\n        salary: \"More than €4.000\"\n    };\n    console.log(appointmentData);\n    console.log(patientData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.FormMultiStep, {\n        id: \"any-id-you-want\",\n        formSchema: formMultiStepSchema,\n        formData: formMultiStepDefaultData,\n        onChange: function(formData) {\n            return handleFormChange(formData.form);\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\18589\\\\Desktop\\\\NodeTest - Copy\\\\tendo\\\\tendo\\\\src\\\\main\\\\frontend\\\\src\\\\pages\\\\patient\\\\[patientId]\\\\appointment\\\\[appointmentId]\\\\index.tsx\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, this);\n}\n_s(FeedbackForm, \"C2lWjEEowGALIF6aBsPp090swUQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = FeedbackForm;\nvar _c;\n$RefreshReg$(_c, \"FeedbackForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcGF0aWVudC9bcGF0aWVudElkXS9hcHBvaW50bWVudC9bYXBwb2ludG1lbnRJZF0vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUFnRDtBQUNUO0FBRXNDOztBQUU5RCxTQUFTSSxZQUFZLENBQUMsS0FBOEIsRUFBZ0I7UUFBN0NDLGVBQWUsR0FBaEIsS0FBOEIsQ0FBN0JBLGVBQWUsRUFBRUMsV0FBVyxHQUE3QixLQUE4QixDQUFaQSxXQUFXO1FBaURyREMsZ0JBQWdCLEdBQXpCLFNBQVNBLGdCQUFnQixDQUFDQyxDQUFDLEVBQUU7UUFDekJDLFFBQVEsQ0FBQ0QsQ0FBQyxDQUFDO0lBQ2YsQ0FBQzs7SUFqREQsSUFBMEJQLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBL0JTLEtBQUssR0FBY1QsR0FBWSxHQUExQixFQUFFUSxRQUFRLEdBQUlSLEdBQVksR0FBaEI7SUFDdEIsSUFBTVUsTUFBTSxHQUFHVCxzREFBUyxFQUFFO0lBQzFCLElBQXFDUyxNQUFZLEdBQVpBLE1BQU0sQ0FBQ0MsS0FBSyxFQUF6Q0MsU0FBUyxHQUFvQkYsTUFBWSxDQUF6Q0UsU0FBUyxFQUFFQyxhQUFhLEdBQUtILE1BQVksQ0FBOUJHLGFBQWE7SUFFaEMsSUFBTUMsbUJBQW1CLEdBQXdCO0FBQzdDLFNBQUMsRUFBRTtZQUNDQyxJQUFJLEVBQUUsTUFBTTtZQUNaQyxFQUFFLEVBQUUsK0JBQStCO1lBQ25DQyxJQUFJLEVBQUUsTUFBTTtZQUNaQyxLQUFLLEVBQUUsS0FBSSxDQUE0RWIsTUFBVyxDQUFyRkEsV0FBVyxDQUFDWSxJQUFJLENBQUNFLFNBQVMsRUFBQywrQ0FBNkMsQ0FBYyxPQUFxRixDQUFqR2QsV0FBVyxFQUFDLHVGQUFxRixDQUFDO1NBQzVMO0FBQ0QsU0FBQyxFQUFFO1lBQ0NVLElBQUksRUFBRSxPQUFPO1lBQ2JDLEVBQUUsRUFBRSxnQ0FBZ0M7WUFDcENDLElBQUksRUFBRSxPQUFPO1lBQ2JDLEtBQUssRUFBRSxvQkFBb0I7U0FDOUI7QUFDRCxTQUFDLEVBQUU7WUFDQ0gsSUFBSSxFQUFFLE9BQU87WUFDYkMsRUFBRSxFQUFFLHVDQUF1QztZQUMzQ0MsSUFBSSxFQUFFLFFBQVE7WUFDZEMsS0FBSyxFQUFFLGFBQWE7WUFDcEJFLGNBQWMsRUFBRSxLQUFLO1lBQ3JCQyxLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCQyxNQUFNLEVBQUU7Z0JBQ0osYUFBYTtnQkFDYixpQkFBaUI7Z0JBQ2pCLGlCQUFpQjtnQkFDakIsaUJBQWlCO2dCQUNqQixrQkFBa0I7YUFDckI7U0FDSjtBQUNELFNBQUMsRUFBRTtZQUNDUCxJQUFJLEVBQUUsUUFBUTtZQUNkQyxFQUFFLEVBQUUsaUNBQWlDO1lBQ3JDQyxJQUFJLEVBQUUsUUFBUTtZQUNkQyxLQUFLLEVBQUUsdUJBQXVCO1lBQzlCRyxLQUFLLEVBQUUsc0JBQXNCO1NBQ2hDO0tBQ0o7SUFFRCxJQUFNRSx3QkFBd0IsR0FBRztRQUM3Qk4sSUFBSSxFQUFFLGFBQWE7UUFDbkJPLEtBQUssRUFBRSxpQkFBaUI7UUFDeEJDLE1BQU0sRUFBRSxrQkFBa0I7S0FDN0I7SUFNREMsT0FBTyxDQUFDQyxHQUFHLENBQUN2QixlQUFlLENBQUMsQ0FBQztJQUM3QnNCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDdEIsV0FBVyxDQUFDO0lBR3hCLHFCQUNJLDhEQUFDSCxzREFBYTtRQUNWYyxFQUFFLEVBQUMsaUJBQWlCO1FBQ3BCWSxVQUFVLEVBQUVkLG1CQUFtQjtRQUMvQmUsUUFBUSxFQUFFTix3QkFBd0I7UUFDbENPLFFBQVEsRUFBRUQsU0FBQUEsUUFBUTttQkFBSXZCLGdCQUFnQixDQUFDdUIsUUFBUSxDQUFDRSxJQUFJLENBQUM7U0FBQTs7Ozs7WUFDdkQsQ0FDTDtBQUVMLENBQUM7R0FsRXVCNUIsWUFBWTs7UUFHakJGLGtEQUFTOzs7QUFISkUsS0FBQUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcGF0aWVudC9bcGF0aWVudElkXS9hcHBvaW50bWVudC9bYXBwb2ludG1lbnRJZF0vaW5kZXgudHN4PzIxYzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7Rm9ybU11bHRpU3RlcCwgRm9ybU11bHRpU3RlcFNjaGVtYX0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZlZWRiYWNrRm9ybSh7YXBwb2ludG1lbnREYXRhLCBwYXRpZW50RGF0YX0pIDogSlNYLkVsZW1lbnQge1xyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgeyBwYXRpZW50SWQsIGFwcG9pbnRtZW50SWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICBjb25zdCBmb3JtTXVsdGlTdGVwU2NoZW1hOiBGb3JtTXVsdGlTdGVwU2NoZW1hID0ge1xyXG4gICAgICAgIDE6IHtcclxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICBpZDogJ3VuaXF1ZS1pZC1vZi10aGUtbmFtZS1jb250cm9sJyxcclxuICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxyXG4gICAgICAgICAgICBsYWJlbDogYEhpICR7cGF0aWVudERhdGEubmFtZS5naXZlbk5hbWV9LCBvbiBhIHNjYWxlIG9mIDEtMTAsIHdvdWxkIHlvdSByZWNvbW1lbmQgRHIgJHtwYXRpZW50RGF0YX0gdG8gYSBmcmllbmQgb3IgZmFtaWx5IG1lbWJlcj8gMSA9IFdvdWxkIG5vdCByZWNvbW1lbmQsIDEwID0gV291bGQgc3Ryb25nbHkgcmVjb21tZW5kYCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDI6IHtcclxuICAgICAgICAgICAgdHlwZTogJ2VtYWlsJyxcclxuICAgICAgICAgICAgaWQ6ICd1bmlxdWUtaWQtb2YtdGhlLWVtYWlsLWNvbnRyb2wnLFxyXG4gICAgICAgICAgICBuYW1lOiAnZW1haWwnLFxyXG4gICAgICAgICAgICBsYWJlbDogJ1lvdXIgZW1haWwgYWRkcmVzcycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAzOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdyYWRpbycsXHJcbiAgICAgICAgICAgIGlkOiAndW5pcXVlLWlkLW9mLXRoZS1yYWRpby1zZWxlY3QtY29udHJvbCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdzYWxhcnknLFxyXG4gICAgICAgICAgICBsYWJlbDogJ1lvdXIgc2FsYXJ5JyxcclxuICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ+KCrDEuMDAwIC0g4oKsMi4wMDAnLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IFtcclxuICAgICAgICAgICAgICAgICfigqwwIC0g4oKsMS4wMDAnLFxyXG4gICAgICAgICAgICAgICAgJ+KCrDEuMDAwIC0g4oKsMi4wMDAnLFxyXG4gICAgICAgICAgICAgICAgJ+KCrDIuMDAwIC0g4oKsMy4wMDAnLFxyXG4gICAgICAgICAgICAgICAgJ+KCrDMuMDAwIC0g4oKsNC4wMDAnLFxyXG4gICAgICAgICAgICAgICAgJ01vcmUgdGhhbiDigqw0LjAwMCcsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICA0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdzdWJtaXQnLFxyXG4gICAgICAgICAgICBpZDogJ3VuaXF1ZS1pZC1vZi10aGUtc3VibWl0LWNvbnRyb2wnLFxyXG4gICAgICAgICAgICBuYW1lOiAnc3VibWl0JyxcclxuICAgICAgICAgICAgbGFiZWw6ICdJcyB0aGlzIGRhdGEgY29ycmVjdD8nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ0NvbmZpcm0geW91ciBkZXRhaWxzJyxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBmb3JtTXVsdGlTdGVwRGVmYXVsdERhdGEgPSB7XHJcbiAgICAgICAgbmFtZTogJ0JvYiBXYWx0ZXJzJyxcclxuICAgICAgICBlbWFpbDogJ2JvYkBleGFtcGxlLmNvbScsXHJcbiAgICAgICAgc2FsYXJ5OiAnTW9yZSB0aGFuIOKCrDQuMDAwJyxcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRm9ybUNoYW5nZShlKSB7XHJcbiAgICAgICAgc2V0U3RhdGUoZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhhcHBvaW50bWVudERhdGEpO1xyXG4gICAgY29uc29sZS5sb2cocGF0aWVudERhdGEpXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm1NdWx0aVN0ZXBcclxuICAgICAgICAgICAgaWQ9XCJhbnktaWQteW91LXdhbnRcIlxyXG4gICAgICAgICAgICBmb3JtU2NoZW1hPXtmb3JtTXVsdGlTdGVwU2NoZW1hfVxyXG4gICAgICAgICAgICBmb3JtRGF0YT17Zm9ybU11bHRpU3RlcERlZmF1bHREYXRhfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17Zm9ybURhdGEgPT4gaGFuZGxlRm9ybUNoYW5nZShmb3JtRGF0YS5mb3JtKX1cclxuICAgICAgICAvPlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvYXBwb2ludG1lbnQnKVxyXG4gICAgY29uc3QgYXBwb2ludG1lbnRzID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICAgIGxldCBwYXRoczogYW55W10gPSBbXTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhyZXMpXHJcblxyXG4gICAgZm9yIChsZXQgYXBwb2ludG1lbnQgb2YgYXBwb2ludG1lbnRzKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvYXBwb2ludG1lbnQvJHthcHBvaW50bWVudC5pZH0vcGF0aWVudGApO1xyXG4gICAgICAgIGNvbnN0IHBhdGllbnQgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgcGF0aHMucHVzaChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwb2ludG1lbnRJZDogYXBwb2ludG1lbnQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudElkOiBwYXRpZW50LmlkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7cGFyYW1zfSkge1xyXG5cclxuICAgIGNvbnN0IGFwcG9pbnRtZW50ID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3YxL3BhdGllbnQvJHtwYXJhbXMucGF0aWVudElkfS9hcHBvaW50bWVudC8ke3BhcmFtcy5hcHBvaW50bWVudElkfWApO1xyXG4gICAgY29uc29sZS5sb2coXCJIZWxsb1wiKVxyXG4gICAgY29uc3QgYXBwb2ludG1lbnREYXRhID0gYXdhaXQgYXBwb2ludG1lbnQuZGF0YVxyXG5cclxuICAgIGNvbnN0IHBhdGllbnQgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvcGF0aWVudC8ke3BhcmFtcy5wYXRpZW50SWR9YClcclxuICAgIGNvbnN0IHBhdGllbnREYXRhID0gYXdhaXQgcGF0aWVudC5kYXRhXHJcblxyXG4gICAgY29uc3QgZG9jdG9yID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvYXBwb2ludG1lbnQvJHtwYXJhbXMuYXBwb2ludG1lbnRJZH0vZG9jdG9yYCk7XHJcbiAgICAvKlxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBkb2N0b3JEYXRhID0gYXdhaXQgZG9jdG9yLmRhdGFcclxuXHJcbiAgICAgKi9cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcblxyXG4gICAgICAgICAgICBhcHBvaW50bWVudERhdGE6IGFwcG9pbnRtZW50RGF0YSxcclxuICAgICAgICAgICAgcGF0aWVudERhdGE6IHBhdGllbnREYXRhLFxyXG4gICAgICAgICAgICBkb2N0b3JEYXRhOiBcInRlc3RcIiwgLy9kb2N0b3JEYXRhXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJGb3JtTXVsdGlTdGVwIiwiRmVlZGJhY2tGb3JtIiwiYXBwb2ludG1lbnREYXRhIiwicGF0aWVudERhdGEiLCJoYW5kbGVGb3JtQ2hhbmdlIiwiZSIsInNldFN0YXRlIiwic3RhdGUiLCJyb3V0ZXIiLCJxdWVyeSIsInBhdGllbnRJZCIsImFwcG9pbnRtZW50SWQiLCJmb3JtTXVsdGlTdGVwU2NoZW1hIiwidHlwZSIsImlkIiwibmFtZSIsImxhYmVsIiwiZ2l2ZW5OYW1lIiwiZGVmYXVsdENoZWNrZWQiLCJ2YWx1ZSIsInZhbHVlcyIsImZvcm1NdWx0aVN0ZXBEZWZhdWx0RGF0YSIsImVtYWlsIiwic2FsYXJ5IiwiY29uc29sZSIsImxvZyIsImZvcm1TY2hlbWEiLCJmb3JtRGF0YSIsIm9uQ2hhbmdlIiwiZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/patient/[patientId]/appointment/[appointmentId]/index.tsx\n"));

/***/ })

});