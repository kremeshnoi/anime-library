export default {
	install(Vue, options) {
		Vue.prototype.$message = function (html) {
			M.toast({ html, classes: 'green' })
		}

		Vue.prototype.$error = function (html) {
			M.toast({ html: `[Error]: ${html}`, classes: 'red' })
		}
	}
}
