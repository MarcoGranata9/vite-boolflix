<script>
import axios from "axios";
import {store} from "./store.js";
import AppHeader from "./components/AppHeader.vue";

export default {
  data() {
    return {
      store,
    }
  },
  components: {
    AppHeader,
  },
  methods: {
    searchFunction() {
      
    }
  },
}
</script>

<template>
  <AppHeader @searchText="searchFunction"/>  
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
