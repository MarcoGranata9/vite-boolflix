<script>
import axios from "axios";
import {store} from "./store.js";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppJumbo from "./components/AppJumbo.vue";

export default {
  data() {
    return {
      store,
    }
  },
  components: {AppHeader,AppMain,AppJumbo},
  methods: {
    searchFunction() {

      const params = {
        query: this.store.searchText,
        api_key: "4708719173a71e27c7f623cc1914df87"
      };
      // Chiamata Film
      axios.get(`${this.store.apiUrl}/search/movie`, {params}).then((resp) =>{
        this.store.movieArray = resp.data.results
        
        // Chiamata Attori
        for (let i = 0; i < this.store.movieArray.length; i++) {
          axios.get(`${this.store.apiUrl}/movie/${this.store.movieArray[i].id}/credits`, {params}).then((resp) => {
            const castArray = resp.data.cast.slice(0, 5)
            this.store.movieArray[i].cast = castArray
          })       
        }      
        // Reset Generi
        this.store.movieArray.forEach(obj => {
          obj.show = true
        });

        // Chimata Generi film
        axios.get(`${this.store.apiUrl}/genre/movie/list`, {params}).then((resp)=> {
          this.store.movieArrayGenre = resp.data.genres      
        })
        
        this.store.noResultmovie = false

        if (this.store.movieArray.length === 0) {
          return this.store.noResultmovie = true 
        }
      })
      // Chiamata Serie
      axios.get(`${this.store.apiUrl}/search/tv`, {params}).then((resp) => {
        this.store.serieArray = resp.data.results

        // Chiamata Attori
        for (let i = 0; i < this.store.serieArray.length; i++) {
          axios.get(`${this.store.apiUrl}/movie/${this.store.serieArray[i].id}/credits`, {params}).then((resp) => {
            if (resp.data.success === false) {
              this.store.serieArray[i].cast = ["Nessun Risultato"]
            } else {
              const castArray = resp.data.cast.slice(0, 5)
              this.store.serieArray[i].cast = castArray
            }
          })       
        }

        // Reset Generi
          this.store.serieArray.forEach(obj => {
          obj.show = true
        });

        // Chimata Generi film
        axios.get(`${this.store.apiUrl}/genre/tv/list`, {params}).then((resp)=> {
          this.store.serieArrayGenre = resp.data.genres      
        })

        this.store.noResultserie = false
        if (this.store.serieArray.length === 0) {
          return this.store.noResultserie = true 
        }
      })
    },
    changeGenre() {
      for (let i = 0; i < this.store.movieArray.length; i++) {
          if (this.store.movieArray[i].genre_ids.includes(this.store.selectedGenre)) {
            this.store.movieArray[i].show = true
          } else if (this.store.selectedGenre === "none") {
            this.store.movieArray[i].show = true
          } else {
            this.store.movieArray[i].show = false
          }
        }
      },
      changeSerieGenre() {
        console.log('ciao');
      for (let i = 0; i < this.store.serieArray.length; i++) {
          if (this.store.serieArray[i].genre_ids.includes(this.store.selectedSerieGenre)) {
            this.store.serieArray[i].show = true
          } else if (this.store.selectedSerieGenre === "none") {
            this.store.serieArray[i].show = true
          } else {
            this.store.serieArray[i].show = false
          }
        }
      },
  },
}
</script>

<template>
  <AppHeader @searchText="searchFunction" @changedGenre="changeGenre" @changeSerieGenre="changeSerieGenre" />
  <AppJumbo/>
  <AppMain/>
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
