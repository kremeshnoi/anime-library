<template lang="pug">

	footer.Footer
		PreFooterList
		FooterContent
		FooterCopyright

</template>

<script>

	import PreFooterList from "@/components/blocks/PreFooterList";
	import FooterContent from "@/components/blocks/FooterContent";
	import FooterCopyright from "@/components/blocks/FooterCopyright";

	export default {
		name: "MainFooter",
		components: {
			FooterContent,
			PreFooterList,
			FooterCopyright
		}
	}

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"
	@import "../../assets/styles/modules/buttons.sass"

	.Footer
		width: 100%

</style>
