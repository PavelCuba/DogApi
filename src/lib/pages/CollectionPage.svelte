<script>
    import { onMount } from 'svelte';
    import axios from 'axios';
  
    let images = [];
    let breeds = [];
    let selected_breed = {};
    let current_image = {};
    let select; // adding variable here
  
    onMount(async () => {
      axios.defaults.headers.common["x-api-key"] = "live_OZU3SkEPG5fa6qMfJRTiCprON2o3v6kmNnNk1Z30iQQIgDe24kYa0lA32HNvpS8d";
  
      try {
        let response = await axios.get("https://api.thedogapi.com/v1/breeds/");
        breeds = response.data;
        console.log("-- (" + breeds.length + ") Breeds from TheDogAPI.com");
  
        // pick one to display initially
        selected_breed = breeds[0];
      } catch (err) {
        console.log(err);
      }
    });
  
    $: if (selected_breed) {
      getImages();
    }
  
    async function getImages() {
      try {
        let query_params = {
          breed_ids: selected_breed.id,
          limit: 10
        };
  
        let response = await axios.get("https://api.thedogapi.com/v1/images/search", {
          params: query_params
        });
  
        let pagination_count = response.headers["pagination-count"];
        images = response.data;
        current_image = images[0];
  
        console.log("-- (" + images.length + ") Images from TheDogAPI.com");
        console.log(pagination_count, "images available for this query.");
      } catch (err) {
        console.log(err);
      }
    }
  </script>

<div class="body">
    <div>
      <select bind:value={selected_breed} bind:this={select} >
          {#each breeds as breed}
            <option value={breed}>{breed.name}</option>
          {/each}
      </select>
    </div>
    <div class="masonry"> 
        <div class="item">
            {#each images as item, i}
              <img src={item.url} key={i}>
            {/each}
        </div>
    </div>
</div>
  
  <style>

select {
  width: 100%;
  height: 2rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1.1rem;
  box-sizing: border-box;
  display: flex;
  text-align: center;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  background: #FFFFFF;
}
  img {
        max-width: 48%;
        height: auto; 
        padding: 1px;
        margin: 1px;
        object-fit: contain;
        border-radius: 25px;

    }
.body {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        box-sizing: border-box;
    }

/* The Masonry Container */
.masonry {
  max-width: 768px;
  column-gap: 1em;
}

/* The Masonry Brick */
.item {
  padding: 1em;
  margin: 0 0 1.5em;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .masonry {
    column-count: 4;
  }
  img{
    max-width: 100%;
    padding: 1px;
    margin: 1px;
    object-fit: contain;

  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .masonry {
    column-count: 3;
  }
  img{
    max-width: 80%;
    padding: 1px;
    margin: 1px;
    object-fit: contain;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 747px) and (min-width: 520px) {
  .masonry {
    column-count: 2;
  }
}
  </style>
 