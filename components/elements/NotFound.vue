<template lang="pug">

		h4.not-found
			| Not found
			span.divider-hidden
			| (｡•́︿•̀｡)

</template>

<script>

	export default {
		name: "Not Found",
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
		font-size: 26px
		text-align: start

</style>