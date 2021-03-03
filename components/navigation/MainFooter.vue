<template lang='pug'>

  footer.main-footer
    footer-categories
    footer-main-info
    //- footer-note

</template>

<script>

  import FooterNote from '@/components/blocks/footer/FooterNote'
  import FooterMainInfo from '@/components/blocks/footer/FooterMainInfo'
  import FooterCategories from '@/components/blocks/footer/FooterCategories'


  export default {
    name: 'MainFooter',
    components: {
      FooterNote,
      FooterMainInfo,
      FooterCategories
    }
  }

</script>

<style lang='sass' scoped>

	@import '~/assets/styles/utils/vars'
	@import '~/assets/styles/utils/mixins'

	.main-footer
		width: 100%

</style>
