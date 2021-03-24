<template lang="pug">

	main.manga
		.manga__container
			h1.manga__title
				| {{ mangaById.title }}
				span.divider-hidden
				| {{ mangaById.title_japanese }}

			.manga__main-content
				.manga__cover-container
					img.manga__cover(
						draggable="false"
						alt="manga cover"
						:src="mangaById.image_url")

					Select.manga__input-field(
						v-if="mangaById.type"
						:type="mangaById.type"
						:wholeResult="mangaById")

				Info.manga__info(:infoData="mangaById")

			.manga__sub-content
				Score(:score="mangaById.score")

				Studios(:studios="mangaById.serializations" source_type="manga")

			Description.manga__description(:descriptionData="mangaById.synopsis")

			Recommendations.manga__recommendations(:recommendationsData="mangaRecommendationsById.recommendations")

			Comments.manga__comments

</template>

<script>

	import jikanjs from "jikanjs/lib/jikan"
	import layout from "@/middleware/layout"
	import Info from "@/components/blocks/Info"
	import Score from "@/components/blocks/Score"
	import Select from "@/components/elements/Select"
	import Studios from "@/components/blocks/Studios"
	import Comments from "@/components/blocks/Comments"
	import Description from "@/components/blocks/Description"
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
			Score,
			Select,
			Studios,
			Comments,
			Description,
			Recommendations
		},
		layout: layout,
		async asyncData({ params }) {
			const mangaByIdResponse = await jikanjs.loadManga(params.id)
			const mangaRecommendationsByIdResponse = await jikanjs.loadManga(
				params.id,
				"recommendations"
			)
			return {
				mangaById: mangaByIdResponse,
				mangaRecommendationsById: mangaRecommendationsByIdResponse,
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
		display: flex
		justify-content: flex-start
		@extend .container-default

		&__container
			display: grid
			row-gap: 40px
			column-gap: 40px
			max-width: 920px
			grid-template-columns: minmax(auto, 520px) 1fr
			grid-template-areas: "title title" "main sub" "description description" "recommendations recommendations" "comments comments"
			+mq(tablet-mid, max)
				grid-template-columns: 1fr
				grid-template-areas: "title" "main" "sub" "description" "recommendations" "comments"

		&__main-content
			display: grid
			grid-area: main
			column-gap: 20px
			align-content: start
			justify-content: start
			grid-template-columns: minmax(auto, 200px) minmax(auto, 300px)
			grid-template-areas: "title title" "cover info"
			+mq(phablet, max)
				grid-template-areas: "title" "cover" "info"

		&__comments
			grid-area: comments

		&__sub-content
			display: grid
			row-gap: 40px
			grid-area: sub
			column-gap: 40px
			align-content: flex-start
			justify-content: flex-start
			grid-template-columns: minmax(auto, 380px)
			+mq(tablet-mid, max)
				justify-content: flex-start

		&__cover-container
			display: grid
			grid-area: cover
			grid-area: cover
			justify-content: flex-start
			grid-template-rows: min-content

		&__cover
			width: 100%

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
