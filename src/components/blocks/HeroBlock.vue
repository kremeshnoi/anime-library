<template lang='pug'>

	.hero-block
		.hero-block__container
			.hero-block__text-side
				h1.hero-block__title Organize your library. Find, add, modify, communicate
				p.hero-block__description Join us to get full access of the site functionality
				router-link.hero-block__button.btn(to='/sign-up') JOIN US
			.hero-block__image-side
				.hero-block__image

</template>

<script>

	export default {
		name: 'HeroBlock'
	}

</script>

<style lang='sass' scoped>

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'
	@import '../../assets/styles/modules/buttons'
	@import '../../assets/styles/modules/containers'

	.hero-block
		height: 40vh
		+mq(tablet-small, max)
			height: 30vh
		+mq(tablet-small, max)
			height: 40vh
		&__container
			@extend .container-default
			height: 100%
			display: grid
			grid-template-columns: 1fr 1fr
			+mq(tablet-small, max)
				grid-template-columns: 1fr
				grid-template-rows: 1fr
				background-image: url('../../assets/images/hero-min.png')
				background-position: bottom right
				background-size: 100px 100px
				background-repeat: no-repeat

		&__text-side
			text-align: start
			+flex(center, start, column)
			+mq(tablet-small, max)
				align-items: center
				text-align: center

		&__button
			margin: 20px 0 0 0
			@extend .hover-btn
			@extend .shadow-btn
			@extend .focus-btn
			+mq(tablet-small, max)
				margin: 0 0 0 0

		&__title
			font-weight: 800
			font-size: 42px
			max-width: 100%
			+mq(tablet, max)
				font-size: 36px
			+mq(tablet-small, max)
				max-width: 430px
			+mq(phablet-small, max)
				font-size: 26px
			+mq(phone, max)
				font-size: 22px

		&__description
			margin: 14px 0
			font-weight: 300
			font-size: 20px
			max-width: 560px
			color: $color-grey-dark
			+mq(phablet-small, max)
				font-size: 16px
				max-width: 330px

		&__image
			background-image: url('../../assets/images/hero-min.png')
			background-position: center
			background-size: cover
			width: 100%
			height: 100%
			margin: 0 auto
			+mq(tablet-small, max)
				display: none

	@media (max-height: 800px) and (min-width: 600px)
		.hero-block
			height: 50vh

</style>
