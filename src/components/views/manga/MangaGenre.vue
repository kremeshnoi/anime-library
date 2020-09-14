<template lang='pug'>

	.manga-genre
		.manga-genre__container
			.manga-genre__title
				| {{ getMangaGenre.mal_url.name }}

			query-content
				cards(v-for='(result, index) in getMangaGenre.manga'
					:key='index'
					:query='result')

</template>

<script>

	import { mapActions, mapGetters } from 'vuex';
	import Cards from '@/components/modules/Cards';
	import QueryContent from '@/components/modules/QueryContent';

	export default {
		name: 'MangaGenre',
		components: {
			Cards,
			QueryContent
		},
		metaInfo: {
			title: 'Otaku Library / Top raited airing anime'
		},
		computed: {
			...mapGetters(['getMangaGenre'])
		},
		methods: {
			...mapActions(['loadMangaGenre']),
		},
		async created() {
			await this.loadMangaGenre();
		}
	}

</script>

<style lang='sass' scoped>

	@import '../../../assets/styles/utils/vars'
	@import '../../../assets/styles/utils/mixins'
	@import '../../../assets/styles/modules/titles'
	@import '../../../assets/styles/modules/containers'


	.manga-genre
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
			+mq(phablet-small, max)
				font-size: 20px
				max-width: 235px

</style>
