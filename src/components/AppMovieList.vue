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
    <section>
        <ul>
            <li v-for="movie in this.store.movieArray">{{ movie.title }} {{ movie.original_title }} {{ movie.original_language }} {{ movie.vote_average }}</li>
            <li>ciao</li>
        </ul>        
    </section>
</template>

<style lang="scss" scoped>

</style>