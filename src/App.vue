<template>
<div id="app">
    <Header />
    <router-view />
</div>
</template>

<script>
import Header from './components/Header'

export default {
    name: 'App',
    components: {
        Header
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600&display=swap');

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    min-height: 100vh;
    background-color: #F3F5FA;
}
</style>
