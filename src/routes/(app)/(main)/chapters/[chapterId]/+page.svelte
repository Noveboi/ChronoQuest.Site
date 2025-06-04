<script lang="ts">
    import TheoryBoard from "$lib/features/chapters/TheoryBoard.svelte";
    import { onExit } from "$lib/common/hooks/onExit";
    import type { PageProps } from "./$types";
    import ChapterArrow from "$lib/features/chapters/ChapterArrow.svelte";

    let { data }: PageProps = $props();

    onExit(async () => await fetch(`/chapters/${data.chapter.id}`))

    const nextChapter = $derived(data.next);
    const previousChapter = $derived(data.previous);

    $inspect(nextChapter, previousChapter);
</script>

<div class="left-arrow">
    <ChapterArrow chapter={previousChapter}/>
</div>

<div class="right-arrow">
    <ChapterArrow chapter={nextChapter}/>
</div>

<TheoryBoard chapter={data.chapter}/>

<style>
    .left-arrow {
        position: absolute;
        left: 0;
        top: center;
        margin-left: 1rem;
    }

    .right-arrow {
        position: absolute;
        right: 0;
        top: center;
        margin-right: 1rem;
    }
</style>