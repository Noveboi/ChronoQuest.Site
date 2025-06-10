<script lang="ts">
    import { invalidate } from "$app/navigation";
    import QuestOption from "$lib/features/questions/board/Option.svelte";
    import type { Question, QuestOptionType } from "$lib/features/questions/question.types";
    import { getQuestionStateContext as getQuestionState } from "$lib/features/questions/questionState.svelte";
    import type { PageProps } from "./$types";
    import type { AnswerQuestionRequest } from "./types";

    const { data }: PageProps = $props();

    const questionState = getQuestionState();
    $effect(() => {
        questionState.selectedQuestion = data.question;
    });

    const question = $derived(questionState.selectedQuestion);

    const onAnswer = async (option: QuestOptionType) => {
        const request: AnswerQuestionRequest = { optionId: option.id }; 
        const response = await fetch(`/chapters/${data.chapterId}/questions/${data.question.id}`, { 
            method: 'POST',
            body: JSON.stringify(request)
        });

        if (response.ok) {
            const question = await response.json() as Question;
            questionState.answer(question);
        }
    }

</script>

{#if question}
    <div class="all-centered">
        <h2>Question {question.number}</h2>
        <p>{question.content}</p>
        <div class="option-container">
            {#each question.options as option}
                <QuestOption {question} {option} {onAnswer} />
            {/each}
        </div>
    </div>
{/if}

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