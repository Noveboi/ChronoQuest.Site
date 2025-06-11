import type { Topic } from "$lib/features/questions/question.types";

export interface PerformanceForTopic {
    score: number,
    state: string,
    topic: Topic
}