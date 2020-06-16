<template lang="pug">

	.SignIn
		p.SignIn-title Login to account
		form(v-on:submit.prevent="submitHandler")
			.SignIn-row
				.SignIn-field.input-field
					input#email(type="text" name="email" v-model.trim="email"
						:class="{ invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email) }")
					label(for="email") Email
					span.SignIn-helper.helper-text(v-if="$v.email.$dirty && !$v.email.required" data-error="The field is empty")
					span.SignIn-helper.helper-text(v-else-if="$v.email.$dirty && !$v.email.email" data-error="Incorrect email")

			.SignIn-row
				.SignIn-field.input-field
					input#password(type="text" name="password" v-model.trim="password"
						:class="{ invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength) }")
					label(for="password") Password
					span.SignIn-helper.helper-text(v-if="$v.password.$dirty && !$v.password.required" data-error="The field is empty")
					span.SignIn-helper.helper-text(v-else-if="$v.password.$dirty && !$v.password.minLength" data-error="Password is too short")

			.SignIn-row
				router-link(to="/recovery") Forgot password?

			center
				.SignIn-row
					vue-recaptcha(sitekey="6Lc-DaUZAAAAABeSVHxIZhS9Wk2xqSo53V4UeX-H")

				.SignIn-row
					button.SignIn-button.btn-large(type="submit" name="submitSignIn") Sign In

		.SignIn-cancel
			router-link(to="/") Back to Homepage?

</template>

<script lang="ts">

	import { email, required, minLength } from "vuelidate/lib/validators";
	import VueRecaptcha from "vue-recaptcha";

	export default {
		name: "SignIn",
		data: () => ({
			email: "",
		  	password: ""
		}),
		validations: {
			email: { email, required },
			password: { required, minLength: minLength(5) }
		},
		components: {
			VueRecaptcha
		},
		metaInfo: {
			title: "Anime Library - Sign In"
		},
		methods: {
			submitHandler() {
				if (this.$v.$invalid) {
					this.$v.$touch()
					return
				}

				const signInData = {
					email: this.email,
					password: this.password
				}

				this.$router.push("/")
			}
		}
	}

</script>

<style lang="sass" scoped>

	@import "../assets/styles/utils/vars"
	@import "../assets/styles/utils/mixins"
	@import "../assets/styles/modules/buttons"

	.SignIn
		position: fixed
		top: 0
		left: 0
		right: 0
		bottom: 0
		margin: auto
		max-width: 400px
		max-height: 640px
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

		&-field
			+flex(center, start, column)

		&-helper
			width: 100%

		&-button
			@extend .hover-btn
			@extend .shadow-btn
			@extend .focus-btn

</style>
