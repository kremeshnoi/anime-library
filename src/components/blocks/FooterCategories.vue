<template lang="pug">

	.footer-categories
		.footer-categories__container
			footer-categories-top-anime
			footer-categories-top-manga
			footer-categories-top-characters

</template>

<script>

	import FooterCategoriesTopAnime from "@/components/modules/FooterCategoriesTopAnime.vue";
	import FooterCategoriesTopManga from "@/components/modules/FooterCategoriesTopManga.vue";
	import FooterCategoriesTopCharacters from "@/components/modules/FooterCategoriesTopCharacters.vue";

	export default {
		name: "FooterCategories",
		components: {
			FooterCategoriesTopAnime,
			FooterCategoriesTopManga,
			FooterCategoriesTopCharacters
		}
	};

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"

	.footer-categories
		background-color: $color-white-dark

		&__container
			display: grid
			width: 100%
			justify-content: space-between
			grid-gap: 40px
			grid-template-columns: repeat(3, 1fr)
			max-width: 1300px
			margin: 0 auto
			padding: 40px 40px 40px 40px
			text-align: start
			+mq(tablet, max)
				grid-template-columns: 1fr 1fr
			+mq(tablet-small, max)
				grid-template-columns: 1fr

</style>
