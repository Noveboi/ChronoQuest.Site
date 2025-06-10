<script lang="ts">
    import type { QuestionPreview } from '$lib/features/questions/question.types';
    import QuestList from '$lib/features/questions/list/QuestList.svelte';
    import QuestBoard from '$lib/features/questions/board/QuestBoard.svelte';
    import QuizTitle from '$lib/features/quiz/QuizTitle.svelte';
    import type { Snippet } from 'svelte';
    import type { ChapterPreview } from '$lib/features/chapters/chapters.types';
    import FinishedQuestionsModal from '../FinishedQuestionsModal.svelte';

    type QuestLayoutProps = {
        children: Snippet,
        questions: readonly QuestionPreview[],
        chapter: ChapterPreview,
    }

    const { children, questions, chapter }: QuestLayoutProps = $props();

</script>

<div class="all-container">
    <div class="board-container">
        <QuizTitle>
            {chapter.title}
        </QuizTitle>
        <QuestBoard {children}/>
    </div>

    <div class="list-container">
        <QuestList chapterId={chapter.id} quests={questions}/>
    </div>
</div>

<style>
    .all-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 90%;
        width: 100%;
        padding-bottom: 1rem;
    }

    .board-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex: 1;
        width: 100%;
        gap: 1.5rem;
    }

    .list-container {
        min-width: 75%;
    }
</style>