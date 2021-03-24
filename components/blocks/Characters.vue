<template lang="pug">
section.manga-characters
  .manga-characters__wrapper
    .manga-characters__title
      | Characters

    .manga-characters__container(
      v-if="charactersData && charactersData.length")

      Carousel
        Card.swiper-slide.manga-characters__card(
          :key="dataIndex",
          :resultItem="data",
          v-for="(data, dataIndex) in charactersData.slice(0, 12)")

      nuxt-link.manga-characters__link(:to="{ name: 'manga-id-title-characters', params: { id: wholeData.mal_id, title: $formatRouteTitle(wholeData.title) } }")
        | More

    NotFound(v-else)

</template>

<script>

  import Card from "@/components/elements/Card"
  import Carousel from "@/components/grids/Carousel"
  import NotFound from "@@/components/elements/NotFound"

  export default {
    name: "Characters",
    props: ["charactersData", "wholeData"],
    components: {
      Card,
      Carousel,
      NotFound
    }
  };
</script>

<style lang="sass" scoped>
@import "~/assets/styles/utils/vars"
@import "~/assets/styles/utils/mixins"
@import "~/assets/styles/modules/titles"

.manga-characters
	&__title
		@extend .title-default

	&__wrapper
		display: grid
		grid-gap: 20px

	&__container
		position: relative

	&__link
		right: 0
		width: auto
		bottom: -30px
		@extend .title-cut
		position: absolute
		color: $color-blue
		+mq(phone-wide, max)
			max-width: 250px
		&:hover
			text-decoration: underline

</style>
