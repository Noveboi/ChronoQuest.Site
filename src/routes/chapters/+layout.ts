import { getChapters } from "$lib/features/chapters/services/chapterService.svelte";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async () => {
    const chapters = await getChapters();
    if (chapters) {
        return { chapters };
    }
}