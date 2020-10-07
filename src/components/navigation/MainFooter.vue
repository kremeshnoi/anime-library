<template lang='pug'>

	footer.main-footer
		footer-categories
		footer-main-info
		footer-note

</template>

<script>

	// IMPORTS

	import FooterNote from '@/components/blocks/FooterNote';
	import FooterMainInfo from '@/components/blocks/FooterMainInfo';
	import FooterCategories from '@/components/blocks/FooterCategories';

	// COMPONENT OPTIONS

	export default {
		name: 'MainFooter',
		components: {
			FooterNote,
			FooterMainInfo,
			FooterCategories
		}
	};

</script>

<style lang='sass' scoped>

	// IMPORTS

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'
	@import '../../assets/styles/modules/buttons'

	// MAIN FOOTER STYLES

	.main-footer
		width: 100%

</style>
