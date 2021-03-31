<template lang="pug">

	.authentication-layout
		.progress.auth-progress
			.indeterminate
		Navbar
		Nuxt
		Footer

</template>

<script>

	import Messages from "@/utils/messages"
	import Navbar from "@/components/navigation/Navbar"
	import Footer from "@/components/navigation/Footer"

	export default {
		name: "Authentication",
		components: {
			Navbar,
			Footer
		},
		computed: {
			error() {
				return this.$store.getters.error
			}
		},
		watch: {
			error(fireBaseError) {
				this.$error(Messages[fireBaseError.code])
			}
		},
		mounted() {
			M.AutoInit()
			const head = document.getElementsByTagName("head")[0]
			const script = document.createElement("script")
			script.type = "text/javascript"
			script.src = "https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit"
			head.appendChild(script)
		}
	}

</script>

<style lang="sass">

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"

	.recaptcha
		top: 50%
		position: fixed

	.authentication-layout
		display: flex
		flex-direction: column
		height: 100vh

	.auth-progress
		top: 0
		margin: 0
		height: 3px
		display: none
		position: fixed
		color: $color-aquamarine

</style>
