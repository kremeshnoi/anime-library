<template lang='pug'>

	nav.navbar
		.navbar__wrapper.nav-wrapper
			router-link.navbar__logo(to='/')
				| Otaku Library
			search-bar.navbar__search-bar
			.navbar__sign-in(v-if='this.user[0] === null')
				router-link.navbar__sign-in-link(to='/sign-in')
					| Sign in
					i.navbar__icon.material-icons exit_to_app
				router-link.navbar__sign-in-link_mobile(to='/sign-in')
					i.navbar__icon.material-icons exit_to_app
			.navbar__sign-out(v-else)
				a.navbar__sign-in-link(@click='signOut')
					| Sign out
					i.navbar__icon.material-icons exit_to_app
				a.navbar__sign-in-link_mobile(@click='signOut')
					i.navbar__icon.material-icons exit_to_app

</template>

<script>

	// IMPORTS

	import { mapActions } from "vuex";
	import SearchBar from "@/components/elements/SearchBar";

	// COMPONENT OPTIONS

	export default {
		name: 'Navbar',
		components: {SearchBar},
		data:()=> {
			return {
				user: []
			}
		},
		async created() {
			await this.getUid().then(result => this.user.push(result));
		},
		methods: {
			...mapActions(['getUid']),
			signOut() {
				try {
					this.$store.dispatch('signOut');
				} catch (error) {
					throw new Error(error);
				}
			}
		}
	};

</script>

<style lang='sass' scoped>

	// IMPORTS

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'

	// NAVBAR STYLES

	.navbar
		height: 58px
		line-height: 58px
		background-color: $color-blue
		top: 0
		position: absolute
		z-index: 99
		padding: 0 40px 0 40px

		&__wrapper
			width: 100%
			display: grid
			grid-template-columns: 200px minmax(auto, 1220px) 200px
			align-items: center
			justify-content: space-between

		&__logo
			font-size: 26px
			color: $color-white
			font-family: 'Days One', sans-serif
			+mq(phablet, max)
				font-size: 22px

		&__sign-in-link
			+flex(flex-end, center, row)
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
