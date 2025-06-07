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
        gap: 1em;
    }
</style>