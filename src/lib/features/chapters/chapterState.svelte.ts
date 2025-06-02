import { getContext, setContext } from "svelte";
import type { Chapter, ChapterPreview } from "./chapters.types";

type Chapters = readonly ChapterPreview[];

interface ChapterState {
    chapters: Readonly<Chapters> 
    selected: Readonly<Chapter> | null

    getChapters: () => Promise<Chapters>
    getChapter: (id: string) => Promise<Chapter>
    exitChapter: () => Promise<void>
};

class ChapterStateClass implements ChapterState {
    chapters: Chapters = $state<Chapters>([]);
    selected: Chapter | null = $state<Chapter | null>(null);

    getChapters = () => apiGet<ChapterPreview[]>('chapters');
    getChapter = async (id: string) => {
        const response = await apiGet<Chapter>(`chapters/${id}`);
        this.selected = response;
        return response;    
    }
    exitChapter = async () => {
        if (!this.selected) {
            console.warn('No chapter to exit from.')
            return;
        }
    
        await apiGet(`chapters/${this.selected.id}/stop-reading`);
    }
}

const DEFAULT_KEY = "$_chapter_state";

export const getChapterState = (key = DEFAULT_KEY): ChapterState => {
    return getContext<ChapterState>(key);
}

export const setChapterState = (key = DEFAULT_KEY): ChapterState => {
    const state = new ChapterStateClass();
    return setContext(key, state);
}