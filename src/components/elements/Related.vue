<template lang='pug'>

	.related
		.related__title
			| Related
		.related__content
			ul.related__tabs.tabs(v-if='relatedData')
				li.related__tab.tab(v-for='(value, name, counter) in relatedData'
					:key='name')
					a.related__tab-item(:href=`'#' + counter`)
						| {{ name }}
			.related__item(:id='counter'
				v-for='(value, name, counter) in relatedData'
				:key='name')
				table.related__table.striped
					tbody.related__tbody
						tr.related__tr(v-for='(result, index) in value.slice(0, 1)'
							:key='index')
							a.related__link.related__link_more.modal-trigger(href='#related'
								@click='transferData()'
								v-if='value.length >= 2')
								| More
							td.related__td
								a.related__link(@click='computeRoute(result)')
									| {{ result.name }}

			h4.related__disaster(v-if='relatedLength === 0')
				| Not found (￣︿￣)

		#related.related-modal.modal
			.related-modal__content.modal-content
				.related__item(v-for='(value, name) in buffer'
					:key='name')
					table.related__table.striped
						tbody.related__tbody
							tr.related__tr(v-for='(result, index) in value'
								:key='index')
								td.related__td
									a.related__link.related__link_modal.modal-close(@click='computeRoute(result)')
										| {{ result.name }}

</template>

<script>

	// IMPORTS

	import { mapActions } from "vuex";

	// COMPONENT OPTIONS

	export default {
		name: 'Related',
		props: ['relatedData'],
		data:()=> {
			return  {
				buffer: []
			}
		},
		computed: {
			relatedLength() {
				if(typeof this.relatedData === 'object') {
					const length = Object.keys(this.relatedData).length;
					return length
				}
			}
		},
		methods: {
			...mapActions(['computeRoute']),
			transferData() {
				let related_item = document.querySelectorAll('.related__tab-item')
				related_item.forEach(function(item) {
					if(item.classList.contains('active')) {
						related_item = item
					}
				});

				let obj = Object.values(this.relatedData)

				var size = 0, key;
				for (key in this.relatedData) {
					if(this.relatedData.hasOwnProperty(key)) size++;
					if(key === related_item.text) {
						this.buffer.push(this.relatedData[key])
					}
				}
			}
		}
	}

</script>

<style lang='sass' scoped>

	// IMPORTS

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'
	@import '../../assets/styles/modules/titles'

	// RELATED STYLES

	.related
		display: grid
		justify-content: start
		grid-gap: 20px
		grid-template-rows: 50px auto
		grid-template-columns: 100%
		text-align: start

		&__disaster
			text-align: start
			font-size: 30px

		&__title
			display: flex
			align-items: center
			@extend .title-default

		&__tr
			display: block
			position: relative

		&__tabs
			display: flex
			flex-wrap: wrap
			overflow-x: initial
			overflow-y: initial
			height: 100%

		&__tab
			height: initial !important

		&__tab-item
			padding: 0 !important
			margin: 0 24px 14px 0
			text-align: start
			height: initial !important
			line-height: initial
			color: $color-blue-light !important
			&:focus
				background-color: initial !important
			&.active
				background-color: initial !important
				color: $color-orange !important

		&__link
			@extend .title-cut
			color: $color-grey-dark
			+mq(phone-wide, max)
				max-width: 250px
			&:hover
				text-decoration: underline
			&_more
				position: absolute
				color: $color-blue-light
				right: 0
				width: auto
				bottom: -30px
			&_modal
				max-width: initial
				text-overflow: initial

</style>
