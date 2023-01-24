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

<style>
/* LeftFly styles */
.left-fly-enter, .left-fly-leave {
    transform: translateX(-250px);
    transition: transform 300ms ease;
}

.left-fly-enter-active, .left-fly-leave-active {
    transform: translateX(0);
}
</style>
