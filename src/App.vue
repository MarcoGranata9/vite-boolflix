<script>
import axios from "axios";
import {store} from "./store.js";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      store,
    }
  },
  components: {
    AppHeader,
    AppMain
  },
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

        // Chimata Generi
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

        this.store.noResultserie = false
        if (this.store.serieArray.length === 0) {
          return this.store.noResultserie = true 
        }
      })
    },
    changeGenre() {
      
    },
  },
}
</script>

<template>
  <AppHeader @searchText="searchFunction" @changedGenre="changeGenre"/>
  <AppMain/>  
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
