import { api } from "$lib/common/backend";
import type { QuestionPreview } from "$lib/features/questions/question.types";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({depends, fetch, params}) => {
    depends('app:questions');

    const questions = await api(fetch).get<QuestionPreview[]>(`/chapters/${params.chapterId}/questions`);
    return { 
        questions, 
        chapterId: params.chapterId
    };
}