<template lang="pug">

	.content-wrapper
		router-view

</template>

<script>

	export default {
		name: "Authentication",
		mounted() {
			M.AutoInit();
		}
	};

</script>

<style lang="sass" scoped>

	@import "../assets/styles/utils/vars.sass"
	@import "../assets/styles/utils/mixins.sass"

	.content-wrapper
		height: 100vh
		background-color: $color-blue
		+flex(initial, center, column)

</style>
