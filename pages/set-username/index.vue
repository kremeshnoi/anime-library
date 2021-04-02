<template lang="pug">

	main.set-username
		h1.set-username__title
			| Set your username
		p.set-username__description
			| (Registration on out website)

		AutheticationForm(type="set-username")

</template>

<script>

	import layout from "@/middleware/layout"
	import AutheticationForm from "@/components/elements/AutheticationForm"

	export default {
		name: "SetUsername",
		metaInfo: {
			title: "Otaku Library - Set your username"
		},
		layout: layout,
		components: {
			AutheticationForm
		}
	}

</script>

<style lang="sass">

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"
	@import "~/assets/styles/modules/containers"

	.set-username
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