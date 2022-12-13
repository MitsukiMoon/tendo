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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ FeedbackForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../components */ \"./src/components/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nvar __N_SSG = true;\nfunction FeedbackForm(param) {\n    var appointmentData = param.appointmentData, patientData = param.patientData, doctorData = param.doctorData, diagnosisData = param.diagnosisData;\n    var handleFormChange = function handleFormChange(e) {\n        setformMultiStepDat(e);\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var _query = router.query, patientId = _query.patientId, appointmentId = _query.appointmentId;\n    var diagnosis = diagnosisData.at(0);\n    console.log();\n    var formMultiStepSchema = {\n        1: {\n            type: \"radio\",\n            id: \"ratingResponse\",\n            name: \"Rating\",\n            label: \"Hi \".concat(patientData.name.givenName, \", on a scale of 1-10, would you recommend Dr. \").concat(doctorData.name.familyName, \" to a friend or family member? 1 = Would not recommend, 10 = Would strongly recommend\"),\n            defaultChecked: false,\n            value: \"5\",\n            values: [\n                \"1\",\n                \"2\",\n                \"3\",\n                \"4\",\n                \"5\",\n                \"6\",\n                \"7\",\n                \"8\",\n                \"9\",\n                \"10\"\n            ]\n        },\n        2: {\n            type: \"text\",\n            id: \"diagnosisExplanation\",\n            name: \"Explanation\",\n            label: \"Thank you. You were diagnosed with \".concat(diagnosis)\n        },\n        3: {\n            type: \"radio\",\n            id: \"unique-id-of-the-radio-select-control\",\n            name: \"salary\",\n            label: \"Your salary\",\n            defaultChecked: false,\n            value: \"€1.000 - €2.000\",\n            values: [\n                \"€0 - €1.000\",\n                \"€1.000 - €2.000\",\n                \"€2.000 - €3.000\",\n                \"€3.000 - €4.000\",\n                \"More than €4.000\", \n            ]\n        },\n        4: {\n            type: \"submit\",\n            id: \"unique-id-of-the-submit-control\",\n            name: \"submit\",\n            label: \"Is this data correct?\",\n            value: \"Confirm your details\"\n        }\n    };\n    var formMultiStepDefaultData = {\n        Rating: \"5\",\n        Explanation: \"\",\n        salary: \"More than €4.000\"\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(formMultiStepSchema), formMultiStepData = ref[0], setformMultiStepDat = ref[1];\n    console.log(appointmentData);\n    console.log(patientData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.FormMultiStep, {\n        id: \"any-id-you-want\",\n        formSchema: formMultiStepSchema,\n        formData: formMultiStepDefaultData,\n        onChange: function(formData) {\n            return handleFormChange(formData.form);\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\18589\\\\Desktop\\\\NodeTest - Copy\\\\tendo\\\\tendo\\\\src\\\\main\\\\frontend\\\\src\\\\pages\\\\patient\\\\[patientId]\\\\appointment\\\\[appointmentId]\\\\index.tsx\",\n        lineNumber: 84,\n        columnNumber: 9\n    }, this);\n}\n_s(FeedbackForm, \"4bQH1vDwUhs4l7XrPN+nF+Z/DJ8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = FeedbackForm;\nvar _c;\n$RefreshReg$(_c, \"FeedbackForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcGF0aWVudC9bcGF0aWVudElkXS9hcHBvaW50bWVudC9bYXBwb2ludG1lbnRJZF0vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUFnRDtBQUNUO0FBRXNDOztBQUU5RCxTQUFTSSxZQUFZLENBQUMsS0FBeUQsRUFBZ0I7UUFBeEVDLGVBQWUsR0FBaEIsS0FBeUQsQ0FBeERBLGVBQWUsRUFBRUMsV0FBVyxHQUE3QixLQUF5RCxDQUF2Q0EsV0FBVyxFQUFFQyxVQUFVLEdBQXpDLEtBQXlELENBQTFCQSxVQUFVLEVBQUVDLGFBQWEsR0FBeEQsS0FBeUQsQ0FBZEEsYUFBYTtRQXFFaEZDLGdCQUFnQixHQUF6QixTQUFTQSxnQkFBZ0IsQ0FBQ0MsQ0FBQyxFQUFFO1FBQ3pCQyxtQkFBbUIsQ0FBQ0QsQ0FBQyxDQUFDO0lBQzFCLENBQUM7O0lBcEVELElBQU1FLE1BQU0sR0FBR1Ysc0RBQVMsRUFBRTtJQUMxQixJQUFxQ1UsTUFBWSxHQUFaQSxNQUFNLENBQUNDLEtBQUssRUFBekNDLFNBQVMsR0FBb0JGLE1BQVksQ0FBekNFLFNBQVMsRUFBRUMsYUFBYSxHQUFLSCxNQUFZLENBQTlCRyxhQUFhO0lBRWhDLElBQU1DLFNBQVMsR0FBR1IsYUFBYSxDQUFDUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JDQyxPQUFPLENBQUNDLEdBQUcsRUFBRTtJQUViLElBQU1DLG1CQUFtQixHQUF3QjtBQUM3QyxTQUFDLEVBQUU7WUFDQ0MsSUFBSSxFQUFFLE9BQU87WUFDYkMsRUFBRSxFQUFFLGdCQUFnQjtZQUNwQkMsSUFBSSxFQUFHLFFBQU07WUFDYkMsS0FBSyxFQUFFLEtBQUksQ0FBNkVqQixNQUEwQixDQUFyR0QsV0FBVyxDQUFDaUIsSUFBSSxDQUFDRSxTQUFTLEVBQUMsZ0RBQThDLENBQTZCLE9BQXFGLENBQWhIbEIsVUFBVSxDQUFDZ0IsSUFBSSxDQUFDRyxVQUFVLEVBQUMsdUZBQXFGLENBQUM7WUFDek1DLGNBQWMsRUFBRSxLQUFLO1lBQ3JCQyxLQUFLLEVBQUUsR0FBRztZQUNWQyxNQUFNLEVBQUU7Z0JBQ0osR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsR0FBRztnQkFDSCxHQUFHO2dCQUNILEdBQUc7Z0JBQ0gsSUFBSTthQUNQO1NBQ0o7QUFDRCxTQUFDLEVBQUU7WUFDQ1IsSUFBSSxFQUFFLE1BQU07WUFDWkMsRUFBRSxFQUFFLHNCQUFzQjtZQUMxQkMsSUFBSSxFQUFFLGFBQWE7WUFDbkJDLEtBQUssRUFBRSxxQ0FBb0MsQ0FBWSxPQUFWUixTQUFTLENBQUU7U0FDM0Q7QUFDRCxTQUFDLEVBQUU7WUFDQ0ssSUFBSSxFQUFFLE9BQU87WUFDYkMsRUFBRSxFQUFFLHVDQUF1QztZQUMzQ0MsSUFBSSxFQUFFLFFBQVE7WUFDZEMsS0FBSyxFQUFFLGFBQWE7WUFDcEJHLGNBQWMsRUFBRSxLQUFLO1lBQ3JCQyxLQUFLLEVBQUUsaUJBQWlCO1lBQ3hCQyxNQUFNLEVBQUU7Z0JBQ0osYUFBYTtnQkFDYixpQkFBaUI7Z0JBQ2pCLGlCQUFpQjtnQkFDakIsaUJBQWlCO2dCQUNqQixrQkFBa0I7YUFDckI7U0FDSjtBQUNELFNBQUMsRUFBRTtZQUNDUixJQUFJLEVBQUUsUUFBUTtZQUNkQyxFQUFFLEVBQUUsaUNBQWlDO1lBQ3JDQyxJQUFJLEVBQUUsUUFBUTtZQUNkQyxLQUFLLEVBQUUsdUJBQXVCO1lBQzlCSSxLQUFLLEVBQUUsc0JBQXNCO1NBQ2hDO0tBQ0o7SUFFRCxJQUFNRSx3QkFBd0IsR0FBRztRQUM3QkMsTUFBTSxFQUFFLEdBQUc7UUFDWEMsV0FBVyxFQUFFLEVBQUU7UUFDZkMsTUFBTSxFQUFFLGtCQUFrQjtLQUM3QjtJQUVELElBQWlEaEMsR0FBNkIsR0FBN0JBLCtDQUFRLENBQUNtQixtQkFBbUIsQ0FBQyxFQUF2RWMsaUJBQWlCLEdBQXlCakMsR0FBNkIsR0FBdEQsRUFBRVUsbUJBQW1CLEdBQUlWLEdBQTZCLEdBQWpDO0lBTzdDaUIsT0FBTyxDQUFDQyxHQUFHLENBQUNkLGVBQWUsQ0FBQyxDQUFDO0lBQzdCYSxPQUFPLENBQUNDLEdBQUcsQ0FBQ2IsV0FBVyxDQUFDO0lBR3hCLHFCQUNJLDhEQUFDSCxzREFBYTtRQUNWbUIsRUFBRSxFQUFDLGlCQUFpQjtRQUNwQmEsVUFBVSxFQUFFZixtQkFBbUI7UUFDL0JnQixRQUFRLEVBQUVOLHdCQUF3QjtRQUNsQ08sUUFBUSxFQUFFRCxTQUFBQSxRQUFRO21CQUFJM0IsZ0JBQWdCLENBQUMyQixRQUFRLENBQUNFLElBQUksQ0FBQztTQUFBOzs7OztZQUN2RCxDQUNMO0FBRUwsQ0FBQztHQXRGdUJsQyxZQUFZOztRQUdqQkYsa0RBQVM7OztBQUhKRSxLQUFBQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wYXRpZW50L1twYXRpZW50SWRdL2FwcG9pbnRtZW50L1thcHBvaW50bWVudElkXS9pbmRleC50c3g/MjFjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtGb3JtTXVsdGlTdGVwLCBGb3JtTXVsdGlTdGVwU2NoZW1hfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVlZGJhY2tGb3JtKHthcHBvaW50bWVudERhdGEsIHBhdGllbnREYXRhLCBkb2N0b3JEYXRhLCBkaWFnbm9zaXNEYXRhfSkgOiBKU1guRWxlbWVudCB7XHJcblxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7IHBhdGllbnRJZCwgYXBwb2ludG1lbnRJZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IGRpYWdub3NpcyA9IGRpYWdub3Npc0RhdGEuYXQoMClcclxuICAgIGNvbnNvbGUubG9nKClcclxuXHJcbiAgICBjb25zdCBmb3JtTXVsdGlTdGVwU2NoZW1hOiBGb3JtTXVsdGlTdGVwU2NoZW1hID0ge1xyXG4gICAgICAgIDE6IHtcclxuICAgICAgICAgICAgdHlwZTogJ3JhZGlvJyxcclxuICAgICAgICAgICAgaWQ6ICdyYXRpbmdSZXNwb25zZScsXHJcbiAgICAgICAgICAgIG5hbWU6IGBSYXRpbmdgLFxyXG4gICAgICAgICAgICBsYWJlbDogYEhpICR7cGF0aWVudERhdGEubmFtZS5naXZlbk5hbWV9LCBvbiBhIHNjYWxlIG9mIDEtMTAsIHdvdWxkIHlvdSByZWNvbW1lbmQgRHIuICR7ZG9jdG9yRGF0YS5uYW1lLmZhbWlseU5hbWV9IHRvIGEgZnJpZW5kIG9yIGZhbWlseSBtZW1iZXI/IDEgPSBXb3VsZCBub3QgcmVjb21tZW5kLCAxMCA9IFdvdWxkIHN0cm9uZ2x5IHJlY29tbWVuZGAsXHJcbiAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkOiBmYWxzZSxcclxuICAgICAgICAgICAgdmFsdWU6ICc1JyxcclxuICAgICAgICAgICAgdmFsdWVzOiBbXHJcbiAgICAgICAgICAgICAgICAnMScsXHJcbiAgICAgICAgICAgICAgICAnMicsXHJcbiAgICAgICAgICAgICAgICAnMycsXHJcbiAgICAgICAgICAgICAgICAnNCcsXHJcbiAgICAgICAgICAgICAgICAnNScsXHJcbiAgICAgICAgICAgICAgICAnNicsXHJcbiAgICAgICAgICAgICAgICAnNycsXHJcbiAgICAgICAgICAgICAgICAnOCcsXHJcbiAgICAgICAgICAgICAgICAnOScsXHJcbiAgICAgICAgICAgICAgICAnMTAnXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIDI6IHtcclxuICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgICAgICBpZDogJ2RpYWdub3Npc0V4cGxhbmF0aW9uJyxcclxuICAgICAgICAgICAgbmFtZTogJ0V4cGxhbmF0aW9uJyxcclxuICAgICAgICAgICAgbGFiZWw6IGBUaGFuayB5b3UuIFlvdSB3ZXJlIGRpYWdub3NlZCB3aXRoICR7ZGlhZ25vc2lzfWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAzOiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdyYWRpbycsXHJcbiAgICAgICAgICAgIGlkOiAndW5pcXVlLWlkLW9mLXRoZS1yYWRpby1zZWxlY3QtY29udHJvbCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdzYWxhcnknLFxyXG4gICAgICAgICAgICBsYWJlbDogJ1lvdXIgc2FsYXJ5JyxcclxuICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ+KCrDEuMDAwIC0g4oKsMi4wMDAnLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IFtcclxuICAgICAgICAgICAgICAgICfigqwwIC0g4oKsMS4wMDAnLFxyXG4gICAgICAgICAgICAgICAgJ+KCrDEuMDAwIC0g4oKsMi4wMDAnLFxyXG4gICAgICAgICAgICAgICAgJ+KCrDIuMDAwIC0g4oKsMy4wMDAnLFxyXG4gICAgICAgICAgICAgICAgJ+KCrDMuMDAwIC0g4oKsNC4wMDAnLFxyXG4gICAgICAgICAgICAgICAgJ01vcmUgdGhhbiDigqw0LjAwMCcsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICA0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdzdWJtaXQnLFxyXG4gICAgICAgICAgICBpZDogJ3VuaXF1ZS1pZC1vZi10aGUtc3VibWl0LWNvbnRyb2wnLFxyXG4gICAgICAgICAgICBuYW1lOiAnc3VibWl0JyxcclxuICAgICAgICAgICAgbGFiZWw6ICdJcyB0aGlzIGRhdGEgY29ycmVjdD8nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ0NvbmZpcm0geW91ciBkZXRhaWxzJyxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBmb3JtTXVsdGlTdGVwRGVmYXVsdERhdGEgPSB7XHJcbiAgICAgICAgUmF0aW5nOiAnNScsXHJcbiAgICAgICAgRXhwbGFuYXRpb246ICcnLFxyXG4gICAgICAgIHNhbGFyeTogJ01vcmUgdGhhbiDigqw0LjAwMCcsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IFtmb3JtTXVsdGlTdGVwRGF0YSwgc2V0Zm9ybU11bHRpU3RlcERhdF0gPSB1c2VTdGF0ZShmb3JtTXVsdGlTdGVwU2NoZW1hKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRm9ybUNoYW5nZShlKSB7XHJcbiAgICAgICAgc2V0Zm9ybU11bHRpU3RlcERhdChlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGFwcG9pbnRtZW50RGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZyhwYXRpZW50RGF0YSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybU11bHRpU3RlcFxyXG4gICAgICAgICAgICBpZD1cImFueS1pZC15b3Utd2FudFwiXHJcbiAgICAgICAgICAgIGZvcm1TY2hlbWE9e2Zvcm1NdWx0aVN0ZXBTY2hlbWF9XHJcbiAgICAgICAgICAgIGZvcm1EYXRhPXtmb3JtTXVsdGlTdGVwRGVmYXVsdERhdGF9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtRGF0YSA9PiBoYW5kbGVGb3JtQ2hhbmdlKGZvcm1EYXRhLmZvcm0pfVxyXG4gICAgICAgIC8+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS9hcHBvaW50bWVudCcpXHJcbiAgICBjb25zdCBhcHBvaW50bWVudHMgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gICAgbGV0IHBhdGhzOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHJlcylcclxuXHJcbiAgICBmb3IgKGxldCBhcHBvaW50bWVudCBvZiBhcHBvaW50bWVudHMpIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS9hcHBvaW50bWVudC8ke2FwcG9pbnRtZW50LmlkfS9wYXRpZW50YCk7XHJcbiAgICAgICAgY29uc3QgcGF0aWVudCA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgICBwYXRocy5wdXNoKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBhcHBvaW50bWVudElkOiBhcHBvaW50bWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50SWQ6IHBhdGllbnQuaWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHtwYXJhbXN9KSB7XHJcblxyXG4gICAgY29uc3QgYXBwb2ludG1lbnQgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvcGF0aWVudC8ke3BhcmFtcy5wYXRpZW50SWR9L2FwcG9pbnRtZW50LyR7cGFyYW1zLmFwcG9pbnRtZW50SWR9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkhlbGxvXCIpXHJcbiAgICBjb25zdCBhcHBvaW50bWVudERhdGEgPSBhd2FpdCBhcHBvaW50bWVudC5kYXRhXHJcblxyXG4gICAgY29uc3QgcGF0aWVudCA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS9wYXRpZW50LyR7cGFyYW1zLnBhdGllbnRJZH1gKVxyXG4gICAgY29uc3QgcGF0aWVudERhdGEgPSBhd2FpdCBwYXRpZW50LmRhdGFcclxuXHJcbiAgICBjb25zdCBkb2N0b3IgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS9hcHBvaW50bWVudC8ke3BhcmFtcy5hcHBvaW50bWVudElkfS9kb2N0b3JgKVxyXG4gICAgY29uc3QgZG9jdG9yRGF0YSA9IGF3YWl0IGRvY3Rvci5qc29uKClcclxuXHJcbiAgICBjb25zdCBkaWFnbm9zaXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS9hcHBvaW50bWVudC8ke3BhcmFtcy5hcHBvaW50bWVudElkfS9kaWFnbm9zZXNgKVxyXG4gICAgY29uc3QgZGlhZ25vc2lzRGF0YSA9IGF3YWl0IGRpYWdub3Npcy5qc29uKClcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkb2N0b3JEYXRhKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgYXBwb2ludG1lbnREYXRhOiBhcHBvaW50bWVudERhdGEsXHJcbiAgICAgICAgICAgIHBhdGllbnREYXRhOiBwYXRpZW50RGF0YSxcclxuICAgICAgICAgICAgZG9jdG9yRGF0YTogZG9jdG9yRGF0YSxcclxuICAgICAgICAgICAgZGlhZ25vc2lzRGF0YTogZGlhZ25vc2lzRGF0YVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkZvcm1NdWx0aVN0ZXAiLCJGZWVkYmFja0Zvcm0iLCJhcHBvaW50bWVudERhdGEiLCJwYXRpZW50RGF0YSIsImRvY3RvckRhdGEiLCJkaWFnbm9zaXNEYXRhIiwiaGFuZGxlRm9ybUNoYW5nZSIsImUiLCJzZXRmb3JtTXVsdGlTdGVwRGF0Iiwicm91dGVyIiwicXVlcnkiLCJwYXRpZW50SWQiLCJhcHBvaW50bWVudElkIiwiZGlhZ25vc2lzIiwiYXQiLCJjb25zb2xlIiwibG9nIiwiZm9ybU11bHRpU3RlcFNjaGVtYSIsInR5cGUiLCJpZCIsIm5hbWUiLCJsYWJlbCIsImdpdmVuTmFtZSIsImZhbWlseU5hbWUiLCJkZWZhdWx0Q2hlY2tlZCIsInZhbHVlIiwidmFsdWVzIiwiZm9ybU11bHRpU3RlcERlZmF1bHREYXRhIiwiUmF0aW5nIiwiRXhwbGFuYXRpb24iLCJzYWxhcnkiLCJmb3JtTXVsdGlTdGVwRGF0YSIsImZvcm1TY2hlbWEiLCJmb3JtRGF0YSIsIm9uQ2hhbmdlIiwiZm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/patient/[patientId]/appointment/[appointmentId]/index.tsx\n"));

/***/ })

});