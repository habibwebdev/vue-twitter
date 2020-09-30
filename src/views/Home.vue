<template>
<div class="home">
    <h1>Home</h1>
    <div class="users-list">
        <router-link v-for="user in users" :key="user.id" :to="{name: 'UserProfile', params: {userId: user.id}}">
            {{user.userName}}
        </router-link>
    </div>
</div>
</template>

<script>
import {
    users
} from '../assets/users'
export default {
    name: 'Home',
    setup() {
        return {
            users
        }
    }
}
</script>

<style lang="scss" scoped>
.home {
    padding: 50px 5%;

    .users-list {
        display: flex;
        flex-direction: column;

        a {
            margin-bottom: 10px;
            // font-size: 20px;
            font-weight: 400;
            color: rgb(65, 65, 65);
            text-decoration: none;
        }
    }
}
</style>
