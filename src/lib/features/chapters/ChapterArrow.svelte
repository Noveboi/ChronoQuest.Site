<script lang="ts">
    import Arrow from "$lib/common/components/Arrow.svelte";
    import type { ChapterPreview } from "./chapters.types";

    type ChapterArrowProps = { 
        chapter: ChapterPreview | undefined,
        point?: 'right' | 'left'
    }
    
    const { chapter, point = 'right' }: ChapterArrowProps = $props();

    const disabled = $derived(chapter === undefined);
    const to = $derived(chapter 
        ? `/chapters/${chapter.id}`
        : ''
    );
</script>

<Arrow {point} {disabled} {to}/>