export type QuestionType = 'regular' | 'skippable';
export type QuestionStatus = 'unanswered' | 'correct' | 'wrong';

export interface QuestionPreview {
    id: string
    number: number
    type: QuestionType
    status: QuestionStatus
}

export interface Question {
    id: string
    number: number
    content: string
    type: QuestionType
    options: readonly QuestOptionType[]
    answeredOptionId?: string,
    correctOptionId?: 
}

export interface QuestOptionType {
    id: string
    title: string
}