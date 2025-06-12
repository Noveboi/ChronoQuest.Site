import type { Topic } from "$lib/features/questions/question.types";

export interface QuestionStats {
    topic: Topic,
    correctAnswersPercentage: number,
    averageAnswerTimeInSeconds: number
}