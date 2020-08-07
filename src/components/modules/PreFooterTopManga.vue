<template lang="pug">

	.pre-footer-top-manga
		router-link.pre-footer-top-manga__title(to="/")
			| Top Manga

			.pre-footer-top-manga__icon.material-icons keyboard_arrow_right
		.pre-footer-top-manga__content(v-for="(result, index) in getMangaFavorite"
												:key="index")

			p.pre-footer-top-manga__digit
				| {{ index + 1 }}.
			router-link.pre-footer-top-manga__link(to="/")
				| {{ result['title'] }}

</template>

<script>

	import { mapActions, mapGetters } from "vuex";

	export default {
		name: "PreFooterManga",
		methods: {
			...mapActions(["loadMangaFavorite"]),
		},
		computed: {
			...mapGetters(["getMangaFavorite"])
		},
		async created() {
			await this.loadMangaFavorite();
		}
	};

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"

	.pre-footer-top-manga
		+flex(flex-start, flex-start, column)

		&__title
			color: $color-black
			font-size: 16px
			text-align: start
			padding: 0 0 8px 0
			width: 100%
			border-bottom: 1px solid rgba($color-black, 0.2)
			+flex(space-between, center, row)
			&:hover
				color: $color-orange

				.PreFooterList-icon
					color: inherit

		&__content
			margin: 8px 0 0 0
			+flex(center, flex-start, row)

		&__digit
			margin: 0 8px 0 0

		&__link
			color: $color-blue
			&:hover
				text-decoration: underline $color-blue

</style>
