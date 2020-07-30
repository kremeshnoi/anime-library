<template lang="pug">

	.PreFooterTopCharacters
		router-link.PreFooterTopCharacters-title(to="/") Popular Characters
			.PreFooterTopCharacters-icon.material-icons keyboard_arrow_right
		.PreFooterTopCharacters-content(v-for="(result, index) in getCharactersFavorite" :key="index")
			p.PreFooterTopCharacters-digit {{ index + 1 }}.
			router-link.PreFooterTopCharacters-link(to="/") {{ result['title'] }}

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

	.PreFooterTopCharacters
		+flex(flex-start, flex-start, column)

		&-title
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

		&-content
			margin: 8px 0 0 0
			+flex(center, flex-start, row)

		&-digit
			margin: 0 8px 0 0

		&-link
			color: $color-blue

			&:hover
				text-decoration: underline $color-blue

</style>
