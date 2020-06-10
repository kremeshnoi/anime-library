<template lang="pug">

	.Home
		BlockTopAiring
		BlockTopFavorite

</template>

<script>

	import BlockTopAiring from "../components/blocks/BlockTopAiring";
	import BlockTopFavorite from "../components/blocks/BlockTopFavorite";

	export default {
		name: "Home",
		components: {
			BlockTopAiring,
			BlockTopFavorite
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
