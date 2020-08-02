<template lang="pug">

	.recovery
		h1.recovery__title
			| Send password recovery email

		form.recovery__form.recovery-form(v-on:submit.prevent="submitHandler")
			.recovery-form__row
				.recovery-form__field.input-field
					input#email.recovery-form__input(type="text"
																name="email"
																v-model.trim="email"
																:class="{ invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email) }")

					label.recovery-form__label(for="email")
						| Email

					span.recovery-form__helper.helper-text(v-if="$v.email.$dirty && !$v.email.required"
																		data-error="The field is empty")

					span.recovery-form__helper.helper-text(v-else-if="$v.email.$dirty && !$v.email.email"
																		data-error="Incorrect email")

			center.recovery__center
				.recovery-form__row
					vue-recaptcha(sitekey="6Lc-DaUZAAAAABeSVHxIZhS9Wk2xqSo53V4UeX-H")

				.recovery-form__row
					button.recovery-form_button.btn-large(type="submit" name="submitRecover")
						| Submit

		.recovery__link-back
			router-link(to="/")
				| Back to Homepage?

</template>

<script>

	import { email, required } from "vuelidate/lib/validators";
	import VueRecaptcha from "vue-recaptcha";

	export default {
		name: "Recovery",
		data: () => ({
			email: ""
		}),
		validations: {
			email: { email, required }
		},
		components: {
			VueRecaptcha
		},
		metaInfo: {
			title: "Otaku Library - Password Recovery"
		},
		methods: {
			submitHandler() {
				if (this.$v.$invalid) {
					this.$v.$touch();
					return;
				};
				const RecoveryData = {
					email: this.email,
					password: this.password
				};
				this.$router.push("/");
			}
		}
	};

</script>

<style lang="sass" scoped>

	@import "../assets/styles/utils/vars.sass"
	@import "../assets/styles/utils/mixins.sass"
	@import "../assets/styles/modules/buttons.sass"

	.recovery
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

	.recovery-form
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
