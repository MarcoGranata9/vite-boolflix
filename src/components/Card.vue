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
      
    }
}
</script>

<template>
    <h2>{{ movieObj.title }}</h2>
    <h3>{{ movieObj.original_title }}</h3>
    <img v-if="flags.includes(movieObj.original_language)" :src="getImgUrl(movieObj.original_language)" :alt="movieObj.original_language">
    <p v-else>{{ movieObj.original_language }}</p>
    <p>{{ movieObj.vote_average }}</p>
</template>

<style scoped lang="scss">

</style>