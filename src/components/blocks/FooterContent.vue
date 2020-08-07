<template lang="pug">

	.footer-content.page-footer
		.footer-content__container
			.footer-content__item
				h5.footer-content__title
					| Discord channel
				p.footer-content__description
					| We will also be happy to meet you on our channel, where you can always find like-minded people. Feel free to come in.
				a.footer-content__link_decor.btn(href="https://discord.com/invite/Ku72D5/"
														target="_blank")
					| Chat

			.footer-content__item
				h5.footer-content__title
					| Sitemap
				router-link.footer-content__link(to="")
					| About project
				h6.footer-content__subtitle
					| Sign in required
				router-link.footer-content__link(to="")
					| Search page
				router-link.footer-content__link(to="")
					| Your library

			.footer-content__item
				h5.footer-content__title
					| Help
				router-link.footer-content__link(to="/recovery")
					| Forgot Password?
				router-link.footer-content__link(to="")
					| Q/A

</template>

<script>

	export default {
		name: "FooterContent"
	};

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"
	@import "../../assets/styles/modules/buttons.sass"

	.footer-content
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
			padding: 16px 0 8px 0
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
