import { api } from '$lib/common/backend';
import type { AnswerQuestionRequest } from './types';

export async function POST({fetch, params, request}) {
    const { optionId } = await request.json() as AnswerQuestionRequest;

    if (!optionId || typeof optionId !== 'string') {
        throw new Error('Expected string property `optionId`')
    }

    return await api(fetch).send(`/questions/${params.questionId}/answer/${optionId}`, {
        method: 'GET',
    })
}