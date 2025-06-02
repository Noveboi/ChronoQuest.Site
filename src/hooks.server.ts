import { initApiService } from "$lib/common/backend";
import { setCookieInterceptor } from "$lib/common/inteceptors/set-cookie.interceptor";
import { cookieName } from "$lib/features/auth/auth.constants";
import type { Handle, HandleFetch } from "@sveltejs/kit";

export const handle: Handle = async ({event, resolve}) => {
    event.locals.api = initApiService(event, 'http://localhost:5198')

    event.locals.api.addInterceptor(setCookieInterceptor());

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