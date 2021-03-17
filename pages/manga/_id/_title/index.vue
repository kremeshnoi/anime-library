<template lang="pug">

	main.manga
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

					Select.manga__input-field(
						v-if="mangaById.type"
						:type="mangaById.type"
						:wholeResult="mangaById")

				Info.manga__info(:infoData="mangaById")

			.manga__sub-content
				Characters.manga__characters(:charactersData="mangaCharactersById.characters" :wholeData="mangaById")

				Related.manga__related(
					relatedType="manga"
					:wholeData="mangaById")

			Description.manga__description(:descriptionData="mangaById.synopsis")

			Recommendations.manga__recommendations(:recommendationsData="mangaRecommendationsById.recommendations")

			//- Comments.manga__comments

</template>

<script>

	import jikanjs from "jikanjs/lib/jikan"
	import Info from "@/components/blocks/Info"
	import Related from "@/components/blocks/Related"
	import Select from "@/components/elements/Select"
	import Characters from "@/components/blocks/Characters"
	import Description from "@/components/blocks/Description"
	import layout from "~/middleware/layout"
	import Recommendations from "@/components/blocks/Recommendations"

	export default {
		name: "Manga",
		metaInfo() {
			return {
				title: `Manga - ${this.mangaById.title}`
			}
		},
		components: {
			Info,
			Select,
			Related,
			Characters,
			Description,
			Recommendations
		},
		layout: layout,
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
	@import "~/assets/styles/modules/shadow"
	@import "~/assets/styles/modules/dividers"
	@import "~/assets/styles/modules/containers"

	.manga
		width: 100%

		&__container
			display: grid
			row-gap: 20px
			column-gap: 20px
			grid-template-columns: 1fr 1fr
			grid-template-areas: "main sub" "description description" "recommendations recommendations" "comments comments"
			@extend .container-default
			+mq(tablet-mid, max)
				grid-template-columns: 1fr
				grid-template-areas: "main" "sub" "description" "recommendations" "comments"

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

		&__comments
			grid-area: comments

		&__sub-content
			display: grid
			row-gap: 20px
			grid-area: sub
			column-gap: 20px
			align-content: flex-start
			justify-content: flex-start
			grid-template-columns: minmax(auto, 330px)
			+mq(tablet-mid, max)
				justify-content: flex-start

		&__cover-container
			display: grid
			grid-area: cover
			grid-area: cover
			justify-content: flex-start
			grid-template-rows: min-content

		&__cover
			@extend .shadow-generic

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
