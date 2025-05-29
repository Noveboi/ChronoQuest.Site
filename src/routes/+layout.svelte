<script lang="ts">
    import { isAuthenticated } from '$lib/common/guards/routeGuard.svelte';
    import type { LayoutProps } from './$types';

    let { data, children }: LayoutProps = $props()

    $effect(() => isAuthenticated(data.url)())
</script>

<div class="gradient-background">
    {@render children()}
</div>

<style>
    .gradient-background{
        background: radial-gradient(ellipse at bottom right, var(--green), var(--blue));
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 100dvh;
        width: 100dvw;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>