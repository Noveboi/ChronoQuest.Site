import { api } from "$lib/common/backend";
import type { ChapterStats } from "$lib/features/stats/chapters/chapterStats.types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({fetch}) => {
    const stats = await api(fetch).get<ChapterStats[]>('chapters/stats');
    return { stats };
}