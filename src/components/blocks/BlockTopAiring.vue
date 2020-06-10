<template lang="pug">

	.Block-top-airing
		.title-block-airing
			p.title-block-airing-text AIRING ANIME
		.swiper-container.slider-airing-swiper-container(v-swiper:mySwiper="swiperOptions")
			.swiper-wrapper.slider-airing-swiper-wrapper
				.swiper-slide.slider-airing-swiper-slide(v-for="result in getTopList")
					.query-content
						.card.query-content-card
							.card-image.query-content-card-wrapper
								img.activator.query-content-card-image(v-bind:src="result['image_url']")

							.card-content.query-content-card-outer
								span.card-title.activator.query-content-card-title {{ result['title'] }}

							.card-reveal.query-content-card-inner
								span.card-title.query-content-card-inner-title.black-text {{ result['title'] }}
								p.black-text.query-content-card-inner-text Type : {{ result['type'] }}
								p.black-text.query-content-card-inner-text Score : {{ result['score'] }}
								.input-field
									select.browser-default.query-content-card-inner-select
										option(value="") Status
										option(value="1") Plan to watch
										option(value="2") Watching
										option(value="3") Completed
										option(value="4") Dropped
									label
								p.query-content-card-inner-text
									a.blue-text() More info

</template>

<script>

	import { TopList } from "../../services/topList";
	import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';

	export default {
		name: "BlockTopAiring",
		data: () => {
			return {
				getTopList: [],
				swiperOptions: {
					initialSlide: 7,
					loop: true,
					grabCursor: true,
					centeredSlides: true,
					breakpoints: {
						320: {
							slidesPerView: 1
						},
						480: {
							slidesPerView: 2,
							spaceBetween: 100
						},
						600: {
							slidesPerView: 2,
							spaceBetween: 0
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 100
						},
						1300: {
							slidesPerView: 4
						},
						1700: {
							slidesPerView: 5
						},
						2000: {
							slidesPerView: 5
						}
					}
				}
			}
		},
		components: {
			Swiper,
			SwiperSlide
		},
		directives: {
			swiper: directive
		},
		methods: {  },
		computed: {  },
		mounted() {
			TopList.fetchTopList("anime",1, "airing").then(response => {
				this.getTopList = response
			})
		}
	}

</script>

<style lang="sass" scoped>

	.Block-top-airing
		background-color: #f5f5f5

		.query-content
			display: grid
			grid-template-columns: repeat(auto-fill, 228px)
			justify-content: center
			grid-gap: 20px
			height: 100%

			&-card
				margin: 0

				&-wrapper
					height: 84%
					cursor: pointer
					padding: 16px 0 0 0

				&-title
					text-overflow: ellipsis
					overflow: hidden
					width: 160px
					display: inline-block
					white-space: nowrap
					margin: 0
					font-size: 16px

				&-image
					height: 100%
					max-height: 280px
					object-fit: contain

				&-outer
					display: flex
					justify-content: center
					align-items: center
					padding: 10px

				&-inner
					&-title
						font-size: 16px

					&-select
						border: none
						padding: 0
						outline: none

					&-text
						text-align: start

						&:first-of-type
							margin: 30px 0 0 0

		.slider-airing
			&-swiper
				&-container
					width: 100%
					height: 100%

				&-wrapper
					box-sizing: border-box
					margin: 40px 0

				&-slide
					height: initial

		.title-block
			&-airing
				background-color: #ececec
				padding: 4px
				box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2)

				&-text
					color: #6d6d6d
					margin: 0

</style>
