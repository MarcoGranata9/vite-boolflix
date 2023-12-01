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
        },
        handleVote() {
           const roundedVote = Math.round(this.movieObj.vote_average);
           const vote = roundedVote / 2;
           return Math.floor(vote)
        },
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
    <div class="card">
        <div class="card-data">
            <!-- Titles -->
            <p><span>Titolo:</span> {{ getTitle }}</p>
            <p><span>Titolo originale:</span> {{ getOriginalTitle }}</p>
            <!-- Language -->
            <div class="lang">
                <span >Lingua:</span>
                <img  v-if="hasFlag" :src="getImgUrl(movieObj.original_language)" :alt="movieObj.original_language">
                <p v-else>{{ movieObj.original_language }}</p>
            </div>
            <!-- Rating -->
            <p>
                <span>Voto:</span>

                <!-- Soluzione non ottimizzata-->
                <!-- <i :class="handleVote() >= 1 ? 'fa-solid' : 'fa-regular'" class="fa-star"></i>
                <i :class="handleVote() >= 2 ? 'fa-solid' : 'fa-regular'" class="fa-star"></i>
                <i :class="handleVote() >= 3 ? 'fa-solid' : 'fa-regular'" class="fa-star"></i>
                <i :class="handleVote() >= 4 ? 'fa-solid' : 'fa-regular'" class="fa-star"></i>
                <i :class="handleVote() >= 5 ? 'fa-solid' : 'fa-regular'" class="fa-star"></i> -->
                
                <!-- Soluzione ottimizzata -->
                <i v-for="num in 5" :class="num <= handleVote() ? 'fa-solid' : 'fa-regular'" class="fa-star"></i>
            </p>
        </div>
        <!-- Movie Img -->
        <div class="card-img">
            <img class="poster" v-if="movieObj.poster_path" :src="`https://image.tmdb.org/t/p/w342${movieObj.poster_path}`" alt="">
            <img class="poster" v-else src="https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227724992-stock-illustration-image-available-icon-flat-vector.jpg" alt="">   
        </div>
    </div>
    
</template>

<style scoped lang="scss">
.poster {
    height: 500px;
    width: 342px;
}

span {
    font-weight: bold;
}

.card {
    position: relative;
    .card-data{
        display: none;
        position: absolute;
        top: 0px;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        padding: 1rem;
        height: 500px;
        width: 342px;
        background-color: rgba($color: #000000, $alpha: 0.7);
        text-align: center;
        line-height: 2rem;

        .lang{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        i {
            color: gold;
        }
    }
    &:hover .card-data {
        display: block;
    }

    .card-img {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

</style>