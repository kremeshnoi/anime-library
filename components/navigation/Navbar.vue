<template lang="pug">

  nav.navbar
    .navbar__wrapper.nav-wrapper
      router-link.navbar__logo(to="/")
        | Otaku Library

      search-bar.navbar__search-bar

      .navbar__sign-in(v-if="this.user[0] === null")
        router-link.navbar__sign-in-link(to="/sign-in")
          | Sign in
          i.navbar__icon.material-icons exit_to_app

        router-link.navbar__sign-in-link_mobile(to="/sign-in")
          i.navbar__icon.material-icons exit_to_app

      .navbar__sign-out(v-else)
        a.navbar__sign-in-link(@click="signOut")
          | Sign out
          i.navbar__icon.material-icons exit_to_app

        a.navbar__sign-in-link_mobile(@click="signOut")
          i.navbar__icon.material-icons exit_to_app

</template>

<script>

  import { mapActions } from "vuex"
  import SearchBar from "@/components/elements/SearchBar"

  export default {
    name: "Navbar",
    components: {
      SearchBar,
    },
    data() {
      return {
        user: []
      }
    },
    async created() {
      await this.getUid().then((result) => this.user.push(result))
    },
    methods: {
      ...mapActions({
        getUid: "auth/getUid"
      }),
      signOut() {
        try {
					this.$store.dispatch("auth/signOut")
        } catch (error) {
          throw error.message
        }
      }
    }
  }

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"

	.navbar
		top: 0
		z-index: 99
		height: 54px
		position: fixed
		user-select: none
		line-height: 54px
		padding: 0 40px 0 40px
		background-color: $color-blue
		+mq(tablet-small, max)
			padding: 0 20px 0 20px

		&__wrapper
			width: 100%
			display: grid
			grid-gap: 40px
			align-items: center
			justify-content: space-between
			grid-template-columns: 200px minmax(auto, 1220px) 200px
			+mq(temp-wide, max)
				grid-template-columns: 200px minmax(auto, 1220px) 87px
			+mq(tablet, max)
				grid-gap: 20px
				grid-template-columns: minmax(auto, 1220px) 87px
			+mq(phablet, max)
				grid-template-columns: minmax(auto, 1220px) 40px

		&__logo
			font-size: 26px
			color: $color-white
			font-family: "Days One", sans-serif
			+mq(tablet, max)
				display: none

		&__sign-in-link
			margin-left: auto
			width: max-content
			+flex(flex-end, center, row)
			+mq(phablet, max)
				display: none
			&:hover
				.navbar__icon
					transform: translateX(4px)
			&_mobile
				display: none
				+mq(phablet, max)
					display: block

		&__icon
			height: 54px
			margin: 0 0 0 6px
			line-height: 54px

</style>
