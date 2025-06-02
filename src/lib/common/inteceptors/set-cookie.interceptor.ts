import { cookieName } from "$lib/features/auth/auth.constants";
import type { InterceptorFn } from "../backend";

export const setCookieInterceptor = (): InterceptorFn => {
    return (resp, { cookies }) => {
        if (resp.status !== 200) 
            return;


        const cookieHeaders = resp.headers.getSetCookie();
        if (cookieHeaders.length === 0) {
            return;
        }

        console.log('Setting cookie...');
        const [cookieHeader] = cookieHeaders;

        const [cookie, ...options] = cookieHeader.split(';');
        const [name, value] = cookie.split('='); 

        if (name !== cookieName) {
            throw new Error(`Cookie name '${name}' is invalid. Please use '${cookieName}'`);
        }

        const expiration = options.find(x => x.includes('expires'));
        if (!expiration) {
            throw new Error('Cookie "expires" is required but was not found')
        }
        const [_, expirationDate] = expiration.split('=')

        cookies.set(name, value, {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            path: '/',
            expires: new Date(expirationDate)
        })
    }
} 