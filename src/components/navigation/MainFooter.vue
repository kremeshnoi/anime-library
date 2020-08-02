<template lang="pug">

	footer.Footer
		pre-footer
		footer-content
		footer-copyright

</template>

<script>

	import PreFooter from "@/components/blocks/PreFooter.vue";
	import FooterContent from "@/components/blocks/FooterContent.vue";
	import FooterCopyright from "@/components/blocks/FooterCopyright.vue";

	export default {
		name: "MainFooter",
		components: {
			PreFooter,
			FooterContent,
			FooterCopyright
		}
	};

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"
	@import "../../assets/styles/modules/buttons.sass"

	.Footer
		width: 100%

</style>
