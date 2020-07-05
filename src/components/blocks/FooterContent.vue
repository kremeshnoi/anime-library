<template lang="pug">

	.FooterContent.page-footer
		.FooterContent-container
			.FooterContent-item
				h5.FooterContent-title Discord channel
				p.FooterContent-description We will also be happy to meet you on our channel, where you can always find like-minded people. Feel free to come in.
				a.FooterContent-button.btn(href="https://discord.com/invite/Ku72D5/" target="_blank") Chat

			.FooterContent-item
				h5.FooterContent-title Sitemap
				router-link.FooterContent-link(to="") About project
				h6.FooterContent-subtitle Sign in required
				router-link.FooterContent-link(to="") Search page
				router-link.FooterContent-link(to="") Your library

			.FooterContent-item
				h5.FooterContent-title Help
				router-link.FooterContent-link(to="/recovery") Forgot Password?
				router-link.FooterContent-link(to="") Q/A

</template>

<script>
export default {
  name: "FooterContent"
};
</script>

<style lang="sass" scoped>

@import "../../assets/styles/utils/vars"
@import "../../assets/styles/utils/mixins"
@import "../../assets/styles/modules/buttons"

.FooterContent
	text-align: start
	padding: 0
	background-color: $color-blue

	&-container
		width: 100%
		max-width: 1300px
		margin: 0 auto
		padding: 40px 40px 40px 40px
		display: grid
		grid-gap: 40px
		flex-wrap: wrap
		align-items: flex-start
		justify-content: space-between
		grid-template-columns: repeat(3, 1fr)

	&-title
		padding: 0 0 8px 0

	&-subtitle
		padding: 16px 0 8px 0
		border-bottom: 1px solid rgba($color-orange, 0.6)

	&-link
		margin: 8px 0 0 0
		color: $color-white
		&:hover
			opacity: 0.6

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
		max-width: 300px
		+mq(tablet-mid, max)
			max-width: 70%

	&-button
		margin: 16px 0 0 0
		@extend .shadow-btn
		@extend .hover-btn
		@extend .focus-btn
</style>
