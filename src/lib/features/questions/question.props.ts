import type { QuestionPreview, QuestOptionType } from "./question.types";

export type LinkSelector = (question: QuestionPreview) => string;
export type AnswerCallback = (option: QuestOptionType) => Promise<void>;