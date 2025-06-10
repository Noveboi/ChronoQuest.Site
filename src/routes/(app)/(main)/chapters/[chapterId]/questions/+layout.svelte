<script lang="ts">
    import type { LayoutProps } from "./$types";
    import QuestLayout from "$lib/features/questions/layout/QuestLayout.svelte";
    import { setQuestionStateContext } from "$lib/features/questions/questionState.svelte";
    import { getChapterState } from "$lib/features/chapters/chapterState.svelte";
    import FinishedQuestionsModal from "$lib/features/questions/FinishedQuestionsModal.svelte";

    const { children, data }: LayoutProps = $props();

    const chapter = $derived.by(() => {
        const chapter = data.chapters.find(x => x.id === data.chapterId)
        if (!chapter) {
            throw new Error(`Chapter with ID: ${data.chapterId} not found.`)
        }

        return chapter;
    });

    const questionState = setQuestionStateContext();
    const chapterState = getChapterState();

    questionState.questions = data.questions;
</script>

<FinishedQuestionsModal show={questionState.hasFinishedQuestions} nextChapter={chapterState.nextChapter}/>

<QuestLayout {chapter} questions={questionState.questions}>
    {@render children()}
</QuestLayout>