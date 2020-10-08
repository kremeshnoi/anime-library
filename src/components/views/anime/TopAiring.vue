<template lang='pug'>

	.top-airing
		.top-airing__container
			.top-airing__title
				| Top Airing Anime

			query-content
				cards(v-for='(result, index) in getAnimeAiring'
					:key='index'
					:cardsData='result')

</template>

<script>

	// IMPORTS

	import { mapActions, mapGetters } from 'vuex';
	import Cards from '@/components/elements/Cards';
	import QueryContent from '@/components/elements/QueryContent';

	// COMPONENT OPTIONS

	export default {
		name: 'TopAiring',
		metaInfo: {
			title: 'Otaku Library - Top airing anime'
		},
		components: {
			Cards,
			QueryContent
		},
		computed: {
			...mapGetters(['getAnimeAiring'])
		},
		async created() {
			await this.loadAnimeAiring();
		},
		methods: {
			...mapActions(['loadAnimeAiring'])
		}
	}

</script>

<style lang='sass' scoped>

	// IMPORTS

	@import '../../../assets/styles/utils/vars'
	@import '../../../assets/styles/utils/mixins'
	@import '../../../assets/styles/modules/titles'
	@import '../../../assets/styles/modules/containers'

	// TOP AIRING STYLES

	.top-airing
		&__container
			@extend .container-default

		&__title
			color: $color-black
			width: 100%
			font-size: 16px
			font-weight: 700
			text-transform: uppercase
			margin: 0 0 20px 0
			text-align: start
			@extend .title-bordered



</style>
