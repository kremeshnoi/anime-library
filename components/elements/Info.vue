<template lang='pug'>

  .info
    h2.info__title
      | Info
    ul.info__list
      li.info__list-item
        span.info__list-key
          | Type:
        | &nbsp;
        span.info__list-value(v-if='infoData.type')
          | {{ infoData.type }}
        span.info__list-value(v-else)
          | Unknown
      li.info__list-item
        span.info__list-key
          | Score:
        | &nbsp;
        span.info__list-value.info__list-value_decor(v-if='infoData.score')
          | {{ infoData.score }}
        span.info__list-value(v-else)
          | Unknown
      li.info__list-item
        span.info__list-key
          | Status:
        | &nbsp;
        span.info__list-value(v-if='infoData.status')
          | {{ infoData.status }}
        span.info__list-value(v-else)
          | Unknown
      li.info__list-item(v-if='infoData.aired')
        span.info__list-key
          | Aired:
        | &nbsp;
        span.info__list-value(v-if='infoData.aired')
          | {{ infoData.aired.string }}
        span.info__list-value(v-else)
          | Unknown
      li.info__list-item(v-if='infoData.published')
        span.info__list-key
          | Published:
        | &nbsp;
        span.info__list-value(v-if='infoData.published')
          | {{ infoData.published.string }}
        span.info__list-value(v-else)
          | Unknown
      li.info__list-item
        span.info__list-key
          | Genres:
        | &nbsp;
        span.info__list-values(
          v-for='(genre, genreIndex) in infoData.genres',
          :key='genreIndex'
        )
          | {{ genre.name }}
      li.info__list-item(v-if='infoData.volumes')
        span.info__list-key
          | Volumes:
        | &nbsp;
        span.info__list-value(v-if='infoData.volumes')
          | {{ infoData.volumes }}
        span.info__list-value(v-else)
          | Unknown
      li.info__list-item(v-if='infoData.chapters')
        span.info__list-key
          | Chapters:
        | &nbsp;
        span.info__list-value(v-if='infoData.chapters')
          | {{ infoData.chapters }}
        span.info__list-value(v-else)
          | Unknown
      li.info__list-item(v-if='infoData.episodes')
        span.info__list-key
          | Episodes:
        | &nbsp;
        span.info__list-value(v-if='infoData.episodes')
          | {{ infoData.episodes }}
        span.info__list-value(v-else)
          | Unknown
      li.info__list-item(v-if='infoData.duration')
        span.info__list-key
          | Duration:
        | &nbsp;
        span.info__list-value(v-if='infoData.duration')
          | {{ infoData.duration }}
        span.info__list-value(v-else)
          | Unknown
      li.info__list-item(v-if='infoData.studios')
        span.info__list-key
          | Studios:
        | &nbsp;
        span.info__list-values(
          v-for='(studio, studioIndex) in infoData.studios',
          :key='studioIndex'
        )
          | {{ studio.name }}
        span.info__list-value(v-if='infoData.studios.length === 0')
          | Unknown
      li.info__list-item(v-if='infoData.serializations')
        span.info__list-key
          | Publication:
        | &nbsp;
        span.info__list-values(
          v-for='(serialization, serializationIndex) in infoData.serializations',
          :key='serializationIndex'
        )
          | {{ serialization.name }}
        span.info__list-value(v-if='infoData.serializations.length === 0')
          | Unknown
      li.info__list-item(v-if='infoData.rating')
        span.info__list-key
          | Rating:
        | &nbsp;
        span.info__list-value(v-if='infoData.rating')
          | {{ infoData.rating }}
        span.info__list-value(v-else)
          | Unknown

</template>

<script>

  export default {
    name: 'Info',
    props: ['infoData'],
  };

</script>

<style lang='sass' scoped>

	@import '~/assets/styles/utils/vars'
	@import '~/assets/styles/utils/mixins'

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
			+flex(flex-start, initial, column)
		&__list-value
			&_decor
				padding: 4px 6px 4px 6px
				border-radius: 4px
				color: $color-white-pure
				background-color: $color-yellow
		&__list-item
			margin: 8px 0
			&:last-of-type
				margin: 8px 0 0 0

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
