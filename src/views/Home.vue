
<script lang="ts">
import Vue from 'vue';
import Nav from '../components/nav.vue';
import Header from '../components/header.vue';
export default {
    name: 'Home',
    data() {
        return {
            title: 'Follo-Time'
        };
    },
    components: {
        Nav,
        Header
    },
    methods: {}
};
</script>

<template>
	<main id="app">
		<Header :title="title">
		</Header>
		<Nav></Nav>
	</main>
</template>


<style lang="less" scoped>
#app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fff;
}
</style>
