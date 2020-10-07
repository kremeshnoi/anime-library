<template lang='pug'>

	.home
		hero-block(v-if='this.user[0] === null')
		top-airing-anime-block
		anime-block-upcoming
		genres-block

</template>

<script>

	// IMPORTS

	import { mapActions } from "vuex";
	import HeroBlock from "@/components/blocks/HeroBlock";
	import GenresBlock from "@/components/blocks/GenresBlock";
	import AnimeBlockUpcoming from "@/components/blocks/AnimeBlockUpcoming";
	import TopAiringAnimeBlock from '@/components/blocks/TopAiringAnimeBlock';

	// COMPONENT OPTIONS

	export default {
		name: 'Home',
		components: {
			HeroBlock,
			GenresBlock,
			TopAiringAnimeBlock,
			AnimeBlockUpcoming
		},
		data:()=> {
			return {
				user: []
			}
		},
		async created() {
			await this.getUid().then(result => this.user.push(result));
		},
		methods: {
			...mapActions(['getUid'])
		},
		metaInfo: {
			title: 'Otaku Library - Organize your own anime and manga list'
		}
	};

</script>

<style lang='sass' scoped>

	// HOME STYLES

	.home
		width: 100%

</style>
