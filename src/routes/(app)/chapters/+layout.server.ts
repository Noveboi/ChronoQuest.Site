import type { LayoutServerLoad } from './$types';
import type { ChapterPreview, Chapters } from '$lib/features/chapters/chapters.types';
import { api } from '$lib/common/backend';

export const load: LayoutServerLoad = async ({fetch}) => {
    const chapters = await api(fetch).get<Chapters>('/chapters') as readonly ChapterPreview[];
    return { chapters };
}