import type { LayoutServerLoad } from './$types';
import { cookieName } from '$lib/features/auth/auth.constants';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ cookies }) => {
    const cookie = cookies.get(cookieName);
    if (!cookie) {
        console.log('User is not not authenticated, redirecting to login.')
        throw redirect(307, '/login');
    }

    console.log('User is authenticated');
}