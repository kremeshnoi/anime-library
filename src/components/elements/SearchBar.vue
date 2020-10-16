<template lang='pug'>

	.search-bar(@click='showDropdown($event)'
		data-target='dropdown')
		nav.search-bar__nav
			.search-bar__wrapper.white.nav-wrapper
				form.search-bar__form(v-model='type'
					@submit.prevent='search(query)')
					.search-bar__field.input-field
						input#search.search-bar__input(type='search'
							v-model='query'
							placeholder='Search...')

						label.search-bar__label.label-icon(for='search')
							i.search-bar__icon.material-icons.black-text search

		drop-down(v-if='isActive'
			:type = 'type'
			@changeType='updateType'
			@click='isActive = false'
			:loaderData = 'isLoading'
			:class=`'dropdown_is-shown'`
			:searchedData='query && searchedData.length ? searchedData : []')

</template>

<script>

	// IMPORTS

	import { mapActions, mapGetters } from 'vuex';
	import DropDown from "@/components/elements/DropDown";

	// COMPONENT OPTIONS

	export default {
		name: 'SearchBar',
		components: {
			DropDown
		},
		data: () => ({
			query: '',
			type: 'anime',
			isLoading: false,
			isActive: false,
			searchedData: []
		}),
		computed: {
			...mapGetters(['getAnimeSearched', 'getMangaSearched'])
		},
		methods: {
			...mapActions(['loadAnimeSearched', 'loadMangaSearched', 'computeRoute']),
			showDropdown(event) {
				const dropDownEl = document.querySelector('.cards__wrapper')

				this.query = '';
				if(event.target.classList.contains('overlay') || dropDownEl) {
					this.isActive = false;
				} else {
					this.isActive = true;
				}
			},
			updateType(el) {
				this.type = el
			},
			async search(query) {
				this.isLoading = true;
				await new Promise(resolve => setTimeout(resolve, 1500));
				if (this.type === 'anime') {
					await this.loadAnimeSearched(query);
					this.searchedData = this.getAnimeSearched;
				} else if (this.type === 'manga') {
					await this.loadMangaSearched(query);
					this.searchedData = this.getMangaSearched;
				}

				this.isLoading = false;
			}
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
		position: relative

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
			border-radius: 3px !important
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
