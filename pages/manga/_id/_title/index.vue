<template lang="pug">

	.manga
		.manga__container
			.manga__main-content
				h1.manga__title
					| {{ mangaById.title }}
					.divider-hidden
					| {{ mangaById.title_japanese }}
				.manga__cover-container
					img.manga__cover(
						draggable="false"
						:src="mangaById.image_url")

					select-options.manga__input-field(
						v-if="mangaById.type"
						:type="mangaById.type"
						:wholeResult="mangaById")

				info.manga__info(:infoData="mangaById")

			.manga__sub-content
				characters.manga__characters(:charactersData="mangaCharactersById.characters")

				related.manga__related(
					:wholeData="mangaById"
					:relatedData="mangaById.related")

			description.manga__description(:descriptionData="mangaById.synopsis")

			recommendations.manga__recommendations(:recommendationsData="mangaRecommendationsById.recommendations")

</template>

<script>

	import jikanjs from "jikanjs/lib/jikan"
	import Info from "@/components/elements/Info"
	import Cards from "@/components/elements/Cards"
	import Related from "@/components/elements/Related"
	import Characters from "@/components/elements/Characters"
	import Description from "@/components/elements/Description"
	import layoutMiddleware from "@/middleware/layoutMiddleware"
	import SelectOptions from "@/components/elements/SelectOptions"
	import Recommendations from "@/components/elements/Recommendations"

	export default {
		name: "Manga",
		metaInfo() {
			return {
				title: `Manga - ${this.mangaById.title}`
			}
		},
		components: {
			Info,
			Cards,
			Related,
			Characters,
			Description,
			SelectOptions,
			Recommendations
		},
		layout: layoutMiddleware,
		async asyncData({ params }) {
			const mangaByIdResponse = await jikanjs.loadManga(params.id)
			const mangaCharactersResponse = await jikanjs.loadManga(
				params.id,
				"characters"
			)
			const mangaRecommendationsByIdResponse = await jikanjs.loadManga(
				params.id,
				"recommendations"
			)
			return {
				mangaById: mangaByIdResponse,
				mangaCharactersById: mangaCharactersResponse,
				mangaRecommendationsById: mangaRecommendationsByIdResponse,
			}
		},
		async mounted() {
			const modal = document.querySelectorAll(".modal")
			const modal_instance = M.Modal.init(modal)
			if (Object.keys(this.mangaById.related).length > 0) {
				const tabs = document.querySelectorAll(".tabs")
				const instanceTabs = M.Tabs.init(tabs)
			}
		}
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"
	@import "~/assets/styles/modules/titles"
	@import "~/assets/styles/modules/dividers"
	@import "~/assets/styles/modules/containers"

	.manga
		width: 100%

		&__container
			display: grid
			row-gap: 40px
			column-gap: 20px
			grid-template-columns: 1fr 1fr
			grid-template-areas: "main sub" "description description" "recommendations recommendations"
			@extend .container-default
			+mq(tablet-mid, max)
				grid-template-columns: 1fr
				grid-template-areas: "main" "sub" "description" "recommendations"

		&__main-content
			display: grid
			grid-gap: 20px
			grid-area: main
			align-content: start
			justify-content: start
			grid-template-rows: 50 auto
			grid-template-areas: "title title" "cover info"
			+mq(phablet, max)
				grid-template-rows: auto
				grid-template-areas: "title" "cover" "info"

		&__sub-content
			display: grid
			row-gap: 40px
			grid-area: sub
			column-gap: 20px
			align-content: flex-start
			justify-content: flex-start
			grid-template-columns: minmax(auto, 360px)
			+mq(tablet-mid, max)
				justify-content: flex-start

		&__cover-container
			display: grid
			row-gap: 20px
			grid-area: cover
			grid-area: cover
			justify-content: flex-start
			grid-template-rows: min-content

		&__title
			font-size: 20px
			max-width: 460px
			grid-area: title
			text-align: start
			-webkit-line-clamp: 2
			@extend .title-vertical-cut

		&__input-field
			margin: 0
			max-width: 220px

</style>
