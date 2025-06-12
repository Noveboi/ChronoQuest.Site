import { api } from "$lib/common/backend";
import type { MasteryHistory } from "$lib/features/stats/mastery/mastery.stats.types";
import type { PerformanceForTopic } from "$lib/features/stats/performance/performance.types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
    const [masteries, performance] = await Promise.all([
        api(fetch).get<MasteryHistory[]>('/mastery'),
        api(fetch).get<PerformanceForTopic[]>('/performance')
    ])
    return { masteries, performance };
}