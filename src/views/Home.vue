<template lang="pug">

	.home
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

	@import "../assets/styles/utils/vars.sass"
	@import "../assets/styles/utils/mixins.sass"

	.home
		width: 100%

</style>
