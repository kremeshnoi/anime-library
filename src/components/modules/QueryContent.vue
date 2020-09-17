<template lang='pug'>

	.query-content
		slot

</template>

<script>

	export default {
		name: 'QueryContent'
	}

</script>

<style lang='sass' scoped>

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'

	.query-content
		display: grid
		grid-template-columns: repeat(7, 1fr)
		justify-content: center
		grid-gap: 20px
		height: 100%
		+mq(desktop-wide, max)
			grid-template-columns: repeat(6, 1fr)
		+mq(desktop, max)
			grid-template-columns: repeat(5, 1fr)
		+mq(tablet-mid, max)
			grid-template-columns: repeat(4, 1fr)
		+mq(tablet, max)
			grid-template-columns: repeat(3, 1fr)
		+mq(phablet, max)
			grid-template-columns: repeat(2, 1fr)

</style>
