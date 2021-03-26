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

			NotFound(v-else)

</template>

<script>

	import Card from "@/components/elements/Card"
	import Carousel from "@/components/grids/Carousel"
	import NotFound from "@@/components/elements/NotFound"

	export default {
		name: "Recommendations",
		props: ["recommendationsData"],
		components: {
			Card,
			Carousel,
			NotFound
		}
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/modules/titles"

	.recommendations
		grid-area: recommendations

		&__title
			@extend .title_is-bordered

</style>
