import { api } from "$lib/common/backend";
import type { QuestionPreview } from "$lib/features/questions/question.types";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({fetch, params}) => {
    const questions = await api(fetch).get<QuestionPreview[]>(`/chapters/${params.chapterId}/questions`);
    return { questions };
}