import type { Question } from "$lib/features/questions/question.types";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({params}) => {
    const question: Question = { 
        id: '123',
        description: params.questionId,
        number: 1,
        options: [
            {id: '1', title: 'Option 1'},
            {id: '2', title: 'Option 2'},
            {id: '3', title: 'Option 3'},
            {id: '4', title: 'Option 4'}
        ]
    }

    return { question };
}