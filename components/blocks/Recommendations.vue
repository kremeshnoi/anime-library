<template lang="pug">

	section.recommendations(v-if="recommendationsData")
		.recommendations__wrapper
			.recommendations__title
				| Recommendations

			Carousel(v-if="recommendationsData.length >= 7")
				Card.swiper-slide(
					:key="recommendationIndex"
					:resultItem="recommendation"
					v-for="(recommendation, recommendationIndex) in recommendationsData")

			h4.recommendations__disaster(v-else)
				| Not found	(╥﹏╥)

</template>

<script>

	import Card from "@/components/elements/Card"
	import Carousel from "@/components/grids/Carousel"

	export default {
		name: "Recommendations",
		props: ["recommendationsData"],
		components: {
			Card,
			Carousel
		}
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/modules/titles"

	.recommendations
		grid-area: recommendations

		&__disaster
			font-size: 30px
			text-align: start

		&__title
			@extend .title-bordered

</style>
