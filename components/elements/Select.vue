<template lang="pug">

	.input-wrapper
		.input-field(:class="{ disabled: user[0] === null }")
			select(v-model="payload.status")
				option(
					:key="optionIndex"
					:value="option.value"
					v-for="(option, optionIndex) in options")
					span {{ option.title }}

			.btn-small(@click="addToLibrary(payload)")
				| Add

		//- span.coupontooltip
		//- 	| Sign in to acceess

</template>

<script>

	import { mapActions } from "vuex"

	export default {
		name: "Select",
		props: ["type", "wholeResult"],
		data() {
			return {
				user: [],
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
			await this.getUid().then((result) => this.user.push(result))
		},
		mounted() {
			const select = document.querySelectorAll("select")
			const selectInstance = M.FormSelect.init(select)
			const tooltip = document.querySelectorAll(".coupontooltip")

			document.addEventListener("mousemove", fn, false)

			function fn(e) {
					for (var i = tooltip.length; i--;) {
							tooltip[i].style.left = e.pageX + "px"
							tooltip[i].style.top = e.pageY + "px"
					}
			}
		},
		methods: {
			...mapActions({
				getUid: "auth/getUid",
				addToLibrary: "addToLibrary",
			}),
			followCursor() {
				for (let i = tooltip.length; i--;) {
					tooltip[i].style.left = e.pageX + "px"
					tooltip[i].style.top = e.pageY + "px"
				}
			}
		}
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"

	.input-wrapper:hover
		.coupontooltip
			display: block

	.input-field
		+flex(center, initial, column)
		width: 100%

	.disabled
		opacity: 0.6
		user-select: none
		pointer-events: none

	.btn-small
		align-self: flex-start
		text-transform: lowercase
		background-color: $color-blue-light

	.coupontooltip
		opacity: 0.9
		display: none
		padding: 10px
		z-index: 1000
		margin-left: 28px
		position: absolute
		border-radius: 4px
		color: $color-white-pure
		background: $color-black

</style>
