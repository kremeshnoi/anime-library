exports.ids = [14];
exports.modules = {

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(165);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("098125c2", content, true, context)
};

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/g-logo.14137f8.svg";

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/t-logo.b7cef21.png";

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1c360728_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(136);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1c360728_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1c360728_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1c360728_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1c360728_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".btn.shadow-btn[data-v-1c360728],.btn.sign-in-form__button[data-v-1c360728]{box-shadow:2px 2px 2px rgba(0,0,0,.75)}.btn.hover-btn[data-v-1c360728]:hover,.btn.sign-in-form__button[data-v-1c360728]:hover{filter:brightness(100%)}.btn.focus-btn[data-v-1c360728]:focus,.btn.sign-in-form__button[data-v-1c360728]:focus{background:#26a69a;box-shadow:1px 1px 1px rgba(0,0,0,.75)}.recaptcha[data-v-1c360728]{position:fixed;top:50%}.sign-in[data-v-1c360728]{top:0;left:0;right:0;bottom:0;margin:auto;position:fixed;max-width:400px;max-height:640px;border-radius:4px;padding:20px;background-color:#fff;box-shadow:10px 10px 5px 0 rgba(0,0,0,.75);display:flex;justify-content:center;align-items:center;flex-direction:column}@media only screen and (max-width:560px){.sign-in[data-v-1c360728]{max-width:100%;max-height:100%;border-radius:0}}.sign-in__title[data-v-1c360728]{font-size:22px;padding:30px 0}.sign-in__button[data-v-1c360728]{height:36px;width:120px}.sign-in-form[data-v-1c360728]{width:100%;text-align:center}.sign-in-form__google[data-v-1c360728],.sign-in-form__twitter[data-v-1c360728]{cursor:pointer;height:36px;width:120px;background-color:#fff;color:#757575;border-radius:2px;box-shadow:0 2px 4px 0 rgba(0,0,0,.25);box-sizing:border-box;transition:background-color .218s,border-color .218s,box-shadow .218s;background-image:none;outline:none;overflow:hidden;position:relative;text-align:center;vertical-align:middle;white-space:nowrap}.sign-in-form__google[data-v-1c360728]:hover,.sign-in-form__twitter[data-v-1c360728]:hover{background-color:#eee}.sign-in-form__google-wrapper[data-v-1c360728],.sign-in-form__twitter-wrapper[data-v-1c360728]{display:flex}.sign-in-form__google-title[data-v-1c360728],.sign-in-form__twitter-title[data-v-1c360728]{font-family:Roboto,arial,sans-serif;font-size:13px;line-height:34px;font-weight:400;letter-spacing:.21px;margin-right:12px;vertical-align:top;width:100%}.sign-in-form__google-logo[data-v-1c360728],.sign-in-form__twitter-logo[data-v-1c360728]{padding:8px;width:36px}.sign-in-form__social[data-v-1c360728]{padding:10px 0;display:grid;grid-auto-flow:column;grid-column-gap:20px;-moz-column-gap:20px;column-gap:20px;justify-content:center}.sign-in-form__row[data-v-1c360728]{margin:20px auto;max-width:304px}.sign-in-form__row_center[data-v-1c360728]{align-items:center}.sign-in-form__field[data-v-1c360728],.sign-in-form__row_center[data-v-1c360728]{display:flex;justify-content:center;flex-direction:column}.sign-in-form__field[data-v-1c360728]{text-align:center;align-items:strech}.sign-in-form__input[data-v-1c360728]{width:auto!important;padding:0 0 0 20px!important}.sign-in-form__helper[data-v-1c360728]{width:100%}.preloader-wrapper[data-v-1c360728]{display:none;right:20px!important;width:30px!important;bottom:20px!important;height:30px!important;position:absolute!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/sign-in/index.vue?vue&type=template&id=1c360728&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('div',{staticClass:"sign-in"},[_c('h1',{staticClass:"sign-in__title"},[_vm._v("Start using account")]),_c('form',{staticClass:"sign-in__form sign-in-form",on:{"submit":function($event){$event.preventDefault();return _vm.validate($event)}}},[_c('div',{staticClass:"sign-in-form__row"},[_c('div',{staticClass:"sign-in-form__field input-field"},[_c('input',{directives:[{name:"model",rawName:"v-model.trim",value:(_vm.email),expression:"email",modifiers:{"trim":true}}],staticClass:"sign-in-form__input",class:{ invalid: (_vm.$v.email.$dirty && !_vm.$v.email.required) || (_vm.$v.email.$dirty && !_vm.$v.email.email) },attrs:{"id":"email","type":"email","name":"username","autocomplete":"username"},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value.trim()},"blur":function($event){return _vm.$forceUpdate()}}}),_c('label',{attrs:{"for":"email"}},[_vm._v("Email")]),(_vm.$v.email.$dirty && !_vm.$v.email.required)?_c('span',{staticClass:"sign-in-form__helper helper-text",attrs:{"data-error":"The field is empty"}}):(_vm.$v.email.$dirty && !_vm.$v.email.email)?_c('span',{staticClass:"sign-in-form__helper helper-text",attrs:{"data-error":"Incorrect email"}}):_vm._e()])]),_c('div',{staticClass:"sign-in-form__row"},[_c('div',{staticClass:"sign-in-form__field input-field"},[_c('input',{directives:[{name:"model",rawName:"v-model.trim",value:(_vm.password),expression:"password",modifiers:{"trim":true}}],staticClass:"sign-in-form__input",class:{ invalid: (_vm.$v.password.$dirty && !_vm.$v.password.required) || (_vm.$v.password.$dirty && !_vm.$v.password.minLength) },attrs:{"id":"password","type":"password","name":"password","autocomplete":"current-password"},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value.trim()},"blur":function($event){return _vm.$forceUpdate()}}}),_c('label',{attrs:{"for":"password"}},[_vm._v("Password")]),(_vm.$v.password.$dirty && !_vm.$v.password.required)?_c('span',{staticClass:"sign-in-form__helper helper-text",attrs:{"data-error":"The field is empty"}}):(_vm.$v.password.$dirty && !_vm.$v.password.minLength)?_c('span',{staticClass:"sign-in-form__helper helper-text",attrs:{"data-error":"Password is too short"}}):_vm._e()])]),_c('div',{staticClass:"sign-in-form__row"},[_c('router-link',{attrs:{"to":"/recovery"}},[_vm._v("Forgot password?")])],1),_c('div',{staticClass:"sign-in-form__row"},[_vm._v("- or -")]),_c('div',{staticClass:"sign-in-form__row"},[_c('router-link',{attrs:{"to":"/sign-up"}},[_vm._v("Register new account")])],1),_c('center',{staticClass:"sign-in__center"},[_c('div',{staticClass:"preloader-wrapper big active"},[_c('div',{staticClass:"spinner-layer spinner-blue-only"},[_c('div',{staticClass:"circle-clipper left"},[_c('div',{staticClass:"circle"})]),_c('div',{staticClass:"gap-patch"},[_c('div',{staticClass:"circle"})]),_c('div',{staticClass:"circle-clipper right"},[_c('div',{staticClass:"circle"})])])]),_c('vue-recaptcha',{ref:"recaptcha",staticClass:"recaptcha",attrs:{"size":"invisible","sitekey":"6LeKfEgaAAAAAGqtaoHk9BjYE18zHwoeOmoOCkhq"},on:{"verify":_vm.submit,"expired":_vm.onCaptchaExpired}}),_c('div',{staticClass:"sign-in-form__row sign-in-form__social"},[_c('button',{staticClass:"sign-in-form__google",on:{"click":_vm.googleAuth}},[_c('div',{staticClass:"sign-in-form__google-wrapper"},[_c('img',{staticClass:"sign-in-form__google-logo",attrs:{"src":__webpack_require__(162)}}),_c('div',{staticClass:"sign-in-form__google-title"},[_vm._v("Google")])])]),_c('button',{staticClass:"sign-in-form__twitter",on:{"click":_vm.twitterAuth}},[_c('div',{staticClass:"sign-in-form__twitter-wrapper"},[_c('img',{staticClass:"sign-in-form__twitter-logo",attrs:{"src":__webpack_require__(163)}}),_c('div',{staticClass:"sign-in-form__twitter-title"},[_vm._v("Twitter")])])])]),_c('div',{staticClass:"sign-in-form__row"},[_c('button',{staticClass:"sign-in__button btn",attrs:{"type":"submit","name":"submitSignIn"}},[_vm._v("Sign In")])])],1)],1),_c('div',{staticClass:"sign-in__link-back"},[_c('router-link',{attrs:{"to":"/"}},[_vm._v("Back to Homepage")])],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/sign-in/index.vue?vue&type=template&id=1c360728&scoped=true&lang=pug&

// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__(6);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: external "vue-recaptcha"
var external_vue_recaptcha_ = __webpack_require__(21);
var external_vue_recaptcha_default = /*#__PURE__*/__webpack_require__.n(external_vue_recaptcha_);

// EXTERNAL MODULE: ./middleware/layoutMiddleware.js
var layoutMiddleware = __webpack_require__(38);

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(99);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/sign-in/index.vue?vue&type=script&lang=js&
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





/* harmony default export */ var sign_invue_type_script_lang_js_ = ({
  name: 'SignIn',
  metaInfo: {
    title: 'Otaku Library - Sign In'
  },
  layout: layoutMiddleware["default"],
  components: {
    VueRecaptcha: external_vue_recaptcha_default.a
  },

  data() {
    return {
      email: '',
      password: '',
      params: {
        client_id: '75933468300-qeknegfk5qg5cqa1c46fhrkfcu3nses0.apps.googleusercontent.com'
      },
      renderParams: {
        title: 'true'
      }
    };
  },

  validations: {
    email: {
      email: validators_["email"],
      required: validators_["required"]
    },
    password: {
      required: validators_["required"],
      minLength: Object(validators_["minLength"])(5)
    }
  },
  methods: { ...Object(external_vuex_["mapActions"])({
      signIn: 'auth/signIn'
    }),

    async submit() {
      const signInData = {
        email: this.email,
        password: this.password
      };

      if (window.screen.width <= 560) {
        document.querySelector('.preloader-wrapper').style.display = 'block';
      } else {
        document.querySelector('.auth-progress').style.display = 'block';
      }

      await this.signIn(signInData);
    },

    validate() {
      if (this.$v.$invalid) {
        return this.$v.$touch();
      }

      this.$refs.recaptcha.execute();
    },

    onCaptchaExpired() {
      this.$refs.recaptcha.reset();
    },

    googleAuth() {
      const provider = new app_default.a.auth.GoogleAuthProvider();
      app_default.a.auth().signInWithPopup(provider).then(result => {
        this.$router.push('/');
      }).catch(error => {
        throw error.message;
      });
    },

    twitterAuth() {
      const provider = new app_default.a.auth.TwitterAuthProvider();
      app_default.a.auth().signInWithPopup(provider).then(result => {
        this.$router.push('/');
      }).catch(error => {
        M.toast({
          html: `${error.message}`,
          classes: 'red',
          displayLength: 10000
        });
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/sign-in/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_sign_invue_type_script_lang_js_ = (sign_invue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/sign-in/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(164)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_sign_invue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1c360728",
  "40ef5968"
  
)

/* harmony default export */ var sign_in = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map