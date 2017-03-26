<template>
    <div id="comment" class="boxShadow">
        <comment-header></comment-header>
        <comment-body></comment-body>
    </div>
</template>

<script>

import CommentHeader from './CommentHeader.vue'
import CommentBody from './CommentBody.vue'

export default {
    components: {
        CommentHeader,
        CommentBody
    },
    data () {
        return {
        }
    }
}
</script>
<style>
    #comment {
        text-align: left;
        margin-top: 20px;
    }
</style>