<template lang='pug'>

	.by-popularity-anime-block
		.by-popularity-anime-block__container
			router-link.by-popularity-anime-block__title(to='/popular-anime')
				| Popular Anime
				.by-popularity-anime-block__icon.material-icons keyboard_arrow_right
			swiper-carousel
				cards.swiper-slide(v-for='(result, index) in getAnimeByPopularity.slice(0, 7)'
					:key='index'
					:query='result')

</template>

<script>

	import { mapActions, mapGetters } from 'vuex';
	import Cards from '@/components/modules/Cards';
	import SwiperCarousel from '@/components/modules/SwiperCarousel';

	export default {
		name: 'ByPopularityAnimeBlock',
		components: {
			Cards,
			SwiperCarousel
		},
		methods: {
			...mapActions(['loadAnimeByPopularity'])
		},
		computed: {
			...mapGetters(['getAnimeByPopularity'])
		},
		created() {
			this.loadAnimeByPopularity();
		}
	};

</script>

<style lang='sass' scoped>

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'
	@import '../../assets/styles/modules/titles'

	.by-popularity-anime-block
		width: 100%

		&__container
			margin: 0 auto
			padding: 40px 40px 40px 40px
			max-width: 1300px

		&__title
			@extend .title-bordered
			+flex(space-between, center, row)
			&:hover
				color: orange
				.top-airing-block__icon
					color: inherit

		&__icon
			color: $color-black

</style>
