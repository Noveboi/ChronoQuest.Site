<script lang="ts">
    import ChapterReader from "$lib/features/chapters/ChapterReader.svelte";
    import { onExit } from "$lib/common/hooks/onExit";
    import type { PageProps } from "./$types";
    import ChapterArrow from "$lib/features/chapters/ChapterArrow.svelte";

    let { data }: PageProps = $props();

    onExit(async () => await fetch(`/chapters/${data.chapter.id}`))

    const nextChapter = $derived(data.next);
    const previousChapter = $derived(data.previous);
</script>

<div class="chapter-container">
    <ChapterArrow point='left' chapter={previousChapter}/>\
    <div class="content">
        <ChapterReader chapter={data.chapter}/>
    </div>
    <ChapterArrow point='right' chapter={nextChapter}/>
</div>

<style lang="scss">
    $spacing: 1rem;

    .chapter-container {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0 #{$spacing};
        gap: #{$spacing};
    }

    .content {
        flex: 1;
    }
</style>