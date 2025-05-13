<script>
    import { auth } from '$lib/stores/auth.svelte';

    let { children } = $props()
</script>

<h2 class={auth.isAuthenticated ? 'auth' : 'authnt'}>
    {#if auth.isAuthenticated}
        Authenticated 😁🥳
    {:else}
        Not Authenticated 😭
    {/if}
</h2>
<div class="demo-layout-container">
    {@render children()}
</div>

<style>
    .demo-layout-container {
        padding: 2rem;
        border: 1px solid black;
    }

    .auth { color: green; font-weight: bolder; }
    .authnt { color: red;}
</style>