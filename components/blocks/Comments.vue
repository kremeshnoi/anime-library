<template lang="pug">

	section.comments
		.comments__container
			.comments__title
				| Comments

		.comments__content
			.comment
				.comment__container
					img.comment__avatar(src="@/assets/images/user.jpg")
					.comment__body
						a.comment__username
							| USERNAME
						.comment__message
							| TEXT

		.comments__input
			wysiwyg.comments__wysiwyq
			.comments__submit

</template>

<script>

	export default {
		name: "Comments"
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/modules/titles"

	.comments
		display: grid
		grid-gap: 20px
		text-align: start
		grid-area: comments

		&__title
			@extend .title-default

	.comment
		&__container
			display: grid
			column-gap: 20px
			grid-template-columns: 70px auto
		&__avatar
			width: 100%
			border-radius: 50%
		&__body
			display: grid
			row-gap: 10px
			grid-template-rows: 20px auto


</style>
