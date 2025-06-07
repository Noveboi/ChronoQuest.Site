export type QuestionType = 'regular' | 'skippable';
export type QuestionStatus = 'unanswered' | 'correct' | 'wrong';

export interface QuestionPreview {
    id: string,
    number: number,
    type: QuestionType,
    status: QuestionStatus
}