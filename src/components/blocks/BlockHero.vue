<template lang="pug">

	.Block-hero
		.Block-hero-container
			.Block-hero-text-side
				h1.Block-hero-text-side-title Organize your anime library. Find, add, modify, communicate
				p.Block-hero-text-side-description Join us to get full access of the site functionality
				a.Block-hero-text-side-button.waves-effect.waves-light.btn(href="") Sign up
			.Block-hero-image-side

</template>

<script lang="ts">

	export default {
		name: "BlockHero"
	}

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"
	@import "../../assets/styles/utils/modules.sass"

	.Block-hero
		height: 70vh
		+mq(phablet, max)
			height: 100vh

		&-container
			height: 100%
			display: grid
			grid-template-columns: 1fr 1fr
			+mq(tablet-wide, max)
				grid-template-columns: 1fr
				grid-template-rows: 1fr 1fr

		&-text-side
			text-align: start
			@extend .indent-h-lg
			+flex(center, start, column)
			+mq(tablet-wide, max)
				text-align: center
				+flex(center, center, column)

			&-button
				@extend .indent-v-sm

			&-title
				@extend .indent-v-sm
				font-weight: 800
				font-size: 32px
				max-width: 560px
				+mq(phablet, max)
					font-size: 22px
					max-width: 460px
				+mq(phone, max)
					font-size: 18px

			&-description
				@extend .indent-v-sm
				font-weight: 300
				font-size: 20px
				max-width: 560px
				color: $color-grey
				+mq(phablet, max)
					font-size: 18px
					max-width: 300px
				+mq(phone, max)
					font-size: 16px

		&-image-side
			background-size: cover
			background-position: center
			background-image: url("../../assets/images/bg.jpg")

</style>
