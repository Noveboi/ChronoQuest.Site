export interface User {
    username: string,
    marker: UserMarker
}

export interface UserMarker {
    chapterId: string | null,
    questionId: string | null,
    examId: string | null
}