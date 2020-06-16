<template lang="pug">

	.SignUp
		p.SignUp-title Send password recovery email
		form
			.SignUp-row
				.input-field
					input#email.validate(type="email" name="email")
					label(for='email') Email

			center
				.SignUp-row
					vue-recaptcha(sitekey="6Lc-DaUZAAAAABeSVHxIZhS9Wk2xqSo53V4UeX-H")

				.SignUp-row
					button.SignUp-button.btn-large(type="submit" name="submit_registration") Submit

		.SignUp-cancel
			router-link(to="/") Back to Homepage?

</template>

<script lang="ts">

	import VueRecaptcha from 'vue-recaptcha';

	export default {
		name: "Recovery",
		components: {
			VueRecaptcha
		},
		metaInfo: {
			title: "Anime Library - Password Recovery"
		}
	}

</script>

<style lang="sass" scoped>

	@import "../assets/styles/utils/vars"
	@import "../assets/styles/utils/mixins"
	@import "../assets/styles/modules/buttons"

	.SignUp
		position: fixed
		top: 0
		left: 0
		right: 0
		bottom: 0
		margin: auto
		max-width: 400px
		max-height: 570px
		border-radius: 4px
		padding: 20px 20px 20px 20px
		background-color: $color-pure-white
		box-shadow: 10px 10px 5px 0 rgba(0, 0, 0, 0.75)

		&-title
			padding: 20px 0 0 0
			font-size: 22px

		&-row
			margin: 20px auto 20px auto
			max-width: 290px

		&-button
			@extend .hover-btn
			@extend .shadow-btn
			@extend .focus-btn

</style>
