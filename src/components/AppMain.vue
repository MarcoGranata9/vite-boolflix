<script>
import { store } from '../store';
import MainCard from './MainCard.vue';
export default {
    data() {
        return {
            store,
            itLangImg: "it.png"
        };
    },
    methods: {

    },
    components: { MainCard }
}
</script>

<template>
    <main>
        <section class="movies">
            <div class="container">
                <h2 v-if="store.movieArray.length === 0 && store.serieArray.length === 0">Cerca un Film o una Serie TV!</h2>
                <h2 v-if="store.movieArray.length > 0 || store.noResultmovie">Film</h2>
                <h2 v-if="store.noResultmovie">Nessun Risultato</h2>
                <ul>
                    <li  v-for="movie in store.movieArray" :key="movie.id" v-show="movie.show">
                        <MainCard  :movieObj="movie"/>
                    </li>
                </ul>        
            </div>
        </section>

        <section class="tv-series">
            <div class="container">
                <h2 v-if="store.serieArray.length > 0 || store.noResultserie">Serie TV</h2>
                <h2 v-if="store.noResultserie">Nessun Risultato</h2>
                <ul>
                    <li v-for="serie in store.serieArray" :key="serie.id">
                        <MainCard :movieObj="serie"/>
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-color: rgb(50, 50, 50);
    overflow: auto;
    height: calc(100% - 92px);

    .container {
        width: 85%;
        max-width: 1500px;
    }

    h2 {
        color: red;
        text-align: center;
        padding: 2rem;
    }

    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        li {
            width: calc(100% / 4);
            @media screen and (max-width: 1650px) {
                width: calc(100% / 3);
            }   
        }

        
    }
}
</style>