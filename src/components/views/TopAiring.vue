<template lang="pug">

	.top-airing
		.top-airing__container
			.top-airing__title
				| Top Airing Anime . . .

			query-content
				cards( v-for="(result, index) in getAnimeAiring"
						 :key="index"
						 :query="result" )

</template>

<script>

	import QueryContent from "@/components/modules/QueryContent";
	import Cards from "@/components/modules/Cards";
	import { mapActions, mapGetters } from "vuex";

	export default {
		name: "TopAiring",
		components: {
			Cards,
			QueryContent
		},
		methods: {
			...mapActions(["loadAnimeAiring"])
		},
		computed: {
			...mapGetters(["getAnimeAiring"])
		},
		created() {
			this.loadAnimeAiring();
		}
	}

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"
	@import "../../assets/styles/modules/containers.sass"


	.top-airing
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
