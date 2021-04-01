<template lang="pug">

	main.sign-in
		h1.sign-in__title
			| Authorization
		p.sign-in__description
			| (Start using account)

		AutheticationForm(type="sign-in")

</template>

<script>

	import layout from "@/middleware/layout"
	import AutheticationForm from "@/components/elements/AutheticationForm"

	export default {
		name: "SignIn",
		metaInfo: {
			title: "Otaku Library - Sign In"
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

	.sign-in
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
