<template lang="pug">

	.Home
		Hero
		TopAiring

</template>

<script>

	import Hero from "@/components/blocks/Hero.vue";
	import TopAiring from "@/components/blocks/TopAiring.vue";

	export default {
		name: "Home",
		components: {
			Hero,
			TopAiring
		 },
		metaInfo: {
			title: "Anime Library - Homepage"
		 }
	 };

</script>

<style lang="sass" scoped>

	@import "../assets/styles/utils/vars.sass"
	@import "../assets/styles/utils/mixins.sass"

	.Home
		width: 100%
		padding: 54px 0 0 0

</style>
