import { api } from "$lib/common/backend";
import type { Chapter } from "$lib/features/chapters/chapters.types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch, params }) => {
    const chapter = await api(fetch).get<Chapter>(`/chapters/${params.id}`)

    return { chapter };
}