<template lang="pug">

	.anime
		.anime__container
			.anime__main-content
				h1.anime__title
					| {{ getAnimeResult['title'] }}
					.divider_hidden
					| {{ getAnimeResult['title_japanese'] }}
				img.anime__cover(:src="getAnimeResult['image_url']")

				.anime__info.anime-info
					h2.anime-info__header
						| Info
					ul.anime-info__list
						li.anime-info__list-item
							.anime-info__list-key
								| Type:
							| &nbsp;
							.anime-info__list-value
								| {{ getAnimeResult['type'] }}
						li.anime-info__list-item
							.anime-info__list-key
								| Score:
							| &nbsp;
							span.anime-info__list-value.anime-info__list-value_decor
								| {{ getAnimeResult['score'] }}
						li.anime-info__list-item
							.anime-info__list-key
								| Status:
							| &nbsp;
							.anime-info__list-value
								| {{ getAnimeResult['status'] }}
						li.anime-info__list-item
							.anime-info__list-key
								| Genres:
							| &nbsp;
							.anime-info__list-values(v-for="(result, index_genres) in getAnimeResult['genres']"
															:key="index_genres")
								| {{ result['name'] }}
						li.anime-info__list-item
							.anime-info__list-key
								| Duration:
							| &nbsp;
							.anime-info__list-value
								| {{ getAnimeResult['duration'] }}
						li.anime-info__list-item
							.anime-info__list-key
								| Studios:
							| &nbsp;
							.anime-info__list-values(v-for="(result, index_studios) in getAnimeResult['studios']"
															:key="index_studios")
								| {{ result['name'] }}
						li.anime-info__list-item
							.anime-info__list-key
								| Rating:
							| &nbsp;
							.anime-info__list-value
								| {{ getAnimeResult['rating'] }}

			.anime__sub-content

</template>

<script>

	import {mapActions, mapGetters} from "vuex";

	export default {
		name: "Anime",
		methods: {
			...mapActions(["loadAnime"])
		},
		computed: {
			...mapGetters(["getAnimeResult"])
		},
		async created() {
			await this.loadAnime();
		}
	};

</script>

<style lang="sass" scoped>

	@import "../assets/styles/utils/vars.sass"
	@import "../assets/styles/utils/mixins.sass"
	@import "../assets/styles/modules/dividers.sass"
	@import "../assets/styles/modules/containers.sass"

	.anime
		width: 100%

		&__container
			display: grid
			grid-gap: 20px
			grid-template-columns: 1fr 1fr
			@extend .container-default

		&__main-content
			display: grid
			justify-content: start
			grid-template-areas: "title title" "cover info"
			grid-gap: 20px

		&__sub-content

		&__title
			text-align: start
			font-size: 20px
			grid-area: title

		&__cover
			grid-area: cover

	.anime-info
		text-align: start
		grid-area: info
		+flex(initial, initial, column)

		&__header
			color: $color-black
			width: 100%
			font-size: 16px
			font-weight: 700
			text-align: start
			text-transform: uppercase
			padding: 14px 0 14px 14px
			border-left: 5px solid $color-blue-light

		&__list
			margin: 20px 0 0 5px
			height: 100%
			max-width: 300px
			width: 100%
			+flex(space-between, initial, column)

		&__list-key
			display: inline-block

		&__list-value
			display: inline-block

			&_decor
				padding: 0 6px
				border-radius: 4px
				color: $color-white-pure
				background-color: $color-yellow

		&__list-values
			margin: 0 10px 0 0
			height: auto
			transition: 0.5s
			display: inline-block
			border-bottom: 1px dashed $color-grey-light

			&:hover
				cursor: pointer
				border-bottom: 1px dashed $color-blue

</style>
