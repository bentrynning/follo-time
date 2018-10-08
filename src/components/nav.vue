<template>
    <nav class="nav__container">
        <div class="nav__links">
            <button v-for="link in links" :key="link.name" class="nav__button">{{link.name}}</button>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'nav',
    data() {
        return {
            links: [{ name: 'Item 1' }, { name: 'Item 2' }, { name: 'Item 3' }]
        };
    }
};
</script>

<style lang="less" scoped>
@import '../style/color.less';

.nav {
    &__container {
        width: 80px;
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: @base-blue-dark;
    }
    &__links {
        display: grid;
    }
    &__button {
        appearance: none;
        border: none;
        color: @white;
        background-color: @base-blue-dark-light;
        padding: 15px;
    }
}
</style>

