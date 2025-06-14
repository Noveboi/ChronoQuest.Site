import { api } from '$lib/common/backend';

export async function POST({fetch}) {
    await api(fetch).get('/exit');
    return new Response();
}