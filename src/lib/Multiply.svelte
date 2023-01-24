<script>

  let count2 = 1
  const increment2 = () => {
    count2 *= 2;
  }
</script>

<button on:click={increment2}>
  Multiply is {count2}
</button>
