<script>
    import { auth } from '$lib/stores/auth.svelte';

    let { children } = $props()
</script>

<div class="gradient-background">
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
</div>

<style>
    .demo-layout-container {
        border: 1px solid black;
    }

    .auth { color: green; font-weight: bolder; }
    .authnt { color: red;}

    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    :root {
    --blue: #2875F9;
    --green: #28D223;
  }
  
    .gradient-background{
        background: radial-gradient(ellipse at bottom right, var(--blue), var(--green));
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 100vh;
        width: 100vw;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>