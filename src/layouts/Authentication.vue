<template lang="pug">

	div.global-wrapper

		main.content-wrapper
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

@import "../assets/styles/utils/vars"
@import "../assets/styles/utils/mixins"

.global-wrapper
	display: flex
	flex-direction: column
	align-items: flex-end

	.content-wrapper
		display: flex
		flex-direction: column
		align-items: center
		width: 100%
		background-color: $color-blue
		height: 100vh
</style>
