<template lang="pug">

	main.character
		.character__container
			.character__main-content
				h1.character__title
					| {{ characterById.name }}

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
							.character-info__list-value
								|
								| {{ aboutCharacterData[0] }}

					.character-info__list-icon.material-icons.modal-trigger(href="#character-info-modal") more_horiz

			.character__sub-content
				.character__voice-actors.character-voice-actors
					.character-voice-actors__title
						| Voice Actors

					.character-voice-actors__content(v-if="characterById.voice_actors")
						h4.character__disaster(v-if="characterById.voice_actors.length === 0")
							| Not found ( ಥ﹏ಥ )

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

			//- Comments.character__comments

		#character-info-modal.character-modal.modal
			.character-modal__content.modal-content
				p.character-modal__text
					| {{ aboutCharacterData[0] }}

</template>

<script>

	import jikanjs from "jikanjs/lib/jikan"
	import layout from "@/middleware/layout"
	import Carousel from "@/components/grids/Carousel"

	export default {
		name: "Character",
		metaInfo() {
			return {
				title: `Character - ${this.characterById.name}`,
			}
		},
		layout: layout,
		components: {
			Carousel
		},
		data() {
			return {
				aboutCharacterData: []
			}
		},
		async asyncData({ params }) {
			const characterResponse = await jikanjs.loadCharacter(params.id)
			return {
				characterById: characterResponse
			}
		},
		async created() {
			await this.replaceData()
		},
		mounted() {
			const modal = document.querySelectorAll(".modal")
			const modal_instance = M.Modal.init(modal)
			if (Object.keys(this.characterById.voice_actors).length) {
				const tabs = document.querySelectorAll(".tabs")
				const instanceTabs = M.Tabs.init(tabs)
			}
		},
		methods: {
			async replaceData() {
				const data = await this.characterById.about
				const result = data.replace(/\\n/g, "")
				this.aboutCharacterData.push(result)
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

		&__container
			display: grid
			row-gap: 20px
			column-gap: 20px
			@extend .container-default
			grid-template-columns: 1fr 1fr
			grid-template-areas: "main sub" "comments comments"
			+mq(tablet-mid, max)
				grid-template-columns: 1fr
				grid-template-areas: "main" "sub" "comments"

		&__main-content
			display: grid
			grid-gap: 20px
			grid-area: main
			align-content: start
			justify-content: start
			grid-template-rows: 50px auto
			grid-template-areas: "title title" "cover info"
			+mq(phablet, max)
				grid-template-rows: auto
				grid-template-areas: "title" "cover" "info"

		&__sub-content
			display: grid
			row-gap: 20px
			grid-area: sub
			column-gap: 20px
			align-content: flex-start
			justify-content: flex-start
			grid-template-columns: minmax(auto, 330px)
			+mq(tablet-mid, max)
				justify-content: flex-start

		&__comments
			grid-area: comments

		&__cover-container
			display: grid
			grid-area: cover
			grid-area: cover
			justify-content: flex-start

		&__cover
			@extend .shadow-generic

		&__title
			font-size: 20px
			align-self: end
			max-width: 460px
			grid-area: title
			text-align: start
			@extend .title-vertical-cut

	.character-info
		grid-area: info
		text-align: start
		+flex(initial, initial, column)

		&__title
			width: 100%
			font-size: 16px
			font-weight: 700
			text-align: start
			color: $color-black
			text-transform: uppercase
			padding: 14px 0 14px 14px
			border-left: 5px solid $color-blue-light

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
				margin: 0
				height: 100%
				+flex(space-between, initial, column)

		&__list-value
			max-height: 300px
			white-space: pre-wrap
			-webkit-line-clamp: 10
			@extend .title-vertical-cut
			&_decor
				padding: 0 6px
				border-radius: 4px
				color: $color-white-pure
				background-color: $color-yellow

		&__list-values
			height: auto
			margin: 0 10px 0 0
			display: inline-block
			border-bottom: 1px dashed $color-grey-light
			&:hover
				cursor: pointer
				border-bottom: 1px dashed $color-blue

	.character-voice-actors
		height: 100%
		display: grid
		grid-gap: 20px
		justify-content: start
		grid-template-rows: 50px auto

		&__title
			height: 70px
			display: flex
			align-items: center
			@extend .title-default

		&__photo
			width: 100%
			max-width: 140px
			@extend .shadow-generic

		&__tr
			border-bottom: none

		&__td
			display: grid
			grid-gap: 20px
			grid-template-columns: 1fr 1fr

		&__tabs
			display: flex
			flex-wrap: wrap
			overflow-x: initial
			overflow-y: initial
			height: min-content

		&__tab
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

	.animeography, .mangaography
		position: relative

		&__title
			height: 70px
			display: flex
			align-items: center
			@extend .title-default

		&__tr
			display: block
			position: relative

		&__tabs
			display: flex
			flex-wrap: wrap
			overflow-x: initial
			overflow-y: initial
			height: min-content

		&__tab
			flex-grow: 0
			height: initial !important

		&__tab-item
			text-align: start
			line-height: initial
			padding: 0 !important
			margin: 0 24px 14px 0
			width: auto !important
			color: $color-blue-light !important
			&:focus
				background-color: initial !important
			&.active
				color: $color-orange !important
				background-color: initial !important

		&__link
			@extend .title-cut
			color: $color-grey-dark
			+mq(phone-wide, max)
				max-width: 250px
			&:hover
				text-decoration: underline

		&__more-link
			right: 0
			width: auto
			bottom: -30px
			@extend .title-cut
			z-index: 1
			position: absolute
			color: $color-blue-light
			+mq(phone-wide, max)
				max-width: 250px
			&:hover
				text-decoration: underline

</style>
