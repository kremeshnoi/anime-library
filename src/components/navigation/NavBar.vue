<template lang='pug'>

	nav.navbar
		.navbar__wrapper.nav-wrapper
			router-link.navbar__logo(to='/')
				| Otaku Library
			.navbar__sign-in(v-if='this.user[0] === null')
				router-link.navbar__sign-in-link(to='/sign-in')
					| Sing in
					i.navbar__icon.material-icons exit_to_app
				router-link.navbar__sign-in-link_mobile(to='/sign-in')
					i.navbar__icon.material-icons exit_to_app

</template>

<script>

	import { mapActions } from "vuex";

	export default {
		name: 'NavBar',
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

	.navbar
		height: 54px
		line-height: 54px
		background-color: $color-blue
		top: 0
		position: fixed
		z-index: 99
		padding: 0 40px 0 40px

		&__wrapper
			width: 100%
			+flex(center, center, row)

		&__logo
			font-size: 26px
			color: $color-white
			font-family: 'Days One', sans-serif
			+mq(phablet, max)
				font-size: 22px

		&__sign-in
			position: absolute
			right: 0
			top: 0

		&__sign-in-link
			+flex(center, center, row)
			+mq(phablet, max)
				display: none
			&:hover
				.navbar__icon
					transform: translateX(4px)
			&_mobile
				display: none
				+mq(phablet, max)
					display: block

		&__icon
			margin: 0 0 0 6px
			height: 54px
			line-height: 54px

</style>
