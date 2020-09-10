<template lang='pug'>

	.recovery
		h1.recovery__title
			| Send password recovery email

		form.recovery__form.recovery-form(v-on:submit.prevent='submitHandler')
			.recovery-form__row
				.recovery-form__field.input-field
					input#email.recovery-form__input(type='text'
						name='email'
						v-model.trim='email'
						:class='{ invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email) }')

					label.recovery-form__label(for='email')
						| Email

					span.recovery-form__helper.helper-text(v-if='$v.email.$dirty && !$v.email.required'
						data-error='The field is empty')

					span.recovery-form__helper.helper-text(v-else-if='$v.email.$dirty && !$v.email.email'
						data-error='Incorrect email')

			center.recovery__center
				.recovery-form__row.sign-in-form__row_center
					vue-recaptcha.recaptcha(sitekey='6Lc-DaUZAAAAABeSVHxIZhS9Wk2xqSo53V4UeX-H'
						@verify='onVerify')

				.recovery-form__row
					button.recovery-form_button.btn-large(type='submit' name='submitRecover')
						| Submit

		.recovery__link-back
			router-link(to='/')
				| Back to Homepage?

</template>

<script>

	import VueRecaptcha from 'vue-recaptcha';
	import { email, required } from 'vuelidate/lib/validators';

	export default {
		name: 'Recovery',
		data: () => ({
			email: '',
			recaptcha: null
		}),
		validations: {
			email: { email, required }
		},
		components: {
			VueRecaptcha
		},
		metaInfo: {
			title: 'Otaku Library - Password Recovery'
		},
		methods: {
			onVerify: function (response) {
				this.recaptcha = response
			},
			async submitHandler() {
				if (this.$v.$invalid) {
					this.$v.$touch();
					return;
				};

				const RecoveryData = {
					email: this.email
				};

				try {
					if (this.recaptcha) {
						await this.$store.dispatch('recoverPassword', RecoveryData);
						this.$router.push('/');
						M.toast({ html: 'Signed In successfully', classes: 'green' });
					} else {
						M.toast({ html: 'Complete the captcha!', classes: 'red' });
					}
				} catch (error) {
					throw new Error(error);
				}

			}
		}
	};

</script>

<style lang='sass' scoped>

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'
	@import '../../assets/styles/modules/buttons'

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
		+flex(center, center, column)
		+mq(phablet, max)
			max-width: 100%
			max-height: 100%

		&__title
			padding: 20px 0 0 0
			font-size: 22px
			margin: 0 0 10px 0

	.recovery-form
		width: 100%
		&__row
			margin: 20px auto 20px auto
			max-width: 304px
			&_center
				+flex(center, center, column)

		&__field
			+flex(center, flex-start, column)

		&__helper
			width: 100%

		&__button
			@extend .hover-btn
			@extend .shadow-btn
			@extend .focus-btn

</style>
