<template lang="pug">
section.manga-characters
  .manga-characters__wrapper
    .manga-characters__title
      | Characters

    .manga-characters__container(
      v-if="charactersData && charactersData.length"
    )
      Carousel
        Card.swiper-slide.manga-characters__card(
          :key="dataIndex",
          :resultItem="data",
          v-for="(data, dataIndex) in charactersData.slice(0, 12)"
        )

      nuxt-link.manga-characters__link(:to="{ name: 'manga-id-title-characters', params: { id: wholeData.mal_id, title: wholeData.title } }")
        | More

    h4.manga-characters__disaster(v-else)
      | Not found

</template>

<script>
  import Card from "@/components/elements/Card";
  import Carousel from "@/components/grids/Carousel";

  export default {
    name: "Characters",
    props: ["charactersData", "wholeData"],
    components: {
      Card,
      Carousel
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

	&__disaster
		font-size: 30px
		text-align: start

	&__container
		position: relative

	&__link
		right: 0
		width: auto
		bottom: -30px
		@extend .title-cut
		position: absolute
		color: $color-blue-light
		+mq(phone-wide, max)
			max-width: 250px
		&:hover
			text-decoration: underline

</style>
