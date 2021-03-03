<template lang="pug">

  client-only
    .sign-up
      h1.sign-up__title
        | Join Otaku Library!

      form.sign-up__form.sign-up-form(@submit.prevent="validate")
        .sign-up-form__row
          .sign-up-form__field.input-field
            input#email.sign-up-form__input(
              type="email"
              name="username"
              v-model.trim="email"
              autocomplete="username"
              :class="{ invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email) }")

            label(for="email")
              | Email

            span.sign-up-form__helper.helper-text(
              data-error="The field is empty"
              v-if="$v.email.$dirty && !$v.email.required")

            span.sign-up-form__helper.helper-text(
              data-error="Incorrect email"
              v-else-if="$v.email.$dirty && !$v.email.email")

        .sign-up-form__row
          .sign-up-form__field.input-field
            input#username.sign-up-form__input(
              type="text"
              autocomplete="off"
              v-model.trim="username"
              :class="{ invalid: ($v.username.$dirty && !$v.username.required) || ($v.username.$dirty && !$v.username.minLength) }")

            label(for="username")
              | Username

            span.sign-up-form__helper.helper-text(
              data-error="The field is empty"
              v-if="$v.username.$dirty && !$v.username.required")

            span.sign-up-form__helper.helper-text(
              data-error="Username is too short"
              v-else-if="$v.username.$dirty && !$v.username.minLength")

        .sign-up-form__row
          .sign-up-form__field.input-field
            input#password.sign-up-form__input(
              type="password"
              name="password"
              v-model.trim="password"
              autocomplete="current-password"
              :class="{ invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength) }")

            label(for="password")
              | Password

            span.sign-up-form__field.helper-text(
              data-error="The field is empty"
              v-if="$v.password.$dirty && !$v.password.required")

            span.sign-up-form__field.helper-text(
              data-error="Password is too short"
              v-else-if="$v.password.$dirty && !$v.password.minLength")

        .sign-up-form__row
          router-link(to="/sign-in")
            | Already have an account?

        center.sign-up__center
          .preloader-wrapper.big.active
            .spinner-layer.spinner-blue-only
              .circle-clipper.left
                .circle
              .gap-patch
                .circle
              .circle-clipper.right
                .circle
          vue-recaptcha.recaptcha(
            ref="recaptcha"
            size="invisible"
            @verify="submit"
            @expired="onCaptchaExpired"
            sitekey="6LeKfEgaAAAAAGqtaoHk9BjYE18zHwoeOmoOCkhq")
          .sign-up-form__row
            button.SignUp-button.btn(
              type="submit"
              name="submitSignUp")
              | Create Account

      .sign-up__link-back
        router-link(to="/")
          | Back to Homepage

</template>

<script>

  import { mapActions } from "vuex"
  import VueRecaptcha from "vue-recaptcha"
  import layoutMiddleware from "@/middleware/layoutMiddleware"
  import { email, required, minLength } from "vuelidate/lib/validators"

  export default {
    name: "SignUp",
    metaInfo: {
      title: "Otaku Library - Sign Up"
    },
    layout: layoutMiddleware,
    components: {
      VueRecaptcha
    },
    data() {
      return {
        email: "",
        username: "",
        password: "",
        recaptcha: null
      }
    },
    validations: {
      email: { email, required },
      username: { required, minLength: minLength(3) },
      password: { required, minLength: minLength(5) }
    },
    methods: {
      ...mapActions({
        signUp: "auth/signUp"
      }),
      async submit() {
        if (this.$v.$invalid) {
          return this.$v.$touch()
        }

        const signUpData = {
          email: this.email,
          password: this.password,
          username: this.username
        }

        if (window.screen.width <= 560) {
          document.querySelector(".preloader-wrapper").style.display = "block"
        } else {
          document.querySelector(".auth-progress").style.display = "block"
        }
        await this.signUp(signUpData)
      },
      validate () {
        this.$refs.recaptcha.execute()
      },
      onCaptchaExpired () {
        this.$refs.recaptcha.reset()
      }
    }
  }

</script>

<style lang="sass" scoped>

  @import "~/assets/styles/utils/vars"
  @import "~/assets/styles/utils/mixins"
  @import "~/assets/styles/modules/buttons"

  .sign-up
    top: 0
    left: 0
    right: 0
    bottom: 0
    margin: auto
    position: fixed
    max-width: 400px
    max-height: 640px
    border-radius: 4px
    padding: 20px 20px 20px 20px
    background-color: $color-white-pure
    box-shadow: 10px 10px 5px 0 rgba(0, 0, 0, 0.75)
    +mq(phablet, max)
      max-width: 100%
      max-height: 100%
      border-radius: 0
    +flex(center, center, column)

    &__title
      font-size: 22px
      padding: 30px 0 30px 0

  .sign-up-form
    width: 100%
    text-align: center

    &__input
      width: auto !important
      padding: 0 0 0 20px !important

    &__row
      max-width: 304px
      margin: 20px auto 20px auto
      &_center
        +flex(center, center, column)

    &__field
      +flex(center, stretch, column)

    &__helper
      width: 100%

    &__button
      @extend .focus-btn
      @extend .hover-btn
      @extend .shadow-btn

  .preloader-wrapper
    display: none
    right: 20px !important
    width: 30px !important
    bottom: 20px !important
    height: 30px !important
    position: absolute !important

</style>
