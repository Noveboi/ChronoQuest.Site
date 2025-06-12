import { api } from '$lib/common/backend';

export async function POST({fetch}) {
    await api(fetch).post('/exit');
    return new Response();
}