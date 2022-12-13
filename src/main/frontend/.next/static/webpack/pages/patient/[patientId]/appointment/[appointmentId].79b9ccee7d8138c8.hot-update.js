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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ FeedbackForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../components */ \"./src/components/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction explanationResponse(explanation) {\n    if (explanation.includes(\"Yes\")) {\n        return \"We're glad to hear that the doctor was helpful.\";\n    } else if (explanation.includes(\"No\")) {\n        return \"We're sorry to hear that. Please call us at (XXX)-XXX-XXXX if you would like to be consulted by another doctor.\";\n    } else {\n        return \"Please call us at (XXX)-XXX-XXXX if you would like additional information.\";\n    }\n}\nvar __N_SSG = true;\nfunction FeedbackForm(param) {\n    var appointmentData = param.appointmentData, patientData = param.patientData, doctorData = param.doctorData, diagnosisData = param.diagnosisData;\n    var handleFormChange = function handleFormChange(e) {\n        setformMultiStepDat(e);\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var _query = router.query, patientId = _query.patientId, appointmentId = _query.appointmentId;\n    var diagnosis = diagnosisData.at(0);\n    var formMultiStepDefaultData = {\n        Rating: \"5\",\n        Explanation: \"\",\n        Feeling: \"\"\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(formMultiStepDefaultData), formMultiStepData = ref[0], setformMultiStepDat = ref[1];\n    var formMultiStepSchema = {\n        1: {\n            type: \"radio\",\n            id: \"ratingResponse\",\n            name: \"Rating\",\n            label: \"Hi \".concat(patientData.name.givenName, \", on a scale of 1-10, would you recommend Dr. \").concat(doctorData.name.familyName, \" to a friend or family member? 1 = Would not recommend, 10 = Would strongly recommend\"),\n            defaultChecked: false,\n            value: \"5\",\n            values: [\n                \"1\",\n                \"2\",\n                \"3\",\n                \"4\",\n                \"5\",\n                \"6\",\n                \"7\",\n                \"8\",\n                \"9\",\n                \"10\"\n            ]\n        },\n        2: {\n            type: \"text\",\n            id: \"diagnosisExplanation\",\n            name: \"Explanation\",\n            label: \"Thank you. You were diagnosed with \".concat(diagnosis.code.name, \". Did Dr. \").concat(doctorData.name.familyName, \" explain how to manage this diagnosis in a way you could understand?\")\n        },\n        3: {\n            type: \"text\",\n            id: \"diagnosisFeeling\",\n            name: \"Feeling\",\n            label: explanationResponse(formMultiStepData.Explanation) + \" We appreciate the feedback, one last question: how do you feel about being diagnosed with \".concat(diagnosis.code.name, \"?\")\n        },\n        4: {\n            type: \"submit\",\n            id: \"unique-id-of-the-submit-control\",\n            name: \"submit\",\n            label: \"Thanks again! Here’s what we heard:\",\n            value: \"Confirm your details\"\n        }\n    };\n    var apiData = {\n        doctorId: doctorData.id,\n        appointmentId: appointmentData.id\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.FormMultiStep, {\n        id: \"any-id-you-want\",\n        formSchema: formMultiStepSchema,\n        formData: formMultiStepDefaultData,\n        apiData: apiData,\n        onChange: function(formData) {\n            return handleFormChange(formData.form);\n        }\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\18589\\\\Desktop\\\\NodeTest - Copy\\\\tendo\\\\tendo\\\\src\\\\main\\\\frontend\\\\src\\\\pages\\\\patient\\\\[patientId]\\\\appointment\\\\[appointmentId]\\\\index.tsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, this);\n}\n_s(FeedbackForm, \"wk2BA01hxD96CC32Y/a3QW0MO6E=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = FeedbackForm;\nvar _c;\n$RefreshReg$(_c, \"FeedbackForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcGF0aWVudC9bcGF0aWVudElkXS9hcHBvaW50bWVudC9bYXBwb2ludG1lbnRJZF0vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUFtRDtBQUNYO0FBRXVDO0FBRS9FLFNBQVNJLG1CQUFtQixDQUFDQyxXQUFtQixFQUFVO0lBQ3hELElBQUlBLFdBQVcsQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQy9CLE9BQU8saURBQWlELENBQUM7SUFDM0QsT0FBTyxJQUFJRCxXQUFXLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNyQyxPQUFPLGlIQUFpSCxDQUFDO0lBQzNILE9BQU87UUFDTCxPQUFPLDRFQUE0RSxDQUFDO0lBQ3RGLENBQUM7QUFDSCxDQUFDOztBQUVjLFNBQVNDLFlBQVksQ0FBQyxLQUtwQyxFQUFlO1FBSmRDLGVBQWUsR0FEb0IsS0FLcEMsQ0FKQ0EsZUFBZSxFQUNmQyxXQUFXLEdBRndCLEtBS3BDLENBSENBLFdBQVcsRUFDWEMsVUFBVSxHQUh5QixLQUtwQyxDQUZDQSxVQUFVLEVBQ1ZDLGFBQWEsR0FKc0IsS0FLcEMsQ0FEQ0EsYUFBYTtRQWlCSkMsZ0JBQWdCLEdBQXpCLFNBQVNBLGdCQUFnQixDQUFDQyxDQUFDLEVBQUU7UUFDM0JDLG1CQUFtQixDQUFDRCxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDOztJQWpCRCxJQUFNRSxNQUFNLEdBQUdiLHNEQUFTLEVBQUU7SUFDMUIsSUFBcUNhLE1BQVksR0FBWkEsTUFBTSxDQUFDQyxLQUFLLEVBQXpDQyxTQUFTLEdBQW9CRixNQUFZLENBQXpDRSxTQUFTLEVBQUVDLGFBQWEsR0FBS0gsTUFBWSxDQUE5QkcsYUFBYTtJQUVoQyxJQUFNQyxTQUFTLEdBQUdSLGFBQWEsQ0FBQ1MsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUVyQyxJQUFNQyx3QkFBd0IsR0FBRztRQUMvQkMsTUFBTSxFQUFFLEdBQUc7UUFDWEMsV0FBVyxFQUFFLEVBQUU7UUFDZkMsT0FBTyxFQUFFLEVBQUU7S0FDWjtJQUVELElBQWlEdkIsR0FFaEQsR0FGZ0RBLCtDQUFRLENBQ3ZEb0Isd0JBQXdCLENBQ3pCLEVBRk1JLGlCQUFpQixHQUF5QnhCLEdBRWhELEdBRnVCLEVBQUVhLG1CQUFtQixHQUFJYixHQUVoRCxHQUY0QztJQVE3QyxJQUFNeUIsbUJBQW1CLEdBQXdCO0FBQy9DLFNBQUMsRUFBRTtZQUNEQyxJQUFJLEVBQUUsT0FBTztZQUNiQyxFQUFFLEVBQUUsZ0JBQWdCO1lBQ3BCQyxJQUFJLEVBQUcsUUFBTTtZQUNiQyxLQUFLLEVBQUUsS0FBSSxDQUE2RXBCLE1BQTBCLENBQXJHRCxXQUFXLENBQUNvQixJQUFJLENBQUNFLFNBQVMsRUFBQyxnREFBOEMsQ0FBNkIsT0FBcUYsQ0FBaEhyQixVQUFVLENBQUNtQixJQUFJLENBQUNHLFVBQVUsRUFBQyx1RkFBcUYsQ0FBQztZQUN6TUMsY0FBYyxFQUFFLEtBQUs7WUFDckJDLEtBQUssRUFBRSxHQUFHO1lBQ1ZDLE1BQU0sRUFBRTtnQkFBQyxHQUFHO2dCQUFFLEdBQUc7Z0JBQUUsR0FBRztnQkFBRSxHQUFHO2dCQUFFLEdBQUc7Z0JBQUUsR0FBRztnQkFBRSxHQUFHO2dCQUFFLEdBQUc7Z0JBQUUsR0FBRztnQkFBRSxJQUFJO2FBQUM7U0FDNUQ7QUFDRCxTQUFDLEVBQUU7WUFDRFIsSUFBSSxFQUFFLE1BQU07WUFDWkMsRUFBRSxFQUFFLHNCQUFzQjtZQUMxQkMsSUFBSSxFQUFFLGFBQWE7WUFDbkJDLEtBQUssRUFBRSxxQ0FBb0MsQ0FBa0NwQixNQUEwQixDQUExRFMsU0FBUyxDQUFDaUIsSUFBSSxDQUFDUCxJQUFJLEVBQUMsWUFBVSxDQUE2QixPQUFvRSxDQUEvRm5CLFVBQVUsQ0FBQ21CLElBQUksQ0FBQ0csVUFBVSxFQUFDLHNFQUFvRSxDQUFDO1NBQzlLO0FBQ0QsU0FBQyxFQUFFO1lBQ0RMLElBQUksRUFBRSxNQUFNO1lBQ1pDLEVBQUUsRUFBRSxrQkFBa0I7WUFDdEJDLElBQUksRUFBRSxTQUFTO1lBQ2ZDLEtBQUssRUFDSDFCLG1CQUFtQixDQUFDcUIsaUJBQWlCLENBQUNGLFdBQVcsQ0FBQyxHQUNsRCw2RkFBNEYsQ0FBc0IsTUFBQyxDQUFyQkosU0FBUyxDQUFDaUIsSUFBSSxDQUFDUCxJQUFJLEVBQUMsR0FBQyxDQUFDO1NBQ3ZIO0FBQ0QsU0FBQyxFQUFFO1lBQ0RGLElBQUksRUFBRSxRQUFRO1lBQ2RDLEVBQUUsRUFBRSxpQ0FBaUM7WUFDckNDLElBQUksRUFBRSxRQUFRO1lBQ2RDLEtBQUssRUFBRSxxQ0FBcUM7WUFDNUNJLEtBQUssRUFBRSxzQkFBc0I7U0FDOUI7S0FDRjtJQUVELElBQU1HLE9BQU8sR0FBRztRQUNkQyxRQUFRLEVBQUU1QixVQUFVLENBQUNrQixFQUFFO1FBQ3ZCVixhQUFhLEVBQUVWLGVBQWUsQ0FBQ29CLEVBQUU7S0FDbEM7SUFFRCxxQkFDRSw4REFBQ3pCLHNEQUFhO1FBQ1p5QixFQUFFLEVBQUMsaUJBQWlCO1FBQ3BCVyxVQUFVLEVBQUViLG1CQUFtQjtRQUMvQmMsUUFBUSxFQUFFbkIsd0JBQXdCO1FBQ2xDZ0IsT0FBTyxFQUFFQSxPQUFPO1FBQ2hCSSxRQUFRLEVBQUUsU0FBQ0QsUUFBUTttQkFBSzVCLGdCQUFnQixDQUFDNEIsUUFBUSxDQUFDRSxJQUFJLENBQUM7U0FBQTs7Ozs7WUFDdkQsQ0FDRjtBQUNKLENBQUM7R0F4RXVCbkMsWUFBWTs7UUFNbkJMLGtEQUFTOzs7QUFORkssS0FBQUEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcGF0aWVudC9bcGF0aWVudElkXS9hcHBvaW50bWVudC9bYXBwb2ludG1lbnRJZF0vaW5kZXgudHN4PzIxYzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgRm9ybU11bHRpU3RlcCwgRm9ybU11bHRpU3RlcFNjaGVtYSB9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzXCI7XG5cbmZ1bmN0aW9uIGV4cGxhbmF0aW9uUmVzcG9uc2UoZXhwbGFuYXRpb246IFN0cmluZyk6IFN0cmluZyB7XG4gIGlmIChleHBsYW5hdGlvbi5pbmNsdWRlcyhcIlllc1wiKSkge1xuICAgIHJldHVybiBcIldlJ3JlIGdsYWQgdG8gaGVhciB0aGF0IHRoZSBkb2N0b3Igd2FzIGhlbHBmdWwuXCI7XG4gIH0gZWxzZSBpZiAoZXhwbGFuYXRpb24uaW5jbHVkZXMoXCJOb1wiKSkge1xuICAgIHJldHVybiBcIldlJ3JlIHNvcnJ5IHRvIGhlYXIgdGhhdC4gUGxlYXNlIGNhbGwgdXMgYXQgKFhYWCktWFhYLVhYWFggaWYgeW91IHdvdWxkIGxpa2UgdG8gYmUgY29uc3VsdGVkIGJ5IGFub3RoZXIgZG9jdG9yLlwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIlBsZWFzZSBjYWxsIHVzIGF0IChYWFgpLVhYWC1YWFhYIGlmIHlvdSB3b3VsZCBsaWtlIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24uXCI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVlZGJhY2tGb3JtKHtcbiAgYXBwb2ludG1lbnREYXRhLFxuICBwYXRpZW50RGF0YSxcbiAgZG9jdG9yRGF0YSxcbiAgZGlhZ25vc2lzRGF0YSxcbn0pOiBKU1guRWxlbWVudCB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHBhdGllbnRJZCwgYXBwb2ludG1lbnRJZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IGRpYWdub3NpcyA9IGRpYWdub3Npc0RhdGEuYXQoMCk7XG5cbiAgY29uc3QgZm9ybU11bHRpU3RlcERlZmF1bHREYXRhID0ge1xuICAgIFJhdGluZzogXCI1XCIsXG4gICAgRXhwbGFuYXRpb246IFwiXCIsXG4gICAgRmVlbGluZzogXCJcIixcbiAgfTtcblxuICBjb25zdCBbZm9ybU11bHRpU3RlcERhdGEsIHNldGZvcm1NdWx0aVN0ZXBEYXRdID0gdXNlU3RhdGUoXG4gICAgZm9ybU11bHRpU3RlcERlZmF1bHREYXRhXG4gICk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlRm9ybUNoYW5nZShlKSB7XG4gICAgc2V0Zm9ybU11bHRpU3RlcERhdChlKTtcbiAgfVxuXG4gIGNvbnN0IGZvcm1NdWx0aVN0ZXBTY2hlbWE6IEZvcm1NdWx0aVN0ZXBTY2hlbWEgPSB7XG4gICAgMToge1xuICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgaWQ6IFwicmF0aW5nUmVzcG9uc2VcIixcbiAgICAgIG5hbWU6IGBSYXRpbmdgLFxuICAgICAgbGFiZWw6IGBIaSAke3BhdGllbnREYXRhLm5hbWUuZ2l2ZW5OYW1lfSwgb24gYSBzY2FsZSBvZiAxLTEwLCB3b3VsZCB5b3UgcmVjb21tZW5kIERyLiAke2RvY3RvckRhdGEubmFtZS5mYW1pbHlOYW1lfSB0byBhIGZyaWVuZCBvciBmYW1pbHkgbWVtYmVyPyAxID0gV291bGQgbm90IHJlY29tbWVuZCwgMTAgPSBXb3VsZCBzdHJvbmdseSByZWNvbW1lbmRgLFxuICAgICAgZGVmYXVsdENoZWNrZWQ6IGZhbHNlLFxuICAgICAgdmFsdWU6IFwiNVwiLFxuICAgICAgdmFsdWVzOiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIiwgXCI3XCIsIFwiOFwiLCBcIjlcIiwgXCIxMFwiXSxcbiAgICB9LFxuICAgIDI6IHtcbiAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgaWQ6IFwiZGlhZ25vc2lzRXhwbGFuYXRpb25cIixcbiAgICAgIG5hbWU6IFwiRXhwbGFuYXRpb25cIixcbiAgICAgIGxhYmVsOiBgVGhhbmsgeW91LiBZb3Ugd2VyZSBkaWFnbm9zZWQgd2l0aCAke2RpYWdub3Npcy5jb2RlLm5hbWV9LiBEaWQgRHIuICR7ZG9jdG9yRGF0YS5uYW1lLmZhbWlseU5hbWV9IGV4cGxhaW4gaG93IHRvIG1hbmFnZSB0aGlzIGRpYWdub3NpcyBpbiBhIHdheSB5b3UgY291bGQgdW5kZXJzdGFuZD9gLFxuICAgIH0sXG4gICAgMzoge1xuICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICBpZDogXCJkaWFnbm9zaXNGZWVsaW5nXCIsXG4gICAgICBuYW1lOiBcIkZlZWxpbmdcIixcbiAgICAgIGxhYmVsOlxuICAgICAgICBleHBsYW5hdGlvblJlc3BvbnNlKGZvcm1NdWx0aVN0ZXBEYXRhLkV4cGxhbmF0aW9uKSArXG4gICAgICAgIGAgV2UgYXBwcmVjaWF0ZSB0aGUgZmVlZGJhY2ssIG9uZSBsYXN0IHF1ZXN0aW9uOiBob3cgZG8geW91IGZlZWwgYWJvdXQgYmVpbmcgZGlhZ25vc2VkIHdpdGggJHtkaWFnbm9zaXMuY29kZS5uYW1lfT9gLFxuICAgIH0sXG4gICAgNDoge1xuICAgICAgdHlwZTogXCJzdWJtaXRcIixcbiAgICAgIGlkOiBcInVuaXF1ZS1pZC1vZi10aGUtc3VibWl0LWNvbnRyb2xcIixcbiAgICAgIG5hbWU6IFwic3VibWl0XCIsXG4gICAgICBsYWJlbDogXCJUaGFua3MgYWdhaW4hIEhlcmXigJlzIHdoYXQgd2UgaGVhcmQ6XCIsXG4gICAgICB2YWx1ZTogXCJDb25maXJtIHlvdXIgZGV0YWlsc1wiLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3QgYXBpRGF0YSA9IHtcbiAgICBkb2N0b3JJZDogZG9jdG9yRGF0YS5pZCxcbiAgICBhcHBvaW50bWVudElkOiBhcHBvaW50bWVudERhdGEuaWQsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybU11bHRpU3RlcFxuICAgICAgaWQ9XCJhbnktaWQteW91LXdhbnRcIlxuICAgICAgZm9ybVNjaGVtYT17Zm9ybU11bHRpU3RlcFNjaGVtYX1cbiAgICAgIGZvcm1EYXRhPXtmb3JtTXVsdGlTdGVwRGVmYXVsdERhdGF9XG4gICAgICBhcGlEYXRhPXthcGlEYXRhfVxuICAgICAgb25DaGFuZ2U9eyhmb3JtRGF0YSkgPT4gaGFuZGxlRm9ybUNoYW5nZShmb3JtRGF0YS5mb3JtKX1cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS9hcHBvaW50bWVudFwiKTtcbiAgY29uc3QgYXBwb2ludG1lbnRzID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICBsZXQgcGF0aHM6IGFueVtdID0gW107XG5cbiAgY29uc29sZS5sb2cocmVzKTtcblxuICBmb3IgKGxldCBhcHBvaW50bWVudCBvZiBhcHBvaW50bWVudHMpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3YxL2FwcG9pbnRtZW50LyR7YXBwb2ludG1lbnQuaWR9L3BhdGllbnRgXG4gICAgKTtcbiAgICBjb25zdCBwYXRpZW50ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBwYXRocy5wdXNoKHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBhcHBvaW50bWVudElkOiBhcHBvaW50bWVudC5pZCxcbiAgICAgICAgcGF0aWVudElkOiBwYXRpZW50LmlkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgYXBwb2ludG1lbnQgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvcGF0aWVudC8ke3BhcmFtcy5wYXRpZW50SWR9L2FwcG9pbnRtZW50LyR7cGFyYW1zLmFwcG9pbnRtZW50SWR9YFxuICApO1xuICBjb25zb2xlLmxvZyhcIkhlbGxvXCIpO1xuICBjb25zdCBhcHBvaW50bWVudERhdGEgPSBhd2FpdCBhcHBvaW50bWVudC5kYXRhO1xuXG4gIGNvbnN0IHBhdGllbnQgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvdjEvcGF0aWVudC8ke3BhcmFtcy5wYXRpZW50SWR9YFxuICApO1xuICBjb25zdCBwYXRpZW50RGF0YSA9IGF3YWl0IHBhdGllbnQuZGF0YTtcblxuICBjb25zdCBkb2N0b3IgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS9hcHBvaW50bWVudC8ke3BhcmFtcy5hcHBvaW50bWVudElkfS9kb2N0b3JgXG4gICk7XG4gIGNvbnN0IGRvY3RvckRhdGEgPSBhd2FpdCBkb2N0b3IuanNvbigpO1xuXG4gIGNvbnN0IGRpYWdub3NpcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3YxL2FwcG9pbnRtZW50LyR7cGFyYW1zLmFwcG9pbnRtZW50SWR9L2RpYWdub3Nlc2BcbiAgKTtcbiAgY29uc3QgZGlhZ25vc2lzRGF0YSA9IGF3YWl0IGRpYWdub3Npcy5qc29uKCk7XG5cbiAgY29uc29sZS5sb2coZG9jdG9yRGF0YSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYXBwb2ludG1lbnREYXRhOiBhcHBvaW50bWVudERhdGEsXG4gICAgICBwYXRpZW50RGF0YTogcGF0aWVudERhdGEsXG4gICAgICBkb2N0b3JEYXRhOiBkb2N0b3JEYXRhLFxuICAgICAgZGlhZ25vc2lzRGF0YTogZGlhZ25vc2lzRGF0YSxcbiAgICB9LFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJGb3JtTXVsdGlTdGVwIiwiZXhwbGFuYXRpb25SZXNwb25zZSIsImV4cGxhbmF0aW9uIiwiaW5jbHVkZXMiLCJGZWVkYmFja0Zvcm0iLCJhcHBvaW50bWVudERhdGEiLCJwYXRpZW50RGF0YSIsImRvY3RvckRhdGEiLCJkaWFnbm9zaXNEYXRhIiwiaGFuZGxlRm9ybUNoYW5nZSIsImUiLCJzZXRmb3JtTXVsdGlTdGVwRGF0Iiwicm91dGVyIiwicXVlcnkiLCJwYXRpZW50SWQiLCJhcHBvaW50bWVudElkIiwiZGlhZ25vc2lzIiwiYXQiLCJmb3JtTXVsdGlTdGVwRGVmYXVsdERhdGEiLCJSYXRpbmciLCJFeHBsYW5hdGlvbiIsIkZlZWxpbmciLCJmb3JtTXVsdGlTdGVwRGF0YSIsImZvcm1NdWx0aVN0ZXBTY2hlbWEiLCJ0eXBlIiwiaWQiLCJuYW1lIiwibGFiZWwiLCJnaXZlbk5hbWUiLCJmYW1pbHlOYW1lIiwiZGVmYXVsdENoZWNrZWQiLCJ2YWx1ZSIsInZhbHVlcyIsImNvZGUiLCJhcGlEYXRhIiwiZG9jdG9ySWQiLCJmb3JtU2NoZW1hIiwiZm9ybURhdGEiLCJvbkNoYW5nZSIsImZvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/patient/[patientId]/appointment/[appointmentId]/index.tsx\n"));

/***/ })

});