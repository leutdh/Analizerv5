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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SearchProvider: function() { return /* binding */ SearchProvider; },\n/* harmony export */   useSearch: function() { return /* binding */ useSearch; },\n/* harmony export */   useSearchProv: function() { return /* binding */ useSearchProv; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config/endpoints */ \"(app-pages-browser)/./src/config/endpoints.js\");\n/* harmony import */ var _context_dni_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/dni.context */ \"(app-pages-browser)/./src/context/dni.context.jsx\");\n/* __next_internal_client_entry_do_not_use__ SearchProvider,useSearch,useSearchProv auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\n// Crea el contexto de búsqueda\nconst SearchContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\n// Proveedor de contexto de búsqueda\nconst SearchProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const resultado = useSearchProv();\n    const [loading, setLoading1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SearchContext.Provider, {\n        value: resultado,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\Desktop\\\\Programacion\\\\Proyectos\\\\Analizer\\\\analizer\\\\src\\\\context\\\\search.context.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchProvider, \"EWcsmOeDgQtmKpVeLrhY8yi8fhg=\", false, function() {\n    return [\n        useSearchProv\n    ];\n});\n_c = SearchProvider;\n// Hook personalizado para acceder al contexto de búsqueda\nconst useSearch = ()=>{\n    _s1();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SearchContext);\n};\n_s1(useSearch, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n// Hook personalizado para realizar búsquedas\nfunction useSearchProv() {\n    _s2();\n    const { dni } = (0,_context_dni_context__WEBPACK_IMPORTED_MODULE_3__.useDni)();\n    const [resultados, setResultados] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        admEvol: [],\n        simaEvol: [],\n        facEvol: [],\n        amupEvol: [],\n        SimaSoc: [],\n        AdmSoc: [],\n        FacSoc: [],\n        AmupSoc: [],\n        ResumenSima: [],\n        ResumenAdm: [],\n        SimaPres: [],\n        FacPres: [],\n        AmupPres: [],\n        AdmPres: [],\n        SimaCarg: [],\n        AdmCarg: [],\n        FacCarg: [],\n        AmupCarg: []\n    });\n    // Función para realizar la búsqueda de datos\n    const handleBuscar = async (dni)=>{\n        try {\n            setLoading(true);\n            // Realiza la búsqueda en ambas API y espera a que se completen ambas\n            const [datosEvol, datosSoc, datosRes, datosPrest, datosCargos] = await Promise.all([\n                (0,_config_endpoints__WEBPACK_IMPORTED_MODULE_2__.buscarDatos)(dni),\n                (0,_config_endpoints__WEBPACK_IMPORTED_MODULE_2__.buscarDatosSoc)(dni),\n                (0,_config_endpoints__WEBPACK_IMPORTED_MODULE_2__.buscarDatosRes)(dni),\n                (0,_config_endpoints__WEBPACK_IMPORTED_MODULE_2__.buscarDatosPrest)(dni),\n                (0,_config_endpoints__WEBPACK_IMPORTED_MODULE_2__.buscarDatosCargos)(dni)\n            ]);\n            // Combina los resultados de ambas búsquedas\n            const resultadosCombinados = {\n                admEvol: datosEvol.AdmEvol || [],\n                simaEvol: datosEvol.SimaEvol || [],\n                facEvol: datosEvol.FacEvol || [],\n                amupEvol: datosEvol.AmupEvol || [],\n                SimaSoc: datosSoc.SimaSoc || [],\n                AmupSoc: datosSoc.AmupSoc || [],\n                AdmSoc: datosSoc.AdmSoc || [],\n                FacSoc: datosSoc.FacSoc || [],\n                ResumenSima: datosRes.ResumenSima || [],\n                ResumenAdm: datosRes.ResumenAdm || [],\n                SimaPres: datosPrest.SimaPres || [],\n                AmupPres: datosPrest.AmupPres || [],\n                AdmPres: datosPrest.AdmPres || [],\n                FacPres: datosPrest.FacPres || [],\n                SimaCarg: datosCargos.SimaCarg || [],\n                AdmCarg: datosCargos.AdmCarg || [],\n                FacCarg: datosCargos.FacCarg || [],\n                AmupCarg: datosCargos.AmupCarg || []\n            };\n            // Actualiza el estado con los resultados combinados\n            setResultados(resultadosCombinados);\n        } catch (error) {\n            console.error(\"Error al buscar datos:\", error);\n        } finally{\n            // Indica que la búsqueda ha terminado, ya sea con éxito o con error\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Realiza la búsqueda al cargar el componente y cada vez que cambie el DNI\n        handleBuscar(dni);\n    }, [\n        dni\n    ]);\n    return {\n        resultados,\n        handleBuscar\n    };\n}\n_s2(useSearchProv, \"MUaYi8sAaE2yUKr8aJN0jtudV5Y=\", false, function() {\n    return [\n        _context_dni_context__WEBPACK_IMPORTED_MODULE_3__.useDni\n    ];\n});\nvar _c;\n$RefreshReg$(_c, \"SearchProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb250ZXh0L3NlYXJjaC5jb250ZXh0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3VFO0FBTzNDO0FBQ21CO0FBRS9DLCtCQUErQjtBQUMvQixNQUFNVSw4QkFBZ0JULG9EQUFhQTtBQUVuQyxvQ0FBb0M7QUFDN0IsTUFBTVUsaUJBQWlCO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUN6QyxNQUFNQyxZQUFZQztJQUNsQixNQUFNLENBQUNDLFNBQVNDLFlBQVcsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3ZDLHFCQUNFLDhEQUFDVSxjQUFjTyxRQUFRO1FBQUNDLE9BQU9MO2tCQUM1QkQ7Ozs7OztBQUdQLEVBQUU7R0FSV0Q7O1FBQ09HOzs7S0FEUEg7QUFTYiwwREFBMEQ7QUFDbkQsTUFBTVEsWUFBWTs7SUFDdkIsT0FBT2pCLGlEQUFVQSxDQUFDUTtBQUNwQixFQUFFO0lBRldTO0FBR2IsNkNBQTZDO0FBQ3RDLFNBQVNMOztJQUNkLE1BQU0sRUFBRU0sR0FBRyxFQUFFLEdBQUdYLDREQUFNQTtJQUV0QixNQUFNLENBQUNZLFlBQVlDLGNBQWMsR0FBR3RCLCtDQUFRQSxDQUFDO1FBQzNDdUIsU0FBUyxFQUFFO1FBQ1hDLFVBQVUsRUFBRTtRQUNaQyxTQUFTLEVBQUU7UUFDWEMsVUFBVSxFQUFFO1FBQ1pDLFNBQVMsRUFBRTtRQUNYQyxRQUFRLEVBQUU7UUFDVkMsUUFBUSxFQUFFO1FBQ1ZDLFNBQVMsRUFBRTtRQUNYQyxhQUFhLEVBQUU7UUFDZkMsWUFBWSxFQUFFO1FBQ2RDLFVBQVUsRUFBRTtRQUNaQyxTQUFTLEVBQUU7UUFDWEMsVUFBVSxFQUFFO1FBQ1pDLFNBQVMsRUFBRTtRQUNYQyxVQUFVLEVBQUU7UUFDWkMsU0FBUyxFQUFFO1FBQ1hDLFNBQVMsRUFBRTtRQUNYQyxVQUFVLEVBQUU7SUFDZDtJQUVBLDZDQUE2QztJQUM3QyxNQUFNQyxlQUFlLE9BQU9yQjtRQUMxQixJQUFJO1lBRUZKLFdBQVc7WUFDWCxxRUFBcUU7WUFDckUsTUFBTSxDQUFDMEIsV0FBV0MsVUFBVUMsVUFBVUMsWUFBWUMsWUFBWSxHQUM1RCxNQUFNQyxRQUFRQyxHQUFHLENBQUM7Z0JBQ2hCNUMsOERBQVdBLENBQUNnQjtnQkFDWmYsaUVBQWNBLENBQUNlO2dCQUNmZCxpRUFBY0EsQ0FBQ2M7Z0JBQ2ZiLG1FQUFnQkEsQ0FBQ2E7Z0JBQ2pCWixvRUFBaUJBLENBQUNZO2FBQ25CO1lBRUgsNENBQTRDO1lBQzVDLE1BQU02Qix1QkFBdUI7Z0JBQzNCMUIsU0FBU21CLFVBQVVRLE9BQU8sSUFBSSxFQUFFO2dCQUNoQzFCLFVBQVVrQixVQUFVUyxRQUFRLElBQUksRUFBRTtnQkFDbEMxQixTQUFTaUIsVUFBVVUsT0FBTyxJQUFJLEVBQUU7Z0JBQ2hDMUIsVUFBVWdCLFVBQVVXLFFBQVEsSUFBSSxFQUFFO2dCQUNsQzFCLFNBQVNnQixTQUFTaEIsT0FBTyxJQUFJLEVBQUU7Z0JBQy9CRyxTQUFTYSxTQUFTYixPQUFPLElBQUksRUFBRTtnQkFDL0JGLFFBQVFlLFNBQVNmLE1BQU0sSUFBSSxFQUFFO2dCQUM3QkMsUUFBUWMsU0FBU2QsTUFBTSxJQUFJLEVBQUU7Z0JBQzdCRSxhQUFhYSxTQUFTYixXQUFXLElBQUksRUFBRTtnQkFDdkNDLFlBQVlZLFNBQVNaLFVBQVUsSUFBSSxFQUFFO2dCQUNyQ0MsVUFBVVksV0FBV1osUUFBUSxJQUFJLEVBQUU7Z0JBQ25DRSxVQUFVVSxXQUFXVixRQUFRLElBQUksRUFBRTtnQkFDbkNDLFNBQVNTLFdBQVdULE9BQU8sSUFBSSxFQUFFO2dCQUNqQ0YsU0FBU1csV0FBV1gsT0FBTyxJQUFJLEVBQUU7Z0JBQ2pDRyxVQUFVUyxZQUFZVCxRQUFRLElBQUksRUFBRTtnQkFDcENDLFNBQVNRLFlBQVlSLE9BQU8sSUFBSSxFQUFFO2dCQUNsQ0MsU0FBU08sWUFBWVAsT0FBTyxJQUFJLEVBQUU7Z0JBQ2xDQyxVQUFVTSxZQUFZTixRQUFRLElBQUksRUFBRTtZQUN0QztZQUVBLG9EQUFvRDtZQUNwRGxCLGNBQWMyQjtRQUNoQixFQUFFLE9BQU9LLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDBCQUEwQkE7UUFDMUMsU0FDUTtZQUNOLG9FQUFvRTtZQUNwRXRDLFdBQVc7UUFDYjtJQUNGO0lBRUFiLGdEQUFTQSxDQUFDO1FBQ1IsMkVBQTJFO1FBQzNFc0MsYUFBYXJCO0lBQ2YsR0FBRztRQUFDQTtLQUFJO0lBRVIsT0FBTztRQUNMQztRQUNBb0I7SUFDRjtBQUNGO0lBakZnQjNCOztRQUNFTCx3REFBTUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvc2VhcmNoLmNvbnRleHQuanN4PzIwNWYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBidXNjYXJEYXRvcyxcclxuICBidXNjYXJEYXRvc1NvYyxcclxuICBidXNjYXJEYXRvc1JlcyxcclxuICBidXNjYXJEYXRvc1ByZXN0LFxyXG4gIGJ1c2NhckRhdG9zQ2FyZ29zLFxyXG59IGZyb20gXCJAL2NvbmZpZy9lbmRwb2ludHNcIjtcclxuaW1wb3J0IHsgdXNlRG5pIH0gZnJvbSBcIkAvY29udGV4dC9kbmkuY29udGV4dFwiO1xyXG5cclxuLy8gQ3JlYSBlbCBjb250ZXh0byBkZSBiw7pzcXVlZGFcclxuY29uc3QgU2VhcmNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbi8vIFByb3ZlZWRvciBkZSBjb250ZXh0byBkZSBiw7pzcXVlZGFcclxuZXhwb3J0IGNvbnN0IFNlYXJjaFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHJlc3VsdGFkbyA9IHVzZVNlYXJjaFByb3YoKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWFyY2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtyZXN1bHRhZG99PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1NlYXJjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuLy8gSG9vayBwZXJzb25hbGl6YWRvIHBhcmEgYWNjZWRlciBhbCBjb250ZXh0byBkZSBiw7pzcXVlZGFcclxuZXhwb3J0IGNvbnN0IHVzZVNlYXJjaCA9ICgpID0+IHtcclxuICByZXR1cm4gdXNlQ29udGV4dChTZWFyY2hDb250ZXh0KTtcclxufTtcclxuLy8gSG9vayBwZXJzb25hbGl6YWRvIHBhcmEgcmVhbGl6YXIgYsO6c3F1ZWRhc1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlU2VhcmNoUHJvdigpIHtcclxuICBjb25zdCB7IGRuaSB9ID0gdXNlRG5pKCk7XHJcbiBcclxuICBjb25zdCBbcmVzdWx0YWRvcywgc2V0UmVzdWx0YWRvc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBhZG1Fdm9sOiBbXSxcclxuICAgIHNpbWFFdm9sOiBbXSxcclxuICAgIGZhY0V2b2w6IFtdLFxyXG4gICAgYW11cEV2b2w6IFtdLFxyXG4gICAgU2ltYVNvYzogW10sXHJcbiAgICBBZG1Tb2M6IFtdLFxyXG4gICAgRmFjU29jOiBbXSxcclxuICAgIEFtdXBTb2M6IFtdLFxyXG4gICAgUmVzdW1lblNpbWE6IFtdLFxyXG4gICAgUmVzdW1lbkFkbTogW10sXHJcbiAgICBTaW1hUHJlczogW10sXHJcbiAgICBGYWNQcmVzOiBbXSxcclxuICAgIEFtdXBQcmVzOiBbXSxcclxuICAgIEFkbVByZXM6IFtdLFxyXG4gICAgU2ltYUNhcmc6IFtdLFxyXG4gICAgQWRtQ2FyZzogW10sXHJcbiAgICBGYWNDYXJnOiBbXSxcclxuICAgIEFtdXBDYXJnOiBbXSxcclxuICB9KTtcclxuXHJcbiAgLy8gRnVuY2nDs24gcGFyYSByZWFsaXphciBsYSBiw7pzcXVlZGEgZGUgZGF0b3NcclxuICBjb25zdCBoYW5kbGVCdXNjYXIgPSBhc3luYyAoZG5pKSA9PiB7XHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgLy8gUmVhbGl6YSBsYSBiw7pzcXVlZGEgZW4gYW1iYXMgQVBJIHkgZXNwZXJhIGEgcXVlIHNlIGNvbXBsZXRlbiBhbWJhc1xyXG4gICAgICBjb25zdCBbZGF0b3NFdm9sLCBkYXRvc1NvYywgZGF0b3NSZXMsIGRhdG9zUHJlc3QsIGRhdG9zQ2FyZ29zXSA9XHJcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgYnVzY2FyRGF0b3MoZG5pKSxcclxuICAgICAgICAgIGJ1c2NhckRhdG9zU29jKGRuaSksXHJcbiAgICAgICAgICBidXNjYXJEYXRvc1JlcyhkbmkpLFxyXG4gICAgICAgICAgYnVzY2FyRGF0b3NQcmVzdChkbmkpLFxyXG4gICAgICAgICAgYnVzY2FyRGF0b3NDYXJnb3MoZG5pKSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgIC8vIENvbWJpbmEgbG9zIHJlc3VsdGFkb3MgZGUgYW1iYXMgYsO6c3F1ZWRhc1xyXG4gICAgICBjb25zdCByZXN1bHRhZG9zQ29tYmluYWRvcyA9IHtcclxuICAgICAgICBhZG1Fdm9sOiBkYXRvc0V2b2wuQWRtRXZvbCB8fCBbXSxcclxuICAgICAgICBzaW1hRXZvbDogZGF0b3NFdm9sLlNpbWFFdm9sIHx8IFtdLFxyXG4gICAgICAgIGZhY0V2b2w6IGRhdG9zRXZvbC5GYWNFdm9sIHx8IFtdLFxyXG4gICAgICAgIGFtdXBFdm9sOiBkYXRvc0V2b2wuQW11cEV2b2wgfHwgW10sXHJcbiAgICAgICAgU2ltYVNvYzogZGF0b3NTb2MuU2ltYVNvYyB8fCBbXSxcclxuICAgICAgICBBbXVwU29jOiBkYXRvc1NvYy5BbXVwU29jIHx8IFtdLFxyXG4gICAgICAgIEFkbVNvYzogZGF0b3NTb2MuQWRtU29jIHx8IFtdLFxyXG4gICAgICAgIEZhY1NvYzogZGF0b3NTb2MuRmFjU29jIHx8IFtdLFxyXG4gICAgICAgIFJlc3VtZW5TaW1hOiBkYXRvc1Jlcy5SZXN1bWVuU2ltYSB8fCBbXSxcclxuICAgICAgICBSZXN1bWVuQWRtOiBkYXRvc1Jlcy5SZXN1bWVuQWRtIHx8IFtdLFxyXG4gICAgICAgIFNpbWFQcmVzOiBkYXRvc1ByZXN0LlNpbWFQcmVzIHx8IFtdLFxyXG4gICAgICAgIEFtdXBQcmVzOiBkYXRvc1ByZXN0LkFtdXBQcmVzIHx8IFtdLFxyXG4gICAgICAgIEFkbVByZXM6IGRhdG9zUHJlc3QuQWRtUHJlcyB8fCBbXSxcclxuICAgICAgICBGYWNQcmVzOiBkYXRvc1ByZXN0LkZhY1ByZXMgfHwgW10sXHJcbiAgICAgICAgU2ltYUNhcmc6IGRhdG9zQ2FyZ29zLlNpbWFDYXJnIHx8IFtdLFxyXG4gICAgICAgIEFkbUNhcmc6IGRhdG9zQ2FyZ29zLkFkbUNhcmcgfHwgW10sXHJcbiAgICAgICAgRmFjQ2FyZzogZGF0b3NDYXJnb3MuRmFjQ2FyZyB8fCBbXSxcclxuICAgICAgICBBbXVwQ2FyZzogZGF0b3NDYXJnb3MuQW11cENhcmcgfHwgW10sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICAvLyBBY3R1YWxpemEgZWwgZXN0YWRvIGNvbiBsb3MgcmVzdWx0YWRvcyBjb21iaW5hZG9zXHJcbiAgICAgIHNldFJlc3VsdGFkb3MocmVzdWx0YWRvc0NvbWJpbmFkb3MpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFsIGJ1c2NhciBkYXRvczpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgIC8vIEluZGljYSBxdWUgbGEgYsO6c3F1ZWRhIGhhIHRlcm1pbmFkbywgeWEgc2VhIGNvbiDDqXhpdG8gbyBjb24gZXJyb3JcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIFJlYWxpemEgbGEgYsO6c3F1ZWRhIGFsIGNhcmdhciBlbCBjb21wb25lbnRlIHkgY2FkYSB2ZXogcXVlIGNhbWJpZSBlbCBETklcclxuICAgIGhhbmRsZUJ1c2NhcihkbmkpO1xyXG4gIH0sIFtkbmldKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc3VsdGFkb3MsXHJcbiAgICBoYW5kbGVCdXNjYXIsXHJcbiAgfTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsImJ1c2NhckRhdG9zIiwiYnVzY2FyRGF0b3NTb2MiLCJidXNjYXJEYXRvc1JlcyIsImJ1c2NhckRhdG9zUHJlc3QiLCJidXNjYXJEYXRvc0NhcmdvcyIsInVzZURuaSIsIlNlYXJjaENvbnRleHQiLCJTZWFyY2hQcm92aWRlciIsImNoaWxkcmVuIiwicmVzdWx0YWRvIiwidXNlU2VhcmNoUHJvdiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVNlYXJjaCIsImRuaSIsInJlc3VsdGFkb3MiLCJzZXRSZXN1bHRhZG9zIiwiYWRtRXZvbCIsInNpbWFFdm9sIiwiZmFjRXZvbCIsImFtdXBFdm9sIiwiU2ltYVNvYyIsIkFkbVNvYyIsIkZhY1NvYyIsIkFtdXBTb2MiLCJSZXN1bWVuU2ltYSIsIlJlc3VtZW5BZG0iLCJTaW1hUHJlcyIsIkZhY1ByZXMiLCJBbXVwUHJlcyIsIkFkbVByZXMiLCJTaW1hQ2FyZyIsIkFkbUNhcmciLCJGYWNDYXJnIiwiQW11cENhcmciLCJoYW5kbGVCdXNjYXIiLCJkYXRvc0V2b2wiLCJkYXRvc1NvYyIsImRhdG9zUmVzIiwiZGF0b3NQcmVzdCIsImRhdG9zQ2FyZ29zIiwiUHJvbWlzZSIsImFsbCIsInJlc3VsdGFkb3NDb21iaW5hZG9zIiwiQWRtRXZvbCIsIlNpbWFFdm9sIiwiRmFjRXZvbCIsIkFtdXBFdm9sIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/context/search.context.jsx\n"));

/***/ })

});