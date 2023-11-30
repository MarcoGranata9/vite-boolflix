import {reactive} from "vue";

export const store = reactive({
    movieArray: [],
    serieArray: [],
    movieActors: [],
    apiUrl: "https://api.themoviedb.org/3",
    searchText: "",
    noResultmovie: false,
    noResultserie: false,
})