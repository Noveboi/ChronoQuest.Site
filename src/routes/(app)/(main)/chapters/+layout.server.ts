import type { LayoutServerLoad } from './$types';
import type { ChapterPreview, Chapters } from '$lib/features/chapters/chapters.types';
import { api } from '$lib/common/backend';
import { error, redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ fetch, route }) => {
    const chapters = await api(fetch).get<Chapters>('/chapters') as readonly ChapterPreview[];
    if (chapters.length === 0) {
        error(404, 'No chapters found!')
    }

    if (route.id.endsWith('chapters')) {
        console.log('Redirecting user to first chapter.');

        const firstChapter = chapters[0];
        redirect(307, `/chapters/${firstChapter.id}`);
    }

    return { chapters };
}