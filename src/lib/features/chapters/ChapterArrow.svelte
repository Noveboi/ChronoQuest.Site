<script lang="ts">
    import Arrow from "$lib/common/components/Arrow.svelte";
    import type { ChapterPreview } from "./chapters.types";

    type ChapterArrowProps = { 
        chapter: ChapterPreview | undefined,
        point?: 'right' | 'left'
    }
    
    const { chapter, point = 'right' }: ChapterArrowProps = $props();
</script>

{#if chapter}
    <Arrow {point} to='/chapters/{chapter.id}'/>
{/if}