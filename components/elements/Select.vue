<template lang="pug">

	.input-wrapper
		.input-field
			select(v-model="payload.status")
				option(
					:key="optionIndex"
					:value="option.value"
					v-for="(option, optionIndex) in options")
					span {{ option.title }}

			.btn.btn-small(@click="addToLibrary(payload)")
				| Add

</template>

<script>

	export default {
		name: "Select",
		props: ["type", "wholeResult"],
		data() {
			return {
				payload: {
					type: this.type,
					status: "planned",
					id: null,
					result: null
				}
			}
		},
		computed: {
			options() {
				const options = [
					{ title: "Plan to", value: "planned" },
					{ title: "Completed", value: "completed" },
					{ title: "Currently", value: "process" },
					{ title: "On Hold", value: "hold" },
					{ title: "Dropped", value: "dropped" }
				]
				let verb = ""
				let type = this.type
				if (type === "Manga") {
					verb = "Read"
				} else {
					verb = "Watch"
				}

				for (let i = 0; options.length > i; i++) {
					if (options[i].value === "planned") {
						options[i].title += ` ${verb}`
					}
					if (options[i].value === "process") {
						options[i].title += ` ${verb + "ing"}`
					}
				}

				return options
			},
		},
		watch: {
			type(newVal) {
				this.payload.type = newVal
			},
			wholeResult(newVal) {
				this.payload.result = newVal
				this.payload.id = newVal.mal_id
			},
		},
		async created() {
			this.payload.type = this.type
			this.payload.result = this.wholeResult
			this.payload.id = this.wholeResult.mal_id
		},
		mounted() {
			const select = document.querySelectorAll("select")
			const selectInstance = M.FormSelect.init(select)
		}
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"
	@import "~/assets/styles/modules/shadow"

	.input-field
		margin: 10px 0 0 0

	.input-wrapper:hover
		.coupontooltip
			display: block

	.input-field
		+flex(center, initial, column)
		width: 100%

	.disabled
		opacity: 0.4
		user-select: none
		pointer-events: none

	.btn
		@extend .shadow-btn
		align-self: flex-start
		text-transform: lowercase
		background-color: $color-blue-light

</style>
