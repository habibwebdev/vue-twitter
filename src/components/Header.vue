<template>
<header>
    <nav>

        <router-link to="/">
            <div class="logo">Vue Twitter</div>
        </router-link>
        <div class="nav-user" v-if="user">
            {{user.userName}}
        </div>
    </nav>
</header>
</template>

<script>
import {
    useStore
} from 'vuex'
import {
    computed
} from 'vue'

export default {
    name: 'Header',
    setup() {
        const store = useStore()
        const user = computed(() => store.state.User.user)

        return {
            user
        }
    }
    // data() {
    //     return {
    //         user: {
    //             userName: '@AbbasAli79'
    //         }
    //     }
    // }
}
</script>

<style lang="scss">
header {

    nav {
        display: flex;
        justify-content: space-between;
        line-height: 24px;
        background-color: #1da1f2;
        padding: 20px 5%;

        .logo {
            font-size: 24px;
            color: white;
        }

        .nav-user {
            color: white;
            font-size: 14px;
        }
    }
}
</style>
