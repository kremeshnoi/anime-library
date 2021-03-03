<template lang="pug">

	.manga-Characters
		.manga-characters__wrapper
			.manga-characters__title
				| Characters

			.manga-characters__cards-container(v-if="charactersData && charactersData.length")
				cards.manga-characters__card(
					:key="dataIndex"
					:resultItem="data"
					v-for="(data, dataIndex) in charactersData.slice(0, 2)")

				a.manga-characters__link(
					@click="computeRoute({ resultItem })"
					@click.middle="computeRoute({ resultItem, clickType })")
					| More

			h4.manga-characters__disaster(v-else)
				| Not found

</template>

<script>

	import { mapActions } from "vuex"
	import Cards from "@/components/elements/Cards"
	import SwiperCarousel from "@/components/elements/SwiperCarousel"
	import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper"

	export default {
		name: "Characters",
		props: ["charactersData"],
		components: {
			Cards,
			SwiperCarousel,
			Swiper,
			SwiperSlide
		},
		directives: {
			swiper: directive
		},
		methods: {
			...mapActions({
				computeRoute: "computeRoute"
			})
		}
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"
	@import "~/assets/styles/modules/titles"

	.manga-characters
		&__title
			@extend .title-default

		&__wrapper
			display: grid
			grid-gap: 20px

		&__disaster
			font-size: 30px
			text-align: start

		&__cards-container
			display: grid
			grid-gap: 20px
			position: relative
			grid-template-columns: 1fr 1fr

		&__link
			right: 0
			width: auto
			bottom: -30px
			@extend .title-cut
			position: absolute
			color: $color-blue-light
			+mq(phone-wide, max)
				max-width: 250px
			&:hover
				text-decoration: underline

</style>
