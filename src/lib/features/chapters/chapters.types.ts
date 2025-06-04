export interface Chapter {
    id: string,
    title: string,
    content: string,
    order: number
} 

export interface ChapterPreview {
    id: string,
    title: string,
    order: number
}

export type Chapters = readonly ChapterPreview[];