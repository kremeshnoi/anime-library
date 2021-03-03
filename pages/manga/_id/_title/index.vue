<template lang='pug'>

	.manga
		.manga__container
			.manga__main-content
				h1.manga__title
					| {{ mangaById.title }}
					.divider-hidden
					| {{ mangaById.title_japanese }}
				.manga__cover-container
					img.manga__cover(draggable="false" :src='mangaById.image_url')

					select-options.manga__input-field(
						v-if='mangaById.type',
						:type='mangaById.type',
						:wholeResult='mangaById')

				info.manga__info(:infoData='mangaById')

			.manga__sub-content
				characters.manga__characters(
					:charactersData='mangaCharactersById.characters')

				related.manga__related(:wholeData="mangaById" :relatedData='mangaById.related')

			description.manga__description(:descriptionData='mangaById.synopsis')

			recommendations.manga__recommendations(
				:recommendationsData='mangaRecommendationsById.recommendations')

</template>

<script>

	import jikanjs from 'jikanjs/lib/jikan'
	import Cards from '@/components/elements/Cards'
	import SelectOptions from '@/components/elements/SelectOptions'
	import Related from '@/components/elements/Related'
	import Description from '@/components/elements/Description'
	import Recommendations from '@/components/elements/Recommendations'
	import Info from '@/components/elements/Info'
	import Characters from '@/components/elements/Characters'
	import layoutMiddleware from '@/middleware/layoutMiddleware'

	export default {
		name: 'Manga',
		metaInfo() {
			return {
				title: `Manga - ${this.mangaById.title}`,
			}
		},
		components: {
			Characters,
			Info,
			Recommendations,
			Description,
			Cards,
			SelectOptions,
			Related,
		},
		layout: layoutMiddleware,
		async asyncData({ params }) {
			const mangaByIdResponse = await jikanjs.loadManga(params.id)
			const mangaCharactersResponse = await jikanjs.loadManga(
				params.id,
				'characters'
			)
			const mangaRecommendationsByIdResponse = await jikanjs.loadManga(
				params.id,
				'recommendations'
			)
			return {
				mangaById: mangaByIdResponse,
				mangaCharactersById: mangaCharactersResponse,
				mangaRecommendationsById: mangaRecommendationsByIdResponse,
			}
		},
		async mounted() {
			const modal = document.querySelectorAll('.modal')
			const modal_instance = M.Modal.init(modal)
			if (Object.keys(this.mangaById.related).length > 0) {
				const tabs = document.querySelectorAll('.tabs')
				const instanceTabs = M.Tabs.init(tabs)
			}
		}
	}

</script>

<style lang='sass' scoped>

	@import '~/assets/styles/utils/vars'
	@import '~/assets/styles/utils/mixins'
	@import '~/assets/styles/modules/titles'
	@import '~/assets/styles/modules/dividers'
	@import '~/assets/styles/modules/containers'

	.manga
		width: 100%
		&__container
			display: grid
			column-gap: 20px
			row-gap: 40px
			grid-template-columns: 1fr 1fr
			grid-template-areas: 'main sub' 'description description' 'recommendations recommendations'
			@extend .container-default
			+mq(tablet-mid, max)
				grid-template-columns: 1fr
				grid-template-areas: 'main' 'sub' 'description' 'recommendations'
		&__main-content
			grid-area: main
			display: grid
			justify-content: start
			grid-template-areas: 'title title' 'cover info'
			grid-gap: 20px
			align-content: start
			grid-template-rows: 50 auto
			+mq(phablet, max)
				grid-template-rows: auto
				grid-template-areas: 'title' 'cover' 'info'
		&__sub-content
			grid-area: sub
			display: grid
			column-gap: 20px
			row-gap: 40px
			justify-content: flex-start
			align-content: flex-start
			grid-template-columns: minmax(auto, 360px)
			+mq(tablet-mid, max)
				justify-content: flex-start
		&__cover-container
			grid-area: cover
			display: grid
			justify-content: flex-start
			row-gap: 20px
			grid-area: cover
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
