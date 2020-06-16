<template lang="pug">

	.SignUp
		p.SignUp-title Start using AnimeLibrary
		form(v-on:submit.prevent="submitHandler")
			.SignUp-row
				.SignUp-field.input-field
					input#email(type="text" name="email" v-model.trim="email" :class="{ invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email) }")
					label(for="email") Email
					span.SignUp-helper.helper-text(v-if="$v.email.$dirty && !$v.email.required" data-error="The field is empty")
					span.SignUp-helper.helper-text(v-else-if="$v.email.$dirty && !$v.email.email" data-error="Incorrect email")

			.SignUp-row
				.SignUp-field.input-field
					input#username(type="text" name="username" v-model.trim="username" :class="{ invalid: ($v.username.$dirty && !$v.username.required) || ($v.username.$dirty && !$v.username.minLength) }")
					label(for='username') Username
					span.SignUp-helper.helper-text(v-if="$v.username.$dirty && !$v.username.required" data-error="The field is empty")
					span.SignUp-helper.helper-text(v-else-if="$v.username.$dirty && !$v.username.minLength" data-error="Username too short")

			.SignUp-row
				.SignUp-field.input-field
					input#password(type="text" name="password" v-model.trim="password" :class="{ invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength) }")
					label(for="password") Password
					span.SignUp-helper.helper-text(v-if="$v.password.$dirty && !$v.password.required" data-error="The field is empty")
					span.SignUp-helper.helper-text(v-else-if="$v.password.$dirty && !$v.password.minLength" data-error="Password too short")

			.SignUp-row
				router-link(to="/sign-in") Already have an account?

			center
				.SignUp-row
					vue-recaptcha(sitekey="6Lc-DaUZAAAAABeSVHxIZhS9Wk2xqSo53V4UeX-H")

				.SignUp-row
					button.SignUp-button.btn-large(type="submit" name="submitSignUp") Create Account

		.SignUp-cancel
			router-link(to="/") Back to Homepage?

</template>

<script lang="ts">

	import { email, required, minLength } from "vuelidate/lib/validators";
	import VueRecaptcha from "vue-recaptcha";

	export default {
		name: "SignUp",
		data: () => ({
			email: "",
			username: "",
			password: ""
		}),
		validations: {
			email: { email, required },
			username: { required, minLength: minLength(5) },
			password: { required, minLength: minLength(5) }
		},
		components: {
			VueRecaptcha
		},
		metaInfo: {
			title: "Anime Library - Sign Up"
		},
		methods: {
			submitHandler() {
				if (this.$v.$invalid) {
					this.$v.$touch()
					return
				}

				const signUpData = {
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

		&-field
			+flex(center, start, column)

		&-helper
			width: 100%

		&-button
			@extend .hover-btn
			@extend .shadow-btn
			@extend .focus-btn

</style>
