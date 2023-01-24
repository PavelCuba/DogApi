<script>
import FavouritesPage from "./lib/pages/FavouritesPage.svelte";
import MainPage from "./lib/pages/MainPage.svelte";
import DefaultFly from "./lib/transitions/DefaultFly.svelte";
import SettingsPage from "./lib/pages/SettingsPage.svelte";
import CollectionPage from "./lib/pages/CollectionPage.svelte";
import {Preferences} from "@capacitor/preferences";
import { SplashScreen } from "@capacitor/splash-screen";
    import { onMount } from "svelte";

// Hide the splash (you should do this on app launch)
onMount(() => {
  {
    SplashScreen.show({
        showDuration: 3000,
        autoHide: true,
    });
  }
});





let currentPage = "main";

async function setData(key, data) {
  await Preferences.set({ key, value: JSON.stringify(data) });
}

async function getData(key) {
  const data = await Preferences.get({ key });
  return JSON.parse(data.value);
}
</script>

{#if currentPage == "main"}
    <DefaultFly>
        <MainPage />
    </DefaultFly>
{:else if currentPage == "favourites"}
    <DefaultFly>
        <FavouritesPage />
    </DefaultFly>
{:else if currentPage == "collection"}
<DefaultFly>
    <CollectionPage />
</DefaultFly> 
{:else if currentPage == "settings"}
    <DefaultFly>
        <SettingsPage />
    </DefaultFly>
 
{/if}

<nav class="menu1">
    <button class:active={currentPage === 'main'} on:click={() => currentPage = "main"}>
      <img src="./home-page.svg" alt="Home Page"> 
      <span class="active-line"></span>
    </button>
    <button class:active={currentPage === 'favourites'} on:click={() => currentPage = "favourites"}>
      <img src="./Like.svg" alt="Favorites"> 
      <span class="active-line"></span>
    </button>
    <button class:active={currentPage === 'collection'} on:click={() => currentPage = "collection"}>
      <img src="./Collection.svg" alt="Help">
      <span class="active-line"></span> 
    </button>
    <button class:active={currentPage === 'settings'} on:click={() => currentPage = "settings"}>
      <img src="./Settings.svg" alt="Help"> 
      <span class="active-line"></span>
    </button>
  </nav>


  <style>
    .menu1 {
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        z-index: 10;
        background: #F9B5A5;
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
        border-radius: 96px;
        padding: 2px;
    }
    
    .menu1 button {
        background: transparent;
        font-weight: bold;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .menu1 button.active::before {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        height: 3px;
        background: #ffffff;
        border-radius: 3px;
    }
    </style>