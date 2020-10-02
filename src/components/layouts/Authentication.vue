<template lang='pug'>

	.content-wrapper
		.progress.auth-progress
			.indeterminate
		router-view

</template>

<script>

	import messages from "@/utils/messages";

	export default {
		name: 'Authentication',
		computed: {
			error() {
				return this.$store.getters.error
			}
		},
		watch: {
			error(fbError) {
				console.log(fbError)
				this.$error(messages[fbError.code] || 'Something went wrong')
			}
		},
		mounted() {
			M.AutoInit();
		}
	};

</script>

<style lang='sass' scoped>

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'

	.content-wrapper
		height: 100vh
		background-color: $color-blue

	.auth-progress
		position: fixed
		top: 0
		margin: 0
		display: none

</style>
