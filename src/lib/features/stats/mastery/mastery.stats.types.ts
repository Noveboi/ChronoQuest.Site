import type { Topic } from "$lib/features/questions/question.types"

export type MasteryHistory = {
    topic: Topic
    history: TopicMastery[]
}

export type TopicMastery = {
    utcDateTime: string,
    masteryLevel: number
}