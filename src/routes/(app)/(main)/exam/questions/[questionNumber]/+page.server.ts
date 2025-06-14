import { api } from "$lib/common/backend";
import type { Question } from "$lib/features/questions/question.types";
import { error, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { getQuestionFromSearch } from "$lib/server/utils";

export const load: PageServerLoad = async ({ fetch, params, parent }) => {
    const { exam } = await parent();
    const found = getQuestionFromSearch(params.questionNumber, exam.questions);

    if (!found) {
        console.log(exam.questions)
        return error(404, `Question '${params.questionNumber}' does not exist.`);
    }

    if (found.isUuid) {
        redirect(307, `${found.number}`)
    }

    const question = await api(fetch).get<Question>(`/questions/${found.question.id}`)
    return { question, number: found.number };
}