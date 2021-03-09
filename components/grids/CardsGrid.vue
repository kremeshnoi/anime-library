<template lang="pug">

  .query-content
    slot

</template>

<script>

  export default {
    name: "CardsGrid"
  }

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"

	.query-content
		height: 100%
		display: grid
		grid-gap: 10px
		justify-content: space-between
		grid-template-columns: repeat(7, 1fr)

</style>
