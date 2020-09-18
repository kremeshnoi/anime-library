<template lang='pug'>

	.footer-main-info.page-footer
		.footer-main-info__container
			.footer-main-info__item
				h5.footer-main-info__title
					| Discord channel
				p.footer-main-info__description
					| We will also be happy to meet you on our channel, where you can always find like-minded people. Feel free to come in.
				a.footer-main-info__link_decor.btn(href='https://discord.com/invite/Ku72D5/'
					target='_blank')
					| Chat

			.footer-main-info__item
				h5.footer-main-info__title.footer-main-info__subtitle
					| Sign in required
				router-link.footer-main-info__link(to='/search')
					| Search page
				router-link.footer-main-info__link(to='/library')
					| Your library

			.footer-main-info__item(v-if='this.user[0] === null')
				h5.footer-main-info__title
					| Help
				router-link.footer-main-info__link(to='/about')
					| Q/A
				router-link.footer-main-info__link(to='/sign-up')
					| Registration
				router-link.footer-main-info__link(to='/recovery')
					| Forgot Password?

			.footer-main-info__item(v-else)
				h5.footer-main-info__title
					| Help
				router-link.footer-main-info__link(to='/about')
					| Q/A
				router-link.footer-main-info__link(to='/recovery')
					| Forgot Password?

</template>

<script>

	import {mapActions} from "vuex";

	export default {
		name: 'FooterMainInfo',
		data:()=> {
			return {
				user: []
			}
		},
		methods: {
			...mapActions(['getUid'])
		},
		async created() {
			await this.getUid().then(result => this.user.push(result));
		}
	};

</script>

<style lang='sass' scoped>

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'
	@import '../../assets/styles/modules/buttons'

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
			+mq(tablet, max)
				grid-template-columns: 1fr 1fr
			+mq(tablet-small, max)
				grid-template-columns: 1fr
				justify-content: center

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
			+mq(tablet, max)
				border: none
				padding: 0

		&__description
			margin: 8px 0 0 0
			max-width: 300px

</style>
