<template lang='pug'>

	.manga
		.manga__container
			.manga__main-content
				h1.manga__title
					| {{ getMangaById.title }}
					.divider-hidden
					| {{ getMangaById.title_japanese }}
				.manga__cover-container
					img.manga__cover(:src='getMangaById.image_url')
					select-collection.manga__input-field(v-if='getMangaById.type'
						:query='getMangaById.type')

				.manga__info.manga-info
					h2.manga-info__title
						| Info
					ul.manga-info__list
						li.manga-info__list-item
							.manga-info__list-key
								| Type:
							| &nbsp;
							.manga-info__list-value(v-if='getMangaById.type')
								| {{ getMangaById.type }}
							.manga-info__list-value(v-else)
								| Unknown
						li.manga-info__list-item
							.manga-info__list-key
								| Score:
							| &nbsp;
							span.manga-info__list-value.manga-info__list-value_decor(v-if='getMangaById.score')
								| {{ getMangaById.score }}
							.manga-info__list-value(v-else)
								| Unknown
						li.manga-info__list-item
							.manga-info__list-key
								| Status:
							| &nbsp;
							.manga-info__list-value(v-if='getMangaById.status')
								| {{ getMangaById.status }}
							.manga-info__list-value(v-else)
								| Unknown
						li.manga-info__list-item
							.manga-info__list-key
								| Published:
							| &nbsp;
							.manga-info__list-value(v-if='getMangaById.published')
								| {{ getMangaById.published.string }}
							.manga-info__list-value(v-else)
								| Unknown
						li.manga-info__list-item
							.manga-info__list-key
								| Genres:
							| &nbsp;
							.manga-info__list-values(v-for='(result, index_genres) in getMangaById.genres'
								:key='index_genres')
								| {{ result.name }}
						li.manga-info__list-item
							.manga-info__list-key
								| Volumes:
							| &nbsp;
							.manga-info__list-value(v-if='getMangaById.volumes')
								| {{ getMangaById.volumes }}
							.manga-info__list-value(v-else)
								| Unknown
						li.manga-info__list-item
							.manga-info__list-key
								| Chapters:
							| &nbsp;
							.manga-info__list-value(v-if='getMangaById.chapters')
								| {{ getMangaById.chapters }}
							.manga-info__list-value(v-else)
								| Unknown
						li.manga-info__list-item
							.manga-info__list-key
								| Publication:
							| &nbsp;
							.manga-info__list-values(v-for='(result, index_serializations) in getMangaById.serializations'
								:key='index_serializations')
								| {{ result.name }}

			.manga__sub-content
				.manga__related.manga-related
					.manga-related__title
						| Related
					.manga-related__content
						ul.manga-related__tabs.tabs(v-if='getMangaById.related')
							li.manga-related__tab.tab(v-for='(value, name, counter) in getMangaById.related'
								:key='name')
								a.manga-related__tab-item(:href=`'#' + counter`)
									| {{ name }}

						.manga-related__item(:id='counter'
							v-for='(value, name, counter) in getMangaById.related'
							:key='name')
							table.manga-related__table.striped
								tbody.manga-related__tbody
									tr.manga-related__tr(v-for='(result, index) in value'
										:key='index')
										td.manga-related__td
											a.manga-related__link(@click='computeRoute(result)')
												| {{ result.name }}

						h4.manga-related__disaster(v-if='this.related === 0')
							| Not found (￣︿￣)

			.manga__description.manga-description
				.manga-description__title
					| DESCRIPTION

				.manga-description__synopsis(v-if='getMangaById.synopsis')
					| {{ getMangaById.synopsis }}

				h4.manga-description__disaster(v-else)
					| Not found (︶︹︺)

			.manga__recommendations.manga-recommendations(v-if='getMangaRecommendationsById.recommendations')
				.manga-recommendations__wrapper
					.manga-recommendations__title
						| RECOMMENDATIONS

					swiper-carousel(v-if='getMangaRecommendationsById.recommendations.length >= 7')
						cards.swiper-slide(v-for='(result, index) in getMangaRecommendationsById.recommendations'
							:key='index'
							:query='result')

					h4.manga-recommendations__disaster(v-else)
						| Not found (」°ロ°)」

</template>

<script>

	import { mapActions, mapGetters } from 'vuex';
	import Cards from '@/components/modules/Cards';
	import SwiperCarousel from '@/components/modules/SwiperCarousel';
	import SelectCollection from '@/components/modules/SelectCollection';

	export default {
		name: 'Manga',
		data:() => {
			return {
				related: []
			}
		},
		components: {
			Cards,
			SwiperCarousel,
			SelectCollection
		},
		metaInfo() {
			return {
				title: `Manga / ${ this.getMangaById.title }`
			}
		},
		methods: {
			...mapActions(['loadMangaById', 'loadMangaRecommendationsById', 'computeRoute']),
			checkRelatedLength() {
				this.related = Object.keys(this.getMangaById.related).length
			}
		},
		computed: {
			...mapGetters(['getMangaById', 'getMangaRecommendationsById'])
		},
		async created() {
			await this.loadMangaById();
			await this.loadMangaRecommendationsById();
			if(Object.keys(this.getMangaById.related).length) {
				const tabs = document.querySelectorAll('.tabs');
				const instanceTabs = M.Tabs.init(tabs);
				const indicatorTooltip = document.querySelector('.indicator').style.display = 'none';
			}
			this.checkRelatedLength();
		}
	};

</script>

<style lang='sass' scoped>

	// IMPORTS

	@import '../../../assets/styles/utils/vars'
	@import '../../../assets/styles/utils/mixins'
	@import '../../../assets/styles/modules/titles'
	@import '../../../assets/styles/modules/dividers'
	@import '../../../assets/styles/modules/containers'

	// MANGA

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

		&__cover
			max-width: 200px

		&__cover-container
			grid-area: cover
			display: grid
			justify-content: flex-start
			row-gap: 20px
			grid-area: cover

		&__title
			text-align: start
			font-size: 20px
			max-width: 460px
			grid-area: title
			text-overflow: ellipsis
			overflow: hidden
			display: -webkit-box
			-webkit-line-clamp: 2
			-webkit-box-orient: vertical

		&__input-field
			margin: 0
			max-width: 220px

	// MANGA INFO

	.manga-info
		grid-area: info
		text-align: start
		+flex(initial, initial, column)

		&__title
			color: $color-black
			width: 100%
			font-size: 16px
			font-weight: 700
			text-align: start
			text-transform: uppercase
			padding: 14px 0 14px 14px
			border-left: 5px solid $color-blue-light

		&__list
			margin: 10px 0 0 0
			height: 100%
			max-width: 300px
			width: 100%
			+flex(space-around, initial, column)

		&__list-item
			margin: 6px 0
			&:last-of-type
				margin: 0

		&__list-key
			display: inline-block

		&__list-value
			display: inline-block
			&_decor
				padding: 0 6px
				border-radius: 4px
				color: $color-white-pure
				background-color: $color-yellow

		&__list-values
			margin: 0 10px 0 0
			height: auto
			transition: 0.5s
			display: inline-block
			border-bottom: 1px dashed $color-grey-light
			&:hover
				cursor: pointer
				border-bottom: 1px dashed $color-blue

	// MANGA RELATED

	.manga-related
		display: grid
		justify-content: start
		grid-gap: 20px
		grid-template-rows: 50px auto
		grid-template-columns: 100%
		text-align: start

		&__disaster
			text-align: start
			font-size: 30px

		&__title
			display: flex
			align-items: flex-end
			@extend .title

		&__tabs
			display: flex
			flex-wrap: wrap
			overflow-x: initial
			overflow-y: initial
			height: 100%

		&__tab
			height: initial !important

		&__tab-item
			padding: 0 !important
			margin: 0 24px 14px 0
			text-align: start
			line-height: initial
			color: $color-blue-light !important
			&.active
				background-color: initial !important
				color: $color-orange !important

		&__link
			color: $color-grey-dark
			&:hover
				text-decoration: underline

	// MANGA DESCRIPTION

	.manga-description
		grid-area: description
		text-align: start

		&__disaster
			text-align: start
			font-size: 30px

		&__title
			@extend .title
			margin: 0 0 16px 0

	// ANIME RECOMMENDATIONS

	.manga-recommendations
		grid-area: recommendations

		&__disaster
			text-align: start
			font-size: 30px

		&__wrapper
			display: grid
			grid-gap: 20px

		&__title
			@extend .title

</style>
