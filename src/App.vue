<template lang="pug">

	#app
		component(:is="layout")
			router-view

</template>

<script lang="ts">

	import { Component, Vue } from 'vue-property-decorator';
	import MainLayout from "./layouts/MainLayout.vue"

	@Component({
		components: {
			MainLayout
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

	a
		cursor: pointer

	section
		width: 100%

	#app
		font-family: Avenir, Helvetica, Arial, sans-serif
		text-align: center
		height: 100%

</style>
