<template lang="pug">

	section.info
		h2.info__title
			| Info
		ul.info__list
			li.info__list-item
				span.info__list-key
					| Type:
					|
				span.info__list-value(v-if="infoData.type")
					| {{ infoData.type }}
				span.info__list-value(v-else)
					| Unknown
			li.info__list-item
				span.info__list-key
					| Status:
					|
				span.info__list-value(v-if="infoData.status")
					| {{ infoData.status }}
				span.info__list-value(v-else)
					| Unknown
			li.info__list-item(v-if="infoData.aired")
				span.info__list-key
					| Aired:
					|
				span.info__list-value(v-if="infoData.aired")
					| {{ infoData.aired.string }}
				span.info__list-value(v-else)
					| Unknown
			li.info__list-item(v-if="infoData.published")
				span.info__list-key
					| Published:
					|
				span.info__list-value(v-if="infoData.published")
					| {{ infoData.published.string }}
				span.info__list-value(v-else)
					| Unknown
			li.info__list-item
				span.info__list-key
					| Genres:
					|
				span.info__list-values(
					v-for="(genre, genreIndex) in infoData.genres",
					:key="genreIndex")
					| {{ genre.name }}
			li.info__list-item(v-if="title_type === 'manga'")
				span.info__list-key
					| Volumes:
					|
				span.info__list-value(v-if="infoData.volumes")
					| {{ infoData.volumes }}
				span.info__list-value(v-else)
					| Unknown
			li.info__list-item(v-if="title_type === 'manga'")
				span.info__list-key
					| Chapters:
					|
				span.info__list-value(v-if="infoData.chapters")
					| {{ infoData.chapters }}
				span.info__list-value(v-else)
					| Unknown
			li.info__list-item(v-if="title_type === 'anime'")
				span.info__list-key
					| Episodes:
					|
				span.info__list-value(v-if="infoData.episodes")
					| {{ infoData.episodes }}
				span.info__list-value(v-else)
					| Unknown
			li.info__list-item(v-if="title_type === 'anime'")
				span.info__list-key
					| Duration:
					|
				span.info__list-value(v-if="infoData.duration")
					| {{ infoData.duration }}
				span.info__list-value(v-else)
					| Unknown
			li.info__list-item
				span.info__list-key
					| Rating:
					|
				span.info__list-value(v-if="infoData.rating")
					| {{ infoData.rating }}
				span.info__list-value(v-else)
					| Unknown

</template>

<script>

	export default {
		name: "Info",
		props: ["infoData", "title_type"]
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"
	@import "~/assets/styles/modules/titles"

	.info
		grid-area: info
		text-align: start
		+flex(initial, initial, column)

		&__title
			margin: 0
			@extend .title-bordered

		&__list
			width: 100%
			height: 100%
			max-width: 300px
			margin: 10px 0 0 0
			+flex(flex-start, initial, column)

		&__list-value
			&_decor
				border-radius: 4px
				padding: 4px 6px 4px 6px
				color: $color-white-pure
				background-color: $color-yellow

		&__list-item
			margin: 8px 0
			&:last-of-type
				margin: 8px 0 0 0

		&__list-values
			height: auto
			margin: 0 10px 0 0
			display: inline-block
			border-bottom: 1px dashed $color-grey-light
			&:hover
				cursor: pointer
				border-bottom: 1px dashed $color-blue-light

</style>
