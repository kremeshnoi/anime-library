<template lang="pug">

	section.footer-info
		.footer-info__container
			.footer-info__item
				h2.footer-info__title
					| Discord channel
				p.footer-info__description
					| We will also be happy to meet you on our channel, where you can always find like-minded people. Feel free to come in.
				a.footer-info__link_decor.btn(
					target="_blank"
					rel="noreferrer"
					href="https://discord.com/invite/Ku72D5/")
					| Chat

			.footer-info__item
				h2.footer-info__title.footer-info__subtitle
					| Donation
				a.footer-info__link.footer-info__link_support(
					target="_blank"
					rel="noreferrer"
					href="https://www.patreon.com/otaku_library")
					img.footer-info__support(
						draggable="false"
						alt="patreon donation"
						src="@/assets/images/patreon.png")

			.footer-info__item
				h2.footer-info__title
					| Help
				nuxt-link.footer-info__link(to="/faq")
					| FAQ
				nuxt-link.footer-info__link(
					v-if="!isAutheticated"
					to="/sign-up")
					| Registration
				nuxt-link.footer-info__link(
					to="/recovery")
					| Forgot Password?

</template>

<script>

	export default {
		name: "FooterInfo",
		data() {
			return {
				isAutheticated: null
			}
		},
		created() {
			this.isAutheticated = this.$cookies.get("isAutheticated")
		},
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"
	@import "~/assets/styles/modules/shadow"

	.footer-info
		color: $color-white
		padding: 0
		text-align: start
		background-color: $color-blue

		&__support
			width: 240px
			height: 92px

		&__container
			width: 100%
			display: grid
			margin: 0 auto
			grid-gap: 40px
			flex-wrap: wrap
			max-width: 1300px
			align-items: flex-start
			padding: 40px 40px 40px 40px
			justify-content: space-between
			grid-template-columns: repeat(3, 1fr)
			+mq(tablet, max)
				grid-template-columns: 1fr 1fr
			+mq(tablet-small, max)
				justify-content: center
				grid-template-columns: 1fr

		&__title
			font-size: 26px
			padding: 0 0 8px 0

		&__subtitle
			width: 100%
			max-width: 240px
			border-bottom: 1px solid rgba($color-orange, 0.6)

		&__link
			margin: 10px 0
			color: $color-white
			&:hover
				text-decoration: underline
			&_decor
				background-color: $color-aquamarine
				margin: 16px 0 0 0
				@extend .shadow-btn

		&__item
			height: 100%
			padding: 0 24px 0 0
			+flex(center, flex-start, column)
			justify-content: flex-start !important
			border-right: 1px solid rgba(225, 225, 225, 0.2)
			&:last-of-type
				border: none
			+mq(tablet, max)
				padding: 0
				border: none

		&__description
			max-width: 300px
			margin: 8px 0 0 0

</style>
