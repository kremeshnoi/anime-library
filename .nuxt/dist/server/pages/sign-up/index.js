exports.ids = [15];
exports.modules = {

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(167);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("512f5b96", content, true, context)
};

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2e762a78_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2e762a78_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2e762a78_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2e762a78_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2e762a78_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".btn.shadow-btn[data-v-2e762a78],.btn.sign-up-form__button[data-v-2e762a78]{box-shadow:2px 2px 2px rgba(0,0,0,.75)}.btn.hover-btn[data-v-2e762a78]:hover,.btn.sign-up-form__button[data-v-2e762a78]:hover{filter:brightness(100%)}.btn.focus-btn[data-v-2e762a78]:focus,.btn.sign-up-form__button[data-v-2e762a78]:focus{background:#26a69a;box-shadow:1px 1px 1px rgba(0,0,0,.75)}.sign-up[data-v-2e762a78]{top:0;left:0;right:0;bottom:0;margin:auto;position:fixed;max-width:400px;max-height:640px;border-radius:4px;padding:20px;background-color:#fff;box-shadow:10px 10px 5px 0 rgba(0,0,0,.75);display:flex;justify-content:center;align-items:center;flex-direction:column}@media only screen and (max-width:560px){.sign-up[data-v-2e762a78]{max-width:100%;max-height:100%;border-radius:0}}.sign-up__title[data-v-2e762a78]{font-size:22px;padding:30px 0}.sign-up-form[data-v-2e762a78]{width:100%;text-align:center}.sign-up-form__input[data-v-2e762a78]{width:auto!important;padding:0 0 0 20px!important}.sign-up-form__row[data-v-2e762a78]{max-width:304px;margin:20px auto}.sign-up-form__row_center[data-v-2e762a78]{align-items:center}.sign-up-form__field[data-v-2e762a78],.sign-up-form__row_center[data-v-2e762a78]{display:flex;justify-content:center;flex-direction:column}.sign-up-form__field[data-v-2e762a78]{align-items:stretch}.sign-up-form__helper[data-v-2e762a78]{width:100%}.preloader-wrapper[data-v-2e762a78]{display:none;right:20px!important;width:30px!important;bottom:20px!important;height:30px!important;position:absolute!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/sign-up/index.vue?vue&type=template&id=2e762a78&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('div',{staticClass:"sign-up"},[_c('h1',{staticClass:"sign-up__title"},[_vm._v("Join Otaku Library!")]),_c('form',{staticClass:"sign-up__form sign-up-form",on:{"submit":function($event){$event.preventDefault();return _vm.validate($event)}}},[_c('div',{staticClass:"sign-up-form__row"},[_c('div',{staticClass:"sign-up-form__field input-field"},[_c('input',{directives:[{name:"model",rawName:"v-model.trim",value:(_vm.email),expression:"email",modifiers:{"trim":true}}],staticClass:"sign-up-form__input",class:{ invalid: (_vm.$v.email.$dirty && !_vm.$v.email.required) || (_vm.$v.email.$dirty && !_vm.$v.email.email) },attrs:{"id":"email","type":"email","name":"username","autocomplete":"username"},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value.trim()},"blur":function($event){return _vm.$forceUpdate()}}}),_c('label',{attrs:{"for":"email"}},[_vm._v("Email")]),(_vm.$v.email.$dirty && !_vm.$v.email.required)?_c('span',{staticClass:"sign-up-form__helper helper-text",attrs:{"data-error":"The field is empty"}}):(_vm.$v.email.$dirty && !_vm.$v.email.email)?_c('span',{staticClass:"sign-up-form__helper helper-text",attrs:{"data-error":"Incorrect email"}}):_vm._e()])]),_c('div',{staticClass:"sign-up-form__row"},[_c('div',{staticClass:"sign-up-form__field input-field"},[_c('input',{directives:[{name:"model",rawName:"v-model.trim",value:(_vm.username),expression:"username",modifiers:{"trim":true}}],staticClass:"sign-up-form__input",class:{ invalid: (_vm.$v.username.$dirty && !_vm.$v.username.required) || (_vm.$v.username.$dirty && !_vm.$v.username.minLength) },attrs:{"id":"username","type":"text","autocomplete":"off"},domProps:{"value":(_vm.username)},on:{"input":function($event){if($event.target.composing){ return; }_vm.username=$event.target.value.trim()},"blur":function($event){return _vm.$forceUpdate()}}}),_c('label',{attrs:{"for":"username"}},[_vm._v("Username")]),(_vm.$v.username.$dirty && !_vm.$v.username.required)?_c('span',{staticClass:"sign-up-form__helper helper-text",attrs:{"data-error":"The field is empty"}}):(_vm.$v.username.$dirty && !_vm.$v.username.minLength)?_c('span',{staticClass:"sign-up-form__helper helper-text",attrs:{"data-error":"Username is too short"}}):_vm._e()])]),_c('div',{staticClass:"sign-up-form__row"},[_c('div',{staticClass:"sign-up-form__field input-field"},[_c('input',{directives:[{name:"model",rawName:"v-model.trim",value:(_vm.password),expression:"password",modifiers:{"trim":true}}],staticClass:"sign-up-form__input",class:{ invalid: (_vm.$v.password.$dirty && !_vm.$v.password.required) || (_vm.$v.password.$dirty && !_vm.$v.password.minLength) },attrs:{"id":"password","type":"password","name":"password","autocomplete":"current-password"},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value.trim()},"blur":function($event){return _vm.$forceUpdate()}}}),_c('label',{attrs:{"for":"password"}},[_vm._v("Password")]),(_vm.$v.password.$dirty && !_vm.$v.password.required)?_c('span',{staticClass:"sign-up-form__field helper-text",attrs:{"data-error":"The field is empty"}}):(_vm.$v.password.$dirty && !_vm.$v.password.minLength)?_c('span',{staticClass:"sign-up-form__field helper-text",attrs:{"data-error":"Password is too short"}}):_vm._e()])]),_c('div',{staticClass:"sign-up-form__row"},[_c('router-link',{attrs:{"to":"/sign-in"}},[_vm._v("Already have an account?")])],1),_c('center',{staticClass:"sign-up__center"},[_c('div',{staticClass:"preloader-wrapper big active"},[_c('div',{staticClass:"spinner-layer spinner-blue-only"},[_c('div',{staticClass:"circle-clipper left"},[_c('div',{staticClass:"circle"})]),_c('div',{staticClass:"gap-patch"},[_c('div',{staticClass:"circle"})]),_c('div',{staticClass:"circle-clipper right"},[_c('div',{staticClass:"circle"})])])]),_c('vue-recaptcha',{ref:"recaptcha",staticClass:"recaptcha",attrs:{"size":"invisible","sitekey":"6LeKfEgaAAAAAGqtaoHk9BjYE18zHwoeOmoOCkhq"},on:{"verify":_vm.submit,"expired":_vm.onCaptchaExpired}}),_c('div',{staticClass:"sign-up-form__row"},[_c('button',{staticClass:"SignUp-button btn",attrs:{"type":"submit","name":"submitSignUp"}},[_vm._v("Create Account")])])],1)],1),_c('div',{staticClass:"sign-up__link-back"},[_c('router-link',{attrs:{"to":"/"}},[_vm._v("Back to Homepage")])],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/sign-up/index.vue?vue&type=template&id=2e762a78&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(5);

// EXTERNAL MODULE: external "vue-recaptcha"
var external_vue_recaptcha_ = __webpack_require__(21);
var external_vue_recaptcha_default = /*#__PURE__*/__webpack_require__.n(external_vue_recaptcha_);

// EXTERNAL MODULE: ./middleware/layoutMiddleware.js
var layoutMiddleware = __webpack_require__(38);

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(99);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/sign-up/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var sign_upvue_type_script_lang_js_ = ({
  name: 'SignUp',
  metaInfo: {
    title: 'Otaku Library - Sign Up'
  },
  layout: layoutMiddleware["default"],
  components: {
    VueRecaptcha: external_vue_recaptcha_default.a
  },

  data() {
    return {
      email: '',
      username: '',
      password: '',
      recaptcha: null
    };
  },

  validations: {
    email: {
      email: validators_["email"],
      required: validators_["required"]
    },
    username: {
      required: validators_["required"],
      minLength: Object(validators_["minLength"])(3)
    },
    password: {
      required: validators_["required"],
      minLength: Object(validators_["minLength"])(5)
    }
  },
  methods: { ...Object(external_vuex_["mapActions"])({
      signUp: 'auth/signUp'
    }),

    async submit() {
      const signUpData = {
        email: this.email,
        password: this.password,
        username: this.username
      };

      if (window.screen.width <= 560) {
        document.querySelector('.preloader-wrapper').style.display = 'block';
      } else {
        document.querySelector('.auth-progress').style.display = 'block';
      }

      await this.signUp(signUpData);
    },

    validate() {
      if (this.$v.$invalid) {
        return this.$v.$touch();
      }

      this.$refs.recaptcha.execute();
    },

    onCaptchaExpired() {
      this.$refs.recaptcha.reset();
    }

  }
});
// CONCATENATED MODULE: ./pages/sign-up/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_sign_upvue_type_script_lang_js_ = (sign_upvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/sign-up/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(166)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_sign_upvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2e762a78",
  "65a57942"
  
)

/* harmony default export */ var sign_up = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map