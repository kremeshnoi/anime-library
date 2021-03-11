<template lang="pug">

  section.hero
    .hero__container
      .hero__text-side
        h1.hero__title
          | Organize your library. Find, add, modify, communicate
        p.hero__description
          | Join us to get full access of the site functionality
        nuxt-link.hero__button.btn(to="/sign-up")
          | JOIN US
      .hero__image-side
        .hero__image

</template>

<script>

  export default {
    name: "Hero"
  }

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"
	@import "~/assets/styles/modules/buttons"
	@import "~/assets/styles/modules/containers"

	.hero
		height: 34vh
		user-select: none

		&__container
			height: 100%
			display: grid
			@extend .container-default
			grid-template-columns: 1fr 1fr
			+mq(tablet-small, max)
				grid-template-rows: 1fr
				grid-template-columns: 1fr
				background-size: 100px 100px
				background-repeat: no-repeat
				background-position: bottom right
				background-image: url("../../assets/images/hero-min.png")

		&__text-side
			text-align: start
			+flex(center, flex-start, column)
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
			font-size: 42px
			max-width: 100%
			font-weight: 800
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
			font-size: 20px
			font-weight: 300
			max-width: 560px
			color: $color-grey-dark
			+mq(phablet-small, max)
				font-size: 16px
				max-width: 330px

		&__image
			width: 100%
			height: 100%
			margin: 0 auto
			background-size: contain
			background-position: center
			background-repeat: no-repeat
			background-image: url("../../assets/images/hero-min.png"), url("../../assets/images/clouds.png")
			+mq(tablet-small, max)
				display: none
	@media (max-height: 800px) and (min-width: 600px)
		.hero
			height: 50vh

</style>
