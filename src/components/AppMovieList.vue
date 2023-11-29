<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        getFlag(index) {
            let language = this.store.movieArray[index].original_language;
            if (language === "it") {
                return "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/220px-Flag_of_Italy.svg.png"   
            } else {
                return language
            }
        }
    }
}
</script>

<template>
    <section>
        <ul>
            <li v-for="(movie, index) in this.store.movieArray" :key="movie.id">
                <span>{{ movie.title }}</span> 
                <span>{{ movie.original_title }}</span>
                <img :src="getFlag(index)" alt="">
                <span>{{ getFlag(index) }}</span>
                <span>{{ movie.vote_average }}</span>
            </li>
            <li>ciao</li>
        </ul>        
    </section>
</template>

<style lang="scss" scoped>
    img {
        width: 50px;
    }
</style>