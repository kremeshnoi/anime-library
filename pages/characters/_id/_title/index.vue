<template lang="pug">

	main.character
		.character__container
			h1.character__title
				| {{ characterById.name }}

			.character__main-content
				.character__cover-container
					img.character__cover(
						draggable="false"
						alt="character cover"
						:src="characterById.image_url")

				.character__info.character-info
					h2.character-info__title
						| Info
					ul.character-info__list
						li.character-info__list-item
							span.character-info__list-key
								| Name:
								|
								span.character-info__list-value
									| {{ characterById.name }}
						li.character-info__list-item
							span.character-info__list-key
								| Name Kanji:
								|
								span.character-info__list-value(v-if="characterById.name_kanji")
									| {{ characterById.name_kanji }}
								span.character-info__list-value(v-else)
									| Unknown
						li.character-info__list-item
							span.character-info__list-key
								| Other names:
								|
								span.character-info__list-values(v-for="(name, nameIndex) in characterById.nicknames" v-if="characterById.nicknames.length")
									| {{ name }}
								span.character-info__list-value(v-if="characterById.nicknames.length === 0")
									| Unknown

			.character__sub-content
				.character__voice-actors.character-voice-actors
					.character-voice-actors__title
						| Voice Actors

					.character-voice-actors__content(v-if="characterById.voice_actors")
						NotFound(v-if="characterById.voice_actors.length === 0")

						ul.character-voice-actors__tabs.tabs(v-if="characterById.voice_actors")
							li.character-voice-actors__tab.tab(
								:key="name"
								v-for="(value, name) in characterById.voice_actors")
								a.character-voice-actors__tab-item(
									:href="'#' + name"
									v-if="value.language === 'English' || value.language === 'Japanese'")
									| {{ value.name }}

						.character-voice-actors__item(
							:id="name"
							:key="name"
							v-for="(value, name) in characterById.voice_actors")
							table.character-voice-actors__table(v-if="value.language === 'English'|| value.language === 'Japanese'")
								tbody.character-voice-actors__tbody
									tr.character-voice-actors__tr
										td.character-voice-actors__td
											img.character-voice-actors__photo(
												draggable="false"
												alt="voice actor"
												:src="value.image_url")
											.character-voice-actors__info
												.character-voice-actors__lang
													| Language: {{ value.language }}

			Description.character__description(:descriptionData="formatDescription")

			Comments.character__comments

</template>

<script>

	import jikanjs from "jikanjs/lib/jikan"
	import layout from "@/middleware/layout"
	import Carousel from "@/components/grids/Carousel"
	import Comments from "@/components/blocks/Comments"
	import NotFound from "@/components/elements/NotFound"
	import Description from "@/components/blocks/Description"

	export default {
		name: "Character",
		metaInfo() {
			return {
				title: `Character - ${this.characterById.name}`,
			}
		},
		layout: layout,
		components: {
			NotFound,
			Carousel,
			Comments,
			Description
		},
		async asyncData({ params }) {
			const characterResponse = await jikanjs.loadCharacter(params.id)
			return {
				characterById: characterResponse
			}
		},
		computed: {
			formatDescription() {
				const description = this.characterById.about
				return description.replace(/\\n/g, "")
			}
		},
		mounted() {
			const modal = document.querySelectorAll(".modal")
			const modal_instance = M.Modal.init(modal)
			if (Object.keys(this.characterById.voice_actors).length) {
				const tabs = document.querySelectorAll(".tabs")
				const instanceTabs = M.Tabs.init(tabs)
			}
		}
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"
	@import "~/assets/styles/modules/titles"
	@import "~/assets/styles/modules/shadow"
	@import "~/assets/styles/modules/dividers"
	@import "~/assets/styles/modules/containers"

	.character
		width: 100%
		display: flex
		@extend .container-default
		justify-content: flex-start

		&__container
			display: grid
			row-gap: 40px
			column-gap: 40px
			max-width: 920px
			grid-template-columns: minmax(auto, 520px) 1fr
			grid-template-areas: "title title" "main sub" "description description" "comments comments"
			+mq(tablet-mid, max)
				grid-template-columns: 1fr
				grid-template-areas: "title" "main" "sub" "description" "comments"

		&__main-content
			display: grid
			grid-area: main
			column-gap: 20px
			align-content: start
			justify-content: start
			grid-template-columns: minmax(auto, 200px) minmax(auto, 300px)
			grid-template-areas: "cover info"
			+mq(phablet, max)
				grid-template-rows: auto
				grid-template-areas: "cover" "info"

		&__sub-content
			display: grid
			row-gap: 40px
			grid-area: sub
			column-gap: 40px
			align-content: flex-start
			justify-content: flex-start
			grid-template-columns: minmax(auto, 380px)
			+mq(tablet-mid, max)
				justify-content: flex-start

		&__cdescription
			grid-area: description

		&__comments
			grid-area: comments

		&__cover-container
			display: grid
			grid-area: cover
			justify-content: flex-start

		&__cover
			width: 100%

		&__title
			font-size: 20px
			align-self: end
			max-width: 460px
			grid-area: title
			text-align: start

	.character-info
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

		&__list-icon
			cursor: pointer
			line-height: 10px
			+mq(phablet, max)
				margin-top: 10px
			&:hover
				color: $color-orange

		&__list-item
			margin: 6px 0
			&:last-of-type
				margin: 6px 0 0 0
				height: 100%
				+flex(space-between, initial, column)

		&__list-values
			height: auto
			margin: 0 10px 0 0
			display: inline-block
			border-bottom: 1px dashed $color-grey-light

	.character-voice-actors
		display: grid
		grid-gap: 20px
		text-align: start
		align-items: flex-end

		&__title
			margin: 0
			@extend .title-bordered

		&__photo
			width: 100%
			max-width: 140px
			@extend .shadow-generic

		&__tr
			border-bottom: none

		&__td
			display: grid
			grid-template-columns: 1fr 1fr

		&__tabs
			display: flex
			flex-wrap: wrap
			overflow-x: initial
			overflow-y: initial
			height: min-content

		&__tab
			text-align: unset
			height: initial !important

		&__tab-item
			line-height: initial
			padding: 0 !important
			margin: 0 24px 14px 0
			color: $color-blue-light !important
			&:focus
				background-color: initial !important
			&.active
				color: $color-orange !important
				background-color: initial !important

	.character-modal
		&__text
			text-align: start
			white-space: pre-wrap

</style>
