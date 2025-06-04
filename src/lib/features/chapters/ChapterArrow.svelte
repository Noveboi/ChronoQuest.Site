<script lang="ts">
    import Arrow from "$lib/common/components/Arrow.svelte";
    import type { ChapterPreview } from "./chapters.types";

    type ChapterArrowProps = { chapter: ChapterPreview | undefined}
    
    const { chapter }: ChapterArrowProps = $props();
</script>

{#if chapter}
    <Arrow to='/chapters/{chapter.id}'/>
{/if}