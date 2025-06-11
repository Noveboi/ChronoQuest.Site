<script lang="ts">
    import { getBackgroundState } from "$lib/features/ui/backgroundState.svelte";
    import { onDestroy } from "svelte";
    import type { LayoutProps } from "./$types";

    const { data, children }: LayoutProps = $props();
    const bg = getBackgroundState();

    bg.startColor = 'blue';
    bg.endColor = 'orange';

    onDestroy(() => bg.reset());
</script>

{@render children()}