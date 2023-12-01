<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    emits: ["searchText"],
}
</script>

<template>
    <header>
        <div class="container">
            <div class="wrapper">
                <div class="logo">
                    <h1>BOOLFLIX</h1>
                </div>
                <div class="search">
                    <label for="search">Cerca un film/serieTV</label>
                    <input @keyup.enter="$emit('searchText')" id="search" type="search" v-model.trim="store.searchText">
                    <button @click="$emit('searchText')" ><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
        </div>
    </header>    
</template>

<style lang="scss" scoped>
header {
    background-color: black;
    height: 80px;
    .wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;

        h1 {
            color: red;
        }

        label {
            display: none;
        }

        input {
            padding: 5px;
            &:focus-visible{
                outline: none;
            }
        }

        button {
            background-color: rgb(189, 0, 0);
            color: white;
            border-radius: 1rem;
            padding: 0.5rem 1.5rem;
            border: none;
            margin-left: 1rem;
            &:hover {
                opacity: 70%;
                cursor: pointer;
            }
        }
    }
}
</style>