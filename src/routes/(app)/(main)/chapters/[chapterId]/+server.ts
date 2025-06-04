import { api } from "$lib/common/backend";

// Stop reading chapter endpoint
export async function GET({ params, fetch }) {
    return await api(fetch).send(`/chapters/${params.chapterId}/stop-reading`, { method: 'GET' });
}