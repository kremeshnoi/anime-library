<template lang="pug">

	.top-manga
		.top-manga__container
			.top-manga__title
				| Top Manga . . .

			query-content
				cards( v-for="(result, index) in getMangaFavorite"
						 :key="index"
						 :query="result" )

</template>

<script>

	import QueryContent from "@/components/modules/QueryContent.vue";
	import Cards from "@/components/modules/Cards.vue";
	import { mapActions, mapGetters } from "vuex";

	export default {
		name: "TopManga",
		components: {
			Cards,
			QueryContent
		},
		methods: {
			...mapActions(["loadMangaFavorite"])
		},
		computed: {
			...mapGetters(["getMangaFavorite"])
		},
		created() {
			this.loadMangaFavorite();
		}
	}

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"
	@import "../../assets/styles/modules/containers.sass"


	.top-manga
		&__container
			@extend .container-default

		&__title
			color: $color-black
			width: 100%
			font-size: 24px
			font-weight: 700
			text-transform: uppercase
			margin-bottom: 40px
			+mq(phablet, max)
				font-size: 20px

</style>

