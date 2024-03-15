<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    emits: ['searchText', 'changedGenre'],
}
</script>

<template>
    <header>
        <div class="container">
            <div class="wrapper">
                <div class="logo">
                    <h1><a href=".">BOOLFLIX</a></h1>
                </div>
                <div class="input">
                    <div class="genre">
                        <p>Generi Film:</p>
                        <select name="genre" id="genre" v-model="store.selectedGenre" @change="$emit('changedGenre')">
                            <option value="none">Mostra tutti</option>
                            <option v-for="genre in store.movieArrayGenre" :value="genre.id">{{ genre.name }}</option>
                        </select>
                    </div>
                    <div class="search">
                        <label for="search">Cerca un film/serieTV</label>
                        <input @keyup.enter="$emit('searchText')" placeholder="Cerca un film o una serie" id="search" type="search" v-model.trim="store.searchText">
                        <button @click="$emit('searchText')" ><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </header>    
</template>

<style lang="scss" scoped>
header {
    background-color: black;
    height: 92px;
    .wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;

        h1 {
            a {
                text-decoration: none; 
                color: red;
            }
        }

        label {
            display: none;
        }

        input {
            border-top-left-radius: 1rem;
            border-bottom-left-radius: 1rem;
            border: none;
            padding: 0.5rem;
            background-color: gray;
            color: white;
            &::placeholder {
                color: white;
                opacity: 60%;
            }
            &:focus-visible{
                outline: none;
            }
        }

        button {
            border-top-right-radius: 1rem;
            border-bottom-right-radius: 1rem;
            background-color: rgb(189, 0, 0);
            color: white;
            padding: 0.5rem 1rem;
            border: none;
            &:hover {
                opacity: 70%;
                cursor: pointer;
            }
        }
        .input {
            display: flex;
            align-items: center;

            .genre{
                display: flex;
                align-items: center;
            }
            p {
                color: white;
                margin-right: 1rem;   
            }
            select {
                padding: 0.5rem;
                border-radius: 1rem;
                border: none;
                margin-right: 1rem;
                background-color: gray;
                color: white;
                &:hover {
                    opacity: 70%;
                    cursor: pointer;
                }
                &:focus-visible{
                outline: none;
                }
            }
        }
    }
}
</style>