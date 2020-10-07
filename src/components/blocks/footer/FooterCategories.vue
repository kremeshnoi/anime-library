<template lang='pug'>

	.footer-categories
		.footer-categories__container
			.footer-categories__item.footer-categories-item(v-for='(result, index) in getCategories'
				:key='index')
				router-link.footer-categories-item__title(:to=`result.link`)
					| {{ result.title }}
					.footer-categories-item__icon.material-icons keyboard_arrow_right

				.footer-categories-item__content(v-for='(data, counter) in result.data'
					:key='counter')

					p.footer-categories-item__digit
						| {{ counter + 1 }}
					a.footer-categories-item__link(@click='computeRoute(data)')
						| {{ data.title }}

</template>

<script>

	// IMPORTS

	import { mapActions, mapGetters } from 'vuex';

	// COMPONENT OPTIONS

	export default {
		name: 'FooterCategories',
		computed: {
			...mapGetters(['getAnimeFavorite',  'getMangaFavorite', 'getCharactersFavorite']),
			getCategories() {
				const categories = {
					anime: {
						title: 'Top Anime',
						link: '/anime/top',
						data: this.getAnimeFavorite.splice(0, 9)
					},
					manga: {
						title: 'Top Manga',
						link: '/manga/top',
						data: this.getMangaFavorite.splice(0, 9)
					},
					characters: {
						title: 'Most Popular Characters',
						link: '/characters/popular',
						data: this.getCharactersFavorite.splice(0, 9)
					}
				};
				return categories
			}
		},
		async created() {
			await this.loadAnimeFavorite();
			await this.loadMangaFavorite();
			await this.loadCharactersFavorite();
		},
		methods: {
			...mapActions(['loadAnimeFavorite', 'loadCharactersFavorite', 'loadMangaFavorite', 'computeRoute'])
		}
	};

</script>

<style lang='sass' scoped>

	// IMPORTS

	@import '../../../assets/styles/utils/vars'
	@import '../../../assets/styles/utils/mixins'

	// FOOTER CATEGORIES STYLES

	.footer-categories
		background-color: $color-white-dark

		&__container
			display: grid
			width: 100%
			justify-content: space-between
			grid-gap: 40px
			grid-template-columns: repeat(3, 1fr)
			max-width: 1300px
			margin: 0 auto
			padding: 40px 40px 40px 40px
			text-align: start
			+mq(tablet, max)
				grid-template-columns: 1fr 1fr
			+mq(tablet-small, max)
				grid-template-columns: 1fr

	// FOOTER CATEGORIES ITEM

	.footer-categories-item
		+flex(flex-start, flex-start, column)

		&__title
			color: $color-black
			font-size: 16px
			text-align: start
			padding: 0 0 8px 0
			width: 100%
			border-bottom: 1px solid rgba($color-black, 0.2)
			+flex(space-between, center, row)
			&:hover
				color: $color-orange

				.pre-footer-top-anime__icon
					color: inherit

		&__content
			margin: 8px 0 0 0
			+flex(center, flex-start, row)

		&__digit
			margin: 0 8px 0 0

		&__link
			color: $color-blue
			&:hover
				text-decoration: underline $color-blue

</style>
