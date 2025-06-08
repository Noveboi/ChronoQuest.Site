import type { Question } from "$lib/features/questions/question.types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({params}) => {
    const question: Question = { 
        id: '123',
        description: params.questionId,
        number: 1,
        options: [
            {id: '1', title: 'Howdy, partner!'},
            {id: '2', title: 'Whats cooking!'}
        ]
    }

    return { question };
}