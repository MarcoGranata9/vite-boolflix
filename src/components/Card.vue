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
</template>

<style scoped lang="scss">

</style>