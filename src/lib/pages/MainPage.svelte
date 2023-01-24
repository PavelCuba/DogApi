<script>
    import { onDestroy, onMount } from "svelte";
    import AddFavourite from "../AddFavourite.svelte";
    import { dogs, fetchDogs, favouriteDogs, currentDogImage, getDogID} from "../stores/DogsStore";
    import {Preferences} from "@capacitor/preferences";
    import SaveStorage from "../SaveStorage.svelte";

    async function click() {
        fetchDogs();
    }

    onMount(() => {
         {
            fetchDogs();
            loadDoggos();
        }
    });

    console.log(dogs);

    async function loadDoggos() {
     if(localStorage.getItem("favDogos")) {
        const doggos = JSON.parse(localStorage.getItem("favDogos"));
        favouriteDogs.set(doggos);
        }
    }
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

async function setData(key, data) {
  await Preferences.set({ key, value: JSON.stringify(data) });
}

async function getData(key) {
  const data = await Preferences.get({ key });
  return JSON.parse(data.value);
}

function addData(key, data){

}
</script>
<SaveStorage />

<div class="body">
    <h1>Explore</h1>
    <card class ="image-container" >
        {#each $dogs as dog}
            <img on:click={click} class="doggo_image" src={dog.url} alt="doggo" data-id={dog.id} />
        {/each}
    </card>
    <card class = "info-container">
        <h2> TODO:NAME </h2>
        <div class="button-container" style="display: flex; justify-content: space-between;">
            <AddFavourite dog={$dogs[0]} />
            <button class= "download">
                <img class= "download-img" src= "./Download.svg" /> 
            </button>
        </div>
    </card>
</div>



<style>
    .button-container {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
}
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
    .download
    {
        background-color:white;
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
    .info-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        margin-bottom: 70px;
    }
    .doggo_image {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 25px;
    }

    .image-container {
        display: block;
    }

    .body {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
    }
</style>

