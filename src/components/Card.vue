<script>
export default {
    data() {
        return {
            flags: ["it", "es", "fr", "pt", "en", "de"]
        }
    },
    methods: {
        getImgUrl(lang) {
            return new URL(`../assets/img/${lang}.png`, import.meta.url).href            
        }
    },
    props: {
        movieObj: Object         
    },
    computed: {
        hasFlag() {
            return this.flags.includes(this.movieObj.original_language)
        },
        getTitle() {
            return this.movieObj.title ? this.movieObj.title : this.movieObj.name    
        },
        getOriginalTitle() {
            return this.movieObj.original_title ? this.movieObj.original_title : this.movieObj.original_name
        },
    }
}
</script>

<template>
    <h2>{{ getTitle }}</h2>
    <h3>{{ getOriginalTitle }}</h3>
    <img v-if="hasFlag" :src="getImgUrl(movieObj.original_language)" :alt="movieObj.original_language">
    <p v-else>{{ movieObj.original_language }}</p>
    <p>{{ movieObj.vote_average }}</p>
    <img v-if="movieObj.poster_path" :src="`https://image.tmdb.org/t/p/w342${movieObj.poster_path}`" alt="">
    <img  v-else class="no-img" src="https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227724992-stock-illustration-image-available-icon-flat-vector.jpg" alt="">
</template>

<style scoped lang="scss">
.no-img {
    width: 342px;
}
</style>