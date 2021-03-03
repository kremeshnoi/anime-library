<template lang="pug">

  .description
    .description__title
      | Description

    .description__synopsis(v-if="this.descriptionData")
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
		grid-area: description
		text-align: start
		display: grid
		grid-gap: 20px
		&__disaster
			text-align: start
			font-size: 30px
		&__title
			@extend .title-default

</style>
