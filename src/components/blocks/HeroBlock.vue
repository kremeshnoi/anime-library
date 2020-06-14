<template lang="pug">

	.Hero-block
		.Hero-block-container
			.Hero-block-content
				h1.Hero-block-title Organize your anime library. #[br] Find, add, modify, #[br] communicate
				p.Hero-block-description Join us to get full access of the site functionality
				a.Hero-block-button.btn(target="_blank") Sign up

</template>

<script lang="ts">

	export default {
		name: "HeroBlock"
	}

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"
	@import "../../assets/styles/modules/buttons.sass"

	.Hero-block
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
			+mq(tablet-wide, max)
				margin: 0 12% 0 0
			+mq(tablet-mid, max)
				margin: 0
			+mq(phone-wide, max)
				max-width: 272px

		&-title
			margin: 8px 0 8px 0
			color: $color-white
			font-weight: 800
			font-size: 52px
			text-shadow: 2px 2px 2px black
			+mq(tablet-mid, max)
				font-size: 44px
			+mq(tablet, max)
				font-size: 36px
			+mq(tablet-small, max)
				font-size: 30px
			+mq(phablet, max)
				font-size: 26px

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
			@extend .active-btn

</style>
