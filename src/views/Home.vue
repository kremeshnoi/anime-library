<template lang="pug">

	.Home

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
		padding: 108px 20px 54px

</style>
