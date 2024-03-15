import {reactive} from "vue";

export const store = reactive({
    movieArray: [],
    serieArray: [],
    movieArrayGenre: [],
    serieArrayGenre: [],
    apiUrl: "https://api.themoviedb.org/3",
    searchText: "",
    noResultmovie: false,
    noResultserie: false,
    selectedGenre: 0,
    selectedSerieGenre: 0,
})