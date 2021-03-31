<template lang="pug">

	footer.footer
		footer-info

</template>

<script>

	import FooterInfo from "@/components/blocks/FooterInfo"

	export default {
		name: "Footer",
		components: {
			FooterInfo
		}
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"

	.footer
		flex: 0
		width: 100%

</style>
