<template lang='pug'>

	.search-bar
		nav.search-bar__nav
			.search-bar__wrapper.white.nav-wrapper
				form.search-bar__form(v-on:submit.prevent='loadAnimeSearched(query)')
					.search-bar__field.input-field
						input#search.search-bar__input(type='search'
							v-model='query' placeholder='Search...')

						label.search-bar__label.label-icon(for='search')
							i.search-bar__icon.material-icons.black-text search

</template>

<script>

	// IMPORTS

	import { mapActions, mapGetters } from 'vuex';

	// COMPONENT OPTIONS

	export default {
		name: 'SearchBar',
		data: () => ({
			query: ''
		}),
		methods: {
			...mapActions(['loadAnimeSearched'])
		}
	};

</script>

<style lang='sass' scoped>

	// IMPORTS

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'

	// SEARCH BAR

	.search-bar
		width: 100%

		&__nav
			width: 100%
			height: 34px
			border-radius: 3px

		&__wrapper
			border-radius: 3px

		&__field
			border-radius: 3px
			background-color: $color-white

		&__input
			border-radius: 3px
			padding-left: 50px !important
			width: calc(100% - 50px) !important
			&::placeholder
				color: $color-grey-dark !important

		&__label
			left: 14px !important

		&__icon
			height: 34px
			line-height: 34px

</style>
