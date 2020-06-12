<template lang="pug">

	.Home
		BlockHero

</template>

<script>

	import BlockHero from "@/components/blocks/BlockHero.vue";
	import BlockTopAiring from "@/components/blocks/BlockTopAiring.vue";

	export default {
		name: "Home",
		components: {
			BlockHero,
			BlockTopAiring
		 },
		metaInfo: {
			title: "Anime Library - Homepage"
		 }
	 };

</script>

<style lang="sass" scoped>

	.Home
		width: 100%
		padding: 54px 0 0

</style>
