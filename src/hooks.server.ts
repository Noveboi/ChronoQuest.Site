import { api } from "$lib/common/backend";
import { cookieName } from "$lib/features/auth/auth.constants";
import { redirect, type Handle, type HandleFetch } from "@sveltejs/kit";

const unprotectedRoutes = ['login', 'register']

export const handle: Handle = async ({event, resolve}) => {
    const cookie = event.cookies.get(cookieName);
    const notInUrl = (str: string) => !event.url.pathname.includes(str);

    if (!cookie && unprotectedRoutes.every(notInUrl)) {
        console.log('Unauthorized user, exiting and redirecting...')
        await api(event.fetch).get('/exit');

        redirect(307, '/login');
    }
    
    return resolve(event);
}

export const handleFetch: HandleFetch = async ({event, fetch, request}) => {
    const { cookies } = event;
    const cookie = cookies.get(cookieName);

    if (cookie) {
        request.headers.set('Cookie', cookie);
    }

    return fetch(request);
}