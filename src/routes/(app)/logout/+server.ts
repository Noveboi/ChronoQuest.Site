import { api } from '$lib/common/backend.js';
import { cookieName } from '$lib/features/auth/auth.constants';

export async function POST({ cookies, fetch }) {
    await api(fetch).get('/exit');

    console.log('Logging out.')
    cookies.delete(cookieName, {path: '/'});

    return new Response();
}