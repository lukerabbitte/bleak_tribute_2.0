import { getPoemData } from '@/lib/utils/loadMarkdown';

export async function load({ params }) {
    const { slug } = params;
    const poemData = await getPoemData(slug);

    if (!poemData) {
        return {
            status: 404,
            error: new Error('Poem not found'),
        };
    }

    return {
        props: {
            poemData,
        },
    };
}
