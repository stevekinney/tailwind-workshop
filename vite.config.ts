import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import type { Plugin } from 'vite';

export const workspacePath = (): Plugin => {
	const virtualModuleId = 'virtual:workspace';
	const resolvedVirtualModuleId = '\0' + virtualModuleId;

	const workspace = new URL('.', import.meta.url);

	return {
		name: 'vite-plugin-workspace',
		resolveId(id) {
			if (id === virtualModuleId) {
				return resolvedVirtualModuleId;
			}
		},
		load(id) {
			if (id === resolvedVirtualModuleId) {
				return `export default function (path) { return new URL(path, "${workspace.href}").pathname; }`;
			}
		}
	};
};

export default defineConfig({
	plugins: [sveltekit(), workspacePath()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
