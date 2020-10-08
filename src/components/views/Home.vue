<template lang='pug'>

	.home
		hero(v-if='this.user[0] === null')
		cards-block(v-if='getAnimeAiring'
			:query='animeAiring')
		cards-block(v-if='getAnimeUpcoming'
			:query='animeUpcoming')
		genres

</template>

<script>

	// IMPORTS

	import { mapActions, mapGetters } from "vuex";
	import Hero from "@/components/blocks/Hero";
	import Genres from "@/components/blocks/Genres";
	import CardsBlock from '@/components/blocks/CardsBlock';

	// COMPONENT OPTIONS

	export default {
		name: 'Home',
		metaInfo: {
			title: 'Otaku Library - Organize your own anime and manga list'
		},
		components: {
			Hero,
			Genres,
			CardsBlock
		},
		data:()=> {
			return {
				user: []
			}
		},
		computed: {
			...mapGetters(['getAnimeAiring', 'getAnimeUpcoming']),
			animeAiring() {
				const animeAiring = {
					title: 'AIRING ANIME',
					link: '/anime/top-airing',
					data: this.getAnimeAiring
				}

				return animeAiring
			},
			animeUpcoming() {
				const animeUpcoming = {
					title: 'UPCOMING ANIME',
					link: '/anime/upcoming',
					data: this.getAnimeUpcoming
				}

				return animeUpcoming
			}
		},
		async created() {
			await this.getUid().then(result => this.user.push(result));
			await this.loadAnimeAiring();
			await this.loadAnimeUpcoming();
		},
		methods: {
			...mapActions(['getUid', 'loadAnimeAiring', 'loadAnimeUpcoming'])
		}
	};

</script>

<style lang='sass' scoped>

	// HOME STYLES

	.home
		width: 100%

</style>
