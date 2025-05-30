<script lang="ts">
    import { isAuthenticated } from '$lib/common/guards/routeGuard.svelte';
    import { auth, logout } from '$lib/features/auth/auth.svelte';
    import type { LayoutProps } from './$types';
    import { SvelteToast } from '@zerodevx/svelte-toast';

    let { data, children }: LayoutProps = $props()
    $effect(() => isAuthenticated(data.url)())
</script>

<div class="gradient-background"></div>

<div class="app-root">
    {#if auth.isAuthenticated}
        <button type="button" style="position: absolute" onclick={logout}>Logout</button>
    {/if}
    
    <main class="content">
        {@render children()}
    </main>
</div>

<SvelteToast options={{
    
}}/>

<style>
    .gradient-background{
        background: radial-gradient(ellipse at bottom right, var(--green), var(--blue));
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 100dvh;
        width: 100dvw;
        margin: 0;
        z-index: -1;
        position: fixed;
    }

    .app-root {
        padding: 0;
        margin: 0;
        height: 100dvh;
        width: 100dvw;
        display: flex;
        flex-direction: column;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
    }
</style>