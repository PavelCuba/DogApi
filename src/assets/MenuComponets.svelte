<script>
    let navIcon = "https://cdn-icons-png.flaticon.com/128/4254/4254068.png";

  

    let menu = [
      {
        name: "Home",
        link: "#",
      },
      {
        name: "About",
        link: "#",
      },
      {
        name: "Contact",
        link: "#",
      },
      
    ];
  </script>

<div class="Nav">
    <img src={navIcon} alt="Menu" />
    <ul>
      {#each menu as item}
        <li><a href={item.link}>{item.name}</a></li>
      {/each}
    </ul>
  </div>

