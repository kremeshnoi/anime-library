<template lang="pug">

	.home
		top-airing

</template>

<script>

	import TopAiring from "@/components/blocks/TopAiringBlock.vue";

	export default {
		name: "Home",
		components: {
			TopAiring
		},
		metaInfo: {
			title: "Otaku Library - Organize your own anime / manga list"
		}
	};

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars"
	@import "../../assets/styles/utils/mixins"

	.home
		width: 100%

</style>
