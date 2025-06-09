<script lang="ts">
    import type { LayoutProps } from "./$types";
    import QuestLayout from "$lib/features/questions/layout/QuestLayout.svelte";
    import type { QuestionPreview } from "$lib/features/questions/question.types";

    const { children, data }: LayoutProps = $props();

    const tempQuests: QuestionPreview[] = [
        {id: '1', number: 1, status: 'unanswered', type: 'regular'},
        {id: '2', number: 2, status: 'correct', type: 'regular'},
        {id: '3', number: 3, status: 'wrong', type: 'regular'},
        {id: '4', number: 4, status: 'unanswered', type: 'regular'},
        {id: '5', number: 5, status: 'correct', type: 'regular'},
        {id: '6', number: 6, status: 'unanswered', type: 'regular'},
        {id: '7', number: 7, status: 'correct', type: 'regular'},
        {id: '8', number: 8, status: 'wrong', type: 'regular'},
        {id: '9', number: 9, status: 'unanswered', type: 'skippable'},
        {id: '10', number: 10, status: 'unanswered', type: 'skippable'},
    ]

</script>

<QuestLayout {children} chapter={data.chapter} questions={tempQuests} />