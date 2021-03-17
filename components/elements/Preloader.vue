<template lang="pug">

	section.preloader
		h1.preloader__title
			| Otaku Library
		.preloader__progressbar

</template>

<script>

	export default {
		name: "Preloader"
	}

</script>

<style lang="sass">

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"

	.preloader
		width: 100vw
		height: 100vh
		position: fixed
		+flex(flex-start, center, column)
		&__title
			margin: 24% 0 0 0
		&__progressbar
			width: 300px
			height: 4px
			margin-top: 20px
			background: $color-grey-light
			&::after
				content: ""
				width: 60px
				height: 4px
				background: $color-blue-light
				display: block
				border-radius: 6px
				animation: animation 1.5s cubic-bezier(0.65, 0.05, 0.36, 1) infinite

	@keyframes animation
		0%
				transform: translateX(0)
		50%
				transform: translateX(240px)
		100%
				transform: translateX(0)

</style>