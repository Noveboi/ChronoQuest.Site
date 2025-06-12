import { api } from "$lib/common/backend";
import type { Question } from "$lib/features/questions/question.types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch, params }) => {
    const question = await api(fetch).get<Question>(`/questions/${params.questionId}`)
    return { question };
}