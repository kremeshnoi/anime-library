<template lang="pug">

	section.in-favorites
		.in-favorites__container
			h2.in-favorites__title
				| In Favorites

			.in-favorites__users
				img.in-favorites__user(v-for="item in 10" src="~/assets/images/user.jpg")

</template>

<script>

	export default {
		name: "InFavorites"
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/modules/titles"

	.in-favorites
		grid-area: in-favorites
		&__container
			display: grid
			grid-gap: 20px
			grid-auto-flow: row
			justify-items: start

		&__title
			margin: 0
			@extend .title_is-bordered

		&__users
			display: grid
			grid-gap: 20px
			grid-template-columns: repeat(5, 40px)
			grid-template-rows: repeat(2, 40px)

		&__user
			display: block
			background-color: blue
			width: 40px
			height: 40px

</style>