<template lang="pug">

	section.Top-airing
		.Top-airing-container
			.Top-airing-title AIRING ANIME
			Cards


</template>

<script lang="ts">

	import Cards from "@/components/modules/Cards.vue";

	export default {
		name: "TopAiring",
		components: {
			Cards
		}
	}

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"

	.Top-airing

		&-container
			margin: 0 0 100px 0
			padding: 0 24px 0 24px
			+flex(center, center, column)

		&-title
			width: 100%
			font-size: 16px
			font-weight: 700
			text-align: start
			text-transform: uppercase
			padding: 14px 0 14px 14px
			border-left: 5px solid $color-light-grey

</style>
