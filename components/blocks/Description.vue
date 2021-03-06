<template lang="pug">

  section.description
    .description__title
      | Description

    .description__synopsis(v-if="descriptionData")
      | {{ descriptionData }}

    h4.description__disaster(v-else)
      | Not found

</template>

<script>

  export default {
    name: "Description",
    props: ["descriptionData"]
  }

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/modules/titles"

	.description
		display: grid
		grid-gap: 20px
		text-align: start
		align-items: flex-end
		grid-area: description

		&__disaster
			font-size: 30px
			text-align: start

		&__title
			align-items: flex-end
			@extend .title-default

</style>
