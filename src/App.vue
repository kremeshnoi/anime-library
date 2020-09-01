<template lang='pug'>

	#app
		component(:is='layout')
			router-view

</template>

<script>

	import Authorized from '@/components/layouts/Authorized';
	import Unauthorized from '@/components/layouts/Unauthorized';
	import Authentication from '@/components/layouts/Authentication';

	export default {
		components: {
			Authorized,
			Unauthorized,
			Authentication
		},
		computed: {
			layout() {
				return this.$route.meta.layout;
			}
		}
	}

</script>

<style lang='sass'>

	#app
		font-family: Avenir, Helvetica, Arial, sans-serif
		text-align: center
		height: 100%

</style>
