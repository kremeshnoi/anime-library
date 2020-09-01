<template lang='pug'>

	.top-airing
		.top-airing__container
			.top-airing__title
				| Top Airing Anime . . .

			query-content
				cards( v-for='(result, index) in getAnimeAiring'
						 :key='index'
						 :query='result' )

</template>

<script>

	import { mapActions, mapGetters } from 'vuex';
	import Cards from '@/components/modules/Cards';
	import QueryContent from '@/components/modules/QueryContent';

	export default {
		name: 'TopAiring',
		components: {
			Cards,
			QueryContent
		},
		methods: {
			...mapActions(['loadAnimeAiring'])
		},
		computed: {
			...mapGetters(['getAnimeAiring'])
		},
		created() {
			this.loadAnimeAiring();
		}
	}

</script>

<style lang='sass' scoped>

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'
	@import '../../assets/styles/modules/containers'


	.top-airing
		&__container
			@extend .container-default

		&__title
			color: $color-black
			width: 100%
			font-size: 24px
			font-weight: 700
			text-transform: uppercase
			margin-bottom: 40px
			text-align: start
			+mq(phablet-small, max)
				font-size: 20px
				max-width: 235px
				margin: 0 auto 40px

</style>
