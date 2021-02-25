<template lang='pug'>

    .swiper-carousel(
      @ready='show()'
      ref='SwiperGenres'
      style='visibility: hidden'
      v-swiper='genresSwiperOptions')
      .swiper-carousel__container.swiper-wrapper
        slot

      .swiper-button-prev
      .swiper-button-next

</template>

<script>

  export default {
    name: 'SwiperCarouselGenres',
    data() {
      return {
        genresSwiperOptions: {
          watchOverflow: true,
          centeredSlidesBounds: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          slidesPerView: 2,
          spaceBetween: 10
        }
      };
    },
    methods: {
      show() {
        this.$refs.SwiperGenres.style.visibility = 'initial';
      }
    }
  };

</script>

<style lang='sass' scoped>

  @import '~/assets/styles/utils/vars'
  @import '~/assets/styles/utils/mixins'

  .swiper-carousel
    width: 100%
  .swiper-button-prev, .swiper-button-next
    top: 0
    height: 40%
    width: 40px
    color: rgba(17, 34, 51, 0.75)
    outline: none
    &:after
      font-size: 24px
  .swiper-button-prev
    left: 0
    background: linear-gradient(to left, rgba(213, 213, 213, 0), rgba(213, 213, 213, 0.75) 70%, rgba(213, 213, 213, 0.85))
    border-bottom-right-radius: 100% 50%
    border-top-right-radius: 100% 50%
  .swiper-button-next
    right: 0
    background: linear-gradient(to right, rgba(213, 213, 213, 0), rgba(213, 213, 213, 0.75) 70%, rgba(213, 213, 213, 0.85))
    border-bottom-left-radius: 100% 50%
    border-top-left-radius: 100% 50%

</style>
