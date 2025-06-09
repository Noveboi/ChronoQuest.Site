<script lang="ts">
    import Navigate from "$lib/common/components/Navigate.svelte";
    import Title from "../../common/components/Title.svelte";
    import type { Chapter } from "./chapters.types";

    const { chapter }: { chapter: Chapter } = $props();
</script>

{#if chapter}
    <div class="background chapter-container">
        <Title size='large' color='dark'>{chapter.title}</Title>
        <p>
            {@html chapter.content}
        </p>
        <Navigate to="/chapters/{chapter.id}/questions">Take the Quiz</Navigate>
    </div>
{:else}
    <p>Not Found</p>
{/if}


<style>
    .background {
        background-color: white;
        padding-bottom: 2rem;
        border-radius: 2em;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    }

    .chapter-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: top;
        overflow-y: auto;
        height: 85dvh;
    }

    p {
        font-size: 1.4em;
        padding: 0em 1.2em 0em 1.2em;
    }
</style>