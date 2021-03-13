module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/checkout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Checkout.js":
/*!********************************!*\
  !*** ./components/Checkout.js ***!
  \********************************/
/*! exports provided: Checkout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkout", function() { return Checkout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stripe/stripe-js */ "@stripe/stripe-js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stripe/react-stripe-js */ "@stripe/react-stripe-js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "C:\\Users\\PC\\antistore\\antistore\\frontend\\components\\Checkout.js";










const CREATE_ORDER_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;
const CheckoutFormStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "Checkout__CheckoutFormStyles",
  componentId: "sc-10mtoy5-0"
})(["box-shadow:0 1px 2px 2px rgba(0,0,0,0.05);border:1px solid rgba(0,0,0,0.06);border-radius:5px;padding:1rem;display:grid;grid-gap:1rem;"]);
const stripeLib = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_4__["loadStripe"])("pk_test_51IOMOFKEx8gOpgsfC8grmMZMeM5LdNlzmBAfyco2r98B1r4vZV3h16Aijo7Cbx0nnoxpYWrapIQMlMu1IwoQ3OIV00K84Att1s");

function CheckoutForm() {
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])();
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const stripe = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__["useStripe"])();
  const elements = Object(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__["useElements"])();
  const [checkout, {
    error: graphQLError
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_10__["useMutation"])(CREATE_ORDER_MUTATION, {
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_9__["GET_USER_QUERY"]
    }]
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start();
    const {
      error,
      paymentMethod
    } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__["CardElement"])
    });
    console.log(paymentMethod);

    if (error) {
      setError(error);
      nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
      return;
    }

    const order = await checkout({
      variables: {
        token: paymentMethod.id
      }
    });
    console.log(order);
    router.push({
      pathname: `/order/[id]`,
      query: {
        id: order.data.checkout.id
      }
    });
    setLoading(false);
    nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CheckoutFormStyles, {
    onSubmit: handleSubmit,
    children: [error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: {
        fontSize: "12"
      },
      children: error.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }, this), graphQLError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      style: {
        fontSize: "12"
      },
      children: graphQLError.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 24
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__["CardElement"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      children: "Check Out Now"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 5
  }, this);
}

function Checkout() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_5__["Elements"], {
    stripe: stripeLib,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CheckoutForm, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 5
  }, this);
}



/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: GET_USER_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_QUERY", function() { return GET_USER_QUERY; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);


const GET_USER_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
        cart {
          id
          quantity
          product {
            id
            price
            name
            description
            photo {
              image {
                publicUrlTransformed(
                  transformation: { width: "120", crop: "limit" }
                )
              }
            }
          }
        }
      }
    }
  }
`;

const useUser = () => {
  const {
    data
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(GET_USER_QUERY);
  return data === null || data === void 0 ? void 0 : data.authenticatedItem;
};

/* harmony default export */ __webpack_exports__["default"] = (useUser);

/***/ }),

/***/ "./lib/cartState.js":
/*!**************************!*\
  !*** ./lib/cartState.js ***!
  \**************************/
/*! exports provided: CartStateProvider, useCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartStateProvider", function() { return CartStateProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCart", function() { return useCart; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\PC\\antistore\\antistore\\frontend\\lib\\cartState.js";

const CartStateContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
const StateProvider = CartStateContext.Provider;

function CartStateProvider({
  children
}) {
  const {
    0: cartOpen,
    1: setCartOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  function toggleCartState() {
    setCartOpen(!cartOpen);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StateProvider, {
    value: {
      toggleCartState,
      cartOpen
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

function useCart() {
  const all = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(CartStateContext);
  return all;
}



/***/ }),

/***/ "./pages/checkout.js":
/*!***************************!*\
  !*** ./pages/checkout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Checkout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Checkout */ "./components/Checkout.js");


var _jsxFileName = "C:\\Users\\PC\\antistore\\antistore\\frontend\\pages\\checkout.js";


const CheckoutPage = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Checkout__WEBPACK_IMPORTED_MODULE_1__["Checkout"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (CheckoutPage);

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@stripe/react-stripe-js":
/*!******************************************!*\
  !*** external "@stripe/react-stripe-js" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@stripe/react-stripe-js");

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGVja291dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NhcnRTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9jaGVja291dC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHN0cmlwZS9zdHJpcGUtanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibnByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkNSRUFURV9PUkRFUl9NVVRBVElPTiIsImdxbCIsIkNoZWNrb3V0Rm9ybVN0eWxlcyIsInN0eWxlZCIsImZvcm0iLCJzdHJpcGVMaWIiLCJsb2FkU3RyaXBlIiwicHJvY2VzcyIsIkNoZWNrb3V0Rm9ybSIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwic3RyaXBlIiwidXNlU3RyaXBlIiwiZWxlbWVudHMiLCJ1c2VFbGVtZW50cyIsImNoZWNrb3V0IiwiZ3JhcGhRTEVycm9yIiwidXNlTXV0YXRpb24iLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiR0VUX1VTRVJfUVVFUlkiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJuUHJvZ3Jlc3MiLCJzdGFydCIsInBheW1lbnRNZXRob2QiLCJjcmVhdGVQYXltZW50TWV0aG9kIiwidHlwZSIsImNhcmQiLCJnZXRFbGVtZW50IiwiQ2FyZEVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwiZG9uZSIsIm9yZGVyIiwidmFyaWFibGVzIiwidG9rZW4iLCJpZCIsInB1c2giLCJwYXRobmFtZSIsImRhdGEiLCJmb250U2l6ZSIsIm1lc3NhZ2UiLCJDaGVja291dCIsInVzZVVzZXIiLCJ1c2VRdWVyeSIsImF1dGhlbnRpY2F0ZWRJdGVtIiwiQ2FydFN0YXRlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJTdGF0ZVByb3ZpZGVyIiwiUHJvdmlkZXIiLCJDYXJ0U3RhdGVQcm92aWRlciIsImNoaWxkcmVuIiwiY2FydE9wZW4iLCJzZXRDYXJ0T3BlbiIsInRvZ2dsZUNhcnRTdGF0ZSIsInVzZUNhcnQiLCJhbGwiLCJ1c2VDb250ZXh0IiwiQ2hlY2tvdXRQYWdlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIs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LEdBQTJCO0FBQ3pCRCxlQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUFYO0FBQ0Q7O0FBRUQsc0JBQ0UscUVBQUMsYUFBRDtBQUFlLFNBQUssRUFBRTtBQUFFRSxxQkFBRjtBQUFtQkY7QUFBbkIsS0FBdEI7QUFBQSxjQUNHRDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVELFNBQVNJLE9BQVQsR0FBbUI7QUFDakIsUUFBTUMsR0FBRyxHQUFHQyx3REFBVSxDQUFDWCxnQkFBRCxDQUF0QjtBQUNBLFNBQU9VLEdBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJEOztBQUVBLE1BQU1FLFlBQVksR0FBRyxNQUFNO0FBQ3pCLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUEsa0JBREY7QUFNRCxDQVBEOztBQVNlQSwyRUFBZixFOzs7Ozs7Ozs7OztBQ1hBLDJDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2NoZWNrb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9jaGVja291dC5qc1wiKTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcbmltcG9ydCBuUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xyXG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSBcIkBzdHJpcGUvc3RyaXBlLWpzXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FyZEVsZW1lbnQsXHJcbiAgRWxlbWVudHMsXHJcbiAgdXNlRWxlbWVudHMsXHJcbiAgdXNlU3RyaXBlLFxyXG59IGZyb20gXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gXCIuLi9saWIvY2FydFN0YXRlXCI7XHJcbmltcG9ydCB7IEdFVF9VU0VSX1FVRVJZIH0gZnJvbSBcIi4vVXNlclwiO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5cclxuY29uc3QgQ1JFQVRFX09SREVSX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIENSRUFURV9PUkRFUl9NVVRBVElPTigkdG9rZW46IFN0cmluZyEpIHtcclxuICAgIGNoZWNrb3V0KHRva2VuOiAkdG9rZW4pIHtcclxuICAgICAgaWRcclxuICAgICAgY2hhcmdlXHJcbiAgICAgIHRvdGFsXHJcbiAgICAgIGl0ZW1zIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENoZWNrb3V0Rm9ybVN0eWxlcyA9IHN0eWxlZC5mb3JtYFxyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC1nYXA6IDFyZW07XHJcbmA7XHJcblxyXG5jb25zdCBzdHJpcGVMaWIgPSBsb2FkU3RyaXBlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9LRVkpO1xyXG5cclxuZnVuY3Rpb24gQ2hlY2tvdXRGb3JtKCkge1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qgc3RyaXBlID0gdXNlU3RyaXBlKCk7XHJcbiAgY29uc3QgZWxlbWVudHMgPSB1c2VFbGVtZW50cygpO1xyXG5cclxuICBjb25zdCBbY2hlY2tvdXQsIHsgZXJyb3I6IGdyYXBoUUxFcnJvciB9XSA9IHVzZU11dGF0aW9uKFxyXG4gICAgQ1JFQVRFX09SREVSX01VVEFUSU9OLFxyXG4gICAge1xyXG4gICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IEdFVF9VU0VSX1FVRVJZIH1dLFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgblByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICBjb25zdCB7IGVycm9yLCBwYXltZW50TWV0aG9kIH0gPSBhd2FpdCBzdHJpcGUuY3JlYXRlUGF5bWVudE1ldGhvZCh7XHJcbiAgICAgIHR5cGU6IFwiY2FyZFwiLFxyXG4gICAgICBjYXJkOiBlbGVtZW50cy5nZXRFbGVtZW50KENhcmRFbGVtZW50KSxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2cocGF5bWVudE1ldGhvZCk7XHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3IoZXJyb3IpO1xyXG4gICAgICBuUHJvZ3Jlc3MuZG9uZSgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBvcmRlciA9IGF3YWl0IGNoZWNrb3V0KHtcclxuICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgdG9rZW46IHBheW1lbnRNZXRob2QuaWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKG9yZGVyKTtcclxuICAgIHJvdXRlci5wdXNoKHtcclxuICAgICAgcGF0aG5hbWU6IGAvb3JkZXIvW2lkXWAsXHJcbiAgICAgIHF1ZXJ5OiB7IGlkOiBvcmRlci5kYXRhLmNoZWNrb3V0LmlkIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIG5Qcm9ncmVzcy5kb25lKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENoZWNrb3V0Rm9ybVN0eWxlcyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAge2Vycm9yICYmIDxwIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEyXCIgfX0+e2Vycm9yLm1lc3NhZ2V9PC9wPn1cclxuICAgICAge2dyYXBoUUxFcnJvciAmJiA8cCBzdHlsZT17eyBmb250U2l6ZTogXCIxMlwiIH19PntncmFwaFFMRXJyb3IubWVzc2FnZX08L3A+fVxyXG4gICAgICA8Q2FyZEVsZW1lbnQgLz5cclxuICAgICAgPGJ1dHRvbj5DaGVjayBPdXQgTm93PC9idXR0b24+XHJcbiAgICA8L0NoZWNrb3V0Rm9ybVN0eWxlcz5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDaGVja291dCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEVsZW1lbnRzIHN0cmlwZT17c3RyaXBlTGlifT5cclxuICAgICAgPENoZWNrb3V0Rm9ybSAvPlxyXG4gICAgPC9FbGVtZW50cz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgeyBDaGVja291dCB9O1xyXG4iLCJpbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX1FVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IHtcclxuICAgIGF1dGhlbnRpY2F0ZWRJdGVtIHtcclxuICAgICAgLi4uIG9uIFVzZXIge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgZW1haWxcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgY2FydCB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgcXVhbnRpdHlcclxuICAgICAgICAgIHByb2R1Y3Qge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgIHBob3RvIHtcclxuICAgICAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZChcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtYXRpb246IHsgd2lkdGg6IFwiMTIwXCIsIGNyb3A6IFwibGltaXRcIiB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgdXNlVXNlciA9ICgpID0+IHtcclxuICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9VU0VSX1FVRVJZKTtcclxuXHJcbiAgcmV0dXJuIGRhdGE/LmF1dGhlbnRpY2F0ZWRJdGVtO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlVXNlcjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IENhcnRTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmNvbnN0IFN0YXRlUHJvdmlkZXIgPSBDYXJ0U3RhdGVDb250ZXh0LlByb3ZpZGVyO1xyXG5cclxuZnVuY3Rpb24gQ2FydFN0YXRlUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW2NhcnRPcGVuLCBzZXRDYXJ0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZUNhcnRTdGF0ZSgpIHtcclxuICAgIHNldENhcnRPcGVuKCFjYXJ0T3Blbik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0YXRlUHJvdmlkZXIgdmFsdWU9e3sgdG9nZ2xlQ2FydFN0YXRlLCBjYXJ0T3BlbiB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TdGF0ZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZUNhcnQoKSB7XHJcbiAgY29uc3QgYWxsID0gdXNlQ29udGV4dChDYXJ0U3RhdGVDb250ZXh0KTtcclxuICByZXR1cm4gYWxsO1xyXG59XHJcblxyXG5leHBvcnQgeyBDYXJ0U3RhdGVQcm92aWRlciwgdXNlQ2FydCB9O1xyXG4iLCJpbXBvcnQgeyBDaGVja291dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NoZWNrb3V0XCI7XHJcblxyXG5jb25zdCBDaGVja291dFBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMT4uPC9oMT5cclxuICAgICAgPENoZWNrb3V0IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRQYWdlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3RyaXBlL3N0cmlwZS1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=