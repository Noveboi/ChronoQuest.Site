import { api } from "$lib/common/backend";
import type { Exam } from "$lib/features/exam/exam.types";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({fetch}) => {
    const exam = await api(fetch).get<Exam>('exam/test');
    return { exam };
}