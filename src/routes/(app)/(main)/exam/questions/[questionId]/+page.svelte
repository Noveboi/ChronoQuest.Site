<script lang="ts">
    import QuestionDisplay from "$lib/features/questions/board/QuestionDisplay.svelte";
    import type { AnswerCallback } from "$lib/features/questions/question.props";
    import type { Question, QuestOptionType } from "$lib/features/questions/question.types";
    import { getQuestionStateContext } from "$lib/features/questions/questionState.svelte";
    import type { AnswerQuestionRequest } from "../../../chapters/[chapterId]/questions/[questionId]/types";
    import type { PageProps } from "./$types";

    const { data }: PageProps = $props();
    const questionState = getQuestionStateContext();
    $effect(() => {
        questionState.selectedQuestion = data.question;
    });

    const question = $derived(questionState.selectedQuestion);

    const onAnswer: AnswerCallback = async (option: QuestOptionType) => {
        const request: AnswerQuestionRequest = { optionId: option.id }; 
        const response = await fetch(`/exam/questions/${data.question.id}`, { 
            method: 'POST',
            body: JSON.stringify(request)
        });

        if (response.ok) {
            const questionResponse = await response.json() as Question;
            questionState.answer(questionResponse);
        }
    }
</script>

<QuestionDisplay {question} {onAnswer} />