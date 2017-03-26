<template>
    <div class="comment-header">
        <div class="comment-total-count">Comments {{ listTotalCount | number }}</div>
        <comment-input></comment-input>
    </div>
</template>
<script>
    import CommentInput from './CommentInput.vue'
    import { mapGetters } from 'vuex'

    export default {
        components: {
          CommentInput
        },
        computed: {
            ...mapGetters('comment', [
            	'listTotalCount'
            ])
        },
        data(){

            return {

            }
        }
    }
</script>
<style lang="scss">
    @import '../../../scss/variables';

    .comment-header {
        padding: 32px;
        background: white;
        margin-bottom: 1px;
        .comment-total-count {
            font-weight: 400;
            font-size: 15px;
            color: $color-title;
            margin-bottom: 24px;
        }
    }
</style>