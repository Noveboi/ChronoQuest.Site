import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { api } from "$lib/common/backend";

interface RegisterResponse {
    errors: readonly string[]
}

export const actions: Actions = {
    default: async ({ request, fetch }): Promise<RegisterResponse> => {
        const data = await request.formData();
        const email = data.get('email')?.toString() ?? '';
        const password = data.get('password')?.toString() ?? '';

        try {
            await api(fetch).post('/register', { email, password });
        } catch (err) {
            console.log('Caught error.', err)
            return { errors: ['Could not register account.']}
        }

        redirect(303, '/login')
    }
}