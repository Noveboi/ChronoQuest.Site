import type { Question, QuestionPreview } from "$lib/features/questions/question.types";
import { validate } from 'uuid'


type QuestionSearchResult = {
    question: QuestionPreview,
    number: number,
    isUuid: boolean
}
export const getQuestionFromSearch = (number: string, questions: readonly QuestionPreview[]): QuestionSearchResult | undefined => {
    if (validate(number)) {
        const quest = questions.find(x => x.id === number);
        return quest ? {
            question: quest,
            number: questions.indexOf(quest) + 1,
            isUuid: true
        } : undefined;
    }

    const num = Number(number);
    if (Number.isNaN(num)) {
        return undefined;
    }

    const question = questions.at(num - 1);
    return question ? {
        question: question,
        number: num,
        isUuid: false
    } : undefined;
}