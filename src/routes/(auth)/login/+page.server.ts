import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

interface LoginResponse {
    errors: readonly string[]
}

export const load: PageServerLoad = async (input) => {
    return {
        
    }
}

export const actions: Actions = {
    default: async ({ request, locals}): Promise<LoginResponse> => {
        const { api } = locals;

        const data = await request.formData();
        const email = data.get('email')?.toString() ?? '';
        const password = data.get('password')?.toString() ?? '';

        try {
            await api.post('/login?useCookies=true', { email, password });
        } catch (err) {
            console.log('Caught error.', err)
            return { errors: ['Wrong username or password.']}
        }

        console.log('Logged in, redirecting to home page');
        throw redirect(303, '/')
    }
}