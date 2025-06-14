<script lang="ts">
    import { getBackgroundState } from "$lib/features/ui/backgroundState.svelte";
    import { onDestroy } from "svelte";
    import type { LayoutProps } from "./$types";
    import type { LinkSelector } from "$lib/features/questions/question.props";
    import type { QuestionPreview } from "$lib/features/questions/question.types";
    import QuestLayout from "$lib/features/questions/layout/QuestLayout.svelte";
    import { setQuestionStateContext } from "$lib/features/questions/questionState.svelte";

    const { data, children }: LayoutProps = $props();
    const bg = getBackgroundState();

    bg.startColor = 'blue';
    bg.endColor = 'orange';

    onDestroy(() => bg.reset());

    const questionState = setQuestionStateContext();
    const examLinkSelector: LinkSelector = (number: number) => 
        `/exam/questions/${number}`; 
</script>

<QuestLayout linkSelector={examLinkSelector} questions={data.exam.questions} title={'Exam'}>
    {@render children()}
</QuestLayout>
