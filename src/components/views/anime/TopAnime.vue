<template lang='pug'>

	.top-anime
		.top-anime__container
			.top-anime__title
				| Viewers' Favorite Anime

			query-content
				cards(v-for='(result, index) in getAnimeFavorite'
					:key='index'
					:query='result')

</template>

<script>

	import { mapActions, mapGetters } from 'vuex';
	import Cards from '@/components/modules/Cards';
	import QueryContent from '@/components/modules/QueryContent';

	export default {
		name: 'TopAnime',
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
		},
		metaInfo: {
			title: 'Otaku Library / Top raited anime'
		}
	}

</script>

<style lang='sass' scoped>

	@import '../../../assets/styles/utils/vars'
	@import '../../../assets/styles/utils/mixins'
	@import '../../../assets/styles/modules/titles'
	@import '../../../assets/styles/modules/containers'


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
