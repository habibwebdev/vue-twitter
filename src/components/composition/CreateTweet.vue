<template>
<form class="user-profile__create-tweet" @submit.prevent="createNewTweet" :class="{'--exceeded': newTweetCharacterCount > 180}">

    <label for="newTweet">
        <strong>New Tweet:</strong> ({{newTweetCharacterCount}}/180)
        <span :class="{'--exceeded-error': newTweetCharacterCount > 180}">
            | <small>Please enter less then 180 characters</small>
        </span>
    </label>
    <textarea id=" newTweet" rows="6" v-model="state.newTweetContent"></textarea>

    <div class="user-profile__create-tweet-type">
        <label for="newTweetType"><strong>Type:</strong></label>
        <select id="newTweetType" v-model="state.selectedTweetType">
            <option :value="option.value" v-for="(option, index) in state.tweetTypes" :key="index">
                {{option.name}}
            </option>
        </select>
    </div>
    <button class="tweet-submit" :disabled="newTweetCharacterCount > 180">
        Tweet!!!
    </button>
</form>
</template>

<script>
import {
    reactive,
    computed
} from 'vue'

export default {
    name: 'CreateTweet',
    props: {

    },
    setup(props, ctx) {
        const state = reactive({
            error: false,
            newTweetContent: '',
            selectedTweetType: 'instant',
            tweetTypes: [{
                    value: 'draft',
                    name: 'Draft'
                },
                {
                    value: 'instant',
                    name: 'Instant Tweet'
                }
            ]
        })

        const newTweetCharacterCount = computed(() => state.newTweetContent.length)

        function createNewTweet() {
            if (state.newTweetContent && state.selectedTweetType !== 'draft') {
                if (state.newTweetContent.length <= 180) {
                    ctx.emit('add-tweet', state.newTweetContent)
                    state.newTweetContent = ''
                    state.error = false
                } else {
                    state.error = true
                }

            }
        }

        return {
            state,
            newTweetCharacterCount,
            createNewTweet
        }
    }
}
</script>

<style lang="scss" scoped>
.user-profile__create-tweet,
.user-profile__create-tweet-type {
    display: flex;
    flex-direction: column;
    margin-top: 10px;

}

.user-profile__create-tweet {
    margin-top: 40px;

    &.--exceeded {
        color: red;
        // border-color: red;

        button {
            background-color: red;

            &:hover {
                background-color: #cccccc;
                border-color: #828282;
            }
        }
    }

    span {
        color: black;

        small {
            color: red;
            visibility: hidden;
        }

        &.--exceeded-error small {
            visibility: visible;
        }
    }

    label {
        font-size: 14px;
        margin-bottom: 4px;
    }

    textarea:focus {
        outline: none;
    }

    .user-profile__create-tweet-type {
        select {
            padding: 6px 0;

            &:focus {
                outline: none;
            }
        }

    }

    .tweet-submit {
        padding: 8px;
        background-color: #1da1f2;
        color: white;
        border: 1px solid #156a9e;
        border-radius: 3px;
        margin-top: 10px;
        cursor: pointer;
        transition: all 0.25s ease;

        &:hover {
            background-color: #1b93dc;
        }

        &:focus {
            outline: none;
        }

        &:disabled {
            // background-color: #cccccc;
            cursor: not-allowed;
        }
    }
}
</style>
