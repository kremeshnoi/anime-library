<template lang='pug'>

	.top-anime
		.top-anime__container
			.top-anime__title
				| Viewers' Favorite Anime

			query-content
				cards(v-for='(result, index) in getAnimeFavorite'
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
		name: 'TopAnime',
		metaInfo: {
			title: 'Otaku Library - Top raited anime'
		},
		components: {
			Cards,
			QueryContent
		},
		computed: {
			...mapGetters(['getAnimeFavorite'])
		},
		async created() {
			await this.loadAnimeFavorite();
		},
		methods: {
			...mapActions(['loadAnimeFavorite'])
		}
	}

</script>

<style lang='sass' scoped>

	// IMPORTS

	@import '../../../assets/styles/utils/vars'
	@import '../../../assets/styles/utils/mixins'
	@import '../../../assets/styles/modules/titles'
	@import '../../../assets/styles/modules/containers'

	// TOP ANIME STYLES

	.top-anime
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
