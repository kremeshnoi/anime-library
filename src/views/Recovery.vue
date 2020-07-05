<template lang="pug">

	.Recovery
		p.Recovery-title Send password recovery email
		form(v-on:submit.prevent="submitHandler")
			.Recovery-row
				.Recovery-field.input-field
					input#email(type="text" name="email" v-model.trim="email"
						:class="{ invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email) }")
					label(for="email") Email
					span.Recovery-helper.helper-text(v-if="$v.email.$dirty && !$v.email.required" data-error="The field is empty")
					span.Recovery-helper.helper-text(v-else-if="$v.email.$dirty && !$v.email.email" data-error="Incorrect email")

			center
				.Recovery-row
					vue-recaptcha(sitekey="6Lc-DaUZAAAAABeSVHxIZhS9Wk2xqSo53V4UeX-H")

				.Recovery-row
					button.SignUp-button.btn-large(type="submit" name="submitRecover") Submit

		.SignUp-cancel
			router-link(to="/") Back to Homepage?

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
    title: "Anime Library - Password Recovery"
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

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

@import "../assets/styles/utils/vars"
@import "../assets/styles/utils/mixins"
@import "../assets/styles/modules/buttons"

.Recovery
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
		max-width: 304px

	&-field
		+flex(center, flex-start, column)

	&-helper
		width: 100%

	&-button
		@extend .hover-btn
		@extend .shadow-btn
		@extend .focus-btn
</style>
