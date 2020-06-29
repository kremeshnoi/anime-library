<template lang="pug">

	footer.Footer.page-footer
		.Footer-container
			.Footer-item
				h5.Footer-title Discord channel
				p.Footer-description We will also be happy to meet you on our channel, where you can always find like-minded people. Feel free to come in.
				a.Footer-button.btn(href="https://discord.com/invite/Ku72D5/" target="_blank") Chat
			.Footer-item
				h5.Footer-title Sitemap
				router-link.Footer-link(to="") About project
				h6.Footer-subtitle Sign in required
				router-link.Footer-link(to="") Search page
				router-link.Footer-link(to="") Your library

			.Footer-item
				h5.Footer-title Help
				router-link.Footer-link(to="/recovery") Forgot Password?
				router-link.Footer-link(to="") Q/A

			.Footer-item
				h5.Footer-title Follow me
				a.Footer-link(href="https://github.com/kremeshnoi" target="_blank") Github
				a.Footer-link(href="https://shikimori.one/SIDREZNOR" target="_blank") Shikimori
				a.Footer-link(href="https://myanimelist.net/profile/SIDREZNOR" target="_blank") MyAnimeList

		.Footer-copyright
			span.Footer-copyright-bar
				p.Footer-copyright-bar-text Inspired by
					a.Footer-copyright-link(href="https://myanimelist.net/" target="_blank") &nbsp;MAL
				p.Footer-copyright-bar-text and
					a.Footer-copyright-link(href="https://shikimori.one/" target="_blank") &nbsp;Shikimori


</template>

<script>

	export default {
		name: "MainFooter"
	}

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"
	@import "../../assets/styles/modules/buttons.sass"

	.Footer
		width: 100%
		text-align: start
		padding: 0
		background-color: $color-blue

		&-title
			padding: 0 0 8px 0

		&-subtitle
			padding: 16px 0 8px 0
			border-bottom: 2px solid rgba(225, 225, 225, 0.2)

		&-link
			margin: 8px 0 0 0
			color: $color-white
			&:hover
				opacity: 0.6

		&-container
			padding: 24px 40px 24px 40px
			display: grid
			grid-gap: 40px
			flex-wrap: wrap
			align-items: flex-start
			grid-template-columns: 1.5fr 1fr 1fr 1fr

		&-item
			height: 100%
			padding: 0 24px 0 0
			justify-content: flex-start !important
			border-right: 1px solid rgba(225, 225, 225, 0.2)
			+flex(center, flex-start, column)
			&:last-of-type
				border: none

		&-description
			margin: 8px 0 0 0
			max-width: 380px
			+mq(tablet-mid, max)
				max-width: 70%

		&-button
			margin: 16px 0 0 0
			@extend .shadow-btn
			@extend .hover-btn
			@extend .focus-btn

		&-copyright
			background-color: rgba(51,51,51, 0.3)
			padding: 14px 20px 14px 20px

			&-bar
				+flex(center, initial, initial)

				&-text
					color: $color-white
					margin: 0 4px 0 0
			&-link
				color: $color-white
				&:hover
					opacity: 0.6

</style>
