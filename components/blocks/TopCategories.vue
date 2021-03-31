<template lang="pug">

	section.top-categories
		.top-categories__container
			.top-categories__item.top-categories-item(
				:key="categoryIndex"
				v-for="(category, categoryIndex) in categories")
				nuxt-link.top-categories-item__title(:to="category.link")
					| {{ category.title }}

					.top-categories-item__icon.material-icons keyboard_arrow_right
				.top-categories-item__content(
					:key="itemIndex"
					v-for="(resultItem, itemIndex) in category.data")
					p.top-categories-item__digit
						| {{ itemIndex + 1 }}

					nuxt-link.top-categories-item__link(:to="{ name: `${ category.type }-id-title`, params: { id: resultItem.mal_id, title: $formatRouteTitle(resultItem.title) } }")
						| {{ resultItem.title }}

</template>

<script>

	import { mapActions, mapGetters } from "vuex"

	export default {
		name: "TopCategories",
		computed: {
			...mapGetters({
				getAnimeFavoriteCategories: "anime/getAnimeFavoriteCategories",
				getMangaFavoriteCategories: "manga/getMangaFavoriteCategories",
				getCharactersFavoriteCategories: "characters/getCharactersFavoriteCategories"
			}),
			categories() {
				const categories = {
					anime: {
						type: "anime",
						title: "Top Anime",
						link: "/anime/top",
						data: this.getAnimeFavoriteCategories,
					},
					manga: {
						type: "manga",
						title: "Top Manga",
						link: "/manga/top",
						data: this.getMangaFavoriteCategories,
					},
					characters: {
						type: "characters",
						title: "Most Popular Characters",
						link: "/characters/popular",
						data: this.getCharactersFavoriteCategories,
					}
				}

				return categories
			}
		},
		async created() {
			await this.loadAnimeFavoriteCategories()
			await this.loadMangaFavoriteCategories()
			await this.loadCharactersFavoriteCategories()
		},
		methods: {
			...mapActions({
				loadAnimeFavoriteCategories: "anime/loadAnimeFavoriteCategories",
				loadMangaFavoriteCategories: "manga/loadMangaFavoriteCategories",
				loadCharactersFavoriteCategories: "characters/loadCharactersFavoriteCategories"
			})
		}
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"

	.top-categories
		background-color: $color-white_dim

		&__container
			width: 100%
			display: grid
			grid-gap: 40px
			margin: 0 auto
			max-width: 1300px
			text-align: start
			padding: 40px 40px 40px 40px
			justify-content: space-between
			grid-template-columns: repeat(3, 1fr)
			+mq(tablet, max)
				grid-template-columns: 1fr 1fr
			+mq(tablet-small, max)
				grid-template-columns: 1fr

	.top-categories-item
		+flex(flex-start, flex-start, column)

		&__title
			width: 100%
			font-size: 16px
			text-align: start
			padding: 0 0 8px 0
			color: $color-black
			text-decoration: none
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
