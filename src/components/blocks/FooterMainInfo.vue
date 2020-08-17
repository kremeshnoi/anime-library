<template lang="pug">

	.footer-main-info.page-footer
		.footer-main-info__container
			.footer-main-info__item
				h5.footer-main-info__title
					| Discord channel
				p.footer-main-info__description
					| We will also be happy to meet you on our channel, where you can always find like-minded people. Feel free to come in.
				a.footer-main-info__link_decor.btn(href="https://discord.com/invite/Ku72D5/"
																target="_blank")
					| Chat

			.footer-main-info__item
				h5.footer-main-info__title.footer-main-info__subtitle
					| Sign in required
				router-link.footer-main-info__link(to="")
					| Search page
				router-link.footer-main-info__link(to="")
					| Your library

			.footer-main-info__item
				h5.footer-main-info__title
					| Help
				router-link.footer-main-info__link(to="")
					| Q/A
				router-link.footer-main-info__link(to="/register")
					| Registration
				router-link.footer-main-info__link(to="/recovery")
					| Forgot Password?

</template>

<script>

	export default {
		name: "FooterMainInfo"
	};

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"
	@import "../../assets/styles/modules/buttons.sass"

	.footer-main-info
		text-align: start
		padding: 0
		background-color: $color-blue

		&__container
			width: 100%
			max-width: 1300px
			margin: 0 auto
			padding: 40px 40px 40px 40px
			display: grid
			grid-gap: 40px
			flex-wrap: wrap
			align-items: flex-start
			justify-content: space-between
			grid-template-columns: repeat(3, 1fr)

		&__title
			padding: 0 0 8px 0

		&__subtitle
			border-bottom: 1px solid rgba($color-orange, 0.6)

		&__link
			margin: 8px 0 0 0
			color: $color-white
			&:hover
				opacity: 0.6
			&_decor
				margin: 16px 0 0 0
				@extend .shadow-btn
				@extend .hover-btn
				@extend .focus-btn

		&__item
			height: 100%
			padding: 0 24px 0 0
			justify-content: flex-start !important
			border-right: 1px solid rgba(225, 225, 225, 0.2)
			+flex(center, flex-start, column)
			&:last-of-type
				border: none

		&__description
			margin: 8px 0 0 0
			max-width: 300px
			+mq(tablet-mid, max)
				max-width: 70%

</style>
