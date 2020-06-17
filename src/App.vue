<template lang="pug">

	#app
		component(:is="layout")
			router-view

</template>

<script lang="ts">

	import { Component, Vue } from 'vue-property-decorator';
	import Unauthorized from "@/layouts/Unauthorized.vue";
	import Authentication from "@/layouts/Authentication.vue";
	import Authorized from "@/layouts/Authorized.vue";

	@Component({
		components: {
			Unauthorized,
			Authentication,
			Authorized
		},
		computed: {
			layout() {
				return this.$route.meta.layout
			}
		}
	})

	export default class App extends Vue {}

</script>

<style lang="sass">

	#app
		font-family: Avenir, Helvetica, Arial, sans-serif
		text-align: center
		height: 100%

</style>
