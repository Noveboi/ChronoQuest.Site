import { api } from '$lib/common/backend';

export async function GET({fetch}) {
    return await api(fetch).send('/progress/chapters');
}