<template lang="pug">

  client-only
    main.sign-in
      h1.sign-in__title
        | Start using account

      form.sign-in__form.sign-in-form(@submit.prevent="validate")
        .sign-in-form__row
          .sign-in-form__field.input-field
            input#email.sign-in-form__input(
              type="email"
              name="username"
              v-model.trim="email"
              autocomplete="username"
              :class="{ invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email) }")

            label(for="email")
              | Email

            span.sign-in-form__helper.helper-text(
              data-error="The field is empty"
              v-if="$v.email.$dirty && !$v.email.required")

            span.sign-in-form__helper.helper-text(
              data-error="Incorrect email"
              v-else-if="$v.email.$dirty && !$v.email.email")

        .sign-in-form__row
          .sign-in-form__field.input-field
            input#password.sign-in-form__input(
              type="password"
              name="password"
              v-model.trim="password"
              autocomplete="current-password"
              :class="{ invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength) }")

            label(for="password")
              | Password

            span.sign-in-form__helper.helper-text(
              data-error="The field is empty"
              v-if="$v.password.$dirty && !$v.password.required")

            span.sign-in-form__helper.helper-text(
              data-error="Password is too short"
              v-else-if="$v.password.$dirty && !$v.password.minLength")

        .sign-in-form__row
          nuxt-link.sign-in__link(to="/recovery")
            | Forgot password?

        .sign-in-form__row
          | - or -

        .sign-in-form__row
          nuxt-link.sign-in__link(to="/sign-up")
            | Register new account

        center.sign-in__center
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

          .sign-in-form__row.sign-in-form__social
            button.sign-in-form__google(@click="googleAuth")
              .sign-in-form__google-wrapper
                img.sign-in-form__google-logo(
                  draggable="false"
                  alt="google logo"
                  src="~/assets/images/google-logo.png")
                .sign-in-form__google-title
                  | Google

            button.sign-in-form__twitter(@click="twitterAuth")
              .sign-in-form__twitter-wrapper
                img.sign-in-form__twitter-logo(
                  draggable="false"
                  alt="twitter logo"
                  src="~/assets/images/twitter-logo.png")
                .sign-in-form__twitter-title
                  | Twitter


          .sign-in-form__row
            button.sign-in__button.btn(
              type="submit"
              name="submitSignIn")
              | Sign In

      .sign-in__link-back
        nuxt-link.sign-in__link(to="/")
          | Back to Homepage

</template>

<script>

  import { mapActions } from "vuex"
  import firebase from "firebase/app"
  import VueRecaptcha from "vue-recaptcha"
  import layout from "@/middleware/layout"
  import { email, required, minLength } from "vuelidate/lib/validators"

  export default {
    name: "SignIn",
    metaInfo: {
      title: "Otaku Library - Sign In"
    },
    layout: layout,
    components: {
      VueRecaptcha
    },
    data() {
      return {
        email: "",
        password: "",
        params: {
          client_id: "75933468300-qeknegfk5qg5cqa1c46fhrkfcu3nses0.apps.googleusercontent.com"
        },
        renderParams: {
          title: "true"
        }
      }
    },
    validations: {
      email: { email, required },
      password: { required, minLength: minLength(5) }
    },
    methods: {
      ...mapActions({
        signIn: "auth/signIn"
      }),
      async submit() {
        if (this.$v.$invalid) {
          return this.$v.$touch()
        }

        const signInData = {
          email: this.email,
          password: this.password
        }

        if (window.screen.width <= 560) {
          document.querySelector(".preloader-wrapper").style.display = "block"
        } else {
          document.querySelector(".auth-progress").style.display = "block"
        }
        await this.signIn(signInData)
      },
      validate () {
        this.$refs.recaptcha.execute()
      },
      onCaptchaExpired () {
        this.$refs.recaptcha.reset()
      },
      googleAuth () {
        const provider = new firebase.auth.GoogleAuthProvider()

        firebase.auth().signInWithPopup(provider)
        .then((result) => { this.$router.push("/")})
        .catch((error) => { throw error.message })
      },
      twitterAuth () {
        const provider = new firebase.auth.TwitterAuthProvider()

        firebase.auth().signInWithPopup(provider)
        .then((result) => { this.$router.push("/")})
        .catch((error) => { M.toast({ html: `${ error.message }`, classes: "red", displayLength: 10000 })})
      }
    }
  }

</script>

<style lang="sass" scoped>

  @import "~/assets/styles/utils/vars"
  @import "~/assets/styles/utils/mixins"
  @import "~/assets/styles/modules/shadow"

  .recaptcha
    position: fixed
    top: 50%

  .sign-in
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
    background-color: $color-white
    box-shadow: 10px 10px 5px 0 rgba(0, 0, 0, 0.75)
    +mq(phablet, max)
      max-width: 100%
      max-height: 100%
      border-radius: 0
    +flex(center, center, column)

    &__link
      color: $color-blue_light

    &__title
      font-size: 22px
      padding: 30px 0 30px 0

    &__button
      height: 36px
      width: 120px
      @extend .shadow
      transition: none
      color: $color-white
      background-color: $color-aquamarine

  .sign-in-form
    width: 100%
    text-align: center

    &__google, &__twitter
        height: 36px
        width: 120px
        outline: none
        color: #757575
        cursor: pointer
        overflow: hidden
        border-radius: 2px
        position: relative
        text-align: center
        white-space: nowrap
        box-sizing: border-box
        background-image: none
        vertical-align: middle
        background-color: #FFFFFF
        box-shadow: 0 2px 4px 0 rgb(0 0 0 / 25%)
        &:hover
          background-color: #EEEEEE

    &__google-wrapper, &__twitter-wrapper
      display: flex

    &__google-title, &__twitter-title
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

    &__social
      display: grid
      column-gap: 20px
      padding: 10px 0 10px 0
      grid-auto-flow: column
      justify-content: center

    &__row
      max-width: 304px
      margin: 20px auto 20px auto
      &_center
        +flex(center, center, column)

    &__field
      text-align: center
      +flex(center, strech, column)

    &__input
      width: auto !important
      padding: 0 0 0 20px !important

    &__helper
      width: 100%

  .preloader-wrapper
    display: none
    right: 20px !important
    width: 30px !important
    bottom: 20px !important
    height: 30px !important
    position: absolute !important

</style>
