<script>
    import {favouriteDogs, fetchDogs} from './stores/DogsStore.js';


    export let dog;

    async function saveFavourite() {
        if ($favouriteDogs.find(e => e.id === dog.id)) {
    
            return;
        }

        const url = "https://api.thedogapi.com/v1/images/" + dog.id;  
        const res = await fetch(url);
        const data = await res.json();
        const dogInfo = {
            weight: data.breeds[0].weight.metric,
            name: data.breeds[0].name,
            temperament: data.breeds[0].temperament,
            life_span: data.breeds[0].life_span,
        }

        /* new dog for save */
        favouriteDogs.update(dogs => [...dogs, {...dog, ...dogInfo}]);
        localStorage.setItem("favDogos", JSON.stringify($favouriteDogs));
    }
</script>

<button class="favorite" on:click={saveFavourite}>
    <img class= "favorite-img" src= "./Like.svg" /> 
</button>

<style>
    .favorite {
        background-color: #F9B5A5;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        border-radius: 50%; /* sets the border radius to half the width and height of the button */
        width: 20%;
        height: 20%;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
