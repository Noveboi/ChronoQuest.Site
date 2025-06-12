import type { QuestionPreview } from "../questions/question.types";

export interface Exam {
    id: string,
    questions: QuestionPreview[],
    timeLimitInSeconds: number
}