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

					select-options.anime__input-field(v-if='getAnimeById.type'
					:type='getAnimeById.type'
					:wholeResult='getAnimeById')

				info.anime__info(:infoData='getAnimeById')

			.anime__sub-content
				trailer.anime__trailer(:trailerData='getAnimeById.trailer_url')

				related.anime__related(:relatedData='getAnimeById.related')

			description.anime__description(:descriptionData='getAnimeById.synopsis')

			recommendations.anime__recommendations(:recommendationsData='getAnimeRecommendationsById.recommendations')

</template>

<script>

	// IMPORTS

	import { mapActions, mapGetters } from 'vuex';
	import SelectOptions from '@/components/elements/SelectOptions';
	import Related from '@/components/elements/Related';
	import Trailer from '@/components/elements/Trailer';
	import Description from "@/components/elements/Description";
	import Recommendations from "@/components/elements/Recommendations";
	import Info from "@/components/elements/Info";

	// COMPONENT OPTIONS

	export default {
		name: 'Anime',
		metaInfo() {
			return {
				title: `Anime - ${ this.getAnimeById.title }`
			}
		},
		components: {
			Info,
			Recommendations,
			Description,
			Related,
			Trailer,
			SelectOptions
		},
		computed: {
			...mapGetters(['getAnimeById', 'getAnimeRecommendationsById'])
		},
		async created() {
			await this.loadAnimeById();
			await this.loadAnimeRecommendationsById();

			// MODAL

			const modal = document.querySelectorAll('.modal');
			const modal_instance = M.Modal.init(modal);

			// TABS

			if(Object.keys(this.getAnimeById.related).length > 0) {
				const tabs = document.querySelectorAll('.tabs');
				const instanceTabs = M.Tabs.init(tabs);
			}
		},
		methods: {
			...mapActions(['loadAnimeById', 'loadAnimeRecommendationsById']),
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

	// ANIME STYLES

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
