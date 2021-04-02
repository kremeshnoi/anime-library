<template lang="pug">

	form.authentication-form(@submit.prevent="validate" novalidate)
		.authentication-form__row(v-if="type !== 'set-username'")
			.authentication-form__field.input-field
				label(for="email")
					| Email
				input.authentication-form__input(
					id="email"
					type="email"
					name="username"
					v-model.trim="email"
					autocomplete="username"
					:class="{ invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email) }")

				span.authentication-form__helper.helper-text(
					data-error="The field is empty"
					v-if="$v.email.$dirty && !$v.email.required")

				span.authentication-form__helper.helper-text(
					data-error="Incorrect email"
					v-if="$v.email.$dirty && !$v.email.email")

		.authentication-form__row(v-if="type === 'sign-up' || type === 'set-username'")
			.authentication-form__field.input-field
				label(for="username")
					| Username
				input.authentication-form__input(
					type="text"
					id="username"
					autocomplete="off"
					v-model.trim="username"
					:class="{ invalid: ($v.username.$dirty && !$v.username.required) || ($v.username.$dirty && !$v.username.minLength) }")

				span.authentication-form__helper.helper-text(
					data-error="The field is empty"
					v-if="$v.username.$dirty && !$v.username.required")

				span.authentication-form__helper.helper-text(
					data-error="Username is too short"
					v-if="$v.username.$dirty && !$v.username.minLength")

		.authentication-form__row(v-if="type !== 'recovery' && type !== 'set-username'")
			.authentication-form__field.input-field
				label(for="password")
					| Password
				input.authentication-form__input(
					type="password"
					name="password"
					id="password"
					v-model.trim="password"
					autocomplete="current-password"
					:class="{ invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength) }")

				span.authentication-form__helper.helper-text(
					data-error="The field is empty"
					v-if="$v.password.$dirty && !$v.password.required")

				span.authentication-form__helper.helper-text(
					data-error="Password is too short"
					v-if="$v.password.$dirty && !$v.password.minLength")

		.authentication-form__row
			button.authentication-form__submit-button.btn(
				type="submit"
				name="submit")
				| SUBMIT

		.authentication-form__row(v-if="type === 'sign-in'")
			span.authentication-form__text
				| - or -

		.authentication-form__row(v-if="type === 'sign-in'")
			.authentication-form__social-buttons
				button.authentication-form__google-button(@click="googleAuth" type="button")
					img.authentication-form__google-logo(
						draggable="false"
						alt="google logo"
						src="~/assets/images/google-logo.png")
					span.authentication-form__google-text
						| Google

				button.authentication-form__twitter-button(@click="twitterAuth" type="button")
						img.authentication-form__twitter-logo(
							draggable="false"
							alt="twitter logo"
							src="~/assets/images/twitter-logo.png")
						span.authentication-form__twitter-text
							| Twitter

		VueRecaptcha.recaptcha(
			ref="recaptcha"
			size="invisible"
			@verify="submit"
			@expired="reset"
			sitekey="6LeKfEgaAAAAAGqtaoHk9BjYE18zHwoeOmoOCkhq")

</template>

<script>

	import { mapActions } from "vuex"
	import VueRecaptcha from "vue-recaptcha"
	import { email, required, requiredIf, minLength } from "vuelidate/lib/validators"

	export default {
		name: "AutheticationForm",
		props: ["type"],
		components: {
			VueRecaptcha
		},
		data() {
			return {
				email: "",
				username: "",
				password: ""
			}
		},
		validations: {
			email: {
				required: requiredIf(function() { this.type !== "set-username" }),
				email },
			username: {
				required: requiredIf(function() { this.type === "sign-up" || this.type === "set-username" }),
				minLength: minLength(3) },
			password: {
				required: requiredIf(function() { this.type !== "recovery" || this.type !== "set-username"}),
				minLength: minLength(5) }
		},
		methods: {
			...mapActions({
				signIn: "auth/signIn",
				signUp: "auth/signUp",
				googleAuth: "auth/googleAuth",
				setUsername: "auth/setUsername",
				twitterAuth: "auth/twitterAuth",
				recovery: "auth/recoverPassword"
			}),
			validate() {
				this.$refs.recaptcha.execute()
			},
			reset () {
				this.$refs.recaptcha.reset()
			},
			async submit() {
				if (this.$v.$invalid) {
					this.$refs.recaptcha.reset()
					return this.$v.$touch()
				}

				document.querySelector(".auth-progress").style.display = "block"

				this.$refs.recaptcha.reset()

				if (this.type === "sign-in") await this.signIn({
					email: this.email,
					password: this.password
				})
				if (this.type === "sign-up") await this.signUp({
					email: this.email,
          password: this.password,
          username: this.username
				})
				if (this.type === "recovery") await this.recovery({
					email: this.email
				})
				if (this.type === "set-username") await this.setUsername({
					username: this.username
				})
			}
		}
	}

</script>

<style lang="sass">

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"
	@import "~/assets/styles/modules/shadow"

	.authentication-form
		width: 100%
		+flex(flex-start, flex-start, column)

		&__submit-button
			height: 36px
			width: 120px
			font-size: 13px
			@extend .shadow
			transition: none
			color: $color-white !important
			background-color: $color-aquamarine !important
			&:hover
				@extend .shadow

		&__row
			width: 100%
			max-width: 400px
			margin: 40px 0 0 0
			+flex(flex-start, flex-start, column)

		&__field, &__input , &__helper, &__text
			width: 100%
			margin: 0 !important

		&__text
			text-align: center

		&__social-buttons
			width: 100%
			column-gap: 20px
			display: grid !important
			grid-template-columns: 1fr 1fr

		&__google-button, &__twitter-button
			width: 100%
			height: 36px
			outline: none
			cursor: pointer
			overflow: hidden
			border-radius: 2px
			position: relative
			text-align: center
			white-space: nowrap
			box-sizing: border-box
			background-image: none
			vertical-align: middle
			color: $color-blue_light !important
			box-shadow: 0 2px 4px 0 rgb(0 0 0 / 25%)
			&:hover
				background-color: $color-white_dim !important

		&__google-text, &__twitter-text
			width: 100%
			font-size: 13px
			font-weight: 400
			line-height: 34px
			margin-right: 12px
			vertical-align: top
			letter-spacing: .21px
			font-family: Roboto,arial,sans-serif

		&__google-logo, &__twitter-logo
			width: 36px
			padding: 8px

</style>