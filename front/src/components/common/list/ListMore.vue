<template>
    <a href="#"
       @click="$emit('listMore', offset + size)"
       class="list-more"
       :class="{ active: offset + size < listTotalCount }"
    >More</a>
</template>
<style lang="scss">
    @import '../../../scss/variables';
    #wrap .list-more.white {
        padding: 17px 0;
        background-color: white;
        color: $color-blue;
        margin: 0;
        &.active {
            display: block;
        }
        &:hover {
            background-color: white;
        }
    }
</style>
<script>
    export default {
    	props: {
			listTotalCount: {
				type: Number
            },
			offset: {
				type: Number
            },
            size: {
				type: Number
            }
        },
        data() {

            return {

            }
        },
        methods: {
    		loadList(){

            }
        }
    }
</script>
