<template lang="pug">

	section.Top-airing
		.Top-airing-container
			router-link.Top-airing-title(to="/airing-anime") AIRING ANIME
				.Top-airing-icon.material-icons keyboard_arrow_right
			Cards

</template>

<script>
import Cards from "@/components/modules/Cards.vue";

export default {
  name: "TopAiring",
  components: {
    Cards
  }
};
</script>

<style lang="sass" scoped>

@import "../../assets/styles/utils/vars"
@import "../../assets/styles/utils/mixins"

.Top-airing
	&-container
		margin: 0 auto
		padding: 40px 40px 40px 40px
		max-width: 1300px

	&-title
		color: $color-dark
		width: 100%
		font-size: 16px
		font-weight: 700
		text-align: start
		text-transform: uppercase
		padding: 14px 0 14px 14px
		border-left: 5px solid $color-blue-light
		+flex(space-between, center, row)
		&:hover
			color: orange
			.Top-airing-icon
				color: inherit

	&-icon
		color: $color-dark
</style>
