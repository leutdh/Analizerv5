"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/inicio/resultados/amuproba/page",{

/***/ "(app-pages-browser)/./src/app/inicio/resultados/amuproba/page.jsx":
/*!*****************************************************!*\
  !*** ./src/app/inicio/resultados/amuproba/page.jsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PagAmup; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_AfiliadosAmup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/AfiliadosAmup */ \"(app-pages-browser)/./src/components/AfiliadosAmup.js\");\n/* harmony import */ var _components_PrestAmup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/PrestAmup */ \"(app-pages-browser)/./src/components/PrestAmup.js\");\n/* harmony import */ var _components_ResultadosAmupEvol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ResultadosAmupEvol */ \"(app-pages-browser)/./src/components/ResultadosAmupEvol.js\");\n/* harmony import */ var _components_CargAmup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/CargAmup */ \"(app-pages-browser)/./src/components/CargAmup.js\");\n/* harmony import */ var _context_search_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/search.context */ \"(app-pages-browser)/./src/context/search.context.jsx\");\n/* harmony import */ var _context_auth_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/context/auth.context */ \"(app-pages-browser)/./src/context/auth.context.jsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_Cargando__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Cargando */ \"(app-pages-browser)/./src/components/Cargando.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction PagAmup() {\n    _s();\n    const { resultados } = (0,_context_search_context__WEBPACK_IMPORTED_MODULE_5__.useSearch)();\n    const { user, loading } = (0,_context_auth_context__WEBPACK_IMPORTED_MODULE_6__.useAuth)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{\n        if (!user) {\n            router.push(\"/inicio\");\n        }\n    }, []);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cargando__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\Programacion\\\\Proyectos\\\\Analizer\\\\analizer\\\\src\\\\app\\\\inicio\\\\resultados\\\\amuproba\\\\page.jsx\",\n        lineNumber: 23,\n        columnNumber: 22\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto mt-2 p-5 min-h-screen border rounded-lg bg-gradient-to-r from-cyan-400/10 via-cyan-300/10 to-cyan-400/10 shadow-sm shadow-slate-950/10 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AfiliadosAmup__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                resultados: resultados.AmupSoc\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\Programacion\\\\Proyectos\\\\Analizer\\\\analizer\\\\src\\\\app\\\\inicio\\\\resultados\\\\amuproba\\\\page.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\Programacion\\\\Proyectos\\\\Analizer\\\\analizer\\\\src\\\\app\\\\inicio\\\\resultados\\\\amuproba\\\\page.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PrestAmup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                resultados: resultados.AmupPres\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\Programacion\\\\Proyectos\\\\Analizer\\\\analizer\\\\src\\\\app\\\\inicio\\\\resultados\\\\amuproba\\\\page.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\Programacion\\\\Proyectos\\\\Analizer\\\\analizer\\\\src\\\\app\\\\inicio\\\\resultados\\\\amuproba\\\\page.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ResultadosAmupEvol__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                resultados: resultados.amupEvol\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\Programacion\\\\Proyectos\\\\Analizer\\\\analizer\\\\src\\\\app\\\\inicio\\\\resultados\\\\amuproba\\\\page.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\Programacion\\\\Proyectos\\\\Analizer\\\\analizer\\\\src\\\\app\\\\inicio\\\\resultados\\\\amuproba\\\\page.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\Programacion\\\\Proyectos\\\\Analizer\\\\analizer\\\\src\\\\app\\\\inicio\\\\resultados\\\\amuproba\\\\page.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(PagAmup, \"4M9vSob2noSPzCRoI4gZnSpnbe4=\", false, function() {\n    return [\n        _context_search_context__WEBPACK_IMPORTED_MODULE_5__.useSearch,\n        _context_auth_context__WEBPACK_IMPORTED_MODULE_6__.useAuth,\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = PagAmup;\nvar _c;\n$RefreshReg$(_c, \"PagAmup\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaW5pY2lvL3Jlc3VsdGFkb3MvYW11cHJvYmEvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3VEO0FBQ1I7QUFDa0I7QUFDcEI7QUFDUTtBQUNKO0FBQ0w7QUFDVjtBQUNXO0FBRTlCLFNBQVNTOztJQUN0QixNQUFNLEVBQUVDLFVBQVUsRUFBRSxHQUFHTixrRUFBU0E7SUFDaEMsTUFBTSxFQUFFTyxJQUFJLEVBQUVDLE9BQU8sRUFBRSxHQUFHUCw4REFBT0E7SUFDakMsTUFBTVEsU0FBU1AsMERBQVNBO0lBRXhCQyxnREFBU0EsQ0FBQztRQUNSLElBQUksQ0FBQ0ksTUFBTTtZQUNURSxPQUFPQyxJQUFJLENBQUM7UUFDZDtJQUNGLEdBQUcsRUFBRTtJQUVMLElBQUdGLFNBQVMscUJBQU8sOERBQUNKLDREQUFRQTs7Ozs7SUFFNUIscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDaEIsaUVBQWFBO2dCQUFDVSxZQUFZQSxXQUFXTyxPQUFPOzs7Ozs7MEJBQzdDLDhEQUFDQztnQkFBR0YsV0FBVTs7Ozs7OzBCQUNkLDhEQUFDZiw2REFBU0E7Z0JBQUNTLFlBQVlBLFdBQVdTLFFBQVE7Ozs7OzswQkFDMUMsOERBQUNEO2dCQUFHRixXQUFVOzs7Ozs7MEJBQ2QsOERBQUNkLHNFQUFrQkE7Z0JBQUNRLFlBQVlBLFdBQVdVLFFBQVE7Ozs7OzswQkFDbkQsOERBQUNGO2dCQUFHRixXQUFVOzs7Ozs7Ozs7Ozs7QUFJcEI7R0F4QndCUDs7UUFDQ0wsOERBQVNBO1FBQ05DLDBEQUFPQTtRQUNsQkMsc0RBQVNBOzs7S0FIRkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9pbmljaW8vcmVzdWx0YWRvcy9hbXVwcm9iYS9wYWdlLmpzeD9hNWYyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgQWZpbGlhZG9zQW11cCBmcm9tIFwiQC9jb21wb25lbnRzL0FmaWxpYWRvc0FtdXBcIjtcclxuaW1wb3J0IFByZXN0QW11cCBmcm9tIFwiQC9jb21wb25lbnRzL1ByZXN0QW11cFwiO1xyXG5pbXBvcnQgUmVzdWx0YWRvc0FtdXBFdm9sIGZyb20gXCJAL2NvbXBvbmVudHMvUmVzdWx0YWRvc0FtdXBFdm9sXCI7XHJcbmltcG9ydCBDYXJnQW11cCBmcm9tIFwiQC9jb21wb25lbnRzL0NhcmdBbXVwXCI7XHJcbmltcG9ydCB7IHVzZVNlYXJjaCB9IGZyb20gXCJAL2NvbnRleHQvc2VhcmNoLmNvbnRleHRcIjtcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCJAL2NvbnRleHQvYXV0aC5jb250ZXh0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXJnYW5kbyBmcm9tIFwiQC9jb21wb25lbnRzL0NhcmdhbmRvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdBbXVwKCkge1xyXG4gIGNvbnN0IHsgcmVzdWx0YWRvcyB9ID0gdXNlU2VhcmNoKCk7XHJcbiAgY29uc3QgeyB1c2VyLCBsb2FkaW5nIH0gPSB1c2VBdXRoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvaW5pY2lvXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYobG9hZGluZykgcmV0dXJuIDxDYXJnYW5kbyAvPlxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG10LTIgcC01IG1pbi1oLXNjcmVlbiBib3JkZXIgcm91bmRlZC1sZyBiZy1ncmFkaWVudC10by1yIGZyb20tY3lhbi00MDAvMTAgdmlhLWN5YW4tMzAwLzEwIHRvLWN5YW4tNDAwLzEwIHNoYWRvdy1zbSBzaGFkb3ctc2xhdGUtOTUwLzEwIFwiPlxyXG4gICAgICA8QWZpbGlhZG9zQW11cCByZXN1bHRhZG9zPXtyZXN1bHRhZG9zLkFtdXBTb2N9IC8+XHJcbiAgICAgIDxociBjbGFzc05hbWU9XCJteS01IGgtcHggYm9yZGVyLXQtMCBiZy10cmFuc3BhcmVudCBiZy1ncmFkaWVudC10by1yIGZyb20tdHJhbnNwYXJlbnQgdmlhLW5ldXRyYWwtNTAwIHRvLXRyYW5zcGFyZW50IG9wYWNpdHktMjUgZGFyazpvcGFjaXR5LTEwMFwiIC8+XHJcbiAgICAgIDxQcmVzdEFtdXAgcmVzdWx0YWRvcz17cmVzdWx0YWRvcy5BbXVwUHJlc30gLz5cclxuICAgICAgPGhyIGNsYXNzTmFtZT1cIm15LTUgaC1weCBib3JkZXItdC0wIGJnLXRyYW5zcGFyZW50IGJnLWdyYWRpZW50LXRvLXIgZnJvbS10cmFuc3BhcmVudCB2aWEtbmV1dHJhbC01MDAgdG8tdHJhbnNwYXJlbnQgb3BhY2l0eS0yNSBkYXJrOm9wYWNpdHktMTAwXCIgLz5cclxuICAgICAgPFJlc3VsdGFkb3NBbXVwRXZvbCByZXN1bHRhZG9zPXtyZXN1bHRhZG9zLmFtdXBFdm9sfSAvPlxyXG4gICAgICA8aHIgY2xhc3NOYW1lPVwibXktNSBoLXB4IGJvcmRlci10LTAgYmctdHJhbnNwYXJlbnQgYmctZ3JhZGllbnQtdG8tciBmcm9tLXRyYW5zcGFyZW50IHZpYS1uZXV0cmFsLTUwMCB0by10cmFuc3BhcmVudCBvcGFjaXR5LTI1IGRhcms6b3BhY2l0eS0xMDBcIiAvPlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkFmaWxpYWRvc0FtdXAiLCJQcmVzdEFtdXAiLCJSZXN1bHRhZG9zQW11cEV2b2wiLCJDYXJnQW11cCIsInVzZVNlYXJjaCIsInVzZUF1dGgiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJDYXJnYW5kbyIsIlBhZ0FtdXAiLCJyZXN1bHRhZG9zIiwidXNlciIsImxvYWRpbmciLCJyb3V0ZXIiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiQW11cFNvYyIsImhyIiwiQW11cFByZXMiLCJhbXVwRXZvbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/inicio/resultados/amuproba/page.jsx\n"));

/***/ })

});