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
				.anime__trailer.anime-trailer
					.anime-trailer__title
						| Watch Trailer
					.anime-trailer__content
						iframe.anime-trailer__iframe( v-if="getAnimeById['trailer_url']"
																:src="getAnimeById['trailer_url']"
																frameborder="0"
																allowfullscreen="true"
																autoplay="false")
						h2.anime-trailer__info( v-else ) Trailer not found -_-

				.anime__related.anime-related
					.anime-related__title
						| Related
					.anime-related__content
						ul.anime-related__tabs.tabs( v-if="getAnimeById['related']" )
							li.anime-related__tab.tab( v-for="(value, name, counter) in getAnimeById['related']"
															  :key="name" )
								a.anime-related__tab-item( :href=`'#' + counter` )
									| {{ name }}
						.anime-related__item( :id="counter"
													v-for="(value, name, counter) in getAnimeById['related']"
													:key="name" )
							table.anime-related__table.striped
								tbody.anime-related__tbody
									tr.anime-related__tr( v-for="(result, index) in value"
																:key="index" )
										td.anime-related__td
											a.anime-related__link( @click="computeRoute(result)")
												| {{ result["name"] }}

			.anime__description.anime-description
				.anime-description__title
					| DESCRIPTION

				.anime-description__synopsis
					| {{ getAnimeById["synopsis"] }}

</template>

<script>

	import { mapActions, mapGetters } from "vuex";
	import Cards from "@/components/modules/Cards";
	import SwiperCarousel from "@/components/modules/SwiperCarousel";
	import SelectCollection from "@/components/modules/SelectCollection";

	export default {
		name: "Anime",
		data() {
			return {
				relatedData: []
			}
		},
		components: {
			Cards,
			SwiperCarousel,
			SelectCollection
		},
		metaInfo() {
			return {
				title: `Anime / ${ this.getAnimeById["title"] }`
			}
		},
		methods: {
			...mapActions(["loadAnimeById", "computeRoute"])
		},
		computed: {
			...mapGetters(["getAnimeById"])
		},
		async created() {
			await this.loadAnimeById();
			const tabs = document.querySelectorAll(".tabs");
			const instanceTabs = M.Tabs.init(tabs);
			const indicatorTooltip = document.querySelector(".indicator").style.display = "none";
		}
	};

</script>

<style lang="sass" scoped>

	// IMPORTS

	@import "../../assets/styles/utils/vars"
	@import "../../assets/styles/utils/mixins"
	@import "../../assets/styles/modules/titles"
	@import "../../assets/styles/modules/dividers"
	@import "../../assets/styles/modules/containers"

	// ANIME

	.anime
		width: 100%

		&__container
			display: grid
			grid-gap: 20px
			grid-template-columns: 1fr 1fr
			grid-template-areas: "main sub" "description description"
			@extend .container-default
			+mq(tablet-mid, max)
				grid-template-columns: 1fr
				grid-template-areas: "main" "sub" "description"

		&__main-content
			grid-area: main
			display: grid
			justify-content: start
			grid-template-areas: "title title" "cover info"
			grid-gap: 20px
			align-content: start
			+mq(phablet, max)
				grid-template-areas: "title" "cover" "info"

		&__sub-content
			grid-area: sub
			display: grid
			grid-gap: 20px
			justify-content: flex-start
			grid-template-rows: min-content
			grid-template-columns: minmax(auto, 360px)

		&__description
			grid-area: description

		&__info
			grid-area: info

		&__title
			text-align: start
			font-size: 20px
			max-width: 460px
			grid-area: title

		&__cover
			grid-area: cover
			width: 100%

		&__input-field
			margin: 0

	// ANIME TRAILER

	.anime-trailer
		display: grid
		justify-content: start
		grid-gap: 20px

		&__title
			@extend .header-title

		&__iframe
			height: 200px
			width: 360px
			+mq(phone-wide, max)
				height: 124px
				width: 220px

	// ANIME RELATED

	.anime-related
		&__title
			@extend .header-title

		&__tabs
			display: flex
			flex-wrap: wrap
			overflow-x: initial
			overflow-y: initial
			height: 100%

		&__tab-item
			padding: 0 !important
			margin: 0 24px 0 0
			text-align: start
			color: $color-blue-light !important
			&.active
				background-color: initial !important
				color: $color-orange !important

		&__link
			color: $color-grey-dark
			&:hover
				text-decoration: underline

	// ANIME DESCRIPTION

	.anime-description
		text-align: start

		&__title
			@extend .header-title
			margin: 0 0 16px 0

	// ANIME INFO

	.anime-info
		text-align: start
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
