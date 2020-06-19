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
		height: 70vh
		background-blend-mode: darken
		background: center / cover no-repeat rgba(0, 0, 0, .6) url("../../assets/images/bg.jpg")
		+mq(phablet, max)
			height: 50vh

		&-container
			height: 100%
			text-align: start
			margin: 0 24px 0 24px
			+flex(center, center, column)

		&-content
			margin: 0 18% 0 0

		&-title
			margin: 8px 0 8px 0
			color: $color-white
			font-weight: 800
			font-size: 52px
			text-shadow: 2px 2px 2px black

		&-description
			margin: 8px 0 8px 0
			color: $color-white
			font-weight: 300
			font-size: 18px
			text-shadow: 2px 2px 2px black

		&-button
			margin: 8px 0 8px 0
			@extend .hover-btn
			@extend .shadow-btn
			@extend .focus-btn

</style>
