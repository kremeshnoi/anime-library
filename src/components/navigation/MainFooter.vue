<template lang="pug">

	footer.Main-footer.page-footer
		.container
			.row
				.col.l5.s12
					h5.Main-footer-title Discord channel
					p.Main-footer-description We will also be happy to meet you on our channel, where you can always find like-minded people. Feel free to come in.
					a.Main-footer-button.btn(href="https://discord.com/invite/Ku72D5/" target="_blank") Chat
				.col.l5.offset-l2.s12
					ul.Main-footer-list
						li.Main-footer-list-item
							a.Main-footer-list-item-link(href="https://www.linkedin.com/in/alexander-kremeshnoi/" target="_blank") LinkedIn
						li.Main-footer-list-item
							a.Main-footer-list-item-link(href="https://github.com/kremeshnoi/" target="_blank") Github
						li.Main-footer-list-item
							a.Main-footer-list-item-link(href="https://shikimori.one/SIDREZNOR/" target="_blank") Shikimori

		.Main-footer-copyright
			.container
				span.Main-footer-copyright-bar
					p.Main-footer-copyright-bar-text Inspired by
						a.Main-footer-copyright-link(href="https://myanimelist.net/" target="_blank") &nbsp;MAL
					p.Main-footer-copyright-bar-text and
						a.Main-footer-copyright-link(href="https://shikimori.org/" target="_blank") &nbsp;Shikimori

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
	@import "../../assets/styles/modules/indentations.sass"

	.Main-footer
		width: 100%
		text-align: start
		background-color: $color-blue

		&-title, &-description, &-button
			@extend .margin-v-sm

		&-description
			+mq(tablet-mid, max)
				max-width: 70%

		&-button
			@extend .shadow-btn
			@extend .hover-btn
			@extend .active-btn

		&-list
			+mq(tablet-mid, max)
				text-align: center

			&-item
				@extend .margin-v-sm

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
