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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/DeleteProduct.js":
/*!*************************************!*\
  !*** ./components/DeleteProduct.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\PC\\antistore\\antistore\\frontend\\components\\DeleteProduct.js";


const DELETE_PRODUCT_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteProduct));
}

const DeleteProduct = ({
  id,
  children
}) => {
  const [deleteProduct, {
    loading
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(DELETE_PRODUCT_MUTATION, {
    variables: {
      id
    },
    update
  });

  const handleDelete = e => {
    e.stopPropagation();

    if (confirm("Are you sure you want to delete this product?")) {
      deleteProduct().catch(err => alert(err.message));
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "button-erase",
    onClick: handleDelete,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (DeleteProduct);

/***/ }),

/***/ "./components/EditProductButton.js":
/*!*****************************************!*\
  !*** ./components/EditProductButton.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\PC\\antistore\\antistore\\frontend\\components\\EditProductButton.js";



const EditProductButton = ({
  id,
  children
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  const handleRouting = e => {
    e.stopPropagation();
    router.push(`/product/edit/${id}`);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
    className: "button-edit",
    onClick: handleRouting,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (EditProductButton);

/***/ }),

/***/ "./components/FeaturedProduct.js":
/*!***************************************!*\
  !*** ./components/FeaturedProduct.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_FeaturedProductStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/FeaturedProductStyle */ "./components/styles/FeaturedProductStyle.js");
/* harmony import */ var _DeleteProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeleteProduct */ "./components/DeleteProduct.js");
/* harmony import */ var _EditProductButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EditProductButton */ "./components/EditProductButton.js");

var _jsxFileName = "C:\\Users\\PC\\antistore\\antistore\\frontend\\components\\FeaturedProduct.js";
//TODO
//1. ADD TRANSITIONS
//2. ADD ACTION TO ADD TO CART BUTTON







const FeaturedProduct = ({
  product
}) => {
  var _product$photo, _product$photo$image;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const {
    0: showButton,
    1: setShowButton
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_FeaturedProductStyle__WEBPACK_IMPORTED_MODULE_4__["FeaturedProductStyle"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "div-bg",
      onMouseEnter: () => setShowButton(true),
      onMouseLeave: () => setShowButton(false),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "div-main",
        onClick: () => router.push(`/product/${product === null || product === void 0 ? void 0 : product.id}`),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: [showButton ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DeleteProduct__WEBPACK_IMPORTED_MODULE_5__["default"], {
            id: product === null || product === void 0 ? void 0 : product.id,
            children: "Delete"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 15
          }, undefined) : "", showButton ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_EditProductButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
            id: product === null || product === void 0 ? void 0 : product.id,
            children: "Edit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, undefined) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: product === null || product === void 0 ? void 0 : (_product$photo = product.photo) === null || _product$photo === void 0 ? void 0 : (_product$photo$image = _product$photo.image) === null || _product$photo$image === void 0 ? void 0 : _product$photo$image.publicUrlTransformed,
            alt: product === null || product === void 0 ? void 0 : product.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: product === null || product === void 0 ? void 0 : product.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: product === null || product === void 0 ? void 0 : product.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: Object(_lib_formatMoney__WEBPACK_IMPORTED_MODULE_2__["default"])(product === null || product === void 0 ? void 0 : product.price)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, undefined), showButton ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          children: "Add to cart"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }, undefined) : ""]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (FeaturedProduct);

/***/ }),

/***/ "./components/FeaturedProducts.js":
/*!****************************************!*\
  !*** ./components/FeaturedProducts.js ***!
  \****************************************/
/*! exports provided: H1, FEATURED_PRODUCTS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return H1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEATURED_PRODUCTS", function() { return FEATURED_PRODUCTS; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FeaturedProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeaturedProduct */ "./components/FeaturedProduct.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\PC\\antistore\\antistore\\frontend\\components\\FeaturedProducts.js";
//TODO
// 1. ADD CARROUSEL




const FeaturedStyles = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "FeaturedProducts__FeaturedStyles",
  componentId: "sc-1l6y9g5-0"
})(["display:flex;align-content:center;flex-direction:row;justify-content:center;flex-wrap:wrap;margin-bottom:3rem;"]);
const H1 = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.h1.withConfig({
  displayName: "FeaturedProducts__H1",
  componentId: "sc-1l6y9g5-1"
})(["display:flex;align-items:center;justify-content:center;text-align:center;font-size:8rem;text-align:center;line-height:1.2;font-weight:700;margin:3rem 0rem;text-transform:uppercase;"]);
const FEATURED_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  query FEATURED_PRODUCTS {
    allProducts(where: { featured: true }) {
      id
      price
      name
      description
      photo {
        altText
        image {
          publicUrlTransformed(transformation: { width: "120", crop: "limit" })
        }
      }
      featured
    }
  }
`;

const FeaturedProducts = () => {
  const {
    data,
    loading,
    error
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(FEATURED_PRODUCTS);
  if (loading) return "loading...";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(H1, {
      children: "Featured Products"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FeaturedStyles, {
      children: data === null || data === void 0 ? void 0 : data.allProducts.map(product => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FeaturedProduct__WEBPACK_IMPORTED_MODULE_3__["default"], {
        product: product
      }, product.id, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (FeaturedProducts);

/***/ }),

/***/ "./components/Login.js":
/*!*****************************!*\
  !*** ./components/Login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _styles_FormStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/FormStyles */ "./components/styles/FormStyles.js");
/* harmony import */ var _FeaturedProducts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FeaturedProducts */ "./components/FeaturedProducts.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\PC\\antistore\\antistore\\frontend\\components\\Login.js";








const LOGIN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;

const Login = () => {
  const {
    inputs,
    handleChange,
    resetForm
  } = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_3__["default"])({
    email: "",
    password: ""
  });
  const [login, {
    data,
    loading
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(LOGIN_MUTATION, {
    variables: inputs,
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_4__["GET_USER_QUERY"]
    }]
  });
  const user = Object(_User__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  if (loading) return "Loading...";

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await login();
    resetForm();
    router.push(`/`);
  };

  const loginError = (data === null || data === void 0 ? void 0 : data.authenticateUserWithPassword.__typename) === "UserAuthenticationWithPasswordFailure" ? data === null || data === void 0 ? void 0 : data.authenticateUserWithPassword : undefined;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FeaturedProducts__WEBPACK_IMPORTED_MODULE_6__["H1"], {
      children: "Login"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: loginError === null || loginError === void 0 ? void 0 : loginError.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_FormStyles__WEBPACK_IMPORTED_MODULE_5__["FormStyles"], {
      method: "POST",
      onSubmit: handleSubmit,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
        disabled: loading,
        "aria-busy": loading,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "email",
          children: ["Email", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "email",
            name: "email",
            placeholder: "Your Email Address",
            autoComplete: "email",
            value: inputs.email,
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "password",
          children: ["Password", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            required: true,
            id: "password",
            placeholder: "Password",
            onChange: handleChange,
            type: "password",
            value: inputs.password,
            name: "password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "submit",
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./components/PasswordReset.js":
/*!*************************************!*\
  !*** ./components/PasswordReset.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_FormStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/FormStyles */ "./components/styles/FormStyles.js");

var _jsxFileName = "C:\\Users\\PC\\antistore\\antistore\\frontend\\components\\PasswordReset.js";




const PASSWORD_RESET_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default.a`
  mutation PASSWORD_RESET_MUTATION($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;

const PasswordReset = () => {
  const {
    inputs,
    handleChange,
    resetForm
  } = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_1__["default"])({
    email: ""
  });
  const [sendUserPasswordResetLink, {
    data,
    loading,
    error
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(PASSWORD_RESET_MUTATION, {
    variables: inputs
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await sendUserPasswordResetLink().catch(console.log(error));
    console.log(res);
    resetForm();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_FormStyles__WEBPACK_IMPORTED_MODULE_4__["FormStyles"], {
    method: "POST",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      style: {
        marginTop: "5rem"
      },
      children: "Request a Password Reset"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
      children: [(data === null || data === void 0 ? void 0 : data.sendUserPasswordResetLink) === null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Success! Check your email for a link!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        htmlFor: "email",
        children: ["Email", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "email",
          name: "email",
          placeholder: "Email Address",
          autoComplete: "email",
          value: inputs.email,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        children: "Request Reset"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PasswordReset);

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

/***/ "./components/styles/FeaturedProductStyle.js":
/*!***************************************************!*\
  !*** ./components/styles/FeaturedProductStyle.js ***!
  \***************************************************/
/*! exports provided: FeaturedProductStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedProductStyle", function() { return FeaturedProductStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FeaturedProductStyle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "FeaturedProductStyle",
  componentId: "sc-1ov9fow-0"
})(["display:flex;flex-direction:row;justify-content:center;align-content:center;padding:0 4rem;margin-top:3rem;.div-bg{padding-top:0.5rem;display:flex;justify-content:center;align-items:center;border-radius:3px;background:var(--primaryColor);width:325px;height:425px;box-shadow:var(--bs);}.div-main{position:relative;padding-top:2rem;height:375px;border-radius:3px;width:275px;margin-bottom:1rem;background-color:white;cursor:pointer;div{display:flex;width:100%;justify-content:center;align-items:center;height:200px;img{display:flex;}}h3{color:var(--secondaryColor);display:flex;align-items:center;justify-content:center;text-transform:uppercase;span{background:var(--primaryColor);font-weight:bold;padding:0 2rem;border-radius:3px;font-size:2rem;}}span{margin-top:1rem;text-transform:uppercase;text-align:center;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:1rem;}button{position:absolute;background:var(--secondaryColor);font-weight:bold;padding:0 2rem;border-radius:3px;font-size:2rem;color:var(--primaryColor);border:none;outline:none;cursor:pointer;box-shadow:var(--bs);text-transform:uppercase;bottom:-40px;left:50%;margin-left:-85.5px;}.button-erase{position:absolute;padding:1rem 2rem;color:var(--secondaryColor);background:linear-gradient(to right,#f2709c,#ff9472);border-radius:500px;font-size:1.5rem;left:120%;bottom:98%;}.button-edit{position:absolute;padding:1rem 2rem;color:var(--secondaryColor);background:linear-gradient(to right,#7474bf,#348ac7);border-radius:500px;font-size:1.5rem;left:12%;bottom:98%;}}"]);

/***/ }),

/***/ "./components/styles/FormStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/FormStyles.js ***!
  \*****************************************/
/*! exports provided: FormStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormStyles", function() { return FormStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FormStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "FormStyles",
  componentId: "lfnj3o-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;outline:none;border:none;button{display:flex;justify-content:center;align-items:center;border:none;outline:none;background:var(--primaryColor);color:var(--secondaryColor);padding:2rem;text-transform:uppercase;font-size:1.5rem;font-weight:600;margin:auto;margin-top:3rem;cursor:pointer;}fieldset{display:flex;flex-direction:column;outline:none;border:none;border-left:solid 4px var(--primaryColor);padding:2rem;justify-content:flex-start;}label{text-transform:uppercase;display:flex;justify-content:flex-start;flex-direction:column;font-weight:600;}input{display:flex;justify-content:flex-start;outline:none;margin:0 0 2rem 0rem;min-width:800px;border:2px solid var(--primaryColor);padding:0.5rem;border-radius:3px;}"]);

/***/ }),

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatMoney; });
function formatMoney(amount = 0) {
  const options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigtis: 2
  };

  if (amount % 100 === 0) {
    options.minimumFractionDigtis = 0;
  }

  const formatter = Intl.NumberFormat("en-US", options);
  return formatter.format(amount / 100);
}

/***/ }),

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function useForm(initial = {}) {
  const {
    0: inputs,
    1: setInputs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initial);
  const initialValues = Object.values(initial).join("");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setInputs(initial);
  }, [initialValues]);

  function handleChange(e) {
    let {
      value,
      name,
      type
    } = e.target;

    if (type === "number") {
      value = parseInt(value);
    }

    if (type === "file") {
      [value] = e.target.files;
    }

    if (type === "checkbox") {
      value = !!value;
    }

    setInputs(_objectSpread(_objectSpread({}, inputs), {}, {
      [name]: value
    }));
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(Object.entries(inputs).map(([key, value]) => [key, ""]));
    setInputs(blankState);
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm
  };
}

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Login */ "./components/Login.js");
/* harmony import */ var _components_PasswordReset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PasswordReset */ "./components/PasswordReset.js");


var _jsxFileName = "C:\\Users\\PC\\antistore\\antistore\\frontend\\pages\\login.js";



const LoginPage = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Login__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PasswordReset__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (LoginPage);

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EZWxldGVQcm9kdWN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRWRpdFByb2R1Y3RCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GZWF0dXJlZFByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GZWF0dXJlZFByb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYXNzd29yZFJlc2V0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlcy9GZWF0dXJlZFByb2R1Y3RTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlcy9Gb3JtU3R5bGVzLmpzIiwid2VicGFjazovLy8uL2xpYi9mb3JtYXRNb25leS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdXNlRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiREVMRVRFX1BST0RVQ1RfTVVUQVRJT04iLCJncWwiLCJ1cGRhdGUiLCJjYWNoZSIsInBheWxvYWQiLCJldmljdCIsImlkZW50aWZ5IiwiZGF0YSIsImRlbGV0ZVByb2R1Y3QiLCJEZWxldGVQcm9kdWN0IiwiaWQiLCJjaGlsZHJlbiIsImxvYWRpbmciLCJ1c2VNdXRhdGlvbiIsInZhcmlhYmxlcyIsImhhbmRsZURlbGV0ZSIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJjb25maXJtIiwiY2F0Y2giLCJlcnIiLCJhbGVydCIsIm1lc3NhZ2UiLCJFZGl0UHJvZHVjdEJ1dHRvbiIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZVJvdXRpbmciLCJwdXNoIiwiRmVhdHVyZWRQcm9kdWN0IiwicHJvZHVjdCIsInNob3dCdXR0b24iLCJzZXRTaG93QnV0dG9uIiwidXNlU3RhdGUiLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJmb3JtYXRNb25leSIsInByaWNlIiwiRmVhdHVyZWRTdHlsZXMiLCJzdHlsZWQiLCJkaXYiLCJIMSIsImgxIiwiRkVBVFVSRURfUFJPRFVDVFMiLCJGZWF0dXJlZFByb2R1Y3RzIiwiZXJyb3IiLCJ1c2VRdWVyeSIsImFsbFByb2R1Y3RzIiwibWFwIiwiTE9HSU5fTVVUQVRJT04iLCJMb2dpbiIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsInJlc2V0Rm9ybSIsInVzZUZvcm0iLCJlbWFpbCIsInBhc3N3b3JkIiwibG9naW4iLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiR0VUX1VTRVJfUVVFUlkiLCJ1c2VyIiwidXNlVXNlciIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicmVzIiwibG9naW5FcnJvciIsImF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmQiLCJfX3R5cGVuYW1lIiwidW5kZWZpbmVkIiwiUEFTU1dPUkRfUkVTRVRfTVVUQVRJT04iLCJQYXNzd29yZFJlc2V0Iiwic2VuZFVzZXJQYXNzd29yZFJlc2V0TGluayIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW5Ub3AiLCJhdXRoZW50aWNhdGVkSXRlbSIsIkZlYXR1cmVkUHJvZHVjdFN0eWxlIiwiRm9ybVN0eWxlcyIsImZvcm0iLCJhbW91bnQiLCJvcHRpb25zIiwic3R5bGUiLCJjdXJyZW5jeSIsIm1pbmltdW1GcmFjdGlvbkRpZ3RpcyIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiLCJpbml0aWFsIiwic2V0SW5wdXRzIiwiaW5pdGlhbFZhbHVlcyIsIk9iamVjdCIsInZhbHVlcyIsImpvaW4iLCJ1c2VFZmZlY3QiLCJ2YWx1ZSIsInR5cGUiLCJ0YXJnZXQiLCJwYXJzZUludCIsImZpbGVzIiwiY2xlYXJGb3JtIiwiYmxhbmtTdGF0ZSIsImZyb21FbnRyaWVzIiwiZW50cmllcyIsImtleSIsIkxvZ2luUGFnZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBRUEsTUFBTUEsdUJBQXVCLEdBQUdDLGtEQUFJO0FBQ3BDO0FBQ0E7QUFDQTtB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QUFTLGlDQUNKdkMsTUFESTtBQUVQLE9BQUNqQixJQUFELEdBQVE4RDtBQUZELE9BQVQ7QUFJRDs7QUFFRCxXQUFTM0MsU0FBVCxHQUFxQjtBQUNuQnFDLGFBQVMsQ0FBQ0QsT0FBRCxDQUFUO0FBQ0Q7O0FBRUQsV0FBU1ksU0FBVCxHQUFxQjtBQUNuQixVQUFNQyxVQUFVLEdBQUdWLE1BQU0sQ0FBQ1csV0FBUCxDQUNqQlgsTUFBTSxDQUFDWSxPQUFQLENBQWVyRCxNQUFmLEVBQXVCSCxHQUF2QixDQUEyQixDQUFDLENBQUN5RCxHQUFELEVBQU1ULEtBQU4sQ0FBRCxLQUFrQixDQUFDUyxHQUFELEVBQU0sRUFBTixDQUE3QyxDQURpQixDQUFuQjtBQUdBZixhQUFTLENBQUNZLFVBQUQsQ0FBVDtBQUNEOztBQUVELFNBQU87QUFDTG5ELFVBREs7QUFFTEMsZ0JBRks7QUFHTEMsYUFISztBQUlMZ0Q7QUFKSyxHQUFQO0FBTUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0Q7QUFDQTs7QUFFQSxNQUFNSyxTQUFTLEdBQUcsTUFBTTtBQUN0QixzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUEsa0JBREY7QUFNRCxDQVBEOztBQVNlQSx3RUFBZixFOzs7Ozs7Ozs7OztBQ1pBLDJDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9sb2dpbi5qc1wiKTtcbiIsImltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XHJcblxyXG5jb25zdCBERUxFVEVfUFJPRFVDVF9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBERUxFVEVfUFJPRFVDVF9NVVRBVElPTigkaWQ6IElEISkge1xyXG4gICAgZGVsZXRlUHJvZHVjdChpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGUoY2FjaGUsIHBheWxvYWQpIHtcclxuICBjYWNoZS5ldmljdChjYWNoZS5pZGVudGlmeShwYXlsb2FkLmRhdGEuZGVsZXRlUHJvZHVjdCkpO1xyXG59XHJcblxyXG5jb25zdCBEZWxldGVQcm9kdWN0ID0gKHsgaWQsIGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbZGVsZXRlUHJvZHVjdCwgeyBsb2FkaW5nIH1dID0gdXNlTXV0YXRpb24oREVMRVRFX1BST0RVQ1RfTVVUQVRJT04sIHtcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICBpZCxcclxuICAgIH0sXHJcbiAgICB1cGRhdGUsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcHJvZHVjdD9cIikpIHtcclxuICAgICAgZGVsZXRlUHJvZHVjdCgpLmNhdGNoKChlcnIpID0+IGFsZXJ0KGVyci5tZXNzYWdlKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLWVyYXNlXCIgb25DbGljaz17aGFuZGxlRGVsZXRlfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlbGV0ZVByb2R1Y3Q7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgRWRpdFByb2R1Y3RCdXR0b24gPSAoeyBpZCwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVSb3V0aW5nID0gKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICByb3V0ZXIucHVzaChgL3Byb2R1Y3QvZWRpdC8ke2lkfWApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1lZGl0XCIgb25DbGljaz17aGFuZGxlUm91dGluZ30+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0UHJvZHVjdEJ1dHRvbjtcclxuIiwiLy9UT0RPXHJcbi8vMS4gQUREIFRSQU5TSVRJT05TXHJcbi8vMi4gQUREIEFDVElPTiBUTyBBREQgVE8gQ0FSVCBCVVRUT05cclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBmb3JtYXRNb25leSBmcm9tIFwiLi4vbGliL2Zvcm1hdE1vbmV5XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGZWF0dXJlZFByb2R1Y3RTdHlsZSB9IGZyb20gXCIuL3N0eWxlcy9GZWF0dXJlZFByb2R1Y3RTdHlsZVwiO1xyXG5pbXBvcnQgRGVsZXRlUHJvZHVjdCBmcm9tIFwiLi9EZWxldGVQcm9kdWN0XCI7XHJcbmltcG9ydCBFZGl0UHJvZHVjdEJ1dHRvbiBmcm9tIFwiLi9FZGl0UHJvZHVjdEJ1dHRvblwiO1xyXG5cclxuY29uc3QgRmVhdHVyZWRQcm9kdWN0ID0gKHsgcHJvZHVjdCB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3Nob3dCdXR0b24sIHNldFNob3dCdXR0b25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZlYXR1cmVkUHJvZHVjdFN0eWxlPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZGl2LWJnXCJcclxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldFNob3dCdXR0b24odHJ1ZSl9XHJcbiAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRTaG93QnV0dG9uKGZhbHNlKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImRpdi1tYWluXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvcHJvZHVjdC8ke3Byb2R1Y3Q/LmlkfWApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtzaG93QnV0dG9uID8gKFxyXG4gICAgICAgICAgICAgIDxEZWxldGVQcm9kdWN0IGlkPXtwcm9kdWN0Py5pZH0+RGVsZXRlPC9EZWxldGVQcm9kdWN0PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge3Nob3dCdXR0b24gPyAoXHJcbiAgICAgICAgICAgICAgPEVkaXRQcm9kdWN0QnV0dG9uIGlkPXtwcm9kdWN0Py5pZH0+RWRpdDwvRWRpdFByb2R1Y3RCdXR0b24+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0Py5waG90bz8uaW1hZ2U/LnB1YmxpY1VybFRyYW5zZm9ybWVkfVxyXG4gICAgICAgICAgICAgIGFsdD17cHJvZHVjdD8ubmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICA8c3Bhbj57cHJvZHVjdD8ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPHNwYW4+e3Byb2R1Y3Q/LmRlc2NyaXB0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgPHNwYW4+e2Zvcm1hdE1vbmV5KHByb2R1Y3Q/LnByaWNlKX08L3NwYW4+XHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAge3Nob3dCdXR0b24gPyA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5BZGQgdG8gY2FydDwvYnV0dG9uPiA6IFwiXCJ9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9GZWF0dXJlZFByb2R1Y3RTdHlsZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZWRQcm9kdWN0O1xyXG4iLCIvL1RPRE9cclxuLy8gMS4gQUREIENBUlJPVVNFTFxyXG5cclxuaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IEZlYXR1cmVkUHJvZHVjdCBmcm9tIFwiLi9GZWF0dXJlZFByb2R1Y3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IEZlYXR1cmVkU3R5bGVzID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEgxID0gc3R5bGVkLmgxYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA4cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luOiAzcmVtIDByZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGRUFUVVJFRF9QUk9EVUNUUyA9IGdxbGBcclxuICBxdWVyeSBGRUFUVVJFRF9QUk9EVUNUUyB7XHJcbiAgICBhbGxQcm9kdWN0cyh3aGVyZTogeyBmZWF0dXJlZDogdHJ1ZSB9KSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIHByaWNlXHJcbiAgICAgIG5hbWVcclxuICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgcGhvdG8ge1xyXG4gICAgICAgIGFsdFRleHRcclxuICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZCh0cmFuc2Zvcm1hdGlvbjogeyB3aWR0aDogXCIxMjBcIiwgY3JvcDogXCJsaW1pdFwiIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGZlYXR1cmVkXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRmVhdHVyZWRQcm9kdWN0cyA9ICgpID0+IHtcclxuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShGRUFUVVJFRF9QUk9EVUNUUyk7XHJcblxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gXCJsb2FkaW5nLi4uXCI7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SDE+RmVhdHVyZWQgUHJvZHVjdHM8L0gxPlxyXG4gICAgICA8RmVhdHVyZWRTdHlsZXM+XHJcbiAgICAgICAge2RhdGE/LmFsbFByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgPEZlYXR1cmVkUHJvZHVjdCBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvRmVhdHVyZWRTdHlsZXM+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZWRQcm9kdWN0cztcclxuIiwiaW1wb3J0IGdxbCBmcm9tIFwiZ3JhcGhxbC10YWdcIjtcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHVzZUZvcm0gZnJvbSBcIi4uL2xpYi91c2VGb3JtXCI7XHJcbmltcG9ydCB7IEdFVF9VU0VSX1FVRVJZIH0gZnJvbSBcIi4vVXNlclwiO1xyXG5pbXBvcnQgeyBGb3JtU3R5bGVzIH0gZnJvbSBcIi4vc3R5bGVzL0Zvcm1TdHlsZXNcIjtcclxuaW1wb3J0IHsgSDEgfSBmcm9tIFwiLi9GZWF0dXJlZFByb2R1Y3RzXCI7XHJcbmltcG9ydCB1c2VVc2VyIGZyb20gXCIuL1VzZXJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBMT0dJTl9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBMT0dJTl9NVVRBVElPTigkZW1haWw6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISkge1xyXG4gICAgYXV0aGVudGljYXRlVXNlcldpdGhQYXNzd29yZChlbWFpbDogJGVtYWlsLCBwYXNzd29yZDogJHBhc3N3b3JkKSB7XHJcbiAgICAgIC4uLiBvbiBVc2VyQXV0aGVudGljYXRpb25XaXRoUGFzc3dvcmRTdWNjZXNzIHtcclxuICAgICAgICBpdGVtIHtcclxuICAgICAgICAgIGlkXHJcbiAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgbmFtZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuLi4gb24gVXNlckF1dGhlbnRpY2F0aW9uV2l0aFBhc3N3b3JkRmFpbHVyZSB7XHJcbiAgICAgICAgY29kZVxyXG4gICAgICAgIG1lc3NhZ2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybSh7XHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbbG9naW4sIHsgZGF0YSwgbG9hZGluZyB9XSA9IHVzZU11dGF0aW9uKExPR0lOX01VVEFUSU9OLCB7XHJcbiAgICB2YXJpYWJsZXM6IGlucHV0cyxcclxuICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogR0VUX1VTRVJfUVVFUlkgfV0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHVzZXIgPSB1c2VVc2VyKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gXCJMb2FkaW5nLi4uXCI7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBsb2dpbigpO1xyXG4gICAgcmVzZXRGb3JtKCk7XHJcbiAgICByb3V0ZXIucHVzaChgL2ApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ2luRXJyb3IgPVxyXG4gICAgZGF0YT8uYXV0aGVudGljYXRlVXNlcldpdGhQYXNzd29yZC5fX3R5cGVuYW1lID09PVxyXG4gICAgXCJVc2VyQXV0aGVudGljYXRpb25XaXRoUGFzc3dvcmRGYWlsdXJlXCJcclxuICAgICAgPyBkYXRhPy5hdXRoZW50aWNhdGVVc2VyV2l0aFBhc3N3b3JkXHJcbiAgICAgIDogdW5kZWZpbmVkO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgxPi48L2gxPlxyXG4gICAgICA8SDE+TG9naW48L0gxPlxyXG4gICAgICA8cD57bG9naW5FcnJvcj8ubWVzc2FnZX08L3A+XHJcbiAgICAgIDxGb3JtU3R5bGVzIG1ldGhvZD1cIlBPU1RcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e2xvYWRpbmd9IGFyaWEtYnVzeT17bG9hZGluZ30+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+XHJcbiAgICAgICAgICAgIEVtYWlsXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZW1haWx9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgIFBhc3N3b3JkXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9naW48L2J1dHRvbj5cclxuICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICA8L0Zvcm1TdHlsZXM+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiIsImltcG9ydCB1c2VGb3JtIGZyb20gXCIuLi9saWIvdXNlRm9ybVwiO1xyXG5pbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBGb3JtU3R5bGVzIH0gZnJvbSBcIi4vc3R5bGVzL0Zvcm1TdHlsZXNcIjtcclxuXHJcbmNvbnN0IFBBU1NXT1JEX1JFU0VUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFBBU1NXT1JEX1JFU0VUX01VVEFUSU9OKCRlbWFpbDogU3RyaW5nISkge1xyXG4gICAgc2VuZFVzZXJQYXNzd29yZFJlc2V0TGluayhlbWFpbDogJGVtYWlsKSB7XHJcbiAgICAgIGNvZGVcclxuICAgICAgbWVzc2FnZVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFBhc3N3b3JkUmVzZXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgcmVzZXRGb3JtIH0gPSB1c2VGb3JtKHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbc2VuZFVzZXJQYXNzd29yZFJlc2V0TGluaywgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZU11dGF0aW9uKFxyXG4gICAgUEFTU1dPUkRfUkVTRVRfTVVUQVRJT04sXHJcbiAgICB7XHJcbiAgICAgIHZhcmlhYmxlczogaW5wdXRzLFxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBzZW5kVXNlclBhc3N3b3JkUmVzZXRMaW5rKCkuY2F0Y2goY29uc29sZS5sb2coZXJyb3IpKTtcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICByZXNldEZvcm0oKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybVN0eWxlcyBtZXRob2Q9XCJQT1NUXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxoMSBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNXJlbVwiIH19PlJlcXVlc3QgYSBQYXNzd29yZCBSZXNldDwvaDE+XHJcbiAgICAgIDxwPntlcnJvcn08L3A+XHJcbiAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICB7ZGF0YT8uc2VuZFVzZXJQYXNzd29yZFJlc2V0TGluayA9PT0gbnVsbCAmJiAoXHJcbiAgICAgICAgICA8cD5TdWNjZXNzISBDaGVjayB5b3VyIGVtYWlsIGZvciBhIGxpbmshPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgRW1haWxcclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+UmVxdWVzdCBSZXNldDwvYnV0dG9uPlxyXG4gICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgPC9Gb3JtU3R5bGVzPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXNzd29yZFJlc2V0O1xyXG4iLCJpbXBvcnQgZ3FsIGZyb20gXCJncmFwaHFsLXRhZ1wiO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX1FVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IHtcclxuICAgIGF1dGhlbnRpY2F0ZWRJdGVtIHtcclxuICAgICAgLi4uIG9uIFVzZXIge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgZW1haWxcclxuICAgICAgICBuYW1lXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCB1c2VVc2VyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX1VTRVJfUVVFUlkpO1xyXG5cclxuICByZXR1cm4gZGF0YT8uYXV0aGVudGljYXRlZEl0ZW07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VVc2VyO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZlYXR1cmVkUHJvZHVjdFN0eWxlID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgNHJlbTtcclxuICBtYXJnaW4tdG9wOiAzcmVtO1xyXG5cclxuICAuZGl2LWJnIHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeUNvbG9yKTtcclxuICAgIHdpZHRoOiAzMjVweDtcclxuICAgIGhlaWdodDogNDI1cHg7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1icyk7XHJcbiAgfVxyXG5cclxuICAuZGl2LW1haW4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDM3NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgd2lkdGg6IDI3NXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5Q29sb3IpO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYm94LXNoYWRvdzogdmFyKC0tYnMpO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBib3R0b206IC00MHB4O1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtODUuNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24tZXJhc2Uge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjI3MDljLCAjZmY5NDcyKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICBsZWZ0OiAxMjAlO1xyXG4gICAgICBib3R0b206IDk4JTtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uLWVkaXQge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeUNvbG9yKTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNzQ3NGJmLCAjMzQ4YWM3KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICBsZWZ0OiAxMiU7XHJcbiAgICAgIGJvdHRvbTogOTglO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtU3R5bGVzID0gc3R5bGVkLmZvcm1gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnlDb2xvcik7XHJcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5Q29sb3IpO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgZmllbGRzZXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDRweCB2YXIoLS1wcmltYXJ5Q29sb3IpO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gIGxhYmVsIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICBpbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIG1hcmdpbjogMCAwIDJyZW0gMHJlbTtcclxuICAgIG1pbi13aWR0aDogODAwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5Q29sb3IpO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIH1cclxuYDtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TW9uZXkoYW1vdW50ID0gMCkge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBzdHlsZTogXCJjdXJyZW5jeVwiLFxyXG4gICAgY3VycmVuY3k6IFwiVVNEXCIsXHJcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWd0aXM6IDIsXHJcbiAgfTtcclxuXHJcbiAgaWYgKGFtb3VudCAlIDEwMCA9PT0gMCkge1xyXG4gICAgb3B0aW9ucy5taW5pbXVtRnJhY3Rpb25EaWd0aXMgPSAwO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZm9ybWF0dGVyID0gSW50bC5OdW1iZXJGb3JtYXQoXCJlbi1VU1wiLCBvcHRpb25zKTtcclxuXHJcbiAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQoYW1vdW50IC8gMTAwKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VGb3JtKGluaXRpYWwgPSB7fSkge1xyXG4gIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZShpbml0aWFsKTtcclxuICBjb25zdCBpbml0aWFsVmFsdWVzID0gT2JqZWN0LnZhbHVlcyhpbml0aWFsKS5qb2luKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SW5wdXRzKGluaXRpYWwpO1xyXG4gIH0sIFtpbml0aWFsVmFsdWVzXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICBsZXQgeyB2YWx1ZSwgbmFtZSwgdHlwZSB9ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PT0gXCJmaWxlXCIpIHtcclxuICAgICAgW3ZhbHVlXSA9IGUudGFyZ2V0LmZpbGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlID09PSBcImNoZWNrYm94XCIpIHtcclxuICAgICAgdmFsdWUgPSAhIXZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldElucHV0cyh7XHJcbiAgICAgIC4uLmlucHV0cyxcclxuICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xyXG4gICAgc2V0SW5wdXRzKGluaXRpYWwpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xyXG4gICAgY29uc3QgYmxhbmtTdGF0ZSA9IE9iamVjdC5mcm9tRW50cmllcyhcclxuICAgICAgT2JqZWN0LmVudHJpZXMoaW5wdXRzKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gW2tleSwgXCJcIl0pXHJcbiAgICApO1xyXG4gICAgc2V0SW5wdXRzKGJsYW5rU3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGlucHV0cyxcclxuICAgIGhhbmRsZUNoYW5nZSxcclxuICAgIHJlc2V0Rm9ybSxcclxuICAgIGNsZWFyRm9ybSxcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCBMb2dpbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2dpblwiO1xyXG5pbXBvcnQgUGFzc3dvcmRSZXNldCBmcm9tIFwiLi4vY29tcG9uZW50cy9QYXNzd29yZFJlc2V0XCI7XHJcblxyXG5jb25zdCBMb2dpblBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMb2dpbiAvPlxyXG4gICAgICA8UGFzc3dvcmRSZXNldCAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luUGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=