<template lang='pug'>

  .manga-characters
    .manga-characters__wrapper
      .manga-characters__title
        | Characters

      swiper-carousel(
        v-if='charactersData && charactersData.length',
        :type='`characters`'
      )
        cards.swiper-slide(
          v-for='(data, dataIndex) in charactersData.slice(0, 20)',
          :key='dataIndex',
          :cardsData='data'
        )

      h4.manga-characters__disaster(v-else)
        | Not found

</template>

<script>

  import Cards from '@/components/elements/Cards';
  import SwiperCarousel from '@/components/elements/SwiperCarousel';
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';

  export default {
    name: 'Characters',
    props: ['charactersData'],
    components: {
      Cards,
      SwiperCarousel,
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive,
    }
  };

</script>

<style lang='sass' scoped>

	@import '~/assets/styles/utils/vars'
	@import '~/assets/styles/modules/titles'

	.manga-characters
		&__title
			@extend .title-default
		&__wrapper
			display: grid
			grid-gap: 20px
		&__disaster
			text-align: start
			font-size: 30px

</style>
