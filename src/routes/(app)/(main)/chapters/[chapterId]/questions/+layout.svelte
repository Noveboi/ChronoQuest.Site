<script lang="ts">
    import type { QuestionPreview } from '$lib/features/questions/question.types';
    import QuizQuestList from '$lib/features/questions/list/QuestList.svelte';
    import type { LayoutProps } from './$types';
    import QuestBoard from '$lib/features/questions/board/QuestBoard.svelte';
    import QuizTitle from '$lib/features/quiz/QuizTitle.svelte';

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

<div class="all-container">
    <div class="board-container">
        <QuizTitle>
            {data.chapter.title}
        </QuizTitle>
        <QuestBoard {children}/>
    </div>

    <div class="list-container">
        <QuizQuestList chapterId={data.chapter.id} quests={tempQuests}/>
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