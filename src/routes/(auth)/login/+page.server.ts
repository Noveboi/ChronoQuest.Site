import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { api } from "$lib/common/backend";
import { setCookie } from "$lib/server/inteceptors/set-cookie.interceptor";
import { elasticIn } from "svelte/easing";

interface LoginResponse {
    errors: readonly string[]
}

export const actions: Actions = {
    default: async ({ request, fetch }): Promise<LoginResponse> => {
        const data = await request.formData();
        const email = data.get('email')?.toString() ?? '';
        const password = data.get('password')?.toString() ?? '';

        const login = api(fetch, {
            useInterceptors: [setCookie()]
        })

        try {
            await login.post('/login?useCookies=true', { email, password });
        } catch (err) {
            return { errors: ['Wrong username or password.']}
        }
    
        console.log('Logged in, redirecting to home page');
        redirect(303, '/')
    }
}