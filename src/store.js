import {reactive} from "vue";

export const store = reactive({
    movieArray: [],
    apiUrl: "https://api.themoviedb.org/3/search",
    searchText: "",
})