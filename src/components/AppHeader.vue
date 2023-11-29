<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <header>
        <h1>BOOLFLIX</h1>
        <input type="text" v-model.trim="store.searchText">
        <button @click="$emit('searchText')">Cerca</button>
    </header>    
</template>

<style lang="scss" scoped>

</style>