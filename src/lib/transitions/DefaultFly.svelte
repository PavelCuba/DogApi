<script>
    import { fly } from 'svelte/transition';
</script>

<!-- LeftFly component -->
<div class="left-fly"
    in:fly="{{ x: -250, duration: 300, delay: 550 }}"
    out:fly="{{ x: 250, duration: 300, delay: 550 }}"
>
    <slot />
</div>