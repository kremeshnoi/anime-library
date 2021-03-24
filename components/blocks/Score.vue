<template lang="pug">

	section.score
		.score__container
			h2.score__title
				| Score

			.score__stars
				b-form-rating.score__form(
					readonly
					no-border
					stars="5"
					precision="2"
					variant="warning"
					:value="compute_score"
					id="rating-readonly rating-10")
				span.score__value {{ score }}

</template>

<script>

	import { BFormRating } from "bootstrap-vue"

	export default {
		name: "Score",
		props: ["score"],
		components: {
			BFormRating
		},
		computed: {
			compute_score() {
				return this.score / 2
			}
		}
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/modules/titles"

	.score
		&__container
			display: grid
			grid-gap: 20px
			grid-auto-flow: row
			justify-items: start

		&__title
			margin: 0
			@extend .title-bordered

		&__value
			font-size: 26px
			user-select: none
			line-height: 26px
			margin: 0 0 0 8px

		&__stars
			display: flex
			align-items: center

		&__form
			padding: 0
			font-size: 32px
			box-shadow: none
			height: min-content

</style>