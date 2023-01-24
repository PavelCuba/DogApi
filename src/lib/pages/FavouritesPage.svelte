<script>
    import { onDestroy, onMount } from "svelte";
    import AddFavourite from "../AddFavourite.svelte";
    import { dogs, fetchDogs, favouriteDogs, getDogID} from "../stores/DogsStore";

    let dogInfo;
    function deleteDoggo(dog) {
        favouriteDogs.update(dogs => dogs.filter(d => d.id !== dog.id));
        localStorage.setItem("favDogos", JSON.stringify($favouriteDogs));
    }
    async function saveDoggo(dog) {

}

</script>
 


<!-- <div class="body">
    <h2>Saved dogs</h2>
    {#each $favouriteDogs as dg}
        <div class="saved-doggo-wrapper">
            <img class="saved-doggo-img" src={dg.url} alt="doggo" />
            <button class="trash-btn" on:click={() => deleteDoggo(dg)}>
                <img class="trash-img" src="./trash-1.svg" alt= "trash-icon"/>
            </button>
        </div>
        <div class="container">
            <p class="left-paragraph"><strong>Breed: </strong> {dg.name}</p>
            {#if dg.weight.metric}
            <p class="left-paragraph"><strong>Weight: </strong> {dg.weight.metric} kg</p>
            {:else}
            <p class="left-paragraph"><strong>Weight: </strong> {dg.weight} kg</p>
            {/if}
            <p class="left-paragraph"><strong>Life Span: </strong>{dg.life_span}</p>
            <p class="left-paragraph"><strong>Temperament: </strong>{dg.temperament}</p>
          </div>
    {/each}
</div> -->

<div class="body">
    <h1>Favorite dogs</h1>
    <div class = dog-card>
        {#each $favouriteDogs as dg}
            <div class="saved-doggo-wrapper">
                <img class="saved-doggo-img" src={dg.url} alt="doggo" />
                <div class= "btns-container">
                    <button class="save-btn" on:click={() => saveDoggo(dg)}>
                        <img class="save-img" src="./image-outline.svg" alt= "save-icon"/>
                    </button>
                    <button class="trash-btn" on:click={() => deleteDoggo(dg)}>
                        <img class="trash-img" src="./trash-1.svg" alt= "trash-icon"/>
                    </button>
                </div>
                <h2><strong>{dg.name}</strong> </h2>
                {#if dg.weight.metric}
                <p class="left-paragraph"><strong>Weight: </strong> {dg.weight.metric} kg</p>
                {:else}
                <p class="left-paragraph"><strong>Weight: </strong> {dg.weight} kg</p>
                {/if}
                <p class="left-paragraph"><strong>Life Span: </strong>{dg.life_span}</p>
                <p class="left-paragraph"><strong>Temperament: </strong>{dg.temperament}</p>
            </div>
    {   /each}
    </div>
</div>
    






<style>
.saved-doggo-wrapper:last-child {
    margin-bottom: 50px;
}
.left-paragraph {
  margin: 1%; /* add margin between paragraphs */
  padding: 1%;
}
.btns-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* 2 columns with equal width */
    grid-gap: 5%; /* space between buttons */
    align-items: center; /* align buttons vertically */
    position: absolute;
    top: 0%;
    right: 0%;
    background: transparent;
    background-size: contain;
    cursor: pointer;
    z-index: 8;
}
.trash-img, .save-img {
    width: 22px;
    height: 26px;
    background: transparent;
    background-size: contain;
    cursor: pointer;
}

button {
    background: transparent;
}

.saved-doggo-wrapper {
    position: relative;
    overflow: hidden;
    padding: 0px;
    max-width: 100%;
    max-height: 100%;
    display: block; 
    background-color: rgb(255, 255, 255);
    border-radius: 25px;
    margin: 2%;
}

.saved-doggo-img {
    width: 100%;
    height: 100%;
    /* position: relative;
    object-fit: fill;
    z-index: 1;
    display: block;
    border-radius: 25px; */
}

.body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    overflow: scroll;
    z-index: 10;
}
</style>