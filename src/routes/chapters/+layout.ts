import { getChapters } from "$lib/features/chapters/services/chapterService.svelte";
import { error } from "@sveltejs/kit";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async () => {
    const chapters = await getChapters();
    if (chapters) {
        return { chapters };
    }

    error(404, 'No chapters exist.')
}