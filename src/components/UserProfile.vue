<template>
<div class="user-profile">
    <div class="user-profile__user-panel">
        <div class="user-profile_card">
            <h1 class="user-profile__username">@{{user.userName}}</h1>

            <div class="user-profile_card-bottom">
                <div class="user-profile__follower-count">
                    <strong>Followers: </strong> {{followers}}
                </div>
                <div class="user-profile__admin" v-if="user.isAdmin">
                    Admin
                </div>
            </div>
        </div>

        <CreateTweet @add-tweet="addTweet" />
    </div>
    <div class="user-profile__tweets-wrapper">
        <TweetItem v-for="tweet in user.tweets" :key="tweet.id" :userName="user.userName" :tweet="tweet" @favourite="toggleFavourite" />
    </div>
</div>
</template>

<script>
import TweetItem from './TweetItem'
import CreateTweet from './composition/CreateTweet'

export default {
    name: 'UserProfile',
    components: {
        TweetItem,
        CreateTweet
    },
    data() {
        return {
            followers: 0,
            user: {
                id: 1,
                userName: 'AbbasAli1979',
                firstName: 'Abbas',
                lastName: 'Ali',
                email: 'abbasali211@gmail.com',
                isAdmin: true,
                tweets: [{
                        id: 1,
                        content: 'Vue Twitter is amazing!'
                    },
                    {
                        id: 2,
                        content: 'Dont forget to subscribe to the Vue Twitter.'
                    }
                ]
            }
        }
    },
    watch: {
        followers(newFollowersCount, oldFollowersCount) {
            if (oldFollowersCount < newFollowersCount) {
                console.log(`${this.user.userName} has gained a follower!`)
            }
        }
    },
    computed: {
        fullName() {
            return `${this.user.firstName} ${this.user.lastName}`
        }

    },
    methods: {
        followUser() {
            this.followers++
        },
        toggleFavourite(id) {
            console.log(`Favourited Tweet #${id}`)
        },
        addTweet(tweet) {
            console.log(tweet)
            this.user.tweets.unshift({
                id: this.user.tweets.length + 1,
                content: tweet
            })
        }

    },
    mounted() {
        this.followUser()
    }
}
</script>

<style lang="scss" scoped>
.user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    /* width: 100%; */
    padding: 50px 5%;
    align-items: start;

    .user-profile__user-panel {
        display: flex;
        flex-direction: column;
        margin-right: 50px;

        h1 {
            margin: 0 0 30px 0;
            /* font-size: 26px; */
            font-weight: 600;
        }

        .user-profile_card {
            padding: 20px;
            background-color: white;
            border-radius: 3px;
            border: 1px solid #DFE3E8;
        }

        .user-profile_card-bottom {
            display: flex;
            justify-content: space-between;
            align-content: center;

            strong {
                line-height: 24px;
            }

            .user-profile__admin {
                background-color: #1da1f2;
                color: white;
                border-radius: 2px;
                margin: 0;
                padding: 3px 10px;
                /* margin: 4px 0; */
                font-weight: bold;
            }
        }

    }

    .user-profile__tweets-wrapper {
        display: grid;
        grid-gap: 10px;
    }

}
</style>
