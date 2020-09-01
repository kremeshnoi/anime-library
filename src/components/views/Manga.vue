<template lang='pug'>

	.manga
		.manga__container
			.manga__main-content
				h1.manga__title
					| {{ getMangaById.title }}
					.divider_hidden
					| {{ getMangaById.title_japanese }}
				img.manga__cover( :src='getMangaById.image_url' )
				select-collection.manga__input-field( v-if='getMangaById.type'
																  :query='getMangaById.type' )

				.manga__info.manga-info
					h2.manga-info__title
						| Info
					ul.manga-info__list
						li.manga-info__list-item
							.manga-info__list-key
								| Type:
							| &nbsp;
							.manga-info__list-value
								| {{ getMangaById.type }}
						li.manga-info__list-item
							.manga-info__list-key
								| Score:
							| &nbsp;
							span.manga-info__list-value.manga-info__list-value_decor
								| {{ getMangaById.score }}
						li.manga-info__list-item
							.manga-info__list-key
								| Status:
							| &nbsp;
							.manga-info__list-value
								| {{ getMangaById.status }}
						li.manga-info__list-item
							.manga-info__list-key
								| Genres:
							| &nbsp;
							.manga-info__list-values( v-for='(result, index_genres) in getMangaById.genres'
															  :key='index_genres' )
								| {{ result.name }}
						li.manga-info__list-item
							.manga-info__list-key
								| Volumes:
							| &nbsp;
							.manga-info__list-value( v-if='getMangaById.volumes === null' )
								| Unknown
							.manga-info__list-value( v-else )
								| {{ getMangaById.volumes }}
						li.manga-info__list-item
							.manga-info__list-key
								| Chapters:
							| &nbsp;
							.manga-info__list-value( v-if='getMangaById.chapters === null' )
								| Unknown
							.manga-info__list-value( v-else )
								| {{ getMangaById.chapters }}
						li.manga-info__list-item
							.manga-info__list-key
								| Publication:
							| &nbsp;
							.manga-info__list-values( v-for='(result, index_serializations) in getMangaById.serializations'
															  :key='index_serializations' )
								| {{ result.name }}

			.manga__sub-content
				.manga__related.anime-related
					.manga-related__title
						| Related
					.manga-related__content
						ul.manga-related__tabs.tabs( v-if='getMangaById.related' )
							li.manga-related__tab.tab( v-for='(value, name, counter) in getMangaById.related'
																:key='name' )
								a.manga-related__tab-item( :href=`'#' + counter` )
									| {{ name }}
						.manga-related__item( :id='counter'
													 v-for='(value, name, counter) in getMangaById.related'
													 :key='name' )
							table.manga-related__table.striped
								tbody.manga-related__tbody
									tr.manga-related__tr( v-for='(result, index) in value'
																 :key='index' )
										td.manga-related__td
											a.manga-related__link( @click='computeRoute(result)')
												| {{ result.name }}

			.manga__description.manga-description
				.manga-description__title
					| DESCRIPTION

				.manga-description__synopsis
					| {{ getMangaById.synopsis }}

</template>

<script>

	import { mapActions, mapGetters } from 'vuex';
	import SelectCollection from '@/components/modules/SelectCollection';

	export default {
		name: 'Manga',
		components: {
			SelectCollection
		},
		metaInfo() {
			return {
				title: `Manga / ${ this.getMangaById.title }`
			}
		},
		methods: {
			...mapActions(['loadMangaById', 'computeRoute'])
		},
		computed: {
			...mapGetters(['getMangaById'])
		},
		async created() {
			await this.loadMangaById();
			const tabs = document.querySelectorAll('.tabs');
			const instanceTabs = M.Tabs.init(tabs);
			const indicatorTooltip = document.querySelector('.indicator').style.display = 'none';
		}
	};

</script>

<style lang='sass' scoped>

	// IMPORTS

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'
	@import '../../assets/styles/modules/titles'
	@import '../../assets/styles/modules/dividers'
	@import '../../assets/styles/modules/containers'

	// MANGA

	.manga
		width: 100%

		&__container
			display: grid
			grid-gap: 20px
			grid-template-columns: 1fr 1fr
			grid-template-areas: 'main sub' 'description description'
			@extend .container-default
			+mq(tablet-mid, max)
				grid-template-columns: 1fr
				grid-template-areas: 'main' 'sub' 'description'

		&__main-content
			grid-area: main
			display: grid
			justify-content: start
			grid-template-areas: 'title title' 'cover info'
			grid-gap: 20px
			align-content: start
			+mq(phablet, max)
				grid-template-areas: 'title' 'cover' 'info'

		&__sub-content
			grid-area: sub
			display: grid
			grid-gap: 20px
			justify-content: flex-start
			grid-template-rows: min-content
			grid-template-columns: minmax(auto, 360px)

		&__description
			grid-area: description

		&__info
			grid-area: info

		&__title
			text-align: start
			font-size: 20px
			max-width: 460px
			grid-area: title

		&__cover
			grid-area: cover

		&__input-field
			margin: 0

		// MANGA RELATED

		.manga-related
			&__title
				@extend .header-title

			&__tabs
				display: flex
				flex-wrap: wrap
				overflow-x: initial
				overflow-y: initial
				height: 100%

			&__tab-item
				padding: 0 !important
				margin: 0 24px 0 0
				text-align: start
				color: $color-blue-light !important
				&.active
					background-color: initial !important
					color: $color-orange !important

			&__link
				color: $color-grey-dark
				&:hover
					text-decoration: underline

		// MANGA DESCRIPTION

		.manga-description
			text-align: start

			&__title
				@extend .header-title
				margin: 0 0 16px 0

		// MANGA INFO

		.manga-info
			text-align: start
			grid-area: info
			+flex(initial, initial, column)

			&__title
				color: $color-black
				width: 100%
				font-size: 16px
				font-weight: 700
				text-align: start
				text-transform: uppercase
				padding: 14px 0 14px 14px
				border-left: 5px solid $color-blue-light

			&__list
				margin: 20px 0 0 5px
				height: 100%
				max-width: 300px
				width: 100%
				+flex(space-between, initial, column)

			&__list-item
				margin: 6px 0
				&:last-of-type
					margin: 0

			&__list-key
				display: inline-block

			&__list-value
				display: inline-block
				&_decor
					padding: 0 6px
					border-radius: 4px
					color: $color-white-pure
					background-color: $color-yellow

			&__list-values
				margin: 0 10px 0 0
				height: auto
				transition: 0.5s
				display: inline-block
				border-bottom: 1px dashed $color-grey-light
				&:hover
					cursor: pointer
					border-bottom: 1px dashed $color-blue

</style>
