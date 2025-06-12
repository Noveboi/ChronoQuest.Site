import type { QuestionStatus } from "../questions/question.types";

export interface Chapter {
    id: string,
    title: string,
    content: string,
    order: number
} 

export interface SlimChapter {
    id: string
    title: string
    topic: string
}

export interface ChapterPreview {
    id: string,
    title: string,
    topic: string,
    order: number,
    readSeconds: number,
    questions: ChapterPreviewQuestion[]
}

export interface ChapterPreviewQuestion {
    id: string,
    status: QuestionStatus
}

export type Chapters = readonly ChapterPreview[];