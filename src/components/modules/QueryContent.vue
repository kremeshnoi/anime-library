<template lang="pug">

	.query-content(v-if="getAnimeSearched.length")
			Card(v-for="result in getAnimeSearched")

</template>

<script>

	import { mapGetters } from "vuex";
	import Card from "@/components/modules/Card";

	export default {
		name: "QueryContent",
		components: {Card},
		computed: {
			...mapGetters(["getAnimeSearched"])
		}
	}

</script>

<style lang="sass" scoped>

	.query-content
		display: grid
		grid-template-columns: repeat(auto-fill, 200px)
		justify-content: space-between
		grid-gap: 20px
		height: 100%

		&__card
			margin: 0

			&-content
				height: 84%
				cursor: pointer
				padding: 16px 0 0 0

			&-title
				text-overflow: ellipsis
				overflow: hidden
				width: 160px
				display: inline-block
				white-space: nowrap
				margin: 0
				font-size: 16px

			&-image
				height: 100%
				max-height: 280px
				object-fit: contain

			&-header
				display: flex
				justify-content: center
				align-items: center
				padding: 10px

</style>
