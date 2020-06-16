<template lang="pug">

	footer.Footer.page-footer
		.container
			.row
				.col.l5.s12
					h5.Footer-title Discord channel
					p.Footer-description We will also be happy to meet you on our channel, where you can always find like-minded people. Feel free to come in.
					a.Footer-button.btn(href="https://discord.com/invite/Ku72D5/" target="_blank") Chat
				.col.l5.offset-l2.s12
					ul.Footer-list
						li.Footer-list-item
							a.Footer-list-item-link(href="https://www.linkedin.com/in/alexander-kremeshnoi/" target="_blank") LinkedIn
						li.Footer-list-item
							a.Footer-list-item-link(href="https://github.com/kremeshnoi/" target="_blank") Github
						li.Footer-list-item
							a.Footer-list-item-link(href="https://shikimori.one/SIDREZNOR/" target="_blank") Shikimori

		.Footer-copyright
			.container
				span.Footer-copyright-bar
					p.Footer-copyright-bar-text Inspired by
						a.Footer-copyright-link(href="https://myanimelist.net/" target="_blank") &nbsp;MAL
					p.Footer-copyright-bar-text and
						a.Footer-copyright-link(href="https://shikimori.org/" target="_blank") &nbsp;Shikimori

</template>

<script lang="ts">

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
		background-color: $color-blue

		&-title, &-description, &-button
			margin: 8px 0 8px 0

		&-description
			+mq(tablet-mid, max)
				max-width: 70%

		&-button
			@extend .shadow-btn
			@extend .hover-btn
			@extend .focus-btn

		&-list
			+mq(tablet-mid, max)
				text-align: center

			&-item
				margin: 8px 0 8px 0

				&-link
					color: $color-white
					&:hover
						opacity: 0.6

		&-copyright
			background-color: rgba(51,51,51, 0.1)
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
