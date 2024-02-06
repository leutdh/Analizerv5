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

/***/ "(app-pages-browser)/./src/context/search.context.jsx":
/*!****************************************!*\
  !*** ./src/context/search.context.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SearchProvider: function() { return /* binding */ SearchProvider; },\n/* harmony export */   useSearch: function() { return /* binding */ useSearch; },\n/* harmony export */   useSearchProv: function() { return /* binding */ useSearchProv; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config/endpoints */ \"(app-pages-browser)/./src/config/endpoints.js\");\n/* harmony import */ var _context_dni_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/dni.context */ \"(app-pages-browser)/./src/context/dni.context.jsx\");\n/* __next_internal_client_entry_do_not_use__ SearchProvider,useSearch,useSearchProv auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\n// Crea el contexto de búsqueda\nconst SearchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n// Proveedor de contexto de búsqueda\nconst SearchProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const resultado = useSearchProv();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchContext.Provider, {\n        value: resultado,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\Programacion\\\\Proyectos\\\\Analizer\\\\analizer\\\\src\\\\context\\\\search.context.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchProvider, \"t1TVWE2V3/ldf7qsZIN1TkXmhnc=\", false, function() {\n    return [\n        useSearchProv\n    ];\n});\n_c = SearchProvider;\n// Hook personalizado para acceder al contexto de búsqueda\nconst useSearch = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SearchContext);\n};\n_s1(useSearch, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n// Hook personalizado para realizar búsquedas\nfunction useSearchProv() {\n    _s2();\n    const { dni } = (0,_context_dni_context__WEBPACK_IMPORTED_MODULE_3__.useDni)();\n    const [resultados, setResultados] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        admEvol: [],\n        simaEvol: [],\n        facEvol: [],\n        amupEvol: [],\n        SimaSoc: [],\n        AdmSoc: [],\n        FacSoc: [],\n        AmupSoc: [],\n        ResumenSima: [],\n        ResumenAdm: [],\n        SimaPres: [],\n        FacPres: [],\n        AmupPres: [],\n        AdmPres: [],\n        SimaCarg: [],\n        AdmCarg: [],\n        FacCarg: [],\n        AmupCarg: []\n    });\n    // Función para realizar la búsqueda de datos\n    const handleBuscar = async (dni)=>{\n        try {\n            setLoading(true);\n            // Realiza la búsqueda en ambas API y espera a que se completen ambas\n            const [datosEvol, datosSoc, datosRes, datosPrest, datosCargos] = await Promise.all([\n                (0,_config_endpoints__WEBPACK_IMPORTED_MODULE_2__.buscarDatos)(dni),\n                (0,_config_endpoints__WEBPACK_IMPORTED_MODULE_2__.buscarDatosSoc)(dni),\n                (0,_config_endpoints__WEBPACK_IMPORTED_MODULE_2__.buscarDatosRes)(dni),\n                (0,_config_endpoints__WEBPACK_IMPORTED_MODULE_2__.buscarDatosPrest)(dni),\n                (0,_config_endpoints__WEBPACK_IMPORTED_MODULE_2__.buscarDatosCargos)(dni)\n            ]);\n            // Combina los resultados de ambas búsquedas\n            const resultadosCombinados = {\n                admEvol: datosEvol.AdmEvol || [],\n                simaEvol: datosEvol.SimaEvol || [],\n                facEvol: datosEvol.FacEvol || [],\n                amupEvol: datosEvol.AmupEvol || [],\n                SimaSoc: datosSoc.SimaSoc || [],\n                AmupSoc: datosSoc.AmupSoc || [],\n                AdmSoc: datosSoc.AdmSoc || [],\n                FacSoc: datosSoc.FacSoc || [],\n                ResumenSima: datosRes.ResumenSima || [],\n                ResumenAdm: datosRes.ResumenAdm || [],\n                SimaPres: datosPrest.SimaPres || [],\n                AmupPres: datosPrest.AmupPres || [],\n                AdmPres: datosPrest.AdmPres || [],\n                FacPres: datosPrest.FacPres || [],\n                SimaCarg: datosCargos.SimaCarg || [],\n                AdmCarg: datosCargos.AdmCarg || [],\n                FacCarg: datosCargos.FacCarg || [],\n                AmupCarg: datosCargos.AmupCarg || []\n            };\n            // Actualiza el estado con los resultados combinados\n            setResultados(resultadosCombinados);\n        } catch (error) {\n            console.error(\"Error al buscar datos:\", error);\n        } finally{\n            // Indica que la búsqueda ha terminado, ya sea con éxito o con error\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Realiza la búsqueda al cargar el componente y cada vez que cambie el DNI\n        handleBuscar(dni);\n    }, [\n        dni\n    ]);\n    return {\n        resultados,\n        handleBuscar\n    };\n}\n_s2(useSearchProv, \"MUaYi8sAaE2yUKr8aJN0jtudV5Y=\", false, function() {\n    return [\n        _context_dni_context__WEBPACK_IMPORTED_MODULE_3__.useDni\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"SearchProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L3NlYXJjaC5jb250ZXh0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3VFO0FBTzNDO0FBQ21CO0FBRS9DLCtCQUErQjtBQUMvQixNQUFNVSw4QkFBZ0JULG9EQUFhQTtBQUVuQyxvQ0FBb0M7QUFDN0IsTUFBTVUsaUJBQWlCO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUN6QyxNQUFNQyxZQUFZQztJQUNsQixxQkFDRSw4REFBQ0osY0FBY0ssUUFBUTtRQUFDQyxPQUFPSDtrQkFDNUJEOzs7Ozs7QUFHUCxFQUFFO0dBUFdEOztRQUNPRzs7O0tBRFBIO0FBUWIsMERBQTBEO0FBQ25ELE1BQU1NLFlBQVk7O0lBQ3ZCLE9BQU9mLGlEQUFVQSxDQUFDUTtBQUNwQixFQUFFO0lBRldPO0FBR2IsNkNBQTZDO0FBQ3RDLFNBQVNIOztJQUNkLE1BQU0sRUFBRUksR0FBRyxFQUFFLEdBQUdULDREQUFNQTtJQUN0QixNQUFNLENBQUNVLFlBQVlDLGNBQWMsR0FBR3BCLCtDQUFRQSxDQUFDO1FBQzNDcUIsU0FBUyxFQUFFO1FBQ1hDLFVBQVUsRUFBRTtRQUNaQyxTQUFTLEVBQUU7UUFDWEMsVUFBVSxFQUFFO1FBQ1pDLFNBQVMsRUFBRTtRQUNYQyxRQUFRLEVBQUU7UUFDVkMsUUFBUSxFQUFFO1FBQ1ZDLFNBQVMsRUFBRTtRQUNYQyxhQUFhLEVBQUU7UUFDZkMsWUFBWSxFQUFFO1FBQ2RDLFVBQVUsRUFBRTtRQUNaQyxTQUFTLEVBQUU7UUFDWEMsVUFBVSxFQUFFO1FBQ1pDLFNBQVMsRUFBRTtRQUNYQyxVQUFVLEVBQUU7UUFDWkMsU0FBUyxFQUFFO1FBQ1hDLFNBQVMsRUFBRTtRQUNYQyxVQUFVLEVBQUU7SUFDZDtJQUVBLDZDQUE2QztJQUM3QyxNQUFNQyxlQUFlLE9BQU9yQjtRQUMxQixJQUFJO1lBRUZzQixXQUFXO1lBQ1gscUVBQXFFO1lBQ3JFLE1BQU0sQ0FBQ0MsV0FBV0MsVUFBVUMsVUFBVUMsWUFBWUMsWUFBWSxHQUM1RCxNQUFNQyxRQUFRQyxHQUFHLENBQUM7Z0JBQ2hCM0MsOERBQVdBLENBQUNjO2dCQUNaYixpRUFBY0EsQ0FBQ2E7Z0JBQ2ZaLGlFQUFjQSxDQUFDWTtnQkFDZlgsbUVBQWdCQSxDQUFDVztnQkFDakJWLG9FQUFpQkEsQ0FBQ1U7YUFDbkI7WUFFSCw0Q0FBNEM7WUFDNUMsTUFBTThCLHVCQUF1QjtnQkFDM0IzQixTQUFTb0IsVUFBVVEsT0FBTyxJQUFJLEVBQUU7Z0JBQ2hDM0IsVUFBVW1CLFVBQVVTLFFBQVEsSUFBSSxFQUFFO2dCQUNsQzNCLFNBQVNrQixVQUFVVSxPQUFPLElBQUksRUFBRTtnQkFDaEMzQixVQUFVaUIsVUFBVVcsUUFBUSxJQUFJLEVBQUU7Z0JBQ2xDM0IsU0FBU2lCLFNBQVNqQixPQUFPLElBQUksRUFBRTtnQkFDL0JHLFNBQVNjLFNBQVNkLE9BQU8sSUFBSSxFQUFFO2dCQUMvQkYsUUFBUWdCLFNBQVNoQixNQUFNLElBQUksRUFBRTtnQkFDN0JDLFFBQVFlLFNBQVNmLE1BQU0sSUFBSSxFQUFFO2dCQUM3QkUsYUFBYWMsU0FBU2QsV0FBVyxJQUFJLEVBQUU7Z0JBQ3ZDQyxZQUFZYSxTQUFTYixVQUFVLElBQUksRUFBRTtnQkFDckNDLFVBQVVhLFdBQVdiLFFBQVEsSUFBSSxFQUFFO2dCQUNuQ0UsVUFBVVcsV0FBV1gsUUFBUSxJQUFJLEVBQUU7Z0JBQ25DQyxTQUFTVSxXQUFXVixPQUFPLElBQUksRUFBRTtnQkFDakNGLFNBQVNZLFdBQVdaLE9BQU8sSUFBSSxFQUFFO2dCQUNqQ0csVUFBVVUsWUFBWVYsUUFBUSxJQUFJLEVBQUU7Z0JBQ3BDQyxTQUFTUyxZQUFZVCxPQUFPLElBQUksRUFBRTtnQkFDbENDLFNBQVNRLFlBQVlSLE9BQU8sSUFBSSxFQUFFO2dCQUNsQ0MsVUFBVU8sWUFBWVAsUUFBUSxJQUFJLEVBQUU7WUFDdEM7WUFFQSxvREFBb0Q7WUFDcERsQixjQUFjNEI7UUFDaEIsRUFBRSxPQUFPSyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQywwQkFBMEJBO1FBQzFDLFNBQ1E7WUFDTixvRUFBb0U7WUFDcEViLFdBQVc7UUFDYjtJQUNGO0lBRUFyQyxnREFBU0EsQ0FBQztRQUNSLDJFQUEyRTtRQUMzRW9DLGFBQWFyQjtJQUNmLEdBQUc7UUFBQ0E7S0FBSTtJQUVSLE9BQU87UUFDTEM7UUFDQW9CO0lBQ0Y7QUFDRjtJQWhGZ0J6Qjs7UUFDRUwsd0RBQU1BIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0L3NlYXJjaC5jb250ZXh0LmpzeD8yMDVmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgYnVzY2FyRGF0b3MsXHJcbiAgYnVzY2FyRGF0b3NTb2MsXHJcbiAgYnVzY2FyRGF0b3NSZXMsXHJcbiAgYnVzY2FyRGF0b3NQcmVzdCxcclxuICBidXNjYXJEYXRvc0NhcmdvcyxcclxufSBmcm9tIFwiQC9jb25maWcvZW5kcG9pbnRzXCI7XHJcbmltcG9ydCB7IHVzZURuaSB9IGZyb20gXCJAL2NvbnRleHQvZG5pLmNvbnRleHRcIjtcclxuXHJcbi8vIENyZWEgZWwgY29udGV4dG8gZGUgYsO6c3F1ZWRhXHJcbmNvbnN0IFNlYXJjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG4vLyBQcm92ZWVkb3IgZGUgY29udGV4dG8gZGUgYsO6c3F1ZWRhXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCByZXN1bHRhZG8gPSB1c2VTZWFyY2hQcm92KCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWFyY2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtyZXN1bHRhZG99PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1NlYXJjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuLy8gSG9vayBwZXJzb25hbGl6YWRvIHBhcmEgYWNjZWRlciBhbCBjb250ZXh0byBkZSBiw7pzcXVlZGFcclxuZXhwb3J0IGNvbnN0IHVzZVNlYXJjaCA9ICgpID0+IHtcclxuICByZXR1cm4gdXNlQ29udGV4dChTZWFyY2hDb250ZXh0KTtcclxufTtcclxuLy8gSG9vayBwZXJzb25hbGl6YWRvIHBhcmEgcmVhbGl6YXIgYsO6c3F1ZWRhc1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlU2VhcmNoUHJvdigpIHtcclxuICBjb25zdCB7IGRuaSB9ID0gdXNlRG5pKCk7XHJcbiAgY29uc3QgW3Jlc3VsdGFkb3MsIHNldFJlc3VsdGFkb3NdID0gdXNlU3RhdGUoe1xyXG4gICAgYWRtRXZvbDogW10sXHJcbiAgICBzaW1hRXZvbDogW10sXHJcbiAgICBmYWNFdm9sOiBbXSxcclxuICAgIGFtdXBFdm9sOiBbXSxcclxuICAgIFNpbWFTb2M6IFtdLFxyXG4gICAgQWRtU29jOiBbXSxcclxuICAgIEZhY1NvYzogW10sXHJcbiAgICBBbXVwU29jOiBbXSxcclxuICAgIFJlc3VtZW5TaW1hOiBbXSxcclxuICAgIFJlc3VtZW5BZG06IFtdLFxyXG4gICAgU2ltYVByZXM6IFtdLFxyXG4gICAgRmFjUHJlczogW10sXHJcbiAgICBBbXVwUHJlczogW10sXHJcbiAgICBBZG1QcmVzOiBbXSxcclxuICAgIFNpbWFDYXJnOiBbXSxcclxuICAgIEFkbUNhcmc6IFtdLFxyXG4gICAgRmFjQ2FyZzogW10sXHJcbiAgICBBbXVwQ2FyZzogW10sXHJcbiAgfSk7XHJcblxyXG4gIC8vIEZ1bmNpw7NuIHBhcmEgcmVhbGl6YXIgbGEgYsO6c3F1ZWRhIGRlIGRhdG9zXHJcbiAgY29uc3QgaGFuZGxlQnVzY2FyID0gYXN5bmMgKGRuaSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIC8vIFJlYWxpemEgbGEgYsO6c3F1ZWRhIGVuIGFtYmFzIEFQSSB5IGVzcGVyYSBhIHF1ZSBzZSBjb21wbGV0ZW4gYW1iYXNcclxuICAgICAgY29uc3QgW2RhdG9zRXZvbCwgZGF0b3NTb2MsIGRhdG9zUmVzLCBkYXRvc1ByZXN0LCBkYXRvc0Nhcmdvc10gPVxyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgIGJ1c2NhckRhdG9zKGRuaSksXHJcbiAgICAgICAgICBidXNjYXJEYXRvc1NvYyhkbmkpLFxyXG4gICAgICAgICAgYnVzY2FyRGF0b3NSZXMoZG5pKSxcclxuICAgICAgICAgIGJ1c2NhckRhdG9zUHJlc3QoZG5pKSxcclxuICAgICAgICAgIGJ1c2NhckRhdG9zQ2FyZ29zKGRuaSksXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAvLyBDb21iaW5hIGxvcyByZXN1bHRhZG9zIGRlIGFtYmFzIGLDunNxdWVkYXNcclxuICAgICAgY29uc3QgcmVzdWx0YWRvc0NvbWJpbmFkb3MgPSB7XHJcbiAgICAgICAgYWRtRXZvbDogZGF0b3NFdm9sLkFkbUV2b2wgfHwgW10sXHJcbiAgICAgICAgc2ltYUV2b2w6IGRhdG9zRXZvbC5TaW1hRXZvbCB8fCBbXSxcclxuICAgICAgICBmYWNFdm9sOiBkYXRvc0V2b2wuRmFjRXZvbCB8fCBbXSxcclxuICAgICAgICBhbXVwRXZvbDogZGF0b3NFdm9sLkFtdXBFdm9sIHx8IFtdLFxyXG4gICAgICAgIFNpbWFTb2M6IGRhdG9zU29jLlNpbWFTb2MgfHwgW10sXHJcbiAgICAgICAgQW11cFNvYzogZGF0b3NTb2MuQW11cFNvYyB8fCBbXSxcclxuICAgICAgICBBZG1Tb2M6IGRhdG9zU29jLkFkbVNvYyB8fCBbXSxcclxuICAgICAgICBGYWNTb2M6IGRhdG9zU29jLkZhY1NvYyB8fCBbXSxcclxuICAgICAgICBSZXN1bWVuU2ltYTogZGF0b3NSZXMuUmVzdW1lblNpbWEgfHwgW10sXHJcbiAgICAgICAgUmVzdW1lbkFkbTogZGF0b3NSZXMuUmVzdW1lbkFkbSB8fCBbXSxcclxuICAgICAgICBTaW1hUHJlczogZGF0b3NQcmVzdC5TaW1hUHJlcyB8fCBbXSxcclxuICAgICAgICBBbXVwUHJlczogZGF0b3NQcmVzdC5BbXVwUHJlcyB8fCBbXSxcclxuICAgICAgICBBZG1QcmVzOiBkYXRvc1ByZXN0LkFkbVByZXMgfHwgW10sXHJcbiAgICAgICAgRmFjUHJlczogZGF0b3NQcmVzdC5GYWNQcmVzIHx8IFtdLFxyXG4gICAgICAgIFNpbWFDYXJnOiBkYXRvc0Nhcmdvcy5TaW1hQ2FyZyB8fCBbXSxcclxuICAgICAgICBBZG1DYXJnOiBkYXRvc0Nhcmdvcy5BZG1DYXJnIHx8IFtdLFxyXG4gICAgICAgIEZhY0Nhcmc6IGRhdG9zQ2FyZ29zLkZhY0NhcmcgfHwgW10sXHJcbiAgICAgICAgQW11cENhcmc6IGRhdG9zQ2FyZ29zLkFtdXBDYXJnIHx8IFtdLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgLy8gQWN0dWFsaXphIGVsIGVzdGFkbyBjb24gbG9zIHJlc3VsdGFkb3MgY29tYmluYWRvc1xyXG4gICAgICBzZXRSZXN1bHRhZG9zKHJlc3VsdGFkb3NDb21iaW5hZG9zKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhbCBidXNjYXIgZGF0b3M6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAvLyBJbmRpY2EgcXVlIGxhIGLDunNxdWVkYSBoYSB0ZXJtaW5hZG8sIHlhIHNlYSBjb24gw6l4aXRvIG8gY29uIGVycm9yXHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBSZWFsaXphIGxhIGLDunNxdWVkYSBhbCBjYXJnYXIgZWwgY29tcG9uZW50ZSB5IGNhZGEgdmV6IHF1ZSBjYW1iaWUgZWwgRE5JXHJcbiAgICBoYW5kbGVCdXNjYXIoZG5pKTtcclxuICB9LCBbZG5pXSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZXN1bHRhZG9zLFxyXG4gICAgaGFuZGxlQnVzY2FyLFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJidXNjYXJEYXRvcyIsImJ1c2NhckRhdG9zU29jIiwiYnVzY2FyRGF0b3NSZXMiLCJidXNjYXJEYXRvc1ByZXN0IiwiYnVzY2FyRGF0b3NDYXJnb3MiLCJ1c2VEbmkiLCJTZWFyY2hDb250ZXh0IiwiU2VhcmNoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInJlc3VsdGFkbyIsInVzZVNlYXJjaFByb3YiLCJQcm92aWRlciIsInZhbHVlIiwidXNlU2VhcmNoIiwiZG5pIiwicmVzdWx0YWRvcyIsInNldFJlc3VsdGFkb3MiLCJhZG1Fdm9sIiwic2ltYUV2b2wiLCJmYWNFdm9sIiwiYW11cEV2b2wiLCJTaW1hU29jIiwiQWRtU29jIiwiRmFjU29jIiwiQW11cFNvYyIsIlJlc3VtZW5TaW1hIiwiUmVzdW1lbkFkbSIsIlNpbWFQcmVzIiwiRmFjUHJlcyIsIkFtdXBQcmVzIiwiQWRtUHJlcyIsIlNpbWFDYXJnIiwiQWRtQ2FyZyIsIkZhY0NhcmciLCJBbXVwQ2FyZyIsImhhbmRsZUJ1c2NhciIsInNldExvYWRpbmciLCJkYXRvc0V2b2wiLCJkYXRvc1NvYyIsImRhdG9zUmVzIiwiZGF0b3NQcmVzdCIsImRhdG9zQ2FyZ29zIiwiUHJvbWlzZSIsImFsbCIsInJlc3VsdGFkb3NDb21iaW5hZG9zIiwiQWRtRXZvbCIsIlNpbWFFdm9sIiwiRmFjRXZvbCIsIkFtdXBFdm9sIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/search.context.jsx\n"));

/***/ })

});