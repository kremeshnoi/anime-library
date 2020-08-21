<template lang="pug">

	.top-airing-block
		.top-airing-block__container
			router-link.top-airing-block__title( to="/top-airing" )
				| AIRING ANIME
				.top-airing-block__icon.material-icons keyboard_arrow_right
			swiper-carousel
				cards.swiper-slide( v-for="(result, index) in getAnimeAiring.slice(0, 7)"
										  :key="index"
										  :query="result" )

</template>

<script>

	import { mapActions, mapGetters } from "vuex";
	import SwiperCarousel from "@/components/modules/SwiperCarousel.vue";
	import Cards from "@/components/modules/Cards.vue";

	export default {
		name: "TopAiring",
		components: {
			SwiperCarousel,
			Cards
		},
		methods: {
			...mapActions(["loadAnimeAiring"])
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

	.top-airing-block
		width: 100%

		&__container
			margin: 0 auto
			padding: 40px 40px 40px 40px
			max-width: 1300px

		&__title
			color: $color-black
			width: 100%
			font-size: 16px
			font-weight: 700
			text-align: start
			text-transform: uppercase
			padding: 14px 0 14px 14px
			border-left: 5px solid $color-blue-light
			+flex(space-between, center, row)

			&:hover
				color: orange

				.Top-airing-icon
					color: inherit

		&__icon
			color: $color-black

</style>
