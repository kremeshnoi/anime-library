<template lang='pug'>

	.home
		top-airing-anime-block
		by-popularity-anime-block


</template>

<script>

	import TopAiringAnimeBlock from '@/components/blocks/TopAiringAnimeBlock';
	import ByPopularityAnimeBlock from "@/components/blocks/ByPopularityAnimeBlock";

	export default {
		name: 'Home',
		components: {
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
