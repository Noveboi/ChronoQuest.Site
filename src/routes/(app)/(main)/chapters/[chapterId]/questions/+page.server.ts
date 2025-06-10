import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({parent}) => {
    const { questions, chapterId } = await parent();
    if (questions.length > 0) {
        redirect(307, `/chapters/${chapterId}/questions/${questions[0].id}`)
    }
}