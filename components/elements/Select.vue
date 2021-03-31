<template lang="pug">

	div.input-wrapper
		.input-field
			label(for="select-status")
			select(v-model="payload.status" name="select-status" id="select-status")
				option(
					id="option"
					:key="optionIndex"
					:value="option.value"
					v-for="(option, optionIndex) in options") {{ option.title }}

			.input-sub
				.select__button.btn.btn-small(@click="addToLibrary(payload)")
					| Add

				SpinButton(:count="wholeResult.episodes || wholeResult.chapters")

</template>

<script>

	import SpinButton from "@/components/elements/SpinButton"

	export default {
		name: "Select",
		props: ["type", "wholeResult"],
		components: {
			SpinButton
		},
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
		},
		methods: {
			async addToLibrary({ type, status, id }) {
				try {
					const uid = await this.$store.dispatch("auth/getUid")

					if(type === "Manga") type = "manga"
					else type = "anime"

					await this.$fire.database
						.ref(`/users/${ uid }/${ type }/${ id }/`)
						.set({ status })

					M.toast({ html: "Added to the library", classes: "green", displayLength: 10000 })

				} catch (error) {
					throw error.message
				}
			}
		}
	}

</script>

<style lang="sass">

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"
	@import "~/assets/styles/modules/shadow"

	.dropdown-content li>a, .dropdown-content li>span
		font-size: 15px
		color: rgba(0,0,0,0.87)

	.select-wrapper input.select-dropdown
		border-bottom: 1px solid rgba(0,0,0,0.87)
		&:focus
			border-bottom: 1px solid rgba(0,0,0,0.87)

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
		@extend .shadow
		align-self: flex-start
		background-color: $color-blue_light

	.input-sub
		display: flex
		justify-content: space-between

	.select
		&__button
			transition: none
			color: $color-white

</style>
