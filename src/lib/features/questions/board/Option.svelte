<script lang="ts">
    import type { Question, QuestOptionType } from "../question.types";

    type OptionProps = {
        question: Question,
        option: QuestOptionType,
        onAnswer: (option: QuestOptionType) => Promise<void>
    }

    const { question, option, onAnswer }: OptionProps = $props();

    const onclick = $derived(() => onAnswer(option));
    const classes = $derived.by(() => {
        let str = '';
        if (question.correctOptionId === option.id) {
            str += ' correct-option';
        }

        if (question.answeredOptionId !== option.id)
            return str;

        str += question.answeredOptionId === question.correctOptionId
            ? ' answered-correct'
            : ' answered-wrong';

        return str;
    })

    const disabled = $derived(question.answeredOptionId !== undefined && question.answeredOptionId !== null);
</script>

<button type="button" class="option-style{classes}" {disabled} {onclick}>
    {option.title}
</button>

<style lang="scss">
    .option-style {
        background-color: var(--orange);
        padding: 1rem;
        border: none;
        border-radius: 10px;
        color: white;
        font-size: 1.5rem;
        min-width: 10rem;
        transition: background-color 0.2s;

        &:not([disabled]):hover {
            cursor: pointer;
            background-color: #af340b
        }

        &.answered-correct {
            background-color: var(--correct);
        }

        &.answered-wrong {
            background-color: var(--error);
        }

        &.correct-option {
            border: 3px solid var(--correct);
        }
    }
</style>