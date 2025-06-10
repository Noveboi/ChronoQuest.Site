import { api } from "$lib/common/backend";
import type { MasteryHistory } from "$lib/features/stats/mastery/mastery.stats.types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
    const masteries = await api(fetch).get<MasteryHistory[]>('/mastery');
    return { masteries };
}