<template lang="pug">

	.PreFooterTopAnime
		router-link.PreFooterTopAnime-title(to="/") Top Anime
			.PreFooterTopAnime-icon.material-icons keyboard_arrow_right
		.PreFooterTopAnime-content(v-for="(result, index) in getFavoriteAnimeResult" :key="index")
			p.PreFooterTopAnime-digit {{ index + 1 }}.
			router-link.PreFooterTopAnime-link(to="/") {{ result['title'] }}

</template>

<script>

	import {mapActions, mapGetters} from "vuex";

	export default {
		name: "PreFooterAnime",
		methods: {
			...mapActions(["loadFavoriteAnime"]),
		},
		computed: {
			...mapGetters(["getFavoriteAnimeResult"])
		},
		async created() {
			await this.loadFavoriteAnime();
		}
	};

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars"
	@import "../../assets/styles/utils/mixins"

	.PreFooterTopAnime
		+flex(flex-start, flex-start, column)

		&-title
			color: $color-black
			font-size: 16px
			text-align: start
			padding: 0 0 8px 0
			width: 100%
			border-bottom: 1px solid rgba($color-black, 0.2)
			+flex(space-between, center, row)

			&:hover
				color: $color-orange

				.PreFooterList-icon
					color: inherit

		&-content
			margin: 8px 0 0 0
			+flex(center, flex-start, row)

		&-digit
			margin: 0 8px 0 0

		&-link
			color: $color-blue

			&:hover
				text-decoration: underline $color-blue

</style>
