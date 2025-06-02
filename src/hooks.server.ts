import { cookieName } from "$lib/features/auth/auth.constants";
import type { HandleFetch } from "@sveltejs/kit";

export const handleFetch: HandleFetch = async ({event, fetch, request}) => {
    const { cookies } = event;
    const cookie = cookies.get(cookieName);

    if (cookie) {
        request.headers.set('Cookie', cookie);
    }

    return fetch(request);
}