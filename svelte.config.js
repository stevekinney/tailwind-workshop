import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import shiki from 'shiki';
import slug from 'rehype-slug';
import { mdsvex, escapeSvelte } from 'mdsvex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	rehypePlugins: [slug],
	layout: './src/lib/layout.svelte',
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await shiki.getHighlighter({ theme: 'poimandres' });
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang }));
			return `{@html \`${html}\` }`;
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter(),
		alias: {
			'$content/*': './src/content',
			'$lib/*': './src/lib',
			$components: './src/lib/components',
			'$components/*': './src/lib/components',
			'$utilities/*': './src/lib/utilities',
			$metadata: './src/lib/metadata.ts'
		}
	}
};

export default config;
