<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    emits: ["searchText"],
}
</script>

<template>
    <header>
        <h1>BOOLFLIX</h1>
        <label for="search">Cerca:</label>
        <input id="search" type="search" v-model.trim="store.searchText">
        <button @click="$emit('searchText')">Cerca</button>
    </header>    
</template>

<style lang="scss" scoped>

</style>