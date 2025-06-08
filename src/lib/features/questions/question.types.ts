export type QuestionType = 'regular' | 'skippable';
export type QuestionStatus = 'unanswered' | 'correct' | 'wrong';

export interface QuestionPreview {
    id: string,
    number: number,
    type: QuestionType,
    status: QuestionStatus
}

export interface Question {
    id: string,
    number: number,
    description: string,
    options: readonly QuestOption[]
}

export interface QuestOption {
    id: string
    title: string
}