import { api } from "$lib/common/backend";
import type { PageServerLoad } from "./$types";
import type { ReviewMaterial } from "$lib/features/review/review.types";

export const load: PageServerLoad = async ({ fetch }) => {
    const review = await api(fetch).get<ReviewMaterial>('/review');
    return { review };
}