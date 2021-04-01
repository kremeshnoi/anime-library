<template lang="pug">

	main.recovery
		h1.recovery__title
			| Reset your password
		p.sign-in__description
			| (receive instructions by email)

		AutheticationForm(type="recovery")

</template>

<script>

	import layout from "@/middleware/layout"
	import AutheticationForm from "@/components/elements/AutheticationForm"

	export default {
		name: "Recovery",
		metaInfo: {
			title: "Otaku Library - Password recovery"
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

	.recovery
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
