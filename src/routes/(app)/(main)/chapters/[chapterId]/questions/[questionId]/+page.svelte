<script lang="ts">
    import { invalidate } from "$app/navigation";
    import QuestOption from "$lib/features/questions/board/Option.svelte";
    import type { QuestOptionType } from "$lib/features/questions/question.types";
    import type { PageProps } from "./$types";
    import type { AnswerQuestionRequest } from "./types";

    const { data }: PageProps = $props();

    const question = $derived(data.question);

    const onAnswer = async (option: QuestOptionType) => {
        const request: AnswerQuestionRequest = { optionId: option.id }; 
        const response = await fetch(`/chapters/${data.chapterId}/questions/${data.question.id}`, { 
            method: 'POST',
            body: JSON.stringify(request)
        });

        if (response.ok) {
            invalidate('app:questions');
            invalidate('app:question');
        }
    }
</script>

<div class="all-centered">
    <h2>Question {question.number}</h2>
    <p>{question.content}</p>
    <div class="option-container">
        {#each question.options as option}
            <QuestOption {question} {option} {onAnswer} />
        {/each}
    </div>
</div>

<style>
    .option-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        max-width: 25rem;
        margin-top: 2rem;
        overflow-y: hidden;
    }

    .all-centered::-webkit-scrollbar {
        display: none; 
    }

    .all-centered {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow-y: scroll;
        scrollbar-width: none; 
        -ms-overflow-style: none; 
    }

    h2 {
        font-size: 2rem;
    }
</style>