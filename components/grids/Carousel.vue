<template lang="pug">

  .swiper
    .swiper-carousel(v-swiper="cardsSwiperOptions" v-if="type !== 'genres'")
      .swiper-wrapper
        slot

      .swiper-button-next(v-show="init")
      .swiper-button-prev(v-show="init")

    .swiper-carousel(v-swiper="genresSwiperOptions" v-if="type === 'genres'")
      .swiper-wrapper
        slot

</template>

<script>

  export default {
    name: "Carousel",
    props: ["type"],
    data() {
      return {
        init: false,
        cardsSwiperOptions: {
          spaceBetween: 10,
          slidesPerView: "auto",
          centeredSlidesBounds: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        },
        genresSwiperOptions: {
          spaceBetween: 10,
          slidesPerView: "auto",
          centeredSlidesBounds: true
        }
      }
    },
    mounted() {
      this.init = true
    }
  }

</script>

<style lang="sass" scoped>

  @import "~/assets/styles/utils/vars"
  @import "~/assets/styles/utils/mixins"

  .swiper-carousel
    width: 100%
    overflow: hidden

  .swiper-wrapper
    margin: 0 0 7px 0

  .swiper-button-prev, .swiper-button-next
    top: 20px
    height: 50%
    width: 40px
    outline: none
    transform: translateY(50%)
    color: rgba(17, 34, 51, 0.75)
    &:after
      font-size: 24px

  .swiper-button-prev
    left: 0
    border-top-right-radius: 100% 50%
    border-bottom-right-radius: 100% 50%
    background: linear-gradient(to left, rgba(213, 213, 213, 0.75) 70%, rgba(213, 213, 213, 0.85))

  .swiper-button-next
    right: 0
    border-top-left-radius: 100% 50%
    border-bottom-left-radius: 100% 50%
    background: linear-gradient(to right, rgba(213, 213, 213, 0.75) 70%, rgba(213, 213, 213, 0.85))

</style>
