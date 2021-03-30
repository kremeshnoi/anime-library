<template lang="pug">

	div.not-found
		h4.not-found__title
			| Not found
			span.divider_is-hidden
			| (｡•́︿•̀｡)

</template>

<script>

	export default {
		name: "NotFound",
		computed: {
			computeEmoji() {
				const arr = ["(｡•́︿•̀｡)"]
			}
		}
	}

</script>

<style lang="sass">

	@import "~/assets/styles/modules/dividers"

	.not-found
		&__title
			font-size: 26px
			text-align: start

</style>