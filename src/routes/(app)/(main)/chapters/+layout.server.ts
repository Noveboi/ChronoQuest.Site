import type { LayoutServerLoad } from './$types';
import type { ChapterPreview, Chapters } from '$lib/features/chapters/chapters.types';
import { api } from '$lib/common/backend';
import { error } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ fetch }) => {
    const chapters = await api(fetch).get<Chapters>('/chapters') as readonly ChapterPreview[];
    
    if (chapters.length === 0) {
        error(404, 'No chapters found!')
    }

    return { chapters };
}