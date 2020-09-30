<template>
<div class="tweet-item" @click="favouriteTweet(tweet.id)">
    <div class="user-profile__tweet">
        <div class="tweet-item__user">
            @{{userName}}
        </div>
        <div class="tweet-item__content">
            {{tweet.content}}
        </div>
    </div>
</div>
</template>

<script>
import {
    reactive
} from 'vue'

export default {
    name: 'TweetItem',
    props: {
        userName: {
            type: String,
            required: true
        },
        tweet: {
            type: Object,
            required: true
        }
    },
    setup(props, ctx) {
        const state = reactive({})

        function favouriteTweet(id) {
            ctx.emit('favourite', id)
        }

        return {
            state,
            favouriteTweet
        }
    }
}
</script>

<style lang="scss" scoped>
.tweet-item {
    margin-bottom: 10px;
    padding: 20px;
    background-color: white;
    border-radius: 3px;
    border: 1px solid #DFE3E8;
    box-sizing: border-box;
    cursor: pointer;
    transition: transform 0.25s ease;

    .tweet-item__user {
        font-weight: bold;
        font-size: 14px;
        margin-bottom: 10px;
    }
}

.tweet-item:hover {
    transform: scale(1.1, 1.1)
}
</style>
