<template lang='pug'>

	.library
		.library__container
			ul.library__tabs.library__tabs_main
				li.library__tab.tab(v-for='(tab, index) in typeTabs'
				:key='index')
					a.library__tab-item.library__tab-item_main(@click='toogleTab(`planned`, tab.title)'
					:class=`{ active : $route.params.type === tab.title }`)
						| {{ tab.title }}

			.library__anime
				ul.library__tabs
					li.library__tab.tab(v-for='(tab, index) in tabs'
					:key='index')
						a.library__tab-item(@click='toogleTab(tab.value, tab.type)'
						:class=`{ active : $route.params.value === tab.value }`)
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

	// IMPORTS

	import firebase from 'firebase/app';
	import jikanjs from 'jikanjs/lib/jikan.js';
	import router from "@/router";

	// COMPONENT OPTIONS

	export default {
		name: 'Library',
		metaInfo: {
			title: 'Otaku Library - Library'
		},
		data() {
			return {
				buffer: [],
				tabs: [],
				typeTabs: [
					{ title: 'anime' },
					{ title: 'manga' }
				],
				animeTabs: [
					{ title: 'Plan to Watch',
						value: 'planned',
						type: 'anime' },
					{ title: 'Completed',
						value: 'completed',
						type: 'anime' },
					{ title: 'Currently Watching',
						value: 'process',
						type: 'anime' },
					{ title: 'On Hold',
						value: 'hold',
						type: 'anime' },
					{ title: 'Dropped',
						value: 'dropped',
						type: 'anime' },
				],
				mangaTabs: [
					{ title: 'Plan to Read',
						value: 'planned',
						type: 'manga' },
					{ title: 'Completed',
						value: 'completed',
						type: 'manga' },
					{ title: 'Currently Reading',
						value: 'process',
						type: 'manga' },
					{ title: 'On Hold',
						value: 'hold',
						type: 'manga'},
					{ title: 'Dropped',
						value: 'dropped',
						type: 'manga'},
				]
			}
		},
		async created() {
			this.fetchData(this.$route.params.value, this.$route.params.type);

			if (this.$route.params.type === 'anime') this.tabs = this.animeTabs;
			else if (this.$route.params.type === 'manga') this.tabs = this.mangaTabs;
		},
		methods: {
			getUid() {
				const user = firebase.auth().currentUser;
				return user ? user.uid : null;
			},
			toogleTab(status, type, event) {
				this.$router.push(`/library/${ type }/${ status }`);

				if (type === 'anime') this.animeTabBuffer = status;
				else if (type === 'manga') this.mangaTabBuffer = status;
			},
			async fetchData(status, type) {
				try {
					const res = await firebase.database().ref(`/${type}/`)
						.on('value', (data) => {
							if (data.val()[`${status}`] === undefined) return this.buffer = [];
							else {
								let obj = Object.entries(data.val()[`${status}`])
									.map((d) => ({ data_id: d[0], uid: d[1].uid}))
										.filter(d => d.uid === this.getUid())
											.map(d => (type === 'anime') ? jikanjs.loadAnime(d.data_id) : jikanjs.loadManga(d.data_id));

								Promise.all(obj).then(values => this.buffer = values);
							}
						});
				} catch (error) {
					throw new Error(error);
				}
			}
		}
	};

</script>

<style lang='sass' scoped>

	// IMPORTS

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'
	@import '../../assets/styles/modules/titles'
	@import '../../assets/styles/modules/containers'

	// LIBRARY STYLES

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
			text-transform: uppercase
			+mq(tablet-mid, max)
				flex-grow: initial
			+mq(phone-wide, max)
				width: 100%
				margin: 0 0 14px 0

		&__tab-item
			display: block
			text-align: start
			padding: 0 !important
			margin: 0 40px 0 0
			height: initial !important
			line-height: initial
			color: $color-blue-light !important
			text-align: center
			font-weight: 600
			line-height: 34px
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
