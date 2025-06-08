import { api } from '$lib/common/backend';
import type { UserMarker } from '$lib/features/user/UserMarker';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ depends, fetch, cookies }) => {
    depends('app:marker');

    const marker = await api(fetch).get<UserMarker>('/marker');
    return { marker }
}