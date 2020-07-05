<template lang="pug">

	.Home
		TopAiring

</template>

<script>

	import TopAiring from "@/components/blocks/TopAiring.vue";

	export default {
		name: "Home",
		components: {
			TopAiring
		 },
		metaInfo: {
			title: "Anime Library - Homepage"
		 }
	 };

</script>

<style lang="sass" scoped>

	@import "../assets/styles/utils/vars"
	@import "../assets/styles/utils/mixins"

	.Home
		width: 100%
		padding: 54px 0 0 0

</style>
