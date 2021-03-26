<template lang="pug">

  section.description
    .description__title
      | Description

    .description__synopsis(v-if="descriptionData")
      | {{ descriptionData }}

    NotFound(v-else)

</template>

<script>

  import NotFound from "@/components/elements/NotFound"

  export default {
    name: "Description",
    props: ["descriptionData"],
		components: {
			NotFound
		}
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

		&__title
			margin: 0
			@extend .title_is-bordered

</style>
