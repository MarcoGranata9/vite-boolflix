<script>
import axios from "axios";
import {store} from "./store.js";
import AppHeader from "./components/AppHeader.vue";
import AppMovieList from "./components/AppMovieList.vue";

export default {
  data() {
    return {
      store,
    }
  },
  components: {
    AppHeader,
    AppMovieList
  },
  methods: {
    searchFunction() {
      const params = {
        query: this.store.searchText,
        api_key: "4708719173a71e27c7f623cc1914df87"
      };
      axios.get(`${this.store.apiUrl}/search/movie`, {params}).then((resp) =>{
        this.store.movieArray = resp.data.results
        console.log(this.store.movieArray);
      })
    }
  },
}
</script>

<template>
  <AppHeader @searchText="searchFunction"/>
  <AppMovieList/>  
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
