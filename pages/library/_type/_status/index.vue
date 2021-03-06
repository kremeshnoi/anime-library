<template lang="pug">

	main.library
		.library__container
			ul.library__tabs.library__tabs_main
				li.library__tab.tab(
					:key="index"
					v-for="(tab, index) in typeTabs")
					a.library__tab-item.library__tab-item_main(
						@click="toogleTab(tab.title, 'planned')"
						:class="{ active: $route.params.type === tab.title }")
						| {{ tab.title }}

			.library__anime
				ul.library__tabs
					li.library__tab.tab(v-for="(tab, index) in tabs", :key="index")
						a.library__tab-item(
							@click="toogleTab(tab.type, tab.status)"
							:class="{ active: $route.params.status === tab.status }")
							| {{ tab.title }}

				table.library__table
					thead.library__thead
						tr.library__tr
							th.library__th
								| #
							th.library__th
								| Image
							th.library__th
								| Title
							th.library__th
								| Type
							th.library__th
								| Delete

					tbody.library__tbody
						tr.library__tr(
							:key="index"
							v-for="(data, index) in buffer")
							td.library__td
								| {{ index + 1 }}
							td.library__td
								img.library__image(
									draggable="false"
									alt="title cover"
									:src="data.image_url")
							td.library__td
								a.library__link.library__link_title
									| {{ data.title }}
							td.library__td
								| {{ data.type }}
							td.library__td
								i.library__icon.material-icons(
									@click="removeValue($route.params.type, data.mal_id)") clear

</template>

<script>

	import firebase from "firebase/app"
	import jikanjs from "jikanjs/lib/jikan.js"
	import layout from "@/middleware/layout"

	export default {
		name: "Library",
		metaInfo: {
			title: "Otaku Library - Library"
		},
		layout: layout,
		data() {
			return {
				buffer: [],
				tabs: [],
				typeTabs: [{ title: "anime" }, { title: "manga" }],
				animeTabs: [
					{ title: "Plan to Watch", status: "planned", type: "anime" },
					{ title: "Completed", status: "completed", type: "anime" },
					{ title: "Currently Watching", status: "process", type: "anime" },
					{ title: "On Hold", status: "hold", type: "anime" },
					{ title: "Dropped", status: "dropped", type: "anime" },
				],
				mangaTabs: [
					{ title: "Plan to Read", status: "planned", type: "manga" },
					{ title: "Completed", status: "completed", type: "manga" },
					{ title: "Currently Reading", status: "process", type: "manga" },
					{ title: "On Hold", status: "hold", type: "manga" },
					{ title: "Dropped", status: "dropped", type: "manga" },
				],
			}
		},
		async created() {
			this.fetchData(this.$route.params.type, this.$route.params.status)
			if (this.$route.params.type === "anime") this.tabs = this.animeTabs
			else if (this.$route.params.type === "manga") this.tabs = this.mangaTabs
		},
		methods: {
			getUid() {
				const user = firebase.auth().currentUser
				return user ? user.uid : null
			},
			toogleTab(type, status) {
				this.$router.push(`/library/${type}/${status}`)
				if (type === "anime") this.animeTabBuffer = status
				else if (type === "manga") this.mangaTabBuffer = status
			},
			async fetchData(type, status) {
				try {
					const uid = this.getUid()
					const res = await firebase
						.database()
						.ref(`/users/${uid}/`)

						.on("value", (data) => {
							const obj = Object.entries(data.val()[`${type}`])
								.filter((d) => d[1].status === status)
								.map((d) =>
									type === "anime"
										? jikanjs.loadAnime(d[0])
										: jikanjs.loadManga(d[0])
								)

							Promise.all(obj).then((values) => (this.buffer = values))
						})
				} catch (error) {
					throw error.message
				}
			},
			async removeValue(type, id) {
				try {
					const uid = this.getUid()
					await firebase.database().ref(`/users/${uid}/${type}/${id}/`).set({
						status: false,
					})
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
	@import "~/assets/styles/modules/titles"
	@import "~/assets/styles/modules/containers"

	.library
		width: 100%

		&__container
			@extend .container-default

		&__title
			display: flex
			align-items: center
			@extend .title-default

		&__icon
			cursor: pointer
			&:hover
				color: $color-red

		&__tabs
			height: 100%
			display: flex
			flex-wrap: wrap
			margin: 40px auto
			overflow-x: initial
			overflow-y: initial
			align-items: center
			justify-content: center

		&__image
			width: 80px
			height: 120px
			margin-right: 20px

		&__th
			&:nth-of-type(4),
			&:nth-of-type(5)
				text-align: center

		&__td
			padding: 8px 0 8px 0
			&:nth-of-type(4),
			&:nth-of-type(5)
				text-align: center

		&__tab
			height: initial !important
			text-transform: uppercase
			+mq(tablet-mid, max)
				flex-grow: initial
			+mq(phone-wide, max)
				width: 100%
				margin: 0 0 14px 0

		&__tab-item
			display: block
			font-weight: 600
			text-align: start
			line-height: 34px
			margin: 0 40px 0 0
			text-align: center
			line-height: initial
			padding: 0 !important
			text-decoration: none
			height: initial !important
			color: $color-blue-light !important
			+mq(phone-wide, max)
				margin: 0 0 0 0
			&:focus
				background-color: initial !important
			&.active
				background-color: initial !important
				border-bottom: 3px solid $color-blue-light
			&_main
				line-height: initial
				&.active
					font-size: 26px
					font-weight: 800
					border-bottom: none
					color: $color-orange !important

		&__link
			color: $color-grey-dark
			&:hover
				text-decoration: underline
			&_title
				font-size: 16px
				font-weight: 600
				color: $color-blue-light
				&:hover
					color: $color-orange
					text-decoration: initial
				+mq(phone-wide, max)
					font-size: 13px

</style>
