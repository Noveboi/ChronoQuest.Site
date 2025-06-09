<script lang="ts">
    import type { QuestOption } from "../question.types";

    type OptionProps = {
        option: QuestOption
    }

    const { option }: OptionProps = $props();
</script>

<button class="option-style">{option.title}</button>

<style>
    .option-style {
        background-color: var(--orange);
        padding: 1rem;
        border: none;
        border-radius: 10px;
        color: white;
        font-size: 1.5rem;
        min-width: 10rem;
        transition: background-color 0.2s;
    }

    .option-style:hover {
        cursor: pointer;
        background-color: #af340b;
    }
</style>