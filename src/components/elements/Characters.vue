<template lang='pug'>

	.manga-characters
		.manga-characters__wrapper
			.manga-characters__title
				| CHARACTERS

			swiper-carousel(v-if='charactersData.length'
			:type='`characters`')

				cards.swiper-slide(v-for='(result, index) in charactersData.slice(0, 20)'
				:key='index'
				:cardsData='result')

			h4.manga-characters__disaster(v-if='charactersData.length === 0')
				| Not found (」＞＜)」

</template>

<script>

	// IMPORTS

	import Cards from '@/components/elements/Cards';
	import SwiperCarousel from '@/components/elements/SwiperCarousel';
	import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';

	// COMPONENT OPTIONS

	export default {
		name: 'Characters',
		props: ['charactersData'],
		components: {
			Cards,
			SwiperCarousel,
			Swiper,
			SwiperSlide
		},
		directives: {
			swiper: directive
		}
	}

</script>

<style lang='sass' scoped>

	// IMPORTS

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'
	@import '../../assets/styles/modules/titles'
	@import '../../assets/styles/modules/dividers'
	@import '../../assets/styles/modules/containers'

	// MANGA CHARACTERS STYLES

	.manga-characters
		&__title
			@extend .title-default

		&__wrapper
			display: grid
			grid-gap: 20px

		&__disaster
			text-align: start
			font-size: 30px


</style>
