<script lang="ts">
    import QuestionDisplay from "$lib/features/questions/board/QuestionDisplay.svelte";
    import type { Question, QuestOptionType } from "$lib/features/questions/question.types";
    import { getQuestionStateContext as getQuestionState } from "$lib/features/questions/questionState.svelte";
    import type { PageProps } from "./$types";
    import type { AnswerQuestionRequest } from "./types";

    const { data }: PageProps = $props();

    const questionState = getQuestionState();
    $effect(() => {
        questionState.selectedQuestion = data.question;
    });

    const question = $derived(questionState.selectedQuestion);

    const onAnswer = async (option: QuestOptionType) => {
        const request: AnswerQuestionRequest = { optionId: option.id }; 
        const response = await fetch(`/chapters/${data.chapterId}/questions/${data.question.id}`, { 
            method: 'POST',
            body: JSON.stringify(request)
        });

        if (response.ok) {
            const questionResponse = await response.json() as Question;
            questionState.answer(questionResponse);
        }
    }
</script>

<QuestionDisplay {onAnswer} {question}/>