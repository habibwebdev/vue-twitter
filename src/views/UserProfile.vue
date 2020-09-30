<template>
<div class="user-profile">
    <div class="user-profile__user-panel">
        <div class="user-profile_card">
            <h1 class="user-profile__username">@{{state.user.userName}}</h1>
            <!-- <h2>UserId: {{userId}}</h2> -->

            <div class="user-profile_card-bottom">
                <div class="user-profile__follower-count">
                    <strong>Followers: </strong> {{state.followers}}
                </div>
                <div class="user-profile__admin" v-if="state.user.isAdmin">
                    Admin
                </div>
            </div>
        </div>

        <CreateTweet @add-tweet="addTweet" />
    </div>
    <div class="user-profile__tweets-wrapper">
        <TweetItem v-for="tweet in state.user.tweets" :key="tweet.id" :userName="state.user.userName" :tweet="tweet" @favourite="toggleFavourite" />
    </div>
</div>
</template>

<script>
import {
    reactive,
    computed,
    onMounted,
    watch,
} from 'vue'
import {
    useRoute
} from 'vue-router'
import {
    users
} from '../assets/users'
import TweetItem from '../components/composition/TweetItem'
import CreateTweet from '../components/composition/CreateTweet'

export default {
    name: 'UserProfile',
    components: {
        TweetItem,
        CreateTweet
    },

    setup() {
        const route = useRoute()
        const userId = computed(() => route.params.userId)

        const state = reactive({
            followers: 0,
            user: users[userId.value - 1] || users[0]
            // user: {
            //     id: 1,
            //     userName: 'AbbasAli1979',
            //     firstName: 'Abbas',
            //     lastName: 'Ali',
            //     email: 'abbasali211@gmail.com',
            //     isAdmin: true,
            //     tweets: [{
            //             id: 1,
            //             content: 'Vue Twitter is amazing!'
            //         },
            //         {
            //             id: 2,
            //             content: 'Dont forget to subscribe to the Vue Twitter.'
            //         }
            //     ]
            // }
        })

        const fullName = computed(() => `${state.user.firstName} ${state.user.lastName}`)

        function toggleFavourite(id) {
            console.log(`Favourite Tweet #${id}`)
        }

        function addTweet(tweet) {
            console.log(tweet)
            state.user.tweets.unshift({
                id: state.user.tweets.length + 1,
                content: tweet
            })
        }

        function followersInc() {
            state.followers++
        }

        watch(
            () => state.followers,
            (followers, old) => {
                console.log(followers, old)
            }
        )

        onMounted(() => {
            followersInc()
        })

        return {
            state,
            fullName,
            toggleFavourite,
            addTweet,
            followersInc,
            userId
        }

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
