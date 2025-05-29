import { apiGet } from "$lib/common/services/apiService"
import type { Chapter, ChapterPreview } from "../chapters.types"

// Store
interface ChapterState {
    selected: Chapter | null,
};

export const chapterState: ChapterState = $state({
    selected: null
});

// API Calls

export const getChapters = (): Promise<readonly ChapterPreview[]> =>
    apiGet<ChapterPreview[]>('chapters');

export const getChapter = async (id: string): Promise<Chapter> => {
    const response = await apiGet<Chapter>(`chapters/${id}`);
    chapterState.selected = response;
    return response;    
};

export const exitChapter = async (): Promise<void> => {
    if (!chapterState.selected) {
        console.warn('No chapter to exit from.')
        return;
    }

    await apiGet(`chapters/${chapterState.selected.id}/stop-reading`);
}