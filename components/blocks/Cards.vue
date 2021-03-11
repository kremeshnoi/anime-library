<template lang="pug">

  section.cards
    .cards__container
      nuxt-link.cards__title(:to="cardsBlockData.link")
        | {{ cardsBlockData.title }}
        .cards__icon.material-icons keyboard_arrow_right

      Carousel
        Card.swiper-slide(
        :key="dataIndex"
        :resultItem="data"
        v-for="(data, dataIndex) in cardsBlockData.data.slice(0, 12)")

</template>

<script>

  import Card from "@/components/elements/Card"
  import Carousel from "@/components/grids/Carousel"

  export default {
    name: "Cards",
    props: ["cardsBlockData"],
    components: {
      Card,
      Carousel
    }
  }

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"
	@import "~/assets/styles/modules/titles"
	@import "~/assets/styles/modules/containers"

	.cards
		width: 100%

		&__container
			@extend .container-default

		&__title
			@extend .title-bordered
			+flex(space-between, center, row)
			&:hover
				color: orange
				.cards__icon
					color: inherit

		&__icon
			color: $color-black

</style>
