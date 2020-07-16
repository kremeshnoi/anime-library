<template lang="pug">

	.Anime {{ item }}

</template>

<script>

	import {mapActions, mapGetters} from "vuex";

	export default {
		name: "Anime",
		data: () => {
			return {
				item: {}
			};
		},
		methods: {
			...mapActions(["loadAnimeData"])
		},
		computed: {
			...mapGetters(["getLoadedAnimeResult"])
		},
		created() {
			this.loadAnimeData().then(() => {
				this.item = this.getLoadedAnimeResult;
			});
		}
	};

</script>

<style lang="sass" scoped>

	.Anime
		min-height: 400px
		background: red
		width: 100%
		margin: 200px

</style>
