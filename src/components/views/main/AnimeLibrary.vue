<template lang='pug'>

	.library
		.library__container
			.library__tabs
				.col.s12
					ul.tabs
						li.tab.col.s3
							a(href='#test1') Plan to Watch
						li.tab.col.s3
							a(href='#test2') Completed
						li.tab.col.s3
							a(href='#test3') Currently Watching
						li.tab.col.s3
							a(href='#test4') On Hold
						li.tab.col.s3
							a(href='#test4') Dropped

				#test1.col.s12 Test 1
				#test2.col.s12 Test 2
				#test3.col.s12 Test 3
				#test4.col.s12 Test 4


</template>

<script>

	export default {
		name: 'Library',
		metaInfo: {
			title: 'Otaku Library / Anime Library'
		},
		mounted() {
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

	.tabs
		display: grid
		grid-template-columns: repeat(5, 1fr)

	.library
		width: 100%
		&__container
			width: 100%
			@extend .container-default
		&__tabs
			width: 100%
</style>
