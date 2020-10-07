<template lang='pug'>

	.top-characters
		.top-characters__container
			.top-characters__title
				| Most Popular Characters

			query-content
				cards(v-for='(result, index) in getCharactersFavorite'
					:key='index'
					:query='result')

</template>

<script>

	// IMPORTS

	import { mapActions, mapGetters } from 'vuex';
	import Cards from '@/components/elements/Cards';
	import QueryContent from '@/components/elements/QueryContent';

	// COMPONENT OPTIONS

	export default {
		name: 'TopCharacters',
		components: {
			Cards,
			QueryContent
		},
		computed: {
			...mapGetters(['getCharactersFavorite'])
		},
		created() {
			this.loadCharactersFavorite();
		},
		methods: {
			...mapActions(['loadCharactersFavorite'])
		},
		metaInfo: {
			title: 'Otaku Library - Most popular characters'
		}
	}

</script>

<style lang='sass' scoped>

	// IMPORTS

	@import '../../../assets/styles/utils/vars'
	@import '../../../assets/styles/utils/mixins'
	@import '../../../assets/styles/modules/titles'
	@import '../../../assets/styles/modules/containers'

	// TOP CHARACTERS STYLES

	.top-characters
		&__container
			@extend .container-default

		&__title
			color: $color-black
			width: 100%
			font-size: 16px
			font-weight: 700
			text-transform: uppercase
			margin: 0 0 20px 0
			text-align: start
			@extend .title-bordered



</style>
