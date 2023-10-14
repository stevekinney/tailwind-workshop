import { error } from '@sveltejs/kit';
import contents from '../contents.yaml';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const content = await import(`../../content/${params.slug}.md`);

		return {
			contents,
			content: content.default,
			metadata: content.metadata,
			slug: params.slug
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}.`);
	}
};
