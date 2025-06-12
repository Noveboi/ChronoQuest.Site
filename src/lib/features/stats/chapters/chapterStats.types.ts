import type { SlimChapter } from "$lib/features/chapters/chapters.types"

export interface ChapterStats {
    chapter: SlimChapter,
    readingTimePerDay: ReadingTimePerDay[],
    totalReadingTime: number
}

export interface ReadingTimePerDay {
    date: string,
    totalSeconds: number
}