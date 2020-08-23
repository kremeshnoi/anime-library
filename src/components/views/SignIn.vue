<template lang="pug">

	.sign-in
		h1.sign-in__title
			| Login to account

		form.sign-in__form.sign-in-form( v-on:submit.prevent="submitHandler" )
			.sign-in-form__row
				.sign-in-form__field.input-field
					input#email( type="email"
									 name="username"
									 v-model.trim="email"
									 autocomplete="username"
									 :class="{ invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email) }" )

					label( for="email" )
						| Email

					span.sign-in-form__helper.helper-text( v-if="$v.email.$dirty && !$v.email.required"
																		data-error="The field is empty" )

					span.sign-in-form__helper.helper-text( v-else-if="$v.email.$dirty && !$v.email.email"
																		data-error="Incorrect email" )

			.sign-in-form__row
				.sign-in-form__helper.input-field
					input#password( type="password"
										 name="password"
										 v-model.trim="password"
										 autocomplete="current-password"
										 :class="{ invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength) }" )

					label( for="password" )
						| Password

					span.sign-in-form__helper.helper-text( v-if="$v.password.$dirty && !$v.password.required"
																		data-error="The field is empty" )

					span.sign-in-form__helper.helper-text( v-else-if="$v.password.$dirty && !$v.password.minLength"
																		data-error="Password is too short" )

			.sign-in-form__row
				router-link( to="/recovery" )
					| Forgot password?

			.sign-in-form__row
				| - or -

			.sign-in-form__row
				router-link( to="/register" )
					| Still don"t have an account?

			center
				.sign-in-form__row
					vue-recaptcha( sitekey="6Lc-DaUZAAAAABeSVHxIZhS9Wk2xqSo53V4UeX-H" )

				.sign-in-form__row
					button.sign-in__button.btn-large( type="submit"
																 name="submitSignIn" )
						| Sign In

		.sign-in__link-back
			router-link( to="/" )
				| Back to Homepage?

</template>

<script>

	import VueRecaptcha from "vue-recaptcha";
	import { email, required, minLength } from "vuelidate/lib/validators";

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
			title: "Otaku Library - Sign In"
		},
		methods: {
			async submitHandler() {
				if (this.$v.$invalid) {
					this.$v.$touch()
					return
				};

				const signInData = {
					email: this.email,
					password: this.password
				};

				try {
					await this.$store.dispatch("signIn", signInData);
					this.$router.push("/");
					M.toast({ html: "Signed In successfully", classes: "green" });
				} catch (error) {
					throw new Error(error);
				}
			}
		}
	};

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars"
	@import "../../assets/styles/utils/mixins"
	@import "../../assets/styles/modules/buttons"

	.sign-in
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
		background-color: $color-white-pure
		box-shadow: 10px 10px 5px 0 rgba(0, 0, 0, 0.75)

		&__title
			padding: 20px 0 0 0
			font-size: 22px

	.sign-in-form
		&__row
			margin: 20px auto 20px auto
			max-width: 304px

		&__field
			+flex(center, flex-start, column)

		&__helper
			width: 100%

		&__button
			@extend .hover-btn
			@extend .shadow-btn
			@extend .focus-btn

</style>
