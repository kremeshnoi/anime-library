<template lang='pug'>

	.anime-block-upcoming
		.anime-block-upcoming__container
			router-link.anime-block-upcoming__title(to='/popular-anime')
				| Upcoming Anime
				.anime-block-upcoming__icon.material-icons keyboard_arrow_right
			swiper-carousel
				cards.swiper-slide(v-for='(result, index) in getAnimeUpcoming.slice(0, 7)'
					:key='index'
					:query='result')

</template>

<script>

	import { mapActions, mapGetters } from 'vuex';
	import Cards from '@/components/modules/Cards';
	import SwiperCarousel from '@/components/modules/SwiperCarousel';

	export default {
		name: 'AnimeBlockUpcoming',
		components: {
			Cards,
			SwiperCarousel
		},
		methods: {
			...mapActions(['loadAnimeUpcoming'])
		},
		computed: {
			...mapGetters(['getAnimeUpcoming'])
		},
		created() {
			this.loadAnimeUpcoming();
		}
	};

</script>

<style lang='sass' scoped>

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'
	@import '../../assets/styles/modules/titles'
	@import '../../assets/styles/modules/containers'

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
