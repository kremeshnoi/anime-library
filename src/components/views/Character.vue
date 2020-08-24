<template lang="pug">

	.character
		.character__container
			.character__main-content
				h1.character__title
					| {{ getCharacterById["name"] }}
					.divider_hidden
					| {{ getCharacterById["name_kanji"] }}
				img.character__cover( :src="getCharacterById['image_url']" )

				.character__info.character-info
					h2.character-info__title
						| Info
					ul.character-info__list
						li.character-info__list-item
							| &nbsp;
							.character-info__list-value
								| {{ aboutCharacterData[0] }}

</template>

<script>

	import { mapActions, mapGetters } from "vuex";

	export default {
		name: "Character",
		data:()=>{
			return {
				aboutCharacterData: []
			}
		},
		metaInfo() {
			return {
				title: `Character / ${ this.getCharacterById["name"] }`
			}
		},
		methods: {
			...mapActions(["loadCharacterById"]),
			async replaceData() {
				const data = this.getCharacterById["about"];
				const result = data.replace(/\\n/g, "");
				this.aboutCharacterData.push(result);
			}
		},
		computed: {
			...mapGetters(["getCharacterById"])
		},
		async created() {
			await this.loadCharacterById();
			await this.replaceData();
		}
	};

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars"
	@import "../../assets/styles/utils/mixins"
	@import "../../assets/styles/modules/dividers"
	@import "../../assets/styles/modules/containers"

	.character
		width: 100%

		&__container
			display: grid
			grid-gap: 20px
			grid-template-columns: 1fr
			@extend .container-default

		&__main-content
			display: grid
			justify-content: start
			grid-template-areas: "title title" "cover info"
			grid-gap: 20px

		&__title
			text-align: start
			font-size: 20px
			max-width: 460px
			grid-area: title

		&__cover
			grid-area: cover

	.character-info
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
			width: 100%
			+flex(space-between, initial, column)

		&__list-item
			margin: 6px 0
			&:last-of-type
				margin: 0

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
