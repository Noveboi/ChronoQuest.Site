import { api } from "$lib/common/backend";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({fetch, params}) => {
    const chapter = await api(fetch).get<Chapter>(`/chapters/${params.chapterId}`)
    return { chapter }
}