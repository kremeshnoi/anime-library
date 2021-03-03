<template lang="pug">

    .swiper-carousel(v-swiper="swiperOptions")
      .swiper-carousel__container.swiper-wrapper
        slot

</template>

<script>

  export default {
    name: "SwiperCarousel",
    props: ["type"],
    data() {
      return {
        swiperOptions: {
          watchOverflow: true,
          centeredSlidesBounds: true,
          spaceBetween: 20,
          breakpoints: {
            320: {
              slidesPerView: 2
            },
            560: {
              slidesPerView: 3
            },
            768: {
              slidesPerView: 4
            },
            992: {
              slidesPerView: 5
            },
            1248: {
              slidesPerView: 6
            },
            1440: {
              slidesPerView: 7
            }
          }
        }
      }
    }
  }

</script>

<style lang="sass" scoped>

  @import "~/assets/styles/utils/vars"
  @import "~/assets/styles/utils/mixins"

  .swiper-carousel
    width: 100%

  .swiper-button-prev, .swiper-button-next
    top: 0
    height: 40%
    width: 40px
    outline: none
    transform: translateY(70%)
    color: rgba(17, 34, 51, 0.75)
    &:after
      font-size: 24px

  .swiper-button-prev
    left: 0
    border-top-right-radius: 100% 50%
    border-bottom-right-radius: 100% 50%
    background: linear-gradient(to left, rgba(213, 213, 213, 0), rgba(213, 213, 213, 0.75) 70%, rgba(213, 213, 213, 0.85))

  .swiper-button-next
    right: 0
    border-top-left-radius: 100% 50%
    border-bottom-left-radius: 100% 50%
    background: linear-gradient(to right, rgba(213, 213, 213, 0), rgba(213, 213, 213, 0.75) 70%, rgba(213, 213, 213, 0.85))

</style>
