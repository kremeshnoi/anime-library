<template lang='pug'>

	.library
		.library__container
			ul.library__tabs.tabs
				li.library__tab.tab
					a.library__tab-item
						| Plan to Watch
				li.library__tab.tab
					a.library__tab-item
						| Completed
				li.library__tab.tab
					a.library__tab-item
						| Currently Watching
				li.library__tab.tab
					a.library__tab-item
						| On Hold
				li.library__tab.tab
					a.library__tab-item
						| Dropped

			.library__item
				table.library__table.striped
					tbody.library__tbody
						tr.library__tr
							td.library__td
								a.library__link

</template>

<script>

	export default {
		name: 'Library',
		metaInfo: {
			title: 'Otaku Library / Anime Library'
		},
		created() {
			const tabs = document.querySelectorAll('.tabs');
			const instanceTabs = M.Tabs.init(tabs);
		}
	};

</script>

<style lang='sass' scoped>

	@import '../../../assets/styles/utils/vars'
	@import '../../../assets/styles/utils/mixins'
	@import '../../../assets/styles/modules/titles'
	@import '../../../assets/styles/modules/containers'

	.library
		width: 100%

		&__container
			@extend .container-default

		&__disaster
			text-align: start
			font-size: 30px

		&__title
			display: flex
			align-items: center
			@extend .title

		&__tabs
			display: flex
			flex-wrap: wrap
			overflow-x: initial
			overflow-y: initial
			justify-content: center
			height: 100%

		&__tab
			height: initial !important

		&__tab-item
			padding: 0 !important
			margin: 0 24px 14px 0
			text-align: start
			height: initial !important
			line-height: initial
			color: $color-blue-light !important
			&.focus
				background-color: initial !important
			&.active
				background-color: initial !important
				color: $color-orange !important

		&__link
			color: $color-grey-dark
			&:hover
				text-decoration: underline

</style>
