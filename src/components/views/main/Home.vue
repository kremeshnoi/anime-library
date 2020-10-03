<template lang='pug'>

	.home
		hero-block(v-if='this.user[0] === null')
		top-airing-anime-block
		anime-block-upcoming
		genres-block

</template>

<script>

	import TopAiringAnimeBlock from '@/components/blocks/TopAiringAnimeBlock';
	import AnimeBlockUpcoming from "@/components/blocks/AnimeBlockUpcoming";
	import GenresBlock from "@/components/blocks/GenresBlock";
	import HeroBlock from "@/components/blocks/HeroBlock";
	import { mapActions } from "vuex";

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
			title: 'Otaku Library - Organize your own anime / manga list'
		}
	};

</script>

<style lang='sass' scoped>

	.home
		width: 100%

</style>
