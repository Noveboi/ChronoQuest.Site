import { api } from "$lib/common/backend";
import type { QuestionStats } from "$lib/features/stats/questions/questionStats.types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({fetch}) => {
    const stats = await api(fetch).get<QuestionStats[]>('questions/stats');
    return { stats };
}