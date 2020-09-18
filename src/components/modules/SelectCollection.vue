<template lang='pug'>

	.input-field(v-if='this.user[0] !== null')
		select
			option(v-for='option in options'
				:key='option.id')
				| {{ option.title }}

		.btn-small
			| Add

</template>

<script>

import { mapActions, mapGetters } from 'vuex';

	export default {
		name: 'Select',
		props: ['query'],
		data() {
			return {
				user: [],
				verb: '',
				options: [
					{ title: `Plan to`,
						value: 'planned' },
					{ title: 'Completed',
						value: 'completed' },
					{ title: `Currently`,
						value: 'in-process' },
					{ title: 'On Hold',
						value: 'on-hold' },
					{ title: 'Dropped',
						value: 'dropped' }
				]
			}
		},
		computed: {
			...mapGetters(['getUserInfo'])
		},
		methods: {
			...mapActions(['getUid']),
			changeTitle() {
				let type = this.query;
				if (type === 'Manga') {
					this.verb = 'Read';
				} else {
					this.verb = 'Watch';
				}

				for(let i = 0; this.options.length > i; i++) {
					if(this.options[i].value === 'planned') {
						this.options[i].title += ` ${ this.verb }`
					} if(this.options[i].value === 'in-process') {
						this.options[i].title += ` ${ this.verb + 'ing'}`
					}
				}
			}
		},
		created() {
			this.changeTitle();
			this.getUid().then(result => this.user.push(result));
		},
		mounted() {
			const select = document.querySelectorAll('select');
			const select_instance = M.FormSelect.init(select);
		}
	}

</script>

<style lang='sass' scoped>

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'

	.input-field
		+flex(center, initial, column)
		width: 100%

	.btn-small
		text-transform: lowercase
		align-self: flex-start
		background-color: $color-blue-light

</style>
