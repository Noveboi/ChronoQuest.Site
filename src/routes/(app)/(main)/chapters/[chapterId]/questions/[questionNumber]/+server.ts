import { api } from '$lib/common/backend';
import type { AnswerQuestionRequest } from '$lib/features/questions/question.types';

export async function POST({fetch, params, request}) {
    const { optionId, questionId } = await request.json() as AnswerQuestionRequest;

    if (!optionId || typeof optionId !== 'string') {
        throw new Error('Expected string property `optionId`')
    }

    return await api(fetch).send(`/chapters/${params.chapterId}/questions/${questionId}/answer/${optionId}`, {
        method: 'GET',
    })
}