<script lang="ts">
    import type { QuestionPreview } from "$lib/features/questions/question.types";
    import QuestNumber from "./QuestNumber.svelte";

    type QuizTitleProps = { 
        chapterId: string
        quests: QuestionPreview[] 
    }

    const { quests, chapterId }: QuizTitleProps = $props();
</script>

<div class="quest-container">
    {#each quests as quest}
        <QuestNumber 
            number={quest.number} 
            status={quest.status} 
            type={quest.type}
            chapterId={chapterId}
            questionId={quest.id}/>
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