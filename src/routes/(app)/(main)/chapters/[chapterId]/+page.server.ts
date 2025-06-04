import { api } from "$lib/common/backend";
import type { Chapter } from "$lib/features/chapters/chapters.types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch, params, parent }) => {
    const chapter = await api(fetch).get<Chapter>(`/chapters/${params.chapterId}`)
    const chapters = (await parent()).chapters;

    const previous = chapters?.find(x => x.order === chapter.order - 1)
    const next = chapters?.find(x => x.order === chapter.order + 1)

    console.log('Previous', previous)
    console.log('Next', next)

    return { chapter, previous, next };
}