<template lang="pug">

  section.top-airing-anime
    .top-airing-anime__container
      router-link.top-airing-anime__title(:to="cardsBlockData.link")
        | {{ cardsBlockData.title }}
        .top-airing-anime__icon.material-icons keyboard_arrow_right

      swiper-carousel
        cards.swiper-slide(
        :key="dataIndex"
        :resultItem="data"
        v-for="(data, dataIndex) in cardsBlockData.data.slice(0, 12)")

</template>

<script>

  import Cards from "@/components/elements/Cards"
  import SwiperCarousel from "@/components/elements/SwiperCarousel"

  export default {
    name: "CardsBlock",
    props: ["cardsBlockData"],
    components: {
      Cards,
      SwiperCarousel
    }
  }

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"
	@import "~/assets/styles/modules/titles"
	@import "~/assets/styles/modules/containers"

	.top-airing-anime
		width: 100%

		&__container
			@extend .container-default

		&__title
			@extend .title-bordered
			+flex(space-between, center, row)
			&:hover
				color: orange
				.top-airing-anime__icon
					color: inherit

		&__icon
			color: $color-black

</style>
