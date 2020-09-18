<template lang='pug'>

	.anime
		.anime__container
			.anime__main-content
				h1.anime__title
					| {{ getAnimeById.title }}
					.divider-hidden
					| {{ getAnimeById.title_japanese }}
				.anime__cover-container
					img.anime__cover(:src='getAnimeById.image_url')
					select-collection.anime__input-field(v-if='getAnimeById.type'
						:query='getAnimeById.type')

				.anime__info.anime-info
					h2.anime-info__title
						| Info
					ul.anime-info__list
						li.anime-info__list-item
							.anime-info__list-key
								| Type:
							| &nbsp;
							.anime-info__list-value(v-if='getAnimeById.type')
								| {{ getAnimeById.type }}
							.anime-info__list-value(v-else)
								| Unknown
						li.anime-info__list-item
							.anime-info__list-key
								| Score:
							| &nbsp;
							span.anime-info__list-value.anime-info__list-value_decor(v-if='getAnimeById.score')
								| {{ getAnimeById.score }}
							.anime-info__list-value(v-else)
								| Unknown
						li.anime-info__list-item
							.anime-info__list-key
								| Status:
							| &nbsp;
							.anime-info__list-value(v-if='getAnimeById.status')
								| {{ getAnimeById.status }}
							.anime-info__list-value(v-else)
								| Unknown
						li.anime-info__list-item
							.anime-info__list-key
								| Aired:
							| &nbsp;
							.anime-info__list-value(v-if='getAnimeById.aired')
								| {{ getAnimeById.aired.string }}
							.anime-info__list-value(v-else)
								| Unknown
						li.anime-info__list-item
							.anime-info__list-key
								| Genres:
							| &nbsp;
							.anime-info__list-values(v-for='(result, index_genres) in getAnimeById.genres'
								:key='index_genres')
								| {{ result.name }}
						li.anime-info__list-item
							.anime-info__list-key
								| Episodes:
							| &nbsp;
							.anime-info__list-value(v-if='getAnimeById.episodes')
								| {{ getAnimeById.episodes }}
							.anime-info__list-value(v-else)
								| Unknown
						li.anime-info__list-item
							.anime-info__list-key
								| Duration:
							| &nbsp;
							.anime-info__list-value(v-if='getAnimeById.duration')
								| {{ getAnimeById.duration }}
							.anime-info__list-value(v-else)
								| Unknown
						li.anime-info__list-item
							.anime-info__list-key
								| Studios:
							| &nbsp;
							.anime-info__list-values(v-for='(result, index_studios) in getAnimeById.studios'
								:key='index_studios')
								| {{ result.name }}
						li.anime-info__list-item
							.anime-info__list-key
								| Rating:
							| &nbsp;
							.anime-info__list-value(v-if='getAnimeById.rating')
								| {{ getAnimeById.rating }}
							.anime-info__list-value(v-else)
								| Unknown

			.anime__sub-content
				.anime__trailer.anime-trailer
					.anime-trailer__title
						| Watch Trailer
					.anime-trailer__content
						iframe.anime-trailer__iframe(v-if='getAnimeById.trailer_url'
							:src=`this.trailer`
							frameborder='0'
							allowfullscreen='true')
						h4.anime-trailer__disaster(v-else)
							| Not found (＃￣ω￣)

				.anime__related.anime-related
					.anime-related__title
						| Related
					.anime-related__content
						ul.anime-related__tabs.tabs(v-if='getAnimeById.related')
							li.anime-related__tab.tab(v-for='(value, name, counter) in getAnimeById.related'
								:key='name')
								a.anime-related__tab-item(:href=`'#' + counter`)
									| {{ name }}
						.anime-related__item(:id='counter'
							v-for='(value, name, counter) in getAnimeById.related'
							:key='name')
							table.anime-related__table.striped
								tbody.anime-related__tbody
									tr.anime-related__tr(v-for='(result, index) in value'
										:key='index')
										td.anime-related__td
											a.anime-related__link(@click='computeRoute(result)')
												| {{ result.name }}

						h4.manga-related__disaster(v-if='this.related === 0')
							| Not found (￣︿￣)

			.anime__description.anime-description
				.anime-description__title
					| DESCRIPTION

				.anime-description__synopsis(v-if='getAnimeById.synopsis')
					| {{ getAnimeById.synopsis }}

				h4.anime-description__disaster(v-else)
					| Not found (︶︹︺)

			.anime__recommendations.anime-recommendations(v-if='getAnimeRecommendationsById.recommendations')
				.anime-recommendations__wrapper
					.anime-recommendations__title
						| RECOMMENDATIONS

					swiper-carousel(v-if='getAnimeRecommendationsById.recommendations.length >= 7')
						cards.swiper-slide(v-for='(result, index) in getAnimeRecommendationsById.recommendations'
							:key='index'
							:query='result')

					h4.anime-recommendations__disaster(v-else)
						| Not found (」°ロ°)」


</template>

<script>

	import { mapActions, mapGetters } from 'vuex';
	import Cards from '@/components/modules/Cards';
	import SwiperCarousel from '@/components/modules/SwiperCarousel';
	import SelectCollection from '@/components/modules/SelectCollection';

	export default {
		name: 'Anime',
		data:() => {
			return {
				related: [],
				trailer: ''
			}
		},
		components: {
			Cards,
			SwiperCarousel,
			SelectCollection
		},
		metaInfo() {
			return {
				title: `Anime / ${ this.getAnimeById.title }`
			}
		},
		methods: {
			...mapActions(['loadAnimeById', 'loadAnimeRecommendationsById', 'computeRoute']),
			checkRelatedLength() {
				this.related = Object.keys(this.getAnimeById.related).length
			},
			async disableAutoplay() {
				let trailer = await this.getAnimeById.trailer_url;
				if(trailer) {
					this.trailer = trailer.substring(0, trailer.length - 1) + '0';
				}
			}
		},
		computed: {
			...mapGetters(['getAnimeById', 'getAnimeRecommendationsById'])
		},
		async created() {
			await this.loadAnimeById();
			await this.disableAutoplay();
			await this.loadAnimeRecommendationsById();
			if(Object.keys(this.getAnimeById.related).length) {
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

	// ANIME

	.anime
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

	// ANIME INFO

	.anime-info
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

	// ANIME TRAILER

	.anime-trailer
		display: grid
		justify-content: start
		grid-gap: 20px
		grid-template-rows: 50px auto
		text-align: start

		&__disaster
			text-align: start
			font-size: 30px

		&__content
			+flex(center, flex-start, initial)

		&__title
			display: flex
			align-items: flex-end
			@extend .title

		&__iframe
			height: 100%
			height: 200px
			width: 360px

	// ANIME RELATED

	.anime-related
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
			align-items: center
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
			height: initial !important
			line-height: initial
			color: $color-blue-light !important
			&.active
				background-color: initial !important
				color: $color-orange !important

		&__link
			color: $color-grey-dark
			&:hover
				text-decoration: underline

	// ANIME DESCRIPTION

	.anime-description
		grid-area: description
		text-align: start
		display: grid
		grid-gap: 20px

		&__disaster
			text-align: start
			font-size: 30px

		&__title
			@extend .title

	// ANIME RECOMMENDATIONS

	.anime-recommendations
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
