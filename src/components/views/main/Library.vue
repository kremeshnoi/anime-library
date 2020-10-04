<template lang='pug'>

	.library
		.library__container
			ul.library__tabs.library__tabs_main.tabs
				li.library__tab.tab(v-for='tab in mainTabs')
					a.library__tab-item.library__tab-item_main(:href=`'#' + tab.value`
						@click='toogleTab((tab.value === `anime`) ? animeTabBuffer : mangaTabBuffer, tab.value)')
						| {{ tab.title }}

			.library__anime(id='anime')
				ul.library__tabs.tabs
					li.library__tab.tab(v-for='tab in animeTabs')
						a.library__tab-item(:href='tab.value'
						@click='toogleTab(tab.value, `anime`)')
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
						tr.library__tr(v-for='(value, index) in buffer'
							:key='index')
							td.library__td
								| {{ index + 1 }}
							td.library__td
								img.library__image(:src=`value.image_url`)
							td.library__td
								a.library__link.library__link_title
									| {{ value.title }}
							td.library__td
								| {{ value.type }}
							td.library__td
								i.library__icon.material-icons clear

			.library__manga(id='manga')
				ul.library__tabs.tabs
					li.library__tab.tab(v-for='tab in mangaTabs')
						a.library__tab-item(:href='tab.value'
							@click='toogleTab(tab.value, `manga`)')
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
						tr.library__tr(v-for='(value, index) in buffer'
							:key='index')
							td.library__td
								| {{ index + 1 }}
							td.library__td
								img.library__image(:src=`value.image_url`)
							td.library__td
								a.library__link.library__link_title
									| {{ value.title }}
							td.library__td
								| {{ value.type }}
							td.library__td
								i.library__icon.material-icons clear

</template>

<script>

	import firebase from "firebase";
	import jikanjs from 'jikanjs/lib/jikan.js';
	import router from "@/router";

	function getUid() {
		const user = firebase.auth().currentUser;
		return user ? user.uid : null;
	}

	export default {
		name: 'Library',
		data() {
			return {
				buffer: [],
				animeTabBuffer: 'planned',
				mangaTabBuffer: 'planned',
				mainTabs: [
					{ title: 'anime',
						value: 'anime' },
					{ title: 'manga',
						value: 'manga' }
				],
				animeTabs: [
					{ title: 'Plan to Watch',
						value: 'planned' },
					{ title: 'Completed',
						value: 'completed' },
					{ title: 'Currently Watching',
						value: 'process' },
					{ title: 'On Hold',
						value: 'hold' },
					{ title: 'Dropped',
						value: 'dropped' },
				],
				mangaTabs: [
					{ title: 'Plan to Read',
						value: 'planned' },
					{ title: 'Completed',
						value: 'completed' },
					{ title: 'Currently Reading',
						value: 'process' },
					{ title: 'On Hold',
						value: 'hold' },
					{ title: 'Dropped',
						value: 'dropped' },
				]
			}
		},
		async created() {
			await this.fetchData('planned', 'anime');
		},
		mounted() {
			const tabs = document.querySelectorAll('.tabs');
			const instanceTabs = M.Tabs.init(tabs);
		},
		methods: {
			toogleTab(status, type) {
				this.fetchData(status, type)

				if(type === 'anime') {
					this.animeTabBuffer = status
				} else if(type === 'manga') {
					this.mangaTabBuffer = status
				}
			},
			async fetchData(status, type) {
				try {
					const res = await firebase.database().ref(`/${type}/`)
						.on('value', (data) => {
							let obj = Object.entries(data.val()[`${status}`]).map((d)=> ({
								data_id: d[0],
								uid: d[1].uid
							})).filter(d => d.uid === getUid()).map(d => (type === 'anime') ? jikanjs.loadAnime(d.data_id) : jikanjs.loadManga(d.data_id))

							Promise.all(obj).then(values => {
								this.buffer = values
							});

						});
				} catch (error) {
					throw new Error(error);
				}
			}
		},
		metaInfo: {
			title: 'Otaku Library - Library'
		}
	};

</script>

<style lang='sass' scoped>

	@import '../../../assets/styles/utils/vars'
	@import '../../../assets/styles/utils/mixins'
	@import '../../../assets/styles/modules/titles'
	@import '../../../assets/styles/modules/containers'

	.library
		width: 100%

		&__container
			@extend .container-default

		&__disaster
			text-align: start
			font-size: 30px

		&__title
			display: flex
			align-items: center
			@extend .title-default

		&__icon
			cursor: pointer
			&:hover
				color: $color-red

		&__tabs
			display: flex
			flex-wrap: wrap
			overflow-x: initial
			overflow-y: initial
			justify-content: center
			height: 100%
			align-items: center
			margin: 40px auto

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
			+mq(tablet-mid, max)
				flex-grow: initial
			+mq(phone-wide, max)
				width: 100%
				margin: 0 0 14px 0

		&__tab-item
			text-align: start
			padding: 0 !important
			margin: 0 40px 0 0
			height: initial !important
			line-height: initial
			color: $color-blue-light !important
			text-align: center
			font-weight: 600
			line-height: 34px
			&:focus
				background-color: initial !important
			&.active
				background-color: initial !important
				border-bottom: 3px solid $color-blue-light

			&_main
				line-height: initial
				&.active
					color: $color-orange !important
					font-size: 26px
					font-weight: 800
					border-bottom: none

		&__link
			color: $color-grey-dark
			&:hover
				text-decoration: underline

			&_title
				font-weight: 600
				font-size: 16px
				color: $color-blue-light
				&:hover
					text-decoration: initial
					color: $color-orange
				+mq(phone-wide, max)
					font-size: 13px

</style>
