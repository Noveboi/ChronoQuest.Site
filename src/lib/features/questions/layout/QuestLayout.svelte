<script lang="ts">
    import type { QuestionPreview } from '$lib/features/questions/question.types';
    import QuestList from '$lib/features/questions/list/QuestList.svelte';
    import QuestBoard from '$lib/features/questions/board/QuestBoard.svelte';
    import QuizTitle from '$lib/features/questions/QuizTitle.svelte';
    import type { Snippet } from 'svelte';
    import type { LinkSelector } from '../question.props';

    type QuestLayoutProps = {
        children: Snippet,
        questions: readonly QuestionPreview[],
        title: string,
        linkSelector: LinkSelector
    }

    const { children, questions, title, linkSelector }: QuestLayoutProps = $props();

</script>

<div class="all-container">
    <div class="board-container">
        <QuizTitle>
            {title}
        </QuizTitle>
        <QuestBoard {children}/>
    </div>

    <div class="list-container">
        <QuestList {linkSelector} quests={questions}/>
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