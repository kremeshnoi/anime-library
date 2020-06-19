<template lang="pug">

	section.Hero
		.Hero-container
			.Hero-content
				h1.Hero-title Organize your anime library. #[br] Find, add, modify, #[br] communicate
				p.Hero-description Join us to get full access of the site functionality
				router-link.Hero-button.btn(to="/register") Sign up

</template>

<script lang="ts">

	export default {
		name: "Hero"
	}

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"
	@import "../../assets/styles/modules/buttons.sass"

	.Hero
		height: 50vh
		background-blend-mode: darken
		background: center / cover no-repeat rgba(0, 0, 0, .2) url("../../assets/images/bg.jpg")

		&-container
			height: 100%
			text-align: start
			padding: 0 40px 0 40px
			+flex(center, start, column)

		&-title
			font-size: 52px
			font-weight: 800
			margin: 8px 0 8px 0
			color: $color-white
			text-shadow: 2px 2px 2px black

		&-description
			font-size: 18px
			font-weight: 300
			margin: 8px 0 8px 0
			color: $color-white
			text-shadow: 2px 2px 2px black

		&-button
			margin: 8px 0 8px 0
			@extend .hover-btn
			@extend .shadow-btn
			@extend .focus-btn

</style>
