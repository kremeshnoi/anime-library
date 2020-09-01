<template lang='pug'>

	.footer-note
		.footer-note__container
			p.footer-note__text
				| Inspired by
				a.footer-note__link(href='https://myanimelist.net/'
					target='_blank')
					| &nbsp;MAL
			p.footer-note__text
				| and
				a.footer-note__link(href='https://shikimori.one/'
					target='_blank')
					| &nbsp;Shikimori

</template>

<script>

	export default {
		name: 'FooterNote'
	};

</script>

<style lang='sass' scoped>

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'

	.footer-note
		padding: 14px 20px 14px 20px
		background-color: $color-blue-dark

		&__container
			+flex(center, center, row)

		&__text
			margin: 0 4px 0 0
			color: $color-white

		&__link
			color: $color-white
			&:hover
				opacity: 0.6

</style>
