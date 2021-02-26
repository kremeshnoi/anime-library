<template lang='pug'>

	.manga-Characters
		.manga-characters__wrapper(v-if='charactersData && charactersData.length')
			.manga-characters__title
				| Characters

			.manga-characters__cards-container
				cards.manga-characters__card(
					:key='dataIndex'
					:cardsData="data"
					v-for='(data, dataIndex) in charactersData.slice(0, 2)',
					)

				a.manga-characters__link()
					| More

		h4.manga-characters__disaster(v-else)
			| Not found

</template>

<script>

	import Cards from '@/components/elements/Cards';
	import SwiperCarousel from '@/components/elements/SwiperCarousel';
	import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';

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
	};

</script>

<style lang='sass' scoped>

	@import '~/assets/styles/utils/vars'
	@import '~/assets/styles/utils/mixins'
	@import '~/assets/styles/modules/titles'

	.manga-characters
		&__title
			@extend .title-default

		&__wrapper
			display: grid
			grid-gap: 20px

		&__disaster
			text-align: start
			font-size: 30px

		&__cards-container
			display: grid
			grid-gap: 10px
			grid-template-columns: 150px 150px
			position: relative

		&__link
			@extend .title-cut
			position: absolute
			color: $color-blue-light
			right: 0
			width: auto
			bottom: -30px
			+mq(phone-wide, max)
				max-width: 250px
			&:hover
				text-decoration: underline

</style>
