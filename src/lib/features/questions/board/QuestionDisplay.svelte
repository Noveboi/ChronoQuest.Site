<script lang="ts">
    import type { AnswerCallback } from "../question.props";
    import type { Question } from "../question.types";
    import QuestOption from "./QuestOption.svelte";

    type QuestionComponentProps = {
        question: Question | undefined,
        onAnswer: AnswerCallback
    }

    const { question, onAnswer }: QuestionComponentProps = $props();
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