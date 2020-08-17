<template lang="pug">

	footer.main-footer
		footer-categories
		footer-main-info
		footer-note

</template>

<script>

	import FooterCategories from "@/components/blocks/FooterCategories.vue";
	import FooterMainInfo from "@/components/blocks/FooterMainInfo.vue";
	import FooterNote from "@/components/blocks/FooterNote.vue";

	export default {
		name: "MainFooter",
		components: {
			FooterCategories,
			FooterMainInfo,
			FooterNote
		}
	};

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"
	@import "../../assets/styles/modules/buttons.sass"

	.main-footer
		width: 100%

</style>
