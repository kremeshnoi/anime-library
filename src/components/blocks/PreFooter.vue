<template lang="pug">

	.PreFooter
		.PreFooter-container
			PreFooterTopAnime
			PreFooterTopManga
			PreFooterTopCharacters

</template>

<script>

	import PreFooterTopAnime from "@/components/modules/PreFooterTopAnime.vue";
	import PreFooterTopManga from "@/components/modules/PreFooterTopManga.vue";
	import PreFooterTopCharacters from "@/components/modules/PreFooterTopCharacters.vue";

	export default {
		name: "PreFooter",
		components: {
			PreFooterTopAnime,
			PreFooterTopManga,
			PreFooterTopCharacters
		}
	};

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"

	.PreFooter
		background-color: $color-white-dark

		&-container
			display: grid
			width: 100%
			justify-content: space-between
			grid-gap: 40px
			grid-template-columns: repeat(3, 1fr)
			max-width: 1300px
			margin: 0 auto
			padding: 40px 40px 40px 40px
			text-align: start

</style>
