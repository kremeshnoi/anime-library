<template lang='pug'>

	.footer-categories-top-manga
		router-link.footer-categories-top-manga__title(to='/top-manga')
			| Top Manga
			.footer-categories-top-manga__icon.material-icons keyboard_arrow_right

		.footer-categories-top-manga__content(v-for='(result, index) in getMangaFavorite.slice(0, 9)'
			:key='index')

			p.footer-categories-top-manga__digit
				| {{ index + 1 }}.
			a.footer-categories-top-manga__link(@click='computeRoute(result)')
				| {{ result.title }}

</template>

<script>

	import { mapActions, mapGetters } from 'vuex';

	export default {
		name: 'FooterCategoriesTopManga',
		methods: {
			...mapActions(['loadMangaFavorite', 'computeRoute'])
		},
		computed: {
			...mapGetters(['getMangaFavorite'])
		},
		async created() {
			await this.loadMangaFavorite();
		}
	};

</script>

<style lang='sass' scoped>

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'

	.footer-categories-top-manga
		+flex(flex-start, flex-start, column)

		&__title
			color: $color-black
			font-size: 16px
			text-align: start
			padding: 0 0 8px 0
			width: 100%
			border-bottom: 1px solid rgba($color-black, 0.2)
			+flex(space-between, center, row)
			&:hover
				color: $color-orange

				.PreFooterList-icon
					color: inherit

		&__content
			margin: 8px 0 0 0
			+flex(center, flex-start, row)

		&__digit
			margin: 0 8px 0 0

		&__link
			color: $color-blue
			&:hover
				text-decoration: underline $color-blue

</style>
