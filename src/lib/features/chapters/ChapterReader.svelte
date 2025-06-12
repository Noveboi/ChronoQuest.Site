<script lang="ts">
    import Navigate from "$lib/common/components/Navigate.svelte";
    import Reader from "../reading/Reader.svelte";
    import type { Chapter } from "./chapters.types";

    const { chapter }: { chapter: Chapter } = $props();
</script>

{#snippet takeQuiz()}
    <Navigate to="/chapters/{chapter.id}/questions">Take the Quiz</Navigate>
{/snippet}

<Reader content={chapter.content} title="{chapter.order}. {chapter.title}" footer={takeQuiz}/>