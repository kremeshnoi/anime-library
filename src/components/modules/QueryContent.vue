<template lang="pug">

	.query-content
		slot

</template>

<script>

	export default {
		name: "QueryContent"
	}

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"

	.query-content
		display: grid
		grid-template-columns: repeat(5, 1fr)
		justify-content: center
		grid-gap: 20px
		height: 100%
		+mq(desktop, max)
			grid-template-columns: repeat(4, 1fr)
		+mq(tablet-mid, max)
			grid-template-columns: repeat(3, 1fr)
		+mq(tablet, max)
			grid-template-columns: repeat(2, 1fr)
		+mq(phablet-small, max)
			grid-template-columns: repeat(1, 1fr)

</style>
