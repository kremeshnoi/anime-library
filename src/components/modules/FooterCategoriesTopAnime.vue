<template lang="pug">

	.footer-categories-top-anime
		router-link.footer-categories-top-anime__title( to="/top-anime" )
			| Top Anime
			.footer-categories-top-anime__icon.material-icons keyboard_arrow_right

		.footer-categories-top-anime__content( v-for="(result, index) in getAnimeFavorite.slice(0, 9)"
															:key="index" )

			p.footer-categories-top-anime__digit
				| {{ index + 1 }}.
			router-link.footer-categories-top-anime__link( to="/" )
				| {{ result["title"] }}

</template>

<script>

	import { mapActions, mapGetters } from "vuex";

	export default {
		name: "FooterCategoriesTopAnime",
		methods: {
			...mapActions(["loadAnimeFavorite"])
		},
		computed: {
			...mapGetters(["getAnimeFavorite"])
		},
		async created() {
			await this.loadAnimeFavorite();
		}
	};

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars"
	@import "../../assets/styles/utils/mixins"

	.footer-categories-top-anime
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

				.pre-footer-top-anime__icon
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
