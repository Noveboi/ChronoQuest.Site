<script lang="ts">
    import type { LayoutProps } from "./$types";
    import QuestLayout from "$lib/features/questions/layout/QuestLayout.svelte";

    const { children, data }: LayoutProps = $props();

    const chapter = $derived.by(() => {
        const chapter = data.chapters.find(x => x.id === data.chapterId)
        if (!chapter) {
            throw new Error(`Chapter with ID: ${data.chapterId} not found.`)
        }

        return chapter;
    });
</script>

<QuestLayout {chapter} questions={data.questions}>
    {@render children()}
</QuestLayout>