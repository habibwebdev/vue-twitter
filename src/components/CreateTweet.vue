<template>
<form class="user-profile__create-tweet" @submit.prevent="createNewTweet" :class="{'--exceeded': newTweetCharacterCount > 180}">
    <label for="newTweet"><strong>New Tweet:</strong> ({{newTweetCharacterCount}}/180)</label>
    <textarea id="newTweet" rows="6" v-model="newTweetContent"></textarea>

    <div class="user-profile__create-tweet-type">
        <label for="newTweetType"><strong>Type:</strong></label>
        <select id="newTweetType" v-model="selectedTweetType">
            <option :value="option.value" v-for="(option, index) in tweetTypes" :key="index">
                {{option.name}}
            </option>
        </select>
    </div>
    <button class="tweet-submit">
        Tweet!!!
    </button>
</form>
</template>

<script>
export default {
    name: 'CreateTweet',
    data() {
        return {
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
        }
    },
    computed: {
        newTweetCharacterCount() {
            return this.newTweetContent.length
        }
    },
    methods: {
        createNewTweet() {
            if (this.newTweetContent && this.selectedTweetType !== 'draft') {
                this.$emit('add-tweet', this.newTweetContent)
                this.newTweetContent = ''
            }
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
    }
}
</style>
