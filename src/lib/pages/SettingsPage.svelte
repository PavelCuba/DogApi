<script>
    import { onDestroy, onMount } from "svelte";
    import { dogs, fetchDogs, favouriteDogs, currentDogImage, getDogID} from "../stores/DogsStore";

    function deleteFavouriteDogs() {
        if (confirm("Are you sure you want to delete all saved dogs?")) {
        favouriteDogs.update(() => []);
        localStorage.removeItem("favDogos");
  }
}

</script>

<div class= "body">
    <div class="settings-page">
        <h2>Settings</h2>
        <button class="delete-favourites-btn" on:click={deleteFavouriteDogs}>Delete all saved dogs</button>
    </div>
</div>


<style>
    .body {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
    }
.delete-favourites-btn {
  background-color: #ff0000; /* red background */
  color: #fff; /* white text */
  padding: 12px 20px; /* give the button some padding */
  border-radius: 8px; /* round the edges */
  font-size: 1rem; /* set the font size */
  cursor: pointer; /* change the cursor to a pointer when hovering over the button */
}

.delete-favourites-btn:hover {
  background-color: #b30000; /* darken the background color when hovering */
}    
</style>