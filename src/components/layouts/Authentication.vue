<template lang='pug'>

	.content-wrapper
		.progress.auth-progress
			.indeterminate
		router-view

</template>

<script>

	// IMPORTS

	import Messages from "@/utils/messages";

	// COMPONENT OPTIONS

	export default {
		name: 'Authentication',
		computed: {
			error() {
				return this.$store.getters.error
			}
		},
		watch: {
			error(fireBaseError) {
				this.$error(Messages[fireBaseError.code] || 'Something went wrong')
			}
		},
		mounted() {
			M.AutoInit();
		}
	};

</script>

<style lang='sass' scoped>

	// IMPORTS

	@import '../../src/assets/styles/utils/vars'
	@import '../../src/assets/styles/utils/mixins'

	// AUTH STYLES

	.content-wrapper
		height: 100vh
		background-color: $color-blue

	.auth-progress
		position: fixed
		top: 0
		margin: 0
		display: none

</style>
