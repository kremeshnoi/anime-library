exports.ids = [9];
exports.modules = {

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(190);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("d84ba9a0", content, true, context)
};

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5ee3beac_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(148);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5ee3beac_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5ee3beac_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5ee3beac_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_6_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5ee3beac_lang_sass_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[dir=ltr] .library__title[data-v-5ee3beac],[dir=ltr] .title-bordered[data-v-5ee3beac],[dir=ltr] .title-default[data-v-5ee3beac]{text-align:left}[dir=rtl] .library__title[data-v-5ee3beac],[dir=rtl] .title-bordered[data-v-5ee3beac],[dir=rtl] .title-default[data-v-5ee3beac]{text-align:right}.library__title[data-v-5ee3beac],.title-bordered[data-v-5ee3beac],.title-default[data-v-5ee3beac]{color:#1f1f23;width:100%;height:48px;font-size:16px;font-weight:700;display:flex;align-items:center;text-transform:uppercase;padding:14px 0 0}.title-cut[data-v-5ee3beac]{display:block;max-width:300px;width:100%;white-space:nowrap}.title-cut[data-v-5ee3beac],.title-vertical-cut[data-v-5ee3beac]{overflow:hidden;text-overflow:ellipsis}.title-vertical-cut[data-v-5ee3beac]{display:-webkit-box;-webkit-box-orient:vertical}.title-bordered[data-v-5ee3beac]{padding:14px;margin:0 0 20px;border-left:5px solid #3970e5;background-color:hsla(0,0%,96.1%,.96078)}.container-default[data-v-5ee3beac],.library__container[data-v-5ee3beac]{width:100%;max-width:1300px;padding:0 40px;margin:40px auto}@media only screen and (max-width:640px){.container-default[data-v-5ee3beac],.library__container[data-v-5ee3beac]{padding:0 20px;margin:20px auto}}.library[data-v-5ee3beac]{width:100%}[dir=ltr] .library__disaster[data-v-5ee3beac]{text-align:left}[dir=rtl] .library__disaster[data-v-5ee3beac]{text-align:right}.library__disaster[data-v-5ee3beac]{font-size:30px}.library__title[data-v-5ee3beac]{display:flex;align-items:center}.library__icon[data-v-5ee3beac]{cursor:pointer}.library__icon[data-v-5ee3beac]:hover{color:red}.library__tabs[data-v-5ee3beac]{display:flex;flex-wrap:wrap;overflow-x:visible;overflow-x:initial;overflow-y:visible;overflow-y:initial;justify-content:center;height:100%;align-items:center;margin:40px auto}.library__image[data-v-5ee3beac]{width:80px;height:120px;margin-right:20px}.library__th[data-v-5ee3beac]:nth-of-type(4),.library__th[data-v-5ee3beac]:nth-of-type(5){text-align:center}.library__td[data-v-5ee3beac]{padding:8px 0}.library__td[data-v-5ee3beac]:nth-of-type(4),.library__td[data-v-5ee3beac]:nth-of-type(5){text-align:center}.library__tab[data-v-5ee3beac]{height:auto!important;text-transform:uppercase}@media only screen and (max-width:992px){.library__tab[data-v-5ee3beac]{flex-grow:0}}@media only screen and (max-width:480px){.library__tab[data-v-5ee3beac]{width:100%;margin:0 0 14px}}[dir=ltr] .library__tab-item[data-v-5ee3beac]{text-align:left}[dir=rtl] .library__tab-item[data-v-5ee3beac]{text-align:right}.library__tab-item[data-v-5ee3beac]{display:block;padding:0!important;margin:0 40px 0 0;height:auto!important;line-height:normal;color:#3970e5!important;text-align:center;font-weight:600;line-height:34px}@media only screen and (max-width:480px){.library__tab-item[data-v-5ee3beac]{margin:0}}.library__tab-item.active[data-v-5ee3beac],.library__tab-item[data-v-5ee3beac]:focus{background-color:transparent!important;background-color:initial!important}.library__tab-item.active[data-v-5ee3beac]{border-bottom:3px solid #3970e5}.library__tab-item_main[data-v-5ee3beac]{line-height:normal}.library__tab-item_main.active[data-v-5ee3beac]{color:#ffa300!important;font-size:26px;font-weight:800;border-bottom:none}.library__link[data-v-5ee3beac]{color:#555}.library__link[data-v-5ee3beac]:hover{text-decoration:underline}.library__link_title[data-v-5ee3beac]{font-weight:600;font-size:16px;color:#3970e5}.library__link_title[data-v-5ee3beac]:hover{text-decoration:none;text-decoration:initial;color:#ffa300}@media only screen and (max-width:480px){.library__link_title[data-v-5ee3beac]{font-size:13px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader??ref--1-oneOf-0-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/library/_type/_status/index.vue?vue&type=template&id=5ee3beac&scoped=true&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"library"},[_vm._ssrNode("<div class=\"library__container\" data-v-5ee3beac><ul class=\"library__tabs library__tabs_main\" data-v-5ee3beac>"+(_vm._ssrList((_vm.typeTabs),function(tab,index){return ("<li class=\"library__tab tab\" data-v-5ee3beac><a"+(_vm._ssrClass("library__tab-item library__tab-item_main",{ active: _vm.$route.params.type === tab.title }))+" data-v-5ee3beac>"+_vm._ssrEscape(_vm._s(tab.title))+"</a></li>")}))+"</ul><div class=\"library__anime\" data-v-5ee3beac><ul class=\"library__tabs\" data-v-5ee3beac>"+(_vm._ssrList((_vm.tabs),function(tab,index){return ("<li class=\"library__tab tab\" data-v-5ee3beac><a"+(_vm._ssrClass("library__tab-item",{ active: _vm.$route.params.status === tab.status }))+" data-v-5ee3beac>"+_vm._ssrEscape(_vm._s(tab.title))+"</a></li>")}))+"</ul><table class=\"library__table\" data-v-5ee3beac><thead class=\"library__thead\" data-v-5ee3beac><tr class=\"library__tr\" data-v-5ee3beac><th class=\"library__th\" data-v-5ee3beac>#</th><th class=\"library__th\" data-v-5ee3beac>Image</th><th class=\"library__th\" data-v-5ee3beac>Title</th><th class=\"library__th\" data-v-5ee3beac>Type</th><th class=\"library__th\" data-v-5ee3beac>Delete</th></tr></thead><tbody class=\"library__tbody\" data-v-5ee3beac>"+(_vm._ssrList((_vm.buffer),function(data,index){return ("<tr class=\"library__tr\" data-v-5ee3beac><td class=\"library__td\" data-v-5ee3beac>"+_vm._ssrEscape(_vm._s(index + 1))+"</td><td class=\"library__td\" data-v-5ee3beac><img"+(_vm._ssrAttr("src",data.image_url))+" class=\"library__image\" data-v-5ee3beac></td><td class=\"library__td\" data-v-5ee3beac><a class=\"library__link library__link_title\" data-v-5ee3beac>"+_vm._ssrEscape(_vm._s(data.title))+"</a></td><td class=\"library__td\" data-v-5ee3beac>"+_vm._ssrEscape(_vm._s(data.type))+"</td><td class=\"library__td\" data-v-5ee3beac><i class=\"library__icon material-icons\" data-v-5ee3beac>clear</i></td></tr>")}))+"</tbody></table></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/library/_type/_status/index.vue?vue&type=template&id=5ee3beac&scoped=true&lang=pug&

// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__(6);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "jikanjs/lib/jikan.js"
var jikan_js_ = __webpack_require__(4);
var jikan_js_default = /*#__PURE__*/__webpack_require__.n(jikan_js_);

// EXTERNAL MODULE: ./middleware/layoutMiddleware.js
var layoutMiddleware = __webpack_require__(38);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/library/_type/_status/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var _statusvue_type_script_lang_js_ = ({
  name: 'Library',
  metaInfo: {
    title: 'Otaku Library - Library'
  },
  layout: layoutMiddleware["default"],

  data() {
    return {
      buffer: [],
      tabs: [],
      typeTabs: [{
        title: 'anime'
      }, {
        title: 'manga'
      }],
      animeTabs: [{
        title: 'Plan to Watch',
        status: 'planned',
        type: 'anime'
      }, {
        title: 'Completed',
        status: 'completed',
        type: 'anime'
      }, {
        title: 'Currently Watching',
        status: 'process',
        type: 'anime'
      }, {
        title: 'On Hold',
        status: 'hold',
        type: 'anime'
      }, {
        title: 'Dropped',
        status: 'dropped',
        type: 'anime'
      }],
      mangaTabs: [{
        title: 'Plan to Read',
        status: 'planned',
        type: 'manga'
      }, {
        title: 'Completed',
        status: 'completed',
        type: 'manga'
      }, {
        title: 'Currently Reading',
        status: 'process',
        type: 'manga'
      }, {
        title: 'On Hold',
        status: 'hold',
        type: 'manga'
      }, {
        title: 'Dropped',
        status: 'dropped',
        type: 'manga'
      }]
    };
  },

  async created() {
    this.fetchData(this.$route.params.type, this.$route.params.status);
    if (this.$route.params.type === 'anime') this.tabs = this.animeTabs;else if (this.$route.params.type === 'manga') this.tabs = this.mangaTabs;
  },

  methods: {
    getUid() {
      const user = app_default.a.auth().currentUser;
      return user ? user.uid : null;
    },

    toogleTab(type, status) {
      this.$router.push(`/library/${type}/${status}`);
      if (type === 'anime') this.animeTabBuffer = status;else if (type === 'manga') this.mangaTabBuffer = status;
    },

    async fetchData(type, status) {
      try {
        const uid = this.getUid();
        const res = await app_default.a.database().ref(`/users/${uid}/`).on('value', data => {
          const obj = Object.entries(data.val()[`${type}`]).filter(d => d[1].status === status).map(d => type === 'anime' ? jikan_js_default.a.loadAnime(d[0]) : jikan_js_default.a.loadManga(d[0]));
          Promise.all(obj).then(values => this.buffer = values);
        });
      } catch (error) {
        throw error.message;
      }
    },

    async removeValue(type, id) {
      try {
        const uid = this.getUid();
        await app_default.a.database().ref(`/users/${uid}/${type}/${id}/`).set({
          status: false
        });
      } catch (error) {
        throw error.message;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/library/_type/_status/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var _type_statusvue_type_script_lang_js_ = (_statusvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/library/_type/_status/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(189)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _type_statusvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5ee3beac",
  "6056775e"
  
)

/* harmony default export */ var _status = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map