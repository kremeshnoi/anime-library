<template lang='pug'>

  .trailer
    .trailer__title
      | Watch Trailer

    .trailer__content
      iframe.trailer__iframe(
        v-if='trailerData',
        :src='trailer',
        frameborder='0',
        allowfullscreen='true')

      img.trailer__disaster(v-else, src='@/assets/images/not-found.jpg')

</template>

<script>

  export default {
    name: 'Trailer',
    props: ['trailerData'],
    computed: {
      trailer() {
        let trailer = this.trailerData;
        if (trailer) {
          return trailer.substring(0, trailer.length - 1) + '0';
        }
      }
    }
  };

</script>

<style lang='sass' scoped>

	@import '~/assets/styles/utils/vars'
	@import '~/assets/styles/utils/mixins'
	@import '~/assets/styles/modules/titles'
	@import '~/assets/styles/modules/dividers'
	@import '~/assets/styles/modules/containers'

	.trailer
		display: grid
		justify-content: start
		grid-gap: 20px
		grid-template-rows: 50px auto
		text-align: start
		&__disaster
			width: 100%
		&__content
			border-left: 5px solid $color-blue-light
			+flex(center, flex-start, initial)
		&__title
			display: flex
			align-items: flex-end
			@extend .title-default
		&__iframe
			height: 100%
			height: 200px
			width: 360px

</style>
