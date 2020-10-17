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

				info.manga__info(:infoData='getMangaById')

			.manga__sub-content
				characters.manga__characters(:charactersData='getMangaCharacters.characters')

				related.manga__related(:relatedData='getMangaById.related')

			description.manga__description(:descriptionData='getMangaById.synopsis')

			recommendations.manga__recommendations(:recommendationsData='getMangaRecommendationsById.recommendations')

</template>

<script>

	// IMPORTS

	import { mapActions, mapGetters } from 'vuex';
	import Cards from '@/components/elements/Cards';
	import SelectOptions from '@/components/elements/SelectOptions';
	import Related from '@/components/elements/Related';
	import Description from '@/components/elements/Description';
	import Recommendations from '@/components/elements/Recommendations';
	import Info from '@/components/elements/Info';
	import Characters from '@/components/elements/Characters';

	// COMPONENT OPTIONS

	export default {
		name: 'Manga',
		metaInfo() {
			return {
				title: `Manga - ${ this.getMangaById.title }`
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

			if(Object.keys(this.getMangaById.related).length > 0) {
				const tabs = document.querySelectorAll('.tabs');
				const instanceTabs = M.Tabs.init(tabs);
			}
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

</style>
