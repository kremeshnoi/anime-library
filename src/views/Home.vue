<template lang="pug">

	.Home
		HeroBlock

</template>

<script lang="ts">

	import HeroBlock from "@/components/blocks/HeroBlock.vue";
	import TopAiringBlock from "@/components/blocks/TopAiringBlock.vue";

	export default {
		name: "Home",
		components: {
			HeroBlock,
			TopAiringBlock
		 },
		metaInfo: {
			title: "Anime Library - Homepage"
		 }
	 };

</script>

<style lang="sass" scoped>

	@import "../assets/styles/utils/vars.sass"
	@import "../assets/styles/utils/mixins.sass"
	@import "../assets/styles/modules/indentations.sass"

	.Home
		width: 100%
		padding: 54px 0 0 0

</style>
