<script lang="ts">
    import type { QuestionPreview } from '$lib/features/questions/question.types';
    import QuizQuestList from '$lib/features/questions/list/QuestList.svelte';
    import type { LayoutProps } from './$types';

    const { children, data }: LayoutProps = $props();

    const tempQuests: QuestionPreview[] = [
        {id: '123', number: 1, status: 'unanswered', type: 'regular'}
    ]

</script>

<h2>Question Layout!</h2>
{@render children()}
<QuizQuestList chapterId={data.chapter.id} quests={tempQuests}/>