module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/anime/_id/_title/index","2":"pages/anime/airing/index","3":"pages/anime/genres/_id/_title/index","4":"pages/anime/top/index","5":"pages/anime/upcoming/index","6":"pages/characters/_id/_title/index","7":"pages/characters/popular/index","8":"pages/index","9":"pages/library/_type/_status/index","10":"pages/manga/_id/_title/index","11":"pages/manga/genres/_id/_title/index","12":"pages/manga/top/index","13":"pages/recovery/index","14":"pages/sign-in/index","15":"pages/sign-up/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("jikanjs/lib/jikan.js");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@nuxt/ufo");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/navigation/Navbar.vue?vue&type=template&id=458fd1da&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"navbar"},[_vm._ssrNode("<div class=\"navbar__wrapper nav-wrapper\" data-v-458fd1da>","</div>",[_c('router-link',{staticClass:"navbar__logo",attrs:{"to":"/"}},[_vm._v("Otaku Library")]),_c('search-bar',{staticClass:"navbar__search-bar"}),(this.user[0] === null)?_vm._ssrNode("<div class=\"navbar__sign-in\" data-v-458fd1da>","</div>",[_c('router-link',{staticClass:"navbar__sign-in-link",attrs:{"to":"/sign-in"}},[_vm._v("Sign in"),_c('i',{staticClass:"navbar__icon material-icons"},[_vm._v("exit_to_app")])]),_c('router-link',{staticClass:"navbar__sign-in-link_mobile",attrs:{"to":"/sign-in"}},[_c('i',{staticClass:"navbar__icon material-icons"},[_vm._v("exit_to_app")])])],1):_vm._ssrNode(("<div class=\"navbar__sign-out\" data-v-458fd1da><a class=\"navbar__sign-in-link\" data-v-458fd1da>Sign out<i class=\"navbar__icon material-icons\" data-v-458fd1da>exit_to_app</i></a><a class=\"navbar__sign-in-link_mobile\" data-v-458fd1da><i class=\"navbar__icon material-icons\" data-v-458fd1da>exit_to_app</i></a></div>"))],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/navigation/Navbar.vue?vue&type=template&id=458fd1da&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: ./components/elements/SearchBar.vue + 4 modules
var SearchBar = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/navigation/Navbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Navbarvue_type_script_lang_js_ = ({
  name: 'Navbar',
  components: {
    SearchBar: SearchBar["default"]
  },

  data() {
    return {
      user: []
    };
  },

  async created() {
    await this.getUid().then(result => this.user.push(result));
  },

  methods: { ...Object(external_vuex_["mapActions"])({
      getUid: 'auth/getUid'
    }),

    signOut() {
      try {
        this.$store.dispatch('auth/signOut');
      } catch (error) {
        throw error.message;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/navigation/Navbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var navigation_Navbarvue_type_script_lang_js_ = (Navbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/navigation/Navbar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(76)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  navigation_Navbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "458fd1da",
  "29328afa"
  
)

/* harmony default export */ var Navbar = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SearchBar: __webpack_require__(14).default})


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/navigation/MainFooter.vue?vue&type=template&id=acd28452&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"main-footer"},[_c('footer-categories'),_c('footer-main-info'),_c('footer-note')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/navigation/MainFooter.vue?vue&type=template&id=acd28452&scoped=true&lang=pug&

// EXTERNAL MODULE: ./components/blocks/footer/FooterNote.vue + 4 modules
var FooterNote = __webpack_require__(15);

// EXTERNAL MODULE: ./components/blocks/footer/FooterMainInfo.vue + 4 modules
var FooterMainInfo = __webpack_require__(16);

// EXTERNAL MODULE: ./components/blocks/footer/FooterCategories.vue + 4 modules
var FooterCategories = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/navigation/MainFooter.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//



/* harmony default export */ var MainFootervue_type_script_lang_js_ = ({
  name: 'MainFooter',
  components: {
    FooterNote: FooterNote["default"],
    FooterMainInfo: FooterMainInfo["default"],
    FooterCategories: FooterCategories["default"]
  }
});
// CONCATENATED MODULE: ./components/navigation/MainFooter.vue?vue&type=script&lang=js&
 /* harmony default export */ var navigation_MainFootervue_type_script_lang_js_ = (MainFootervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/navigation/MainFooter.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(84)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  navigation_MainFootervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "acd28452",
  "1cd8ffa7"
  
)

/* harmony default export */ var MainFooter = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {FooterCategories: __webpack_require__(17).default,FooterMainInfo: __webpack_require__(16).default,FooterNote: __webpack_require__(15).default})


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/SearchBar.vue?vue&type=template&id=793f9da0&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search-bar",attrs:{"data-target":"dropdown"},on:{"click":function($event){return _vm.showDropdown($event)}}},[_vm._ssrNode("<nav class=\"search-bar__nav\" data-v-793f9da0><div class=\"search-bar__wrapper white nav-wrapper\" data-v-793f9da0><form class=\"search-bar__form\" data-v-793f9da0><div class=\"search-bar__field input-field\" data-v-793f9da0><input id=\"search\" type=\"search\" placeholder=\"Search...\""+(_vm._ssrAttr("value",(_vm.query)))+" class=\"search-bar__input\" data-v-793f9da0><label for=\"search\" class=\"search-bar__label label-icon\" data-v-793f9da0><i class=\"search-bar__icon material-icons black-text\" data-v-793f9da0>search</i></label></div></form></div></nav>"),(_vm.isActive)?_c('drop-down',{class:"dropdown_is-shown",attrs:{"type":_vm.type,"loaderData":_vm.isLoading,"searchedData":_vm.query.length >= 3 && _vm.searchedData.length ? _vm.searchedData : []},on:{"changeType":_vm.updateType,"click":function($event){_vm.isActive = false}}}):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/SearchBar.vue?vue&type=template&id=793f9da0&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: ./components/elements/DropDown.vue + 4 modules
var DropDown = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/SearchBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SearchBarvue_type_script_lang_js_ = ({
  name: 'SearchBar',
  components: {
    DropDown: DropDown["default"]
  },

  data() {
    return {
      query: '',
      type: 'anime',
      isLoading: false,
      isActive: false,
      searchedData: []
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])({
      getAnimeSearched: 'anime/getAnimeSearched',
      getMangaSearched: 'manga/getMangaSearched'
    })
  },
  methods: { ...Object(external_vuex_["mapActions"])({
      computeRoute: 'computeRoute',
      loadAnimeSearched: 'anime/loadAnimeSearched',
      loadMangaSearched: 'manga/loadMangaSearched'
    }),

    showDropdown(event) {
      const dropDownEl = document.querySelector('.cards__wrapper');
      this.query = '';

      if (event.target.classList.contains('overlay') || dropDownEl) {
        this.isActive = false;
      } else {
        this.isActive = true;
      }
    },

    updateType(el) {
      this.type = el;
    },

    async search(query) {
      if (query.length >= 3) {
        this.isLoading = true;

        if (this.type === 'anime') {
          await this.loadAnimeSearched(query);
          this.searchedData = this.getAnimeSearched;
        } else if (this.type === 'manga') {
          await this.loadMangaSearched(query);
          this.searchedData = this.getMangaSearched;
        }

        this.isLoading = false;
      }
    }

  }
});
// CONCATENATED MODULE: ./components/elements/SearchBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var elements_SearchBarvue_type_script_lang_js_ = (SearchBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/SearchBar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(74)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  elements_SearchBarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "793f9da0",
  "6b43e24b"
  
)

/* harmony default export */ var SearchBar = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {DropDown: __webpack_require__(18).default})


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blocks/footer/FooterNote.vue?vue&type=template&id=3f7feff9&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer-note"},[_vm._ssrNode("<div class=\"footer-note__container\" data-v-3f7feff9><p class=\"footer-note__text\" data-v-3f7feff9>Inspired by<a href=\"https://myanimelist.net/\" target=\"_blank\" class=\"footer-note__link\" data-v-3f7feff9> MAL</a></p><p class=\"footer-note__text\" data-v-3f7feff9>and<a href=\"https://shikimori.one/\" target=\"_blank\" class=\"footer-note__link\" data-v-3f7feff9> Shikimori</a></p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blocks/footer/FooterNote.vue?vue&type=template&id=3f7feff9&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blocks/footer/FooterNote.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FooterNotevue_type_script_lang_js_ = ({
  name: 'FooterNote'
});
// CONCATENATED MODULE: ./components/blocks/footer/FooterNote.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer_FooterNotevue_type_script_lang_js_ = (FooterNotevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/blocks/footer/FooterNote.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(78)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footer_FooterNotevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3f7feff9",
  "c62a42a0"
  
)

/* harmony default export */ var FooterNote = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blocks/footer/FooterMainInfo.vue?vue&type=template&id=804ab80e&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer-main-info page-footer"},[_vm._ssrNode("<div class=\"footer-main-info__container\" data-v-804ab80e>","</div>",[_vm._ssrNode("<div class=\"footer-main-info__item\" data-v-804ab80e><h5 class=\"footer-main-info__title\" data-v-804ab80e>Discord channel</h5><p class=\"footer-main-info__description\" data-v-804ab80e>We will also be happy to meet you on our channel, where you can always find like-minded people. Feel free to come in.</p><a href=\"https://discord.com/invite/Ku72D5/\" target=\"_blank\" class=\"footer-main-info__link_decor btn\" data-v-804ab80e>Chat</a></div>"),_vm._ssrNode("<div class=\"footer-main-info__item\" data-v-804ab80e>","</div>",[_vm._ssrNode("<h5 class=\"footer-main-info__title footer-main-info__subtitle\" data-v-804ab80e>Sign in required</h5>"),_c('router-link',{staticClass:"footer-main-info__link",attrs:{"to":"/library/anime/planned"}},[_vm._v("Your Library")]),_c('router-link',{staticClass:"footer-main-info__link footer-main-info__link_disabled",attrs:{"to":"/settings"}},[_vm._v("Settings")])],2),_vm._ssrNode("<div class=\"footer-main-info__item\" data-v-804ab80e>","</div>",[_vm._ssrNode("<h5 class=\"footer-main-info__title\" data-v-804ab80e>Help</h5>"),_c('router-link',{staticClass:"footer-main-info__link footer-main-info__link_disabled",attrs:{"to":"/faq"}},[_vm._v("FAQ")]),_c('router-link',{staticClass:"footer-main-info__link",class:{ "footer-main-info__link_disabled": this.user[0] !== null },attrs:{"to":"/sign-up"}},[_vm._v("Registration")]),_c('router-link',{staticClass:"footer-main-info__link",class:{ "footer-main-info__link_disabled": this.user[0] !== null },attrs:{"to":"/recovery"}},[_vm._v("Forgot Password?")])],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blocks/footer/FooterMainInfo.vue?vue&type=template&id=804ab80e&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blocks/footer/FooterMainInfo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var FooterMainInfovue_type_script_lang_js_ = ({
  name: 'FooterMainInfo',

  data() {
    return {
      user: []
    };
  },

  async created() {
    await this.getUid().then(result => this.user.push(result));
  },

  methods: { ...Object(external_vuex_["mapActions"])({
      getUid: 'auth/getUid'
    })
  }
});
// CONCATENATED MODULE: ./components/blocks/footer/FooterMainInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer_FooterMainInfovue_type_script_lang_js_ = (FooterMainInfovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/blocks/footer/FooterMainInfo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(80)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footer_FooterMainInfovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "804ab80e",
  "19a17345"
  
)

/* harmony default export */ var FooterMainInfo = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blocks/footer/FooterCategories.vue?vue&type=template&id=403f19f5&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer-categories"},[_vm._ssrNode("<div class=\"footer-categories__container\" data-v-403f19f5>","</div>",_vm._l((_vm.categories),function(category,categoryIndex){return _vm._ssrNode("<div class=\"footer-categories__item footer-categories-item\" data-v-403f19f5>","</div>",[_c('router-link',{staticClass:"footer-categories-item__title",attrs:{"to":category.link}},[_vm._v(_vm._s(category.title)),_c('div',{staticClass:"footer-categories-item__icon material-icons"},[_vm._v("keyboard_arrow_right")])]),_vm._ssrNode((_vm._ssrList((category.data),function(item,itemIndex){return ("<div class=\"footer-categories-item__content\" data-v-403f19f5><p class=\"footer-categories-item__digit\" data-v-403f19f5>"+_vm._ssrEscape(_vm._s(itemIndex + 1))+"</p><a class=\"footer-categories-item__link\" data-v-403f19f5>"+_vm._ssrEscape(_vm._s(item.title))+"</a></div>")})))],2)}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/blocks/footer/FooterCategories.vue?vue&type=template&id=403f19f5&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/blocks/footer/FooterCategories.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var FooterCategoriesvue_type_script_lang_js_ = ({
  name: 'FooterCategories',
  computed: { ...Object(external_vuex_["mapGetters"])({
      getAnimeFavoriteCategories: 'anime/getAnimeFavoriteCategories',
      getMangaFavoriteCategories: 'manga/getMangaFavoriteCategories',
      getCharactersFavoriteCategories: 'characters/getCharactersFavoriteCategories'
    }),

    categories() {
      const categories = {
        anime: {
          title: 'Top Anime',
          link: '/anime/top',
          data: this.getAnimeFavoriteCategories
        },
        manga: {
          title: 'Top Manga',
          link: '/manga/top',
          data: this.getMangaFavoriteCategories
        },
        characters: {
          title: 'Most Popular Characters',
          link: '/characters/popular',
          data: this.getCharactersFavoriteCategories
        }
      };
      return categories;
    }

  },

  async created() {
    await this.loadAnimeFavoriteCategories();
    await this.loadMangaFavoriteCategories();
    await this.loadCharactersFavoriteCategories();
  },

  methods: { ...Object(external_vuex_["mapActions"])({
      loadAnimeFavoriteCategories: 'anime/loadAnimeFavoriteCategories',
      loadCharactersFavoriteCategories: 'characters/loadCharactersFavoriteCategories',
      loadMangaFavoriteCategories: 'manga/loadMangaFavoriteCategories',
      computeRoute: 'computeRoute'
    })
  }
});
// CONCATENATED MODULE: ./components/blocks/footer/FooterCategories.vue?vue&type=script&lang=js&
 /* harmony default export */ var footer_FooterCategoriesvue_type_script_lang_js_ = (FooterCategoriesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/blocks/footer/FooterCategories.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(82)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  footer_FooterCategoriesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "403f19f5",
  "9ecf494c"
  
)

/* harmony default export */ var FooterCategories = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/DropDown.vue?vue&type=template&id=840d612c&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dropdown",attrs:{"id":"dropdown"}},[_vm._ssrNode(((!_vm.searchedData.length && !_vm.loaderData)?("<div class=\"dropdown__search-type\" data-v-840d612c><ul class=\"dropdown__list\" data-v-840d612c><button"+(_vm._ssrClass("dropdown__list-item",{ active: _vm.activeEl === "anime" }))+" data-v-840d612c><div class=\"dropdown__icon material-icons\" data-v-840d612c>video_library</div>Anime</button><button"+(_vm._ssrClass("dropdown__list-item",{ active: _vm.activeEl === "manga" }))+" data-v-840d612c><div class=\"dropdown__icon material-icons\" data-v-840d612c>collections_bookmark</div>Manga</button></ul></div>"):("<div class=\"dropdown__content\" data-v-840d612c>"+((_vm.loaderData)?("<div class=\"loader\" data-v-840d612c>Loading...<div class=\"loader__progress progress\" data-v-840d612c><div class=\"indeterminate\" data-v-840d612c></div></div></div>"):"<!---->")+(_vm._ssrList((_vm.searchedData),function(result,resultIndex){return (((!_vm.loaderData)?("<div class=\"cards\" data-v-840d612c><div class=\"cards__wrapper\" data-v-840d612c><img"+(_vm._ssrAttr("src",result.image_url))+" class=\"cards__image\" data-v-840d612c><ul class=\"cards__description\" data-v-840d612c><li class=\"cards__title\" data-v-840d612c>"+_vm._ssrEscape(_vm._s(result.title))+"</li><li class=\"cards__value\" data-v-840d612c><span class=\"info__list-key\" data-v-840d612c>Type:</span> "+((result.type && result.start_date)?("<span class=\"info__list-value\" data-v-840d612c>"+_vm._ssrEscape(_vm._s(result.type)+" / "+_vm._s(result.start_date.substring(0, 4)))+"</span>"):(result.type)?("<span class=\"info__list-value\" data-v-840d612c>"+_vm._ssrEscape(_vm._s(result.type)+" / Unknown")+"</span>"):("<span class=\"info__list-value\" data-v-840d612c>"+_vm._ssrEscape(_vm._s(result.type))+"</span>"))+"</li><li class=\"cards__value\" data-v-840d612c><span class=\"info__list-key\" data-v-840d612c>Score:</span> "+((result.score)?("<span class=\"info__list-value\" data-v-840d612c>"+_vm._ssrEscape(_vm._s(result.score))+"</span>"):("<span class=\"info__list-value\" data-v-840d612c>Uknown</span>"))+"</li></ul></div></div>"):"<!---->"))}))+"</div>"))+"<div class=\"overlay\" data-v-840d612c></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/elements/DropDown.vue?vue&type=template&id=840d612c&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/elements/DropDown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var DropDownvue_type_script_lang_js_ = ({
  name: 'DropDown',
  props: ['searchedData', 'loaderData', 'type'],
  computed: {
    activeEl: {
      set() {},

      get() {
        return this.type === 'anime' ? 'anime' : 'manga';
      }

    }
  },
  methods: { ...Object(external_vuex_["mapActions"])({
      computeRoute: 'computeRoute'
    }),

    changeType(el) {
      this.activeEl = el;
      this.$emit('changeType', el);
    }

  }
});
// CONCATENATED MODULE: ./components/elements/DropDown.vue?vue&type=script&lang=js&
 /* harmony default export */ var elements_DropDownvue_type_script_lang_js_ = (DropDownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/elements/DropDown.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(72)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  elements_DropDownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "840d612c",
  "4a265d61"
  
)

/* harmony default export */ var DropDown = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("vue-awesome-swiper");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("vue-recaptcha");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("6ac3c623", content, true, context)
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7e56e4e3", content, true, context)
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("6a637a98", content, true, context)
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("16e5c126", content, true, context)
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("456e9caa", content, true, context)
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("5797e6ad", content, true, context)
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("28c1f434", content, true, context)
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("341d88f8", content, true, context)
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("3eb8b7d8", content, true, context)
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("67545e86", content, true, context)
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("d69d7c22", content, true, context)
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("72f07572", content, true, context)
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("cookie-universal");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("vuelidate");

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var vue_meta__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_meta__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_meta__WEBPACK_IMPORTED_MODULE_1___default.a);
/* harmony default export */ __webpack_exports__["default"] = (function ({
  route
}) {
  const currentUser = firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.auth().currentUser;
  if (route.name === 'sign-in') return 'Authentication';else if (route.name === 'sign-up') return 'Authentication';else if (route.name === 'recovery') return 'Authentication';
  if (!currentUser) return 'Unauthorized';else if (currentUser) return 'Authorized';
});

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/clouds.d85caf6.png";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41);
module.exports = __webpack_require__(97);


/***/ }),
/* 41 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:4px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#26a69a;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("36180598", content, true)

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face{font-family:swiper-icons;src:url(\"data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA\") format(\"woff\");font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-container-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;box-sizing:content-box}.swiper-container-android .swiper-slide,.swiper-wrapper{transform:translateZ(0)}.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}.swiper-container-multirow-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-container-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform}.swiper-slide-invisible-blank{visibility:hidden}.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}.swiper-container-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-container-3d{perspective:1200px}.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}.swiper-container-3d .swiper-slide-shadow-left{background-image:linear-gradient(270deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-right{background-image:linear-gradient(90deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-top{background-image:linear-gradient(0deg,rgba(0,0,0,.5),transparent)}.swiper-container-3d .swiper-slide-shadow-bottom{background-image:linear-gradient(180deg,rgba(0,0,0,.5),transparent)}.swiper-container-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-container-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-container-css-mode>.swiper-wrapper>.swiper-slide{scroll-snap-align:start start}.swiper-container-horizontal.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-container-vertical.swiper-container-css-mode>.swiper-wrapper{scroll-snap-type:y mandatory}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;width:calc(var(--swiper-navigation-size)/44*27);height:44px;height:var(--swiper-navigation-size);margin-top:-22px;margin-top:calc(var(--swiper-navigation-size)*-1/2);z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-theme-color);color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:44px;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;-moz-font-feature-settings:normal,;font-feature-settings:normal,;font-variant:normal;line-height:1}.swiper-button-prev,.swiper-container-rtl .swiper-button-next{left:10px;right:auto}.swiper-button-prev:after,.swiper-container-rtl .swiper-button-next:after{content:\"prev\"}.swiper-button-next,.swiper-container-rtl .swiper-button-prev{right:10px;left:auto}.swiper-button-next:after,.swiper-container-rtl .swiper-button-prev:after{content:\"next\"}.swiper-button-next.swiper-button-white,.swiper-button-prev.swiper-button-white{--swiper-navigation-color:#fff}.swiper-button-next.swiper-button-black,.swiper-button-prev.swiper-button-black{--swiper-navigation-color:#000}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:opacity .3s;transform:translateZ(0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active,.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:var(--swiper-theme-color);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:transform .2s,top .2s}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,left .2s}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:transform .2s,right .2s}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-theme-color);background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white{--swiper-pagination-color:#fff}.swiper-pagination-black{--swiper-pagination-color:#000}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}.swiper-zoom-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;object-fit:contain}.swiper-slide-zoomed{cursor:move}.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;animation:swiper-preloader-spin 1s linear infinite;box-sizing:border-box;border-left:4px solid var(--swiper-theme-color);border-bottom:4px solid var(--swiper-theme-color);border-right:4px solid var(--swiper-theme-color);border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top:4px solid transparent}.swiper-lazy-preloader-white{--swiper-preloader-color:#fff}.swiper-lazy-preloader-black{--swiper-preloader-color:#000}@keyframes swiper-preloader-spin{to{transform:rotate(1turn)}}.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-container-fade.swiper-container-free-mode .swiper-slide{transition-timing-function:ease-out}.swiper-container-fade .swiper-slide{pointer-events:none;transition-property:opacity}.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube{overflow:visible}.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-cube.swiper-container-rtl .swiper-slide{transform-origin:100% 0}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}.swiper-container-flip{overflow:visible}.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("5cb80afe", content, true)

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*!\r\n * Materialize v1.0.0 (http://materializecss.com)\r\n * Copyright 2014-2017 Materialize\r\n * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)\r\n */.materialize-red{background-color:#e51c23!important}.materialize-red-text{color:#e51c23!important}.materialize-red.lighten-5{background-color:#fdeaeb!important}.materialize-red-text.text-lighten-5{color:#fdeaeb!important}.materialize-red.lighten-4{background-color:#f8c1c3!important}.materialize-red-text.text-lighten-4{color:#f8c1c3!important}.materialize-red.lighten-3{background-color:#f3989b!important}.materialize-red-text.text-lighten-3{color:#f3989b!important}.materialize-red.lighten-2{background-color:#ee6e73!important}.materialize-red-text.text-lighten-2{color:#ee6e73!important}.materialize-red.lighten-1{background-color:#ea454b!important}.materialize-red-text.text-lighten-1{color:#ea454b!important}.materialize-red.darken-1{background-color:#d0181e!important}.materialize-red-text.text-darken-1{color:#d0181e!important}.materialize-red.darken-2{background-color:#b9151b!important}.materialize-red-text.text-darken-2{color:#b9151b!important}.materialize-red.darken-3{background-color:#a21318!important}.materialize-red-text.text-darken-3{color:#a21318!important}.materialize-red.darken-4{background-color:#8b1014!important}.materialize-red-text.text-darken-4{color:#8b1014!important}.red{background-color:#f44336!important}.red-text{color:#f44336!important}.red.lighten-5{background-color:#ffebee!important}.red-text.text-lighten-5{color:#ffebee!important}.red.lighten-4{background-color:#ffcdd2!important}.red-text.text-lighten-4{color:#ffcdd2!important}.red.lighten-3{background-color:#ef9a9a!important}.red-text.text-lighten-3{color:#ef9a9a!important}.red.lighten-2{background-color:#e57373!important}.red-text.text-lighten-2{color:#e57373!important}.red.lighten-1{background-color:#ef5350!important}.red-text.text-lighten-1{color:#ef5350!important}.red.darken-1{background-color:#e53935!important}.red-text.text-darken-1{color:#e53935!important}.red.darken-2{background-color:#d32f2f!important}.red-text.text-darken-2{color:#d32f2f!important}.red.darken-3{background-color:#c62828!important}.red-text.text-darken-3{color:#c62828!important}.red.darken-4{background-color:#b71c1c!important}.red-text.text-darken-4{color:#b71c1c!important}.red.accent-1{background-color:#ff8a80!important}.red-text.text-accent-1{color:#ff8a80!important}.red.accent-2{background-color:#ff5252!important}.red-text.text-accent-2{color:#ff5252!important}.red.accent-3{background-color:#ff1744!important}.red-text.text-accent-3{color:#ff1744!important}.red.accent-4{background-color:#d50000!important}.red-text.text-accent-4{color:#d50000!important}.pink{background-color:#e91e63!important}.pink-text{color:#e91e63!important}.pink.lighten-5{background-color:#fce4ec!important}.pink-text.text-lighten-5{color:#fce4ec!important}.pink.lighten-4{background-color:#f8bbd0!important}.pink-text.text-lighten-4{color:#f8bbd0!important}.pink.lighten-3{background-color:#f48fb1!important}.pink-text.text-lighten-3{color:#f48fb1!important}.pink.lighten-2{background-color:#f06292!important}.pink-text.text-lighten-2{color:#f06292!important}.pink.lighten-1{background-color:#ec407a!important}.pink-text.text-lighten-1{color:#ec407a!important}.pink.darken-1{background-color:#d81b60!important}.pink-text.text-darken-1{color:#d81b60!important}.pink.darken-2{background-color:#c2185b!important}.pink-text.text-darken-2{color:#c2185b!important}.pink.darken-3{background-color:#ad1457!important}.pink-text.text-darken-3{color:#ad1457!important}.pink.darken-4{background-color:#880e4f!important}.pink-text.text-darken-4{color:#880e4f!important}.pink.accent-1{background-color:#ff80ab!important}.pink-text.text-accent-1{color:#ff80ab!important}.pink.accent-2{background-color:#ff4081!important}.pink-text.text-accent-2{color:#ff4081!important}.pink.accent-3{background-color:#f50057!important}.pink-text.text-accent-3{color:#f50057!important}.pink.accent-4{background-color:#c51162!important}.pink-text.text-accent-4{color:#c51162!important}.purple{background-color:#9c27b0!important}.purple-text{color:#9c27b0!important}.purple.lighten-5{background-color:#f3e5f5!important}.purple-text.text-lighten-5{color:#f3e5f5!important}.purple.lighten-4{background-color:#e1bee7!important}.purple-text.text-lighten-4{color:#e1bee7!important}.purple.lighten-3{background-color:#ce93d8!important}.purple-text.text-lighten-3{color:#ce93d8!important}.purple.lighten-2{background-color:#ba68c8!important}.purple-text.text-lighten-2{color:#ba68c8!important}.purple.lighten-1{background-color:#ab47bc!important}.purple-text.text-lighten-1{color:#ab47bc!important}.purple.darken-1{background-color:#8e24aa!important}.purple-text.text-darken-1{color:#8e24aa!important}.purple.darken-2{background-color:#7b1fa2!important}.purple-text.text-darken-2{color:#7b1fa2!important}.purple.darken-3{background-color:#6a1b9a!important}.purple-text.text-darken-3{color:#6a1b9a!important}.purple.darken-4{background-color:#4a148c!important}.purple-text.text-darken-4{color:#4a148c!important}.purple.accent-1{background-color:#ea80fc!important}.purple-text.text-accent-1{color:#ea80fc!important}.purple.accent-2{background-color:#e040fb!important}.purple-text.text-accent-2{color:#e040fb!important}.purple.accent-3{background-color:#d500f9!important}.purple-text.text-accent-3{color:#d500f9!important}.purple.accent-4{background-color:#a0f!important}.purple-text.text-accent-4{color:#a0f!important}.deep-purple{background-color:#673ab7!important}.deep-purple-text{color:#673ab7!important}.deep-purple.lighten-5{background-color:#ede7f6!important}.deep-purple-text.text-lighten-5{color:#ede7f6!important}.deep-purple.lighten-4{background-color:#d1c4e9!important}.deep-purple-text.text-lighten-4{color:#d1c4e9!important}.deep-purple.lighten-3{background-color:#b39ddb!important}.deep-purple-text.text-lighten-3{color:#b39ddb!important}.deep-purple.lighten-2{background-color:#9575cd!important}.deep-purple-text.text-lighten-2{color:#9575cd!important}.deep-purple.lighten-1{background-color:#7e57c2!important}.deep-purple-text.text-lighten-1{color:#7e57c2!important}.deep-purple.darken-1{background-color:#5e35b1!important}.deep-purple-text.text-darken-1{color:#5e35b1!important}.deep-purple.darken-2{background-color:#512da8!important}.deep-purple-text.text-darken-2{color:#512da8!important}.deep-purple.darken-3{background-color:#4527a0!important}.deep-purple-text.text-darken-3{color:#4527a0!important}.deep-purple.darken-4{background-color:#311b92!important}.deep-purple-text.text-darken-4{color:#311b92!important}.deep-purple.accent-1{background-color:#b388ff!important}.deep-purple-text.text-accent-1{color:#b388ff!important}.deep-purple.accent-2{background-color:#7c4dff!important}.deep-purple-text.text-accent-2{color:#7c4dff!important}.deep-purple.accent-3{background-color:#651fff!important}.deep-purple-text.text-accent-3{color:#651fff!important}.deep-purple.accent-4{background-color:#6200ea!important}.deep-purple-text.text-accent-4{color:#6200ea!important}.indigo{background-color:#3f51b5!important}.indigo-text{color:#3f51b5!important}.indigo.lighten-5{background-color:#e8eaf6!important}.indigo-text.text-lighten-5{color:#e8eaf6!important}.indigo.lighten-4{background-color:#c5cae9!important}.indigo-text.text-lighten-4{color:#c5cae9!important}.indigo.lighten-3{background-color:#9fa8da!important}.indigo-text.text-lighten-3{color:#9fa8da!important}.indigo.lighten-2{background-color:#7986cb!important}.indigo-text.text-lighten-2{color:#7986cb!important}.indigo.lighten-1{background-color:#5c6bc0!important}.indigo-text.text-lighten-1{color:#5c6bc0!important}.indigo.darken-1{background-color:#3949ab!important}.indigo-text.text-darken-1{color:#3949ab!important}.indigo.darken-2{background-color:#303f9f!important}.indigo-text.text-darken-2{color:#303f9f!important}.indigo.darken-3{background-color:#283593!important}.indigo-text.text-darken-3{color:#283593!important}.indigo.darken-4{background-color:#1a237e!important}.indigo-text.text-darken-4{color:#1a237e!important}.indigo.accent-1{background-color:#8c9eff!important}.indigo-text.text-accent-1{color:#8c9eff!important}.indigo.accent-2{background-color:#536dfe!important}.indigo-text.text-accent-2{color:#536dfe!important}.indigo.accent-3{background-color:#3d5afe!important}.indigo-text.text-accent-3{color:#3d5afe!important}.indigo.accent-4{background-color:#304ffe!important}.indigo-text.text-accent-4{color:#304ffe!important}.blue{background-color:#2196f3!important}.blue-text{color:#2196f3!important}.blue.lighten-5{background-color:#e3f2fd!important}.blue-text.text-lighten-5{color:#e3f2fd!important}.blue.lighten-4{background-color:#bbdefb!important}.blue-text.text-lighten-4{color:#bbdefb!important}.blue.lighten-3{background-color:#90caf9!important}.blue-text.text-lighten-3{color:#90caf9!important}.blue.lighten-2{background-color:#64b5f6!important}.blue-text.text-lighten-2{color:#64b5f6!important}.blue.lighten-1{background-color:#42a5f5!important}.blue-text.text-lighten-1{color:#42a5f5!important}.blue.darken-1{background-color:#1e88e5!important}.blue-text.text-darken-1{color:#1e88e5!important}.blue.darken-2{background-color:#1976d2!important}.blue-text.text-darken-2{color:#1976d2!important}.blue.darken-3{background-color:#1565c0!important}.blue-text.text-darken-3{color:#1565c0!important}.blue.darken-4{background-color:#0d47a1!important}.blue-text.text-darken-4{color:#0d47a1!important}.blue.accent-1{background-color:#82b1ff!important}.blue-text.text-accent-1{color:#82b1ff!important}.blue.accent-2{background-color:#448aff!important}.blue-text.text-accent-2{color:#448aff!important}.blue.accent-3{background-color:#2979ff!important}.blue-text.text-accent-3{color:#2979ff!important}.blue.accent-4{background-color:#2962ff!important}.blue-text.text-accent-4{color:#2962ff!important}.light-blue{background-color:#03a9f4!important}.light-blue-text{color:#03a9f4!important}.light-blue.lighten-5{background-color:#e1f5fe!important}.light-blue-text.text-lighten-5{color:#e1f5fe!important}.light-blue.lighten-4{background-color:#b3e5fc!important}.light-blue-text.text-lighten-4{color:#b3e5fc!important}.light-blue.lighten-3{background-color:#81d4fa!important}.light-blue-text.text-lighten-3{color:#81d4fa!important}.light-blue.lighten-2{background-color:#4fc3f7!important}.light-blue-text.text-lighten-2{color:#4fc3f7!important}.light-blue.lighten-1{background-color:#29b6f6!important}.light-blue-text.text-lighten-1{color:#29b6f6!important}.light-blue.darken-1{background-color:#039be5!important}.light-blue-text.text-darken-1{color:#039be5!important}.light-blue.darken-2{background-color:#0288d1!important}.light-blue-text.text-darken-2{color:#0288d1!important}.light-blue.darken-3{background-color:#0277bd!important}.light-blue-text.text-darken-3{color:#0277bd!important}.light-blue.darken-4{background-color:#01579b!important}.light-blue-text.text-darken-4{color:#01579b!important}.light-blue.accent-1{background-color:#80d8ff!important}.light-blue-text.text-accent-1{color:#80d8ff!important}.light-blue.accent-2{background-color:#40c4ff!important}.light-blue-text.text-accent-2{color:#40c4ff!important}.light-blue.accent-3{background-color:#00b0ff!important}.light-blue-text.text-accent-3{color:#00b0ff!important}.light-blue.accent-4{background-color:#0091ea!important}.light-blue-text.text-accent-4{color:#0091ea!important}.cyan{background-color:#00bcd4!important}.cyan-text{color:#00bcd4!important}.cyan.lighten-5{background-color:#e0f7fa!important}.cyan-text.text-lighten-5{color:#e0f7fa!important}.cyan.lighten-4{background-color:#b2ebf2!important}.cyan-text.text-lighten-4{color:#b2ebf2!important}.cyan.lighten-3{background-color:#80deea!important}.cyan-text.text-lighten-3{color:#80deea!important}.cyan.lighten-2{background-color:#4dd0e1!important}.cyan-text.text-lighten-2{color:#4dd0e1!important}.cyan.lighten-1{background-color:#26c6da!important}.cyan-text.text-lighten-1{color:#26c6da!important}.cyan.darken-1{background-color:#00acc1!important}.cyan-text.text-darken-1{color:#00acc1!important}.cyan.darken-2{background-color:#0097a7!important}.cyan-text.text-darken-2{color:#0097a7!important}.cyan.darken-3{background-color:#00838f!important}.cyan-text.text-darken-3{color:#00838f!important}.cyan.darken-4{background-color:#006064!important}.cyan-text.text-darken-4{color:#006064!important}.cyan.accent-1{background-color:#84ffff!important}.cyan-text.text-accent-1{color:#84ffff!important}.cyan.accent-2{background-color:#18ffff!important}.cyan-text.text-accent-2{color:#18ffff!important}.cyan.accent-3{background-color:#00e5ff!important}.cyan-text.text-accent-3{color:#00e5ff!important}.cyan.accent-4{background-color:#00b8d4!important}.cyan-text.text-accent-4{color:#00b8d4!important}.teal{background-color:#009688!important}.teal-text{color:#009688!important}.teal.lighten-5{background-color:#e0f2f1!important}.teal-text.text-lighten-5{color:#e0f2f1!important}.teal.lighten-4{background-color:#b2dfdb!important}.teal-text.text-lighten-4{color:#b2dfdb!important}.teal.lighten-3{background-color:#80cbc4!important}.teal-text.text-lighten-3{color:#80cbc4!important}.teal.lighten-2{background-color:#4db6ac!important}.teal-text.text-lighten-2{color:#4db6ac!important}.teal.lighten-1{background-color:#26a69a!important}.teal-text.text-lighten-1{color:#26a69a!important}.teal.darken-1{background-color:#00897b!important}.teal-text.text-darken-1{color:#00897b!important}.teal.darken-2{background-color:#00796b!important}.teal-text.text-darken-2{color:#00796b!important}.teal.darken-3{background-color:#00695c!important}.teal-text.text-darken-3{color:#00695c!important}.teal.darken-4{background-color:#004d40!important}.teal-text.text-darken-4{color:#004d40!important}.teal.accent-1{background-color:#a7ffeb!important}.teal-text.text-accent-1{color:#a7ffeb!important}.teal.accent-2{background-color:#64ffda!important}.teal-text.text-accent-2{color:#64ffda!important}.teal.accent-3{background-color:#1de9b6!important}.teal-text.text-accent-3{color:#1de9b6!important}.teal.accent-4{background-color:#00bfa5!important}.teal-text.text-accent-4{color:#00bfa5!important}.green{background-color:#4caf50!important}.green-text{color:#4caf50!important}.green.lighten-5{background-color:#e8f5e9!important}.green-text.text-lighten-5{color:#e8f5e9!important}.green.lighten-4{background-color:#c8e6c9!important}.green-text.text-lighten-4{color:#c8e6c9!important}.green.lighten-3{background-color:#a5d6a7!important}.green-text.text-lighten-3{color:#a5d6a7!important}.green.lighten-2{background-color:#81c784!important}.green-text.text-lighten-2{color:#81c784!important}.green.lighten-1{background-color:#66bb6a!important}.green-text.text-lighten-1{color:#66bb6a!important}.green.darken-1{background-color:#43a047!important}.green-text.text-darken-1{color:#43a047!important}.green.darken-2{background-color:#388e3c!important}.green-text.text-darken-2{color:#388e3c!important}.green.darken-3{background-color:#2e7d32!important}.green-text.text-darken-3{color:#2e7d32!important}.green.darken-4{background-color:#1b5e20!important}.green-text.text-darken-4{color:#1b5e20!important}.green.accent-1{background-color:#b9f6ca!important}.green-text.text-accent-1{color:#b9f6ca!important}.green.accent-2{background-color:#69f0ae!important}.green-text.text-accent-2{color:#69f0ae!important}.green.accent-3{background-color:#00e676!important}.green-text.text-accent-3{color:#00e676!important}.green.accent-4{background-color:#00c853!important}.green-text.text-accent-4{color:#00c853!important}.light-green{background-color:#8bc34a!important}.light-green-text{color:#8bc34a!important}.light-green.lighten-5{background-color:#f1f8e9!important}.light-green-text.text-lighten-5{color:#f1f8e9!important}.light-green.lighten-4{background-color:#dcedc8!important}.light-green-text.text-lighten-4{color:#dcedc8!important}.light-green.lighten-3{background-color:#c5e1a5!important}.light-green-text.text-lighten-3{color:#c5e1a5!important}.light-green.lighten-2{background-color:#aed581!important}.light-green-text.text-lighten-2{color:#aed581!important}.light-green.lighten-1{background-color:#9ccc65!important}.light-green-text.text-lighten-1{color:#9ccc65!important}.light-green.darken-1{background-color:#7cb342!important}.light-green-text.text-darken-1{color:#7cb342!important}.light-green.darken-2{background-color:#689f38!important}.light-green-text.text-darken-2{color:#689f38!important}.light-green.darken-3{background-color:#558b2f!important}.light-green-text.text-darken-3{color:#558b2f!important}.light-green.darken-4{background-color:#33691e!important}.light-green-text.text-darken-4{color:#33691e!important}.light-green.accent-1{background-color:#ccff90!important}.light-green-text.text-accent-1{color:#ccff90!important}.light-green.accent-2{background-color:#b2ff59!important}.light-green-text.text-accent-2{color:#b2ff59!important}.light-green.accent-3{background-color:#76ff03!important}.light-green-text.text-accent-3{color:#76ff03!important}.light-green.accent-4{background-color:#64dd17!important}.light-green-text.text-accent-4{color:#64dd17!important}.lime{background-color:#cddc39!important}.lime-text{color:#cddc39!important}.lime.lighten-5{background-color:#f9fbe7!important}.lime-text.text-lighten-5{color:#f9fbe7!important}.lime.lighten-4{background-color:#f0f4c3!important}.lime-text.text-lighten-4{color:#f0f4c3!important}.lime.lighten-3{background-color:#e6ee9c!important}.lime-text.text-lighten-3{color:#e6ee9c!important}.lime.lighten-2{background-color:#dce775!important}.lime-text.text-lighten-2{color:#dce775!important}.lime.lighten-1{background-color:#d4e157!important}.lime-text.text-lighten-1{color:#d4e157!important}.lime.darken-1{background-color:#c0ca33!important}.lime-text.text-darken-1{color:#c0ca33!important}.lime.darken-2{background-color:#afb42b!important}.lime-text.text-darken-2{color:#afb42b!important}.lime.darken-3{background-color:#9e9d24!important}.lime-text.text-darken-3{color:#9e9d24!important}.lime.darken-4{background-color:#827717!important}.lime-text.text-darken-4{color:#827717!important}.lime.accent-1{background-color:#f4ff81!important}.lime-text.text-accent-1{color:#f4ff81!important}.lime.accent-2{background-color:#eeff41!important}.lime-text.text-accent-2{color:#eeff41!important}.lime.accent-3{background-color:#c6ff00!important}.lime-text.text-accent-3{color:#c6ff00!important}.lime.accent-4{background-color:#aeea00!important}.lime-text.text-accent-4{color:#aeea00!important}.yellow{background-color:#ffeb3b!important}.yellow-text{color:#ffeb3b!important}.yellow.lighten-5{background-color:#fffde7!important}.yellow-text.text-lighten-5{color:#fffde7!important}.yellow.lighten-4{background-color:#fff9c4!important}.yellow-text.text-lighten-4{color:#fff9c4!important}.yellow.lighten-3{background-color:#fff59d!important}.yellow-text.text-lighten-3{color:#fff59d!important}.yellow.lighten-2{background-color:#fff176!important}.yellow-text.text-lighten-2{color:#fff176!important}.yellow.lighten-1{background-color:#ffee58!important}.yellow-text.text-lighten-1{color:#ffee58!important}.yellow.darken-1{background-color:#fdd835!important}.yellow-text.text-darken-1{color:#fdd835!important}.yellow.darken-2{background-color:#fbc02d!important}.yellow-text.text-darken-2{color:#fbc02d!important}.yellow.darken-3{background-color:#f9a825!important}.yellow-text.text-darken-3{color:#f9a825!important}.yellow.darken-4{background-color:#f57f17!important}.yellow-text.text-darken-4{color:#f57f17!important}.yellow.accent-1{background-color:#ffff8d!important}.yellow-text.text-accent-1{color:#ffff8d!important}.yellow.accent-2{background-color:#ff0!important}.yellow-text.text-accent-2{color:#ff0!important}.yellow.accent-3{background-color:#ffea00!important}.yellow-text.text-accent-3{color:#ffea00!important}.yellow.accent-4{background-color:#ffd600!important}.yellow-text.text-accent-4{color:#ffd600!important}.amber{background-color:#ffc107!important}.amber-text{color:#ffc107!important}.amber.lighten-5{background-color:#fff8e1!important}.amber-text.text-lighten-5{color:#fff8e1!important}.amber.lighten-4{background-color:#ffecb3!important}.amber-text.text-lighten-4{color:#ffecb3!important}.amber.lighten-3{background-color:#ffe082!important}.amber-text.text-lighten-3{color:#ffe082!important}.amber.lighten-2{background-color:#ffd54f!important}.amber-text.text-lighten-2{color:#ffd54f!important}.amber.lighten-1{background-color:#ffca28!important}.amber-text.text-lighten-1{color:#ffca28!important}.amber.darken-1{background-color:#ffb300!important}.amber-text.text-darken-1{color:#ffb300!important}.amber.darken-2{background-color:#ffa000!important}.amber-text.text-darken-2{color:#ffa000!important}.amber.darken-3{background-color:#ff8f00!important}.amber-text.text-darken-3{color:#ff8f00!important}.amber.darken-4{background-color:#ff6f00!important}.amber-text.text-darken-4{color:#ff6f00!important}.amber.accent-1{background-color:#ffe57f!important}.amber-text.text-accent-1{color:#ffe57f!important}.amber.accent-2{background-color:#ffd740!important}.amber-text.text-accent-2{color:#ffd740!important}.amber.accent-3{background-color:#ffc400!important}.amber-text.text-accent-3{color:#ffc400!important}.amber.accent-4{background-color:#ffab00!important}.amber-text.text-accent-4{color:#ffab00!important}.orange{background-color:#ff9800!important}.orange-text{color:#ff9800!important}.orange.lighten-5{background-color:#fff3e0!important}.orange-text.text-lighten-5{color:#fff3e0!important}.orange.lighten-4{background-color:#ffe0b2!important}.orange-text.text-lighten-4{color:#ffe0b2!important}.orange.lighten-3{background-color:#ffcc80!important}.orange-text.text-lighten-3{color:#ffcc80!important}.orange.lighten-2{background-color:#ffb74d!important}.orange-text.text-lighten-2{color:#ffb74d!important}.orange.lighten-1{background-color:#ffa726!important}.orange-text.text-lighten-1{color:#ffa726!important}.orange.darken-1{background-color:#fb8c00!important}.orange-text.text-darken-1{color:#fb8c00!important}.orange.darken-2{background-color:#f57c00!important}.orange-text.text-darken-2{color:#f57c00!important}.orange.darken-3{background-color:#ef6c00!important}.orange-text.text-darken-3{color:#ef6c00!important}.orange.darken-4{background-color:#e65100!important}.orange-text.text-darken-4{color:#e65100!important}.orange.accent-1{background-color:#ffd180!important}.orange-text.text-accent-1{color:#ffd180!important}.orange.accent-2{background-color:#ffab40!important}.orange-text.text-accent-2{color:#ffab40!important}.orange.accent-3{background-color:#ff9100!important}.orange-text.text-accent-3{color:#ff9100!important}.orange.accent-4{background-color:#ff6d00!important}.orange-text.text-accent-4{color:#ff6d00!important}.deep-orange{background-color:#ff5722!important}.deep-orange-text{color:#ff5722!important}.deep-orange.lighten-5{background-color:#fbe9e7!important}.deep-orange-text.text-lighten-5{color:#fbe9e7!important}.deep-orange.lighten-4{background-color:#ffccbc!important}.deep-orange-text.text-lighten-4{color:#ffccbc!important}.deep-orange.lighten-3{background-color:#ffab91!important}.deep-orange-text.text-lighten-3{color:#ffab91!important}.deep-orange.lighten-2{background-color:#ff8a65!important}.deep-orange-text.text-lighten-2{color:#ff8a65!important}.deep-orange.lighten-1{background-color:#ff7043!important}.deep-orange-text.text-lighten-1{color:#ff7043!important}.deep-orange.darken-1{background-color:#f4511e!important}.deep-orange-text.text-darken-1{color:#f4511e!important}.deep-orange.darken-2{background-color:#e64a19!important}.deep-orange-text.text-darken-2{color:#e64a19!important}.deep-orange.darken-3{background-color:#d84315!important}.deep-orange-text.text-darken-3{color:#d84315!important}.deep-orange.darken-4{background-color:#bf360c!important}.deep-orange-text.text-darken-4{color:#bf360c!important}.deep-orange.accent-1{background-color:#ff9e80!important}.deep-orange-text.text-accent-1{color:#ff9e80!important}.deep-orange.accent-2{background-color:#ff6e40!important}.deep-orange-text.text-accent-2{color:#ff6e40!important}.deep-orange.accent-3{background-color:#ff3d00!important}.deep-orange-text.text-accent-3{color:#ff3d00!important}.deep-orange.accent-4{background-color:#dd2c00!important}.deep-orange-text.text-accent-4{color:#dd2c00!important}.brown{background-color:#795548!important}.brown-text{color:#795548!important}.brown.lighten-5{background-color:#efebe9!important}.brown-text.text-lighten-5{color:#efebe9!important}.brown.lighten-4{background-color:#d7ccc8!important}.brown-text.text-lighten-4{color:#d7ccc8!important}.brown.lighten-3{background-color:#bcaaa4!important}.brown-text.text-lighten-3{color:#bcaaa4!important}.brown.lighten-2{background-color:#a1887f!important}.brown-text.text-lighten-2{color:#a1887f!important}.brown.lighten-1{background-color:#8d6e63!important}.brown-text.text-lighten-1{color:#8d6e63!important}.brown.darken-1{background-color:#6d4c41!important}.brown-text.text-darken-1{color:#6d4c41!important}.brown.darken-2{background-color:#5d4037!important}.brown-text.text-darken-2{color:#5d4037!important}.brown.darken-3{background-color:#4e342e!important}.brown-text.text-darken-3{color:#4e342e!important}.brown.darken-4{background-color:#3e2723!important}.brown-text.text-darken-4{color:#3e2723!important}.blue-grey{background-color:#607d8b!important}.blue-grey-text{color:#607d8b!important}.blue-grey.lighten-5{background-color:#eceff1!important}.blue-grey-text.text-lighten-5{color:#eceff1!important}.blue-grey.lighten-4{background-color:#cfd8dc!important}.blue-grey-text.text-lighten-4{color:#cfd8dc!important}.blue-grey.lighten-3{background-color:#b0bec5!important}.blue-grey-text.text-lighten-3{color:#b0bec5!important}.blue-grey.lighten-2{background-color:#90a4ae!important}.blue-grey-text.text-lighten-2{color:#90a4ae!important}.blue-grey.lighten-1{background-color:#78909c!important}.blue-grey-text.text-lighten-1{color:#78909c!important}.blue-grey.darken-1{background-color:#546e7a!important}.blue-grey-text.text-darken-1{color:#546e7a!important}.blue-grey.darken-2{background-color:#455a64!important}.blue-grey-text.text-darken-2{color:#455a64!important}.blue-grey.darken-3{background-color:#37474f!important}.blue-grey-text.text-darken-3{color:#37474f!important}.blue-grey.darken-4{background-color:#263238!important}.blue-grey-text.text-darken-4{color:#263238!important}.grey{background-color:#9e9e9e!important}.grey-text{color:#9e9e9e!important}.grey.lighten-5{background-color:#fafafa!important}.grey-text.text-lighten-5{color:#fafafa!important}.grey.lighten-4{background-color:#f5f5f5!important}.grey-text.text-lighten-4{color:#f5f5f5!important}.grey.lighten-3{background-color:#eee!important}.grey-text.text-lighten-3{color:#eee!important}.grey.lighten-2{background-color:#e0e0e0!important}.grey-text.text-lighten-2{color:#e0e0e0!important}.grey.lighten-1{background-color:#bdbdbd!important}.grey-text.text-lighten-1{color:#bdbdbd!important}.grey.darken-1{background-color:#757575!important}.grey-text.text-darken-1{color:#757575!important}.grey.darken-2{background-color:#616161!important}.grey-text.text-darken-2{color:#616161!important}.grey.darken-3{background-color:#424242!important}.grey-text.text-darken-3{color:#424242!important}.grey.darken-4{background-color:#212121!important}.grey-text.text-darken-4{color:#212121!important}.black{background-color:#000!important}.black-text{color:#000!important}.white{background-color:#fff!important}.white-text{color:#fff!important}.transparent{background-color:transparent!important}.transparent-text{color:transparent!important}\r\n/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}button,input,optgroup,select,textarea{font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif}ul:not(.browser-default){padding-left:0;list-style-type:none}ul:not(.browser-default)>li{list-style-type:none}a{color:#039be5;-webkit-tap-highlight-color:transparent}.valign-wrapper{display:flex;align-items:center}.clearfix{clear:both}.z-depth-0{box-shadow:none!important}.btn,.btn-floating,.btn-large,.btn-small,.card,.card-panel,.collapsible,.dropdown-content,.sidenav,.toast,.z-depth-1,nav{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}.btn-floating:hover,.btn-large:hover,.btn-small:hover,.btn:hover,.z-depth-1-half{box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2)}.z-depth-2{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.3)}.z-depth-3{box-shadow:0 8px 17px 2px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2)}.z-depth-4{box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -7px rgba(0,0,0,.2)}.modal,.z-depth-5{box-shadow:0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12),0 11px 15px -7px rgba(0,0,0,.2)}.hoverable{transition:box-shadow .25s}.hoverable:hover{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.divider{height:1px;overflow:hidden;background-color:#e0e0e0}blockquote{margin:20px 0;padding-left:1.5rem;border-left:5px solid #ee6e73}i{line-height:inherit}i.left{float:left;margin-right:15px}i.right{float:right;margin-left:15px}i.tiny{font-size:1rem}i.small{font-size:2rem}i.medium{font-size:4rem}i.large{font-size:6rem}img.responsive-img,video.responsive-video{max-width:100%;height:auto}.pagination li{display:inline-block;border-radius:2px;text-align:center;vertical-align:top;height:30px}.pagination li a{color:#444;display:inline-block;font-size:1.2rem;padding:0 10px;line-height:30px}.pagination li.active a{color:#fff}.pagination li.active{background-color:#ee6e73}.pagination li.disabled a{cursor:default;color:#999}.pagination li i{font-size:2rem}.pagination li.pages ul li{display:inline-block;float:none}@media only screen and (max-width:992px){.pagination{width:100%}.pagination li.next,.pagination li.prev{width:10%}.pagination li.pages{width:80%;overflow:hidden;white-space:nowrap}}.breadcrumb{font-size:18px;color:hsla(0,0%,100%,.7)}.breadcrumb [class*=mdi-],.breadcrumb [class^=mdi-],.breadcrumb i,.breadcrumb i.material-icons{display:inline-block;float:left;font-size:24px}.breadcrumb:before{content:\"\\E5CC\";color:hsla(0,0%,100%,.7);vertical-align:top;display:inline-block;font-family:\"Material Icons\";font-weight:400;font-style:normal;font-size:25px;margin:0 10px 0 8px;-webkit-font-smoothing:antialiased}.breadcrumb:first-child:before{display:none}.breadcrumb:last-child{color:#fff}.parallax-container{position:relative;overflow:hidden;height:500px}.parallax-container .parallax{position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1}.parallax-container .parallax img{opacity:0;position:absolute;left:50%;bottom:0;min-width:100%;min-height:100%;transform:translateZ(0);transform:translateX(-50%)}.pin-bottom,.pin-top{position:relative}.pinned{position:fixed!important}.fade-in,ul.staggered-list li{opacity:0}.fade-in{transform-origin:0 50%}@media only screen and (max-width:600px){.hide-on-small-and-down,.hide-on-small-only{display:none!important}}@media only screen and (max-width:992px){.hide-on-med-and-down{display:none!important}}@media only screen and (min-width:601px){.hide-on-med-and-up{display:none!important}}@media only screen and (min-width:600px) and (max-width:992px){.hide-on-med-only{display:none!important}}@media only screen and (min-width:993px){.hide-on-large-only{display:none!important}}@media only screen and (min-width:1201px){.hide-on-extra-large-only{display:none!important}}@media only screen and (min-width:1201px){.show-on-extra-large{display:block!important}}@media only screen and (min-width:993px){.show-on-large{display:block!important}}@media only screen and (min-width:600px) and (max-width:992px){.show-on-medium{display:block!important}}@media only screen and (max-width:600px){.show-on-small{display:block!important}}@media only screen and (min-width:601px){.show-on-medium-and-up{display:block!important}}@media only screen and (max-width:992px){.show-on-medium-and-down{display:block!important}}@media only screen and (max-width:600px){.center-on-small-only{text-align:center}}.page-footer{padding-top:20px;color:#fff;background-color:#ee6e73}.page-footer .footer-copyright{overflow:hidden;min-height:50px;display:flex;align-items:center;justify-content:space-between;padding:10px 0;color:hsla(0,0%,100%,.8);background-color:rgba(51,51,51,.08)}table,td,th{border:none}table{width:100%;display:table;border-collapse:collapse;border-spacing:0}table.striped tr{border-bottom:none}table.striped>tbody>tr:nth-child(odd){background-color:hsla(0,0%,94.9%,.5)}table.striped>tbody>tr>td{border-radius:0}table.highlight>tbody>tr{transition:background-color .25s ease}table.highlight>tbody>tr:hover{background-color:hsla(0,0%,94.9%,.5)}table.centered tbody tr td,table.centered thead tr th{text-align:center}tr{border-bottom:1px solid rgba(0,0,0,.12)}td,th{padding:15px 5px;display:table-cell;text-align:left;vertical-align:middle;border-radius:2px}@media only screen and (max-width:992px){table.responsive-table{width:100%;border-collapse:collapse;border-spacing:0;display:block;position:relative}table.responsive-table td:empty:before{content:\"\\00a0\"}table.responsive-table td,table.responsive-table th{margin:0;vertical-align:top}table.responsive-table th{text-align:left}table.responsive-table thead{display:block;float:left}table.responsive-table thead tr{display:block;padding:0 10px 0 0}table.responsive-table thead tr th:before{content:\"\\00a0\"}table.responsive-table tbody{display:block;width:auto;position:relative;overflow-x:auto;white-space:nowrap}table.responsive-table tbody tr{display:inline-block;vertical-align:top}table.responsive-table th{display:block;text-align:right}table.responsive-table td{display:block;min-height:1.25em;text-align:left}table.responsive-table tr{border-bottom:none;padding:0 10px}table.responsive-table thead{border:0;border-right:1px solid rgba(0,0,0,.12)}}.collection{margin:.5rem 0 1rem;border:1px solid #e0e0e0;border-radius:2px;overflow:hidden;position:relative}.collection .collection-item{background-color:#fff;line-height:1.5rem;padding:10px 20px;margin:0;border-bottom:1px solid #e0e0e0}.collection .collection-item.avatar{min-height:84px;padding-left:72px;position:relative}.collection .collection-item.avatar:not(.circle-clipper)>.circle,.collection .collection-item.avatar :not(.circle-clipper)>.circle{position:absolute;width:42px;height:42px;overflow:hidden;left:15px;display:inline-block;vertical-align:middle}.collection .collection-item.avatar i.circle{font-size:18px;line-height:42px;color:#fff;background-color:#999;text-align:center}.collection .collection-item.avatar .title{font-size:16px}.collection .collection-item.avatar p{margin:0}.collection .collection-item.avatar .secondary-content{position:absolute;top:16px;right:16px}.collection .collection-item:last-child{border-bottom:none}.collection .collection-item.active{background-color:#26a69a;color:#eafaf9}.collection .collection-item.active .secondary-content{color:#fff}.collection a.collection-item{display:block;transition:.25s;color:#26a69a}.collection a.collection-item:not(.active):hover{background-color:#ddd}.collection.with-header .collection-header{background-color:#fff;border-bottom:1px solid #e0e0e0;padding:10px 20px}.collection.with-header .collection-item{padding-left:30px}.collection.with-header .collection-item.avatar{padding-left:72px}.secondary-content{float:right;color:#26a69a}.collapsible .collection{margin:0;border:none}.video-container{position:relative;padding-bottom:56.25%;height:0;overflow:hidden}.video-container embed,.video-container iframe,.video-container object{position:absolute;top:0;left:0;width:100%;height:100%}.progress{position:relative;height:4px;display:block;width:100%;background-color:#acece6;border-radius:2px;margin:.5rem 0 1rem;overflow:hidden}.progress .determinate{position:absolute;top:0;left:0;bottom:0;transition:width .3s linear}.progress .determinate,.progress .indeterminate{background-color:#26a69a}.progress .indeterminate:before{-webkit-animation:indeterminate 2.1s cubic-bezier(.65,.815,.735,.395) infinite;animation:indeterminate 2.1s cubic-bezier(.65,.815,.735,.395) infinite}.progress .indeterminate:after,.progress .indeterminate:before{content:\"\";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right}.progress .indeterminate:after{-webkit-animation:indeterminate-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;animation:indeterminate-short 2.1s cubic-bezier(.165,.84,.44,1) infinite;-webkit-animation-delay:1.15s;animation-delay:1.15s}@-webkit-keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}to{left:100%;right:-90%}}@-webkit-keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}.hide{display:none!important}.left-align{text-align:left}.right-align{text-align:right}.center,.center-align{text-align:center}.left{float:left!important}.right{float:right!important}.no-select,input[type=range],input[type=range]+.thumb{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.circle{border-radius:50%}.center-block{display:block;margin-left:auto;margin-right:auto}.truncate{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.no-padding{padding:0!important}span.badge{min-width:3rem;padding:0 6px;margin-left:14px;text-align:center;font-size:1rem;line-height:22px;height:22px;color:#757575;float:right;box-sizing:border-box}span.badge.new{font-weight:300;font-size:.8rem;color:#fff;background-color:#26a69a;border-radius:2px}span.badge.new:after{content:\" new\"}span.badge[data-badge-caption]:after{content:\" \" attr(data-badge-caption)}nav ul a span.badge{display:inline-block;float:none;margin-left:4px;line-height:22px;height:22px;-webkit-font-smoothing:auto}.collection-item span.badge{margin-top:calc(.75rem - 11px)}.collapsible span.badge{margin-left:auto}.sidenav span.badge{margin-top:13px}table span.badge{display:inline-block;float:none;margin-left:auto}.material-icons{text-rendering:optimizeLegibility;font-feature-settings:\"liga\"}.container{margin:0 auto;max-width:1280px;width:90%}@media only screen and (min-width:601px){.container{width:85%}}@media only screen and (min-width:993px){.container{width:70%}}.col .row{margin-left:-.75rem;margin-right:-.75rem}.section{padding-top:1rem;padding-bottom:1rem}.section.no-pad{padding:0}.section.no-pad-bot{padding-bottom:0}.section.no-pad-top{padding-top:0}.row{margin-left:auto;margin-right:auto;margin-bottom:20px}.row:after{content:\"\";display:table;clear:both}.row .col{float:left;box-sizing:border-box;padding:0 .75rem;min-height:1px}.row .col[class*=pull-],.row .col[class*=push-]{position:relative}.row .col.s1{width:8.3333333333%}.row .col.s1,.row .col.s2{margin-left:auto;left:auto;right:auto}.row .col.s2{width:16.6666666667%}.row .col.s3{width:25%}.row .col.s3,.row .col.s4{margin-left:auto;left:auto;right:auto}.row .col.s4{width:33.3333333333%}.row .col.s5{width:41.6666666667%}.row .col.s5,.row .col.s6{margin-left:auto;left:auto;right:auto}.row .col.s6{width:50%}.row .col.s7{width:58.3333333333%}.row .col.s7,.row .col.s8{margin-left:auto;left:auto;right:auto}.row .col.s8{width:66.6666666667%}.row .col.s9{width:75%}.row .col.s9,.row .col.s10{margin-left:auto;left:auto;right:auto}.row .col.s10{width:83.3333333333%}.row .col.s11{width:91.6666666667%}.row .col.s11,.row .col.s12{margin-left:auto;left:auto;right:auto}.row .col.s12{width:100%}.row .col.offset-s1{margin-left:8.3333333333%}.row .col.pull-s1{right:8.3333333333%}.row .col.push-s1{left:8.3333333333%}.row .col.offset-s2{margin-left:16.6666666667%}.row .col.pull-s2{right:16.6666666667%}.row .col.push-s2{left:16.6666666667%}.row .col.offset-s3{margin-left:25%}.row .col.pull-s3{right:25%}.row .col.push-s3{left:25%}.row .col.offset-s4{margin-left:33.3333333333%}.row .col.pull-s4{right:33.3333333333%}.row .col.push-s4{left:33.3333333333%}.row .col.offset-s5{margin-left:41.6666666667%}.row .col.pull-s5{right:41.6666666667%}.row .col.push-s5{left:41.6666666667%}.row .col.offset-s6{margin-left:50%}.row .col.pull-s6{right:50%}.row .col.push-s6{left:50%}.row .col.offset-s7{margin-left:58.3333333333%}.row .col.pull-s7{right:58.3333333333%}.row .col.push-s7{left:58.3333333333%}.row .col.offset-s8{margin-left:66.6666666667%}.row .col.pull-s8{right:66.6666666667%}.row .col.push-s8{left:66.6666666667%}.row .col.offset-s9{margin-left:75%}.row .col.pull-s9{right:75%}.row .col.push-s9{left:75%}.row .col.offset-s10{margin-left:83.3333333333%}.row .col.pull-s10{right:83.3333333333%}.row .col.push-s10{left:83.3333333333%}.row .col.offset-s11{margin-left:91.6666666667%}.row .col.pull-s11{right:91.6666666667%}.row .col.push-s11{left:91.6666666667%}.row .col.offset-s12{margin-left:100%}.row .col.pull-s12{right:100%}.row .col.push-s12{left:100%}@media only screen and (min-width:601px){.row .col.m1{width:8.3333333333%}.row .col.m1,.row .col.m2{margin-left:auto;left:auto;right:auto}.row .col.m2{width:16.6666666667%}.row .col.m3{width:25%}.row .col.m3,.row .col.m4{margin-left:auto;left:auto;right:auto}.row .col.m4{width:33.3333333333%}.row .col.m5{width:41.6666666667%}.row .col.m5,.row .col.m6{margin-left:auto;left:auto;right:auto}.row .col.m6{width:50%}.row .col.m7{width:58.3333333333%}.row .col.m7,.row .col.m8{margin-left:auto;left:auto;right:auto}.row .col.m8{width:66.6666666667%}.row .col.m9{width:75%}.row .col.m9,.row .col.m10{margin-left:auto;left:auto;right:auto}.row .col.m10{width:83.3333333333%}.row .col.m11{width:91.6666666667%}.row .col.m11,.row .col.m12{margin-left:auto;left:auto;right:auto}.row .col.m12{width:100%}.row .col.offset-m1{margin-left:8.3333333333%}.row .col.pull-m1{right:8.3333333333%}.row .col.push-m1{left:8.3333333333%}.row .col.offset-m2{margin-left:16.6666666667%}.row .col.pull-m2{right:16.6666666667%}.row .col.push-m2{left:16.6666666667%}.row .col.offset-m3{margin-left:25%}.row .col.pull-m3{right:25%}.row .col.push-m3{left:25%}.row .col.offset-m4{margin-left:33.3333333333%}.row .col.pull-m4{right:33.3333333333%}.row .col.push-m4{left:33.3333333333%}.row .col.offset-m5{margin-left:41.6666666667%}.row .col.pull-m5{right:41.6666666667%}.row .col.push-m5{left:41.6666666667%}.row .col.offset-m6{margin-left:50%}.row .col.pull-m6{right:50%}.row .col.push-m6{left:50%}.row .col.offset-m7{margin-left:58.3333333333%}.row .col.pull-m7{right:58.3333333333%}.row .col.push-m7{left:58.3333333333%}.row .col.offset-m8{margin-left:66.6666666667%}.row .col.pull-m8{right:66.6666666667%}.row .col.push-m8{left:66.6666666667%}.row .col.offset-m9{margin-left:75%}.row .col.pull-m9{right:75%}.row .col.push-m9{left:75%}.row .col.offset-m10{margin-left:83.3333333333%}.row .col.pull-m10{right:83.3333333333%}.row .col.push-m10{left:83.3333333333%}.row .col.offset-m11{margin-left:91.6666666667%}.row .col.pull-m11{right:91.6666666667%}.row .col.push-m11{left:91.6666666667%}.row .col.offset-m12{margin-left:100%}.row .col.pull-m12{right:100%}.row .col.push-m12{left:100%}}@media only screen and (min-width:993px){.row .col.l1{width:8.3333333333%}.row .col.l1,.row .col.l2{margin-left:auto;left:auto;right:auto}.row .col.l2{width:16.6666666667%}.row .col.l3{width:25%}.row .col.l3,.row .col.l4{margin-left:auto;left:auto;right:auto}.row .col.l4{width:33.3333333333%}.row .col.l5{width:41.6666666667%}.row .col.l5,.row .col.l6{margin-left:auto;left:auto;right:auto}.row .col.l6{width:50%}.row .col.l7{width:58.3333333333%}.row .col.l7,.row .col.l8{margin-left:auto;left:auto;right:auto}.row .col.l8{width:66.6666666667%}.row .col.l9{width:75%}.row .col.l9,.row .col.l10{margin-left:auto;left:auto;right:auto}.row .col.l10{width:83.3333333333%}.row .col.l11{width:91.6666666667%}.row .col.l11,.row .col.l12{margin-left:auto;left:auto;right:auto}.row .col.l12{width:100%}.row .col.offset-l1{margin-left:8.3333333333%}.row .col.pull-l1{right:8.3333333333%}.row .col.push-l1{left:8.3333333333%}.row .col.offset-l2{margin-left:16.6666666667%}.row .col.pull-l2{right:16.6666666667%}.row .col.push-l2{left:16.6666666667%}.row .col.offset-l3{margin-left:25%}.row .col.pull-l3{right:25%}.row .col.push-l3{left:25%}.row .col.offset-l4{margin-left:33.3333333333%}.row .col.pull-l4{right:33.3333333333%}.row .col.push-l4{left:33.3333333333%}.row .col.offset-l5{margin-left:41.6666666667%}.row .col.pull-l5{right:41.6666666667%}.row .col.push-l5{left:41.6666666667%}.row .col.offset-l6{margin-left:50%}.row .col.pull-l6{right:50%}.row .col.push-l6{left:50%}.row .col.offset-l7{margin-left:58.3333333333%}.row .col.pull-l7{right:58.3333333333%}.row .col.push-l7{left:58.3333333333%}.row .col.offset-l8{margin-left:66.6666666667%}.row .col.pull-l8{right:66.6666666667%}.row .col.push-l8{left:66.6666666667%}.row .col.offset-l9{margin-left:75%}.row .col.pull-l9{right:75%}.row .col.push-l9{left:75%}.row .col.offset-l10{margin-left:83.3333333333%}.row .col.pull-l10{right:83.3333333333%}.row .col.push-l10{left:83.3333333333%}.row .col.offset-l11{margin-left:91.6666666667%}.row .col.pull-l11{right:91.6666666667%}.row .col.push-l11{left:91.6666666667%}.row .col.offset-l12{margin-left:100%}.row .col.pull-l12{right:100%}.row .col.push-l12{left:100%}}@media only screen and (min-width:1201px){.row .col.xl1{width:8.3333333333%}.row .col.xl1,.row .col.xl2{margin-left:auto;left:auto;right:auto}.row .col.xl2{width:16.6666666667%}.row .col.xl3{width:25%}.row .col.xl3,.row .col.xl4{margin-left:auto;left:auto;right:auto}.row .col.xl4{width:33.3333333333%}.row .col.xl5{width:41.6666666667%}.row .col.xl5,.row .col.xl6{margin-left:auto;left:auto;right:auto}.row .col.xl6{width:50%}.row .col.xl7{width:58.3333333333%}.row .col.xl7,.row .col.xl8{margin-left:auto;left:auto;right:auto}.row .col.xl8{width:66.6666666667%}.row .col.xl9{width:75%}.row .col.xl9,.row .col.xl10{margin-left:auto;left:auto;right:auto}.row .col.xl10{width:83.3333333333%}.row .col.xl11{width:91.6666666667%}.row .col.xl11,.row .col.xl12{margin-left:auto;left:auto;right:auto}.row .col.xl12{width:100%}.row .col.offset-xl1{margin-left:8.3333333333%}.row .col.pull-xl1{right:8.3333333333%}.row .col.push-xl1{left:8.3333333333%}.row .col.offset-xl2{margin-left:16.6666666667%}.row .col.pull-xl2{right:16.6666666667%}.row .col.push-xl2{left:16.6666666667%}.row .col.offset-xl3{margin-left:25%}.row .col.pull-xl3{right:25%}.row .col.push-xl3{left:25%}.row .col.offset-xl4{margin-left:33.3333333333%}.row .col.pull-xl4{right:33.3333333333%}.row .col.push-xl4{left:33.3333333333%}.row .col.offset-xl5{margin-left:41.6666666667%}.row .col.pull-xl5{right:41.6666666667%}.row .col.push-xl5{left:41.6666666667%}.row .col.offset-xl6{margin-left:50%}.row .col.pull-xl6{right:50%}.row .col.push-xl6{left:50%}.row .col.offset-xl7{margin-left:58.3333333333%}.row .col.pull-xl7{right:58.3333333333%}.row .col.push-xl7{left:58.3333333333%}.row .col.offset-xl8{margin-left:66.6666666667%}.row .col.pull-xl8{right:66.6666666667%}.row .col.push-xl8{left:66.6666666667%}.row .col.offset-xl9{margin-left:75%}.row .col.pull-xl9{right:75%}.row .col.push-xl9{left:75%}.row .col.offset-xl10{margin-left:83.3333333333%}.row .col.pull-xl10{right:83.3333333333%}.row .col.push-xl10{left:83.3333333333%}.row .col.offset-xl11{margin-left:91.6666666667%}.row .col.pull-xl11{right:91.6666666667%}.row .col.push-xl11{left:91.6666666667%}.row .col.offset-xl12{margin-left:100%}.row .col.pull-xl12{right:100%}.row .col.push-xl12{left:100%}}nav{color:#fff;background-color:#ee6e73;width:100%;height:56px;line-height:56px}nav.nav-extended{height:auto}nav.nav-extended .nav-wrapper{min-height:56px;height:auto}nav.nav-extended .nav-content{position:relative;line-height:normal}nav a{color:#fff}nav [class*=mdi-],nav [class^=mdi-],nav i,nav i.material-icons{display:block;font-size:24px;height:56px;line-height:56px}nav .nav-wrapper{position:relative;height:100%}@media only screen and (min-width:993px){nav a.sidenav-trigger{display:none}}nav .sidenav-trigger{float:left;position:relative;z-index:1;height:56px;margin:0 18px}nav .sidenav-trigger i{height:56px;line-height:56px}nav .brand-logo{position:absolute;color:#fff;display:inline-block;font-size:2.1rem;padding:0}nav .brand-logo.center{left:50%;transform:translateX(-50%)}@media only screen and (max-width:992px){nav .brand-logo{left:50%;transform:translateX(-50%)}nav .brand-logo.left,nav .brand-logo.right{padding:0;transform:none}nav .brand-logo.left{left:.5rem}nav .brand-logo.right{right:.5rem;left:auto}}nav .brand-logo.right{right:.5rem;padding:0}nav .brand-logo [class*=mdi-],nav .brand-logo [class^=mdi-],nav .brand-logo i,nav .brand-logo i.material-icons{float:left;margin-right:15px}nav .nav-title{display:inline-block;font-size:32px;padding:28px 0}nav ul{margin:0}nav ul li{transition:background-color .3s;float:left;padding:0}nav ul li.active{background-color:rgba(0,0,0,.1)}nav ul a{transition:background-color .3s;font-size:1rem;color:#fff;display:block;padding:0 15px;cursor:pointer}nav ul a.btn,nav ul a.btn-flat,nav ul a.btn-floating,nav ul a.btn-large,nav ul a.btn-small{margin-top:-2px;margin-left:15px;margin-right:15px}nav ul a.btn-flat>.material-icons,nav ul a.btn-floating>.material-icons,nav ul a.btn-large>.material-icons,nav ul a.btn-small>.material-icons,nav ul a.btn>.material-icons{height:inherit;line-height:inherit}nav ul a:hover{background-color:rgba(0,0,0,.1)}nav ul.left{float:left}nav form{height:100%}nav .input-field{margin:0;height:100%}nav .input-field input{height:100%;font-size:1.2rem;border:none;padding-left:2rem}nav .input-field input:focus,nav .input-field input[type=date]:valid,nav .input-field input[type=email]:valid,nav .input-field input[type=password]:valid,nav .input-field input[type=text]:valid,nav .input-field input[type=url]:valid{border:none;box-shadow:none}nav .input-field label{top:0;left:0}nav .input-field label i{color:hsla(0,0%,100%,.7);transition:color .3s}nav .input-field label.active i{color:#fff}.navbar-fixed{position:relative;height:56px;z-index:997}.navbar-fixed nav{position:fixed}@media only screen and (min-width:601px){nav.nav-extended .nav-wrapper{min-height:64px}nav,nav .nav-wrapper i,nav a.sidenav-trigger,nav a.sidenav-trigger i{height:64px;line-height:64px}.navbar-fixed{height:64px}}a{text-decoration:none}html{line-height:1.5;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;font-weight:400;color:rgba(0,0,0,.87)}@media only screen and (min-width:0){html{font-size:14px}}@media only screen and (min-width:992px){html{font-size:14.5px}}@media only screen and (min-width:1200px){html{font-size:15px}}h1,h2,h3,h4,h5,h6{font-weight:400;line-height:1.3}h1 a,h2 a,h3 a,h4 a,h5 a,h6 a{font-weight:inherit}h1{font-size:4.2rem;margin:2.8rem 0 1.68rem}h1,h2{line-height:110%}h2{font-size:3.56rem;margin:2.3733333333rem 0 1.424rem}h3{font-size:2.92rem;margin:1.9466666667rem 0 1.168rem}h3,h4{line-height:110%}h4{font-size:2.28rem;margin:1.52rem 0 .912rem}h5{font-size:1.64rem;margin:1.0933333333rem 0 .656rem}h5,h6{line-height:110%}h6{font-size:1.15rem;margin:.7666666667rem 0 .46rem}em{font-style:italic}strong{font-weight:500}small{font-size:75%}.light{font-weight:300}.thin{font-weight:200}@media only screen and (min-width:360px){.flow-text{font-size:1.2rem}}@media only screen and (min-width:390px){.flow-text{font-size:1.224rem}}@media only screen and (min-width:420px){.flow-text{font-size:1.248rem}}@media only screen and (min-width:450px){.flow-text{font-size:1.272rem}}@media only screen and (min-width:480px){.flow-text{font-size:1.296rem}}@media only screen and (min-width:510px){.flow-text{font-size:1.32rem}}@media only screen and (min-width:540px){.flow-text{font-size:1.344rem}}@media only screen and (min-width:570px){.flow-text{font-size:1.368rem}}@media only screen and (min-width:600px){.flow-text{font-size:1.392rem}}@media only screen and (min-width:630px){.flow-text{font-size:1.416rem}}@media only screen and (min-width:660px){.flow-text{font-size:1.44rem}}@media only screen and (min-width:690px){.flow-text{font-size:1.464rem}}@media only screen and (min-width:720px){.flow-text{font-size:1.488rem}}@media only screen and (min-width:750px){.flow-text{font-size:1.512rem}}@media only screen and (min-width:780px){.flow-text{font-size:1.536rem}}@media only screen and (min-width:810px){.flow-text{font-size:1.56rem}}@media only screen and (min-width:840px){.flow-text{font-size:1.584rem}}@media only screen and (min-width:870px){.flow-text{font-size:1.608rem}}@media only screen and (min-width:900px){.flow-text{font-size:1.632rem}}@media only screen and (min-width:930px){.flow-text{font-size:1.656rem}}@media only screen and (min-width:960px){.flow-text{font-size:1.68rem}}@media only screen and (max-width:360px){.flow-text{font-size:1.2rem}}.scale-transition{transition:transform .3s cubic-bezier(.53,.01,.36,1.63)!important}.scale-transition.scale-out{transform:scale(0);transition:transform .2s!important}.scale-transition.scale-in{transform:scale(1)}.card-panel{padding:24px}.card,.card-panel{transition:box-shadow .25s;margin:.5rem 0 1rem;border-radius:2px;background-color:#fff}.card{position:relative}.card .card-title{font-size:24px;font-weight:300}.card .card-title.activator{cursor:pointer}.card.large,.card.medium,.card.small{position:relative}.card.large .card-image,.card.medium .card-image,.card.small .card-image{max-height:60%;overflow:hidden}.card.large .card-image+.card-content,.card.medium .card-image+.card-content,.card.small .card-image+.card-content{max-height:40%}.card.large .card-content,.card.medium .card-content,.card.small .card-content{max-height:100%;overflow:hidden}.card.large .card-action,.card.medium .card-action,.card.small .card-action{position:absolute;bottom:0;left:0;right:0}.card.small{height:300px}.card.medium{height:400px}.card.large{height:500px}.card.horizontal{display:flex}.card.horizontal.large .card-image,.card.horizontal.medium .card-image,.card.horizontal.small .card-image{height:100%;max-height:none;overflow:visible}.card.horizontal.large .card-image img,.card.horizontal.medium .card-image img,.card.horizontal.small .card-image img{height:100%}.card.horizontal .card-image{max-width:50%}.card.horizontal .card-image img{border-radius:2px 0 0 2px;max-width:100%;width:auto}.card.horizontal .card-stacked{display:flex;flex-direction:column;flex:1;position:relative}.card.horizontal .card-stacked .card-content{flex-grow:1}.card.sticky-action .card-action{z-index:2}.card.sticky-action .card-reveal{z-index:1;padding-bottom:64px}.card .card-image{position:relative}.card .card-image img{display:block;border-radius:2px 2px 0 0;position:relative;left:0;right:0;top:0;bottom:0;width:100%}.card .card-image .card-title{color:#fff;position:absolute;bottom:0;left:0;max-width:100%;padding:24px}.card .card-content{padding:24px;border-radius:0 0 2px 2px}.card .card-content p{margin:0}.card .card-content .card-title{display:block;line-height:32px;margin-bottom:8px}.card .card-content .card-title i{line-height:32px}.card .card-action{background-color:inherit;border-top:1px solid hsla(0,0%,62.7%,.2);position:relative;padding:16px 24px}.card .card-action:last-child{border-radius:0 0 2px 2px}.card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating){color:#ffab40;margin-right:24px;transition:color .3s ease;text-transform:uppercase}.card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating):hover{color:#ffd8a6}.card .card-reveal{padding:24px;position:absolute;background-color:#fff;width:100%;overflow-y:auto;left:0;top:100%;height:100%;z-index:3;display:none}.card .card-reveal .card-title{cursor:pointer;display:block}#toast-container{display:block;position:fixed;z-index:10000}@media only screen and (max-width:600px){#toast-container{min-width:100%;bottom:0}}@media only screen and (min-width:601px) and (max-width:992px){#toast-container{left:5%;bottom:7%;max-width:90%}}@media only screen and (min-width:993px){#toast-container{top:10%;right:7%;max-width:86%}}.toast{border-radius:2px;top:35px;width:auto;margin-top:10px;position:relative;max-width:100%;height:auto;min-height:48px;line-height:1.5em;background-color:#323232;padding:10px 25px;font-size:1.1rem;font-weight:300;color:#fff;display:flex;align-items:center;justify-content:space-between;cursor:default}.toast .toast-action{color:#eeff41;font-weight:500;margin-right:-25px;margin-left:3rem}.toast.rounded{border-radius:24px}@media only screen and (max-width:600px){.toast{width:100%;border-radius:0}}.tabs{position:relative;overflow-x:auto;overflow-y:hidden;height:48px;width:100%;background-color:#fff;margin:0 auto;white-space:nowrap}.tabs.tabs-transparent{background-color:transparent}.tabs.tabs-transparent .tab.disabled a,.tabs.tabs-transparent .tab.disabled a:hover,.tabs.tabs-transparent .tab a{color:hsla(0,0%,100%,.7)}.tabs.tabs-transparent .tab a.active,.tabs.tabs-transparent .tab a:hover{color:#fff}.tabs.tabs-transparent .indicator{background-color:#fff}.tabs.tabs-fixed-width{display:flex}.tabs.tabs-fixed-width .tab{flex-grow:1}.tabs .tab{display:inline-block;text-align:center;line-height:48px;height:48px;padding:0;margin:0;text-transform:uppercase}.tabs .tab a{color:rgba(238,110,115,.7);display:block;width:100%;height:100%;padding:0 24px;font-size:14px;text-overflow:ellipsis;overflow:hidden;transition:color .28s ease,background-color .28s ease}.tabs .tab a:focus,.tabs .tab a:focus.active{background-color:rgba(246,178,181,.2);outline:none}.tabs .tab a.active,.tabs .tab a:hover{background-color:transparent;color:#ee6e73}.tabs .tab.disabled a,.tabs .tab.disabled a:hover{color:rgba(238,110,115,.4);cursor:default}.tabs .indicator{position:absolute;bottom:0;height:2px;background-color:#f6b2b5;will-change:left,right}@media only screen and (max-width:992px){.tabs{display:flex}.tabs .tab{flex-grow:1}.tabs .tab a{padding:0 12px}}.material-tooltip{padding:10px 8px;font-size:1rem;z-index:2000;background-color:transparent;border-radius:2px;color:#fff;min-height:36px;line-height:120%;text-align:center;max-width:calc(100% - 4px);overflow:hidden;left:0;top:0;pointer-events:none}.backdrop,.material-tooltip{opacity:0;position:absolute;visibility:hidden;background-color:#323232}.backdrop{height:7px;width:14px;border-radius:0 0 50% 50%;z-index:-1;transform-origin:50% 0}.btn,.btn-flat,.btn-large,.btn-small{border:none;border-radius:2px;display:inline-block;height:36px;line-height:36px;padding:0 16px;text-transform:uppercase;vertical-align:middle;-webkit-tap-highlight-color:transparent}.btn-flat.disabled,.btn-flat:disabled,.btn-flat[disabled],.btn-floating.disabled,.btn-floating:disabled,.btn-floating[disabled],.btn-large.disabled,.btn-large:disabled,.btn-large[disabled],.btn-small.disabled,.btn-small:disabled,.btn-small[disabled],.btn.disabled,.btn:disabled,.btn[disabled],.disabled.btn-large,.disabled.btn-small{pointer-events:none;background-color:#dfdfdf!important;box-shadow:none;color:#9f9f9f!important;cursor:default}.btn-flat.disabled:hover,.btn-flat:disabled:hover,.btn-flat[disabled]:hover,.btn-floating.disabled:hover,.btn-floating:disabled:hover,.btn-floating[disabled]:hover,.btn-large.disabled:hover,.btn-large:disabled:hover,.btn-large[disabled]:hover,.btn-small.disabled:hover,.btn-small:disabled:hover,.btn-small[disabled]:hover,.btn.disabled:hover,.btn:disabled:hover,.btn[disabled]:hover,.disabled.btn-large:hover,.disabled.btn-small:hover{background-color:#dfdfdf!important;color:#9f9f9f!important}.btn,.btn-flat,.btn-floating,.btn-large,.btn-small{font-size:14px;outline:0}.btn-flat i,.btn-floating i,.btn-large i,.btn-small i,.btn i{font-size:1.3rem;line-height:inherit}.btn-floating:focus,.btn-large:focus,.btn-small:focus,.btn:focus{background-color:#1d7d74}.btn,.btn-large,.btn-small{text-decoration:none;color:#fff;background-color:#26a69a;text-align:center;letter-spacing:.5px;transition:background-color .2s ease-out;cursor:pointer}.btn-large:hover,.btn-small:hover,.btn:hover{background-color:#2bbbad}.btn-floating{display:inline-block;color:#fff;position:relative;overflow:hidden;z-index:1;width:40px;height:40px;line-height:40px;padding:0;border-radius:50%;transition:background-color .3s;cursor:pointer;vertical-align:middle}.btn-floating,.btn-floating:hover{background-color:#26a69a}.btn-floating:before{border-radius:0}.btn-floating.btn-large{width:56px;height:56px;padding:0}.btn-floating.btn-large.halfway-fab{bottom:-28px}.btn-floating.btn-large i{line-height:56px}.btn-floating.btn-small{width:32.4px;height:32.4px}.btn-floating.btn-small.halfway-fab{bottom:-16.2px}.btn-floating.btn-small i{line-height:32.4px}.btn-floating.halfway-fab{position:absolute;right:24px;bottom:-20px}.btn-floating.halfway-fab.left{right:auto;left:24px}.btn-floating i{width:inherit;display:inline-block;text-align:center;color:#fff;font-size:1.6rem;line-height:40px}button.btn-floating{border:none}.fixed-action-btn{position:fixed;right:23px;bottom:23px;padding-top:15px;margin-bottom:0;z-index:997}.fixed-action-btn.active ul{visibility:visible}.fixed-action-btn.direction-left,.fixed-action-btn.direction-right{padding:0 0 0 15px}.fixed-action-btn.direction-left ul,.fixed-action-btn.direction-right ul{text-align:right;right:64px;top:50%;transform:translateY(-50%);height:100%;left:auto;width:500px}.fixed-action-btn.direction-left ul li,.fixed-action-btn.direction-right ul li{display:inline-block;margin:7.5px 15px 0 0}.fixed-action-btn.direction-right{padding:0 15px 0 0}.fixed-action-btn.direction-right ul{text-align:left;direction:rtl;left:64px;right:auto}.fixed-action-btn.direction-right ul li{margin:7.5px 0 0 15px}.fixed-action-btn.direction-bottom{padding:0 0 15px}.fixed-action-btn.direction-bottom ul{top:64px;bottom:auto;display:flex;flex-direction:column-reverse}.fixed-action-btn.direction-bottom ul li{margin:15px 0 0}.fixed-action-btn.toolbar{padding:0;height:56px}.fixed-action-btn.toolbar.active>a i{opacity:0}.fixed-action-btn.toolbar ul{display:flex;top:0;bottom:0;z-index:1}.fixed-action-btn.toolbar ul li{flex:1;display:inline-block;margin:0;height:100%;transition:none}.fixed-action-btn.toolbar ul li a{display:block;overflow:hidden;position:relative;width:100%;height:100%;background-color:transparent;box-shadow:none;color:#fff;line-height:56px;z-index:1}.fixed-action-btn.toolbar ul li a i{line-height:inherit}.fixed-action-btn ul{left:0;right:0;text-align:center;position:absolute;bottom:64px;margin:0;visibility:hidden}.fixed-action-btn ul li{margin-bottom:15px}.fixed-action-btn ul a.btn-floating{opacity:0}.fixed-action-btn .fab-backdrop{position:absolute;top:0;left:0;z-index:-1;width:40px;height:40px;background-color:#26a69a;border-radius:50%;transform:scale(0)}.btn-flat{background-color:transparent;color:#343434;cursor:pointer;transition:background-color .2s}.btn-flat,.btn-flat:focus,.btn-flat:hover{box-shadow:none}.btn-flat:focus{background-color:rgba(0,0,0,.1)}.btn-flat.btn-flat[disabled],.btn-flat.disabled{background-color:transparent!important;color:#b3b2b2!important;cursor:default}.btn-large{height:54px;line-height:54px;font-size:15px;padding:0 28px}.btn-large i{font-size:1.6rem}.btn-small{height:32.4px;line-height:32.4px;font-size:13px}.btn-small i{font-size:1.2rem}.btn-block{display:block}.dropdown-content{background-color:#fff;margin:0;display:none;min-width:100px;overflow-y:auto;opacity:0;position:absolute;left:0;top:0;z-index:9999;transform-origin:0 0}.dropdown-content:focus{outline:0}.dropdown-content li{clear:both;color:rgba(0,0,0,.87);cursor:pointer;min-height:50px;line-height:1.5rem;width:100%;text-align:left}.dropdown-content li.active,.dropdown-content li:hover{background-color:#eee}.dropdown-content li:focus{outline:none}.dropdown-content li.divider{min-height:0;height:1px}.dropdown-content li>a,.dropdown-content li>span{font-size:16px;color:#26a69a;display:block;line-height:22px;padding:14px 16px}.dropdown-content li>span>label{top:1px;left:0;height:18px}.dropdown-content li>a>i{height:inherit;line-height:inherit;float:left;margin:0 24px 0 0;width:24px}body.keyboard-focused .dropdown-content li:focus{background-color:#dadada}.input-field.col .dropdown-content [type=checkbox]+label{top:1px;left:0;height:18px;transform:none}\r\n/*!\r\n * Waves v0.6.0\r\n * http://fian.my.id/Waves\r\n *\r\n * Copyright 2014 Alfiana E. Sibuea and other contributors\r\n * Released under the MIT license\r\n * https://github.com/fians/Waves/blob/master/LICENSE\r\n */.dropdown-trigger,.waves-effect{cursor:pointer}.waves-effect{position:relative;display:inline-block;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent;vertical-align:middle;z-index:1;transition:.3s ease-out}.waves-effect .waves-ripple{position:absolute;border-radius:50%;width:20px;height:20px;margin-top:-10px;margin-left:-10px;opacity:0;background:rgba(0,0,0,.2);transition:all .7s ease-out;transition-property:transform,opacity;transform:scale(0);pointer-events:none}.waves-effect.waves-light .waves-ripple{background-color:hsla(0,0%,100%,.45)}.waves-effect.waves-red .waves-ripple{background-color:rgba(244,67,54,.7)}.waves-effect.waves-yellow .waves-ripple{background-color:rgba(255,235,59,.7)}.waves-effect.waves-orange .waves-ripple{background-color:rgba(255,152,0,.7)}.waves-effect.waves-purple .waves-ripple{background-color:rgba(156,39,176,.7)}.waves-effect.waves-green .waves-ripple{background-color:rgba(76,175,80,.7)}.waves-effect.waves-teal .waves-ripple{background-color:rgba(0,150,136,.7)}.waves-effect input[type=button],.waves-effect input[type=reset],.waves-effect input[type=submit]{border:0;font-style:normal;font-size:inherit;text-transform:inherit;background:none}.waves-effect img{position:relative;z-index:-1}.waves-notransition{transition:none!important}.waves-circle{transform:translateZ(0);-webkit-mask-image:-webkit-radial-gradient(circle,#fff 100%,#000 0)}.waves-input-wrapper{border-radius:.2em;vertical-align:bottom}.waves-input-wrapper .waves-button-input{position:relative;top:0;left:0;z-index:1}.waves-circle{text-align:center;width:2.5em;height:2.5em;line-height:2.5em;border-radius:50%;-webkit-mask-image:none}.waves-block{display:block}.waves-effect .waves-ripple{z-index:-1}.modal{display:none;position:fixed;left:0;right:0;background-color:#fafafa;padding:0;max-height:70%;width:55%;margin:auto;overflow-y:auto;border-radius:2px;will-change:top,opacity}.modal:focus{outline:none}@media only screen and (max-width:992px){.modal{width:80%}}.modal h1,.modal h2,.modal h3,.modal h4{margin-top:0}.modal .modal-content{padding:24px}.modal .modal-close{cursor:pointer}.modal .modal-footer{border-radius:0 0 2px 2px;background-color:#fafafa;padding:4px 6px;height:56px;width:100%;text-align:right}.modal .modal-footer .btn,.modal .modal-footer .btn-flat,.modal .modal-footer .btn-large,.modal .modal-footer .btn-small{margin:6px 0}.modal-overlay{position:fixed;z-index:999;top:-25%;left:0;bottom:0;right:0;height:125%;width:100%;background:#000;display:none;will-change:opacity}.modal.modal-fixed-footer{padding:0;height:70%}.modal.modal-fixed-footer .modal-content{position:absolute;height:calc(100% - 56px);max-height:100%;width:100%;overflow-y:auto}.modal.modal-fixed-footer .modal-footer{border-top:1px solid rgba(0,0,0,.1);position:absolute;bottom:0}.modal.bottom-sheet{top:auto;bottom:-100%;margin:0;width:100%;max-height:45%;border-radius:0;will-change:bottom,opacity}.collapsible{border-top:1px solid #ddd;border-right:1px solid #ddd;border-left:1px solid #ddd;margin:.5rem 0 1rem}.collapsible-header{display:flex;cursor:pointer;-webkit-tap-highlight-color:transparent;line-height:1.5;padding:1rem;background-color:#fff;border-bottom:1px solid #ddd}.collapsible-header:focus{outline:0}.collapsible-header i{width:2rem;font-size:1.6rem;display:inline-block;text-align:center;margin-right:1rem}.keyboard-focused .collapsible-header:focus{background-color:#eee}.collapsible-body{display:none;border-bottom:1px solid #ddd;box-sizing:border-box;padding:2rem}.sidenav .collapsible,.sidenav.fixed .collapsible{border:none;box-shadow:none}.sidenav .collapsible li,.sidenav.fixed .collapsible li{padding:0}.sidenav .collapsible-header,.sidenav.fixed .collapsible-header{background-color:transparent;border:none;line-height:inherit;height:inherit;padding:0 16px}.sidenav .collapsible-header:hover,.sidenav.fixed .collapsible-header:hover{background-color:rgba(0,0,0,.05)}.sidenav .collapsible-header i,.sidenav.fixed .collapsible-header i{line-height:inherit}.sidenav .collapsible-body,.sidenav.fixed .collapsible-body{border:0;background-color:#fff}.sidenav .collapsible-body li a,.sidenav.fixed .collapsible-body li a{padding:0 23.5px 0 31px}.collapsible.popout{border:none;box-shadow:none}.collapsible.popout>li{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);margin:0 24px;transition:margin .35s cubic-bezier(.25,.46,.45,.94)}.collapsible.popout>li.active{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);margin:16px 0}.chip{display:inline-block;height:32px;font-size:13px;font-weight:500;color:rgba(0,0,0,.6);line-height:32px;padding:0 12px;border-radius:16px;background-color:#e4e4e4;margin-bottom:5px;margin-right:5px}.chip:focus{outline:none;background-color:#26a69a;color:#fff}.chip>img{float:left;margin:0 8px 0 -12px;height:32px;width:32px;border-radius:50%}.chip .close{cursor:pointer;float:right;font-size:16px;line-height:32px;padding-left:8px}.chips{border:none;border-bottom:1px solid #9e9e9e;box-shadow:none;margin:0 0 8px;min-height:45px;outline:none;transition:all .3s}.chips.focus{border-bottom:1px solid #26a69a;box-shadow:0 1px 0 0 #26a69a}.chips:hover{cursor:text}.chips .input{background:none;border:0;color:rgba(0,0,0,.6);display:inline-block;font-size:16px;height:3rem;line-height:32px;outline:0;margin:0;padding:0!important;width:120px!important}.chips .input:focus{border:0!important;box-shadow:none!important}.chips .autocomplete-content{margin-top:0;margin-bottom:0}.prefix~.chips{margin-left:3rem;width:92%;width:calc(100% - 3rem)}.chips:empty~label{font-size:.8rem;transform:translateY(-140%)}.materialboxed{display:block;cursor:zoom-in;position:relative;transition:opacity .4s;-webkit-backface-visibility:hidden}.materialboxed:hover:not(.active){opacity:.8}.materialboxed.active{cursor:zoom-out}#materialbox-overlay{top:0;right:0;background-color:#292929;will-change:opacity}#materialbox-overlay,.materialbox-caption{position:fixed;bottom:0;left:0;z-index:1000}.materialbox-caption{display:none;color:#fff;line-height:50px;width:100%;text-align:center;padding:0 15%;height:50px;-webkit-font-smoothing:antialiased}select:focus{outline:1px solid #c9f3ef}button:focus{outline:none;background-color:#2ab7a9}label{font-size:.8rem;color:#9e9e9e}::-moz-placeholder{color:#d1d1d1}:-ms-input-placeholder{color:#d1d1d1}::placeholder{color:#d1d1d1}input:not([type]),input[type=date]:not(.browser-default),input[type=datetime-local]:not(.browser-default),input[type=datetime]:not(.browser-default),input[type=email]:not(.browser-default),input[type=number]:not(.browser-default),input[type=password]:not(.browser-default),input[type=search]:not(.browser-default),input[type=tel]:not(.browser-default),input[type=text]:not(.browser-default),input[type=time]:not(.browser-default),input[type=url]:not(.browser-default),textarea.materialize-textarea{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;border-radius:0;outline:none;height:3rem;width:100%;font-size:16px;margin:0 0 8px;padding:0;box-shadow:none;box-sizing:content-box;transition:box-shadow .3s,border .3s}input:not([type]):disabled,input:not([type])[readonly=readonly],input[type=date]:not(.browser-default):disabled,input[type=date]:not(.browser-default)[readonly=readonly],input[type=datetime-local]:not(.browser-default):disabled,input[type=datetime-local]:not(.browser-default)[readonly=readonly],input[type=datetime]:not(.browser-default):disabled,input[type=datetime]:not(.browser-default)[readonly=readonly],input[type=email]:not(.browser-default):disabled,input[type=email]:not(.browser-default)[readonly=readonly],input[type=number]:not(.browser-default):disabled,input[type=number]:not(.browser-default)[readonly=readonly],input[type=password]:not(.browser-default):disabled,input[type=password]:not(.browser-default)[readonly=readonly],input[type=search]:not(.browser-default):disabled,input[type=search]:not(.browser-default)[readonly=readonly],input[type=tel]:not(.browser-default):disabled,input[type=tel]:not(.browser-default)[readonly=readonly],input[type=text]:not(.browser-default):disabled,input[type=text]:not(.browser-default)[readonly=readonly],input[type=time]:not(.browser-default):disabled,input[type=time]:not(.browser-default)[readonly=readonly],input[type=url]:not(.browser-default):disabled,input[type=url]:not(.browser-default)[readonly=readonly],textarea.materialize-textarea:disabled,textarea.materialize-textarea[readonly=readonly]{color:rgba(0,0,0,.42);border-bottom:1px dotted rgba(0,0,0,.42)}input:not([type]):disabled+label,input:not([type])[readonly=readonly]+label,input[type=date]:not(.browser-default):disabled+label,input[type=date]:not(.browser-default)[readonly=readonly]+label,input[type=datetime-local]:not(.browser-default):disabled+label,input[type=datetime-local]:not(.browser-default)[readonly=readonly]+label,input[type=datetime]:not(.browser-default):disabled+label,input[type=datetime]:not(.browser-default)[readonly=readonly]+label,input[type=email]:not(.browser-default):disabled+label,input[type=email]:not(.browser-default)[readonly=readonly]+label,input[type=number]:not(.browser-default):disabled+label,input[type=number]:not(.browser-default)[readonly=readonly]+label,input[type=password]:not(.browser-default):disabled+label,input[type=password]:not(.browser-default)[readonly=readonly]+label,input[type=search]:not(.browser-default):disabled+label,input[type=search]:not(.browser-default)[readonly=readonly]+label,input[type=tel]:not(.browser-default):disabled+label,input[type=tel]:not(.browser-default)[readonly=readonly]+label,input[type=text]:not(.browser-default):disabled+label,input[type=text]:not(.browser-default)[readonly=readonly]+label,input[type=time]:not(.browser-default):disabled+label,input[type=time]:not(.browser-default)[readonly=readonly]+label,input[type=url]:not(.browser-default):disabled+label,input[type=url]:not(.browser-default)[readonly=readonly]+label,textarea.materialize-textarea:disabled+label,textarea.materialize-textarea[readonly=readonly]+label{color:rgba(0,0,0,.42)}input:not([type]):focus:not([readonly]),input[type=date]:not(.browser-default):focus:not([readonly]),input[type=datetime-local]:not(.browser-default):focus:not([readonly]),input[type=datetime]:not(.browser-default):focus:not([readonly]),input[type=email]:not(.browser-default):focus:not([readonly]),input[type=number]:not(.browser-default):focus:not([readonly]),input[type=password]:not(.browser-default):focus:not([readonly]),input[type=search]:not(.browser-default):focus:not([readonly]),input[type=tel]:not(.browser-default):focus:not([readonly]),input[type=text]:not(.browser-default):focus:not([readonly]),input[type=time]:not(.browser-default):focus:not([readonly]),input[type=url]:not(.browser-default):focus:not([readonly]),textarea.materialize-textarea:focus:not([readonly]){border-bottom:1px solid #26a69a;box-shadow:0 1px 0 0 #26a69a}input:not([type]):focus:not([readonly])+label,input[type=date]:not(.browser-default):focus:not([readonly])+label,input[type=datetime-local]:not(.browser-default):focus:not([readonly])+label,input[type=datetime]:not(.browser-default):focus:not([readonly])+label,input[type=email]:not(.browser-default):focus:not([readonly])+label,input[type=number]:not(.browser-default):focus:not([readonly])+label,input[type=password]:not(.browser-default):focus:not([readonly])+label,input[type=search]:not(.browser-default):focus:not([readonly])+label,input[type=tel]:not(.browser-default):focus:not([readonly])+label,input[type=text]:not(.browser-default):focus:not([readonly])+label,input[type=time]:not(.browser-default):focus:not([readonly])+label,input[type=url]:not(.browser-default):focus:not([readonly])+label,textarea.materialize-textarea:focus:not([readonly])+label{color:#26a69a}input:not([type]):focus.valid~label,input[type=date]:not(.browser-default):focus.valid~label,input[type=datetime-local]:not(.browser-default):focus.valid~label,input[type=datetime]:not(.browser-default):focus.valid~label,input[type=email]:not(.browser-default):focus.valid~label,input[type=number]:not(.browser-default):focus.valid~label,input[type=password]:not(.browser-default):focus.valid~label,input[type=search]:not(.browser-default):focus.valid~label,input[type=tel]:not(.browser-default):focus.valid~label,input[type=text]:not(.browser-default):focus.valid~label,input[type=time]:not(.browser-default):focus.valid~label,input[type=url]:not(.browser-default):focus.valid~label,textarea.materialize-textarea:focus.valid~label{color:#4caf50}input:not([type]):focus.invalid~label,input[type=date]:not(.browser-default):focus.invalid~label,input[type=datetime-local]:not(.browser-default):focus.invalid~label,input[type=datetime]:not(.browser-default):focus.invalid~label,input[type=email]:not(.browser-default):focus.invalid~label,input[type=number]:not(.browser-default):focus.invalid~label,input[type=password]:not(.browser-default):focus.invalid~label,input[type=search]:not(.browser-default):focus.invalid~label,input[type=tel]:not(.browser-default):focus.invalid~label,input[type=text]:not(.browser-default):focus.invalid~label,input[type=time]:not(.browser-default):focus.invalid~label,input[type=url]:not(.browser-default):focus.invalid~label,textarea.materialize-textarea:focus.invalid~label{color:#f44336}input:not([type]).validate+label,input[type=date]:not(.browser-default).validate+label,input[type=datetime-local]:not(.browser-default).validate+label,input[type=datetime]:not(.browser-default).validate+label,input[type=email]:not(.browser-default).validate+label,input[type=number]:not(.browser-default).validate+label,input[type=password]:not(.browser-default).validate+label,input[type=search]:not(.browser-default).validate+label,input[type=tel]:not(.browser-default).validate+label,input[type=text]:not(.browser-default).validate+label,input[type=time]:not(.browser-default).validate+label,input[type=url]:not(.browser-default).validate+label,textarea.materialize-textarea.validate+label{width:100%}.select-wrapper.valid>input.select-dropdown,input.valid:not([type]),input.valid:not([type]):focus,input.valid[type=date]:not(.browser-default),input.valid[type=date]:not(.browser-default):focus,input.valid[type=datetime-local]:not(.browser-default),input.valid[type=datetime-local]:not(.browser-default):focus,input.valid[type=datetime]:not(.browser-default),input.valid[type=datetime]:not(.browser-default):focus,input.valid[type=email]:not(.browser-default),input.valid[type=email]:not(.browser-default):focus,input.valid[type=number]:not(.browser-default),input.valid[type=number]:not(.browser-default):focus,input.valid[type=password]:not(.browser-default),input.valid[type=password]:not(.browser-default):focus,input.valid[type=search]:not(.browser-default),input.valid[type=search]:not(.browser-default):focus,input.valid[type=tel]:not(.browser-default),input.valid[type=tel]:not(.browser-default):focus,input.valid[type=text]:not(.browser-default),input.valid[type=text]:not(.browser-default):focus,input.valid[type=time]:not(.browser-default),input.valid[type=time]:not(.browser-default):focus,input.valid[type=url]:not(.browser-default),input.valid[type=url]:not(.browser-default):focus,textarea.materialize-textarea.valid,textarea.materialize-textarea.valid:focus{border-bottom:1px solid #4caf50;box-shadow:0 1px 0 0 #4caf50}.select-wrapper.invalid>input.select-dropdown,.select-wrapper.invalid>input.select-dropdown:focus,input.invalid:not([type]),input.invalid:not([type]):focus,input.invalid[type=date]:not(.browser-default),input.invalid[type=date]:not(.browser-default):focus,input.invalid[type=datetime-local]:not(.browser-default),input.invalid[type=datetime-local]:not(.browser-default):focus,input.invalid[type=datetime]:not(.browser-default),input.invalid[type=datetime]:not(.browser-default):focus,input.invalid[type=email]:not(.browser-default),input.invalid[type=email]:not(.browser-default):focus,input.invalid[type=number]:not(.browser-default),input.invalid[type=number]:not(.browser-default):focus,input.invalid[type=password]:not(.browser-default),input.invalid[type=password]:not(.browser-default):focus,input.invalid[type=search]:not(.browser-default),input.invalid[type=search]:not(.browser-default):focus,input.invalid[type=tel]:not(.browser-default),input.invalid[type=tel]:not(.browser-default):focus,input.invalid[type=text]:not(.browser-default),input.invalid[type=text]:not(.browser-default):focus,input.invalid[type=time]:not(.browser-default),input.invalid[type=time]:not(.browser-default):focus,input.invalid[type=url]:not(.browser-default),input.invalid[type=url]:not(.browser-default):focus,textarea.materialize-textarea.invalid,textarea.materialize-textarea.invalid:focus{border-bottom:1px solid #f44336;box-shadow:0 1px 0 0 #f44336}.select-wrapper.invalid~.helper-text[data-error],.select-wrapper.valid .helper-text[data-success],input:not([type]).invalid~.helper-text[data-error],input:not([type]).valid~.helper-text[data-success],input:not([type]):focus.invalid~.helper-text[data-error],input:not([type]):focus.valid~.helper-text[data-success],input[type=date]:not(.browser-default).invalid~.helper-text[data-error],input[type=date]:not(.browser-default).valid~.helper-text[data-success],input[type=date]:not(.browser-default):focus.invalid~.helper-text[data-error],input[type=date]:not(.browser-default):focus.valid~.helper-text[data-success],input[type=datetime-local]:not(.browser-default).invalid~.helper-text[data-error],input[type=datetime-local]:not(.browser-default).valid~.helper-text[data-success],input[type=datetime-local]:not(.browser-default):focus.invalid~.helper-text[data-error],input[type=datetime-local]:not(.browser-default):focus.valid~.helper-text[data-success],input[type=datetime]:not(.browser-default).invalid~.helper-text[data-error],input[type=datetime]:not(.browser-default).valid~.helper-text[data-success],input[type=datetime]:not(.browser-default):focus.invalid~.helper-text[data-error],input[type=datetime]:not(.browser-default):focus.valid~.helper-text[data-success],input[type=email]:not(.browser-default).invalid~.helper-text[data-error],input[type=email]:not(.browser-default).valid~.helper-text[data-success],input[type=email]:not(.browser-default):focus.invalid~.helper-text[data-error],input[type=email]:not(.browser-default):focus.valid~.helper-text[data-success],input[type=number]:not(.browser-default).invalid~.helper-text[data-error],input[type=number]:not(.browser-default).valid~.helper-text[data-success],input[type=number]:not(.browser-default):focus.invalid~.helper-text[data-error],input[type=number]:not(.browser-default):focus.valid~.helper-text[data-success],input[type=password]:not(.browser-default).invalid~.helper-text[data-error],input[type=password]:not(.browser-default).valid~.helper-text[data-success],input[type=password]:not(.browser-default):focus.invalid~.helper-text[data-error],input[type=password]:not(.browser-default):focus.valid~.helper-text[data-success],input[type=search]:not(.browser-default).invalid~.helper-text[data-error],input[type=search]:not(.browser-default).valid~.helper-text[data-success],input[type=search]:not(.browser-default):focus.invalid~.helper-text[data-error],input[type=search]:not(.browser-default):focus.valid~.helper-text[data-success],input[type=tel]:not(.browser-default).invalid~.helper-text[data-error],input[type=tel]:not(.browser-default).valid~.helper-text[data-success],input[type=tel]:not(.browser-default):focus.invalid~.helper-text[data-error],input[type=tel]:not(.browser-default):focus.valid~.helper-text[data-success],input[type=text]:not(.browser-default).invalid~.helper-text[data-error],input[type=text]:not(.browser-default).valid~.helper-text[data-success],input[type=text]:not(.browser-default):focus.invalid~.helper-text[data-error],input[type=text]:not(.browser-default):focus.valid~.helper-text[data-success],input[type=time]:not(.browser-default).invalid~.helper-text[data-error],input[type=time]:not(.browser-default).valid~.helper-text[data-success],input[type=time]:not(.browser-default):focus.invalid~.helper-text[data-error],input[type=time]:not(.browser-default):focus.valid~.helper-text[data-success],input[type=url]:not(.browser-default).invalid~.helper-text[data-error],input[type=url]:not(.browser-default).valid~.helper-text[data-success],input[type=url]:not(.browser-default):focus.invalid~.helper-text[data-error],input[type=url]:not(.browser-default):focus.valid~.helper-text[data-success],textarea.materialize-textarea.invalid~.helper-text[data-error],textarea.materialize-textarea.valid~.helper-text[data-success],textarea.materialize-textarea:focus.invalid~.helper-text[data-error],textarea.materialize-textarea:focus.valid~.helper-text[data-success]{color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.select-wrapper.valid~.helper-text:after,input:not([type]).valid~.helper-text:after,input:not([type]):focus.valid~.helper-text:after,input[type=date]:not(.browser-default).valid~.helper-text:after,input[type=date]:not(.browser-default):focus.valid~.helper-text:after,input[type=datetime-local]:not(.browser-default).valid~.helper-text:after,input[type=datetime-local]:not(.browser-default):focus.valid~.helper-text:after,input[type=datetime]:not(.browser-default).valid~.helper-text:after,input[type=datetime]:not(.browser-default):focus.valid~.helper-text:after,input[type=email]:not(.browser-default).valid~.helper-text:after,input[type=email]:not(.browser-default):focus.valid~.helper-text:after,input[type=number]:not(.browser-default).valid~.helper-text:after,input[type=number]:not(.browser-default):focus.valid~.helper-text:after,input[type=password]:not(.browser-default).valid~.helper-text:after,input[type=password]:not(.browser-default):focus.valid~.helper-text:after,input[type=search]:not(.browser-default).valid~.helper-text:after,input[type=search]:not(.browser-default):focus.valid~.helper-text:after,input[type=tel]:not(.browser-default).valid~.helper-text:after,input[type=tel]:not(.browser-default):focus.valid~.helper-text:after,input[type=text]:not(.browser-default).valid~.helper-text:after,input[type=text]:not(.browser-default):focus.valid~.helper-text:after,input[type=time]:not(.browser-default).valid~.helper-text:after,input[type=time]:not(.browser-default):focus.valid~.helper-text:after,input[type=url]:not(.browser-default).valid~.helper-text:after,input[type=url]:not(.browser-default):focus.valid~.helper-text:after,textarea.materialize-textarea.valid~.helper-text:after,textarea.materialize-textarea:focus.valid~.helper-text:after{content:attr(data-success);color:#4caf50}.select-wrapper.invalid~.helper-text:after,input:not([type]).invalid~.helper-text:after,input:not([type]):focus.invalid~.helper-text:after,input[type=date]:not(.browser-default).invalid~.helper-text:after,input[type=date]:not(.browser-default):focus.invalid~.helper-text:after,input[type=datetime-local]:not(.browser-default).invalid~.helper-text:after,input[type=datetime-local]:not(.browser-default):focus.invalid~.helper-text:after,input[type=datetime]:not(.browser-default).invalid~.helper-text:after,input[type=datetime]:not(.browser-default):focus.invalid~.helper-text:after,input[type=email]:not(.browser-default).invalid~.helper-text:after,input[type=email]:not(.browser-default):focus.invalid~.helper-text:after,input[type=number]:not(.browser-default).invalid~.helper-text:after,input[type=number]:not(.browser-default):focus.invalid~.helper-text:after,input[type=password]:not(.browser-default).invalid~.helper-text:after,input[type=password]:not(.browser-default):focus.invalid~.helper-text:after,input[type=search]:not(.browser-default).invalid~.helper-text:after,input[type=search]:not(.browser-default):focus.invalid~.helper-text:after,input[type=tel]:not(.browser-default).invalid~.helper-text:after,input[type=tel]:not(.browser-default):focus.invalid~.helper-text:after,input[type=text]:not(.browser-default).invalid~.helper-text:after,input[type=text]:not(.browser-default):focus.invalid~.helper-text:after,input[type=time]:not(.browser-default).invalid~.helper-text:after,input[type=time]:not(.browser-default):focus.invalid~.helper-text:after,input[type=url]:not(.browser-default).invalid~.helper-text:after,input[type=url]:not(.browser-default):focus.invalid~.helper-text:after,textarea.materialize-textarea.invalid~.helper-text:after,textarea.materialize-textarea:focus.invalid~.helper-text:after{content:attr(data-error);color:#f44336}.select-wrapper+label:after,input:not([type])+label:after,input[type=date]:not(.browser-default)+label:after,input[type=datetime-local]:not(.browser-default)+label:after,input[type=datetime]:not(.browser-default)+label:after,input[type=email]:not(.browser-default)+label:after,input[type=number]:not(.browser-default)+label:after,input[type=password]:not(.browser-default)+label:after,input[type=search]:not(.browser-default)+label:after,input[type=tel]:not(.browser-default)+label:after,input[type=text]:not(.browser-default)+label:after,input[type=time]:not(.browser-default)+label:after,input[type=url]:not(.browser-default)+label:after,textarea.materialize-textarea+label:after{display:block;content:\"\";position:absolute;top:100%;left:0;opacity:0;transition:opacity .2s ease-out,color .2s ease-out}.input-field{position:relative;margin-top:1rem;margin-bottom:1rem}.input-field.inline{display:inline-block;vertical-align:middle;margin-left:5px}.input-field.inline .select-dropdown,.input-field.inline input{margin-bottom:1rem}.input-field.col label{left:.75rem}.input-field.col .prefix~.validate~label,.input-field.col .prefix~label{width:calc(100% - 4.5rem)}.input-field>label{color:#9e9e9e;position:absolute;top:0;left:0;font-size:1rem;cursor:text;transition:transform .2s ease-out,color .2s ease-out;transform-origin:0 100%;text-align:left;text-align:initial;transform:translateY(12px)}.input-field>label:not(.label-icon).active{transform:translateY(-14px) scale(.8);transform-origin:0 0}.input-field>input[type=date]:not(.browser-default)+label,.input-field>input[type=time]:not(.browser-default)+label,.input-field>input[type]:-webkit-autofill:not(.browser-default):not([type=search])+label{transform:translateY(-14px) scale(.8);transform-origin:0 0}.input-field .helper-text{position:relative;min-height:18px;display:block;font-size:12px;color:rgba(0,0,0,.54)}.input-field .helper-text:after{opacity:1;position:absolute;top:0;left:0}.input-field .prefix{position:absolute;width:3rem;font-size:2rem;transition:color .2s;top:.5rem}.input-field .prefix.active{color:#26a69a}.input-field .prefix~.autocomplete-content,.input-field .prefix~.helper-text,.input-field .prefix~.validate~label,.input-field .prefix~input,.input-field .prefix~label,.input-field .prefix~textarea{margin-left:3rem;width:92%;width:calc(100% - 3rem)}.input-field .prefix~label{margin-left:3rem}@media only screen and (max-width:992px){.input-field .prefix~input{width:86%;width:calc(100% - 3rem)}}@media only screen and (max-width:600px){.input-field .prefix~input{width:80%;width:calc(100% - 3rem)}}.input-field input[type=search]{display:block;line-height:inherit;transition:background-color .3s}.nav-wrapper .input-field input[type=search]{height:inherit;padding-left:4rem;width:calc(100% - 4rem);border:0;box-shadow:none}.input-field input[type=search]:focus:not(.browser-default){background-color:#fff;border:0;box-shadow:none;color:#444}.input-field input[type=search]:focus:not(.browser-default)+label i,.input-field input[type=search]:focus:not(.browser-default)~.material-icons,.input-field input[type=search]:focus:not(.browser-default)~.mdi-navigation-close{color:#444}.input-field input[type=search]+.label-icon{transform:none;left:1rem}.input-field input[type=search]~.material-icons,.input-field input[type=search]~.mdi-navigation-close{position:absolute;top:0;right:1rem;color:transparent;cursor:pointer;font-size:2rem;transition:color .3s}textarea{width:100%;height:3rem;background-color:transparent}textarea.materialize-textarea{line-height:normal;overflow-y:hidden;padding:.8rem 0;resize:none;min-height:3rem;box-sizing:border-box}.hiddendiv{visibility:hidden;white-space:pre-wrap;word-wrap:break-word;padding-top:1.2rem;position:absolute;top:0;z-index:-1}.autocomplete-content li .highlight{color:#444}.autocomplete-content li img{height:40px;width:40px;margin:5px 15px}.character-counter{min-height:18px}[type=radio]:checked,[type=radio]:not(:checked){position:absolute;opacity:0;pointer-events:none}[type=radio]:checked+span,[type=radio]:not(:checked)+span{position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;transition:.28s ease;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[type=radio]+span:after,[type=radio]+span:before{content:\"\";position:absolute;left:0;top:0;margin:4px;width:16px;height:16px;z-index:0;transition:.28s ease}[type=radio].with-gap:checked+span:after,[type=radio].with-gap:checked+span:before,[type=radio]:checked+span:after,[type=radio]:checked+span:before,[type=radio]:not(:checked)+span:after,[type=radio]:not(:checked)+span:before{border-radius:50%}[type=radio]:not(:checked)+span:after,[type=radio]:not(:checked)+span:before{border:2px solid #5a5a5a}[type=radio]:not(:checked)+span:after{transform:scale(0)}[type=radio]:checked+span:before{border:2px solid transparent}[type=radio].with-gap:checked+span:after,[type=radio].with-gap:checked+span:before,[type=radio]:checked+span:after{border:2px solid #26a69a}[type=radio].with-gap:checked+span:after,[type=radio]:checked+span:after{background-color:#26a69a}[type=radio]:checked+span:after{transform:scale(1.02)}[type=radio].with-gap:checked+span:after{transform:scale(.5)}[type=radio].tabbed:focus+span:before{box-shadow:0 0 0 10px rgba(0,0,0,.1)}[type=radio].with-gap:disabled:checked+span:before{border:2px solid rgba(0,0,0,.42)}[type=radio].with-gap:disabled:checked+span:after{border:none;background-color:rgba(0,0,0,.42)}[type=radio]:disabled:checked+span:before,[type=radio]:disabled:not(:checked)+span:before{background-color:transparent;border-color:rgba(0,0,0,.42)}[type=radio]:disabled+span{color:rgba(0,0,0,.42)}[type=radio]:disabled:not(:checked)+span:before{border-color:rgba(0,0,0,.42)}[type=radio]:disabled:checked+span:after{background-color:rgba(0,0,0,.42);border-color:#949494}[type=checkbox]:checked,[type=checkbox]:not(:checked){position:absolute;opacity:0;pointer-events:none}[type=checkbox]+span:not(.lever){position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[type=checkbox]+span:not(.lever):before,[type=checkbox]:not(.filled-in)+span:not(.lever):after{content:\"\";position:absolute;top:0;left:0;width:18px;height:18px;z-index:0;border:2px solid #5a5a5a;border-radius:1px;margin-top:3px;transition:.2s}[type=checkbox]:not(.filled-in)+span:not(.lever):after{border:0;transform:scale(0)}[type=checkbox]:not(:checked):disabled+span:not(.lever):before{border:none;background-color:rgba(0,0,0,.42)}[type=checkbox].tabbed:focus+span:not(.lever):after{transform:scale(1);border:0;border-radius:50%;box-shadow:0 0 0 10px rgba(0,0,0,.1);background-color:rgba(0,0,0,.1)}[type=checkbox]:checked+span:not(.lever):before{top:-4px;left:-5px;width:12px;height:22px;border-color:transparent #26a69a #26a69a transparent;border-style:solid;border-width:2px;transform:rotate(40deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:100% 100%}[type=checkbox]:checked:disabled+span:before{border-right:2px solid rgba(0,0,0,.42);border-bottom:2px solid rgba(0,0,0,.42)}[type=checkbox]:indeterminate+span:not(.lever):before{top:-11px;left:-12px;width:10px;height:22px;border:none;border-right:2px solid #26a69a;transform:rotate(90deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:100% 100%}[type=checkbox]:indeterminate:disabled+span:not(.lever):before{border-right:2px solid rgba(0,0,0,.42);background-color:transparent}[type=checkbox].filled-in+span:not(.lever):after{border-radius:2px}[type=checkbox].filled-in+span:not(.lever):after,[type=checkbox].filled-in+span:not(.lever):before{content:\"\";left:0;position:absolute;transition:border .25s,background-color .25s,width .2s .1s,height .2s .1s,top .2s .1s,left .2s .1s;z-index:1}[type=checkbox].filled-in:not(:checked)+span:not(.lever):before{width:0;height:0;border:3px solid transparent;left:6px;top:10px;transform:rotate(37deg);transform-origin:100% 100%}[type=checkbox].filled-in:not(:checked)+span:not(.lever):after{height:20px;width:20px;background-color:transparent;border:2px solid #5a5a5a;top:0;z-index:0}[type=checkbox].filled-in:checked+span:not(.lever):before{top:0;left:1px;width:8px;height:13px;border-color:transparent #fff #fff transparent;border-style:solid;border-width:2px;transform:rotate(37deg);transform-origin:100% 100%}[type=checkbox].filled-in:checked+span:not(.lever):after{top:0;width:20px;height:20px;border:2px solid #26a69a;background-color:#26a69a;z-index:0}[type=checkbox].filled-in.tabbed:focus+span:not(.lever):after{border-radius:2px;border-color:#5a5a5a;background-color:rgba(0,0,0,.1)}[type=checkbox].filled-in.tabbed:checked:focus+span:not(.lever):after{border-radius:2px;background-color:#26a69a;border-color:#26a69a}[type=checkbox].filled-in:disabled:not(:checked)+span:not(.lever):before{background-color:transparent;border:2px solid transparent}[type=checkbox].filled-in:disabled:not(:checked)+span:not(.lever):after{border-color:transparent;background-color:#949494}[type=checkbox].filled-in:disabled:checked+span:not(.lever):before{background-color:transparent}[type=checkbox].filled-in:disabled:checked+span:not(.lever):after{background-color:#949494;border-color:#949494}.switch,.switch *{-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.switch label{cursor:pointer}.switch label input[type=checkbox]{opacity:0;width:0;height:0}.switch label input[type=checkbox]:checked+.lever{background-color:#84c7c1}.switch label input[type=checkbox]:checked+.lever:after,.switch label input[type=checkbox]:checked+.lever:before{left:18px}.switch label input[type=checkbox]:checked+.lever:after{background-color:#26a69a}.switch label .lever{content:\"\";display:inline-block;position:relative;width:36px;height:14px;background-color:rgba(0,0,0,.38);border-radius:15px;transition:background .3s ease;vertical-align:middle;margin:0 16px}.switch label .lever:after,.switch label .lever:before{content:\"\";position:absolute;display:inline-block;width:20px;height:20px;border-radius:50%;left:0;top:-3px;transition:left .3s ease,background .3s ease,box-shadow .1s ease,transform .1s ease}.switch label .lever:before{background-color:rgba(38,166,154,.15)}.switch label .lever:after{background-color:#f1f1f1;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}input[type=checkbox]:checked:not(:disabled).tabbed:focus~.lever:before,input[type=checkbox]:checked:not(:disabled)~.lever:active:before{transform:scale(2.4);background-color:rgba(38,166,154,.15)}input[type=checkbox]:not(:disabled).tabbed:focus~.lever:before,input[type=checkbox]:not(:disabled)~.lever:active:before{transform:scale(2.4);background-color:rgba(0,0,0,.08)}.switch input[type=checkbox][disabled]+.lever{cursor:default;background-color:rgba(0,0,0,.12)}.switch label input[type=checkbox][disabled]+.lever:after,.switch label input[type=checkbox][disabled]:checked+.lever:after{background-color:#949494}select{display:none}select.browser-default{display:block}select{background-color:hsla(0,0%,100%,.9);width:100%;padding:5px;border:1px solid #f2f2f2;border-radius:2px;height:3rem}.select-label{position:absolute}.select-wrapper{position:relative}.select-wrapper.invalid+label,.select-wrapper.valid+label{width:100%;pointer-events:none}.select-wrapper input.select-dropdown{position:relative;cursor:pointer;background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;outline:none;height:3rem;line-height:3rem;width:100%;font-size:16px;margin:0 0 8px;padding:0;display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1}.select-wrapper input.select-dropdown:focus{border-bottom:1px solid #26a69a}.select-wrapper .caret{position:absolute;right:0;top:0;bottom:0;margin:auto 0;z-index:0;fill:rgba(0,0,0,.87)}.select-wrapper+label{position:absolute;top:-26px;font-size:.8rem}.select-wrapper.disabled+label,select:disabled{color:rgba(0,0,0,.42)}.select-wrapper.disabled .caret{fill:rgba(0,0,0,.42)}.select-wrapper input.select-dropdown:disabled{color:rgba(0,0,0,.42);cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.select-wrapper i{color:rgba(0,0,0,.3)}.select-dropdown li.disabled,.select-dropdown li.disabled>span,.select-dropdown li.optgroup{color:rgba(0,0,0,.3);background-color:transparent}.select-dropdown.dropdown-content li:hover,body.keyboard-focused .select-dropdown.dropdown-content li:focus{background-color:rgba(0,0,0,.08)}.select-dropdown.dropdown-content li.selected{background-color:rgba(0,0,0,.03)}.prefix~.select-wrapper{margin-left:3rem;width:92%;width:calc(100% - 3rem)}.prefix~label{margin-left:3rem}.select-dropdown li img{height:40px;width:40px;margin:5px 15px;float:right}.select-dropdown li.optgroup{border-top:1px solid #eee}.select-dropdown li.optgroup.selected>span{color:rgba(0,0,0,.7)}.select-dropdown li.optgroup>span{color:rgba(0,0,0,.4)}.select-dropdown li.optgroup~li.optgroup-option{padding-left:1rem}.file-field{position:relative}.file-field .file-path-wrapper{overflow:hidden;padding-left:10px}.file-field input.file-path{width:100%}.file-field .btn,.file-field .btn-large,.file-field .btn-small{float:left;height:3rem;line-height:3rem}.file-field span{cursor:pointer}.file-field input[type=file]{position:absolute;top:0;right:0;left:0;bottom:0;width:100%;margin:0;padding:0;font-size:20px;cursor:pointer;opacity:0;filter:alpha(opacity=0)}.file-field input[type=file]::-webkit-file-upload-button{display:none}.range-field{position:relative}input[type=range],input[type=range]+.thumb{cursor:pointer}input[type=range]{position:relative;background-color:transparent;border:none;outline:none;width:100%;margin:15px 0;padding:0}input[type=range]:focus{outline:none}input[type=range]+.thumb{position:absolute;top:10px;left:0;border:none;height:0;width:0;border-radius:50%;background-color:#26a69a;margin-left:7px;transform-origin:50% 50%;transform:rotate(-45deg)}input[type=range]+.thumb .value{display:block;width:30px;text-align:center;color:#26a69a;font-size:0;transform:rotate(45deg)}input[type=range]+.thumb.active{border-radius:50% 50% 50% 0}input[type=range]+.thumb.active .value{color:#fff;margin-left:-1px;margin-top:8px;font-size:10px}input[type=range]{-webkit-appearance:none}input[type=range]::-webkit-slider-runnable-track{height:3px;background:#c2c0c2;border:none}input[type=range]::-webkit-slider-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a;-webkit-transition:box-shadow .3s;transition:box-shadow .3s;-webkit-appearance:none;background-color:#26a69a;transform-origin:50% 50%;margin:-5px 0 0}.keyboard-focused input[type=range]:focus:not(.active)::-webkit-slider-thumb{box-shadow:0 0 0 10px rgba(38,166,154,.26)}input[type=range]{border:1px solid #fff}input[type=range]::-moz-range-track{height:3px;background:#c2c0c2;border:none}input[type=range]::-moz-focus-inner{border:0}input[type=range]::-moz-range-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a;-moz-transition:box-shadow .3s;transition:box-shadow .3s;margin-top:-5px}input[type=range]:-moz-focusring{outline:1px solid #fff;outline-offset:-1px}.keyboard-focused input[type=range]:focus:not(.active)::-moz-range-thumb{box-shadow:0 0 0 10px rgba(38,166,154,.26)}input[type=range]::-ms-track{height:3px;background:transparent;border-color:transparent;border-width:6px 0;color:transparent}input[type=range]::-ms-fill-lower{background:#777}input[type=range]::-ms-fill-upper{background:#ddd}input[type=range]::-ms-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a;-ms-transition:box-shadow .3s;transition:box-shadow .3s}.keyboard-focused input[type=range]:focus:not(.active)::-ms-thumb{box-shadow:0 0 0 10px rgba(38,166,154,.26)}.table-of-contents.fixed{position:fixed}.table-of-contents li{padding:2px 0}.table-of-contents a{font-weight:300;color:#757575;padding-left:16px;height:1.5rem;line-height:1.5rem;letter-spacing:.4;display:inline-block}.table-of-contents a:hover{color:#a8a8a8;padding-left:15px;border-left:1px solid #ee6e73}.table-of-contents a.active{font-weight:500;padding-left:14px;border-left:2px solid #ee6e73}.sidenav{position:fixed;width:300px;left:0;top:0;margin:0;transform:translateX(-100%);height:calc(100% + 60px);height:100%;padding-bottom:60px;background-color:#fff;z-index:999;overflow-y:auto;will-change:transform;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:translateX(-105%)}.sidenav.right-aligned{right:0;transform:translateX(105%);left:auto;transform:translateX(100%)}.sidenav .collapsible{margin:0}.sidenav li{float:none;line-height:48px}.sidenav li.active{background-color:rgba(0,0,0,.05)}.sidenav li>a{color:rgba(0,0,0,.87);display:block;font-size:14px;font-weight:500;height:48px;line-height:48px;padding:0 32px}.sidenav li>a:hover{background-color:rgba(0,0,0,.05)}.sidenav li>a.btn,.sidenav li>a.btn-flat,.sidenav li>a.btn-floating,.sidenav li>a.btn-large,.sidenav li>a.btn-small{margin:10px 15px}.sidenav li>a.btn,.sidenav li>a.btn-floating,.sidenav li>a.btn-large,.sidenav li>a.btn-small{color:#fff}.sidenav li>a.btn-flat{color:#343434}.sidenav li>a.btn-large:hover,.sidenav li>a.btn-small:hover,.sidenav li>a.btn:hover{background-color:#2bbbad}.sidenav li>a.btn-floating:hover{background-color:#26a69a}.sidenav li>a>[class^=mdi-],.sidenav li>a>i,.sidenav li>a>i.material-icons,.sidenav li>a li>a>[class*=mdi-]{float:left;height:48px;line-height:48px;margin:0 32px 0 0;width:24px;color:rgba(0,0,0,.54)}.sidenav .divider{margin:8px 0 0}.sidenav .subheader{cursor:auto;pointer-events:none;color:rgba(0,0,0,.54);font-size:14px;font-weight:500;line-height:48px}.sidenav .subheader:hover{background-color:transparent}.sidenav .user-view{position:relative;padding:32px 32px 0;margin-bottom:8px}.sidenav .user-view>a{height:auto;padding:0}.sidenav .user-view>a:hover{background-color:transparent}.sidenav .user-view .background{overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1}.sidenav .user-view .circle,.sidenav .user-view .email,.sidenav .user-view .name{display:block}.sidenav .user-view .circle{height:64px;width:64px}.sidenav .user-view .email,.sidenav .user-view .name{font-size:14px;line-height:24px}.sidenav .user-view .name{margin-top:16px;font-weight:500}.sidenav .user-view .email{padding-bottom:16px;font-weight:400}.drag-target{height:100%;width:10px;position:fixed;top:0;z-index:998}.drag-target.right-aligned{right:0}.sidenav.sidenav-fixed{left:0;transform:translateX(0);position:fixed}.sidenav.sidenav-fixed.right-aligned{right:0;left:auto}@media only screen and (max-width:992px){.sidenav.sidenav-fixed{transform:translateX(-105%)}.sidenav.sidenav-fixed.right-aligned{transform:translateX(105%)}.sidenav>a{padding:0 16px}.sidenav .user-view{padding:16px 16px 0}}.sidenav .collapsible-body>ul:not(.collapsible)>li.active,.sidenav.sidenav-fixed .collapsible-body>ul:not(.collapsible)>li.active{background-color:#ee6e73}.sidenav .collapsible-body>ul:not(.collapsible)>li.active a,.sidenav.sidenav-fixed .collapsible-body>ul:not(.collapsible)>li.active a{color:#fff}.sidenav .collapsible-body{padding:0}.sidenav-overlay{position:fixed;top:0;left:0;right:0;opacity:0;height:120vh;background-color:rgba(0,0,0,.5);z-index:997;display:none}.preloader-wrapper{display:inline-block;position:relative;width:50px;height:50px}.preloader-wrapper.small{width:36px;height:36px}.preloader-wrapper.big{width:64px;height:64px}.preloader-wrapper.active{-webkit-animation:container-rotate 1568ms linear infinite;animation:container-rotate 1568ms linear infinite}@-webkit-keyframes container-rotate{to{-webkit-transform:rotate(1turn)}}@keyframes container-rotate{to{transform:rotate(1turn)}}.spinner-layer{position:absolute;width:100%;height:100%;opacity:0;border-color:#26a69a}.spinner-blue,.spinner-blue-only{border-color:#4285f4}.spinner-red,.spinner-red-only{border-color:#db4437}.spinner-yellow,.spinner-yellow-only{border-color:#f4b400}.spinner-green,.spinner-green-only{border-color:#0f9d58}.active .spinner-layer.spinner-blue{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,blue-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,blue-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.active .spinner-layer.spinner-red{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,red-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,red-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.active .spinner-layer.spinner-yellow{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,yellow-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,yellow-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.active .spinner-layer.spinner-green{-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,green-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both,green-fade-in-out 5332ms cubic-bezier(.4,0,.2,1) infinite both}.active .spinner-layer,.active .spinner-layer.spinner-blue-only,.active .spinner-layer.spinner-green-only,.active .spinner-layer.spinner-red-only,.active .spinner-layer.spinner-yellow-only{opacity:1;-webkit-animation:fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both;animation:fill-unfill-rotate 5332ms cubic-bezier(.4,0,.2,1) infinite both}@-webkit-keyframes fill-unfill-rotate{12.5%{-webkit-transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg)}to{-webkit-transform:rotate(3turn)}}@keyframes fill-unfill-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}to{transform:rotate(3turn)}}@-webkit-keyframes blue-fade-in-out{0%{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}to{opacity:1}}@keyframes blue-fade-in-out{0%{opacity:1}25%{opacity:1}26%{opacity:0}89%{opacity:0}90%{opacity:1}to{opacity:1}}@-webkit-keyframes red-fade-in-out{0%{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}}@keyframes red-fade-in-out{0%{opacity:0}15%{opacity:0}25%{opacity:1}50%{opacity:1}51%{opacity:0}}@-webkit-keyframes yellow-fade-in-out{0%{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}}@keyframes yellow-fade-in-out{0%{opacity:0}40%{opacity:0}50%{opacity:1}75%{opacity:1}76%{opacity:0}}@-webkit-keyframes green-fade-in-out{0%{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}to{opacity:0}}@keyframes green-fade-in-out{0%{opacity:0}65%{opacity:0}75%{opacity:1}90%{opacity:1}to{opacity:0}}.gap-patch{position:absolute;top:0;left:45%;width:10%;height:100%;overflow:hidden;border-color:inherit}.gap-patch .circle{width:1000%;left:-450%}.circle-clipper{display:inline-block;position:relative;width:50%;height:100%;overflow:hidden;border-color:inherit}.circle-clipper .circle{width:200%;height:100%;border:3px solid;border-color:inherit;border-bottom-color:transparent!important;border-radius:50%;-webkit-animation:none;animation:none;position:absolute;top:0;right:0;bottom:0}.circle-clipper.left .circle{left:0;border-right-color:transparent!important;transform:rotate(129deg)}.circle-clipper.right .circle{left:-100%;border-left-color:transparent!important;transform:rotate(-129deg)}.active .circle-clipper.left .circle{-webkit-animation:left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:left-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}.active .circle-clipper.right .circle{-webkit-animation:right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both;animation:right-spin 1333ms cubic-bezier(.4,0,.2,1) infinite both}@-webkit-keyframes left-spin{0%{-webkit-transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg)}to{-webkit-transform:rotate(130deg)}}@keyframes left-spin{0%{transform:rotate(130deg)}50%{transform:rotate(-5deg)}to{transform:rotate(130deg)}}@-webkit-keyframes right-spin{0%{-webkit-transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg)}to{-webkit-transform:rotate(-130deg)}}@keyframes right-spin{0%{transform:rotate(-130deg)}50%{transform:rotate(5deg)}to{transform:rotate(-130deg)}}#spinnerContainer.cooldown{-webkit-animation:container-rotate 1568ms linear infinite,fade-out .4s cubic-bezier(.4,0,.2,1);animation:container-rotate 1568ms linear infinite,fade-out .4s cubic-bezier(.4,0,.2,1)}@-webkit-keyframes fade-out{0%{opacity:1}to{opacity:0}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}.slider{position:relative;height:400px;width:100%}.slider.fullscreen{height:100%;width:100%;position:absolute;top:0;left:0;right:0;bottom:0}.slider.fullscreen ul.slides{height:100%}.slider.fullscreen ul.indicators{z-index:2;bottom:30px}.slider .slides{background-color:#9e9e9e;margin:0;height:400px}.slider .slides li{opacity:0;position:absolute;top:0;left:0;z-index:1;width:100%;height:inherit;overflow:hidden}.slider .slides li img{height:100%;width:100%;background-size:cover;background-position:50%}.slider .slides li .caption{color:#fff;position:absolute;top:15%;left:15%;width:70%;opacity:0}.slider .slides li .caption p{color:#e0e0e0}.slider .slides li.active{z-index:2}.slider .indicators{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:0}.slider .indicators .indicator-item{display:inline-block;position:relative;cursor:pointer;height:16px;width:16px;margin:0 12px;background-color:#e0e0e0;transition:background-color .3s;border-radius:50%}.slider .indicators .indicator-item.active{background-color:#4caf50}.carousel{overflow:hidden;position:relative;width:100%;height:400px;perspective:500px;transform-style:preserve-3d;transform-origin:0 50%}.carousel.carousel-slider{top:0;left:0}.carousel.carousel-slider .carousel-fixed-item{position:absolute;left:0;right:0;bottom:20px;z-index:1}.carousel.carousel-slider .carousel-fixed-item.with-indicators{bottom:68px}.carousel.carousel-slider .carousel-item{width:100%;height:100%;min-height:400px;position:absolute;top:0;left:0}.carousel.carousel-slider .carousel-item h2{font-size:24px;font-weight:500;line-height:32px}.carousel.carousel-slider .carousel-item p{font-size:15px}.carousel .carousel-item{visibility:hidden;width:200px;height:200px;position:absolute;top:0;left:0}.carousel .carousel-item>img{width:100%}.carousel .indicators{position:absolute;text-align:center;left:0;right:0;bottom:0;margin:0}.carousel .indicators .indicator-item{display:inline-block;position:relative;cursor:pointer;height:8px;width:8px;margin:24px 4px;background-color:hsla(0,0%,100%,.5);transition:background-color .3s;border-radius:50%}.carousel .indicators .indicator-item.active{background-color:#fff}.carousel .carousel-item:not(.active) .materialboxed,.carousel.scrolling .carousel-item .materialboxed{pointer-events:none}.tap-target-wrapper{width:800px;height:800px;position:fixed;z-index:1000;visibility:hidden;transition:visibility 0s .3s}.tap-target-wrapper.open{visibility:visible;transition:visibility 0s}.tap-target-wrapper.open .tap-target{transform:scale(1);opacity:.95;transition:transform .3s ease-in-out,opacity .3s ease-in-out}.tap-target-wrapper.open .tap-target-wave:before{transform:scale(1)}.tap-target-wrapper.open .tap-target-wave:after{visibility:visible;-webkit-animation:pulse-animation 1s cubic-bezier(.24,0,.38,1) infinite;animation:pulse-animation 1s cubic-bezier(.24,0,.38,1) infinite;transition:opacity .3s,transform .3s,visibility 0s 1s}.tap-target{position:absolute;font-size:1rem;border-radius:50%;background-color:#ee6e73;box-shadow:0 20px 20px 0 rgba(0,0,0,.14),0 10px 50px 0 rgba(0,0,0,.12),0 30px 10px -20px rgba(0,0,0,.2);width:100%;height:100%;opacity:0;transform:scale(0);transition:transform .3s ease-in-out,opacity .3s ease-in-out}.tap-target-content{position:relative;display:table-cell}.tap-target-wave{position:absolute;border-radius:50%;z-index:10001}.tap-target-wave:after,.tap-target-wave:before{content:\"\";display:block;position:absolute;width:100%;height:100%;border-radius:50%;background-color:#fff}.tap-target-wave:before{transform:scale(0);transition:transform .3s}.tap-target-wave:after{visibility:hidden;transition:opacity .3s,transform .3s,visibility 0s;z-index:-1}.tap-target-origin{top:50%;left:50%;transform:translate(-50%,-50%);z-index:10002;position:absolute!important}.tap-target-origin:not(.btn):not(.btn-large):not(.btn-small),.tap-target-origin:not(.btn):not(.btn-large):not(.btn-small):hover{background:none}@media only screen and (max-width:600px){.tap-target,.tap-target-wrapper{width:600px;height:600px}}.pulse{overflow:visible;position:relative}.pulse:before{content:\"\";display:block;position:absolute;width:100%;height:100%;top:0;left:0;background-color:inherit;border-radius:inherit;transition:opacity .3s,transform .3s;-webkit-animation:pulse-animation 1s cubic-bezier(.24,0,.38,1) infinite;animation:pulse-animation 1s cubic-bezier(.24,0,.38,1) infinite;z-index:-1}@-webkit-keyframes pulse-animation{0%{opacity:1;transform:scale(1)}50%{opacity:0;transform:scale(1.5)}to{opacity:0;transform:scale(1.5)}}@keyframes pulse-animation{0%{opacity:1;transform:scale(1)}50%{opacity:0;transform:scale(1.5)}to{opacity:0;transform:scale(1.5)}}.datepicker-modal{max-width:325px;min-width:300px;max-height:none}.datepicker-container.modal-content{display:flex;flex-direction:column;padding:0}.datepicker-controls{display:flex;justify-content:space-between;width:280px;margin:0 auto}.datepicker-controls .selects-container{display:flex}.datepicker-controls .select-wrapper input{border-bottom:none;text-align:center;margin:0}.datepicker-controls .select-wrapper input:focus{border-bottom:none}.datepicker-controls .select-wrapper .caret{display:none}.datepicker-controls .select-year input{width:50px}.datepicker-controls .select-month input{width:70px}.month-next,.month-prev{margin-top:4px;cursor:pointer;background-color:transparent;border:none}.datepicker-date-display{flex:1 auto;background-color:#26a69a;color:#fff;padding:20px 22px;font-weight:500}.datepicker-date-display .year-text{display:block;font-size:1.5rem;line-height:25px;color:hsla(0,0%,100%,.7)}.datepicker-date-display .date-text{display:block;font-size:2.8rem;line-height:47px;font-weight:500}.datepicker-calendar-container{flex:2.5 auto}.datepicker-table{width:280px;font-size:1rem;margin:0 auto}.datepicker-table thead{border-bottom:none}.datepicker-table th{padding:10px 5px;text-align:center}.datepicker-table tr{border:none}.datepicker-table abbr{text-decoration:none;color:#999}.datepicker-table td{border-radius:50%;padding:0}.datepicker-table td.is-today{color:#26a69a}.datepicker-table td.is-selected{background-color:#26a69a;color:#fff}.datepicker-table td.is-disabled,.datepicker-table td.is-outside-current-month{color:rgba(0,0,0,.3);pointer-events:none}.datepicker-day-button{background-color:transparent;border:none;line-height:38px;display:block;width:100%;border-radius:50%;padding:0 5px;cursor:pointer;color:inherit}.datepicker-day-button:focus{background-color:rgba(43,161,150,.25)}.datepicker-footer{width:280px;margin:0 auto;padding-bottom:5px;display:flex;justify-content:space-between}.datepicker-cancel,.datepicker-clear,.datepicker-done,.datepicker-today{color:#26a69a;padding:0 1rem}.datepicker-clear{color:#f44336}@media only screen and (min-width:601px){.datepicker-modal{max-width:625px}.datepicker-container.modal-content{flex-direction:row}.datepicker-date-display{flex:0 1 270px}.datepicker-controls,.datepicker-footer,.datepicker-table{width:320px}.datepicker-day-button{line-height:44px}}.timepicker-modal{max-width:325px;max-height:none}.timepicker-container.modal-content{display:flex;flex-direction:column;padding:0}.text-primary{color:#fff}.timepicker-digital-display{flex:1 auto;background-color:#26a69a;padding:10px;font-weight:300}.timepicker-text-container{font-size:4rem;font-weight:700;text-align:center;color:hsla(0,0%,100%,.6);font-weight:400;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.timepicker-span-am-pm div,.timepicker-span-hours,.timepicker-span-minutes{cursor:pointer}.timepicker-span-hours{margin-right:3px}.timepicker-span-minutes{margin-left:3px}.timepicker-display-am-pm{font-size:1.3rem;position:absolute;right:1rem;bottom:1rem;font-weight:400}.timepicker-analog-display{flex:2.5 auto}.timepicker-plate{background-color:#eee;border-radius:50%;width:270px;height:270px;overflow:visible;position:relative;margin:25px auto 5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.timepicker-canvas,.timepicker-dial{position:absolute;left:0;right:0;top:0;bottom:0}.timepicker-minutes{visibility:hidden}.timepicker-tick{border-radius:50%;color:rgba(0,0,0,.87);line-height:40px;text-align:center;width:40px;height:40px;position:absolute;cursor:pointer;font-size:15px}.timepicker-tick.active,.timepicker-tick:hover{background-color:rgba(38,166,154,.25)}.timepicker-dial{transition:transform .35s,opacity .35s}.timepicker-dial-out{opacity:0}.timepicker-dial-out.timepicker-hours{transform:scale(1.1)}.timepicker-dial-out.timepicker-minutes{transform:scale(.8)}.timepicker-canvas{transition:opacity 175ms}.timepicker-canvas line{stroke:#26a69a;stroke-width:4;stroke-linecap:round}.timepicker-canvas-out{opacity:.25}.timepicker-canvas-bearing,.timepicker-canvas-bg{stroke:none;fill:#26a69a}.timepicker-footer{margin:0 auto;padding:5px 1rem;display:flex;justify-content:space-between}.timepicker-clear{color:#f44336}.timepicker-close{color:#26a69a}.timepicker-clear,.timepicker-close{padding:0 20px}@media only screen and (min-width:601px){.timepicker-modal{max-width:600px}.timepicker-container.modal-content{flex-direction:row}.timepicker-text-container{top:32%}.timepicker-display-am-pm{position:relative;right:auto;bottom:auto;text-align:center;margin-top:1.2rem}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("1d7e0b14", content, true)

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "a,button,h1,h2,h3,h4,h5,h6,p,span{margin:0;padding:0}button{border:none;border-spacing:0;color:#26589f;font-size:16px;font-weight:400;text-decoration:none;text-indent:0}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("5444a184", content, true)

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "section{width:100%}a{cursor:pointer}img{-o-object-fit:cover;object-fit:cover}label{margin:-6px 0 0}embed,iframe,object{max-width:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("21aadd48", content, true)

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tabs .indicator{display:none}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("eca213bc", content, true)

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#toast-container{max-width:400px;top:2%;right:2%}@media only screen and (max-width:992px){#toast-container{top:auto;right:auto}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("3778d6a0", content, true)

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".dropdown-content li>a,.dropdown-content li>span{font-size:15px;color:rgba(0,0,0,.87)}.select-wrapper input.select-dropdown,.select-wrapper input.select-dropdown:focus{border-bottom:1px solid rgba(0,0,0,.87)}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("427ea722", content, true)

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".recaptcha{position:fixed;top:50%}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("2b09f80a", content, true)

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "::-webkit-scrollbar{width:10px;height:10px}::-webkit-scrollbar-button{width:0;height:0}::-webkit-scrollbar-thumb{background:rgba(141,141,142,.8);border:none}::-webkit-scrollbar-thumb:hover{background:#8d8d8e}::-webkit-scrollbar-track{background:#f5f5f5;border:none}::-webkit-scrollbar-corner{background:transparent}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(65);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("143b6b26", content, true)

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(13);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(66);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "@font-face{font-family:\"Material Icons\";font-style:normal;font-weight:400;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\")}.material-icons{font-family:\"Material Icons\",serif;font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/material-icons.5f14e6d.woff2";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("3c029590", content, true)

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(13);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(69);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "@font-face{font-family:\"Days One\";font-style:normal;font-weight:400;font-display:swap;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\")}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/days-one-regular.e5f2e04.woff2";

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authentication_vue_vue_type_style_index_0_id_9b1bd5dc_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authentication_vue_vue_type_style_index_0_id_9b1bd5dc_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authentication_vue_vue_type_style_index_0_id_9b1bd5dc_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authentication_vue_vue_type_style_index_0_id_9b1bd5dc_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authentication_vue_vue_type_style_index_0_id_9b1bd5dc_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(13);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(39);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".content-wrapper[data-v-9b1bd5dc]{height:100vh;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "),#3970e5}.auth-progress[data-v-9b1bd5dc]{position:fixed;top:0;margin:0;display:none}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_style_index_0_id_840d612c_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_style_index_0_id_840d612c_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_style_index_0_id_840d612c_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_style_index_0_id_840d612c_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_style_index_0_id_840d612c_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".dropdown[data-v-840d612c]{top:56px;width:100%;display:none;position:absolute;flex-direction:column;align-items:flex-start;justify-content:space-between;background-color:#fff;z-index:99;border-bottom-left-radius:3px;border-bottom-right-radius:3px}.dropdown_is-shown[data-v-840d612c]{display:flex}.dropdown__content[data-v-840d612c]{background-size:cover;z-index:99;width:100%;height:61vh;overflow-y:scroll}.dropdown__search-type[data-v-840d612c]{z-index:99;background-color:#fff;width:100%}.dropdown__list[data-v-840d612c]{width:100%;height:100%;display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column}[dir=ltr] .dropdown__list-item[data-v-840d612c]{text-align:left}[dir=rtl] .dropdown__list-item[data-v-840d612c]{text-align:right}.dropdown__list-item[data-v-840d612c]{color:#1f1f23;width:100%;padding:20px;transition:0s;cursor:pointer;transition:.4s ease;border-bottom:1px solid #bfbfbf;background-color:#fff;display:flex;justify-content:flex-start;align-items:center;flex-direction:row}.dropdown__list-item:hover .dropdown__icon[data-v-840d612c]{color:#ffa300}.dropdown__icon[data-v-840d612c]{margin:0 14px 0 0}.dropdown .cards[data-v-840d612c]{padding:10px 0 10px 10px;width:100%;cursor:pointer;transition:.4s ease;border-bottom:1px solid #bfbfbf;background-color:#fff}.dropdown .cards[data-v-840d612c]:hover{border-bottom:1px solid #234dad}.dropdown .cards__wrapper[data-v-840d612c]{display:flex;justify-content:flex-start;align-items:normal;flex-direction:row}@media only screen and (max-width:400px){.dropdown .cards__wrapper[data-v-840d612c]{flex-direction:column}}.dropdown .cards__image[data-v-840d612c]{margin:0 20px 0 0;height:125px;width:84px;display:block;background-color:#3970e5}@media only screen and (max-width:400px){.dropdown .cards__image[data-v-840d612c]{margin:0 0 10px}}[dir=ltr] .dropdown .cards__value[data-v-840d612c]{text-align:left}[dir=rtl] .dropdown .cards__value[data-v-840d612c]{text-align:right}.dropdown .cards__value[data-v-840d612c]{line-height:30px}[dir=ltr] .dropdown .cards__title[data-v-840d612c]{text-align:left}[dir=rtl] .dropdown .cards__title[data-v-840d612c]{text-align:right}.dropdown .cards__title[data-v-840d612c]{color:#234dad;font-weight:700;font-size:16px;line-height:30px}.dropdown .cards__description[data-v-840d612c]{color:#1f1f23;display:flex;flex-direction:column;align-items:flex-start}@media only screen and (max-width:400px){.dropdown .cards__description[data-v-840d612c]{max-width:90%}}.overlay[data-v-840d612c]{z-index:1;top:58px;left:0;position:fixed;background-color:rgba(0,0,0,.6)}.loader[data-v-840d612c],.overlay[data-v-840d612c]{width:100%;height:100%}.loader[data-v-840d612c]{color:#1f1f23;z-index:99;background-color:#fff;font-size:20px;display:flex;justify-content:center;align-items:center;flex-direction:column}.loader__progress[data-v-840d612c]{position:absolute;top:0;left:0;margin:0}.active .dropdown__icon[data-v-840d612c]{color:#ffa300}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_id_793f9da0_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_id_793f9da0_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_id_793f9da0_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_id_793f9da0_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_id_793f9da0_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".search-bar[data-v-793f9da0]{width:100%;position:relative}.search-bar__nav[data-v-793f9da0]{width:100%;height:34px}.search-bar__nav[data-v-793f9da0],.search-bar__wrapper[data-v-793f9da0]{border-radius:3px}.search-bar__field[data-v-793f9da0]{border-radius:3px;background-color:#f5f5f5}.search-bar__input[data-v-793f9da0]{border-radius:3px!important;padding-left:50px!important;width:calc(100% - 50px)!important}.search-bar__input[data-v-793f9da0]::-moz-placeholder{color:#555!important}.search-bar__input[data-v-793f9da0]:-ms-input-placeholder{color:#555!important}.search-bar__input[data-v-793f9da0]::placeholder{color:#555!important}.search-bar__label[data-v-793f9da0]{margin:0;left:14px!important}.search-bar__icon[data-v-793f9da0]{height:34px;line-height:34px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_458fd1da_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_458fd1da_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_458fd1da_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_458fd1da_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_458fd1da_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".navbar[data-v-458fd1da]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:58px;line-height:58px;background-color:#234dad;top:0;position:fixed;z-index:99;padding:0 40px}@media only screen and (max-width:640px){.navbar[data-v-458fd1da]{padding:0 20px}}.navbar__wrapper[data-v-458fd1da]{width:100%;display:grid;grid-template-columns:200px minmax(auto,1220px) 200px;grid-gap:40px;align-items:center;justify-content:space-between}@media only screen and (max-width:1782px){.navbar__wrapper[data-v-458fd1da]{grid-template-columns:200px minmax(auto,1220px) 87px}}@media only screen and (max-width:768px){.navbar__wrapper[data-v-458fd1da]{grid-gap:20px;grid-template-columns:minmax(auto,1220px) 87px}}@media only screen and (max-width:560px){.navbar__wrapper[data-v-458fd1da]{grid-template-columns:minmax(auto,1220px) 40px}}.navbar__logo[data-v-458fd1da]{font-size:26px;color:#f5f5f5;font-family:\"Days One\",sans-serif}@media only screen and (max-width:768px){.navbar__logo[data-v-458fd1da]{display:none}}.navbar__sign-in-link[data-v-458fd1da]{width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-left:auto;display:flex;justify-content:flex-end;align-items:center;flex-direction:row}@media only screen and (max-width:560px){.navbar__sign-in-link[data-v-458fd1da]{display:none}}.navbar__sign-in-link:hover .navbar__icon[data-v-458fd1da]{transform:translateX(4px)}.navbar__sign-in-link_mobile[data-v-458fd1da]{display:none}@media only screen and (max-width:560px){.navbar__sign-in-link_mobile[data-v-458fd1da]{display:block}}.navbar__icon[data-v-458fd1da]{margin:0 0 0 6px;height:54px;line-height:54px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterNote_vue_vue_type_style_index_0_id_3f7feff9_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterNote_vue_vue_type_style_index_0_id_3f7feff9_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterNote_vue_vue_type_style_index_0_id_3f7feff9_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterNote_vue_vue_type_style_index_0_id_3f7feff9_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterNote_vue_vue_type_style_index_0_id_3f7feff9_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".footer-note[data-v-3f7feff9]{padding:14px 20px;background-color:#1c3e90}.footer-note__container[data-v-3f7feff9]{display:flex;justify-content:center;align-items:center;flex-direction:row}.footer-note__text[data-v-3f7feff9]{margin:0 4px 0 0;color:#f5f5f5}.footer-note__link[data-v-3f7feff9]{color:#f5f5f5}.footer-note__link[data-v-3f7feff9]:hover{opacity:.6}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterMainInfo_vue_vue_type_style_index_0_id_804ab80e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterMainInfo_vue_vue_type_style_index_0_id_804ab80e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterMainInfo_vue_vue_type_style_index_0_id_804ab80e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterMainInfo_vue_vue_type_style_index_0_id_804ab80e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterMainInfo_vue_vue_type_style_index_0_id_804ab80e_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".btn.footer-main-info__link_decor[data-v-804ab80e],.btn.shadow-btn[data-v-804ab80e]{box-shadow:2px 2px 2px rgba(0,0,0,.75)}.btn.footer-main-info__link_decor[data-v-804ab80e]:hover,.btn.hover-btn[data-v-804ab80e]:hover{filter:brightness(100%)}.btn.focus-btn[data-v-804ab80e]:focus,.btn.footer-main-info__link_decor[data-v-804ab80e]:focus{background:#26a69a;box-shadow:1px 1px 1px rgba(0,0,0,.75)}[dir=ltr] .footer-main-info[data-v-804ab80e]{text-align:left}[dir=rtl] .footer-main-info[data-v-804ab80e]{text-align:right}.footer-main-info[data-v-804ab80e]{padding:0;background-color:#234dad}.footer-main-info__container[data-v-804ab80e]{width:100%;max-width:1300px;margin:0 auto;padding:40px;display:grid;grid-gap:40px;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;grid-template-columns:repeat(3,1fr)}@media only screen and (max-width:768px){.footer-main-info__container[data-v-804ab80e]{grid-template-columns:1fr 1fr}}@media only screen and (max-width:640px){.footer-main-info__container[data-v-804ab80e]{grid-template-columns:1fr;justify-content:center}}.footer-main-info__title[data-v-804ab80e]{padding:0 0 8px}.footer-main-info__subtitle[data-v-804ab80e]{border-bottom:1px solid rgba(255,163,0,.6)}.footer-main-info__link[data-v-804ab80e]{margin:8px 0 0;color:#f5f5f5}.footer-main-info__link[data-v-804ab80e]:hover{opacity:.6}.footer-main-info__link_disabled[data-v-804ab80e]{pointer-events:none;cursor:pointer;opacity:.8}.footer-main-info__link_decor[data-v-804ab80e]{margin:16px 0 0}.footer-main-info__item[data-v-804ab80e]{height:100%;padding:0 24px 0 0;justify-content:flex-start!important;border-right:1px solid hsla(0,0%,88.2%,.2);display:flex;justify-content:center;align-items:flex-start;flex-direction:column}.footer-main-info__item[data-v-804ab80e]:last-of-type{border:none}@media only screen and (max-width:768px){.footer-main-info__item[data-v-804ab80e]{border:none;padding:0}}.footer-main-info__description[data-v-804ab80e]{margin:8px 0 0;max-width:300px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterCategories_vue_vue_type_style_index_0_id_403f19f5_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterCategories_vue_vue_type_style_index_0_id_403f19f5_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterCategories_vue_vue_type_style_index_0_id_403f19f5_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterCategories_vue_vue_type_style_index_0_id_403f19f5_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterCategories_vue_vue_type_style_index_0_id_403f19f5_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".footer-categories[data-v-403f19f5]{background-color:hsla(0,0%,96.1%,.96078)}[dir=ltr] .footer-categories__container[data-v-403f19f5]{text-align:left}[dir=rtl] .footer-categories__container[data-v-403f19f5]{text-align:right}.footer-categories__container[data-v-403f19f5]{display:grid;width:100%;justify-content:space-between;grid-gap:40px;grid-template-columns:repeat(3,1fr);max-width:1300px;margin:0 auto;padding:40px}@media only screen and (max-width:768px){.footer-categories__container[data-v-403f19f5]{grid-template-columns:1fr 1fr}}@media only screen and (max-width:640px){.footer-categories__container[data-v-403f19f5]{grid-template-columns:1fr}}.footer-categories-item[data-v-403f19f5]{display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column}[dir=ltr] .footer-categories-item__title[data-v-403f19f5]{text-align:left}[dir=rtl] .footer-categories-item__title[data-v-403f19f5]{text-align:right}.footer-categories-item__title[data-v-403f19f5]{color:#1f1f23;font-size:16px;padding:0 0 8px;width:100%;border-bottom:1px solid rgba(31,31,35,.2);display:flex;justify-content:space-between;align-items:center;flex-direction:row}.footer-categories-item__title[data-v-403f19f5]:hover{color:#ffa300}.footer-categories-item__title:hover .pre-footer-top-anime__icon[data-v-403f19f5]{color:inherit}.footer-categories-item__content[data-v-403f19f5]{margin:8px 0 0;display:flex;justify-content:center;align-items:flex-start;flex-direction:row}.footer-categories-item__digit[data-v-403f19f5]{margin:0 8px 0 0}.footer-categories-item__link[data-v-403f19f5]{color:#234dad}.footer-categories-item__link[data-v-403f19f5]:hover{-webkit-text-decoration:underline #234dad;text-decoration:underline #234dad}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainFooter_vue_vue_type_style_index_0_id_acd28452_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainFooter_vue_vue_type_style_index_0_id_acd28452_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainFooter_vue_vue_type_style_index_0_id_acd28452_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainFooter_vue_vue_type_style_index_0_id_acd28452_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainFooter_vue_vue_type_style_index_0_id_acd28452_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".main-footer[data-v-acd28452]{width:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authorized_vue_vue_type_style_index_0_id_54a61e74_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authorized_vue_vue_type_style_index_0_id_54a61e74_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authorized_vue_vue_type_style_index_0_id_54a61e74_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authorized_vue_vue_type_style_index_0_id_54a61e74_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Authorized_vue_vue_type_style_index_0_id_54a61e74_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".content-wrapper[data-v-54a61e74]{padding:54px 0 0;background-color:#fff;margin:0 auto;display:flex;justify-content:normal;align-items:center;flex-direction:column}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Unauthorized_vue_vue_type_style_index_0_id_4fd6ae88_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Unauthorized_vue_vue_type_style_index_0_id_4fd6ae88_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Unauthorized_vue_vue_type_style_index_0_id_4fd6ae88_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Unauthorized_vue_vue_type_style_index_0_id_4fd6ae88_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Unauthorized_vue_vue_type_style_index_0_id_4fd6ae88_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".content-wrapper[data-v-4fd6ae88]{padding:54px 0 0;background-color:#fff;margin:0 auto;display:flex;justify-content:normal;align-items:center;flex-direction:column}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
const state = () => ({
  error: null
});
const mutations = {
  SET_ERROR(state, error) {
    state.error = error;
  },

  CLEAR_ERROR(state) {
    state.error = null;
  }

};
const actions = {
  async addToLibrary({
    dispatch
  }, {
    type,
    status,
    id
  }) {
    try {
      const uid = await dispatch('auth/getUid');
      if (type === 'Manga') type = 'manga';else type = 'anime';
      await this.$fire.database.ref(`/users/${uid}/${type}/${id}/`).set({
        status
      });
      M.toast({
        html: 'Added to the library',
        classes: 'green',
        displayLength: 10000
      });
    } catch (error) {
      throw error.message;
    }
  },

  computeRoute(ctx, result) {
    try {
      let type = result.type;
      const id = result.mal_id;
      const title = result.url.split('/').splice(-1, 1)[0].toLowerCase().split('_').join('-');

      if (type === undefined) {
        if (result.role || result.name_kanji) type = 'characters';else if ($nuxt.$router.app.$route.name === 'anime-id-title') type = 'anime';else if ($nuxt.$router.app.$route.name === 'manga-id-title') type = 'manga';
      } else if (type === 'manga') type = 'manga';else if (type === 'Manga') type = 'manga';else if (type === 'Novel') type = 'manga';else if (type === 'Manhwa') type = 'manga';else if (type === 'One-shot') type = 'manga';else if (type === 'Doujinshi') type = 'manga';else if (type !== 'Manga' && type !== 'manga') type = 'anime';

      $nuxt.$router.push({
        name: `${type}` + '-id-title',
        params: {
          id,
          title
        }
      });
    } catch (error) {
      throw error.message;
    }
  },

  computeRouteByGenre(ctx, {
    result,
    genre
  }) {
    try {
      let type = result.type;
      const id = genre.id;
      const title = genre.title.split('/').splice(-1, 1)[0].toLowerCase().split('_').join('-');

      switch (type) {
        case 'anime':
          type = 'anime-genres';
          break;

        case 'manga':
          type = 'manga-genres';
          break;
      }

      $nuxt.$router.push({
        name: `${type}` + '-id-title',
        params: {
          id,
          title
        }
      });
    } catch (error) {
      throw error.message;
    }
  }

};
const getters = {
  error: state => state.error
};

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
const state = () => ({
  userInfo: []
});
const mutations = {
  SET_USER_INFO(state, userInfo) {
    state.userInfo = userInfo;
  }

};
const actions = {
  async loadUserInfo({
    dispatch,
    commit
  }) {
    try {
      const uid = await dispatch('getUid');
      const userInfoResponse = await this.$fire.database.ref(`/users/${uid}/info/username`).on('value', data => {
        commit('SET_USER_INFO', data.val());
      });
    } catch (error) {
      throw error.message;
    }
  }

};
const getters = {
  getUserInfo: state => state.userInfo
};

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony import */ var jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0__);

const state = () => ({
  mangaById: [],
  mangaGenre: [],
  mangaSearched: [],
  mangaFavorite: [],
  mangaFavoriteCategories: [],
  mangaCharacters: [],
  mangaRecommendationsById: []
});
const mutations = {
  SET_MANGA_GENRE(state, mangaGenre) {
    state.mangaGenre = mangaGenre;
  },

  SET_MANGA_CHARACTERS(state, mangaCharacters) {
    state.mangaCharacters = mangaCharacters;
  },

  SET_MANGA_SEARCHED(state, mangaSearched) {
    state.mangaSearched = mangaSearched;
  },

  SET_MANGA_BY_ID(state, mangaById) {
    state.mangaById = mangaById;
  },

  SET_MANGA_FAVORITE(state, mangaFavorite) {
    state.mangaFavorite = mangaFavorite;
  },

  SET_MANGA_FAVORITE_CATEGORIES(state, mangaFavoriteCategories) {
    state.mangaFavoriteCategories = mangaFavoriteCategories;
  },

  SET_MANGA_RECOMMENDATIONS_BY_ID(state, mangaRecommendationsById) {
    state.mangaRecommendationsById = mangaRecommendationsById;
  }

};
const actions = {
  async loadMangaSearched(ctx, query) {
    try {
      const mangaSearchedResponse = await jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0___default.a.search('manga', query);
      const mangaSearched = mangaSearchedResponse.results;

      if (Array.isArray(mangaSearched) && mangaSearched.length > 0) {
        ctx.commit('SET_MANGA_SEARCHED', mangaSearched);
      } else {
        M.toast({
          html: 'Not found',
          classes: 'red',
          displayLength: 10000
        });
      }
    } catch (error) {
      throw error.message;
    }
  },

  async loadMangaGenre(ctx) {
    try {
      const mangaGenreResponse = await jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0___default.a.loadGenre('manga', $nuxt.$router.app.$route.params.id);
      const mangaGenre = mangaGenreResponse;
      ctx.commit('SET_MANGA_GENRE', mangaGenre);
    } catch (error) {
      throw error.message;
    }
  },

  async loadMangaCharacters(ctx) {
    try {
      const mangaCharactersResponse = await jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0___default.a.loadManga($nuxt.$router.app.$route.params.id, 'characters');
      const mangaCharacters = mangaCharactersResponse;
      ctx.commit('SET_MANGA_CHARACTERS', mangaCharacters);
    } catch (error) {
      throw error.message;
    }
  },

  async loadMangaById(ctx) {
    try {
      const mangaResponse = await jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0___default.a.loadManga($nuxt.$router.app.$route.params.id);
      const mangaById = mangaResponse;
      ctx.commit('SET_MANGA_BY_ID', mangaById);
    } catch (error) {
      throw error.message;
    }
  },

  async loadMangaFavorite(ctx) {
    try {
      const favoriteMangaResponse = await jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0___default.a.loadTop('manga', 1, 'favorite');
      const mangaFavorite = favoriteMangaResponse.top;
      ctx.commit('SET_MANGA_FAVORITE', mangaFavorite);
    } catch (error) {
      throw error.message;
    }
  },

  async loadMangaFavoriteCategories(ctx) {
    try {
      const favoriteMangaResponseCategories = await jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0___default.a.loadTop('manga', 1, 'favorite');
      const mangaFavoriteCategories = favoriteMangaResponseCategories.top.slice(0, 9);
      ctx.commit('SET_MANGA_FAVORITE_CATEGORIES', mangaFavoriteCategories);
    } catch (error) {
      throw error.message;
    }
  },

  async loadMangaRecommendationsById(ctx) {
    try {
      const mangaRecommendationsResponse = await jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0___default.a.loadManga($nuxt.$router.app.$route.params.id, 'recommendations');
      const mangaRecommendationsById = mangaRecommendationsResponse;
      ctx.commit('SET_MANGA_RECOMMENDATIONS_BY_ID', mangaRecommendationsById);
    } catch (error) {
      throw error.message;
    }
  }

};
const getters = {
  getMangaGenre: state => state.mangaGenre,
  getMangaSearched: state => state.mangaSearched,
  getMangaCharacters: state => state.mangaCharacters,
  getMangaById: state => state.mangaById,
  getMangaFavorite: state => state.mangaFavorite,
  getMangaFavoriteCategories: state => state.mangaFavoriteCategories,
  getMangaRecommendationsById: state => state.mangaRecommendationsById
};

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony import */ var jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0__);

const state = () => ({
  charactersById: [],
  charactersFavorite: [],
  charactersFavoriteCategories: []
});
const mutations = {
  SET_CHARACTERS_BY_ID(state, charactersById) {
    state.charactersById = charactersById;
  },

  SET_CHARACTERS_FAVORITE(state, charactersFavorite) {
    state.charactersFavorite = charactersFavorite;
  },

  SET_CHARACTERS_FAVORITE_CATEGORIES(state, charactersFavoriteCategories) {
    state.charactersFavoriteCategories = charactersFavoriteCategories;
  }

};
const actions = {
  async loadCharactersById(ctx) {
    try {
      const characterResponse = await jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0___default.a.loadCharacter($nuxt.$router.app.$route.params.id);
      const charactersById = characterResponse;
      ctx.commit('SET_CHARACTERS_BY_ID', charactersById);
    } catch (error) {
      throw error.message;
    }
  },

  async loadCharactersFavorite(ctx) {
    try {
      const favoriteCharactersResponse = await jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0___default.a.loadTop('characters');
      const charactersFavorite = favoriteCharactersResponse.top;
      ctx.commit('SET_CHARACTERS_FAVORITE', charactersFavorite);
    } catch (error) {
      throw error.message;
    }
  },

  async loadCharactersFavoriteCategories(ctx) {
    try {
      const favoriteCharactersCategoriesResponse = await jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0___default.a.loadTop('characters');
      const charactersFavoriteCategories = favoriteCharactersCategoriesResponse.top.slice(0, 9);
      ctx.commit('SET_CHARACTERS_FAVORITE_CATEGORIES', charactersFavoriteCategories);
    } catch (error) {
      throw error.message;
    }
  }

};
const getters = {
  getCharactersById: state => state.charactersById,
  getCharactersFavorite: state => state.charactersFavorite,
  getCharactersFavoriteCategories: state => state.charactersFavoriteCategories
};

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);

const actions = {
  async getUid() {
    const user = await firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth().currentUser;
    return user ? user.uid : null;
  },

  async signIn({
    commit
  }, {
    email,
    password
  }) {
    try {
      await firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signInWithEmailAndPassword(email, password);
      $nuxt.$router.push('/');
    } catch (error) {
      commit('SET_ERROR', error, {
        root: true
      });
      document.querySelector('.auth-progress').style.display = 'none';
      document.querySelector('.preloader-wrapper').style.display = 'none';
    }
  },

  async signUp({
    dispatch,
    commit
  }, {
    email,
    password,
    username
  }) {
    try {
      await firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth().createUserWithEmailAndPassword(email, password);
      const uid = await dispatch('getUid');
      await firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.database().ref(`/users/${uid}/info`).set({
        username
      });
      $nuxt.$router.push('/');
    } catch (error) {
      commit('SET_ERROR', error, {
        root: true
      });
      document.querySelector('.auth-progress').style.display = 'none';
      document.querySelector('.preloader-wrapper').style.display = 'none';
    }
  },

  async signOut() {
    try {
      await firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth().signOut();
      await $nuxt.$router.go(0);
    } catch (error) {
      document.querySelector('.auth-progress').style.display = 'none';
      document.querySelector('.preloader-wrapper').style.display = 'none';
    }
  },

  async recoverPassword({
    commit
  }, {
    email
  }) {
    try {
      await firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth().sendPasswordResetEmail(email);
      $nuxt.$router.push('/');
    } catch (error) {
      commit('SET_ERROR', error, {
        root: true
      });
      document.querySelector('.auth-progress').style.display = 'none';
      document.querySelector('.preloader-wrapper').style.display = 'none';
    }
  },

  async deleteAccount() {
    try {
      var _firebase$auth$curren;

      await ((_firebase$auth$curren = firebase_app__WEBPACK_IMPORTED_MODULE_0___default.a.auth().currentUser) === null || _firebase$auth$curren === void 0 ? void 0 : _firebase$auth$curren.delete());
      $nuxt.$router.push('/');
    } catch (error) {
      commit('SET_ERROR', error, {
        root: true
      });
    }
  }

};

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony import */ var jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0__);

const state = () => ({
  animeById: [],
  animeGenre: [],
  animeAiring: [],
  animeFavorite: [],
  animeSearched: [],
  animeUpcoming: [],
  animeFavoriteCategories: [],
  animeRecommendationsById: []
});
const mutations = {
  SET_ANIME_BY_ID(state, animeById) {
    state.animeById = animeById;
  },

  SET_ANIME_GENRE(state, animeGenre) {
    state.animeGenre = animeGenre;
  },

  SET_ANIME_AIRING(state, animeAiring) {
    state.animeAiring = animeAiring;
  },

  SET_ANIME_SEARCHED(state, animeSearched) {
    state.animeSearched = animeSearched;
  },

  SET_ANIME_FAVORITE(state, animeFavorite) {
    state.animeFavorite = animeFavorite;
  },

  SET_ANIME_FAVORITE_CATEGORIES(state, animeFavoriteCategories) {
    state.animeFavoriteCategories = animeFavoriteCategories;
  },

  SET_ANIME_UPCOMING(state, animeUpcoming) {
    state.animeUpcoming = animeUpcoming;
  },

  SET_ANIME_RECOMMENDATIONS_BY_ID(state, animeRecommendationsById) {
    state.animeRecommendationsById = animeRecommendationsById;
  }

};
const actions = {
  async loadAnimeGenre(ctx) {
    try {
      const animeGenreResponse = await jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0___default.a.loadGenre('anime', $nuxt.$route.params.id);
      const animeGenre = animeGenreResponse;
      ctx.commit('SET_ANIME_GENRE', animeGenre);
    } catch (error) {
      throw error.message;
    }
  },

  async loadAnimeSearched(ctx, query) {
    try {
      const animeSearchedResponse = await jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0___default.a.search('anime', query);
      const animeSearched = animeSearchedResponse.results;

      if (Array.isArray(animeSearched) && animeSearched.length > 0) {
        ctx.commit('SET_ANIME_SEARCHED', animeSearched);
      } else {
        M.toast({
          html: 'Not found',
          classes: 'red',
          displayLength: 10000
        });
      }
    } catch (error) {
      throw error.message;
    }
  },

  async loadAnimeById(ctx) {
    try {
      const animeResponse = await jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0___default.a.loadAnime($nuxt.$route.params.id);
      const animeById = animeResponse;
      ctx.commit('SET_ANIME_BY_ID', animeById);
    } catch (error) {
      throw error.message;
    }
  },

  async loadAnimeAiring(ctx) {
    try {
      const animeAiringResponse = await jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0___default.a.loadTop('anime', 1, 'airing');
      const animeAiring = animeAiringResponse.top;
      ctx.commit('SET_ANIME_AIRING', animeAiring);
    } catch (error) {
      throw error.message;
    }
  },

  async loadAnimeFavorite(ctx) {
    try {
      const favoriteAnimeResponse = await jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0___default.a.loadTop('anime', 1, 'favorite');
      const animeFavorite = favoriteAnimeResponse.top;
      ctx.commit('SET_ANIME_FAVORITE', animeFavorite);
    } catch (error) {
      throw error.message;
    }
  },

  async loadAnimeFavoriteCategories(ctx) {
    try {
      const favoriteAnimeCategoriesResponse = await jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0___default.a.loadTop('anime', 1, 'favorite');
      const animeFavoriteCategories = favoriteAnimeCategoriesResponse.top.slice(0, 9);
      ctx.commit('SET_ANIME_FAVORITE_CATEGORIES', animeFavoriteCategories);
    } catch (error) {
      throw error.message;
    }
  },

  async loadAnimeUpcoming(ctx) {
    try {
      const animeUpcomingResponse = await jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0___default.a.loadTop('anime', 1, 'upcoming');
      const animeUpcoming = animeUpcomingResponse.top;
      ctx.commit('SET_ANIME_UPCOMING', animeUpcoming);
    } catch (error) {
      throw error.message;
    }
  },

  async loadAnimeRecommendationsById(ctx) {
    try {
      const animeRecommendationsResponse = await jikanjs_lib_jikan_js__WEBPACK_IMPORTED_MODULE_0___default.a.loadAnime($nuxt.$route.params.id, 'recommendations');
      const animeRecommendationsById = animeRecommendationsResponse;
      ctx.commit('SET_ANIME_RECOMMENDATIONS_BY_ID', animeRecommendationsById);
    } catch (error) {
      throw error.message;
    }
  }

};
const getters = {
  getAnimeById: state => state.animeById,
  getAnimeGenre: state => state.animeGenre,
  getAnimeAiring: state => state.animeAiring,
  getAnimeSearched: state => state.animeSearched,
  getAnimeFavorite: state => state.animeFavorite,
  getAnimeFavoriteCategories: state => state.animeFavoriteCategories,
  getAnimeUpcoming: state => state.animeUpcoming,
  getAnimeRecommendationsById: state => state.animeRecommendationsById
};

/***/ }),
/* 96 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(34);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "@nuxt/ufo"
var ufo_ = __webpack_require__(7);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(35);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
middleware['layoutMiddleware'] = __webpack_require__(38);
middleware['layoutMiddleware'] = middleware['layoutMiddleware'].default || middleware['layoutMiddleware'];
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {}
    }; // Only set once

    if ( true && context.req) {
      app.context.req = context.req;
    }

    if ( true && context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
}
function stripTrailingSlash(path) {
  return path.replace(/\/+$/, '') || '/';
}
function isSamePath(p1, p2) {
  return stripTrailingSlash(p1) === stripTrailingSlash(p2);
}
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data));
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(10);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(19);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(12);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(11);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js
/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  return {
    x: 0,
    y: 0
  };
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _cd44ed4a = () => interopDefault(__webpack_require__.e(/* import() | pages/recovery/index */ 13).then(__webpack_require__.bind(null, 204)));

const _1c98a9c5 = () => interopDefault(__webpack_require__.e(/* import() | pages/sign-in/index */ 14).then(__webpack_require__.bind(null, 205)));

const _ba94608a = () => interopDefault(__webpack_require__.e(/* import() | pages/sign-up/index */ 15).then(__webpack_require__.bind(null, 206)));

const _b0b1c1ce = () => interopDefault(__webpack_require__.e(/* import() | pages/anime/airing/index */ 2).then(__webpack_require__.bind(null, 207)));

const _3539b04a = () => interopDefault(__webpack_require__.e(/* import() | pages/anime/top/index */ 4).then(__webpack_require__.bind(null, 208)));

const _2e1d8f5d = () => interopDefault(__webpack_require__.e(/* import() | pages/anime/upcoming/index */ 5).then(__webpack_require__.bind(null, 209)));

const _f2e8150c = () => interopDefault(__webpack_require__.e(/* import() | pages/characters/popular/index */ 7).then(__webpack_require__.bind(null, 210)));

const _7f7378ec = () => interopDefault(__webpack_require__.e(/* import() | pages/manga/top/index */ 12).then(__webpack_require__.bind(null, 211)));

const _ceea3a3c = () => interopDefault(__webpack_require__.e(/* import() | pages/anime/genres/_id/_title/index */ 3).then(__webpack_require__.bind(null, 212)));

const _5374c622 = () => interopDefault(__webpack_require__.e(/* import() | pages/manga/genres/_id/_title/index */ 11).then(__webpack_require__.bind(null, 213)));

const _d5e024e2 = () => interopDefault(__webpack_require__.e(/* import() | pages/anime/_id/_title/index */ 1).then(__webpack_require__.bind(null, 214)));

const _05473863 = () => interopDefault(__webpack_require__.e(/* import() | pages/characters/_id/_title/index */ 6).then(__webpack_require__.bind(null, 215)));

const _a064f3d2 = () => interopDefault(__webpack_require__.e(/* import() | pages/library/_type/_status/index */ 9).then(__webpack_require__.bind(null, 216)));

const _0993324f = () => interopDefault(__webpack_require__.e(/* import() | pages/manga/_id/_title/index */ 10).then(__webpack_require__.bind(null, 217)));

const _b548f5c2 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 8).then(__webpack_require__.bind(null, 218))); // TODO: remove in Nuxt 3


const emptyFn = () => {};

const originalPush = external_vue_router_default.a.prototype.push;

external_vue_router_default.a.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort);
};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/recovery",
    component: _cd44ed4a,
    name: "recovery"
  }, {
    path: "/sign-in",
    component: _1c98a9c5,
    name: "sign-in"
  }, {
    path: "/sign-up",
    component: _ba94608a,
    name: "sign-up"
  }, {
    path: "/anime/airing",
    component: _b0b1c1ce,
    name: "anime-airing"
  }, {
    path: "/anime/top",
    component: _3539b04a,
    name: "anime-top"
  }, {
    path: "/anime/upcoming",
    component: _2e1d8f5d,
    name: "anime-upcoming"
  }, {
    path: "/characters/popular",
    component: _f2e8150c,
    name: "characters-popular"
  }, {
    path: "/manga/top",
    component: _7f7378ec,
    name: "manga-top"
  }, {
    path: "/anime/genres/:id?/:title",
    component: _ceea3a3c,
    name: "anime-genres-id-title"
  }, {
    path: "/manga/genres/:id?/:title",
    component: _5374c622,
    name: "manga-genres-id-title"
  }, {
    path: "/anime/:id?/:title",
    component: _d5e024e2,
    name: "anime-id-title"
  }, {
    path: "/characters/:id?/:title",
    component: _05473863,
    name: "characters-id-title"
  }, {
    path: "/library/:type?/:status",
    component: _a064f3d2,
    name: "library-type-status"
  }, {
    path: "/manga/:id?/:title",
    component: _0993324f,
    name: "manga-id-title"
  }, {
    path: "/",
    component: _b548f5c2,
    name: "index"
  }],
  fallback: false
};

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = Object(ufo_["decode"])(obj[key]);
    }
  }
}

function createRouter() {
  const router = new external_vue_router_default.a(routerOptions);
  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(ufo_["normalizeURL"])(to);
    }

    const r = resolve(to, current, append);

    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query);
    }

    return r;
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "8204a050"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(44)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "6ca8170c"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/swiper/css/swiper.min.css
var swiper_min = __webpack_require__(46);

// EXTERNAL MODULE: ./node_modules/materialize-css/dist/css/materialize.min.css
var materialize_min = __webpack_require__(48);

// EXTERNAL MODULE: ./assets/styles/base/reset.sass
var base_reset = __webpack_require__(50);

// EXTERNAL MODULE: ./assets/styles/base/base.sass
var base_base = __webpack_require__(52);

// EXTERNAL MODULE: ./assets/styles/state/tabs.sass
var tabs = __webpack_require__(54);

// EXTERNAL MODULE: ./assets/styles/state/toast.sass
var toast = __webpack_require__(56);

// EXTERNAL MODULE: ./assets/styles/state/select.sass
var state_select = __webpack_require__(58);

// EXTERNAL MODULE: ./assets/styles/state/recaptcha.sass
var recaptcha = __webpack_require__(60);

// EXTERNAL MODULE: ./assets/styles/theme/scrollbar.sass
var scrollbar = __webpack_require__(62);

// EXTERNAL MODULE: ./assets/styles/theme/fonts/material-icons.sass
var material_icons = __webpack_require__(64);

// EXTERNAL MODULE: ./assets/styles/theme/fonts/days-one-regular.sass
var days_one_regular = __webpack_require__(67);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/Authentication.vue?vue&type=template&id=9b1bd5dc&scoped=true&lang=pug&
var Authenticationvue_type_template_id_9b1bd5dc_scoped_true_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content-wrapper"},[_vm._ssrNode("<div class=\"progress auth-progress\" data-v-9b1bd5dc><div class=\"indeterminate\" data-v-9b1bd5dc></div></div>"),_c('router-view')],2)}
var Authenticationvue_type_template_id_9b1bd5dc_scoped_true_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/Authentication.vue?vue&type=template&id=9b1bd5dc&scoped=true&lang=pug&

// CONCATENATED MODULE: ./utils/messages.js
/* harmony default export */ var messages = ({
  'auth/user-not-found': 'User not found',
  'auth/wrong-password': 'Wrong password',
  'auth/email-already-in-use': 'The email address is already in use by another account',
  'auth/too-many-requests': 'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later'
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/Authentication.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Authenticationvue_type_script_lang_js_ = ({
  name: 'Authentication',
  computed: {
    error() {
      return this.$store.getters.error;
    }

  },
  watch: {
    error(fireBaseError) {
      this.$error(messages[fireBaseError.code]);
    }

  },

  mounted() {
    M.AutoInit();
  }

});
// CONCATENATED MODULE: ./layouts/Authentication.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_Authenticationvue_type_script_lang_js_ = (Authenticationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/Authentication.vue



function Authentication_injectStyles (context) {
  
  var style0 = __webpack_require__(70)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Authentication_component = Object(componentNormalizer["a" /* default */])(
  layouts_Authenticationvue_type_script_lang_js_,
  Authenticationvue_type_template_id_9b1bd5dc_scoped_true_lang_pug_render,
  Authenticationvue_type_template_id_9b1bd5dc_scoped_true_lang_pug_staticRenderFns,
  false,
  Authentication_injectStyles,
  "9b1bd5dc",
  "58c15f62"
  
)

/* harmony default export */ var Authentication = (Authentication_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/Authorized.vue?vue&type=template&id=54a61e74&scoped=true&lang=pug&
var Authorizedvue_type_template_id_54a61e74_scoped_true_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content-wrapper"},[_c('navbar'),_c('router-view',{key:this.$route.path}),_c('main-footer')],1)}
var Authorizedvue_type_template_id_54a61e74_scoped_true_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/Authorized.vue?vue&type=template&id=54a61e74&scoped=true&lang=pug&

// EXTERNAL MODULE: ./components/navigation/Navbar.vue + 4 modules
var Navbar = __webpack_require__(8);

// EXTERNAL MODULE: ./components/navigation/MainFooter.vue + 4 modules
var MainFooter = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/Authorized.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Authorizedvue_type_script_lang_js_ = ({
  name: 'Authorized',
  components: {
    Navbar: Navbar["default"],
    MainFooter: MainFooter["default"]
  },

  mounted() {
    M.AutoInit();
  }

});
// CONCATENATED MODULE: ./layouts/Authorized.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_Authorizedvue_type_script_lang_js_ = (Authorizedvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/Authorized.vue



function Authorized_injectStyles (context) {
  
  var style0 = __webpack_require__(86)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Authorized_component = Object(componentNormalizer["a" /* default */])(
  layouts_Authorizedvue_type_script_lang_js_,
  Authorizedvue_type_template_id_54a61e74_scoped_true_lang_pug_render,
  Authorizedvue_type_template_id_54a61e74_scoped_true_lang_pug_staticRenderFns,
  false,
  Authorized_injectStyles,
  "54a61e74",
  "15f39172"
  
)

/* harmony default export */ var Authorized = (Authorized_component.exports);

/* nuxt-component-imports */
installComponents(Authorized_component, {Navbar: __webpack_require__(8).default,MainFooter: __webpack_require__(9).default})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/Unauthorized.vue?vue&type=template&id=4fd6ae88&scoped=true&lang=pug&
var Unauthorizedvue_type_template_id_4fd6ae88_scoped_true_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content-wrapper"},[_c('navbar'),_c('router-view',{key:this.$route.path}),_c('main-footer')],1)}
var Unauthorizedvue_type_template_id_4fd6ae88_scoped_true_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/Unauthorized.vue?vue&type=template&id=4fd6ae88&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/Unauthorized.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Unauthorizedvue_type_script_lang_js_ = ({
  name: 'Unauthorized',
  components: {
    Navbar: Navbar["default"],
    MainFooter: MainFooter["default"]
  },

  mounted() {
    M.AutoInit();
  }

});
// CONCATENATED MODULE: ./layouts/Unauthorized.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_Unauthorizedvue_type_script_lang_js_ = (Unauthorizedvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/Unauthorized.vue



function Unauthorized_injectStyles (context) {
  
  var style0 = __webpack_require__(88)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Unauthorized_component = Object(componentNormalizer["a" /* default */])(
  layouts_Unauthorizedvue_type_script_lang_js_,
  Unauthorizedvue_type_template_id_4fd6ae88_scoped_true_lang_pug_render,
  Unauthorizedvue_type_template_id_4fd6ae88_scoped_true_lang_pug_staticRenderFns,
  false,
  Unauthorized_injectStyles,
  "4fd6ae88",
  "3fd626ea"
  
)

/* harmony default export */ var Unauthorized = (Unauthorized_component.exports);

/* nuxt-component-imports */
installComponents(Unauthorized_component, {Navbar: __webpack_require__(8).default,MainFooter: __webpack_require__(9).default})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/layouts/default.vue?vue&type=template&id=0040005c&
var defaultvue_type_template_id_0040005c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('Nuxt')}
var defaultvue_type_template_id_0040005c_staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/layouts/default.vue?vue&type=template&id=0040005c&

// CONCATENATED MODULE: ./.nuxt/layouts/default.vue

var script = {}


/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_0040005c_render,
  defaultvue_type_template_id_0040005c_staticRenderFns,
  false,
  null,
  null,
  "2e8b01fc"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js



















const layouts = {
  "_Authentication": sanitizeComponent(Authentication),
  "_Authorized": sanitizeComponent(Authorized),
  "_Unauthorized": sanitizeComponent(Unauthorized),
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(90), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(91), 'users/index.js');
  resolveStoreModules(__webpack_require__(92), 'manga/index.js');
  resolveStoreModules(__webpack_require__(93), 'characters/index.js');
  resolveStoreModules(__webpack_require__(94), 'auth/index.js');
  resolveStoreModules(__webpack_require__(95), 'anime/index.js'); // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  const namespace = filename.replace(/\.(js|mjs|ts)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  const isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  const storeModule = getStoreModule(store_store, namespaces);

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js

const globalComponents = {};

for (const name in globalComponents) {
  external_vue_default.a.component(name, globalComponents[name]);
}
// EXTERNAL MODULE: external "cookie-universal"
var external_cookie_universal_ = __webpack_require__(36);
var external_cookie_universal_default = /*#__PURE__*/__webpack_require__.n(external_cookie_universal_);

// CONCATENATED MODULE: ./.nuxt/cookie-universal-nuxt.js

/* harmony default export */ var cookie_universal_nuxt = (({
  req,
  res
}, inject) => {
  const options = {
    "alias": "cookies",
    "parseJSON": true
  };
  inject(options.alias, external_cookie_universal_default()(req, res, options.parseJSON));
});
// CONCATENATED MODULE: ./.nuxt/firebase/app.js
async function createApp(config, {
  res
}) {
  const firebaseModule = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 6, 7));
  const firebase = firebaseModule.default;
  /*****************************************************
  * Without "Auth SSR serverLogin Option" -> normal init
  *****************************************************/

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const session = firebase.apps[0];
  return {
    firebase,
    session
  };
}
// CONCATENATED MODULE: ./.nuxt/firebase/service.auth.js
/* harmony default export */ var service_auth = (async function (session, firebase, ctx, inject) {
  await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 101, 7));
  const authService = session.auth();
  return authService;
});
// CONCATENATED MODULE: ./.nuxt/firebase/service.database.js
/* harmony default export */ var service_database = (async function (session) {
  await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 102, 7));
  const databaseService = session.database();
  return databaseService;
});
// CONCATENATED MODULE: ./.nuxt/firebase/index.js



const appConfig = {
  "apiKey": "AIzaSyCIPI4pf_bCw6vyUB7sg8ZWvU2MpCmR288",
  "authDomain": "otaku-library-b5dd4.firebaseapp.com",
  "databaseURL": "https:\u002F\u002Fotaku-library-b5dd4.firebaseio.com",
  "projectId": "otaku-library-b5dd4",
  "storageBucket": "otaku-library-b5dd4.appspot.com",
  "messagingSenderId": "75933468300",
  "appId": "1:75933468300:web:ea747d3df0d9d601a19da9",
  "measurementId": "G-P47VCZ10ZJ"
};
/* harmony default export */ var _nuxt_firebase = (async (ctx, inject) => {
  const {
    firebase,
    session
  } = await createApp(appConfig, ctx);
  let servicePromises = [];

  if (true) {
    servicePromises = [service_auth(session, firebase, ctx, inject), service_database(session, firebase, ctx, inject)];
  }

  if (false) {}

  const [auth, database] = await Promise.all(servicePromises);
  const fire = {
    auth: auth,
    database: database
  };
  inject('fireModule', firebase);
  ctx.$fireModule = firebase;
  inject('fire', fire);
  ctx.$fire = fire;
});

function forceInject(ctx, inject, key, value) {
  inject(key, value);
  const injectKey = '$' + key;
  ctx[injectKey] = value;

  if (typeof window !== "undefined") {
    window.$nuxt.$options[injectKey] = value;
  }
}
// CONCATENATED MODULE: ./utils/messages.plugin.js
/* harmony default export */ var messages_plugin = ({
  install(Vue) {
    Vue.prototype.$message = function (html) {
      M.toast({
        html,
        classes: 'green'
      });
    };

    Vue.prototype.$error = function (html) {
      M.toast({
        html: `[Error]: ${html}`,
        classes: 'red'
      });
    };
  }

});
// CONCATENATED MODULE: ./plugins/messages.js


external_vue_default.a.use(messages_plugin);
// CONCATENATED MODULE: ./plugins/vue-meta.js


external_vue_default.a.use(external_vue_meta_default.a);
// EXTERNAL MODULE: external "vuelidate"
var external_vuelidate_ = __webpack_require__(37);
var external_vuelidate_default = /*#__PURE__*/__webpack_require__.n(external_vuelidate_);

// CONCATENATED MODULE: ./plugins/vuelidate.js


external_vue_default.a.use(external_vuelidate_default.a);
// EXTERNAL MODULE: external "vue-recaptcha"
var external_vue_recaptcha_ = __webpack_require__(21);
var external_vue_recaptcha_default = /*#__PURE__*/__webpack_require__.n(external_vue_recaptcha_);

// CONCATENATED MODULE: ./plugins/vue-recaptcha.js


external_vue_default.a.use(external_vue_recaptcha_default.a);
// EXTERNAL MODULE: external "vue-awesome-swiper"
var external_vue_awesome_swiper_ = __webpack_require__(20);
var external_vue_awesome_swiper_default = /*#__PURE__*/__webpack_require__.n(external_vue_awesome_swiper_);

// CONCATENATED MODULE: ./plugins/vue-awesome-swiper.js


external_vue_default.a.use(external_vue_awesome_swiper_default.a);
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(96);

// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./cookie-universal-nuxt.js (mode: 'all')

 // Source: ./firebase/index.js (mode: 'all')

 // Source: ../plugins/messages (mode: 'all')

 // Source: ../plugins/vue-meta (mode: 'all')

 // Source: ../plugins/vuelidate (mode: 'all')

 // Source: ../plugins/vue-recaptcha (mode: 'all')

 // Source: ../plugins/vue-awesome-swiper (mode: 'all')

 // Source: ../plugins/materialize (mode: 'client')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
const baseStoreOptions = {
  preserveState: false
};

function registerModule(path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions,
    ...options
  });
}

async function _nuxt_createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "nuxt",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "style": [],
      "script": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof cookie_universal_nuxt === 'function') {
    await cookie_universal_nuxt(app.context, inject);
  }

  if (typeof _nuxt_firebase === 'function') {
    await _nuxt_firebase(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/messages.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/messages.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/vue-meta.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue-meta.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/vuelidate.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vuelidate.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/vue-recaptcha.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue-recaptcha.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/vue-awesome-swiper.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue-awesome-swiper.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {} // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, err => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err);
        if (err.type !== 2
        /* NavigationFailureType.redirected */
        ) return resolve(); // navigated to a different route in router guard

        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js








 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (decodeURI(opts.path) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(ufo_["normalizeURL"])(opts.path)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if (false) {} // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router,
    store
  } = await _nuxt_createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("jikanjs/lib/jikan");

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("vuelidate/lib/validators");

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = require("jikanjs");

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("firebase/database");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map