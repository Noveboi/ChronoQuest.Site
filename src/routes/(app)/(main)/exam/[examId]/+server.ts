import { api } from '$lib/common/backend.js';
import type { AnswerQuestionRequest } from '$lib/features/questions/question.types';

export async function POST({fetch, request, params}) {
    const { optionId, questionId } = await request.json() as AnswerQuestionRequest;

    return await api(fetch).send(`/exams/${params.examId}/questions/${questionId}/answer/${optionId}`);
}