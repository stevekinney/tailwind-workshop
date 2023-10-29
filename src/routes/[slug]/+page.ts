import { error } from '@sveltejs/kit';
import workspace from 'virtual:workspace';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;
	const filename = `${slug}.md`;
	const filePath = workspace(`src/content/${filename}`);

	const content = await import(`../../content/${slug}.md`);

	if (!content || !content.default) {
		throw error(404, `Could not find content file: ${filename}`);
	}

	return {
		content: content.default,
		metadata: content.metadata,
		slug,
		filePath
	};
};
