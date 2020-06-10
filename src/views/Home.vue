<template lang="pug">

	.Home
		BlockTopAiring
		BlockTopUpcoming

</template>

<script>

	import BlockTopAiring from "../components/blocks/BlockTopAiring";
	import BlockTopUpcoming from "../components/blocks/BlockTopUpcoming";

	export default {
		name: "Home",
		components: {
			BlockTopAiring,
			BlockTopUpcoming
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
