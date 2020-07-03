<template lang="pug">

	.PreFooterListItem
		router-link.PreFooterListItem-title(to="/")
			.PreFooterListItem-icon.material-icons keyboard_arrow_right
		.PreFooterListItem-content(v-for="(result, index) in dataList.slice(0, 7)" :key="index")
			p.PreFooterListItem-digit {{ index + 1 }}.
			router-link.PreFooterListItem-link(to="/")  {{ result['title'] }}

</template>

<script>

	export default {
		name: "PreFooterItem",
		props: {
			dataList: Array
		}
	}

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"

	.PreFooterListItem
		+flex(center, flex-start, column)

		&-title
			color: $color-dark
			font-size: 16px
			text-align: start
			padding: 0 0 8px 0
			width: 100%
			border-bottom: 1px solid rgba($color-dark, 0.2)
			+flex(space-between, center, row)
			&:hover
				color: $color-orange
				.PreFooterList-icon
					color: inherit

		&-content
			margin: 8px 0 0 0
			+flex(center, center, row)

		&-digit
			margin: 0 8px 0 0

		&-link
			color: $color-blue
			&:hover
				text-decoration: underline $color-blue

</style>
