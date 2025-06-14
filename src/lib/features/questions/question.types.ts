export type QuestionType = 'regular' | 'skippable';
export type QuestionStatus = 'unanswered' | 'correct' | 'wrong';

export interface QuestionPreview {
    id: string
    type: QuestionType
    status: QuestionStatus
}

export interface Question {
    id: string
    content: string
    type: QuestionType
    topic: Topic
    options: readonly QuestOptionType[]
    answeredOptionId?: string,
    correctOptionId?: string
}

export interface QuestOptionType {
    id: string
    title: string
}

export interface Topic {
    id: string
    name: string
}

export type AnswerQuestionRequest = {
    questionId: string
    optionId: string
}

export type AnswerQuestionResponse = {
    isCorrect: boolean;
}