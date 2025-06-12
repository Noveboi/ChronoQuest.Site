import { api } from "$lib/common/backend";
import type { Chapter } from "$lib/features/chapters/chapters.types";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch, params, parent }) => {
    const { chapters, marker } = await parent();

    if (marker.chapterId === params.chapterId && marker.questionId !== null){
        return redirect(307, `/chapters/${params.chapterId}/questions/${marker.questionId}`);
    }

    const chapter = await api(fetch).get<Chapter>(`/chapters/${params.chapterId}`);

    const previous = chapters?.find(x => x.order === chapter.order - 1);
    const next = chapters?.find(x => x.order === chapter.order + 1);

    return { chapter, previous, next };
}