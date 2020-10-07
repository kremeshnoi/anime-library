<template lang='pug'>

	.anime-block-upcoming
		.anime-block-upcoming__container
			router-link.anime-block-upcoming__title(to='/anime/upcoming')
				| Upcoming Anime
				.anime-block-upcoming__icon.material-icons keyboard_arrow_right
			swiper-carousel
				cards.swiper-slide(v-for='(result, index) in getAnimeUpcoming.slice(0, 7)'
					:key='index'
					:query='result')

</template>

<script>

	// IMPORTS

	import { mapActions, mapGetters } from 'vuex';
	import Cards from '@/components/modules/Cards';
	import SwiperCarousel from '@/components/modules/SwiperCarousel';

	// COMPONENT OPTIONS

	export default {
		name: 'AnimeBlockUpcoming',
		components: {
			Cards,
			SwiperCarousel
		},
		computed: {
			...mapGetters(['getAnimeUpcoming'])
		},
		async created() {
			await this.loadAnimeUpcoming();
		},
		methods: {
			...mapActions(['loadAnimeUpcoming'])
		}
	};

</script>

<style lang='sass' scoped>

	// IMPORTS

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'
	@import '../../assets/styles/modules/titles'
	@import '../../assets/styles/modules/containers'

	// ANIME BLOCK UPCOMING STYLES

	.anime-block-upcoming
		width: 100%

		&__container
			@extend .container-default

		&__title
			@extend .title-bordered
			+flex(space-between, center, row)
			&:hover
				color: orange
				.anime-block-upcoming__icon
					color: inherit

		&__icon
			color: $color-black

</style>
