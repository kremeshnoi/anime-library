<template lang="pug">

	.footer-main-info.page-footer
		.footer-main-info__container
			.footer-main-info__item
				h5.footer-main-info__title
					| Discord channel
				p.footer-main-info__description
					| We will also be happy to meet you on our channel, where you can always find like-minded people. Feel free to come in.
				a.footer-main-info__link_decor.btn(
					href="https://discord.com/invite/Ku72D5/",
					target="_blank"
				)
					| Chat

			.footer-main-info__item
				h5.footer-main-info__title.footer-main-info__subtitle
					| Donation
				a.footer-main-info__link.footer-main-info__link_support(href="https://www.patreon.com/otaku_library" target="_blank")
					img.footer-main-info__support(draggable="false" src="@/assets/images/patreon.png")

			.footer-main-info__item
				h5.footer-main-info__title
					| Help
				router-link.footer-main-info__link.footer-main-info__link_disabled(
					to="/faq"
				)
					| FAQ
				router-link.footer-main-info__link(
					to="/sign-up",
					:class="{ 'footer-main-info__link_disabled': this.user[0] !== null }"
				)
					| Registration
				router-link.footer-main-info__link(
					to="/recovery",
					:class="{ 'footer-main-info__link_disabled': this.user[0] !== null }"
				)
					| Forgot Password?

</template>

<script>

	import { mapActions } from "vuex"

	export default {
		name: "FooterMainInfo",
		data() {
			return {
				user: [],
			}
		},
		async created() {
			await this.getUid().then((result) => this.user.push(result))
		},
		methods: {
			...mapActions({
				getUid: "auth/getUid",
			})
		}
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"
	@import "~/assets/styles/modules/buttons"

	.footer-main-info
		padding: 0
		text-align: start
		background-color: $color-blue

		&__support
			width: 100%

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
			padding: 0 0 8px 0

		&__subtitle
			width: 100%
			max-width: 218px
			border-bottom: 1px solid rgba($color-orange, 0.6)

		&__link
			margin: auto 0
			color: $color-white
			&:hover
				opacity: 0.8
			&_disabled
				opacity: 0.8
				cursor: pointer
				pointer-events: none
			&_decor
				margin: 16px 0 0 0
				@extend .hover-btn
				@extend .focus-btn
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
