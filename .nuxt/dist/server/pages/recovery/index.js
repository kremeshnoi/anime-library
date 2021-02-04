exports.ids = [13];
exports.modules = {

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(161);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("6abc767a", content, true, context)
};

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b2db367a_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(135);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b2db367a_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b2db367a_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b2db367a_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b2db367a_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".btn.recovery-form__button[data-v-b2db367a],.btn.shadow-btn[data-v-b2db367a]{box-shadow:2px 2px 2px rgba(0,0,0,.75)}.btn.hover-btn[data-v-b2db367a]:hover,.btn.recovery-form__button[data-v-b2db367a]:hover{filter:brightness(100%)}.btn.focus-btn[data-v-b2db367a]:focus,.btn.recovery-form__button[data-v-b2db367a]:focus{background:#26a69a;box-shadow:1px 1px 1px rgba(0,0,0,.75)}.recovery[data-v-b2db367a]{top:0;left:0;right:0;bottom:0;margin:auto;position:fixed;max-width:400px;max-height:640px;border-radius:4px;padding:20px;background-color:#fff;box-shadow:10px 10px 5px 0 rgba(0,0,0,.75);display:flex;justify-content:center;align-items:center;flex-direction:column}@media only screen and (max-width:560px){.recovery[data-v-b2db367a]{max-width:100%;max-height:100%;border-radius:0}}.recovery__title[data-v-b2db367a]{font-size:22px;padding:30px 0}.recovery-form[data-v-b2db367a]{width:100%;text-align:center}.recovery-form__row[data-v-b2db367a]{max-width:304px;margin:20px auto}.recovery-form__row_center[data-v-b2db367a]{align-items:center}.recovery-form__field[data-v-b2db367a],.recovery-form__row_center[data-v-b2db367a]{display:flex;justify-content:center;flex-direction:column}.recovery-form__field[data-v-b2db367a]{align-items:stretch}.recovery-form__input[data-v-b2db367a]{width:auto!important;padding:0 0 0 20px!important}.recovery-form__helper[data-v-b2db367a]{width:100%}.preloader-wrapper[data-v-b2db367a]{display:none;right:20px!important;width:30px!important;bottom:20px!important;height:30px!important;position:absolute!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/recovery/index.vue?vue&type=template&id=b2db367a&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('div',{staticClass:"recovery"},[_c('h1',{staticClass:"recovery__title"},[_vm._v("Reset your password")]),_c('form',{staticClass:"recovery__form recovery-form",on:{"submit":function($event){$event.preventDefault();return _vm.validate($event)}}},[_c('div',{staticClass:"recovery-form__row"},[_c('div',{staticClass:"recovery-form__field input-field"},[_c('input',{directives:[{name:"model",rawName:"v-model.trim",value:(_vm.email),expression:"email",modifiers:{"trim":true}}],staticClass:"recovery-form__input",class:{ invalid: (_vm.$v.email.$dirty && !_vm.$v.email.required) || (_vm.$v.email.$dirty && !_vm.$v.email.email) },attrs:{"id":"email","type":"email","name":"email"},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value.trim()},"blur":function($event){return _vm.$forceUpdate()}}}),_c('label',{staticClass:"recovery-form__label",attrs:{"for":"email"}},[_vm._v("Email")]),(_vm.$v.email.$dirty && !_vm.$v.email.required)?_c('span',{staticClass:"recovery-form__helper helper-text",attrs:{"data-error":"The field is empty"}}):(_vm.$v.email.$dirty && !_vm.$v.email.email)?_c('span',{staticClass:"recovery-form__helper helper-text",attrs:{"data-error":"Incorrect email"}}):_vm._e()])]),_c('center',{staticClass:"recovery__center"},[_c('div',{staticClass:"preloader-wrapper big active"},[_c('div',{staticClass:"spinner-layer spinner-blue-only"},[_c('div',{staticClass:"circle-clipper left"},[_c('div',{staticClass:"circle"})]),_c('div',{staticClass:"gap-patch"},[_c('div',{staticClass:"circle"})]),_c('div',{staticClass:"circle-clipper right"},[_c('div',{staticClass:"circle"})])])]),_c('vue-recaptcha',{ref:"recaptcha",staticClass:"recaptcha",attrs:{"size":"invisible","sitekey":"6LeKfEgaAAAAAGqtaoHk9BjYE18zHwoeOmoOCkhq"},on:{"verify":_vm.submit,"expired":_vm.onCaptchaExpired}}),_c('div',{staticClass:"recovery-form__row"},[_c('button',{staticClass:"recovery-form_button btn",attrs:{"type":"submit","name":"submitRecover"}},[_vm._v("Submit")])])],1)],1),_c('div',{staticClass:"recovery__link-back"},[_c('router-link',{attrs:{"to":"/"}},[_vm._v("Back to Homepage")])],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/recovery/index.vue?vue&type=template&id=b2db367a&scoped=true&lang=pug&

// EXTERNAL MODULE: external "vue-recaptcha"
var external_vue_recaptcha_ = __webpack_require__(21);
var external_vue_recaptcha_default = /*#__PURE__*/__webpack_require__.n(external_vue_recaptcha_);

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(99);

// EXTERNAL MODULE: ./middleware/layoutMiddleware.js
var layoutMiddleware = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/recovery/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var recoveryvue_type_script_lang_js_ = ({
  name: 'Recovery',
  metaInfo: {
    title: 'Otaku Library - Password recovery'
  },
  layout: layoutMiddleware["default"],
  components: {
    VueRecaptcha: external_vue_recaptcha_default.a
  },

  data() {
    return {
      email: '',
      recaptcha: null
    };
  },

  validations: {
    email: {
      email: validators_["email"],
      required: validators_["required"]
    }
  },
  methods: {
    async submit() {
      const RecoveryData = {
        email: this.email
      };

      if (window.screen.width <= 560) {
        document.querySelector('.preloader-wrapper').style.display = 'block';
      } else {
        document.querySelector('.auth-progress').style.display = 'block';
      }

      await this.$store.dispatch('auth/recoverPassword', RecoveryData);
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
// CONCATENATED MODULE: ./pages/recovery/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_recoveryvue_type_script_lang_js_ = (recoveryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/recovery/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(160)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_recoveryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b2db367a",
  "346310b4"
  
)

/* harmony default export */ var recovery = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map