import { cookieName } from '$lib/features/auth/auth.constants';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({cookies}) => {
    const cookie = cookies.get(cookieName);
    if (cookie) {
        console.log('Redirecting authenticated user')
        redirect(307, '/');
    }
}