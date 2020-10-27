<template lang='pug'>

	.recommendations(v-if='this.recommendationsData')
		.recommendations__wrapper
			.recommendations__title
				| Recommendations

			swiper-carousel(v-if='this.recommendationsData.length >= 7')
				cards.swiper-slide(v-for='(result, index) in this.recommendationsData'
				:key='index'
				:cardsData='result')

			h4.recommendations__disaster(v-else)
				| Not found

</template>

<script>

	// IMPORTS

	import Cards from '@/components/elements/Cards';
	import SwiperCarousel from '@/components/elements/SwiperCarousel';

	// COMPONENT OPTIONS

	export default {
		name: 'Recommendations',
		props: ['recommendationsData'],
		components: {
			Cards,
			SwiperCarousel
		}
	}

</script>

<style lang='sass' scoped>

	// IMPORTS

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/modules/titles'


	// RECOMMENDATIONS STYLES

	.recommendations
		grid-area: recommendations

		&__disaster
			text-align: start
			font-size: 30px

		&__wrapper
			display: grid
			grid-gap: 20px

		&__title
			@extend .title-default

</style>
