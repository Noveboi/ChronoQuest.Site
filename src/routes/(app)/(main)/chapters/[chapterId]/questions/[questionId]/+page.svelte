<script lang="ts">
    import QuestOption from "$lib/features/questions/board/Option.svelte";
    import type { PageProps } from "./$types";

    const { data }: PageProps = $props();

    const question = $derived(data.question);
</script>

<h2>Question {question.number}</h2>
<p>{question.description}</p>
<div class="option-container">
    {#each question.options as option}
        <QuestOption {option} />
    {/each}
</div>