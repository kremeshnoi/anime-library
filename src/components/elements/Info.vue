<template lang='pug'>

	.info
		h2.info__title
			| Info
		ul.info__list
			li.info__list-item
				.info__list-key
					| Type:
				| &nbsp;
				.info__list-value(v-if='infoData.type')
					| {{ infoData.type }}
				.info__list-value(v-else)
					| Unknown
			li.info__list-item
				.info__list-key
					| Score:
				| &nbsp;
				span.info__list-value.info__list-value_decor(v-if='infoData.score')
					| {{ infoData.score }}
				.info__list-value(v-else)
					| Unknown
			li.info__list-item
				.info__list-key
					| Status:
				| &nbsp;
				.info__list-value(v-if='infoData.status')
					| {{ infoData.status }}
				.info__list-value(v-else)
					| Unknown
			li.info__list-item(v-if='infoData.aired')
				.info__list-key
					| Aired:
				| &nbsp;
				.info__list-value(v-if='infoData.aired')
					| {{ infoData.aired.string }}
				.info__list-value(v-else)
					| Unknown
			li.manga-info__list-item(v-if='infoData.published')
				.info__list-key
					| Published:
				| &nbsp;
				.info__list-value(v-if='infoData.published')
					| {{ infoData.published.string }}
				.info__list-value(v-else)
					| Unknown
			li.info__list-item
				.info__list-key
					| Genres:
				| &nbsp;
				.info__list-values(v-for='(result, index_genres) in infoData.genres'
					:key='index_genres')
					| {{ result.name }}
			li.info__list-item(v-if='infoData.volumes')
				.info__list-key
					| Volumes:
				| &nbsp;
				.info__list-value(v-if='infoData.volumes')
					| {{ infoData.volumes }}
				.info__list-value(v-else)
					| Unknown
			li.info__list-item(v-if='infoData.chapters')
				.info__list-key
					| Chapters:
				| &nbsp;
				.info__list-value(v-if='infoData.chapters')
					| {{ infoData.chapters }}
				.info__list-value(v-else)
					| Unknown
			li.info__list-item(v-if='infoData.episodes')
				.info__list-key
					| Episodes:
				| &nbsp;
				.info__list-value(v-if='infoData.episodes')
					| {{ infoData.episodes }}
				.info__list-value(v-else)
					| Unknown
			li.info__list-item(v-if='infoData.duration')
				.info__list-key
					| Duration:
				| &nbsp;
				.info__list-value(v-if='infoData.duration')
					| {{ infoData.duration }}
				.info__list-value(v-else)
					| Unknown
			li.info__list-item(v-if='infoData.studios')
				.info__list-key
					| Studios:
				| &nbsp;
				.info__list-values(v-for='(result, index_studios) in infoData.studios'
					:key='index_studios')
					| {{ result.name }}
				.info__list-value(v-if='infoData.studios.length === 0')
					| Unknown
			li.info__list-item(v-if='infoData.serializations')
				.info__list-key
					| Publication:
				| &nbsp;
				.info__list-values(v-for='(result, index_serializations) in infoData.serializations'
					:key='index_serializations')
					| {{ result.name }}
				.info__list-value(v-if='infoData.serializations.length === 0')
					| Unknown
			li.info__list-item(v-if='infoData.rating')
				.info__list-key
					| Rating:
				| &nbsp;
				.info__list-value(v-if='infoData.rating')
					| {{ infoData.rating }}
				.info__list-value(v-else)
					| Unknown

</template>

<script>

	// COMPONENT OPTIONS

	export default {
		name: 'Info',
		props: ['infoData']
	}

</script>

<style lang='sass' scoped>

	// IMPORTS

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'

	// INFO STYLES
	
	.info
		grid-area: info
		text-align: start
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
			margin: 10px 0 0 0
			height: 100%
			max-width: 300px
			width: 100%
			+flex(space-around, initial, column)
		
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
