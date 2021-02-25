<template lang='pug'>

  .top-airing-anime
    .top-airing-anime__container
      router-link.top-airing-anime__title(:to='cardsBlockData.link')
        | {{ cardsBlockData.title }}
        .top-airing-anime__icon.material-icons keyboard_arrow_right

      swiper-carousel
        cards.swiper-slide(v-for='(data, dataIndex) in cardsBlockData.data.slice(0, 7)',
        :key='dataIndex',
        :cardsData='data')

</template>

<script>

  import Cards from '@/components/elements/Cards';
  import SwiperCarousel from '@/components/elements/SwiperCarousel';

  export default {
    name: 'CardsBlock',
    props: ['cardsBlockData'],
    components: {
      Cards,
      SwiperCarousel
    },
    data() {
      return {
        list: [
          { end_date: "Jul 2010",
            episodes: 64,
            image_url: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f",
            mal_id: 5114,
            members: 181935,
            rank: 1,
            score: 9.2,
            start_date: "Apr 2009",
            title: "Fullmetal Alchemist: Brotherhood",
            type: "TV",
            url: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood"
          },
                    { end_date: "Jul 2010",
            episodes: 64,
            image_url: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f",
            mal_id: 5114,
            members: 181935,
            rank: 1,
            score: 9.2,
            start_date: "Apr 2009",
            title: "Fullmetal Alchemist: Brotherhood",
            type: "TV",
            url: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood"
          },
                    { end_date: "Jul 2010",
            episodes: 64,
            image_url: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f",
            mal_id: 5114,
            members: 181935,
            rank: 1,
            score: 9.2,
            start_date: "Apr 2009",
            title: "Fullmetal Alchemist: Brotherhood",
            type: "TV",
            url: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood"
          },
                    { end_date: "Jul 2010",
            episodes: 64,
            image_url: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f",
            mal_id: 5114,
            members: 181935,
            rank: 1,
            score: 9.2,
            start_date: "Apr 2009",
            title: "Fullmetal Alchemist: Brotherhood",
            type: "TV",
            url: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood"
          },
                    { end_date: "Jul 2010",
            episodes: 64,
            image_url: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f",
            mal_id: 5114,
            members: 181935,
            rank: 1,
            score: 9.2,
            start_date: "Apr 2009",
            title: "Fullmetal Alchemist: Brotherhood",
            type: "TV",
            url: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood"
          },
                    { end_date: "Jul 2010",
            episodes: 64,
            image_url: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f",
            mal_id: 5114,
            members: 181935,
            rank: 1,
            score: 9.2,
            start_date: "Apr 2009",
            title: "Fullmetal Alchemist: Brotherhood",
            type: "TV",
            url: "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood"
          },
        ]
      }
    }
  };

</script>

<style lang='sass' scoped>

	@import '~/assets/styles/utils/vars'
	@import '~/assets/styles/utils/mixins'
	@import '~/assets/styles/modules/titles'
	@import '~/assets/styles/modules/containers'

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
