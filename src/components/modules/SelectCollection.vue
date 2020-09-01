<template lang="pug">

	.input-field( v-if="getUserInfo.length" )
		select
			option( v-for="option in options"
					  :key="option.id" )
					| {{ option.title }}

		.btn-small
			| Add

</template>

<script>

import { mapGetters } from "vuex";

	export default {
		name: "Select",
		props: ["query"],
		data() {
			return {
				verb: "",
				options: [
					{ title: `Plan to`,
						value: "planned" },
					{ title: "Completed",
						value: "completed" },
					{ title: `Currently`,
						value: "in-process" },
					{ title: "On Hold",
						value: "on-hold" },
					{ title: "Dropped",
						value: "dropped" }
				]
			}
		},
		computed: {
			...mapGetters(["getUserInfo"])
		},
		methods: {
			changeTitle() {
				let type = this.query;
				if (type === "Manga") {
					this.verb = "Read";
				} else {
					this.verb = "Watch";
				}

				for(let i = 0; this.options.length > i; i++) {
					if(this.options[i].value === "planned") {
						this.options[i].title += ` ${ this.verb }`
					} if(this.options[i].value === "in-process") {
						this.options[i].title += ` ${ this.verb + "ing"}`
					}
				}
			}
		},
		created() {
			this.changeTitle();
		},
		mounted() {
			const elems = document.querySelectorAll("select");
			const instances = M.FormSelect.init(elems);
		}
	}

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars"
	@import "../../assets/styles/utils/mixins"

	.input-field
		+flex(center, space-between,column)
		width: 100%
		margin: 0 20px

	.btn-small
		text-transform: lowercase
		align-self: flex-start
		background-color: $color-blue-light

</style>
