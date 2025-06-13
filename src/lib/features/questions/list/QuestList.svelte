<script lang="ts">
    import type { QuestionPreview } from "$lib/features/questions/question.types";
    import type { LinkSelector } from "../question.props";
    import QuestNumber from "./QuestNumber.svelte";

    type QuizTitleProps = { 
        quests: readonly QuestionPreview[],
        linkSelector: LinkSelector
    }

    const { quests, linkSelector }: QuizTitleProps = $props();
</script>

<div class="quest-container">
    {#each quests as quest, index}
        <QuestNumber 
            number={index + 1} 
            status={quest.status} 
            type={quest.type}
            link={linkSelector(quest)}/>
    {/each}
</div>

<style>
    .quest-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: white;
        padding: 0.5rem 2.5rem;
        border-radius: 10px;
        margin-top: 1.5rem;
        gap: 1rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    }
</style>