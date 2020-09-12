<template lang='pug'>

	.content-wrapper
		.progress.auth-progress
			.indeterminate
		router-view

</template>

<script>

	export default {
		name: 'Authentication',
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
