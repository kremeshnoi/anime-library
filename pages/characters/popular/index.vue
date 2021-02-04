<template lang='pug'>

  .top-characters
    .top-characters__container
      .top-characters__title
        | Most Popular Characters

      query-content
        cards(
          v-for='(character, characterIndex) in favoriteCharacters',
          :key='characterIndex',
          :cardsData='character')

</template>

<script>

  import jikanjs from 'jikanjs/lib/jikan';
  import Cards from '@/components/elements/Cards';
  import QueryContent from '@/components/elements/QueryContent';
  import layoutMiddleware from '@/middleware/layoutMiddleware';

  export default {
    name: 'TopCharacters',
    metaInfo: {
      title: 'Otaku Library - Most popular characters'
    },
    layout: layoutMiddleware,
    components: {
      Cards,
      QueryContent
    },
    async asyncData() {
      const favoriteCharactersResponse = await jikanjs.loadTop('characters');
      return {
        favoriteCharacters: favoriteCharactersResponse.top,
      };
    }
  };

</script>

<style lang='sass' scoped>

	@import '~/assets/styles/utils/vars'
	@import '~/assets/styles/utils/mixins'
	@import '~/assets/styles/modules/titles'
	@import '~/assets/styles/modules/containers'

	.top-characters
		&__container
			@extend .container-default
		&__title
			color: $color-black
			width: 100%
			font-size: 16px
			font-weight: 700
			text-transform: uppercase
			margin: 0 0 20px 0
			text-align: start
			@extend .title-bordered

</style>
