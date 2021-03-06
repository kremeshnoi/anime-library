<template lang="pug">

  section.trailer
    .trailer__title
      | Watch Trailer

    .trailer__content
      iframe.trailer__iframe(
        :src="trailer"
        frameborder="0"
        v-if="trailerData"
        allowfullscreen="true")

      img.trailer__disaster(draggable="false" v-else, src="@/assets/images/not-found.jpg")

</template>

<script>

  export default {
    name: "Trailer",
    props: ["trailerData"],
    computed: {
      trailer() {
        let trailer = this.trailerData
        if (trailer) {
          return trailer.substring(0, trailer.length - 1) + "0"
        }
      }
    }
  }

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"
	@import "~/assets/styles/modules/titles"
	@import "~/assets/styles/modules/dividers"
	@import "~/assets/styles/modules/containers"

	.trailer
		display: grid
		grid-gap: 20px
		text-align: start
		align-items: flex-end
		justify-content: start
		grid-template-rows: 50px auto

		&__disaster
			width: 100%

		&__content
			+flex(center, flex-start, initial)
			border-left: 5px solid $color-blue-light

		&__title
			display: flex
			align-items: flex-end
			@extend .title-default

		&__iframe
			height: 100%
			width: 360px
			height: 200px

</style>
