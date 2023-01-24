<script>
    import { fly } from 'svelte/transition';
</script>

<!-- RightFly component -->
<div class="right-fly"
    in:fly="{{ x: 250, duration: 300, delay: 550 }}"
    out:fly="{{ x: -250, duration: 300, delay: 550 }}"
>
    <slot />
</div>

<style>
    /* RightFly styles */
    .right-fly-enter, .right-fly-leave {
        transform: translateX(250px);
        transition: transform 300ms ease;
    }

    .right-fly-enter-active, .right-fly-leave-active {
        transform: translateX(0);
    }
</style>