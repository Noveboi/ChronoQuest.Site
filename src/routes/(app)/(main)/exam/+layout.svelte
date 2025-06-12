<script lang="ts">
    import { getBackgroundState } from "$lib/features/ui/backgroundState.svelte";
    import { onDestroy } from "svelte";
    import type { LayoutProps } from "./$types";
    import humanizeDuration from "humanize-duration";

    const { data, children }: LayoutProps = $props();
    const bg = getBackgroundState();

    bg.startColor = 'blue';
    bg.endColor = 'orange';

    onDestroy(() => bg.reset());
</script>

<!-- You can remove this! -->
Time Limit: {humanizeDuration(data.exam.timeLimitInSeconds * 1000)}

{@render children()}