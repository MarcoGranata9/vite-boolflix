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
      this.store.noResult = false

      const params = {
        query: this.store.searchText,
        api_key: "4708719173a71e27c7f623cc1914df87"
      };
      axios.get(`${this.store.apiUrl}/search/movie`, {params}).then((resp) =>{
        this.store.movieArray = resp.data.results
        this.store.noResultmovie = false
        if (this.store.movieArray.length === 0) {
        return this.store.noResultmovie = true 
        }
      })
      axios.get(`${this.store.apiUrl}/search/tv`, {params}).then((resp) => {
        this.store.serieArray = resp.data.results
        this.store.noResultserie = false
        if (this.store.serieArray.length === 0) {
        return this.store.noResultserie = true 
        }
      })
    }
  },
}
</script>

<template>
  <AppHeader @searchText="searchFunction"/>
  <AppMain/>  
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
