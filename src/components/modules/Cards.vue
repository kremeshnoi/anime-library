<template lang="pug">

	.Cards
		.Cards-container
			.Cards-item.card(v-for="result in getTopList")
				.Cards-image-wrapper.card-image
					img.Cards-image.activator(v-bind:src="result['image_url']")
				.Cards-title-wrapper.card-content
					span.Cards-title.card-title.activator {{ result['title'] }}
				.Cards-reveal-wrapper.card-reveal
					span.Cards-reveal-title.card-title {{ result['title'] }}
					p.Cards-reveal-description Type : {{ result['type'] }}
					p.Cards-reveal-description Score : {{ result['score'] }}
					.Cards-reveal-input-field.input-field
						label.Cards-reveal-label Status
						select.Cards-reveal-select.browser-default
							option(value="1") Plan to watch
							option(value="2") Watching
							option(value="3") Completed
							option(value="4") On hold
							option(value="4") Dropped
							option(value="4") Reviewing
					p.Cards-reveal-description
						a.Cards-reveal-description More info

</template>

<script>

	import { FetchTopList } from "@/services/fetchTopList.ts";

	export default {
		name: "Cards",
		data: () => {
			return {
				getTopList: []
			}
		},
		mounted() {
			FetchTopList.fetchTopList("anime",1, "airing", 8).then(response => {
				this.getTopList = response
			})
		}
	 }

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"

	.Cards
		width: 100%

		&-container
			display: grid
			grid-gap: 20px
			justify-content: space-between
			grid-template-columns: repeat(auto-fit, 200px)

		&-item
			margin: 0
			height: fit-content
			&:hover
				opacity: 0.9

		&-image
			object-fit: contain
			transform: scale(1.01)
			&-wrapper
				overflow: hidden
				cursor: pointer

		&-title
			margin: 0 !important
			width: 160px
			font-size: 16px
			display: block
			overflow: hidden
			white-space: nowrap
			text-overflow: ellipsis
			&-wrapper
				display: flex
				justify-content: center
				align-items: center
				padding: 10px

		&-reveal
			&-wrapper
				height: 101%
				padding: 24px 14px 24px 14px

			&-title
				margin: 0 auto
				font-size: 16px
				max-width: 150px

			&-description
				text-align: start
				margin: 8px 0 8px 0
				&:first-of-type
					margin: 24px 0 0 0

			&-input-field
				+flex(center, center, column)

			&-label
				width: 100%
				text-align: start
				position: initial
				margin: 0 0 8px 0

			&-select
				margin: 0
				padding: 0
				border: none
				outline: none

</style>
