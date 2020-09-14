<template lang="pug">

	.genres-block
		h4.genres-block__title
			| Genres

		.genres-block__content
			.genres-block__anime
				h4.genres-block__anime-title
					| Anime

				a.genres-block__item.genres-block__item_anime
					| Action Anime
				a.genres-block__item.genres-block__item_anime
					| Action Anime
				a.genres-block__item.genres-block__item_anime
					| Action Anime
				a.genres-block__item.genres-block__item_anime
					| Action Anime

			.genres-block__manga
				h4.genres-block__manga-title
					| Manga

				a.genres-block__item.genres-block__item_manga
					| Action Anime
				a.genres-block__item.genres-block__item_manga
					| Action Anime
				a.genres-block__item.genres-block__item_manga
					| Action Anime
				a.genres-block__item.genres-block__item_manga
					| Action Anime
				a.genres-block__item.genres-block__item_manga
					| Action Anime

</template>

<script>

	import { mapActions, mapGetters } from "vuex";

	export default {
		name: 'GenresBlock'
	}

</script>

<style scoped lang="sass">

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'
	@import '../../assets/styles/modules/titles'
	@import '../../assets/styles/modules/containers'

	.genres-block
		@extend .container-default

		&__title
			@extend .title-bordered

		&__anime-title, &__manga-title
			@extend .title
			text-align: center

		&__content
			padding: 40px 40px 0 40px
			display: grid
			grid-gap: 20px
			grid-template-columns: repeat(2, 1fr)

		&__anime, &__manga
			display: grid
			grid-gap: 20px
			grid-template-columns: repeat(3, 1fr)

		&__item
			font-size: 18px
			padding: 10px
			border-radius: 3px

			&_anime
				color: #fc555d
				background-color: #feedeb
				border: 1px solid #fee4e1

			&_manga
				color: #7955fc
				background-color: #eeebfe
				border: 1px solid #e6e1fe

</style>
