<template lang="pug">

	.swiper-carousel( v-swiper:mySwiper="swiperOptions" )
		.swiper-carousel__container.swiper-wrapper
			slot

		.swiper-button-prev
		.swiper-button-next

</template>

<script>

	import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

	export default {
		name: "SwiperCarousel",
		data: () => {
			return {
				swiperOptions: {
					navigation: {
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev"
					},
					spaceBetween: 10,
					breakpoints: {
						480: {
							slidesPerView: 1
						},
						560: {
							slidesPerView: 2
						},
						640: {
							slidesPerView: 3
						},
						768: {
							slidesPerView: 4
						},
						1024: {
							slidesPerView: 5
						},
						1248: {
							slidesPerView: 6
						},
						1440: {
							slidesPerView: 7
						}
					}
				}
			};
		},
		components: {
			Swiper,
			SwiperSlide
		},
		directives: {
			swiper: directive
		}
	};

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"

	.swiper-carousel
		width: 100%

	.swiper-button-prev, .swiper-button-next
		top: 0
		height: 50%
		width: 40px
		color: rgba(17, 34, 51, 0.75)
		transform: translateY(50%)
		outline: none

		&:after
			font-size: 24px

	.swiper-button-prev
		left: 0
		background: linear-gradient(to left, rgba(213, 213, 213, 0), rgba(213, 213, 213, 0.75) 70%, rgba(213, 213, 213, 0.85))
		border-bottom-right-radius: 100% 50%
		border-top-right-radius: 100% 50%

	.swiper-button-next
		right: 0
		background: linear-gradient(to right, rgba(213, 213, 213, 0), rgba(213, 213, 213, 0.75) 70%, rgba(213, 213, 213, 0.85))
		border-bottom-left-radius: 100% 50%
		border-top-left-radius: 100% 50%

</style>
