<template>
    <div class="list-control cb">
        <div class="right-control">
            <a v-for="(value, key) in items" @click="changeOrder(key)" :class="{active: order === key}" href="#">
                <span class="icon-check"></span>
                {{ value }}
            </a>
        </div>
    </div>
</template>
<style lang="scss">

</style>
<script>

    import _ from 'lodash'
    import * as orderTypes from '../../../store/order-types'

    export default {
		props: {
			order: {
				type: String,
				default: orderTypes.RECENTLY
			},
            expect: {
				type: String
            }
		},
        data() {

			const items = {
				[orderTypes.RECENTLY]: 'Newest',
				[orderTypes.POPULAR]: 'Hottest',
				[orderTypes.TITLE]: 'A-Z'
			};

            return {
				items: _.omit(items, this.expect)
            }
        },
		methods: {
			changeOrder(key) {
				this.$emit('changedOrder', {orderByField: key})
            }
		}
    }
</script>
