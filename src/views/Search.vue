<template lang="pug">

	.search
		.search__container
			SearchBar
			QueryContent

</template>

<script>

	import { mapActions, mapGetters } from "vuex";
	import SearchBar from "@/components/modules/SearchBar.vue";
	import QueryContent from "@/components/modules/QueryContent";

	export default {
		name: "Search",
		components: {
			QueryContent, SearchBar
		},
		metaInfo: {
			title: "Anime Library / Search"
		},
	};

</script>

<style lang="sass" scoped>

	@import "../assets/styles/utils/vars.sass"
	@import "../assets/styles/utils/mixins.sass"
	@import "../assets/styles/modules/containers.sass"

	.search
		width: 100%

		&__container
			@extend .container-default

</style>
