<template lang='pug'>

	#dropdown.dropdown
		.dropdown__search-type(v-if='!searchedData.length && !loaderData')
			ul.dropdown__list
				button.dropdown__list-item(@click='changeType(`anime`)'
					:class=`{ active : activeEl == 'anime' }`)

					.dropdown__icon.material-icons video_library
					| Anime

				button.dropdown__list-item(@click='changeType(`manga`)'
					:class=`{ active : activeEl == 'manga' }`)

					.dropdown__icon.material-icons collections_bookmark
					| Manga

		.dropdown__content(v-else)

			.loader(v-if='loaderData')
				| Loading...

				.loader__progress.progress
					.indeterminate

			.cards(v-if='!loaderData'
				@click='computeRoute(result)'
				v-for='result in searchedData')

					.cards__wrapper
						img.cards__image(:src='result.image_url')

						ul.cards__description
							li.cards__title
								| {{ result.title }}

							li.cards__value
								.info__list-key
									| Type:
								| &nbsp;
								.info__list-value(v-if='result.type && result.start_date')
									| {{ result.type }} / {{ result.start_date.substring(0, 4) }}

							li.cards__value
								.info__list-key
									| Score:
								| &nbsp;
								.info__list-value(v-if='result.score')
									| {{ result.score }}

		.overlay

</template>

<script>

	// IMPORTS

	import { mapActions } from 'vuex';

	// COMPONENT OPTIONS

	export default {
		name: 'DropDown',
		props: ['searchedData', 'loaderData'],
		data: () => ({
			activeEl: 'anime'
		}),
		methods: {
			...mapActions(['computeRoute']),
			changeType(el) {
				this.activeEl = el;
				this.$emit('changeType', el);
			}
		},
	}

</script>

<style lang='sass' scoped>

	// IMPORTS

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'

	// DROWDOWN STYLES

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
			background-size: cover
			z-index: 99
			width: 100%
			height: 61vh
			overflow-y: scroll

		&__search-type
			z-index: 99
			background-color: white
			width: 100%

		&__list
			width: 100%
			height: 100%
			+flex(flex-start, flex-start, column)

		&__list-item
			text-align: start
			color: $color-black
			width: 100%
			padding: 20px
			transition: 0s
			cursor: pointer
			transition: 0.4s ease
			border-bottom: 1px solid $color-grey-light
			background-color: $color-white-pure
			+flex(flex-start, center, row)
			&:hover
				.dropdown__icon
					color: $color-orange

		&__icon
			margin: 0 14px 0 0

		.cards
			padding: 10px 0 10px 20px
			width: 100%
			cursor: pointer
			transition: 0.4s ease
			border-bottom: 1px solid $color-grey-light
			background-color: $color-white-pure
			&:hover
				border-bottom: 1px solid $color-blue

			&__wrapper
				display: flex
				align-items: center

			&__image
				margin: 0 20px 0 0
				height: auto
				width: 84px

			&__value
				line-height: 30px
				display: flex

			&__title
				color: $color-blue
				text-align: start
				font-weight: 700
				font-size: 18px

			&__description
				color: $color-black
				display: flex
				flex-direction: column

	// OVERLAY

	.overlay
		z-index: 1
		top: 58px
		left: 0
		position: fixed
		width: 100%
		height: 100%
		background-color: rgba(0, 0, 0, 0.6)

	// LOADER

	.loader
		color: $color-black
		z-index: 99
		background-color: white
		width: 100%
		height: 100%
		font-size: 20px
		+flex(center, center, column)

		&__progress
			position: absolute
			top: 0
			left: 0
			margin: 0

	.active
		.dropdown__icon
			color: $color-orange

</style>
