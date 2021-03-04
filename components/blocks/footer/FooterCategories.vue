<template lang="pug">

  section.footer-categories
    .footer-categories__container
      .footer-categories__item.footer-categories-item(
        :key="categoryIndex"
        v-for="(category, categoryIndex) in categories")
        router-link.footer-categories-item__title(:to="category.link")
          | {{ category.title }}

          .footer-categories-item__icon.material-icons keyboard_arrow_right
        .footer-categories-item__content(
          :key="itemIndex"
          v-for="(resultItem, itemIndex) in category.data")
          p.footer-categories-item__digit
            | {{ itemIndex + 1 }}

          a.footer-categories-item__link(
            @click="computeRoute({ resultItem })"
            @click.middle="computeRoute({ resultItem, clickType })")
            | {{ resultItem.title }}

</template>

<script>

  import { mapActions, mapGetters } from "vuex"

  export default {
    name: "FooterCategories",
    data() {
      return {
        clickType: "middle"
      }
    },
    computed: {
      ...mapGetters({
        getAnimeFavoriteCategories: "anime/getAnimeFavoriteCategories",
        getMangaFavoriteCategories: "manga/getMangaFavoriteCategories",
        getCharactersFavoriteCategories: "characters/getCharactersFavoriteCategories"
      }),
      categories() {
        const categories = {
          anime: {
            title: "Top Anime",
            link: "/anime/top",
            data: this.getAnimeFavoriteCategories,
          },
          manga: {
            title: "Top Manga",
            link: "/manga/top",
            data: this.getMangaFavoriteCategories,
          },
          characters: {
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
        computeRoute: "computeRoute",
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

	.footer-categories
		background-color: $color-white-dark

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

	.footer-categories-item
		+flex(flex-start, flex-start, column)

		&__title
			width: 100%
			font-size: 16px
			text-align: start
			padding: 0 0 8px 0
			color: $color-black
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
