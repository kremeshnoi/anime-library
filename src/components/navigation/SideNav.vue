<template lang='pug'>

		ul.side-nav.sidenav
			li.side-nav__item
				.side-nav__user.user-view
					button.side-nav__btn.side-nav__btn(@click='collapse')
						i.side-nav__icon.side-nav__icon-arrow.material-icons.grey-text file_upload

					button.side-nav__btn.side-nav__btn
						i.side-nav__icon.side-nav__icon-settings.material-icons.grey-text settings

					.side-nav__background.background
						img.side-nav__background-image
					.side-nav__avatar-wrapper
						img.side-nav__avatar.circle(src='@/assets/images/user.jpg')

			li.side-nav__item
				.side-nav__divider.divider

			li.side-nav__item
				span.side-nav__username
					| {{ getUserInfo }}

			li.side-nav__item
				.side-nav__divider.divider

			li.side-nav__item
				router-link.side-nav__link(to='/')
					| Home
					i.side-nav__icon.side-nav__icon-route.material-icons.grey-text home

			li.side-nav__item
				router-link.side-nav__link(to='/search')
					| Search
					i.side-nav__icon.side-nav__icon-route.material-icons.grey-text search

			li.side-nav__item
				router-link.side-nav__link(to='/library')
					| My Library
					i.side-nav__icon.side-nav__icon-route.material-icons.grey-text view_module

			li.side-nav__item
				.side-nav__divider.divider

			ul.side-nav__footer
				li.side-nav__item
					.side-nav__logout
						a.side-nav__link-logout(@click='signOut')
							| Sign out
							i.material-icons.side-nav__icon-logout.grey-text exit_to_app

						a.side-nav__link-logout(@click='signOut')
							i.material-icons.side-nav__icon-route.side-nav__icon-route-logout.grey-text exit_to_app

				li.side-nav__item
					.footer-copyright.subheader.copyright-text.grey-text
						.container
							| © 2020 Otaku Library

</template>

<script>

	import { mapActions, mapGetters } from 'vuex';

	export default {
		name: 'SideNav',
		methods: {
			...mapActions(['loadUserInfo']),
			collapse() {
				const sidenav = document.querySelector('.sidenav');
				const sidenav_overlay = document.querySelector('.sidenav-overlay');
				const icon_arrow = document.querySelector('.side-nav__icon-arrow');
				const icons_route = document.querySelectorAll('.side-nav__icon-route');
				const sidenav_instance = M.Sidenav.init(sidenav, { preventScrolling: false, inDuration: 0, outDuration: 0, draggable: false });

				sidenav_instance._overlay.addEventListener('click', toogleElems, false)

				function toogleElems() {
					sidenav.classList.toggle('side-nav_release');
					icon_arrow.classList.toggle('side-nav__icon_rotate');
					icons_route.forEach((el) => {
						el.classList.toggle('side-nav__icon_hide');
					});
				}

				if (sidenav_overlay.style.display === 'block') {
					sidenav_instance.close();
				} else {
					sidenav_instance.open();
				};

				toogleElems();
			},
			signOut() {
				try {
					this.$store.dispatch('signOut');
					M.toast({ html: 'Signed Out successfully', classes: 'green' });
				} catch (error) {
					throw new Error(error);
				}
			}
		},
		computed: {
			...mapGetters(['getUserInfo'])
		},
		async created() {
			await this.loadUserInfo();
		}
	};

</script>

<style lang='sass' scoped>

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'

	.side-nav
		transition: 0.25s
		margin-top: 54px
		height: 100%
		transform: translate(-80%) !important
		background-color: $color-black

		&_release
			transform: translate(0%) !important

		&__user
			padding: 40px !important
			margin: 0 !important

		&__avatar
			height: 84px !important
			width: 84px !important
			box-shadow: 4px 4px 5px -1px rgba(0, 0, 0, 0.65)

		&__avatar-wrapper
			margin: auto
			width: min-content

		&__username
			color: $color-white
			font-family: 'Cairo', sans-serif

		&__btn
			border: none
			background: none
			margin: 0
			padding: 0
			position: absolute
			right: 20px
			height: 24px
			cursor: pointer
			&:nth-of-type(1)
				top: 20px
			&:nth-of-type(2)
				bottom: 20px

		&__link
			display: flex
			justify-content: center
			color: $color-white
			&:hover
				opacity: 0.7

		&__link-logout
			display: flex
			align-items: center
			color: $color-white
			&:hover
				.side-nav__icon-logout
					transform: translateX(4px)

		&__icon
			&:hover
				opacity: 0.7
			&_hide
				display: none !important
				opacity: 0
			&_rotate
				transform: rotate(-90deg) !important

		&__icon-route
			position: absolute
			right: 21px
			margin: 0 !important
			padding: 0
			display: block
			opacity: 1
			&-logout
				display: block
				position: absolute
				right: 21px
				bottom: 0
				&:hover
					opacity: 0.7

		&__icon-settings
			color: $color-grey-dark

		&__icon-arrow
			transform: rotate(90deg)

		&__icon-logout
			position: static
			margin: 0 0 0 6px

		&__divider
			opacity: 0.4
			margin: 0 !important
			background-color: $color-grey-dark

		&__logout
			width: 100%
			display: flex
			justify-content: center
			align-items: center

		&__footer
			width: 100%
			bottom: 74px
			position: absolute

	.prevent-events
		pointer-events: none !important

</style>
