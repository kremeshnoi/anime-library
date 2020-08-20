<template lang="pug">

	nav.nav-global
		.nav-wrapper.nav-global-wrapper
			router-link.nav-global-logo.nav-global-link( to="/" )
				| Otaku Library

</template>

<script>

	export default {
		name: "NavBar"
	};

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"

	.nav
		&-global
			height: 54px
			line-height: 54px
			background-color: $color-blue
			top: 0
			position: fixed
			z-index: 99
			padding: 0 40px 0 40px

			&-wrapper
				width: 100%

			&-logo
				font-size: 24px
				color: $color-white
				font-family: "Days One", sans-serif

</style>
