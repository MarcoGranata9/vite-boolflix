<script>
import { store } from '../store';
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default {
    data() {
        return {
            store,
            loading: false,
            popularMovies: []
        }
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
    created() {
        const params = {
        api_key: "4708719173a71e27c7f623cc1914df87"
        };
        this.loading = true
        axios.get(`${this.store.apiUrl}/movie/popular`, {params}).then((resp) => {
           this.popularMovies = resp.data.results
           console.log(this.popularMovies);
        })
        this.loading = false
    }
        
}
</script>

<template>
    <div v-if="loading">
        Caricando Film...
    </div>
    <div v-else class="jumbotron relative">
        <swiper
            :spaceBetween="30"
            :centeredSlides="true"
            :loop="true"
            :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
            }"
            :pagination="{
            clickable: true,
            }"
            :modules="modules"
            class="mySwiper"
        >
            <swiper-slide  v-for="movie in popularMovies">
                <img :src="`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`" alt="">
                <div class="movie-desc">
                    <h2>{{ movie.title }}</h2>
                    <p>{{ movie.release_date }}</p>
                    <p>{{movie.overview}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<style lang="scss" scoped>
.jumbotron {
    background-color: #323232;
}
img {
    width: 100%;
    max-height: 700px;
}
.relative{
    position: relative;
}
.movie-desc{
     position: absolute;
     padding: 1rem;
     border-radius: 20px;
     z-index: 1;
     top: 40%;
     left: 3%;
     width: 35%;
     background-color: rgba($color: #000000, $alpha: 0.3);
     color: white;
     h2{
        font-size: 3rem;
        margin-bottom: 1rem;
     }
     p {
        margin-bottom: 1rem;
     }
}
</style>