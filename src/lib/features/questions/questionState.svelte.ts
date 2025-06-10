import { getContext, setContext } from "svelte";
import type { Question, QuestionPreview } from "./question.types";

class QuestionState {
    questions: readonly QuestionPreview[] = $state([]);
    selectedQuestion: Question | undefined = $state(undefined);

    constructor(questions: readonly QuestionPreview[], selectedQuestion?: Question) {
        this.questions = questions;
        this.selectedQuestion = selectedQuestion;
    }

    answer(question: Question) {
        if (question.id !== this.selectedQuestion?.id) {
            throw new Error('answer() is meant to be used on the same question.');
        }

        this.selectedQuestion = question;
        
        const questFromList = this.questions.find(x => x.id === question.id);
        if (!questFromList) {
            throw new Error('Could not find question from list to refresh');
        }

        questFromList.status = question.answeredOptionId === question.correctOptionId
            ? 'correct'
            : 'wrong';
    }

    hasFinishedQuestions: boolean = $derived(this.questions.every(q => q.status !== 'unanswered'))
}

const KEY = '$QuestionState';

export const getQuestionStateContext = () => {
    return getContext<QuestionState>(KEY);
}

export const setQuestionStateContext = () => {
    return setContext<QuestionState>(KEY, new QuestionState([]))
}