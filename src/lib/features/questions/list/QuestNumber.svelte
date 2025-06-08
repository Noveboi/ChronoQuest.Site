<script lang="ts">
    import type { QuestionStatus, QuestionType } from "$lib/features/questions/question.types";

    type QuestNumberProps = {
        number: number,
        type: QuestionType,
        status: QuestionStatus,
        questionId: string,
        chapterId: string,
    }

    const { number, type, status, questionId, chapterId }: QuestNumberProps = $props();

    const typeClass = $derived(type === 'skippable' ? 'skippable' : '');
    const statusClass = $derived.by(() => {
        switch (status) {
            case "correct": return 'correct';
            case "wrong": return 'wrong';
            default: return ''
        }
    })
</script>

<a href="/chapters/{chapterId}/questions/{questionId}">
    <div class="question-num {typeClass} {statusClass}">
        {number}
    </div>
</a>

<style lang="scss">
    .question-num {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        border: 0.2rem solid var(--light-green);
        padding: 1.5rem;
        border-radius: 10px;
        height: 1rem;
        width: 1rem;
        color: var(--light-green);
        font-size: 2em;
        font-weight: bold;

        &.skippable {
            background-color: white;
            border-color: var(--dark-green);
            color: var(--dark-green);
        }

        &.correct {
            background-color: var(--correct);
            border: none;
            color: white;
        }

        &.wrong {
            background-color: var(--error);
            border: none;
            color: white;
        }

    }
</style>