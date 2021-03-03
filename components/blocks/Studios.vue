<template lang='pug'>

	section.studios
		img.studios__item(
			draggable="false"
			:src="studio.img"
			:key="studioIndex"
			v-for="(studio, studioIndex) in studios.data")

</template>

<script>

	import { studios } from "@/utils/studios"
	import layoutMiddleware from '@/middleware/layoutMiddleware'

	export default {
		name: 'Studios',
		layout: layoutMiddleware,
		computed: {
			studios() {
				return {
					data: studios
				}
			}
		}
	}

</script>

<style lang='sass' scoped>

	@import '~/assets/styles/modules/containers'

	.studios
		display: grid
		column-gap: 20px
		grid-auto-flow: column
		@extend .container-default
		justify-content: space-between
		&__item
			width: 100px
			height: 50px
			object-fit: contain
			&:hover
				opacity: 0.6
				cursor: pointer

</style>
