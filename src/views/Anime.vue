<template lang="pug">

	.Anime
		.Anime-content
			.Anime-block-left
				.Anime-block-title
					| {{ loadedAnimeResult['title'] }}
					br
					| {{ loadedAnimeResult['title_japanese'] }}
				.Anime-block-
				img.Anime-block-image(:src="loadedAnimeResult['image_url']")
				.Anime-block-info
			.Anime-block-right

</template>

<script>

	import {mapActions, mapGetters} from "vuex";

	export default {
		name: "Anime",
		data: () => {
			return {
				loadedAnimeResult: {}
			};
		},
		methods: {
			...mapActions(["loadAnimeData"])
		},
		computed: {
			...mapGetters(["getLoadedAnimeResult"])
		},
		created() {
			this.loadAnimeData().then(() => {
				this.loadedAnimeResult = this.getLoadedAnimeResult;
			});
		}
	};

</script>

<style lang="sass" scoped>

	.Anime
		width: 100%
		padding: 54px 0 0 0

		&-content
			margin: 0 auto
			padding: 40px 40px 40px 40px
			max-width: 1300px

		&-block
			display: grid
			grid-template-columns: 1fr 1fr

			&-left
				display: grid

			&-title
				text-align: start
				font-size: 22px

</style>
