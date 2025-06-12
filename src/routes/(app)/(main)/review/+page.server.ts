import { api } from "$lib/common/backend";
import { ApplicationError, whenApplicationError } from "$lib/common/common";
import { toast } from "@zerodevx/svelte-toast";
import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
import type { ReviewMaterial } from "$lib/features/review/review.types";

export const load: PageServerLoad = async ({ fetch }) => {
    let hasError = false;

    try {
        const review = await api(fetch).get<ReviewMaterial>('/review');
        return { review };
    } catch (error) {
        whenApplicationError(error, errors => errors.forEach(e => toast.push(e.errorMessage)));
        hasError = true;
    }

    if (hasError) {
        redirect(307, '/');
    }
}