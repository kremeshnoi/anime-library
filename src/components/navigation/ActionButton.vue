<template lang='pug'>

	.action-button.fixed-action-btn
		a#action-button.action-button__trigger.btn-floating.btn-large
			i.action-button__icon.large.material-icons menu
		ul.action-button__list
			li.action-button__list-item
				router-link.action-button__link.action-button__link_disabled.btn-floating(to='/settings')
					i.action-button__icon.material-icons settings
			li.action-button__list-item
				router-link.side-nav__link.action-button__link_disabled.btn-floating(to='/profile')
					i.action-button__icon.material-icons account_circle
			li.action-button__list-item
				router-link.side-nav__link.btn-floating(to='/search')
					i.action-button__icon.material-icons search
			li.action-button__list-item
				router-link.side-nav__link.btn-floating(to='/library/manga')
					i.action-button__icon.material-icons book
			li.action-button__list-item
				router-link.side-nav__link.btn-floating(to='/library/anime')
					i.action-button__icon.material-icons video_library

</template>

<script>

	export default {

		name: 'ActionButton',
		mounted() {
			const tap = document.querySelectorAll('.tap-target')
			const tap_init = M.TapTarget.init(tap)
			const tap_instance = M.TapTarget.getInstance(tap);
			tap_instance.open();

			const action_btn = document.querySelectorAll('.fixed-action-btn');
			const action_btn_instance = M.FloatingActionButton.init(action_btn);
		}

	}

</script>

<style lang='sass' scoped>

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'

	.action-button
		&__link
			&_disabled
				pointer-events: none
				.action-button__icon
					background-color: $color-grey

		&__icon
			background-color: $color-blue-light


</style>
