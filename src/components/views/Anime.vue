<template lang="pug">

	.anime
		.anime__container
			.anime__main-content
				h1.anime__title
					| {{ getAnimeById["title"] }}
					.divider_hidden
					| {{ getAnimeById["title_japanese"] }}
				img.anime__cover( :src="getAnimeById['image_url']" )
				select-collection.anime__input-field( v-if="getAnimeById['type']"
																  :query="getAnimeById['type']" )

				.anime__info.anime-info
					h2.anime-info__title
						| Info
					ul.anime-info__list
						li.anime-info__list-item
							.anime-info__list-key
								| Type:
							| &nbsp;
							.anime-info__list-value
								| {{ getAnimeById["type"] }}
						li.anime-info__list-item
							.anime-info__list-key
								| Score:
							| &nbsp;
							span.anime-info__list-value.anime-info__list-value_decor
								| {{ getAnimeById["score"] }}
						li.anime-info__list-item
							.anime-info__list-key
								| Status:
							| &nbsp;
							.anime-info__list-value
								| {{ getAnimeById["status"] }}
						li.anime-info__list-item
							.anime-info__list-key
								| Genres:
							| &nbsp;
							.anime-info__list-values( v-for="(result, index_genres) in getAnimeById['genres']"
															  :key="index_genres" )
								| {{ result["name"] }}
						li.anime-info__list-item
							.anime-info__list-key
								| Duration:
							| &nbsp;
							.anime-info__list-value
								| {{ getAnimeById["duration"] }}
						li.anime-info__list-item
							.anime-info__list-key
								| Studios:
							| &nbsp;
							.anime-info__list-values( v-for="(result, index_studios) in getAnimeById['studios']"
															  :key="index_studios" )
								| {{ result["name"] }}
						li.anime-info__list-item
							.anime-info__list-key
								| Rating:
							| &nbsp;
							.anime-info__list-value
								| {{ getAnimeById["rating"] }}

			.anime__sub-content

</template>

<script>

	import { mapActions, mapGetters } from "vuex";
	import SelectCollection from "@/components/modules/SelectCollection";

	export default {
		name: "Anime",
		components: {
			SelectCollection
		},
		metaInfo() {
			return {
				title: `Anime / ${ this.getAnimeById["title"] }`
			}
		},
		methods: {
			...mapActions(["loadAnimeById"])
		},
		computed: {
			...mapGetters(["getAnimeById"])
		},
		async created() {
			await this.loadAnimeById();
		}
	};

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars"
	@import "../../assets/styles/utils/mixins"
	@import "../../assets/styles/modules/dividers"
	@import "../../assets/styles/modules/containers"

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

		&__input-field
			margin: 0

		&__sub-content

		&__title
			text-align: start
			font-size: 20px
			max-width: 460px
			grid-area: title

		&__cover
			grid-area: cover

	.anime-info
		text-align: start
		grid-area: info
		+flex(initial, initial, column)

		&__title
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

		&__list-item
			margin: 6px 0
			&:last-of-type
				margin: 0

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
