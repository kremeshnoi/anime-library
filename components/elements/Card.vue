<template lang="pug">

	nuxt-link.card(:to="{ name: `${ type }-id-title`, params: { id: resultItem.mal_id, title: $formatRouteTitle(resultItem.title || resultItem.name)} }")
		.card__image-wrapper
			img.card__image(
				draggable="false"
				alt="title cover"
				:src="resultItem.image_url")

			.card__title-wrapper
				span.card__title
					| {{ resultItem.title || resultItem.name }}

</template>

<script>

	export default {
		name: "Card",
		props: ["resultItem"],
		computed: {
			type() {
				let type = this.resultItem.type
				if (type === undefined) {
					if (this.resultItem.role || this.resultItem.name_kanji) type = "characters"
					else if (this.$nuxt.$route.name === "anime-id-title") type = "anime"
					else if (this.$nuxt.$route.name === "manga-id-title") type = "manga"
				}

				else if (type === "manga") type = "manga"
				else if (type === "Manga") type = "manga"
				else if (type === "Novel") type = "manga"
				else if (type === "Manhwa") type = "manga"
				else if (type === "One-shot") type = "manga"
				else if (type === "Doujinshi") type = "manga"
				else if (type !== "Manga" && type !== "manga") type = "anime"

				return type
			}
		}
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"
	@import "~/assets/styles/modules/titles"

	.card
		margin: 0
		border: 0
		width: 100%
		max-width: 160px
		position: relative
		box-shadow: 0 8px 7px -7px rgba(0, 0, 0, 1)
		&:hover
			opacity: 0.8

		&__image
			width: 100%
			height: 240px
			display: block
			transform: scale(1.01)

		&__image-wrapper
			width: 100%
			cursor: pointer
			overflow: hidden
			position: relative

		&__title
			margin: 0
			font-size: 14px
			@extend .title_is-cropped
			color: $color-white
			padding: 0 10px 0 10px
			text-shadow: rgba(0,0,0,.8) 1px 1px 0

		&__title-wrapper
			bottom: 0
			width: 100%
			position: absolute
			text-align: center
			padding: 4px 0 4px 0
			background: rgb(0,0,0)
			+flex(center,center, initial)
			background: linear-gradient(0deg, rgba(0,0,0,0.6) 50%, rgba(0, 0, 0, 0.0) 100%)

</style>
