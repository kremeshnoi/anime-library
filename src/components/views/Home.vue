<template lang="pug">

	.home
		top-airing-block

</template>

<script>

	import TopAiringBlock from "@/components/blocks/TopAiringBlock";

	export default {
		name: "Home",
		components: {
			TopAiringBlock
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
