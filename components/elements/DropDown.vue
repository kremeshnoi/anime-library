<template lang="pug">

	#dropdown.dropdown
		.dropdown__search-type(v-if="!searchedData.length && !loaderData")
			ul.dropdown__list
				button.dropdown__list-item(
					@click="changeType(`anime`)"
					:class="{ active: activeEl === `anime` }")
					.dropdown__icon.material-icons video_library
					| Anime

				button.dropdown__list-item(
					@click="changeType(`manga`)"
					:class="{ active: activeEl === `manga` }")
					.dropdown__icon.material-icons collections_bookmark
					| Manga

		.dropdown__content(v-else)
			.loader(v-if="loaderData")
				| Loading...

				.loader__progress.progress
					.indeterminate

			nuxt-link.cards(
				v-if="!loaderData"
				:key="resultIndex"
				v-for="(resultItem, resultIndex) in searchedData"
				:to="{ name: `${ type }-id-title`, params: { id: resultItem.mal_id, title: $formatRouteTitle(resultItem.title) } }")
				.cards__wrapper
					img.cards__image(draggable="false" :src="resultItem.image_url")

					ul.cards__description
						li.cards__title
							| {{ resultItem.title }}

						li.cards__value
							span.info__list-key
								| Type:
							| &nbsp
							span.info__list-value(v-if="resultItem.type && resultItem.start_date")
								| {{ resultItem.type }} / {{ resultItem.start_date.substring(0, 4) }}

							span.info__list-value(v-else-if="resultItem.type")
								| {{ resultItem.type }} / Unknown

							span.info__list-value(v-else)
								| {{ resultItem.type }}

						li.cards__value
							span.info__list-key
								| Score:
							| &nbsp
							span.info__list-value(v-if="resultItem.score")
								| {{ resultItem.score }}

							span.info__list-value(v-else)
								| Uknown

		.overlay

</template>

<script>

	export default {
		name: "DropDown",
		props: ["searchedData", "loaderData", "type"],
		computed: {
			activeEl: {
				get() {
					return this.type === "anime" ? "anime" : "manga"
				},
				set() {}
			}
		},
		methods: {
			changeType(el) {
				this.activeEl = el
				this.$emit("changeType", el)
			}
		}
	}

</script>

<style lang="sass" scoped>

		@import "~/assets/styles/utils/vars"
		@import "~/assets/styles/utils/mixins"

		.dropdown
			top: 56px
			width: 100%
			display: none
			position: absolute
			flex-direction: column
			align-items: flex-start
			justify-content: space-between
			background-color: $color-white-pure
			z-index: 99
			border-bottom-left-radius: 3px
			border-bottom-right-radius: 3px
			&_is-shown
				display: flex

			&__content
				z-index: 99
				width: 100%
				height: 61vh
				overflow-y: scroll
				background-size: cover

			&__search-type
				z-index: 99
				width: 100%
				background-color: white

			&__list
				width: 100%
				height: 100%
				+flex(flex-start, flex-start, column)

			&__list-item
				width: 100%
				padding: 20px
				cursor: pointer
				text-align: start
				color: $color-black
				+flex(flex-start, center, row)
				background-color: $color-white-pure
				border-bottom: 1px solid $color-grey-light
				&:hover
					.dropdown__icon
						color: $color-orange

			&__icon
				margin: 0 14px 0 0

			.cards
				width: 100%
				display: block
				cursor: pointer
				padding: 10px 0 10px 10px
				background-color: $color-white-pure
				border-bottom: 1px solid $color-grey-light
				&:hover
					border-bottom: 1px solid $color-blue

				&__wrapper
					+flex(flex-start, initial, row)
					+mq(phone, max)
						flex-direction: column

				&__image
					width: 84px
					height: 125px
					display: block
					margin: 0 20px 0 0
					background-color: $color-blue-light
					+mq(phone, max)
						margin: 0 0 10px 0

				&__value
					line-height: 30px
					text-align: start

				&__title
					font-size: 16px
					font-weight: 700
					text-align: start
					line-height: 30px
					color: $color-blue

				&__description
					display: flex
					color: $color-black
					flex-direction: column
					align-items: flex-start
					+mq(phone, max)
						max-width: 90%

		.overlay
			left: 0
			top: 54px
			z-index: 1
			width: 100%
			height: 100%
			position: fixed
			background-color: rgba(0, 0, 0, 0.6)

		.loader
			z-index: 99
			width: 100%
			height: 100%
			font-size: 20px
			color: $color-black
			background-color: white
			+flex(center, center, column)

			&__progress
				top: 0
				left: 0
				margin: 0
				position: absolute

		.active
			.dropdown__icon
				color: $color-orange

</style>
