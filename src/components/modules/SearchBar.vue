<template lang='pug'>

	.search-bar
		nav.search-bar__nav
			.search-bar__wrapper.white.nav-wrapper
				form.search-bar__form( v-on:submit.prevent='loadAnimeSearched(query)' )
					.search-bar__field.input-field
						input#search.search-bar__input( type='search'
																  v-model='query' )

						label.search-bar__label.label-icon( for='search' )
							i.search-bar__icon.material-icons.black-text search

</template>

<script>

	import { mapActions, mapGetters } from 'vuex';

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

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'

	.search-bar
		width: 100%

		&__nav
			width: 100%
			height: 50px
			margin: 0 0 54px
			border-radius: 3px

		&__wrapper
			border-radius: 3px

		&__field
			border-radius: 3px
			background-color: $color-white

		&__input
			border-radius: 3px

		&__icon
			height: 50px
			line-height: 50px

</style>
