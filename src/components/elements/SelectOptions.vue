<template lang='pug'>

	.input-field(v-if='this.user[0] !== null')
		select(v-model='payload.status')
			option(v-for='(option, index) in options'
				:key='option.index'
				:value='option.value')
				span {{ option.title }}

		.btn-small(@click='addToLibrary(payload)')
			| Add

</template>

<script>

	// IMPORTS

	import { mapActions, mapGetters } from 'vuex';

	// COMPONENT OPTIONS

	export default {
		name: 'Select',
		props: ['type', 'wholeResult'],
		data() {
			return {
				user: [],
				payload: {
					type: this.type,
					status: 'planned',
					id: this.wholeResult.mal_id,
					result: this.wholeResult
				}
			}
		},
		computed: {
			...mapGetters(['getUserInfo']),
			options() {
				let options = [
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
				];
				let verb = '';
				let type = this.type;
				if (type === 'Manga') {
					verb = 'Read';
				} else {
					verb = 'Watch';
				}

				for(let i = 0;options.length > i; i++) {
					if(options[i].value === 'planned') {
						options[i].title += ` ${ verb }`
					} if(options[i].value === 'process') {
						options[i].title += ` ${ verb + 'ing'}`
					}
				}

				return options
			}
		},
		async created() {
			await this.getUid().then(result => this.user.push(result));
		},
		mounted() {
			const select = document.querySelectorAll('select');
			const select_instance = M.FormSelect.init(select);
		},
		methods: {
			...mapActions(['getUid', 'addToLibrary'])
		}
	}

</script>

<style lang='sass' scoped>

	// IMPORTS

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'

	// SELECT STYLES

	.input-field
		+flex(center, initial, column)
		width: 100%

	.btn-small
		text-transform: lowercase
		align-self: flex-start
		background-color: $color-blue-light

</style>
