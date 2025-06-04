import { api } from '$lib/common/backend';
import { cookieName } from '$lib/features/auth/auth.constants';
import type { UserMarker } from '$lib/features/user/UserMarker';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ depends, fetch, cookies }) => {
    depends('app:marker');

    try {
        const marker = await api(fetch).get<UserMarker>('/marker');
        return { marker }
    } catch (err) {
        console.log('Caught error')
        redirect(307, '/login')
    }
}