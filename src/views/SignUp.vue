<template lang="pug">

	.sign-up
		h1.sign-up__title
			| Start using Otaku Library

		form.sign-up__form.sign-up-form(v-on:submit.prevent="submitHandler")
			.sign-up-form__row
				.sign-up-form__field.input-field
					input#email(type="email"
									name="username"
									v-model.trim="email"
									:class="{ invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email) }")
					label(for="email")
						| Email
					span.sign-up-form__helper.helper-text(v-if="$v.email.$dirty && !$v.email.required"
																		data-error="The field is empty")
					span.sign-up-form__helper.helper-text(v-else-if="$v.email.$dirty && !$v.email.email"
																		data-error="Incorrect email")

			.sign-up-form__row
				.sign-up-form__field.input-field
					input#username(type="text"
										v-model.trim="username"
										:class="{ invalid: ($v.username.$dirty && !$v.username.required) || ($v.username.$dirty && !$v.username.minLength) }")
					label(for="username")
						| Username
					span.sign-up-form__helper.helper-text(v-if="$v.username.$dirty && !$v.username.required"
																		data-error="The field is empty")
					span.sign-up-form__helper.helper-text(v-else-if="$v.username.$dirty && !$v.username.minLength"
																		data-error="Username is too short")

			.sign-up-form__row
				.sign-up-form__field.input-field
					input#password(type="password"
										name="password"
										v-model.trim="password"
										:class="{ invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength) }")
					label(for="password")
						| Password
					span.sign-up-form__field.helper-text(v-if="$v.password.$dirty && !$v.password.required"
																	data-error="The field is empty")
					span.sign-up-form__field.helper-text(v-else-if="$v.password.$dirty && !$v.password.minLength"
																	data-error="Password is too short")

			.sign-up-form__row
				router-link(to="/login")
					| Already have an account?

			center
				.sign-up-form__row
					vue-recaptcha(sitekey="6Lc-DaUZAAAAABeSVHxIZhS9Wk2xqSo53V4UeX-H")

				.sign-up-form__row
					button.SignUp-button.btn-large(type="submit"
															name="submitSignUp")
						| Create Account

		.sign-up__link-back
			router-link(to="/")
				| Back to Homepage?

</template>

<script>

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
			title: "Otaku Library - Sign Up"
		},
		methods: {
			async submitHandler() {
				if (this.$v.$invalid) {
					this.$v.$touch();
					return;
				};
				const signUpData = {
					email: this.email,
					password: this.password,
					username: this.username
				};

				try {
					await this.$store.dispatch("registration", signUpData);
					this.$router.push("/");
					M.toast({ html: "Successful registration", classes: "green" });
				} catch (error) {
					throw new Error(error);
				}
			}
		}
	};

</script>

<style lang="sass" scoped>

	@import "../assets/styles/utils/vars.sass"
	@import "../assets/styles/utils/mixins.sass"
	@import "../assets/styles/modules/buttons.sass"

	.sign-up
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

		.sign-up-form
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
