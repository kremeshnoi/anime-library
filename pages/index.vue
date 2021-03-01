<template lang='pug'>

	.home
		hero

		section.slider-container
			.slider
				.slide-track(data-drag)
					img.slide(
						:key="itemIndex"
						:src="item.img"
						draggable="false"
						v-for="(item, itemIndex) in studios.data")

		genres

		cards-block(
			v-if='animeAiring',
			:cardsBlockData='animeAiring')

		//- cards-block(
		//-   v-if='animeUpcoming',
		//-   :cardsBlockData='animeUpcoming')

</template>

<script>

	import jikanjs from 'jikanjs';
	import { studios } from "@/utils/studios";
	import Hero from '@/components/blocks/Hero';
	import { mapActions, mapGetters } from "vuex";
	import Genres from '@/components/blocks/Genres';
	import CardsBlock from '@/components/blocks/CardsBlock';
	import layoutMiddleware from '@/middleware/layoutMiddleware';

	export default {
		name: 'Home',
		layout: layoutMiddleware,
		metaInfo: {
			title: 'Otaku Library - Organize your own anime and manga list'
		},
		components: {
			Hero,
			Genres,
			CardsBlock
		},
		// async asyncData() {
		//   const animeAiringResponse = await jikanjs.loadTop('anime', 1, 'airing');
		//   const animeUpcomingResponse = await jikanjs.loadTop('anime', 1, 'upcoming');
		//   return {
		//     animeAiring: {
		//       title: 'AIRING ANIME',
		//       link: '/anime/airing',
		//       data: animeAiringResponse.top
		//     },
		//     animeUpcoming: {
		//       title: 'UPCOMING ANIME',
		//       link: '/anime/upcoming',
		//       data: animeUpcomingResponse.top
		//     }
		//   };
		// },
		computed: {
			...mapGetters({
				getAnimeAiring: 'anime/getAnimeAiring',
			}),
			animeAiring() {
				return {
					title: 'AIRING ANIME',
					link: '/anime/airing',
					data: this.getAnimeAiring
				}
			},
			studios() {
				return {
					data: studios
				}
			}
		},
		async created() {
			await this.loadAnimeAiring();
		},
		methods: {
			...mapActions({
				loadAnimeAiring: 'anime/loadAnimeAiring'
			})
		}
	};

</script>

<style lang='sass' scoped>

	@import '~/assets/styles/utils/vars'
	@import '~/assets/styles/state/scroll'
	@import '~/assets/styles/modules/containers'

	.home
		width: 100%

	.slider-container
		@extend .container-default

	.slider
		width: 100%
		height: 100px
		display: flex
		overflow: hidden
		align-items: center
		max-width: calc(var(--item-width) * var(--item-count))

		.slide-track
			display: flex
			height: 100px
			animation: scroll $animationSpeed linear infinite
			width: calc(var(--item-width) * var(--item-count))

		.slide
			display: flex
			margin: 0 20px
			align-items: center
			justify-content: center
			width: var(--item-width)
			object-fit: contain
			&:hover
				opacity: 0.7

</style>
