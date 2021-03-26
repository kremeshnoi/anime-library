<template lang="pug">

	.breadcrumb-navigation(v-show="crumbs.length")
		b-breadcrumb
			b-breadcrumb-item(to="/" text="Home")
			b-breadcrumb-item(
				:key="index"
				:to="item.to"
				:class="{ 'active': index === crumbs.length -1 }"
				v-for="(item, index) in crumbs") {{ $formatBreadCrumbTitle(item.text) }}

</template>

<script>

		import { BBreadcrumb, BBreadcrumbItem } from "bootstrap-vue"

		export default {
			name: "Breadcrumb",
			components: {
				BBreadcrumb,
				BBreadcrumbItem
			},
			computed: {
				crumbs() {
					const pathParams = this.$route.params
					let pathArray = this.$route.path
						.split("/")
						.filter(item => !(/^\d+$/.test(item)) && item.match(/\S/))

					let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
						breadcrumbArray.push({
							path: path,
							to: breadcrumbArray[idx - 1]
								? "/" + breadcrumbArray[idx - 1].path + `/${this.$route.params.id}` + "/" + path
								: "/" + path,
							text: path
						})

						return breadcrumbArray
					}, [])

					return breadcrumbs
				}
			}
		}
</script>

<style scoped lang="sass">

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"
	@import "~/assets/styles/modules/containers"

	.breadcrumb-navigation
		margin: 40px 0 0 0
		@extend .container

	.breadcrumb
		margin: 0
		padding: 0
		font-size: 16px
		background-color: $color-white
		a
			color: $color-blue

	.active
		opacity: 0.9
		cursor: pointer
		pointer-events: none
		a
			color: $color-grey_dark

</style>