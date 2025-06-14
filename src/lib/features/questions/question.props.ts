import type { QuestionPreview, QuestOptionType } from "./question.types";

export type LinkSelector = (number: number) => string;
export type AnswerCallback = (option: QuestOptionType) => Promise<void>;