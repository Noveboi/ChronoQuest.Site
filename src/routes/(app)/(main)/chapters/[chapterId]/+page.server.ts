import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch, params, parent }) => {
    const { chapter, chapters } = await parent();

    const previous = chapters?.find(x => x.order === chapter.order - 1)
    const next = chapters?.find(x => x.order === chapter.order + 1)

    return { chapter, previous, next };
}