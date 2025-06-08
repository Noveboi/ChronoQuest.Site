import { cookieName } from "$lib/features/auth/auth.constants";
import { error, redirect, type Handle, type HandleFetch } from "@sveltejs/kit";

const unprotectedRoutes = ['login', 'register']

export const handleFetch: HandleFetch = async ({event, fetch, request}) => {
    const { cookies } = event;
    const cookie = cookies.get(cookieName);

    const notInUrl = (str: string) => !event.url.pathname.includes(str);

    if (!cookie && unprotectedRoutes.every(notInUrl)) {
        console.log('Unauthorized user, exiting and redirecting...')
        redirect(307, '/login');
    }

    if (cookie) {
        request.headers.set('Cookie', cookie);
    } 

    try {
        const response = await fetch(request);
        if (!response || response.status === 0) {
            return error(500, 'The back-end API has not been started...');
        }

        return response;
    } catch (err) {
        if (err instanceof TypeError && err.cause!.code === 'ECONNREFUSED' )  {
            console.log('Please start the back-end!')
            return error(500, 'The back-end API has not been started!')
        }
        return error(500, 'An unknown error has occured');
    }
}