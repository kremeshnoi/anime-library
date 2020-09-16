<template lang='pug'>

	.top-airing-anime-block
		.top-airing-anime-block__container
			router-link.top-airing-anime-block__title(to='/top-airing')
				| AIRING ANIME
				.top-airing-anime-block__icon.material-icons keyboard_arrow_right
			swiper-carousel
				cards.swiper-slide(v-for='(result, index) in getAnimeAiring.slice(0, 7)'
					:key='index'
					:query='result')

</template>

<script>

	import { mapActions, mapGetters } from 'vuex';
	import Cards from '@/components/modules/Cards';
	import SwiperCarousel from '@/components/modules/SwiperCarousel';

	export default {
		name: 'TopAiring',
		components: {
			Cards,
			SwiperCarousel
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
	};

</script>

<style lang='sass' scoped>

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'
	@import '../../assets/styles/modules/titles'
	@import '../../assets/styles/modules/containers'

	.top-airing-anime-block
		width: 100%

		&__container
			@extend .container-default

		&__title
			@extend .title-bordered
			+flex(space-between, center, row)
			&:hover
				color: orange
				.top-airing-anime-block__icon
					color: inherit

		&__icon
			color: $color-black

</style>
