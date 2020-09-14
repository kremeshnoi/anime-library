<template lang='pug'>

	.home
		top-airing-anime-block
		genres-block
		by-popularity-anime-block

</template>

<script>

	import TopAiringAnimeBlock from '@/components/blocks/TopAiringAnimeBlock';
	import ByPopularityAnimeBlock from "@/components/blocks/ByPopularityAnimeBlock";
	import GenresBlock from "@/components/blocks/GenresBlock";

	export default {
		name: 'Home',
		components: {
			GenresBlock,
			TopAiringAnimeBlock,
			ByPopularityAnimeBlock
		},
		metaInfo: {
			title: 'Otaku Library - Organize your own anime / manga list'
		}
	};

</script>

<style lang='sass' scoped>

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'

	.home
		width: 100%

</style>
