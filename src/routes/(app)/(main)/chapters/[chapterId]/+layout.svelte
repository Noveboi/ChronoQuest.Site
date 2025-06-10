<script lang="ts">
    import { getChapterState } from "$lib/features/chapters/chapterState.svelte";
    import type { LayoutProps } from "./$types";

    const { data, children }: LayoutProps = $props(); 

    const state = getChapterState();
    $effect(() => {
        const chapters = data.chapters;
        
        const selectedChapter = chapters.find(c => c.id === data.chapterId);
        if (!selectedChapter) {
            throw new Error('Could not find chapter to select.');
        }

        state.selectedChapter = selectedChapter;
        state.previousChapter = chapters.find(c => c.order === selectedChapter.order - 1);
        state.nextChapter = chapters.find(c => c.order === selectedChapter.order + 1);
    })
</script>

{@render children()}