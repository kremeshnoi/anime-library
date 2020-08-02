<template lang="pug">

	.FooterCopyright
		.FooterCopyright-container

			p.FooterCopyright-text
				| Inspired by
				a.FooterCopyright-link(href="https://myanimelist.net/"
												target="_blank")
				| &nbsp;MAL

			p.FooterCopyright-text
				| and
				a.FooterCopyright-link(href="https://shikimori.one/"
												target="_blank")
				| &nbsp;Shikimori

</template>

<script>

	export default {
		name: "FooterCopyright"
	};

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"

	.FooterCopyright
		padding: 14px 20px 14px 20px
		background-color: $color-blue-dark

		&-container
			+flex(center, center, row)

		&-text
			margin: 0 4px 0 0
			color: $color-white

		&-link
			color: $color-white

			&:hover
				opacity: 0.6

</style>
