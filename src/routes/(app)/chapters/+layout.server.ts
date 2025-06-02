import type { LayoutServerLoad } from './$types';
import type { ChapterPreview, Chapters } from '$lib/features/chapters/chapters.types';

export const load: LayoutServerLoad = async (input) => {
    const { api } = input.locals
    
    const chapters = await api.get<Chapters>('/chapters') as readonly ChapterPreview[];
    return { chapters };
}