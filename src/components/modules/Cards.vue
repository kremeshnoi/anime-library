<template lang="pug">

	.Cards(v-swiper:mySwiper="swiperOptions")
		.Cards-container.swiper-wrapper
			.Cards-item.card.swiper-slide(v-for="(result, index) in getAnimeAiring" :key="index")
				.Cards-image-wrapper.card-image
					img.Cards-image.activator(@click="computeRoute(result)" :src="result['image_url']")
				.Cards-title-wrapper.card-content
					span.Cards-title.card-title.activator {{ result['title'] }}

		.swiper-button-prev
		.swiper-button-next

</template>

<script>

	import {Swiper, SwiperSlide, directive} from "vue-awesome-swiper";
	import {mapActions, mapGetters} from "vuex";

	export default {
		name: "Cards",
		data: () => {
			return {
				swiperOptions: {
					navigation: {
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev"
					},
					spaceBetween: 10,
					breakpoints: {
						320: {
							slidesPerView: 1
						},
						400: {
							slidesPerView: 2
						},
						560: {
							slidesPerView: 3
						},
						640: {
							slidesPerView: 4
						},
						768: {
							slidesPerView: 4
						},
						992: {
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
		},
		methods: {
			...mapActions(["loadAnimeAiring", "computeRoute"])
		},
		computed: {
			...mapGetters(["getAnimeAiring"])
		},
		created() {
			this.loadAnimeAiring();
		}
	};

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"

	.Cards
		width: 100%

		&-item
			margin: 10px 10px 10px 0
			height: fit-content
			box-shadow: none

			&:hover
				opacity: 0.9

		&-image
			object-fit: cover
			transform: scale(1.02)

			&-wrapper
				overflow: hidden
				cursor: pointer

		&-title
			margin: 0 !important
			width: 160px
			font-size: 16px
			display: block
			overflow: hidden
			white-space: nowrap
			text-overflow: ellipsis

			&-wrapper
				display: flex
				justify-content: center
				align-items: center
				padding: 10px
				box-shadow: 0 8px 7px -7px rgba(0, 0, 0, 1)

			&-title
				margin: 0 auto
				font-size: 16px
				max-width: 150px

			&-description
				text-align: start
				margin: 8px 0 8px 0

				&:first-of-type
					margin: 24px 0 0 0

			&-input-field
				+flex(center, center, column)

			&-label
				width: 100%
				text-align: start
				position: initial
				margin: 0 0 8px 0

			&-select
				margin: 0
				padding: 0
				border: none
				outline: none

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
