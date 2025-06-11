<script lang="ts">
    import { SvelteToast } from "@zerodevx/svelte-toast";
    import type { LayoutProps } from "./$types";
    import '../global.css'
    import { setBackgroundState } from "$lib/features/ui/backgroundState.svelte";

    const { children }: LayoutProps = $props();
    
    const bg = setBackgroundState();
    const style = $derived(`background: radial-gradient(ellipse at bottom right, ${bg.startColorCss}, ${bg.endColorCss}`);
</script>

<div class="gradient-background" {style}></div>
<div class="app-root">
    {@render children()}
</div>

<SvelteToast/>

<style lang="scss">
    .gradient-background{
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