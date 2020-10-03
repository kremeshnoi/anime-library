<template lang='pug'>

	.input-field(v-if='this.user[0] !== null')
		select(v-model='status')
			option(v-for='(option, index) in options'
				:key='option.index'
				:value='option.value')
				span {{ option.title }}

		.btn-small(@click='submit()')
			| Add

</template>

<script>

	import { mapActions, mapGetters } from 'vuex';

	export default {
		name: 'Select',
		props: ['type', 'wholeResult'],
		data() {
			return {
				user: [],
				verb: '',
				status: 'planned',
				options: [
					{ title: `Plan to`,
						value: 'planned' },
					{ title: 'Completed',
						value: 'completed' },
					{ title: `Currently`,
						value: 'process' },
					{ title: 'On Hold',
						value: 'hold' },
					{ title: 'Dropped',
						value: 'dropped' }
				]
			}
		},
		computed: {
			...mapGetters(['getUserInfo'])
		},
		async created() {
			this.changeTitle();
			await this.getUid().then(result => this.user.push(result));
		},
		mounted() {
			const select = document.querySelectorAll('select');
			const select_instance = M.FormSelect.init(select);
		},
		methods: {
			...mapActions(['getUid']),
			submit(){
				this.$store.dispatch('addToLibrary', {
					type: this.type,
					status: this.status,
					id: this.wholeResult.mal_id,
					result: this.wholeResult
				})
			},
			changeTitle() {
				let type = this.type;
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
