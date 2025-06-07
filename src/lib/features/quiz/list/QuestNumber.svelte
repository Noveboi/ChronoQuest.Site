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
        --bg: rgb(20, 244, 0);
        background-color: var(--bg);

        &.skippable {
            --bg: rgb(20, 200, 0);
        }

        &.correct {
        }

        &.wrong {
        }
    }
</style>