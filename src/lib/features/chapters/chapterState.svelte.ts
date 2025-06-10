import { getContext, setContext } from "svelte";
import type { ChapterPreview } from "./chapters.types";

class ChapterState {
    selectedChapter: ChapterPreview | undefined = $state(undefined);
    previousChapter: ChapterPreview | undefined = $state(undefined);
    nextChapter: ChapterPreview | undefined = $state(undefined);
}

const KEY = "$ChapterState";
export const getChapterState = () => getContext<ChapterState>(KEY); 
export const setChapterState = () => setContext<ChapterState>(KEY, new ChapterState());