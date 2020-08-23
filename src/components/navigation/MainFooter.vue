<template lang="pug">

	footer.main-footer
		footer-categories
		footer-main-info
		footer-note

</template>

<script>

	import FooterNote from "@/components/blocks/FooterNote";
	import FooterMainInfo from "@/components/blocks/FooterMainInfo";
	import FooterCategories from "@/components/blocks/FooterCategories";

	export default {
		name: "MainFooter",
		components: {
			FooterNote,
			FooterMainInfo,
			FooterCategories
		}
	};

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars"
	@import "../../assets/styles/utils/mixins"
	@import "../../assets/styles/modules/buttons"

	.main-footer
		width: 100%

</style>
