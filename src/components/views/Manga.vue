<template lang="pug">

	.manga
		.manga__container
			.manga__main-content
				h1.manga__title
					| {{ getMangaById["title"] }}
					.divider_hidden
					| {{ getMangaById["title_japanese"] }}
				img.manga__cover( :src="getMangaById['image_url']" )

				.manga__info.manga-info
					h2.manga-info__title
						| Info
					ul.manga-info__list
						li.manga-info__list-item
							.manga-info__list-key
								| Type:
							| &nbsp;
							.manga-info__list-value
								| {{ getMangaById["type"] }}
						li.manga-info__list-item
							.manga-info__list-key
								| Score:
							| &nbsp;
							span.manga-info__list-value.manga-info__list-value_decor
								| {{ getMangaById["score"] }}
						li.manga-info__list-item
							.manga-info__list-key
								| Status:
							| &nbsp;
							.manga-info__list-value
								| {{ getMangaById["status"] }}
						li.manga-info__list-item
							.manga-info__list-key
								| Genres:
							| &nbsp;
							.manga-info__list-values( v-for="(result, index_genres) in getMangaById['genres']"
															  :key="index_genres" )
								| {{ result["name"] }}
						li.manga-info__list-item
							.manga-info__list-key
								| Volumes:
							| &nbsp;
							.manga-info__list-value
								| {{ getMangaById["volumes"] }}
						li.manga-info__list-item
							.manga-info__list-key
								| Chapters:
							| &nbsp;
							.manga-info__list-value
								| {{ getMangaById["chapters"] }}
						li.manga-info__list-item
							.manga-info__list-key
								| Publication:
							| &nbsp;
							.manga-info__list-values( v-for="(result, index_serializations) in getMangaById['serializations']"
															  :key="index_serializations" )
								| {{ result["name"] }}

			.manga__sub-content

</template>

<script>

	import { mapActions, mapGetters } from "vuex";

	export default {
		name: "Manga",
		metaInfo() {
			return {
				title: `Anime / ${ this.getMangaById["title"] }`
			}
		},
		methods: {
			...mapActions(["loadMangaById"])
		},
		computed: {
			...mapGetters(["getMangaById"])
		},
		async created() {
			await this.loadMangaById();
		}
	};

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars"
	@import "../../assets/styles/utils/mixins"
	@import "../../assets/styles/modules/dividers"
	@import "../../assets/styles/modules/containers"

	.manga
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
			max-width: 460px
			grid-area: title

		&__cover
			grid-area: cover

	.manga-info
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
