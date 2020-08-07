<template lang="pug">

	.pre-footer-top-characters
		router-link.pre-footer-top-characters__title(to="/")
			| Popular Characters
			.pre-footer-top-characters__icon.material-icons keyboard_arrow_right
		.pre-footer-top-characters__content(v-for="(result, index) in getCharactersFavorite"
														:key="index")

			p.pre-footer-top-characters__digit
				| {{ index + 1 }}.
			router-link.pre-footer-top-characters__link(to="/")
				| {{ result['title'] }}

</template>

<script>

	import { mapActions, mapGetters } from "vuex";

	export default {
		name: "PreFooterCharacters",
		methods: {
			...mapActions(["loadCharactersFavorite"]),
		},
		computed: {
			...mapGetters(["getCharactersFavorite"])
		},
		async created() {
			await this.loadCharactersFavorite();
		}
	};

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"

	.pre-footer-top-characters
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

				.pre-footer-top-characters__icon
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
