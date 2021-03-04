webpackHotUpdate_N_E("pages/_app",{

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: endpoint, prodEndpoint, perPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endpoint", function() { return endpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prodEndpoint", function() { return prodEndpoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perPage", function() { return perPage; });
// This is client side config only - don't put anything in here that shouldn't be public!
var endpoint = "http://localhost:3000/api/graphql";
var prodEndpoint = "fill me in when we deploy";
var perPage = 4;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/link-error */ "./node_modules/@apollo/link-error/lib/bundle.esm.js");
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/react/ssr */ "./node_modules/@apollo/client/react/ssr/index.js");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-upload-client */ "./node_modules/apollo-upload-client/public/index.mjs");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-with-apollo */ "./node_modules/next-with-apollo/lib/index.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");







function createClient(_ref) {
  var headers = _ref.headers,
      initialState = _ref.initialState;
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    link: _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"].from([Object(_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__["onError"])(function (_ref2) {
      var graphQLErrors = _ref2.graphQLErrors,
          networkError = _ref2.networkError;
      if (graphQLErrors) graphQLErrors.forEach(function (_ref3) {
        var message = _ref3.message,
            locations = _ref3.locations,
            path = _ref3.path;
        return console.log("[GraphQL error]: Message: ".concat(message, ", Location: ").concat(locations, ", Path: ").concat(path));
      });
      if (networkError) console.log("[Network error]: ".concat(networkError, ". Backend is unreachable. Is it running?"));
    }), Object(apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__["createUploadLink"])({
      uri: true ? _config__WEBPACK_IMPORTED_MODULE_5__["endpoint"] : undefined,
      fetchOptions: {
        credentials: "include"
      },
      headers: headers
    })]),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]({
      typePolicies: {
        Query: {
          fields: {// TODO: We will add this together!
            // allProducts: paginationField(),
          }
        }
      }
    }).restore(initialState || {})
  });
}

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default()(createClient, {
  getDataFromTree: _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__["getDataFromTree"]
}));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@apollo/client/react/ssr/RenderPromises.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/react/ssr/RenderPromises.js ***!
  \*****************************************************************/
/*! exports provided: RenderPromises */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPromises", function() { return RenderPromises; });
function makeDefaultQueryInfo() {
    return {
        seen: false,
        observable: null
    };
}
var RenderPromises = (function () {
    function RenderPromises() {
        this.queryPromises = new Map();
        this.queryInfoTrie = new Map();
    }
    RenderPromises.prototype.registerSSRObservable = function (observable, props) {
        this.lookupQueryInfo(props).observable = observable;
    };
    RenderPromises.prototype.getSSRObservable = function (props) {
        return this.lookupQueryInfo(props).observable;
    };
    RenderPromises.prototype.addQueryPromise = function (queryInstance, finish) {
        var info = this.lookupQueryInfo(queryInstance.getOptions());
        if (!info.seen) {
            this.queryPromises.set(queryInstance.getOptions(), new Promise(function (resolve) {
                resolve(queryInstance.fetchData());
            }));
            return null;
        }
        return finish();
    };
    RenderPromises.prototype.hasPromises = function () {
        return this.queryPromises.size > 0;
    };
    RenderPromises.prototype.consumeAndAwaitPromises = function () {
        var _this = this;
        var promises = [];
        this.queryPromises.forEach(function (promise, queryInstance) {
            _this.lookupQueryInfo(queryInstance).seen = true;
            promises.push(promise);
        });
        this.queryPromises.clear();
        return Promise.all(promises);
    };
    RenderPromises.prototype.lookupQueryInfo = function (props) {
        var queryInfoTrie = this.queryInfoTrie;
        var query = props.query, variables = props.variables;
        var varMap = queryInfoTrie.get(query) || new Map();
        if (!queryInfoTrie.has(query))
            queryInfoTrie.set(query, varMap);
        var variablesString = JSON.stringify(variables);
        var info = varMap.get(variablesString) || makeDefaultQueryInfo();
        if (!varMap.has(variablesString))
            varMap.set(variablesString, info);
        return info;
    };
    return RenderPromises;
}());

//# sourceMappingURL=RenderPromises.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/ssr/getDataFromTree.js":
/*!******************************************************************!*\
  !*** ./node_modules/@apollo/client/react/ssr/getDataFromTree.js ***!
  \******************************************************************/
/*! exports provided: getDataFromTree, getMarkupFromTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataFromTree", function() { return getDataFromTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkupFromTree", function() { return getMarkupFromTree; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/index.js */ "./node_modules/@apollo/client/react/context/index.js");
/* harmony import */ var _RenderPromises_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RenderPromises.js */ "./node_modules/@apollo/client/react/ssr/RenderPromises.js");




function getDataFromTree(tree, context) {
    if (context === void 0) { context = {}; }
    return getMarkupFromTree({
        tree: tree,
        context: context,
        renderFunction: __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js").renderToStaticMarkup
    });
}
function getMarkupFromTree(_a) {
    var tree = _a.tree, _b = _a.context, context = _b === void 0 ? {} : _b, _c = _a.renderFunction, renderFunction = _c === void 0 ? __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js").renderToStaticMarkup : _c;
    var renderPromises = new _RenderPromises_js__WEBPACK_IMPORTED_MODULE_3__["RenderPromises"]();
    function process() {
        var ApolloContext = Object(_context_index_js__WEBPACK_IMPORTED_MODULE_2__["getApolloContext"])();
        return new Promise(function (resolve) {
            var element = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ApolloContext.Provider, { value: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { renderPromises: renderPromises }) }, tree);
            resolve(renderFunction(element));
        }).then(function (html) {
            return renderPromises.hasPromises()
                ? renderPromises.consumeAndAwaitPromises().then(process)
                : html;
        });
    }
    return Promise.resolve().then(process);
}
//# sourceMappingURL=getDataFromTree.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/ssr/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/react/ssr/index.js ***!
  \********************************************************/
/*! exports provided: getMarkupFromTree, getDataFromTree, renderToStringWithData, RenderPromises */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getDataFromTree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDataFromTree.js */ "./node_modules/@apollo/client/react/ssr/getDataFromTree.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMarkupFromTree", function() { return _getDataFromTree_js__WEBPACK_IMPORTED_MODULE_0__["getMarkupFromTree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDataFromTree", function() { return _getDataFromTree_js__WEBPACK_IMPORTED_MODULE_0__["getDataFromTree"]; });

/* harmony import */ var _renderToStringWithData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderToStringWithData.js */ "./node_modules/@apollo/client/react/ssr/renderToStringWithData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderToStringWithData", function() { return _renderToStringWithData_js__WEBPACK_IMPORTED_MODULE_1__["renderToStringWithData"]; });

/* harmony import */ var _RenderPromises_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RenderPromises.js */ "./node_modules/@apollo/client/react/ssr/RenderPromises.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderPromises", function() { return _RenderPromises_js__WEBPACK_IMPORTED_MODULE_2__["RenderPromises"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@apollo/client/react/ssr/renderToStringWithData.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@apollo/client/react/ssr/renderToStringWithData.js ***!
  \*************************************************************************/
/*! exports provided: renderToStringWithData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderToStringWithData", function() { return renderToStringWithData; });
/* harmony import */ var _getDataFromTree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDataFromTree.js */ "./node_modules/@apollo/client/react/ssr/getDataFromTree.js");

function renderToStringWithData(component) {
    return Object(_getDataFromTree_js__WEBPACK_IMPORTED_MODULE_0__["getMarkupFromTree"])({
        tree: component,
        renderFunction: __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js").renderToString
    });
}
//# sourceMappingURL=renderToStringWithData.js.map

/***/ }),

/***/ "./node_modules/@apollo/link-error/lib/bundle.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@apollo/link-error/lib/bundle.esm.js ***!
  \***********************************************************/
/*! exports provided: ErrorLink, onError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorLink", function() { return ErrorLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onError", function() { return onError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client/core */ "./node_modules/@apollo/client/core/index.js");



function onError(errorHandler) {
    return new _apollo_client_core__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"](function (operation, forward) {
        return new _apollo_client_core__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            var sub;
            var retriedSub;
            var retriedResult;
            try {
                sub = forward(operation).subscribe({
                    next: function (result) {
                        if (result.errors) {
                            retriedResult = errorHandler({
                                graphQLErrors: result.errors,
                                response: result,
                                operation: operation,
                                forward: forward,
                            });
                            if (retriedResult) {
                                retriedSub = retriedResult.subscribe({
                                    next: observer.next.bind(observer),
                                    error: observer.error.bind(observer),
                                    complete: observer.complete.bind(observer),
                                });
                                return;
                            }
                        }
                        observer.next(result);
                    },
                    error: function (networkError) {
                        retriedResult = errorHandler({
                            operation: operation,
                            networkError: networkError,
                            graphQLErrors: networkError &&
                                networkError.result &&
                                networkError.result.errors,
                            forward: forward,
                        });
                        if (retriedResult) {
                            retriedSub = retriedResult.subscribe({
                                next: observer.next.bind(observer),
                                error: observer.error.bind(observer),
                                complete: observer.complete.bind(observer),
                            });
                            return;
                        }
                        observer.error(networkError);
                    },
                    complete: function () {
                        if (!retriedResult) {
                            observer.complete.bind(observer)();
                        }
                    },
                });
            }
            catch (e) {
                errorHandler({ networkError: e, operation: operation, forward: forward });
                observer.error(e);
            }
            return function () {
                if (sub)
                    sub.unsubscribe();
                if (retriedSub)
                    sub.unsubscribe();
            };
        });
    });
}
var ErrorLink = (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ErrorLink, _super);
    function ErrorLink(errorHandler) {
        var _this = _super.call(this) || this;
        _this.link = onError(errorHandler);
        return _this;
    }
    ErrorLink.prototype.request = function (operation, forward) {
        return this.link.request(operation, forward);
    };
    return ErrorLink;
}(_apollo_client_core__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"]));


//# sourceMappingURL=bundle.esm.js.map


/***/ }),

/***/ "./node_modules/apollo-upload-client/node_modules/@babel/runtime/helpers/extends.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/apollo-upload-client/node_modules/@babel/runtime/helpers/extends.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/apollo-upload-client/public/ReactNativeFile.js":
/*!*********************************************************************!*\
  !*** ./node_modules/apollo-upload-client/public/ReactNativeFile.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! extract-files/public/ReactNativeFile */ "./node_modules/extract-files/public/ReactNativeFile.js");


/***/ }),

/***/ "./node_modules/apollo-upload-client/public/createUploadLink.js":
/*!**********************************************************************!*\
  !*** ./node_modules/apollo-upload-client/public/createUploadLink.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/apollo-upload-client/node_modules/@babel/runtime/helpers/extends.js");

var _require = __webpack_require__(/*! @apollo/client/core */ "./node_modules/@apollo/client/core/index.js"),
  ApolloLink = _require.ApolloLink,
  Observable = _require.Observable;

var _require2 = __webpack_require__(/*! @apollo/client/link/http */ "./node_modules/@apollo/client/link/http/index.js"),
  createSignalIfSupported = _require2.createSignalIfSupported,
  fallbackHttpConfig = _require2.fallbackHttpConfig,
  parseAndCheckHttpResponse = _require2.parseAndCheckHttpResponse,
  rewriteURIForGET = _require2.rewriteURIForGET,
  selectHttpOptionsAndBody = _require2.selectHttpOptionsAndBody,
  selectURI = _require2.selectURI,
  serializeFetchParameter = _require2.serializeFetchParameter;

var extractFiles = __webpack_require__(/*! extract-files/public/extractFiles */ "./node_modules/extract-files/public/extractFiles.js");

var formDataAppendFile = __webpack_require__(/*! ./formDataAppendFile */ "./node_modules/apollo-upload-client/public/formDataAppendFile.js");

var isExtractableFile = __webpack_require__(/*! ./isExtractableFile */ "./node_modules/apollo-upload-client/public/isExtractableFile.js");

module.exports = function createUploadLink(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$uri = _ref.uri,
    fetchUri = _ref$uri === void 0 ? '/graphql' : _ref$uri,
    useGETForQueries = _ref.useGETForQueries,
    _ref$isExtractableFil = _ref.isExtractableFile,
    customIsExtractableFile =
      _ref$isExtractableFil === void 0
        ? isExtractableFile
        : _ref$isExtractableFil,
    CustomFormData = _ref.FormData,
    _ref$formDataAppendFi = _ref.formDataAppendFile,
    customFormDataAppendFile =
      _ref$formDataAppendFi === void 0
        ? formDataAppendFile
        : _ref$formDataAppendFi,
    customFetch = _ref.fetch,
    fetchOptions = _ref.fetchOptions,
    credentials = _ref.credentials,
    headers = _ref.headers,
    includeExtensions = _ref.includeExtensions;

  var linkConfig = {
    http: {
      includeExtensions: includeExtensions,
    },
    options: fetchOptions,
    credentials: credentials,
    headers: headers,
  };
  return new ApolloLink(function (operation) {
    var context = operation.getContext();
    var _context$clientAwaren = context.clientAwareness;
    _context$clientAwaren =
      _context$clientAwaren === void 0 ? {} : _context$clientAwaren;
    var name = _context$clientAwaren.name,
      version = _context$clientAwaren.version,
      headers = context.headers;
    var contextConfig = {
      http: context.http,
      options: context.fetchOptions,
      credentials: context.credentials,
      headers: _extends(
        {},
        name && {
          'apollographql-client-name': name,
        },
        version && {
          'apollographql-client-version': version,
        },
        headers
      ),
    };

    var _selectHttpOptionsAnd = selectHttpOptionsAndBody(
        operation,
        fallbackHttpConfig,
        linkConfig,
        contextConfig
      ),
      options = _selectHttpOptionsAnd.options,
      body = _selectHttpOptionsAnd.body;

    var _extractFiles = extractFiles(body, '', customIsExtractableFile),
      clone = _extractFiles.clone,
      files = _extractFiles.files;

    var uri = selectURI(operation, fetchUri);

    if (files.size) {
      delete options.headers['content-type'];
      var RuntimeFormData = CustomFormData || FormData;
      var form = new RuntimeFormData();
      form.append('operations', serializeFetchParameter(clone, 'Payload'));
      var map = {};
      var i = 0;
      files.forEach(function (paths) {
        map[++i] = paths;
      });
      form.append('map', JSON.stringify(map));
      i = 0;
      files.forEach(function (paths, file) {
        customFormDataAppendFile(form, ++i, file);
      });
      options.body = form;
    } else {
      if (
        useGETForQueries &&
        !operation.query.definitions.some(function (definition) {
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'mutation'
          );
        })
      )
        options.method = 'GET';

      if (options.method === 'GET') {
        var _rewriteURIForGET = rewriteURIForGET(uri, body),
          newURI = _rewriteURIForGET.newURI,
          parseError = _rewriteURIForGET.parseError;

        if (parseError)
          return new Observable(function (observer) {
            observer.error(parseError);
          });
        uri = newURI;
      } else options.body = serializeFetchParameter(clone, 'Payload');
    }

    var _createSignalIfSuppor = createSignalIfSupported(),
      controller = _createSignalIfSuppor.controller;

    if (controller) {
      if (options.signal)
        options.signal.addEventListener('abort', function () {
          controller.abort();
        });
      options.signal = controller.signal;
    }

    var runtimeFetch = customFetch || fetch;
    return new Observable(function (observer) {
      var cleaningUp;
      runtimeFetch(uri, options)
        .then(function (response) {
          operation.setContext({
            response: response,
          });
          return response;
        })
        .then(parseAndCheckHttpResponse(operation))
        .then(function (result) {
          observer.next(result);
          observer.complete();
        })
        .catch(function (error) {
          if (!cleaningUp) {
            if (error.result && error.result.errors && error.result.data)
              observer.next(error.result);
            observer.error(error);
          }
        });
      return function () {
        cleaningUp = true;
        if (controller) controller.abort();
      };
    });
  });
};


/***/ }),

/***/ "./node_modules/apollo-upload-client/public/formDataAppendFile.js":
/*!************************************************************************!*\
  !*** ./node_modules/apollo-upload-client/public/formDataAppendFile.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function formDataAppendFile(formData, fieldName, file) {
  formData.append(fieldName, file, file.name);
};


/***/ }),

/***/ "./node_modules/apollo-upload-client/public/index.mjs":
/*!************************************************************!*\
  !*** ./node_modules/apollo-upload-client/public/index.mjs ***!
  \************************************************************/
/*! exports provided: createUploadLink, formDataAppendFile, isExtractableFile, ReactNativeFile */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createUploadLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createUploadLink.js */ "./node_modules/apollo-upload-client/public/createUploadLink.js");
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "createUploadLink", function() { return _createUploadLink_js__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _formDataAppendFile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formDataAppendFile.js */ "./node_modules/apollo-upload-client/public/formDataAppendFile.js");
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "formDataAppendFile", function() { return _formDataAppendFile_js__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _isExtractableFile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isExtractableFile.js */ "./node_modules/apollo-upload-client/public/isExtractableFile.js");
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "isExtractableFile", function() { return _isExtractableFile_js__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _ReactNativeFile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReactNativeFile.js */ "./node_modules/apollo-upload-client/public/ReactNativeFile.js");
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ReactNativeFile", function() { return _ReactNativeFile_js__WEBPACK_IMPORTED_MODULE_3__; });






/***/ }),

/***/ "./node_modules/apollo-upload-client/public/isExtractableFile.js":
/*!***********************************************************************!*\
  !*** ./node_modules/apollo-upload-client/public/isExtractableFile.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! extract-files/public/isExtractableFile */ "./node_modules/extract-files/public/isExtractableFile.js");


/***/ }),

/***/ "./node_modules/extract-files/public/ReactNativeFile.js":
/*!**************************************************************!*\
  !*** ./node_modules/extract-files/public/ReactNativeFile.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function ReactNativeFile(_ref) {
  var uri = _ref.uri,
    name = _ref.name,
    type = _ref.type;
  this.uri = uri;
  this.name = name;
  this.type = type;
};


/***/ }),

/***/ "./node_modules/extract-files/public/extractFiles.js":
/*!***********************************************************!*\
  !*** ./node_modules/extract-files/public/extractFiles.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaultIsExtractableFile = __webpack_require__(/*! ./isExtractableFile */ "./node_modules/extract-files/public/isExtractableFile.js");

module.exports = function extractFiles(value, path, isExtractableFile) {
  if (path === void 0) {
    path = '';
  }

  if (isExtractableFile === void 0) {
    isExtractableFile = defaultIsExtractableFile;
  }

  var clone;
  var files = new Map();

  function addFile(paths, file) {
    var storedPaths = files.get(file);
    if (storedPaths) storedPaths.push.apply(storedPaths, paths);
    else files.set(file, paths);
  }

  if (isExtractableFile(value)) {
    clone = null;
    addFile([path], value);
  } else {
    var prefix = path ? path + '.' : '';
    if (typeof FileList !== 'undefined' && value instanceof FileList)
      clone = Array.prototype.map.call(value, function (file, i) {
        addFile(['' + prefix + i], file);
        return null;
      });
    else if (Array.isArray(value))
      clone = value.map(function (child, i) {
        var result = extractFiles(child, '' + prefix + i, isExtractableFile);
        result.files.forEach(addFile);
        return result.clone;
      });
    else if (value && value.constructor === Object) {
      clone = {};

      for (var i in value) {
        var result = extractFiles(value[i], '' + prefix + i, isExtractableFile);
        result.files.forEach(addFile);
        clone[i] = result.clone;
      }
    } else clone = value;
  }

  return {
    clone: clone,
    files: files,
  };
};


/***/ }),

/***/ "./node_modules/extract-files/public/isExtractableFile.js":
/*!****************************************************************!*\
  !*** ./node_modules/extract-files/public/isExtractableFile.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ReactNativeFile = __webpack_require__(/*! ./ReactNativeFile */ "./node_modules/extract-files/public/ReactNativeFile.js");

module.exports = function isExtractableFile(value) {
  return (
    (typeof File !== 'undefined' && value instanceof File) ||
    (typeof Blob !== 'undefined' && value instanceof Blob) ||
    value instanceof ReactNativeFile
  );
};


/***/ }),

/***/ "./node_modules/next-with-apollo/lib/apollo.js":
/*!*****************************************************!*\
  !*** ./node_modules/next-with-apollo/lib/apollo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Polyfill fetch
__webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
var _apolloClient;
function initApollo(clientFn, options) {
    if (!clientFn) {
        throw new Error('[withApollo] the first param is missing and is required to get the ApolloClient');
    }
    if (typeof window === 'undefined') {
        return getClient(clientFn, options);
    }
    if (!_apolloClient) {
        _apolloClient = getClient(clientFn, options);
    }
    return _apolloClient;
}
exports.default = initApollo;
function getClient(clientFn, options) {
    if (options === void 0) { options = {}; }
    if (typeof clientFn !== 'function') {
        throw new Error('[withApollo] requires a function that returns an ApolloClient');
    }
    return clientFn(options);
}


/***/ }),

/***/ "./node_modules/next-with-apollo/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/next-with-apollo/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var withApollo_1 = __importDefault(__webpack_require__(/*! ./withApollo */ "./node_modules/next-with-apollo/lib/withApollo.js"));
exports.withApollo = withApollo_1.default;
var apollo_1 = __webpack_require__(/*! ./apollo */ "./node_modules/next-with-apollo/lib/apollo.js");
exports.initApollo = apollo_1.default;
exports.default = withApollo_1.default;


/***/ }),

/***/ "./node_modules/next-with-apollo/lib/withApollo.js":
/*!*********************************************************!*\
  !*** ./node_modules/next-with-apollo/lib/withApollo.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var head_1 = __importDefault(__webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js"));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var apollo_1 = __importDefault(__webpack_require__(/*! ./apollo */ "./node_modules/next-with-apollo/lib/apollo.js"));
// Gets the display name of a JSX component for dev tools
function getDisplayName(Component) {
    return Component.displayName || Component.name || 'Unknown';
}
function withApollo(client, options) {
    var _this = this;
    if (options === void 0) { options = {}; }
    return function (Page, pageOptions) {
        if (pageOptions === void 0) { pageOptions = {}; }
        var getInitialProps = Page.getInitialProps;
        var getDataFromTree = 'getDataFromTree' in pageOptions
            ? pageOptions.getDataFromTree
            : options.getDataFromTree;
        var render = pageOptions.render || options.render;
        var onError = pageOptions.onError || options.onError;
        function WithApollo(_a) {
            var _b;
            var apollo = _a.apollo, apolloState = _a.apolloState, props = __rest(_a, ["apollo", "apolloState"]);
            var apolloClient = apollo ||
                apollo_1.default(client, { initialState: (_b = apolloState) === null || _b === void 0 ? void 0 : _b.data });
            if (render) {
                return render({
                    Page: Page,
                    props: __assign(__assign({}, props), { apollo: apolloClient })
                });
            }
            return react_1.default.createElement(Page, __assign({}, props, { apollo: apolloClient }));
        }
        WithApollo.displayName = "WithApollo(" + getDisplayName(Page) + ")";
        if (getInitialProps || getDataFromTree) {
            WithApollo.getInitialProps = function (pageCtx) { return __awaiter(_this, void 0, void 0, function () {
                var ctx, AppTree, headers, apollo, apolloState, pageProps, props, appTreeProps, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ctx = 'Component' in pageCtx ? pageCtx.ctx : pageCtx;
                            AppTree = pageCtx.AppTree;
                            headers = ctx.req ? ctx.req.headers : {};
                            apollo = apollo_1.default(client, { ctx: ctx, headers: headers });
                            apolloState = {};
                            pageProps = {};
                            if (!getInitialProps) return [3 /*break*/, 2];
                            ctx.apolloClient = apollo;
                            return [4 /*yield*/, getInitialProps(pageCtx)];
                        case 1:
                            pageProps = _a.sent();
                            _a.label = 2;
                        case 2:
                            if (!(typeof window === 'undefined')) return [3 /*break*/, 7];
                            if (ctx.res && (ctx.res.headersSent || ctx.res.finished)) {
                                return [2 /*return*/, pageProps];
                            }
                            if (!getDataFromTree) return [3 /*break*/, 7];
                            _a.label = 3;
                        case 3:
                            _a.trys.push([3, 5, , 6]);
                            props = __assign(__assign({}, pageProps), { apolloState: apolloState, apollo: apollo });
                            appTreeProps = 'Component' in pageCtx ? props : { pageProps: props };
                            return [4 /*yield*/, getDataFromTree(react_1.default.createElement(AppTree, __assign({}, appTreeProps)))];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 6];
                        case 5:
                            error_1 = _a.sent();
                            if (onError) {
                                onError(error_1, ctx);
                            }
                            else {
                                // Prevent Apollo Client GraphQL errors from crashing SSR.
                                if (true) {
                                    // tslint:disable-next-line no-console This is a necessary debugging log
                                    console.error('GraphQL error occurred [getDataFromTree]', error_1);
                                }
                            }
                            return [3 /*break*/, 6];
                        case 6:
                            // getDataFromTree does not call componentWillUnmount
                            // head side effect therefore need to be cleared manually
                            head_1.default.rewind();
                            apolloState.data = apollo.cache.extract();
                            _a.label = 7;
                        case 7:
                            // To avoid calling initApollo() twice in the server we send the Apollo Client as a prop
                            // to the component, otherwise the component would have to call initApollo() again but this
                            // time without the context, once that happens the following code will make sure we send
                            // the prop as `null` to the browser
                            apollo.toJSON = function () {
                                return null;
                            };
                            return [2 /*return*/, __assign(__assign({}, pageProps), { apolloState: apolloState,
                                    apollo: apollo })];
                    }
                });
            }); };
        }
        return WithApollo;
    };
}
exports.default = withApollo;


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/fetch/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/fetch/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals self */var fetch=self.fetch.bind(self);module.exports=fetch;module.exports.default=module.exports;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom-server.browser.development.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.1
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// Do not require this module directly! Use normal `invariant` calls with
// template literal strings. The messages will be replaced with error codes
// during build.
function formatProdErrorMessage(code) {
  var url = 'https://reactjs.org/docs/error-decoder.html?invariant=' + code;

  for (var i = 1; i < arguments.length; i++) {
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }

  return "Minified React error #" + code + "; visit " + url + " for the full message or " + 'use the non-minified dev environment for full errors and additional ' + 'helpful warnings.';
}

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.1';

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableSuspenseServerRenderer = false;

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var didWarnAboutInvalidateContextType;

{
  didWarnAboutInvalidateContextType = new Set();
}

var emptyObject = {};

{
  Object.freeze(emptyObject);
}

function maskContext(type, context) {
  var contextTypes = type.contextTypes;

  if (!contextTypes) {
    return emptyObject;
  }

  var maskedContext = {};

  for (var contextName in contextTypes) {
    maskedContext[contextName] = context[contextName];
  }

  return maskedContext;
}

function checkContextTypes(typeSpecs, values, location) {
  {
    checkPropTypes(typeSpecs, values, location, 'Component');
  }
}

function validateContextBounds(context, threadID) {
  // If we don't have enough slots in this context to store this threadID,
  // fill it in without leaving any holes to ensure that the VM optimizes
  // this as non-holey index properties.
  // (Note: If `react` package is < 16.6, _threadCount is undefined.)
  for (var i = context._threadCount | 0; i <= threadID; i++) {
    // We assume that this is the same as the defaultValue which might not be
    // true if we're rendering inside a secondary renderer but they are
    // secondary because these use cases are very rare.
    context[i] = context._currentValue2;
    context._threadCount = i + 1;
  }
}
function processContext(type, context, threadID, isClass) {
  if (isClass) {
    var contextType = type.contextType;

    {
      if ('contextType' in type) {
        var isValid = // Allow null for conditional declaration
        contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined; // Not a <Context.Consumer>

        if (!isValid && !didWarnAboutInvalidateContextType.has(type)) {
          didWarnAboutInvalidateContextType.add(type);
          var addendum = '';

          if (contextType === undefined) {
            addendum = ' However, it is set to undefined. ' + 'This can be caused by a typo or by mixing up named and default imports. ' + 'This can also happen due to a circular dependency, so ' + 'try moving the createContext() call to a separate file.';
          } else if (typeof contextType !== 'object') {
            addendum = ' However, it is set to a ' + typeof contextType + '.';
          } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
            addendum = ' Did you accidentally pass the Context.Provider instead?';
          } else if (contextType._context !== undefined) {
            // <Context.Consumer>
            addendum = ' Did you accidentally pass the Context.Consumer instead?';
          } else {
            addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
          }

          error('%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext().%s', getComponentName(type) || 'Component', addendum);
        }
      }
    }

    if (typeof contextType === 'object' && contextType !== null) {
      validateContextBounds(contextType, threadID);
      return contextType[threadID];
    }

    {
      var maskedContext = maskContext(type, context);

      {
        if (type.contextTypes) {
          checkContextTypes(type.contextTypes, maskedContext, 'context');
        }
      }

      return maskedContext;
    }
  } else {
    {
      var _maskedContext = maskContext(type, context);

      {
        if (type.contextTypes) {
          checkContextTypes(type.contextTypes, _maskedContext, 'context');
        }
      }

      return _maskedContext;
    }
  }
}

var nextAvailableThreadIDs = new Uint16Array(16);

for (var i = 0; i < 15; i++) {
  nextAvailableThreadIDs[i] = i + 1;
}

nextAvailableThreadIDs[15] = 0;

function growThreadCountAndReturnNextAvailable() {
  var oldArray = nextAvailableThreadIDs;
  var oldSize = oldArray.length;
  var newSize = oldSize * 2;

  if (!(newSize <= 0x10000)) {
    {
      throw Error( "Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic." );
    }
  }

  var newArray = new Uint16Array(newSize);
  newArray.set(oldArray);
  nextAvailableThreadIDs = newArray;
  nextAvailableThreadIDs[0] = oldSize + 1;

  for (var _i = oldSize; _i < newSize - 1; _i++) {
    nextAvailableThreadIDs[_i] = _i + 1;
  }

  nextAvailableThreadIDs[newSize - 1] = 0;
  return oldSize;
}

function allocThreadID() {
  var nextID = nextAvailableThreadIDs[0];

  if (nextID === 0) {
    return growThreadCountAndReturnNextAvailable();
  }

  nextAvailableThreadIDs[0] = nextAvailableThreadIDs[nextID];
  return nextID;
}
function freeThreadID(id) {
  nextAvailableThreadIDs[id] = nextAvailableThreadIDs[0];
  nextAvailableThreadIDs[0] = id;
}

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0; // A simple string attribute.
// Attributes that aren't in the filter are presumed to have this type.

var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.

var BOOLEANISH_STRING = 2; // A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.

var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.

var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.

var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.

var POSITIVE_NUMERIC = 6;

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
/* eslint-enable max-len */

var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
var hasOwnProperty = Object.prototype.hasOwnProperty;
var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};
function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
    return true;
  }

  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
    return false;
  }

  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }

  illegalAttributeNameCache[attributeName] = true;

  {
    error('Invalid attribute name: `%s`', attributeName);
  }

  return false;
}
function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null) {
    return propertyInfo.type === RESERVED;
  }

  if (isCustomComponentTag) {
    return false;
  }

  if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
    return true;
  }

  return false;
}
function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null && propertyInfo.type === RESERVED) {
    return false;
  }

  switch (typeof value) {
    case 'function': // $FlowIssue symbol is perfectly valid here

    case 'symbol':
      // eslint-disable-line
      return true;

    case 'boolean':
      {
        if (isCustomComponentTag) {
          return false;
        }

        if (propertyInfo !== null) {
          return !propertyInfo.acceptsBooleans;
        } else {
          var prefix = name.toLowerCase().slice(0, 5);
          return prefix !== 'data-' && prefix !== 'aria-';
        }
      }

    default:
      return false;
  }
}
function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
  if (value === null || typeof value === 'undefined') {
    return true;
  }

  if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
    return true;
  }

  if (isCustomComponentTag) {
    return false;
  }

  if (propertyInfo !== null) {

    switch (propertyInfo.type) {
      case BOOLEAN:
        return !value;

      case OVERLOADED_BOOLEAN:
        return value === false;

      case NUMERIC:
        return isNaN(value);

      case POSITIVE_NUMERIC:
        return isNaN(value) || value < 1;
    }
  }

  return false;
}
function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
  this.removeEmptyString = removeEmptyString;
} // When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.


var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];
reservedProps.forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.

[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var name = _ref[0],
      attributeName = _ref[1];
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).

['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.

['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML boolean attributes.

['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'disableRemotePlayback', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.

['checked', // Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.

['capture', 'download' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be positive numbers.

['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be numbers.

['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
});
var CAMELIZE = /[\-\:]([a-z])/g;

var capitalize = function (token) {
  return token[1].toUpperCase();
}; // This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.


['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // String SVG attributes with the xlink namespace.

['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink', false, // sanitizeURL
  false);
}); // String SVG attributes with the xml namespace.

['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace', false, // sanitizeURL
  false);
}); // These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.

['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.

var xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
'xlink:href', 'http://www.w3.org/1999/xlink', true, // sanitizeURL
false);
['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  true, // sanitizeURL
  true);
});

// and any newline or tab are filtered out as if they're not part of the URL.
// https://url.spec.whatwg.org/#url-parsing
// Tab or newline are defined as \r\n\t:
// https://infra.spec.whatwg.org/#ascii-tab-or-newline
// A C0 control is a code point in the range \u0000 NULL to \u001F
// INFORMATION SEPARATOR ONE, inclusive:
// https://infra.spec.whatwg.org/#c0-control-or-space

/* eslint-disable max-len */

var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
var didWarn = false;

function sanitizeURL(url) {
  {
    if (!didWarn && isJavaScriptProtocol.test(url)) {
      didWarn = true;

      error('A future version of React will block javascript: URLs as a security precaution. ' + 'Use event handlers instead if you can. If you need to generate unsafe HTML try ' + 'using dangerouslySetInnerHTML instead. React was passed %s.', JSON.stringify(url));
    }
  }
}

// code copied and modified from escape-html

/**
 * Module variables.
 * @private
 */
var matchHtmlRegExp = /["'&<>]/;
/**
 * Escapes special characters and HTML entities in a given html string.
 *
 * @param  {string} string HTML string to escape for later insertion
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;

      case 38:
        // &
        escape = '&amp;';
        break;

      case 39:
        // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'

        break;

      case 60:
        // <
        escape = '&lt;';
        break;

      case 62:
        // >
        escape = '&gt;';
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
} // end code copied and modified from escape-html

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */


function escapeTextForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return '' + text;
  }

  return escapeHtml(text);
}

/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */

function quoteAttributeValueForBrowser(value) {
  return '"' + escapeTextForBrowser(value) + '"';
}

function createMarkupForRoot() {
  return ROOT_ATTRIBUTE_NAME + '=""';
}
/**
 * Creates markup for a property.
 *
 * @param {string} name
 * @param {*} value
 * @return {?string} Markup string, or null if the property was invalid.
 */

function createMarkupForProperty(name, value) {
  var propertyInfo = getPropertyInfo(name);

  if (name !== 'style' && shouldIgnoreAttribute(name, propertyInfo, false)) {
    return '';
  }

  if (shouldRemoveAttribute(name, value, propertyInfo, false)) {
    return '';
  }

  if (propertyInfo !== null) {
    var attributeName = propertyInfo.attributeName;
    var type = propertyInfo.type;

    if (type === BOOLEAN || type === OVERLOADED_BOOLEAN && value === true) {
      return attributeName + '=""';
    } else {
      if (propertyInfo.sanitizeURL) {
        value = '' + value;
        sanitizeURL(value);
      }

      return attributeName + '=' + quoteAttributeValueForBrowser(value);
    }
  } else if (isAttributeNameSafe(name)) {
    return name + '=' + quoteAttributeValueForBrowser(value);
  }

  return '';
}
/**
 * Creates markup for a custom property.
 *
 * @param {string} name
 * @param {*} value
 * @return {string} Markup string, or empty string if the property was invalid.
 */

function createMarkupForCustomAttribute(name, value) {
  if (!isAttributeNameSafe(name) || value == null) {
    return '';
  }

  return name + '=' + quoteAttributeValueForBrowser(value);
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

var currentlyRenderingComponent = null;
var firstWorkInProgressHook = null;
var workInProgressHook = null; // Whether the work-in-progress hook is a re-rendered hook

var isReRender = false; // Whether an update was scheduled during the currently executing render pass.

var didScheduleRenderPhaseUpdate = false; // Lazily created map of render-phase updates

var renderPhaseUpdates = null; // Counter to prevent infinite loops.

var numberOfReRenders = 0;
var RE_RENDER_LIMIT = 25;
var isInHookUserCodeInDev = false; // In DEV, this is the name of the currently executing primitive hook

var currentHookNameInDev;

function resolveCurrentlyRenderingComponent() {
  if (!(currentlyRenderingComponent !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  {
    if (isInHookUserCodeInDev) {
      error('Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. ' + 'You can only call Hooks at the top level of your React function. ' + 'For more information, see ' + 'https://reactjs.org/link/rules-of-hooks');
    }
  }

  return currentlyRenderingComponent;
}

function areHookInputsEqual(nextDeps, prevDeps) {
  if (prevDeps === null) {
    {
      error('%s received a final argument during this render, but not during ' + 'the previous render. Even though the final argument is optional, ' + 'its type cannot change between renders.', currentHookNameInDev);
    }

    return false;
  }

  {
    // Don't bother comparing lengths in prod because these arrays should be
    // passed inline.
    if (nextDeps.length !== prevDeps.length) {
      error('The final argument passed to %s changed size between renders. The ' + 'order and size of this array must remain constant.\n\n' + 'Previous: %s\n' + 'Incoming: %s', currentHookNameInDev, "[" + nextDeps.join(', ') + "]", "[" + prevDeps.join(', ') + "]");
    }
  }

  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
    if (objectIs(nextDeps[i], prevDeps[i])) {
      continue;
    }

    return false;
  }

  return true;
}

function createHook() {
  if (numberOfReRenders > 0) {
    {
      {
        throw Error( "Rendered more hooks than during the previous render" );
      }
    }
  }

  return {
    memoizedState: null,
    queue: null,
    next: null
  };
}

function createWorkInProgressHook() {
  if (workInProgressHook === null) {
    // This is the first hook in the list
    if (firstWorkInProgressHook === null) {
      isReRender = false;
      firstWorkInProgressHook = workInProgressHook = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = firstWorkInProgressHook;
    }
  } else {
    if (workInProgressHook.next === null) {
      isReRender = false; // Append to the end of the list

      workInProgressHook = workInProgressHook.next = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = workInProgressHook.next;
    }
  }

  return workInProgressHook;
}

function prepareToUseHooks(componentIdentity) {
  currentlyRenderingComponent = componentIdentity;

  {
    isInHookUserCodeInDev = false;
  } // The following should have already been reset
  // didScheduleRenderPhaseUpdate = false;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;

}
function finishHooks(Component, props, children, refOrContext) {
  // This must be called after every function component to prevent hooks from
  // being used in classes.
  while (didScheduleRenderPhaseUpdate) {
    // Updates were scheduled during the render phase. They are stored in
    // the `renderPhaseUpdates` map. Call the component again, reusing the
    // work-in-progress hooks and applying the additional updates on top. Keep
    // restarting until no more updates are scheduled.
    didScheduleRenderPhaseUpdate = false;
    numberOfReRenders += 1; // Start over from the beginning of the list

    workInProgressHook = null;
    children = Component(props, refOrContext);
  }

  resetHooksState();
  return children;
} // Reset the internal hooks state if an error occurs while rendering a component

function resetHooksState() {
  {
    isInHookUserCodeInDev = false;
  }

  currentlyRenderingComponent = null;
  didScheduleRenderPhaseUpdate = false;
  firstWorkInProgressHook = null;
  numberOfReRenders = 0;
  renderPhaseUpdates = null;
  workInProgressHook = null;
}

function readContext(context, observedBits) {
  var threadID = currentPartialRenderer.threadID;
  validateContextBounds(context, threadID);

  {
    if (isInHookUserCodeInDev) {
      error('Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().');
    }
  }

  return context[threadID];
}

function useContext(context, observedBits) {
  {
    currentHookNameInDev = 'useContext';
  }

  resolveCurrentlyRenderingComponent();
  var threadID = currentPartialRenderer.threadID;
  validateContextBounds(context, threadID);
  return context[threadID];
}

function basicStateReducer(state, action) {
  // $FlowFixMe: Flow doesn't like mixed types
  return typeof action === 'function' ? action(state) : action;
}

function useState(initialState) {
  {
    currentHookNameInDev = 'useState';
  }

  return useReducer(basicStateReducer, // useReducer has a special case to support lazy useState initializers
  initialState);
}
function useReducer(reducer, initialArg, init) {
  {
    if (reducer !== basicStateReducer) {
      currentHookNameInDev = 'useReducer';
    }
  }

  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();

  if (isReRender) {
    // This is a re-render. Apply the new render phase updates to the previous
    // current hook.
    var queue = workInProgressHook.queue;
    var dispatch = queue.dispatch;

    if (renderPhaseUpdates !== null) {
      // Render phase updates are stored in a map of queue -> linked list
      var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

      if (firstRenderPhaseUpdate !== undefined) {
        renderPhaseUpdates.delete(queue);
        var newState = workInProgressHook.memoizedState;
        var update = firstRenderPhaseUpdate;

        do {
          // Process this render phase update. We don't have to check the
          // priority because it will always be the same as the current
          // render's.
          var action = update.action;

          {
            isInHookUserCodeInDev = true;
          }

          newState = reducer(newState, action);

          {
            isInHookUserCodeInDev = false;
          }

          update = update.next;
        } while (update !== null);

        workInProgressHook.memoizedState = newState;
        return [newState, dispatch];
      }
    }

    return [workInProgressHook.memoizedState, dispatch];
  } else {
    {
      isInHookUserCodeInDev = true;
    }

    var initialState;

    if (reducer === basicStateReducer) {
      // Special case for `useState`.
      initialState = typeof initialArg === 'function' ? initialArg() : initialArg;
    } else {
      initialState = init !== undefined ? init(initialArg) : initialArg;
    }

    {
      isInHookUserCodeInDev = false;
    }

    workInProgressHook.memoizedState = initialState;

    var _queue = workInProgressHook.queue = {
      last: null,
      dispatch: null
    };

    var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);

    return [workInProgressHook.memoizedState, _dispatch];
  }
}

function useMemo(nextCreate, deps) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var nextDeps = deps === undefined ? null : deps;

  if (workInProgressHook !== null) {
    var prevState = workInProgressHook.memoizedState;

    if (prevState !== null) {
      if (nextDeps !== null) {
        var prevDeps = prevState[1];

        if (areHookInputsEqual(nextDeps, prevDeps)) {
          return prevState[0];
        }
      }
    }
  }

  {
    isInHookUserCodeInDev = true;
  }

  var nextValue = nextCreate();

  {
    isInHookUserCodeInDev = false;
  }

  workInProgressHook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}

function useRef(initialValue) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var previousRef = workInProgressHook.memoizedState;

  if (previousRef === null) {
    var ref = {
      current: initialValue
    };

    {
      Object.seal(ref);
    }

    workInProgressHook.memoizedState = ref;
    return ref;
  } else {
    return previousRef;
  }
}

function useLayoutEffect(create, inputs) {
  {
    currentHookNameInDev = 'useLayoutEffect';

    error('useLayoutEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useLayoutEffect should only be used in ' + 'components that render exclusively on the client. ' + 'See https://reactjs.org/link/uselayouteffect-ssr for common fixes.');
  }
}

function dispatchAction(componentIdentity, queue, action) {
  if (!(numberOfReRenders < RE_RENDER_LIMIT)) {
    {
      throw Error( "Too many re-renders. React limits the number of renders to prevent an infinite loop." );
    }
  }

  if (componentIdentity === currentlyRenderingComponent) {
    // This is a render phase update. Stash it in a lazily-created map of
    // queue -> linked list of updates. After this render pass, we'll restart
    // and apply the stashed updates on top of the work-in-progress hook.
    didScheduleRenderPhaseUpdate = true;
    var update = {
      action: action,
      next: null
    };

    if (renderPhaseUpdates === null) {
      renderPhaseUpdates = new Map();
    }

    var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

    if (firstRenderPhaseUpdate === undefined) {
      renderPhaseUpdates.set(queue, update);
    } else {
      // Append the update to the end of the list.
      var lastRenderPhaseUpdate = firstRenderPhaseUpdate;

      while (lastRenderPhaseUpdate.next !== null) {
        lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
      }

      lastRenderPhaseUpdate.next = update;
    }
  }
}

function useCallback(callback, deps) {
  return useMemo(function () {
    return callback;
  }, deps);
} // TODO Decide on how to implement this hook for server rendering.
// If a mutation occurs during render, consider triggering a Suspense boundary
// and falling back to client rendering.

function useMutableSource(source, getSnapshot, subscribe) {
  resolveCurrentlyRenderingComponent();
  return getSnapshot(source._source);
}

function useDeferredValue(value) {
  resolveCurrentlyRenderingComponent();
  return value;
}

function useTransition() {
  resolveCurrentlyRenderingComponent();

  var startTransition = function (callback) {
    callback();
  };

  return [startTransition, false];
}

function useOpaqueIdentifier() {
  return (currentPartialRenderer.identifierPrefix || '') + 'R:' + (currentPartialRenderer.uniqueID++).toString(36);
}

function noop() {}

var currentPartialRenderer = null;
function setCurrentPartialRenderer(renderer) {
  currentPartialRenderer = renderer;
}
var Dispatcher = {
  readContext: readContext,
  useContext: useContext,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,
  useLayoutEffect: useLayoutEffect,
  useCallback: useCallback,
  // useImperativeHandle is not run in the server environment
  useImperativeHandle: noop,
  // Effects are not run in the server environment.
  useEffect: noop,
  // Debugging effect
  useDebugValue: noop,
  useDeferredValue: useDeferredValue,
  useTransition: useTransition,
  useOpaqueIdentifier: useOpaqueIdentifier,
  // Subscriptions are not setup in a server environment.
  useMutableSource: useMutableSource
};

var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
var Namespaces = {
  html: HTML_NAMESPACE,
  mathml: MATH_NAMESPACE,
  svg: SVG_NAMESPACE
}; // Assumes there is no parent namespace.

function getIntrinsicNamespace(type) {
  switch (type) {
    case 'svg':
      return SVG_NAMESPACE;

    case 'math':
      return MATH_NAMESPACE;

    default:
      return HTML_NAMESPACE;
  }
}
function getChildNamespace(parentNamespace, type) {
  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
    // No (or default) parent namespace: potential entry point.
    return getIntrinsicNamespace(type);
  }

  if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
    // We're leaving SVG.
    return HTML_NAMESPACE;
  } // By default, pass namespace below.


  return parentNamespace;
}

var hasReadOnlyValue = {
  button: true,
  checkbox: true,
  image: true,
  hidden: true,
  radio: true,
  reset: true,
  submit: true
};
function checkControlledValueProps(tagName, props) {
  {
    if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
      error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }

    if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
      error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }
  }
}

// For HTML, certain tags should omit their close tag. We keep a list for
// those special-case tags.
var omittedCloseTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true // NOTE: menuitem's close tag should be omitted, but that causes problems.

};

// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = _assign({
  menuitem: true
}, omittedCloseTags);

var HTML = '__html';

function assertValidProps(tag, props) {
  if (!props) {
    return;
  } // Note the use of `==` which checks for null or undefined.


  if (voidElementTags[tag]) {
    if (!(props.children == null && props.dangerouslySetInnerHTML == null)) {
      {
        throw Error( tag + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`." );
      }
    }
  }

  if (props.dangerouslySetInnerHTML != null) {
    if (!(props.children == null)) {
      {
        throw Error( "Can only set one of `children` or `props.dangerouslySetInnerHTML`." );
      }
    }

    if (!(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML)) {
      {
        throw Error( "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information." );
      }
    }
  }

  {
    if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
      error('A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.');
    }
  }

  if (!(props.style == null || typeof props.style === 'object')) {
    {
      throw Error( "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX." );
    }
  }
}

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */

function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */


var prefixes = ['Webkit', 'ms', 'Moz', 'O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.

Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */

function dangerousStyleValue(name, value, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901
  var isEmpty = value == null || typeof value === 'boolean' || value === '';

  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return ('' + value).trim();
}

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 */

function hyphenateStyleName(name) {
  return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return typeof props.is === 'string';
  }

  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this list too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;

    default:
      return true;
  }
}

var warnValidStyle = function () {};

{
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
  var msPattern$1 = /^-ms-/;
  var hyphenPattern = /-(.)/g; // style values shouldn't contain a semicolon

  var badStyleValueWithSemicolonPattern = /;\s*$/;
  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var camelize = function (string) {
    return string.replace(hyphenPattern, function (_, character) {
      return character.toUpperCase();
    });
  };

  var warnHyphenatedStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;

    error('Unsupported style property %s. Did you mean %s?', name, // As Andi Smith suggests
    // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
    // is converted to lowercase `ms`.
    camelize(name.replace(msPattern$1, 'ms-')));
  };

  var warnBadVendoredStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;

    error('Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
  };

  var warnStyleValueWithSemicolon = function (name, value) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;

    error("Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
  };

  var warnStyleValueIsNaN = function (name, value) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;

    error('`NaN` is an invalid value for the `%s` css style property.', name);
  };

  var warnStyleValueIsInfinity = function (name, value) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;

    error('`Infinity` is an invalid value for the `%s` css style property.', name);
  };

  warnValidStyle = function (name, value) {
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value);
      }
    }
  };
}

var warnValidStyle$1 = warnValidStyle;

var ariaProperties = {
  'aria-current': 0,
  // state
  'aria-details': 0,
  'aria-disabled': 0,
  // state
  'aria-hidden': 0,
  // state
  'aria-invalid': 0,
  // state
  'aria-keyshortcuts': 0,
  'aria-label': 0,
  'aria-roledescription': 0,
  // Widget Attributes
  'aria-autocomplete': 0,
  'aria-checked': 0,
  'aria-expanded': 0,
  'aria-haspopup': 0,
  'aria-level': 0,
  'aria-modal': 0,
  'aria-multiline': 0,
  'aria-multiselectable': 0,
  'aria-orientation': 0,
  'aria-placeholder': 0,
  'aria-pressed': 0,
  'aria-readonly': 0,
  'aria-required': 0,
  'aria-selected': 0,
  'aria-sort': 0,
  'aria-valuemax': 0,
  'aria-valuemin': 0,
  'aria-valuenow': 0,
  'aria-valuetext': 0,
  // Live Region Attributes
  'aria-atomic': 0,
  'aria-busy': 0,
  'aria-live': 0,
  'aria-relevant': 0,
  // Drag-and-Drop Attributes
  'aria-dropeffect': 0,
  'aria-grabbed': 0,
  // Relationship Attributes
  'aria-activedescendant': 0,
  'aria-colcount': 0,
  'aria-colindex': 0,
  'aria-colspan': 0,
  'aria-controls': 0,
  'aria-describedby': 0,
  'aria-errormessage': 0,
  'aria-flowto': 0,
  'aria-labelledby': 0,
  'aria-owns': 0,
  'aria-posinset': 0,
  'aria-rowcount': 0,
  'aria-rowindex': 0,
  'aria-rowspan': 0,
  'aria-setsize': 0
};

var warnedProperties = {};
var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

function validateProperty(tagName, name) {
  {
    if (hasOwnProperty$1.call(warnedProperties, name) && warnedProperties[name]) {
      return true;
    }

    if (rARIACamel.test(name)) {
      var ariaName = 'aria-' + name.slice(4).toLowerCase();
      var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null; // If this is an aria-* attribute, but is not listed in the known DOM
      // DOM properties, then it is an invalid aria-* attribute.

      if (correctName == null) {
        error('Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);

        warnedProperties[name] = true;
        return true;
      } // aria-* attributes should be lowercase; suggest the lowercase version.


      if (name !== correctName) {
        error('Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);

        warnedProperties[name] = true;
        return true;
      }
    }

    if (rARIA.test(name)) {
      var lowerCasedName = name.toLowerCase();
      var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null; // If this is an aria-* attribute, but is not listed in the known DOM
      // DOM properties, then it is an invalid aria-* attribute.

      if (standardName == null) {
        warnedProperties[name] = true;
        return false;
      } // aria-* attributes should be lowercase; suggest the lowercase version.


      if (name !== standardName) {
        error('Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);

        warnedProperties[name] = true;
        return true;
      }
    }
  }

  return true;
}

function warnInvalidARIAProps(type, props) {
  {
    var invalidProps = [];

    for (var key in props) {
      var isValid = validateProperty(type, key);

      if (!isValid) {
        invalidProps.push(key);
      }
    }

    var unknownPropString = invalidProps.map(function (prop) {
      return '`' + prop + '`';
    }).join(', ');

    if (invalidProps.length === 1) {
      error('Invalid aria prop %s on <%s> tag. ' + 'For details, see https://reactjs.org/link/invalid-aria-props', unknownPropString, type);
    } else if (invalidProps.length > 1) {
      error('Invalid aria props %s on <%s> tag. ' + 'For details, see https://reactjs.org/link/invalid-aria-props', unknownPropString, type);
    }
  }
}

function validateProperties(type, props) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnInvalidARIAProps(type, props);
}

var didWarnValueNull = false;
function validateProperties$1(type, props) {
  {
    if (type !== 'input' && type !== 'textarea' && type !== 'select') {
      return;
    }

    if (props != null && props.value === null && !didWarnValueNull) {
      didWarnValueNull = true;

      if (type === 'select' && props.multiple) {
        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
      } else {
        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
      }
    }
  }
}

// When adding attributes to the HTML or SVG allowed attribute list, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames = {
  // HTML
  accept: 'accept',
  acceptcharset: 'acceptCharset',
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  action: 'action',
  allowfullscreen: 'allowFullScreen',
  alt: 'alt',
  as: 'as',
  async: 'async',
  autocapitalize: 'autoCapitalize',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  autosave: 'autoSave',
  capture: 'capture',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  challenge: 'challenge',
  charset: 'charSet',
  checked: 'checked',
  children: 'children',
  cite: 'cite',
  class: 'className',
  classid: 'classID',
  classname: 'className',
  cols: 'cols',
  colspan: 'colSpan',
  content: 'content',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  controls: 'controls',
  controlslist: 'controlsList',
  coords: 'coords',
  crossorigin: 'crossOrigin',
  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
  data: 'data',
  datetime: 'dateTime',
  default: 'default',
  defaultchecked: 'defaultChecked',
  defaultvalue: 'defaultValue',
  defer: 'defer',
  dir: 'dir',
  disabled: 'disabled',
  disablepictureinpicture: 'disablePictureInPicture',
  disableremoteplayback: 'disableRemotePlayback',
  download: 'download',
  draggable: 'draggable',
  enctype: 'encType',
  enterkeyhint: 'enterKeyHint',
  for: 'htmlFor',
  form: 'form',
  formmethod: 'formMethod',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  headers: 'headers',
  height: 'height',
  hidden: 'hidden',
  high: 'high',
  href: 'href',
  hreflang: 'hrefLang',
  htmlfor: 'htmlFor',
  httpequiv: 'httpEquiv',
  'http-equiv': 'httpEquiv',
  icon: 'icon',
  id: 'id',
  innerhtml: 'innerHTML',
  inputmode: 'inputMode',
  integrity: 'integrity',
  is: 'is',
  itemid: 'itemID',
  itemprop: 'itemProp',
  itemref: 'itemRef',
  itemscope: 'itemScope',
  itemtype: 'itemType',
  keyparams: 'keyParams',
  keytype: 'keyType',
  kind: 'kind',
  label: 'label',
  lang: 'lang',
  list: 'list',
  loop: 'loop',
  low: 'low',
  manifest: 'manifest',
  marginwidth: 'marginWidth',
  marginheight: 'marginHeight',
  max: 'max',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  method: 'method',
  min: 'min',
  minlength: 'minLength',
  multiple: 'multiple',
  muted: 'muted',
  name: 'name',
  nomodule: 'noModule',
  nonce: 'nonce',
  novalidate: 'noValidate',
  open: 'open',
  optimum: 'optimum',
  pattern: 'pattern',
  placeholder: 'placeholder',
  playsinline: 'playsInline',
  poster: 'poster',
  preload: 'preload',
  profile: 'profile',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  referrerpolicy: 'referrerPolicy',
  rel: 'rel',
  required: 'required',
  reversed: 'reversed',
  role: 'role',
  rows: 'rows',
  rowspan: 'rowSpan',
  sandbox: 'sandbox',
  scope: 'scope',
  scoped: 'scoped',
  scrolling: 'scrolling',
  seamless: 'seamless',
  selected: 'selected',
  shape: 'shape',
  size: 'size',
  sizes: 'sizes',
  span: 'span',
  spellcheck: 'spellCheck',
  src: 'src',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  start: 'start',
  step: 'step',
  style: 'style',
  summary: 'summary',
  tabindex: 'tabIndex',
  target: 'target',
  title: 'title',
  type: 'type',
  usemap: 'useMap',
  value: 'value',
  width: 'width',
  wmode: 'wmode',
  wrap: 'wrap',
  // SVG
  about: 'about',
  accentheight: 'accentHeight',
  'accent-height': 'accentHeight',
  accumulate: 'accumulate',
  additive: 'additive',
  alignmentbaseline: 'alignmentBaseline',
  'alignment-baseline': 'alignmentBaseline',
  allowreorder: 'allowReorder',
  alphabetic: 'alphabetic',
  amplitude: 'amplitude',
  arabicform: 'arabicForm',
  'arabic-form': 'arabicForm',
  ascent: 'ascent',
  attributename: 'attributeName',
  attributetype: 'attributeType',
  autoreverse: 'autoReverse',
  azimuth: 'azimuth',
  basefrequency: 'baseFrequency',
  baselineshift: 'baselineShift',
  'baseline-shift': 'baselineShift',
  baseprofile: 'baseProfile',
  bbox: 'bbox',
  begin: 'begin',
  bias: 'bias',
  by: 'by',
  calcmode: 'calcMode',
  capheight: 'capHeight',
  'cap-height': 'capHeight',
  clip: 'clip',
  clippath: 'clipPath',
  'clip-path': 'clipPath',
  clippathunits: 'clipPathUnits',
  cliprule: 'clipRule',
  'clip-rule': 'clipRule',
  color: 'color',
  colorinterpolation: 'colorInterpolation',
  'color-interpolation': 'colorInterpolation',
  colorinterpolationfilters: 'colorInterpolationFilters',
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorprofile: 'colorProfile',
  'color-profile': 'colorProfile',
  colorrendering: 'colorRendering',
  'color-rendering': 'colorRendering',
  contentscripttype: 'contentScriptType',
  contentstyletype: 'contentStyleType',
  cursor: 'cursor',
  cx: 'cx',
  cy: 'cy',
  d: 'd',
  datatype: 'datatype',
  decelerate: 'decelerate',
  descent: 'descent',
  diffuseconstant: 'diffuseConstant',
  direction: 'direction',
  display: 'display',
  divisor: 'divisor',
  dominantbaseline: 'dominantBaseline',
  'dominant-baseline': 'dominantBaseline',
  dur: 'dur',
  dx: 'dx',
  dy: 'dy',
  edgemode: 'edgeMode',
  elevation: 'elevation',
  enablebackground: 'enableBackground',
  'enable-background': 'enableBackground',
  end: 'end',
  exponent: 'exponent',
  externalresourcesrequired: 'externalResourcesRequired',
  fill: 'fill',
  fillopacity: 'fillOpacity',
  'fill-opacity': 'fillOpacity',
  fillrule: 'fillRule',
  'fill-rule': 'fillRule',
  filter: 'filter',
  filterres: 'filterRes',
  filterunits: 'filterUnits',
  floodopacity: 'floodOpacity',
  'flood-opacity': 'floodOpacity',
  floodcolor: 'floodColor',
  'flood-color': 'floodColor',
  focusable: 'focusable',
  fontfamily: 'fontFamily',
  'font-family': 'fontFamily',
  fontsize: 'fontSize',
  'font-size': 'fontSize',
  fontsizeadjust: 'fontSizeAdjust',
  'font-size-adjust': 'fontSizeAdjust',
  fontstretch: 'fontStretch',
  'font-stretch': 'fontStretch',
  fontstyle: 'fontStyle',
  'font-style': 'fontStyle',
  fontvariant: 'fontVariant',
  'font-variant': 'fontVariant',
  fontweight: 'fontWeight',
  'font-weight': 'fontWeight',
  format: 'format',
  from: 'from',
  fx: 'fx',
  fy: 'fy',
  g1: 'g1',
  g2: 'g2',
  glyphname: 'glyphName',
  'glyph-name': 'glyphName',
  glyphorientationhorizontal: 'glyphOrientationHorizontal',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphorientationvertical: 'glyphOrientationVertical',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  hanging: 'hanging',
  horizadvx: 'horizAdvX',
  'horiz-adv-x': 'horizAdvX',
  horizoriginx: 'horizOriginX',
  'horiz-origin-x': 'horizOriginX',
  ideographic: 'ideographic',
  imagerendering: 'imageRendering',
  'image-rendering': 'imageRendering',
  in2: 'in2',
  in: 'in',
  inlist: 'inlist',
  intercept: 'intercept',
  k1: 'k1',
  k2: 'k2',
  k3: 'k3',
  k4: 'k4',
  k: 'k',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  kerning: 'kerning',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lengthadjust: 'lengthAdjust',
  letterspacing: 'letterSpacing',
  'letter-spacing': 'letterSpacing',
  lightingcolor: 'lightingColor',
  'lighting-color': 'lightingColor',
  limitingconeangle: 'limitingConeAngle',
  local: 'local',
  markerend: 'markerEnd',
  'marker-end': 'markerEnd',
  markerheight: 'markerHeight',
  markermid: 'markerMid',
  'marker-mid': 'markerMid',
  markerstart: 'markerStart',
  'marker-start': 'markerStart',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  mask: 'mask',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  mathematical: 'mathematical',
  mode: 'mode',
  numoctaves: 'numOctaves',
  offset: 'offset',
  opacity: 'opacity',
  operator: 'operator',
  order: 'order',
  orient: 'orient',
  orientation: 'orientation',
  origin: 'origin',
  overflow: 'overflow',
  overlineposition: 'overlinePosition',
  'overline-position': 'overlinePosition',
  overlinethickness: 'overlineThickness',
  'overline-thickness': 'overlineThickness',
  paintorder: 'paintOrder',
  'paint-order': 'paintOrder',
  panose1: 'panose1',
  'panose-1': 'panose1',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointerevents: 'pointerEvents',
  'pointer-events': 'pointerEvents',
  points: 'points',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  prefix: 'prefix',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  property: 'property',
  r: 'r',
  radius: 'radius',
  refx: 'refX',
  refy: 'refY',
  renderingintent: 'renderingIntent',
  'rendering-intent': 'renderingIntent',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  resource: 'resource',
  restart: 'restart',
  result: 'result',
  results: 'results',
  rotate: 'rotate',
  rx: 'rx',
  ry: 'ry',
  scale: 'scale',
  security: 'security',
  seed: 'seed',
  shaperendering: 'shapeRendering',
  'shape-rendering': 'shapeRendering',
  slope: 'slope',
  spacing: 'spacing',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  speed: 'speed',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stemh: 'stemh',
  stemv: 'stemv',
  stitchtiles: 'stitchTiles',
  stopcolor: 'stopColor',
  'stop-color': 'stopColor',
  stopopacity: 'stopOpacity',
  'stop-opacity': 'stopOpacity',
  strikethroughposition: 'strikethroughPosition',
  'strikethrough-position': 'strikethroughPosition',
  strikethroughthickness: 'strikethroughThickness',
  'strikethrough-thickness': 'strikethroughThickness',
  string: 'string',
  stroke: 'stroke',
  strokedasharray: 'strokeDasharray',
  'stroke-dasharray': 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  'stroke-dashoffset': 'strokeDashoffset',
  strokelinecap: 'strokeLinecap',
  'stroke-linecap': 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  'stroke-linejoin': 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  'stroke-miterlimit': 'strokeMiterlimit',
  strokewidth: 'strokeWidth',
  'stroke-width': 'strokeWidth',
  strokeopacity: 'strokeOpacity',
  'stroke-opacity': 'strokeOpacity',
  suppresscontenteditablewarning: 'suppressContentEditableWarning',
  suppresshydrationwarning: 'suppressHydrationWarning',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  targetx: 'targetX',
  targety: 'targetY',
  textanchor: 'textAnchor',
  'text-anchor': 'textAnchor',
  textdecoration: 'textDecoration',
  'text-decoration': 'textDecoration',
  textlength: 'textLength',
  textrendering: 'textRendering',
  'text-rendering': 'textRendering',
  to: 'to',
  transform: 'transform',
  typeof: 'typeof',
  u1: 'u1',
  u2: 'u2',
  underlineposition: 'underlinePosition',
  'underline-position': 'underlinePosition',
  underlinethickness: 'underlineThickness',
  'underline-thickness': 'underlineThickness',
  unicode: 'unicode',
  unicodebidi: 'unicodeBidi',
  'unicode-bidi': 'unicodeBidi',
  unicoderange: 'unicodeRange',
  'unicode-range': 'unicodeRange',
  unitsperem: 'unitsPerEm',
  'units-per-em': 'unitsPerEm',
  unselectable: 'unselectable',
  valphabetic: 'vAlphabetic',
  'v-alphabetic': 'vAlphabetic',
  values: 'values',
  vectoreffect: 'vectorEffect',
  'vector-effect': 'vectorEffect',
  version: 'version',
  vertadvy: 'vertAdvY',
  'vert-adv-y': 'vertAdvY',
  vertoriginx: 'vertOriginX',
  'vert-origin-x': 'vertOriginX',
  vertoriginy: 'vertOriginY',
  'vert-origin-y': 'vertOriginY',
  vhanging: 'vHanging',
  'v-hanging': 'vHanging',
  videographic: 'vIdeographic',
  'v-ideographic': 'vIdeographic',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  visibility: 'visibility',
  vmathematical: 'vMathematical',
  'v-mathematical': 'vMathematical',
  vocab: 'vocab',
  widths: 'widths',
  wordspacing: 'wordSpacing',
  'word-spacing': 'wordSpacing',
  writingmode: 'writingMode',
  'writing-mode': 'writingMode',
  x1: 'x1',
  x2: 'x2',
  x: 'x',
  xchannelselector: 'xChannelSelector',
  xheight: 'xHeight',
  'x-height': 'xHeight',
  xlinkactuate: 'xlinkActuate',
  'xlink:actuate': 'xlinkActuate',
  xlinkarcrole: 'xlinkArcrole',
  'xlink:arcrole': 'xlinkArcrole',
  xlinkhref: 'xlinkHref',
  'xlink:href': 'xlinkHref',
  xlinkrole: 'xlinkRole',
  'xlink:role': 'xlinkRole',
  xlinkshow: 'xlinkShow',
  'xlink:show': 'xlinkShow',
  xlinktitle: 'xlinkTitle',
  'xlink:title': 'xlinkTitle',
  xlinktype: 'xlinkType',
  'xlink:type': 'xlinkType',
  xmlbase: 'xmlBase',
  'xml:base': 'xmlBase',
  xmllang: 'xmlLang',
  'xml:lang': 'xmlLang',
  xmlns: 'xmlns',
  'xml:space': 'xmlSpace',
  xmlnsxlink: 'xmlnsXlink',
  'xmlns:xlink': 'xmlnsXlink',
  xmlspace: 'xmlSpace',
  y1: 'y1',
  y2: 'y2',
  y: 'y',
  ychannelselector: 'yChannelSelector',
  z: 'z',
  zoomandpan: 'zoomAndPan'
};

var validateProperty$1 = function () {};

{
  var warnedProperties$1 = {};
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var EVENT_NAME_REGEX = /^on./;
  var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
  var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

  validateProperty$1 = function (tagName, name, value, eventRegistry) {
    if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
      return true;
    }

    var lowerCasedName = name.toLowerCase();

    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
      error('React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');

      warnedProperties$1[name] = true;
      return true;
    } // We can't rely on the event system being injected on the server.


    if (eventRegistry != null) {
      var registrationNameDependencies = eventRegistry.registrationNameDependencies,
          possibleRegistrationNames = eventRegistry.possibleRegistrationNames;

      if (registrationNameDependencies.hasOwnProperty(name)) {
        return true;
      }

      var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;

      if (registrationName != null) {
        error('Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);

        warnedProperties$1[name] = true;
        return true;
      }

      if (EVENT_NAME_REGEX.test(name)) {
        error('Unknown event handler property `%s`. It will be ignored.', name);

        warnedProperties$1[name] = true;
        return true;
      }
    } else if (EVENT_NAME_REGEX.test(name)) {
      // If no event plugins have been injected, we are in a server environment.
      // So we can't tell if the event name is correct for sure, but we can filter
      // out known bad ones like `onclick`. We can't suggest a specific replacement though.
      if (INVALID_EVENT_NAME_REGEX.test(name)) {
        error('Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Let the ARIA attribute hook validate ARIA attributes


    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
      return true;
    }

    if (lowerCasedName === 'innerhtml') {
      error('Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');

      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'aria') {
      error('The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');

      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
      error('Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value);

      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'number' && isNaN(value)) {
      error('Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);

      warnedProperties$1[name] = true;
      return true;
    }

    var propertyInfo = getPropertyInfo(name);
    var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED; // Known attributes should match the casing specified in the property config.

    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      var standardName = possibleStandardNames[lowerCasedName];

      if (standardName !== name) {
        error('Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);

        warnedProperties$1[name] = true;
        return true;
      }
    } else if (!isReserved && name !== lowerCasedName) {
      // Unknown attributes should have lowercase casing since that's how they
      // will be cased anyway with server rendering.
      error('React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);

      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      if (value) {
        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
      } else {
        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Now that we've validated casing, do not validate
    // data types for reserved props


    if (isReserved) {
      return true;
    } // Warn when a known attribute is a bad type


    if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      warnedProperties$1[name] = true;
      return false;
    } // Warn when passing the strings 'false' or 'true' into a boolean prop


    if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
      error('Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);

      warnedProperties$1[name] = true;
      return true;
    }

    return true;
  };
}

var warnUnknownProperties = function (type, props, eventRegistry) {
  {
    var unknownProps = [];

    for (var key in props) {
      var isValid = validateProperty$1(type, key, props[key], eventRegistry);

      if (!isValid) {
        unknownProps.push(key);
      }
    }

    var unknownPropString = unknownProps.map(function (prop) {
      return '`' + prop + '`';
    }).join(', ');

    if (unknownProps.length === 1) {
      error('Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://reactjs.org/link/attribute-behavior ', unknownPropString, type);
    } else if (unknownProps.length > 1) {
      error('Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://reactjs.org/link/attribute-behavior ', unknownPropString, type);
    }
  }
};

function validateProperties$2(type, props, eventRegistry) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnUnknownProperties(type, props, eventRegistry);
}

var toArray = React.Children.toArray; // This is only used in DEV.
// Each entry is `this.stack` from a currently executing renderer instance.
// (There may be more than one because ReactDOMServer is reentrant).
// Each stack is an array of frames which may contain nested stacks of elements.

var currentDebugStacks = [];
var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var ReactDebugCurrentFrame$1;
var prevGetCurrentStackImpl = null;

var getCurrentServerStackImpl = function () {
  return '';
};

var describeStackFrame = function (element) {
  return '';
};

var validatePropertiesInDevelopment = function (type, props) {};

var pushCurrentDebugStack = function (stack) {};

var pushElementToDebugStack = function (element) {};

var popCurrentDebugStack = function () {};

var hasWarnedAboutUsingContextAsConsumer = false;

{
  ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

  validatePropertiesInDevelopment = function (type, props) {
    validateProperties(type, props);
    validateProperties$1(type, props);
    validateProperties$2(type, props, null);
  };

  describeStackFrame = function (element) {
    return describeUnknownElementTypeFrameInDEV(element.type, element._source, null);
  };

  pushCurrentDebugStack = function (stack) {
    currentDebugStacks.push(stack);

    if (currentDebugStacks.length === 1) {
      // We are entering a server renderer.
      // Remember the previous (e.g. client) global stack implementation.
      prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
      ReactDebugCurrentFrame$1.getCurrentStack = getCurrentServerStackImpl;
    }
  };

  pushElementToDebugStack = function (element) {
    // For the innermost executing ReactDOMServer call,
    var stack = currentDebugStacks[currentDebugStacks.length - 1]; // Take the innermost executing frame (e.g. <Foo>),

    var frame = stack[stack.length - 1]; // and record that it has one more element associated with it.

    frame.debugElementStack.push(element); // We only need this because we tail-optimize single-element
    // children and directly handle them in an inner loop instead of
    // creating separate frames for them.
  };

  popCurrentDebugStack = function () {
    currentDebugStacks.pop();

    if (currentDebugStacks.length === 0) {
      // We are exiting the server renderer.
      // Restore the previous (e.g. client) global stack implementation.
      ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
      prevGetCurrentStackImpl = null;
    }
  };

  getCurrentServerStackImpl = function () {
    if (currentDebugStacks.length === 0) {
      // Nothing is currently rendering.
      return '';
    } // ReactDOMServer is reentrant so there may be multiple calls at the same time.
    // Take the frames from the innermost call which is the last in the array.


    var frames = currentDebugStacks[currentDebugStacks.length - 1];
    var stack = ''; // Go through every frame in the stack from the innermost one.

    for (var i = frames.length - 1; i >= 0; i--) {
      var frame = frames[i]; // Every frame might have more than one debug element stack entry associated with it.
      // This is because single-child nesting doesn't create materialized frames.
      // Instead it would push them through `pushElementToDebugStack()`.

      var debugElementStack = frame.debugElementStack;

      for (var ii = debugElementStack.length - 1; ii >= 0; ii--) {
        stack += describeStackFrame(debugElementStack[ii]);
      }
    }

    return stack;
  };
}

var didWarnDefaultInputValue = false;
var didWarnDefaultChecked = false;
var didWarnDefaultSelectValue = false;
var didWarnDefaultTextareaValue = false;
var didWarnInvalidOptionChildren = false;
var didWarnAboutNoopUpdateForComponent = {};
var didWarnAboutBadClass = {};
var didWarnAboutModulePatternComponent = {};
var didWarnAboutDeprecatedWillMount = {};
var didWarnAboutUndefinedDerivedState = {};
var didWarnAboutUninitializedState = {};
var valuePropNames = ['value', 'defaultValue'];
var newlineEatingTags = {
  listing: true,
  pre: true,
  textarea: true
}; // We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name

var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset

var validatedTagCache = {};

function validateDangerousTag(tag) {
  if (!validatedTagCache.hasOwnProperty(tag)) {
    if (!VALID_TAG_REGEX.test(tag)) {
      {
        throw Error( "Invalid tag: " + tag );
      }
    }

    validatedTagCache[tag] = true;
  }
}

var styleNameCache = {};

var processStyleName = function (styleName) {
  if (styleNameCache.hasOwnProperty(styleName)) {
    return styleNameCache[styleName];
  }

  var result = hyphenateStyleName(styleName);
  styleNameCache[styleName] = result;
  return result;
};

function createMarkupForStyles(styles) {
  var serialized = '';
  var delimiter = '';

  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }

    var isCustomProperty = styleName.indexOf('--') === 0;
    var styleValue = styles[styleName];

    {
      if (!isCustomProperty) {
        warnValidStyle$1(styleName, styleValue);
      }
    }

    if (styleValue != null) {
      serialized += delimiter + (isCustomProperty ? styleName : processStyleName(styleName)) + ':';
      serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
      delimiter = ';';
    }
  }

  return serialized || null;
}

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && getComponentName(_constructor) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;

    if (didWarnAboutNoopUpdateForComponent[warningKey]) {
      return;
    }

    error('%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);

    didWarnAboutNoopUpdateForComponent[warningKey] = true;
  }
}

function shouldConstruct$1(Component) {
  return Component.prototype && Component.prototype.isReactComponent;
}

function getNonChildrenInnerMarkup(props) {
  var innerHTML = props.dangerouslySetInnerHTML;

  if (innerHTML != null) {
    if (innerHTML.__html != null) {
      return innerHTML.__html;
    }
  } else {
    var content = props.children;

    if (typeof content === 'string' || typeof content === 'number') {
      return escapeTextForBrowser(content);
    }
  }

  return null;
}

function flattenTopLevelChildren(children) {
  if (!React.isValidElement(children)) {
    return toArray(children);
  }

  var element = children;

  if (element.type !== REACT_FRAGMENT_TYPE) {
    return [element];
  }

  var fragmentChildren = element.props.children;

  if (!React.isValidElement(fragmentChildren)) {
    return toArray(fragmentChildren);
  }

  var fragmentChildElement = fragmentChildren;
  return [fragmentChildElement];
}

function flattenOptionChildren(children) {
  if (children === undefined || children === null) {
    return children;
  }

  var content = ''; // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.

  React.Children.forEach(children, function (child) {
    if (child == null) {
      return;
    }

    content += child;

    {
      if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
        didWarnInvalidOptionChildren = true;

        error('Only strings and numbers are supported as <option> children.');
      }
    }
  });
  return content;
}

var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
var STYLE = 'style';
var RESERVED_PROPS = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null,
  suppressHydrationWarning: null
};

function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
  var ret = '<' + tagVerbatim;
  var isCustomComponent$1 = isCustomComponent(tagLowercase, props);

  for (var propKey in props) {
    if (!hasOwnProperty$2.call(props, propKey)) {
      continue;
    }

    var propValue = props[propKey];

    if (propValue == null) {
      continue;
    }

    if (propKey === STYLE) {
      propValue = createMarkupForStyles(propValue);
    }

    var markup = null;

    if (isCustomComponent$1) {
      if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
        markup = createMarkupForCustomAttribute(propKey, propValue);
      }
    } else {
      markup = createMarkupForProperty(propKey, propValue);
    }

    if (markup) {
      ret += ' ' + markup;
    }
  } // For static pages, no need to put React ID and checksum. Saves lots of
  // bytes.


  if (makeStaticMarkup) {
    return ret;
  }

  if (isRootElement) {
    ret += ' ' + createMarkupForRoot();
  }

  return ret;
}

function validateRenderResult(child, type) {
  if (child === undefined) {
    {
      {
        throw Error( (getComponentName(type) || 'Component') + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null." );
      }
    }
  }
}

function resolve(child, context, threadID) {
  while (React.isValidElement(child)) {
    // Safe because we just checked it's an element.
    var element = child;
    var Component = element.type;

    {
      pushElementToDebugStack(element);
    }

    if (typeof Component !== 'function') {
      break;
    }

    processChild(element, Component);
  } // Extra closure so queue and replace can be captured properly


  function processChild(element, Component) {
    var isClass = shouldConstruct$1(Component);
    var publicContext = processContext(Component, context, threadID, isClass);
    var queue = [];
    var replace = false;
    var updater = {
      isMounted: function (publicInstance) {
        return false;
      },
      enqueueForceUpdate: function (publicInstance) {
        if (queue === null) {
          warnNoop(publicInstance, 'forceUpdate');
          return null;
        }
      },
      enqueueReplaceState: function (publicInstance, completeState) {
        replace = true;
        queue = [completeState];
      },
      enqueueSetState: function (publicInstance, currentPartialState) {
        if (queue === null) {
          warnNoop(publicInstance, 'setState');
          return null;
        }

        queue.push(currentPartialState);
      }
    };
    var inst;

    if (isClass) {
      inst = new Component(element.props, publicContext, updater);

      if (typeof Component.getDerivedStateFromProps === 'function') {
        {
          if (inst.state === null || inst.state === undefined) {
            var componentName = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutUninitializedState[componentName]) {
              error('`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, inst.state === null ? 'null' : 'undefined', componentName);

              didWarnAboutUninitializedState[componentName] = true;
            }
          }
        }

        var partialState = Component.getDerivedStateFromProps.call(null, element.props, inst.state);

        {
          if (partialState === undefined) {
            var _componentName = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutUndefinedDerivedState[_componentName]) {
              error('%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', _componentName);

              didWarnAboutUndefinedDerivedState[_componentName] = true;
            }
          }
        }

        if (partialState != null) {
          inst.state = _assign({}, inst.state, partialState);
        }
      }
    } else {
      {
        if (Component.prototype && typeof Component.prototype.render === 'function') {
          var _componentName2 = getComponentName(Component) || 'Unknown';

          if (!didWarnAboutBadClass[_componentName2]) {
            error("The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', _componentName2, _componentName2);

            didWarnAboutBadClass[_componentName2] = true;
          }
        }
      }

      var componentIdentity = {};
      prepareToUseHooks(componentIdentity);
      inst = Component(element.props, publicContext, updater);
      inst = finishHooks(Component, element.props, inst, publicContext);

      {
        // Support for module components is deprecated and is removed behind a flag.
        // Whether or not it would crash later, we want to show a good message in DEV first.
        if (inst != null && inst.render != null) {
          var _componentName3 = getComponentName(Component) || 'Unknown';

          if (!didWarnAboutModulePatternComponent[_componentName3]) {
            error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName3, _componentName3, _componentName3);

            didWarnAboutModulePatternComponent[_componentName3] = true;
          }
        }
      } // If the flag is on, everything is assumed to be a function component.
      // Otherwise, we also do the unfortunate dynamic checks.


      if ( inst == null || inst.render == null) {
        child = inst;
        validateRenderResult(child, Component);
        return;
      }
    }

    inst.props = element.props;
    inst.context = publicContext;
    inst.updater = updater;
    var initialState = inst.state;

    if (initialState === undefined) {
      inst.state = initialState = null;
    }

    if (typeof inst.UNSAFE_componentWillMount === 'function' || typeof inst.componentWillMount === 'function') {
      if (typeof inst.componentWillMount === 'function') {
        {
          if ( inst.componentWillMount.__suppressDeprecationWarning !== true) {
            var _componentName4 = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutDeprecatedWillMount[_componentName4]) {
              warn( // keep this warning in sync with ReactStrictModeWarning.js
              'componentWillMount has been renamed, and is not recommended for use. ' + 'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n' + '* Move code from componentWillMount to componentDidMount (preferred in most cases) ' + 'or the constructor.\n' + '\nPlease update the following components: %s', _componentName4);

              didWarnAboutDeprecatedWillMount[_componentName4] = true;
            }
          }
        } // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.


        if (typeof Component.getDerivedStateFromProps !== 'function') {
          inst.componentWillMount();
        }
      }

      if (typeof inst.UNSAFE_componentWillMount === 'function' && typeof Component.getDerivedStateFromProps !== 'function') {
        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
        inst.UNSAFE_componentWillMount();
      }

      if (queue.length) {
        var oldQueue = queue;
        var oldReplace = replace;
        queue = null;
        replace = false;

        if (oldReplace && oldQueue.length === 1) {
          inst.state = oldQueue[0];
        } else {
          var nextState = oldReplace ? oldQueue[0] : inst.state;
          var dontMutate = true;

          for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
            var partial = oldQueue[i];

            var _partialState = typeof partial === 'function' ? partial.call(inst, nextState, element.props, publicContext) : partial;

            if (_partialState != null) {
              if (dontMutate) {
                dontMutate = false;
                nextState = _assign({}, nextState, _partialState);
              } else {
                _assign(nextState, _partialState);
              }
            }
          }

          inst.state = nextState;
        }
      } else {
        queue = null;
      }
    }

    child = inst.render();

    {
      if (child === undefined && inst.render._isMockFunction) {
        // This is probably bad practice. Consider warning here and
        // deprecating this convenience.
        child = null;
      }
    }

    validateRenderResult(child, Component);
    var childContext;

    {
      if (typeof inst.getChildContext === 'function') {
        var _childContextTypes = Component.childContextTypes;

        if (typeof _childContextTypes === 'object') {
          childContext = inst.getChildContext();

          for (var contextKey in childContext) {
            if (!(contextKey in _childContextTypes)) {
              {
                throw Error( (getComponentName(Component) || 'Unknown') + ".getChildContext(): key \"" + contextKey + "\" is not defined in childContextTypes." );
              }
            }
          }
        } else {
          {
            error('%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', getComponentName(Component) || 'Unknown');
          }
        }
      }

      if (childContext) {
        context = _assign({}, context, childContext);
      }
    }
  }

  return {
    child: child,
    context: context
  };
}

var ReactDOMServerRenderer = /*#__PURE__*/function () {
  // TODO: type this more strictly:
  // DEV-only
  function ReactDOMServerRenderer(children, makeStaticMarkup, options) {
    var flatChildren = flattenTopLevelChildren(children);
    var topFrame = {
      type: null,
      // Assume all trees start in the HTML namespace (not totally true, but
      // this is what we did historically)
      domNamespace: Namespaces.html,
      children: flatChildren,
      childIndex: 0,
      context: emptyObject,
      footer: ''
    };

    {
      topFrame.debugElementStack = [];
    }

    this.threadID = allocThreadID();
    this.stack = [topFrame];
    this.exhausted = false;
    this.currentSelectValue = null;
    this.previousWasTextNode = false;
    this.makeStaticMarkup = makeStaticMarkup;
    this.suspenseDepth = 0; // Context (new API)

    this.contextIndex = -1;
    this.contextStack = [];
    this.contextValueStack = []; // useOpaqueIdentifier ID

    this.uniqueID = 0;
    this.identifierPrefix = options && options.identifierPrefix || '';

    {
      this.contextProviderStack = [];
    }
  }

  var _proto = ReactDOMServerRenderer.prototype;

  _proto.destroy = function destroy() {
    if (!this.exhausted) {
      this.exhausted = true;
      this.clearProviders();
      freeThreadID(this.threadID);
    }
  }
  /**
   * Note: We use just two stacks regardless of how many context providers you have.
   * Providers are always popped in the reverse order to how they were pushed
   * so we always know on the way down which provider you'll encounter next on the way up.
   * On the way down, we push the current provider, and its context value *before*
   * we mutated it, onto the stacks. Therefore, on the way up, we always know which
   * provider needs to be "restored" to which value.
   * https://github.com/facebook/react/pull/12985#issuecomment-396301248
   */
  ;

  _proto.pushProvider = function pushProvider(provider) {
    var index = ++this.contextIndex;
    var context = provider.type._context;
    var threadID = this.threadID;
    validateContextBounds(context, threadID);
    var previousValue = context[threadID]; // Remember which value to restore this context to on our way up.

    this.contextStack[index] = context;
    this.contextValueStack[index] = previousValue;

    {
      // Only used for push/pop mismatch warnings.
      this.contextProviderStack[index] = provider;
    } // Mutate the current value.


    context[threadID] = provider.props.value;
  };

  _proto.popProvider = function popProvider(provider) {
    var index = this.contextIndex;

    {
      if (index < 0 || provider !== this.contextProviderStack[index]) {
        error('Unexpected pop.');
      }
    }

    var context = this.contextStack[index];
    var previousValue = this.contextValueStack[index]; // "Hide" these null assignments from Flow by using `any`
    // because conceptually they are deletions--as long as we
    // promise to never access values beyond `this.contextIndex`.

    this.contextStack[index] = null;
    this.contextValueStack[index] = null;

    {
      this.contextProviderStack[index] = null;
    }

    this.contextIndex--; // Restore to the previous value we stored as we were walking down.
    // We've already verified that this context has been expanded to accommodate
    // this thread id, so we don't need to do it again.

    context[this.threadID] = previousValue;
  };

  _proto.clearProviders = function clearProviders() {
    // Restore any remaining providers on the stack to previous values
    for (var index = this.contextIndex; index >= 0; index--) {
      var context = this.contextStack[index];
      var previousValue = this.contextValueStack[index];
      context[this.threadID] = previousValue;
    }
  };

  _proto.read = function read(bytes) {
    if (this.exhausted) {
      return null;
    }

    var prevPartialRenderer = currentPartialRenderer;
    setCurrentPartialRenderer(this);
    var prevDispatcher = ReactCurrentDispatcher$1.current;
    ReactCurrentDispatcher$1.current = Dispatcher;

    try {
      // Markup generated within <Suspense> ends up buffered until we know
      // nothing in that boundary suspended
      var out = [''];
      var suspended = false;

      while (out[0].length < bytes) {
        if (this.stack.length === 0) {
          this.exhausted = true;
          freeThreadID(this.threadID);
          break;
        }

        var frame = this.stack[this.stack.length - 1];

        if (suspended || frame.childIndex >= frame.children.length) {
          var footer = frame.footer;

          if (footer !== '') {
            this.previousWasTextNode = false;
          }

          this.stack.pop();

          if (frame.type === 'select') {
            this.currentSelectValue = null;
          } else if (frame.type != null && frame.type.type != null && frame.type.type.$$typeof === REACT_PROVIDER_TYPE) {
            var provider = frame.type;
            this.popProvider(provider);
          } else if (frame.type === REACT_SUSPENSE_TYPE) {
            this.suspenseDepth--;
            var buffered = out.pop();

            if (suspended) {
              suspended = false; // If rendering was suspended at this boundary, render the fallbackFrame

              var fallbackFrame = frame.fallbackFrame;

              if (!fallbackFrame) {
                {
                  throw Error(true ? "ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue." : undefined);
                }
              }

              this.stack.push(fallbackFrame);
              out[this.suspenseDepth] += '<!--$!-->'; // Skip flushing output since we're switching to the fallback

              continue;
            } else {
              out[this.suspenseDepth] += buffered;
            }
          } // Flush output


          out[this.suspenseDepth] += footer;
          continue;
        }

        var child = frame.children[frame.childIndex++];
        var outBuffer = '';

        if (true) {
          pushCurrentDebugStack(this.stack); // We're starting work on this frame, so reset its inner stack.

          frame.debugElementStack.length = 0;
        }

        try {
          outBuffer += this.render(child, frame.context, frame.domNamespace);
        } catch (err) {
          if (err != null && typeof err.then === 'function') {
            if (enableSuspenseServerRenderer) {
              if (!(this.suspenseDepth > 0)) {
                {
                  throw Error(true ? "A React component suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." : undefined);
                }
              }

              suspended = true;
            } else {
              if (true) {
                {
                  throw Error(true ? "ReactDOMServer does not yet support Suspense." : undefined);
                }
              }
            }
          } else {
            throw err;
          }
        } finally {
          if (true) {
            popCurrentDebugStack();
          }
        }

        if (out.length <= this.suspenseDepth) {
          out.push('');
        }

        out[this.suspenseDepth] += outBuffer;
      }

      return out[0];
    } finally {
      ReactCurrentDispatcher$1.current = prevDispatcher;
      setCurrentPartialRenderer(prevPartialRenderer);
      resetHooksState();
    }
  };

  _proto.render = function render(child, context, parentNamespace) {
    if (typeof child === 'string' || typeof child === 'number') {
      var text = '' + child;

      if (text === '') {
        return '';
      }

      if (this.makeStaticMarkup) {
        return escapeTextForBrowser(text);
      }

      if (this.previousWasTextNode) {
        return '<!-- -->' + escapeTextForBrowser(text);
      }

      this.previousWasTextNode = true;
      return escapeTextForBrowser(text);
    } else {
      var nextChild;

      var _resolve = resolve(child, context, this.threadID);

      nextChild = _resolve.child;
      context = _resolve.context;

      if (nextChild === null || nextChild === false) {
        return '';
      } else if (!React.isValidElement(nextChild)) {
        if (nextChild != null && nextChild.$$typeof != null) {
          // Catch unexpected special types early.
          var $$typeof = nextChild.$$typeof;

          if (!($$typeof !== REACT_PORTAL_TYPE)) {
            {
              throw Error( "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render." );
            }
          } // Catch-all to prevent an infinite loop if React.Children.toArray() supports some new type.


          {
            {
              throw Error( "Unknown element-like object type: " + $$typeof.toString() + ". This is likely a bug in React. Please file an issue." );
            }
          }
        }

        var nextChildren = toArray(nextChild);
        var frame = {
          type: null,
          domNamespace: parentNamespace,
          children: nextChildren,
          childIndex: 0,
          context: context,
          footer: ''
        };

        {
          frame.debugElementStack = [];
        }

        this.stack.push(frame);
        return '';
      } // Safe because we just checked it's an element.


      var nextElement = nextChild;
      var elementType = nextElement.type;

      if (typeof elementType === 'string') {
        return this.renderDOM(nextElement, context, parentNamespace);
      }

      switch (elementType) {
        // TODO: LegacyHidden acts the same as a fragment. This only works
        // because we currently assume that every instance of LegacyHidden is
        // accompanied by a host component wrapper. In the hidden mode, the host
        // component is given a `hidden` attribute, which ensures that the
        // initial HTML is not visible. To support the use of LegacyHidden as a
        // true fragment, without an extra DOM node, we would have to hide the
        // initial HTML in some other way.
        case REACT_LEGACY_HIDDEN_TYPE:
        case REACT_DEBUG_TRACING_MODE_TYPE:
        case REACT_STRICT_MODE_TYPE:
        case REACT_PROFILER_TYPE:
        case REACT_SUSPENSE_LIST_TYPE:
        case REACT_FRAGMENT_TYPE:
          {
            var _nextChildren = toArray(nextChild.props.children);

            var _frame = {
              type: null,
              domNamespace: parentNamespace,
              children: _nextChildren,
              childIndex: 0,
              context: context,
              footer: ''
            };

            {
              _frame.debugElementStack = [];
            }

            this.stack.push(_frame);
            return '';
          }

        case REACT_SUSPENSE_TYPE:
          {
            {
              {
                {
                  throw Error( "ReactDOMServer does not yet support Suspense." );
                }
              }
            }
          }
        // eslint-disable-next-line-no-fallthrough

        case REACT_SCOPE_TYPE:
          {

            {
              {
                throw Error( "ReactDOMServer does not yet support scope components." );
              }
            }
          }
      }

      if (typeof elementType === 'object' && elementType !== null) {
        switch (elementType.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            {
              var element = nextChild;

              var _nextChildren5;

              var componentIdentity = {};
              prepareToUseHooks(componentIdentity);
              _nextChildren5 = elementType.render(element.props, element.ref);
              _nextChildren5 = finishHooks(elementType.render, element.props, _nextChildren5, element.ref);
              _nextChildren5 = toArray(_nextChildren5);
              var _frame5 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren5,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame5.debugElementStack = [];
              }

              this.stack.push(_frame5);
              return '';
            }

          case REACT_MEMO_TYPE:
            {
              var _element = nextChild;
              var _nextChildren6 = [React.createElement(elementType.type, _assign({
                ref: _element.ref
              }, _element.props))];
              var _frame6 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren6,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame6.debugElementStack = [];
              }

              this.stack.push(_frame6);
              return '';
            }

          case REACT_PROVIDER_TYPE:
            {
              var provider = nextChild;
              var nextProps = provider.props;

              var _nextChildren7 = toArray(nextProps.children);

              var _frame7 = {
                type: provider,
                domNamespace: parentNamespace,
                children: _nextChildren7,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame7.debugElementStack = [];
              }

              this.pushProvider(provider);
              this.stack.push(_frame7);
              return '';
            }

          case REACT_CONTEXT_TYPE:
            {
              var reactContext = nextChild.type; // The logic below for Context differs depending on PROD or DEV mode. In
              // DEV mode, we create a separate object for Context.Consumer that acts
              // like a proxy to Context. This proxy object adds unnecessary code in PROD
              // so we use the old behaviour (Context.Consumer references Context) to
              // reduce size and overhead. The separate object references context via
              // a property called "_context", which also gives us the ability to check
              // in DEV mode if this property exists or not and warn if it does not.

              {
                if (reactContext._context === undefined) {
                  // This may be because it's a Context (rather than a Consumer).
                  // Or it may be because it's older React where they're the same thing.
                  // We only want to warn if we're sure it's a new React.
                  if (reactContext !== reactContext.Consumer) {
                    if (!hasWarnedAboutUsingContextAsConsumer) {
                      hasWarnedAboutUsingContextAsConsumer = true;

                      error('Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                    }
                  }
                } else {
                  reactContext = reactContext._context;
                }
              }

              var _nextProps = nextChild.props;
              var threadID = this.threadID;
              validateContextBounds(reactContext, threadID);
              var nextValue = reactContext[threadID];

              var _nextChildren8 = toArray(_nextProps.children(nextValue));

              var _frame8 = {
                type: nextChild,
                domNamespace: parentNamespace,
                children: _nextChildren8,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame8.debugElementStack = [];
              }

              this.stack.push(_frame8);
              return '';
            }
          // eslint-disable-next-line-no-fallthrough

          case REACT_FUNDAMENTAL_TYPE:
            {

              {
                {
                  throw Error( "ReactDOMServer does not yet support the fundamental API." );
                }
              }
            }
          // eslint-disable-next-line-no-fallthrough

          case REACT_LAZY_TYPE:
            {
              var _element2 = nextChild;
              var lazyComponent = nextChild.type; // Attempt to initialize lazy component regardless of whether the
              // suspense server-side renderer is enabled so synchronously
              // resolved constructors are supported.

              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              var result = init(payload);
              var _nextChildren10 = [React.createElement(result, _assign({
                ref: _element2.ref
              }, _element2.props))];
              var _frame10 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren10,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame10.debugElementStack = [];
              }

              this.stack.push(_frame10);
              return '';
            }
        }
      }

      var info = '';

      {
        var owner = nextElement._owner;

        if (elementType === undefined || typeof elementType === 'object' && elementType !== null && Object.keys(elementType).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
        }

        var ownerName = owner ? getComponentName(owner) : null;

        if (ownerName) {
          info += '\n\nCheck the render method of `' + ownerName + '`.';
        }
      }

      {
        {
          throw Error( "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (elementType == null ? elementType : typeof elementType) + "." + info );
        }
      }
    }
  };

  _proto.renderDOM = function renderDOM(element, context, parentNamespace) {
    var tag = element.type.toLowerCase();
    var namespace = parentNamespace;

    if (parentNamespace === Namespaces.html) {
      namespace = getIntrinsicNamespace(tag);
    }

    {
      if (namespace === Namespaces.html) {
        // Should this check be gated by parent namespace? Not sure we want to
        // allow <SVG> or <mATH>.
        if (tag !== element.type) {
          error('<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', element.type);
        }
      }
    }

    validateDangerousTag(tag);
    var props = element.props;

    if (tag === 'input') {
      {
        checkControlledValueProps('input', props);

        if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
          error('%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components', 'A component', props.type);

          didWarnDefaultChecked = true;
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
          error('%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components', 'A component', props.type);

          didWarnDefaultInputValue = true;
        }
      }

      props = _assign({
        type: undefined
      }, props, {
        defaultChecked: undefined,
        defaultValue: undefined,
        value: props.value != null ? props.value : props.defaultValue,
        checked: props.checked != null ? props.checked : props.defaultChecked
      });
    } else if (tag === 'textarea') {
      {
        checkControlledValueProps('textarea', props);

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
          error('Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components');

          didWarnDefaultTextareaValue = true;
        }
      }

      var initialValue = props.value;

      if (initialValue == null) {
        var defaultValue = props.defaultValue; // TODO (yungsters): Remove support for children content in <textarea>.

        var textareaChildren = props.children;

        if (textareaChildren != null) {
          {
            error('Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
          }

          if (!(defaultValue == null)) {
            {
              throw Error( "If you supply `defaultValue` on a <textarea>, do not pass children." );
            }
          }

          if (Array.isArray(textareaChildren)) {
            if (!(textareaChildren.length <= 1)) {
              {
                throw Error( "<textarea> can only have at most one child." );
              }
            }

            textareaChildren = textareaChildren[0];
          }

          defaultValue = '' + textareaChildren;
        }

        if (defaultValue == null) {
          defaultValue = '';
        }

        initialValue = defaultValue;
      }

      props = _assign({}, props, {
        value: undefined,
        children: '' + initialValue
      });
    } else if (tag === 'select') {
      {
        checkControlledValueProps('select', props);

        for (var i = 0; i < valuePropNames.length; i++) {
          var propName = valuePropNames[i];

          if (props[propName] == null) {
            continue;
          }

          var isArray = Array.isArray(props[propName]);

          if (props.multiple && !isArray) {
            error('The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.', propName);
          } else if (!props.multiple && isArray) {
            error('The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.', propName);
          }
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
          error('Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components');

          didWarnDefaultSelectValue = true;
        }
      }

      this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
      props = _assign({}, props, {
        value: undefined
      });
    } else if (tag === 'option') {
      var selected = null;
      var selectValue = this.currentSelectValue;
      var optionChildren = flattenOptionChildren(props.children);

      if (selectValue != null) {
        var value;

        if (props.value != null) {
          value = props.value + '';
        } else {
          value = optionChildren;
        }

        selected = false;

        if (Array.isArray(selectValue)) {
          // multiple
          for (var j = 0; j < selectValue.length; j++) {
            if ('' + selectValue[j] === value) {
              selected = true;
              break;
            }
          }
        } else {
          selected = '' + selectValue === value;
        }

        props = _assign({
          selected: undefined,
          children: undefined
        }, props, {
          selected: selected,
          children: optionChildren
        });
      }
    }

    {
      validatePropertiesInDevelopment(tag, props);
    }

    assertValidProps(tag, props);
    var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
    var footer = '';

    if (omittedCloseTags.hasOwnProperty(tag)) {
      out += '/>';
    } else {
      out += '>';
      footer = '</' + element.type + '>';
    }

    var children;
    var innerMarkup = getNonChildrenInnerMarkup(props);

    if (innerMarkup != null) {
      children = [];

      if (newlineEatingTags.hasOwnProperty(tag) && innerMarkup.charAt(0) === '\n') {
        // text/html ignores the first character in these tags if it's a newline
        // Prefer to break application/xml over text/html (for now) by adding
        // a newline specifically to get eaten by the parser. (Alternately for
        // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
        // \r is normalized out by HTMLTextAreaElement#value.)
        // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
        // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
        // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
        // See: Parsing of "textarea" "listing" and "pre" elements
        //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
        out += '\n';
      }

      out += innerMarkup;
    } else {
      children = toArray(props.children);
    }

    var frame = {
      domNamespace: getChildNamespace(parentNamespace, element.type),
      type: tag,
      children: children,
      childIndex: 0,
      context: context,
      footer: footer
    };

    {
      frame.debugElementStack = [];
    }

    this.stack.push(frame);
    this.previousWasTextNode = false;
    return out;
  };

  return ReactDOMServerRenderer;
}();

/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostring
 */

function renderToString(element, options) {
  var renderer = new ReactDOMServerRenderer(element, false, options);

  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}
/**
 * Similar to renderToString, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
 */

function renderToStaticMarkup(element, options) {
  var renderer = new ReactDOMServerRenderer(element, true, options);

  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}

function renderToNodeStream() {
  {
    {
      throw Error( "ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead." );
    }
  }
}

function renderToStaticNodeStream() {
  {
    {
      throw Error( "ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead." );
    }
  }
}

exports.renderToNodeStream = renderToNodeStream;
exports.renderToStaticMarkup = renderToStaticMarkup;
exports.renderToStaticNodeStream = renderToStaticNodeStream;
exports.renderToString = renderToString;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react-dom/server.browser.js":
/*!**************************************************!*\
  !*** ./node_modules/react-dom/server.browser.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-dom-server.browser.development.js */ "./node_modules/react-dom/cjs/react-dom-server.browser.development.js");
}


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_PC_antistore_antistore_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_PC_antistore_antistore_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_PC_antistore_antistore_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_PC_antistore_antistore_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_PC_antistore_antistore_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/withData */ "./lib/withData.js");
/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/styles/nprogress.css */ "./components/styles/nprogress.css");
/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "C:\\Users\\PC\\antistore\\antistore\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_PC_antistore_antistore_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







next_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on("routeChangeStart", function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();
});
next_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on("routeChangeComplete", function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
});
next_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on("routeChangeError", function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
});

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_apollo_client__WEBPACK_IMPORTED_MODULE_7__["ApolloProvider"], {
    client: apollo,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

_c = MyApp;

MyApp.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(C_Users_PC_antistore_antistore_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_PC_antistore_antistore_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var Component, ctx, pageProps;
    return C_Users_PC_antistore_antistore_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Component = _ref2.Component, ctx = _ref2.ctx;
            pageProps = {};

            if (!Component.getInitialProps) {
              _context.next = 6;
              break;
            }

            _context.next = 5;
            return Component.getInitialProps(ctx);

          case 5:
            pageProps = _context.sent;

          case 6:
            pageProps.query = ctx.query;
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_lib_withData__WEBPACK_IMPORTED_MODULE_8__["default"])(MyApp));

var _c, _c2;

$RefreshReg$(_c, "MyApp");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29uZmlnLmpzIiwid2VicGFjazovL19OX0UvLi9saWIvd2l0aERhdGEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9yZWFjdC9zc3IvUmVuZGVyUHJvbWlzZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9yZWFjdC9zc3IvZ2V0RGF0YUZyb21UcmVlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvcmVhY3Qvc3NyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvcmVhY3Qvc3NyL3JlbmRlclRvU3RyaW5nV2l0aERhdGEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2xpbmstZXJyb3IvbGliL2J1bmRsZS5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hcG9sbG8tdXBsb2FkLWNsaWVudC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXBvbGxvLXVwbG9hZC1jbGllbnQvcHVibGljL1JlYWN0TmF0aXZlRmlsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Fwb2xsby11cGxvYWQtY2xpZW50L3B1YmxpYy9jcmVhdGVVcGxvYWRMaW5rLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXBvbGxvLXVwbG9hZC1jbGllbnQvcHVibGljL2Zvcm1EYXRhQXBwZW5kRmlsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Fwb2xsby11cGxvYWQtY2xpZW50L3B1YmxpYy9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9hcG9sbG8tdXBsb2FkLWNsaWVudC9wdWJsaWMvaXNFeHRyYWN0YWJsZUZpbGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9leHRyYWN0LWZpbGVzL3B1YmxpYy9SZWFjdE5hdGl2ZUZpbGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9leHRyYWN0LWZpbGVzL3B1YmxpYy9leHRyYWN0RmlsZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9leHRyYWN0LWZpbGVzL3B1YmxpYy9pc0V4dHJhY3RhYmxlRmlsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQtd2l0aC1hcG9sbG8vbGliL2Fwb2xsby5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQtd2l0aC1hcG9sbG8vbGliL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC13aXRoLWFwb2xsby9saWIvd2l0aEFwb2xsby5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC9wb2x5ZmlsbHMvZmV0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vY2pzL3JlYWN0LWRvbS1zZXJ2ZXIuYnJvd3Nlci5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9zZXJ2ZXIuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJlbmRwb2ludCIsInByb2RFbmRwb2ludCIsInBlclBhZ2UiLCJjcmVhdGVDbGllbnQiLCJoZWFkZXJzIiwiaW5pdGlhbFN0YXRlIiwiQXBvbGxvQ2xpZW50IiwibGluayIsIkFwb2xsb0xpbmsiLCJmcm9tIiwib25FcnJvciIsImdyYXBoUUxFcnJvcnMiLCJuZXR3b3JrRXJyb3IiLCJmb3JFYWNoIiwibWVzc2FnZSIsImxvY2F0aW9ucyIsInBhdGgiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlVXBsb2FkTGluayIsInVyaSIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwidHlwZVBvbGljaWVzIiwiUXVlcnkiLCJmaWVsZHMiLCJyZXN0b3JlIiwid2l0aEFwb2xsbyIsImdldERhdGFGcm9tVHJlZSIsIlJvdXRlciIsImV2ZW50cyIsIm9uIiwiTlByb2dyZXNzIiwic3RhcnQiLCJkb25lIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhcG9sbG8iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJxdWVyeSIsIndpdGhEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPLElBQU1BLFFBQVEsc0NBQWQ7QUFDQSxJQUFNQyxZQUFZLDhCQUFsQjtBQUNBLElBQU1DLE9BQU8sR0FBRyxDQUFoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyxZQUFULE9BQWlEO0FBQUEsTUFBekJDLE9BQXlCLFFBQXpCQSxPQUF5QjtBQUFBLE1BQWhCQyxZQUFnQixRQUFoQkEsWUFBZ0I7QUFDL0MsU0FBTyxJQUFJQywyREFBSixDQUFpQjtBQUN0QkMsUUFBSSxFQUFFQyx5REFBVSxDQUFDQyxJQUFYLENBQWdCLENBQ3BCQyxrRUFBTyxDQUFDLGlCQUFxQztBQUFBLFVBQWxDQyxhQUFrQyxTQUFsQ0EsYUFBa0M7QUFBQSxVQUFuQkMsWUFBbUIsU0FBbkJBLFlBQW1CO0FBQzNDLFVBQUlELGFBQUosRUFDRUEsYUFBYSxDQUFDRSxPQUFkLENBQXNCO0FBQUEsWUFBR0MsT0FBSCxTQUFHQSxPQUFIO0FBQUEsWUFBWUMsU0FBWixTQUFZQSxTQUFaO0FBQUEsWUFBdUJDLElBQXZCLFNBQXVCQSxJQUF2QjtBQUFBLGVBQ3BCQyxPQUFPLENBQUNDLEdBQVIscUNBQytCSixPQUQvQix5QkFDcURDLFNBRHJELHFCQUN5RUMsSUFEekUsRUFEb0I7QUFBQSxPQUF0QjtBQUtGLFVBQUlKLFlBQUosRUFDRUssT0FBTyxDQUFDQyxHQUFSLDRCQUNzQk4sWUFEdEI7QUFHSCxLQVhNLENBRGEsRUFhcEJPLDZFQUFnQixDQUFDO0FBQ2ZDLFNBQUcsRUFBRSxPQUF5Q3BCLGdEQUF6QyxHQUFvREMsU0FEMUM7QUFFZm9CLGtCQUFZLEVBQUU7QUFDWkMsbUJBQVcsRUFBRTtBQURELE9BRkM7QUFLZmxCLGFBQU8sRUFBUEE7QUFMZSxLQUFELENBYkksQ0FBaEIsQ0FEZ0I7QUFzQnRCbUIsU0FBSyxFQUFFLElBQUlDLDREQUFKLENBQWtCO0FBQ3ZCQyxrQkFBWSxFQUFFO0FBQ1pDLGFBQUssRUFBRTtBQUNMQyxnQkFBTSxFQUFFLENBQ047QUFDQTtBQUZNO0FBREg7QUFESztBQURTLEtBQWxCLEVBU0pDLE9BVEksQ0FTSXZCLFlBQVksSUFBSSxFQVRwQjtBQXRCZSxHQUFqQixDQUFQO0FBaUNEOztBQUVjd0Isc0hBQVUsQ0FBQzFCLFlBQUQsRUFBZTtBQUFFMkIsaUJBQWUsRUFBZkEsd0VBQWVBO0FBQWpCLENBQWYsQ0FBekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ3lCO0FBQzFCLDBDOzs7Ozs7Ozs7Ozs7QUN2REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpQztBQUNQO0FBQzZCO0FBQ0Y7QUFDOUM7QUFDUCw2QkFBNkIsY0FBYztBQUMzQztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQU8sQ0FBQyxvRUFBa0I7QUFDbEQsS0FBSztBQUNMO0FBQ087QUFDUCxxRUFBcUUsZ0VBQWdFLG1CQUFPLENBQUMsb0VBQWtCO0FBQy9KLDZCQUE2QixpRUFBYztBQUMzQztBQUNBLDRCQUE0QiwwRUFBZ0I7QUFDNUM7QUFDQSwwQkFBMEIsNENBQUssd0NBQXdDLFFBQVEsc0RBQVEsQ0FBQyxzREFBUSxHQUFHLGFBQWEsaUNBQWlDLEdBQUc7QUFDcEo7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDJDOzs7Ozs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBFO0FBQ0w7QUFDaEI7QUFDckQsaUM7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUF5RDtBQUNsRDtBQUNQLFdBQVcsNkVBQWlCO0FBQzVCO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsb0VBQWtCO0FBQ2xELEtBQUs7QUFDTDtBQUNBLGtEOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtDO0FBQzJCOztBQUU3RDtBQUNBLGVBQWUsOERBQVU7QUFDekIsbUJBQW1CLDhEQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSw4QkFBOEIsMERBQTBEO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJLHVEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDQUFDLDhEQUFVOztBQUVrQjtBQUM5Qjs7Ozs7Ozs7Ozs7O0FDbkZBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEI7Ozs7Ozs7Ozs7OztBQ2xCYTs7QUFFYixpQkFBaUIsbUJBQU8sQ0FBQyxvR0FBc0M7Ozs7Ozs7Ozs7Ozs7QUNGbEQ7O0FBRWIsZUFBZSxtQkFBTyxDQUFDLDBIQUFnQzs7QUFFdkQsZUFBZSxtQkFBTyxDQUFDLHdFQUFxQjtBQUM1QztBQUNBOztBQUVBLGdCQUFnQixtQkFBTyxDQUFDLGtGQUEwQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsbUJBQU8sQ0FBQyw4RkFBbUM7O0FBRTlELHlCQUF5QixtQkFBTyxDQUFDLDhGQUFzQjs7QUFFdkQsd0JBQXdCLG1CQUFPLENBQUMsNEZBQXFCOztBQUVyRDtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDNUthOztBQUViO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRTtBQUNJO0FBQ0Y7QUFDSjs7Ozs7Ozs7Ozs7OztBQ0hyRDs7QUFFYixpQkFBaUIsbUJBQU8sQ0FBQyx3R0FBd0M7Ozs7Ozs7Ozs7Ozs7QUNGcEQ7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RhOztBQUViLCtCQUErQixtQkFBTyxDQUFDLHFGQUFxQjs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckRhOztBQUViLHNCQUFzQixtQkFBTyxDQUFDLGlGQUFtQjs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNWYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsbUJBQU8sQ0FBQyxtRkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hCYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsbUNBQW1DLG1CQUFPLENBQUMsdUVBQWM7QUFDekQ7QUFDQSxlQUFlLG1CQUFPLENBQUMsK0RBQVU7QUFDakM7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RhO0FBQ2I7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrREFBK0QsZ0JBQWdCLEVBQUUsRUFBRTtBQUM5RztBQUNBLG1DQUFtQyxNQUFNLDZCQUE2QixFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ2pHLGtDQUFrQyxNQUFNLGlDQUFpQyxFQUFFLFlBQVksV0FBVyxFQUFFO0FBQ3BHLCtCQUErQixxRkFBcUY7QUFDcEg7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxjQUFjO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELDZCQUE2QixtQkFBTyxDQUFDLG1FQUFXO0FBQ2hELDhCQUE4QixtQkFBTyxDQUFDLDRDQUFPO0FBQzdDLCtCQUErQixtQkFBTyxDQUFDLCtEQUFVO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDO0FBQ0EscUNBQXFDLGtCQUFrQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxnRkFBZ0Y7QUFDMUg7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFdBQVcsdUJBQXVCO0FBQ2pGLGlCQUFpQjtBQUNqQjtBQUNBLGtFQUFrRSxVQUFVLHVCQUF1QjtBQUNuRztBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsNkJBQTZCO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsZUFBZSwyQ0FBMkM7QUFDbEgsNkVBQTZFO0FBQzdFLG1IQUFtSDtBQUNuSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxJQUFxQztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFzRSxlQUFlO0FBQ3JGLG9EQUFvRDtBQUNwRDtBQUNBLGlCQUFpQjtBQUNqQixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcEthLGtEQUFrRCxxQkFBcUI7QUFDcEYsaUM7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBLFlBQVksbUJBQU8sQ0FBQyw0Q0FBTztBQUMzQixjQUFjLG1CQUFPLENBQUMsZ0ZBQWU7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBLDZDQUE2QztBQUM3Qzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwRkFBMEYsYUFBYTtBQUN2RztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RkFBOEYsZUFBZTtBQUM3RztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUCxpREFBaUQ7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLFNBQVM7QUFDVCx3QkFBd0I7QUFDeEI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHlCQUF5QjtBQUN6QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1Qsa0NBQWtDO0FBQ2xDO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBEQUEwRDs7QUFFMUQ7QUFDQTs7QUFFQTtBQUNBLHdEQUF3RDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxrQkFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7OztBQUdqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUFtRTs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxlQUFlO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtJQUErSTs7QUFFL0k7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWCxvRUFBb0UsNENBQTRDO0FBQ2hIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBLDBCQUEwQjtBQUMxQjtBQUNBOztBQUVBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCOztBQUVBLGdCQUFnQjtBQUNoQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7OztBQUdBLG9CQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLG9CQUFvQjtBQUMvQztBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLEVBQUUsOEJBQThCOztBQUV4RDs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFlBQVksT0FBTztBQUNuQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixZQUFZLE9BQU87QUFDbkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixZQUFZLFFBQVE7QUFDcEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLFlBQVksT0FBTztBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDhCQUE4Qjs7QUFFOUIsdUJBQXVCOztBQUV2Qix5Q0FBeUM7O0FBRXpDLDhCQUE4Qjs7QUFFOUI7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLDRDQUE0QztBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0RUFBNEUsWUFBWTtBQUN4RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkhBQTJILDZCQUE2QjtBQUN4SjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSw0Q0FBNEM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixZQUFZLE9BQU87QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtGQUFrRjtBQUNsRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPLDBDQUEwQzs7O0FBR2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtGQUErRjtBQUMvRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDBDQUEwQzs7O0FBR2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFQUE2RTs7QUFFN0U7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzSkFBc0osaUJBQWlCO0FBQ3ZLLE9BQU87QUFDUCxzSkFBc0osaUJBQWlCLHdEQUF3RCxtQkFBbUIsZ0JBQWdCLDhCQUE4QjtBQUNoUzs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSxvR0FBb0csR0FBRzs7QUFFdkc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0VBQWtFOztBQUVsRSx3Q0FBd0M7O0FBRXhDLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQSxtQkFBbUI7O0FBRW5CLG1DQUFtQyxRQUFRO0FBQzNDLDRCQUE0QjtBQUM1QjtBQUNBOztBQUVBOztBQUVBLGlEQUFpRCxTQUFTO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSwwQ0FBMEMscUJBQXFCO0FBQy9EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QyxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0EsZ0NBQWdDOztBQUVoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QyxZQUFZO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0M7O0FBRWhDOztBQUVBO0FBQ0E7QUFDQSw0SkFBNEosU0FBMkI7QUFDdkw7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDs7QUFFckQ7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFdBQVc7OztBQUdYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDOztBQUU1QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnUEFBZ1AsU0FBMkI7QUFDM1E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYixrQkFBa0IsSUFBTTtBQUN4QjtBQUNBLHVGQUF1RixTQUEyQjtBQUNsSDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOzs7QUFHWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsOENBQThDOztBQUU5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUEsdUJBQXVCLDJCQUEyQjtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLHdCQUF3QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNydklhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELG1CQUFtQixtQkFBTyxDQUFDLDJIQUErQztBQUMxRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLGtEQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUM7QUFBQSxTQUFNQyxnREFBUyxDQUFDQyxLQUFWLEVBQU47QUFBQSxDQUFyQztBQUVBSixrREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXdDO0FBQUEsU0FBTUMsZ0RBQVMsQ0FBQ0UsSUFBVixFQUFOO0FBQUEsQ0FBeEM7QUFFQUwsa0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQztBQUFBLFNBQU1DLGdEQUFTLENBQUNFLElBQVYsRUFBTjtBQUFBLENBQXJDOztBQUVBLFNBQVNDLEtBQVQsT0FBeUM7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQ3ZDLHNCQUNFLHFFQUFDLDZEQUFEO0FBQWdCLFVBQU0sRUFBRUMsTUFBeEI7QUFBQSwyQkFDRSxxRUFBQywwREFBRDtBQUFBLDZCQUNFLHFFQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7S0FSUUYsSzs7QUFVVEEsS0FBSyxDQUFDSSxlQUFOO0FBQUEsMlVBQXdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrQkgscUJBQWxCLFNBQWtCQSxTQUFsQixFQUE2QkksR0FBN0IsU0FBNkJBLEdBQTdCO0FBQ2xCSCxxQkFEa0IsR0FDTixFQURNOztBQUFBLGlCQUVsQkQsU0FBUyxDQUFDRyxlQUZRO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUJBR0ZILFNBQVMsQ0FBQ0csZUFBVixDQUEwQkMsR0FBMUIsQ0FIRTs7QUFBQTtBQUdwQkgscUJBSG9COztBQUFBO0FBS3RCQSxxQkFBUyxDQUFDSSxLQUFWLEdBQWtCRCxHQUFHLENBQUNDLEtBQXRCO0FBTHNCLDZDQU1mO0FBQUVKLHVCQUFTLEVBQVRBO0FBQUYsYUFOZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTZSxxRUFBQUssNkRBQVEsQ0FBQ1AsS0FBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmEyMjI5NzBiNGVlZWY1YzMwOWQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGlzIGNsaWVudCBzaWRlIGNvbmZpZyBvbmx5IC0gZG9uJ3QgcHV0IGFueXRoaW5nIGluIGhlcmUgdGhhdCBzaG91bGRuJ3QgYmUgcHVibGljIVxuZXhwb3J0IGNvbnN0IGVuZHBvaW50ID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ3JhcGhxbGA7XG5leHBvcnQgY29uc3QgcHJvZEVuZHBvaW50ID0gYGZpbGwgbWUgaW4gd2hlbiB3ZSBkZXBsb3lgO1xuZXhwb3J0IGNvbnN0IHBlclBhZ2UgPSA0O1xuIiwiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBBcG9sbG9MaW5rLCBJbk1lbW9yeUNhY2hlIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBvbkVycm9yIH0gZnJvbSBcIkBhcG9sbG8vbGluay1lcnJvclwiO1xuaW1wb3J0IHsgZ2V0RGF0YUZyb21UcmVlIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50L3JlYWN0L3NzclwiO1xuaW1wb3J0IHsgY3JlYXRlVXBsb2FkTGluayB9IGZyb20gXCJhcG9sbG8tdXBsb2FkLWNsaWVudFwiO1xuaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSBcIm5leHQtd2l0aC1hcG9sbG9cIjtcbmltcG9ydCB7IGVuZHBvaW50LCBwcm9kRW5kcG9pbnQgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNsaWVudCh7IGhlYWRlcnMsIGluaXRpYWxTdGF0ZSB9KSB7XG4gIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBsaW5rOiBBcG9sbG9MaW5rLmZyb20oW1xuICAgICAgb25FcnJvcigoeyBncmFwaFFMRXJyb3JzLCBuZXR3b3JrRXJyb3IgfSkgPT4ge1xuICAgICAgICBpZiAoZ3JhcGhRTEVycm9ycylcbiAgICAgICAgICBncmFwaFFMRXJyb3JzLmZvckVhY2goKHsgbWVzc2FnZSwgbG9jYXRpb25zLCBwYXRoIH0pID0+XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgYFtHcmFwaFFMIGVycm9yXTogTWVzc2FnZTogJHttZXNzYWdlfSwgTG9jYXRpb246ICR7bG9jYXRpb25zfSwgUGF0aDogJHtwYXRofWBcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICBpZiAobmV0d29ya0Vycm9yKVxuICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgYFtOZXR3b3JrIGVycm9yXTogJHtuZXR3b3JrRXJyb3J9LiBCYWNrZW5kIGlzIHVucmVhY2hhYmxlLiBJcyBpdCBydW5uaW5nP2BcbiAgICAgICAgICApO1xuICAgICAgfSksXG4gICAgICBjcmVhdGVVcGxvYWRMaW5rKHtcbiAgICAgICAgdXJpOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiID8gZW5kcG9pbnQgOiBwcm9kRW5kcG9pbnQsXG4gICAgICAgIGZldGNoT3B0aW9uczoge1xuICAgICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVycyxcbiAgICAgIH0pLFxuICAgIF0pLFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7XG4gICAgICB0eXBlUG9saWNpZXM6IHtcbiAgICAgICAgUXVlcnk6IHtcbiAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgIC8vIFRPRE86IFdlIHdpbGwgYWRkIHRoaXMgdG9nZXRoZXIhXG4gICAgICAgICAgICAvLyBhbGxQcm9kdWN0czogcGFnaW5hdGlvbkZpZWxkKCksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSkucmVzdG9yZShpbml0aWFsU3RhdGUgfHwge30pLFxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyhjcmVhdGVDbGllbnQsIHsgZ2V0RGF0YUZyb21UcmVlIH0pO1xuIiwiZnVuY3Rpb24gbWFrZURlZmF1bHRRdWVyeUluZm8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VlbjogZmFsc2UsXG4gICAgICAgIG9ic2VydmFibGU6IG51bGxcbiAgICB9O1xufVxudmFyIFJlbmRlclByb21pc2VzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZW5kZXJQcm9taXNlcygpIHtcbiAgICAgICAgdGhpcy5xdWVyeVByb21pc2VzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnF1ZXJ5SW5mb1RyaWUgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIFJlbmRlclByb21pc2VzLnByb3RvdHlwZS5yZWdpc3RlclNTUk9ic2VydmFibGUgPSBmdW5jdGlvbiAob2JzZXJ2YWJsZSwgcHJvcHMpIHtcbiAgICAgICAgdGhpcy5sb29rdXBRdWVyeUluZm8ocHJvcHMpLm9ic2VydmFibGUgPSBvYnNlcnZhYmxlO1xuICAgIH07XG4gICAgUmVuZGVyUHJvbWlzZXMucHJvdG90eXBlLmdldFNTUk9ic2VydmFibGUgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9va3VwUXVlcnlJbmZvKHByb3BzKS5vYnNlcnZhYmxlO1xuICAgIH07XG4gICAgUmVuZGVyUHJvbWlzZXMucHJvdG90eXBlLmFkZFF1ZXJ5UHJvbWlzZSA9IGZ1bmN0aW9uIChxdWVyeUluc3RhbmNlLCBmaW5pc2gpIHtcbiAgICAgICAgdmFyIGluZm8gPSB0aGlzLmxvb2t1cFF1ZXJ5SW5mbyhxdWVyeUluc3RhbmNlLmdldE9wdGlvbnMoKSk7XG4gICAgICAgIGlmICghaW5mby5zZWVuKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5UHJvbWlzZXMuc2V0KHF1ZXJ5SW5zdGFuY2UuZ2V0T3B0aW9ucygpLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocXVlcnlJbnN0YW5jZS5mZXRjaERhdGEoKSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmluaXNoKCk7XG4gICAgfTtcbiAgICBSZW5kZXJQcm9taXNlcy5wcm90b3R5cGUuaGFzUHJvbWlzZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5UHJvbWlzZXMuc2l6ZSA+IDA7XG4gICAgfTtcbiAgICBSZW5kZXJQcm9taXNlcy5wcm90b3R5cGUuY29uc3VtZUFuZEF3YWl0UHJvbWlzZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgICAgICB0aGlzLnF1ZXJ5UHJvbWlzZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvbWlzZSwgcXVlcnlJbnN0YW5jZSkge1xuICAgICAgICAgICAgX3RoaXMubG9va3VwUXVlcnlJbmZvKHF1ZXJ5SW5zdGFuY2UpLnNlZW4gPSB0cnVlO1xuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucXVlcnlQcm9taXNlcy5jbGVhcigpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH07XG4gICAgUmVuZGVyUHJvbWlzZXMucHJvdG90eXBlLmxvb2t1cFF1ZXJ5SW5mbyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICB2YXIgcXVlcnlJbmZvVHJpZSA9IHRoaXMucXVlcnlJbmZvVHJpZTtcbiAgICAgICAgdmFyIHF1ZXJ5ID0gcHJvcHMucXVlcnksIHZhcmlhYmxlcyA9IHByb3BzLnZhcmlhYmxlcztcbiAgICAgICAgdmFyIHZhck1hcCA9IHF1ZXJ5SW5mb1RyaWUuZ2V0KHF1ZXJ5KSB8fCBuZXcgTWFwKCk7XG4gICAgICAgIGlmICghcXVlcnlJbmZvVHJpZS5oYXMocXVlcnkpKVxuICAgICAgICAgICAgcXVlcnlJbmZvVHJpZS5zZXQocXVlcnksIHZhck1hcCk7XG4gICAgICAgIHZhciB2YXJpYWJsZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh2YXJpYWJsZXMpO1xuICAgICAgICB2YXIgaW5mbyA9IHZhck1hcC5nZXQodmFyaWFibGVzU3RyaW5nKSB8fCBtYWtlRGVmYXVsdFF1ZXJ5SW5mbygpO1xuICAgICAgICBpZiAoIXZhck1hcC5oYXModmFyaWFibGVzU3RyaW5nKSlcbiAgICAgICAgICAgIHZhck1hcC5zZXQodmFyaWFibGVzU3RyaW5nLCBpbmZvKTtcbiAgICAgICAgcmV0dXJuIGluZm87XG4gICAgfTtcbiAgICByZXR1cm4gUmVuZGVyUHJvbWlzZXM7XG59KCkpO1xuZXhwb3J0IHsgUmVuZGVyUHJvbWlzZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJlbmRlclByb21pc2VzLmpzLm1hcCIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0QXBvbGxvQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2luZGV4LmpzXCI7XG5pbXBvcnQgeyBSZW5kZXJQcm9taXNlcyB9IGZyb20gXCIuL1JlbmRlclByb21pc2VzLmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YUZyb21UcmVlKHRyZWUsIGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7IGNvbnRleHQgPSB7fTsgfVxuICAgIHJldHVybiBnZXRNYXJrdXBGcm9tVHJlZSh7XG4gICAgICAgIHRyZWU6IHRyZWUsXG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgIHJlbmRlckZ1bmN0aW9uOiByZXF1aXJlKCdyZWFjdC1kb20vc2VydmVyJykucmVuZGVyVG9TdGF0aWNNYXJrdXBcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXJrdXBGcm9tVHJlZShfYSkge1xuICAgIHZhciB0cmVlID0gX2EudHJlZSwgX2IgPSBfYS5jb250ZXh0LCBjb250ZXh0ID0gX2IgPT09IHZvaWQgMCA/IHt9IDogX2IsIF9jID0gX2EucmVuZGVyRnVuY3Rpb24sIHJlbmRlckZ1bmN0aW9uID0gX2MgPT09IHZvaWQgMCA/IHJlcXVpcmUoJ3JlYWN0LWRvbS9zZXJ2ZXInKS5yZW5kZXJUb1N0YXRpY01hcmt1cCA6IF9jO1xuICAgIHZhciByZW5kZXJQcm9taXNlcyA9IG5ldyBSZW5kZXJQcm9taXNlcygpO1xuICAgIGZ1bmN0aW9uIHByb2Nlc3MoKSB7XG4gICAgICAgIHZhciBBcG9sbG9Db250ZXh0ID0gZ2V0QXBvbGxvQ29udGV4dCgpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChBcG9sbG9Db250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY29udGV4dCksIHsgcmVuZGVyUHJvbWlzZXM6IHJlbmRlclByb21pc2VzIH0pIH0sIHRyZWUpO1xuICAgICAgICAgICAgcmVzb2x2ZShyZW5kZXJGdW5jdGlvbihlbGVtZW50KSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgICAgIHJldHVybiByZW5kZXJQcm9taXNlcy5oYXNQcm9taXNlcygpXG4gICAgICAgICAgICAgICAgPyByZW5kZXJQcm9taXNlcy5jb25zdW1lQW5kQXdhaXRQcm9taXNlcygpLnRoZW4ocHJvY2VzcylcbiAgICAgICAgICAgICAgICA6IGh0bWw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihwcm9jZXNzKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdldERhdGFGcm9tVHJlZS5qcy5tYXAiLCJleHBvcnQgeyBnZXRNYXJrdXBGcm9tVHJlZSwgZ2V0RGF0YUZyb21UcmVlIH0gZnJvbSBcIi4vZ2V0RGF0YUZyb21UcmVlLmpzXCI7XG5leHBvcnQgeyByZW5kZXJUb1N0cmluZ1dpdGhEYXRhIH0gZnJvbSBcIi4vcmVuZGVyVG9TdHJpbmdXaXRoRGF0YS5qc1wiO1xuZXhwb3J0IHsgUmVuZGVyUHJvbWlzZXMgfSBmcm9tIFwiLi9SZW5kZXJQcm9taXNlcy5qc1wiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgZ2V0TWFya3VwRnJvbVRyZWUgfSBmcm9tIFwiLi9nZXREYXRhRnJvbVRyZWUuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb1N0cmluZ1dpdGhEYXRhKGNvbXBvbmVudCkge1xuICAgIHJldHVybiBnZXRNYXJrdXBGcm9tVHJlZSh7XG4gICAgICAgIHRyZWU6IGNvbXBvbmVudCxcbiAgICAgICAgcmVuZGVyRnVuY3Rpb246IHJlcXVpcmUoJ3JlYWN0LWRvbS9zZXJ2ZXInKS5yZW5kZXJUb1N0cmluZ1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVuZGVyVG9TdHJpbmdXaXRoRGF0YS5qcy5tYXAiLCJpbXBvcnQgeyBfX2V4dGVuZHMgfSBmcm9tICd0c2xpYic7XG5pbXBvcnQgeyBBcG9sbG9MaW5rLCBPYnNlcnZhYmxlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQvY29yZSc7XG5cbmZ1bmN0aW9uIG9uRXJyb3IoZXJyb3JIYW5kbGVyKSB7XG4gICAgcmV0dXJuIG5ldyBBcG9sbG9MaW5rKGZ1bmN0aW9uIChvcGVyYXRpb24sIGZvcndhcmQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgICAgICAgdmFyIHN1YjtcbiAgICAgICAgICAgIHZhciByZXRyaWVkU3ViO1xuICAgICAgICAgICAgdmFyIHJldHJpZWRSZXN1bHQ7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHN1YiA9IGZvcndhcmQob3BlcmF0aW9uKS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgICAgICBuZXh0OiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVycm9ycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHJpZWRSZXN1bHQgPSBlcnJvckhhbmRsZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFwaFFMRXJyb3JzOiByZXN1bHQuZXJyb3JzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZTogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb246IG9wZXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yd2FyZDogZm9yd2FyZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmV0cmllZFJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRyaWVkU3ViID0gcmV0cmllZFJlc3VsdC5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBvYnNlcnZlci5lcnJvci5iaW5kKG9ic2VydmVyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBvYnNlcnZlci5jb21wbGV0ZS5iaW5kKG9ic2VydmVyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAobmV0d29ya0Vycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXRyaWVkUmVzdWx0ID0gZXJyb3JIYW5kbGVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRpb246IG9wZXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrRXJyb3I6IG5ldHdvcmtFcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFwaFFMRXJyb3JzOiBuZXR3b3JrRXJyb3IgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV0d29ya0Vycm9yLnJlc3VsdCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3J3YXJkOiBmb3J3YXJkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmV0cmllZFJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHJpZWRTdWIgPSByZXRyaWVkUmVzdWx0LnN1YnNjcmliZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQ6IG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBvYnNlcnZlci5lcnJvci5iaW5kKG9ic2VydmVyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IG9ic2VydmVyLmNvbXBsZXRlLmJpbmQob2JzZXJ2ZXIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKG5ldHdvcmtFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJldHJpZWRSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZS5iaW5kKG9ic2VydmVyKSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXIoeyBuZXR3b3JrRXJyb3I6IGUsIG9wZXJhdGlvbjogb3BlcmF0aW9uLCBmb3J3YXJkOiBmb3J3YXJkIH0pO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3ViKVxuICAgICAgICAgICAgICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICBpZiAocmV0cmllZFN1YilcbiAgICAgICAgICAgICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbnZhciBFcnJvckxpbmsgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhFcnJvckxpbmssIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRXJyb3JMaW5rKGVycm9ySGFuZGxlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5saW5rID0gb25FcnJvcihlcnJvckhhbmRsZXIpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIEVycm9yTGluay5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIChvcGVyYXRpb24sIGZvcndhcmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGluay5yZXF1ZXN0KG9wZXJhdGlvbiwgZm9yd2FyZCk7XG4gICAgfTtcbiAgICByZXR1cm4gRXJyb3JMaW5rO1xufShBcG9sbG9MaW5rKSk7XG5cbmV4cG9ydCB7IEVycm9yTGluaywgb25FcnJvciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnVuZGxlLmVzbS5qcy5tYXBcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnZXh0cmFjdC1maWxlcy9wdWJsaWMvUmVhY3ROYXRpdmVGaWxlJyk7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCdAYXBvbGxvL2NsaWVudC9jb3JlJyksXG4gIEFwb2xsb0xpbmsgPSBfcmVxdWlyZS5BcG9sbG9MaW5rLFxuICBPYnNlcnZhYmxlID0gX3JlcXVpcmUuT2JzZXJ2YWJsZTtcblxudmFyIF9yZXF1aXJlMiA9IHJlcXVpcmUoJ0BhcG9sbG8vY2xpZW50L2xpbmsvaHR0cCcpLFxuICBjcmVhdGVTaWduYWxJZlN1cHBvcnRlZCA9IF9yZXF1aXJlMi5jcmVhdGVTaWduYWxJZlN1cHBvcnRlZCxcbiAgZmFsbGJhY2tIdHRwQ29uZmlnID0gX3JlcXVpcmUyLmZhbGxiYWNrSHR0cENvbmZpZyxcbiAgcGFyc2VBbmRDaGVja0h0dHBSZXNwb25zZSA9IF9yZXF1aXJlMi5wYXJzZUFuZENoZWNrSHR0cFJlc3BvbnNlLFxuICByZXdyaXRlVVJJRm9yR0VUID0gX3JlcXVpcmUyLnJld3JpdGVVUklGb3JHRVQsXG4gIHNlbGVjdEh0dHBPcHRpb25zQW5kQm9keSA9IF9yZXF1aXJlMi5zZWxlY3RIdHRwT3B0aW9uc0FuZEJvZHksXG4gIHNlbGVjdFVSSSA9IF9yZXF1aXJlMi5zZWxlY3RVUkksXG4gIHNlcmlhbGl6ZUZldGNoUGFyYW1ldGVyID0gX3JlcXVpcmUyLnNlcmlhbGl6ZUZldGNoUGFyYW1ldGVyO1xuXG52YXIgZXh0cmFjdEZpbGVzID0gcmVxdWlyZSgnZXh0cmFjdC1maWxlcy9wdWJsaWMvZXh0cmFjdEZpbGVzJyk7XG5cbnZhciBmb3JtRGF0YUFwcGVuZEZpbGUgPSByZXF1aXJlKCcuL2Zvcm1EYXRhQXBwZW5kRmlsZScpO1xuXG52YXIgaXNFeHRyYWN0YWJsZUZpbGUgPSByZXF1aXJlKCcuL2lzRXh0cmFjdGFibGVGaWxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlVXBsb2FkTGluayhfdGVtcCkge1xuICB2YXIgX3JlZiA9IF90ZW1wID09PSB2b2lkIDAgPyB7fSA6IF90ZW1wLFxuICAgIF9yZWYkdXJpID0gX3JlZi51cmksXG4gICAgZmV0Y2hVcmkgPSBfcmVmJHVyaSA9PT0gdm9pZCAwID8gJy9ncmFwaHFsJyA6IF9yZWYkdXJpLFxuICAgIHVzZUdFVEZvclF1ZXJpZXMgPSBfcmVmLnVzZUdFVEZvclF1ZXJpZXMsXG4gICAgX3JlZiRpc0V4dHJhY3RhYmxlRmlsID0gX3JlZi5pc0V4dHJhY3RhYmxlRmlsZSxcbiAgICBjdXN0b21Jc0V4dHJhY3RhYmxlRmlsZSA9XG4gICAgICBfcmVmJGlzRXh0cmFjdGFibGVGaWwgPT09IHZvaWQgMFxuICAgICAgICA/IGlzRXh0cmFjdGFibGVGaWxlXG4gICAgICAgIDogX3JlZiRpc0V4dHJhY3RhYmxlRmlsLFxuICAgIEN1c3RvbUZvcm1EYXRhID0gX3JlZi5Gb3JtRGF0YSxcbiAgICBfcmVmJGZvcm1EYXRhQXBwZW5kRmkgPSBfcmVmLmZvcm1EYXRhQXBwZW5kRmlsZSxcbiAgICBjdXN0b21Gb3JtRGF0YUFwcGVuZEZpbGUgPVxuICAgICAgX3JlZiRmb3JtRGF0YUFwcGVuZEZpID09PSB2b2lkIDBcbiAgICAgICAgPyBmb3JtRGF0YUFwcGVuZEZpbGVcbiAgICAgICAgOiBfcmVmJGZvcm1EYXRhQXBwZW5kRmksXG4gICAgY3VzdG9tRmV0Y2ggPSBfcmVmLmZldGNoLFxuICAgIGZldGNoT3B0aW9ucyA9IF9yZWYuZmV0Y2hPcHRpb25zLFxuICAgIGNyZWRlbnRpYWxzID0gX3JlZi5jcmVkZW50aWFscyxcbiAgICBoZWFkZXJzID0gX3JlZi5oZWFkZXJzLFxuICAgIGluY2x1ZGVFeHRlbnNpb25zID0gX3JlZi5pbmNsdWRlRXh0ZW5zaW9ucztcblxuICB2YXIgbGlua0NvbmZpZyA9IHtcbiAgICBodHRwOiB7XG4gICAgICBpbmNsdWRlRXh0ZW5zaW9uczogaW5jbHVkZUV4dGVuc2lvbnMsXG4gICAgfSxcbiAgICBvcHRpb25zOiBmZXRjaE9wdGlvbnMsXG4gICAgY3JlZGVudGlhbHM6IGNyZWRlbnRpYWxzLFxuICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gIH07XG4gIHJldHVybiBuZXcgQXBvbGxvTGluayhmdW5jdGlvbiAob3BlcmF0aW9uKSB7XG4gICAgdmFyIGNvbnRleHQgPSBvcGVyYXRpb24uZ2V0Q29udGV4dCgpO1xuICAgIHZhciBfY29udGV4dCRjbGllbnRBd2FyZW4gPSBjb250ZXh0LmNsaWVudEF3YXJlbmVzcztcbiAgICBfY29udGV4dCRjbGllbnRBd2FyZW4gPVxuICAgICAgX2NvbnRleHQkY2xpZW50QXdhcmVuID09PSB2b2lkIDAgPyB7fSA6IF9jb250ZXh0JGNsaWVudEF3YXJlbjtcbiAgICB2YXIgbmFtZSA9IF9jb250ZXh0JGNsaWVudEF3YXJlbi5uYW1lLFxuICAgICAgdmVyc2lvbiA9IF9jb250ZXh0JGNsaWVudEF3YXJlbi52ZXJzaW9uLFxuICAgICAgaGVhZGVycyA9IGNvbnRleHQuaGVhZGVycztcbiAgICB2YXIgY29udGV4dENvbmZpZyA9IHtcbiAgICAgIGh0dHA6IGNvbnRleHQuaHR0cCxcbiAgICAgIG9wdGlvbnM6IGNvbnRleHQuZmV0Y2hPcHRpb25zLFxuICAgICAgY3JlZGVudGlhbHM6IGNvbnRleHQuY3JlZGVudGlhbHMsXG4gICAgICBoZWFkZXJzOiBfZXh0ZW5kcyhcbiAgICAgICAge30sXG4gICAgICAgIG5hbWUgJiYge1xuICAgICAgICAgICdhcG9sbG9ncmFwaHFsLWNsaWVudC1uYW1lJzogbmFtZSxcbiAgICAgICAgfSxcbiAgICAgICAgdmVyc2lvbiAmJiB7XG4gICAgICAgICAgJ2Fwb2xsb2dyYXBocWwtY2xpZW50LXZlcnNpb24nOiB2ZXJzaW9uLFxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXJzXG4gICAgICApLFxuICAgIH07XG5cbiAgICB2YXIgX3NlbGVjdEh0dHBPcHRpb25zQW5kID0gc2VsZWN0SHR0cE9wdGlvbnNBbmRCb2R5KFxuICAgICAgICBvcGVyYXRpb24sXG4gICAgICAgIGZhbGxiYWNrSHR0cENvbmZpZyxcbiAgICAgICAgbGlua0NvbmZpZyxcbiAgICAgICAgY29udGV4dENvbmZpZ1xuICAgICAgKSxcbiAgICAgIG9wdGlvbnMgPSBfc2VsZWN0SHR0cE9wdGlvbnNBbmQub3B0aW9ucyxcbiAgICAgIGJvZHkgPSBfc2VsZWN0SHR0cE9wdGlvbnNBbmQuYm9keTtcblxuICAgIHZhciBfZXh0cmFjdEZpbGVzID0gZXh0cmFjdEZpbGVzKGJvZHksICcnLCBjdXN0b21Jc0V4dHJhY3RhYmxlRmlsZSksXG4gICAgICBjbG9uZSA9IF9leHRyYWN0RmlsZXMuY2xvbmUsXG4gICAgICBmaWxlcyA9IF9leHRyYWN0RmlsZXMuZmlsZXM7XG5cbiAgICB2YXIgdXJpID0gc2VsZWN0VVJJKG9wZXJhdGlvbiwgZmV0Y2hVcmkpO1xuXG4gICAgaWYgKGZpbGVzLnNpemUpIHtcbiAgICAgIGRlbGV0ZSBvcHRpb25zLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddO1xuICAgICAgdmFyIFJ1bnRpbWVGb3JtRGF0YSA9IEN1c3RvbUZvcm1EYXRhIHx8IEZvcm1EYXRhO1xuICAgICAgdmFyIGZvcm0gPSBuZXcgUnVudGltZUZvcm1EYXRhKCk7XG4gICAgICBmb3JtLmFwcGVuZCgnb3BlcmF0aW9ucycsIHNlcmlhbGl6ZUZldGNoUGFyYW1ldGVyKGNsb25lLCAnUGF5bG9hZCcpKTtcbiAgICAgIHZhciBtYXAgPSB7fTtcbiAgICAgIHZhciBpID0gMDtcbiAgICAgIGZpbGVzLmZvckVhY2goZnVuY3Rpb24gKHBhdGhzKSB7XG4gICAgICAgIG1hcFsrK2ldID0gcGF0aHM7XG4gICAgICB9KTtcbiAgICAgIGZvcm0uYXBwZW5kKCdtYXAnLCBKU09OLnN0cmluZ2lmeShtYXApKTtcbiAgICAgIGkgPSAwO1xuICAgICAgZmlsZXMuZm9yRWFjaChmdW5jdGlvbiAocGF0aHMsIGZpbGUpIHtcbiAgICAgICAgY3VzdG9tRm9ybURhdGFBcHBlbmRGaWxlKGZvcm0sICsraSwgZmlsZSk7XG4gICAgICB9KTtcbiAgICAgIG9wdGlvbnMuYm9keSA9IGZvcm07XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChcbiAgICAgICAgdXNlR0VURm9yUXVlcmllcyAmJlxuICAgICAgICAhb3BlcmF0aW9uLnF1ZXJ5LmRlZmluaXRpb25zLnNvbWUoZnVuY3Rpb24gKGRlZmluaXRpb24pIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgZGVmaW5pdGlvbi5raW5kID09PSAnT3BlcmF0aW9uRGVmaW5pdGlvbicgJiZcbiAgICAgICAgICAgIGRlZmluaXRpb24ub3BlcmF0aW9uID09PSAnbXV0YXRpb24nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgICAgb3B0aW9ucy5tZXRob2QgPSAnR0VUJztcblxuICAgICAgaWYgKG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICB2YXIgX3Jld3JpdGVVUklGb3JHRVQgPSByZXdyaXRlVVJJRm9yR0VUKHVyaSwgYm9keSksXG4gICAgICAgICAgbmV3VVJJID0gX3Jld3JpdGVVUklGb3JHRVQubmV3VVJJLFxuICAgICAgICAgIHBhcnNlRXJyb3IgPSBfcmV3cml0ZVVSSUZvckdFVC5wYXJzZUVycm9yO1xuXG4gICAgICAgIGlmIChwYXJzZUVycm9yKVxuICAgICAgICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKHBhcnNlRXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB1cmkgPSBuZXdVUkk7XG4gICAgICB9IGVsc2Ugb3B0aW9ucy5ib2R5ID0gc2VyaWFsaXplRmV0Y2hQYXJhbWV0ZXIoY2xvbmUsICdQYXlsb2FkJyk7XG4gICAgfVxuXG4gICAgdmFyIF9jcmVhdGVTaWduYWxJZlN1cHBvciA9IGNyZWF0ZVNpZ25hbElmU3VwcG9ydGVkKCksXG4gICAgICBjb250cm9sbGVyID0gX2NyZWF0ZVNpZ25hbElmU3VwcG9yLmNvbnRyb2xsZXI7XG5cbiAgICBpZiAoY29udHJvbGxlcikge1xuICAgICAgaWYgKG9wdGlvbnMuc2lnbmFsKVxuICAgICAgICBvcHRpb25zLnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgICAgIH0pO1xuICAgICAgb3B0aW9ucy5zaWduYWwgPSBjb250cm9sbGVyLnNpZ25hbDtcbiAgICB9XG5cbiAgICB2YXIgcnVudGltZUZldGNoID0gY3VzdG9tRmV0Y2ggfHwgZmV0Y2g7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgdmFyIGNsZWFuaW5nVXA7XG4gICAgICBydW50aW1lRmV0Y2godXJpLCBvcHRpb25zKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICBvcGVyYXRpb24uc2V0Q29udGV4dCh7XG4gICAgICAgICAgICByZXNwb25zZTogcmVzcG9uc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihwYXJzZUFuZENoZWNrSHR0cFJlc3BvbnNlKG9wZXJhdGlvbikpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdCk7XG4gICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIGlmICghY2xlYW5pbmdVcCkge1xuICAgICAgICAgICAgaWYgKGVycm9yLnJlc3VsdCAmJiBlcnJvci5yZXN1bHQuZXJyb3JzICYmIGVycm9yLnJlc3VsdC5kYXRhKVxuICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGVycm9yLnJlc3VsdCk7XG4gICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFuaW5nVXAgPSB0cnVlO1xuICAgICAgICBpZiAoY29udHJvbGxlcikgY29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZvcm1EYXRhQXBwZW5kRmlsZShmb3JtRGF0YSwgZmllbGROYW1lLCBmaWxlKSB7XG4gIGZvcm1EYXRhLmFwcGVuZChmaWVsZE5hbWUsIGZpbGUsIGZpbGUubmFtZSk7XG59O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVVcGxvYWRMaW5rIH0gZnJvbSAnLi9jcmVhdGVVcGxvYWRMaW5rLmpzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZm9ybURhdGFBcHBlbmRGaWxlIH0gZnJvbSAnLi9mb3JtRGF0YUFwcGVuZEZpbGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0V4dHJhY3RhYmxlRmlsZSB9IGZyb20gJy4vaXNFeHRyYWN0YWJsZUZpbGUuanMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFjdE5hdGl2ZUZpbGUgfSBmcm9tICcuL1JlYWN0TmF0aXZlRmlsZS5qcyc7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnZXh0cmFjdC1maWxlcy9wdWJsaWMvaXNFeHRyYWN0YWJsZUZpbGUnKTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBSZWFjdE5hdGl2ZUZpbGUoX3JlZikge1xuICB2YXIgdXJpID0gX3JlZi51cmksXG4gICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICB0eXBlID0gX3JlZi50eXBlO1xuICB0aGlzLnVyaSA9IHVyaTtcbiAgdGhpcy5uYW1lID0gbmFtZTtcbiAgdGhpcy50eXBlID0gdHlwZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZhdWx0SXNFeHRyYWN0YWJsZUZpbGUgPSByZXF1aXJlKCcuL2lzRXh0cmFjdGFibGVGaWxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXh0cmFjdEZpbGVzKHZhbHVlLCBwYXRoLCBpc0V4dHJhY3RhYmxlRmlsZSkge1xuICBpZiAocGF0aCA9PT0gdm9pZCAwKSB7XG4gICAgcGF0aCA9ICcnO1xuICB9XG5cbiAgaWYgKGlzRXh0cmFjdGFibGVGaWxlID09PSB2b2lkIDApIHtcbiAgICBpc0V4dHJhY3RhYmxlRmlsZSA9IGRlZmF1bHRJc0V4dHJhY3RhYmxlRmlsZTtcbiAgfVxuXG4gIHZhciBjbG9uZTtcbiAgdmFyIGZpbGVzID0gbmV3IE1hcCgpO1xuXG4gIGZ1bmN0aW9uIGFkZEZpbGUocGF0aHMsIGZpbGUpIHtcbiAgICB2YXIgc3RvcmVkUGF0aHMgPSBmaWxlcy5nZXQoZmlsZSk7XG4gICAgaWYgKHN0b3JlZFBhdGhzKSBzdG9yZWRQYXRocy5wdXNoLmFwcGx5KHN0b3JlZFBhdGhzLCBwYXRocyk7XG4gICAgZWxzZSBmaWxlcy5zZXQoZmlsZSwgcGF0aHMpO1xuICB9XG5cbiAgaWYgKGlzRXh0cmFjdGFibGVGaWxlKHZhbHVlKSkge1xuICAgIGNsb25lID0gbnVsbDtcbiAgICBhZGRGaWxlKFtwYXRoXSwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwcmVmaXggPSBwYXRoID8gcGF0aCArICcuJyA6ICcnO1xuICAgIGlmICh0eXBlb2YgRmlsZUxpc3QgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgRmlsZUxpc3QpXG4gICAgICBjbG9uZSA9IEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbCh2YWx1ZSwgZnVuY3Rpb24gKGZpbGUsIGkpIHtcbiAgICAgICAgYWRkRmlsZShbJycgKyBwcmVmaXggKyBpXSwgZmlsZSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSk7XG4gICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpXG4gICAgICBjbG9uZSA9IHZhbHVlLm1hcChmdW5jdGlvbiAoY2hpbGQsIGkpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGV4dHJhY3RGaWxlcyhjaGlsZCwgJycgKyBwcmVmaXggKyBpLCBpc0V4dHJhY3RhYmxlRmlsZSk7XG4gICAgICAgIHJlc3VsdC5maWxlcy5mb3JFYWNoKGFkZEZpbGUpO1xuICAgICAgICByZXR1cm4gcmVzdWx0LmNsb25lO1xuICAgICAgfSk7XG4gICAgZWxzZSBpZiAodmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgY2xvbmUgPSB7fTtcblxuICAgICAgZm9yICh2YXIgaSBpbiB2YWx1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gZXh0cmFjdEZpbGVzKHZhbHVlW2ldLCAnJyArIHByZWZpeCArIGksIGlzRXh0cmFjdGFibGVGaWxlKTtcbiAgICAgICAgcmVzdWx0LmZpbGVzLmZvckVhY2goYWRkRmlsZSk7XG4gICAgICAgIGNsb25lW2ldID0gcmVzdWx0LmNsb25lO1xuICAgICAgfVxuICAgIH0gZWxzZSBjbG9uZSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBjbG9uZTogY2xvbmUsXG4gICAgZmlsZXM6IGZpbGVzLFxuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0TmF0aXZlRmlsZSA9IHJlcXVpcmUoJy4vUmVhY3ROYXRpdmVGaWxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNFeHRyYWN0YWJsZUZpbGUodmFsdWUpIHtcbiAgcmV0dXJuIChcbiAgICAodHlwZW9mIEZpbGUgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgRmlsZSkgfHxcbiAgICAodHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgQmxvYikgfHxcbiAgICB2YWx1ZSBpbnN0YW5jZW9mIFJlYWN0TmF0aXZlRmlsZVxuICApO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gUG9seWZpbGwgZmV0Y2hcbnJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7XG52YXIgX2Fwb2xsb0NsaWVudDtcbmZ1bmN0aW9uIGluaXRBcG9sbG8oY2xpZW50Rm4sIG9wdGlvbnMpIHtcbiAgICBpZiAoIWNsaWVudEZuKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW3dpdGhBcG9sbG9dIHRoZSBmaXJzdCBwYXJhbSBpcyBtaXNzaW5nIGFuZCBpcyByZXF1aXJlZCB0byBnZXQgdGhlIEFwb2xsb0NsaWVudCcpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGdldENsaWVudChjbGllbnRGbiwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGlmICghX2Fwb2xsb0NsaWVudCkge1xuICAgICAgICBfYXBvbGxvQ2xpZW50ID0gZ2V0Q2xpZW50KGNsaWVudEZuLCBvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XG59XG5leHBvcnRzLmRlZmF1bHQgPSBpbml0QXBvbGxvO1xuZnVuY3Rpb24gZ2V0Q2xpZW50KGNsaWVudEZuLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICBpZiAodHlwZW9mIGNsaWVudEZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignW3dpdGhBcG9sbG9dIHJlcXVpcmVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIEFwb2xsb0NsaWVudCcpO1xuICAgIH1cbiAgICByZXR1cm4gY2xpZW50Rm4ob3B0aW9ucyk7XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB3aXRoQXBvbGxvXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vd2l0aEFwb2xsb1wiKSk7XG5leHBvcnRzLndpdGhBcG9sbG8gPSB3aXRoQXBvbGxvXzEuZGVmYXVsdDtcbnZhciBhcG9sbG9fMSA9IHJlcXVpcmUoXCIuL2Fwb2xsb1wiKTtcbmV4cG9ydHMuaW5pdEFwb2xsbyA9IGFwb2xsb18xLmRlZmF1bHQ7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoQXBvbGxvXzEuZGVmYXVsdDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgaGVhZF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJuZXh0L2hlYWRcIikpO1xudmFyIHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBhcG9sbG9fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9hcG9sbG9cIikpO1xuLy8gR2V0cyB0aGUgZGlzcGxheSBuYW1lIG9mIGEgSlNYIGNvbXBvbmVudCBmb3IgZGV2IHRvb2xzXG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbn1cbmZ1bmN0aW9uIHdpdGhBcG9sbG8oY2xpZW50LCBvcHRpb25zKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoUGFnZSwgcGFnZU9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHBhZ2VPcHRpb25zID09PSB2b2lkIDApIHsgcGFnZU9wdGlvbnMgPSB7fTsgfVxuICAgICAgICB2YXIgZ2V0SW5pdGlhbFByb3BzID0gUGFnZS5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgIHZhciBnZXREYXRhRnJvbVRyZWUgPSAnZ2V0RGF0YUZyb21UcmVlJyBpbiBwYWdlT3B0aW9uc1xuICAgICAgICAgICAgPyBwYWdlT3B0aW9ucy5nZXREYXRhRnJvbVRyZWVcbiAgICAgICAgICAgIDogb3B0aW9ucy5nZXREYXRhRnJvbVRyZWU7XG4gICAgICAgIHZhciByZW5kZXIgPSBwYWdlT3B0aW9ucy5yZW5kZXIgfHwgb3B0aW9ucy5yZW5kZXI7XG4gICAgICAgIHZhciBvbkVycm9yID0gcGFnZU9wdGlvbnMub25FcnJvciB8fCBvcHRpb25zLm9uRXJyb3I7XG4gICAgICAgIGZ1bmN0aW9uIFdpdGhBcG9sbG8oX2EpIHtcbiAgICAgICAgICAgIHZhciBfYjtcbiAgICAgICAgICAgIHZhciBhcG9sbG8gPSBfYS5hcG9sbG8sIGFwb2xsb1N0YXRlID0gX2EuYXBvbGxvU3RhdGUsIHByb3BzID0gX19yZXN0KF9hLCBbXCJhcG9sbG9cIiwgXCJhcG9sbG9TdGF0ZVwiXSk7XG4gICAgICAgICAgICB2YXIgYXBvbGxvQ2xpZW50ID0gYXBvbGxvIHx8XG4gICAgICAgICAgICAgICAgYXBvbGxvXzEuZGVmYXVsdChjbGllbnQsIHsgaW5pdGlhbFN0YXRlOiAoX2IgPSBhcG9sbG9TdGF0ZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmRhdGEgfSk7XG4gICAgICAgICAgICBpZiAocmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlcih7XG4gICAgICAgICAgICAgICAgICAgIFBhZ2U6IFBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgcHJvcHMpLCB7IGFwb2xsbzogYXBvbGxvQ2xpZW50IH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUGFnZSwgX19hc3NpZ24oe30sIHByb3BzLCB7IGFwb2xsbzogYXBvbGxvQ2xpZW50IH0pKTtcbiAgICAgICAgfVxuICAgICAgICBXaXRoQXBvbGxvLmRpc3BsYXlOYW1lID0gXCJXaXRoQXBvbGxvKFwiICsgZ2V0RGlzcGxheU5hbWUoUGFnZSkgKyBcIilcIjtcbiAgICAgICAgaWYgKGdldEluaXRpYWxQcm9wcyB8fCBnZXREYXRhRnJvbVRyZWUpIHtcbiAgICAgICAgICAgIFdpdGhBcG9sbG8uZ2V0SW5pdGlhbFByb3BzID0gZnVuY3Rpb24gKHBhZ2VDdHgpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3R4LCBBcHBUcmVlLCBoZWFkZXJzLCBhcG9sbG8sIGFwb2xsb1N0YXRlLCBwYWdlUHJvcHMsIHByb3BzLCBhcHBUcmVlUHJvcHMsIGVycm9yXzE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4ID0gJ0NvbXBvbmVudCcgaW4gcGFnZUN0eCA/IHBhZ2VDdHguY3R4IDogcGFnZUN0eDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHBUcmVlID0gcGFnZUN0eC5BcHBUcmVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnMgPSBjdHgucmVxID8gY3R4LnJlcS5oZWFkZXJzIDoge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBvbGxvID0gYXBvbGxvXzEuZGVmYXVsdChjbGllbnQsIHsgY3R4OiBjdHgsIGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBvbGxvU3RhdGUgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlUHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdldEluaXRpYWxQcm9wcykgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmFwb2xsb0NsaWVudCA9IGFwb2xsbztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXRJbml0aWFsUHJvcHMocGFnZUN0eCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VQcm9wcyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpKSByZXR1cm4gWzMgLypicmVhayovLCA3XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3R4LnJlcyAmJiAoY3R4LnJlcy5oZWFkZXJzU2VudCB8fCBjdHgucmVzLmZpbmlzaGVkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgcGFnZVByb3BzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFnZXREYXRhRnJvbVRyZWUpIHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzMsIDUsICwgNl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzID0gX19hc3NpZ24oX19hc3NpZ24oe30sIHBhZ2VQcm9wcyksIHsgYXBvbGxvU3RhdGU6IGFwb2xsb1N0YXRlLCBhcG9sbG86IGFwb2xsbyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBUcmVlUHJvcHMgPSAnQ29tcG9uZW50JyBpbiBwYWdlQ3R4ID8gcHJvcHMgOiB7IHBhZ2VQcm9wczogcHJvcHMgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBnZXREYXRhRnJvbVRyZWUocmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQXBwVHJlZSwgX19hc3NpZ24oe30sIGFwcFRyZWVQcm9wcykpKV07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcihlcnJvcl8xLCBjdHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHJldmVudCBBcG9sbG8gQ2xpZW50IEdyYXBoUUwgZXJyb3JzIGZyb20gY3Jhc2hpbmcgU1NSLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGUgVGhpcyBpcyBhIG5lY2Vzc2FyeSBkZWJ1Z2dpbmcgbG9nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdHcmFwaFFMIGVycm9yIG9jY3VycmVkIFtnZXREYXRhRnJvbVRyZWVdJywgZXJyb3JfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0RGF0YUZyb21UcmVlIGRvZXMgbm90IGNhbGwgY29tcG9uZW50V2lsbFVubW91bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBoZWFkIHNpZGUgZWZmZWN0IHRoZXJlZm9yZSBuZWVkIHRvIGJlIGNsZWFyZWQgbWFudWFsbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkXzEuZGVmYXVsdC5yZXdpbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcG9sbG9TdGF0ZS5kYXRhID0gYXBvbGxvLmNhY2hlLmV4dHJhY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVG8gYXZvaWQgY2FsbGluZyBpbml0QXBvbGxvKCkgdHdpY2UgaW4gdGhlIHNlcnZlciB3ZSBzZW5kIHRoZSBBcG9sbG8gQ2xpZW50IGFzIGEgcHJvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIHRoZSBjb21wb25lbnQsIG90aGVyd2lzZSB0aGUgY29tcG9uZW50IHdvdWxkIGhhdmUgdG8gY2FsbCBpbml0QXBvbGxvKCkgYWdhaW4gYnV0IHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aW1lIHdpdGhvdXQgdGhlIGNvbnRleHQsIG9uY2UgdGhhdCBoYXBwZW5zIHRoZSBmb2xsb3dpbmcgY29kZSB3aWxsIG1ha2Ugc3VyZSB3ZSBzZW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHByb3AgYXMgYG51bGxgIHRvIHRoZSBicm93c2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBvbGxvLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgX19hc3NpZ24oX19hc3NpZ24oe30sIHBhZ2VQcm9wcyksIHsgYXBvbGxvU3RhdGU6IGFwb2xsb1N0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBvbGxvOiBhcG9sbG8gfSldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTsgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gV2l0aEFwb2xsbztcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gd2l0aEFwb2xsbztcbiIsIlwidXNlIHN0cmljdFwiOy8qIGdsb2JhbHMgc2VsZiAqL3ZhciBmZXRjaD1zZWxmLmZldGNoLmJpbmQoc2VsZik7bW9kdWxlLmV4cG9ydHM9ZmV0Y2g7bW9kdWxlLmV4cG9ydHMuZGVmYXVsdD1tb2R1bGUuZXhwb3J0cztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4xXG4gKiByZWFjdC1kb20tc2VydmVyLmJyb3dzZXIuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIERvIG5vdCByZXF1aXJlIHRoaXMgbW9kdWxlIGRpcmVjdGx5ISBVc2Ugbm9ybWFsIGBpbnZhcmlhbnRgIGNhbGxzIHdpdGhcbi8vIHRlbXBsYXRlIGxpdGVyYWwgc3RyaW5ncy4gVGhlIG1lc3NhZ2VzIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBlcnJvciBjb2Rlc1xuLy8gZHVyaW5nIGJ1aWxkLlxuZnVuY3Rpb24gZm9ybWF0UHJvZEVycm9yTWVzc2FnZShjb2RlKSB7XG4gIHZhciB1cmwgPSAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2Vycm9yLWRlY29kZXIuaHRtbD9pbnZhcmlhbnQ9JyArIGNvZGU7XG5cbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB1cmwgKz0gJyZhcmdzW109JyArIGVuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIFwiTWluaWZpZWQgUmVhY3QgZXJyb3IgI1wiICsgY29kZSArIFwiOyB2aXNpdCBcIiArIHVybCArIFwiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIFwiICsgJ3VzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgJyArICdoZWxwZnVsIHdhcm5pbmdzLic7XG59XG5cbi8vIFRPRE86IHRoaXMgaXMgc3BlY2lhbCBiZWNhdXNlIGl0IGdldHMgaW1wb3J0ZWQgZHVyaW5nIGJ1aWxkLlxudmFyIFJlYWN0VmVyc2lvbiA9ICcxNy4wLjEnO1xuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuLy8gYnkgY2FsbHMgdG8gdGhlc2UgbWV0aG9kcyBieSBhIEJhYmVsIHBsdWdpbi5cbi8vXG4vLyBJbiBQUk9EIChvciBpbiBwYWNrYWdlcyB3aXRob3V0IGFjY2VzcyB0byBSZWFjdCBpbnRlcm5hbHMpLFxuLy8gdGhleSBhcmUgbGVmdCBhcyB0aGV5IGFyZSBpbnN0ZWFkLlxuXG5mdW5jdGlvbiB3YXJuKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCd3YXJuJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU3VzcGVuc2VTZXJ2ZXJSZW5kZXJlciA9IGZhbHNlO1xuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBkaWRXYXJuQWJvdXRJbnZhbGlkYXRlQ29udGV4dFR5cGU7XG5cbntcbiAgZGlkV2FybkFib3V0SW52YWxpZGF0ZUNvbnRleHRUeXBlID0gbmV3IFNldCgpO1xufVxuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gbWFza0NvbnRleHQodHlwZSwgY29udGV4dCkge1xuICB2YXIgY29udGV4dFR5cGVzID0gdHlwZS5jb250ZXh0VHlwZXM7XG5cbiAgaWYgKCFjb250ZXh0VHlwZXMpIHtcbiAgICByZXR1cm4gZW1wdHlPYmplY3Q7XG4gIH1cblxuICB2YXIgbWFza2VkQ29udGV4dCA9IHt9O1xuXG4gIGZvciAodmFyIGNvbnRleHROYW1lIGluIGNvbnRleHRUeXBlcykge1xuICAgIG1hc2tlZENvbnRleHRbY29udGV4dE5hbWVdID0gY29udGV4dFtjb250ZXh0TmFtZV07XG4gIH1cblxuICByZXR1cm4gbWFza2VkQ29udGV4dDtcbn1cblxuZnVuY3Rpb24gY2hlY2tDb250ZXh0VHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uKSB7XG4gIHtcbiAgICBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sICdDb21wb25lbnQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNvbnRleHRCb3VuZHMoY29udGV4dCwgdGhyZWFkSUQpIHtcbiAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBlbm91Z2ggc2xvdHMgaW4gdGhpcyBjb250ZXh0IHRvIHN0b3JlIHRoaXMgdGhyZWFkSUQsXG4gIC8vIGZpbGwgaXQgaW4gd2l0aG91dCBsZWF2aW5nIGFueSBob2xlcyB0byBlbnN1cmUgdGhhdCB0aGUgVk0gb3B0aW1pemVzXG4gIC8vIHRoaXMgYXMgbm9uLWhvbGV5IGluZGV4IHByb3BlcnRpZXMuXG4gIC8vIChOb3RlOiBJZiBgcmVhY3RgIHBhY2thZ2UgaXMgPCAxNi42LCBfdGhyZWFkQ291bnQgaXMgdW5kZWZpbmVkLilcbiAgZm9yICh2YXIgaSA9IGNvbnRleHQuX3RocmVhZENvdW50IHwgMDsgaSA8PSB0aHJlYWRJRDsgaSsrKSB7XG4gICAgLy8gV2UgYXNzdW1lIHRoYXQgdGhpcyBpcyB0aGUgc2FtZSBhcyB0aGUgZGVmYXVsdFZhbHVlIHdoaWNoIG1pZ2h0IG5vdCBiZVxuICAgIC8vIHRydWUgaWYgd2UncmUgcmVuZGVyaW5nIGluc2lkZSBhIHNlY29uZGFyeSByZW5kZXJlciBidXQgdGhleSBhcmVcbiAgICAvLyBzZWNvbmRhcnkgYmVjYXVzZSB0aGVzZSB1c2UgY2FzZXMgYXJlIHZlcnkgcmFyZS5cbiAgICBjb250ZXh0W2ldID0gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IGkgKyAxO1xuICB9XG59XG5mdW5jdGlvbiBwcm9jZXNzQ29udGV4dCh0eXBlLCBjb250ZXh0LCB0aHJlYWRJRCwgaXNDbGFzcykge1xuICBpZiAoaXNDbGFzcykge1xuICAgIHZhciBjb250ZXh0VHlwZSA9IHR5cGUuY29udGV4dFR5cGU7XG5cbiAgICB7XG4gICAgICBpZiAoJ2NvbnRleHRUeXBlJyBpbiB0eXBlKSB7XG4gICAgICAgIHZhciBpc1ZhbGlkID0gLy8gQWxsb3cgbnVsbCBmb3IgY29uZGl0aW9uYWwgZGVjbGFyYXRpb25cbiAgICAgICAgY29udGV4dFR5cGUgPT09IG51bGwgfHwgY29udGV4dFR5cGUgIT09IHVuZGVmaW5lZCAmJiBjb250ZXh0VHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFICYmIGNvbnRleHRUeXBlLl9jb250ZXh0ID09PSB1bmRlZmluZWQ7IC8vIE5vdCBhIDxDb250ZXh0LkNvbnN1bWVyPlxuXG4gICAgICAgIGlmICghaXNWYWxpZCAmJiAhZGlkV2FybkFib3V0SW52YWxpZGF0ZUNvbnRleHRUeXBlLmhhcyh0eXBlKSkge1xuICAgICAgICAgIGRpZFdhcm5BYm91dEludmFsaWRhdGVDb250ZXh0VHlwZS5hZGQodHlwZSk7XG4gICAgICAgICAgdmFyIGFkZGVuZHVtID0gJyc7XG5cbiAgICAgICAgICBpZiAoY29udGV4dFR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYWRkZW5kdW0gPSAnIEhvd2V2ZXIsIGl0IGlzIHNldCB0byB1bmRlZmluZWQuICcgKyAnVGhpcyBjYW4gYmUgY2F1c2VkIGJ5IGEgdHlwbyBvciBieSBtaXhpbmcgdXAgbmFtZWQgYW5kIGRlZmF1bHQgaW1wb3J0cy4gJyArICdUaGlzIGNhbiBhbHNvIGhhcHBlbiBkdWUgdG8gYSBjaXJjdWxhciBkZXBlbmRlbmN5LCBzbyAnICsgJ3RyeSBtb3ZpbmcgdGhlIGNyZWF0ZUNvbnRleHQoKSBjYWxsIHRvIGEgc2VwYXJhdGUgZmlsZS4nO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbnRleHRUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgYWRkZW5kdW0gPSAnIEhvd2V2ZXIsIGl0IGlzIHNldCB0byBhICcgKyB0eXBlb2YgY29udGV4dFR5cGUgKyAnLic7XG4gICAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0VHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSkge1xuICAgICAgICAgICAgYWRkZW5kdW0gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgdGhlIENvbnRleHQuUHJvdmlkZXIgaW5zdGVhZD8nO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29udGV4dFR5cGUuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gPENvbnRleHQuQ29uc3VtZXI+XG4gICAgICAgICAgICBhZGRlbmR1bSA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyB0aGUgQ29udGV4dC5Db25zdW1lciBpbnN0ZWFkPyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFkZGVuZHVtID0gJyBIb3dldmVyLCBpdCBpcyBzZXQgdG8gYW4gb2JqZWN0IHdpdGgga2V5cyB7JyArIE9iamVjdC5rZXlzKGNvbnRleHRUeXBlKS5qb2luKCcsICcpICsgJ30uJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvcignJXMgZGVmaW5lcyBhbiBpbnZhbGlkIGNvbnRleHRUeXBlLiAnICsgJ2NvbnRleHRUeXBlIHNob3VsZCBwb2ludCB0byB0aGUgQ29udGV4dCBvYmplY3QgcmV0dXJuZWQgYnkgUmVhY3QuY3JlYXRlQ29udGV4dCgpLiVzJywgZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB8fCAnQ29tcG9uZW50JywgYWRkZW5kdW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb250ZXh0VHlwZSA9PT0gJ29iamVjdCcgJiYgY29udGV4dFR5cGUgIT09IG51bGwpIHtcbiAgICAgIHZhbGlkYXRlQ29udGV4dEJvdW5kcyhjb250ZXh0VHlwZSwgdGhyZWFkSUQpO1xuICAgICAgcmV0dXJuIGNvbnRleHRUeXBlW3RocmVhZElEXTtcbiAgICB9XG5cbiAgICB7XG4gICAgICB2YXIgbWFza2VkQ29udGV4dCA9IG1hc2tDb250ZXh0KHR5cGUsIGNvbnRleHQpO1xuXG4gICAgICB7XG4gICAgICAgIGlmICh0eXBlLmNvbnRleHRUeXBlcykge1xuICAgICAgICAgIGNoZWNrQ29udGV4dFR5cGVzKHR5cGUuY29udGV4dFR5cGVzLCBtYXNrZWRDb250ZXh0LCAnY29udGV4dCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtYXNrZWRDb250ZXh0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICB2YXIgX21hc2tlZENvbnRleHQgPSBtYXNrQ29udGV4dCh0eXBlLCBjb250ZXh0KTtcblxuICAgICAge1xuICAgICAgICBpZiAodHlwZS5jb250ZXh0VHlwZXMpIHtcbiAgICAgICAgICBjaGVja0NvbnRleHRUeXBlcyh0eXBlLmNvbnRleHRUeXBlcywgX21hc2tlZENvbnRleHQsICdjb250ZXh0Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9tYXNrZWRDb250ZXh0O1xuICAgIH1cbiAgfVxufVxuXG52YXIgbmV4dEF2YWlsYWJsZVRocmVhZElEcyA9IG5ldyBVaW50MTZBcnJheSgxNik7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgMTU7IGkrKykge1xuICBuZXh0QXZhaWxhYmxlVGhyZWFkSURzW2ldID0gaSArIDE7XG59XG5cbm5leHRBdmFpbGFibGVUaHJlYWRJRHNbMTVdID0gMDtcblxuZnVuY3Rpb24gZ3Jvd1RocmVhZENvdW50QW5kUmV0dXJuTmV4dEF2YWlsYWJsZSgpIHtcbiAgdmFyIG9sZEFycmF5ID0gbmV4dEF2YWlsYWJsZVRocmVhZElEcztcbiAgdmFyIG9sZFNpemUgPSBvbGRBcnJheS5sZW5ndGg7XG4gIHZhciBuZXdTaXplID0gb2xkU2l6ZSAqIDI7XG5cbiAgaWYgKCEobmV3U2l6ZSA8PSAweDEwMDAwKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIk1heGltdW0gbnVtYmVyIG9mIGNvbmN1cnJlbnQgUmVhY3QgcmVuZGVyZXJzIGV4Y2VlZGVkLiBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IGFyZSBub3QgcHJvcGVybHkgZGVzdHJveWluZyB0aGUgUmVhZGFibGUgcHJvdmlkZWQgYnkgUmVhY3QuIEVuc3VyZSB0aGF0IHlvdSBjYWxsIC5kZXN0cm95KCkgb24gaXQgaWYgeW91IG5vIGxvbmdlciB3YW50IHRvIHJlYWQgZnJvbSBpdCwgYW5kIGRpZCBub3QgcmVhZCB0byB0aGUgZW5kLiBJZiB5b3UgdXNlIC5waXBlKCkgdGhpcyBzaG91bGQgYmUgYXV0b21hdGljLlwiICk7XG4gICAgfVxuICB9XG5cbiAgdmFyIG5ld0FycmF5ID0gbmV3IFVpbnQxNkFycmF5KG5ld1NpemUpO1xuICBuZXdBcnJheS5zZXQob2xkQXJyYXkpO1xuICBuZXh0QXZhaWxhYmxlVGhyZWFkSURzID0gbmV3QXJyYXk7XG4gIG5leHRBdmFpbGFibGVUaHJlYWRJRHNbMF0gPSBvbGRTaXplICsgMTtcblxuICBmb3IgKHZhciBfaSA9IG9sZFNpemU7IF9pIDwgbmV3U2l6ZSAtIDE7IF9pKyspIHtcbiAgICBuZXh0QXZhaWxhYmxlVGhyZWFkSURzW19pXSA9IF9pICsgMTtcbiAgfVxuXG4gIG5leHRBdmFpbGFibGVUaHJlYWRJRHNbbmV3U2l6ZSAtIDFdID0gMDtcbiAgcmV0dXJuIG9sZFNpemU7XG59XG5cbmZ1bmN0aW9uIGFsbG9jVGhyZWFkSUQoKSB7XG4gIHZhciBuZXh0SUQgPSBuZXh0QXZhaWxhYmxlVGhyZWFkSURzWzBdO1xuXG4gIGlmIChuZXh0SUQgPT09IDApIHtcbiAgICByZXR1cm4gZ3Jvd1RocmVhZENvdW50QW5kUmV0dXJuTmV4dEF2YWlsYWJsZSgpO1xuICB9XG5cbiAgbmV4dEF2YWlsYWJsZVRocmVhZElEc1swXSA9IG5leHRBdmFpbGFibGVUaHJlYWRJRHNbbmV4dElEXTtcbiAgcmV0dXJuIG5leHRJRDtcbn1cbmZ1bmN0aW9uIGZyZWVUaHJlYWRJRChpZCkge1xuICBuZXh0QXZhaWxhYmxlVGhyZWFkSURzW2lkXSA9IG5leHRBdmFpbGFibGVUaHJlYWRJRHNbMF07XG4gIG5leHRBdmFpbGFibGVUaHJlYWRJRHNbMF0gPSBpZDtcbn1cblxuLy8gQSByZXNlcnZlZCBhdHRyaWJ1dGUuXG4vLyBJdCBpcyBoYW5kbGVkIGJ5IFJlYWN0IHNlcGFyYXRlbHkgYW5kIHNob3VsZG4ndCBiZSB3cml0dGVuIHRvIHRoZSBET00uXG52YXIgUkVTRVJWRUQgPSAwOyAvLyBBIHNpbXBsZSBzdHJpbmcgYXR0cmlidXRlLlxuLy8gQXR0cmlidXRlcyB0aGF0IGFyZW4ndCBpbiB0aGUgZmlsdGVyIGFyZSBwcmVzdW1lZCB0byBoYXZlIHRoaXMgdHlwZS5cblxudmFyIFNUUklORyA9IDE7IC8vIEEgc3RyaW5nIGF0dHJpYnV0ZSB0aGF0IGFjY2VwdHMgYm9vbGVhbnMgaW4gUmVhY3QuIEluIEhUTUwsIHRoZXNlIGFyZSBjYWxsZWRcbi8vIFwiZW51bWVyYXRlZFwiIGF0dHJpYnV0ZXMgd2l0aCBcInRydWVcIiBhbmQgXCJmYWxzZVwiIGFzIHBvc3NpYmxlIHZhbHVlcy5cbi8vIFdoZW4gdHJ1ZSwgaXQgc2hvdWxkIGJlIHNldCB0byBhIFwidHJ1ZVwiIHN0cmluZy5cbi8vIFdoZW4gZmFsc2UsIGl0IHNob3VsZCBiZSBzZXQgdG8gYSBcImZhbHNlXCIgc3RyaW5nLlxuXG52YXIgQk9PTEVBTklTSF9TVFJJTkcgPSAyOyAvLyBBIHJlYWwgYm9vbGVhbiBhdHRyaWJ1dGUuXG4vLyBXaGVuIHRydWUsIGl0IHNob3VsZCBiZSBwcmVzZW50IChzZXQgZWl0aGVyIHRvIGFuIGVtcHR5IHN0cmluZyBvciBpdHMgbmFtZSkuXG4vLyBXaGVuIGZhbHNlLCBpdCBzaG91bGQgYmUgb21pdHRlZC5cblxudmFyIEJPT0xFQU4gPSAzOyAvLyBBbiBhdHRyaWJ1dGUgdGhhdCBjYW4gYmUgdXNlZCBhcyBhIGZsYWcgYXMgd2VsbCBhcyB3aXRoIGEgdmFsdWUuXG4vLyBXaGVuIHRydWUsIGl0IHNob3VsZCBiZSBwcmVzZW50IChzZXQgZWl0aGVyIHRvIGFuIGVtcHR5IHN0cmluZyBvciBpdHMgbmFtZSkuXG4vLyBXaGVuIGZhbHNlLCBpdCBzaG91bGQgYmUgb21pdHRlZC5cbi8vIEZvciBhbnkgb3RoZXIgdmFsdWUsIHNob3VsZCBiZSBwcmVzZW50IHdpdGggdGhhdCB2YWx1ZS5cblxudmFyIE9WRVJMT0FERURfQk9PTEVBTiA9IDQ7IC8vIEFuIGF0dHJpYnV0ZSB0aGF0IG11c3QgYmUgbnVtZXJpYyBvciBwYXJzZSBhcyBhIG51bWVyaWMuXG4vLyBXaGVuIGZhbHN5LCBpdCBzaG91bGQgYmUgcmVtb3ZlZC5cblxudmFyIE5VTUVSSUMgPSA1OyAvLyBBbiBhdHRyaWJ1dGUgdGhhdCBtdXN0IGJlIHBvc2l0aXZlIG51bWVyaWMgb3IgcGFyc2UgYXMgYSBwb3NpdGl2ZSBudW1lcmljLlxuLy8gV2hlbiBmYWxzeSwgaXQgc2hvdWxkIGJlIHJlbW92ZWQuXG5cbnZhciBQT1NJVElWRV9OVU1FUklDID0gNjtcblxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xudmFyIEFUVFJJQlVURV9OQU1FX1NUQVJUX0NIQVIgPSBcIjpBLVpfYS16XFxcXHUwMEMwLVxcXFx1MDBENlxcXFx1MDBEOC1cXFxcdTAwRjZcXFxcdTAwRjgtXFxcXHUwMkZGXFxcXHUwMzcwLVxcXFx1MDM3RFxcXFx1MDM3Ri1cXFxcdTFGRkZcXFxcdTIwMEMtXFxcXHUyMDBEXFxcXHUyMDcwLVxcXFx1MjE4RlxcXFx1MkMwMC1cXFxcdTJGRUZcXFxcdTMwMDEtXFxcXHVEN0ZGXFxcXHVGOTAwLVxcXFx1RkRDRlxcXFx1RkRGMC1cXFxcdUZGRkRcIjtcbi8qIGVzbGludC1lbmFibGUgbWF4LWxlbiAqL1xuXG52YXIgQVRUUklCVVRFX05BTUVfQ0hBUiA9IEFUVFJJQlVURV9OQU1FX1NUQVJUX0NIQVIgKyBcIlxcXFwtLjAtOVxcXFx1MDBCN1xcXFx1MDMwMC1cXFxcdTAzNkZcXFxcdTIwM0YtXFxcXHUyMDQwXCI7XG52YXIgUk9PVF9BVFRSSUJVVEVfTkFNRSA9ICdkYXRhLXJlYWN0cm9vdCc7XG52YXIgVkFMSURfQVRUUklCVVRFX05BTUVfUkVHRVggPSBuZXcgUmVnRXhwKCdeWycgKyBBVFRSSUJVVEVfTkFNRV9TVEFSVF9DSEFSICsgJ11bJyArIEFUVFJJQlVURV9OQU1FX0NIQVIgKyAnXSokJyk7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIGlsbGVnYWxBdHRyaWJ1dGVOYW1lQ2FjaGUgPSB7fTtcbnZhciB2YWxpZGF0ZWRBdHRyaWJ1dGVOYW1lQ2FjaGUgPSB7fTtcbmZ1bmN0aW9uIGlzQXR0cmlidXRlTmFtZVNhZmUoYXR0cmlidXRlTmFtZSkge1xuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbCh2YWxpZGF0ZWRBdHRyaWJ1dGVOYW1lQ2FjaGUsIGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChpbGxlZ2FsQXR0cmlidXRlTmFtZUNhY2hlLCBhdHRyaWJ1dGVOYW1lKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChWQUxJRF9BVFRSSUJVVEVfTkFNRV9SRUdFWC50ZXN0KGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgdmFsaWRhdGVkQXR0cmlidXRlTmFtZUNhY2hlW2F0dHJpYnV0ZU5hbWVdID0gdHJ1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlsbGVnYWxBdHRyaWJ1dGVOYW1lQ2FjaGVbYXR0cmlidXRlTmFtZV0gPSB0cnVlO1xuXG4gIHtcbiAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgbmFtZTogYCVzYCcsIGF0dHJpYnV0ZU5hbWUpO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gc2hvdWxkSWdub3JlQXR0cmlidXRlKG5hbWUsIHByb3BlcnR5SW5mbywgaXNDdXN0b21Db21wb25lbnRUYWcpIHtcbiAgaWYgKHByb3BlcnR5SW5mbyAhPT0gbnVsbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUluZm8udHlwZSA9PT0gUkVTRVJWRUQ7XG4gIH1cblxuICBpZiAoaXNDdXN0b21Db21wb25lbnRUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAobmFtZS5sZW5ndGggPiAyICYmIChuYW1lWzBdID09PSAnbycgfHwgbmFtZVswXSA9PT0gJ08nKSAmJiAobmFtZVsxXSA9PT0gJ24nIHx8IG5hbWVbMV0gPT09ICdOJykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHNob3VsZFJlbW92ZUF0dHJpYnV0ZVdpdGhXYXJuaW5nKG5hbWUsIHZhbHVlLCBwcm9wZXJ0eUluZm8sIGlzQ3VzdG9tQ29tcG9uZW50VGFnKSB7XG4gIGlmIChwcm9wZXJ0eUluZm8gIT09IG51bGwgJiYgcHJvcGVydHlJbmZvLnR5cGUgPT09IFJFU0VSVkVEKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICBjYXNlICdmdW5jdGlvbic6IC8vICRGbG93SXNzdWUgc3ltYm9sIGlzIHBlcmZlY3RseSB2YWxpZCBoZXJlXG5cbiAgICBjYXNlICdzeW1ib2wnOlxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHtcbiAgICAgICAgaWYgKGlzQ3VzdG9tQ29tcG9uZW50VGFnKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BlcnR5SW5mbyAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiAhcHJvcGVydHlJbmZvLmFjY2VwdHNCb29sZWFucztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgcHJlZml4ID0gbmFtZS50b0xvd2VyQ2FzZSgpLnNsaWNlKDAsIDUpO1xuICAgICAgICAgIHJldHVybiBwcmVmaXggIT09ICdkYXRhLScgJiYgcHJlZml4ICE9PSAnYXJpYS0nO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5mdW5jdGlvbiBzaG91bGRSZW1vdmVBdHRyaWJ1dGUobmFtZSwgdmFsdWUsIHByb3BlcnR5SW5mbywgaXNDdXN0b21Db21wb25lbnRUYWcpIHtcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChzaG91bGRSZW1vdmVBdHRyaWJ1dGVXaXRoV2FybmluZyhuYW1lLCB2YWx1ZSwgcHJvcGVydHlJbmZvLCBpc0N1c3RvbUNvbXBvbmVudFRhZykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChpc0N1c3RvbUNvbXBvbmVudFRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChwcm9wZXJ0eUluZm8gIT09IG51bGwpIHtcblxuICAgIHN3aXRjaCAocHJvcGVydHlJbmZvLnR5cGUpIHtcbiAgICAgIGNhc2UgQk9PTEVBTjpcbiAgICAgICAgcmV0dXJuICF2YWx1ZTtcblxuICAgICAgY2FzZSBPVkVSTE9BREVEX0JPT0xFQU46XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PT0gZmFsc2U7XG5cbiAgICAgIGNhc2UgTlVNRVJJQzpcbiAgICAgICAgcmV0dXJuIGlzTmFOKHZhbHVlKTtcblxuICAgICAgY2FzZSBQT1NJVElWRV9OVU1FUklDOlxuICAgICAgICByZXR1cm4gaXNOYU4odmFsdWUpIHx8IHZhbHVlIDwgMTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBnZXRQcm9wZXJ0eUluZm8obmFtZSkge1xuICByZXR1cm4gcHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IHByb3BlcnRpZXNbbmFtZV0gOiBudWxsO1xufVxuXG5mdW5jdGlvbiBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgdHlwZSwgbXVzdFVzZVByb3BlcnR5LCBhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVOYW1lc3BhY2UsIHNhbml0aXplVVJMLCByZW1vdmVFbXB0eVN0cmluZykge1xuICB0aGlzLmFjY2VwdHNCb29sZWFucyA9IHR5cGUgPT09IEJPT0xFQU5JU0hfU1RSSU5HIHx8IHR5cGUgPT09IEJPT0xFQU4gfHwgdHlwZSA9PT0gT1ZFUkxPQURFRF9CT09MRUFOO1xuICB0aGlzLmF0dHJpYnV0ZU5hbWUgPSBhdHRyaWJ1dGVOYW1lO1xuICB0aGlzLmF0dHJpYnV0ZU5hbWVzcGFjZSA9IGF0dHJpYnV0ZU5hbWVzcGFjZTtcbiAgdGhpcy5tdXN0VXNlUHJvcGVydHkgPSBtdXN0VXNlUHJvcGVydHk7XG4gIHRoaXMucHJvcGVydHlOYW1lID0gbmFtZTtcbiAgdGhpcy50eXBlID0gdHlwZTtcbiAgdGhpcy5zYW5pdGl6ZVVSTCA9IHNhbml0aXplVVJMO1xuICB0aGlzLnJlbW92ZUVtcHR5U3RyaW5nID0gcmVtb3ZlRW1wdHlTdHJpbmc7XG59IC8vIFdoZW4gYWRkaW5nIGF0dHJpYnV0ZXMgdG8gdGhpcyBsaXN0LCBiZSBzdXJlIHRvIGFsc28gYWRkIHRoZW0gdG9cbi8vIHRoZSBgcG9zc2libGVTdGFuZGFyZE5hbWVzYCBtb2R1bGUgdG8gZW5zdXJlIGNhc2luZyBhbmQgaW5jb3JyZWN0XG4vLyBuYW1lIHdhcm5pbmdzLlxuXG5cbnZhciBwcm9wZXJ0aWVzID0ge307IC8vIFRoZXNlIHByb3BzIGFyZSByZXNlcnZlZCBieSBSZWFjdC4gVGhleSBzaG91bGRuJ3QgYmUgd3JpdHRlbiB0byB0aGUgRE9NLlxuXG52YXIgcmVzZXJ2ZWRQcm9wcyA9IFsnY2hpbGRyZW4nLCAnZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwnLCAvLyBUT0RPOiBUaGlzIHByZXZlbnRzIHRoZSBhc3NpZ25tZW50IG9mIGRlZmF1bHRWYWx1ZSB0byByZWd1bGFyXG4vLyBlbGVtZW50cyAobm90IGp1c3QgaW5wdXRzKS4gTm93IHRoYXQgUmVhY3RET01JbnB1dCBhc3NpZ25zIHRvIHRoZVxuLy8gZGVmYXVsdFZhbHVlIHByb3BlcnR5IC0tIGRvIHdlIG5lZWQgdGhpcz9cbidkZWZhdWx0VmFsdWUnLCAnZGVmYXVsdENoZWNrZWQnLCAnaW5uZXJIVE1MJywgJ3N1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZycsICdzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmcnLCAnc3R5bGUnXTtcbnJlc2VydmVkUHJvcHMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBSRVNFUlZFRCwgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBuYW1lLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSwgLy8gc2FuaXRpemVVUkxcbiAgZmFsc2UpO1xufSk7IC8vIEEgZmV3IFJlYWN0IHN0cmluZyBhdHRyaWJ1dGVzIGhhdmUgYSBkaWZmZXJlbnQgbmFtZS5cbi8vIFRoaXMgaXMgYSBtYXBwaW5nIGZyb20gUmVhY3QgcHJvcCBuYW1lcyB0byB0aGUgYXR0cmlidXRlIG5hbWVzLlxuXG5bWydhY2NlcHRDaGFyc2V0JywgJ2FjY2VwdC1jaGFyc2V0J10sIFsnY2xhc3NOYW1lJywgJ2NsYXNzJ10sIFsnaHRtbEZvcicsICdmb3InXSwgWydodHRwRXF1aXYnLCAnaHR0cC1lcXVpdiddXS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBuYW1lID0gX3JlZlswXSxcbiAgICAgIGF0dHJpYnV0ZU5hbWUgPSBfcmVmWzFdO1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBTVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgYXR0cmlidXRlTmFtZSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pOyAvLyBUaGVzZSBhcmUgXCJlbnVtZXJhdGVkXCIgSFRNTCBhdHRyaWJ1dGVzIHRoYXQgYWNjZXB0IFwidHJ1ZVwiIGFuZCBcImZhbHNlXCIuXG4vLyBJbiBSZWFjdCwgd2UgbGV0IHVzZXJzIHBhc3MgYHRydWVgIGFuZCBgZmFsc2VgIGV2ZW4gdGhvdWdoIHRlY2huaWNhbGx5XG4vLyB0aGVzZSBhcmVuJ3QgYm9vbGVhbiBhdHRyaWJ1dGVzICh0aGV5IGFyZSBjb2VyY2VkIHRvIHN0cmluZ3MpLlxuXG5bJ2NvbnRlbnRFZGl0YWJsZScsICdkcmFnZ2FibGUnLCAnc3BlbGxDaGVjaycsICd2YWx1ZSddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgQk9PTEVBTklTSF9TVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgbmFtZS50b0xvd2VyQ2FzZSgpLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSwgLy8gc2FuaXRpemVVUkxcbiAgZmFsc2UpO1xufSk7IC8vIFRoZXNlIGFyZSBcImVudW1lcmF0ZWRcIiBTVkcgYXR0cmlidXRlcyB0aGF0IGFjY2VwdCBcInRydWVcIiBhbmQgXCJmYWxzZVwiLlxuLy8gSW4gUmVhY3QsIHdlIGxldCB1c2VycyBwYXNzIGB0cnVlYCBhbmQgYGZhbHNlYCBldmVuIHRob3VnaCB0ZWNobmljYWxseVxuLy8gdGhlc2UgYXJlbid0IGJvb2xlYW4gYXR0cmlidXRlcyAodGhleSBhcmUgY29lcmNlZCB0byBzdHJpbmdzKS5cbi8vIFNpbmNlIHRoZXNlIGFyZSBTVkcgYXR0cmlidXRlcywgdGhlaXIgYXR0cmlidXRlIG5hbWVzIGFyZSBjYXNlLXNlbnNpdGl2ZS5cblxuWydhdXRvUmV2ZXJzZScsICdleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkJywgJ2ZvY3VzYWJsZScsICdwcmVzZXJ2ZUFscGhhJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBCT09MRUFOSVNIX1NUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBuYW1lLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSwgLy8gc2FuaXRpemVVUkxcbiAgZmFsc2UpO1xufSk7IC8vIFRoZXNlIGFyZSBIVE1MIGJvb2xlYW4gYXR0cmlidXRlcy5cblxuWydhbGxvd0Z1bGxTY3JlZW4nLCAnYXN5bmMnLCAvLyBOb3RlOiB0aGVyZSBpcyBhIHNwZWNpYWwgY2FzZSB0aGF0IHByZXZlbnRzIGl0IGZyb20gYmVpbmcgd3JpdHRlbiB0byB0aGUgRE9NXG4vLyBvbiB0aGUgY2xpZW50IHNpZGUgYmVjYXVzZSB0aGUgYnJvd3NlcnMgYXJlIGluY29uc2lzdGVudC4gSW5zdGVhZCB3ZSBjYWxsIGZvY3VzKCkuXG4nYXV0b0ZvY3VzJywgJ2F1dG9QbGF5JywgJ2NvbnRyb2xzJywgJ2RlZmF1bHQnLCAnZGVmZXInLCAnZGlzYWJsZWQnLCAnZGlzYWJsZVBpY3R1cmVJblBpY3R1cmUnLCAnZGlzYWJsZVJlbW90ZVBsYXliYWNrJywgJ2Zvcm1Ob1ZhbGlkYXRlJywgJ2hpZGRlbicsICdsb29wJywgJ25vTW9kdWxlJywgJ25vVmFsaWRhdGUnLCAnb3BlbicsICdwbGF5c0lubGluZScsICdyZWFkT25seScsICdyZXF1aXJlZCcsICdyZXZlcnNlZCcsICdzY29wZWQnLCAnc2VhbWxlc3MnLCAvLyBNaWNyb2RhdGFcbidpdGVtU2NvcGUnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIEJPT0xFQU4sIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgbmFtZS50b0xvd2VyQ2FzZSgpLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSwgLy8gc2FuaXRpemVVUkxcbiAgZmFsc2UpO1xufSk7IC8vIFRoZXNlIGFyZSB0aGUgZmV3IFJlYWN0IHByb3BzIHRoYXQgd2Ugc2V0IGFzIERPTSBwcm9wZXJ0aWVzXG4vLyByYXRoZXIgdGhhbiBhdHRyaWJ1dGVzLiBUaGVzZSBhcmUgYWxsIGJvb2xlYW5zLlxuXG5bJ2NoZWNrZWQnLCAvLyBOb3RlOiBgb3B0aW9uLnNlbGVjdGVkYCBpcyBub3QgdXBkYXRlZCBpZiBgc2VsZWN0Lm11bHRpcGxlYCBpc1xuLy8gZGlzYWJsZWQgd2l0aCBgcmVtb3ZlQXR0cmlidXRlYC4gV2UgaGF2ZSBzcGVjaWFsIGxvZ2ljIGZvciBoYW5kbGluZyB0aGlzLlxuJ211bHRpcGxlJywgJ211dGVkJywgJ3NlbGVjdGVkJyAvLyBOT1RFOiBpZiB5b3UgYWRkIGEgY2FtZWxDYXNlZCBwcm9wIHRvIHRoaXMgbGlzdCxcbi8vIHlvdSdsbCBuZWVkIHRvIHNldCBhdHRyaWJ1dGVOYW1lIHRvIG5hbWUudG9Mb3dlckNhc2UoKVxuLy8gaW5zdGVhZCBpbiB0aGUgYXNzaWdubWVudCBiZWxvdy5cbl0uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBCT09MRUFOLCB0cnVlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgbmFtZSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pOyAvLyBUaGVzZSBhcmUgSFRNTCBhdHRyaWJ1dGVzIHRoYXQgYXJlIFwib3ZlcmxvYWRlZCBib29sZWFuc1wiOiB0aGV5IGJlaGF2ZSBsaWtlXG4vLyBib29sZWFucywgYnV0IGNhbiBhbHNvIGFjY2VwdCBhIHN0cmluZyB2YWx1ZS5cblxuWydjYXB0dXJlJywgJ2Rvd25sb2FkJyAvLyBOT1RFOiBpZiB5b3UgYWRkIGEgY2FtZWxDYXNlZCBwcm9wIHRvIHRoaXMgbGlzdCxcbi8vIHlvdSdsbCBuZWVkIHRvIHNldCBhdHRyaWJ1dGVOYW1lIHRvIG5hbWUudG9Mb3dlckNhc2UoKVxuLy8gaW5zdGVhZCBpbiB0aGUgYXNzaWdubWVudCBiZWxvdy5cbl0uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBPVkVSTE9BREVEX0JPT0xFQU4sIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgbmFtZSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pOyAvLyBUaGVzZSBhcmUgSFRNTCBhdHRyaWJ1dGVzIHRoYXQgbXVzdCBiZSBwb3NpdGl2ZSBudW1iZXJzLlxuXG5bJ2NvbHMnLCAncm93cycsICdzaXplJywgJ3NwYW4nIC8vIE5PVEU6IGlmIHlvdSBhZGQgYSBjYW1lbENhc2VkIHByb3AgdG8gdGhpcyBsaXN0LFxuLy8geW91J2xsIG5lZWQgdG8gc2V0IGF0dHJpYnV0ZU5hbWUgdG8gbmFtZS50b0xvd2VyQ2FzZSgpXG4vLyBpbnN0ZWFkIGluIHRoZSBhc3NpZ25tZW50IGJlbG93LlxuXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIFBPU0lUSVZFX05VTUVSSUMsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgbmFtZSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pOyAvLyBUaGVzZSBhcmUgSFRNTCBhdHRyaWJ1dGVzIHRoYXQgbXVzdCBiZSBudW1iZXJzLlxuXG5bJ3Jvd1NwYW4nLCAnc3RhcnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIE5VTUVSSUMsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgbmFtZS50b0xvd2VyQ2FzZSgpLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSwgLy8gc2FuaXRpemVVUkxcbiAgZmFsc2UpO1xufSk7XG52YXIgQ0FNRUxJWkUgPSAvW1xcLVxcOl0oW2Etel0pL2c7XG5cbnZhciBjYXBpdGFsaXplID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gIHJldHVybiB0b2tlblsxXS50b1VwcGVyQ2FzZSgpO1xufTsgLy8gVGhpcyBpcyBhIGxpc3Qgb2YgYWxsIFNWRyBhdHRyaWJ1dGVzIHRoYXQgbmVlZCBzcGVjaWFsIGNhc2luZywgbmFtZXNwYWNpbmcsXG4vLyBvciBib29sZWFuIHZhbHVlIGFzc2lnbm1lbnQuIFJlZ3VsYXIgYXR0cmlidXRlcyB0aGF0IGp1c3QgYWNjZXB0IHN0cmluZ3Ncbi8vIGFuZCBoYXZlIHRoZSBzYW1lIG5hbWVzIGFyZSBvbWl0dGVkLCBqdXN0IGxpa2UgaW4gdGhlIEhUTUwgYXR0cmlidXRlIGZpbHRlci5cbi8vIFNvbWUgb2YgdGhlc2UgYXR0cmlidXRlcyBjYW4gYmUgaGFyZCB0byBmaW5kLiBUaGlzIGxpc3Qgd2FzIGNyZWF0ZWQgYnlcbi8vIHNjcmFwaW5nIHRoZSBNRE4gZG9jdW1lbnRhdGlvbi5cblxuXG5bJ2FjY2VudC1oZWlnaHQnLCAnYWxpZ25tZW50LWJhc2VsaW5lJywgJ2FyYWJpYy1mb3JtJywgJ2Jhc2VsaW5lLXNoaWZ0JywgJ2NhcC1oZWlnaHQnLCAnY2xpcC1wYXRoJywgJ2NsaXAtcnVsZScsICdjb2xvci1pbnRlcnBvbGF0aW9uJywgJ2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVycycsICdjb2xvci1wcm9maWxlJywgJ2NvbG9yLXJlbmRlcmluZycsICdkb21pbmFudC1iYXNlbGluZScsICdlbmFibGUtYmFja2dyb3VuZCcsICdmaWxsLW9wYWNpdHknLCAnZmlsbC1ydWxlJywgJ2Zsb29kLWNvbG9yJywgJ2Zsb29kLW9wYWNpdHknLCAnZm9udC1mYW1pbHknLCAnZm9udC1zaXplJywgJ2ZvbnQtc2l6ZS1hZGp1c3QnLCAnZm9udC1zdHJldGNoJywgJ2ZvbnQtc3R5bGUnLCAnZm9udC12YXJpYW50JywgJ2ZvbnQtd2VpZ2h0JywgJ2dseXBoLW5hbWUnLCAnZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbCcsICdnbHlwaC1vcmllbnRhdGlvbi12ZXJ0aWNhbCcsICdob3Jpei1hZHYteCcsICdob3Jpei1vcmlnaW4teCcsICdpbWFnZS1yZW5kZXJpbmcnLCAnbGV0dGVyLXNwYWNpbmcnLCAnbGlnaHRpbmctY29sb3InLCAnbWFya2VyLWVuZCcsICdtYXJrZXItbWlkJywgJ21hcmtlci1zdGFydCcsICdvdmVybGluZS1wb3NpdGlvbicsICdvdmVybGluZS10aGlja25lc3MnLCAncGFpbnQtb3JkZXInLCAncGFub3NlLTEnLCAncG9pbnRlci1ldmVudHMnLCAncmVuZGVyaW5nLWludGVudCcsICdzaGFwZS1yZW5kZXJpbmcnLCAnc3RvcC1jb2xvcicsICdzdG9wLW9wYWNpdHknLCAnc3RyaWtldGhyb3VnaC1wb3NpdGlvbicsICdzdHJpa2V0aHJvdWdoLXRoaWNrbmVzcycsICdzdHJva2UtZGFzaGFycmF5JywgJ3N0cm9rZS1kYXNob2Zmc2V0JywgJ3N0cm9rZS1saW5lY2FwJywgJ3N0cm9rZS1saW5lam9pbicsICdzdHJva2UtbWl0ZXJsaW1pdCcsICdzdHJva2Utb3BhY2l0eScsICdzdHJva2Utd2lkdGgnLCAndGV4dC1hbmNob3InLCAndGV4dC1kZWNvcmF0aW9uJywgJ3RleHQtcmVuZGVyaW5nJywgJ3VuZGVybGluZS1wb3NpdGlvbicsICd1bmRlcmxpbmUtdGhpY2tuZXNzJywgJ3VuaWNvZGUtYmlkaScsICd1bmljb2RlLXJhbmdlJywgJ3VuaXRzLXBlci1lbScsICd2LWFscGhhYmV0aWMnLCAndi1oYW5naW5nJywgJ3YtaWRlb2dyYXBoaWMnLCAndi1tYXRoZW1hdGljYWwnLCAndmVjdG9yLWVmZmVjdCcsICd2ZXJ0LWFkdi15JywgJ3ZlcnQtb3JpZ2luLXgnLCAndmVydC1vcmlnaW4teScsICd3b3JkLXNwYWNpbmcnLCAnd3JpdGluZy1tb2RlJywgJ3htbG5zOnhsaW5rJywgJ3gtaGVpZ2h0JyAvLyBOT1RFOiBpZiB5b3UgYWRkIGEgY2FtZWxDYXNlZCBwcm9wIHRvIHRoaXMgbGlzdCxcbi8vIHlvdSdsbCBuZWVkIHRvIHNldCBhdHRyaWJ1dGVOYW1lIHRvIG5hbWUudG9Mb3dlckNhc2UoKVxuLy8gaW5zdGVhZCBpbiB0aGUgYXNzaWdubWVudCBiZWxvdy5cbl0uZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlTmFtZSkge1xuICB2YXIgbmFtZSA9IGF0dHJpYnV0ZU5hbWUucmVwbGFjZShDQU1FTElaRSwgY2FwaXRhbGl6ZSk7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIFNUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBhdHRyaWJ1dGVOYW1lLCBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pOyAvLyBTdHJpbmcgU1ZHIGF0dHJpYnV0ZXMgd2l0aCB0aGUgeGxpbmsgbmFtZXNwYWNlLlxuXG5bJ3hsaW5rOmFjdHVhdGUnLCAneGxpbms6YXJjcm9sZScsICd4bGluazpyb2xlJywgJ3hsaW5rOnNob3cnLCAneGxpbms6dGl0bGUnLCAneGxpbms6dHlwZScgLy8gTk9URTogaWYgeW91IGFkZCBhIGNhbWVsQ2FzZWQgcHJvcCB0byB0aGlzIGxpc3QsXG4vLyB5b3UnbGwgbmVlZCB0byBzZXQgYXR0cmlidXRlTmFtZSB0byBuYW1lLnRvTG93ZXJDYXNlKClcbi8vIGluc3RlYWQgaW4gdGhlIGFzc2lnbm1lbnQgYmVsb3cuXG5dLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZU5hbWUpIHtcbiAgdmFyIG5hbWUgPSBhdHRyaWJ1dGVOYW1lLnJlcGxhY2UoQ0FNRUxJWkUsIGNhcGl0YWxpemUpO1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBTVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgYXR0cmlidXRlTmFtZSwgJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBmYWxzZSwgLy8gc2FuaXRpemVVUkxcbiAgZmFsc2UpO1xufSk7IC8vIFN0cmluZyBTVkcgYXR0cmlidXRlcyB3aXRoIHRoZSB4bWwgbmFtZXNwYWNlLlxuXG5bJ3htbDpiYXNlJywgJ3htbDpsYW5nJywgJ3htbDpzcGFjZScgLy8gTk9URTogaWYgeW91IGFkZCBhIGNhbWVsQ2FzZWQgcHJvcCB0byB0aGlzIGxpc3QsXG4vLyB5b3UnbGwgbmVlZCB0byBzZXQgYXR0cmlidXRlTmFtZSB0byBuYW1lLnRvTG93ZXJDYXNlKClcbi8vIGluc3RlYWQgaW4gdGhlIGFzc2lnbm1lbnQgYmVsb3cuXG5dLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZU5hbWUpIHtcbiAgdmFyIG5hbWUgPSBhdHRyaWJ1dGVOYW1lLnJlcGxhY2UoQ0FNRUxJWkUsIGNhcGl0YWxpemUpO1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBTVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgYXR0cmlidXRlTmFtZSwgJ2h0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZScsIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXR0cmlidXRlIGV4aXN0cyBib3RoIGluIEhUTUwgYW5kIFNWRy5cbi8vIFRoZSBhdHRyaWJ1dGUgbmFtZSBpcyBjYXNlLXNlbnNpdGl2ZSBpbiBTVkcgc28gd2UgY2FuJ3QganVzdCB1c2Vcbi8vIHRoZSBSZWFjdCBuYW1lIGxpa2Ugd2UgZG8gZm9yIGF0dHJpYnV0ZXMgdGhhdCBleGlzdCBvbmx5IGluIEhUTUwuXG5cblsndGFiSW5kZXgnLCAnY3Jvc3NPcmlnaW4nXS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGVOYW1lKSB7XG4gIHByb3BlcnRpZXNbYXR0cmlidXRlTmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKGF0dHJpYnV0ZU5hbWUsIFNUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBhdHRyaWJ1dGVOYW1lLnRvTG93ZXJDYXNlKCksIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXR0cmlidXRlcyBhY2NlcHQgVVJMcy4gVGhlc2UgbXVzdCBub3QgYWxsb3cgamF2YXNjcmlwdDogVVJMUy5cbi8vIFRoZXNlIHdpbGwgYWxzbyBuZWVkIHRvIGFjY2VwdCBUcnVzdGVkIFR5cGVzIG9iamVjdCBpbiB0aGUgZnV0dXJlLlxuXG52YXIgeGxpbmtIcmVmID0gJ3hsaW5rSHJlZic7XG5wcm9wZXJ0aWVzW3hsaW5rSHJlZl0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKCd4bGlua0hyZWYnLCBTVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbid4bGluazpocmVmJywgJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCB0cnVlLCAvLyBzYW5pdGl6ZVVSTFxuZmFsc2UpO1xuWydzcmMnLCAnaHJlZicsICdhY3Rpb24nLCAnZm9ybUFjdGlvbiddLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZU5hbWUpIHtcbiAgcHJvcGVydGllc1thdHRyaWJ1dGVOYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQoYXR0cmlidXRlTmFtZSwgU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIGF0dHJpYnV0ZU5hbWUudG9Mb3dlckNhc2UoKSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgdHJ1ZSwgLy8gc2FuaXRpemVVUkxcbiAgdHJ1ZSk7XG59KTtcblxuLy8gYW5kIGFueSBuZXdsaW5lIG9yIHRhYiBhcmUgZmlsdGVyZWQgb3V0IGFzIGlmIHRoZXkncmUgbm90IHBhcnQgb2YgdGhlIFVSTC5cbi8vIGh0dHBzOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsLXBhcnNpbmdcbi8vIFRhYiBvciBuZXdsaW5lIGFyZSBkZWZpbmVkIGFzIFxcclxcblxcdDpcbi8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNhc2NpaS10YWItb3ItbmV3bGluZVxuLy8gQSBDMCBjb250cm9sIGlzIGEgY29kZSBwb2ludCBpbiB0aGUgcmFuZ2UgXFx1MDAwMCBOVUxMIHRvIFxcdTAwMUZcbi8vIElORk9STUFUSU9OIFNFUEFSQVRPUiBPTkUsIGluY2x1c2l2ZTpcbi8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNjMC1jb250cm9sLW9yLXNwYWNlXG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblxudmFyIGlzSmF2YVNjcmlwdFByb3RvY29sID0gL15bXFx1MDAwMC1cXHUwMDFGIF0qaltcXHJcXG5cXHRdKmFbXFxyXFxuXFx0XSp2W1xcclxcblxcdF0qYVtcXHJcXG5cXHRdKnNbXFxyXFxuXFx0XSpjW1xcclxcblxcdF0qcltcXHJcXG5cXHRdKmlbXFxyXFxuXFx0XSpwW1xcclxcblxcdF0qdFtcXHJcXG5cXHRdKlxcOi9pO1xudmFyIGRpZFdhcm4gPSBmYWxzZTtcblxuZnVuY3Rpb24gc2FuaXRpemVVUkwodXJsKSB7XG4gIHtcbiAgICBpZiAoIWRpZFdhcm4gJiYgaXNKYXZhU2NyaXB0UHJvdG9jb2wudGVzdCh1cmwpKSB7XG4gICAgICBkaWRXYXJuID0gdHJ1ZTtcblxuICAgICAgZXJyb3IoJ0EgZnV0dXJlIHZlcnNpb24gb2YgUmVhY3Qgd2lsbCBibG9jayBqYXZhc2NyaXB0OiBVUkxzIGFzIGEgc2VjdXJpdHkgcHJlY2F1dGlvbi4gJyArICdVc2UgZXZlbnQgaGFuZGxlcnMgaW5zdGVhZCBpZiB5b3UgY2FuLiBJZiB5b3UgbmVlZCB0byBnZW5lcmF0ZSB1bnNhZmUgSFRNTCB0cnkgJyArICd1c2luZyBkYW5nZXJvdXNseVNldElubmVySFRNTCBpbnN0ZWFkLiBSZWFjdCB3YXMgcGFzc2VkICVzLicsIEpTT04uc3RyaW5naWZ5KHVybCkpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBjb2RlIGNvcGllZCBhbmQgbW9kaWZpZWQgZnJvbSBlc2NhcGUtaHRtbFxuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgbWF0Y2hIdG1sUmVnRXhwID0gL1tcIicmPD5dLztcbi8qKlxuICogRXNjYXBlcyBzcGVjaWFsIGNoYXJhY3RlcnMgYW5kIEhUTUwgZW50aXRpZXMgaW4gYSBnaXZlbiBodG1sIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0cmluZyBIVE1MIHN0cmluZyB0byBlc2NhcGUgZm9yIGxhdGVyIGluc2VydGlvblxuICogQHJldHVybiB7c3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVzY2FwZUh0bWwoc3RyaW5nKSB7XG4gIHZhciBzdHIgPSAnJyArIHN0cmluZztcbiAgdmFyIG1hdGNoID0gbWF0Y2hIdG1sUmVnRXhwLmV4ZWMoc3RyKTtcblxuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuXG4gIHZhciBlc2NhcGU7XG4gIHZhciBodG1sID0gJyc7XG4gIHZhciBpbmRleDtcbiAgdmFyIGxhc3RJbmRleCA9IDA7XG5cbiAgZm9yIChpbmRleCA9IG1hdGNoLmluZGV4OyBpbmRleCA8IHN0ci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBzd2l0Y2ggKHN0ci5jaGFyQ29kZUF0KGluZGV4KSkge1xuICAgICAgY2FzZSAzNDpcbiAgICAgICAgLy8gXCJcbiAgICAgICAgZXNjYXBlID0gJyZxdW90Oyc7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDM4OlxuICAgICAgICAvLyAmXG4gICAgICAgIGVzY2FwZSA9ICcmYW1wOyc7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDM5OlxuICAgICAgICAvLyAnXG4gICAgICAgIGVzY2FwZSA9ICcmI3gyNzsnOyAvLyBtb2RpZmllZCBmcm9tIGVzY2FwZS1odG1sOyB1c2VkIHRvIGJlICcmIzM5J1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDYwOlxuICAgICAgICAvLyA8XG4gICAgICAgIGVzY2FwZSA9ICcmbHQ7JztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgNjI6XG4gICAgICAgIC8vID5cbiAgICAgICAgZXNjYXBlID0gJyZndDsnO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgIGh0bWwgKz0gc3RyLnN1YnN0cmluZyhsYXN0SW5kZXgsIGluZGV4KTtcbiAgICB9XG5cbiAgICBsYXN0SW5kZXggPSBpbmRleCArIDE7XG4gICAgaHRtbCArPSBlc2NhcGU7XG4gIH1cblxuICByZXR1cm4gbGFzdEluZGV4ICE9PSBpbmRleCA/IGh0bWwgKyBzdHIuc3Vic3RyaW5nKGxhc3RJbmRleCwgaW5kZXgpIDogaHRtbDtcbn0gLy8gZW5kIGNvZGUgY29waWVkIGFuZCBtb2RpZmllZCBmcm9tIGVzY2FwZS1odG1sXG5cbi8qKlxuICogRXNjYXBlcyB0ZXh0IHRvIHByZXZlbnQgc2NyaXB0aW5nIGF0dGFja3MuXG4gKlxuICogQHBhcmFtIHsqfSB0ZXh0IFRleHQgdmFsdWUgdG8gZXNjYXBlLlxuICogQHJldHVybiB7c3RyaW5nfSBBbiBlc2NhcGVkIHN0cmluZy5cbiAqL1xuXG5cbmZ1bmN0aW9uIGVzY2FwZVRleHRGb3JCcm93c2VyKHRleHQpIHtcbiAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnYm9vbGVhbicgfHwgdHlwZW9mIHRleHQgPT09ICdudW1iZXInKSB7XG4gICAgLy8gdGhpcyBzaG9ydGNpcmN1aXQgaGVscHMgcGVyZiBmb3IgdHlwZXMgdGhhdCB3ZSBrbm93IHdpbGwgbmV2ZXIgaGF2ZVxuICAgIC8vIHNwZWNpYWwgY2hhcmFjdGVycywgZXNwZWNpYWxseSBnaXZlbiB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgdXNlZCBvZnRlblxuICAgIC8vIGZvciBudW1lcmljIGRvbSBpZHMuXG4gICAgcmV0dXJuICcnICsgdGV4dDtcbiAgfVxuXG4gIHJldHVybiBlc2NhcGVIdG1sKHRleHQpO1xufVxuXG4vKipcbiAqIEVzY2FwZXMgYXR0cmlidXRlIHZhbHVlIHRvIHByZXZlbnQgc2NyaXB0aW5nIGF0dGFja3MuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBWYWx1ZSB0byBlc2NhcGUuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IEFuIGVzY2FwZWQgc3RyaW5nLlxuICovXG5cbmZ1bmN0aW9uIHF1b3RlQXR0cmlidXRlVmFsdWVGb3JCcm93c2VyKHZhbHVlKSB7XG4gIHJldHVybiAnXCInICsgZXNjYXBlVGV4dEZvckJyb3dzZXIodmFsdWUpICsgJ1wiJztcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFya3VwRm9yUm9vdCgpIHtcbiAgcmV0dXJuIFJPT1RfQVRUUklCVVRFX05BTUUgKyAnPVwiXCInO1xufVxuLyoqXG4gKiBDcmVhdGVzIG1hcmt1cCBmb3IgYSBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybiB7P3N0cmluZ30gTWFya3VwIHN0cmluZywgb3IgbnVsbCBpZiB0aGUgcHJvcGVydHkgd2FzIGludmFsaWQuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlTWFya3VwRm9yUHJvcGVydHkobmFtZSwgdmFsdWUpIHtcbiAgdmFyIHByb3BlcnR5SW5mbyA9IGdldFByb3BlcnR5SW5mbyhuYW1lKTtcblxuICBpZiAobmFtZSAhPT0gJ3N0eWxlJyAmJiBzaG91bGRJZ25vcmVBdHRyaWJ1dGUobmFtZSwgcHJvcGVydHlJbmZvLCBmYWxzZSkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAoc2hvdWxkUmVtb3ZlQXR0cmlidXRlKG5hbWUsIHZhbHVlLCBwcm9wZXJ0eUluZm8sIGZhbHNlKSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmIChwcm9wZXJ0eUluZm8gIT09IG51bGwpIHtcbiAgICB2YXIgYXR0cmlidXRlTmFtZSA9IHByb3BlcnR5SW5mby5hdHRyaWJ1dGVOYW1lO1xuICAgIHZhciB0eXBlID0gcHJvcGVydHlJbmZvLnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gQk9PTEVBTiB8fCB0eXBlID09PSBPVkVSTE9BREVEX0JPT0xFQU4gJiYgdmFsdWUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lICsgJz1cIlwiJztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByb3BlcnR5SW5mby5zYW5pdGl6ZVVSTCkge1xuICAgICAgICB2YWx1ZSA9ICcnICsgdmFsdWU7XG4gICAgICAgIHNhbml0aXplVVJMKHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGF0dHJpYnV0ZU5hbWUgKyAnPScgKyBxdW90ZUF0dHJpYnV0ZVZhbHVlRm9yQnJvd3Nlcih2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzQXR0cmlidXRlTmFtZVNhZmUobmFtZSkpIHtcbiAgICByZXR1cm4gbmFtZSArICc9JyArIHF1b3RlQXR0cmlidXRlVmFsdWVGb3JCcm93c2VyKHZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogQ3JlYXRlcyBtYXJrdXAgZm9yIGEgY3VzdG9tIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmd9IE1hcmt1cCBzdHJpbmcsIG9yIGVtcHR5IHN0cmluZyBpZiB0aGUgcHJvcGVydHkgd2FzIGludmFsaWQuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlTWFya3VwRm9yQ3VzdG9tQXR0cmlidXRlKG5hbWUsIHZhbHVlKSB7XG4gIGlmICghaXNBdHRyaWJ1dGVOYW1lU2FmZShuYW1lKSB8fCB2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcmV0dXJuIG5hbWUgKyAnPScgKyBxdW90ZUF0dHJpYnV0ZVZhbHVlRm9yQnJvd3Nlcih2YWx1ZSk7XG59XG5cbi8qKlxuICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gKi9cbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgcmV0dXJuIHggPT09IHkgJiYgKHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5KSB8fCB4ICE9PSB4ICYmIHkgIT09IHkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgO1xufVxuXG52YXIgb2JqZWN0SXMgPSB0eXBlb2YgT2JqZWN0LmlzID09PSAnZnVuY3Rpb24nID8gT2JqZWN0LmlzIDogaXM7XG5cbnZhciBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQgPSBudWxsO1xudmFyIGZpcnN0V29ya0luUHJvZ3Jlc3NIb29rID0gbnVsbDtcbnZhciB3b3JrSW5Qcm9ncmVzc0hvb2sgPSBudWxsOyAvLyBXaGV0aGVyIHRoZSB3b3JrLWluLXByb2dyZXNzIGhvb2sgaXMgYSByZS1yZW5kZXJlZCBob29rXG5cbnZhciBpc1JlUmVuZGVyID0gZmFsc2U7IC8vIFdoZXRoZXIgYW4gdXBkYXRlIHdhcyBzY2hlZHVsZWQgZHVyaW5nIHRoZSBjdXJyZW50bHkgZXhlY3V0aW5nIHJlbmRlciBwYXNzLlxuXG52YXIgZGlkU2NoZWR1bGVSZW5kZXJQaGFzZVVwZGF0ZSA9IGZhbHNlOyAvLyBMYXppbHkgY3JlYXRlZCBtYXAgb2YgcmVuZGVyLXBoYXNlIHVwZGF0ZXNcblxudmFyIHJlbmRlclBoYXNlVXBkYXRlcyA9IG51bGw7IC8vIENvdW50ZXIgdG8gcHJldmVudCBpbmZpbml0ZSBsb29wcy5cblxudmFyIG51bWJlck9mUmVSZW5kZXJzID0gMDtcbnZhciBSRV9SRU5ERVJfTElNSVQgPSAyNTtcbnZhciBpc0luSG9va1VzZXJDb2RlSW5EZXYgPSBmYWxzZTsgLy8gSW4gREVWLCB0aGlzIGlzIHRoZSBuYW1lIG9mIHRoZSBjdXJyZW50bHkgZXhlY3V0aW5nIHByaW1pdGl2ZSBob29rXG5cbnZhciBjdXJyZW50SG9va05hbWVJbkRldjtcblxuZnVuY3Rpb24gcmVzb2x2ZUN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCgpIHtcbiAgaWYgKCEoY3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50ICE9PSBudWxsKSkge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIkludmFsaWQgaG9vayBjYWxsLiBIb29rcyBjYW4gb25seSBiZSBjYWxsZWQgaW5zaWRlIG9mIHRoZSBib2R5IG9mIGEgZnVuY3Rpb24gY29tcG9uZW50LiBUaGlzIGNvdWxkIGhhcHBlbiBmb3Igb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4xLiBZb3UgbWlnaHQgaGF2ZSBtaXNtYXRjaGluZyB2ZXJzaW9ucyBvZiBSZWFjdCBhbmQgdGhlIHJlbmRlcmVyIChzdWNoIGFzIFJlYWN0IERPTSlcXG4yLiBZb3UgbWlnaHQgYmUgYnJlYWtpbmcgdGhlIFJ1bGVzIG9mIEhvb2tzXFxuMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcblNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiICk7XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmIChpc0luSG9va1VzZXJDb2RlSW5EZXYpIHtcbiAgICAgIGVycm9yKCdEbyBub3QgY2FsbCBIb29rcyBpbnNpZGUgdXNlRWZmZWN0KC4uLiksIHVzZU1lbW8oLi4uKSwgb3Igb3RoZXIgYnVpbHQtaW4gSG9va3MuICcgKyAnWW91IGNhbiBvbmx5IGNhbGwgSG9va3MgYXQgdGhlIHRvcCBsZXZlbCBvZiB5b3VyIFJlYWN0IGZ1bmN0aW9uLiAnICsgJ0ZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvcnVsZXMtb2YtaG9va3MnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBhcmVIb29rSW5wdXRzRXF1YWwobmV4dERlcHMsIHByZXZEZXBzKSB7XG4gIGlmIChwcmV2RGVwcyA9PT0gbnVsbCkge1xuICAgIHtcbiAgICAgIGVycm9yKCclcyByZWNlaXZlZCBhIGZpbmFsIGFyZ3VtZW50IGR1cmluZyB0aGlzIHJlbmRlciwgYnV0IG5vdCBkdXJpbmcgJyArICd0aGUgcHJldmlvdXMgcmVuZGVyLiBFdmVuIHRob3VnaCB0aGUgZmluYWwgYXJndW1lbnQgaXMgb3B0aW9uYWwsICcgKyAnaXRzIHR5cGUgY2Fubm90IGNoYW5nZSBiZXR3ZWVuIHJlbmRlcnMuJywgY3VycmVudEhvb2tOYW1lSW5EZXYpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHtcbiAgICAvLyBEb24ndCBib3RoZXIgY29tcGFyaW5nIGxlbmd0aHMgaW4gcHJvZCBiZWNhdXNlIHRoZXNlIGFycmF5cyBzaG91bGQgYmVcbiAgICAvLyBwYXNzZWQgaW5saW5lLlxuICAgIGlmIChuZXh0RGVwcy5sZW5ndGggIT09IHByZXZEZXBzLmxlbmd0aCkge1xuICAgICAgZXJyb3IoJ1RoZSBmaW5hbCBhcmd1bWVudCBwYXNzZWQgdG8gJXMgY2hhbmdlZCBzaXplIGJldHdlZW4gcmVuZGVycy4gVGhlICcgKyAnb3JkZXIgYW5kIHNpemUgb2YgdGhpcyBhcnJheSBtdXN0IHJlbWFpbiBjb25zdGFudC5cXG5cXG4nICsgJ1ByZXZpb3VzOiAlc1xcbicgKyAnSW5jb21pbmc6ICVzJywgY3VycmVudEhvb2tOYW1lSW5EZXYsIFwiW1wiICsgbmV4dERlcHMuam9pbignLCAnKSArIFwiXVwiLCBcIltcIiArIHByZXZEZXBzLmpvaW4oJywgJykgKyBcIl1cIik7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmV2RGVwcy5sZW5ndGggJiYgaSA8IG5leHREZXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG9iamVjdElzKG5leHREZXBzW2ldLCBwcmV2RGVwc1tpXSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb29rKCkge1xuICBpZiAobnVtYmVyT2ZSZVJlbmRlcnMgPiAwKSB7XG4gICAge1xuICAgICAge1xuICAgICAgICB0aHJvdyBFcnJvciggXCJSZW5kZXJlZCBtb3JlIGhvb2tzIHRoYW4gZHVyaW5nIHRoZSBwcmV2aW91cyByZW5kZXJcIiApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbWVtb2l6ZWRTdGF0ZTogbnVsbCxcbiAgICBxdWV1ZTogbnVsbCxcbiAgICBuZXh0OiBudWxsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdvcmtJblByb2dyZXNzSG9vaygpIHtcbiAgaWYgKHdvcmtJblByb2dyZXNzSG9vayA9PT0gbnVsbCkge1xuICAgIC8vIFRoaXMgaXMgdGhlIGZpcnN0IGhvb2sgaW4gdGhlIGxpc3RcbiAgICBpZiAoZmlyc3RXb3JrSW5Qcm9ncmVzc0hvb2sgPT09IG51bGwpIHtcbiAgICAgIGlzUmVSZW5kZXIgPSBmYWxzZTtcbiAgICAgIGZpcnN0V29ya0luUHJvZ3Jlc3NIb29rID0gd29ya0luUHJvZ3Jlc3NIb29rID0gY3JlYXRlSG9vaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGVyZSdzIGFscmVhZHkgYSB3b3JrLWluLXByb2dyZXNzLiBSZXVzZSBpdC5cbiAgICAgIGlzUmVSZW5kZXIgPSB0cnVlO1xuICAgICAgd29ya0luUHJvZ3Jlc3NIb29rID0gZmlyc3RXb3JrSW5Qcm9ncmVzc0hvb2s7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICh3b3JrSW5Qcm9ncmVzc0hvb2submV4dCA9PT0gbnVsbCkge1xuICAgICAgaXNSZVJlbmRlciA9IGZhbHNlOyAvLyBBcHBlbmQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdFxuXG4gICAgICB3b3JrSW5Qcm9ncmVzc0hvb2sgPSB3b3JrSW5Qcm9ncmVzc0hvb2submV4dCA9IGNyZWF0ZUhvb2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhlcmUncyBhbHJlYWR5IGEgd29yay1pbi1wcm9ncmVzcy4gUmV1c2UgaXQuXG4gICAgICBpc1JlUmVuZGVyID0gdHJ1ZTtcbiAgICAgIHdvcmtJblByb2dyZXNzSG9vayA9IHdvcmtJblByb2dyZXNzSG9vay5uZXh0O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB3b3JrSW5Qcm9ncmVzc0hvb2s7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVUb1VzZUhvb2tzKGNvbXBvbmVudElkZW50aXR5KSB7XG4gIGN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCA9IGNvbXBvbmVudElkZW50aXR5O1xuXG4gIHtcbiAgICBpc0luSG9va1VzZXJDb2RlSW5EZXYgPSBmYWxzZTtcbiAgfSAvLyBUaGUgZm9sbG93aW5nIHNob3VsZCBoYXZlIGFscmVhZHkgYmVlbiByZXNldFxuICAvLyBkaWRTY2hlZHVsZVJlbmRlclBoYXNlVXBkYXRlID0gZmFsc2U7XG4gIC8vIGZpcnN0V29ya0luUHJvZ3Jlc3NIb29rID0gbnVsbDtcbiAgLy8gbnVtYmVyT2ZSZVJlbmRlcnMgPSAwO1xuICAvLyByZW5kZXJQaGFzZVVwZGF0ZXMgPSBudWxsO1xuICAvLyB3b3JrSW5Qcm9ncmVzc0hvb2sgPSBudWxsO1xuXG59XG5mdW5jdGlvbiBmaW5pc2hIb29rcyhDb21wb25lbnQsIHByb3BzLCBjaGlsZHJlbiwgcmVmT3JDb250ZXh0KSB7XG4gIC8vIFRoaXMgbXVzdCBiZSBjYWxsZWQgYWZ0ZXIgZXZlcnkgZnVuY3Rpb24gY29tcG9uZW50IHRvIHByZXZlbnQgaG9va3MgZnJvbVxuICAvLyBiZWluZyB1c2VkIGluIGNsYXNzZXMuXG4gIHdoaWxlIChkaWRTY2hlZHVsZVJlbmRlclBoYXNlVXBkYXRlKSB7XG4gICAgLy8gVXBkYXRlcyB3ZXJlIHNjaGVkdWxlZCBkdXJpbmcgdGhlIHJlbmRlciBwaGFzZS4gVGhleSBhcmUgc3RvcmVkIGluXG4gICAgLy8gdGhlIGByZW5kZXJQaGFzZVVwZGF0ZXNgIG1hcC4gQ2FsbCB0aGUgY29tcG9uZW50IGFnYWluLCByZXVzaW5nIHRoZVxuICAgIC8vIHdvcmstaW4tcHJvZ3Jlc3MgaG9va3MgYW5kIGFwcGx5aW5nIHRoZSBhZGRpdGlvbmFsIHVwZGF0ZXMgb24gdG9wLiBLZWVwXG4gICAgLy8gcmVzdGFydGluZyB1bnRpbCBubyBtb3JlIHVwZGF0ZXMgYXJlIHNjaGVkdWxlZC5cbiAgICBkaWRTY2hlZHVsZVJlbmRlclBoYXNlVXBkYXRlID0gZmFsc2U7XG4gICAgbnVtYmVyT2ZSZVJlbmRlcnMgKz0gMTsgLy8gU3RhcnQgb3ZlciBmcm9tIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpc3RcblxuICAgIHdvcmtJblByb2dyZXNzSG9vayA9IG51bGw7XG4gICAgY2hpbGRyZW4gPSBDb21wb25lbnQocHJvcHMsIHJlZk9yQ29udGV4dCk7XG4gIH1cblxuICByZXNldEhvb2tzU3RhdGUoKTtcbiAgcmV0dXJuIGNoaWxkcmVuO1xufSAvLyBSZXNldCB0aGUgaW50ZXJuYWwgaG9va3Mgc3RhdGUgaWYgYW4gZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyBhIGNvbXBvbmVudFxuXG5mdW5jdGlvbiByZXNldEhvb2tzU3RhdGUoKSB7XG4gIHtcbiAgICBpc0luSG9va1VzZXJDb2RlSW5EZXYgPSBmYWxzZTtcbiAgfVxuXG4gIGN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCA9IG51bGw7XG4gIGRpZFNjaGVkdWxlUmVuZGVyUGhhc2VVcGRhdGUgPSBmYWxzZTtcbiAgZmlyc3RXb3JrSW5Qcm9ncmVzc0hvb2sgPSBudWxsO1xuICBudW1iZXJPZlJlUmVuZGVycyA9IDA7XG4gIHJlbmRlclBoYXNlVXBkYXRlcyA9IG51bGw7XG4gIHdvcmtJblByb2dyZXNzSG9vayA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIHJlYWRDb250ZXh0KGNvbnRleHQsIG9ic2VydmVkQml0cykge1xuICB2YXIgdGhyZWFkSUQgPSBjdXJyZW50UGFydGlhbFJlbmRlcmVyLnRocmVhZElEO1xuICB2YWxpZGF0ZUNvbnRleHRCb3VuZHMoY29udGV4dCwgdGhyZWFkSUQpO1xuXG4gIHtcbiAgICBpZiAoaXNJbkhvb2tVc2VyQ29kZUluRGV2KSB7XG4gICAgICBlcnJvcignQ29udGV4dCBjYW4gb25seSBiZSByZWFkIHdoaWxlIFJlYWN0IGlzIHJlbmRlcmluZy4gJyArICdJbiBjbGFzc2VzLCB5b3UgY2FuIHJlYWQgaXQgaW4gdGhlIHJlbmRlciBtZXRob2Qgb3IgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLiAnICsgJ0luIGZ1bmN0aW9uIGNvbXBvbmVudHMsIHlvdSBjYW4gcmVhZCBpdCBkaXJlY3RseSBpbiB0aGUgZnVuY3Rpb24gYm9keSwgYnV0IG5vdCAnICsgJ2luc2lkZSBIb29rcyBsaWtlIHVzZVJlZHVjZXIoKSBvciB1c2VNZW1vKCkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbnRleHRbdGhyZWFkSURdO1xufVxuXG5mdW5jdGlvbiB1c2VDb250ZXh0KGNvbnRleHQsIG9ic2VydmVkQml0cykge1xuICB7XG4gICAgY3VycmVudEhvb2tOYW1lSW5EZXYgPSAndXNlQ29udGV4dCc7XG4gIH1cblxuICByZXNvbHZlQ3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50KCk7XG4gIHZhciB0aHJlYWRJRCA9IGN1cnJlbnRQYXJ0aWFsUmVuZGVyZXIudGhyZWFkSUQ7XG4gIHZhbGlkYXRlQ29udGV4dEJvdW5kcyhjb250ZXh0LCB0aHJlYWRJRCk7XG4gIHJldHVybiBjb250ZXh0W3RocmVhZElEXTtcbn1cblxuZnVuY3Rpb24gYmFzaWNTdGF0ZVJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xuICAvLyAkRmxvd0ZpeE1lOiBGbG93IGRvZXNuJ3QgbGlrZSBtaXhlZCB0eXBlc1xuICByZXR1cm4gdHlwZW9mIGFjdGlvbiA9PT0gJ2Z1bmN0aW9uJyA/IGFjdGlvbihzdGF0ZSkgOiBhY3Rpb247XG59XG5cbmZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICB7XG4gICAgY3VycmVudEhvb2tOYW1lSW5EZXYgPSAndXNlU3RhdGUnO1xuICB9XG5cbiAgcmV0dXJuIHVzZVJlZHVjZXIoYmFzaWNTdGF0ZVJlZHVjZXIsIC8vIHVzZVJlZHVjZXIgaGFzIGEgc3BlY2lhbCBjYXNlIHRvIHN1cHBvcnQgbGF6eSB1c2VTdGF0ZSBpbml0aWFsaXplcnNcbiAgaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB7XG4gICAgaWYgKHJlZHVjZXIgIT09IGJhc2ljU3RhdGVSZWR1Y2VyKSB7XG4gICAgICBjdXJyZW50SG9va05hbWVJbkRldiA9ICd1c2VSZWR1Y2VyJztcbiAgICB9XG4gIH1cblxuICBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQgPSByZXNvbHZlQ3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50KCk7XG4gIHdvcmtJblByb2dyZXNzSG9vayA9IGNyZWF0ZVdvcmtJblByb2dyZXNzSG9vaygpO1xuXG4gIGlmIChpc1JlUmVuZGVyKSB7XG4gICAgLy8gVGhpcyBpcyBhIHJlLXJlbmRlci4gQXBwbHkgdGhlIG5ldyByZW5kZXIgcGhhc2UgdXBkYXRlcyB0byB0aGUgcHJldmlvdXNcbiAgICAvLyBjdXJyZW50IGhvb2suXG4gICAgdmFyIHF1ZXVlID0gd29ya0luUHJvZ3Jlc3NIb29rLnF1ZXVlO1xuICAgIHZhciBkaXNwYXRjaCA9IHF1ZXVlLmRpc3BhdGNoO1xuXG4gICAgaWYgKHJlbmRlclBoYXNlVXBkYXRlcyAhPT0gbnVsbCkge1xuICAgICAgLy8gUmVuZGVyIHBoYXNlIHVwZGF0ZXMgYXJlIHN0b3JlZCBpbiBhIG1hcCBvZiBxdWV1ZSAtPiBsaW5rZWQgbGlzdFxuICAgICAgdmFyIGZpcnN0UmVuZGVyUGhhc2VVcGRhdGUgPSByZW5kZXJQaGFzZVVwZGF0ZXMuZ2V0KHF1ZXVlKTtcblxuICAgICAgaWYgKGZpcnN0UmVuZGVyUGhhc2VVcGRhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZW5kZXJQaGFzZVVwZGF0ZXMuZGVsZXRlKHF1ZXVlKTtcbiAgICAgICAgdmFyIG5ld1N0YXRlID0gd29ya0luUHJvZ3Jlc3NIb29rLm1lbW9pemVkU3RhdGU7XG4gICAgICAgIHZhciB1cGRhdGUgPSBmaXJzdFJlbmRlclBoYXNlVXBkYXRlO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAvLyBQcm9jZXNzIHRoaXMgcmVuZGVyIHBoYXNlIHVwZGF0ZS4gV2UgZG9uJ3QgaGF2ZSB0byBjaGVjayB0aGVcbiAgICAgICAgICAvLyBwcmlvcml0eSBiZWNhdXNlIGl0IHdpbGwgYWx3YXlzIGJlIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50XG4gICAgICAgICAgLy8gcmVuZGVyJ3MuXG4gICAgICAgICAgdmFyIGFjdGlvbiA9IHVwZGF0ZS5hY3Rpb247XG5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBpc0luSG9va1VzZXJDb2RlSW5EZXYgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIG5ld1N0YXRlID0gcmVkdWNlcihuZXdTdGF0ZSwgYWN0aW9uKTtcblxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVwZGF0ZSA9IHVwZGF0ZS5uZXh0O1xuICAgICAgICB9IHdoaWxlICh1cGRhdGUgIT09IG51bGwpO1xuXG4gICAgICAgIHdvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgIHJldHVybiBbbmV3U3RhdGUsIGRpc3BhdGNoXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW3dvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlLCBkaXNwYXRjaF07XG4gIH0gZWxzZSB7XG4gICAge1xuICAgICAgaXNJbkhvb2tVc2VyQ29kZUluRGV2ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgaW5pdGlhbFN0YXRlO1xuXG4gICAgaWYgKHJlZHVjZXIgPT09IGJhc2ljU3RhdGVSZWR1Y2VyKSB7XG4gICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIGB1c2VTdGF0ZWAuXG4gICAgICBpbml0aWFsU3RhdGUgPSB0eXBlb2YgaW5pdGlhbEFyZyA9PT0gJ2Z1bmN0aW9uJyA/IGluaXRpYWxBcmcoKSA6IGluaXRpYWxBcmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluaXRpYWxTdGF0ZSA9IGluaXQgIT09IHVuZGVmaW5lZCA/IGluaXQoaW5pdGlhbEFyZykgOiBpbml0aWFsQXJnO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IGZhbHNlO1xuICAgIH1cblxuICAgIHdvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlID0gaW5pdGlhbFN0YXRlO1xuXG4gICAgdmFyIF9xdWV1ZSA9IHdvcmtJblByb2dyZXNzSG9vay5xdWV1ZSA9IHtcbiAgICAgIGxhc3Q6IG51bGwsXG4gICAgICBkaXNwYXRjaDogbnVsbFxuICAgIH07XG5cbiAgICB2YXIgX2Rpc3BhdGNoID0gX3F1ZXVlLmRpc3BhdGNoID0gZGlzcGF0Y2hBY3Rpb24uYmluZChudWxsLCBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQsIF9xdWV1ZSk7XG5cbiAgICByZXR1cm4gW3dvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlLCBfZGlzcGF0Y2hdO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVzZU1lbW8obmV4dENyZWF0ZSwgZGVwcykge1xuICBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQgPSByZXNvbHZlQ3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50KCk7XG4gIHdvcmtJblByb2dyZXNzSG9vayA9IGNyZWF0ZVdvcmtJblByb2dyZXNzSG9vaygpO1xuICB2YXIgbmV4dERlcHMgPSBkZXBzID09PSB1bmRlZmluZWQgPyBudWxsIDogZGVwcztcblxuICBpZiAod29ya0luUHJvZ3Jlc3NIb29rICE9PSBudWxsKSB7XG4gICAgdmFyIHByZXZTdGF0ZSA9IHdvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlO1xuXG4gICAgaWYgKHByZXZTdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKG5leHREZXBzICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBwcmV2RGVwcyA9IHByZXZTdGF0ZVsxXTtcblxuICAgICAgICBpZiAoYXJlSG9va0lucHV0c0VxdWFsKG5leHREZXBzLCBwcmV2RGVwcykpIHtcbiAgICAgICAgICByZXR1cm4gcHJldlN0YXRlWzBdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IHRydWU7XG4gIH1cblxuICB2YXIgbmV4dFZhbHVlID0gbmV4dENyZWF0ZSgpO1xuXG4gIHtcbiAgICBpc0luSG9va1VzZXJDb2RlSW5EZXYgPSBmYWxzZTtcbiAgfVxuXG4gIHdvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlID0gW25leHRWYWx1ZSwgbmV4dERlcHNdO1xuICByZXR1cm4gbmV4dFZhbHVlO1xufVxuXG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIGN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCA9IHJlc29sdmVDdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQoKTtcbiAgd29ya0luUHJvZ3Jlc3NIb29rID0gY3JlYXRlV29ya0luUHJvZ3Jlc3NIb29rKCk7XG4gIHZhciBwcmV2aW91c1JlZiA9IHdvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlO1xuXG4gIGlmIChwcmV2aW91c1JlZiA9PT0gbnVsbCkge1xuICAgIHZhciByZWYgPSB7XG4gICAgICBjdXJyZW50OiBpbml0aWFsVmFsdWVcbiAgICB9O1xuXG4gICAge1xuICAgICAgT2JqZWN0LnNlYWwocmVmKTtcbiAgICB9XG5cbiAgICB3b3JrSW5Qcm9ncmVzc0hvb2subWVtb2l6ZWRTdGF0ZSA9IHJlZjtcbiAgICByZXR1cm4gcmVmO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwcmV2aW91c1JlZjtcbiAgfVxufVxuXG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBpbnB1dHMpIHtcbiAge1xuICAgIGN1cnJlbnRIb29rTmFtZUluRGV2ID0gJ3VzZUxheW91dEVmZmVjdCc7XG5cbiAgICBlcnJvcigndXNlTGF5b3V0RWZmZWN0IGRvZXMgbm90aGluZyBvbiB0aGUgc2VydmVyLCBiZWNhdXNlIGl0cyBlZmZlY3QgY2Fubm90ICcgKyBcImJlIGVuY29kZWQgaW50byB0aGUgc2VydmVyIHJlbmRlcmVyJ3Mgb3V0cHV0IGZvcm1hdC4gVGhpcyB3aWxsIGxlYWQgXCIgKyAndG8gYSBtaXNtYXRjaCBiZXR3ZWVuIHRoZSBpbml0aWFsLCBub24taHlkcmF0ZWQgVUkgYW5kIHRoZSBpbnRlbmRlZCAnICsgJ1VJLiBUbyBhdm9pZCB0aGlzLCB1c2VMYXlvdXRFZmZlY3Qgc2hvdWxkIG9ubHkgYmUgdXNlZCBpbiAnICsgJ2NvbXBvbmVudHMgdGhhdCByZW5kZXIgZXhjbHVzaXZlbHkgb24gdGhlIGNsaWVudC4gJyArICdTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3VzZWxheW91dGVmZmVjdC1zc3IgZm9yIGNvbW1vbiBmaXhlcy4nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwYXRjaEFjdGlvbihjb21wb25lbnRJZGVudGl0eSwgcXVldWUsIGFjdGlvbikge1xuICBpZiAoIShudW1iZXJPZlJlUmVuZGVycyA8IFJFX1JFTkRFUl9MSU1JVCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJUb28gbWFueSByZS1yZW5kZXJzLiBSZWFjdCBsaW1pdHMgdGhlIG51bWJlciBvZiByZW5kZXJzIHRvIHByZXZlbnQgYW4gaW5maW5pdGUgbG9vcC5cIiApO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjb21wb25lbnRJZGVudGl0eSA9PT0gY3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50KSB7XG4gICAgLy8gVGhpcyBpcyBhIHJlbmRlciBwaGFzZSB1cGRhdGUuIFN0YXNoIGl0IGluIGEgbGF6aWx5LWNyZWF0ZWQgbWFwIG9mXG4gICAgLy8gcXVldWUgLT4gbGlua2VkIGxpc3Qgb2YgdXBkYXRlcy4gQWZ0ZXIgdGhpcyByZW5kZXIgcGFzcywgd2UnbGwgcmVzdGFydFxuICAgIC8vIGFuZCBhcHBseSB0aGUgc3Rhc2hlZCB1cGRhdGVzIG9uIHRvcCBvZiB0aGUgd29yay1pbi1wcm9ncmVzcyBob29rLlxuICAgIGRpZFNjaGVkdWxlUmVuZGVyUGhhc2VVcGRhdGUgPSB0cnVlO1xuICAgIHZhciB1cGRhdGUgPSB7XG4gICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgIG5leHQ6IG51bGxcbiAgICB9O1xuXG4gICAgaWYgKHJlbmRlclBoYXNlVXBkYXRlcyA9PT0gbnVsbCkge1xuICAgICAgcmVuZGVyUGhhc2VVcGRhdGVzID0gbmV3IE1hcCgpO1xuICAgIH1cblxuICAgIHZhciBmaXJzdFJlbmRlclBoYXNlVXBkYXRlID0gcmVuZGVyUGhhc2VVcGRhdGVzLmdldChxdWV1ZSk7XG5cbiAgICBpZiAoZmlyc3RSZW5kZXJQaGFzZVVwZGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZW5kZXJQaGFzZVVwZGF0ZXMuc2V0KHF1ZXVlLCB1cGRhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBcHBlbmQgdGhlIHVwZGF0ZSB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxuICAgICAgdmFyIGxhc3RSZW5kZXJQaGFzZVVwZGF0ZSA9IGZpcnN0UmVuZGVyUGhhc2VVcGRhdGU7XG5cbiAgICAgIHdoaWxlIChsYXN0UmVuZGVyUGhhc2VVcGRhdGUubmV4dCAhPT0gbnVsbCkge1xuICAgICAgICBsYXN0UmVuZGVyUGhhc2VVcGRhdGUgPSBsYXN0UmVuZGVyUGhhc2VVcGRhdGUubmV4dDtcbiAgICAgIH1cblxuICAgICAgbGFzdFJlbmRlclBoYXNlVXBkYXRlLm5leHQgPSB1cGRhdGU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKSB7XG4gIHJldHVybiB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbGJhY2s7XG4gIH0sIGRlcHMpO1xufSAvLyBUT0RPIERlY2lkZSBvbiBob3cgdG8gaW1wbGVtZW50IHRoaXMgaG9vayBmb3Igc2VydmVyIHJlbmRlcmluZy5cbi8vIElmIGEgbXV0YXRpb24gb2NjdXJzIGR1cmluZyByZW5kZXIsIGNvbnNpZGVyIHRyaWdnZXJpbmcgYSBTdXNwZW5zZSBib3VuZGFyeVxuLy8gYW5kIGZhbGxpbmcgYmFjayB0byBjbGllbnQgcmVuZGVyaW5nLlxuXG5mdW5jdGlvbiB1c2VNdXRhYmxlU291cmNlKHNvdXJjZSwgZ2V0U25hcHNob3QsIHN1YnNjcmliZSkge1xuICByZXNvbHZlQ3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50KCk7XG4gIHJldHVybiBnZXRTbmFwc2hvdChzb3VyY2UuX3NvdXJjZSk7XG59XG5cbmZ1bmN0aW9uIHVzZURlZmVycmVkVmFsdWUodmFsdWUpIHtcbiAgcmVzb2x2ZUN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCgpO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHVzZVRyYW5zaXRpb24oKSB7XG4gIHJlc29sdmVDdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQoKTtcblxuICB2YXIgc3RhcnRUcmFuc2l0aW9uID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2soKTtcbiAgfTtcblxuICByZXR1cm4gW3N0YXJ0VHJhbnNpdGlvbiwgZmFsc2VdO1xufVxuXG5mdW5jdGlvbiB1c2VPcGFxdWVJZGVudGlmaWVyKCkge1xuICByZXR1cm4gKGN1cnJlbnRQYXJ0aWFsUmVuZGVyZXIuaWRlbnRpZmllclByZWZpeCB8fCAnJykgKyAnUjonICsgKGN1cnJlbnRQYXJ0aWFsUmVuZGVyZXIudW5pcXVlSUQrKykudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBub29wKCkge31cblxudmFyIGN1cnJlbnRQYXJ0aWFsUmVuZGVyZXIgPSBudWxsO1xuZnVuY3Rpb24gc2V0Q3VycmVudFBhcnRpYWxSZW5kZXJlcihyZW5kZXJlcikge1xuICBjdXJyZW50UGFydGlhbFJlbmRlcmVyID0gcmVuZGVyZXI7XG59XG52YXIgRGlzcGF0Y2hlciA9IHtcbiAgcmVhZENvbnRleHQ6IHJlYWRDb250ZXh0LFxuICB1c2VDb250ZXh0OiB1c2VDb250ZXh0LFxuICB1c2VNZW1vOiB1c2VNZW1vLFxuICB1c2VSZWR1Y2VyOiB1c2VSZWR1Y2VyLFxuICB1c2VSZWY6IHVzZVJlZixcbiAgdXNlU3RhdGU6IHVzZVN0YXRlLFxuICB1c2VMYXlvdXRFZmZlY3Q6IHVzZUxheW91dEVmZmVjdCxcbiAgdXNlQ2FsbGJhY2s6IHVzZUNhbGxiYWNrLFxuICAvLyB1c2VJbXBlcmF0aXZlSGFuZGxlIGlzIG5vdCBydW4gaW4gdGhlIHNlcnZlciBlbnZpcm9ubWVudFxuICB1c2VJbXBlcmF0aXZlSGFuZGxlOiBub29wLFxuICAvLyBFZmZlY3RzIGFyZSBub3QgcnVuIGluIHRoZSBzZXJ2ZXIgZW52aXJvbm1lbnQuXG4gIHVzZUVmZmVjdDogbm9vcCxcbiAgLy8gRGVidWdnaW5nIGVmZmVjdFxuICB1c2VEZWJ1Z1ZhbHVlOiBub29wLFxuICB1c2VEZWZlcnJlZFZhbHVlOiB1c2VEZWZlcnJlZFZhbHVlLFxuICB1c2VUcmFuc2l0aW9uOiB1c2VUcmFuc2l0aW9uLFxuICB1c2VPcGFxdWVJZGVudGlmaWVyOiB1c2VPcGFxdWVJZGVudGlmaWVyLFxuICAvLyBTdWJzY3JpcHRpb25zIGFyZSBub3Qgc2V0dXAgaW4gYSBzZXJ2ZXIgZW52aXJvbm1lbnQuXG4gIHVzZU11dGFibGVTb3VyY2U6IHVzZU11dGFibGVTb3VyY2Vcbn07XG5cbnZhciBIVE1MX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbnZhciBNQVRIX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MJztcbnZhciBTVkdfTkFNRVNQQUNFID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbnZhciBOYW1lc3BhY2VzID0ge1xuICBodG1sOiBIVE1MX05BTUVTUEFDRSxcbiAgbWF0aG1sOiBNQVRIX05BTUVTUEFDRSxcbiAgc3ZnOiBTVkdfTkFNRVNQQUNFXG59OyAvLyBBc3N1bWVzIHRoZXJlIGlzIG5vIHBhcmVudCBuYW1lc3BhY2UuXG5cbmZ1bmN0aW9uIGdldEludHJpbnNpY05hbWVzcGFjZSh0eXBlKSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3N2Zyc6XG4gICAgICByZXR1cm4gU1ZHX05BTUVTUEFDRTtcblxuICAgIGNhc2UgJ21hdGgnOlxuICAgICAgcmV0dXJuIE1BVEhfTkFNRVNQQUNFO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBIVE1MX05BTUVTUEFDRTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0Q2hpbGROYW1lc3BhY2UocGFyZW50TmFtZXNwYWNlLCB0eXBlKSB7XG4gIGlmIChwYXJlbnROYW1lc3BhY2UgPT0gbnVsbCB8fCBwYXJlbnROYW1lc3BhY2UgPT09IEhUTUxfTkFNRVNQQUNFKSB7XG4gICAgLy8gTm8gKG9yIGRlZmF1bHQpIHBhcmVudCBuYW1lc3BhY2U6IHBvdGVudGlhbCBlbnRyeSBwb2ludC5cbiAgICByZXR1cm4gZ2V0SW50cmluc2ljTmFtZXNwYWNlKHR5cGUpO1xuICB9XG5cbiAgaWYgKHBhcmVudE5hbWVzcGFjZSA9PT0gU1ZHX05BTUVTUEFDRSAmJiB0eXBlID09PSAnZm9yZWlnbk9iamVjdCcpIHtcbiAgICAvLyBXZSdyZSBsZWF2aW5nIFNWRy5cbiAgICByZXR1cm4gSFRNTF9OQU1FU1BBQ0U7XG4gIH0gLy8gQnkgZGVmYXVsdCwgcGFzcyBuYW1lc3BhY2UgYmVsb3cuXG5cblxuICByZXR1cm4gcGFyZW50TmFtZXNwYWNlO1xufVxuXG52YXIgaGFzUmVhZE9ubHlWYWx1ZSA9IHtcbiAgYnV0dG9uOiB0cnVlLFxuICBjaGVja2JveDogdHJ1ZSxcbiAgaW1hZ2U6IHRydWUsXG4gIGhpZGRlbjogdHJ1ZSxcbiAgcmFkaW86IHRydWUsXG4gIHJlc2V0OiB0cnVlLFxuICBzdWJtaXQ6IHRydWVcbn07XG5mdW5jdGlvbiBjaGVja0NvbnRyb2xsZWRWYWx1ZVByb3BzKHRhZ05hbWUsIHByb3BzKSB7XG4gIHtcbiAgICBpZiAoIShoYXNSZWFkT25seVZhbHVlW3Byb3BzLnR5cGVdIHx8IHByb3BzLm9uQ2hhbmdlIHx8IHByb3BzLm9uSW5wdXQgfHwgcHJvcHMucmVhZE9ubHkgfHwgcHJvcHMuZGlzYWJsZWQgfHwgcHJvcHMudmFsdWUgPT0gbnVsbCkpIHtcbiAgICAgIGVycm9yKCdZb3UgcHJvdmlkZWQgYSBgdmFsdWVgIHByb3AgdG8gYSBmb3JtIGZpZWxkIHdpdGhvdXQgYW4gJyArICdgb25DaGFuZ2VgIGhhbmRsZXIuIFRoaXMgd2lsbCByZW5kZXIgYSByZWFkLW9ubHkgZmllbGQuIElmICcgKyAndGhlIGZpZWxkIHNob3VsZCBiZSBtdXRhYmxlIHVzZSBgZGVmYXVsdFZhbHVlYC4gT3RoZXJ3aXNlLCAnICsgJ3NldCBlaXRoZXIgYG9uQ2hhbmdlYCBvciBgcmVhZE9ubHlgLicpO1xuICAgIH1cblxuICAgIGlmICghKHByb3BzLm9uQ2hhbmdlIHx8IHByb3BzLnJlYWRPbmx5IHx8IHByb3BzLmRpc2FibGVkIHx8IHByb3BzLmNoZWNrZWQgPT0gbnVsbCkpIHtcbiAgICAgIGVycm9yKCdZb3UgcHJvdmlkZWQgYSBgY2hlY2tlZGAgcHJvcCB0byBhIGZvcm0gZmllbGQgd2l0aG91dCBhbiAnICsgJ2BvbkNoYW5nZWAgaGFuZGxlci4gVGhpcyB3aWxsIHJlbmRlciBhIHJlYWQtb25seSBmaWVsZC4gSWYgJyArICd0aGUgZmllbGQgc2hvdWxkIGJlIG11dGFibGUgdXNlIGBkZWZhdWx0Q2hlY2tlZGAuIE90aGVyd2lzZSwgJyArICdzZXQgZWl0aGVyIGBvbkNoYW5nZWAgb3IgYHJlYWRPbmx5YC4nKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gRm9yIEhUTUwsIGNlcnRhaW4gdGFncyBzaG91bGQgb21pdCB0aGVpciBjbG9zZSB0YWcuIFdlIGtlZXAgYSBsaXN0IGZvclxuLy8gdGhvc2Ugc3BlY2lhbC1jYXNlIHRhZ3MuXG52YXIgb21pdHRlZENsb3NlVGFncyA9IHtcbiAgYXJlYTogdHJ1ZSxcbiAgYmFzZTogdHJ1ZSxcbiAgYnI6IHRydWUsXG4gIGNvbDogdHJ1ZSxcbiAgZW1iZWQ6IHRydWUsXG4gIGhyOiB0cnVlLFxuICBpbWc6IHRydWUsXG4gIGlucHV0OiB0cnVlLFxuICBrZXlnZW46IHRydWUsXG4gIGxpbms6IHRydWUsXG4gIG1ldGE6IHRydWUsXG4gIHBhcmFtOiB0cnVlLFxuICBzb3VyY2U6IHRydWUsXG4gIHRyYWNrOiB0cnVlLFxuICB3YnI6IHRydWUgLy8gTk9URTogbWVudWl0ZW0ncyBjbG9zZSB0YWcgc2hvdWxkIGJlIG9taXR0ZWQsIGJ1dCB0aGF0IGNhdXNlcyBwcm9ibGVtcy5cblxufTtcblxuLy8gYG9taXR0ZWRDbG9zZVRhZ3NgIGV4Y2VwdCB0aGF0IGBtZW51aXRlbWAgc2hvdWxkIHN0aWxsIGhhdmUgaXRzIGNsb3NpbmcgdGFnLlxuXG52YXIgdm9pZEVsZW1lbnRUYWdzID0gX2Fzc2lnbih7XG4gIG1lbnVpdGVtOiB0cnVlXG59LCBvbWl0dGVkQ2xvc2VUYWdzKTtcblxudmFyIEhUTUwgPSAnX19odG1sJztcblxuZnVuY3Rpb24gYXNzZXJ0VmFsaWRQcm9wcyh0YWcsIHByb3BzKSB7XG4gIGlmICghcHJvcHMpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gTm90ZSB0aGUgdXNlIG9mIGA9PWAgd2hpY2ggY2hlY2tzIGZvciBudWxsIG9yIHVuZGVmaW5lZC5cblxuXG4gIGlmICh2b2lkRWxlbWVudFRhZ3NbdGFnXSkge1xuICAgIGlmICghKHByb3BzLmNoaWxkcmVuID09IG51bGwgJiYgcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgPT0gbnVsbCkpIHtcbiAgICAgIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoIHRhZyArIFwiIGlzIGEgdm9pZCBlbGVtZW50IHRhZyBhbmQgbXVzdCBuZWl0aGVyIGhhdmUgYGNoaWxkcmVuYCBub3IgdXNlIGBkYW5nZXJvdXNseVNldElubmVySFRNTGAuXCIgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAocHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgIT0gbnVsbCkge1xuICAgIGlmICghKHByb3BzLmNoaWxkcmVuID09IG51bGwpKSB7XG4gICAgICB7XG4gICAgICAgIHRocm93IEVycm9yKCBcIkNhbiBvbmx5IHNldCBvbmUgb2YgYGNoaWxkcmVuYCBvciBgcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxgLlwiICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEodHlwZW9mIHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID09PSAnb2JqZWN0JyAmJiBIVE1MIGluIHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSkge1xuICAgICAge1xuICAgICAgICB0aHJvdyBFcnJvciggXCJgcHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxgIG11c3QgYmUgaW4gdGhlIGZvcm0gYHtfX2h0bWw6IC4uLn1gLiBQbGVhc2UgdmlzaXQgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2Rhbmdlcm91c2x5LXNldC1pbm5lci1odG1sIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmICghcHJvcHMuc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nICYmIHByb3BzLmNvbnRlbnRFZGl0YWJsZSAmJiBwcm9wcy5jaGlsZHJlbiAhPSBudWxsKSB7XG4gICAgICBlcnJvcignQSBjb21wb25lbnQgaXMgYGNvbnRlbnRFZGl0YWJsZWAgYW5kIGNvbnRhaW5zIGBjaGlsZHJlbmAgbWFuYWdlZCBieSAnICsgJ1JlYWN0LiBJdCBpcyBub3cgeW91ciByZXNwb25zaWJpbGl0eSB0byBndWFyYW50ZWUgdGhhdCBub25lIG9mICcgKyAndGhvc2Ugbm9kZXMgYXJlIHVuZXhwZWN0ZWRseSBtb2RpZmllZCBvciBkdXBsaWNhdGVkLiBUaGlzIGlzICcgKyAncHJvYmFibHkgbm90IGludGVudGlvbmFsLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghKHByb3BzLnN0eWxlID09IG51bGwgfHwgdHlwZW9mIHByb3BzLnN0eWxlID09PSAnb2JqZWN0JykpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJUaGUgYHN0eWxlYCBwcm9wIGV4cGVjdHMgYSBtYXBwaW5nIGZyb20gc3R5bGUgcHJvcGVydGllcyB0byB2YWx1ZXMsIG5vdCBhIHN0cmluZy4gRm9yIGV4YW1wbGUsIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IHNwYWNpbmcgKyAnZW0nfX0gd2hlbiB1c2luZyBKU1guXCIgKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDU1MgcHJvcGVydGllcyB3aGljaCBhY2NlcHQgbnVtYmVycyBidXQgYXJlIG5vdCBpbiB1bml0cyBvZiBcInB4XCIuXG4gKi9cbnZhciBpc1VuaXRsZXNzTnVtYmVyID0ge1xuICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogdHJ1ZSxcbiAgYm9yZGVySW1hZ2VPdXRzZXQ6IHRydWUsXG4gIGJvcmRlckltYWdlU2xpY2U6IHRydWUsXG4gIGJvcmRlckltYWdlV2lkdGg6IHRydWUsXG4gIGJveEZsZXg6IHRydWUsXG4gIGJveEZsZXhHcm91cDogdHJ1ZSxcbiAgYm94T3JkaW5hbEdyb3VwOiB0cnVlLFxuICBjb2x1bW5Db3VudDogdHJ1ZSxcbiAgY29sdW1uczogdHJ1ZSxcbiAgZmxleDogdHJ1ZSxcbiAgZmxleEdyb3c6IHRydWUsXG4gIGZsZXhQb3NpdGl2ZTogdHJ1ZSxcbiAgZmxleFNocmluazogdHJ1ZSxcbiAgZmxleE5lZ2F0aXZlOiB0cnVlLFxuICBmbGV4T3JkZXI6IHRydWUsXG4gIGdyaWRBcmVhOiB0cnVlLFxuICBncmlkUm93OiB0cnVlLFxuICBncmlkUm93RW5kOiB0cnVlLFxuICBncmlkUm93U3BhbjogdHJ1ZSxcbiAgZ3JpZFJvd1N0YXJ0OiB0cnVlLFxuICBncmlkQ29sdW1uOiB0cnVlLFxuICBncmlkQ29sdW1uRW5kOiB0cnVlLFxuICBncmlkQ29sdW1uU3BhbjogdHJ1ZSxcbiAgZ3JpZENvbHVtblN0YXJ0OiB0cnVlLFxuICBmb250V2VpZ2h0OiB0cnVlLFxuICBsaW5lQ2xhbXA6IHRydWUsXG4gIGxpbmVIZWlnaHQ6IHRydWUsXG4gIG9wYWNpdHk6IHRydWUsXG4gIG9yZGVyOiB0cnVlLFxuICBvcnBoYW5zOiB0cnVlLFxuICB0YWJTaXplOiB0cnVlLFxuICB3aWRvd3M6IHRydWUsXG4gIHpJbmRleDogdHJ1ZSxcbiAgem9vbTogdHJ1ZSxcbiAgLy8gU1ZHLXJlbGF0ZWQgcHJvcGVydGllc1xuICBmaWxsT3BhY2l0eTogdHJ1ZSxcbiAgZmxvb2RPcGFjaXR5OiB0cnVlLFxuICBzdG9wT3BhY2l0eTogdHJ1ZSxcbiAgc3Ryb2tlRGFzaGFycmF5OiB0cnVlLFxuICBzdHJva2VEYXNob2Zmc2V0OiB0cnVlLFxuICBzdHJva2VNaXRlcmxpbWl0OiB0cnVlLFxuICBzdHJva2VPcGFjaXR5OiB0cnVlLFxuICBzdHJva2VXaWR0aDogdHJ1ZVxufTtcbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeCB2ZW5kb3Itc3BlY2lmaWMgcHJlZml4LCBlZzogV2Via2l0XG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHN0eWxlIG5hbWUsIGVnOiB0cmFuc2l0aW9uRHVyYXRpb25cbiAqIEByZXR1cm4ge3N0cmluZ30gc3R5bGUgbmFtZSBwcmVmaXhlZCB3aXRoIGBwcmVmaXhgLCBwcm9wZXJseSBjYW1lbENhc2VkLCBlZzpcbiAqIFdlYmtpdFRyYW5zaXRpb25EdXJhdGlvblxuICovXG5cbmZ1bmN0aW9uIHByZWZpeEtleShwcmVmaXgsIGtleSkge1xuICByZXR1cm4gcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnN1YnN0cmluZygxKTtcbn1cbi8qKlxuICogU3VwcG9ydCBzdHlsZSBuYW1lcyB0aGF0IG1heSBjb21lIHBhc3NlZCBpbiBwcmVmaXhlZCBieSBhZGRpbmcgcGVybXV0YXRpb25zXG4gKiBvZiB2ZW5kb3IgcHJlZml4ZXMuXG4gKi9cblxuXG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdtcycsICdNb3onLCAnTyddOyAvLyBVc2luZyBPYmplY3Qua2V5cyBoZXJlLCBvciBlbHNlIHRoZSB2YW5pbGxhIGZvci1pbiBsb29wIG1ha2VzIElFOCBnbyBpbnRvIGFuXG4vLyBpbmZpbml0ZSBsb29wLCBiZWNhdXNlIGl0IGl0ZXJhdGVzIG92ZXIgdGhlIG5ld2x5IGFkZGVkIHByb3BzIHRvby5cblxuT2JqZWN0LmtleXMoaXNVbml0bGVzc051bWJlcikuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICBwcmVmaXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICBpc1VuaXRsZXNzTnVtYmVyW3ByZWZpeEtleShwcmVmaXgsIHByb3ApXSA9IGlzVW5pdGxlc3NOdW1iZXJbcHJvcF07XG4gIH0pO1xufSk7XG5cbi8qKlxuICogQ29udmVydCBhIHZhbHVlIGludG8gdGhlIHByb3BlciBjc3Mgd3JpdGFibGUgdmFsdWUuIFRoZSBzdHlsZSBuYW1lIGBuYW1lYFxuICogc2hvdWxkIGJlIGxvZ2ljYWwgKG5vIGh5cGhlbnMpLCBhcyBzcGVjaWZpZWRcbiAqIGluIGBDU1NQcm9wZXJ0eS5pc1VuaXRsZXNzTnVtYmVyYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBDU1MgcHJvcGVydHkgbmFtZSBzdWNoIGFzIGB0b3BNYXJnaW5gLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBDU1MgcHJvcGVydHkgdmFsdWUgc3VjaCBhcyBgMTBweGAuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IE5vcm1hbGl6ZWQgc3R5bGUgdmFsdWUgd2l0aCBkaW1lbnNpb25zIGFwcGxpZWQuXG4gKi9cblxuZnVuY3Rpb24gZGFuZ2Vyb3VzU3R5bGVWYWx1ZShuYW1lLCB2YWx1ZSwgaXNDdXN0b21Qcm9wZXJ0eSkge1xuICAvLyBOb3RlIHRoYXQgd2UndmUgcmVtb3ZlZCBlc2NhcGVUZXh0Rm9yQnJvd3NlcigpIGNhbGxzIGhlcmUgc2luY2UgdGhlXG4gIC8vIHdob2xlIHN0cmluZyB3aWxsIGJlIGVzY2FwZWQgd2hlbiB0aGUgYXR0cmlidXRlIGlzIGluamVjdGVkIGludG9cbiAgLy8gdGhlIG1hcmt1cC4gSWYgeW91IHByb3ZpZGUgdW5zYWZlIHVzZXIgZGF0YSBoZXJlIHRoZXkgY2FuIGluamVjdFxuICAvLyBhcmJpdHJhcnkgQ1NTIHdoaWNoIG1heSBiZSBwcm9ibGVtYXRpYyAoSSBjb3VsZG4ndCByZXBybyB0aGlzKTpcbiAgLy8gaHR0cHM6Ly93d3cub3dhc3Aub3JnL2luZGV4LnBocC9YU1NfRmlsdGVyX0V2YXNpb25fQ2hlYXRfU2hlZXRcbiAgLy8gaHR0cDovL3d3dy50aGVzcGFubmVyLmNvLnVrLzIwMDcvMTEvMjYvdWx0aW1hdGUteHNzLWNzcy1pbmplY3Rpb24vXG4gIC8vIFRoaXMgaXMgbm90IGFuIFhTUyBob2xlIGJ1dCBpbnN0ZWFkIGEgcG90ZW50aWFsIENTUyBpbmplY3Rpb24gaXNzdWVcbiAgLy8gd2hpY2ggaGFzIGxlYWQgdG8gYSBncmVhdGVyIGRpc2N1c3Npb24gYWJvdXQgaG93IHdlJ3JlIGdvaW5nIHRvXG4gIC8vIHRydXN0IFVSTHMgbW92aW5nIGZvcndhcmQuIFNlZSAjMjExNTkwMVxuICB2YXIgaXNFbXB0eSA9IHZhbHVlID09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgfHwgdmFsdWUgPT09ICcnO1xuXG4gIGlmIChpc0VtcHR5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKCFpc0N1c3RvbVByb3BlcnR5ICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgIT09IDAgJiYgIShpc1VuaXRsZXNzTnVtYmVyLmhhc093blByb3BlcnR5KG5hbWUpICYmIGlzVW5pdGxlc3NOdW1iZXJbbmFtZV0pKSB7XG4gICAgcmV0dXJuIHZhbHVlICsgJ3B4JzsgLy8gUHJlc3VtZXMgaW1wbGljaXQgJ3B4JyBzdWZmaXggZm9yIHVuaXRsZXNzIG51bWJlcnNcbiAgfVxuXG4gIHJldHVybiAoJycgKyB2YWx1ZSkudHJpbSgpO1xufVxuXG52YXIgdXBwZXJjYXNlUGF0dGVybiA9IC8oW0EtWl0pL2c7XG52YXIgbXNQYXR0ZXJuID0gL15tcy0vO1xuLyoqXG4gKiBIeXBoZW5hdGVzIGEgY2FtZWxjYXNlZCBDU1MgcHJvcGVydHkgbmFtZSwgZm9yIGV4YW1wbGU6XG4gKlxuICogICA+IGh5cGhlbmF0ZVN0eWxlTmFtZSgnYmFja2dyb3VuZENvbG9yJylcbiAqICAgPCBcImJhY2tncm91bmQtY29sb3JcIlxuICogICA+IGh5cGhlbmF0ZVN0eWxlTmFtZSgnTW96VHJhbnNpdGlvbicpXG4gKiAgIDwgXCItbW96LXRyYW5zaXRpb25cIlxuICogICA+IGh5cGhlbmF0ZVN0eWxlTmFtZSgnbXNUcmFuc2l0aW9uJylcbiAqICAgPCBcIi1tcy10cmFuc2l0aW9uXCJcbiAqXG4gKiBBcyBNb2Rlcm5penIgc3VnZ2VzdHMgKGh0dHA6Ly9tb2Rlcm5penIuY29tL2RvY3MvI3ByZWZpeGVkKSwgYW4gYG1zYCBwcmVmaXhcbiAqIGlzIGNvbnZlcnRlZCB0byBgLW1zLWAuXG4gKi9cblxuZnVuY3Rpb24gaHlwaGVuYXRlU3R5bGVOYW1lKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSh1cHBlcmNhc2VQYXR0ZXJuLCAnLSQxJykudG9Mb3dlckNhc2UoKS5yZXBsYWNlKG1zUGF0dGVybiwgJy1tcy0nKTtcbn1cblxuZnVuY3Rpb24gaXNDdXN0b21Db21wb25lbnQodGFnTmFtZSwgcHJvcHMpIHtcbiAgaWYgKHRhZ05hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgIHJldHVybiB0eXBlb2YgcHJvcHMuaXMgPT09ICdzdHJpbmcnO1xuICB9XG5cbiAgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgLy8gVGhlc2UgYXJlIHJlc2VydmVkIFNWRyBhbmQgTWF0aE1MIGVsZW1lbnRzLlxuICAgIC8vIFdlIGRvbid0IG1pbmQgdGhpcyBsaXN0IHRvbyBtdWNoIGJlY2F1c2Ugd2UgZXhwZWN0IGl0IHRvIG5ldmVyIGdyb3cuXG4gICAgLy8gVGhlIGFsdGVybmF0aXZlIGlzIHRvIHRyYWNrIHRoZSBuYW1lc3BhY2UgaW4gYSBmZXcgcGxhY2VzIHdoaWNoIGlzIGNvbnZvbHV0ZWQuXG4gICAgLy8gaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3dlYmNvbXBvbmVudHMvc3BlYy9jdXN0b20vI2N1c3RvbS1lbGVtZW50cy1jb3JlLWNvbmNlcHRzXG4gICAgY2FzZSAnYW5ub3RhdGlvbi14bWwnOlxuICAgIGNhc2UgJ2NvbG9yLXByb2ZpbGUnOlxuICAgIGNhc2UgJ2ZvbnQtZmFjZSc6XG4gICAgY2FzZSAnZm9udC1mYWNlLXNyYyc6XG4gICAgY2FzZSAnZm9udC1mYWNlLXVyaSc6XG4gICAgY2FzZSAnZm9udC1mYWNlLWZvcm1hdCc6XG4gICAgY2FzZSAnZm9udC1mYWNlLW5hbWUnOlxuICAgIGNhc2UgJ21pc3NpbmctZ2x5cGgnOlxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbnZhciB3YXJuVmFsaWRTdHlsZSA9IGZ1bmN0aW9uICgpIHt9O1xuXG57XG4gIC8vICdtc1RyYW5zZm9ybScgaXMgY29ycmVjdCwgYnV0IHRoZSBvdGhlciBwcmVmaXhlcyBzaG91bGQgYmUgY2FwaXRhbGl6ZWRcbiAgdmFyIGJhZFZlbmRvcmVkU3R5bGVOYW1lUGF0dGVybiA9IC9eKD86d2Via2l0fG1venxvKVtBLVpdLztcbiAgdmFyIG1zUGF0dGVybiQxID0gL14tbXMtLztcbiAgdmFyIGh5cGhlblBhdHRlcm4gPSAvLSguKS9nOyAvLyBzdHlsZSB2YWx1ZXMgc2hvdWxkbid0IGNvbnRhaW4gYSBzZW1pY29sb25cblxuICB2YXIgYmFkU3R5bGVWYWx1ZVdpdGhTZW1pY29sb25QYXR0ZXJuID0gLztcXHMqJC87XG4gIHZhciB3YXJuZWRTdHlsZU5hbWVzID0ge307XG4gIHZhciB3YXJuZWRTdHlsZVZhbHVlcyA9IHt9O1xuICB2YXIgd2FybmVkRm9yTmFOVmFsdWUgPSBmYWxzZTtcbiAgdmFyIHdhcm5lZEZvckluZmluaXR5VmFsdWUgPSBmYWxzZTtcblxuICB2YXIgY2FtZWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKGh5cGhlblBhdHRlcm4sIGZ1bmN0aW9uIChfLCBjaGFyYWN0ZXIpIHtcbiAgICAgIHJldHVybiBjaGFyYWN0ZXIudG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgd2Fybkh5cGhlbmF0ZWRTdHlsZU5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmICh3YXJuZWRTdHlsZU5hbWVzLmhhc093blByb3BlcnR5KG5hbWUpICYmIHdhcm5lZFN0eWxlTmFtZXNbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3YXJuZWRTdHlsZU5hbWVzW25hbWVdID0gdHJ1ZTtcblxuICAgIGVycm9yKCdVbnN1cHBvcnRlZCBzdHlsZSBwcm9wZXJ0eSAlcy4gRGlkIHlvdSBtZWFuICVzPycsIG5hbWUsIC8vIEFzIEFuZGkgU21pdGggc3VnZ2VzdHNcbiAgICAvLyAoaHR0cDovL3d3dy5hbmRpc21pdGguY29tL2Jsb2cvMjAxMi8wMi9tb2Rlcm5penItcHJlZml4ZWQvKSwgYW4gYC1tc2AgcHJlZml4XG4gICAgLy8gaXMgY29udmVydGVkIHRvIGxvd2VyY2FzZSBgbXNgLlxuICAgIGNhbWVsaXplKG5hbWUucmVwbGFjZShtc1BhdHRlcm4kMSwgJ21zLScpKSk7XG4gIH07XG5cbiAgdmFyIHdhcm5CYWRWZW5kb3JlZFN0eWxlTmFtZSA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgaWYgKHdhcm5lZFN0eWxlTmFtZXMuaGFzT3duUHJvcGVydHkobmFtZSkgJiYgd2FybmVkU3R5bGVOYW1lc1tuYW1lXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdhcm5lZFN0eWxlTmFtZXNbbmFtZV0gPSB0cnVlO1xuXG4gICAgZXJyb3IoJ1Vuc3VwcG9ydGVkIHZlbmRvci1wcmVmaXhlZCBzdHlsZSBwcm9wZXJ0eSAlcy4gRGlkIHlvdSBtZWFuICVzPycsIG5hbWUsIG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpKTtcbiAgfTtcblxuICB2YXIgd2FyblN0eWxlVmFsdWVXaXRoU2VtaWNvbG9uID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHdhcm5lZFN0eWxlVmFsdWVzLmhhc093blByb3BlcnR5KHZhbHVlKSAmJiB3YXJuZWRTdHlsZVZhbHVlc1t2YWx1ZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3YXJuZWRTdHlsZVZhbHVlc1t2YWx1ZV0gPSB0cnVlO1xuXG4gICAgZXJyb3IoXCJTdHlsZSBwcm9wZXJ0eSB2YWx1ZXMgc2hvdWxkbid0IGNvbnRhaW4gYSBzZW1pY29sb24uIFwiICsgJ1RyeSBcIiVzOiAlc1wiIGluc3RlYWQuJywgbmFtZSwgdmFsdWUucmVwbGFjZShiYWRTdHlsZVZhbHVlV2l0aFNlbWljb2xvblBhdHRlcm4sICcnKSk7XG4gIH07XG5cbiAgdmFyIHdhcm5TdHlsZVZhbHVlSXNOYU4gPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAod2FybmVkRm9yTmFOVmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3YXJuZWRGb3JOYU5WYWx1ZSA9IHRydWU7XG5cbiAgICBlcnJvcignYE5hTmAgaXMgYW4gaW52YWxpZCB2YWx1ZSBmb3IgdGhlIGAlc2AgY3NzIHN0eWxlIHByb3BlcnR5LicsIG5hbWUpO1xuICB9O1xuXG4gIHZhciB3YXJuU3R5bGVWYWx1ZUlzSW5maW5pdHkgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAod2FybmVkRm9ySW5maW5pdHlWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdhcm5lZEZvckluZmluaXR5VmFsdWUgPSB0cnVlO1xuXG4gICAgZXJyb3IoJ2BJbmZpbml0eWAgaXMgYW4gaW52YWxpZCB2YWx1ZSBmb3IgdGhlIGAlc2AgY3NzIHN0eWxlIHByb3BlcnR5LicsIG5hbWUpO1xuICB9O1xuXG4gIHdhcm5WYWxpZFN0eWxlID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKG5hbWUuaW5kZXhPZignLScpID4gLTEpIHtcbiAgICAgIHdhcm5IeXBoZW5hdGVkU3R5bGVOYW1lKG5hbWUpO1xuICAgIH0gZWxzZSBpZiAoYmFkVmVuZG9yZWRTdHlsZU5hbWVQYXR0ZXJuLnRlc3QobmFtZSkpIHtcbiAgICAgIHdhcm5CYWRWZW5kb3JlZFN0eWxlTmFtZShuYW1lKTtcbiAgICB9IGVsc2UgaWYgKGJhZFN0eWxlVmFsdWVXaXRoU2VtaWNvbG9uUGF0dGVybi50ZXN0KHZhbHVlKSkge1xuICAgICAgd2FyblN0eWxlVmFsdWVXaXRoU2VtaWNvbG9uKG5hbWUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgaWYgKGlzTmFOKHZhbHVlKSkge1xuICAgICAgICB3YXJuU3R5bGVWYWx1ZUlzTmFOKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoIWlzRmluaXRlKHZhbHVlKSkge1xuICAgICAgICB3YXJuU3R5bGVWYWx1ZUlzSW5maW5pdHkobmFtZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxudmFyIHdhcm5WYWxpZFN0eWxlJDEgPSB3YXJuVmFsaWRTdHlsZTtcblxudmFyIGFyaWFQcm9wZXJ0aWVzID0ge1xuICAnYXJpYS1jdXJyZW50JzogMCxcbiAgLy8gc3RhdGVcbiAgJ2FyaWEtZGV0YWlscyc6IDAsXG4gICdhcmlhLWRpc2FibGVkJzogMCxcbiAgLy8gc3RhdGVcbiAgJ2FyaWEtaGlkZGVuJzogMCxcbiAgLy8gc3RhdGVcbiAgJ2FyaWEtaW52YWxpZCc6IDAsXG4gIC8vIHN0YXRlXG4gICdhcmlhLWtleXNob3J0Y3V0cyc6IDAsXG4gICdhcmlhLWxhYmVsJzogMCxcbiAgJ2FyaWEtcm9sZWRlc2NyaXB0aW9uJzogMCxcbiAgLy8gV2lkZ2V0IEF0dHJpYnV0ZXNcbiAgJ2FyaWEtYXV0b2NvbXBsZXRlJzogMCxcbiAgJ2FyaWEtY2hlY2tlZCc6IDAsXG4gICdhcmlhLWV4cGFuZGVkJzogMCxcbiAgJ2FyaWEtaGFzcG9wdXAnOiAwLFxuICAnYXJpYS1sZXZlbCc6IDAsXG4gICdhcmlhLW1vZGFsJzogMCxcbiAgJ2FyaWEtbXVsdGlsaW5lJzogMCxcbiAgJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJzogMCxcbiAgJ2FyaWEtb3JpZW50YXRpb24nOiAwLFxuICAnYXJpYS1wbGFjZWhvbGRlcic6IDAsXG4gICdhcmlhLXByZXNzZWQnOiAwLFxuICAnYXJpYS1yZWFkb25seSc6IDAsXG4gICdhcmlhLXJlcXVpcmVkJzogMCxcbiAgJ2FyaWEtc2VsZWN0ZWQnOiAwLFxuICAnYXJpYS1zb3J0JzogMCxcbiAgJ2FyaWEtdmFsdWVtYXgnOiAwLFxuICAnYXJpYS12YWx1ZW1pbic6IDAsXG4gICdhcmlhLXZhbHVlbm93JzogMCxcbiAgJ2FyaWEtdmFsdWV0ZXh0JzogMCxcbiAgLy8gTGl2ZSBSZWdpb24gQXR0cmlidXRlc1xuICAnYXJpYS1hdG9taWMnOiAwLFxuICAnYXJpYS1idXN5JzogMCxcbiAgJ2FyaWEtbGl2ZSc6IDAsXG4gICdhcmlhLXJlbGV2YW50JzogMCxcbiAgLy8gRHJhZy1hbmQtRHJvcCBBdHRyaWJ1dGVzXG4gICdhcmlhLWRyb3BlZmZlY3QnOiAwLFxuICAnYXJpYS1ncmFiYmVkJzogMCxcbiAgLy8gUmVsYXRpb25zaGlwIEF0dHJpYnV0ZXNcbiAgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IDAsXG4gICdhcmlhLWNvbGNvdW50JzogMCxcbiAgJ2FyaWEtY29saW5kZXgnOiAwLFxuICAnYXJpYS1jb2xzcGFuJzogMCxcbiAgJ2FyaWEtY29udHJvbHMnOiAwLFxuICAnYXJpYS1kZXNjcmliZWRieSc6IDAsXG4gICdhcmlhLWVycm9ybWVzc2FnZSc6IDAsXG4gICdhcmlhLWZsb3d0byc6IDAsXG4gICdhcmlhLWxhYmVsbGVkYnknOiAwLFxuICAnYXJpYS1vd25zJzogMCxcbiAgJ2FyaWEtcG9zaW5zZXQnOiAwLFxuICAnYXJpYS1yb3djb3VudCc6IDAsXG4gICdhcmlhLXJvd2luZGV4JzogMCxcbiAgJ2FyaWEtcm93c3Bhbic6IDAsXG4gICdhcmlhLXNldHNpemUnOiAwXG59O1xuXG52YXIgd2FybmVkUHJvcGVydGllcyA9IHt9O1xudmFyIHJBUklBID0gbmV3IFJlZ0V4cCgnXihhcmlhKS1bJyArIEFUVFJJQlVURV9OQU1FX0NIQVIgKyAnXSokJyk7XG52YXIgckFSSUFDYW1lbCA9IG5ldyBSZWdFeHAoJ14oYXJpYSlbQS1aXVsnICsgQVRUUklCVVRFX05BTUVfQ0hBUiArICddKiQnKTtcbnZhciBoYXNPd25Qcm9wZXJ0eSQxID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wZXJ0eSh0YWdOYW1lLCBuYW1lKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkkMS5jYWxsKHdhcm5lZFByb3BlcnRpZXMsIG5hbWUpICYmIHdhcm5lZFByb3BlcnRpZXNbbmFtZV0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChyQVJJQUNhbWVsLnRlc3QobmFtZSkpIHtcbiAgICAgIHZhciBhcmlhTmFtZSA9ICdhcmlhLScgKyBuYW1lLnNsaWNlKDQpLnRvTG93ZXJDYXNlKCk7XG4gICAgICB2YXIgY29ycmVjdE5hbWUgPSBhcmlhUHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShhcmlhTmFtZSkgPyBhcmlhTmFtZSA6IG51bGw7IC8vIElmIHRoaXMgaXMgYW4gYXJpYS0qIGF0dHJpYnV0ZSwgYnV0IGlzIG5vdCBsaXN0ZWQgaW4gdGhlIGtub3duIERPTVxuICAgICAgLy8gRE9NIHByb3BlcnRpZXMsIHRoZW4gaXQgaXMgYW4gaW52YWxpZCBhcmlhLSogYXR0cmlidXRlLlxuXG4gICAgICBpZiAoY29ycmVjdE5hbWUgPT0gbnVsbCkge1xuICAgICAgICBlcnJvcignSW52YWxpZCBBUklBIGF0dHJpYnV0ZSBgJXNgLiBBUklBIGF0dHJpYnV0ZXMgZm9sbG93IHRoZSBwYXR0ZXJuIGFyaWEtKiBhbmQgbXVzdCBiZSBsb3dlcmNhc2UuJywgbmFtZSk7XG5cbiAgICAgICAgd2FybmVkUHJvcGVydGllc1tuYW1lXSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSAvLyBhcmlhLSogYXR0cmlidXRlcyBzaG91bGQgYmUgbG93ZXJjYXNlOyBzdWdnZXN0IHRoZSBsb3dlcmNhc2UgdmVyc2lvbi5cblxuXG4gICAgICBpZiAobmFtZSAhPT0gY29ycmVjdE5hbWUpIHtcbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgQVJJQSBhdHRyaWJ1dGUgYCVzYC4gRGlkIHlvdSBtZWFuIGAlc2A/JywgbmFtZSwgY29ycmVjdE5hbWUpO1xuXG4gICAgICAgIHdhcm5lZFByb3BlcnRpZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAockFSSUEudGVzdChuYW1lKSkge1xuICAgICAgdmFyIGxvd2VyQ2FzZWROYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdmFyIHN0YW5kYXJkTmFtZSA9IGFyaWFQcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KGxvd2VyQ2FzZWROYW1lKSA/IGxvd2VyQ2FzZWROYW1lIDogbnVsbDsgLy8gSWYgdGhpcyBpcyBhbiBhcmlhLSogYXR0cmlidXRlLCBidXQgaXMgbm90IGxpc3RlZCBpbiB0aGUga25vd24gRE9NXG4gICAgICAvLyBET00gcHJvcGVydGllcywgdGhlbiBpdCBpcyBhbiBpbnZhbGlkIGFyaWEtKiBhdHRyaWJ1dGUuXG5cbiAgICAgIGlmIChzdGFuZGFyZE5hbWUgPT0gbnVsbCkge1xuICAgICAgICB3YXJuZWRQcm9wZXJ0aWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSAvLyBhcmlhLSogYXR0cmlidXRlcyBzaG91bGQgYmUgbG93ZXJjYXNlOyBzdWdnZXN0IHRoZSBsb3dlcmNhc2UgdmVyc2lvbi5cblxuXG4gICAgICBpZiAobmFtZSAhPT0gc3RhbmRhcmROYW1lKSB7XG4gICAgICAgIGVycm9yKCdVbmtub3duIEFSSUEgYXR0cmlidXRlIGAlc2AuIERpZCB5b3UgbWVhbiBgJXNgPycsIG5hbWUsIHN0YW5kYXJkTmFtZSk7XG5cbiAgICAgICAgd2FybmVkUHJvcGVydGllc1tuYW1lXSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiB3YXJuSW52YWxpZEFSSUFQcm9wcyh0eXBlLCBwcm9wcykge1xuICB7XG4gICAgdmFyIGludmFsaWRQcm9wcyA9IFtdO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICB2YXIgaXNWYWxpZCA9IHZhbGlkYXRlUHJvcGVydHkodHlwZSwga2V5KTtcblxuICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgIGludmFsaWRQcm9wcy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHVua25vd25Qcm9wU3RyaW5nID0gaW52YWxpZFByb3BzLm1hcChmdW5jdGlvbiAocHJvcCkge1xuICAgICAgcmV0dXJuICdgJyArIHByb3AgKyAnYCc7XG4gICAgfSkuam9pbignLCAnKTtcblxuICAgIGlmIChpbnZhbGlkUHJvcHMubGVuZ3RoID09PSAxKSB7XG4gICAgICBlcnJvcignSW52YWxpZCBhcmlhIHByb3AgJXMgb24gPCVzPiB0YWcuICcgKyAnRm9yIGRldGFpbHMsIHNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvaW52YWxpZC1hcmlhLXByb3BzJywgdW5rbm93blByb3BTdHJpbmcsIHR5cGUpO1xuICAgIH0gZWxzZSBpZiAoaW52YWxpZFByb3BzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGVycm9yKCdJbnZhbGlkIGFyaWEgcHJvcHMgJXMgb24gPCVzPiB0YWcuICcgKyAnRm9yIGRldGFpbHMsIHNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvaW52YWxpZC1hcmlhLXByb3BzJywgdW5rbm93blByb3BTdHJpbmcsIHR5cGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BlcnRpZXModHlwZSwgcHJvcHMpIHtcbiAgaWYgKGlzQ3VzdG9tQ29tcG9uZW50KHR5cGUsIHByb3BzKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHdhcm5JbnZhbGlkQVJJQVByb3BzKHR5cGUsIHByb3BzKTtcbn1cblxudmFyIGRpZFdhcm5WYWx1ZU51bGwgPSBmYWxzZTtcbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcGVydGllcyQxKHR5cGUsIHByb3BzKSB7XG4gIHtcbiAgICBpZiAodHlwZSAhPT0gJ2lucHV0JyAmJiB0eXBlICE9PSAndGV4dGFyZWEnICYmIHR5cGUgIT09ICdzZWxlY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BzICE9IG51bGwgJiYgcHJvcHMudmFsdWUgPT09IG51bGwgJiYgIWRpZFdhcm5WYWx1ZU51bGwpIHtcbiAgICAgIGRpZFdhcm5WYWx1ZU51bGwgPSB0cnVlO1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ3NlbGVjdCcgJiYgcHJvcHMubXVsdGlwbGUpIHtcbiAgICAgICAgZXJyb3IoJ2B2YWx1ZWAgcHJvcCBvbiBgJXNgIHNob3VsZCBub3QgYmUgbnVsbC4gJyArICdDb25zaWRlciB1c2luZyBhbiBlbXB0eSBhcnJheSB3aGVuIGBtdWx0aXBsZWAgaXMgc2V0IHRvIGB0cnVlYCAnICsgJ3RvIGNsZWFyIHRoZSBjb21wb25lbnQgb3IgYHVuZGVmaW5lZGAgZm9yIHVuY29udHJvbGxlZCBjb21wb25lbnRzLicsIHR5cGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3IoJ2B2YWx1ZWAgcHJvcCBvbiBgJXNgIHNob3VsZCBub3QgYmUgbnVsbC4gJyArICdDb25zaWRlciB1c2luZyBhbiBlbXB0eSBzdHJpbmcgdG8gY2xlYXIgdGhlIGNvbXBvbmVudCBvciBgdW5kZWZpbmVkYCAnICsgJ2ZvciB1bmNvbnRyb2xsZWQgY29tcG9uZW50cy4nLCB0eXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gV2hlbiBhZGRpbmcgYXR0cmlidXRlcyB0byB0aGUgSFRNTCBvciBTVkcgYWxsb3dlZCBhdHRyaWJ1dGUgbGlzdCwgYmUgc3VyZSB0b1xuLy8gYWxzbyBhZGQgdGhlbSB0byB0aGlzIG1vZHVsZSB0byBlbnN1cmUgY2FzaW5nIGFuZCBpbmNvcnJlY3QgbmFtZVxuLy8gd2FybmluZ3MuXG52YXIgcG9zc2libGVTdGFuZGFyZE5hbWVzID0ge1xuICAvLyBIVE1MXG4gIGFjY2VwdDogJ2FjY2VwdCcsXG4gIGFjY2VwdGNoYXJzZXQ6ICdhY2NlcHRDaGFyc2V0JyxcbiAgJ2FjY2VwdC1jaGFyc2V0JzogJ2FjY2VwdENoYXJzZXQnLFxuICBhY2Nlc3NrZXk6ICdhY2Nlc3NLZXknLFxuICBhY3Rpb246ICdhY3Rpb24nLFxuICBhbGxvd2Z1bGxzY3JlZW46ICdhbGxvd0Z1bGxTY3JlZW4nLFxuICBhbHQ6ICdhbHQnLFxuICBhczogJ2FzJyxcbiAgYXN5bmM6ICdhc3luYycsXG4gIGF1dG9jYXBpdGFsaXplOiAnYXV0b0NhcGl0YWxpemUnLFxuICBhdXRvY29tcGxldGU6ICdhdXRvQ29tcGxldGUnLFxuICBhdXRvY29ycmVjdDogJ2F1dG9Db3JyZWN0JyxcbiAgYXV0b2ZvY3VzOiAnYXV0b0ZvY3VzJyxcbiAgYXV0b3BsYXk6ICdhdXRvUGxheScsXG4gIGF1dG9zYXZlOiAnYXV0b1NhdmUnLFxuICBjYXB0dXJlOiAnY2FwdHVyZScsXG4gIGNlbGxwYWRkaW5nOiAnY2VsbFBhZGRpbmcnLFxuICBjZWxsc3BhY2luZzogJ2NlbGxTcGFjaW5nJyxcbiAgY2hhbGxlbmdlOiAnY2hhbGxlbmdlJyxcbiAgY2hhcnNldDogJ2NoYXJTZXQnLFxuICBjaGVja2VkOiAnY2hlY2tlZCcsXG4gIGNoaWxkcmVuOiAnY2hpbGRyZW4nLFxuICBjaXRlOiAnY2l0ZScsXG4gIGNsYXNzOiAnY2xhc3NOYW1lJyxcbiAgY2xhc3NpZDogJ2NsYXNzSUQnLFxuICBjbGFzc25hbWU6ICdjbGFzc05hbWUnLFxuICBjb2xzOiAnY29scycsXG4gIGNvbHNwYW46ICdjb2xTcGFuJyxcbiAgY29udGVudDogJ2NvbnRlbnQnLFxuICBjb250ZW50ZWRpdGFibGU6ICdjb250ZW50RWRpdGFibGUnLFxuICBjb250ZXh0bWVudTogJ2NvbnRleHRNZW51JyxcbiAgY29udHJvbHM6ICdjb250cm9scycsXG4gIGNvbnRyb2xzbGlzdDogJ2NvbnRyb2xzTGlzdCcsXG4gIGNvb3JkczogJ2Nvb3JkcycsXG4gIGNyb3Nzb3JpZ2luOiAnY3Jvc3NPcmlnaW4nLFxuICBkYW5nZXJvdXNseXNldGlubmVyaHRtbDogJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJyxcbiAgZGF0YTogJ2RhdGEnLFxuICBkYXRldGltZTogJ2RhdGVUaW1lJyxcbiAgZGVmYXVsdDogJ2RlZmF1bHQnLFxuICBkZWZhdWx0Y2hlY2tlZDogJ2RlZmF1bHRDaGVja2VkJyxcbiAgZGVmYXVsdHZhbHVlOiAnZGVmYXVsdFZhbHVlJyxcbiAgZGVmZXI6ICdkZWZlcicsXG4gIGRpcjogJ2RpcicsXG4gIGRpc2FibGVkOiAnZGlzYWJsZWQnLFxuICBkaXNhYmxlcGljdHVyZWlucGljdHVyZTogJ2Rpc2FibGVQaWN0dXJlSW5QaWN0dXJlJyxcbiAgZGlzYWJsZXJlbW90ZXBsYXliYWNrOiAnZGlzYWJsZVJlbW90ZVBsYXliYWNrJyxcbiAgZG93bmxvYWQ6ICdkb3dubG9hZCcsXG4gIGRyYWdnYWJsZTogJ2RyYWdnYWJsZScsXG4gIGVuY3R5cGU6ICdlbmNUeXBlJyxcbiAgZW50ZXJrZXloaW50OiAnZW50ZXJLZXlIaW50JyxcbiAgZm9yOiAnaHRtbEZvcicsXG4gIGZvcm06ICdmb3JtJyxcbiAgZm9ybW1ldGhvZDogJ2Zvcm1NZXRob2QnLFxuICBmb3JtYWN0aW9uOiAnZm9ybUFjdGlvbicsXG4gIGZvcm1lbmN0eXBlOiAnZm9ybUVuY1R5cGUnLFxuICBmb3Jtbm92YWxpZGF0ZTogJ2Zvcm1Ob1ZhbGlkYXRlJyxcbiAgZm9ybXRhcmdldDogJ2Zvcm1UYXJnZXQnLFxuICBmcmFtZWJvcmRlcjogJ2ZyYW1lQm9yZGVyJyxcbiAgaGVhZGVyczogJ2hlYWRlcnMnLFxuICBoZWlnaHQ6ICdoZWlnaHQnLFxuICBoaWRkZW46ICdoaWRkZW4nLFxuICBoaWdoOiAnaGlnaCcsXG4gIGhyZWY6ICdocmVmJyxcbiAgaHJlZmxhbmc6ICdocmVmTGFuZycsXG4gIGh0bWxmb3I6ICdodG1sRm9yJyxcbiAgaHR0cGVxdWl2OiAnaHR0cEVxdWl2JyxcbiAgJ2h0dHAtZXF1aXYnOiAnaHR0cEVxdWl2JyxcbiAgaWNvbjogJ2ljb24nLFxuICBpZDogJ2lkJyxcbiAgaW5uZXJodG1sOiAnaW5uZXJIVE1MJyxcbiAgaW5wdXRtb2RlOiAnaW5wdXRNb2RlJyxcbiAgaW50ZWdyaXR5OiAnaW50ZWdyaXR5JyxcbiAgaXM6ICdpcycsXG4gIGl0ZW1pZDogJ2l0ZW1JRCcsXG4gIGl0ZW1wcm9wOiAnaXRlbVByb3AnLFxuICBpdGVtcmVmOiAnaXRlbVJlZicsXG4gIGl0ZW1zY29wZTogJ2l0ZW1TY29wZScsXG4gIGl0ZW10eXBlOiAnaXRlbVR5cGUnLFxuICBrZXlwYXJhbXM6ICdrZXlQYXJhbXMnLFxuICBrZXl0eXBlOiAna2V5VHlwZScsXG4gIGtpbmQ6ICdraW5kJyxcbiAgbGFiZWw6ICdsYWJlbCcsXG4gIGxhbmc6ICdsYW5nJyxcbiAgbGlzdDogJ2xpc3QnLFxuICBsb29wOiAnbG9vcCcsXG4gIGxvdzogJ2xvdycsXG4gIG1hbmlmZXN0OiAnbWFuaWZlc3QnLFxuICBtYXJnaW53aWR0aDogJ21hcmdpbldpZHRoJyxcbiAgbWFyZ2luaGVpZ2h0OiAnbWFyZ2luSGVpZ2h0JyxcbiAgbWF4OiAnbWF4JyxcbiAgbWF4bGVuZ3RoOiAnbWF4TGVuZ3RoJyxcbiAgbWVkaWE6ICdtZWRpYScsXG4gIG1lZGlhZ3JvdXA6ICdtZWRpYUdyb3VwJyxcbiAgbWV0aG9kOiAnbWV0aG9kJyxcbiAgbWluOiAnbWluJyxcbiAgbWlubGVuZ3RoOiAnbWluTGVuZ3RoJyxcbiAgbXVsdGlwbGU6ICdtdWx0aXBsZScsXG4gIG11dGVkOiAnbXV0ZWQnLFxuICBuYW1lOiAnbmFtZScsXG4gIG5vbW9kdWxlOiAnbm9Nb2R1bGUnLFxuICBub25jZTogJ25vbmNlJyxcbiAgbm92YWxpZGF0ZTogJ25vVmFsaWRhdGUnLFxuICBvcGVuOiAnb3BlbicsXG4gIG9wdGltdW06ICdvcHRpbXVtJyxcbiAgcGF0dGVybjogJ3BhdHRlcm4nLFxuICBwbGFjZWhvbGRlcjogJ3BsYWNlaG9sZGVyJyxcbiAgcGxheXNpbmxpbmU6ICdwbGF5c0lubGluZScsXG4gIHBvc3RlcjogJ3Bvc3RlcicsXG4gIHByZWxvYWQ6ICdwcmVsb2FkJyxcbiAgcHJvZmlsZTogJ3Byb2ZpbGUnLFxuICByYWRpb2dyb3VwOiAncmFkaW9Hcm91cCcsXG4gIHJlYWRvbmx5OiAncmVhZE9ubHknLFxuICByZWZlcnJlcnBvbGljeTogJ3JlZmVycmVyUG9saWN5JyxcbiAgcmVsOiAncmVsJyxcbiAgcmVxdWlyZWQ6ICdyZXF1aXJlZCcsXG4gIHJldmVyc2VkOiAncmV2ZXJzZWQnLFxuICByb2xlOiAncm9sZScsXG4gIHJvd3M6ICdyb3dzJyxcbiAgcm93c3BhbjogJ3Jvd1NwYW4nLFxuICBzYW5kYm94OiAnc2FuZGJveCcsXG4gIHNjb3BlOiAnc2NvcGUnLFxuICBzY29wZWQ6ICdzY29wZWQnLFxuICBzY3JvbGxpbmc6ICdzY3JvbGxpbmcnLFxuICBzZWFtbGVzczogJ3NlYW1sZXNzJyxcbiAgc2VsZWN0ZWQ6ICdzZWxlY3RlZCcsXG4gIHNoYXBlOiAnc2hhcGUnLFxuICBzaXplOiAnc2l6ZScsXG4gIHNpemVzOiAnc2l6ZXMnLFxuICBzcGFuOiAnc3BhbicsXG4gIHNwZWxsY2hlY2s6ICdzcGVsbENoZWNrJyxcbiAgc3JjOiAnc3JjJyxcbiAgc3JjZG9jOiAnc3JjRG9jJyxcbiAgc3JjbGFuZzogJ3NyY0xhbmcnLFxuICBzcmNzZXQ6ICdzcmNTZXQnLFxuICBzdGFydDogJ3N0YXJ0JyxcbiAgc3RlcDogJ3N0ZXAnLFxuICBzdHlsZTogJ3N0eWxlJyxcbiAgc3VtbWFyeTogJ3N1bW1hcnknLFxuICB0YWJpbmRleDogJ3RhYkluZGV4JyxcbiAgdGFyZ2V0OiAndGFyZ2V0JyxcbiAgdGl0bGU6ICd0aXRsZScsXG4gIHR5cGU6ICd0eXBlJyxcbiAgdXNlbWFwOiAndXNlTWFwJyxcbiAgdmFsdWU6ICd2YWx1ZScsXG4gIHdpZHRoOiAnd2lkdGgnLFxuICB3bW9kZTogJ3dtb2RlJyxcbiAgd3JhcDogJ3dyYXAnLFxuICAvLyBTVkdcbiAgYWJvdXQ6ICdhYm91dCcsXG4gIGFjY2VudGhlaWdodDogJ2FjY2VudEhlaWdodCcsXG4gICdhY2NlbnQtaGVpZ2h0JzogJ2FjY2VudEhlaWdodCcsXG4gIGFjY3VtdWxhdGU6ICdhY2N1bXVsYXRlJyxcbiAgYWRkaXRpdmU6ICdhZGRpdGl2ZScsXG4gIGFsaWdubWVudGJhc2VsaW5lOiAnYWxpZ25tZW50QmFzZWxpbmUnLFxuICAnYWxpZ25tZW50LWJhc2VsaW5lJzogJ2FsaWdubWVudEJhc2VsaW5lJyxcbiAgYWxsb3dyZW9yZGVyOiAnYWxsb3dSZW9yZGVyJyxcbiAgYWxwaGFiZXRpYzogJ2FscGhhYmV0aWMnLFxuICBhbXBsaXR1ZGU6ICdhbXBsaXR1ZGUnLFxuICBhcmFiaWNmb3JtOiAnYXJhYmljRm9ybScsXG4gICdhcmFiaWMtZm9ybSc6ICdhcmFiaWNGb3JtJyxcbiAgYXNjZW50OiAnYXNjZW50JyxcbiAgYXR0cmlidXRlbmFtZTogJ2F0dHJpYnV0ZU5hbWUnLFxuICBhdHRyaWJ1dGV0eXBlOiAnYXR0cmlidXRlVHlwZScsXG4gIGF1dG9yZXZlcnNlOiAnYXV0b1JldmVyc2UnLFxuICBhemltdXRoOiAnYXppbXV0aCcsXG4gIGJhc2VmcmVxdWVuY3k6ICdiYXNlRnJlcXVlbmN5JyxcbiAgYmFzZWxpbmVzaGlmdDogJ2Jhc2VsaW5lU2hpZnQnLFxuICAnYmFzZWxpbmUtc2hpZnQnOiAnYmFzZWxpbmVTaGlmdCcsXG4gIGJhc2Vwcm9maWxlOiAnYmFzZVByb2ZpbGUnLFxuICBiYm94OiAnYmJveCcsXG4gIGJlZ2luOiAnYmVnaW4nLFxuICBiaWFzOiAnYmlhcycsXG4gIGJ5OiAnYnknLFxuICBjYWxjbW9kZTogJ2NhbGNNb2RlJyxcbiAgY2FwaGVpZ2h0OiAnY2FwSGVpZ2h0JyxcbiAgJ2NhcC1oZWlnaHQnOiAnY2FwSGVpZ2h0JyxcbiAgY2xpcDogJ2NsaXAnLFxuICBjbGlwcGF0aDogJ2NsaXBQYXRoJyxcbiAgJ2NsaXAtcGF0aCc6ICdjbGlwUGF0aCcsXG4gIGNsaXBwYXRodW5pdHM6ICdjbGlwUGF0aFVuaXRzJyxcbiAgY2xpcHJ1bGU6ICdjbGlwUnVsZScsXG4gICdjbGlwLXJ1bGUnOiAnY2xpcFJ1bGUnLFxuICBjb2xvcjogJ2NvbG9yJyxcbiAgY29sb3JpbnRlcnBvbGF0aW9uOiAnY29sb3JJbnRlcnBvbGF0aW9uJyxcbiAgJ2NvbG9yLWludGVycG9sYXRpb24nOiAnY29sb3JJbnRlcnBvbGF0aW9uJyxcbiAgY29sb3JpbnRlcnBvbGF0aW9uZmlsdGVyczogJ2NvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnMnLFxuICAnY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzJzogJ2NvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnMnLFxuICBjb2xvcnByb2ZpbGU6ICdjb2xvclByb2ZpbGUnLFxuICAnY29sb3ItcHJvZmlsZSc6ICdjb2xvclByb2ZpbGUnLFxuICBjb2xvcnJlbmRlcmluZzogJ2NvbG9yUmVuZGVyaW5nJyxcbiAgJ2NvbG9yLXJlbmRlcmluZyc6ICdjb2xvclJlbmRlcmluZycsXG4gIGNvbnRlbnRzY3JpcHR0eXBlOiAnY29udGVudFNjcmlwdFR5cGUnLFxuICBjb250ZW50c3R5bGV0eXBlOiAnY29udGVudFN0eWxlVHlwZScsXG4gIGN1cnNvcjogJ2N1cnNvcicsXG4gIGN4OiAnY3gnLFxuICBjeTogJ2N5JyxcbiAgZDogJ2QnLFxuICBkYXRhdHlwZTogJ2RhdGF0eXBlJyxcbiAgZGVjZWxlcmF0ZTogJ2RlY2VsZXJhdGUnLFxuICBkZXNjZW50OiAnZGVzY2VudCcsXG4gIGRpZmZ1c2Vjb25zdGFudDogJ2RpZmZ1c2VDb25zdGFudCcsXG4gIGRpcmVjdGlvbjogJ2RpcmVjdGlvbicsXG4gIGRpc3BsYXk6ICdkaXNwbGF5JyxcbiAgZGl2aXNvcjogJ2Rpdmlzb3InLFxuICBkb21pbmFudGJhc2VsaW5lOiAnZG9taW5hbnRCYXNlbGluZScsXG4gICdkb21pbmFudC1iYXNlbGluZSc6ICdkb21pbmFudEJhc2VsaW5lJyxcbiAgZHVyOiAnZHVyJyxcbiAgZHg6ICdkeCcsXG4gIGR5OiAnZHknLFxuICBlZGdlbW9kZTogJ2VkZ2VNb2RlJyxcbiAgZWxldmF0aW9uOiAnZWxldmF0aW9uJyxcbiAgZW5hYmxlYmFja2dyb3VuZDogJ2VuYWJsZUJhY2tncm91bmQnLFxuICAnZW5hYmxlLWJhY2tncm91bmQnOiAnZW5hYmxlQmFja2dyb3VuZCcsXG4gIGVuZDogJ2VuZCcsXG4gIGV4cG9uZW50OiAnZXhwb25lbnQnLFxuICBleHRlcm5hbHJlc291cmNlc3JlcXVpcmVkOiAnZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZCcsXG4gIGZpbGw6ICdmaWxsJyxcbiAgZmlsbG9wYWNpdHk6ICdmaWxsT3BhY2l0eScsXG4gICdmaWxsLW9wYWNpdHknOiAnZmlsbE9wYWNpdHknLFxuICBmaWxscnVsZTogJ2ZpbGxSdWxlJyxcbiAgJ2ZpbGwtcnVsZSc6ICdmaWxsUnVsZScsXG4gIGZpbHRlcjogJ2ZpbHRlcicsXG4gIGZpbHRlcnJlczogJ2ZpbHRlclJlcycsXG4gIGZpbHRlcnVuaXRzOiAnZmlsdGVyVW5pdHMnLFxuICBmbG9vZG9wYWNpdHk6ICdmbG9vZE9wYWNpdHknLFxuICAnZmxvb2Qtb3BhY2l0eSc6ICdmbG9vZE9wYWNpdHknLFxuICBmbG9vZGNvbG9yOiAnZmxvb2RDb2xvcicsXG4gICdmbG9vZC1jb2xvcic6ICdmbG9vZENvbG9yJyxcbiAgZm9jdXNhYmxlOiAnZm9jdXNhYmxlJyxcbiAgZm9udGZhbWlseTogJ2ZvbnRGYW1pbHknLFxuICAnZm9udC1mYW1pbHknOiAnZm9udEZhbWlseScsXG4gIGZvbnRzaXplOiAnZm9udFNpemUnLFxuICAnZm9udC1zaXplJzogJ2ZvbnRTaXplJyxcbiAgZm9udHNpemVhZGp1c3Q6ICdmb250U2l6ZUFkanVzdCcsXG4gICdmb250LXNpemUtYWRqdXN0JzogJ2ZvbnRTaXplQWRqdXN0JyxcbiAgZm9udHN0cmV0Y2g6ICdmb250U3RyZXRjaCcsXG4gICdmb250LXN0cmV0Y2gnOiAnZm9udFN0cmV0Y2gnLFxuICBmb250c3R5bGU6ICdmb250U3R5bGUnLFxuICAnZm9udC1zdHlsZSc6ICdmb250U3R5bGUnLFxuICBmb250dmFyaWFudDogJ2ZvbnRWYXJpYW50JyxcbiAgJ2ZvbnQtdmFyaWFudCc6ICdmb250VmFyaWFudCcsXG4gIGZvbnR3ZWlnaHQ6ICdmb250V2VpZ2h0JyxcbiAgJ2ZvbnQtd2VpZ2h0JzogJ2ZvbnRXZWlnaHQnLFxuICBmb3JtYXQ6ICdmb3JtYXQnLFxuICBmcm9tOiAnZnJvbScsXG4gIGZ4OiAnZngnLFxuICBmeTogJ2Z5JyxcbiAgZzE6ICdnMScsXG4gIGcyOiAnZzInLFxuICBnbHlwaG5hbWU6ICdnbHlwaE5hbWUnLFxuICAnZ2x5cGgtbmFtZSc6ICdnbHlwaE5hbWUnLFxuICBnbHlwaG9yaWVudGF0aW9uaG9yaXpvbnRhbDogJ2dseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsJyxcbiAgJ2dseXBoLW9yaWVudGF0aW9uLWhvcml6b250YWwnOiAnZ2x5cGhPcmllbnRhdGlvbkhvcml6b250YWwnLFxuICBnbHlwaG9yaWVudGF0aW9udmVydGljYWw6ICdnbHlwaE9yaWVudGF0aW9uVmVydGljYWwnLFxuICAnZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWwnOiAnZ2x5cGhPcmllbnRhdGlvblZlcnRpY2FsJyxcbiAgZ2x5cGhyZWY6ICdnbHlwaFJlZicsXG4gIGdyYWRpZW50dHJhbnNmb3JtOiAnZ3JhZGllbnRUcmFuc2Zvcm0nLFxuICBncmFkaWVudHVuaXRzOiAnZ3JhZGllbnRVbml0cycsXG4gIGhhbmdpbmc6ICdoYW5naW5nJyxcbiAgaG9yaXphZHZ4OiAnaG9yaXpBZHZYJyxcbiAgJ2hvcml6LWFkdi14JzogJ2hvcml6QWR2WCcsXG4gIGhvcml6b3JpZ2lueDogJ2hvcml6T3JpZ2luWCcsXG4gICdob3Jpei1vcmlnaW4teCc6ICdob3Jpek9yaWdpblgnLFxuICBpZGVvZ3JhcGhpYzogJ2lkZW9ncmFwaGljJyxcbiAgaW1hZ2VyZW5kZXJpbmc6ICdpbWFnZVJlbmRlcmluZycsXG4gICdpbWFnZS1yZW5kZXJpbmcnOiAnaW1hZ2VSZW5kZXJpbmcnLFxuICBpbjI6ICdpbjInLFxuICBpbjogJ2luJyxcbiAgaW5saXN0OiAnaW5saXN0JyxcbiAgaW50ZXJjZXB0OiAnaW50ZXJjZXB0JyxcbiAgazE6ICdrMScsXG4gIGsyOiAnazInLFxuICBrMzogJ2szJyxcbiAgazQ6ICdrNCcsXG4gIGs6ICdrJyxcbiAga2VybmVsbWF0cml4OiAna2VybmVsTWF0cml4JyxcbiAga2VybmVsdW5pdGxlbmd0aDogJ2tlcm5lbFVuaXRMZW5ndGgnLFxuICBrZXJuaW5nOiAna2VybmluZycsXG4gIGtleXBvaW50czogJ2tleVBvaW50cycsXG4gIGtleXNwbGluZXM6ICdrZXlTcGxpbmVzJyxcbiAga2V5dGltZXM6ICdrZXlUaW1lcycsXG4gIGxlbmd0aGFkanVzdDogJ2xlbmd0aEFkanVzdCcsXG4gIGxldHRlcnNwYWNpbmc6ICdsZXR0ZXJTcGFjaW5nJyxcbiAgJ2xldHRlci1zcGFjaW5nJzogJ2xldHRlclNwYWNpbmcnLFxuICBsaWdodGluZ2NvbG9yOiAnbGlnaHRpbmdDb2xvcicsXG4gICdsaWdodGluZy1jb2xvcic6ICdsaWdodGluZ0NvbG9yJyxcbiAgbGltaXRpbmdjb25lYW5nbGU6ICdsaW1pdGluZ0NvbmVBbmdsZScsXG4gIGxvY2FsOiAnbG9jYWwnLFxuICBtYXJrZXJlbmQ6ICdtYXJrZXJFbmQnLFxuICAnbWFya2VyLWVuZCc6ICdtYXJrZXJFbmQnLFxuICBtYXJrZXJoZWlnaHQ6ICdtYXJrZXJIZWlnaHQnLFxuICBtYXJrZXJtaWQ6ICdtYXJrZXJNaWQnLFxuICAnbWFya2VyLW1pZCc6ICdtYXJrZXJNaWQnLFxuICBtYXJrZXJzdGFydDogJ21hcmtlclN0YXJ0JyxcbiAgJ21hcmtlci1zdGFydCc6ICdtYXJrZXJTdGFydCcsXG4gIG1hcmtlcnVuaXRzOiAnbWFya2VyVW5pdHMnLFxuICBtYXJrZXJ3aWR0aDogJ21hcmtlcldpZHRoJyxcbiAgbWFzazogJ21hc2snLFxuICBtYXNrY29udGVudHVuaXRzOiAnbWFza0NvbnRlbnRVbml0cycsXG4gIG1hc2t1bml0czogJ21hc2tVbml0cycsXG4gIG1hdGhlbWF0aWNhbDogJ21hdGhlbWF0aWNhbCcsXG4gIG1vZGU6ICdtb2RlJyxcbiAgbnVtb2N0YXZlczogJ251bU9jdGF2ZXMnLFxuICBvZmZzZXQ6ICdvZmZzZXQnLFxuICBvcGFjaXR5OiAnb3BhY2l0eScsXG4gIG9wZXJhdG9yOiAnb3BlcmF0b3InLFxuICBvcmRlcjogJ29yZGVyJyxcbiAgb3JpZW50OiAnb3JpZW50JyxcbiAgb3JpZW50YXRpb246ICdvcmllbnRhdGlvbicsXG4gIG9yaWdpbjogJ29yaWdpbicsXG4gIG92ZXJmbG93OiAnb3ZlcmZsb3cnLFxuICBvdmVybGluZXBvc2l0aW9uOiAnb3ZlcmxpbmVQb3NpdGlvbicsXG4gICdvdmVybGluZS1wb3NpdGlvbic6ICdvdmVybGluZVBvc2l0aW9uJyxcbiAgb3ZlcmxpbmV0aGlja25lc3M6ICdvdmVybGluZVRoaWNrbmVzcycsXG4gICdvdmVybGluZS10aGlja25lc3MnOiAnb3ZlcmxpbmVUaGlja25lc3MnLFxuICBwYWludG9yZGVyOiAncGFpbnRPcmRlcicsXG4gICdwYWludC1vcmRlcic6ICdwYWludE9yZGVyJyxcbiAgcGFub3NlMTogJ3Bhbm9zZTEnLFxuICAncGFub3NlLTEnOiAncGFub3NlMScsXG4gIHBhdGhsZW5ndGg6ICdwYXRoTGVuZ3RoJyxcbiAgcGF0dGVybmNvbnRlbnR1bml0czogJ3BhdHRlcm5Db250ZW50VW5pdHMnLFxuICBwYXR0ZXJudHJhbnNmb3JtOiAncGF0dGVyblRyYW5zZm9ybScsXG4gIHBhdHRlcm51bml0czogJ3BhdHRlcm5Vbml0cycsXG4gIHBvaW50ZXJldmVudHM6ICdwb2ludGVyRXZlbnRzJyxcbiAgJ3BvaW50ZXItZXZlbnRzJzogJ3BvaW50ZXJFdmVudHMnLFxuICBwb2ludHM6ICdwb2ludHMnLFxuICBwb2ludHNhdHg6ICdwb2ludHNBdFgnLFxuICBwb2ludHNhdHk6ICdwb2ludHNBdFknLFxuICBwb2ludHNhdHo6ICdwb2ludHNBdFonLFxuICBwcmVmaXg6ICdwcmVmaXgnLFxuICBwcmVzZXJ2ZWFscGhhOiAncHJlc2VydmVBbHBoYScsXG4gIHByZXNlcnZlYXNwZWN0cmF0aW86ICdwcmVzZXJ2ZUFzcGVjdFJhdGlvJyxcbiAgcHJpbWl0aXZldW5pdHM6ICdwcmltaXRpdmVVbml0cycsXG4gIHByb3BlcnR5OiAncHJvcGVydHknLFxuICByOiAncicsXG4gIHJhZGl1czogJ3JhZGl1cycsXG4gIHJlZng6ICdyZWZYJyxcbiAgcmVmeTogJ3JlZlknLFxuICByZW5kZXJpbmdpbnRlbnQ6ICdyZW5kZXJpbmdJbnRlbnQnLFxuICAncmVuZGVyaW5nLWludGVudCc6ICdyZW5kZXJpbmdJbnRlbnQnLFxuICByZXBlYXRjb3VudDogJ3JlcGVhdENvdW50JyxcbiAgcmVwZWF0ZHVyOiAncmVwZWF0RHVyJyxcbiAgcmVxdWlyZWRleHRlbnNpb25zOiAncmVxdWlyZWRFeHRlbnNpb25zJyxcbiAgcmVxdWlyZWRmZWF0dXJlczogJ3JlcXVpcmVkRmVhdHVyZXMnLFxuICByZXNvdXJjZTogJ3Jlc291cmNlJyxcbiAgcmVzdGFydDogJ3Jlc3RhcnQnLFxuICByZXN1bHQ6ICdyZXN1bHQnLFxuICByZXN1bHRzOiAncmVzdWx0cycsXG4gIHJvdGF0ZTogJ3JvdGF0ZScsXG4gIHJ4OiAncngnLFxuICByeTogJ3J5JyxcbiAgc2NhbGU6ICdzY2FsZScsXG4gIHNlY3VyaXR5OiAnc2VjdXJpdHknLFxuICBzZWVkOiAnc2VlZCcsXG4gIHNoYXBlcmVuZGVyaW5nOiAnc2hhcGVSZW5kZXJpbmcnLFxuICAnc2hhcGUtcmVuZGVyaW5nJzogJ3NoYXBlUmVuZGVyaW5nJyxcbiAgc2xvcGU6ICdzbG9wZScsXG4gIHNwYWNpbmc6ICdzcGFjaW5nJyxcbiAgc3BlY3VsYXJjb25zdGFudDogJ3NwZWN1bGFyQ29uc3RhbnQnLFxuICBzcGVjdWxhcmV4cG9uZW50OiAnc3BlY3VsYXJFeHBvbmVudCcsXG4gIHNwZWVkOiAnc3BlZWQnLFxuICBzcHJlYWRtZXRob2Q6ICdzcHJlYWRNZXRob2QnLFxuICBzdGFydG9mZnNldDogJ3N0YXJ0T2Zmc2V0JyxcbiAgc3RkZGV2aWF0aW9uOiAnc3RkRGV2aWF0aW9uJyxcbiAgc3RlbWg6ICdzdGVtaCcsXG4gIHN0ZW12OiAnc3RlbXYnLFxuICBzdGl0Y2h0aWxlczogJ3N0aXRjaFRpbGVzJyxcbiAgc3RvcGNvbG9yOiAnc3RvcENvbG9yJyxcbiAgJ3N0b3AtY29sb3InOiAnc3RvcENvbG9yJyxcbiAgc3RvcG9wYWNpdHk6ICdzdG9wT3BhY2l0eScsXG4gICdzdG9wLW9wYWNpdHknOiAnc3RvcE9wYWNpdHknLFxuICBzdHJpa2V0aHJvdWdocG9zaXRpb246ICdzdHJpa2V0aHJvdWdoUG9zaXRpb24nLFxuICAnc3RyaWtldGhyb3VnaC1wb3NpdGlvbic6ICdzdHJpa2V0aHJvdWdoUG9zaXRpb24nLFxuICBzdHJpa2V0aHJvdWdodGhpY2tuZXNzOiAnc3RyaWtldGhyb3VnaFRoaWNrbmVzcycsXG4gICdzdHJpa2V0aHJvdWdoLXRoaWNrbmVzcyc6ICdzdHJpa2V0aHJvdWdoVGhpY2tuZXNzJyxcbiAgc3RyaW5nOiAnc3RyaW5nJyxcbiAgc3Ryb2tlOiAnc3Ryb2tlJyxcbiAgc3Ryb2tlZGFzaGFycmF5OiAnc3Ryb2tlRGFzaGFycmF5JyxcbiAgJ3N0cm9rZS1kYXNoYXJyYXknOiAnc3Ryb2tlRGFzaGFycmF5JyxcbiAgc3Ryb2tlZGFzaG9mZnNldDogJ3N0cm9rZURhc2hvZmZzZXQnLFxuICAnc3Ryb2tlLWRhc2hvZmZzZXQnOiAnc3Ryb2tlRGFzaG9mZnNldCcsXG4gIHN0cm9rZWxpbmVjYXA6ICdzdHJva2VMaW5lY2FwJyxcbiAgJ3N0cm9rZS1saW5lY2FwJzogJ3N0cm9rZUxpbmVjYXAnLFxuICBzdHJva2VsaW5lam9pbjogJ3N0cm9rZUxpbmVqb2luJyxcbiAgJ3N0cm9rZS1saW5lam9pbic6ICdzdHJva2VMaW5lam9pbicsXG4gIHN0cm9rZW1pdGVybGltaXQ6ICdzdHJva2VNaXRlcmxpbWl0JyxcbiAgJ3N0cm9rZS1taXRlcmxpbWl0JzogJ3N0cm9rZU1pdGVybGltaXQnLFxuICBzdHJva2V3aWR0aDogJ3N0cm9rZVdpZHRoJyxcbiAgJ3N0cm9rZS13aWR0aCc6ICdzdHJva2VXaWR0aCcsXG4gIHN0cm9rZW9wYWNpdHk6ICdzdHJva2VPcGFjaXR5JyxcbiAgJ3N0cm9rZS1vcGFjaXR5JzogJ3N0cm9rZU9wYWNpdHknLFxuICBzdXBwcmVzc2NvbnRlbnRlZGl0YWJsZXdhcm5pbmc6ICdzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmcnLFxuICBzdXBwcmVzc2h5ZHJhdGlvbndhcm5pbmc6ICdzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmcnLFxuICBzdXJmYWNlc2NhbGU6ICdzdXJmYWNlU2NhbGUnLFxuICBzeXN0ZW1sYW5ndWFnZTogJ3N5c3RlbUxhbmd1YWdlJyxcbiAgdGFibGV2YWx1ZXM6ICd0YWJsZVZhbHVlcycsXG4gIHRhcmdldHg6ICd0YXJnZXRYJyxcbiAgdGFyZ2V0eTogJ3RhcmdldFknLFxuICB0ZXh0YW5jaG9yOiAndGV4dEFuY2hvcicsXG4gICd0ZXh0LWFuY2hvcic6ICd0ZXh0QW5jaG9yJyxcbiAgdGV4dGRlY29yYXRpb246ICd0ZXh0RGVjb3JhdGlvbicsXG4gICd0ZXh0LWRlY29yYXRpb24nOiAndGV4dERlY29yYXRpb24nLFxuICB0ZXh0bGVuZ3RoOiAndGV4dExlbmd0aCcsXG4gIHRleHRyZW5kZXJpbmc6ICd0ZXh0UmVuZGVyaW5nJyxcbiAgJ3RleHQtcmVuZGVyaW5nJzogJ3RleHRSZW5kZXJpbmcnLFxuICB0bzogJ3RvJyxcbiAgdHJhbnNmb3JtOiAndHJhbnNmb3JtJyxcbiAgdHlwZW9mOiAndHlwZW9mJyxcbiAgdTE6ICd1MScsXG4gIHUyOiAndTInLFxuICB1bmRlcmxpbmVwb3NpdGlvbjogJ3VuZGVybGluZVBvc2l0aW9uJyxcbiAgJ3VuZGVybGluZS1wb3NpdGlvbic6ICd1bmRlcmxpbmVQb3NpdGlvbicsXG4gIHVuZGVybGluZXRoaWNrbmVzczogJ3VuZGVybGluZVRoaWNrbmVzcycsXG4gICd1bmRlcmxpbmUtdGhpY2tuZXNzJzogJ3VuZGVybGluZVRoaWNrbmVzcycsXG4gIHVuaWNvZGU6ICd1bmljb2RlJyxcbiAgdW5pY29kZWJpZGk6ICd1bmljb2RlQmlkaScsXG4gICd1bmljb2RlLWJpZGknOiAndW5pY29kZUJpZGknLFxuICB1bmljb2RlcmFuZ2U6ICd1bmljb2RlUmFuZ2UnLFxuICAndW5pY29kZS1yYW5nZSc6ICd1bmljb2RlUmFuZ2UnLFxuICB1bml0c3BlcmVtOiAndW5pdHNQZXJFbScsXG4gICd1bml0cy1wZXItZW0nOiAndW5pdHNQZXJFbScsXG4gIHVuc2VsZWN0YWJsZTogJ3Vuc2VsZWN0YWJsZScsXG4gIHZhbHBoYWJldGljOiAndkFscGhhYmV0aWMnLFxuICAndi1hbHBoYWJldGljJzogJ3ZBbHBoYWJldGljJyxcbiAgdmFsdWVzOiAndmFsdWVzJyxcbiAgdmVjdG9yZWZmZWN0OiAndmVjdG9yRWZmZWN0JyxcbiAgJ3ZlY3Rvci1lZmZlY3QnOiAndmVjdG9yRWZmZWN0JyxcbiAgdmVyc2lvbjogJ3ZlcnNpb24nLFxuICB2ZXJ0YWR2eTogJ3ZlcnRBZHZZJyxcbiAgJ3ZlcnQtYWR2LXknOiAndmVydEFkdlknLFxuICB2ZXJ0b3JpZ2lueDogJ3ZlcnRPcmlnaW5YJyxcbiAgJ3ZlcnQtb3JpZ2luLXgnOiAndmVydE9yaWdpblgnLFxuICB2ZXJ0b3JpZ2lueTogJ3ZlcnRPcmlnaW5ZJyxcbiAgJ3ZlcnQtb3JpZ2luLXknOiAndmVydE9yaWdpblknLFxuICB2aGFuZ2luZzogJ3ZIYW5naW5nJyxcbiAgJ3YtaGFuZ2luZyc6ICd2SGFuZ2luZycsXG4gIHZpZGVvZ3JhcGhpYzogJ3ZJZGVvZ3JhcGhpYycsXG4gICd2LWlkZW9ncmFwaGljJzogJ3ZJZGVvZ3JhcGhpYycsXG4gIHZpZXdib3g6ICd2aWV3Qm94JyxcbiAgdmlld3RhcmdldDogJ3ZpZXdUYXJnZXQnLFxuICB2aXNpYmlsaXR5OiAndmlzaWJpbGl0eScsXG4gIHZtYXRoZW1hdGljYWw6ICd2TWF0aGVtYXRpY2FsJyxcbiAgJ3YtbWF0aGVtYXRpY2FsJzogJ3ZNYXRoZW1hdGljYWwnLFxuICB2b2NhYjogJ3ZvY2FiJyxcbiAgd2lkdGhzOiAnd2lkdGhzJyxcbiAgd29yZHNwYWNpbmc6ICd3b3JkU3BhY2luZycsXG4gICd3b3JkLXNwYWNpbmcnOiAnd29yZFNwYWNpbmcnLFxuICB3cml0aW5nbW9kZTogJ3dyaXRpbmdNb2RlJyxcbiAgJ3dyaXRpbmctbW9kZSc6ICd3cml0aW5nTW9kZScsXG4gIHgxOiAneDEnLFxuICB4MjogJ3gyJyxcbiAgeDogJ3gnLFxuICB4Y2hhbm5lbHNlbGVjdG9yOiAneENoYW5uZWxTZWxlY3RvcicsXG4gIHhoZWlnaHQ6ICd4SGVpZ2h0JyxcbiAgJ3gtaGVpZ2h0JzogJ3hIZWlnaHQnLFxuICB4bGlua2FjdHVhdGU6ICd4bGlua0FjdHVhdGUnLFxuICAneGxpbms6YWN0dWF0ZSc6ICd4bGlua0FjdHVhdGUnLFxuICB4bGlua2FyY3JvbGU6ICd4bGlua0FyY3JvbGUnLFxuICAneGxpbms6YXJjcm9sZSc6ICd4bGlua0FyY3JvbGUnLFxuICB4bGlua2hyZWY6ICd4bGlua0hyZWYnLFxuICAneGxpbms6aHJlZic6ICd4bGlua0hyZWYnLFxuICB4bGlua3JvbGU6ICd4bGlua1JvbGUnLFxuICAneGxpbms6cm9sZSc6ICd4bGlua1JvbGUnLFxuICB4bGlua3Nob3c6ICd4bGlua1Nob3cnLFxuICAneGxpbms6c2hvdyc6ICd4bGlua1Nob3cnLFxuICB4bGlua3RpdGxlOiAneGxpbmtUaXRsZScsXG4gICd4bGluazp0aXRsZSc6ICd4bGlua1RpdGxlJyxcbiAgeGxpbmt0eXBlOiAneGxpbmtUeXBlJyxcbiAgJ3hsaW5rOnR5cGUnOiAneGxpbmtUeXBlJyxcbiAgeG1sYmFzZTogJ3htbEJhc2UnLFxuICAneG1sOmJhc2UnOiAneG1sQmFzZScsXG4gIHhtbGxhbmc6ICd4bWxMYW5nJyxcbiAgJ3htbDpsYW5nJzogJ3htbExhbmcnLFxuICB4bWxuczogJ3htbG5zJyxcbiAgJ3htbDpzcGFjZSc6ICd4bWxTcGFjZScsXG4gIHhtbG5zeGxpbms6ICd4bWxuc1hsaW5rJyxcbiAgJ3htbG5zOnhsaW5rJzogJ3htbG5zWGxpbmsnLFxuICB4bWxzcGFjZTogJ3htbFNwYWNlJyxcbiAgeTE6ICd5MScsXG4gIHkyOiAneTInLFxuICB5OiAneScsXG4gIHljaGFubmVsc2VsZWN0b3I6ICd5Q2hhbm5lbFNlbGVjdG9yJyxcbiAgejogJ3onLFxuICB6b29tYW5kcGFuOiAnem9vbUFuZFBhbidcbn07XG5cbnZhciB2YWxpZGF0ZVByb3BlcnR5JDEgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICB2YXIgd2FybmVkUHJvcGVydGllcyQxID0ge307XG4gIHZhciBfaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICB2YXIgRVZFTlRfTkFNRV9SRUdFWCA9IC9eb24uLztcbiAgdmFyIElOVkFMSURfRVZFTlRfTkFNRV9SRUdFWCA9IC9eb25bXkEtWl0vO1xuICB2YXIgckFSSUEkMSA9IG5ldyBSZWdFeHAoJ14oYXJpYSktWycgKyBBVFRSSUJVVEVfTkFNRV9DSEFSICsgJ10qJCcpO1xuICB2YXIgckFSSUFDYW1lbCQxID0gbmV3IFJlZ0V4cCgnXihhcmlhKVtBLVpdWycgKyBBVFRSSUJVVEVfTkFNRV9DSEFSICsgJ10qJCcpO1xuXG4gIHZhbGlkYXRlUHJvcGVydHkkMSA9IGZ1bmN0aW9uICh0YWdOYW1lLCBuYW1lLCB2YWx1ZSwgZXZlbnRSZWdpc3RyeSkge1xuICAgIGlmIChfaGFzT3duUHJvcGVydHkuY2FsbCh3YXJuZWRQcm9wZXJ0aWVzJDEsIG5hbWUpICYmIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIGxvd2VyQ2FzZWROYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKGxvd2VyQ2FzZWROYW1lID09PSAnb25mb2N1c2luJyB8fCBsb3dlckNhc2VkTmFtZSA9PT0gJ29uZm9jdXNvdXQnKSB7XG4gICAgICBlcnJvcignUmVhY3QgdXNlcyBvbkZvY3VzIGFuZCBvbkJsdXIgaW5zdGVhZCBvZiBvbkZvY3VzSW4gYW5kIG9uRm9jdXNPdXQuICcgKyAnQWxsIFJlYWN0IGV2ZW50cyBhcmUgbm9ybWFsaXplZCB0byBidWJibGUsIHNvIG9uRm9jdXNJbiBhbmQgb25Gb2N1c091dCAnICsgJ2FyZSBub3QgbmVlZGVkL3N1cHBvcnRlZCBieSBSZWFjdC4nKTtcblxuICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gLy8gV2UgY2FuJ3QgcmVseSBvbiB0aGUgZXZlbnQgc3lzdGVtIGJlaW5nIGluamVjdGVkIG9uIHRoZSBzZXJ2ZXIuXG5cblxuICAgIGlmIChldmVudFJlZ2lzdHJ5ICE9IG51bGwpIHtcbiAgICAgIHZhciByZWdpc3RyYXRpb25OYW1lRGVwZW5kZW5jaWVzID0gZXZlbnRSZWdpc3RyeS5yZWdpc3RyYXRpb25OYW1lRGVwZW5kZW5jaWVzLFxuICAgICAgICAgIHBvc3NpYmxlUmVnaXN0cmF0aW9uTmFtZXMgPSBldmVudFJlZ2lzdHJ5LnBvc3NpYmxlUmVnaXN0cmF0aW9uTmFtZXM7XG5cbiAgICAgIGlmIChyZWdpc3RyYXRpb25OYW1lRGVwZW5kZW5jaWVzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVnaXN0cmF0aW9uTmFtZSA9IHBvc3NpYmxlUmVnaXN0cmF0aW9uTmFtZXMuaGFzT3duUHJvcGVydHkobG93ZXJDYXNlZE5hbWUpID8gcG9zc2libGVSZWdpc3RyYXRpb25OYW1lc1tsb3dlckNhc2VkTmFtZV0gOiBudWxsO1xuXG4gICAgICBpZiAocmVnaXN0cmF0aW9uTmFtZSAhPSBudWxsKSB7XG4gICAgICAgIGVycm9yKCdJbnZhbGlkIGV2ZW50IGhhbmRsZXIgcHJvcGVydHkgYCVzYC4gRGlkIHlvdSBtZWFuIGAlc2A/JywgbmFtZSwgcmVnaXN0cmF0aW9uTmFtZSk7XG5cbiAgICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChFVkVOVF9OQU1FX1JFR0VYLnRlc3QobmFtZSkpIHtcbiAgICAgICAgZXJyb3IoJ1Vua25vd24gZXZlbnQgaGFuZGxlciBwcm9wZXJ0eSBgJXNgLiBJdCB3aWxsIGJlIGlnbm9yZWQuJywgbmFtZSk7XG5cbiAgICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChFVkVOVF9OQU1FX1JFR0VYLnRlc3QobmFtZSkpIHtcbiAgICAgIC8vIElmIG5vIGV2ZW50IHBsdWdpbnMgaGF2ZSBiZWVuIGluamVjdGVkLCB3ZSBhcmUgaW4gYSBzZXJ2ZXIgZW52aXJvbm1lbnQuXG4gICAgICAvLyBTbyB3ZSBjYW4ndCB0ZWxsIGlmIHRoZSBldmVudCBuYW1lIGlzIGNvcnJlY3QgZm9yIHN1cmUsIGJ1dCB3ZSBjYW4gZmlsdGVyXG4gICAgICAvLyBvdXQga25vd24gYmFkIG9uZXMgbGlrZSBgb25jbGlja2AuIFdlIGNhbid0IHN1Z2dlc3QgYSBzcGVjaWZpYyByZXBsYWNlbWVudCB0aG91Z2guXG4gICAgICBpZiAoSU5WQUxJRF9FVkVOVF9OQU1FX1JFR0VYLnRlc3QobmFtZSkpIHtcbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgZXZlbnQgaGFuZGxlciBwcm9wZXJ0eSBgJXNgLiAnICsgJ1JlYWN0IGV2ZW50cyB1c2UgdGhlIGNhbWVsQ2FzZSBuYW1pbmcgY29udmVudGlvbiwgZm9yIGV4YW1wbGUgYG9uQ2xpY2tgLicsIG5hbWUpO1xuICAgICAgfVxuXG4gICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSAvLyBMZXQgdGhlIEFSSUEgYXR0cmlidXRlIGhvb2sgdmFsaWRhdGUgQVJJQSBhdHRyaWJ1dGVzXG5cblxuICAgIGlmIChyQVJJQSQxLnRlc3QobmFtZSkgfHwgckFSSUFDYW1lbCQxLnRlc3QobmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChsb3dlckNhc2VkTmFtZSA9PT0gJ2lubmVyaHRtbCcpIHtcbiAgICAgIGVycm9yKCdEaXJlY3RseSBzZXR0aW5nIHByb3BlcnR5IGBpbm5lckhUTUxgIGlzIG5vdCBwZXJtaXR0ZWQuICcgKyAnRm9yIG1vcmUgaW5mb3JtYXRpb24sIGxvb2t1cCBkb2N1bWVudGF0aW9uIG9uIGBkYW5nZXJvdXNseVNldElubmVySFRNTGAuJyk7XG5cbiAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobG93ZXJDYXNlZE5hbWUgPT09ICdhcmlhJykge1xuICAgICAgZXJyb3IoJ1RoZSBgYXJpYWAgYXR0cmlidXRlIGlzIHJlc2VydmVkIGZvciBmdXR1cmUgdXNlIGluIFJlYWN0LiAnICsgJ1Bhc3MgaW5kaXZpZHVhbCBgYXJpYS1gIGF0dHJpYnV0ZXMgaW5zdGVhZC4nKTtcblxuICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChsb3dlckNhc2VkTmFtZSA9PT0gJ2lzJyAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhIGAlc2AgZm9yIGEgc3RyaW5nIGF0dHJpYnV0ZSBgaXNgLiBJZiB0aGlzIGlzIGV4cGVjdGVkLCBjYXN0ICcgKyAndGhlIHZhbHVlIHRvIGEgc3RyaW5nLicsIHR5cGVvZiB2YWx1ZSk7XG5cbiAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWx1ZSkpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBOYU4gZm9yIHRoZSBgJXNgIGF0dHJpYnV0ZS4gSWYgdGhpcyBpcyBleHBlY3RlZCwgY2FzdCAnICsgJ3RoZSB2YWx1ZSB0byBhIHN0cmluZy4nLCBuYW1lKTtcblxuICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBwcm9wZXJ0eUluZm8gPSBnZXRQcm9wZXJ0eUluZm8obmFtZSk7XG4gICAgdmFyIGlzUmVzZXJ2ZWQgPSBwcm9wZXJ0eUluZm8gIT09IG51bGwgJiYgcHJvcGVydHlJbmZvLnR5cGUgPT09IFJFU0VSVkVEOyAvLyBLbm93biBhdHRyaWJ1dGVzIHNob3VsZCBtYXRjaCB0aGUgY2FzaW5nIHNwZWNpZmllZCBpbiB0aGUgcHJvcGVydHkgY29uZmlnLlxuXG4gICAgaWYgKHBvc3NpYmxlU3RhbmRhcmROYW1lcy5oYXNPd25Qcm9wZXJ0eShsb3dlckNhc2VkTmFtZSkpIHtcbiAgICAgIHZhciBzdGFuZGFyZE5hbWUgPSBwb3NzaWJsZVN0YW5kYXJkTmFtZXNbbG93ZXJDYXNlZE5hbWVdO1xuXG4gICAgICBpZiAoc3RhbmRhcmROYW1lICE9PSBuYW1lKSB7XG4gICAgICAgIGVycm9yKCdJbnZhbGlkIERPTSBwcm9wZXJ0eSBgJXNgLiBEaWQgeW91IG1lYW4gYCVzYD8nLCBuYW1lLCBzdGFuZGFyZE5hbWUpO1xuXG4gICAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWlzUmVzZXJ2ZWQgJiYgbmFtZSAhPT0gbG93ZXJDYXNlZE5hbWUpIHtcbiAgICAgIC8vIFVua25vd24gYXR0cmlidXRlcyBzaG91bGQgaGF2ZSBsb3dlcmNhc2UgY2FzaW5nIHNpbmNlIHRoYXQncyBob3cgdGhleVxuICAgICAgLy8gd2lsbCBiZSBjYXNlZCBhbnl3YXkgd2l0aCBzZXJ2ZXIgcmVuZGVyaW5nLlxuICAgICAgZXJyb3IoJ1JlYWN0IGRvZXMgbm90IHJlY29nbml6ZSB0aGUgYCVzYCBwcm9wIG9uIGEgRE9NIGVsZW1lbnQuIElmIHlvdSAnICsgJ2ludGVudGlvbmFsbHkgd2FudCBpdCB0byBhcHBlYXIgaW4gdGhlIERPTSBhcyBhIGN1c3RvbSAnICsgJ2F0dHJpYnV0ZSwgc3BlbGwgaXQgYXMgbG93ZXJjYXNlIGAlc2AgaW5zdGVhZC4gJyArICdJZiB5b3UgYWNjaWRlbnRhbGx5IHBhc3NlZCBpdCBmcm9tIGEgcGFyZW50IGNvbXBvbmVudCwgcmVtb3ZlICcgKyAnaXQgZnJvbSB0aGUgRE9NIGVsZW1lbnQuJywgbmFtZSwgbG93ZXJDYXNlZE5hbWUpO1xuXG4gICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nICYmIHNob3VsZFJlbW92ZUF0dHJpYnV0ZVdpdGhXYXJuaW5nKG5hbWUsIHZhbHVlLCBwcm9wZXJ0eUluZm8sIGZhbHNlKSkge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGVycm9yKCdSZWNlaXZlZCBgJXNgIGZvciBhIG5vbi1ib29sZWFuIGF0dHJpYnV0ZSBgJXNgLlxcblxcbicgKyAnSWYgeW91IHdhbnQgdG8gd3JpdGUgaXQgdG8gdGhlIERPTSwgcGFzcyBhIHN0cmluZyBpbnN0ZWFkOiAnICsgJyVzPVwiJXNcIiBvciAlcz17dmFsdWUudG9TdHJpbmcoKX0uJywgdmFsdWUsIG5hbWUsIG5hbWUsIHZhbHVlLCBuYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yKCdSZWNlaXZlZCBgJXNgIGZvciBhIG5vbi1ib29sZWFuIGF0dHJpYnV0ZSBgJXNgLlxcblxcbicgKyAnSWYgeW91IHdhbnQgdG8gd3JpdGUgaXQgdG8gdGhlIERPTSwgcGFzcyBhIHN0cmluZyBpbnN0ZWFkOiAnICsgJyVzPVwiJXNcIiBvciAlcz17dmFsdWUudG9TdHJpbmcoKX0uXFxuXFxuJyArICdJZiB5b3UgdXNlZCB0byBjb25kaXRpb25hbGx5IG9taXQgaXQgd2l0aCAlcz17Y29uZGl0aW9uICYmIHZhbHVlfSwgJyArICdwYXNzICVzPXtjb25kaXRpb24gPyB2YWx1ZSA6IHVuZGVmaW5lZH0gaW5zdGVhZC4nLCB2YWx1ZSwgbmFtZSwgbmFtZSwgdmFsdWUsIG5hbWUsIG5hbWUsIG5hbWUpO1xuICAgICAgfVxuXG4gICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSAvLyBOb3cgdGhhdCB3ZSd2ZSB2YWxpZGF0ZWQgY2FzaW5nLCBkbyBub3QgdmFsaWRhdGVcbiAgICAvLyBkYXRhIHR5cGVzIGZvciByZXNlcnZlZCBwcm9wc1xuXG5cbiAgICBpZiAoaXNSZXNlcnZlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSAvLyBXYXJuIHdoZW4gYSBrbm93biBhdHRyaWJ1dGUgaXMgYSBiYWQgdHlwZVxuXG5cbiAgICBpZiAoc2hvdWxkUmVtb3ZlQXR0cmlidXRlV2l0aFdhcm5pbmcobmFtZSwgdmFsdWUsIHByb3BlcnR5SW5mbywgZmFsc2UpKSB7XG4gICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gLy8gV2FybiB3aGVuIHBhc3NpbmcgdGhlIHN0cmluZ3MgJ2ZhbHNlJyBvciAndHJ1ZScgaW50byBhIGJvb2xlYW4gcHJvcFxuXG5cbiAgICBpZiAoKHZhbHVlID09PSAnZmFsc2UnIHx8IHZhbHVlID09PSAndHJ1ZScpICYmIHByb3BlcnR5SW5mbyAhPT0gbnVsbCAmJiBwcm9wZXJ0eUluZm8udHlwZSA9PT0gQk9PTEVBTikge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIHRoZSBzdHJpbmcgYCVzYCBmb3IgdGhlIGJvb2xlYW4gYXR0cmlidXRlIGAlc2AuICcgKyAnJXMgJyArICdEaWQgeW91IG1lYW4gJXM9eyVzfT8nLCB2YWx1ZSwgbmFtZSwgdmFsdWUgPT09ICdmYWxzZScgPyAnVGhlIGJyb3dzZXIgd2lsbCBpbnRlcnByZXQgaXQgYXMgYSB0cnV0aHkgdmFsdWUuJyA6ICdBbHRob3VnaCB0aGlzIHdvcmtzLCBpdCB3aWxsIG5vdCB3b3JrIGFzIGV4cGVjdGVkIGlmIHlvdSBwYXNzIHRoZSBzdHJpbmcgXCJmYWxzZVwiLicsIG5hbWUsIHZhbHVlKTtcblxuICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xufVxuXG52YXIgd2FyblVua25vd25Qcm9wZXJ0aWVzID0gZnVuY3Rpb24gKHR5cGUsIHByb3BzLCBldmVudFJlZ2lzdHJ5KSB7XG4gIHtcbiAgICB2YXIgdW5rbm93blByb3BzID0gW107XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIHZhciBpc1ZhbGlkID0gdmFsaWRhdGVQcm9wZXJ0eSQxKHR5cGUsIGtleSwgcHJvcHNba2V5XSwgZXZlbnRSZWdpc3RyeSk7XG5cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICB1bmtub3duUHJvcHMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB1bmtub3duUHJvcFN0cmluZyA9IHVua25vd25Qcm9wcy5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHJldHVybiAnYCcgKyBwcm9wICsgJ2AnO1xuICAgIH0pLmpvaW4oJywgJyk7XG5cbiAgICBpZiAodW5rbm93blByb3BzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgZXJyb3IoJ0ludmFsaWQgdmFsdWUgZm9yIHByb3AgJXMgb24gPCVzPiB0YWcuIEVpdGhlciByZW1vdmUgaXQgZnJvbSB0aGUgZWxlbWVudCwgJyArICdvciBwYXNzIGEgc3RyaW5nIG9yIG51bWJlciB2YWx1ZSB0byBrZWVwIGl0IGluIHRoZSBET00uICcgKyAnRm9yIGRldGFpbHMsIHNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvYXR0cmlidXRlLWJlaGF2aW9yICcsIHVua25vd25Qcm9wU3RyaW5nLCB0eXBlKTtcbiAgICB9IGVsc2UgaWYgKHVua25vd25Qcm9wcy5sZW5ndGggPiAxKSB7XG4gICAgICBlcnJvcignSW52YWxpZCB2YWx1ZXMgZm9yIHByb3BzICVzIG9uIDwlcz4gdGFnLiBFaXRoZXIgcmVtb3ZlIHRoZW0gZnJvbSB0aGUgZWxlbWVudCwgJyArICdvciBwYXNzIGEgc3RyaW5nIG9yIG51bWJlciB2YWx1ZSB0byBrZWVwIHRoZW0gaW4gdGhlIERPTS4gJyArICdGb3IgZGV0YWlscywgc2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9hdHRyaWJ1dGUtYmVoYXZpb3IgJywgdW5rbm93blByb3BTdHJpbmcsIHR5cGUpO1xuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wZXJ0aWVzJDIodHlwZSwgcHJvcHMsIGV2ZW50UmVnaXN0cnkpIHtcbiAgaWYgKGlzQ3VzdG9tQ29tcG9uZW50KHR5cGUsIHByb3BzKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHdhcm5Vbmtub3duUHJvcGVydGllcyh0eXBlLCBwcm9wcywgZXZlbnRSZWdpc3RyeSk7XG59XG5cbnZhciB0b0FycmF5ID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheTsgLy8gVGhpcyBpcyBvbmx5IHVzZWQgaW4gREVWLlxuLy8gRWFjaCBlbnRyeSBpcyBgdGhpcy5zdGFja2AgZnJvbSBhIGN1cnJlbnRseSBleGVjdXRpbmcgcmVuZGVyZXIgaW5zdGFuY2UuXG4vLyAoVGhlcmUgbWF5IGJlIG1vcmUgdGhhbiBvbmUgYmVjYXVzZSBSZWFjdERPTVNlcnZlciBpcyByZWVudHJhbnQpLlxuLy8gRWFjaCBzdGFjayBpcyBhbiBhcnJheSBvZiBmcmFtZXMgd2hpY2ggbWF5IGNvbnRhaW4gbmVzdGVkIHN0YWNrcyBvZiBlbGVtZW50cy5cblxudmFyIGN1cnJlbnREZWJ1Z1N0YWNrcyA9IFtdO1xudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxO1xudmFyIHByZXZHZXRDdXJyZW50U3RhY2tJbXBsID0gbnVsbDtcblxudmFyIGdldEN1cnJlbnRTZXJ2ZXJTdGFja0ltcGwgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnJztcbn07XG5cbnZhciBkZXNjcmliZVN0YWNrRnJhbWUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICByZXR1cm4gJyc7XG59O1xuXG52YXIgdmFsaWRhdGVQcm9wZXJ0aWVzSW5EZXZlbG9wbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBwcm9wcykge307XG5cbnZhciBwdXNoQ3VycmVudERlYnVnU3RhY2sgPSBmdW5jdGlvbiAoc3RhY2spIHt9O1xuXG52YXIgcHVzaEVsZW1lbnRUb0RlYnVnU3RhY2sgPSBmdW5jdGlvbiAoZWxlbWVudCkge307XG5cbnZhciBwb3BDdXJyZW50RGVidWdTdGFjayA9IGZ1bmN0aW9uICgpIHt9O1xuXG52YXIgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnRleHRBc0NvbnN1bWVyID0gZmFsc2U7XG5cbntcbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuICB2YWxpZGF0ZVByb3BlcnRpZXNJbkRldmVsb3BtZW50ID0gZnVuY3Rpb24gKHR5cGUsIHByb3BzKSB7XG4gICAgdmFsaWRhdGVQcm9wZXJ0aWVzKHR5cGUsIHByb3BzKTtcbiAgICB2YWxpZGF0ZVByb3BlcnRpZXMkMSh0eXBlLCBwcm9wcyk7XG4gICAgdmFsaWRhdGVQcm9wZXJ0aWVzJDIodHlwZSwgcHJvcHMsIG51bGwpO1xuICB9O1xuXG4gIGRlc2NyaWJlU3RhY2tGcmFtZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgbnVsbCk7XG4gIH07XG5cbiAgcHVzaEN1cnJlbnREZWJ1Z1N0YWNrID0gZnVuY3Rpb24gKHN0YWNrKSB7XG4gICAgY3VycmVudERlYnVnU3RhY2tzLnB1c2goc3RhY2spO1xuXG4gICAgaWYgKGN1cnJlbnREZWJ1Z1N0YWNrcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIFdlIGFyZSBlbnRlcmluZyBhIHNlcnZlciByZW5kZXJlci5cbiAgICAgIC8vIFJlbWVtYmVyIHRoZSBwcmV2aW91cyAoZS5nLiBjbGllbnQpIGdsb2JhbCBzdGFjayBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHByZXZHZXRDdXJyZW50U3RhY2tJbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLmdldEN1cnJlbnRTdGFjaztcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5nZXRDdXJyZW50U3RhY2sgPSBnZXRDdXJyZW50U2VydmVyU3RhY2tJbXBsO1xuICAgIH1cbiAgfTtcblxuICBwdXNoRWxlbWVudFRvRGVidWdTdGFjayA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgLy8gRm9yIHRoZSBpbm5lcm1vc3QgZXhlY3V0aW5nIFJlYWN0RE9NU2VydmVyIGNhbGwsXG4gICAgdmFyIHN0YWNrID0gY3VycmVudERlYnVnU3RhY2tzW2N1cnJlbnREZWJ1Z1N0YWNrcy5sZW5ndGggLSAxXTsgLy8gVGFrZSB0aGUgaW5uZXJtb3N0IGV4ZWN1dGluZyBmcmFtZSAoZS5nLiA8Rm9vPiksXG5cbiAgICB2YXIgZnJhbWUgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTsgLy8gYW5kIHJlY29yZCB0aGF0IGl0IGhhcyBvbmUgbW9yZSBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCBpdC5cblxuICAgIGZyYW1lLmRlYnVnRWxlbWVudFN0YWNrLnB1c2goZWxlbWVudCk7IC8vIFdlIG9ubHkgbmVlZCB0aGlzIGJlY2F1c2Ugd2UgdGFpbC1vcHRpbWl6ZSBzaW5nbGUtZWxlbWVudFxuICAgIC8vIGNoaWxkcmVuIGFuZCBkaXJlY3RseSBoYW5kbGUgdGhlbSBpbiBhbiBpbm5lciBsb29wIGluc3RlYWQgb2ZcbiAgICAvLyBjcmVhdGluZyBzZXBhcmF0ZSBmcmFtZXMgZm9yIHRoZW0uXG4gIH07XG5cbiAgcG9wQ3VycmVudERlYnVnU3RhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgY3VycmVudERlYnVnU3RhY2tzLnBvcCgpO1xuXG4gICAgaWYgKGN1cnJlbnREZWJ1Z1N0YWNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIFdlIGFyZSBleGl0aW5nIHRoZSBzZXJ2ZXIgcmVuZGVyZXIuXG4gICAgICAvLyBSZXN0b3JlIHRoZSBwcmV2aW91cyAoZS5nLiBjbGllbnQpIGdsb2JhbCBzdGFjayBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5nZXRDdXJyZW50U3RhY2sgPSBwcmV2R2V0Q3VycmVudFN0YWNrSW1wbDtcbiAgICAgIHByZXZHZXRDdXJyZW50U3RhY2tJbXBsID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgZ2V0Q3VycmVudFNlcnZlclN0YWNrSW1wbCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY3VycmVudERlYnVnU3RhY2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gTm90aGluZyBpcyBjdXJyZW50bHkgcmVuZGVyaW5nLlxuICAgICAgcmV0dXJuICcnO1xuICAgIH0gLy8gUmVhY3RET01TZXJ2ZXIgaXMgcmVlbnRyYW50IHNvIHRoZXJlIG1heSBiZSBtdWx0aXBsZSBjYWxscyBhdCB0aGUgc2FtZSB0aW1lLlxuICAgIC8vIFRha2UgdGhlIGZyYW1lcyBmcm9tIHRoZSBpbm5lcm1vc3QgY2FsbCB3aGljaCBpcyB0aGUgbGFzdCBpbiB0aGUgYXJyYXkuXG5cblxuICAgIHZhciBmcmFtZXMgPSBjdXJyZW50RGVidWdTdGFja3NbY3VycmVudERlYnVnU3RhY2tzLmxlbmd0aCAtIDFdO1xuICAgIHZhciBzdGFjayA9ICcnOyAvLyBHbyB0aHJvdWdoIGV2ZXJ5IGZyYW1lIGluIHRoZSBzdGFjayBmcm9tIHRoZSBpbm5lcm1vc3Qgb25lLlxuXG4gICAgZm9yICh2YXIgaSA9IGZyYW1lcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGZyYW1lID0gZnJhbWVzW2ldOyAvLyBFdmVyeSBmcmFtZSBtaWdodCBoYXZlIG1vcmUgdGhhbiBvbmUgZGVidWcgZWxlbWVudCBzdGFjayBlbnRyeSBhc3NvY2lhdGVkIHdpdGggaXQuXG4gICAgICAvLyBUaGlzIGlzIGJlY2F1c2Ugc2luZ2xlLWNoaWxkIG5lc3RpbmcgZG9lc24ndCBjcmVhdGUgbWF0ZXJpYWxpemVkIGZyYW1lcy5cbiAgICAgIC8vIEluc3RlYWQgaXQgd291bGQgcHVzaCB0aGVtIHRocm91Z2ggYHB1c2hFbGVtZW50VG9EZWJ1Z1N0YWNrKClgLlxuXG4gICAgICB2YXIgZGVidWdFbGVtZW50U3RhY2sgPSBmcmFtZS5kZWJ1Z0VsZW1lbnRTdGFjaztcblxuICAgICAgZm9yICh2YXIgaWkgPSBkZWJ1Z0VsZW1lbnRTdGFjay5sZW5ndGggLSAxOyBpaSA+PSAwOyBpaS0tKSB7XG4gICAgICAgIHN0YWNrICs9IGRlc2NyaWJlU3RhY2tGcmFtZShkZWJ1Z0VsZW1lbnRTdGFja1tpaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxudmFyIGRpZFdhcm5EZWZhdWx0SW5wdXRWYWx1ZSA9IGZhbHNlO1xudmFyIGRpZFdhcm5EZWZhdWx0Q2hlY2tlZCA9IGZhbHNlO1xudmFyIGRpZFdhcm5EZWZhdWx0U2VsZWN0VmFsdWUgPSBmYWxzZTtcbnZhciBkaWRXYXJuRGVmYXVsdFRleHRhcmVhVmFsdWUgPSBmYWxzZTtcbnZhciBkaWRXYXJuSW52YWxpZE9wdGlvbkNoaWxkcmVuID0gZmFsc2U7XG52YXIgZGlkV2FybkFib3V0Tm9vcFVwZGF0ZUZvckNvbXBvbmVudCA9IHt9O1xudmFyIGRpZFdhcm5BYm91dEJhZENsYXNzID0ge307XG52YXIgZGlkV2FybkFib3V0TW9kdWxlUGF0dGVybkNvbXBvbmVudCA9IHt9O1xudmFyIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRXaWxsTW91bnQgPSB7fTtcbnZhciBkaWRXYXJuQWJvdXRVbmRlZmluZWREZXJpdmVkU3RhdGUgPSB7fTtcbnZhciBkaWRXYXJuQWJvdXRVbmluaXRpYWxpemVkU3RhdGUgPSB7fTtcbnZhciB2YWx1ZVByb3BOYW1lcyA9IFsndmFsdWUnLCAnZGVmYXVsdFZhbHVlJ107XG52YXIgbmV3bGluZUVhdGluZ1RhZ3MgPSB7XG4gIGxpc3Rpbmc6IHRydWUsXG4gIHByZTogdHJ1ZSxcbiAgdGV4dGFyZWE6IHRydWVcbn07IC8vIFdlIGFjY2VwdCBhbnkgdGFnIHRvIGJlIHJlbmRlcmVkIGJ1dCBzaW5jZSB0aGlzIGdldHMgaW5qZWN0ZWQgaW50byBhcmJpdHJhcnlcbi8vIEhUTUwsIHdlIHdhbnQgdG8gbWFrZSBzdXJlIHRoYXQgaXQncyBhIHNhZmUgdGFnLlxuLy8gaHR0cDovL3d3dy53My5vcmcvVFIvUkVDLXhtbC8jTlQtTmFtZVxuXG52YXIgVkFMSURfVEFHX1JFR0VYID0gL15bYS16QS1aXVthLXpBLVo6X1xcLlxcLVxcZF0qJC87IC8vIFNpbXBsaWZpZWQgc3Vic2V0XG5cbnZhciB2YWxpZGF0ZWRUYWdDYWNoZSA9IHt9O1xuXG5mdW5jdGlvbiB2YWxpZGF0ZURhbmdlcm91c1RhZyh0YWcpIHtcbiAgaWYgKCF2YWxpZGF0ZWRUYWdDYWNoZS5oYXNPd25Qcm9wZXJ0eSh0YWcpKSB7XG4gICAgaWYgKCFWQUxJRF9UQUdfUkVHRVgudGVzdCh0YWcpKSB7XG4gICAgICB7XG4gICAgICAgIHRocm93IEVycm9yKCBcIkludmFsaWQgdGFnOiBcIiArIHRhZyApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhbGlkYXRlZFRhZ0NhY2hlW3RhZ10gPSB0cnVlO1xuICB9XG59XG5cbnZhciBzdHlsZU5hbWVDYWNoZSA9IHt9O1xuXG52YXIgcHJvY2Vzc1N0eWxlTmFtZSA9IGZ1bmN0aW9uIChzdHlsZU5hbWUpIHtcbiAgaWYgKHN0eWxlTmFtZUNhY2hlLmhhc093blByb3BlcnR5KHN0eWxlTmFtZSkpIHtcbiAgICByZXR1cm4gc3R5bGVOYW1lQ2FjaGVbc3R5bGVOYW1lXTtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBoeXBoZW5hdGVTdHlsZU5hbWUoc3R5bGVOYW1lKTtcbiAgc3R5bGVOYW1lQ2FjaGVbc3R5bGVOYW1lXSA9IHJlc3VsdDtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZU1hcmt1cEZvclN0eWxlcyhzdHlsZXMpIHtcbiAgdmFyIHNlcmlhbGl6ZWQgPSAnJztcbiAgdmFyIGRlbGltaXRlciA9ICcnO1xuXG4gIGZvciAodmFyIHN0eWxlTmFtZSBpbiBzdHlsZXMpIHtcbiAgICBpZiAoIXN0eWxlcy5oYXNPd25Qcm9wZXJ0eShzdHlsZU5hbWUpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgaXNDdXN0b21Qcm9wZXJ0eSA9IHN0eWxlTmFtZS5pbmRleE9mKCctLScpID09PSAwO1xuICAgIHZhciBzdHlsZVZhbHVlID0gc3R5bGVzW3N0eWxlTmFtZV07XG5cbiAgICB7XG4gICAgICBpZiAoIWlzQ3VzdG9tUHJvcGVydHkpIHtcbiAgICAgICAgd2FyblZhbGlkU3R5bGUkMShzdHlsZU5hbWUsIHN0eWxlVmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdHlsZVZhbHVlICE9IG51bGwpIHtcbiAgICAgIHNlcmlhbGl6ZWQgKz0gZGVsaW1pdGVyICsgKGlzQ3VzdG9tUHJvcGVydHkgPyBzdHlsZU5hbWUgOiBwcm9jZXNzU3R5bGVOYW1lKHN0eWxlTmFtZSkpICsgJzonO1xuICAgICAgc2VyaWFsaXplZCArPSBkYW5nZXJvdXNTdHlsZVZhbHVlKHN0eWxlTmFtZSwgc3R5bGVWYWx1ZSwgaXNDdXN0b21Qcm9wZXJ0eSk7XG4gICAgICBkZWxpbWl0ZXIgPSAnOyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHNlcmlhbGl6ZWQgfHwgbnVsbDtcbn1cblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiBnZXRDb21wb25lbnROYW1lKF9jb25zdHJ1Y3RvcikgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArICcuJyArIGNhbGxlck5hbWU7XG5cbiAgICBpZiAoZGlkV2FybkFib3V0Tm9vcFVwZGF0ZUZvckNvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVycm9yKCclcyguLi4pOiBDYW4gb25seSB1cGRhdGUgYSBtb3VudGluZyBjb21wb25lbnQuICcgKyAnVGhpcyB1c3VhbGx5IG1lYW5zIHlvdSBjYWxsZWQgJXMoKSBvdXRzaWRlIGNvbXBvbmVudFdpbGxNb3VudCgpIG9uIHRoZSBzZXJ2ZXIuICcgKyAnVGhpcyBpcyBhIG5vLW9wLlxcblxcblBsZWFzZSBjaGVjayB0aGUgY29kZSBmb3IgdGhlICVzIGNvbXBvbmVudC4nLCBjYWxsZXJOYW1lLCBjYWxsZXJOYW1lLCBjb21wb25lbnROYW1lKTtcblxuICAgIGRpZFdhcm5BYm91dE5vb3BVcGRhdGVGb3JDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdCQxKENvbXBvbmVudCkge1xuICByZXR1cm4gQ29tcG9uZW50LnByb3RvdHlwZSAmJiBDb21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIGdldE5vbkNoaWxkcmVuSW5uZXJNYXJrdXAocHJvcHMpIHtcbiAgdmFyIGlubmVySFRNTCA9IHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MO1xuXG4gIGlmIChpbm5lckhUTUwgIT0gbnVsbCkge1xuICAgIGlmIChpbm5lckhUTUwuX19odG1sICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBpbm5lckhUTUwuX19odG1sO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgY29udGVudCA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY29udGVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBlc2NhcGVUZXh0Rm9yQnJvd3Nlcihjb250ZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gZmxhdHRlblRvcExldmVsQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgaWYgKCFSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZHJlbikpIHtcbiAgICByZXR1cm4gdG9BcnJheShjaGlsZHJlbik7XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGNoaWxkcmVuO1xuXG4gIGlmIChlbGVtZW50LnR5cGUgIT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICByZXR1cm4gW2VsZW1lbnRdO1xuICB9XG5cbiAgdmFyIGZyYWdtZW50Q2hpbGRyZW4gPSBlbGVtZW50LnByb3BzLmNoaWxkcmVuO1xuXG4gIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoZnJhZ21lbnRDaGlsZHJlbikpIHtcbiAgICByZXR1cm4gdG9BcnJheShmcmFnbWVudENoaWxkcmVuKTtcbiAgfVxuXG4gIHZhciBmcmFnbWVudENoaWxkRWxlbWVudCA9IGZyYWdtZW50Q2hpbGRyZW47XG4gIHJldHVybiBbZnJhZ21lbnRDaGlsZEVsZW1lbnRdO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuT3B0aW9uQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgaWYgKGNoaWxkcmVuID09PSB1bmRlZmluZWQgfHwgY2hpbGRyZW4gPT09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgY29udGVudCA9ICcnOyAvLyBGbGF0dGVuIGNoaWxkcmVuIGFuZCB3YXJuIGlmIHRoZXkgYXJlbid0IHN0cmluZ3Mgb3IgbnVtYmVycztcbiAgLy8gaW52YWxpZCB0eXBlcyBhcmUgaWdub3JlZC5cblxuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnRlbnQgKz0gY2hpbGQ7XG5cbiAgICB7XG4gICAgICBpZiAoIWRpZFdhcm5JbnZhbGlkT3B0aW9uQ2hpbGRyZW4gJiYgdHlwZW9mIGNoaWxkICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgY2hpbGQgIT09ICdudW1iZXInKSB7XG4gICAgICAgIGRpZFdhcm5JbnZhbGlkT3B0aW9uQ2hpbGRyZW4gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCdPbmx5IHN0cmluZ3MgYW5kIG51bWJlcnMgYXJlIHN1cHBvcnRlZCBhcyA8b3B0aW9uPiBjaGlsZHJlbi4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gY29udGVudDtcbn1cblxudmFyIGhhc093blByb3BlcnR5JDIgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFNUWUxFID0gJ3N0eWxlJztcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAgY2hpbGRyZW46IG51bGwsXG4gIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBudWxsLFxuICBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmc6IG51bGwsXG4gIHN1cHByZXNzSHlkcmF0aW9uV2FybmluZzogbnVsbFxufTtcblxuZnVuY3Rpb24gY3JlYXRlT3BlblRhZ01hcmt1cCh0YWdWZXJiYXRpbSwgdGFnTG93ZXJjYXNlLCBwcm9wcywgbmFtZXNwYWNlLCBtYWtlU3RhdGljTWFya3VwLCBpc1Jvb3RFbGVtZW50KSB7XG4gIHZhciByZXQgPSAnPCcgKyB0YWdWZXJiYXRpbTtcbiAgdmFyIGlzQ3VzdG9tQ29tcG9uZW50JDEgPSBpc0N1c3RvbUNvbXBvbmVudCh0YWdMb3dlcmNhc2UsIHByb3BzKTtcblxuICBmb3IgKHZhciBwcm9wS2V5IGluIHByb3BzKSB7XG4gICAgaWYgKCFoYXNPd25Qcm9wZXJ0eSQyLmNhbGwocHJvcHMsIHByb3BLZXkpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcEtleV07XG5cbiAgICBpZiAocHJvcFZhbHVlID09IG51bGwpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChwcm9wS2V5ID09PSBTVFlMRSkge1xuICAgICAgcHJvcFZhbHVlID0gY3JlYXRlTWFya3VwRm9yU3R5bGVzKHByb3BWYWx1ZSk7XG4gICAgfVxuXG4gICAgdmFyIG1hcmt1cCA9IG51bGw7XG5cbiAgICBpZiAoaXNDdXN0b21Db21wb25lbnQkMSkge1xuICAgICAgaWYgKCFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wS2V5KSkge1xuICAgICAgICBtYXJrdXAgPSBjcmVhdGVNYXJrdXBGb3JDdXN0b21BdHRyaWJ1dGUocHJvcEtleSwgcHJvcFZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWFya3VwID0gY3JlYXRlTWFya3VwRm9yUHJvcGVydHkocHJvcEtleSwgcHJvcFZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAobWFya3VwKSB7XG4gICAgICByZXQgKz0gJyAnICsgbWFya3VwO1xuICAgIH1cbiAgfSAvLyBGb3Igc3RhdGljIHBhZ2VzLCBubyBuZWVkIHRvIHB1dCBSZWFjdCBJRCBhbmQgY2hlY2tzdW0uIFNhdmVzIGxvdHMgb2ZcbiAgLy8gYnl0ZXMuXG5cblxuICBpZiAobWFrZVN0YXRpY01hcmt1cCkge1xuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBpZiAoaXNSb290RWxlbWVudCkge1xuICAgIHJldCArPSAnICcgKyBjcmVhdGVNYXJrdXBGb3JSb290KCk7XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVJlbmRlclJlc3VsdChjaGlsZCwgdHlwZSkge1xuICBpZiAoY2hpbGQgPT09IHVuZGVmaW5lZCkge1xuICAgIHtcbiAgICAgIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoIChnZXRDb21wb25lbnROYW1lKHR5cGUpIHx8ICdDb21wb25lbnQnKSArIFwiKC4uLik6IE5vdGhpbmcgd2FzIHJldHVybmVkIGZyb20gcmVuZGVyLiBUaGlzIHVzdWFsbHkgbWVhbnMgYSByZXR1cm4gc3RhdGVtZW50IGlzIG1pc3NpbmcuIE9yLCB0byByZW5kZXIgbm90aGluZywgcmV0dXJuIG51bGwuXCIgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZShjaGlsZCwgY29udGV4dCwgdGhyZWFkSUQpIHtcbiAgd2hpbGUgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgIC8vIFNhZmUgYmVjYXVzZSB3ZSBqdXN0IGNoZWNrZWQgaXQncyBhbiBlbGVtZW50LlxuICAgIHZhciBlbGVtZW50ID0gY2hpbGQ7XG4gICAgdmFyIENvbXBvbmVudCA9IGVsZW1lbnQudHlwZTtcblxuICAgIHtcbiAgICAgIHB1c2hFbGVtZW50VG9EZWJ1Z1N0YWNrKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgQ29tcG9uZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBwcm9jZXNzQ2hpbGQoZWxlbWVudCwgQ29tcG9uZW50KTtcbiAgfSAvLyBFeHRyYSBjbG9zdXJlIHNvIHF1ZXVlIGFuZCByZXBsYWNlIGNhbiBiZSBjYXB0dXJlZCBwcm9wZXJseVxuXG5cbiAgZnVuY3Rpb24gcHJvY2Vzc0NoaWxkKGVsZW1lbnQsIENvbXBvbmVudCkge1xuICAgIHZhciBpc0NsYXNzID0gc2hvdWxkQ29uc3RydWN0JDEoQ29tcG9uZW50KTtcbiAgICB2YXIgcHVibGljQ29udGV4dCA9IHByb2Nlc3NDb250ZXh0KENvbXBvbmVudCwgY29udGV4dCwgdGhyZWFkSUQsIGlzQ2xhc3MpO1xuICAgIHZhciBxdWV1ZSA9IFtdO1xuICAgIHZhciByZXBsYWNlID0gZmFsc2U7XG4gICAgdmFyIHVwZGF0ZXIgPSB7XG4gICAgICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuICAgICAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKHF1ZXVlID09PSBudWxsKSB7XG4gICAgICAgICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlKSB7XG4gICAgICAgIHJlcGxhY2UgPSB0cnVlO1xuICAgICAgICBxdWV1ZSA9IFtjb21wbGV0ZVN0YXRlXTtcbiAgICAgIH0sXG4gICAgICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY3VycmVudFBhcnRpYWxTdGF0ZSkge1xuICAgICAgICBpZiAocXVldWUgPT09IG51bGwpIHtcbiAgICAgICAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBxdWV1ZS5wdXNoKGN1cnJlbnRQYXJ0aWFsU3RhdGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIGluc3Q7XG5cbiAgICBpZiAoaXNDbGFzcykge1xuICAgICAgaW5zdCA9IG5ldyBDb21wb25lbnQoZWxlbWVudC5wcm9wcywgcHVibGljQ29udGV4dCwgdXBkYXRlcik7XG5cbiAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB7XG4gICAgICAgICAgaWYgKGluc3Quc3RhdGUgPT09IG51bGwgfHwgaW5zdC5zdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoQ29tcG9uZW50KSB8fCAnVW5rbm93bic7XG5cbiAgICAgICAgICAgIGlmICghZGlkV2FybkFib3V0VW5pbml0aWFsaXplZFN0YXRlW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgICAgICAgIGVycm9yKCdgJXNgIHVzZXMgYGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc2AgYnV0IGl0cyBpbml0aWFsIHN0YXRlIGlzICcgKyAnJXMuIFRoaXMgaXMgbm90IHJlY29tbWVuZGVkLiBJbnN0ZWFkLCBkZWZpbmUgdGhlIGluaXRpYWwgc3RhdGUgYnkgJyArICdhc3NpZ25pbmcgYW4gb2JqZWN0IHRvIGB0aGlzLnN0YXRlYCBpbiB0aGUgY29uc3RydWN0b3Igb2YgYCVzYC4gJyArICdUaGlzIGVuc3VyZXMgdGhhdCBgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzYCBhcmd1bWVudHMgaGF2ZSBhIGNvbnNpc3RlbnQgc2hhcGUuJywgY29tcG9uZW50TmFtZSwgaW5zdC5zdGF0ZSA9PT0gbnVsbCA/ICdudWxsJyA6ICd1bmRlZmluZWQnLCBjb21wb25lbnROYW1lKTtcblxuICAgICAgICAgICAgICBkaWRXYXJuQWJvdXRVbmluaXRpYWxpemVkU3RhdGVbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwYXJ0aWFsU3RhdGUgPSBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLmNhbGwobnVsbCwgZWxlbWVudC5wcm9wcywgaW5zdC5zdGF0ZSk7XG5cbiAgICAgICAge1xuICAgICAgICAgIGlmIChwYXJ0aWFsU3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIF9jb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShDb21wb25lbnQpIHx8ICdVbmtub3duJztcblxuICAgICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRVbmRlZmluZWREZXJpdmVkU3RhdGVbX2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgICAgICAgIGVycm9yKCclcy5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoKTogQSB2YWxpZCBzdGF0ZSBvYmplY3QgKG9yIG51bGwpIG11c3QgYmUgcmV0dXJuZWQuICcgKyAnWW91IGhhdmUgcmV0dXJuZWQgdW5kZWZpbmVkLicsIF9jb21wb25lbnROYW1lKTtcblxuICAgICAgICAgICAgICBkaWRXYXJuQWJvdXRVbmRlZmluZWREZXJpdmVkU3RhdGVbX2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFydGlhbFN0YXRlICE9IG51bGwpIHtcbiAgICAgICAgICBpbnN0LnN0YXRlID0gX2Fzc2lnbih7fSwgaW5zdC5zdGF0ZSwgcGFydGlhbFN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB7XG4gICAgICAgIGlmIChDb21wb25lbnQucHJvdG90eXBlICYmIHR5cGVvZiBDb21wb25lbnQucHJvdG90eXBlLnJlbmRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhciBfY29tcG9uZW50TmFtZTIgPSBnZXRDb21wb25lbnROYW1lKENvbXBvbmVudCkgfHwgJ1Vua25vd24nO1xuXG4gICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRCYWRDbGFzc1tfY29tcG9uZW50TmFtZTJdKSB7XG4gICAgICAgICAgICBlcnJvcihcIlRoZSA8JXMgLz4gY29tcG9uZW50IGFwcGVhcnMgdG8gaGF2ZSBhIHJlbmRlciBtZXRob2QsIGJ1dCBkb2Vzbid0IGV4dGVuZCBSZWFjdC5Db21wb25lbnQuIFwiICsgJ1RoaXMgaXMgbGlrZWx5IHRvIGNhdXNlIGVycm9ycy4gQ2hhbmdlICVzIHRvIGV4dGVuZCBSZWFjdC5Db21wb25lbnQgaW5zdGVhZC4nLCBfY29tcG9uZW50TmFtZTIsIF9jb21wb25lbnROYW1lMik7XG5cbiAgICAgICAgICAgIGRpZFdhcm5BYm91dEJhZENsYXNzW19jb21wb25lbnROYW1lMl0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgY29tcG9uZW50SWRlbnRpdHkgPSB7fTtcbiAgICAgIHByZXBhcmVUb1VzZUhvb2tzKGNvbXBvbmVudElkZW50aXR5KTtcbiAgICAgIGluc3QgPSBDb21wb25lbnQoZWxlbWVudC5wcm9wcywgcHVibGljQ29udGV4dCwgdXBkYXRlcik7XG4gICAgICBpbnN0ID0gZmluaXNoSG9va3MoQ29tcG9uZW50LCBlbGVtZW50LnByb3BzLCBpbnN0LCBwdWJsaWNDb250ZXh0KTtcblxuICAgICAge1xuICAgICAgICAvLyBTdXBwb3J0IGZvciBtb2R1bGUgY29tcG9uZW50cyBpcyBkZXByZWNhdGVkIGFuZCBpcyByZW1vdmVkIGJlaGluZCBhIGZsYWcuXG4gICAgICAgIC8vIFdoZXRoZXIgb3Igbm90IGl0IHdvdWxkIGNyYXNoIGxhdGVyLCB3ZSB3YW50IHRvIHNob3cgYSBnb29kIG1lc3NhZ2UgaW4gREVWIGZpcnN0LlxuICAgICAgICBpZiAoaW5zdCAhPSBudWxsICYmIGluc3QucmVuZGVyICE9IG51bGwpIHtcbiAgICAgICAgICB2YXIgX2NvbXBvbmVudE5hbWUzID0gZ2V0Q29tcG9uZW50TmFtZShDb21wb25lbnQpIHx8ICdVbmtub3duJztcblxuICAgICAgICAgIGlmICghZGlkV2FybkFib3V0TW9kdWxlUGF0dGVybkNvbXBvbmVudFtfY29tcG9uZW50TmFtZTNdKSB7XG4gICAgICAgICAgICBlcnJvcignVGhlIDwlcyAvPiBjb21wb25lbnQgYXBwZWFycyB0byBiZSBhIGZ1bmN0aW9uIGNvbXBvbmVudCB0aGF0IHJldHVybnMgYSBjbGFzcyBpbnN0YW5jZS4gJyArICdDaGFuZ2UgJXMgdG8gYSBjbGFzcyB0aGF0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IGluc3RlYWQuICcgKyBcIklmIHlvdSBjYW4ndCB1c2UgYSBjbGFzcyB0cnkgYXNzaWduaW5nIHRoZSBwcm90b3R5cGUgb24gdGhlIGZ1bmN0aW9uIGFzIGEgd29ya2Fyb3VuZC4gXCIgKyBcImAlcy5wcm90b3R5cGUgPSBSZWFjdC5Db21wb25lbnQucHJvdG90eXBlYC4gRG9uJ3QgdXNlIGFuIGFycm93IGZ1bmN0aW9uIHNpbmNlIGl0IFwiICsgJ2Nhbm5vdCBiZSBjYWxsZWQgd2l0aCBgbmV3YCBieSBSZWFjdC4nLCBfY29tcG9uZW50TmFtZTMsIF9jb21wb25lbnROYW1lMywgX2NvbXBvbmVudE5hbWUzKTtcblxuICAgICAgICAgICAgZGlkV2FybkFib3V0TW9kdWxlUGF0dGVybkNvbXBvbmVudFtfY29tcG9uZW50TmFtZTNdID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gLy8gSWYgdGhlIGZsYWcgaXMgb24sIGV2ZXJ5dGhpbmcgaXMgYXNzdW1lZCB0byBiZSBhIGZ1bmN0aW9uIGNvbXBvbmVudC5cbiAgICAgIC8vIE90aGVyd2lzZSwgd2UgYWxzbyBkbyB0aGUgdW5mb3J0dW5hdGUgZHluYW1pYyBjaGVja3MuXG5cblxuICAgICAgaWYgKCBpbnN0ID09IG51bGwgfHwgaW5zdC5yZW5kZXIgPT0gbnVsbCkge1xuICAgICAgICBjaGlsZCA9IGluc3Q7XG4gICAgICAgIHZhbGlkYXRlUmVuZGVyUmVzdWx0KGNoaWxkLCBDb21wb25lbnQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW5zdC5wcm9wcyA9IGVsZW1lbnQucHJvcHM7XG4gICAgaW5zdC5jb250ZXh0ID0gcHVibGljQ29udGV4dDtcbiAgICBpbnN0LnVwZGF0ZXIgPSB1cGRhdGVyO1xuICAgIHZhciBpbml0aWFsU3RhdGUgPSBpbnN0LnN0YXRlO1xuXG4gICAgaWYgKGluaXRpYWxTdGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbnN0LnN0YXRlID0gaW5pdGlhbFN0YXRlID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGluc3QuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgaW5zdC5jb21wb25lbnRXaWxsTW91bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgaW5zdC5jb21wb25lbnRXaWxsTW91bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAge1xuICAgICAgICAgIGlmICggaW5zdC5jb21wb25lbnRXaWxsTW91bnQuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdmFyIF9jb21wb25lbnROYW1lNCA9IGdldENvbXBvbmVudE5hbWUoQ29tcG9uZW50KSB8fCAnVW5rbm93bic7XG5cbiAgICAgICAgICAgIGlmICghZGlkV2FybkFib3V0RGVwcmVjYXRlZFdpbGxNb3VudFtfY29tcG9uZW50TmFtZTRdKSB7XG4gICAgICAgICAgICAgIHdhcm4oIC8vIGtlZXAgdGhpcyB3YXJuaW5nIGluIHN5bmMgd2l0aCBSZWFjdFN0cmljdE1vZGVXYXJuaW5nLmpzXG4gICAgICAgICAgICAgICdjb21wb25lbnRXaWxsTW91bnQgaGFzIGJlZW4gcmVuYW1lZCwgYW5kIGlzIG5vdCByZWNvbW1lbmRlZCBmb3IgdXNlLiAnICsgJ1NlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvdW5zYWZlLWNvbXBvbmVudC1saWZlY3ljbGVzIGZvciBkZXRhaWxzLlxcblxcbicgKyAnKiBNb3ZlIGNvZGUgZnJvbSBjb21wb25lbnRXaWxsTW91bnQgdG8gY29tcG9uZW50RGlkTW91bnQgKHByZWZlcnJlZCBpbiBtb3N0IGNhc2VzKSAnICsgJ29yIHRoZSBjb25zdHJ1Y3Rvci5cXG4nICsgJ1xcblBsZWFzZSB1cGRhdGUgdGhlIGZvbGxvd2luZyBjb21wb25lbnRzOiAlcycsIF9jb21wb25lbnROYW1lNCk7XG5cbiAgICAgICAgICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZFdpbGxNb3VudFtfY29tcG9uZW50TmFtZTRdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gSW4gb3JkZXIgdG8gc3VwcG9ydCByZWFjdC1saWZlY3ljbGVzLWNvbXBhdCBwb2x5ZmlsbGVkIGNvbXBvbmVudHMsXG4gICAgICAgIC8vIFVuc2FmZSBsaWZlY3ljbGVzIHNob3VsZCBub3QgYmUgaW52b2tlZCBmb3IgYW55IGNvbXBvbmVudCB3aXRoIHRoZSBuZXcgZ0RTRlAuXG5cblxuICAgICAgICBpZiAodHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBpbnN0LmNvbXBvbmVudFdpbGxNb3VudCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaW5zdC5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEluIG9yZGVyIHRvIHN1cHBvcnQgcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQgcG9seWZpbGxlZCBjb21wb25lbnRzLFxuICAgICAgICAvLyBVbnNhZmUgbGlmZWN5Y2xlcyBzaG91bGQgbm90IGJlIGludm9rZWQgZm9yIGFueSBjb21wb25lbnQgd2l0aCB0aGUgbmV3IGdEU0ZQLlxuICAgICAgICBpbnN0LlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICB2YXIgb2xkUXVldWUgPSBxdWV1ZTtcbiAgICAgICAgdmFyIG9sZFJlcGxhY2UgPSByZXBsYWNlO1xuICAgICAgICBxdWV1ZSA9IG51bGw7XG4gICAgICAgIHJlcGxhY2UgPSBmYWxzZTtcblxuICAgICAgICBpZiAob2xkUmVwbGFjZSAmJiBvbGRRdWV1ZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBpbnN0LnN0YXRlID0gb2xkUXVldWVbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIG5leHRTdGF0ZSA9IG9sZFJlcGxhY2UgPyBvbGRRdWV1ZVswXSA6IGluc3Quc3RhdGU7XG4gICAgICAgICAgdmFyIGRvbnRNdXRhdGUgPSB0cnVlO1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IG9sZFJlcGxhY2UgPyAxIDogMDsgaSA8IG9sZFF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydGlhbCA9IG9sZFF1ZXVlW2ldO1xuXG4gICAgICAgICAgICB2YXIgX3BhcnRpYWxTdGF0ZSA9IHR5cGVvZiBwYXJ0aWFsID09PSAnZnVuY3Rpb24nID8gcGFydGlhbC5jYWxsKGluc3QsIG5leHRTdGF0ZSwgZWxlbWVudC5wcm9wcywgcHVibGljQ29udGV4dCkgOiBwYXJ0aWFsO1xuXG4gICAgICAgICAgICBpZiAoX3BhcnRpYWxTdGF0ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGlmIChkb250TXV0YXRlKSB7XG4gICAgICAgICAgICAgICAgZG9udE11dGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIG5leHRTdGF0ZSA9IF9hc3NpZ24oe30sIG5leHRTdGF0ZSwgX3BhcnRpYWxTdGF0ZSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX2Fzc2lnbihuZXh0U3RhdGUsIF9wYXJ0aWFsU3RhdGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5zdC5zdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoaWxkID0gaW5zdC5yZW5kZXIoKTtcblxuICAgIHtcbiAgICAgIGlmIChjaGlsZCA9PT0gdW5kZWZpbmVkICYmIGluc3QucmVuZGVyLl9pc01vY2tGdW5jdGlvbikge1xuICAgICAgICAvLyBUaGlzIGlzIHByb2JhYmx5IGJhZCBwcmFjdGljZS4gQ29uc2lkZXIgd2FybmluZyBoZXJlIGFuZFxuICAgICAgICAvLyBkZXByZWNhdGluZyB0aGlzIGNvbnZlbmllbmNlLlxuICAgICAgICBjaGlsZCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFsaWRhdGVSZW5kZXJSZXN1bHQoY2hpbGQsIENvbXBvbmVudCk7XG4gICAgdmFyIGNoaWxkQ29udGV4dDtcblxuICAgIHtcbiAgICAgIGlmICh0eXBlb2YgaW5zdC5nZXRDaGlsZENvbnRleHQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIF9jaGlsZENvbnRleHRUeXBlcyA9IENvbXBvbmVudC5jaGlsZENvbnRleHRUeXBlcztcblxuICAgICAgICBpZiAodHlwZW9mIF9jaGlsZENvbnRleHRUeXBlcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSBpbnN0LmdldENoaWxkQ29udGV4dCgpO1xuXG4gICAgICAgICAgZm9yICh2YXIgY29udGV4dEtleSBpbiBjaGlsZENvbnRleHQpIHtcbiAgICAgICAgICAgIGlmICghKGNvbnRleHRLZXkgaW4gX2NoaWxkQ29udGV4dFR5cGVzKSkge1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoIChnZXRDb21wb25lbnROYW1lKENvbXBvbmVudCkgfHwgJ1Vua25vd24nKSArIFwiLmdldENoaWxkQ29udGV4dCgpOiBrZXkgXFxcIlwiICsgY29udGV4dEtleSArIFwiXFxcIiBpcyBub3QgZGVmaW5lZCBpbiBjaGlsZENvbnRleHRUeXBlcy5cIiApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVycm9yKCclcy5nZXRDaGlsZENvbnRleHQoKTogY2hpbGRDb250ZXh0VHlwZXMgbXVzdCBiZSBkZWZpbmVkIGluIG9yZGVyIHRvICcgKyAndXNlIGdldENoaWxkQ29udGV4dCgpLicsIGdldENvbXBvbmVudE5hbWUoQ29tcG9uZW50KSB8fCAnVW5rbm93bicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGRDb250ZXh0KSB7XG4gICAgICAgIGNvbnRleHQgPSBfYXNzaWduKHt9LCBjb250ZXh0LCBjaGlsZENvbnRleHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2hpbGQ6IGNoaWxkLFxuICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgfTtcbn1cblxudmFyIFJlYWN0RE9NU2VydmVyUmVuZGVyZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvLyBUT0RPOiB0eXBlIHRoaXMgbW9yZSBzdHJpY3RseTpcbiAgLy8gREVWLW9ubHlcbiAgZnVuY3Rpb24gUmVhY3RET01TZXJ2ZXJSZW5kZXJlcihjaGlsZHJlbiwgbWFrZVN0YXRpY01hcmt1cCwgb3B0aW9ucykge1xuICAgIHZhciBmbGF0Q2hpbGRyZW4gPSBmbGF0dGVuVG9wTGV2ZWxDaGlsZHJlbihjaGlsZHJlbik7XG4gICAgdmFyIHRvcEZyYW1lID0ge1xuICAgICAgdHlwZTogbnVsbCxcbiAgICAgIC8vIEFzc3VtZSBhbGwgdHJlZXMgc3RhcnQgaW4gdGhlIEhUTUwgbmFtZXNwYWNlIChub3QgdG90YWxseSB0cnVlLCBidXRcbiAgICAgIC8vIHRoaXMgaXMgd2hhdCB3ZSBkaWQgaGlzdG9yaWNhbGx5KVxuICAgICAgZG9tTmFtZXNwYWNlOiBOYW1lc3BhY2VzLmh0bWwsXG4gICAgICBjaGlsZHJlbjogZmxhdENoaWxkcmVuLFxuICAgICAgY2hpbGRJbmRleDogMCxcbiAgICAgIGNvbnRleHQ6IGVtcHR5T2JqZWN0LFxuICAgICAgZm9vdGVyOiAnJ1xuICAgIH07XG5cbiAgICB7XG4gICAgICB0b3BGcmFtZS5kZWJ1Z0VsZW1lbnRTdGFjayA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMudGhyZWFkSUQgPSBhbGxvY1RocmVhZElEKCk7XG4gICAgdGhpcy5zdGFjayA9IFt0b3BGcmFtZV07XG4gICAgdGhpcy5leGhhdXN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmN1cnJlbnRTZWxlY3RWYWx1ZSA9IG51bGw7XG4gICAgdGhpcy5wcmV2aW91c1dhc1RleHROb2RlID0gZmFsc2U7XG4gICAgdGhpcy5tYWtlU3RhdGljTWFya3VwID0gbWFrZVN0YXRpY01hcmt1cDtcbiAgICB0aGlzLnN1c3BlbnNlRGVwdGggPSAwOyAvLyBDb250ZXh0IChuZXcgQVBJKVxuXG4gICAgdGhpcy5jb250ZXh0SW5kZXggPSAtMTtcbiAgICB0aGlzLmNvbnRleHRTdGFjayA9IFtdO1xuICAgIHRoaXMuY29udGV4dFZhbHVlU3RhY2sgPSBbXTsgLy8gdXNlT3BhcXVlSWRlbnRpZmllciBJRFxuXG4gICAgdGhpcy51bmlxdWVJRCA9IDA7XG4gICAgdGhpcy5pZGVudGlmaWVyUHJlZml4ID0gb3B0aW9ucyAmJiBvcHRpb25zLmlkZW50aWZpZXJQcmVmaXggfHwgJyc7XG5cbiAgICB7XG4gICAgICB0aGlzLmNvbnRleHRQcm92aWRlclN0YWNrID0gW107XG4gICAgfVxuICB9XG5cbiAgdmFyIF9wcm90byA9IFJlYWN0RE9NU2VydmVyUmVuZGVyZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBpZiAoIXRoaXMuZXhoYXVzdGVkKSB7XG4gICAgICB0aGlzLmV4aGF1c3RlZCA9IHRydWU7XG4gICAgICB0aGlzLmNsZWFyUHJvdmlkZXJzKCk7XG4gICAgICBmcmVlVGhyZWFkSUQodGhpcy50aHJlYWRJRCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBOb3RlOiBXZSB1c2UganVzdCB0d28gc3RhY2tzIHJlZ2FyZGxlc3Mgb2YgaG93IG1hbnkgY29udGV4dCBwcm92aWRlcnMgeW91IGhhdmUuXG4gICAqIFByb3ZpZGVycyBhcmUgYWx3YXlzIHBvcHBlZCBpbiB0aGUgcmV2ZXJzZSBvcmRlciB0byBob3cgdGhleSB3ZXJlIHB1c2hlZFxuICAgKiBzbyB3ZSBhbHdheXMga25vdyBvbiB0aGUgd2F5IGRvd24gd2hpY2ggcHJvdmlkZXIgeW91J2xsIGVuY291bnRlciBuZXh0IG9uIHRoZSB3YXkgdXAuXG4gICAqIE9uIHRoZSB3YXkgZG93biwgd2UgcHVzaCB0aGUgY3VycmVudCBwcm92aWRlciwgYW5kIGl0cyBjb250ZXh0IHZhbHVlICpiZWZvcmUqXG4gICAqIHdlIG11dGF0ZWQgaXQsIG9udG8gdGhlIHN0YWNrcy4gVGhlcmVmb3JlLCBvbiB0aGUgd2F5IHVwLCB3ZSBhbHdheXMga25vdyB3aGljaFxuICAgKiBwcm92aWRlciBuZWVkcyB0byBiZSBcInJlc3RvcmVkXCIgdG8gd2hpY2ggdmFsdWUuXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9wdWxsLzEyOTg1I2lzc3VlY29tbWVudC0zOTYzMDEyNDhcbiAgICovXG4gIDtcblxuICBfcHJvdG8ucHVzaFByb3ZpZGVyID0gZnVuY3Rpb24gcHVzaFByb3ZpZGVyKHByb3ZpZGVyKSB7XG4gICAgdmFyIGluZGV4ID0gKyt0aGlzLmNvbnRleHRJbmRleDtcbiAgICB2YXIgY29udGV4dCA9IHByb3ZpZGVyLnR5cGUuX2NvbnRleHQ7XG4gICAgdmFyIHRocmVhZElEID0gdGhpcy50aHJlYWRJRDtcbiAgICB2YWxpZGF0ZUNvbnRleHRCb3VuZHMoY29udGV4dCwgdGhyZWFkSUQpO1xuICAgIHZhciBwcmV2aW91c1ZhbHVlID0gY29udGV4dFt0aHJlYWRJRF07IC8vIFJlbWVtYmVyIHdoaWNoIHZhbHVlIHRvIHJlc3RvcmUgdGhpcyBjb250ZXh0IHRvIG9uIG91ciB3YXkgdXAuXG5cbiAgICB0aGlzLmNvbnRleHRTdGFja1tpbmRleF0gPSBjb250ZXh0O1xuICAgIHRoaXMuY29udGV4dFZhbHVlU3RhY2tbaW5kZXhdID0gcHJldmlvdXNWYWx1ZTtcblxuICAgIHtcbiAgICAgIC8vIE9ubHkgdXNlZCBmb3IgcHVzaC9wb3AgbWlzbWF0Y2ggd2FybmluZ3MuXG4gICAgICB0aGlzLmNvbnRleHRQcm92aWRlclN0YWNrW2luZGV4XSA9IHByb3ZpZGVyO1xuICAgIH0gLy8gTXV0YXRlIHRoZSBjdXJyZW50IHZhbHVlLlxuXG5cbiAgICBjb250ZXh0W3RocmVhZElEXSA9IHByb3ZpZGVyLnByb3BzLnZhbHVlO1xuICB9O1xuXG4gIF9wcm90by5wb3BQcm92aWRlciA9IGZ1bmN0aW9uIHBvcFByb3ZpZGVyKHByb3ZpZGVyKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5jb250ZXh0SW5kZXg7XG5cbiAgICB7XG4gICAgICBpZiAoaW5kZXggPCAwIHx8IHByb3ZpZGVyICE9PSB0aGlzLmNvbnRleHRQcm92aWRlclN0YWNrW2luZGV4XSkge1xuICAgICAgICBlcnJvcignVW5leHBlY3RlZCBwb3AuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHRTdGFja1tpbmRleF07XG4gICAgdmFyIHByZXZpb3VzVmFsdWUgPSB0aGlzLmNvbnRleHRWYWx1ZVN0YWNrW2luZGV4XTsgLy8gXCJIaWRlXCIgdGhlc2UgbnVsbCBhc3NpZ25tZW50cyBmcm9tIEZsb3cgYnkgdXNpbmcgYGFueWBcbiAgICAvLyBiZWNhdXNlIGNvbmNlcHR1YWxseSB0aGV5IGFyZSBkZWxldGlvbnMtLWFzIGxvbmcgYXMgd2VcbiAgICAvLyBwcm9taXNlIHRvIG5ldmVyIGFjY2VzcyB2YWx1ZXMgYmV5b25kIGB0aGlzLmNvbnRleHRJbmRleGAuXG5cbiAgICB0aGlzLmNvbnRleHRTdGFja1tpbmRleF0gPSBudWxsO1xuICAgIHRoaXMuY29udGV4dFZhbHVlU3RhY2tbaW5kZXhdID0gbnVsbDtcblxuICAgIHtcbiAgICAgIHRoaXMuY29udGV4dFByb3ZpZGVyU3RhY2tbaW5kZXhdID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRleHRJbmRleC0tOyAvLyBSZXN0b3JlIHRvIHRoZSBwcmV2aW91cyB2YWx1ZSB3ZSBzdG9yZWQgYXMgd2Ugd2VyZSB3YWxraW5nIGRvd24uXG4gICAgLy8gV2UndmUgYWxyZWFkeSB2ZXJpZmllZCB0aGF0IHRoaXMgY29udGV4dCBoYXMgYmVlbiBleHBhbmRlZCB0byBhY2NvbW1vZGF0ZVxuICAgIC8vIHRoaXMgdGhyZWFkIGlkLCBzbyB3ZSBkb24ndCBuZWVkIHRvIGRvIGl0IGFnYWluLlxuXG4gICAgY29udGV4dFt0aGlzLnRocmVhZElEXSA9IHByZXZpb3VzVmFsdWU7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyUHJvdmlkZXJzID0gZnVuY3Rpb24gY2xlYXJQcm92aWRlcnMoKSB7XG4gICAgLy8gUmVzdG9yZSBhbnkgcmVtYWluaW5nIHByb3ZpZGVycyBvbiB0aGUgc3RhY2sgdG8gcHJldmlvdXMgdmFsdWVzXG4gICAgZm9yICh2YXIgaW5kZXggPSB0aGlzLmNvbnRleHRJbmRleDsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmNvbnRleHRTdGFja1tpbmRleF07XG4gICAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHRoaXMuY29udGV4dFZhbHVlU3RhY2tbaW5kZXhdO1xuICAgICAgY29udGV4dFt0aGlzLnRocmVhZElEXSA9IHByZXZpb3VzVmFsdWU7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZWFkID0gZnVuY3Rpb24gcmVhZChieXRlcykge1xuICAgIGlmICh0aGlzLmV4aGF1c3RlZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHByZXZQYXJ0aWFsUmVuZGVyZXIgPSBjdXJyZW50UGFydGlhbFJlbmRlcmVyO1xuICAgIHNldEN1cnJlbnRQYXJ0aWFsUmVuZGVyZXIodGhpcyk7XG4gICAgdmFyIHByZXZEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQ7XG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBEaXNwYXRjaGVyO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIE1hcmt1cCBnZW5lcmF0ZWQgd2l0aGluIDxTdXNwZW5zZT4gZW5kcyB1cCBidWZmZXJlZCB1bnRpbCB3ZSBrbm93XG4gICAgICAvLyBub3RoaW5nIGluIHRoYXQgYm91bmRhcnkgc3VzcGVuZGVkXG4gICAgICB2YXIgb3V0ID0gWycnXTtcbiAgICAgIHZhciBzdXNwZW5kZWQgPSBmYWxzZTtcblxuICAgICAgd2hpbGUgKG91dFswXS5sZW5ndGggPCBieXRlcykge1xuICAgICAgICBpZiAodGhpcy5zdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLmV4aGF1c3RlZCA9IHRydWU7XG4gICAgICAgICAgZnJlZVRocmVhZElEKHRoaXMudGhyZWFkSUQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGZyYW1lID0gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGlmIChzdXNwZW5kZWQgfHwgZnJhbWUuY2hpbGRJbmRleCA+PSBmcmFtZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgZm9vdGVyID0gZnJhbWUuZm9vdGVyO1xuXG4gICAgICAgICAgaWYgKGZvb3RlciAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNXYXNUZXh0Tm9kZSA9IGZhbHNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc3RhY2sucG9wKCk7XG5cbiAgICAgICAgICBpZiAoZnJhbWUudHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFNlbGVjdFZhbHVlID0gbnVsbDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGZyYW1lLnR5cGUgIT0gbnVsbCAmJiBmcmFtZS50eXBlLnR5cGUgIT0gbnVsbCAmJiBmcmFtZS50eXBlLnR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUpIHtcbiAgICAgICAgICAgIHZhciBwcm92aWRlciA9IGZyYW1lLnR5cGU7XG4gICAgICAgICAgICB0aGlzLnBvcFByb3ZpZGVyKHByb3ZpZGVyKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGZyYW1lLnR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUpIHtcbiAgICAgICAgICAgIHRoaXMuc3VzcGVuc2VEZXB0aC0tO1xuICAgICAgICAgICAgdmFyIGJ1ZmZlcmVkID0gb3V0LnBvcCgpO1xuXG4gICAgICAgICAgICBpZiAoc3VzcGVuZGVkKSB7XG4gICAgICAgICAgICAgIHN1c3BlbmRlZCA9IGZhbHNlOyAvLyBJZiByZW5kZXJpbmcgd2FzIHN1c3BlbmRlZCBhdCB0aGlzIGJvdW5kYXJ5LCByZW5kZXIgdGhlIGZhbGxiYWNrRnJhbWVcblxuICAgICAgICAgICAgICB2YXIgZmFsbGJhY2tGcmFtZSA9IGZyYW1lLmZhbGxiYWNrRnJhbWU7XG5cbiAgICAgICAgICAgICAgaWYgKCFmYWxsYmFja0ZyYW1lKSB7XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IodHJ1ZSA/IFwiUmVhY3RET01TZXJ2ZXIgZGlkIG5vdCBmaW5kIGFuIGludGVybmFsIGZhbGxiYWNrIGZyYW1lIGZvciBTdXNwZW5zZS4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuXCIgOiBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDMwMykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaChmYWxsYmFja0ZyYW1lKTtcbiAgICAgICAgICAgICAgb3V0W3RoaXMuc3VzcGVuc2VEZXB0aF0gKz0gJzwhLS0kIS0tPic7IC8vIFNraXAgZmx1c2hpbmcgb3V0cHV0IHNpbmNlIHdlJ3JlIHN3aXRjaGluZyB0byB0aGUgZmFsbGJhY2tcblxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG91dFt0aGlzLnN1c3BlbnNlRGVwdGhdICs9IGJ1ZmZlcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gRmx1c2ggb3V0cHV0XG5cblxuICAgICAgICAgIG91dFt0aGlzLnN1c3BlbnNlRGVwdGhdICs9IGZvb3RlcjtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjaGlsZCA9IGZyYW1lLmNoaWxkcmVuW2ZyYW1lLmNoaWxkSW5kZXgrK107XG4gICAgICAgIHZhciBvdXRCdWZmZXIgPSAnJztcblxuICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgIHB1c2hDdXJyZW50RGVidWdTdGFjayh0aGlzLnN0YWNrKTsgLy8gV2UncmUgc3RhcnRpbmcgd29yayBvbiB0aGlzIGZyYW1lLCBzbyByZXNldCBpdHMgaW5uZXIgc3RhY2suXG5cbiAgICAgICAgICBmcmFtZS5kZWJ1Z0VsZW1lbnRTdGFjay5sZW5ndGggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBvdXRCdWZmZXIgKz0gdGhpcy5yZW5kZXIoY2hpbGQsIGZyYW1lLmNvbnRleHQsIGZyYW1lLmRvbU5hbWVzcGFjZSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGlmIChlcnIgIT0gbnVsbCAmJiB0eXBlb2YgZXJyLnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChlbmFibGVTdXNwZW5zZVNlcnZlclJlbmRlcmVyKSB7XG4gICAgICAgICAgICAgIGlmICghKHRoaXMuc3VzcGVuc2VEZXB0aCA+IDApKSB7XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IodHJ1ZSA/IFwiQSBSZWFjdCBjb21wb25lbnQgc3VzcGVuZGVkIHdoaWxlIHJlbmRlcmluZywgYnV0IG5vIGZhbGxiYWNrIFVJIHdhcyBzcGVjaWZpZWQuXFxuXFxuQWRkIGEgPFN1c3BlbnNlIGZhbGxiYWNrPS4uLj4gY29tcG9uZW50IGhpZ2hlciBpbiB0aGUgdHJlZSB0byBwcm92aWRlIGEgbG9hZGluZyBpbmRpY2F0b3Igb3IgcGxhY2Vob2xkZXIgdG8gZGlzcGxheS5cIiA6IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMzQyKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc3VzcGVuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICghZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcih0cnVlID8gXCJSZWFjdERPTVNlcnZlciBkb2VzIG5vdCB5ZXQgc3VwcG9ydCBTdXNwZW5zZS5cIiA6IGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoMjk0KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAgIHBvcEN1cnJlbnREZWJ1Z1N0YWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG91dC5sZW5ndGggPD0gdGhpcy5zdXNwZW5zZURlcHRoKSB7XG4gICAgICAgICAgb3V0LnB1c2goJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3V0W3RoaXMuc3VzcGVuc2VEZXB0aF0gKz0gb3V0QnVmZmVyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb3V0WzBdO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IHByZXZEaXNwYXRjaGVyO1xuICAgICAgc2V0Q3VycmVudFBhcnRpYWxSZW5kZXJlcihwcmV2UGFydGlhbFJlbmRlcmVyKTtcbiAgICAgIHJlc2V0SG9va3NTdGF0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKGNoaWxkLCBjb250ZXh0LCBwYXJlbnROYW1lc3BhY2UpIHtcbiAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgY2hpbGQgPT09ICdudW1iZXInKSB7XG4gICAgICB2YXIgdGV4dCA9ICcnICsgY2hpbGQ7XG5cbiAgICAgIGlmICh0ZXh0ID09PSAnJykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm1ha2VTdGF0aWNNYXJrdXApIHtcbiAgICAgICAgcmV0dXJuIGVzY2FwZVRleHRGb3JCcm93c2VyKHRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcmV2aW91c1dhc1RleHROb2RlKSB7XG4gICAgICAgIHJldHVybiAnPCEtLSAtLT4nICsgZXNjYXBlVGV4dEZvckJyb3dzZXIodGV4dCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJldmlvdXNXYXNUZXh0Tm9kZSA9IHRydWU7XG4gICAgICByZXR1cm4gZXNjYXBlVGV4dEZvckJyb3dzZXIodGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBuZXh0Q2hpbGQ7XG5cbiAgICAgIHZhciBfcmVzb2x2ZSA9IHJlc29sdmUoY2hpbGQsIGNvbnRleHQsIHRoaXMudGhyZWFkSUQpO1xuXG4gICAgICBuZXh0Q2hpbGQgPSBfcmVzb2x2ZS5jaGlsZDtcbiAgICAgIGNvbnRleHQgPSBfcmVzb2x2ZS5jb250ZXh0O1xuXG4gICAgICBpZiAobmV4dENoaWxkID09PSBudWxsIHx8IG5leHRDaGlsZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfSBlbHNlIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQobmV4dENoaWxkKSkge1xuICAgICAgICBpZiAobmV4dENoaWxkICE9IG51bGwgJiYgbmV4dENoaWxkLiQkdHlwZW9mICE9IG51bGwpIHtcbiAgICAgICAgICAvLyBDYXRjaCB1bmV4cGVjdGVkIHNwZWNpYWwgdHlwZXMgZWFybHkuXG4gICAgICAgICAgdmFyICQkdHlwZW9mID0gbmV4dENoaWxkLiQkdHlwZW9mO1xuXG4gICAgICAgICAgaWYgKCEoJCR0eXBlb2YgIT09IFJFQUNUX1BPUlRBTF9UWVBFKSkge1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aHJvdyBFcnJvciggXCJQb3J0YWxzIGFyZSBub3QgY3VycmVudGx5IHN1cHBvcnRlZCBieSB0aGUgc2VydmVyIHJlbmRlcmVyLiBSZW5kZXIgdGhlbSBjb25kaXRpb25hbGx5IHNvIHRoYXQgdGhleSBvbmx5IGFwcGVhciBvbiB0aGUgY2xpZW50IHJlbmRlci5cIiApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gLy8gQ2F0Y2gtYWxsIHRvIHByZXZlbnQgYW4gaW5maW5pdGUgbG9vcCBpZiBSZWFjdC5DaGlsZHJlbi50b0FycmF5KCkgc3VwcG9ydHMgc29tZSBuZXcgdHlwZS5cblxuXG4gICAgICAgICAge1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aHJvdyBFcnJvciggXCJVbmtub3duIGVsZW1lbnQtbGlrZSBvYmplY3QgdHlwZTogXCIgKyAkJHR5cGVvZi50b1N0cmluZygpICsgXCIuIFRoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS5cIiApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXh0Q2hpbGRyZW4gPSB0b0FycmF5KG5leHRDaGlsZCk7XG4gICAgICAgIHZhciBmcmFtZSA9IHtcbiAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgIGRvbU5hbWVzcGFjZTogcGFyZW50TmFtZXNwYWNlLFxuICAgICAgICAgIGNoaWxkcmVuOiBuZXh0Q2hpbGRyZW4sXG4gICAgICAgICAgY2hpbGRJbmRleDogMCxcbiAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgIGZvb3RlcjogJydcbiAgICAgICAgfTtcblxuICAgICAgICB7XG4gICAgICAgICAgZnJhbWUuZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhY2sucHVzaChmcmFtZSk7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH0gLy8gU2FmZSBiZWNhdXNlIHdlIGp1c3QgY2hlY2tlZCBpdCdzIGFuIGVsZW1lbnQuXG5cblxuICAgICAgdmFyIG5leHRFbGVtZW50ID0gbmV4dENoaWxkO1xuICAgICAgdmFyIGVsZW1lbnRUeXBlID0gbmV4dEVsZW1lbnQudHlwZTtcblxuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50VHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRE9NKG5leHRFbGVtZW50LCBjb250ZXh0LCBwYXJlbnROYW1lc3BhY2UpO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGVsZW1lbnRUeXBlKSB7XG4gICAgICAgIC8vIFRPRE86IExlZ2FjeUhpZGRlbiBhY3RzIHRoZSBzYW1lIGFzIGEgZnJhZ21lbnQuIFRoaXMgb25seSB3b3Jrc1xuICAgICAgICAvLyBiZWNhdXNlIHdlIGN1cnJlbnRseSBhc3N1bWUgdGhhdCBldmVyeSBpbnN0YW5jZSBvZiBMZWdhY3lIaWRkZW4gaXNcbiAgICAgICAgLy8gYWNjb21wYW5pZWQgYnkgYSBob3N0IGNvbXBvbmVudCB3cmFwcGVyLiBJbiB0aGUgaGlkZGVuIG1vZGUsIHRoZSBob3N0XG4gICAgICAgIC8vIGNvbXBvbmVudCBpcyBnaXZlbiBhIGBoaWRkZW5gIGF0dHJpYnV0ZSwgd2hpY2ggZW5zdXJlcyB0aGF0IHRoZVxuICAgICAgICAvLyBpbml0aWFsIEhUTUwgaXMgbm90IHZpc2libGUuIFRvIHN1cHBvcnQgdGhlIHVzZSBvZiBMZWdhY3lIaWRkZW4gYXMgYVxuICAgICAgICAvLyB0cnVlIGZyYWdtZW50LCB3aXRob3V0IGFuIGV4dHJhIERPTSBub2RlLCB3ZSB3b3VsZCBoYXZlIHRvIGhpZGUgdGhlXG4gICAgICAgIC8vIGluaXRpYWwgSFRNTCBpbiBzb21lIG90aGVyIHdheS5cbiAgICAgICAgY2FzZSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEU6XG4gICAgICAgIGNhc2UgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEU6XG4gICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciBfbmV4dENoaWxkcmVuID0gdG9BcnJheShuZXh0Q2hpbGQucHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICAgICAgICB2YXIgX2ZyYW1lID0ge1xuICAgICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgICBkb21OYW1lc3BhY2U6IHBhcmVudE5hbWVzcGFjZSxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IF9uZXh0Q2hpbGRyZW4sXG4gICAgICAgICAgICAgIGNoaWxkSW5kZXg6IDAsXG4gICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgIGZvb3RlcjogJydcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgX2ZyYW1lLmRlYnVnRWxlbWVudFN0YWNrID0gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaChfZnJhbWUpO1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAge1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3RET01TZXJ2ZXIgZG9lcyBub3QgeWV0IHN1cHBvcnQgU3VzcGVuc2UuXCIgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZS1uby1mYWxsdGhyb3VnaFxuXG4gICAgICAgIGNhc2UgUkVBQ1RfU0NPUEVfVFlQRTpcbiAgICAgICAgICB7XG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0RE9NU2VydmVyIGRvZXMgbm90IHlldCBzdXBwb3J0IHNjb3BlIGNvbXBvbmVudHMuXCIgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50VHlwZSA9PT0gJ29iamVjdCcgJiYgZWxlbWVudFR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgc3dpdGNoIChlbGVtZW50VHlwZS4kJHR5cGVvZikge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBuZXh0Q2hpbGQ7XG5cbiAgICAgICAgICAgICAgdmFyIF9uZXh0Q2hpbGRyZW41O1xuXG4gICAgICAgICAgICAgIHZhciBjb21wb25lbnRJZGVudGl0eSA9IHt9O1xuICAgICAgICAgICAgICBwcmVwYXJlVG9Vc2VIb29rcyhjb21wb25lbnRJZGVudGl0eSk7XG4gICAgICAgICAgICAgIF9uZXh0Q2hpbGRyZW41ID0gZWxlbWVudFR5cGUucmVuZGVyKGVsZW1lbnQucHJvcHMsIGVsZW1lbnQucmVmKTtcbiAgICAgICAgICAgICAgX25leHRDaGlsZHJlbjUgPSBmaW5pc2hIb29rcyhlbGVtZW50VHlwZS5yZW5kZXIsIGVsZW1lbnQucHJvcHMsIF9uZXh0Q2hpbGRyZW41LCBlbGVtZW50LnJlZik7XG4gICAgICAgICAgICAgIF9uZXh0Q2hpbGRyZW41ID0gdG9BcnJheShfbmV4dENoaWxkcmVuNSk7XG4gICAgICAgICAgICAgIHZhciBfZnJhbWU1ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICAgICAgZG9tTmFtZXNwYWNlOiBwYXJlbnROYW1lc3BhY2UsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IF9uZXh0Q2hpbGRyZW41LFxuICAgICAgICAgICAgICAgIGNoaWxkSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICBmb290ZXI6ICcnXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9mcmFtZTUuZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaChfZnJhbWU1KTtcbiAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhciBfZWxlbWVudCA9IG5leHRDaGlsZDtcbiAgICAgICAgICAgICAgdmFyIF9uZXh0Q2hpbGRyZW42ID0gW1JlYWN0LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUudHlwZSwgX2Fzc2lnbih7XG4gICAgICAgICAgICAgICAgcmVmOiBfZWxlbWVudC5yZWZcbiAgICAgICAgICAgICAgfSwgX2VsZW1lbnQucHJvcHMpKV07XG4gICAgICAgICAgICAgIHZhciBfZnJhbWU2ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICAgICAgZG9tTmFtZXNwYWNlOiBwYXJlbnROYW1lc3BhY2UsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IF9uZXh0Q2hpbGRyZW42LFxuICAgICAgICAgICAgICAgIGNoaWxkSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICBmb290ZXI6ICcnXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9mcmFtZTYuZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaChfZnJhbWU2KTtcbiAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YXIgcHJvdmlkZXIgPSBuZXh0Q2hpbGQ7XG4gICAgICAgICAgICAgIHZhciBuZXh0UHJvcHMgPSBwcm92aWRlci5wcm9wcztcblxuICAgICAgICAgICAgICB2YXIgX25leHRDaGlsZHJlbjcgPSB0b0FycmF5KG5leHRQcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgICAgICAgICAgdmFyIF9mcmFtZTcgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogcHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgZG9tTmFtZXNwYWNlOiBwYXJlbnROYW1lc3BhY2UsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IF9uZXh0Q2hpbGRyZW43LFxuICAgICAgICAgICAgICAgIGNoaWxkSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICBmb290ZXI6ICcnXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9mcmFtZTcuZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMucHVzaFByb3ZpZGVyKHByb3ZpZGVyKTtcbiAgICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKF9mcmFtZTcpO1xuICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFyIHJlYWN0Q29udGV4dCA9IG5leHRDaGlsZC50eXBlOyAvLyBUaGUgbG9naWMgYmVsb3cgZm9yIENvbnRleHQgZGlmZmVycyBkZXBlbmRpbmcgb24gUFJPRCBvciBERVYgbW9kZS4gSW5cbiAgICAgICAgICAgICAgLy8gREVWIG1vZGUsIHdlIGNyZWF0ZSBhIHNlcGFyYXRlIG9iamVjdCBmb3IgQ29udGV4dC5Db25zdW1lciB0aGF0IGFjdHNcbiAgICAgICAgICAgICAgLy8gbGlrZSBhIHByb3h5IHRvIENvbnRleHQuIFRoaXMgcHJveHkgb2JqZWN0IGFkZHMgdW5uZWNlc3NhcnkgY29kZSBpbiBQUk9EXG4gICAgICAgICAgICAgIC8vIHNvIHdlIHVzZSB0aGUgb2xkIGJlaGF2aW91ciAoQ29udGV4dC5Db25zdW1lciByZWZlcmVuY2VzIENvbnRleHQpIHRvXG4gICAgICAgICAgICAgIC8vIHJlZHVjZSBzaXplIGFuZCBvdmVyaGVhZC4gVGhlIHNlcGFyYXRlIG9iamVjdCByZWZlcmVuY2VzIGNvbnRleHQgdmlhXG4gICAgICAgICAgICAgIC8vIGEgcHJvcGVydHkgY2FsbGVkIFwiX2NvbnRleHRcIiwgd2hpY2ggYWxzbyBnaXZlcyB1cyB0aGUgYWJpbGl0eSB0byBjaGVja1xuICAgICAgICAgICAgICAvLyBpbiBERVYgbW9kZSBpZiB0aGlzIHByb3BlcnR5IGV4aXN0cyBvciBub3QgYW5kIHdhcm4gaWYgaXQgZG9lcyBub3QuXG5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChyZWFjdENvbnRleHQuX2NvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgLy8gVGhpcyBtYXkgYmUgYmVjYXVzZSBpdCdzIGEgQ29udGV4dCAocmF0aGVyIHRoYW4gYSBDb25zdW1lcikuXG4gICAgICAgICAgICAgICAgICAvLyBPciBpdCBtYXkgYmUgYmVjYXVzZSBpdCdzIG9sZGVyIFJlYWN0IHdoZXJlIHRoZXkncmUgdGhlIHNhbWUgdGhpbmcuXG4gICAgICAgICAgICAgICAgICAvLyBXZSBvbmx5IHdhbnQgdG8gd2FybiBpZiB3ZSdyZSBzdXJlIGl0J3MgYSBuZXcgUmVhY3QuXG4gICAgICAgICAgICAgICAgICBpZiAocmVhY3RDb250ZXh0ICE9PSByZWFjdENvbnRleHQuQ29uc3VtZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29udGV4dEFzQ29uc3VtZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICBoYXNXYXJuZWRBYm91dFVzaW5nQ29udGV4dEFzQ29uc3VtZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dD4gZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZWFjdENvbnRleHQgPSByZWFjdENvbnRleHQuX2NvbnRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdmFyIF9uZXh0UHJvcHMgPSBuZXh0Q2hpbGQucHJvcHM7XG4gICAgICAgICAgICAgIHZhciB0aHJlYWRJRCA9IHRoaXMudGhyZWFkSUQ7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ29udGV4dEJvdW5kcyhyZWFjdENvbnRleHQsIHRocmVhZElEKTtcbiAgICAgICAgICAgICAgdmFyIG5leHRWYWx1ZSA9IHJlYWN0Q29udGV4dFt0aHJlYWRJRF07XG5cbiAgICAgICAgICAgICAgdmFyIF9uZXh0Q2hpbGRyZW44ID0gdG9BcnJheShfbmV4dFByb3BzLmNoaWxkcmVuKG5leHRWYWx1ZSkpO1xuXG4gICAgICAgICAgICAgIHZhciBfZnJhbWU4ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IG5leHRDaGlsZCxcbiAgICAgICAgICAgICAgICBkb21OYW1lc3BhY2U6IHBhcmVudE5hbWVzcGFjZSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogX25leHRDaGlsZHJlbjgsXG4gICAgICAgICAgICAgICAgY2hpbGRJbmRleDogMCxcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICAgIGZvb3RlcjogJydcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX2ZyYW1lOC5kZWJ1Z0VsZW1lbnRTdGFjayA9IFtdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKF9mcmFtZTgpO1xuICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lLW5vLWZhbGx0aHJvdWdoXG5cbiAgICAgICAgICBjYXNlIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEU6XG4gICAgICAgICAgICB7XG5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0RE9NU2VydmVyIGRvZXMgbm90IHlldCBzdXBwb3J0IHRoZSBmdW5kYW1lbnRhbCBBUEkuXCIgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUtbm8tZmFsbHRocm91Z2hcblxuICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YXIgX2VsZW1lbnQyID0gbmV4dENoaWxkO1xuICAgICAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IG5leHRDaGlsZC50eXBlOyAvLyBBdHRlbXB0IHRvIGluaXRpYWxpemUgbGF6eSBjb21wb25lbnQgcmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoZVxuICAgICAgICAgICAgICAvLyBzdXNwZW5zZSBzZXJ2ZXItc2lkZSByZW5kZXJlciBpcyBlbmFibGVkIHNvIHN5bmNocm9ub3VzbHlcbiAgICAgICAgICAgICAgLy8gcmVzb2x2ZWQgY29uc3RydWN0b3JzIGFyZSBzdXBwb3J0ZWQuXG5cbiAgICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG4gICAgICAgICAgICAgIHZhciByZXN1bHQgPSBpbml0KHBheWxvYWQpO1xuICAgICAgICAgICAgICB2YXIgX25leHRDaGlsZHJlbjEwID0gW1JlYWN0LmNyZWF0ZUVsZW1lbnQocmVzdWx0LCBfYXNzaWduKHtcbiAgICAgICAgICAgICAgICByZWY6IF9lbGVtZW50Mi5yZWZcbiAgICAgICAgICAgICAgfSwgX2VsZW1lbnQyLnByb3BzKSldO1xuICAgICAgICAgICAgICB2YXIgX2ZyYW1lMTAgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgICAgICBkb21OYW1lc3BhY2U6IHBhcmVudE5hbWVzcGFjZSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogX25leHRDaGlsZHJlbjEwLFxuICAgICAgICAgICAgICAgIGNoaWxkSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICBmb290ZXI6ICcnXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9mcmFtZTEwLmRlYnVnRWxlbWVudFN0YWNrID0gW107XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2goX2ZyYW1lMTApO1xuICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAge1xuICAgICAgICB2YXIgb3duZXIgPSBuZXh0RWxlbWVudC5fb3duZXI7XG5cbiAgICAgICAgaWYgKGVsZW1lbnRUeXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIGVsZW1lbnRUeXBlID09PSAnb2JqZWN0JyAmJiBlbGVtZW50VHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyhlbGVtZW50VHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgXCIgKyAnbmFtZWQgaW1wb3J0cy4nO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG93bmVyTmFtZSA9IG93bmVyID8gZ2V0Q29tcG9uZW50TmFtZShvd25lcikgOiBudWxsO1xuXG4gICAgICAgIGlmIChvd25lck5hbWUpIHtcbiAgICAgICAgICBpbmZvICs9ICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG93bmVyTmFtZSArICdgLic7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAge1xuICAgICAgICB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoIFwiRWxlbWVudCB0eXBlIGlzIGludmFsaWQ6IGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSBjb21wb25lbnRzKSBidXQgZ290OiBcIiArIChlbGVtZW50VHlwZSA9PSBudWxsID8gZWxlbWVudFR5cGUgOiB0eXBlb2YgZWxlbWVudFR5cGUpICsgXCIuXCIgKyBpbmZvICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlckRPTSA9IGZ1bmN0aW9uIHJlbmRlckRPTShlbGVtZW50LCBjb250ZXh0LCBwYXJlbnROYW1lc3BhY2UpIHtcbiAgICB2YXIgdGFnID0gZWxlbWVudC50eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFyIG5hbWVzcGFjZSA9IHBhcmVudE5hbWVzcGFjZTtcblxuICAgIGlmIChwYXJlbnROYW1lc3BhY2UgPT09IE5hbWVzcGFjZXMuaHRtbCkge1xuICAgICAgbmFtZXNwYWNlID0gZ2V0SW50cmluc2ljTmFtZXNwYWNlKHRhZyk7XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKG5hbWVzcGFjZSA9PT0gTmFtZXNwYWNlcy5odG1sKSB7XG4gICAgICAgIC8vIFNob3VsZCB0aGlzIGNoZWNrIGJlIGdhdGVkIGJ5IHBhcmVudCBuYW1lc3BhY2U/IE5vdCBzdXJlIHdlIHdhbnQgdG9cbiAgICAgICAgLy8gYWxsb3cgPFNWRz4gb3IgPG1BVEg+LlxuICAgICAgICBpZiAodGFnICE9PSBlbGVtZW50LnR5cGUpIHtcbiAgICAgICAgICBlcnJvcignPCVzIC8+IGlzIHVzaW5nIGluY29ycmVjdCBjYXNpbmcuICcgKyAnVXNlIFBhc2NhbENhc2UgZm9yIFJlYWN0IGNvbXBvbmVudHMsICcgKyAnb3IgbG93ZXJjYXNlIGZvciBIVE1MIGVsZW1lbnRzLicsIGVsZW1lbnQudHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YWxpZGF0ZURhbmdlcm91c1RhZyh0YWcpO1xuICAgIHZhciBwcm9wcyA9IGVsZW1lbnQucHJvcHM7XG5cbiAgICBpZiAodGFnID09PSAnaW5wdXQnKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrQ29udHJvbGxlZFZhbHVlUHJvcHMoJ2lucHV0JywgcHJvcHMpO1xuXG4gICAgICAgIGlmIChwcm9wcy5jaGVja2VkICE9PSB1bmRlZmluZWQgJiYgcHJvcHMuZGVmYXVsdENoZWNrZWQgIT09IHVuZGVmaW5lZCAmJiAhZGlkV2FybkRlZmF1bHRDaGVja2VkKSB7XG4gICAgICAgICAgZXJyb3IoJyVzIGNvbnRhaW5zIGFuIGlucHV0IG9mIHR5cGUgJXMgd2l0aCBib3RoIGNoZWNrZWQgYW5kIGRlZmF1bHRDaGVja2VkIHByb3BzLiAnICsgJ0lucHV0IGVsZW1lbnRzIG11c3QgYmUgZWl0aGVyIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkICcgKyAnKHNwZWNpZnkgZWl0aGVyIHRoZSBjaGVja2VkIHByb3AsIG9yIHRoZSBkZWZhdWx0Q2hlY2tlZCBwcm9wLCBidXQgbm90ICcgKyAnYm90aCkuIERlY2lkZSBiZXR3ZWVuIHVzaW5nIGEgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgaW5wdXQgJyArICdlbGVtZW50IGFuZCByZW1vdmUgb25lIG9mIHRoZXNlIHByb3BzLiBNb3JlIGluZm86ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2NvbnRyb2xsZWQtY29tcG9uZW50cycsICdBIGNvbXBvbmVudCcsIHByb3BzLnR5cGUpO1xuXG4gICAgICAgICAgZGlkV2FybkRlZmF1bHRDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy52YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHByb3BzLmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmICFkaWRXYXJuRGVmYXVsdElucHV0VmFsdWUpIHtcbiAgICAgICAgICBlcnJvcignJXMgY29udGFpbnMgYW4gaW5wdXQgb2YgdHlwZSAlcyB3aXRoIGJvdGggdmFsdWUgYW5kIGRlZmF1bHRWYWx1ZSBwcm9wcy4gJyArICdJbnB1dCBlbGVtZW50cyBtdXN0IGJlIGVpdGhlciBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCAnICsgJyhzcGVjaWZ5IGVpdGhlciB0aGUgdmFsdWUgcHJvcCwgb3IgdGhlIGRlZmF1bHRWYWx1ZSBwcm9wLCBidXQgbm90ICcgKyAnYm90aCkuIERlY2lkZSBiZXR3ZWVuIHVzaW5nIGEgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgaW5wdXQgJyArICdlbGVtZW50IGFuZCByZW1vdmUgb25lIG9mIHRoZXNlIHByb3BzLiBNb3JlIGluZm86ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2NvbnRyb2xsZWQtY29tcG9uZW50cycsICdBIGNvbXBvbmVudCcsIHByb3BzLnR5cGUpO1xuXG4gICAgICAgICAgZGlkV2FybkRlZmF1bHRJbnB1dFZhbHVlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBwcm9wcyA9IF9hc3NpZ24oe1xuICAgICAgICB0eXBlOiB1bmRlZmluZWRcbiAgICAgIH0sIHByb3BzLCB7XG4gICAgICAgIGRlZmF1bHRDaGVja2VkOiB1bmRlZmluZWQsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUgIT0gbnVsbCA/IHByb3BzLnZhbHVlIDogcHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgICAgICBjaGVja2VkOiBwcm9wcy5jaGVja2VkICE9IG51bGwgPyBwcm9wcy5jaGVja2VkIDogcHJvcHMuZGVmYXVsdENoZWNrZWRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGFnID09PSAndGV4dGFyZWEnKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrQ29udHJvbGxlZFZhbHVlUHJvcHMoJ3RleHRhcmVhJywgcHJvcHMpO1xuXG4gICAgICAgIGlmIChwcm9wcy52YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHByb3BzLmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmICFkaWRXYXJuRGVmYXVsdFRleHRhcmVhVmFsdWUpIHtcbiAgICAgICAgICBlcnJvcignVGV4dGFyZWEgZWxlbWVudHMgbXVzdCBiZSBlaXRoZXIgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgJyArICcoc3BlY2lmeSBlaXRoZXIgdGhlIHZhbHVlIHByb3AsIG9yIHRoZSBkZWZhdWx0VmFsdWUgcHJvcCwgYnV0IG5vdCAnICsgJ2JvdGgpLiBEZWNpZGUgYmV0d2VlbiB1c2luZyBhIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkIHRleHRhcmVhICcgKyAnYW5kIHJlbW92ZSBvbmUgb2YgdGhlc2UgcHJvcHMuIE1vcmUgaW5mbzogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvY29udHJvbGxlZC1jb21wb25lbnRzJyk7XG5cbiAgICAgICAgICBkaWRXYXJuRGVmYXVsdFRleHRhcmVhVmFsdWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpbml0aWFsVmFsdWUgPSBwcm9wcy52YWx1ZTtcblxuICAgICAgaWYgKGluaXRpYWxWYWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWU7IC8vIFRPRE8gKHl1bmdzdGVycyk6IFJlbW92ZSBzdXBwb3J0IGZvciBjaGlsZHJlbiBjb250ZW50IGluIDx0ZXh0YXJlYT4uXG5cbiAgICAgICAgdmFyIHRleHRhcmVhQ2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgICBpZiAodGV4dGFyZWFDaGlsZHJlbiAhPSBudWxsKSB7XG4gICAgICAgICAge1xuICAgICAgICAgICAgZXJyb3IoJ1VzZSB0aGUgYGRlZmF1bHRWYWx1ZWAgb3IgYHZhbHVlYCBwcm9wcyBpbnN0ZWFkIG9mIHNldHRpbmcgJyArICdjaGlsZHJlbiBvbiA8dGV4dGFyZWE+LicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghKGRlZmF1bHRWYWx1ZSA9PSBudWxsKSkge1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aHJvdyBFcnJvciggXCJJZiB5b3Ugc3VwcGx5IGBkZWZhdWx0VmFsdWVgIG9uIGEgPHRleHRhcmVhPiwgZG8gbm90IHBhc3MgY2hpbGRyZW4uXCIgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0ZXh0YXJlYUNoaWxkcmVuKSkge1xuICAgICAgICAgICAgaWYgKCEodGV4dGFyZWFDaGlsZHJlbi5sZW5ndGggPD0gMSkpIHtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCBcIjx0ZXh0YXJlYT4gY2FuIG9ubHkgaGF2ZSBhdCBtb3N0IG9uZSBjaGlsZC5cIiApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRleHRhcmVhQ2hpbGRyZW4gPSB0ZXh0YXJlYUNoaWxkcmVuWzBdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9ICcnICsgdGV4dGFyZWFDaGlsZHJlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkZWZhdWx0VmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5pdGlhbFZhbHVlID0gZGVmYXVsdFZhbHVlO1xuICAgICAgfVxuXG4gICAgICBwcm9wcyA9IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgIGNoaWxkcmVuOiAnJyArIGluaXRpYWxWYWx1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0YWcgPT09ICdzZWxlY3QnKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrQ29udHJvbGxlZFZhbHVlUHJvcHMoJ3NlbGVjdCcsIHByb3BzKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlUHJvcE5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHByb3BOYW1lID0gdmFsdWVQcm9wTmFtZXNbaV07XG5cbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShwcm9wc1twcm9wTmFtZV0pO1xuXG4gICAgICAgICAgaWYgKHByb3BzLm11bHRpcGxlICYmICFpc0FycmF5KSB7XG4gICAgICAgICAgICBlcnJvcignVGhlIGAlc2AgcHJvcCBzdXBwbGllZCB0byA8c2VsZWN0PiBtdXN0IGJlIGFuIGFycmF5IGlmICcgKyAnYG11bHRpcGxlYCBpcyB0cnVlLicsIHByb3BOYW1lKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCFwcm9wcy5tdWx0aXBsZSAmJiBpc0FycmF5KSB7XG4gICAgICAgICAgICBlcnJvcignVGhlIGAlc2AgcHJvcCBzdXBwbGllZCB0byA8c2VsZWN0PiBtdXN0IGJlIGEgc2NhbGFyICcgKyAndmFsdWUgaWYgYG11bHRpcGxlYCBpcyBmYWxzZS4nLCBwcm9wTmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQgJiYgcHJvcHMuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQgJiYgIWRpZFdhcm5EZWZhdWx0U2VsZWN0VmFsdWUpIHtcbiAgICAgICAgICBlcnJvcignU2VsZWN0IGVsZW1lbnRzIG11c3QgYmUgZWl0aGVyIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkICcgKyAnKHNwZWNpZnkgZWl0aGVyIHRoZSB2YWx1ZSBwcm9wLCBvciB0aGUgZGVmYXVsdFZhbHVlIHByb3AsIGJ1dCBub3QgJyArICdib3RoKS4gRGVjaWRlIGJldHdlZW4gdXNpbmcgYSBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCBzZWxlY3QgJyArICdlbGVtZW50IGFuZCByZW1vdmUgb25lIG9mIHRoZXNlIHByb3BzLiBNb3JlIGluZm86ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2NvbnRyb2xsZWQtY29tcG9uZW50cycpO1xuXG4gICAgICAgICAgZGlkV2FybkRlZmF1bHRTZWxlY3RWYWx1ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5jdXJyZW50U2VsZWN0VmFsdWUgPSBwcm9wcy52YWx1ZSAhPSBudWxsID8gcHJvcHMudmFsdWUgOiBwcm9wcy5kZWZhdWx0VmFsdWU7XG4gICAgICBwcm9wcyA9IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgIHZhbHVlOiB1bmRlZmluZWRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGFnID09PSAnb3B0aW9uJykge1xuICAgICAgdmFyIHNlbGVjdGVkID0gbnVsbDtcbiAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IHRoaXMuY3VycmVudFNlbGVjdFZhbHVlO1xuICAgICAgdmFyIG9wdGlvbkNoaWxkcmVuID0gZmxhdHRlbk9wdGlvbkNoaWxkcmVuKHByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgaWYgKHNlbGVjdFZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgdmFyIHZhbHVlO1xuXG4gICAgICAgIGlmIChwcm9wcy52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSArICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gb3B0aW9uQ2hpbGRyZW47XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3RlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNlbGVjdFZhbHVlKSkge1xuICAgICAgICAgIC8vIG11bHRpcGxlXG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzZWxlY3RWYWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKCcnICsgc2VsZWN0VmFsdWVbal0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGVjdGVkID0gJycgKyBzZWxlY3RWYWx1ZSA9PT0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wcyA9IF9hc3NpZ24oe1xuICAgICAgICAgIHNlbGVjdGVkOiB1bmRlZmluZWQsXG4gICAgICAgICAgY2hpbGRyZW46IHVuZGVmaW5lZFxuICAgICAgICB9LCBwcm9wcywge1xuICAgICAgICAgIHNlbGVjdGVkOiBzZWxlY3RlZCxcbiAgICAgICAgICBjaGlsZHJlbjogb3B0aW9uQ2hpbGRyZW5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAge1xuICAgICAgdmFsaWRhdGVQcm9wZXJ0aWVzSW5EZXZlbG9wbWVudCh0YWcsIHByb3BzKTtcbiAgICB9XG5cbiAgICBhc3NlcnRWYWxpZFByb3BzKHRhZywgcHJvcHMpO1xuICAgIHZhciBvdXQgPSBjcmVhdGVPcGVuVGFnTWFya3VwKGVsZW1lbnQudHlwZSwgdGFnLCBwcm9wcywgbmFtZXNwYWNlLCB0aGlzLm1ha2VTdGF0aWNNYXJrdXAsIHRoaXMuc3RhY2subGVuZ3RoID09PSAxKTtcbiAgICB2YXIgZm9vdGVyID0gJyc7XG5cbiAgICBpZiAob21pdHRlZENsb3NlVGFncy5oYXNPd25Qcm9wZXJ0eSh0YWcpKSB7XG4gICAgICBvdXQgKz0gJy8+JztcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0ICs9ICc+JztcbiAgICAgIGZvb3RlciA9ICc8LycgKyBlbGVtZW50LnR5cGUgKyAnPic7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuO1xuICAgIHZhciBpbm5lck1hcmt1cCA9IGdldE5vbkNoaWxkcmVuSW5uZXJNYXJrdXAocHJvcHMpO1xuXG4gICAgaWYgKGlubmVyTWFya3VwICE9IG51bGwpIHtcbiAgICAgIGNoaWxkcmVuID0gW107XG5cbiAgICAgIGlmIChuZXdsaW5lRWF0aW5nVGFncy5oYXNPd25Qcm9wZXJ0eSh0YWcpICYmIGlubmVyTWFya3VwLmNoYXJBdCgwKSA9PT0gJ1xcbicpIHtcbiAgICAgICAgLy8gdGV4dC9odG1sIGlnbm9yZXMgdGhlIGZpcnN0IGNoYXJhY3RlciBpbiB0aGVzZSB0YWdzIGlmIGl0J3MgYSBuZXdsaW5lXG4gICAgICAgIC8vIFByZWZlciB0byBicmVhayBhcHBsaWNhdGlvbi94bWwgb3ZlciB0ZXh0L2h0bWwgKGZvciBub3cpIGJ5IGFkZGluZ1xuICAgICAgICAvLyBhIG5ld2xpbmUgc3BlY2lmaWNhbGx5IHRvIGdldCBlYXRlbiBieSB0aGUgcGFyc2VyLiAoQWx0ZXJuYXRlbHkgZm9yXG4gICAgICAgIC8vIHRleHRhcmVhcywgcmVwbGFjaW5nIFwiXlxcblwiIHdpdGggXCJcXHJcXG5cIiBkb2Vzbid0IGdldCBlYXRlbiwgYW5kIHRoZSBmaXJzdFxuICAgICAgICAvLyBcXHIgaXMgbm9ybWFsaXplZCBvdXQgYnkgSFRNTFRleHRBcmVhRWxlbWVudCN2YWx1ZS4pXG4gICAgICAgIC8vIFNlZTogPGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWwtcG9seWdsb3QvI25ld2xpbmVzLWluLXRleHRhcmVhLWFuZC1wcmU+XG4gICAgICAgIC8vIFNlZTogPGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI2VsZW1lbnQtcmVzdHJpY3Rpb25zPlxuICAgICAgICAvLyBTZWU6IDxodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNuZXdsaW5lcz5cbiAgICAgICAgLy8gU2VlOiBQYXJzaW5nIG9mIFwidGV4dGFyZWFcIiBcImxpc3RpbmdcIiBhbmQgXCJwcmVcIiBlbGVtZW50c1xuICAgICAgICAvLyAgZnJvbSA8aHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjcGFyc2luZy1tYWluLWluYm9keT5cbiAgICAgICAgb3V0ICs9ICdcXG4nO1xuICAgICAgfVxuXG4gICAgICBvdXQgKz0gaW5uZXJNYXJrdXA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkcmVuID0gdG9BcnJheShwcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuXG4gICAgdmFyIGZyYW1lID0ge1xuICAgICAgZG9tTmFtZXNwYWNlOiBnZXRDaGlsZE5hbWVzcGFjZShwYXJlbnROYW1lc3BhY2UsIGVsZW1lbnQudHlwZSksXG4gICAgICB0eXBlOiB0YWcsXG4gICAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgICBjaGlsZEluZGV4OiAwLFxuICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgIGZvb3RlcjogZm9vdGVyXG4gICAgfTtcblxuICAgIHtcbiAgICAgIGZyYW1lLmRlYnVnRWxlbWVudFN0YWNrID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5zdGFjay5wdXNoKGZyYW1lKTtcbiAgICB0aGlzLnByZXZpb3VzV2FzVGV4dE5vZGUgPSBmYWxzZTtcbiAgICByZXR1cm4gb3V0O1xuICB9O1xuXG4gIHJldHVybiBSZWFjdERPTVNlcnZlclJlbmRlcmVyO1xufSgpO1xuXG4vKipcbiAqIFJlbmRlciBhIFJlYWN0RWxlbWVudCB0byBpdHMgaW5pdGlhbCBIVE1MLiBUaGlzIHNob3VsZCBvbmx5IGJlIHVzZWQgb24gdGhlXG4gKiBzZXJ2ZXIuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWRvbS1zZXJ2ZXIuaHRtbCNyZW5kZXJ0b3N0cmluZ1xuICovXG5cbmZ1bmN0aW9uIHJlbmRlclRvU3RyaW5nKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlbmRlcmVyID0gbmV3IFJlYWN0RE9NU2VydmVyUmVuZGVyZXIoZWxlbWVudCwgZmFsc2UsIG9wdGlvbnMpO1xuXG4gIHRyeSB7XG4gICAgdmFyIG1hcmt1cCA9IHJlbmRlcmVyLnJlYWQoSW5maW5pdHkpO1xuICAgIHJldHVybiBtYXJrdXA7XG4gIH0gZmluYWxseSB7XG4gICAgcmVuZGVyZXIuZGVzdHJveSgpO1xuICB9XG59XG4vKipcbiAqIFNpbWlsYXIgdG8gcmVuZGVyVG9TdHJpbmcsIGV4Y2VwdCB0aGlzIGRvZXNuJ3QgY3JlYXRlIGV4dHJhIERPTSBhdHRyaWJ1dGVzXG4gKiBzdWNoIGFzIGRhdGEtcmVhY3QtaWQgdGhhdCBSZWFjdCB1c2VzIGludGVybmFsbHkuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWRvbS1zZXJ2ZXIuaHRtbCNyZW5kZXJ0b3N0YXRpY21hcmt1cFxuICovXG5cbmZ1bmN0aW9uIHJlbmRlclRvU3RhdGljTWFya3VwKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlbmRlcmVyID0gbmV3IFJlYWN0RE9NU2VydmVyUmVuZGVyZXIoZWxlbWVudCwgdHJ1ZSwgb3B0aW9ucyk7XG5cbiAgdHJ5IHtcbiAgICB2YXIgbWFya3VwID0gcmVuZGVyZXIucmVhZChJbmZpbml0eSk7XG4gICAgcmV0dXJuIG1hcmt1cDtcbiAgfSBmaW5hbGx5IHtcbiAgICByZW5kZXJlci5kZXN0cm95KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9Ob2RlU3RyZWFtKCkge1xuICB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9Ob2RlU3RyZWFtKCk6IFRoZSBzdHJlYW1pbmcgQVBJIGlzIG5vdCBhdmFpbGFibGUgaW4gdGhlIGJyb3dzZXIuIFVzZSBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0cmluZygpIGluc3RlYWQuXCIgKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9TdGF0aWNOb2RlU3RyZWFtKCkge1xuICB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNOb2RlU3RyZWFtKCk6IFRoZSBzdHJlYW1pbmcgQVBJIGlzIG5vdCBhdmFpbGFibGUgaW4gdGhlIGJyb3dzZXIuIFVzZSBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0YXRpY01hcmt1cCgpIGluc3RlYWQuXCIgKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0cy5yZW5kZXJUb05vZGVTdHJlYW0gPSByZW5kZXJUb05vZGVTdHJlYW07XG5leHBvcnRzLnJlbmRlclRvU3RhdGljTWFya3VwID0gcmVuZGVyVG9TdGF0aWNNYXJrdXA7XG5leHBvcnRzLnJlbmRlclRvU3RhdGljTm9kZVN0cmVhbSA9IHJlbmRlclRvU3RhdGljTm9kZVN0cmVhbTtcbmV4cG9ydHMucmVuZGVyVG9TdHJpbmcgPSByZW5kZXJUb1N0cmluZztcbmV4cG9ydHMudmVyc2lvbiA9IFJlYWN0VmVyc2lvbjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1kb20tc2VydmVyLmJyb3dzZXIucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtZG9tLXNlcnZlci5icm93c2VyLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHdpdGhEYXRhIGZyb20gXCIuLi9saWIvd2l0aERhdGFcIjtcclxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9zdHlsZXMvbnByb2dyZXNzLmNzc1wiO1xyXG5cclxuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpO1xyXG5cclxuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XHJcblxyXG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VFcnJvclwiLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG99PlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uICh7IENvbXBvbmVudCwgY3R4IH0pIHtcclxuICBsZXQgcGFnZVByb3BzID0ge307XHJcbiAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcclxuICB9XHJcbiAgcGFnZVByb3BzLnF1ZXJ5ID0gY3R4LnF1ZXJ5O1xyXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGEoTXlBcHApO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9