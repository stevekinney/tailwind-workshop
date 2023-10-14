import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import yaml from '@modyfi/vite-plugin-yaml';

export default defineConfig({
	plugins: [sveltekit(), yaml()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
