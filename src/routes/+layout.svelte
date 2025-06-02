<script lang="ts">
    import { SvelteToast } from "@zerodevx/svelte-toast";
    import type { LayoutProps } from "./$types";
    import './global.css'

    const { children }: LayoutProps = $props();
</script>

<div class="gradient-background"></div>
<div class="app-root">
    {@render children()}
</div>

<SvelteToast/>

<style lang="scss">
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
</style>