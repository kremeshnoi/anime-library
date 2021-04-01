<template lang="pug">

	main.sign-up
		h1.sign-up__title
			| Join Otaku Library!
		p.sign-in__description
			| (Registration on out website)

		AutheticationForm(type="sign-up")

</template>

<script>

	import layout from "@/middleware/layout"
	import AutheticationForm from "@/components/elements/AutheticationForm"

	export default {
		name: "SignUp",
		metaInfo: {
			title: "Otaku Library - Sign Up"
		},
		layout: layout,
		components: {
			AutheticationForm
		}
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"
	@import "~/assets/styles/modules/containers"

	.sign-up
		flex: 1
		margin-top: 54px
		@extend .container
		+flex(center, flex-start, column)

		&__title
			font-size: 32px
			padding: 40px 0 0 0

		&__description
			font-size: 14px

</style>
