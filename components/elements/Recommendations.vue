<template lang="pug">

  .recommendations(v-if="recommendationsData")
    .recommendations__wrapper
      .recommendations__title
        | Recommendations

      swiper-carousel(v-if="recommendationsData.length >= 7")
        cards.swiper-slide(
          :key="recommendationIndex"
          :resultItem="recommendation"
          v-for="(recommendation, recommendationIndex) in recommendationsData")

      h4.recommendations__disaster(v-else)
        | Not found

</template>

<script>

  import Cards from "@/components/elements/Cards"
  import SwiperCarousel from "@/components/elements/SwiperCarousel"

  export default {
    name: "Recommendations",
    props: ["recommendationsData"],
    components: {
      Cards,
      SwiperCarousel
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

		&__wrapper
			display: grid
			grid-gap: 20px

		&__title
			@extend .title-default

</style>
