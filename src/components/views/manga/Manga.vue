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
					select-options.manga__input-field(v-if='getMangaById.type'
						:type='getMangaById.type'
						:wholeResult='getMangaById')

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
						li.manga-info__list-item(v-if='getMangaById.serializations')
							.manga-info__list-key
								| Publication:
							| &nbsp;
							.manga-info__list-values(v-for='(result, index_serializations) in getMangaById.serializations'
								:key='index_serializations')
								| {{ result.name }}
							.manga-info__list-value(v-if='getMangaById.serializations.length === 0')
								| Unknown

			.manga__sub-content
				.manga__characters.manga-characters(v-if='getMangaCharacters.characters')
					.manga-recommendations__wrapper
						.manga-recommendations__title
							| CHARACTERS

						swiper-carousel(v-if='getMangaCharacters.characters' :opt='`characters`')
							cards.swiper-slide(v-for='(result, index) in getMangaCharacters.characters.slice(0, 20)'
								:key='index'
								:query='result')

						h4.manga-related__disaster(v-if='getMangaCharacters.characters.length === 0')
							| Not found (￣︿￣)

				related.manga__related(:relatedData='this.getMangaById.related')

			description.manga__description(:descriptionData='this.getMangaById.synopsis')

			recommendations.manga__recommendations(:recommendationsData='this.getMangaRecommendationsById.recommendations')

</template>

<script>

	// IMPORTS

	import { mapActions, mapGetters } from 'vuex';
	import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
	import Cards from '@/components/elements/Cards';
	import SwiperCarousel from '@/components/elements/SwiperCarousel';
	import SelectOptions from '@/components/elements/SelectOptions';
	import Related from '@/components/elements/Related';
	import Description from '@/components/elements/Description';
	import Recommendations from '@/components/elements/Recommendations';


	// COMPONENT OPTIONS

	export default {
		name: 'Manga',
		metaInfo() {
			return {
				title: `Manga - ${ this.getMangaById.title }`
			}
		},
		components: {
			Recommendations,
			Description,
			Cards,
			SwiperCarousel,
			SelectOptions,
			Related,
			Swiper,
			SwiperSlide
		},
		directives: {
			swiper: directive
		},
		computed: {
			...mapGetters(['getMangaById', 'getMangaCharacters', 'getMangaRecommendationsById'])
		},
		async created() {
			await this.loadMangaById();
			await this.loadMangaCharacters();
			await this.loadMangaRecommendationsById();

			// MODAL

			const modal = document.querySelectorAll('.modal');
			const modal_instance = M.Modal.init(modal);

			// TABS

			const tabs = document.querySelectorAll('.tabs');
			const instanceTabs = M.Tabs.init(tabs);
		},
		methods: {
			...mapActions(['loadMangaById', 'loadMangaCharacters', 'loadMangaRecommendationsById', 'computeRoute'])
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

	// MANGA STYLES

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
			font-size: 20px
			max-width: 460px
			grid-area: title
			text-align: start
			-webkit-line-clamp: 2
			@extend .title-vertical-cut

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

	// MANGA RECOMMENDATIONS

	.manga-recommendations
		grid-area: recommendations

		&__disaster
			text-align: start
			font-size: 30px

		&__wrapper
			display: grid
			grid-gap: 20px

		&__title
			@extend .title-default

</style>
