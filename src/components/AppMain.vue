<script>
import { store } from '../store';
import Card from './Card.vue';
export default {
    data() {
        return {
            store,
            itLangImg: "it.png"
        };
    },
    methods: {

    },
    components: { Card }
}
</script>

<template>
    <section>
        <h2>Film</h2>
        <ul>
            <li v-for="movie in store.movieArray" :key="movie.id">
                <Card :movieObj="movie"/>
            </li>
            <li>ciao</li>
        </ul>        
    </section>
    <section>
        <h2>Serie TV</h2>
        <ul>
            <li v-for="serie in store.serieArray" :key="serie.id">
                <Card :movieObj="serie"/>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
</style>