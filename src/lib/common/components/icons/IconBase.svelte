<script lang="ts">
    import type { Snippet } from "svelte";
    import type { IconProps } from "./IconProps";

    const { size = 34, children }: IconProps & { children: Snippet } = $props();
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#fff" width="{size}px" height="{size}px">
    {@render children()}
</svg>

<style>
    svg {
        display: block;
    }
</style>